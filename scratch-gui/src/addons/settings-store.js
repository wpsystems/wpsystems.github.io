/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import addons from './addon-manifests';
import upstreamMeta from './upstream-meta.json';
import EventTargetShim from './event-target';

const SETTINGS_KEY = 'tw:addons';
const VERSION = 1;

class SettingsStore extends EventTargetShim {
    constructor () {
        super();
        this.store = this.createEmptyStore();
    }

    /**
     * @private
     */
    createEmptyStore () {
        const result = {};
        for (const addonId of Object.keys(addons)) {
            result[addonId] = {};
        }
        return result;
    }

    readLocalStorage () {
        const base = this.store;
        try {
            const local = localStorage.getItem(SETTINGS_KEY);
            if (local) {
                const result = JSON.parse(local);
                if (result && typeof result === 'object' && result._ === VERSION) {
                    for (const key of Object.keys(result)) {
                        if (base.hasOwnProperty(key)) {
                            const value = result[key];
                            if (value && typeof value === 'object') {
                                base[key] = value;
                            }
                        }
                    }
                }
            }
        } catch (e) {
            // ignore
        }
        this.store = base;
    }

    /**
     * @private
     */
    saveToLocalStorage () {
        try {
            const result = {
                _: VERSION
            };
            for (const addonId of Object.keys(addons)) {
                const data = this.getAddonStorage(addonId);
                if (Object.keys(data).length > 0) {
                    result[addonId] = data;
                }
            }
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(result));
        } catch (e) {
            // ignore
        }
    }

    /**
     * @private
     */
    getAddonStorage (addonId) {
        if (this.store[addonId]) {
            return this.store[addonId];
        }
        throw new Error(`Unknown addon store: ${addonId}`);
    }

    /**
     * @private
     */
    getAddonManifest (addonId) {
        if (addons[addonId]) {
            return addons[addonId];
        }
        throw new Error(`Unknown addon: ${addonId}`);
    }

    /**
     * @private
     */
    getAddonSettingObject (manifest, settingId) {
        if (!manifest.settings) {
            return null;
        }
        for (const setting of manifest.settings) {
            if (setting.id === settingId) {
                return setting;
            }
        }
        return null;
    }

    getAddonEnabled (addonId) {
        const storage = this.getAddonStorage(addonId);
        if (storage.hasOwnProperty('enabled')) {
            return storage.enabled;
        }
        const manifest = this.getAddonManifest(addonId);
        return !!manifest.enabledByDefault;
    }

    getAddonSetting (addonId, settingId) {
        const storage = this.getAddonStorage(addonId);
        const manifest = this.getAddonManifest(addonId);
        const settingObject = this.getAddonSettingObject(manifest, settingId);
        if (!settingObject) {
            throw new Error(`Unknown setting: ${settingId}`);
        }
        if (storage.hasOwnProperty(settingId)) {
            return storage[settingId];
        }
        return settingObject.default;
    }

    /**
     * @private
     */
    getDefaultSettings (addonId) {
        const manifest = this.getAddonManifest(addonId);
        const result = {};
        for (const {id, default: value} of manifest.settings) {
            result[id] = value;
        }
        return result;
    }

    setAddonEnabled (addonId, value) {
        const storage = this.getAddonStorage(addonId);
        const manifest = this.getAddonManifest(addonId);
        const oldValue = this.getAddonEnabled(addonId);
        if (value === null) {
            value = !!manifest.enabledByDefault;
            delete storage.enabled;
        } else if (typeof value === 'boolean') {
            storage.enabled = value;
        } else {
            throw new Error('Enabled value is invalid.');
        }
        this.saveToLocalStorage();
        if (value !== oldValue) {
            const reloadRequired = value ? !manifest.dynamicEnable : !manifest.dynamicDisable;
            this.dispatchEvent(new CustomEvent('setting-changed', {
                detail: {
                    addonId,
                    settingId: 'enabled',
                    reloadRequired,
                    value
                }
            }));
        }
    }

    setAddonSetting (addonId, settingId, value) {
        const storage = this.getAddonStorage(addonId);
        const manifest = this.getAddonManifest(addonId);
        const settingObject = this.getAddonSettingObject(manifest, settingId);
        const oldValue = this.getAddonSetting(addonId, settingId);
        if (value === null) {
            value = settingObject.default;
            delete storage[settingId];
        } else {
            if (settingObject.type === 'boolean') {
                if (typeof value !== 'boolean') {
                    throw new Error('Setting value is invalid.');
                }
            } else if (settingObject.type === 'integer') {
                if (typeof value !== 'number') {
                    throw new Error('Setting value is invalid.');
                }
            } else if (settingObject.type === 'color') {
                if (typeof value !== 'string' || !/^#[0-9a-f]{6}$/i.test(value)) {
                    throw new Error('Setting value is invalid.');
                }
            } else if (settingObject.type === 'select') {
                if (!settingObject.potentialValues.some(potentialValue => potentialValue.id === value)) {
                    throw new Error('Setting value is invalid.');
                }
            } else {
                throw new Error('Setting object is of unknown type');
            }
            storage[settingId] = value;
        }
        this.saveToLocalStorage();
        if (value !== oldValue) {
            this.dispatchEvent(new CustomEvent('setting-changed', {
                detail: {
                    addonId,
                    settingId,
                    reloadRequired: settingObject.reloadRequired !== false,
                    value
                }
            }));
        }
    }

    applyAddonPreset (addonId, presetId) {
        const manifest = this.getAddonManifest(addonId);
        for (const {id, values} of manifest.presets) {
            if (id !== presetId) {
                continue;
            }
            const settings = {
                ...this.getDefaultSettings(addonId),
                ...values
            };
            for (const key of Object.keys(settings)) {
                this.setAddonSetting(addonId, key, settings[key]);
            }
            return;
        }
        throw new Error(`Unknown preset: ${presetId}`);
    }

    resetAllAddons () {
        for (const addon of Object.keys(addons)) {
            this.resetAddon(addon, true);
        }
        // In case resetAddon missed some properties, do a hard reset on storage.
        this.store = this.createEmptyStore();
        this.saveToLocalStorage();
    }

    resetAddon (addonId, resetEverything) {
        const storage = this.getAddonStorage(addonId);
        for (const setting of Object.keys(storage)) {
            if (setting === 'enabled') {
                if (resetEverything) {
                    this.setAddonEnabled(addonId, null);
                }
                continue;
            }
            try {
                this.setAddonSetting(addonId, setting, null);
            } catch (e) {
                // ignore
            }
        }
    }

    export ({theme}) {
        const result = {
            core: {
                // Upstream property. We don't use this.
                lightTheme: theme === 'light',
                // Append -tw to all versions, for example 1.8.0-prerelease-tw
                version: `${upstreamMeta.version}-tw`
            },
            addons: {}
        };
        for (const [addonId, manifest] of Object.entries(addons)) {
            const enabled = this.getAddonEnabled(addonId);
            const settings = {};
            if (manifest.settings) {
                for (const {id} of manifest.settings) {
                    settings[id] = this.getAddonSetting(addonId, id);
                }
            }
            result.addons[addonId] = {
                enabled,
                settings
            };
        }
        return result;
    }

    import (data) {
        for (const [addonId, value] of Object.entries(data.addons)) {
            if (!addons.hasOwnProperty(addonId)) {
                continue;
            }
            const {enabled, settings} = value;
            if (typeof enabled === 'boolean') {
                this.setAddonEnabled(addonId, enabled);
            }
            for (const [settingId, settingValue] of Object.entries(settings)) {
                try {
                    this.setAddonSetting(addonId, settingId, settingValue);
                } catch (e) {
                    // ignore
                }
            }
        }
    }

    setStoreWithVersionCheck ({version, store}) {
        if (version !== upstreamMeta.commit) {
            return;
        }
        this.setStore(store);
    }

    setStore (newStore) {
        const oldStore = this.store;
        for (const addonId of Object.keys(oldStore)) {
            const oldSettings = oldStore[addonId];
            const newSettings = newStore[addonId];
            if (!newSettings || typeof newSettings !== 'object') {
                continue;
            }
            if (JSON.stringify(oldSettings) !== JSON.stringify(newSettings)) {
                const manifest = this.getAddonManifest(addonId);
                const dynamicEnable = !!manifest.dynamicEnable && !oldSettings.enabled && newSettings.enabled;
                const dynamicDisable = !!manifest.dynamicDisable && oldSettings.enabled && !newSettings.enabled;
                // Clone to avoid pass-by-reference issues
                this.store[addonId] = JSON.parse(JSON.stringify(newSettings));
                this.dispatchEvent(new CustomEvent('addon-changed', {
                    detail: {
                        addonId,
                        dynamicEnable,
                        dynamicDisable
                    }
                }));
            }
        }
    }
}

export default SettingsStore;
