!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=React},function(e,t){e.exports=Core},function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(19),i=n(11);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(20);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){e.exports=PropTypes},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.getGalleryCellDataAid=t.getGalleryDataAid=t.dataAids=void 0;var i=(0,r(n(22)).default)({CAROUSEL_BACKGROUND:null,CAROUSEL_BLUR_BACKGROUND:null,CAROUSEL_CONTENT:null,CAROUSEL_IMAGE_CAPTION:null,GALLERY_SECTION_TITLE_RENDERED:null,GALLERY_CAPTION_RENDERED:null,GALLERY_SLIDE_POSITION:null,GALLERY_MORE_BUTTON:null,LAYOUT_TWO_ZERO_STATE:null,LIGHTBOX_CLOSE:null,LIGHTBOX_MODAL:null,GALLERY_SCROLL_LEFT_ARROW:null,GALLERY_SCROLL_RIGHT_ARROW:null,THUMBNAIL_NAV_LIST:null,FAKE_THUMBNAIL_NAV_LIST:null,GALLERY_CAPTION_MORE_BUTTON:null});t.dataAids=i;t.getGalleryDataAid=function(e){return"GALLERY_IMAGE".concat(e,"_RENDERED")};t.getGalleryCellDataAid=function(e){return"GALLERY_IMAGE".concat(e,"_CELL_RENDERED")}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=_},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MOBILE=t.TABLET=void 0;t.TABLET="tablet";t.MOBILE="mobile"},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.smallthumbImageDimensions=t.thumbImageDimensions=void 0;t.thumbImageDimensions={height:70,width:100};t.smallthumbImageDimensions={height:68,width:95}},function(e,t,n){"use strict";window.wsb=window.wsb||{},window.wsb.Gallery1=n(18)},function(e,t,n){"use strict";var r=n(3),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(12)),a=i(n(15)),l=i(n(4)),u=i(n(5)),d=i(n(6)),s=i(n(7)),c=i(n(11)),f=i(n(8)),h=r(n(1)),p=i(n(9)),m=n(13),g=n(2),v=n(14),y=i(n(21)),b=i(n(23)),E=i(n(24)),O=n(10),x=i(n(25)),w=n(16),S=i(n(26)),_=i(n(28)),L=n(29),T=i(n(30));function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(t){(0,o.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var I=g.UX.Carousel,k={mobile:{minWidth:200,maxWidth:300,height:250},tablet:{minWidth:400,maxWidth:800,height:600},smallTablet:{minWidth:300,maxWidth:600,height:400}},A=(0,_.default)((0,S.default)(function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,d.default)(this,(0,s.default)(t).call(this,e))).state={arrows:!1,selectedIndex:0,nextSlideIncremental:0},n.updateSelectedIndex=n.updateSelectedIndex.bind((0,c.default)(n)),n.handleMouseMove=n.handleMouseMove.bind((0,c.default)(n)),n.handleMouseEnter=n.handleMouseEnter.bind((0,c.default)(n)),n.handleMouseLeave=n.handleMouseLeave.bind((0,c.default)(n)),n.nextSlideDebounced=(0,m.debounce)(function(e){return(0,L.handleDirectionalKeys)({keyCode:e.keyCode,context:(0,c.default)(n)})},200),n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"handleMouseLeave",value:function(){this.setState({mouseOnCarousel:!1,arrows:!1})}},{key:"handleMouseEnter",value:function(){this.setState({mouseOnCarousel:!0}),this.handleMouseMove()}},{key:"handleMouseMove",value:function(){var e=this;this.state.arrows||this.setState({arrows:!0}),clearTimeout(this.timer),this.timer=setTimeout(function(){e.setState({arrows:!1})},1e3)}},{key:"renderFakeCarousel",value:function(e){var t={marginVertical:0,marginHorizontal:"xxsmall",display:"inline-block",height:500,width:700},n=e[e.length-1],r=e[0],i=e.length>1?e[1]:r,o="mobile"!==this.props.device?"700px":null,a=this.state.selectedIndex;return h.default.createElement(g.UX2.Element.Block,{color:"highlight"},h.default.createElement(g.UX2.Element.Block,{style:{width:900,overflow:"hidden",margin:"0 auto",whiteSpace:"nowrap"}},(0,h.cloneElement)(n,{style:(0,m.merge)({},t,{margin:"0 5px 0 -605px",opacity:.3})}),(0,h.cloneElement)(r,{style:t}),(0,h.cloneElement)(i,{style:(0,m.merge)({},t,{opacity:.3})})),h.default.createElement(g.UX2.Element.Block,{style:{width:900,overflow:"hidden",margin:"0 auto"}},(0,h.createElement)(T.default,{maxWidthCaption:o,captionContainerHeight:this.props.hasCaption?40:0,caption:e[a].caption||""}),this.props.showthumbnails&&h.default.createElement(E.default,{images:this.props.images,thumbImageDimensions:w.thumbImageDimensions,baseStyle:{position:"relative"}})))}},{key:"componentDidUpdate",value:function(e){var t=this.props.currentImageSelected;t!==e.currentImageSelected&&t>-1&&this.setState({selectedIndex:parseInt(t,10)})}},{key:"componentWillUnmount",value:function(){(0,L.modifyKeyDownEventHandler)(this.nextSlideDebounced)}},{key:"renderCarousel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=this.props,i=r.showthumbnails,o=r.device,l=r.currentImageSelected,u=r.images,d=r.fullBleed,s=r.autoplayDelay,c=r.autoplay,f=r.hasCaption,p=this.state,v=p.selectedIndex,E=p.nextSlideIncremental,O=l>-1?parseInt(l,10):v,S={initialSlide:parseInt(O,10)},_=u[v]&&u[v].caption||"",L="mobile"!==o?"700px":null,C=[];f&&C.push({component:T.default,props:{maxWidthCaption:L,captionContainerHeight:40,caption:_},position:"bottom"});var M=!d||i||f?"auto":"".concat(t.height,"px"),k=1e3*(parseFloat(s)||3.5);if(i&&"mobile"!==o&&u.length>1){var A=w.thumbImageDimensions.height,D={height:A,width:A},j=u.map(function(e){var t=e.imageData;return{url:(0,x.default)(g.utils.generateImageServiceUrl((0,m.omit)(t,"position")),D.height,D.height),caption:t.caption,alt:t.alt}});C.push({component:b.default,props:{images:j,thumbHeight:A,renderContainer:d},position:"bottom"})}n&&C.push({component:y.default,props:{visible:this.state.arrows,overrideArrowStyle:{top:0,marginTop:"".concat(t.height/2,"px")},triggerNextSlide:E},position:"bottom"});var P=d?{imagesToPrefetch:10}:{};return h.default.createElement(I,(0,a.default)({key:l,dots:!1,arrows:!1,cellPadding:5,infinite:u.length>1,slideHeight:"".concat(t.height,"px"),slideWidth:"inherit",draggable:u.length>1,autoplay:c,autoplaySpeed:k,afterChange:this.updateSelectedIndex,controls:C,children:e,pauseOnHover:!d,style:{slide:{opacity:"0.3"},selectedSlide:{opacity:"1"},track:{lineHeight:0}},height:M},S,P))}},{key:"updateSelectedIndex",value:function(e){this.setState({selectedIndex:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.device,r=t.images,i=t.renderAsThumbnail,o=t.size,a=t.fullBleed,l=t.showArrows,u=g.UX2.Component.Grid,d=n===v.TABLET&&"sm"===o?k.smallTablet:k[n],s=("mobile"===n||"xs"===o)&&i,c=r.map(function(t,r){var i=t.imageData,o=1300,a=800,l="mobile"===n?{maxHeight:"100%"}:{height:"100%",objectFit:"contain"},u=g.utils.generateImageServiceUrl(M({},i,{additionalUrlParams:["rs=w:".concat(o,",h:").concat(a)]}));return h.default.createElement(g.UX2.Element.Image,{tag:"img",src:u,"data-aid":(0,O.getGalleryDataAid)(r),"data-route":"",alt:i.alt||"",key:r,style:M({maxWidth:"100%",position:"relative",top:"50%",transform:"translateY(-50%)"},l),onMouseEnter:L.modifyKeyDownEventHandler.bind(e,e.nextSlideDebounced,!0),onMouseLeave:L.modifyKeyDownEventHandler.bind(e,e.nextSlideDebounced)})}),f=null;if(c.length){var p=l&&"mobile"!==n&&c.length>1,m=s?this.renderFakeCarousel(c):this.renderCarousel(c,d,p),y=h.default.createElement(g.UX2.Group.Carousel,{onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,children:m});f=a?y:h.default.createElement(u,{size:1},y)}var b=a?g.UX2.Element.Block:g.UX2.Element.Container;return h.default.createElement(b,null,f)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.images,r=void 0===n?[]:n;return t.selectedIndex>=r.length?{selectedIndex:0}:null}},{key:"propTypes",get:function(){return{autoplay:p.default.bool,category:p.default.string,className:p.default.string,device:p.default.string,images:p.default.array,renderAsThumbnail:p.default.bool,section:p.default.string,showthumbnails:p.default.bool,size:p.default.string,currentImageSelected:p.default.string,fullBleed:p.default.bool,showArrows:p.default.bool,autoplayDelay:p.default.string,hasCaption:p.default.bool}}},{key:"defaultProps",get:function(){return{category:"neutral",device:"tablet",images:[],autoplay:!1,showArrows:!0}}}]),t}(h.Component)));t.default=A,e.exports=t.default},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){"use strict";var r=n(3),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(4)),a=i(n(5)),l=i(n(6)),u=i(n(7)),d=i(n(8)),s=r(n(1)),c=i(n(9)),f=n(2),h=n(10),p=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,d.default)(t,e),(0,a.default)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.nextSlide,r=t.prevSlide,i=t.triggerNextSlide;i>e.triggerNextSlide&&n(),i<e.triggerNextSlide&&r()}},{key:"render",value:function(){var e=this.props,t=e.prevSlide,n=e.nextSlide,r=e.visible,i=e.overrideArrowStyle,o=void 0===i?{}:i,a={opacity:r?1:0,transition:"opacity 0.5s",":hover":{opacity:1}};return s.default.createElement(f.UX2.Element.Block,{style:a},s.default.createElement(f.UX2.Element.Button.Previous,{"data-aid":h.dataAids.GALLERY_SCROLL_LEFT_ARROW,onClick:t,style:o}),s.default.createElement(f.UX2.Element.Button.Next,{"data-aid":h.dataAids.GALLERY_SCROLL_RIGHT_ARROW,onClick:n,style:o}))}}]),t}(s.Component);p.propTypes={prevSlide:c.default.func,nextSlide:c.default.func,visible:c.default.bool,overrideArrowStyle:c.default.object,triggerNextSlide:c.default.number};var m=p;t.default=m,e.exports=t.default},function(e,t){e.exports=keyMirror},function(e,t,n){"use strict";var r=n(3),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(12)),a=i(n(4)),l=i(n(5)),u=i(n(6)),d=i(n(7)),s=i(n(11)),c=i(n(8)),f=r(n(1)),h=i(n(9)),p=n(2),m=n(16),g=n(10),v=n(13);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,o.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E={left:{step:-1},right:{step:1}},O=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,u.default)(this,(0,d.default)(t).call(this,e))).state={conveyorMarginLeft:0},n.moveConveyor=n.moveConveyor.bind((0,s.default)(n)),n.onThumbnailChange=n.onThumbnailChange.bind((0,s.default)(n)),n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onThumbnailChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onThumbnailChange)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.selectedIndex,r=t.images,i=t.thumbHeight;if(e.images.length===r.length&&e.thumbHeight===i||this.onThumbnailChange(),n!==e.selectedIndex){var o=this.thumbs.childNodes[n].offsetLeft,a=parseFloat(window.getComputedStyle(this.conveyor).width);o<0?this.moveConveyor("left",Math.ceil(-o/this.stepSize))():a<o+m.thumbImageDimensions.width&&this.moveConveyor("right",Math.ceil((o+m.thumbImageDimensions.width-a)/this.stepSize))()}}},{key:"onThumbnailChange",value:function(){this.cachedThumbsExceededWidth=null}},{key:"renderThumbnail",value:function(){var e=this,t=this.props,n=t.images,r=t.selectedIndex,i=t.goToSlide,o=this.state.conveyorMarginLeft,a=n.map(function(e,t){var n=e.url,o=t===r?{outline:"3px solid",outlineOffset:-3}:null,a={color:"highlight",overflowY:"hidden",marginLeft:0===t?0:10};return f.default.createElement(p.UX2.Element.ListItem.Inline,{tag:"li",key:"thumb-".concat(t),"data-index":"thumb-".concat(t),style:a,onClick:i.bind(null,t)},f.default.createElement(p.UX2.Element.Image,{tag:"img",src:n,"data-route":"",alt:e.alt||"",key:t,style:b({maxWidth:"none",cursor:"pointer"},o),"data-edit-interactive":!0}))}),l={listStyle:"none",padding:0,margin:0,textAlign:"left",whiteSpace:"nowrap",transition:"margin-left 0.5s",marginLeft:o};return f.default.createElement(p.UX2.Element.Block,{style:{position:"relative"}},f.default.createElement(p.UX2.Element.Block,{tag:"button",style:this.getArrowStyle("left"),onClick:this.moveConveyor("left")},f.default.createElement(p.UX2.Element.Icon,{"data-edit-interactive":!0,style:{color:"white"},icon:"chevronLeft"})),f.default.createElement("ul",{style:l,ref:function(t){e.thumbs=t},"data-aid":g.dataAids.THUMBNAIL_NAV_LIST,children:a}),f.default.createElement(p.UX2.Element.Block,{tag:"button",style:this.getArrowStyle("right"),onClick:this.moveConveyor("right")},f.default.createElement(p.UX2.Element.Icon,{"data-edit-interactive":!0,style:{color:"white"},icon:"chevronRight"})))}},{key:"getArrowStyle",value:function(e){var t=this.props,n=t.transparentBackground,r=t.thumbHeight,i=this.state.conveyorMarginLeft,o=this.thumbsExceededWidth,a={display:"none"};return"left"===e&&i||"right"===e&&o!==Math.abs(i)&&o>0?((0,v.merge)(a,{position:"absolute",zIndex:10,border:"none",height:r,width:50,background:n?"transparent":"rgba(0, 0, 0, 0.5)",padding:0,cursor:"pointer",outline:"none",top:0,display:"block"}),"left"===e?a.left=0:a.right=0,a):a}},{key:"moveConveyor",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(r){r&&r.preventDefault();var i=t.state.conveyorMarginLeft,o=Math.abs(i),a=n*t.stepSize;"left"===e&&o<a?a=o:"right"===e&&t.thumbsExceededWidth-o<a&&(a=t.thumbsExceededWidth-o),t.setState({conveyorMarginLeft:i+-E[e].step*a})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.renderContainer,r=t.overrideStyle,i=n?p.UX2.Element.Container:p.UX2.Element.Block,o=b({marginTop:"small"},r);return f.default.createElement(i,{style:o},f.default.createElement("div",{style:{overflow:"hidden",width:"100%"},ref:function(t){e.conveyor=t},children:this.renderThumbnail()}))}},{key:"thumbsExceededWidth",get:function(){if(this.cachedThumbsExceededWidth)return this.cachedThumbsExceededWidth;var e=this.conveyor,t=this.thumbs,n=0;if(!e||!t)return n;var r=(n=(0,v.reduce)(t.childNodes,function(e,t){var n=window.getComputedStyle(t);return e+parseFloat(n.width)+parseFloat(n.marginLeft)+parseFloat(n.marginRight)},0))-parseFloat(window.getComputedStyle(e).width);return this.cachedThumbsExceededWidth=r,r}},{key:"cachedThumbsExceededWidth",get:function(){return this._cachedThumbsExceededWidth},set:function(e){e<=0||(this._cachedThumbsExceededWidth=e)}},{key:"stepSize",get:function(){return this.props.stepSize||200}}]),t}(f.Component);O.propTypes={goToSlide:h.default.func,selectedIndex:h.default.number,images:h.default.array.isRequired,transparentBackground:h.default.bool,stepSize:h.default.number,thumbHeight:h.default.number,overrideStyle:h.default.object,renderContainer:h.default.bool},O.defaultProps={goToSlide:v.noop,selectedIndex:0,renderContainer:!1};var x=O;t.default=x,e.exports=t.default},function(e,t,n){"use strict";var r=n(3),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(12)),a=i(n(4)),l=i(n(5)),u=i(n(6)),d=i(n(7)),s=i(n(8)),c=r(n(1)),f=i(n(9)),h=n(2),p=n(13),m=n(10);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var v=function(e){function t(){return(0,a.default)(this,t),(0,u.default)(this,(0,d.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.images,n=e.thumbImageDimensions,r=e.thumbLength,i=e.baseStyle,a=Math.min(this.props.images.length,r);if(a<=1)return null;var l=n.width,u=n.height,d=[];(0,p.some)(t,function(e,t){var n=e.imageData;if(t===a)return!0;var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,o.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({height:u,overflowY:"hidden",marginLeft:0===t?0:10},0===t?{border:"5px solid",borderColor:"inherit",boxSizing:"border-box"}:null);d.push(c.default.createElement(h.UX2.Element.ListItem.Inline,{tag:"li",style:r,key:"fakeThumb-".concat(t),"data-index":"fakeThumb-".concat(t)},c.default.createElement(h.UX2.Element.Image,{tag:"img","data-route":"",key:t,style:{maxWidth:"none",width:l,height:u},imageData:n})))});var s={listStyle:"none",padding:0,margin:0,textAlign:"left",height:u,whiteSpace:"nowrap"};return c.default.createElement(h.UX2.Element.Block,{style:i},c.default.createElement(h.UX2.Element.List,{tag:"ul",style:s,"data-aid":m.dataAids.FAKE_THUMBNAIL_NAV_LIST,children:d}))}}]),t}(c.Component);v.propTypes={images:f.default.array,thumbLength:f.default.number,thumbImageDimensions:f.default.object,baseStyle:f.default.object},v.defaultProps={thumbLength:9};var y=v;t.default=y,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGridRowSizes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t+2;if(e<=n)return[e];var r=[],i=n+1,o=e;for(;i>t;){var a=e/--i,l=Math.ceil(a);if(l>o)break;o=l;var u=Math.floor(a),d=e-u*i;r.push({cur:i,maxes:u,remainder:d})}var s=r.sort(function(e,t){return e.remainder>t.remainder?1:e.remainder<t.remainder?-1:0})[0],c=Array(s.maxes).fill(s.cur);if(0===s.remainder)return c;if(s.remainder<t){var f=c.pop(),h=f-s.remainder;c.push(h),c.push(t)}else c.push(s.remainder);return c},t.getFullBleedPadding=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.top,n=e.bottom,r={"@xs-only":{}};t||(r.paddingTop="0px !important",r["@xs-only"].paddingTop=r.paddingTop);n||(r.paddingBottom="0px !important",r["@xs-only"].paddingBottom=r.paddingBottom);return r},t.default=void 0;var r=function(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"image";return"image"===i?r=[e,"rs=w:".concat(t,",h:").concat(n,",cg:true,m/cr=w:").concat(t,",h:").concat(n,",a:cc")].join(e.endsWith("/")?"":"/"):"background"===i&&(r=e.replace(/\{width\}/g,t).replace(/\{height\}/g,n)),r};t.default=r},function(e,t,n){"use strict";var r=n(3),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){function n(e){var t;(0,a.default)(this,n),(t=(0,l.default)(this,(0,u.default)(n).apply(this,arguments))).handleMatchMedia=t.handleMatchMedia.bind((0,d.default)(t));var r={};return e.renderMode!==y&&(r.device=(0,p.default)(e.viewDevice)),t.state=r,t}return(0,c.default)(n,t),(0,s.default)(n,null,[{key:"propTypes",get:function(){return{renderMode:h.default.string,viewDevice:h.default.string}}}]),(0,s.default)(n,[{key:"componentWillReceiveProps",value:function(e){e.renderMode!==y&&this.setState({device:(0,p.default)(e.viewDevice)})}},{key:"handleMatchMedia",value:function(e){this.setState({size:e.size})}},{key:"render",value:function(){var t=this.state.size,n=this.state.device;return n||(n="xs"===t?g.MOBILE:g.TABLET),f.default.createElement("div",null,f.default.createElement(e,(0,o.default)({},this.props,{device:n,size:t})),f.default.createElement(v,{onChange:this.handleMatchMedia}))}}]),n}(f.Component)};var o=i(n(15)),a=i(n(4)),l=i(n(6)),u=i(n(7)),d=i(n(11)),s=i(n(5)),c=i(n(8)),f=r(n(1)),h=i(n(9)),p=i(n(27)),m=n(2),g=n(14),v=m.UX.MatchMedia,y="PUBLISH";e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(14),i=/mobile/i;var o=function(e){return i.test(e)?r.MOBILE:r.TABLET};t.default=o,e.exports=t.default},function(e,t,n){"use strict";var r=n(3),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){function n(){var e;return(0,o.default)(this,n),(e=(0,l.default)(this,(0,u.default)(n).apply(this,arguments))).inView=function(){e.setState({visible:!0})},e.state={visible:!1},e}return(0,d.default)(n,t),(0,a.default)(n,[{key:"render",value:function(){var t=this.state.visible;return t?s.default.createElement(e,this.props):s.default.createElement(c,{callback:this.inView})}}]),n}(s.Component)};var o=i(n(4)),a=i(n(5)),l=i(n(6)),u=i(n(7)),d=i(n(8)),s=r(n(1)),c=n(2).UX.IntersectionObserver;e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleDirectionalKeys=t.modifyKeyDownEventHandler=void 0;var r=37,i=39;t.modifyKeyDownEventHandler=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};arguments.length>1&&void 0!==arguments[1]&&arguments[1]?document.addEventListener("keydown",e,!1):document.removeEventListener("keydown",e,!1)};t.handleDirectionalKeys=function(e){var t=e.keyCode,n=e.context,o=n.state.nextSlideIncremental;t===r&&(o-=1),t===i&&(o+=1),n.setState({nextSlideIncremental:o})}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(1)),o=r(n(9)),a=n(2),l=n(10),u=function(e){var t=e.maxWidthCaption,n=e.captionContainerHeight,r=e.caption;return i.default.createElement(a.UX2.Element.FigCaption,{"data-aid":l.dataAids.GALLERY_CAPTION_RENDERED,children:r,richtext:!0,style:{textAlign:"center",maxWidth:t||"",minHeight:n||"",paddingTop:"small",margin:"0 auto"}})};u.propTypes={maxWidthCaption:o.default.string,captionContainerHeight:o.default.string,caption:o.default.string};var d=u;t.default=d,e.exports=t.default}]);