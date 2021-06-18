var GUI=function(e){function t(t){for(var o,a,s=t[0],c=t[1],d=t[2],u=0,p=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={10:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=function(e){return a.p+"js/"+({4:"addon-settings~addons",6:"addons",11:"library-backdrops",12:"library-costumes",13:"library-sounds",14:"library-sprites"}[e]||e)+"."+{4:"171f0e54ed3fa1e3808c",6:"1c5c8194bc4dcb6946be",11:"bed80c8f114fc3cce7be",12:"1502d1b4066adad7c455",13:"f2fb5134f404cd676c8d",14:"e4dd91b767f7c6ede215"}[e]+".js"}(e);var c=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}r[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var s=window.webpackJsonpGUI=window.webpackJsonpGUI||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=c;return i.push([1500,0,3,2,1]),n()}({111:function(e,t){var n=Array.isArray;e.exports=n},116:function(e,t,n){var o=n(241);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,r);o.locals&&(e.exports=o.locals)},150:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(44))},1500:function(e,t,n){"use strict";n.r(t);n(285);var o=n(49),r=n.n(o),i=n(1),a=n.n(i),s=n(64),c=n(154),d=n(68);Object(s.setAppElement)(d.a),r.a.render(a.a.createElement(c.a,{isPlayerOnly:!0,isFullScreen:!0}),d.a)},152:function(e,t,n){e.exports=n.p+"static/assets/33b737193edfe1730f38112ad35a84b4.svg"},153:function(e,t,n){e.exports=n.p+"sw.js"},154:function(e,t,n){"use strict";var o=n(4),r=n.n(o),i=n(0),a=n.n(i),s=n(1),c=n.n(s),d=n(6),l=n(38),u=n(2),p=n(11),h=(n(155),n(156)),f=n(81),m=n(17),v=n(67),_=n(26);const g=["projectId","onSetAuthor","onSetDescription","onSetProjectTitle"];function w(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const b=()=>document.querySelector('meta[name="robots"][content="noindex"]'),j=e=>{if(e){const e=b();e&&e.remove()}else if(!b()){const e=document.createElement("meta");e.name="robots",e.content="noindex",document.head.appendChild(e)}};var x=n(158),y=n(114),E=n(159),P=n(53),T=n(35);const O=history.replaceState;history.replaceState=function(...e){try{return O.call(this,...e)}catch(e){m.default.error(e)}};const S=history.pushState;history.pushState=function(...e){try{return S.call(this,...e)}catch(e){m.default.error(e)}};var I=n(165),k=n(166),C=n(5),N=n.n(C),R=n(66),A=n.n(R),F=n(116),L=n.n(F),U=n(80);const D=Object(u.d)({tooltip:{id:"tw.input.tooltip",defaultMessage:"Copy and paste a Scratch project link here!"}});class M extends c.a.Component{constructor(e){super(e),N()(this,["handleKeyDown","handleChange","handleBlur","handleFocus","inputRef","tooltipRef"]),this.state={projectId:this.props.projectId}}componentDidUpdate(e){this.props.projectId!==e.projectId&&(this.props.projectId===p.e?(this.input.focus(),this.input.selectionStart=this.input.value.length):this.input.blur(),this.setState({projectId:this.props.projectId}))}extractProjectId(e){const t=e.match(/\d+/);return t?t[0]:null}readProjectId(e){return this.extractProjectId(e.target.value)||p.e}handleKeyDown(e){"Enter"===e.key&&this.state.projectId&&this.input.blur()}handleChange(e){this.setState({projectId:this.readProjectId(e)||p.e})}handleBlur(){this.state.projectId&&this.state.projectId!==this.props.projectId&&this.props.setProjectId(this.state.projectId),A.a.hide(this.tooltip)}handleFocus(e){this.extractProjectId(e.target.value)&&e.target.select(),A.a.show(this.tooltip)}inputRef(e){this.input=e}tooltipRef(e){this.tooltip=e}render(){const e=this.state.projectId===p.e?"":this.state.projectId||"";return c.a.createElement("div",{ref:this.tooltipRef,"data-tip":this.props.intl.formatMessage(D.tooltip)},c.a.createElement(A.a,{className:L.a.tooltip,effect:"solid"}),c.a.createElement("input",{ref:this.inputRef,spellCheck:"false",type:"text",value:"".concat("https://scratch.mit.edu/projects/").concat(e),className:L.a.input,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus}))}}M.propTypes={intl:u.f,projectId:a.a.string,setProjectId:a.a.func};var G=Object(u.e)(Object(d.b)(e=>({projectId:e.scratchGui.projectState.projectId}),e=>({setProjectId:t=>Object(U.b)(e,t)}))(M)),q=n(23),V=n.n(q),W=function(e){this.studioId=e,this.offset=0,this.ended=!1,this.loadingPage=!1,this.unusedPlaceholders=[],this.root=document.createElement("div"),this.root.className=V.a.studioviewRoot,this.projectList=document.createElement("div"),this.projectList.className=V.a.studioviewList,this.root.appendChild(this.projectList),"IntersectionObserver"in window?(this.intersectionObserver=new IntersectionObserver(this.handleIntersection.bind(this),{root:this.projectList}),this.loadNextPageObserver=new IntersectionObserver(this.handleLoadNextPageIntersection.bind(this),{root:this.projectList})):(this.intersectionObserver=null,this.loadNextPageObserver=null),this.messages={AUTHOR_ATTRIBUTION:"",PROJECT_HOVER_TEXT:"",LOAD_ERROR:""}};W.prototype.addProject=function(e){var t;this.unusedPlaceholders.length?t=this.unusedPlaceholders.shift():(t=this.createPlaceholder(),this.projectList.appendChild(t)),this.placeholderToProject(t,e.id,e.title,e.author)},W.prototype.createLazyImage=function(e){var t=document.createElement("img");return this.intersectionObserver?(this.intersectionObserver.observe(t),t.dataset.src=e):t.src=e,t},W.prototype.createPlaceholder=function(){var e=document.createElement("a");e.className=r()(V.a.studioviewProject,V.a.studioviewPlaceholder);var t=document.createElement("div");t.className=V.a.studioviewThumbnail;var n=document.createElement("div");n.className=V.a.studioviewTitle;var o=document.createElement("div");return o.className=V.a.studioviewAuthor,e.thumbnailEl=t,e.titleEl=n,e.authorEl=o,e.appendChild(t),e.appendChild(n),e.appendChild(o),e},W.prototype.placeholderToProject=function(e,t,n,o){e.className=r()(V.a.studioviewProject,V.a.studioviewLoaded),e.dataset.id=t,e.dataset.title=n,e.dataset.author=o,e.title=this.messages.PROJECT_HOVER_TEXT.replace("$author",o).replace("$title",n),e.href=W.PROJECT_PAGE.replace("$id",t);var i=W.THUMBNAIL_SRC.replace("$id",t),a=this.createLazyImage(i);return e.thumbnailEl.appendChild(a),e.titleEl.innerText=n,e.authorEl.innerText=this.messages.AUTHOR_ATTRIBUTION.replace("$author",o),e.addEventListener("click",this.handleClick.bind(this),!0),e.addEventListener("keydown",this.handleKeyDown.bind(this),!0),e},W.prototype.addErrorElement=function(){var e=document.createElement("div");e.innerText=this.messages.LOAD_ERROR,e.className=V.a.studioviewError,this.projectList.appendChild(e)},W.prototype.handleLoadNextPageIntersection=function(e){for(var t=0;t<e.length;t++){e[t].isIntersecting&&this.canLoadNext()&&this.loadNextPage()}},W.prototype.clickProject=function(e){for(;!e.classList.contains(V.a.studioviewProject);)e=e.parentNode;var t=e.dataset.id;this.onselect(t,e)},W.prototype.handleClick=function(e){e.preventDefault(),this.clickProject(e.target)},W.prototype.handleKeyDown=function(e){13===e.keyCode&&(e.preventDefault(),this.clickProject(e.target))},W.prototype.handleIntersection=function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.dataset.src="",n.className="",t.unobserve(n)}}))},W.prototype.canLoadNext=function(){return!this.loadingPage&&!this.ended},W.prototype.cleanupPlaceholders=function(){for(;this.unusedPlaceholders.length;){var e=this.unusedPlaceholders.pop();this.projectList.removeChild(e)}},W.prototype.addPlaceholders=function(){for(var e=0;e<W.PLACEHOLDER_COUNT;e++){var t=this.createPlaceholder();this.unusedPlaceholders.push(t),this.projectList.appendChild(t)}},W.prototype.shuffler=function(e){return e},W.prototype.loadNextPage=function(){if(this.loadingPage)throw new Error("Already loading the next page");if(this.ended)throw new Error("There are no more pages to load");0===this.unusedPlaceholders.length&&this.addPlaceholders(),this.loadNextPageObserver&&this.loadNextPageObserver.disconnect(),this.root.setAttribute("loading",""),this.loadingPage=!0;var e=new XMLHttpRequest;e.responseType="json",e.onload=function(){var t=e.response;if(Array.isArray(t)){for(var n=[],o=0;o<t.length;o++){var r=t[o];n.push({id:r.id,title:r.title,author:r.username})}n=this.shuffler(n);for(o=0;o<n.length;o++)this.addProject(n[o]);this.cleanupPlaceholders(),40===t.length?this.loadNextPageObserver&&this.loadNextPageObserver.observe(this.projectList.lastChild):(this.ended=!0,this.onend()),this.offset+=n.length,this.loadingPage=!1,this.root.removeAttribute("loading"),this.onpageload()}else e.onerror()}.bind(this),e.onerror=function(){this.root.setAttribute("error",""),this.cleanupPlaceholders(),this.addErrorElement(),this.ended=!0}.bind(this);var t=W.STUDIO_API.replace("$id",this.studioId).replace("$offset",""+this.offset);e.open("GET",t),e.send()},W.prototype.getURL=function(){return W.STUDIO_PAGE.replace("$id",this.studioId)},W.prototype.onselect=function(e,t){},W.prototype.onpageload=function(){},W.prototype.onend=function(){},W.STUDIO_API="https://trampoline.turbowarp.org/proxy/studios/$id/projectstemporary/$offset",W.THUMBNAIL_SRC="https://cdn2.scratch.mit.edu/get_image/project/$id_144x108.png",W.PROJECT_PAGE="https://turbowarp.org/$id",W.STUDIO_PAGE="https://scratch.mit.edu/studios/$id/",W.PLACEHOLDER_COUNT=9;var z=W;const B=Object(u.d)({authorAttribution:{id:"tw.studioview.authorAttribution",defaultMessage:"by {author}"},hoverText:{id:"tw.studioview.hoverText",defaultMessage:"{title} by {author}"},error:{id:"tw.studioview.error",defaultMessage:"There was an error loading the next page of projects."}});class H extends c.a.Component{constructor(e){super(e),N()(this,["handleSelect","ref"])}componentDidMount(){this.studioView=new z(this.props.id),this.studioView.messages.AUTHOR_ATTRIBUTION=this.props.intl.formatMessage(B.authorAttribution,{author:"$author"}),this.studioView.messages.PROJECT_HOVER_TEXT=this.props.intl.formatMessage(B.hoverText,{author:"$author",title:"$title"}),this.studioView.messages.LOAD_ERROR=this.props.intl.formatMessage(B.error),this.props.placeholder?this.studioView.addPlaceholders():this.studioView.loadNextPage(),this.studioView.onselect=this.handleSelect,this.el.appendChild(this.studioView.root)}componentDidUpdate(e){e.placeholder&&!this.props.placeholder&&this.studioView.loadNextPage()}handleSelect(e){this.props.onSelect(e)}ref(e){this.el=e}render(){return c.a.createElement("div",{className:r()(V.a.wrapper),ref:this.ref})}}H.propTypes={id:a.a.string.isRequired,intl:u.f.isRequired,placeholder:a.a.bool,onSelect:a.a.func.isRequired};var $=Object(u.e)(H),X=n(45),Z=n.n(X);class J extends c.a.Component{constructor(e){super(e),N()(this,["handleSelect","handleOpenProjects"]),this.state={opened:!1,transition:!0}}componentDidUpdate(e){"0"===this.props.projectId&&null===e.projectId&&this.setState({opened:!0,transition:!1})}handleSelect(e){this.props.setProjectId(e)}handleOpenProjects(){this.setState({opened:!0})}render(){const e=this.state.opened;return c.a.createElement("div",{className:Z.a.container},c.a.createElement("div",{className:r()(Z.a.projects,{[Z.a.opened]:e,[Z.a.transition]:this.state.transition})},c.a.createElement($,{id:this.props.studio,onSelect:this.handleSelect,placeholder:!e}),e?null:c.a.createElement("div",{className:Z.a.openerContainer,onClick:this.handleOpenProjects},c.a.createElement("div",{className:Z.a.openerContent},c.a.createElement(u.a,{defaultMessage:"Click to view featured projects.",id:"tw.viewFeaturedProjects"})))),c.a.createElement("div",{className:Z.a.footer},c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://scratch.mit.edu/studios/".concat(this.props.studio,"/")},c.a.createElement(u.a,{defaultMessage:"View studio on Scratch.",id:"tw.featuredProjectsStudio"}))))}}J.propTypes={setProjectId:a.a.func,projectId:a.a.string,studio:a.a.string};var K=Object(d.b)(e=>({projectId:e.scratchGui.projectState.projectId}),e=>({setProjectId:t=>Object(U.b)(e,t)}))(J),Q=n(59),Y=n.n(Q),ee=n(94),te=n.n(ee);const ne=e=>{e=te()(e,/@([\w-]+)/,(e,t)=>c.a.createElement("a",{href:"https://scratch.mit.edu/users/".concat(e,"/"),rel:"noreferrer",key:e+t},"@".concat(e)));return e=te()(e,/(https?:\/\/[\w\d_\-.]{1,256}(?:\/(?:\S*[\w:/#[\]@$&'()*+=])?)?(?![^?!,:;\w\s]\S))/g,(e,t)=>c.a.createElement("a",{href:e,rel:"noreferrer",key:e+t},e)),e=te()(e,/#([\w-]+)/g,(e,t)=>c.a.createElement("a",{href:"https://scratch.mit.edu/search/projects?q=".concat(e),key:e+t},"#".concat(e)))},oe=({instructions:e,credits:t,projectId:n})=>c.a.createElement("div",{className:Y.a.description},"unshared"===e&&"unshared"===t?c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/TurboWarp/scratch-gui/wiki/Unshared-Projects",target:"_blank",rel:"noreferrer"},c.a.createElement(u.a,{defaultMessage:"Regarding unshared projects",id:"tw.regardingUnshared"}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:Y.a.projectLink},c.a.createElement("a",{href:"https://scratch.mit.edu/projects/".concat(n,"/"),target:"_blank",rel:"noreferrer"},c.a.createElement(u.a,{defaultMessage:"View project on Scratch",id:"tw.viewOnScratch"}))),e?c.a.createElement("div",null,c.a.createElement("h2",{className:Y.a.header},c.a.createElement(u.a,{defaultMessage:"Instructions",id:"tw.home.instructions"})),ne(e)):null,e&&t?c.a.createElement("div",{className:Y.a.divider}):null,t?c.a.createElement("div",null,c.a.createElement("h2",{className:Y.a.header},c.a.createElement(u.a,{defaultMessage:"Notes and Credits",id:"tw.home.credit"})),ne(t)):null));oe.propTypes={instructions:a.a.string,credits:a.a.string,projectId:a.a.string};var re=oe,ie=n(167),ae=n(164),se=n(152),ce=n.n(se),de=n(95),le=n.n(de);var ue=()=>c.a.createElement("div",{className:le.a.badge},c.a.createElement("div",{className:le.a.icon},c.a.createElement("img",{src:ce.a,alt:"Cloud",width:"32",height:"32"})),c.a.createElement("div",{className:le.a.text},c.a.createElement(u.a,{defaultMessage:"This project uses cloud variables. TurboWarp uses its own cloud variable server independent of Scratch. Note that users may not be who their username says they are.",id:"tw.cloudVariableBadge"}))),pe=n(73),he=n(60);n(153);var fe=()=>{0},me=n(18),ve=n.n(me);window.parent!==window&&alert("This page is embedding TurboWarp in a way that is unsupported and will cease to function in the near future. Please read https://github.com/TurboWarp/scratch-gui/wiki/Embedding");const _e=()=>{window.open("".concat("").concat("addons.html"))},ge=Object(u.d)({defaultTitle:{id:"tw.guiDefaultTitle",defaultMessage:"Run Scratch projects faster"}}),we=Object(l.d)(E.a)(k.a);he.a.reloadChannel&&he.a.reloadChannel.addEventListener("message",()=>{location.reload()}),he.a.changeChannel&&he.a.changeChannel.addEventListener("message",e=>{P.a.setStoreWithVersionCheck(e.data)}),Promise.all([n.e(4),n.e(6)]).then(n.bind(null,2024));const be=()=>c.a.createElement("footer",{className:ve.a.footer},c.a.createElement("div",{className:ve.a.footerContent},c.a.createElement("div",{className:ve.a.footerText},c.a.createElement(u.a,{defaultMessage:"TurboWarp is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.",id:"tw.footer.disclaimer"})),c.a.createElement("div",{className:ve.a.footerColumns},c.a.createElement("div",{className:ve.a.footerSection},c.a.createElement("a",{href:"https://fosshost.org/"},c.a.createElement(u.a,{defaultMessage:"Hosting provided by Fosshost",id:"tw.footer.fosshost"})),c.a.createElement("a",{href:"credits.html"},c.a.createElement(u.a,{defaultMessage:"Credits",id:"tw.footer.credits"}))),c.a.createElement("div",{className:ve.a.footerSection},c.a.createElement("a",{href:"https://desktop.turbowarp.org/"},"TurboWarp Desktop"),c.a.createElement("a",{href:"https://packager.turbowarp.org/"},"TurboWarp Packager"),c.a.createElement("a",{href:"https://github.com/TurboWarp/scratch-gui/wiki/Embedding"},c.a.createElement(u.a,{defaultMessage:"Embedding",id:"tw.footer.embed"})),c.a.createElement("a",{href:"https://github.com/TurboWarp/scratch-gui/wiki/URL-Parameters"},c.a.createElement(u.a,{defaultMessage:"URL Parameters",id:"tw.footer.parameters"})),c.a.createElement("a",{href:"https://github.com/TurboWarp/scratch-gui/wiki/Help-translate-TurboWarp"},c.a.createElement(u.a,{defaultMessage:"Help Translate TurboWarp",id:"tw.footer.translate"}))),c.a.createElement("div",{className:ve.a.footerSection},c.a.createElement("a",{href:"https://scratch.mit.edu/users/GarboMuffin/#comments"},c.a.createElement(u.a,{defaultMessage:"Feedback & Bugs",id:"tw.feedback"})),c.a.createElement("a",{href:"https://github.com/TurboWarp/"},c.a.createElement(u.a,{defaultMessage:"Source Code",id:"tw.code"})),c.a.createElement("a",{href:"privacy.html"},c.a.createElement(u.a,{defaultMessage:"Privacy Policy",id:"tw.privacy"}))))));class je extends c.a.Component{constructor(e){super(e),this.handleUpdateProjectTitle=this.handleUpdateProjectTitle.bind(this)}componentDidUpdate(e){e.isLoading&&!this.props.isLoading&&fe()}handleUpdateProjectTitle(e,t){document.title=t||!e?"TurboWarp - ".concat(this.props.intl.formatMessage(ge.defaultTitle)):"".concat(e," - TurboWarp")}render(){const{hasCloudVariables:e,description:t,isFullScreen:n,isPlayerOnly:o,isRtl:i,onClickTheme:a,projectId:s}=this.props,d=o&&!n,l=!o;return c.a.createElement("div",{className:r()(ve.a.container,{[ve.a.playerOnly]:d,[ve.a.editor]:l})},d?c.a.createElement("div",{className:ve.a.menu},c.a.createElement(we,{canChangeLanguage:!0,canManageFiles:!0,enableSeeInside:!0,onClickAddonSettings:_e,onClickTheme:a})):null,c.a.createElement("div",{className:ve.a.center,style:o?{width:"".concat(Math.max(480,T.a.width)+2,"px")}:null},null,c.a.createElement(I.a,{onClickAddonSettings:_e,onClickTheme:a,onUpdateProjectTitle:this.handleUpdateProjectTitle,backpackVisible:!0,backpackHost:"_local_"}),d?c.a.createElement(c.a.Fragment,null,Object(pe.d)()?null:c.a.createElement(ie.a,{isRtl:i}),Object(pe.b)()?null:c.a.createElement(ae.a,{isRtl:i}),c.a.createElement("div",{className:ve.a.section},c.a.createElement(G,null)),e&&"0"!==s&&c.a.createElement("div",{className:ve.a.section},c.a.createElement(ue,null)),t.instructions||t.credits?c.a.createElement("div",{className:ve.a.section},c.a.createElement(re,{instructions:t.instructions,credits:t.credits,projectId:s})):null,c.a.createElement("div",{className:ve.a.section},c.a.createElement("p",null,c.a.createElement(u.a,{defaultMessage:"TurboWarp is a Scratch mod that compiles projects to JavaScript to make them run really fast. Try it out by inputting a project ID or URL above or choosing a featured project below.",id:"tw.home.description"}))),c.a.createElement("div",{className:ve.a.section},c.a.createElement(K,{studio:"27205657"}))):null),d&&c.a.createElement(be,null))}}je.propTypes={intl:u.f,hasCloudVariables:a.a.bool,description:a.a.shape({credits:a.a.string,instructions:a.a.string}),isFullScreen:a.a.bool,isLoading:a.a.bool,isPlayerOnly:a.a.bool,isRtl:a.a.bool,onClickTheme:a.a.func,projectId:a.a.string};const xe=Object(u.e)(Object(d.b)(e=>({hasCloudVariables:e.scratchGui.tw.hasCloudVariables,description:e.scratchGui.tw.description,isFullScreen:e.scratchGui.mode.isFullScreen,isLoading:Object(p.m)(e.scratchGui.projectState.loadingState),isPlayerOnly:e.scratchGui.mode.isPlayerOnly,isRtl:e.locales.isRtl,projectId:e.scratchGui.projectState.projectId}),()=>({}))(je)),ye=Object(l.d)(h.a,Object(f.a)("TW Interface"),(function(e){class t extends c.a.Component{shouldComponentUpdate(e){return this.props.projectId!==e.projectId}componentDidUpdate(){this.props.onSetAuthor("",""),this.props.onSetDescription("","");const e=this.props.projectId;"0"!==e&&(e=>fetch("https://trampoline.turbowarp.org/proxy/projects/$id".replace("$id",e)).then(e=>{if(404===e.status)throw new Error("Probably unshared (API returned 404)");if(200!==e.status)throw new Error("Unexpected status code: ".concat(e.status));return e.json()}))(e).then(t=>{if(this.props.projectId!==e)return;const n=t.title;n&&this.props.onSetProjectTitle(n);const o=t.author.username,r=t.author.profile.images["32x32"];o&&r&&this.props.onSetAuthor(o,r);const i=t.instructions||"",a=t.description||"";(i||a)&&this.props.onSetDescription(i,a);const{views:s,loves:c,favorites:d}=t.stats;j(s>=50&&c>=5&&d>=5)}).catch(e=>{j(!1),"".concat(e).includes("unshared")&&this.props.onSetDescription("unshared","unshared"),m.default.warn("cannot fetch project meta",e)})}render(){const t=this.props,{projectId:n,onSetAuthor:o,onSetDescription:r,onSetProjectTitle:i}=t,a=w(t,g);return c.a.createElement(e,a)}}t.propTypes={projectId:a.a.string,onSetAuthor:a.a.func,onSetDescription:a.a.func,onSetProjectTitle:a.a.func};return Object(d.b)(e=>({projectId:e.scratchGui.projectState.projectId}),e=>({onSetAuthor:(t,n)=>e(Object(_.d)({username:t,thumbnail:n})),onSetDescription:(t,n)=>e(Object(_.g)({instructions:t,credits:n})),onSetProjectTitle:t=>e(Object(v.c)(t))}))(t)}),x.a,y.a)(xe);t.a=ye},18:function(e,t,n){var o=n(265);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,r);o.locals&&(e.exports=o.locals)},23:function(e,t,n){var o=n(242);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,r);o.locals&&(e.exports=o.locals)},241:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,'/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ /*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are "inside" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/ /* Toolbox z-index: 40; set in scratch-blocks */ /* tooltips should go over add buttons if they overlap */ /* monitors go over add buttons */ /* "ask" block text input goes above monitors */ /* menu-bar should go over monitors, alerts and tutorials */ /* tw: show below menu bar normally */ /* Block drag z-index: 1000; default 50 is overriden in blocks.css */ /* so it is draggable into other panes */ /* in most interfaces, the context menu is always on top */ .project-input_input_1gT4y {\n    border: none;\n    width: 100%;\n    font-size: 23px;\n    line-height: 32px;\n    opacity: 0.5;\n    background-color: transparent;\n    color: inherit;\n} .project-input_input_1gT4y:focus {\n    opacity: 1;\n} .project-input_input_1gT4y:disabled {\n    opacity: 0.8;\n} .project-input_tooltip_3y9t4 {\n    opacity: 1 !important;\n    background-color: hsla(10, 85%, 65%, 1) !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    box-shadow: 0 0 .5rem hsla(0, 0%, 0%, .25) !important;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    z-index: 491 !important;\n} .project-input_tooltip_3y9t4:after {\n    border-top-color: hsla(10, 85%, 65%, 1) !important;\n}\n',""]),t.locals={input:"project-input_input_1gT4y",tooltip:"project-input_tooltip_3y9t4"}},242:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,"/*\nImported from:\nhttps://github.com/forkphorus/forkphorus/tree/master/studioview\nWith changes to make it work properly in the scratch-gui environment.\n*/\n\n/* we wrap it in a <div> */\n\n.studioview_wrapper_GWWqn {\n  height: 100%;\n}\n\n/* fix some styles that can be messed up by scratch-gui */\n\n.studioview_studioview-root_z_auP * {\n  box-sizing: content-box !important;\n}\n\n.studioview_studioview-root_z_auP {\n  height: 100%;\n}\n\n.studioview_studioview-list_1X1Hw {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-anchor: none;\n}\n\n.studioview_studioview-project_2kPXX, .studioview_studioview-placeholder__NrP7 {\n  display: inline-block;\n  width: 144px;\n  padding: 3px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.studioview_studioview-root_z_auP .studioview_studioview-project_2kPXX {\n  color: inherit;\n  position: relative;\n  text-decoration: none;\n}\n\n.studioview_studioview-loaded_mx24q:hover::before, .studioview_studioview-loaded_mx24q:active::before {\n  content: '';\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-root_z_auP .studioview_studioview-loaded_mx24q:active::before {\n  opacity: 0.2;\n}\n\n.studioview_studioview-root_z_auP .studioview_studioview-title_1eZiq,\n.studioview_studioview-root_z_auP .studioview_studioview-author_Bs0a5 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: inherit;\n  text-decoration: none;\n}\n\n.studioview_studioview-title_1eZiq {\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.studioview_studioview-author_Bs0a5 {\n  font-size: 0.75em;\n}\n\n.studioview_studioview-error_ZX8-M {\n  width: 100%;\n}\n\n.studioview_studioview-thumbnail_2nU6_, .studioview_studioview-placeholder-thumbnail_4Fi8w {\n  position: relative;\n  width: 144px;\n  height: 108px;\n}\n\n.studioview_studioview-thumbnail_2nU6_::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-thumbnail_2nU6_ img {\n  width: 100%;\n  height: 100%;\n}\n\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-thumbnail_2nU6_,\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-title_1eZiq,\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-author_Bs0a5 {\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-title_1eZiq {\n  height: 20px;\n  margin-top: 2px;\n}\n\n.studioview_studioview-author_Bs0a5 {\n  height: 18px;\n}\n\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-title_1eZiq {\n  border-radius: 2px 2px 2px 0;\n  width: 100%;\n}\n\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-author_Bs0a5 {\n  border-radius: 0 0 2px 2px;\n  width: 50%;\n}\n",""]),t.locals={wrapper:"studioview_wrapper_GWWqn","studioview-root":"studioview_studioview-root_z_auP",studioviewRoot:"studioview_studioview-root_z_auP","studioview-list":"studioview_studioview-list_1X1Hw",studioviewList:"studioview_studioview-list_1X1Hw","studioview-project":"studioview_studioview-project_2kPXX",studioviewProject:"studioview_studioview-project_2kPXX","studioview-placeholder":"studioview_studioview-placeholder__NrP7",studioviewPlaceholder:"studioview_studioview-placeholder__NrP7","studioview-loaded":"studioview_studioview-loaded_mx24q",studioviewLoaded:"studioview_studioview-loaded_mx24q","studioview-title":"studioview_studioview-title_1eZiq",studioviewTitle:"studioview_studioview-title_1eZiq","studioview-author":"studioview_studioview-author_Bs0a5",studioviewAuthor:"studioview_studioview-author_Bs0a5","studioview-error":"studioview_studioview-error_ZX8-M",studioviewError:"studioview_studioview-error_ZX8-M","studioview-thumbnail":"studioview_studioview-thumbnail_2nU6_",studioviewThumbnail:"studioview_studioview-thumbnail_2nU6_","studioview-placeholder-thumbnail":"studioview_studioview-placeholder-thumbnail_4Fi8w",studioviewPlaceholderThumbnail:"studioview_studioview-placeholder-thumbnail_4Fi8w"}},243:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,".featured-projects_container_bte5t {\n    margin-bottom: 8px;\n}\n\n.featured-projects_opener-container_2VEwo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0.8;\n    color: #222;\n}\n\n.featured-projects_opener-container_2VEwo:hover {\n    opacity: 1;\n}\n\n.featured-projects_opener-content_2nRNs {\n    background-color: white;\n    padding: 4px;\n    border: 1px solid black;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);\n}\n\n.featured-projects_projects_3USxm {\n    position: relative;\n    height: 155px;\n}\n\n.featured-projects_projects_3USxm.featured-projects_transition_2s3rd {\n    transition: .2s height;\n}\n\n.featured-projects_projects_3USxm.featured-projects_opened_1ALXH {\n    height: 310px;\n}\n\n.featured-projects_footer_UQGNp {\n    \n}\n",""]),t.locals={container:"featured-projects_container_bte5t","opener-container":"featured-projects_opener-container_2VEwo",openerContainer:"featured-projects_opener-container_2VEwo","opener-content":"featured-projects_opener-content_2nRNs",openerContent:"featured-projects_opener-content_2nRNs",projects:"featured-projects_projects_3USxm",transition:"featured-projects_transition_2s3rd",opened:"featured-projects_opened_1ALXH",footer:"featured-projects_footer_UQGNp"}},244:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,'.description_description_TJxeu {\n    max-height: 250px;\n    overflow: auto;\n    white-space: pre-line;\n    overflow-wrap: break-word;\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n\n.description_description_TJxeu a {\n    font-weight: bold;\n    text-decoration: none;\n}\n\n[theme="dark"] .description_description_TJxeu {\n    border-color: #203652;\n    background-color: #16202c;\n}\n\n.description_header_3Bv2V {\n    font-weight: bold;\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n}\n\n.description_divider_NGZle {\n    margin-top: 8px;\n}\n\n.description_project-link_2xt5_ {\n    margin-bottom: 2px;\n}\n',""]),t.locals={description:"description_description_TJxeu",header:"description_header_3Bv2V",divider:"description_divider_NGZle","project-link":"description_project-link_2xt5_",projectLink:"description_project-link_2xt5_"}},245:function(e,t,n){var o=n(246),r=n(250),i=n(251),a=i&&i.isRegExp,s=a?r(a):o;e.exports=s},246:function(e,t,n){var o=n(91),r=n(70);e.exports=function(e){return r(e)&&"[object RegExp]"==o(e)}},247:function(e,t,n){var o=n(150),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},248:function(e,t,n){var o=n(92),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,s=o?o.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var o=!0}catch(e){}var r=a.call(e);return o&&(t?e[s]=n:delete e[s]),r}},249:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},250:function(e,t){e.exports=function(e){return function(t){return e(t)}}},251:function(e,t,n){(function(e){var o=n(150),r=t&&!t.nodeType&&t,i=r&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===r&&o.process,s=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(e){}}();e.exports=s}).call(this,n(203)(e))},252:function(e,t,n){var o=n(253),r=/[\\^$.*+?()[\]{}|]/g,i=RegExp(r.source);e.exports=function(e){return(e=o(e))&&i.test(e)?e.replace(r,"\\$&"):e}},253:function(e,t,n){var o=n(254);e.exports=function(e){return null==e?"":o(e)}},254:function(e,t,n){var o=n(92),r=n(255),i=n(111),a=n(256),s=o?o.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},255:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},256:function(e,t,n){var o=n(91),r=n(70);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},257:function(e,t,n){var o=n(91),r=n(111),i=n(70);e.exports=function(e){return"string"==typeof e||!r(e)&&i(e)&&"[object String]"==o(e)}},258:function(e,t,n){var o=n(259);e.exports=function(e){return(null==e?0:e.length)?o(e,1):[]}},259:function(e,t,n){var o=n(260),r=n(261);e.exports=function e(t,n,i,a,s){var c=-1,d=t.length;for(i||(i=r),s||(s=[]);++c<d;){var l=t[c];n>0&&i(l)?n>1?e(l,n-1,i,a,s):o(s,l):a||(s[s.length]=l)}return s}},260:function(e,t){e.exports=function(e,t){for(var n=-1,o=t.length,r=e.length;++n<o;)e[r+n]=t[n];return e}},261:function(e,t,n){var o=n(92),r=n(262),i=n(111),a=o?o.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||r(e)||!!(a&&e&&e[a])}},262:function(e,t,n){var o=n(263),r=n(70),i=Object.prototype,a=i.hasOwnProperty,s=i.propertyIsEnumerable,c=o(function(){return arguments}())?o:function(e){return r(e)&&a.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},263:function(e,t,n){var o=n(91),r=n(70);e.exports=function(e){return r(e)&&"[object Arguments]"==o(e)}},264:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,'.cloud-variable-badge_badge_1n_s5 {\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    display: flex;\n    align-items: center;\n    border-radius: 0.5rem;\n}\n[theme="dark"] .cloud-variable-badge_badge_1n_s5 {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.cloud-variable-badge_icon_3ph5l {\n    margin-right: 0.25rem;\n}\n[theme="dark"] .cloud-variable-badge_icon_3ph5l {\n    filter: invert(100%);\n}\n.cloud-variable-badge_text_2zFOB {\n\n}\n',""]),t.locals={badge:"cloud-variable-badge_badge_1n_s5",icon:"cloud-variable-badge_icon_3ph5l",text:"cloud-variable-badge_text_2zFOB"}},265:function(e,t,n){(t=e.exports=n(9)(!1)).push([e.i,'p {\n    margin: 0;\n}\na {\n    color: #25d;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.interface_container_1cGgE {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.interface_editor_3WnQ8 {\n    min-width: 1024px;\n    min-height: 640px;\n    height: 100%;\n}\n.interface_editor_3WnQ8 .interface_center_2vEJw {\n    height: 100%;\n}\n.interface_player-only_1YGqr .interface_center_2vEJw {\n    margin: auto;\n}\n.interface_menu_2TZCG {\n    margin-bottom: 8px;\n}\n.interface_section_3f_bi {\n    margin: 8px 0 8px 0;\n}\n.interface_footer_vF3nx {\n    padding: 10px 0;\n    margin-top: 10px;\n    background: #eee;\n}\n.interface_footer_vF3nx a {\n    font-weight: bold;\n    text-decoration: none;\n}\n[theme="dark"] .interface_footer_vF3nx {\n    background-color: #151515;\n}\n.interface_footer-content_2-VDh {\n    max-width: 600px;\n    margin: auto;\n}\n.interface_footer-text_2qZPP {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n.interface_footer-columns_22Cpb {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n.interface_footer-section_vgGzW {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n.interface_footer-section_vgGzW > * {\n    margin-bottom: 10px;\n}\n[theme="dark"] .interface_container_1cGgE {\n    background-color: #111;\n}\n[theme="dark"] .interface_player-only_1YGqr {\n    color: #ddd;\n}\n[theme="dark"] a {\n    color: #4af;\n}\n',""]),t.locals={container:"interface_container_1cGgE",editor:"interface_editor_3WnQ8",center:"interface_center_2vEJw","player-only":"interface_player-only_1YGqr",playerOnly:"interface_player-only_1YGqr",menu:"interface_menu_2TZCG",section:"interface_section_3f_bi",footer:"interface_footer_vF3nx","footer-content":"interface_footer-content_2-VDh",footerContent:"interface_footer-content_2-VDh","footer-text":"interface_footer-text_2qZPP",footerText:"interface_footer-text_2qZPP","footer-columns":"interface_footer-columns_22Cpb",footerColumns:"interface_footer-columns_22Cpb","footer-section":"interface_footer-section_vgGzW",footerSection:"interface_footer-section_vgGzW"}},45:function(e,t,n){var o=n(243);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,r);o.locals&&(e.exports=o.locals)},59:function(e,t,n){var o=n(244);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,r);o.locals&&(e.exports=o.locals)},70:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},91:function(e,t,n){var o=n(92),r=n(248),i=n(249),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):i(e)}},92:function(e,t,n){var o=n(247).Symbol;e.exports=o},94:function(e,t,n){var o=n(245),r=n(252),i=n(257),a=n(258);e.exports=function(e,t,n){return Array.isArray(e)||(e=[e]),a(e.map((function(e){return i(e)?function(e,t,n){var a=0,s=0;if(""===e)return e;if(!e||!i(e))throw new TypeError("First argument to react-string-replace#replaceString must be a string");var c=t;o(c)||(c=new RegExp("("+r(c)+")","gi"));for(var d=e.split(c),l=1,u=d.length;l<u;l+=2)s=d[l].length,a+=d[l-1].length,d[l]=n(d[l],l,a),a+=s;return d}(e,t,n):e})))}},95:function(e,t,n){var o=n(264);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(10)(o,r);o.locals&&(e.exports=o.locals)}});