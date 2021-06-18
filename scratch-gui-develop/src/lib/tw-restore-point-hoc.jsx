import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import {showStandardAlert, closeAlertWithId} from '../reducers/alerts';
import {getIsShowingProject} from '../reducers/project-state';
import bindAll from 'lodash.bindall';
import VM from 'scratch-vm';
import RestorePointAPI from './tw-restore-point-api';

/**
 * @fileoverview
 * HOC responsible for automatically creating restore points.
 */

const INTERVAL = 1000 * 60 * 5;

let bailed = false;

const messages = defineMessages({
    error: {
        defaultMessage: 'Could not restore point; restore points are now disabled. Regular project saves are unaffected.\n\nDebug: {error}',
        description: 'Alert displayed when restore point creation failed',
        id: 'tw.restorePoint.createFail'
    }
});

const TWRestorePointHOC = function (WrappedComponent) {
    class RestorePointComponent extends React.Component {
        constructor (props) {
            super(props);
            bindAll(this, [
                'createRestorePoint'
            ]);
            this.timeout = null;
        }
        componentDidUpdate (prevProps) {
            if (bailed) {
                return;
            }
            if (
                this.props.projectChanged !== prevProps.projectChanged ||
                this.props.isShowingProject !== prevProps.isShowingProject
            ) {
                if (this.props.projectChanged && this.props.isShowingProject) {
                    // Project was modified; queue restore point.
                    this.timeout = setTimeout(this.createRestorePoint, INTERVAL);
                } else {
                    // Project was saved; abort restore point.
                    clearTimeout(this.timeout);
                    this.timeout = null;
                }
            }
        }
        componentWillUnmount () {
            clearTimeout(this.timeout);
        }
        async createRestorePoint () {
            try {
                this.props.onAutosavingStart();
                await RestorePointAPI.save(this.props.vm);
            } catch (error) {
                bailed = true;
                // eslint-disable-next-line no-alert
                alert(this.props.intl.formatMessage(messages.error, {
                    error
                }));
            }
            this.timeout = null;
            // Intentional delay.
            setTimeout(() => {
                this.props.onAutosavingFinish();
                if (this.timeout === null && !bailed && this.props.projectChanged && this.props.isShowingProject) {
                    this.timeout = setTimeout(this.createRestorePoint, INTERVAL);
                }
            }, 250);
        }
        render () {
            const {
                /* eslint-disable no-unused-vars */
                intl,
                projectChanged,
                onAutosavingStart,
                onAutosavingFinish,
                vm,
                /* eslint-enable no-unused-vars */
                ...props
            } = this.props;
            return (
                <WrappedComponent
                    {...props}
                />
            );
        }
    }
    RestorePointComponent.propTypes = {
        intl: intlShape,
        isShowingProject: PropTypes.bool,
        projectChanged: PropTypes.bool,
        onAutosavingStart: PropTypes.func,
        onAutosavingFinish: PropTypes.func,
        vm: PropTypes.instanceOf(VM)
    };
    const mapStateToProps = state => ({
        isShowingProject: getIsShowingProject(state.scratchGui.projectState.loadingState),
        projectChanged: state.scratchGui.projectChanged,
        vm: state.scratchGui.vm
    });
    const mapDispatchToProps = dispatch => ({
        onAutosavingStart: () => dispatch(showStandardAlert('twAutosaving')),
        onAutosavingFinish: () => dispatch(closeAlertWithId('twAutosaving'))
    });
    return injectIntl(connect(
        mapStateToProps,
        mapDispatchToProps
    )(RestorePointComponent));
};

export {
    TWRestorePointHOC as default
};
