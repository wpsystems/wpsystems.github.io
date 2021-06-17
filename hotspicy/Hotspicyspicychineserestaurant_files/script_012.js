!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(5),o=n(14);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(15);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){e.exports=React},function(e,t){e.exports=PropTypes},function(e,t){e.exports=Core},function(e,t,n){"use strict";window.wsb=window.wsb||{},window.wsb.LogoText=window.wsb.LogoText||n(12)},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(13)),l=r(n(1)),i=r(n(2)),u=r(n(3)),a=r(n(4)),c=r(n(6)),f=r(n(7)),E=r(n(8)),s=r(n(9)),d=n(16),p=n(10),_=r(n(17)),R=r(n(19)),O=r(n(20));function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var D=function(e){function t(){var e;return(0,i.default)(this,t),(e=(0,a.default)(this,(0,c.default)(t).apply(this,arguments))).handleFontChange=function(t){e.setState({fontSize:t})},e._containerId=(0,d.uniqueId)("logo-container-"),e.state={},e}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.renderMode,n=e.logoStyle,r=e.logo,i=e.dataRoute,u=e.fontPackLogoId,a=e.scaledFontSizes,c=e.maxLines,f=u?"logo":"inherit",s="logo"===f,D=r.logoText,N=this.state.fontSize,S=t===p.constants.renderModes.EDIT?{children:D}:{dangerouslySetInnerHTML:{__html:p.utils.convertLineBreaks((0,d.escape)(D))}},h=i?{"data-route":i}:{"data-field-id":"logo","data-field-route":R.default.LOGO};return E.default.createElement(p.UX2.Element.Heading,{id:this._containerId,tag:"h3",style:n,logoText:D,font:f},E.default.createElement(p.UX2.Element.Element,(0,o.default)({"data-aid":_.default.HEADER_LOGO_TEXT_RENDERED,tag:"span",font:f,style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,l.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({display:"inline-block",width:"100%"},s?{fontSize:N}:{font:"inherit",letterSpacing:"inherit",textTransform:"inherit",fontSize:"inherit",color:"inherit",fontWeight:"inherit",lineHeight:"inherit"})},S,h,{isLogo:!0})),s&&E.default.createElement(O.default,{font:f,text:D,onChange:this.handleFontChange,containerId:this._containerId,fontSizes:a,maxLines:c}))}}]),t}(E.default.PureComponent);D.propTypes={renderMode:s.default.string,logoStyle:s.default.object,logo:s.default.object.isRequired,dataRoute:s.default.string,fontPackLogoId:s.default.string,scaledFontSizes:s.default.arrayOf(s.default.oneOf(Object.values(p.constants.fontSizes))),maxLines:s.default.number};var N=D;t.default=N,e.exports=t.default},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=_},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(0,r(n(18)).default)({BACKGROUND_IMAGE_RENDERED:null,HAMBURGER_MENU_LINK:null,HEADER_WIDGET:null,HEADER_SECTION:null,HEADER_VIDEO:null,HEADER_SLIDESHOW:null,HEADER_SLIDE:null,HEADER_HERO_SLIDE:null,HEADER_PHONE_RENDERED:null,HEADER_PIPE_RENDERED:null,HEADER_ADDRESS_RENDERED:null,HEADER_LOGO_RENDERED:null,HEADER_LOGO_IMAGE_RENDERED:null,HEADER_LOGO_OVERHANG_CONTAINER:null,HEADER_LOGO_TEXT_RENDERED:null,HEADER_TAGLINE_RENDERED:null,HEADER_TAGLINE2_RENDERED:null,HEADER_NAV_RENDERED:null,HEADER_CTA_BTN:null,CART_ICON_RENDER:null,CART_ICON_COUNT:null,CART_ICON_PIPE:null,CART_TEXT:null,SEARCH_FORM_RENDERED:null,SEARCH_ICON_RENDERED:null,SEARCH_ICON_RENDERED_OPEN:null,SEARCH_CLOSE_RENDERED:null,SEARCH_FIELD_RENDERED:null,NAV_MORE:null,NAV_DROPDOWN:null,i18n_ICON_RENDERED:null,i18n_BAR_RENDERED:null,BANNER_RENDERED:null,BANNER_TEXT_RENDERED:null,GROUP_RENDERED:null,MEMBERSHIP_EMAIL_ADDRESS:null,MEMBERSHIP_SIGNOUT_LINK:null,MEMBERSHIP_SIGNIN_LINK:null,MEMBERSHIP_ICON_RENDERED:null,MEMBERSHIP_ICON_DESKTOP_RENDERED:null,MEMBERSHIP_CREATE_ACCOUNT_LINK:null,MEMBERSHIP_ACCOUNT_LINK:null,MEMBERSHIP_BOOKINGS_LINK:null,MEMBERSHIP_ORDERS_LINK:null,SEASONAL_SPRING_LEFT_ICON_RENDERED:null,SEASONAL_SPRING_RIGHT_ICON_RENDERED:null,SEASONAL_SUMMER_LEFT_ICON_RENDERED:null,SEASONAL_SUMMER_RIGHT_ICON_RENDERED:null,SEASONAL_FALL_LEFT_ICON_RENDERED:null,SEASONAL_FALL_RIGHT_ICON_RENDERED:null,SEASONAL_WINTER_LEFT_ICON_RENDERED:null,SEASONAL_WINTER_RIGHT_ICON_RENDERED:null});t.default=o,e.exports=t.default},function(e,t){e.exports=keyMirror},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={LOGO:"/logo",ADDRESS:"address",PHONE:"phone",WELCOME_LINE:"welcomeLine",TAGLINE:"tagline",SUB_TAG_LINE:"tagline2",CTA_BUTTON:"/ctaButton",PROMO_BANNER:"/promoBanner"};t.default=r,e.exports=t.default},function(e,t,n){"use strict";var r=n(21),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(1)),i=o(n(2)),u=o(n(3)),a=o(n(4)),c=o(n(6)),f=o(n(7)),E=r(n(8)),s=o(n(9)),d=n(10);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var _=d.constants.fontSizes,R=_.XXLARGE,O=_.XLARGE,y=_.LARGE,D=function(e){function t(){var e,n;(0,i.default)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=(0,a.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(o)))).checkSize=function(){var e=n.props.onChange,t=n.getScalers();if(n._container&&n._container.clientWidth&&t.length){var r=n._container.style.width||"";n._container.style.width="100%",n.initScalers(t);var o=t.find(n.isBestFit)||t[t.length-1];n.hideScalers(t),n._container.style.width=r;var l=o.getAttribute("data-size");l&&l!==n._lastSize&&(n._lastSize=l,e(l))}},n.isBestFit=function(e){var t=n.props.maxLines;return e.scrollWidth<=n._container.clientWidth&&n.getNumLines(e)<=t},n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this._container=this.getContainer(),this.checkSize(),window.addEventListener("resize",this.checkSize)}},{key:"componentDidUpdate",value:function(){this.checkSize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkSize)}},{key:"getContainer",value:function(){var e=this.props.containerId;return document.getElementById(e)}},{key:"getScalers",value:function(){var e=this.props,t=e.containerId,n=e.fontSizes;return Array.prototype.slice.call(document.querySelectorAll('[data-scaler-id="scaler-'.concat(t,'"]'))).sort(function(e,t){return n.indexOf(e.getAttribute("data-size"))-n.indexOf(t.getAttribute("data-size"))})}},{key:"getComputedPropertyValue",value:function(e,t){return document.defaultView.getComputedStyle(e).getPropertyValue(t)}},{key:"getNumLines",value:function(e){var t=e.offsetHeight,n=parseInt(this.getComputedPropertyValue(e,"line-height"),10)||1;return Math.round(t/n)}},{key:"initScalers",value:function(e){var t=this;e.forEach(function(e){e.style.display="inline",e.style.maxWidth="".concat(t._container.clientWidth,"px")})}},{key:"hideScalers",value:function(e){e.forEach(function(e){e.style.display="none",e.style.maxWidth=""})}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.containerId,r=e.font,o=e.fontSizes,i=e.style,u={overflowWrap:"normal",wordBreak:"normal",display:"none",visibility:"hidden",position:"absolute",left:0};return E.default.createElement(E.Fragment,null,o.map(function(e){return E.default.createElement(d.UX2.Element.Element,{key:e,font:r,style:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,l.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},u,{},i,{fontSize:e}),"data-size":e,"data-scaler-id":"scaler-".concat(n)},t)}))}}]),t}(E.PureComponent);D.propTypes={containerId:s.default.string.isRequired,onChange:s.default.func.isRequired,text:s.default.string.isRequired,font:s.default.string,fontSizes:s.default.arrayOf(s.default.oneOf(Object.values(d.constants.fontSizes))),style:s.default.object,maxLines:s.default.number},D.defaultProps={fontSizes:[R,O,y],maxLines:3};var N=D;t.default=N,e.exports=t.default},function(e,t,n){var r=n(5);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,t&&t.set(e,n),n}}]);