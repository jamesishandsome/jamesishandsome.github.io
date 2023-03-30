var la=Object.defineProperty,sa=Object.defineProperties;var ca=Object.getOwnPropertyDescriptors;var ai=Object.getOwnPropertySymbols;var _i=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable;var Vi=(Ne,re,N)=>re in Ne?la(Ne,re,{enumerable:!0,configurable:!0,writable:!0,value:N}):Ne[re]=N,ke=(Ne,re)=>{for(var N in re||(re={}))_i.call(re,N)&&Vi(Ne,N,re[N]);if(ai)for(var N of ai(re))Ui.call(re,N)&&Vi(Ne,N,re[N]);return Ne},sn=(Ne,re)=>sa(Ne,ca(re));var nt=(Ne,re)=>{var N={};for(var ut in Ne)_i.call(Ne,ut)&&re.indexOf(ut)<0&&(N[ut]=Ne[ut]);if(Ne!=null&&ai)for(var ut of ai(Ne))re.indexOf(ut)<0&&Ui.call(Ne,ut)&&(N[ut]=Ne[ut]);return N};(self.webpackChunk=self.webpackChunk||[]).push([[823],{40351:function(Ne,re){"use strict";var N={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};re.Z=N},37536:function(Ne,re,N){(()=>{var ut={271:(u,x,g)=>{"use strict";g.d(x,{Z:()=>E});const E=(B,S)=>B?function(){for(var L=arguments.length,U=new Array(L),Re=0;Re<L;Re++)U[Re]=arguments[Re];return console.log(`<${S}/> Debug Log: `,...U)}:()=>{}},88:(u,x,g)=>{"use strict";g.d(x,{Z:()=>yr});var E=g(497),B=g.n(E),S=g(379),L=g.n(S),U=g(795),Re=g.n(U),Pe=g(569),ze=g.n(Pe),R=g(565),z=g.n(R),a=g(216),He=g.n(a),P=g(589),j=g.n(P),me=g(563),Te={};Te.styleTagTransform=j(),Te.setAttributes=z(),Te.insert=ze().bind(null,"head"),Te.domAPI=Re(),Te.insertStyleElement=He();var Dt=L()(me.Z,Te);const dt=me.Z&&me.Z.locals?me.Z.locals:void 0;var Br=g(271),er=g(542);function bn(St,le){var ue=Object.keys(St);if(Object.getOwnPropertySymbols){var et=Object.getOwnPropertySymbols(St);le&&(et=et.filter(function(be){return Object.getOwnPropertyDescriptor(St,be).enumerable})),ue.push.apply(ue,et)}return ue}function Ut(St){for(var le=1;le<arguments.length;le++){var ue=arguments[le]!=null?arguments[le]:{};le%2?bn(Object(ue),!0).forEach(function(et){Nr(St,et,ue[et])}):Object.getOwnPropertyDescriptors?Object.defineProperties(St,Object.getOwnPropertyDescriptors(ue)):bn(Object(ue)).forEach(function(et){Object.defineProperty(St,et,Object.getOwnPropertyDescriptor(ue,et))})}return St}function Nr(St,le,ue){return le in St?Object.defineProperty(St,le,{value:ue,enumerable:!0,configurable:!0,writable:!0}):St[le]=ue,St}let Ge;const yn=St=>typeof St=="function",pr=(St,le)=>St.length!==le.length?!1:St.find(ue=>!le.includes(ue))==null,fe=["afterLoad","afterRender","afterResize","afterResponsive","afterSlideLoad","onLeave","onSlideLeave"];class Ve extends B().Component{constructor(le){super(le);const{render:ue,pluginWrapper:et}=this.props;if(!yn(ue))throw new Error("must provide render prop to <ReactFullpage />");this.log=(0,Br.Z)(this.props.debug,"ReactFullpage"),this.log("Building component"),this.log("Importing vendor files"),this.importVendors(),et&&(this.log("Calling plugin wrapper"),et()),this.log("Requiring fullpage.js"),Ge=g(933),this.state={initialized:!1,sectionCount:0,slideCount:0}}componentDidMount(){const le=this.buildOptions();this.log("React Lifecycle: componentDidMount()"),Ge&&(this.init(le),this.markInitialized())}isReRenderNecessary(le){const ue=this.getSectionCount(),et=this.getSlideCount(),{sectionCount:be,slideCount:kt}=this.state;let Ye=be!==ue||kt!==et;return["sectionsColor","navigationTooltips","navigationPosition","navigation","scrollBar"].forEach(Rt=>{typeof le[Rt]!="undefined"&&(Array.isArray(le[Rt])?Ye=Ye||!pr(le[Rt],this.props[Rt]):Ye=Ye||le[Rt]!==this.props[Rt])}),Ye}componentDidUpdate(le){if(this.log("React Lifecycle: componentDidUpdate()"),this.isReRenderNecessary(le)){this.log("rebuilding due to a change in fullpage.js props or num sections/slides"),this.reRender();return}}componentWillUnmount(){this.destroy()}getSectionCount(){const{sectionSelector:le=er.uS}=this.props,{length:ue}=document.querySelectorAll(le);return ue}getSlideCount(){const{slideSelector:le=er.xH}=this.props,{length:ue}=document.querySelectorAll(le);return ue}importVendors(){const{easing:le,css3:ue}=this.props;le&&!ue&&g(239)}init(le){this.log("Reinitializing fullpage with options",le);const ue=le.animateAnchor;le.animateAnchor=!1,new Ge(er.Km,le),this.fullpageApi=window.fullpage_api,this.fpUtils=window.fp_utils,this.fpEasings=window.fp_easings,window.fullpage_api.getFullpageData().options.animateAnchor=ue}destroy(){this.log("Destroying fullpage instance"),this.fullpageApi.destroy("all")}reRender(){const le=this.props.slideSelector||".slide",ue=this.props.sectionSelector||".section",et=document.querySelector(ue+".active"),be=et?this.fpUtils.index(et):this.state.destination?this.state.destination.index-1:0,kt=document.querySelector(ue+".active "+le+".active"),Ye=kt?this.fpUtils.index(kt):-1;this.destroy(),be>-1&&this.fpUtils.addClass(document.querySelectorAll(ue)[be],"active"),Ye>-1&&this.fpUtils.addClass(kt,"active"),this.init(this.buildOptions())}markInitialized(){this.log("Marking initialized"),this.setState({initialized:!0,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()})}buildOptions(){var le=this;let ue=null;if(!this.state.initialized){const be=Ye=>!!Object.keys(this.props).find(Qt=>Qt===Ye);ue=fe.filter(be).reduce((Ye,Qt)=>Ut(Ut({},Ye),{},{[Qt]:function(){for(var Rt=arguments.length,hr=new Array(Rt),gt=0;gt<Rt;gt++)hr[gt]=arguments[gt];return le.update(Qt,...hr)}}),{})}const et=Ut(Ut({},this.props),ue);return this.log("Building fullpage.js options: ",et),et}update(le){for(var ue=arguments.length,et=new Array(ue>1?ue-1:0),be=1;be<ue;be++)et[be-1]=arguments[be];this.log("Event trigger: ",le);let kt=Ut(Ut({},this.state),{},{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});const Ye=hr=>Ut(Ut(Ut({},kt),hr),{},{lastEvent:le}),Qt=hr=>hr.reduce((gt,yt,zr)=>{const or=et[zr];return gt[yt]=or,gt},{});switch(le){case"afterLoad":kt=Ye(Qt(["origin","destination","direction"]));break;case"afterResize":kt=Ye(Qt([""]));break;case"afterResponsive":kt=Ye(Qt(["isResponsive"]));break;case"afterSlideLoad":kt=Ye(Qt(["section","origin","destination","direction"]));break;case"onLeave":kt=Ye(Qt(["origin","destination","direction"]));break;case"onSlideLeave":kt=Ye(Qt(["section","origin","slideIndex","destination","direction"]));break;default:break}const Rt=this.props[le](...et);return this.log("Called callback: Returning => ",Rt),this.log("Updating State => ",kt),this.setState(kt),Rt}render(){return this.log("<== Rendering ==>"),B().createElement("div",{id:er.W1},this.props.render(this))}}Ve.defaultProps={sectionsColor:[]};const yr=Ve},882:(u,x,g)=>{"use strict";g.d(x,{Z:()=>Re});var E=g(497),B=g.n(E),S=g(271),L=g(542);class U extends B().Component{constructor(ze){super(ze),this.state={},this.log=(0,S.Z)(this.props.debug,"ReactFullpageShell"),this.log("Building component")}render(){return B().createElement("div",{id:L.W1},this.props.render(this))}}const Re=U},542:(u,x,g)=>{"use strict";g.d(x,{W1:()=>E,Km:()=>B,uS:()=>S,xH:()=>L});const E="fullpage",B=`#${E}`,S=".section",L=".SLIDE"},563:(u,x,g)=>{"use strict";g.d(x,{Z:()=>L});var E=g(645),B=g.n(E),S=B()(function(U){return U[1]});S.push([u.id,`/*!\r
 * fullPage 4.0.19\r
 * https://github.com/alvarotrigo/fullPage.js\r
 *\r
 * @license GPLv3 for open source use only\r
 * or Fullpage Commercial License for commercial use\r
 * http://alvarotrigo.com/fullPage/pricing/\r
 *\r
 * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r
 */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;display:block}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-table{display:flex;flex-direction:column;justify-content:center;width:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-prev{left:15px}.fp-next{right:15px}.fp-arrow{width:0;height:0;border-style:solid}.fp-arrow.fp-prev{border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-arrow.fp-next{border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-is-overflow.fp-section{height:auto!important}.fp-scrollable .fp-section,.fp-scrollable .fp-slide,.fp-scrollable.fp-responsive .fp-is-overflow.fp-section{height:100vh;height:calc(var(--vh,1vh) * 100)}.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]),.fp-scrollable.fp-responsive .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]){min-height:100vh;min-height:calc(var(--vh,1vh) * 100)}.fp-overflow{justify-content:flex-start;max-height:100vh}.fp-scrollable .fp-auto-height .fp-overflow{max-height:none}.fp-is-overflow .fp-overflow.fp-auto-height,.fp-is-overflow .fp-overflow.fp-auto-height-responsive,.fp-is-overflow>.fp-overflow{overflow-y:auto}.fp-overflow{outline:0}.fp-overflow.fp-table{display:block}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important;min-height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.fp-scroll-mac .fp-overflow::-webkit-scrollbar{background-color:transparent;width:9px}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track{background-color:transparent}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4);border-radius:16px;border:4px solid transparent}.fp-warning,.fp-watermark{z-index:9999999;position:absolute;bottom:0}.fp-warning,.fp-watermark a{text-decoration:none;color:#000;background:rgba(255,255,255,.6);padding:5px 8px;font-size:14px;font-family:arial;color:#000;display:inline-block;border-radius:3px;margin:12px}.fp-noscroll .fp-overflow{overflow:hidden}\r
`,""]);const L=S},645:u=>{"use strict";u.exports=function(x){var g=[];return g.toString=function(){return this.map(function(B){var S=x(B);return B[2]?"@media ".concat(B[2]," {").concat(S,"}"):S}).join("")},g.i=function(E,B,S){typeof E=="string"&&(E=[[null,E,""]]);var L={};if(S)for(var U=0;U<this.length;U++){var Re=this[U][0];Re!=null&&(L[Re]=!0)}for(var Pe=0;Pe<E.length;Pe++){var ze=[].concat(E[Pe]);S&&L[ze[0]]||(B&&(ze[2]?ze[2]="".concat(B," and ").concat(ze[2]):ze[2]=B),g.push(ze))}},g}},933:function(u){(function(x,g){u.exports=g()})(this,function(){"use strict";var x,g,E,B;Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(this==null)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(typeof e!="function")throw new TypeError("predicate must be a function");for(var l=arguments[1],p=0;p<o;){var C=n[p];if(e.call(l,C,p,n))return C;p++}}}),Array.from||(Array.from=(x=Object.prototype.toString,g=function(e){return typeof e=="function"||x.call(e)==="[object Function]"},E=Math.pow(2,53)-1,B=function(e){var n=function(o){var l=Number(o);return isNaN(l)?0:l!==0&&isFinite(l)?(l>0?1:-1)*Math.floor(Math.abs(l)):l}(e);return Math.min(Math.max(n,0),E)},function(e){var n=this,o=Object(e);if(e==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");var l,p=arguments.length>1?arguments[1]:void 0;if(p!==void 0){if(!g(p))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(l=arguments[2])}for(var C,k=B(o.length),ie=g(n)?Object(new n(k)):new Array(k),Y=0;Y<k;)C=o[Y],ie[Y]=p?l===void 0?p(C,Y):p.call(l,C,Y):C,Y+=1;return ie.length=k,ie}));var S=window,L=document,U=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Re=/(Mac|iPhone|iPod|iPad)/i.test(S.navigator.userAgent),Pe="ontouchstart"in S||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,ze=!!window.MSInputMethodContext&&!!document.documentMode,R={test:{},shared:{}};function z(e,n){S.console&&S.console[e]&&S.console[e]("fullPage: "+n)}function a(e){return S.getComputedStyle(e).display!=="none"}function He(e){return Array.from(e).filter(function(n){return a(n)})}function P(e,n){return(n=arguments.length>1?n:document)?n.querySelectorAll(e):null}function j(e){e=e||{};for(var n=1,o=arguments.length;n<o;++n){var l=arguments[n];if(l)for(var p in l)l.hasOwnProperty(p)&&p!="__proto__"&&p!="constructor"&&(Object.prototype.toString.call(l[p])!=="[object Object]"?e[p]=l[p]:e[p]=j(e[p],l[p]))}return e}function me(e,n){return e!=null&&e.classList.contains(n)}function Te(){return"innerHeight"in S?S.innerHeight:L.documentElement.offsetHeight}function Dt(){return S.innerWidth}function dt(e,n){var o;for(o in e=Nr(e),n)if(n.hasOwnProperty(o)&&o!==null)for(var l=0;l<e.length;l++)e[l].style[o]=n[o];return e}function Br(e,n){if(!e)return null;if(n==null)return e.previousElementSibling;var o=Br(e);return o&&Nt(o,n)?o:null}function er(e,n){if(!e)return null;if(n==null)return e.nextElementSibling;var o=er(e);return o&&Nt(o,n)?o:null}function bn(e){return e[e.length-1]}function Ut(e,n){e=pr(e)?e[0]:e;for(var o=n!=null?P(n,e.parentNode):e.parentNode.childNodes,l=0,p=0;p<o.length;p++){if(o[p]==e)return l;o[p].nodeType==1&&l++}return-1}function Nr(e){return pr(e)?e:[e]}function Ge(e){e=Nr(e);for(var n=0;n<e.length;n++)e[n].style.display="none";return e}function yn(e){e=Nr(e);for(var n=0;n<e.length;n++)e[n].style.display="block";return e}function pr(e){return Object.prototype.toString.call(e)==="[object Array]"||Object.prototype.toString.call(e)==="[object NodeList]"}function fe(e,n){e=Nr(e);for(var o=0;o<e.length;o++)e[o].classList.add(n);return e}function Ve(e,n){e=Nr(e);for(var o=n.split(" "),l=0;l<o.length;l++){n=o[l];for(var p=0;p<e.length;p++)e[p].classList.remove(n)}return e}function yr(e,n){n.appendChild(e)}function St(e,n,o){var l;n=n||L.createElement("div");for(var p=0;p<e.length;p++){var C=e[p];(o&&!p||!o)&&(l=n.cloneNode(!0),C.parentNode.insertBefore(l,C)),l.appendChild(C)}return e}function le(e,n){St(e,n,!0)}function ue(e,n){for(typeof n=="string"&&(n=_r(n)),e.appendChild(n);e.firstChild!==n;)n.appendChild(e.firstChild)}function et(e){for(var n=L.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function be(e,n){return e&&e.nodeType===1?Nt(e,n)?e:be(e.parentNode,n):null}function kt(e,n){Qt(e,e.nextSibling,n)}function Ye(e,n){Qt(e,e,n)}function Qt(e,n,o){pr(o)||(typeof o=="string"&&(o=_r(o)),o=[o]);for(var l=0;l<o.length;l++)e.parentNode.insertBefore(o[l],n)}function Rt(){var e=L.documentElement;return(S.pageYOffset||e.scrollTop)-(e.clientTop||0)}function hr(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}function gt(e){e.preventDefault()}function yt(e,n){return e.getAttribute(n)}function zr(e,n,o){L.addEventListener(e,n,o==="undefined"?null:o)}function or(e,n,o){S.addEventListener(e,n,o==="undefined"?null:o)}function Hr(e,n,o){L.removeEventListener(e,n,o==="undefined"?null:o)}function qr(e,n,o){S.removeEventListener(e,n,o==="undefined"?null:o)}function Et(e){if(typeof e=="function")return!0;var n=Object.prototype.toString.call(e);return n==="[object Function]"||n==="[object GeneratorFunction]"}function Bt(e,n,o){var l;o=o===void 0?{}:o,typeof S.CustomEvent=="function"?l=new CustomEvent(n,{detail:o}):(l=L.createEvent("CustomEvent")).initCustomEvent(n,!0,!0,o),e.dispatchEvent(l)}function Nt(e,n){return(e.matches||e.t||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,n)}function cn(e,n){if(typeof n=="boolean")for(var o=0;o<e.length;o++)e[o].style.display=n?"block":"none";return e}function _r(e){var n=L.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function en(e){e=Nr(e);for(var n=0;n<e.length;n++){var o=e[n];o&&o.parentElement&&o.parentNode.removeChild(o)}}function eo(e,n){Array.prototype.filter.call(e,n)}function Mn(e,n,o){for(var l=e[o],p=[];l;)(Nt(l,n)||n==null)&&p.push(l),l=l[o];return p}function xn(e,n){return Mn(e,n,"nextElementSibling")}function wn(e,n){return Mn(e,n,"previousElementSibling")}function So(e){return Object.keys(e).map(function(n){return e[n]})}function kr(e){return e[e.length-1]}function un(e,n){for(var o=0,l=e.slice(Math.max(e.length-n,1)),p=0;p<l.length;p++)o+=l[p];return Math.ceil(o/n)}function dn(e,n){e.setAttribute(n,yt(e,"data-"+n)),e.removeAttribute("data-"+n)}function An(e,n){var o=[e];do e=e.parentNode,o.push(e);while(!Nt(e,n));return o}function Dn(){var e=L.activeElement;return Nt(e,"textarea")||Nt(e,"input")||Nt(e,"select")||yt(e,"contentEditable")=="true"||yt(e,"contentEditable")==""}S.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,n){n=n||window;for(var o=0;o<this.length;o++)e.call(n,this[o],o,this)}),typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(e,n){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),l=1;l<arguments.length;l++){var p=arguments[l];if(p!=null)for(var C in p)Object.prototype.hasOwnProperty.call(p,C)&&(o[C]=p[C])}return o},writable:!0,i:!0}),window.fp_utils={$:P,deepExtend:j,hasClass:me,getWindowHeight:Te,css:dt,prev:Br,next:er,last:bn,index:Ut,getList:Nr,hide:Ge,show:yn,isArrayOrList:pr,addClass:fe,removeClass:Ve,appendTo:yr,wrap:St,wrapAll:le,wrapInner:ue,unwrap:et,closest:be,after:kt,before:Ye,insertBefore:Qt,getScrollTop:Rt,siblings:hr,preventDefault:gt,isFunction:Et,trigger:Bt,matches:Nt,toggle:cn,createElementFromHTML:_r,remove:en,filter:eo,untilAll:Mn,nextAll:xn,prevAll:wn,showError:z};var to=Object.freeze({__proto__:null,showError:z,isVisible:a,getVisible:He,$:P,deepExtend:j,hasClass:me,getWindowHeight:Te,o:Dt,css:dt,prev:Br,next:er,last:bn,index:Ut,getList:Nr,hide:Ge,show:yn,isArrayOrList:pr,addClass:fe,removeClass:Ve,appendTo:yr,wrap:St,wrapAll:le,wrapInner:ue,unwrap:et,closest:be,after:kt,before:Ye,insertBefore:Qt,getScrollTop:Rt,siblings:hr,preventDefault:gt,l:yt,u:zr,v:or,p:Hr,h:qr,isFunction:Et,trigger:Bt,matches:Nt,toggle:cn,createElementFromHTML:_r,remove:en,filter:eo,untilAll:Mn,nextAll:xn,prevAll:wn,toArray:So,g:kr,S:un,M:dn,T:An,A:Dn});function tn(e){return tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},tn(e)}var J={O:{},R:function(e,n){var o=this;return tn(this.O[e])!=="object"&&(this.O[e]=[]),this.O[e].push(n),function(){return o.removeListener(e,n)}},removeListener:function(e,n){if(tn(this.O[e])==="object"){var o=this.O[e].indexOf(n);o>-1&&this.O[e].splice(o,1)}},L:function(e){for(var n=this,o=arguments.length,l=new Array(o>1?o-1:0),p=1;p<o;p++)l[p-1]=arguments[p];tn(this.O[e])==="object"&&this.O[e].forEach(function(C){return C.apply(n,l)})},once:function(e,n){var o=this,l=this.R(e,function(){l();for(var p=arguments.length,C=new Array(p),k=0;k<p;k++)C[k]=arguments[k];n.apply(o,C)})}},T={j:0,D:0,slides:[],N:[],P:null,H:null,C:!1,I:!1,W:!1,F:!1,V:!1,Z:void 0,B:void 0,G:!1,canScroll:!0,Y:"none",U:"none",X:!1,_:!1,J:!0,K:0,q:Te(),nn:!1,tn:{}};function q(e){Object.assign(T,e)}function H(){return T}S.state=T;var Sn="onAfterRenderNoAnchor",kn="onClickOrTouch",Ir="moveSlideLeft",En="moveSlideRight",$n="onInitialise",sr="bindEvents",$r="onDestroy",ro="contentChanged",fn="onScrollOverflowScrolled",Vn="onScrollPageAndSlide",_n="onKeyDown",Bn="onMenuClick",Nn="scrollPage",Cn="landscapeScroll",Pn="scrollBeyondFullpage",no="onPerformMovement",oo="onSlideLeave",Un="onLeave",jr="afterSectionLoads",Qn="afterSlideLoads";function io(e){J.L(kn,{e,target:e.target})}function Gn(){["click","touchstart"].forEach(function(e){Hr(e,io,{passive:!1})})}function ao(){q({J:!0})}J.R(sr,function(){["click","touchstart"].forEach(function(e){zr(e,io,{passive:!1})}),or("focus",ao),J.R($r,Gn)});var zn="fullpage-wrapper",rn="."+zn,Hn="fp-responsive",Yn="fp-notransition",lo="fp-destroyed",pn="fp-enabled",Pt="active",Xn=".active",nn="fp-completely",d="fp-section",b="."+d,f=".fp-tableCell",m="#fp-nav",I="fp-slide",Z="."+I,W=".fp-slide.active",X="fp-slides",xe=".fp-slides",ve="fp-slidesContainer",Ie="."+ve,_e="fp-table",at="fp-overflow",ft="."+at,Fe="fp-is-overflow",tt=".fp-slidesNav",Oe=".fp-slidesNav a",mt="fp-controlArrow",Ue="."+mt,zt="fp-prev",xt=".fp-controlArrow.fp-prev",Ot=".fp-controlArrow.fp-next",Cr={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,en:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="fp-arrow"></div>','<div class="fp-arrow"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0},Lr=null,xr=!1,Er=j({},Cr),Pr=null;function ne(e){return Lr}function c(){return Pr||Cr}function ir(){return Er}function wr(e,n,o){Pr[e]=n,o!=="internal"&&(Er[e]=n)}function cr(){if(!c().anchors.length){var e=P(c().sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",Lr);e.length&&e.length===P(c().sectionSelector,Lr).length&&(xr=!0,e.forEach(function(o){c().anchors.push(yt(o,"data-anchor").toString())}))}if(!c().navigationTooltips.length){var n=P(c().sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",Lr);n.length&&n.forEach(function(o){c().navigationTooltips.push(yt(o,"data-tooltip").toString())})}}function hn(e){return window["fp_"+e+"Extension"]!==void 0}function Xe(e){var n=c();return n[e]!==null&&Object.prototype.toString.call(n[e])==="[object Array]"?n[e].length&&R[e]:n[e]&&R[e]}function oe(e,n,o){if(Xe(e))return Et(R[e][n])?R[e][n](o):R[e][n]}function Ur(){return oe("dragAndMove","isAnimating")}function on(){return oe("dragAndMove","isGrabbing")}function Qr(e){if(c().offsetSections&&R.offsetSections){var n=oe("offsetSections","getWindowHeight",e);return n!==""?Math.round(n)+"px":n}return Te()+"px"}function ae(e,n){e.insertBefore(n,e.firstChild)}function V(e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(p){var C,k,ie,Y,Se,qe,Ae="",ht=0;for(p=p.replace(/[^A-Za-z0-9+/=]/g,"");ht<p.length;)C=n.indexOf(p.charAt(ht++))<<2|(Y=n.indexOf(p.charAt(ht++)))>>4,k=(15&Y)<<4|(Se=n.indexOf(p.charAt(ht++)))>>2,ie=(3&Se)<<6|(qe=n.indexOf(p.charAt(ht++))),Ae+=String.fromCharCode(C),Se!=64&&(Ae+=String.fromCharCode(k)),qe!=64&&(Ae+=String.fromCharCode(ie));return Ae=function(Ct){for(var mr,fr="",Zt=0,Ft=0,it=0;Zt<Ct.length;)(Ft=Ct.charCodeAt(Zt))<128?(fr+=String.fromCharCode(Ft),Zt++):Ft>191&&Ft<224?(it=Ct.charCodeAt(Zt+1),fr+=String.fromCharCode((31&Ft)<<6|63&it),Zt+=2):(it=Ct.charCodeAt(Zt+1),mr=Ct.charCodeAt(Zt+2),fr+=String.fromCharCode((15&Ft)<<12|(63&it)<<6|63&mr),Zt+=3);return fr}(Ae),Ae}function l(p){return p.slice(3).slice(0,-3)}return function(p){var C=p.split("_");if(C.length>1){var k=C[1];return o(p.replace(l(C[1]),"").split("_")[0].slice(2).slice(0,-2))+"_"+o(k.slice(3).slice(0,-3))}return l(p)}(o(e))}S.fp_utils=S.fp_utils||{},Object.assign(S.fp_utils,{prependTo:ae,toggleClass:function(e,n,o){if(e.classList&&o==null)e.classList.toggle(n);else{var l=me(e,n);l&&o==null||!o?Ve(e,n):(!l&&o==null||o)&&fe(e,n)}}});var te=function(e){this.anchor=e.anchor,this.item=e.item,this.index=e.index(),this.isLast=this.index===e.item.parentElement.querySelectorAll(e.selector).length-1,this.isFirst=!this.index,this.isActive=e.isActive},se=function(e,n){this.parent=this.parent||null,this.selector=n,this.anchor=yt(e,"data-anchor")||c().anchors[Ut(e,c().sectionSelector)],this.item=e,this.isVisible=a(e),this.isActive=me(e,Pt),this.on=me(e,at)||P(ft,e)[0]!=null,this.rn=n===c().sectionSelector,this.container=be(e,Ie)||be(e,rn),this.index=function(){return this.siblings().indexOf(this)}};function A(e){return e.map(function(n){return n.item})}function rt(e,n){return e.find(function(o){return o.item===n})}se.prototype.siblings=function(){return this.rn?this.isVisible?T.N:T.an:this.parent?this.parent.slides:0},se.prototype.prev=function(){var e=this.siblings(),n=(this.rn?e.indexOf(this):this.parent.slides.indexOf(this))-1;return n>=0?e[n]:null},se.prototype.next=function(){var e=this.siblings(),n=(this.rn?e.indexOf(this):this.parent.slides.indexOf(this))+1;return n<e.length?e[n]:null},se.prototype.prevPanel=function(){return this===this.prev()?this.parent?this.parent.prev():null:this.prev()||(this.parent?this.parent.prev():null)},se.prototype.nextPanel=function(){return this===this.next()?this.parent?this.parent.next():null:this.next()||(this.parent?this.parent.next():null)},se.prototype.ln=function(){return this.rn?T.N:T.un};var _,Tt=function(e){te.call(this,e)},lt=function(e){te.call(this,e)};function Ee(e){var n=P(W,e);return n.length&&(e=n[0]),e}function we(e){return e?e.activeSlide?e.activeSlide:e:null}function It(e){var n,o,l=c();return l.autoScrolling&&!l.scrollBar?(n=-e,o=P(rn)[0]):(n=e,o=window),{options:n,element:o}}function ur(e,n){!c().autoScrolling||c().scrollBar||e.self!=window&&me(e,X)?e.self!=window&&me(e,X)?e.scrollLeft=n:e.scrollTo(0,n):e.style.top=n+"px"}function je(e){var n="transform "+c().scrollingSpeed+"ms "+c().easingcss3;return Ve(e,Yn),dt(e,{"-webkit-transition":n,transition:n})}function Ht(e,n){var o=e.index(),l=Ut(n,b);return o==l?"none":o>l?"up":"down"}function Ke(e){return fe(e,Yn)}function Wt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function vn(e,n){n?je(ne()):Ke(ne()),clearTimeout(_),dt(ne(),Wt(e)),R.test.cn=e,_=setTimeout(function(){Ve(ne(),Yn)},10)}function Lt(e){var n=Math.round(e);if(c().css3&&c().autoScrolling&&!c().scrollBar)vn("translate3d(0px, -"+n+"px, 0px)",!1);else if(c().autoScrolling&&!c().scrollBar)dt(ne(),{top:-n+"px"}),R.test.top=-n+"px";else{var o=It(n);ur(o.element,o.options)}}function Rr(e,n){n!=="internal"&&oe("fadingEffect","update",e),oe("cards","update_",e),wr("scrollingSpeed",e,n)}R.setScrollingSpeed=Rr;var Zr,Qe=null,de=null,$t=null;function gn(e,n,o,l){var p,C=function(Se){return Se.self!=S&&me(Se,X)?Se.scrollLeft:!c().autoScrolling||c().scrollBar?Rt():Se.offsetTop}(e),k=n-C,ie=!1,Y=T.G;q({G:!0}),Zr&&window.cancelAnimationFrame(Zr),Zr=function(Se){p||(p=Se);var qe=Math.floor(Se-p);if(T.G){var Ae=n;o&&(Ae=S.fp_easings[c().easing](qe,C,k,o)),qe<=o&&ur(e,Ae),qe<o?window.requestAnimationFrame(Zr):l===void 0||ie||(l(),q({G:!1}),ie=!0)}else ie||Y||(l(),q({G:!1}),ie=!0)},window.requestAnimationFrame(Zr)}function Or(e){return e&&!e.item?new Tt(new Fn(e)):e?new Tt(e):null}function Ar(e){return e?new lt(e):null}function Tr(e,n){var o=function(l,p){var C={afterRender:function(){return{section:Or(H().P),sn:Ar(H().P.activeSlide)}},onLeave:function(){return{origin:Or(p.items.origin),destination:Or(p.items.destination),direction:p.direction,trigger:H().H}},afterLoad:function(){return C.onLeave()},afterSlideLoad:function(){return{section:Or(p.items.section),origin:Or(p.items.origin),destination:Or(p.items.destination),direction:p.direction,trigger:H().H}},onSlideLeave:function(){return C.afterSlideLoad()},beforeLeave:function(){return C.onLeave()},onScrollOverflow:function(){return{section:Or(H().P),sn:Ar(H().P.activeSlide),position:p.position,direction:p.direction}}};return C[l]()}(e,n);return Bt(ne(),e,o),c()[e].apply(o[Object.keys(o)[0]],So(o))!==!1}function so(e){var n=Ee(e);P("video, audio",n).forEach(function(o){o.hasAttribute("data-autoplay")&&typeof o.play=="function"&&o.play()}),P('iframe[src*="youtube.com/embed/"]',n).forEach(function(o){o.hasAttribute("data-autoplay")&&jo(o),o.onload=function(){o.hasAttribute("data-autoplay")&&jo(o)}})}function jo(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function co(e){var n=Ee(e);P("video, audio",n).forEach(function(o){o.hasAttribute("data-keepplaying")||typeof o.pause!="function"||o.pause()}),P('iframe[src*="youtube.com/embed/"]',n).forEach(function(o){/youtube\.com\/embed\//.test(yt(o,"src"))&&!o.hasAttribute("data-keepplaying")&&o.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function jn(e){c().lazyLoading&&P("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ee(e)).forEach(function(n){if(["src","srcset"].forEach(function(l){var p=yt(n,"data-"+l);p!=null&&p&&(dn(n,l),n.addEventListener("load",function(){}))}),Nt(n,"source")){var o=be(n,"video, audio");o&&(o.load(),o.onloadeddata=function(){})}})}function Zo(){var e=H().P.item,n=H().P.activeSlide,o=Fo(e),l=String(o);n&&(l=l+"-"+Fo(n.item)),l=l.replace("/","-").replace("#","");var p=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");Qe.className=Qe.className.replace(p,""),fe(Qe,"fp-viewing-"+l)}function Fo(e){if(!e)return null;var n=yt(e,"data-anchor"),o=Ut(e);return n==null&&(n=o),n}function mn(e,n,o){var l="";c().anchors.length&&!c().lockAnchors&&(e?(o!=null&&(l=o),n==null&&(n=e),q({B:n}),ko(l+"/"+n)):(e!=null&&q({B:n}),ko(o))),Zo()}function ko(e){if(c().recordHistory)location.hash=e;else if(U||Pe)S.history.replaceState(void 0,void 0,"#"+e);else{var n=S.location.href.split("#")[0];S.location.replace(n+"#"+e)}}function Wo(e,n,o){var l=n==="Section"?c().anchors[e]:yt(o,"data-anchor");return encodeURI(c().navigationTooltips[e]||l||n+" "+(e+1))}function li(e){gt(e),q({H:"horizontalNav"});var n=be(this,b),o=P(xe,be(this,b))[0],l=rt(H().N,n).slides[Ut(be(this,"li"))];J.L(Cn,{slides:o,destination:l.item})}function Vo(e,n){c().slidesNavigation&&e!=null&&(Ve(P(Xn,e),Pt),fe(P("a",P("li",e)[n]),Pt))}var uo,Tn={};function fo(e,n,o){n!=="all"?Tn[o][n]=e:Object.keys(Tn[o]).forEach(function(l){Tn[o][l]=e})}function ar(){return Tn}function si(){var e=be(this,b);me(this,zt)?ar().m.left&&(q({H:"slideArrow"}),J.L(Ir,{section:e})):ar().m.right&&(q({H:"slideArrow"}),J.L(En,{section:e}))}function _o(e){!c().loopHorizontal&&c().controlArrows&&(cn(P(xt,e.section),e.slideIndex!==0),cn(P(Ot,e.section),er(e.destiny)!=null))}function ci(){clearTimeout(uo),q({W:!1})}function In(e,n,o){var l=be(e,b),p=H().N.filter(function(ie){return ie.item==l})[0],C=p.slides.filter(function(ie){return ie.item==n})[0],k={slides:e,destiny:n,direction:o,destinyPos:{left:n.offsetLeft},slideIndex:C.index(),section:l,sectionIndex:p.index(),anchorLink:p.anchor,slidesNav:P(tt,l)[0],slideAnchor:C.anchor,prevSlide:p.activeSlide.item,prevSlideIndex:p.activeSlide.index(),items:{section:p,origin:p.activeSlide,destination:C},localIsResizing:T.F};k.xMovement=Qo(k.prevSlideIndex,k.slideIndex),k.direction=k.direction?k.direction:k.xMovement,k.localIsResizing||q({canScroll:!1}),oe("parallax","applyHorizontal",k),oe("cards","apply",k),oe("dropEffect","apply",k),oe("waterEffect","apply",k),c().onSlideLeave&&!k.localIsResizing&&k.xMovement!=="none"&&Et(c().onSlideLeave)&&Tr("onSlideLeave",k)===!1?q({W:!1}):(Xe("dropEffect")&&c().dropEffect||(fe(n,Pt),Ve(hr(n),Pt)),an(),k.localIsResizing||(co(k.prevSlide),jn(n)),_o(k),p.isActive&&!k.localIsResizing&&mn(k.slideIndex,k.slideAnchor,k.anchorLink),oe("continuousHorizontal","apply",k),J.L(oo,k),on()?Eo(k):Uo(e,k,!0),c().interlockedSlides&&R.interlockedSlides&&(Xe("continuousHorizontal")&&o!==void 0&&o!==k.xMovement||oe("interlockedSlides","apply",k)))}function Uo(e,n,o){var l=n.destinyPos;if(Vo(n.slidesNav,n.slideIndex),q({scrollX:Math.round(l.left)}),c().css3){var p="translate3d(-"+Math.round(l.left)+"px, 0px, 0px)";R.test.dn[n.sectionIndex]=p,Xe("dragAndMove")&&n.vn!==void 0||je(P(Ie,e)),dt(P(Ie,e),Wt(p)),Xe("interlockedSlides")||clearTimeout(uo),uo=setTimeout(function(){o&&Eo(n)},c().scrollingSpeed)}else R.test.left[n.sectionIndex]=Math.round(l.left),gn(e,Math.round(l.left),c().scrollingSpeed,function(){o&&Eo(n)})}function Qo(e,n){return e==n?"none":e>n?"left":"right"}function ui(){clearTimeout(uo)}function Eo(e){oe("continuousHorizontal","afterSlideLoads",e),oe("dragAndMove","afterSlideLoads",e),e.localIsResizing||(oe("parallax","afterSlideLoads"),oe("scrollOverflowReset","setPrevious",e.prevSlide),oe("scrollOverflowReset","reset"),Et(c().afterSlideLoad)&&Tr("afterSlideLoad",e),q({canScroll:!0}),so(e.destiny),J.L(Qn,e)),q({W:!1}),oe("interlockedSlides","interlockedSlides",e)}function Kn(e,n){Rr(0,"internal"),n!==void 0&&q({F:!0}),In(be(e,xe),e),n!==void 0&&q({F:!1}),Rr(ir().scrollingSpeed,"internal")}function $o(e,n){wr("recordHistory",e,n)}function Zn(e,n){e||Lt(0),wr("autoScrolling",e,n);var o=H().P.item;if(c().autoScrolling&&!c().scrollBar)dt($t,{overflow:"hidden",height:"100%"}),Ve(Qe,"fp-scrollable"),$o(ir().recordHistory,"internal"),dt(ne(),{"-ms-touch-action":"none","touch-action":"none"}),o!=null&&Lt(o.offsetTop);else if(dt($t,{overflow:"visible",height:"initial"}),fe(Qe,"fp-scrollable"),$o(!!c().autoScrolling&&ir().recordHistory,"internal"),dt(ne(),{"-ms-touch-action":"","touch-action":""}),Ke(ne()),o!=null){var l=It(o.offsetTop);l.element.scrollTo(0,l.options)}Bt(ne(),"setAutoScrolling",e)}function Co(){for(var e=P(W),n=0;n<e.length;n++)Kn(e[n],"internal")}function Go(){var e=P(".fp-auto-height")[0]||bo()&&P(".fp-auto-height-responsive")[0];c().lazyLoading&&e&&P(".fp-section:not(.active)").forEach(function(n){var o,l,p,C,k;l=(o=n.getBoundingClientRect()).top,p=o.bottom,C=l+2<T.q&&l>0,k=p>2&&p<T.q,(C||k)&&jn(n)})}function di(){Bt(Br(this),"click")}function Yo(){en(P(m));var e=L.createElement("div");e.setAttribute("id","fp-nav");var n=L.createElement("ul");e.appendChild(n),yr(e,Qe);var o=P(m)[0];fe(o,"fp-"+c().navigationPosition),c().showActiveTooltip&&fe(o,"fp-show-active");for(var l="",p=0;p<H().N.length;p++){var C=H().N[p],k="";c().anchors.length&&(k=C.anchor),l+='<li><a href="#'+encodeURI(k)+'"><span class="fp-sr-only">'+Wo(C.index(),"Section")+"</span><span></span></a>";var ie=c().navigationTooltips[C.index()];ie!==void 0&&ie!==""&&(l+='<div class="fp-tooltip fp-'+c().navigationPosition+'">'+ie+"</div>"),l+="</li>"}P("ul",o)[0].innerHTML=l;var Y=P("li",P(m)[0])[H().P.index()];fe(P("a",Y),Pt)}function fi(e){e.preventDefault&&gt(e),q({H:"verticalNav"});var n=Ut(be(this,"#fp-nav li"));J.L(Nn,{destination:H().N[n]})}function Po(e,n){var o;o=e,c().menu&&c().menu.length&&P(c().menu).forEach(function(l){l!=null&&(Ve(P(Xn,l),Pt),fe(P('[data-menuanchor="'+o+'"]',l),Pt))}),function(l,p){var C=P(m)[0];c().navigation&&C!=null&&C.style.display!=="none"&&(Ve(P(Xn,C),Pt),fe(l?P('a[href="#'+l+'"]',C):P("a",P("li",C)[p]),Pt))}(e,n)}Tn.m={up:!0,down:!0,left:!0,right:!0},Tn.k=j({},Tn.m),J.R(kn,function(e){var n=e.target;(Nt(n,Ue)||be(n,Ue))&&si.call(n,e)}),R.landscapeScroll=In,J.R(sr,function(){J.R(no,ci)}),R.setRecordHistory=$o,R.setAutoScrolling=Zn,R.test.setAutoScrolling=Zn,new Date().getTime();var To,po,ho,Io,Jn,Lo,pi=(po=!0,ho=new Date().getTime(),Io=!S.fullpage_api,function(e,n){var o=new Date().getTime(),l=e==="wheel"?c().scrollingSpeed:100;return po=Io||o-ho>=l,Io=!S.fullpage_api,po&&(To=n(),ho=o),To===void 0||To});function vo(e,n){if(Et(c().beforeLeave))return pi(H().H,function(){return Tr(e,n)})}function Ln(e,n,o){var l=e.item;if(l!=null){var p,C,k={element:l,callback:n,isMovementUp:o,dtop:Xo(l),yMovement:Ht(H().P,l),anchorLink:e.anchor,sectionIndex:e.index(),activeSlide:e.activeSlide?e.activeSlide.item:null,leavingSection:H().P.index()+1,localIsResizing:T.F,items:{origin:H().P,destination:e},direction:null};if(!(H().P.item==l&&!T.F||c().scrollBar&&Rt()===k.dtop&&!me(l,"fp-auto-height"))){if(k.activeSlide!=null&&(p=yt(k.activeSlide,"data-anchor"),C=Ut(k.activeSlide,null)),!k.localIsResizing){var ie=k.yMovement;if(o!==void 0&&(ie=o?"up":"down"),k.direction=ie,hn("dropEffect")&&R.dropEffect.onLeave_(k),hn("waterEffect")&&R.waterEffect.onLeave_(k),Et(c().beforeLeave)&&vo("beforeLeave",k)===!1||Et(c().onLeave)&&!Tr("onLeave",k))return}oe("parallax","apply",k),oe("cards","apply",k),oe("dropEffect","apply",k),oe("waterEffect","apply",k),c().autoScrolling&&c().continuousVertical&&k.isMovementUp!==void 0&&(!k.isMovementUp&&k.yMovement=="up"||k.isMovementUp&&k.yMovement=="down")&&(k=function(Y){q({nn:!0});var Se=H().P.item;return Y.isMovementUp?Ye(Se,xn(Se,b)):kt(Se,wn(Se,b).reverse()),Lt(H().P.item.offsetTop),Co(),Y.pn=Se,Y.dtop=Y.element.offsetTop,Y.yMovement=Ht(H().P,Y.element),Y.leavingSection=Y.items.origin.index()+1,Y.sectionIndex=Y.items.destination.index(),Bt(ne(),"onContinuousVertical",Y),Y}(k)),oe("scrollOverflowReset","setPrevious",H().P.item),k.localIsResizing||co(H().P.item),Xe("dropEffect")&&c().dropEffect||(fe(l,Pt),Ve(hr(l),Pt)),an(),jn(l),q({canScroll:R.test.hn}),mn(C,p,k.anchorLink),J.L(Un,k),function(Y){var Se=c().scrollingSpeed<700,qe=Se?700:c().scrollingSpeed;if(q({Y:"none",scrollY:Math.round(Y.dtop)}),J.L(no),c().css3&&c().autoScrolling&&!c().scrollBar)vn("translate3d(0px, -"+Math.round(Y.dtop)+"px, 0px)",!0),Xe("waterEffect")&&Co(),c().scrollingSpeed?(clearTimeout(Jn),Jn=setTimeout(function(){go(Y),q({canScroll:!Se||R.test.hn})},c().scrollingSpeed)):go(Y);else{var Ae=It(Y.dtop);R.test.top=-Y.dtop+"px",clearTimeout(Jn),gn(Ae.element,Ae.options,c().scrollingSpeed,function(){c().scrollBar?Jn=setTimeout(function(){go(Y)},30):(go(Y),q({canScroll:!Se||R.test.hn}))})}Se&&(clearTimeout(Lo),Lo=setTimeout(function(){q({canScroll:!0})},qe))}(k),q({Z:k.anchorLink}),Po(k.anchorLink,function(Y){return Y.pn!=null?Y.isMovementUp?T.j-1:0:Y.sectionIndex}(k))}}}function Xo(e){var n=e.offsetHeight,o=e.offsetTop,l=o,p=Xe("dragAndMove")&&oe("dragAndMove","isGrabbing")?oe("dragAndMove","isScrollingDown"):o>T.K,C=l-Te()+n,k=c().bigSectionsDestination;return n>Te()?(p||k)&&k!=="bottom"||(l=C):(p||T.F&&er(e)==null)&&(l=C),Xe("offsetSections")&&(l=R.offsetSections.getSectionPosition_(p,l,e)),q({K:l}),l}function go(e){q({C:!1}),function(n){n.pn!=null&&(n.isMovementUp?Ye(P(b)[0],n.pn):kt(P(b)[H().N.length-1],n.pn),Lt(H().P.item.offsetTop),function(){for(var o=P(W),l=0;l<o.length;l++)Kn(o[l],"internal")}(),n.sectionIndex=n.items.destination.index(),n.leavingSection=n.items.origin.index()+1,q({nn:!1}))}(e),Et(c().afterLoad)&&!e.localIsResizing&&Tr("afterLoad",e),oe("parallax","afterLoad"),oe("waterEffect","afterLoad"),oe("dropEffect","afterLoad"),oe("scrollOverflowReset","reset"),oe("resetSliders","apply",e),an(),e.localIsResizing||so(e.element),fe(e.element,nn),Ve(hr(e.element),nn),Go(),q({canScroll:!0}),J.L(jr,e),Et(e.callback)&&e.callback()}function Ro(e,n){wr("fitToSection",e,n)}function Ko(){T.canScroll&&(q({F:!0}),Ln(T.P),q({F:!1}))}function Oo(){var e=c().responsive||c().responsiveWidth,n=c().responsiveHeight,o=e&&S.innerWidth<e,l=n&&S.innerHeight<n;e&&n?mo(o||l):e?mo(o):n&&mo(l)}function mo(e){var n=bo();e?n||(Zn(!1,"internal"),Ro(!1,"internal"),Ge(P(m)),fe(Qe,Hn),Et(c().afterResponsive)&&c().afterResponsive.call(ne(),e),oe("responsiveSlides","toSections"),Bt(ne(),"afterResponsive",e)):n&&(Zn(ir().autoScrolling,"internal"),Ro(ir().autoScrolling,"internal"),yn(P(m)),Ve(Qe,Hn),Et(c().afterResponsive)&&c().afterResponsive.call(ne(),e),oe("responsiveSlides","toSlides"),Bt(ne(),"afterResponsive",e))}function bo(){return me(Qe,Hn)}function Mo(e){c().verticalCentered&&(!c().scrollOverflow&&ye.gn(e.item)||ye.mn(e)||me(e.item,_e)||fe(e.item,_e))}R.moveTo=moveTo,R.getScrollY=function(){return T.scrollY},J.R($r,function(){clearTimeout(Jn),clearTimeout(Lo)}),R.setFitToSection=Ro,R.fitToSection=Ko,R.setResponsive=mo;var yo,Jo=null;function Do(e){var n=e.item,o=e.wn.length,l=e.index();!H().P&&e.isVisible&&(fe(n,Pt),an(),Jo=H().P.item),Xe("offsetSections")&&dt(n,{height:Qr(n)}),c().paddingTop&&dt(n,{"padding-top":c().paddingTop}),c().paddingBottom&&dt(n,{"padding-bottom":c().paddingBottom}),c().sectionsColor[l]!==void 0&&dt(n,{"background-color":c().sectionsColor[l]}),c().anchors[l]!==void 0&&n.setAttribute("data-anchor",e.anchor),o||Mo(e)}function Ci(){c().scrollOverflow&&!c().scrollBar&&(ye.bn(),ye.Sn())}function Pi(){Hr("keyup",ye.yn)}R.getActiveSection=function(){return H().P},J.R(sr,function(){J.R(Sn,Ci),J.R(Un,ye.onLeave),J.R(oo,ye.onLeave),J.R(Qn,ye.afterLoad),J.R(jr,ye.afterLoad),J.R($r,Pi),zr("keyup",ye.yn)});var qo,ye={Mn:null,Tn:!0,An:!0,xn:null,On:null,kn:function(e){if(!T.canScroll)return gt(e),!1},En:function(e){if(!Dn()&&c().keyboardScrolling&&[38,33,32,40,34,36,35].indexOf(e.keyCode)>-1&&!ye.An)return gt(e),!1},yn:function(){ye.Tn=T.canScroll},onLeave:function(){clearTimeout(yo),ye.An=!1},afterLoad:function(){ye.An=!1,clearTimeout(yo),yo=setTimeout(function(){ye.Tn=T.canScroll},200)},Rn:function(){L.activeElement===this.Mn&&(this.Mn.blur(),ye.An=!1)},Sn:function(){if(c().scrollOverflow&&ye.Tn){ye.Rn();var e=ye.Ln(H().P.item);!e||U||Pe||(this.Mn=e,requestAnimationFrame(function(){e.focus(),ye.An=!0})),ye.Tn=!1}},bn:function(){c().scrollOverflowMacStyle&&!Re&&fe(Qe,"fp-scroll-mac"),H().un.forEach(function(e){if(!(e.slides&&e.slides.length||me(e.item,"fp-auto-height-responsive")&&bo())){var n,o=Ee(e.item),l=ye.gn(e.item),p=(n=e).rn?n:n.parent;if(ze){var C=l?"addClass":"removeClass";to[C](p.item,Fe),to[C](e.item,Fe)}else fe(p.item,Fe),fe(e.item,Fe);e.on||(ye.jn(o),ye.zn(o)),e.on=!0}})},zn:function(e){ye.Ln(e).addEventListener("scroll",ye.Dn),e.addEventListener("wheel",ye.kn,{passive:!1}),e.addEventListener("keydown",ye.En,{passive:!1})},jn:function(e){var n=document.createElement("div");n.className=at,ue(e,n),n.setAttribute("tabindex","-1")},Nn:function(e){var n=P(ft,e)[0];n&&(et(n),e.removeAttribute("tabindex"))},Ln:function(e){var n=Ee(e);return P(ft,n)[0]||n},on:function(e){return me(e,at)||P(ft,e)[0]!=null},mn:function(e){return e.rn&&e.activeSlide?e.activeSlide.on:e.on},gn:function(e){return ye.Ln(e).scrollHeight>S.innerHeight},Pn:function(e,n){if(!T.canScroll)return!1;if(c().scrollBar)return!0;var o=ye.Ln(n);if(!c().scrollOverflow||!me(o,at)||me(n,"fp-noscroll")||me(Ee(n),"fp-noscroll"))return!0;var l=ze?1:0,p=o.scrollTop,C=e==="up"&&p<=0,k=e==="down"&&o.scrollHeight<=Math.ceil(o.offsetHeight+p)+l,ie=C||k;return ie||(this.xn=new Date().getTime()),ie},Hn:function(){this.On=new Date().getTime();var e=this.On-ye.xn,n=(U||Pe)&&T.X,o=T._&&e>600;return n&&e>400||o},Dn:(qo=0,function(e){var n=e.target.scrollTop,o=T.Y!=="none"?T.Y:qo<n?"down":"up";qo=n,Et(c().onScrollOverflow)&&Tr("onScrollOverflow",{position:n,direction:o}),me(e.target,at)&&T.canScroll&&ye.Pn(o,e.target)&&ye.Hn()&&ye.gn(H().P.item)&&J.L(fn,{direction:o})})},ei=null,ti=null;function an(){T.P=null,T.N.map(function(e){var n=me(e.item,Pt);e.isActive=n,e.on=ye.on(e.item),n&&(T.P=e),e.slides.length&&(e.activeSlide=null,e.slides.map(function(o){var l=me(o.item,Pt);o.on=ye.on(e.item),o.isActive=l,l&&(e.activeSlide=o)}))}),function(){var e=T.P,n=!!T.P&&T.P.slides.length,o=T.P?T.P.activeSlide:null;if(!e&&T.N.length&&!H().C){if(ei){var l=vi(ei,T.N);l&&(T.P=l,T.P.isActive=!0,fe(T.P.item,Pt)),T.P&&Lt(T.P.item.offsetTop)}if(n&&!o&&ti){var p=vi(ti,T.P.slides);p&&(T.P.activeSlide=p,T.P.activeSlide.isActive=!0,fe(T.P.activeSlide.item,Pt)),T.P.activeSlide&&Kn(T.P.activeSlide.item,"internal")}}}(),Bt(ne(),"onUpdateStateDone")}function Bo(){var e=P(c().sectionSelector+", "+b,ne()),n=He(e),o=Array.from(e).map(function(C){return new Fn(C)}),l=o.filter(function(C){return C.isVisible}),p=l.reduce(function(C,k){return C.concat(k.slides)},[]);ei=hi(T.P),ti=hi(T.P?T.P.activeSlide:null),T.j=n.length,T.D=l.reduce(function(C,k){return C+k.slides.length},0),T.N=l,T.an=o,T.slides=p,T.un=T.N.concat(T.slides)}function hi(e){if(!e)return null;var n=e?e.item:null,o=e.rn?T.an:T.P.Cn;if(n){var l=rt(o,n);return l?l.index():null}return null}function vi(e,n){var o,l=e-1,p=e;do{if(o=n[l]||n[p])break;l-=1,p+=1}while(l>=0||p<n.length);return o}var Fn=function(e){var n=this;[].push.call(arguments,c().sectionSelector),se.apply(this,arguments),this.wn=P(c().slideSelector,e),this.Cn=Array.from(this.wn).map(function(o){return new No(o,n)}),this.slides=this.Cn.filter(function(o){return o.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(o){return o.isActive})[0]||this.slides[0]:null};Fn.prototype=se.prototype,Fn.prototype.constructor=Fn;var xo,No=function(e,n){this.parent=n,se.call(this,e,c().slideSelector)};function t(){fe(P(c().sectionSelector,ne()),d),fe(P(c().slideSelector,ne()),I)}function i(e){var n=e.slides.length,o=e.wn,l=e.slides,p=100*n,C=100/n;if(!P(xe,e.item)[0]){var k=L.createElement("div");k.className=X,le(o,k);var ie=L.createElement("div");ie.className=ve,le(o,ie)}dt(P(Ie,e.item),{width:p+"%"}),n>1&&(c().controlArrows&&function(Se){var qe=Se.item,Ae=[_r(c().controlArrowsHTML[0]),_r(c().controlArrowsHTML[1])];kt(P(xe,qe)[0],Ae),fe(Ae,mt),fe(Ae[0],zt),fe(Ae[1],"fp-next"),c().controlArrowColor!=="#fff"&&(dt(P(Ot,qe),{"border-color":"transparent transparent transparent "+c().controlArrowColor}),dt(P(xt,qe),{"border-color":"transparent "+c().controlArrowColor+" transparent transparent"})),c().loopHorizontal||Ge(P(xt,qe))}(e),c().slidesNavigation&&function(Se){var qe=Se.item,Ae=Se.slides.length;yr(_r('<div class="fp-slidesNav"><ul></ul></div>'),qe);var ht=P(tt,qe)[0];fe(ht,"fp-"+c().slidesNavPosition);for(var Ct=0;Ct<Ae;Ct++)yr(_r('<li><a href="#"><span class="fp-sr-only">'+Wo(Ct,"Slide",P(Z,qe)[Ct])+"</span><span></span></a></li>"),P("ul",ht)[0]);dt(ht,{"margin-left":"-"+ht.innerWidth/2+"px"});var mr=Se.activeSlide?Se.activeSlide.index():0;fe(P("a",P("li",ht)[mr]),Pt)}(e)),l.forEach(function(Se){dt(Se.item,{width:C+"%"}),c().verticalCentered&&Mo(Se)});var Y=Xe("responsiveSlides")?null:e.activeSlide||null;Y!=null&&T.P&&(T.P.index()!==0||T.P.index()===0&&Y.index()!==0)?(Kn(Y.item,"internal"),fe(Y.item,"fp-initial")):fe(o[0],Pt)}No.prototype=se.prototype,No.prototype.constructor=Fn;var h={attributes:!1,subtree:!0,childList:!0,characterData:!0};function w(){return oe("responsiveSlides","isResponsiveSlidesChanging")||He(P(c().slideSelector,ne())).length!==H().D}function $(e){var n=w();(w()||oe("responsiveSlides","isResponsiveSlidesChanging")||He(P(c().sectionSelector,ne())).length!==H().j)&&!T.nn&&(c().observer&&xo&&xo.disconnect(),Bo(),an(),c().anchors=[],en(P(m)),oe("responsiveSlides","isResponsiveSlidesChanging")||t(),cr(),c().navigation&&Yo(),n&&(en(P(tt)),en(P(Ue))),H().N.forEach(function(o){o.slides.length?n&&i(o):Do(o)})),c().observer&&xo&&P(rn)[0]&&xo.observe(P(rn)[0],h)}J.R(sr,function(){var e,n,o;c().observer&&"MutationObserver"in window&&P(rn)[0]&&(e=P(rn)[0],n=h,(o=new MutationObserver($)).observe(e,n),xo=o),J.R(ro,$)}),R.render=$;var M=function(){var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e=!0}});or("testPassive",null,n),qr("testPassive",null,n)}catch(o){}return function(){return e}}();function O(){return!!M()&&{passive:!1}}var F,K,Q,ee,G=(Q=new Date().getTime(),ee=[],{In:function(e){var n=(e=e||S.event).wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,n)),l=e.wheelDeltaX!==void 0||e.deltaX!==void 0;F=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!l;var p=new Date().getTime();K=o<0?"down":"up",ee.length>149&&ee.shift(),ee.push(Math.abs(n));var C=p-Q;Q=p,C>200&&(ee=[])},Wn:function(){var e=un(ee,10)>=un(ee,70);return!!ee.length&&e&&F},Fn:function(){return K}});function De(){var e=c().css3?Rt()+Te():kr(H().N).item.offsetTop+kr(H().N).item.offsetHeight,n=It(e);R.test.top=-e+"px",q({canScroll:!1}),gn(n.element,n.options,c().scrollingSpeed,function(){setTimeout(function(){q({C:!0}),q({canScroll:!0})},30)})}function pe(){ne().getBoundingClientRect().bottom>=0&&$e()}function $e(){var e=It(kr(H().N).item.offsetTop);q({canScroll:!1}),gn(e.element,e.options,c().scrollingSpeed,function(){q({canScroll:!0}),q({C:!1}),q({Vn:!1})})}var ot,ce,Le,Ze=(ot=!1,ce={},Le={},function(e,n,o){switch(e){case"set":ce[n]=new Date().getTime(),Le[n]=o;break;case"isNewKeyframe":var l=new Date().getTime();ot=l-ce[n]>Le[n]}return ot});function he(){var e=H().P.next();e||!c().loopBottom&&!c().continuousVertical||(e=H().N[0]),e!=null?Ln(e,null,!1):ne().scrollHeight<Qe.scrollHeight&&J.L(Pn)}function Ce(){var e=H().P.prev();e||!c().loopTop&&!c().continuousVertical||(e=kr(H().N)),e!=null&&Ln(e,null,!0)}R.moveSectionDown=he,R.moveSectionUp=Ce;var Me=0;function We(e){c().autoScrolling&&(T.canScroll&&(e.pageY<Me&&ar().m.up?Ce():e.pageY>Me&&ar().m.down&&he()),Me=e.pageY)}function Vt(e){if(ar().m[e]){var n=e==="down"?he:Ce;Xe("scrollHorizontally")&&(n=oe("scrollHorizontally","getScrollSection",{type:e,scrollSection:n})),c().scrollOverflow&&ye.mn(H().P)?ye.Pn(e,H().P.item)&&ye.Hn()&&n():n()}}var vr,lr,tr,Gt=0,wt=0,Yt=0,rr=0,dr=gr(),Mt={Zn:"ontouchmove"in window?"touchmove":dr?dr.move:null,Bn:"ontouchstart"in window?"touchstart":dr?dr.down:null};function Xt(e){var n=be(e.target,b)||H().P.item,o=ye.mn(H().P);if(_t(e)){q({X:!0,_:!1}),c().autoScrolling&&(o&&!T.canScroll||c().scrollBar)&&gt(e);var l=Kt(e);Yt=l.y,rr=l.x;var p=Math.abs(Gt-Yt)>S.innerHeight/100*c().touchSensitivity,C=Math.abs(wt-rr)>Dt()/100*c().touchSensitivity,k=P(xe,n).length&&Math.abs(wt-rr)>Math.abs(Gt-Yt),ie=Gt>Yt?"down":"up";q({Y:k?wt>rr?"right":"left":ie}),k?!T.W&&C&&(wt>rr?ar().m.right&&J.L(En,{section:n}):ar().m.left&&J.L(Ir,{section:n})):c().autoScrolling&&T.canScroll&&p&&Vt(ie)}}function _t(e){return e.pointerType===void 0||e.pointerType!="mouse"}function Fr(e){if(c().fitToSection&&q({G:!1}),_t(e)){var n=Kt(e);Gt=n.y,wt=n.x}or("touchend",pt)}function pt(){qr("touchend",pt),q({X:!1})}function Kt(e){var n={};return n.y=e.pageY!==void 0&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=e.pageX!==void 0&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Pe&&_t(e)&&c().scrollBar&&e.touches!==void 0&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function gr(){var e;return S.PointerEvent&&(e={down:"pointerdown",move:"pointermove"}),e}function ln(e){c().autoScrolling&&_t(e)&&ar().m.up&&(T.canScroll||gt(e))}function Gr(e,n){var o=n==null?H().P.item:n,l=rt(T.N,o),p=P(xe,o)[0];if(!(p==null||Ur()||T.W||l.slides.length<2)){var C=l.activeSlide,k=e==="left"?C.prev():C.next();if(!k){if(!c().loopHorizontal)return;k=e==="left"?kr(l.slides):l.slides[0]}q({W:!R.test.hn}),In(p,k.item,e)}}function Be(e){Gr("left",e)}function Je(e){Gr("right",e)}function bt(e){var n=H().N.filter(function(l){return l.anchor===e})[0];if(!n){var o=e!==void 0?e-1:0;n=H().N[o]}return n}function ct(e){e!=null&&In(be(e,xe),e)}function D(e,n){var o=bt(e);if(o!=null){var l=function(p,C){var k=C.slides.filter(function(ie){return ie.anchor===p})[0];return k==null&&(p=p!==void 0?p:0,k=C.slides[p]),k?k.item:null}(n,o);o.anchor===T.Z||me(o.item,Pt)?ct(l):Ln(o,function(){ct(l)})}}function ge(e,n){var o=bt(e);n!==void 0?D(e,n):o!=null&&Ln(o)}function st(){clearTimeout(lr),Hr("keydown",Jt),Hr("keyup",At)}function Jt(e){clearTimeout(lr);var n=e.keyCode,o=[37,39].indexOf(n)>-1,l=c().autoScrolling||c().fitToSection||o;n===9?function(p){var C=p.shiftKey,k=L.activeElement,ie=Wn(Ee(H().P.item));function Y(fr){return gt(fr),ie[0]?ie[0].focus():null}if(!function(fr){var Zt=Wn(L),Ft=Zt.indexOf(L.activeElement),it=Zt[fr.shiftKey?Ft-1:Ft+1],br=be(it,Z),Sr=be(it,b);return!br&&!Sr}(p)){k?be(k,".fp-section.active,.fp-section.active .fp-slide.active")==null&&(k=Y(p)):Y(p);var Se=k==ie[0],qe=k==ie[ie.length-1],Ae=C&&Se;if(Ae||!C&&qe){gt(p);var ht=function(fr){var Zt,Ft=fr?"prevPanel":"nextPanel",it=[],br=we((T.P&&T.P.activeSlide?T.P.activeSlide:T.P)[Ft]());do(it=Wn(br.item)).length&&(Zt={Gn:br,Yn:it[fr?it.length-1:0]}),br=we(br[Ft]());while(br&&it.length===0);return Zt}(Ae),Ct=ht?ht.Gn:null;if(Ct){var mr=Ct.rn?Ct:Ct.parent;J.L(Vn,{Un:mr.index()+1,slideAnchor:Ct.rn?0:Ct.index()}),tr=ht.Yn,gt(p)}}}}(e):!Dn()&&c().keyboardScrolling&&l&&(vr=e.ctrlKey,lr=setTimeout(function(){(function(p){var C=p.shiftKey,k=L.activeElement,ie=Nt(k,"video")||Nt(k,"audio"),Y=ye.Pn("up",H().P.item),Se=ye.Pn("down",H().P.item),qe=[37,39].indexOf(p.keyCode)>-1;if(function(Ae){(function(ht){return[40,38,32,33,34].indexOf(ht.keyCode)>-1&&!T.C})(Ae)&&!be(Ae.target,ft)&&Ae.preventDefault()}(p),T.canScroll||qe)switch(q({H:"keydown"}),p.keyCode){case 38:case 33:ar().k.up&&Y?T.C?J.L(_n,{e:p}):Ce():ye.Sn();break;case 32:if(C&&ar().k.up&&!ie&&Y){Ce();break}case 40:case 34:if(ar().k.down&&Se){if(T.C)return;p.keyCode===32&&ie||he()}else ye.Sn();break;case 36:ar().k.up&&ge(1);break;case 35:ar().k.down&&ge(H().N.length);break;case 37:ar().k.left&&Be();break;case 39:ar().k.right&&Je()}})(e)},0))}function At(e){T.J&&(vr=e.ctrlKey)}function jt(){q({J:!1}),vr=!1}function nr(e){Yr()}function Wr(e){be(tr,Z)&&!be(tr,W)||Yr()}function Yr(){tr&&(tr.focus(),tr=null)}function Wn(e){return[].slice.call(P('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter(function(n){return yt(n,"tabindex")!=="-1"&&n.offsetParent!==null})}R.moveSlideLeft=Be,R.moveSlideRight=Je,R.moveTo=ge,J.R(sr,function(){or("blur",jt),zr("keydown",Jt),zr("keyup",At),J.R($r,st),J.R(Qn,nr),J.R(jr,Wr)});var wo=new Date().getTime(),Mr=[];function Xr(e){e?(function(){var n,o="";S.addEventListener?n="addEventListener":(n="attachEvent",o="on");var l="onwheel"in L.createElement("div")?"wheel":L.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll",p=O();l=="DOMMouseScroll"?L[n](o+"MozMousePixelScroll",Kr,p):L[n](o+l,Kr,p)}(),ne().addEventListener("mousedown",qn),ne().addEventListener("mouseup",zo)):(L.addEventListener?(Hr("mousewheel",Kr,!1),Hr("wheel",Kr,!1),Hr("MozMousePixelScroll",Kr,!1)):L.detachEvent("onmousewheel",Kr),ne().removeEventListener("mousedown",qn),ne().removeEventListener("mouseup",zo))}function Kr(e){var n=new Date().getTime(),o=me(P(".fp-completely")[0],"fp-normal-scroll"),l=function(qe,Ae){new Date().getTime();var ht=H().C&&qe.getBoundingClientRect().bottom>=0&&G.Fn()==="up",Ct=H().Vn;if(Ct)return gt(Ae),!1;if(H().C){if(ht){var mr;if(!(Ct||Ze("isNewKeyframe","beyondFullpage")&&G.Wn()))return(mr=It(kr(H().N).item.offsetTop+kr(H().N).item.offsetHeight)).element.scrollTo(0,mr.options),q({Vn:!1}),gt(Ae),!1;if(G.Wn())return ht=!1,q({Vn:!0}),q({H:"wheel"}),$e(),gt(Ae),!1}else Ze("set","beyondFullpage",1e3);if(!Ct&&!ht)return!0}}(ne(),e);if(T._||q({X:!1,_:!0,Y:"none"}),!ar().m.down&&!ar().m.up)return gt(e),!1;if(l)return!0;if(l===!1)return gt(e),!1;if(c().autoScrolling&&!vr&&!o){var p=(e=e||S.event).wheelDelta||-e.deltaY||-e.detail,C=Math.max(-1,Math.min(1,p)),k=e.wheelDeltaX!==void 0||e.deltaX!==void 0,ie=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!k,Y=C<0?"down":C>0?"up":"none";Mr.length>149&&Mr.shift(),Mr.push(Math.abs(p)),c().scrollBar&&gt(e);var Se=n-wo;return wo=n,Se>200&&(Mr=[]),q({U:Y}),T.canScroll&&!Ur()&&un(Mr,10)>=un(Mr,70)&&ie&&(q({H:"wheel"}),Vt(C<0?"down":"up")),!1}c().fitToSection&&q({G:!1})}function qn(e){var n;e.which==2&&(n=e.pageY,Me=n,ne().addEventListener("mousemove",We))}function zo(e){e.which==2&&ne().removeEventListener("mousemove",We)}function Ho(e){e?(Xr(!0),function(){if(Mt.Zn&&(U||Pe)&&(!Xe("dragAndMove")||c().dragAndMove==="mouseonly")){c().autoScrolling&&(Qe.removeEventListener(Mt.Zn,ln,{passive:!1}),Qe.addEventListener(Mt.Zn,ln,{passive:!1}));var n=c().touchWrapper;n.removeEventListener(Mt.Bn,Fr),n.removeEventListener(Mt.Zn,Xt,{passive:!1}),n.addEventListener(Mt.Bn,Fr),n.addEventListener(Mt.Zn,Xt,{passive:!1})}}()):(Xr(!1),function(){if(Mt.Zn&&(U||Pe)){c().autoScrolling&&(Qe.removeEventListener(Mt.Zn,Xt,{passive:!1}),Qe.removeEventListener(Mt.Zn,ln,{passive:!1}));var n=c().touchWrapper;n.removeEventListener(Mt.Bn,Fr),n.removeEventListener(Mt.Zn,Xt,{passive:!1})}}())}R.setMouseWheelScrolling=Xr;var gi=!0;function Qi(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Hr(e,Ii,!0)})}function Ti(e,n){document["fp_"+e]=n,zr(e,Ii,!0)}function Ii(e){var n=e.type,o=!1,l=n==="mouseleave"?e.toElement||e.relatedTarget:e.target;l!=document&&l?(n==="touchend"&&(gi=!1,setTimeout(function(){gi=!0},800)),(n!=="mouseenter"||gi)&&(c().normalScrollElements.split(",").forEach(function(p){if(!o){var C=Nt(l,p),k=be(l,p);(C||k)&&(R.shared.Xn||Ho(!1),R.shared.Xn=!0,o=!0)}}),!o&&R.shared.Xn&&(Ho(!0),R.shared.Xn=!1))):Ho(!0)}function ri(e,n){Rr(0,"internal"),ge(e,n),Rr(ir().scrollingSpeed,"internal")}J.R(sr,function(){c().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ti(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ti(e,!0)})),J.R($r,Qi)}),R.silentMoveTo=ri;var mi,Li,bi=Te(),Ri=Dt(),yi=!1;function Gi(){clearTimeout(mi),clearTimeout(Li),qr("resize",xi)}function xi(){yi||(c().autoScrolling&&!c().scrollBar||!c().fitToSection)&&Oi(Te()),function(){if(U)for(var e=0;e<4;e++)Li=setTimeout(function(){window.requestAnimationFrame(function(){c().autoScrolling&&!c().scrollBar&&(q({F:!0}),ri(T.P.index()+1),q({F:!1}))})},200*e)}(),yi=!0,clearTimeout(mi),mi=setTimeout(function(){(function(){if(q({F:!0}),Oi(""),Bt(ne(),"onResize"),c().autoScrolling||T.C||function(){if(!c().autoScrolling||c().scrollBar){var p=.01*S.innerHeight;L.documentElement.style.setProperty("--vh","".concat(p,"px"))}}(),J.L(ro),an(),Oo(),U){var e=L.activeElement;if(!Nt(e,"textarea")&&!Nt(e,"input")&&!Nt(e,"select")){var n=Te();Math.abs(n-bi)>20*Math.max(bi,n)/100&&(wi(!0),bi=n)}}else o=Te(),l=Dt(),T.q===o&&Ri===l||(q({q:o}),Ri=l,wi(!0));var o,l;Bt(ne(),"onResizeEnds"),q({F:!1})})(),yi=!1},400)}function wi(e){if(!me(ne(),lo)){q({F:!0,q:Te(),_n:Dt()});for(var n=H().N,o=0;o<n.length;++o){var l=n[o],p=P(xe,l.item)[0],C=l.slides;Xe("offsetSections")&&dt(l.item,{height:Qr(l.item)}),C.length>1&&In(p,l.activeSlide.item)}c().scrollOverflow&&ye.bn();var k=H().P.index();T.C||!k||Xe("fadingEffect")||Xe("dropEffect")||Xe("waterEffect")||ri(k+1),q({F:!1}),Et(c().afterResize)&&e&&c().afterResize.call(ne(),S.innerWidth,S.innerHeight),Et(c().afterReBuild)&&!e&&c().afterReBuild.call(ne()),Bt(ne(),"afterRebuild")}}function Oi(e){H().N.forEach(function(n){var o=e!==""||Xe("offsetSections")?Qr(n.item):"";dt(n.item,{height:o})})}function Ai(){var e,n,o=S.location.hash;if(o.length){var l=o.replace("#","").split("/"),p=o.indexOf("#/")>-1;e=p?"/"+l[1]:decodeURIComponent(l[0]);var C=p?l[2]:l[1];C&&C.length&&(n=decodeURIComponent(C))}return{section:e,sn:n}}function Yi(){qr("hashchange",Mi)}function Mi(){if(!T.V&&!c().lockAnchors){var e=Ai(),n=e.section,o=e.sn,l=T.Z===void 0,p=T.Z===void 0&&o===void 0&&!T.W;n&&n.length&&(n&&n!==T.Z&&!l||p&&!Ur()||!T.W&&T.B!=o&&!Ur())&&J.L(Vn,{Un:n,slideAnchor:o})}}function Xi(e){var n=e.target;be(n,c().menu+" [data-menuanchor]")&&Ki.call(n,e)}function Ki(e){q({H:"menu"}),!P(c().menu)[0]||!c().lockAnchors&&c().anchors.length||(gt(e),J.L(Bn,{anchor:yt(this,"data-menuanchor")}))}function Ji(e){var n=e.target;n&&be(n,"#fp-nav a")?fi.call(n,e.e):Nt(n,".fp-tooltip")?di.call(n):(Nt(n,Oe)||be(n,Oe)!=null)&&li.call(n,e.e)}R.reBuild=wi,J.R(sr,function(){xi(),or("resize",xi),J.R($r,Gi)}),R.setLockAnchors=function(e){c().lockAnchors=e},J.R(sr,function(){or("hashchange",Mi),J.R($r,Yi)}),J.R(sr,function(){zr("wheel",G.In,O()),J.R(Pn,De),J.R(_n,pe)}),J.R(sr,function(){J.R(kn,Xi)}),J.R(sr,function(){J.R(kn,Ji)});var Si,ki,Di=0;function ni(e){var n,o,l,p,C;if(Bt(ne(),"onScroll"),!T.F&&H().P&&(kr(H().N),!H().C&&!H().Vn&&(!c().autoScrolling||c().scrollBar||Xe("dragAndMove"))&&!on())){var k=Xe("dragAndMove")?Math.abs(oe("dragAndMove","getCurrentScroll")):Rt(),ie=function(Dr){var Jr=Dr>Di?"down":"up";return Di=Dr,q({K:Dr}),Jr}(k),Y=0,Se=k+Te()/2,qe=(Xe("dragAndMove")?oe("dragAndMove","getDocumentHeight"):Qe.scrollHeight-Te())===k,Ae=H().N;if(q({scrollY:k}),qe)Y=Ae.length-1;else if(k)for(var ht=0;ht<Ae.length;++ht)(be(Ae[ht].item,b)||Ae[ht].item).offsetTop<=Se&&(Y=ht);else Y=0;if(l=ie,p=H().P.item.offsetTop,C=p+Te(),(l=="up"?C>=Rt()+Te():p<=Rt())&&(me(H().P.item,nn)||(fe(H().P.item,nn),Ve(hr(H().P.item),nn))),o=(n=Ae[Y]).item,!n.isActive){q({V:!0});var Ct,mr,fr=H().P.item,Zt=H().P.index()+1,Ft=Ht(H().P,o),it=n.anchor,br=n.index()+1,Sr=n.activeSlide,On={P:fr,sectionIndex:br-1,anchorLink:it,element:o,leavingSection:Zt,direction:Ft,items:{origin:H().P,destination:n}};Sr&&(mr=Sr.anchor,Ct=Sr.index()),T.canScroll&&(Ve(Ae.filter(function(Dr){return Dr.index()!==n.index()}).map(function(Dr){return Dr.item}),Pt),fe(o,Pt),oe("parallax","afterLoad"),Et(c().beforeLeave)&&vo("beforeLeave",On),Et(c().onLeave)&&Tr("onLeave",On),Et(c().afterLoad)&&Tr("afterLoad",On),oe("resetSliders","apply",{localIsResizing:T.F,leavingSection:Zt}),co(fr),jn(o),so(o),Po(it,br-1),c().anchors.length&&q({Z:it}),an(),mn(Ct,mr,it)),clearTimeout(Si),Si=setTimeout(function(){q({V:!1})},100)}c().fitToSection&&T.canScroll&&(clearTimeout(ki),ki=setTimeout(function(){T.N.filter(function(Dr){var Jr=Dr.item.getBoundingClientRect();return Math.round(Jr.bottom)===Math.round(Te())||Math.round(Jr.top)===0}).length||Ko()},c().en))}}function Bi(e,n){n!==void 0?(n=n.replace(/ /g,"").split(",")).forEach(function(o){fo(e,o,"k")}):(fo(e,"all","k"),c().keyboardScrolling=e)}function qi(e){var n=e.index();c().anchors[n]!==void 0&&e.isActive&&Po(c().anchors[n],n),c().menu&&c().css3&&be(P(c().menu)[0],rn)!=null&&P(c().menu).forEach(function(o){Qe.appendChild(o)})}function Ni(){var e,n,o=H().P,l=H().P.item;fe(l,nn),jn(l),Go(),so(l),n=bt((e=Ai()).section),e.section&&n&&(n===void 0||n.index()!==Ut(Jo))||!Et(c().afterLoad)||Tr("afterLoad",{P:l,element:l,direction:null,anchorLink:o.anchor,sectionIndex:o.index(),items:{origin:H().P,destination:H().P}}),Et(c().afterRender)&&Tr("afterRender"),Bt(ne(),"afterRender")}function Ei(e,n){n!==void 0?(n=n.replace(/ /g,"").split(",")).forEach(function(o){fo(e,o,"m")}):fo(e,"all","m"),Bt(ne(),"setAllowScrolling",{value:e,Qn:n})}function zi(){var e=Ai(),n=e.section,o=e.sn;n?c().animateAnchor?D(n,o):ri(n,o):J.L(Sn,null)}J.R($r,function(){clearTimeout(Si),clearTimeout(ki)}),J.R(sr,function(){or("scroll",ni),L.body.addEventListener("scroll",ni),J.R(Vn,function(e){D(e.Un,e.slideAnchor)}),J.R(Bn,function(e){ge(e.anchor,void 0)}),J.R(fn,function(e){(e.direction==="down"?he:Ce)()}),J.R(Nn,function(e){Ln(e.destination)})}),J.R($r,function(){qr("scroll",ni)}),R.getActiveSlide=function(){return Ar(H().P.activeSlide)},R.getScrollX=function(){return T.scrollX},J.R(sr,function(){J.R($r,ui),J.R(Cn,function(e){In(e.slides,e.destination)}),J.R(En,function(e){Je(e.section)}),J.R(Ir,function(e){Be(e.section)})}),J.R(sr,function(){var e=c().credits.position,n=["left","right"].indexOf(e)>-1?"".concat(e,": 0;"):"",o=`
        <div class="fp-watermark" style="`.concat(n,`">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(c().credits.label,`
            </a>
        </div>
    `),l=kr(T.N),p=!T.Jn||c().credits.enabled;l&&l.item&&p&&l.item.insertAdjacentHTML("beforeend",o)}),function(){J.R($n,function(){var ie,Y,Se;q({Jn:(c().licenseKey,ie=c().licenseKey,Y=function(qe){var Ae=parseInt("514").toString(16);if(!qe||qe.length<29||qe.split(e[0]).length===4)return null;var ht=["Each","for"][p()]().join(""),Ct=qe[["split"]]("-"),mr=[];Ct[ht](function(Ft,it){if(it<4){var br=function(Dr){var Jr=Dr[Dr.length-1],ia=["NaN","is"][p()]().join("");return window[ia](Jr)?C(Jr):function(aa){return aa-Pt.length}(Jr)}(Ft);mr.push(br);var Sr=C(Ft[br]);if(it===1){var On=["pa","dS","t","art"].join("");Sr=Sr.toString()[On](2,"0")}Ae+=Sr,it!==0&&it!==1||(Ae+="-")}});var fr=0,Zt="";return qe.split("-").forEach(function(Ft,it){if(it<4){for(var br=0,Sr=0;Sr<4;Sr++)Sr!==mr[it]&&(br+=Math.abs(C(Ft[Sr])),isNaN(Ft[Sr])||fr++);var On=k(br);Zt+=On}}),Zt+=k(fr),{Kn:new Date(Ae+"T00:00"),qn:Ae.split("-")[2]===8*(Pt.length-2)+"",$n:Zt}}(ie),Se=function(qe){var Ae=l[p()]().join("");return qe&&Ae.indexOf(qe)===0&&qe.length===Ae.length}(ie),(Y||Se)&&(Y&&o<=Y.Kn&&Y.$n===ie.split(e[0])[4]||Se||Y.qn)||!1)})});var e=["-"],n="2023-2-1".split("-"),o=new Date(n[0],n[1],n[2]),l=["se","licen","-","v3","l","gp"];function p(){return[["re","verse"].join("")][0]}function C(ie){return ie?isNaN(ie)?ie.charCodeAt(0)-72:ie:""}function k(ie){var Y=72+ie;return Y>90&&Y<97&&(Y+=15),String.fromCharCode(Y).toUpperCase()}}(),R.setKeyboardScrolling=Bi,R.shared.nt=Ni,R.setAllowScrolling=Ei;var ea={};function Ao(){return ea}var oi,Rn,Hi,$i,ii=!me(Qe,V("OHNsd3AtZnVsbHBhZ2UtanM5T20="));function ji(e){if(Rn=L.createElement("div"),oi=V("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),ii||(oi=oi.replace("extensions/","").replace("Extension","")),Rn.innerHTML=oi,Rn=Rn.firstChild,"MutationObserver"in window&&new MutationObserver(ta).observe(L.body,{childList:!0,subtree:!1}),(!ii||Xe(e)&&R[e])&&(!function(o){var l=Ao()[o]!==void 0&&Ao()[o].length,p=[],C=!1;return pr(Ao()[o])?p=Ao()[o]:p.push(Ao()[o]),p.forEach(function(k){var ie=function(){if(L.domain.length){for(var Jr=L.domain.replace(/^(www\.)/,"").split(".");Jr.length>2;)Jr.shift();return Jr.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),Y=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3","NDU2dGVzdDQ1Ng=="],Se=V(Y[0]),qe=V(Y[1]),Ae=V(Y[2]),ht=V(Y[6]),Ct=V(Y[3]),mr=V(Y[4]),fr=V(Y[5]),Zt=c()[mr+fr]!==void 0;l=l||Zt;var Ft=[Se,qe,Ae,ht].indexOf(ie)<0&&ie.length!==0;if(!l&&!Zt&&Ft)return!1;var it=l?V(k):"",br=(it=it.split("_")).length>1&&it[1].indexOf(o,it[1].length-o.length)>-1,Sr=it.length>1&&it[1].toLowerCase().indexOf(mr)>-1,On=it[0].indexOf(ie,it[0].length-ie.length)<0,Dr=br||Sr;C=C||!(On&&Ft&&Ct!=it[0])&&Dr||!Ft}),C}(e)||!ii)){Zi();var n=V("MzQ1c2V0SW50ZXJ2YWwxMjM=");window[n](Zi,2e3)}}function Zi(){Rn&&($i||(Math.random()<.5?ae(Qe,Rn):yr(Rn,Qe),$i=!0),Rn.setAttribute("style",V("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,V("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function ta(e){e.forEach(function(n){if(n.removedNodes[0]&&n.removedNodes[0].isEqualNode(Rn)){clearTimeout(Hi);var o=V("bDIwc2V0VGltZW91dDAzbA==");Hi=window[o](ra,900)}})}function ra(){$i=!1}function na(){Bo(),an(),c().scrollBar=c().scrollBar||c().hybrid,cr(),function(){dt(An(ne(),"body"),{height:"100%",position:"relative"}),fe(ne(),zn),fe(de,pn),q({q:Te()}),Ve(ne(),lo),t(),oe("parallax","init");for(var e=H().an,n=0;n<e.length;n++){var o=e[n],l=o.wn;o.item.setAttribute("data-fp-styles",yt(o.item,"style")),Do(o),qi(o),l.length>0&&i(o)}c().fixedElements&&c().css3&&P(c().fixedElements).forEach(function(p){Qe.appendChild(p)}),c().navigation&&Yo(),P('iframe[src*="youtube.com/embed/"]',ne()).forEach(function(p){var C,k;k=yt(C=p,"src"),C.setAttribute("src",k+(/\?/.test(k)?"&":"?")+"enablejsapi=1")}),oe("fadingEffect","apply"),oe("waterEffect","init"),oe("dropEffect","init"),oe("cards","init"),c().scrollOverflow&&ye.bn()}(),Ei(!0),Ho(!0),Zn(c().autoScrolling,"internal"),Oo(),Zo(),L.readyState==="complete"&&zi(),or("load",zi),Ni(),ii||ji("l"),Bo(),an()}function Fi(){var e=c().licenseKey;c().licenseKey.trim()===""?(z("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),z("error","https://github.com/alvarotrigo/fullPage.js#options")):c()&&T.Jn||L.domain.indexOf("alvarotrigo.com")>-1?e&&e.length:(z("error","Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"),z("error","https://alvarotrigo.com/fullPage/pricing")),me(de,pn)?z("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(c().continuousVertical&&(c().loopTop||c().loopBottom)&&(c().continuousVertical=!1,z("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!c().scrollOverflow||!c().scrollBar&&c().autoScrolling||z("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!c().continuousVertical||!c().scrollBar&&c().autoScrolling||(c().continuousVertical=!1,z("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),c().anchors.forEach(function(n){var o=[].slice.call(P("[name]")).filter(function(C){return yt(C,"name")&&yt(C,"name").toLowerCase()==n.toLowerCase()}),l=[].slice.call(P("[id]")).filter(function(C){return yt(C,"id")&&yt(C,"id").toLowerCase()==n.toLowerCase()});if(l.length||o.length){z("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var p=l.length?"id":"name";(l.length||o.length)&&z("error",'"'+n+'" is is being used by another element `'+p+"` property")}}))}function oa(){return{options:c(),internals:{container:ne(),canScroll:T.canScroll,isScrollAllowed:ar(),getDestinationPosition:Xo,isTouch:Pe,c:ji,getXmovement:Qo,removeAnimation:Ke,getTransforms:Wt,lazyLoad:jn,addAnimation:je,performHorizontalMove:Uo,landscapeScroll:In,silentLandscapeScroll:Kn,keepSlidesPosition:Co,silentScroll:Lt,styleSlides:i,styleSection:Do,scrollHandler:ni,getEventsPage:Kt,getMSPointer:gr,isReallyTouch:_t,usingExtension:Xe,toggleControlArrows:_o,touchStartHandler:Fr,touchMoveHandler:Xt,nullOrSection:Or,items:{SectionPanel:Fn,SlidePanel:No,Item:se},getVisible:He,getState:H,updateState:an,updateStructuralState:Bo,activeSlidesNavigation:Vo,getPanels:function(){return T.un},getSections:function(){return T.N},setActiveSection:function(e){T.P=e}}}}function Vr(e){var n=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],o=V(n[0]),l=V(n[1]),p=c()[o+l]!==void 0,C="fp_"+e+"Extension";Ao()[e]=p?c()[o+l]:c()[e+l],R[e]=window[C]!==void 0?new window[C]:null,R[e]&&R[e].c(e)}function Wi(e,n){var o;if(Qe=P("body")[0],de=P("html")[0],$t=P("html, body"),!me(de,pn))return o=typeof e=="string"?P(e)[0]:e,Cr.touchWrapper=o,function(l){Pr=j({},Cr,l),Er=Object.assign({},Pr)}(n),function(l){Lr=l}(typeof e=="string"?P(e)[0]:e),J.L($n),Fi(),R.getFullpageData=oa,R.version="4.0.19",R.test=Object.assign(R.test,{top:"0px",cn:"translate3d(0px, 0px, 0px)",dn:function(){for(var l=[],p=0;p<P(c().sectionSelector,ne()).length;p++)l.push("translate3d(0px, 0px, 0px)");return l}(),left:function(){for(var l=[],p=0;p<P(c().sectionSelector,ne()).length;p++)l.push(0);return l}(),options:c(),setAutoScrolling:null}),R.shared=Object.assign(R.shared,{nt:null,Xn:!1}),S.fullpage_api=R,S.fullpage_extensions=!0,ne()&&(J.L("beforeInit"),Vr("continuousHorizontal"),Vr("scrollHorizontally"),Vr("resetSliders"),Vr("interlockedSlides"),Vr("responsiveSlides"),Vr("fadingEffect"),Vr("dragAndMove"),Vr("offsetSections"),Vr("scrollOverflowReset"),Vr("parallax"),Vr("cards"),Vr("dropEffect"),Vr("waterEffect"),oe("dragAndMove","init"),oe("responsiveSlides","init"),na(),J.L(sr),oe("dragAndMove","turnOffTouch")),S.fullpage_api;Fi()}return R.destroy=function(e){Bt(ne(),"destroy",e),Zn(!1,"internal"),Ei(!0),Ho(!1),Bi(!1),fe(ne(),lo),J.L($r),oe("dragAndMove","destroy"),e&&(Lt(0),P("img[data-src], source[data-src], audio[data-src], iframe[data-src]",ne()).forEach(function(n){dn(n,"src")}),P("img[data-srcset]").forEach(function(n){dn(n,"srcset")}),en(P("#fp-nav, .fp-slidesNav, .fp-controlArrow")),dt(A(H().N),{height:"","background-color":"",padding:""}),dt(A(H().slides),{width:""}),dt(ne(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),dt($t,{overflow:"",height:""}),Ve(de,pn),Ve(Qe,Hn),Qe.className.split(/\s+/).forEach(function(n){n.indexOf("fp-viewing")===0&&Ve(Qe,n)}),A(H().un).forEach(function(n){c().scrollOverflow&&ye.Nn(n),Ve(n,"fp-table active "+nn),yt(n,"data-fp-styles")&&n.setAttribute("style",yt(n,"data-fp-styles")),me(n,d)&&!xr&&n.removeAttribute("data-anchor")}),Ke(ne()),[f,Ie,xe].forEach(function(n){P(n,ne()).forEach(function(o){et(o)})}),dt(ne(),{"-webkit-transition":"none",transition:"none"}),S.scrollTo(0,0),[d,I,ve].forEach(function(n){Ve(P("."+n),n)}))},S.fp_easings=j(S.fp_easings,{easeInOutCubic:function(e,n,o,l){return(e/=l/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n}}),S.jQuery&&function(e,n){e&&n?e.fn.fullpage=function(o){o=e.extend({},o,{$:e}),new n(this[0],o),Object.keys(R).forEach(function(l){c().$.fn.fullpage[l]=R[l]})}:z("error","jQuery is required to use the jQuery fullpage adapter!")}(S.jQuery,Wi),Wi})},239:()=>{window.fp_easings={def:"easeOutQuad",linear:function(u,x,g,E){return g*u/E+x},swing:function(u,x,g,E){return window.fp_easings[window.fp_easings.def](u,x,g,E)},easeInQuad:function(u,x,g,E){return g*(u/=E)*u+x},easeOutQuad:function(u,x,g,E){return-g*(u/=E)*(u-2)+x},easeInOutQuad:function(u,x,g,E){return(u/=E/2)<1?g/2*u*u+x:-g/2*(--u*(u-2)-1)+x},easeInCubic:function(u,x,g,E){return g*(u/=E)*u*u+x},easeOutCubic:function(u,x,g,E){return g*((u=u/E-1)*u*u+1)+x},easeInOutCubic:function(u,x,g,E){return(u/=E/2)<1?g/2*u*u*u+x:g/2*((u-=2)*u*u+2)+x},easeInQuart:function(u,x,g,E){return g*(u/=E)*u*u*u+x},easeOutQuart:function(u,x,g,E){return-g*((u=u/E-1)*u*u*u-1)+x},easeInOutQuart:function(u,x,g,E){return(u/=E/2)<1?g/2*u*u*u*u+x:-g/2*((u-=2)*u*u*u-2)+x},easeInQuint:function(u,x,g,E){return g*(u/=E)*u*u*u*u+x},easeOutQuint:function(u,x,g,E){return g*((u=u/E-1)*u*u*u*u+1)+x},easeInOutQuint:function(u,x,g,E){return(u/=E/2)<1?g/2*u*u*u*u*u+x:g/2*((u-=2)*u*u*u*u+2)+x},easeInSine:function(u,x,g,E){return-g*Math.cos(u/E*(Math.PI/2))+g+x},easeOutSine:function(u,x,g,E){return g*Math.sin(u/E*(Math.PI/2))+x},easeInOutSine:function(u,x,g,E){return-g/2*(Math.cos(Math.PI*u/E)-1)+x},easeInExpo:function(u,x,g,E){return u==0?x:g*Math.pow(2,10*(u/E-1))+x},easeOutExpo:function(u,x,g,E){return u==E?x+g:g*(1-Math.pow(2,-10*u/E))+x},easeInOutExpo:function(u,x,g,E){return u==0?x:u==E?x+g:(u/=E/2)<1?g/2*Math.pow(2,10*(u-1))+x:g/2*(2-Math.pow(2,-10*--u))+x},easeInCirc:function(u,x,g,E){return-g*(Math.sqrt(1-(u/=E)*u)-1)+x},easeOutCirc:function(u,x,g,E){return g*Math.sqrt(1-(u=u/E-1)*u)+x},easeInOutCirc:function(u,x,g,E){return(u/=E/2)<1?-g/2*(Math.sqrt(1-u*u)-1)+x:g/2*(Math.sqrt(1-(u-=2)*u)+1)+x},easeInElastic:function(u,x,g,E){var B=1.70158,S=0,L=g;return u==0?x:(u/=E)==1?x+g:(S||(S=.3*E),L<Math.abs(g)?(L=g,B=S/4):B=S/(2*Math.PI)*Math.asin(g/L),-L*Math.pow(2,10*(u-=1))*Math.sin((u*E-B)*(2*Math.PI)/S)+x)},easeOutElastic:function(u,x,g,E){var B=1.70158,S=0,L=g;return u==0?x:(u/=E)==1?x+g:(S||(S=.3*E),L<Math.abs(g)?(L=g,B=S/4):B=S/(2*Math.PI)*Math.asin(g/L),L*Math.pow(2,-10*u)*Math.sin((u*E-B)*(2*Math.PI)/S)+g+x)},easeInOutElastic:function(u,x,g,E){var B=1.70158,S=0,L=g;return u==0?x:(u/=E/2)==2?x+g:(S||(S=E*.44999999999999996),L<Math.abs(g)?(L=g,B=S/4):B=S/(2*Math.PI)*Math.asin(g/L),u<1?L*Math.pow(2,10*(u-=1))*Math.sin((u*E-B)*(2*Math.PI)/S)*-.5+x:L*Math.pow(2,-10*(u-=1))*Math.sin((u*E-B)*(2*Math.PI)/S)*.5+g+x)},easeInBack:function(u,x,g,E,B){return B==null&&(B=1.70158),g*(u/=E)*u*((B+1)*u-B)+x},easeOutBack:function(u,x,g,E,B){return B==null&&(B=1.70158),g*((u=u/E-1)*u*((B+1)*u+B)+1)+x},easeInOutBack:function(u,x,g,E,B){return B==null&&(B=1.70158),(u/=E/2)<1?g/2*(u*u*((1+(B*=1.525))*u-B))+x:g/2*((u-=2)*u*((1+(B*=1.525))*u+B)+2)+x},easeInBounce:function(u,x,g,E){return g-window.fp_easings.easeOutBounce(E-u,0,g,E)+x},easeOutBounce:function(u,x,g,E){return(u/=E)<.36363636363636365?g*(7.5625*u*u)+x:u<.7272727272727273?g*(7.5625*(u-=.5454545454545454)*u+.75)+x:u<.9090909090909091?g*(7.5625*(u-=.8181818181818182)*u+.9375)+x:g*(7.5625*(u-=.9545454545454546)*u+.984375)+x},easeInOutBounce:function(u,x,g,E){return u<E/2?.5*window.fp_easings.easeInBounce(2*u,0,g,E)+x:.5*window.fp_easings.easeOutBounce(2*u-E,0,g,E)+.5*g+x}}},379:u=>{"use strict";var x=[];function g(S){for(var L=-1,U=0;U<x.length;U++)if(x[U].identifier===S){L=U;break}return L}function E(S,L){for(var U={},Re=[],Pe=0;Pe<S.length;Pe++){var ze=S[Pe],R=L.base?ze[0]+L.base:ze[0],z=U[R]||0,a="".concat(R," ").concat(z);U[R]=z+1;var He=g(a),P={css:ze[1],media:ze[2],sourceMap:ze[3]};He!==-1?(x[He].references++,x[He].updater(P)):x.push({identifier:a,updater:B(P,L),references:1}),Re.push(a)}return Re}function B(S,L){var U=L.domAPI(L);return U.update(S),function(Pe){if(Pe){if(Pe.css===S.css&&Pe.media===S.media&&Pe.sourceMap===S.sourceMap)return;U.update(S=Pe)}else U.remove()}}u.exports=function(S,L){L=L||{},S=S||[];var U=E(S,L);return function(Pe){Pe=Pe||[];for(var ze=0;ze<U.length;ze++){var R=U[ze],z=g(R);x[z].references--}for(var a=E(Pe,L),He=0;He<U.length;He++){var P=U[He],j=g(P);x[j].references===0&&(x[j].updater(),x.splice(j,1))}U=a}}},569:u=>{"use strict";var x={};function g(B){if(typeof x[B]=="undefined"){var S=document.querySelector(B);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(L){S=null}x[B]=S}return x[B]}function E(B,S){var L=g(B);if(!L)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");L.appendChild(S)}u.exports=E},216:u=>{"use strict";function x(g){var E=document.createElement("style");return g.setAttributes(E,g.attributes),g.insert(E),E}u.exports=x},565:(u,x,g)=>{"use strict";function E(B){var S=g.nc;S&&B.setAttribute("nonce",S)}u.exports=E},795:u=>{"use strict";function x(B,S,L){var U=L.css,Re=L.media,Pe=L.sourceMap;Re?B.setAttribute("media",Re):B.removeAttribute("media"),Pe&&typeof btoa!="undefined"&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Pe))))," */")),S.styleTagTransform(U,B)}function g(B){if(B.parentNode===null)return!1;B.parentNode.removeChild(B)}function E(B){var S=B.insertStyleElement(B);return{update:function(U){x(S,B,U)},remove:function(){g(S)}}}u.exports=E},589:u=>{"use strict";function x(g,E){if(E.styleSheet)E.styleSheet.cssText=g;else{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(document.createTextNode(g))}}u.exports=x},497:u=>{"use strict";u.exports=N(62435)}},v={};function vt(u){var x=v[u];if(x!==void 0)return x.exports;var g=v[u]={id:u,exports:{}};return ut[u].call(g.exports,g,g.exports,vt),g.exports}vt.n=u=>{var x=u&&u.__esModule?()=>u.default:()=>u;return vt.d(x,{a:x}),x},vt.d=(u,x)=>{for(var g in x)vt.o(x,g)&&!vt.o(u,g)&&Object.defineProperty(u,g,{enumerable:!0,get:x[g]})},vt.o=(u,x)=>Object.prototype.hasOwnProperty.call(u,x),vt.r=u=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var qt={};(()=>{"use strict";vt.r(qt),vt.d(qt,{default:()=>S});var u=vt(497),x=vt.n(u);const E=L=>{let{children:U}=L;return x().createElement(u.Fragment,null,U)},B=()=>{if(typeof window=="undefined")return!1;try{return!"production".toLowerCase().match(/test/)}catch(L){return!0}},S=(()=>{let L;return B()?L=vt(88).Z:L=vt(882).Z,L.Wrapper=E,L})()})(),Ne.exports=qt})()},8679:function(Ne,re,N){"use strict";var ut=N(21296),v={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x={};x[ut.ForwardRef]=qt,x[ut.Memo]=u;function g(ze){return ut.isMemo(ze)?u:x[ze.$$typeof]||v}var E=Object.defineProperty,B=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,L=Object.getOwnPropertyDescriptor,U=Object.getPrototypeOf,Re=Object.prototype;function Pe(ze,R,z){if(typeof R!="string"){if(Re){var a=U(R);a&&a!==Re&&Pe(ze,a,z)}var He=B(R);S&&(He=He.concat(S(R)));for(var P=g(ze),j=g(R),me=0;me<He.length;++me){var Te=He[me];if(!vt[Te]&&!(z&&z[Te])&&!(j&&j[Te])&&!(P&&P[Te])){var Dt=L(R,Te);try{E(ze,Te,Dt)}catch(dt){}}}}return ze}Ne.exports=Pe},96103:function(Ne,re){"use strict";var N=typeof Symbol=="function"&&Symbol.for,ut=N?Symbol.for("react.element"):60103,v=N?Symbol.for("react.portal"):60106,vt=N?Symbol.for("react.fragment"):60107,qt=N?Symbol.for("react.strict_mode"):60108,u=N?Symbol.for("react.profiler"):60114,x=N?Symbol.for("react.provider"):60109,g=N?Symbol.for("react.context"):60110,E=N?Symbol.for("react.async_mode"):60111,B=N?Symbol.for("react.concurrent_mode"):60111,S=N?Symbol.for("react.forward_ref"):60112,L=N?Symbol.for("react.suspense"):60113,U=N?Symbol.for("react.suspense_list"):60120,Re=N?Symbol.for("react.memo"):60115,Pe=N?Symbol.for("react.lazy"):60116,ze=N?Symbol.for("react.block"):60121,R=N?Symbol.for("react.fundamental"):60117,z=N?Symbol.for("react.responder"):60118,a=N?Symbol.for("react.scope"):60119;function He(j){if(typeof j=="object"&&j!==null){var me=j.$$typeof;switch(me){case ut:switch(j=j.type,j){case E:case B:case vt:case u:case qt:case L:return j;default:switch(j=j&&j.$$typeof,j){case g:case S:case Pe:case Re:case x:return j;default:return me}}case v:return me}}}function P(j){return He(j)===B}re.AsyncMode=E,re.ConcurrentMode=B,re.ContextConsumer=g,re.ContextProvider=x,re.Element=ut,re.ForwardRef=S,re.Fragment=vt,re.Lazy=Pe,re.Memo=Re,re.Portal=v,re.Profiler=u,re.StrictMode=qt,re.Suspense=L,re.isAsyncMode=function(j){return P(j)||He(j)===E},re.isConcurrentMode=P,re.isContextConsumer=function(j){return He(j)===g},re.isContextProvider=function(j){return He(j)===x},re.isElement=function(j){return typeof j=="object"&&j!==null&&j.$$typeof===ut},re.isForwardRef=function(j){return He(j)===S},re.isFragment=function(j){return He(j)===vt},re.isLazy=function(j){return He(j)===Pe},re.isMemo=function(j){return He(j)===Re},re.isPortal=function(j){return He(j)===v},re.isProfiler=function(j){return He(j)===u},re.isStrictMode=function(j){return He(j)===qt},re.isSuspense=function(j){return He(j)===L},re.isValidElementType=function(j){return typeof j=="string"||typeof j=="function"||j===vt||j===B||j===u||j===qt||j===L||j===U||typeof j=="object"&&j!==null&&(j.$$typeof===Pe||j.$$typeof===Re||j.$$typeof===x||j.$$typeof===g||j.$$typeof===S||j.$$typeof===R||j.$$typeof===z||j.$$typeof===a||j.$$typeof===ze)},re.typeOf=He},21296:function(Ne,re,N){"use strict";Ne.exports=N(96103)},69921:function(Ne,re){"use strict";var N;var ut=Symbol.for("react.element"),v=Symbol.for("react.portal"),vt=Symbol.for("react.fragment"),qt=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),g=Symbol.for("react.context"),E=Symbol.for("react.server_context"),B=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),ze;ze=Symbol.for("react.module.reference");function R(z){if(typeof z=="object"&&z!==null){var a=z.$$typeof;switch(a){case ut:switch(z=z.type,z){case vt:case u:case qt:case S:case L:return z;default:switch(z=z&&z.$$typeof,z){case E:case g:case B:case Re:case U:case x:return z;default:return a}}case v:return a}}}N=g,N=x,N=ut,N=B,N=vt,N=Re,N=U,N=v,N=u,N=qt,N=S,N=L,N=function(){return!1},N=function(){return!1},N=function(z){return R(z)===g},N=function(z){return R(z)===x},N=function(z){return typeof z=="object"&&z!==null&&z.$$typeof===ut},N=function(z){return R(z)===B},N=function(z){return R(z)===vt},N=function(z){return R(z)===Re},N=function(z){return R(z)===U},N=function(z){return R(z)===v},N=function(z){return R(z)===u},N=function(z){return R(z)===qt},N=function(z){return R(z)===S},N=function(z){return R(z)===L},re.isValidElementType=function(z){return typeof z=="string"||typeof z=="function"||z===vt||z===u||z===qt||z===S||z===L||z===Pe||typeof z=="object"&&z!==null&&(z.$$typeof===Re||z.$$typeof===U||z.$$typeof===x||z.$$typeof===g||z.$$typeof===B||z.$$typeof===ze||z.getModuleId!==void 0)},re.typeOf=R},59864:function(Ne,re,N){"use strict";Ne.exports=N(69921)},25226:function(Ne){"use strict";var re={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};Ne.exports=re},94589:function(Ne,re,N){"use strict";N.d(re,{f6:function(){return io},vJ:function(){return Hn},iv:function(){return $n},ZP:function(){return nn}});var ut=N(59864),v=N(62435),vt=N(96774),qt=N.n(vt);function u(d){function b(ae,V,te,se,A){for(var rt=0,_=0,Tt=0,lt=0,Ee,we,It=0,ur=0,je,Ht=je=Ee=0,Ke=0,Wt=0,vn=0,Lt=0,Rr=te.length,Zr=Rr-1,Qe,de="",$t="",gn="",Or="",Ar;Ke<Rr;){if(we=te.charCodeAt(Ke),Ke===Zr&&_+lt+Tt+rt!==0&&(_!==0&&(we=_===47?10:47),lt=Tt=rt=0,Rr++,Zr++),_+lt+Tt+rt===0){if(Ke===Zr&&(0<Wt&&(de=de.replace(at,"")),0<de.trim().length)){switch(we){case 32:case 9:case 59:case 13:case 10:break;default:de+=te.charAt(Ke)}we=59}switch(we){case 123:for(de=de.trim(),Ee=de.charCodeAt(0),je=1,Lt=++Ke;Ke<Rr;){switch(we=te.charCodeAt(Ke)){case 123:je++;break;case 125:je--;break;case 47:switch(we=te.charCodeAt(Ke+1)){case 42:case 47:e:{for(Ht=Ke+1;Ht<Zr;++Ht)switch(te.charCodeAt(Ht)){case 47:if(we===42&&te.charCodeAt(Ht-1)===42&&Ke+2!==Ht){Ke=Ht+1;break e}break;case 10:if(we===47){Ke=Ht+1;break e}}Ke=Ht}}break;case 91:we++;case 40:we++;case 34:case 39:for(;Ke++<Zr&&te.charCodeAt(Ke)!==we;);}if(je===0)break;Ke++}switch(je=te.substring(Lt,Ke),Ee===0&&(Ee=(de=de.replace(_e,"").trim()).charCodeAt(0)),Ee){case 64:switch(0<Wt&&(de=de.replace(at,"")),we=de.charCodeAt(1),we){case 100:case 109:case 115:case 45:Wt=V;break;default:Wt=hn}if(je=b(V,Wt,je,we,A+1),Lt=je.length,0<oe&&(Wt=f(hn,de,vn),Ar=X(3,je,Wt,V,ir,c,Lt,we,A,se),de=Wt.join(""),Ar!==void 0&&(Lt=(je=Ar.trim()).length)===0&&(we=0,je="")),0<Lt)switch(we){case 115:de=de.replace(Cr,W);case 100:case 109:case 45:je=de+"{"+je+"}";break;case 107:de=de.replace(Ue,"$1 $2"),je=de+"{"+je+"}",je=cr===1||cr===2&&Z("@"+je,3)?"@-webkit-"+je+"@"+je:"@"+je;break;default:je=de+je,se===112&&(je=($t+=je,""))}else je="";break;default:je=b(V,f(V,de,vn),je,se,A+1)}gn+=je,je=vn=Wt=Ht=Ee=0,de="",we=te.charCodeAt(++Ke);break;case 125:case 59:if(de=(0<Wt?de.replace(at,""):de).trim(),1<(Lt=de.length))switch(Ht===0&&(Ee=de.charCodeAt(0),Ee===45||96<Ee&&123>Ee)&&(Lt=(de=de.replace(" ",":")).length),0<oe&&(Ar=X(1,de,V,ae,ir,c,$t.length,se,A,se))!==void 0&&(Lt=(de=Ar.trim()).length)===0&&(de="\0\0"),Ee=de.charCodeAt(0),we=de.charCodeAt(1),Ee){case 0:break;case 64:if(we===105||we===99){Or+=de+te.charAt(Ke);break}default:de.charCodeAt(Lt-1)!==58&&($t+=I(de,Ee,we,de.charCodeAt(2)))}vn=Wt=Ht=Ee=0,de="",we=te.charCodeAt(++Ke)}}switch(we){case 13:case 10:_===47?_=0:1+Ee===0&&se!==107&&0<de.length&&(Wt=1,de+="\0"),0<oe*on&&X(0,de,V,ae,ir,c,$t.length,se,A,se),c=1,ir++;break;case 59:case 125:if(_+lt+Tt+rt===0){c++;break}default:switch(c++,Qe=te.charAt(Ke),we){case 9:case 32:if(lt+rt+_===0)switch(It){case 44:case 58:case 9:case 32:Qe="";break;default:we!==32&&(Qe=" ")}break;case 0:Qe="\\0";break;case 12:Qe="\\f";break;case 11:Qe="\\v";break;case 38:lt+_+rt===0&&(Wt=vn=1,Qe="\f"+Qe);break;case 108:if(lt+_+rt+wr===0&&0<Ht)switch(Ke-Ht){case 2:It===112&&te.charCodeAt(Ke-3)===58&&(wr=It);case 8:ur===111&&(wr=ur)}break;case 58:lt+_+rt===0&&(Ht=Ke);break;case 44:_+Tt+lt+rt===0&&(Wt=1,Qe+="\r");break;case 34:case 39:_===0&&(lt=lt===we?0:lt===0?we:lt);break;case 91:lt+_+Tt===0&&rt++;break;case 93:lt+_+Tt===0&&rt--;break;case 41:lt+_+rt===0&&Tt--;break;case 40:if(lt+_+rt===0){if(Ee===0)switch(2*It+3*ur){case 533:break;default:Ee=1}Tt++}break;case 64:_+Tt+lt+rt+Ht+je===0&&(je=1);break;case 42:case 47:if(!(0<lt+rt+Tt))switch(_){case 0:switch(2*we+3*te.charCodeAt(Ke+1)){case 235:_=47;break;case 220:Lt=Ke,_=42}break;case 42:we===47&&It===42&&Lt+2!==Ke&&(te.charCodeAt(Lt+2)===33&&($t+=te.substring(Lt,Ke+1)),Qe="",_=0)}}_===0&&(de+=Qe)}ur=It,It=we,Ke++}if(Lt=$t.length,0<Lt){if(Wt=V,0<oe&&(Ar=X(2,$t,Wt,ae,ir,c,Lt,se,A,se),Ar!==void 0&&($t=Ar).length===0))return Or+$t+gn;if($t=Wt.join(",")+"{"+$t+"}",cr*wr!==0){switch(cr!==2||Z($t,2)||(wr=0),wr){case 111:$t=$t.replace(xt,":-moz-$1")+$t;break;case 112:$t=$t.replace(zt,"::-webkit-input-$1")+$t.replace(zt,"::-moz-$1")+$t.replace(zt,":-ms-input-$1")+$t}wr=0}}return Or+$t+gn}function f(ae,V,te){var se=V.trim().split(Oe);V=se;var A=se.length,rt=ae.length;switch(rt){case 0:case 1:var _=0;for(ae=rt===0?"":ae[0]+" ";_<A;++_)V[_]=m(ae,V[_],te).trim();break;default:var Tt=_=0;for(V=[];_<A;++_)for(var lt=0;lt<rt;++lt)V[Tt++]=m(ae[lt]+" ",se[_],te).trim()}return V}function m(ae,V,te){var se=V.charCodeAt(0);switch(33>se&&(se=(V=V.trim()).charCodeAt(0)),se){case 38:return V.replace(mt,"$1"+ae.trim());case 58:return ae.trim()+V.replace(mt,"$1"+ae.trim());default:if(0<1*te&&0<V.indexOf("\f"))return V.replace(mt,(ae.charCodeAt(0)===58?"":"$1")+ae.trim())}return ae+V}function I(ae,V,te,se){var A=ae+";",rt=2*V+3*te+4*se;if(rt===944){ae=A.indexOf(":",9)+1;var _=A.substring(ae,A.length-1).trim();return _=A.substring(0,ae).trim()+_+";",cr===1||cr===2&&Z(_,1)?"-webkit-"+_+_:_}if(cr===0||cr===2&&!Z(A,1))return A;switch(rt){case 1015:return A.charCodeAt(10)===97?"-webkit-"+A+A:A;case 951:return A.charCodeAt(3)===116?"-webkit-"+A+A:A;case 963:return A.charCodeAt(5)===110?"-webkit-"+A+A:A;case 1009:if(A.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+A+A;case 978:return"-webkit-"+A+"-moz-"+A+A;case 1019:case 983:return"-webkit-"+A+"-moz-"+A+"-ms-"+A+A;case 883:if(A.charCodeAt(8)===45)return"-webkit-"+A+A;if(0<A.indexOf("image-set(",11))return A.replace(ne,"$1-webkit-$2")+A;break;case 932:if(A.charCodeAt(4)===45)switch(A.charCodeAt(5)){case 103:return"-webkit-box-"+A.replace("-grow","")+"-webkit-"+A+"-ms-"+A.replace("grow","positive")+A;case 115:return"-webkit-"+A+"-ms-"+A.replace("shrink","negative")+A;case 98:return"-webkit-"+A+"-ms-"+A.replace("basis","preferred-size")+A}return"-webkit-"+A+"-ms-"+A+A;case 964:return"-webkit-"+A+"-ms-flex-"+A+A;case 1023:if(A.charCodeAt(8)!==99)break;return _=A.substring(A.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+_+"-webkit-"+A+"-ms-flex-pack"+_+A;case 1005:return Fe.test(A)?A.replace(ft,":-webkit-")+A.replace(ft,":-moz-")+A:A;case 1e3:switch(_=A.substring(13).trim(),V=_.indexOf("-")+1,_.charCodeAt(0)+_.charCodeAt(V)){case 226:_=A.replace(Ot,"tb");break;case 232:_=A.replace(Ot,"tb-rl");break;case 220:_=A.replace(Ot,"lr");break;default:return A}return"-webkit-"+A+"-ms-"+_+A;case 1017:if(A.indexOf("sticky",9)===-1)break;case 975:switch(V=(A=ae).length-10,_=(A.charCodeAt(V)===33?A.substring(0,V):A).substring(ae.indexOf(":",7)+1).trim(),rt=_.charCodeAt(0)+(_.charCodeAt(7)|0)){case 203:if(111>_.charCodeAt(8))break;case 115:A=A.replace(_,"-webkit-"+_)+";"+A;break;case 207:case 102:A=A.replace(_,"-webkit-"+(102<rt?"inline-":"")+"box")+";"+A.replace(_,"-webkit-"+_)+";"+A.replace(_,"-ms-"+_+"box")+";"+A}return A+";";case 938:if(A.charCodeAt(5)===45)switch(A.charCodeAt(6)){case 105:return _=A.replace("-items",""),"-webkit-"+A+"-webkit-box-"+_+"-ms-flex-"+_+A;case 115:return"-webkit-"+A+"-ms-flex-item-"+A.replace(xr,"")+A;default:return"-webkit-"+A+"-ms-flex-line-pack"+A.replace("align-content","").replace(xr,"")+A}break;case 973:case 989:if(A.charCodeAt(3)!==45||A.charCodeAt(4)===122)break;case 931:case 953:if(Pr.test(ae)===!0)return(_=ae.substring(ae.indexOf(":")+1)).charCodeAt(0)===115?I(ae.replace("stretch","fill-available"),V,te,se).replace(":fill-available",":stretch"):A.replace(_,"-webkit-"+_)+A.replace(_,"-moz-"+_.replace("fill-",""))+A;break;case 962:if(A="-webkit-"+A+(A.charCodeAt(5)===102?"-ms-"+A:"")+A,te+se===211&&A.charCodeAt(13)===105&&0<A.indexOf("transform",10))return A.substring(0,A.indexOf(";",27)+1).replace(tt,"$1-webkit-$2")+A}return A}function Z(ae,V){var te=ae.indexOf(V===1?":":"{"),se=ae.substring(0,V!==3?te:10);return te=ae.substring(te+1,ae.length-1),Ur(V!==2?se:se.replace(Er,"$1"),te,V)}function W(ae,V){var te=I(V,V.charCodeAt(0),V.charCodeAt(1),V.charCodeAt(2));return te!==V+";"?te.replace(Lr," or ($1)").substring(4):"("+V+")"}function X(ae,V,te,se,A,rt,_,Tt,lt,Ee){for(var we=0,It=V,ur;we<oe;++we)switch(ur=Xe[we].call(Ie,ae,It,te,se,A,rt,_,Tt,lt,Ee)){case void 0:case!1:case!0:case null:break;default:It=ur}if(It!==V)return It}function xe(ae){switch(ae){case void 0:case null:oe=Xe.length=0;break;default:if(typeof ae=="function")Xe[oe++]=ae;else if(typeof ae=="object")for(var V=0,te=ae.length;V<te;++V)xe(ae[V]);else on=!!ae|0}return xe}function ve(ae){return ae=ae.prefix,ae!==void 0&&(Ur=null,ae?typeof ae!="function"?cr=1:(cr=2,Ur=ae):cr=0),ve}function Ie(ae,V){var te=ae;if(33>te.charCodeAt(0)&&(te=te.trim()),Qr=te,te=[Qr],0<oe){var se=X(-1,V,te,te,ir,c,0,0,0,0);se!==void 0&&typeof se=="string"&&(V=se)}var A=b(hn,te,V,0,0);return 0<oe&&(se=X(-2,A,te,te,ir,c,A.length,0,0,0),se!==void 0&&(A=se)),Qr="",wr=0,c=ir=1,A}var _e=/^\0+/g,at=/[\0\r\f]/g,ft=/: */g,Fe=/zoo|gra/,tt=/([,: ])(transform)/g,Oe=/,\r+?/g,mt=/([\t\r\n ])*\f?&/g,Ue=/@(k\w+)\s*(\S*)\s*/,zt=/::(place)/g,xt=/:(read-only)/g,Ot=/[svh]\w+-[tblr]{2}/,Cr=/\(\s*(.*)\s*\)/g,Lr=/([\s\S]*?);/g,xr=/-self|flex-/g,Er=/[^]*?(:[rp][el]a[\w-]+)[^]*/,Pr=/stretch|:\s*\w+\-(?:conte|avail)/,ne=/([^-])(image-set\()/,c=1,ir=1,wr=0,cr=1,hn=[],Xe=[],oe=0,Ur=null,on=0,Qr="";return Ie.use=xe,Ie.set=ve,d!==void 0&&ve(d),Ie}var x=u,g=N(40351);function E(d){var b=Object.create(null);return function(f){return b[f]===void 0&&(b[f]=d(f)),b[f]}}var B=E,S=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,L=B(function(d){return S.test(d)||d.charCodeAt(0)===111&&d.charCodeAt(1)===110&&d.charCodeAt(2)<91}),U=L,Re=N(8679),Pe=N.n(Re),ze=N(34155);function R(){return(R=Object.assign||function(d){for(var b=1;b<arguments.length;b++){var f=arguments[b];for(var m in f)Object.prototype.hasOwnProperty.call(f,m)&&(d[m]=f[m])}return d}).apply(this,arguments)}var z=function(d,b){for(var f=[d[0]],m=0,I=b.length;m<I;m+=1)f.push(b[m],d[m+1]);return f},a=function(d){return d!==null&&typeof d=="object"&&(d.toString?d.toString():Object.prototype.toString.call(d))==="[object Object]"&&!(0,ut.typeOf)(d)},He=Object.freeze([]),P=Object.freeze({});function j(d){return typeof d=="function"}function me(d){return d.displayName||d.name||"Component"}function Te(d){return d&&typeof d.styledComponentId=="string"}var Dt=typeof ze!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_ATTR)||"data-styled",dt="5.3.9",Br=typeof window!="undefined"&&"HTMLElement"in window,er=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof ze!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY:{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY:!1)),bn={},Ut={};function Nr(){for(var d=arguments.length<=0?void 0:arguments[0],b=[],f=1,m=arguments.length;f<m;f+=1)b.push(f<0||arguments.length<=f?void 0:arguments[f]);return b.forEach(function(I){d=d.replace(/%[a-z]/,I)}),d}function Ge(d){for(var b=arguments.length,f=new Array(b>1?b-1:0),m=1;m<b;m++)f[m-1]=arguments[m];throw new Error("An error occurred. See https://git.io/JUIaE#"+d+" for more information."+(f.length>0?" Args: "+f.join(", "):""))}var yn=function(){function d(f){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=f}var b=d.prototype;return b.indexOfGroup=function(f){for(var m=0,I=0;I<f;I++)m+=this.groupSizes[I];return m},b.insertRules=function(f,m){if(f>=this.groupSizes.length){for(var I=this.groupSizes,Z=I.length,W=Z;f>=W;)(W<<=1)<0&&Ge(16,""+f);this.groupSizes=new Uint32Array(W),this.groupSizes.set(I),this.length=W;for(var X=Z;X<W;X++)this.groupSizes[X]=0}for(var xe=this.indexOfGroup(f+1),ve=0,Ie=m.length;ve<Ie;ve++)this.tag.insertRule(xe,m[ve])&&(this.groupSizes[f]++,xe++)},b.clearGroup=function(f){if(f<this.length){var m=this.groupSizes[f],I=this.indexOfGroup(f),Z=I+m;this.groupSizes[f]=0;for(var W=I;W<Z;W++)this.tag.deleteRule(I)}},b.getGroup=function(f){var m="";if(f>=this.length||this.groupSizes[f]===0)return m;for(var I=this.groupSizes[f],Z=this.indexOfGroup(f),W=Z+I,X=Z;X<W;X++)m+=this.tag.getRule(X)+`/*!sc*/
`;return m},d}(),pr=new Map,fe=new Map,Ve=1,yr=function(d){if(pr.has(d))return pr.get(d);for(;fe.has(Ve);)Ve++;var b=Ve++;return pr.set(d,b),fe.set(b,d),b},St=function(d){return fe.get(d)},le=function(d,b){b>=Ve&&(Ve=b+1),pr.set(d,b),fe.set(b,d)},ue="style["+Dt+'][data-styled-version="5.3.9"]',et=new RegExp("^"+Dt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),be=function(d,b,f){for(var m,I=f.split(","),Z=0,W=I.length;Z<W;Z++)(m=I[Z])&&d.registerName(b,m)},kt=function(d,b){for(var f=(b.textContent||"").split(`/*!sc*/
`),m=[],I=0,Z=f.length;I<Z;I++){var W=f[I].trim();if(W){var X=W.match(et);if(X){var xe=0|parseInt(X[1],10),ve=X[2];xe!==0&&(le(ve,xe),be(d,ve,X[3]),d.getTag().insertRules(xe,m)),m.length=0}else m.push(W)}}},Ye=function(){return N.nc},Qt=function(d){var b=document.head,f=d||b,m=document.createElement("style"),I=function(X){for(var xe=X.childNodes,ve=xe.length;ve>=0;ve--){var Ie=xe[ve];if(Ie&&Ie.nodeType===1&&Ie.hasAttribute(Dt))return Ie}}(f),Z=I!==void 0?I.nextSibling:null;m.setAttribute(Dt,"active"),m.setAttribute("data-styled-version","5.3.9");var W=Ye();return W&&m.setAttribute("nonce",W),f.insertBefore(m,Z),m},Rt=function(){function d(f){var m=this.element=Qt(f);m.appendChild(document.createTextNode("")),this.sheet=function(I){if(I.sheet)return I.sheet;for(var Z=document.styleSheets,W=0,X=Z.length;W<X;W++){var xe=Z[W];if(xe.ownerNode===I)return xe}Ge(17)}(m),this.length=0}var b=d.prototype;return b.insertRule=function(f,m){try{return this.sheet.insertRule(m,f),this.length++,!0}catch(I){return!1}},b.deleteRule=function(f){this.sheet.deleteRule(f),this.length--},b.getRule=function(f){var m=this.sheet.cssRules[f];return m!==void 0&&typeof m.cssText=="string"?m.cssText:""},d}(),hr=function(){function d(f){var m=this.element=Qt(f);this.nodes=m.childNodes,this.length=0}var b=d.prototype;return b.insertRule=function(f,m){if(f<=this.length&&f>=0){var I=document.createTextNode(m),Z=this.nodes[f];return this.element.insertBefore(I,Z||null),this.length++,!0}return!1},b.deleteRule=function(f){this.element.removeChild(this.nodes[f]),this.length--},b.getRule=function(f){return f<this.length?this.nodes[f].textContent:""},d}(),gt=function(){function d(f){this.rules=[],this.length=0}var b=d.prototype;return b.insertRule=function(f,m){return f<=this.length&&(this.rules.splice(f,0,m),this.length++,!0)},b.deleteRule=function(f){this.rules.splice(f,1),this.length--},b.getRule=function(f){return f<this.length?this.rules[f]:""},d}(),yt=Br,zr={isServer:!Br,useCSSOMInjection:!er},or=function(){function d(f,m,I){f===void 0&&(f=P),m===void 0&&(m={}),this.options=R({},zr,{},f),this.gs=m,this.names=new Map(I),this.server=!!f.isServer,!this.server&&Br&&yt&&(yt=!1,function(Z){for(var W=document.querySelectorAll(ue),X=0,xe=W.length;X<xe;X++){var ve=W[X];ve&&ve.getAttribute(Dt)!=="active"&&(kt(Z,ve),ve.parentNode&&ve.parentNode.removeChild(ve))}}(this))}d.registerId=function(f){return yr(f)};var b=d.prototype;return b.reconstructWithOptions=function(f,m){return m===void 0&&(m=!0),new d(R({},this.options,{},f),this.gs,m&&this.names||void 0)},b.allocateGSInstance=function(f){return this.gs[f]=(this.gs[f]||0)+1},b.getTag=function(){return this.tag||(this.tag=(I=(m=this.options).isServer,Z=m.useCSSOMInjection,W=m.target,f=I?new gt(W):Z?new Rt(W):new hr(W),new yn(f)));var f,m,I,Z,W},b.hasNameForId=function(f,m){return this.names.has(f)&&this.names.get(f).has(m)},b.registerName=function(f,m){if(yr(f),this.names.has(f))this.names.get(f).add(m);else{var I=new Set;I.add(m),this.names.set(f,I)}},b.insertRules=function(f,m,I){this.registerName(f,m),this.getTag().insertRules(yr(f),I)},b.clearNames=function(f){this.names.has(f)&&this.names.get(f).clear()},b.clearRules=function(f){this.getTag().clearGroup(yr(f)),this.clearNames(f)},b.clearTag=function(){this.tag=void 0},b.toString=function(){return function(f){for(var m=f.getTag(),I=m.length,Z="",W=0;W<I;W++){var X=St(W);if(X!==void 0){var xe=f.names.get(X),ve=m.getGroup(W);if(xe&&ve&&xe.size){var Ie=Dt+".g"+W+'[id="'+X+'"]',_e="";xe!==void 0&&xe.forEach(function(at){at.length>0&&(_e+=at+",")}),Z+=""+ve+Ie+'{content:"'+_e+`"}/*!sc*/
`}}}return Z}(this)},d}(),Hr=/(a)(d)/gi,qr=function(d){return String.fromCharCode(d+(d>25?39:97))};function Et(d){var b,f="";for(b=Math.abs(d);b>52;b=b/52|0)f=qr(b%52)+f;return(qr(b%52)+f).replace(Hr,"$1-$2")}var Bt=function(d,b){for(var f=b.length;f;)d=33*d^b.charCodeAt(--f);return d},Nt=function(d){return Bt(5381,d)};function cn(d){for(var b=0;b<d.length;b+=1){var f=d[b];if(j(f)&&!Te(f))return!1}return!0}var _r=Nt("5.3.9"),en=function(){function d(b,f,m){this.rules=b,this.staticRulesId="",this.isStatic=(m===void 0||m.isStatic)&&cn(b),this.componentId=f,this.baseHash=Bt(_r,f),this.baseStyle=m,or.registerId(f)}return d.prototype.generateAndInjectStyles=function(b,f,m){var I=this.componentId,Z=[];if(this.baseStyle&&Z.push(this.baseStyle.generateAndInjectStyles(b,f,m)),this.isStatic&&!m.hash)if(this.staticRulesId&&f.hasNameForId(I,this.staticRulesId))Z.push(this.staticRulesId);else{var W=Ir(this.rules,b,f,m).join(""),X=Et(Bt(this.baseHash,W)>>>0);if(!f.hasNameForId(I,X)){var xe=m(W,"."+X,void 0,I);f.insertRules(I,X,xe)}Z.push(X),this.staticRulesId=X}else{for(var ve=this.rules.length,Ie=Bt(this.baseHash,m.hash),_e="",at=0;at<ve;at++){var ft=this.rules[at];if(typeof ft=="string")_e+=ft;else if(ft){var Fe=Ir(ft,b,f,m),tt=Array.isArray(Fe)?Fe.join(""):Fe;Ie=Bt(Ie,tt+at),_e+=tt}}if(_e){var Oe=Et(Ie>>>0);if(!f.hasNameForId(I,Oe)){var mt=m(_e,"."+Oe,void 0,I);f.insertRules(I,Oe,mt)}Z.push(Oe)}}return Z.join(" ")},d}(),eo=/^\s*\/\/.*$/gm,Mn=[":","[",".","#"];function xn(d){var b,f,m,I,Z=d===void 0?P:d,W=Z.options,X=W===void 0?P:W,xe=Z.plugins,ve=xe===void 0?He:xe,Ie=new x(X),_e=[],at=function(tt){function Oe(mt){if(mt)try{tt(mt+"}")}catch(Ue){}}return function(mt,Ue,zt,xt,Ot,Cr,Lr,xr,Er,Pr){switch(mt){case 1:if(Er===0&&Ue.charCodeAt(0)===64)return tt(Ue+";"),"";break;case 2:if(xr===0)return Ue+"/*|*/";break;case 3:switch(xr){case 102:case 112:return tt(zt[0]+Ue),"";default:return Ue+(Pr===0?"/*|*/":"")}case-2:Ue.split("/*|*/}").forEach(Oe)}}}(function(tt){_e.push(tt)}),ft=function(tt,Oe,mt){return Oe===0&&Mn.indexOf(mt[f.length])!==-1||mt.match(I)?tt:"."+b};function Fe(tt,Oe,mt,Ue){Ue===void 0&&(Ue="&");var zt=tt.replace(eo,""),xt=Oe&&mt?mt+" "+Oe+" { "+zt+" }":zt;return b=Ue,f=Oe,m=new RegExp("\\"+f+"\\b","g"),I=new RegExp("(\\"+f+"\\b){2,}"),Ie(mt||!Oe?"":Oe,xt)}return Ie.use([].concat(ve,[function(tt,Oe,mt){tt===2&&mt.length&&mt[0].lastIndexOf(f)>0&&(mt[0]=mt[0].replace(m,ft))},at,function(tt){if(tt===-2){var Oe=_e;return _e=[],Oe}}])),Fe.hash=ve.length?ve.reduce(function(tt,Oe){return Oe.name||Ge(15),Bt(tt,Oe.name)},5381).toString():"",Fe}var wn=v.createContext(),So=wn.Consumer,kr=v.createContext(),un=(kr.Consumer,new or),dn=xn();function An(){return(0,v.useContext)(wn)||un}function Dn(){return(0,v.useContext)(kr)||dn}function to(d){var b=(0,v.useState)(d.stylisPlugins),f=b[0],m=b[1],I=An(),Z=(0,v.useMemo)(function(){var X=I;return d.sheet?X=d.sheet:d.target&&(X=X.reconstructWithOptions({target:d.target},!1)),d.disableCSSOMInjection&&(X=X.reconstructWithOptions({useCSSOMInjection:!1})),X},[d.disableCSSOMInjection,d.sheet,d.target]),W=(0,v.useMemo)(function(){return xn({options:{prefix:!d.disableVendorPrefixes},plugins:f})},[d.disableVendorPrefixes,f]);return(0,v.useEffect)(function(){qt()(f,d.stylisPlugins)||m(d.stylisPlugins)},[d.stylisPlugins]),v.createElement(wn.Provider,{value:Z},v.createElement(kr.Provider,{value:W},d.children))}var tn=function(){function d(b,f){var m=this;this.inject=function(I,Z){Z===void 0&&(Z=dn);var W=m.name+Z.hash;I.hasNameForId(m.id,W)||I.insertRules(m.id,W,Z(m.rules,W,"@keyframes"))},this.toString=function(){return Ge(12,String(m.name))},this.name=b,this.id="sc-keyframes-"+b,this.rules=f}return d.prototype.getName=function(b){return b===void 0&&(b=dn),this.name+b.hash},d}(),J=/([A-Z])/,T=/([A-Z])/g,q=/^ms-/,H=function(d){return"-"+d.toLowerCase()};function Sn(d){return J.test(d)?d.replace(T,H).replace(q,"-ms-"):d}var kn=function(d){return d==null||d===!1||d===""};function Ir(d,b,f,m){if(Array.isArray(d)){for(var I,Z=[],W=0,X=d.length;W<X;W+=1)(I=Ir(d[W],b,f,m))!==""&&(Array.isArray(I)?Z.push.apply(Z,I):Z.push(I));return Z}if(kn(d))return"";if(Te(d))return"."+d.styledComponentId;if(j(d)){if(typeof(ve=d)!="function"||ve.prototype&&ve.prototype.isReactComponent||!b)return d;var xe=d(b);return Ir(xe,b,f,m)}var ve;return d instanceof tn?f?(d.inject(f,m),d.getName(m)):d:a(d)?function Ie(_e,at){var ft,Fe,tt=[];for(var Oe in _e)_e.hasOwnProperty(Oe)&&!kn(_e[Oe])&&(Array.isArray(_e[Oe])&&_e[Oe].isCss||j(_e[Oe])?tt.push(Sn(Oe)+":",_e[Oe],";"):a(_e[Oe])?tt.push.apply(tt,Ie(_e[Oe],Oe)):tt.push(Sn(Oe)+": "+(ft=Oe,(Fe=_e[Oe])==null||typeof Fe=="boolean"||Fe===""?"":typeof Fe!="number"||Fe===0||ft in g.Z?String(Fe).trim():Fe+"px")+";"));return at?[at+" {"].concat(tt,["}"]):tt}(d):d.toString()}var En=function(d){return Array.isArray(d)&&(d.isCss=!0),d};function $n(d){for(var b=arguments.length,f=new Array(b>1?b-1:0),m=1;m<b;m++)f[m-1]=arguments[m];return j(d)||a(d)?En(Ir(z(He,[d].concat(f)))):f.length===0&&d.length===1&&typeof d[0]=="string"?d:En(Ir(z(d,f)))}var sr=/invalid hook call/i,$r=new Set,ro=function(d,b){if(!1)var f,m,I},fn=function(d,b,f){return f===void 0&&(f=P),d.theme!==f.theme&&d.theme||b||f.theme},Vn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_n=/(^-|-$)/g;function Bn(d){return d.replace(Vn,"-").replace(_n,"")}var Nn=function(d){return Et(Nt(d)>>>0)};function Cn(d){return typeof d=="string"&&!0}var Pn=function(d){return typeof d=="function"||typeof d=="object"&&d!==null&&!Array.isArray(d)},no=function(d){return d!=="__proto__"&&d!=="constructor"&&d!=="prototype"};function oo(d,b,f){var m=d[f];Pn(b)&&Pn(m)?Un(m,b):d[f]=b}function Un(d){for(var b=arguments.length,f=new Array(b>1?b-1:0),m=1;m<b;m++)f[m-1]=arguments[m];for(var I=0,Z=f;I<Z.length;I++){var W=Z[I];if(Pn(W))for(var X in W)no(X)&&oo(d,W[X],X)}return d}var jr=v.createContext(),Qn=jr.Consumer;function io(d){var b=(0,v.useContext)(jr),f=(0,v.useMemo)(function(){return function(m,I){if(!m)return Ge(14);if(j(m)){var Z=m(I);return Z}return Array.isArray(m)||typeof m!="object"?Ge(8):I?R({},I,{},m):m}(d.theme,b)},[d.theme,b]);return d.children?v.createElement(jr.Provider,{value:f},d.children):null}var Gn={};function ao(d,b,f){var m=Te(d),I=!Cn(d),Z=b.attrs,W=Z===void 0?He:Z,X=b.componentId,xe=X===void 0?function(Ue,zt){var xt=typeof Ue!="string"?"sc":Bn(Ue);Gn[xt]=(Gn[xt]||0)+1;var Ot=xt+"-"+Nn("5.3.9"+xt+Gn[xt]);return zt?zt+"-"+Ot:Ot}(b.displayName,b.parentComponentId):X,ve=b.displayName,Ie=ve===void 0?function(Ue){return Cn(Ue)?"styled."+Ue:"Styled("+me(Ue)+")"}(d):ve,_e=b.displayName&&b.componentId?Bn(b.displayName)+"-"+b.componentId:b.componentId||xe,at=m&&d.attrs?Array.prototype.concat(d.attrs,W).filter(Boolean):W,ft=b.shouldForwardProp;m&&d.shouldForwardProp&&(ft=b.shouldForwardProp?function(Ue,zt,xt){return d.shouldForwardProp(Ue,zt,xt)&&b.shouldForwardProp(Ue,zt,xt)}:d.shouldForwardProp);var Fe,tt=new en(f,_e,m?d.componentStyle:void 0),Oe=tt.isStatic&&W.length===0,mt=function(Ue,zt){return function(xt,Ot,Cr,Lr){var xr=xt.attrs,Er=xt.componentStyle,Pr=xt.defaultProps,ne=xt.foldedComponentIds,c=xt.shouldForwardProp,ir=xt.styledComponentId,wr=xt.target,cr=function(se,A,rt){se===void 0&&(se=P);var _=R({},A,{theme:se}),Tt={};return rt.forEach(function(lt){var Ee,we,It,ur=lt;for(Ee in j(ur)&&(ur=ur(_)),ur)_[Ee]=Tt[Ee]=Ee==="className"?(we=Tt[Ee],It=ur[Ee],we&&It?we+" "+It:we||It):ur[Ee]}),[_,Tt]}(fn(Ot,(0,v.useContext)(jr),Pr)||P,Ot,xr),hn=cr[0],Xe=cr[1],oe=function(se,A,rt,_){var Tt=An(),lt=Dn(),Ee=A?se.generateAndInjectStyles(P,Tt,lt):se.generateAndInjectStyles(rt,Tt,lt);return Ee}(Er,Lr,hn,void 0),Ur=Cr,on=Xe.$as||Ot.$as||Xe.as||Ot.as||wr,Qr=Cn(on),ae=Xe!==Ot?R({},Ot,{},Xe):Ot,V={};for(var te in ae)te[0]!=="$"&&te!=="as"&&(te==="forwardedAs"?V.as=ae[te]:(c?c(te,U,on):!Qr||U(te))&&(V[te]=ae[te]));return Ot.style&&Xe.style!==Ot.style&&(V.style=R({},Ot.style,{},Xe.style)),V.className=Array.prototype.concat(ne,ir,oe!==ir?oe:null,Ot.className,Xe.className).filter(Boolean).join(" "),V.ref=Ur,(0,v.createElement)(on,V)}(Fe,Ue,zt,Oe)};return mt.displayName=Ie,(Fe=v.forwardRef(mt)).attrs=at,Fe.componentStyle=tt,Fe.displayName=Ie,Fe.shouldForwardProp=ft,Fe.foldedComponentIds=m?Array.prototype.concat(d.foldedComponentIds,d.styledComponentId):He,Fe.styledComponentId=_e,Fe.target=m?d.target:d,Fe.withComponent=function(Ue){var zt=b.componentId,xt=function(Cr,Lr){if(Cr==null)return{};var xr,Er,Pr={},ne=Object.keys(Cr);for(Er=0;Er<ne.length;Er++)xr=ne[Er],Lr.indexOf(xr)>=0||(Pr[xr]=Cr[xr]);return Pr}(b,["componentId"]),Ot=zt&&zt+"-"+(Cn(Ue)?Ue:Bn(me(Ue)));return ao(Ue,R({},xt,{attrs:at,componentId:Ot}),f)},Object.defineProperty(Fe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Ue){this._foldedDefaultProps=m?Un({},d.defaultProps,Ue):Ue}}),Object.defineProperty(Fe,"toString",{value:function(){return"."+Fe.styledComponentId}}),I&&Pe()(Fe,d,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),Fe}var zn=function(d){return function b(f,m,I){if(I===void 0&&(I=P),!(0,ut.isValidElementType)(m))return Ge(1,String(m));var Z=function(){return f(m,I,$n.apply(void 0,arguments))};return Z.withConfig=function(W){return b(f,m,R({},I,{},W))},Z.attrs=function(W){return b(f,m,R({},I,{attrs:Array.prototype.concat(I.attrs,W).filter(Boolean)}))},Z}(ao,d)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(d){zn[d]=zn(d)});var rn=function(){function d(f,m){this.rules=f,this.componentId=m,this.isStatic=cn(f),or.registerId(this.componentId+1)}var b=d.prototype;return b.createStyles=function(f,m,I,Z){var W=Z(Ir(this.rules,m,I,Z).join(""),""),X=this.componentId+f;I.insertRules(X,X,W)},b.removeStyles=function(f,m){m.clearRules(this.componentId+f)},b.renderStyles=function(f,m,I,Z){f>2&&or.registerId(this.componentId+f),this.removeStyles(f,I),this.createStyles(f,m,I,Z)},d}();function Hn(d){for(var b=arguments.length,f=new Array(b>1?b-1:0),m=1;m<b;m++)f[m-1]=arguments[m];var I=$n.apply(void 0,[d].concat(f)),Z="sc-global-"+Nn(JSON.stringify(I)),W=new rn(I,Z);function X(ve){var Ie=An(),_e=Dn(),at=(0,v.useContext)(jr),ft=(0,v.useRef)(Ie.allocateGSInstance(Z)).current;return Ie.server&&xe(ft,ve,Ie,at,_e),(0,v.useLayoutEffect)(function(){if(!Ie.server)return xe(ft,ve,Ie,at,_e),function(){return W.removeStyles(ft,Ie)}},[ft,ve,Ie,at,_e]),null}function xe(ve,Ie,_e,at,ft){if(W.isStatic)W.renderStyles(ve,bn,_e,ft);else{var Fe=R({},Ie,{theme:fn(Ie,at,X.defaultProps)});W.renderStyles(ve,Fe,_e,ft)}}return v.memo(X)}function Yn(d){for(var b=arguments.length,f=new Array(b>1?b-1:0),m=1;m<b;m++)f[m-1]=arguments[m];var I=$n.apply(void 0,[d].concat(f)).join(""),Z=Nn(I);return new tn(Z,I)}var lo=function(){function d(){var f=this;this._emitSheetCSS=function(){var m=f.instance.toString();if(!m)return"";var I=Ye();return"<style "+[I&&'nonce="'+I+'"',Dt+'="true"','data-styled-version="5.3.9"'].filter(Boolean).join(" ")+">"+m+"</style>"},this.getStyleTags=function(){return f.sealed?Ge(2):f._emitSheetCSS()},this.getStyleElement=function(){var m;if(f.sealed)return Ge(2);var I=((m={})[Dt]="",m["data-styled-version"]="5.3.9",m.dangerouslySetInnerHTML={__html:f.instance.toString()},m),Z=Ye();return Z&&(I.nonce=Z),[v.createElement("style",R({},I,{key:"sc-0-0"}))]},this.seal=function(){f.sealed=!0},this.instance=new or({isServer:!0}),this.sealed=!1}var b=d.prototype;return b.collectStyles=function(f){return this.sealed?Ge(2):v.createElement(to,{sheet:this.instance},f)},b.interleaveWithNodeStream=function(f){return Ge(3)},d}(),pn=function(d){var b=r.forwardRef(function(f,m){var I=s(jr),Z=d.defaultProps,W=fn(f,I,Z);return r.createElement(d,R({},f,{theme:W,ref:m}))});return y(b,d),b.displayName="WithTheme("+me(d)+")",b},Pt=function(){return s(jr)},Xn={StyleSheet:or,masterSheet:un},nn=zn},62085:function(Ne,re,N){"use strict";Ne.exports=N.p+"static/ms_sans_serif.4095bf42.woff2"},77430:function(Ne,re,N){"use strict";Ne.exports=N.p+"static/ms_sans_serif_bold.1d0aba83.woff2"},59400:function(Ne){function re(N,ut){return ut||(ut=N.slice(0)),Object.freeze(Object.defineProperties(N,{raw:{value:Object.freeze(ut)}}))}Ne.exports=re,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports},60299:function(Ne,re,N){"use strict";N.d(re,{xG:function(){return me},zx:function(){return fe},qy:function(){return le},MF:function(){return St},Z0:function(){return Et},o8:function(){return pn},mw:function(){return ut}});var ut=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,v=N(94589),vt=N(48764).lW;const qt="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",u="inset 2px 2px 3px rgba(0,0,0,0.2)",x=()=>v.iv`
  -webkit-text-fill-color: ${({theme:t})=>t.materialTextDisabled};
  color: ${({theme:t})=>t.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:t})=>t.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,g=({background:t="material",color:i="materialText"}={})=>v.iv`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:h})=>h[t]};
  color: ${({theme:h})=>h[i]};
`,E=({mainColor:t="black",secondaryColor:i="transparent",pixelSize:h=2})=>v.iv`
  background-image: ${[`linear-gradient(
      45deg,
      ${t} 25%,
      transparent 25%,
      transparent 75%,
      ${t} 75%
    )`,`linear-gradient(
      45deg,
      ${t} 25%,
      transparent 25%,
      transparent 75%,
      ${t} 75%
    )`].join(",")};
  background-color: ${i};
  background-size: ${`${h*2}px ${h*2}px`};
  background-position: 0 0, ${`${h}px ${h}px`};
`,B=()=>v.iv`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:t})=>t.materialText};
  background: ${({$disabled:t,theme:i})=>t?i.flatLight:i.canvas};
  border: 2px solid ${({theme:t})=>t.canvas};
  outline: 2px solid ${({theme:t})=>t.flatDark};
  outline-offset: -4px;
`,S={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},L=({theme:t,topLeftInner:i,bottomRightInner:h,hasShadow:w=!1,hasInsetShadow:$=!1})=>[w?qt:!1,$?u:!1,i!==null?`inset 1px 1px 0px 1px ${t[i]}`:!1,h!==null?`inset -1px -1px 0 1px ${t[h]}`:!1].filter(Boolean).join(", "),U=({invert:t=!1,style:i="button"}={})=>{const h={topLeftOuter:t?"bottomRightOuter":"topLeftOuter",topLeftInner:t?"bottomRightInner":"topLeftInner",bottomRightInner:t?"topLeftInner":"bottomRightInner",bottomRightOuter:t?"topLeftOuter":"bottomRightOuter"};return v.iv`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:w})=>w[S[i][h.topLeftOuter]]};
    border-top-color: ${({theme:w})=>w[S[i][h.topLeftOuter]]};
    border-right-color: ${({theme:w})=>w[S[i][h.bottomRightOuter]]};
    border-bottom-color: ${({theme:w})=>w[S[i][h.bottomRightOuter]]};
    box-shadow: ${({theme:w,shadow:$})=>L({theme:w,topLeftInner:S[i][h.topLeftInner],bottomRightInner:S[i][h.bottomRightInner],hasShadow:$})};
  `},Re=()=>v.iv`
  outline: 2px dotted ${({theme:t})=>t.materialText};
`,ze=typeof btoa!="undefined"?btoa:t=>vt.from(t).toString("base64"),R=(t,i=0)=>{const h=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${i} 13 13)">
      <polygon fill="${t}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${ze(h)})`},z=(t="default")=>v.iv`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:i})=>E({mainColor:t==="flat"?i.flatLight:i.material,secondaryColor:t==="flat"?i.canvas:i.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${g()}
    ${t==="flat"?B():U({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:i})=>i.material};
  }
  ::-webkit-scrollbar-button {
    ${g()}
    ${t==="flat"?B():U({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${t==="default"?U({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:i})=>R(i.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:i})=>R(i.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:i})=>R(i.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:i})=>R(i.materialText,0)};
  }
`;var a=N(62435);const He=v.ZP.a`
  color: ${({theme:t})=>t.anchor};
  font-size: inherit;
  text-decoration: ${({underline:t})=>t?"underline":"none"};
  &:visited {
    color: ${({theme:t})=>t.anchorVisited};
  }
`,P=(0,a.forwardRef)(($,w)=>{var M=$,{children:t,underline:i=!0}=M,h=nt(M,["children","underline"]);return a.createElement(He,ke({ref:w,underline:i},h),t)});P.displayName="Anchor";const j=v.ZP.header`
  ${U()};
  ${g()};

  position: ${t=>{var i;return(i=t.position)!==null&&i!==void 0?i:t.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,me=(0,a.forwardRef)((M,$)=>{var O=M,{children:t,fixed:i=!0,position:h="fixed"}=O,w=nt(O,["children","fixed","position"]);return a.createElement(j,ke({fixed:i,position:i!==!1?h:void 0,ref:$},w),t)});me.displayName="AppBar";const Te=()=>{};function Dt(t,i,h){return h!==null&&t>h?h:i!==null&&t<i?i:t}function dt(t){if(Math.abs(t)<1){const h=t.toExponential().split("e-"),w=h[0].split(".")[1];return(w?w.length:0)+parseInt(h[1],10)}const i=t.toString().split(".")[1];return i?i.length:0}function Br(t,i,h){const w=Math.round((t-h)/i)*i+h;return Number(w.toFixed(dt(i)))}function er(t){return typeof t=="number"?`${t}px`:t}const bn=v.ZP.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:t})=>`
    height: ${t};
    width: ${t};
    `}
  border-radius: ${({square:t})=>t?0:"50%"};
  overflow: hidden;
  ${({noBorder:t,theme:i})=>!t&&`
    border-top: 2px solid ${i.borderDark};
    border-left: 2px solid ${i.borderDark};
    border-bottom: 2px solid ${i.borderLightest};
    border-right: 2px solid ${i.borderLightest};
    background: ${i.material};
  `}
  ${({src:t})=>!t&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Ut=v.ZP.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Nr=(0,a.forwardRef)((K,F)=>{var Q=K,{alt:t="",children:i,noBorder:h=!1,size:w=35,square:$=!1,src:M}=Q,O=nt(Q,["alt","children","noBorder","size","square","src"]);return a.createElement(bn,ke({noBorder:h,ref:F,size:er(w),square:$,src:M},O),M?a.createElement(Ut,{src:M,alt:t}):i)});Nr.displayName="Avatar";const Ge={sm:"28px",md:"36px",lg:"44px"},yn=v.iv`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:t="md"})=>Ge[t]};
  width: ${({fullWidth:t,size:i="md",square:h})=>t?"100%":h?Ge[i]:"auto"};
  padding: ${({square:t})=>t?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:t})=>!t&&"2px"};
  }
  padding-top: ${({active:t,disabled:i})=>t&&!i&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,pr=v.ZP.button`
  ${({active:t,disabled:i,primary:h,theme:w,variant:$})=>$==="flat"?v.iv`
          ${B()}
          ${h?`
          border: 2px solid ${w.checkmark};
            outline: 2px solid ${w.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${w.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!t&&!i&&Re}
            outline-offset: -4px;
          }
        `:$==="menu"||$==="thin"?v.iv`
          ${g()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!i&&!t&&U({style:"buttonThin"})}
          }
          &:active {
            ${!i&&U({style:"buttonThinPressed"})}
          }
          ${t&&U({style:"buttonThinPressed"})}
          ${i&&x()}
        `:v.iv`
          ${g()};
          border: none;
          ${i&&x()}
          ${t?E({mainColor:w.material,secondaryColor:w.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${h?v.iv`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${w.borderDarkest};
                `:v.iv`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${U(t?{style:$==="raised"?"window":"button",invert:!0}:{style:$==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!i&&U({style:$==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!t&&!i&&Re}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${t?"0":"1px"};
          }
        `}
  ${yn}
`,fe=(0,a.forwardRef)((pe,De)=>{var $e=pe,{onClick:t,disabled:i=!1,children:h,type:w="button",fullWidth:$=!1,size:M="md",square:O=!1,active:F=!1,onTouchStart:K=Te,primary:Q=!1,variant:ee="default"}=$e,G=nt($e,["onClick","disabled","children","type","fullWidth","size","square","active","onTouchStart","primary","variant"]);return a.createElement(pr,ke({active:F,disabled:i,$disabled:i,fullWidth:$,onClick:i?void 0:t,onTouchStart:K,primary:Q,ref:De,size:M,square:O,type:w,variant:ee},G),h)});fe.displayName="Button";function Ve({defaultValue:t,onChange:i,onChangePropName:h="onChange",readOnly:w,value:$,valuePropName:M="value"}){const O=$!==void 0,[F,K]=(0,a.useState)(t),Q=(0,a.useCallback)(ee=>{O||K(ee)},[O]);if(O&&typeof i!="function"&&!w){const ee=`Warning: You provided a \`${M}\` prop to a component without an \`${h}\` handler.${M==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${h}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${h}\` function that updates \`${M}\`.`}`;console.warn(ee)}return[O?$:F,Q]}const yr=v.ZP.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${t=>Ge[t.size]};
  width: ${t=>t.square?Ge[t.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${t=>t.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${t=>Ge[t.size]};
  color: ${({theme:t})=>t.materialText};
  pointer-events: ${({$disabled:t})=>t?"none":"auto"};
  font-weight: ${({primary:t})=>t?"bold":"normal"};
  &:hover {
    ${({theme:t,$disabled:i})=>!i&&`
        color: ${t.materialTextInvert};
        background: ${t.hoverBackground};
      `}

    cursor: default;
  }
  ${t=>t.$disabled&&x()}
`,St=(0,a.forwardRef)((K,F)=>{var Q=K,{size:t="lg",disabled:i,square:h,children:w,onClick:$,primary:M}=Q,O=nt(Q,["size","disabled","square","children","onClick","primary"]);return a.createElement(yr,ke({$disabled:i,size:t,square:h,onClick:i?void 0:$,primary:M,role:"menuitem",ref:F,"aria-disabled":i},O),w)});St.displayName="MenuListItem";const le=v.ZP.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${t=>t.fullWidth?"100%":"auto"};
  padding: 4px;
  ${U({style:"window"})}
  ${g()}
  ${t=>t.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;le.displayName="MenuList";const ue=20,et=v.ZP.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${ue}px;
  height: ${ue}px;
  opacity: 0;
  z-index: -1;
`,be=v.ZP.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:t})=>t?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:t})=>t.materialText};
  ${t=>t.$disabled&&x()}

  ${yr} & {
    margin: 0;
    height: 100%;
  }
  ${yr}:hover & {
    ${({$disabled:t,theme:i})=>!t&&v.iv`
        color: ${i.materialTextInvert};
      `};
  }
`,kt=v.ZP.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${et}:focus ~ & {
    ${Re}
  }
  ${et}:not(:disabled) ~ &:active {
    ${Re}
  }
`,Ye=v.ZP.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:t})=>t.borderDark};
  border-top-color: ${({theme:t})=>t.borderDark};
  border-right-color: ${({theme:t})=>t.borderLightest};
  border-bottom-color: ${({theme:t})=>t.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:t})=>t.borderDarkest};
    border-top-color: ${({theme:t})=>t.borderDarkest};
    border-right-color: ${({theme:t})=>t.borderLight};
    border-bottom-color: ${({theme:t})=>t.borderLight};

    pointer-events: none;
    ${t=>t.shadow&&`box-shadow:${u};`}
  }
`,Qt=v.ZP.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${z()}
`,Rt=(0,a.forwardRef)(($,w)=>{var M=$,{children:t,shadow:i=!0}=M,h=nt(M,["children","shadow"]);return a.createElement(Ye,ke({ref:w,shadow:i},h),a.createElement(Qt,null,t))});Rt.displayName="ScrollView";const hr=v.iv`
  width: ${ue}px;
  height: ${ue}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,gt=(0,v.ZP)(Ye)`
  ${hr}
  width: ${ue}px;
  height: ${ue}px;
  background: ${({$disabled:t,theme:i})=>t?i.material:i.canvas};
  &:before {
    box-shadow: none;
  }
`,yt=v.ZP.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:t,theme:i})=>t?i.flatLight:i.canvas};
  ${hr}
  width: ${ue-4}px;
  height: ${ue-4}px;
  outline: none;
  border: 2px solid ${({theme:t})=>t.flatDark};
  background: ${({$disabled:t,theme:i})=>t?i.flatLight:i.canvas};
`,zr=v.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:t,theme:i})=>t?i.checkmarkDisabled:i.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${t=>t.$disabled?t.theme.checkmarkDisabled:t.theme.checkmark};
  }
`,or=v.ZP.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:t,theme:i})=>E({mainColor:t?i.checkmarkDisabled:i.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Hr={flat:yt,default:gt},qr=(0,a.forwardRef)((De,G)=>{var pe=De,{checked:t,className:i="",defaultChecked:h=!1,disabled:w=!1,indeterminate:$=!1,label:M="",onChange:O=Te,style:F={},value:K,variant:Q="default"}=pe,ee=nt(pe,["checked","className","defaultChecked","disabled","indeterminate","label","onChange","style","value","variant"]);var $e;const[ot,ce]=Ve({defaultValue:h,onChange:O,readOnly:($e=ee.readOnly)!==null&&$e!==void 0?$e:w,value:t}),Le=(0,a.useCallback)(Ce=>{const Me=Ce.target.checked;ce(Me),O(Ce)},[O,ce]),Ze=Hr[Q];let he=null;return $?he=or:ot&&(he=zr),a.createElement(be,{$disabled:w,className:i,style:F},a.createElement(et,ke({disabled:w,onChange:w?void 0:Le,readOnly:w,type:"checkbox",value:K,checked:ot,"data-indeterminate":$,ref:G},ee)),a.createElement(Ze,{$disabled:w,role:"presentation"},he&&a.createElement(he,{$disabled:w,variant:Q})),M&&a.createElement(kt,null,M))});qr.displayName="Checkbox";const Et=v.ZP.div`
  ${({orientation:t,theme:i,size:h="100%"})=>t==="vertical"?`
    height: ${er(h)};
    border-left: 2px solid ${i.borderDark};
    border-right: 2px solid ${i.borderLightest};
    margin: 0;
    `:`
    width: ${er(h)};
    border-bottom: 2px solid ${i.borderLightest};
    border-top: 2px solid ${i.borderDark};
    margin: 0;
    `}
`;Et.displayName="Separator";const Bt=(0,v.ZP)(pr)`
  padding-left: 8px;
`,Nt=(0,v.ZP)(Et)`
  height: 21px;
  position: relative;
  top: 0;
`,cn=v.ZP.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,_r=v.ZP.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:t})=>t};

  ${({$disabled:t})=>t?v.iv`
          border: 2px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:v.iv`
          border: 2px solid ${({theme:i})=>i.materialText};
        `}
  ${cn}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Re}
    outline-offset: -8px;
  }
`,en=v.ZP.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:t})=>t?v.iv`
          border-top: 6px solid ${({theme:i})=>i.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:i})=>i.materialTextDisabledShadow}
          );
        `:v.iv`
          border-top: 6px solid ${({theme:i})=>i.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:t})=>t==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,eo=(0,a.forwardRef)((F,O)=>{var K=F,{value:t,defaultValue:i,onChange:h=Te,disabled:w=!1,variant:$="default"}=K,M=nt(K,["value","defaultValue","onChange","disabled","variant"]);var Q;const[ee,G]=Ve({defaultValue:i,onChange:h,readOnly:(Q=M.readOnly)!==null&&Q!==void 0?Q:w,value:t}),De=pe=>{const $e=pe.target.value;G($e),h(pe)};return a.createElement(Bt,{disabled:w,as:"div",variant:$,size:"md"},a.createElement(cn,ke({onChange:De,readOnly:w,disabled:w,value:ee!=null?ee:"#008080",type:"color",ref:O},M)),a.createElement(_r,{$disabled:w,color:ee!=null?ee:"#008080",role:"presentation"}),$==="default"&&a.createElement(Nt,{orientation:"vertical"}),a.createElement(en,{$disabled:w,variant:$}))});eo.displayName="ColorInput";const Mn=v.ZP.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:t})=>v.iv`
    width: ${11*t}px;
    height: ${21*t}px;
    margin: ${t}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${E({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:t})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${t}px;
      border-left: ${t}px solid var(--react95-digit-bg-color);
      border-right: ${t}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${t}px;
      border-left: ${t}px solid var(--react95-digit-primary-color);
      border-right: ${t}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${t}px;
      width: ${9*t}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${t}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${t*2}px);
      top: ${2*t}px;
      left: ${t}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${t}px;
      border-left: ${t}px solid var(--react95-digit-bg-color);
      border-right: ${t}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${t}px solid var(--react95-digit-primary-color);
      border-right: ${t}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${t}px;
      width: ${9*t}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${t}px;
    }
    span.center:after {
      bottom: ${t}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${t}px;
      border-top: ${t}px solid var(--react95-digit-bg-color);
      border-bottom: ${t}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*t}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${t}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${t*2}px);
      top: ${t}px;
      left: ${t*2}px;
    }
  `}
`,xn=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],wn=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function So(w){var $=w,{digit:t=0,pixelSize:i=2}=$,h=nt($,["digit","pixelSize"]);const M=wn[Number(t)].map((O,F)=>O?`${xn[F]} active`:xn[F]);return a.createElement(Mn,ke({pixelSize:i},h),M.map((O,F)=>a.createElement("span",{className:O,key:F})))}const kr=v.ZP.div`
  ${U({style:"status"})}
  display: inline-flex;
  background: #000000;
`,un={sm:1,md:2,lg:3,xl:4},dn=(0,a.forwardRef)((M,$)=>{var O=M,{value:t=0,minLength:i=3,size:h="md"}=O,w=nt(O,["value","minLength","size"]);const F=(0,a.useMemo)(()=>t.toString().padStart(i,"0").split(""),[i,t]);return a.createElement(kr,ke({ref:$},w),F.map((K,Q)=>a.createElement(So,{digit:K,pixelSize:un[h],key:Q})))});dn.displayName="Counter";const An=v.iv`
  display: flex;
  align-items: center;
  width: ${({fullWidth:t})=>t?"100%":"auto"};
  min-height: ${Ge.md};
`,Dn=(0,v.ZP)(Ye).attrs({"data-testid":"variant-default"})`
  ${An}
  background: ${({$disabled:t,theme:i})=>t?i.material:i.canvas};
`,to=v.ZP.div.attrs({"data-testid":"variant-flat"})`
  ${B()}
  ${An}
  position: relative;
`,tn=v.iv`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:t})=>t.canvasText};
  ${({disabled:t,variant:i})=>i!=="flat"&&t&&x()}
`,J=v.ZP.input`
  ${tn}
  padding: 0 8px;
`,T=v.ZP.textarea`
  ${tn}
  padding: 8px;
  resize: none;
  ${({variant:t})=>z(t)}
`,q=(0,a.forwardRef)((Q,K)=>{var ee=Q,{className:t,disabled:i=!1,fullWidth:h,onChange:w=Te,shadow:$=!0,style:M,variant:O="default"}=ee,F=nt(ee,["className","disabled","fullWidth","onChange","shadow","style","variant"]);const G=O==="flat"?to:Dn,De=(0,a.useMemo)(()=>{var pe;return F.multiline?a.createElement(T,ke({disabled:i,onChange:i?void 0:w,readOnly:i,ref:K,variant:O},F)):a.createElement(J,ke({disabled:i,onChange:i?void 0:w,readOnly:i,ref:K,type:(pe=F.type)!==null&&pe!==void 0?pe:"text",variant:O},F))},[i,w,F,K,O]);return a.createElement(G,{className:t,fullWidth:h,$disabled:i,shadow:$,style:M},De)});q.displayName="TextInput";const H=v.ZP.div`
  display: inline-flex;
  align-items: center;
`,Sn=(0,v.ZP)(fe)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:t})=>t==="flat"?v.iv`
          height: calc(50% - 1px);
        `:v.iv`
          height: 50%;
        `}
`,kn=v.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:t})=>t==="flat"?v.iv`
          height: calc(${Ge.md} - 4px);
        `:v.iv`
          height: ${Ge.md};
          margin-left: 2px;
        `}
`,Ir=v.ZP.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:t})=>t?v.iv`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:i})=>i.materialText};
        `:v.iv`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:i})=>i.materialText};
        `}
  ${Sn}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
    );
    ${({invert:t})=>t?v.iv`
            border-bottom-color: ${({theme:i})=>i.materialTextDisabled};
          `:v.iv`
            border-top-color: ${({theme:i})=>i.materialTextDisabled};
          `}
  }
`,En=(0,a.forwardRef)(($e,pe)=>{var ot=$e,{className:t,defaultValue:i,disabled:h=!1,max:w,min:$,onChange:M,readOnly:O,step:F=1,style:K,value:Q,variant:ee="default",width:G}=ot,De=nt(ot,["className","defaultValue","disabled","max","min","onChange","readOnly","step","style","value","variant","width"]);const[ce,Le]=Ve({defaultValue:i,onChange:M,readOnly:O,value:Q}),Ze=(0,a.useCallback)(vr=>{const lr=parseFloat(vr.target.value);Le(lr)},[Le]),he=(0,a.useCallback)(vr=>{const lr=Dt(parseFloat(((ce!=null?ce:0)+vr).toFixed(2)),$!=null?$:null,w!=null?w:null);Le(lr),M==null||M(lr)},[w,$,M,Le,ce]),Ce=(0,a.useCallback)(()=>{ce!==void 0&&(M==null||M(ce))},[M,ce]),Me=(0,a.useCallback)(()=>{he(F)},[he,F]),We=(0,a.useCallback)(()=>{he(-F)},[he,F]),Vt=ee==="flat"?"flat":"raised";return a.createElement(H,ke({className:t,style:sn(ke({},K),{width:G!==void 0?er(G):"auto"})},De),a.createElement(q,{value:ce,variant:ee,onChange:Ze,disabled:h,type:"number",readOnly:O,ref:pe,fullWidth:!0,onBlur:Ce}),a.createElement(kn,{variant:ee},a.createElement(Sn,{"data-testid":"increment",variant:Vt,disabled:h||O,onClick:Me},a.createElement(Ir,{invert:!0})),a.createElement(Sn,{"data-testid":"decrement",variant:Vt,disabled:h||O,onClick:We},a.createElement(Ir,null))))});En.displayName="NumberInput";function $n(){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let h=0;h<10;h+=1)i+=t[Math.floor(Math.random()*t.length)];return i}const sr=t=>(0,a.useMemo)(()=>t!=null?t:$n(),[t]),$r=v.iv`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,ro=v.iv`
  background: ${({theme:t})=>t.hoverBackground};
  color: ${({theme:t})=>t.canvasTextInvert};
`,fn=v.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Vn=v.ZP.div`
  ${$r}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${fn}:focus & {
    ${ro}
    border: 2px dotted ${({theme:t})=>t.focusSecondary};
  }
`,_n=v.iv`
  height: ${Ge.md};
  display: inline-block;
  color: ${({$disabled:t=!1,theme:i})=>t?x():i.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
`,Bn=(0,v.ZP)(Ye)`
  ${_n}
  background: ${({$disabled:t=!1,theme:i})=>t?i.material:i.canvas};
  &:focus {
    outline: 0;
  }
`,Nn=v.ZP.div`
  ${B()}
  ${_n}
  background: ${({$disabled:t=!1,theme:i})=>t?i.flatLight:i.canvas};
`,Cn=v.ZP.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${$r}
  cursor: pointer;
  &:disabled {
    ${x()};
    background: ${({theme:t})=>t.material};
    cursor: default;
  }
`,Pn=(0,v.ZP)(pr).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:t="default"})=>t==="flat"?v.iv`
          height: 100%;
          margin-right: 0;
        `:v.iv`
          height: 100%;
        `}
  ${({native:t=!1,variant:i="default"})=>t&&(i==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:t=!1,native:i=!1})=>t||i?"none":"auto"}
`,no=v.ZP.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:t=!1,theme:i})=>t?i.materialTextDisabled:i.materialText};
  ${({$disabled:t=!1,theme:i})=>t&&`
    filter: drop-shadow(1px 1px 0px ${i.materialTextDisabledShadow});
    border-top-color: ${i.materialTextDisabled};
    `}
  ${Pn}:active & {
    margin-top: 2px;
  }
`,oo=v.ZP.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:t})=>t.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${qt};
  ${({variant:t="default"})=>t==="flat"?v.iv`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:i})=>i.flatDark};
        `:v.iv`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:i})=>i.borderDarkest};
        `}
  ${({variant:t="default"})=>z(t)}
`,Un=v.ZP.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ge.md} - 4px);
  line-height: calc(${Ge.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:t})=>t.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:t})=>t?ro:""}
  user-select: none;
`,jr=[],Qn=({className:t,defaultValue:i,disabled:h,native:w,onChange:$,options:M=jr,readOnly:O,style:F,value:K,variant:Q,width:ee})=>{var G;const De=(0,a.useMemo)(()=>M.filter(Boolean),[M]),[pe,$e]=Ve({defaultValue:i!=null?i:(G=De==null?void 0:De[0])===null||G===void 0?void 0:G.value,onChange:$,readOnly:O,value:K}),ot=!(h||O),ce=(0,a.useMemo)(()=>({className:t,style:sn(ke({},F),{width:ee})}),[t,F,ee]),Le=(0,a.useMemo)(()=>a.createElement(Pn,{as:"div","data-testid":"select-button",$disabled:h,native:w,tabIndex:-1,variant:Q==="flat"?"flat":"raised"},a.createElement(no,{"data-testid":"select-icon",$disabled:h})),[h,w,Q]),Ze=(0,a.useMemo)(()=>Q==="flat"?Nn:Bn,[Q]);return(0,a.useMemo)(()=>({isEnabled:ot,options:De,value:pe,setValue:$e,wrapperProps:ce,DropdownButton:Le,Wrapper:Ze}),[Le,Ze,ot,De,$e,pe,ce])},io={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Gn=1e3,ao=({onBlur:t,onChange:i,onClose:h,onFocus:w,onKeyDown:$,onMouseDown:M,onOpen:O,open:F,options:K,readOnly:Q,value:ee,selectRef:G,setValue:De,wrapperRef:pe})=>{const $e=(0,a.useRef)(null),ot=(0,a.useRef)([]),ce=(0,a.useRef)(0),Le=(0,a.useRef)(0),Ze=(0,a.useRef)(),he=(0,a.useRef)("search"),Ce=(0,a.useRef)(""),Me=(0,a.useRef)(),[We,Vt]=Ve({defaultValue:!1,onChange:O,onChangePropName:"onOpen",readOnly:Q,value:F,valuePropName:"open"}),vr=(0,a.useMemo)(()=>{const D=K.findIndex(ge=>ge.value===ee);return ce.current=Dt(D,0,null),K[D]},[K,ee]),[lr,tr]=(0,a.useState)(K[0]),Gt=(0,a.useCallback)(D=>{const ge=$e.current,st=ot.current[D];if(!st||!ge){Ze.current=D;return}Ze.current=void 0;const Jt=ge.clientHeight,At=ge.scrollTop,jt=ge.scrollTop+Jt,nr=st.offsetTop,Wr=st.offsetHeight,Yr=st.offsetTop+st.offsetHeight;nr<At&&ge.scrollTo(0,nr),Yr>jt&&ge.scrollTo(0,nr-Jt+Wr),st.focus({preventScroll:!0})},[$e]),wt=(0,a.useCallback)((D,{scroll:ge}={})=>{var st;const Jt=K.length-1;let At;switch(D){case"first":{At=0;break}case"last":{At=Jt;break}case"next":{At=Dt(Le.current+1,0,Jt);break}case"previous":{At=Dt(Le.current-1,0,Jt);break}case"selected":{At=Dt((st=ce.current)!==null&&st!==void 0?st:0,0,Jt);break}default:At=D}Le.current=At,tr(K[At]),ge&&Gt(At)},[Le,K,Gt]),Yt=(0,a.useCallback)(({fromEvent:D})=>{Vt(!0),wt("selected",{scroll:!0}),O==null||O({fromEvent:D})},[wt,O,Vt]),rr=(0,a.useCallback)(()=>{he.current="search",Ce.current="",clearTimeout(Me.current)},[]),dr=(0,a.useCallback)(({focusSelect:D,fromEvent:ge})=>{var st;h==null||h({fromEvent:ge}),Vt(!1),tr(K[0]),rr(),Ze.current=void 0,D&&((st=G.current)===null||st===void 0||st.focus())},[rr,h,K,G,Vt]),Mt=(0,a.useCallback)(({fromEvent:D})=>{We?dr({focusSelect:!1,fromEvent:D}):Yt({fromEvent:D})},[dr,Yt,We]),Xt=(0,a.useCallback)((D,{fromEvent:ge})=>{ce.current!==D&&(ce.current=D,De(K[D].value),i==null||i(K[D],{fromEvent:ge}))},[i,K,De]),_t=(0,a.useCallback)(({focusSelect:D,fromEvent:ge})=>{Xt(Le.current,{fromEvent:ge}),dr({focusSelect:D,fromEvent:ge})},[dr,Xt]),Fr=(0,a.useCallback)((D,{fromEvent:ge,select:st})=>{var Jt;switch(he.current==="cycleFirstLetter"&&D!==Ce.current&&(he.current="search"),D===Ce.current?he.current="cycleFirstLetter":Ce.current+=D,he.current){case"search":{let At=K.findIndex(jt=>{var nr;return((nr=jt.label)===null||nr===void 0?void 0:nr.toLocaleUpperCase().indexOf(Ce.current))===0});At<0&&(At=K.findIndex(jt=>{var nr;return((nr=jt.label)===null||nr===void 0?void 0:nr.toLocaleUpperCase().indexOf(D))===0}),Ce.current=D),At>=0&&(st?Xt(At,{fromEvent:ge}):wt(At,{scroll:!0}));break}case"cycleFirstLetter":{const At=st?(Jt=ce.current)!==null&&Jt!==void 0?Jt:-1:Le.current;let jt=K.findIndex((nr,Wr)=>{var Yr;return Wr>At&&((Yr=nr.label)===null||Yr===void 0?void 0:Yr.toLocaleUpperCase().indexOf(D))===0});jt<0&&(jt=K.findIndex(nr=>{var Wr;return((Wr=nr.label)===null||Wr===void 0?void 0:Wr.toLocaleUpperCase().indexOf(D))===0})),jt>=0&&(st?Xt(jt,{fromEvent:ge}):wt(jt,{scroll:!0}));break}}clearTimeout(Me.current),Me.current=setTimeout(()=>{he.current==="search"&&(Ce.current="")},Gn)},[wt,K,Xt]),pt=(0,a.useCallback)(D=>{var ge;D.button===0&&(D.preventDefault(),(ge=G.current)===null||ge===void 0||ge.focus(),Mt({fromEvent:D}),M==null||M(D))},[M,G,Mt]),Kt=(0,a.useCallback)(D=>{_t({focusSelect:!0,fromEvent:D})},[_t]),gr=(0,a.useCallback)(D=>{const{altKey:ge,code:st,ctrlKey:Jt,metaKey:At,shiftKey:jt}=D,{ARROW_DOWN:nr,ARROW_UP:Wr,END:Yr,ENTER:Wn,ESC:wo,HOME:Mr,SPACE:Xr,TAB:Kr}=io,qn=ge||Jt||At||jt;if(!(st===Kr&&(ge||Jt||At)||st!==Kr&&qn))switch(st){case nr:{if(D.preventDefault(),!We){Yt({fromEvent:D});return}wt("next",{scroll:!0});break}case Wr:{if(D.preventDefault(),!We){Yt({fromEvent:D});return}wt("previous",{scroll:!0});break}case Yr:{if(D.preventDefault(),!We){Yt({fromEvent:D});return}wt("last",{scroll:!0});break}case Wn:{if(!We)return;D.preventDefault(),_t({focusSelect:!0,fromEvent:D});break}case wo:{if(!We)return;D.preventDefault(),dr({focusSelect:!0,fromEvent:D});break}case Mr:{if(D.preventDefault(),!We){Yt({fromEvent:D});return}wt("first",{scroll:!0});break}case Xr:{D.preventDefault(),We?_t({focusSelect:!0,fromEvent:D}):Yt({fromEvent:D});break}case Kr:{if(!We)return;jt||D.preventDefault(),_t({focusSelect:!jt,fromEvent:D});break}default:!qn&&st.match(/^Key/)&&(D.preventDefault(),D.stopPropagation(),Fr(st.replace(/^Key/,""),{select:!We,fromEvent:D}))}},[wt,dr,We,Yt,Fr,_t]),ln=(0,a.useCallback)(D=>{gr(D),$==null||$(D)},[gr,$]),Gr=(0,a.useCallback)(D=>{wt(D)},[wt]),Be=(0,a.useCallback)(D=>{We||(rr(),t==null||t(D))},[rr,t,We]),Je=(0,a.useCallback)(D=>{rr(),w==null||w(D)},[rr,w]),bt=(0,a.useCallback)(D=>{$e.current=D,Ze.current!==void 0&&Gt(Ze.current)},[Gt]),ct=(0,a.useCallback)((D,ge)=>{ot.current[ge]=D,Ze.current===ge&&Gt(Ze.current)},[Gt]);return(0,a.useEffect)(()=>{if(!We)return()=>{};const D=ge=>{var st;const Jt=ge.target;!((st=pe.current)===null||st===void 0)&&st.contains(Jt)||(ge.preventDefault(),dr({focusSelect:!1,fromEvent:ge}))};return document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[dr,We,pe]),(0,a.useMemo)(()=>({activeOption:lr,handleActivateOptionIndex:Gr,handleBlur:Be,handleButtonKeyDown:ln,handleDropdownKeyDown:gr,handleFocus:Je,handleMouseDown:pt,handleOptionClick:Kt,handleSetDropdownRef:bt,handleSetOptionRef:ct,open:We,selectedOption:vr}),[lr,Gr,Be,ln,Je,gr,pt,Kt,bt,ct,We,vr])},zn=(0,a.forwardRef)((De,G)=>{var pe=De,{className:t,defaultValue:i,disabled:h,onChange:w,options:$,readOnly:M,style:O,value:F,variant:K,width:Q}=pe,ee=nt(pe,["className","defaultValue","disabled","onChange","options","readOnly","style","value","variant","width"]);const{isEnabled:$e,options:ot,setValue:ce,value:Le,DropdownButton:Ze,Wrapper:he}=Qn({defaultValue:i,disabled:h,native:!0,onChange:w,options:$,readOnly:M,value:F,variant:K}),Ce=(0,a.useCallback)(Me=>{const We=ot.find(Vt=>Vt.value===Me.target.value);We&&(ce(We.value),w==null||w(We,{fromEvent:Me}))},[w,ot,ce]);return a.createElement(he,{className:t,style:sn(ke({},O),{width:Q})},a.createElement(fn,null,a.createElement(Cn,sn(ke({},ee),{disabled:h,onChange:$e?Ce:Te,ref:G,value:Le}),ot.map((Me,We)=>{var Vt;return a.createElement("option",{key:`${Me.value}-${We}`,value:Me.value},(Vt=Me.label)!==null&&Vt!==void 0?Vt:Me.value)})),Ze))});zn.displayName="SelectNative";function rn({activateOptionIndex:t,active:i,index:h,onClick:w,option:$,selected:M,setRef:O}){const F=(0,a.useCallback)(()=>{t(h)},[t,h]),K=(0,a.useCallback)(ee=>{O(ee,h)},[h,O]),Q=sr();return a.createElement(Un,{active:i,"aria-selected":M?"true":void 0,"data-value":$.value,id:Q,onClick:w,onMouseEnter:F,ref:K,role:"option",tabIndex:0},$.label)}function Hn(Gt,tr){var wt=Gt,{"aria-label":t,"aria-labelledby":i,className:h,defaultValue:w,disabled:$=!1,formatDisplay:M,inputProps:O,labelId:F,menuMaxHeight:K,name:Q,onBlur:ee,onChange:G,onClose:De,onFocus:pe,onKeyDown:$e,onMouseDown:ot,onOpen:ce,open:Le,options:Ze,readOnly:he,shadow:Ce=!0,style:Me,variant:We="default",value:Vt,width:vr="auto"}=wt,lr=nt(wt,["aria-label","aria-labelledby","className","defaultValue","disabled","formatDisplay","inputProps","labelId","menuMaxHeight","name","onBlur","onChange","onClose","onFocus","onKeyDown","onMouseDown","onOpen","open","options","readOnly","shadow","style","variant","value","width"]);const{isEnabled:Yt,options:rr,setValue:dr,value:Mt,wrapperProps:Xt,DropdownButton:_t,Wrapper:Fr}=Qn({className:h,defaultValue:w,disabled:$,native:!1,onChange:G,options:Ze,style:Me,readOnly:he,value:Vt,variant:We,width:vr}),pt=(0,a.useRef)(null),Kt=(0,a.useRef)(null),gr=(0,a.useRef)(null),{activeOption:ln,handleActivateOptionIndex:Gr,handleBlur:Be,handleButtonKeyDown:Je,handleDropdownKeyDown:bt,handleFocus:ct,handleMouseDown:D,handleOptionClick:ge,handleSetDropdownRef:st,handleSetOptionRef:Jt,open:At,selectedOption:jt}=ao({onBlur:ee,onChange:G,onClose:De,onFocus:pe,onKeyDown:$e,onMouseDown:ot,onOpen:ce,open:Le,options:rr,value:Mt,selectRef:Kt,setValue:dr,wrapperRef:gr});(0,a.useImperativeHandle)(tr,()=>({focus:Mr=>{var Xr;(Xr=Kt.current)===null||Xr===void 0||Xr.focus(Mr)},node:pt.current,value:String(Mt)}),[Mt]);const nr=(0,a.useMemo)(()=>jt?typeof M=="function"?M(jt):jt.label:"",[M,jt]),Wr=Yt?1:void 0,Yr=(0,a.useMemo)(()=>K?{overflow:"auto",maxHeight:K}:void 0,[K]),Wn=sr(),wo=(0,a.useMemo)(()=>rr.map((Mr,Xr)=>{const Kr=`${Mt}-${Xr}`,qn=Mr===ln,zo=Mr===jt;return a.createElement(rn,{activateOptionIndex:Gr,active:qn,index:Xr,key:Kr,onClick:ge,option:Mr,selected:zo,setRef:Jt})}),[ln,Gr,ge,Jt,rr,jt,Mt]);return a.createElement(Fr,sn(ke({},Xt),{$disabled:$,ref:gr,shadow:Ce,style:sn(ke({},Me),{width:vr})}),a.createElement("input",ke({name:Q,ref:pt,type:"hidden",value:String(Mt)},O)),a.createElement(fn,ke({"aria-disabled":$,"aria-expanded":At,"aria-haspopup":"listbox","aria-label":t,"aria-labelledby":i!=null?i:F,"aria-owns":Yt&&At?Wn:void 0,onBlur:Be,onFocus:ct,onKeyDown:Je,onMouseDown:Yt?D:ot,ref:Kt,role:"button",tabIndex:Wr},lr),a.createElement(Vn,null,nr),_t),Yt&&At&&a.createElement(oo,{id:Wn,onKeyDown:bt,ref:st,role:"listbox",style:Yr,tabIndex:0,variant:We},wo))}const Yn=(0,a.forwardRef)(Hn);Yn.displayName="Select";const lo=v.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${t=>t.noPadding?"0":"4px"};
`,pn=(0,a.forwardRef)(function(M,$){var O=M,{children:i,noPadding:h=!1}=O,w=nt(O,["children","noPadding"]);return a.createElement(lo,ke({noPadding:h,ref:$},w),i)});pn.displayName="Toolbar";const Pt=v.ZP.div`
  padding: 16px;
`,Xn=(0,a.forwardRef)(function($,w){var M=$,{children:i}=M,h=nt(M,["children"]);return a.createElement(Pt,ke({ref:w},h),i)});Xn.displayName="WindowContent";const nn=v.ZP.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:t})=>t.material};
  ${({active:t})=>t===!1?v.iv`
          background: ${({theme:i})=>i.headerNotActiveBackground};
          color: ${({theme:i})=>i.headerNotActiveText};
        `:v.iv`
          background: ${({theme:i})=>i.headerBackground};
          color: ${({theme:i})=>i.headerText};
        `}

  ${pr} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,d=(0,a.forwardRef)(function(M,$){var O=M,{active:i=!0,children:h}=O,w=nt(O,["active","children"]);return a.createElement(nn,ke({active:i,ref:$},w),h)});d.displayName="WindowHeader";const b=v.ZP.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${U({style:"window"})}
  ${g()}
`,f=v.ZP.span`
  ${({theme:t})=>v.iv`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${t.borderLightest} 16.67%,
      ${t.material} 16.67%,
      ${t.material} 33.33%,
      ${t.borderDark} 33.33%,
      ${t.borderDark} 50%,
      ${t.borderLightest} 50%,
      ${t.borderLightest} 66.67%,
      ${t.material} 66.67%,
      ${t.material} 83.33%,
      ${t.borderDark} 83.33%,
      ${t.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,m=(0,a.forwardRef)((O,M)=>{var F=O,{children:t,resizable:i=!1,resizeRef:h,shadow:w=!0}=F,$=nt(F,["children","resizable","resizeRef","shadow"]);return a.createElement(b,ke({ref:M,shadow:w},$),t,i&&a.createElement(f,{"data-testid":"resizeHandle",ref:h}))});m.displayName="Window";const I=(0,v.ZP)(Rt)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:t})=>t.canvas};
`,Z=v.ZP.div`
  display: flex;
  background: ${({theme:t})=>t.materialDark};
  color: #dfe0e3;
`,W=v.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,X=v.ZP.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,xe=v.ZP.span`
  cursor: pointer;

  background: ${({active:t,theme:i})=>t?i.hoverBackground:"transparent"};
  color: ${({active:t,theme:i})=>t?i.canvasTextInvert:i.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:t,active:i})=>i?"none":t.materialDark};
  }
`,ve=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Ie(t,i){return new Date(t,i+1,0).getDate()}function _e(t,i,h){return new Date(t,i,h).getDay()}function at(t){const i=new Date(Date.parse(t)),h=i.getUTCDate(),w=i.getUTCMonth(),$=i.getUTCFullYear();return{day:h,month:w,year:$}}const ft=(0,a.forwardRef)(({className:t,date:i=new Date().toISOString(),onAccept:h,onCancel:w,shadow:$=!0},M)=>{const[O,F]=(0,a.useState)(()=>at(i)),{year:K,month:Q,day:ee}=O,G=(0,a.useCallback)(({value:ce})=>{F(Le=>sn(ke({},Le),{month:ce}))},[]),De=(0,a.useCallback)(ce=>{F(Le=>sn(ke({},Le),{year:ce}))},[]),pe=(0,a.useCallback)(ce=>{F(Le=>sn(ke({},Le),{day:ce}))},[]),$e=(0,a.useCallback)(()=>{const ce=[O.year,O.month+1,O.day].map(Le=>String(Le).padStart(2,"0")).join("-");h==null||h(ce)},[O.day,O.month,O.year,h]),ot=(0,a.useMemo)(()=>{const ce=Array.from({length:42}),Le=_e(K,Q,1);let Ze=ee;const he=Ie(K,Q);return Ze=Ze<he?Ze:he,ce.forEach((Ce,Me)=>{if(Me>=Le&&Me<he+Le){const We=Me-Le+1;ce[Me]=a.createElement(X,{key:Me,onClick:()=>{pe(We)}},a.createElement(xe,{active:We===Ze},We))}else ce[Me]=a.createElement(X,{key:Me})}),ce},[ee,pe,Q,K]);return a.createElement(m,{className:t,ref:M,shadow:$,style:{margin:20}},a.createElement(d,null,a.createElement("span",{role:"img","aria-label":"\u{1F4C6}"},"\u{1F4C6}"),"Date"),a.createElement(Xn,null,a.createElement(pn,{noPadding:!0,style:{justifyContent:"space-between"}},a.createElement(Yn,{options:ve,value:Q,onChange:G,width:128,menuMaxHeight:200}),a.createElement(En,{value:K,onChange:De,width:100})),a.createElement(I,null,a.createElement(Z,null,a.createElement(X,null,"S"),a.createElement(X,null,"M"),a.createElement(X,null,"T"),a.createElement(X,null,"W"),a.createElement(X,null,"T"),a.createElement(X,null,"F"),a.createElement(X,null,"S")),a.createElement(W,null,ot)),a.createElement(pn,{noPadding:!0,style:{justifyContent:"space-between"}},a.createElement(fe,{fullWidth:!0,onClick:w,disabled:!w},"Cancel"),a.createElement(fe,{fullWidth:!0,onClick:h?$e:void 0,disabled:!h},"OK"))))});ft.displayName="DatePicker";const Fe=t=>{switch(t){case"status":case"well":return v.iv`
        ${U({style:"status"})}
      `;case"window":case"outside":return v.iv`
        ${U({style:"window"})}
      `;case"field":return v.iv`
        ${U({style:"field"})}
      `;default:return v.iv`
        ${U()}
      `}},tt=v.ZP.div`
  position: relative;
  font-size: 1rem;
  ${({variant:t})=>Fe(t)}
  ${({variant:t})=>g(t==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Oe=(0,a.forwardRef)((M,$)=>{var O=M,{children:t,shadow:i=!1,variant:h="window"}=O,w=nt(O,["children","shadow","variant"]);return a.createElement(tt,ke({ref:$,shadow:i,variant:h},w),t)});Oe.displayName="Frame";const mt=v.ZP.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:t,variant:i})=>i==="flat"?t.flatDark:t.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:t})=>t.materialText};
  ${({variant:t})=>t!=="flat"&&v.iv`
      box-shadow: -1px -1px 0 1px ${({theme:i})=>i.borderDark},
        inset -1px -1px 0 1px ${({theme:i})=>i.borderDark};
    `}
  ${t=>t.$disabled&&x()}
`,Ue=v.ZP.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:t,variant:i})=>i==="flat"?t.canvas:t.material};
`,zt=(0,a.forwardRef)((O,M)=>{var F=O,{label:t,disabled:i=!1,variant:h="default",children:w}=F,$=nt(F,["label","disabled","variant","children"]);return a.createElement(mt,ke({"aria-disabled":i,$disabled:i,variant:h,ref:M},$),t&&a.createElement(Ue,{variant:h},t),w)});zt.displayName="GroupBox";const xt=v.ZP.div`
  ${({theme:t,size:i="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${er(i)};
  width: 5px;
  border-top: 2px solid ${t.borderLightest};
  border-left: 2px solid ${t.borderLightest};
  border-bottom: 2px solid ${t.borderDark};
  border-right: 2px solid ${t.borderDark};
  background: ${t.material};
`}
`;xt.displayName="Handle";const Ot="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Cr=v.ZP.div`
  display: inline-block;
  height: ${({size:t})=>er(t)};
  width: ${({size:t})=>er(t)};
`,Lr=v.ZP.span`
  display: block;
  background: ${Ot};
  background-size: cover;
  width: 100%;
  height: 100%;
`,xr=(0,a.forwardRef)((w,h)=>{var $=w,{size:t=30}=$,i=nt($,["size"]);return a.createElement(Cr,ke({size:t,ref:h},i),a.createElement(Lr,null))});xr.displayName="Hourglass";const Er=v.ZP.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Pr=v.ZP.div`
  position: relative;
`,ne=v.ZP.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:t})=>t.material};
  border-top: 4px solid ${({theme:t})=>t.borderLightest};
  border-left: 4px solid ${({theme:t})=>t.borderLightest};
  border-bottom: 4px solid ${({theme:t})=>t.borderDark};
  border-right: 4px solid ${({theme:t})=>t.borderDark};

  outline: 1px dotted ${({theme:t})=>t.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:t})=>t.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:t})=>t.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,c=(0,v.ZP)(Ye).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,ir=v.ZP.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:t})=>t.material};
  border-left: 2px solid ${({theme:t})=>t.borderLightest};
  border-bottom: 2px solid ${({theme:t})=>t.borderDarkest};
  border-right: 2px solid ${({theme:t})=>t.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:t})=>t.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:t})=>t.material};
    border-left: 2px solid ${({theme:t})=>t.borderLightest};
    border-right: 2px solid ${({theme:t})=>t.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:t})=>t.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:t})=>t.material};
    border: 2px solid ${({theme:t})=>t.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:t})=>t.borderLightest},
      1px 1px 0 1px ${({theme:t})=>t.borderDarkest};
  }
`,wr=(0,a.forwardRef)(($,w)=>{var M=$,{backgroundStyles:t,children:i}=M,h=nt(M,["backgroundStyles","children"]);return a.createElement(Er,ke({ref:w},h),a.createElement(Pr,null,a.createElement(ne,null,a.createElement(c,{style:t},i)),a.createElement(ir,null)))});wr.displayName="Monitor";const cr=v.ZP.div`
  display: inline-block;
  height: ${Ge.md};
  width: 100%;
`,hn=(0,v.ZP)(Ye)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Xe=v.iv`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,oe=v.ZP.div`
  position: relative;
  top: 4px;
  ${Xe}
  background: ${({theme:t})=>t.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:t})=>t.materialText};
`,Ur=v.ZP.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Xe}
  color: ${({theme:t})=>t.materialTextInvert};
  background: ${({theme:t})=>t.progress};
  clip-path: polygon(
    0 0,
    ${({value:t=0})=>t}% 0,
    ${({value:t=0})=>t}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,on=v.ZP.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Qr=17,ae=v.ZP.span`
  display: inline-block;
  width: ${Qr}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:t})=>t.progress};
  border-color: ${({theme:t})=>t.material};
  border-width: 0px 1px;
  border-style: solid;
`,V=(0,a.forwardRef)((O,M)=>{var F=O,{hideValue:t=!1,shadow:i=!0,value:h,variant:w="default"}=F,$=nt(F,["hideValue","shadow","value","variant"]);const K=t?null:`${h}%`,Q=(0,a.useRef)(null),[ee,G]=(0,a.useState)([]),De=(0,a.useCallback)(()=>{if(!Q.current||h===void 0)return;const pe=Q.current.getBoundingClientRect().width,$e=Math.round(h/100*pe/Qr);G(Array.from({length:$e}))},[h]);return(0,a.useEffect)(()=>(De(),window.addEventListener("resize",De),()=>window.removeEventListener("resize",De)),[De]),a.createElement(cr,ke({"aria-valuenow":h!==void 0?Math.round(h):void 0,ref:M,role:"progressbar",variant:w},$),a.createElement(hn,{variant:w,shadow:i},w==="default"?a.createElement(a.Fragment,null,a.createElement(oe,{"data-testid":"defaultProgress1"},K),a.createElement(Ur,{"data-testid":"defaultProgress2",value:h},K)):a.createElement(on,{ref:Q,"data-testid":"tileProgress"},ee.map((pe,$e)=>a.createElement(ae,{key:$e})))))});V.displayName="ProgressBar";const te=v.iv`
  width: ${ue}px;
  height: ${ue}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,se=(0,v.ZP)(Ye)`
  ${te}
  background: ${({$disabled:t,theme:i})=>t?i.material:i.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,A=v.ZP.div`
  ${B()}
  ${te}
  outline: none;
  background: ${({$disabled:t,theme:i})=>t?i.flatLight:i.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:t})=>t.flatDark};
    border-radius: 50%;
  }
`,rt=v.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${t=>t.$disabled?t.theme.checkmarkDisabled:t.theme.checkmark};
`,_={flat:A,default:se},Tt=(0,a.forwardRef)((Q,K)=>{var ee=Q,{checked:t,className:i="",disabled:h=!1,label:w="",onChange:$,style:M={},variant:O="default"}=ee,F=nt(ee,["checked","className","disabled","label","onChange","style","variant"]);const G=_[O];return a.createElement(be,{$disabled:h,className:i,style:M},a.createElement(G,{$disabled:h,role:"presentation"},t&&a.createElement(rt,{$disabled:h,variant:O})),a.createElement(et,ke({disabled:h,onChange:h?void 0:$,readOnly:h,type:"radio",checked:t,ref:K},F)),w&&a.createElement(kt,null,w))});Tt.displayName="Radio";const lt=typeof window!="undefined"?a.useLayoutEffect:a.useEffect;function Ee(t){const i=a.useRef(t);return lt(()=>{i.current=t}),a.useCallback((...h)=>(0,i.current)(...h),[])}function we(t,i){typeof t=="function"?t(i):t&&(t.current=i)}function It(t,i){return(0,a.useMemo)(()=>t==null&&i==null?null:h=>{we(t,h),we(i,h)},[t,i])}var ur=N(61254);let je=!0,Ht=!1,Ke;const Wt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function vn(t){if("type"in t){const{type:i,tagName:h}=t;if(h==="INPUT"&&Wt[i]&&!t.readOnly||h==="TEXTAREA"&&!t.readOnly)return!0}return!!("isContentEditable"in t&&t.isContentEditable)}function Lt(t){t.metaKey||t.altKey||t.ctrlKey||(je=!0)}function Rr(){je=!1}function Zr(){this.visibilityState==="hidden"&&Ht&&(je=!0)}function Qe(t){t.addEventListener("keydown",Lt,!0),t.addEventListener("mousedown",Rr,!0),t.addEventListener("pointerdown",Rr,!0),t.addEventListener("touchstart",Rr,!0),t.addEventListener("visibilitychange",Zr,!0)}function de(t){const{target:i}=t;try{return i.matches(":focus-visible")}catch(h){}return je||vn(i)}function $t(){Ht=!0,window.clearTimeout(Ke),Ke=window.setTimeout(()=>{Ht=!1},100)}function gn(){const t=(0,a.useCallback)(i=>{const h=(0,ur.findDOMNode)(i);h!=null&&Qe(h.ownerDocument)},[]);return{isFocusVisible:de,onBlurVisible:$t,ref:t}}function Or(t,i,h){return(h-i)*t+i}function Ar(t,i){if(i!==void 0&&"changedTouches"in t){for(let h=0;h<t.changedTouches.length;h+=1){const w=t.changedTouches[h];if(w.identifier===i)return{x:w.clientX,y:w.clientY}}return!1}return"clientX"in t?{x:t.clientX,y:t.clientY}:!1}function Tr(t){return t&&t.ownerDocument||document}function so(t,i){var h;const{index:w}=(h=t.reduce(($,M,O)=>{const F=Math.abs(i-M);return $===null||F<$.distance||F===$.distance?{distance:F,index:O}:$},null))!==null&&h!==void 0?h:{};return w!=null?w:-1}const jo=v.ZP.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:t})=>t?"41px":"39px"};
    ${({isFocused:t,theme:i})=>t&&`
        outline: 2px dotted ${i.materialText};
        `}
  }

  ${({orientation:t,size:i})=>t==="vertical"?v.iv`
          height: ${i};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:h})=>h?"41px":"39px"};
          }
        `:v.iv`
          width: ${i};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:h})=>h?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:t})=>t?"none":"auto"};
`,co=()=>v.iv`
  position: absolute;
  ${({orientation:t})=>t==="vertical"?v.iv`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:v.iv`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,jn=(0,v.ZP)(Ye)`
  ${co()}
`,Zo=(0,v.ZP)(Ye)`
  ${co()}

  border-left-color: ${({theme:t})=>t.flatLight};
  border-top-color: ${({theme:t})=>t.flatLight};
  border-right-color: ${({theme:t})=>t.canvas};
  border-bottom-color: ${({theme:t})=>t.canvas};
  &:before {
    border-left-color: ${({theme:t})=>t.flatDark};
    border-top-color: ${({theme:t})=>t.flatDark};
    border-right-color: ${({theme:t})=>t.flatLight};
    border-bottom-color: ${({theme:t})=>t.flatLight};
  }
`,Fo=v.ZP.span`
  position: relative;
  ${({orientation:t})=>t==="vertical"?v.iv`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:v.iv`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:t})=>t==="flat"?v.iv`
          ${B()}
          outline: 2px solid ${({theme:i})=>i.flatDark};
          background: ${({theme:i})=>i.flatLight};
        `:v.iv`
          ${g()}
          ${U()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:t,theme:i})=>t&&E({mainColor:i.material,secondaryColor:i.borderLightest})}
`,mn=6,ko=v.ZP.span`
  display: inline-block;
  position: absolute;

  ${({orientation:t})=>t==="vertical"?v.iv`
          right: ${-mn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${mn}px;
          border-bottom: 2px solid ${({theme:i})=>i.materialText};
        `:v.iv`
          bottom: ${-mn}px;
          height: ${mn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:i})=>i.materialText};
          border-right: 1px solid ${({theme:i})=>i.materialText};
        `}

  color:  ${({theme:t})=>t.materialText};
  ${({$disabled:t,theme:i})=>t&&v.iv`
      ${x()}
      box-shadow: 1px 1px 0px ${i.materialTextDisabledShadow};
      border-color: ${i.materialTextDisabled};
    `}
`,Wo=v.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:t})=>t==="vertical"?v.iv`
          transform: translate(${mn+2}px, ${mn+1}px);
        `:v.iv`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,li=(0,a.forwardRef)((ce,ot)=>{var Le=ce,{defaultValue:t,disabled:i=!1,marks:h=!1,max:w=100,min:$=0,name:M,onChange:O,onChangeCommitted:F,onMouseDown:K,orientation:Q="horizontal",size:ee="100%",step:G=1,value:De,variant:pe="default"}=Le,$e=nt(Le,["defaultValue","disabled","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","size","step","value","variant"]);const Ze=pe==="flat"?Zo:jn,he=Q==="vertical",[Ce=$,Me]=Ve({defaultValue:t,onChange:O!=null?O:F,value:De}),{isFocusVisible:We,onBlurVisible:Vt,ref:vr}=gn(),[lr,tr]=(0,a.useState)(!1),Gt=(0,a.useRef)(),wt=(0,a.useRef)(null),Yt=It(vr,Gt),rr=It(ot,Yt),dr=Ee(Be=>{We(Be)&&tr(!0)}),Mt=Ee(()=>{lr!==!1&&(tr(!1),Vt())}),Xt=(0,a.useRef)(),_t=(0,a.useMemo)(()=>h===!0&&Number.isFinite(G)?[...Array(Math.round((w-$)/G)+1)].map((Be,Je)=>({label:void 0,value:$+G*Je})):Array.isArray(h)?h:[],[h,w,$,G]),Fr=Ee(Be=>{const Je=(w-$)/10,bt=_t.map(ge=>ge.value),ct=bt.indexOf(Ce);let D=0;switch(Be.key){case"Home":D=$;break;case"End":D=w;break;case"PageUp":G&&(D=Ce+Je);break;case"PageDown":G&&(D=Ce-Je);break;case"ArrowRight":case"ArrowUp":G?D=Ce+G:D=bt[ct+1]||bt[bt.length-1];break;case"ArrowLeft":case"ArrowDown":G?D=Ce-G:D=bt[ct-1]||bt[0];break;default:return}Be.preventDefault(),G&&(D=Br(D,G,$)),D=Dt(D,$,w),Me(D),tr(!0),O==null||O(D),F==null||F(D)}),pt=(0,a.useCallback)(Be=>{if(!Gt.current)return 0;const Je=Gt.current.getBoundingClientRect();let bt;he?bt=(Je.bottom-Be.y)/Je.height:bt=(Be.x-Je.left)/Je.width;let ct;if(ct=Or(bt,$,w),G)ct=Br(ct,G,$);else{const D=_t.map(st=>st.value),ge=so(D,ct);ct=D[ge]}return ct=Dt(ct,$,w),ct},[_t,w,$,G,he]),Kt=Ee(Be=>{var Je;const bt=Ar(Be,Xt.current);if(!bt)return;const ct=pt(bt);(Je=wt.current)===null||Je===void 0||Je.focus(),Me(ct),tr(!0),O==null||O(ct)}),gr=Ee(Be=>{const Je=Ar(Be,Xt.current);if(!Je)return;const bt=pt(Je);F==null||F(bt),Xt.current=void 0;const ct=Tr(Gt.current);ct.removeEventListener("mousemove",Kt),ct.removeEventListener("mouseup",gr),ct.removeEventListener("touchmove",Kt),ct.removeEventListener("touchend",gr)}),ln=Ee(Be=>{var Je;K==null||K(Be),Be.preventDefault(),(Je=wt.current)===null||Je===void 0||Je.focus(),tr(!0);const bt=Ar(Be,Xt.current);if(bt){const D=pt(bt);Me(D),O==null||O(D)}const ct=Tr(Gt.current);ct.addEventListener("mousemove",Kt),ct.addEventListener("mouseup",gr)}),Gr=Ee(Be=>{var Je;Be.preventDefault();const bt=Be.changedTouches[0];bt!=null&&(Xt.current=bt.identifier),(Je=wt.current)===null||Je===void 0||Je.focus(),tr(!0);const ct=Ar(Be,Xt.current);if(ct){const ge=pt(ct);Me(ge),O==null||O(ge)}const D=Tr(Gt.current);D.addEventListener("touchmove",Kt),D.addEventListener("touchend",gr)});return(0,a.useEffect)(()=>{const{current:Be}=Gt;Be==null||Be.addEventListener("touchstart",Gr);const Je=Tr(Be);return()=>{Be==null||Be.removeEventListener("touchstart",Gr),Je.removeEventListener("mousemove",Kt),Je.removeEventListener("mouseup",gr),Je.removeEventListener("touchmove",Kt),Je.removeEventListener("touchend",gr)}},[gr,Kt,Gr]),a.createElement(jo,ke({$disabled:i,hasMarks:Boolean(_t.length),isFocused:lr,onMouseDown:ln,orientation:Q,ref:rr,size:er(ee)},$e),a.createElement("input",{disabled:i,name:M,type:"hidden",value:Ce!=null?Ce:0}),_t&&_t.map(Be=>a.createElement(ko,{$disabled:i,"data-testid":"tick",key:Be.value/(w-$)*100,orientation:Q,style:{[he?"bottom":"left"]:`${(Be.value-$)/(w-$)*100}%`}},Be.label&&a.createElement(Wo,{"aria-hidden":!0,"data-testid":"mark",orientation:Q},Be.label))),a.createElement(Ze,{orientation:Q,variant:pe}),a.createElement(Fo,{$disabled:i,"aria-disabled":i?!0:void 0,"aria-orientation":Q,"aria-valuemax":w,"aria-valuemin":$,"aria-valuenow":Ce,onBlur:Mt,onFocus:dr,onKeyDown:Fr,orientation:Q,ref:wt,role:"slider",style:{[he?"bottom":"left"]:`${(he?-100:0)+100*(Ce-$)/(w-$)}%`},tabIndex:i?void 0:0,variant:pe}))});li.displayName="Slider";const Vo=v.ZP.tbody`
  background: ${({theme:t})=>t.canvas};
  display: table-row-group;
  box-shadow: ${u};
  overflow-y: auto;
`,uo=(0,a.forwardRef)(function($,w){var M=$,{children:i}=M,h=nt(M,["children"]);return a.createElement(Vo,ke({ref:w},h),i)});uo.displayName="TableBody";const Tn=v.ZP.td`
  padding: 0 8px;
`,fo=(0,a.forwardRef)(function($,w){var M=$,{children:i}=M,h=nt(M,["children"]);return a.createElement(Tn,ke({ref:w},h),i)});fo.displayName="TableDataCell";const ar=v.ZP.thead`
  display: table-header-group;
`,si=(0,a.forwardRef)(function($,w){var M=$,{children:i}=M,h=nt(M,["children"]);return a.createElement(ar,ke({ref:w},h),i)});si.displayName="TableHead";const _o=v.ZP.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:t})=>t.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${U()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:t})=>!t&&v.iv`
      &:active {
        &:before {
          ${U({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:t})=>t.materialText};
  ${({$disabled:t})=>t&&x()}
  &:hover {
    color: ${({theme:t})=>t.materialText};
    ${({$disabled:t})=>t&&x()}
  }
`,ci=(0,a.forwardRef)(function(K,F){var Q=K,{disabled:i=!1,children:h,onClick:w,onTouchStart:$=Te,sort:M}=Q,O=nt(Q,["disabled","children","onClick","onTouchStart","sort"]);const ee=M==="asc"?"ascending":M==="desc"?"descending":void 0;return a.createElement(_o,ke({$disabled:i,"aria-disabled":i,"aria-sort":ee,onClick:i?void 0:w,onTouchStart:i?void 0:$,ref:F},O),a.createElement("div",null,h))});ci.displayName="TableHeadCell";const In=v.ZP.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ge.md} - 2px);
  line-height: calc(${Ge.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:t})=>t.canvasText};
  &:hover {
    background: ${({theme:t})=>t.hoverBackground};
    color: ${({theme:t})=>t.canvasTextInvert};
  }
`,Uo=(0,a.forwardRef)(function($,w){var M=$,{children:i}=M,h=nt(M,["children"]);return a.createElement(In,ke({ref:w},h),i)});Uo.displayName="TableRow";const Qo=v.ZP.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,ui=(0,v.ZP)(Ye)`
  &:before {
    box-shadow: none;
  }
`,Eo=(0,a.forwardRef)((w,h)=>{var $=w,{children:t}=$,i=nt($,["children"]);return a.createElement(ui,null,a.createElement(Qo,ke({ref:h},i),t))});Eo.displayName="Table";const Kn=v.ZP.button`
  ${g()}
  ${U()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ge.md};
  line-height: ${Ge.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:t})=>t.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Re}
    outline-offset: -6px;
  }
  ${t=>t.selected&&`
    z-index: 1;
    height: calc(${Ge.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:t})=>t.material};
    bottom: -4px;
    left: 2px;
  }
`,$o=(0,a.forwardRef)((O,M)=>{var F=O,{value:t,onClick:i,selected:h=!1,children:w}=F,$=nt(F,["value","onClick","selected","children"]);return a.createElement(Kn,ke({"aria-selected":h,selected:h,onClick:K=>i==null?void 0:i(t,K),ref:M,role:"tab"},$),w)});$o.displayName="Tab";const Zn=v.ZP.div`
  ${g()}
  ${U()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Co=(0,a.forwardRef)((w,h)=>{var $=w,{children:t}=$,i=nt($,["children"]);return a.createElement(Zn,ke({ref:h},i),t)});Co.displayName="TabBody";const Go=v.ZP.div`
  position: relative;
  ${({isMultiRow:t,theme:i})=>t&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${i.borderDark};
  }
  `}
`,di=v.ZP.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:t})=>t.borderDarkest};
    border-left: 2px solid ${({theme:t})=>t.borderLightest};
  }
`;function Yo(t,i){const h=[];for(let w=i;w>0;w-=1)h.push(t.splice(0,Math.ceil(t.length/w)));return h}const fi=(0,a.forwardRef)((O,M)=>{var F=O,{value:t,onChange:i=Te,children:h,rows:w=1}=F,$=nt(F,["value","onChange","children","rows"]);const K=(0,a.useMemo)(()=>{var Q;const ee=(Q=a.Children.map(h,pe=>{if(!a.isValidElement(pe))return null;const $e={selected:pe.props.value===t,onClick:i};return a.cloneElement(pe,$e)}))!==null&&Q!==void 0?Q:[],G=Yo(ee,w).map((pe,$e)=>({key:$e,tabs:pe})),De=G.findIndex(pe=>pe.tabs.some($e=>$e.props.selected));return G.push(G.splice(De,1)[0]),G},[h,i,w,t]);return a.createElement(Go,sn(ke({},$),{isMultiRow:w>1,role:"tablist",ref:M}),K.map(Q=>a.createElement(di,{key:Q.key},Q.tabs)))});fi.displayName="Tabs";const Po=["blur","focus"],To=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function po(t){return"nativeEvent"in t&&Po.includes(t.type)}function ho(t){return"nativeEvent"in t&&To.includes(t.type)}const Io={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Jn=v.ZP.span`
  position: absolute;

  z-index: 1;
  display: ${t=>t.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
  background: ${({theme:t})=>t.tooltip};
  box-shadow: ${qt};
  text-align: center;
  font-size: 1rem;
  ${t=>Io[t.position]}
`,Lo=v.ZP.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,pi=(0,a.forwardRef)((Le,ce)=>{var Ze=Le,{className:t,children:i,disableFocusListener:h=!1,disableMouseListener:w=!1,enterDelay:$=1e3,leaveDelay:M=0,onBlur:O,onClose:F,onFocus:K,onMouseEnter:Q,onMouseLeave:ee,onOpen:G,style:De,text:pe,position:$e="top"}=Ze,ot=nt(Ze,["className","children","disableFocusListener","disableMouseListener","enterDelay","leaveDelay","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","onOpen","style","text","position"]);const[he,Ce]=(0,a.useState)(!1),[Me,We]=(0,a.useState)(),[Vt,vr]=(0,a.useState)(),lr=!h,tr=!w,Gt=pt=>{window.clearTimeout(Me),window.clearTimeout(Vt);const Kt=window.setTimeout(()=>{Ce(!0),G==null||G(pt)},$);We(Kt)},wt=pt=>{pt.persist(),po(pt)?K==null||K(pt):ho(pt)&&(Q==null||Q(pt)),Gt(pt)},Yt=pt=>{window.clearTimeout(Me),window.clearTimeout(Vt);const Kt=window.setTimeout(()=>{Ce(!1),F==null||F(pt)},M);vr(Kt)},rr=pt=>{pt.persist(),po(pt)?O==null||O(pt):ho(pt)&&(ee==null||ee(pt)),Yt(pt)},dr=lr?rr:void 0,Mt=lr?wt:void 0,Xt=tr?wt:void 0,_t=tr?rr:void 0,Fr=lr?0:void 0;return a.createElement(Lo,{"data-testid":"tooltip-wrapper",onBlur:dr,onFocus:Mt,onMouseEnter:Xt,onMouseLeave:_t,tabIndex:Fr},a.createElement(Jn,ke({className:t,"data-testid":"tooltip",position:$e,ref:ce,show:he,style:De},ot),pe),i)});pi.displayName="Tooltip";const vo=(0,v.ZP)(kt)`
  white-space: nowrap;
`,Ln=v.iv`
  :focus {
    outline: none;
  }

  ${({$disabled:t})=>t?"cursor: default;":v.iv`
          cursor: pointer;

          :focus {
            ${vo} {
              background: ${({theme:i})=>i.hoverBackground};
              color: ${({theme:i})=>i.materialTextInvert};
              outline: 2px dotted ${({theme:i})=>i.focusSecondary};
            }
          }
        `}
`,Xo=v.ZP.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:t})=>t&&v.iv`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:i})=>i.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:t})=>t.borderDark};
      font-size: 12px;
    }
  }
`,go=v.ZP.li`
  position: relative;
  padding-left: ${({hasItems:t})=>t?"0":"13px"};

  ${({isRootLevel:t})=>t?v.iv`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `:v.iv`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:i})=>i.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:t})=>t.borderDark};
    }
  }
`,Ro=v.ZP.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Ko=v.ZP.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:t})=>t.materialText};
  user-select: none;
  padding-left: 18px;
  ${Ln};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Oo=(0,v.ZP)(be)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Ln};
`,mo=v.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function bo(t,i){return t.includes(i)?t.filter(h=>h!==i):[...t,i]}function Mo(t){t.preventDefault()}function yo({className:t,disabled:i,expanded:h,innerRef:w,level:$,select:M,selected:O,style:F,tree:K=[]}){const Q=$===0,ee=(0,a.useCallback)(G=>{var De,pe;const $e=Boolean(G.items&&G.items.length>0),ot=h.includes(G.id),ce=(De=i||G.disabled)!==null&&De!==void 0?De:!1,Le=ce?Mo:Me=>M(Me,G),Ze=ce?Mo:Me=>M(Me,G),he=O===G.id,Ce=a.createElement(mo,{"aria-hidden":!0},G.icon);return a.createElement(go,{key:G.label,isRootLevel:Q,role:"treeitem","aria-expanded":ot,"aria-selected":he,hasItems:$e},$e?a.createElement(Ro,{open:ot},a.createElement(Ko,{onClick:Le,$disabled:ce},a.createElement(Oo,{$disabled:ce},Ce,a.createElement(vo,null,G.label))),ot&&a.createElement(yo,{className:t,disabled:ce,expanded:h,level:$+1,select:M,selected:O,style:F,tree:(pe=G.items)!==null&&pe!==void 0?pe:[]})):a.createElement(Oo,{as:"button",$disabled:ce,onClick:Ze},Ce,a.createElement(vo,null,G.label)))},[t,i,h,Q,$,M,O,F]);return a.createElement(Xo,{className:Q?t:void 0,style:Q?F:void 0,ref:Q?w:void 0,role:Q?"tree":"group",isRootLevel:Q},K.map(ee))}function Jo({className:t,defaultExpanded:i=[],defaultSelected:h,disabled:w=!1,expanded:$,onNodeSelect:M,onNodeToggle:O,selected:F,style:K,tree:Q=[]},ee){const[G,De]=Ve({defaultValue:i,onChange:O,onChangePropName:"onNodeToggle",value:$,valuePropName:"expanded"}),[pe,$e]=Ve({defaultValue:h,onChange:M,onChangePropName:"onNodeSelect",value:F,valuePropName:"selected"}),ot=(0,a.useCallback)((Ze,he)=>{if(O){const Ce=bo(G,he);O(Ze,Ce)}De(Ce=>bo(Ce,he))},[G,O,De]),ce=(0,a.useCallback)((Ze,he)=>{$e(he),M&&M(Ze,he)},[M,$e]),Le=(0,a.useCallback)((Ze,he)=>{Ze.preventDefault(),ce(Ze,he.id),he.items&&he.items.length&&ot(Ze,he.id)},[ce,ot]);return a.createElement(yo,{className:t,disabled:w,expanded:G,level:0,innerRef:ee,select:Le,selected:pe,style:K,tree:Q})}const Do=(0,a.forwardRef)(Jo);Do.displayName="TreeView";const Ci=null,Pi=null,qo=null,ye=null,ei=null,ti=null,an=null,Bo=null,hi=null,vi=null,Fn=null,xo=null,No=null}}]);
