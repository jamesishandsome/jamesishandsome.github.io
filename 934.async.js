!(function(){var la=Object.defineProperty,sa=Object.defineProperties;var ca=Object.getOwnPropertyDescriptors;var ai=Object.getOwnPropertySymbols;var _i=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable;var Vi=(je,ne,N)=>ne in je?la(je,ne,{enumerable:!0,configurable:!0,writable:!0,value:N}):je[ne]=N,$e=(je,ne)=>{for(var N in ne||(ne={}))_i.call(ne,N)&&Vi(je,N,ne[N]);if(ai)for(var N of ai(ne))Ui.call(ne,N)&&Vi(je,N,ne[N]);return je},cn=(je,ne)=>sa(je,ca(ne));var et=(je,ne)=>{var N={};for(var dt in je)_i.call(je,dt)&&ne.indexOf(dt)<0&&(N[dt]=je[dt]);if(je!=null&&ai)for(var dt of ai(je))ne.indexOf(dt)<0&&Ui.call(je,dt)&&(N[dt]=je[dt]);return N};(self.webpackChunk=self.webpackChunk||[]).push([[934],{40351:function(je,ne){"use strict";var N={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};ne.Z=N},37536:function(je,ne,N){(()=>{var dt={271:(u,x,g)=>{"use strict";g.d(x,{Z:()=>k});const k=(B,A)=>B?function(){for(var I=arguments.length,U=new Array(I),Ie=0;Ie<I;Ie++)U[Ie]=arguments[Ie];return console.log(`<${A}/> Debug Log: `,...U)}:()=>{}},88:(u,x,g)=>{"use strict";g.d(x,{Z:()=>Or});var k=g(497),B=g.n(k),A=g(379),I=g.n(A),U=g(795),Ie=g.n(U),ce=g(569),Fe=g.n(ce),D=g(565),z=g.n(D),a=g(216),Oe=g.n(a),P=g(589),Z=g.n(P),pe=g(563),Ze={};Ze.styleTagTransform=Z(),Ze.setAttributes=z(),Ze.insert=Fe().bind(null,"head"),Ze.domAPI=Ie(),Ze.insertStyleElement=Oe();var nr=I()(pe.Z,Ze);const at=pe.Z&&pe.Z.locals?pe.Z.locals:void 0;var en=g(271),or=g(542);function Ln(Tt,de){var fe=Object.keys(Tt);if(Object.getOwnPropertySymbols){var Je=Object.getOwnPropertySymbols(Tt);de&&(Je=Je.filter(function(be){return Object.getOwnPropertyDescriptor(Tt,be).enumerable})),fe.push.apply(fe,Je)}return fe}function lt(Tt){for(var de=1;de<arguments.length;de++){var fe=arguments[de]!=null?arguments[de]:{};de%2?Ln(Object(fe),!0).forEach(function(Je){Rr(Tt,Je,fe[Je])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Tt,Object.getOwnPropertyDescriptors(fe)):Ln(Object(fe)).forEach(function(Je){Object.defineProperty(Tt,Je,Object.getOwnPropertyDescriptor(fe,Je))})}return Tt}function Rr(Tt,de,fe){return de in Tt?Object.defineProperty(Tt,de,{value:fe,enumerable:!0,configurable:!0,writable:!0}):Tt[de]=fe,Tt}let ht;const Wr=Tt=>typeof Tt=="function",cr=(Tt,de)=>Tt.length!==de.length?!1:Tt.find(fe=>!de.includes(fe))==null,ve=["afterLoad","afterRender","afterResize","afterResponsive","afterSlideLoad","onLeave","onSlideLeave"];class Ke extends B().Component{constructor(de){super(de);const{render:fe,pluginWrapper:Je}=this.props;if(!Wr(fe))throw new Error("must provide render prop to <ReactFullpage />");this.log=(0,en.Z)(this.props.debug,"ReactFullpage"),this.log("Building component"),this.log("Importing vendor files"),this.importVendors(),Je&&(this.log("Calling plugin wrapper"),Je()),this.log("Requiring fullpage.js"),ht=g(933),this.state={initialized:!1,sectionCount:0,slideCount:0}}componentDidMount(){const de=this.buildOptions();this.log("React Lifecycle: componentDidMount()"),ht&&(this.init(de),this.markInitialized())}isReRenderNecessary(de){const fe=this.getSectionCount(),Je=this.getSlideCount(),{sectionCount:be,slideCount:wt}=this.state;let qe=be!==fe||wt!==Je;return["sectionsColor","navigationTooltips","navigationPosition","navigation","scrollBar"].forEach(It=>{typeof de[It]!="undefined"&&(Array.isArray(de[It])?qe=qe||!cr(de[It],this.props[It]):qe=qe||de[It]!==this.props[It])}),qe}componentDidUpdate(de){if(this.log("React Lifecycle: componentDidUpdate()"),this.isReRenderNecessary(de)){this.log("rebuilding due to a change in fullpage.js props or num sections/slides"),this.reRender();return}}componentWillUnmount(){this.destroy()}getSectionCount(){const{sectionSelector:de=or.uS}=this.props,{length:fe}=document.querySelectorAll(de);return fe}getSlideCount(){const{slideSelector:de=or.xH}=this.props,{length:fe}=document.querySelectorAll(de);return fe}importVendors(){const{easing:de,css3:fe}=this.props;de&&!fe&&g(239)}init(de){this.log("Reinitializing fullpage with options",de);const fe=de.animateAnchor;de.animateAnchor=!1,new ht(or.Km,de),this.fullpageApi=window.fullpage_api,this.fpUtils=window.fp_utils,this.fpEasings=window.fp_easings,window.fullpage_api.getFullpageData().options.animateAnchor=fe}destroy(){this.log("Destroying fullpage instance"),this.fullpageApi.destroy("all")}reRender(){const de=this.props.slideSelector||".slide",fe=this.props.sectionSelector||".section",Je=document.querySelector(fe+".active"),be=Je?this.fpUtils.index(Je):this.state.destination?this.state.destination.index-1:0,wt=document.querySelector(fe+".active "+de+".active"),qe=wt?this.fpUtils.index(wt):-1;this.destroy(),be>-1&&this.fpUtils.addClass(document.querySelectorAll(fe)[be],"active"),qe>-1&&this.fpUtils.addClass(wt,"active"),this.init(this.buildOptions())}markInitialized(){this.log("Marking initialized"),this.setState({initialized:!0,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()})}buildOptions(){var de=this;let fe=null;if(!this.state.initialized){const be=qe=>!!Object.keys(this.props).find(Xt=>Xt===qe);fe=ve.filter(be).reduce((qe,Xt)=>lt(lt({},qe),{},{[Xt]:function(){for(var It=arguments.length,ur=new Array(It),vt=0;vt<It;vt++)ur[vt]=arguments[vt];return de.update(Xt,...ur)}}),{})}const Je=lt(lt({},this.props),fe);return this.log("Building fullpage.js options: ",Je),Je}update(de){for(var fe=arguments.length,Je=new Array(fe>1?fe-1:0),be=1;be<fe;be++)Je[be-1]=arguments[be];this.log("Event trigger: ",de);let wt=lt(lt({},this.state),{},{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});const qe=ur=>lt(lt(lt({},wt),ur),{},{lastEvent:de}),Xt=ur=>ur.reduce((vt,ft,Nr)=>{const Sr=Je[Nr];return vt[ft]=Sr,vt},{});switch(de){case"afterLoad":wt=qe(Xt(["origin","destination","direction"]));break;case"afterResize":wt=qe(Xt([""]));break;case"afterResponsive":wt=qe(Xt(["isResponsive"]));break;case"afterSlideLoad":wt=qe(Xt(["section","origin","destination","direction"]));break;case"onLeave":wt=qe(Xt(["origin","destination","direction"]));break;case"onSlideLeave":wt=qe(Xt(["section","origin","slideIndex","destination","direction"]));break;default:break}const It=this.props[de](...Je);return this.log("Called callback: Returning => ",It),this.log("Updating State => ",wt),this.setState(wt),It}render(){return this.log("<== Rendering ==>"),B().createElement("div",{id:or.W1},this.props.render(this))}}Ke.defaultProps={sectionsColor:[]};const Or=Ke},882:(u,x,g)=>{"use strict";g.d(x,{Z:()=>Ie});var k=g(497),B=g.n(k),A=g(271),I=g(542);class U extends B().Component{constructor(Fe){super(Fe),this.state={},this.log=(0,A.Z)(this.props.debug,"ReactFullpageShell"),this.log("Building component")}render(){return B().createElement("div",{id:I.W1},this.props.render(this))}}const Ie=U},542:(u,x,g)=>{"use strict";g.d(x,{W1:()=>k,Km:()=>B,uS:()=>A,xH:()=>I});const k="fullpage",B=`#${k}`,A=".section",I=".SLIDE"},563:(u,x,g)=>{"use strict";g.d(x,{Z:()=>I});var k=g(645),B=g.n(k),A=B()(function(U){return U[1]});A.push([u.id,`/*!\r
 * fullPage 4.0.20\r
 * https://github.com/alvarotrigo/fullPage.js\r
 *\r
 * @license GPLv3 for open source use only\r
 * or Fullpage Commercial License for commercial use\r
 * http://alvarotrigo.com/fullPage/pricing/\r
 *\r
 * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r
 */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;display:block}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-table{display:flex;flex-direction:column;justify-content:center;width:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-prev{left:15px}.fp-next{right:15px}.fp-arrow{width:0;height:0;border-style:solid}.fp-arrow.fp-prev{border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-arrow.fp-next{border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-is-overflow.fp-section{height:auto!important}.fp-scrollable .fp-section,.fp-scrollable .fp-slide,.fp-scrollable.fp-responsive .fp-is-overflow.fp-section{height:100vh;height:calc(var(--vh,1vh) * 100)}.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]),.fp-scrollable.fp-responsive .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]){min-height:100vh;min-height:calc(var(--vh,1vh) * 100)}.fp-overflow{justify-content:flex-start;max-height:100vh}.fp-scrollable .fp-auto-height .fp-overflow{max-height:none}.fp-is-overflow .fp-overflow.fp-auto-height,.fp-is-overflow .fp-overflow.fp-auto-height-responsive,.fp-is-overflow>.fp-overflow{overflow-y:auto}.fp-overflow{outline:0}.fp-overflow.fp-table{display:block}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important;min-height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.fp-scroll-mac .fp-overflow::-webkit-scrollbar{background-color:transparent;width:9px}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track{background-color:transparent}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4);border-radius:16px;border:4px solid transparent}.fp-warning,.fp-watermark{z-index:9999999;position:absolute;bottom:0}.fp-warning,.fp-watermark a{text-decoration:none;color:#000;background:rgba(255,255,255,.6);padding:5px 8px;font-size:14px;font-family:arial;color:#000;display:inline-block;border-radius:3px;margin:12px}.fp-noscroll .fp-overflow{overflow:hidden}\r
`,""]);const I=A},645:u=>{"use strict";u.exports=function(x){var g=[];return g.toString=function(){return this.map(function(B){var A=x(B);return B[2]?"@media ".concat(B[2]," {").concat(A,"}"):A}).join("")},g.i=function(k,B,A){typeof k=="string"&&(k=[[null,k,""]]);var I={};if(A)for(var U=0;U<this.length;U++){var Ie=this[U][0];Ie!=null&&(I[Ie]=!0)}for(var ce=0;ce<k.length;ce++){var Fe=[].concat(k[ce]);A&&I[Fe[0]]||(B&&(Fe[2]?Fe[2]="".concat(B," and ").concat(Fe[2]):Fe[2]=B),g.push(Fe))}},g}},933:function(u){(function(x,g){u.exports=g()})(this,function(){"use strict";var x,g,k,B;Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(this==null)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(typeof e!="function")throw new TypeError("predicate must be a function");for(var l=arguments[1],p=0;p<o;){var C=n[p];if(e.call(l,C,p,n))return C;p++}}}),Array.from||(Array.from=(x=Object.prototype.toString,g=function(e){return typeof e=="function"||x.call(e)==="[object Function]"},k=Math.pow(2,53)-1,B=function(e){var n=function(o){var l=Number(o);return isNaN(l)?0:l!==0&&isFinite(l)?(l>0?1:-1)*Math.floor(Math.abs(l)):l}(e);return Math.min(Math.max(n,0),k)},function(e){var n=this,o=Object(e);if(e==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");var l,p=arguments.length>1?arguments[1]:void 0;if(p!==void 0){if(!g(p))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(l=arguments[2])}for(var C,E=B(o.length),te=g(n)?Object(new n(E)):new Array(E),G=0;G<E;)C=o[G],te[G]=p?l===void 0?p(C,G):p.call(l,C,G):C,G+=1;return te.length=E,te}));var A=window,I=document,U=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Ie=/(Mac|iPhone|iPod|iPad)/i.test(A.navigator.userAgent),ce="ontouchstart"in A||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,Fe=!!window.MSInputMethodContext&&!!document.documentMode,D={test:{},shared:{}};function z(e,n){A.console&&A.console[e]&&A.console[e]("fullPage: "+n)}function a(e){return A.getComputedStyle(e).display!=="none"}function Oe(e){return Array.from(e).filter(function(n){return a(n)})}function P(e,n){return(n=arguments.length>1?n:document)?n.querySelectorAll(e):null}function Z(e){e=e||{};for(var n=1,o=arguments.length;n<o;++n){var l=arguments[n];if(l)for(var p in l)l.hasOwnProperty(p)&&p!="__proto__"&&p!="constructor"&&(Object.prototype.toString.call(l[p])!=="[object Object]"?e[p]=l[p]:e[p]=Z(e[p],l[p]))}return e}function pe(e,n){return e!=null&&e.classList.contains(n)}function Ze(){return"innerHeight"in A?A.innerHeight:I.documentElement.offsetHeight}function nr(){return A.innerWidth}function at(e,n){var o;for(o in e=Rr(e),n)if(n.hasOwnProperty(o)&&o!==null)for(var l=0;l<e.length;l++)e[l].style[o]=n[o];return e}function en(e,n){if(!e)return null;if(n==null)return e.previousElementSibling;var o=en(e);return o&&Dt(o,n)?o:null}function or(e,n){if(!e)return null;if(n==null)return e.nextElementSibling;var o=or(e);return o&&Dt(o,n)?o:null}function Ln(e){return e[e.length-1]}function lt(e,n){e=cr(e)?e[0]:e;for(var o=n!=null?P(n,e.parentNode):e.parentNode.childNodes,l=0,p=0;p<o.length;p++){if(o[p]==e)return l;o[p].nodeType==1&&l++}return-1}function Rr(e){return cr(e)?e:[e]}function ht(e){e=Rr(e);for(var n=0;n<e.length;n++)e[n].style.display="none";return e}function Wr(e){e=Rr(e);for(var n=0;n<e.length;n++)e[n].style.display="block";return e}function cr(e){return Object.prototype.toString.call(e)==="[object Array]"||Object.prototype.toString.call(e)==="[object NodeList]"}function ve(e,n){e=Rr(e);for(var o=0;o<e.length;o++)e[o].classList.add(n);return e}function Ke(e,n){e=Rr(e);for(var o=n.split(" "),l=0;l<o.length;l++){n=o[l];for(var p=0;p<e.length;p++)e[p].classList.remove(n)}return e}function Or(e,n){n.appendChild(e)}function Tt(e,n,o){var l;n=n||I.createElement("div");for(var p=0;p<e.length;p++){var C=e[p];(o&&!p||!o)&&(l=n.cloneNode(!0),C.parentNode.insertBefore(l,C)),l.appendChild(C)}return e}function de(e,n){Tt(e,n,!0)}function fe(e,n){for(typeof n=="string"&&(n=Vr(n)),e.appendChild(n);e.firstChild!==n;)n.appendChild(e.firstChild)}function Je(e){for(var n=I.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function be(e,n){return e&&e.nodeType===1?Dt(e,n)?e:be(e.parentNode,n):null}function wt(e,n){Xt(e,e.nextSibling,n)}function qe(e,n){Xt(e,e,n)}function Xt(e,n,o){cr(o)||(typeof o=="string"&&(o=Vr(o)),o=[o]);for(var l=0;l<o.length;l++)e.parentNode.insertBefore(o[l],n)}function It(){var e=I.documentElement;return(A.pageYOffset||e.scrollTop)-(e.clientTop||0)}function ur(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}function vt(e){e.preventDefault()}function ft(e,n){return e.getAttribute(n)}function Nr(e,n,o){I.addEventListener(e,n,o==="undefined"?null:o)}function Sr(e,n,o){A.addEventListener(e,n,o==="undefined"?null:o)}function $r(e,n,o){I.removeEventListener(e,n,o==="undefined"?null:o)}function Cr(e,n,o){A.removeEventListener(e,n,o==="undefined"?null:o)}function Lt(e){if(typeof e=="function")return!0;var n=Object.prototype.toString.call(e);return n==="[object Function]"||n==="[object GeneratorFunction]"}function Kt(e,n,o){var l;o=o===void 0?{}:o,typeof A.CustomEvent=="function"?l=new CustomEvent(n,{detail:o}):(l=I.createEvent("CustomEvent")).initCustomEvent(n,!0,!0,o),e.dispatchEvent(l)}function Dt(e,n){return(e.matches||e.t||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,n)}function bn(e,n){if(typeof n=="boolean")for(var o=0;o<e.length;o++)e[o].style.display=n?"block":"none";return e}function Vr(e){var n=I.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function tn(e){e=Rr(e);for(var n=0;n<e.length;n++){var o=e[n];o&&o.parentElement&&o.parentNode.removeChild(o)}}function jn(e,n){Array.prototype.filter.call(e,n)}function un(e,n,o){for(var l=e[o],p=[];l;)(Dt(l,n)||n==null)&&p.push(l),l=l[o];return p}function Fn(e,n){return un(e,n,"nextElementSibling")}function yn(e,n){return un(e,n,"previousElementSibling")}function Zn(e){return Object.keys(e).map(function(n){return e[n]})}function kr(e){return e[e.length-1]}function rn(e,n){for(var o=0,l=e.slice(Math.max(e.length-n,1)),p=0;p<l.length;p++)o+=l[p];return Math.ceil(o/n)}function xn(e,n){e.setAttribute(n,ft(e,"data-"+n)),e.removeAttribute("data-"+n)}function Wn(e,n){var o=[e];do e=e.parentNode,o.push(e);while(!Dt(e,n));return o}function Rn(){var e=I.activeElement;return Dt(e,"textarea")||Dt(e,"input")||Dt(e,"select")||ft(e,"contentEditable")=="true"||ft(e,"contentEditable")==""}A.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,n){n=n||window;for(var o=0;o<this.length;o++)e.call(n,this[o],o,this)}),typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(e,n){if(e==null)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(e),l=1;l<arguments.length;l++){var p=arguments[l];if(p!=null)for(var C in p)Object.prototype.hasOwnProperty.call(p,C)&&(o[C]=p[C])}return o},writable:!0,i:!0}),window.fp_utils={$:P,deepExtend:Z,hasClass:pe,getWindowHeight:Ze,css:at,prev:en,next:or,last:Ln,index:lt,getList:Rr,hide:ht,show:Wr,isArrayOrList:cr,addClass:ve,removeClass:Ke,appendTo:Or,wrap:Tt,wrapAll:de,wrapInner:fe,unwrap:Je,closest:be,after:wt,before:qe,insertBefore:Xt,getScrollTop:It,siblings:ur,preventDefault:vt,isFunction:Lt,trigger:Kt,matches:Dt,toggle:bn,createElementFromHTML:Vr,remove:tn,filter:jn,untilAll:un,nextAll:Fn,prevAll:yn,showError:z};var no=Object.freeze({__proto__:null,showError:z,isVisible:a,getVisible:Oe,$:P,deepExtend:Z,hasClass:pe,getWindowHeight:Ze,o:nr,css:at,prev:en,next:or,last:Ln,index:lt,getList:Rr,hide:ht,show:Wr,isArrayOrList:cr,addClass:ve,removeClass:Ke,appendTo:Or,wrap:Tt,wrapAll:de,wrapInner:fe,unwrap:Je,closest:be,after:wt,before:qe,insertBefore:Xt,getScrollTop:It,siblings:ur,preventDefault:vt,l:ft,u:Nr,v:Sr,p:$r,h:Cr,isFunction:Lt,trigger:Kt,matches:Dt,toggle:bn,createElementFromHTML:Vr,remove:tn,filter:jn,untilAll:un,nextAll:Fn,prevAll:yn,toArray:Zn,g:kr,S:rn,M:xn,T:Wn,A:Rn});function dn(e){return dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},dn(e)}var X={O:{},R:function(e,n){var o=this;return dn(this.O[e])!=="object"&&(this.O[e]=[]),this.O[e].push(n),function(){return o.removeListener(e,n)}},removeListener:function(e,n){if(dn(this.O[e])==="object"){var o=this.O[e].indexOf(n);o>-1&&this.O[e].splice(o,1)}},L:function(e){for(var n=this,o=arguments.length,l=new Array(o>1?o-1:0),p=1;p<o;p++)l[p-1]=arguments[p];dn(this.O[e])==="object"&&this.O[e].forEach(function(C){return C.apply(n,l)})},once:function(e,n){var o=this,l=this.R(e,function(){l();for(var p=arguments.length,C=new Array(p),E=0;E<p;E++)C[E]=arguments[E];n.apply(o,C)})}},T={j:0,D:0,slides:[],N:[],P:null,H:null,C:!1,I:!1,W:!1,F:!1,V:!1,Z:void 0,B:void 0,G:!1,canScroll:!0,Y:"none",U:"none",X:!1,_:!1,J:!0,K:0,q:Ze(),nn:!1,tn:{}};function K(e){Object.assign(T,e)}function j(){return T}A.state=T;var Pr="onAfterRenderNoAnchor",wn="onClickOrTouch",nn="moveSlideLeft",Vn="moveSlideRight",wo="onInitialise",dr="bindEvents",vr="onDestroy",_n="contentChanged",On="onScrollOverflowScrolled",An="onScrollPageAndSlide",Sn="onKeyDown",kn="onMenuClick",Mn="scrollPage",oo="landscapeScroll",Un="scrollBeyondFullpage",Qn="onPerformMovement",_r="onSlideLeave",Ao="onLeave",Gn="afterSectionLoads",fn="afterSlideLoads";function Yn(e){X.L(wn,{e,target:e.target})}function Xn(){["click","touchstart"].forEach(function(e){$r(e,Yn,{passive:!1})})}function So(){K({J:!0})}X.R(dr,function(){["click","touchstart"].forEach(function(e){Nr(e,Yn,{passive:!1})}),Sr("focus",So),X.R(vr,Xn)});var Kn="fullpage-wrapper",pn="."+Kn,Jn="fp-responsive",qn="fp-notransition",io="fp-destroyed",hn="fp-enabled",$t="active",d=".active",y="fp-completely",f="fp-section",b="."+f,R=".fp-tableCell",H="#fp-nav",W="fp-slide",ee="."+W,De=".fp-slide.active",le="fp-slides",we=".fp-slides",Ve="fp-slidesContainer",st="."+Ve,At="fp-table",Be="fp-overflow",Qe="."+Be,ke="fp-is-overflow",gt=".fp-slidesNav",Ge=".fp-slidesNav a",Bt="fp-controlArrow",St="."+Bt,Rt="fp-prev",Mr=".fp-controlArrow.fp-prev",on=".fp-controlArrow.fp-next",fr={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,en:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="fp-arrow"></div>','<div class="fp-arrow"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0},gr=null,zr=!1,Ur=Z({},fr),ir=null;function q(e){return gr}function c(){return ir||fr}function jt(){return Ur}function Qr(e,n,o){ir[e]=n,o!=="internal"&&(Ur[e]=n)}function Er(){if(!c().anchors.length){var e=P(c().sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",gr);e.length&&e.length===P(c().sectionSelector,gr).length&&(zr=!0,e.forEach(function(o){c().anchors.push(ft(o,"data-anchor").toString())}))}if(!c().navigationTooltips.length){var n=P(c().sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",gr);n.length&&n.forEach(function(o){c().navigationTooltips.push(ft(o,"data-tooltip").toString())})}}function wr(e){return window["fp_"+e+"Extension"]!==void 0}function pt(e){var n=c();return n[e]!==null&&Object.prototype.toString.call(n[e])==="[object Array]"?n[e].length&&D[e]:n[e]&&D[e]}function se(e,n,o){if(pt(e))return Lt(D[e][n])?D[e][n](o):D[e][n]}function Gr(){return se("dragAndMove","isAnimating")}function ie(){return se("dragAndMove","isGrabbing")}function J(e){if(c().offsetSections&&D.offsetSections){var n=se("offsetSections","getWindowHeight",e);return n!==""?Math.round(n)+"px":n}return Ze()+"px"}function oe(e,n){e.insertBefore(n,e.firstChild)}function ae(e){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(p){var C,E,te,G,Ee,Xe,Se="",bt=0;for(p=p.replace(/[^A-Za-z0-9+/=]/g,"");bt<p.length;)C=n.indexOf(p.charAt(bt++))<<2|(G=n.indexOf(p.charAt(bt++)))>>4,E=(15&G)<<4|(Ee=n.indexOf(p.charAt(bt++)))>>2,te=(3&Ee)<<6|(Xe=n.indexOf(p.charAt(bt++))),Se+=String.fromCharCode(C),Ee!=64&&(Se+=String.fromCharCode(E)),Xe!=64&&(Se+=String.fromCharCode(te));return Se=function(Pt){for(var yr,hr="",zt=0,Ht=0,nt=0;zt<Pt.length;)(Ht=Pt.charCodeAt(zt))<128?(hr+=String.fromCharCode(Ht),zt++):Ht>191&&Ht<224?(nt=Pt.charCodeAt(zt+1),hr+=String.fromCharCode((31&Ht)<<6|63&nt),zt+=2):(nt=Pt.charCodeAt(zt+1),yr=Pt.charCodeAt(zt+2),hr+=String.fromCharCode((15&Ht)<<12|(63&nt)<<6|63&yr),zt+=3);return hr}(Se),Se}function l(p){return p.slice(3).slice(0,-3)}return function(p){var C=p.split("_");if(C.length>1){var E=C[1];return o(p.replace(l(C[1]),"").split("_")[0].slice(2).slice(0,-2))+"_"+o(E.slice(3).slice(0,-3))}return l(p)}(o(e))}A.fp_utils=A.fp_utils||{},Object.assign(A.fp_utils,{prependTo:oe,toggleClass:function(e,n,o){if(e.classList&&o==null)e.classList.toggle(n);else{var l=pe(e,n);l&&o==null||!o?Ke(e,n):(!l&&o==null||o)&&ve(e,n)}}});var S=function(e){this.anchor=e.anchor,this.item=e.item,this.index=e.index(),this.isLast=this.index===e.item.parentElement.querySelectorAll(e.selector).length-1,this.isFirst=!this.index,this.isActive=e.isActive},Le=function(e,n){this.parent=this.parent||null,this.selector=n,this.anchor=ft(e,"data-anchor")||c().anchors[lt(e,c().sectionSelector)],this.item=e,this.isVisible=a(e),this.isActive=pe(e,$t),this.on=pe(e,Be)||P(Qe,e)[0]!=null,this.rn=n===c().sectionSelector,this.container=be(e,st)||be(e,pn),this.index=function(){return this.siblings().indexOf(this)}};function V(e){return e.map(function(n){return n.item})}function Ct(e,n){return e.find(function(o){return o.item===n})}Le.prototype.siblings=function(){return this.rn?this.isVisible?T.N:T.an:this.parent?this.parent.slides:0},Le.prototype.prev=function(){var e=this.siblings(),n=(this.rn?e.indexOf(this):this.parent.slides.indexOf(this))-1;return n>=0?e[n]:null},Le.prototype.next=function(){var e=this.siblings(),n=(this.rn?e.indexOf(this):this.parent.slides.indexOf(this))+1;return n<e.length?e[n]:null},Le.prototype.prevPanel=function(){return this===this.prev()?this.parent?this.parent.prev():null:this.prev()||(this.parent?this.parent.prev():null)},Le.prototype.nextPanel=function(){return this===this.next()?this.parent?this.parent.next():null:this.next()||(this.parent?this.parent.next():null)},Le.prototype.ln=function(){return this.rn?T.N:T.un};var tt,ot=function(e){S.call(this,e)},Ce=function(e){S.call(this,e)};function ct(e){var n=P(De,e);return n.length&&(e=n[0]),e}function ar(e){return e?e.activeSlide?e.activeSlide:e:null}function Ne(e){var n,o,l=c();return l.autoScrolling&&!l.scrollBar?(n=-e,o=P(pn)[0]):(n=e,o=window),{options:n,element:o}}function Jt(e,n){!c().autoScrolling||c().scrollBar||e.self!=window&&pe(e,le)?e.self!=window&&pe(e,le)?e.scrollLeft=n:e.scrollTo(0,n):e.style.top=n+"px"}function Ue(e){var n="transform "+c().scrollingSpeed+"ms "+c().easingcss3;return Ke(e,qn),at(e,{"-webkit-transition":n,transition:n})}function Mt(e,n){var o=e.index(),l=lt(n,b);return o==l?"none":o>l?"up":"down"}function Hr(e){return ve(e,qn)}function Ft(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function En(e,n){n?Ue(q()):Hr(q()),clearTimeout(tt),at(q(),Ft(e)),D.test.cn=e,tt=setTimeout(function(){Ke(q(),qn)},10)}function Tr(e){var n=Math.round(e);if(c().css3&&c().autoScrolling&&!c().scrollBar)En("translate3d(0px, -"+n+"px, 0px)",!1);else if(c().autoScrolling&&!c().scrollBar)at(q(),{top:-n+"px"}),D.test.top=-n+"px";else{var o=Ne(n);Jt(o.element,o.options)}}function qt(e,n){n!=="internal"&&se("fadingEffect","update",e),se("cards","update_",e),Qr("scrollingSpeed",e,n)}D.setScrollingSpeed=qt;var he,xe=null,an=null,vn=null;function Ir(e,n,o,l){var p,C=function(Ee){return Ee.self!=A&&pe(Ee,le)?Ee.scrollLeft:!c().autoScrolling||c().scrollBar?It():Ee.offsetTop}(e),E=n-C,te=!1,G=T.G;K({G:!0}),he&&window.cancelAnimationFrame(he),he=function(Ee){p||(p=Ee);var Xe=Math.floor(Ee-p);if(T.G){var Se=n;o&&(Se=A.fp_easings[c().easing](Xe,C,E,o)),Xe<=o&&Jt(e,Se),Xe<o?window.requestAnimationFrame(he):l===void 0||te||(l(),K({G:!1}),te=!0)}else te||G||(l(),K({G:!1}),te=!0)},window.requestAnimationFrame(he)}function gn(e){return e&&!e.item?new ot(new zn(e)):e?new ot(e):null}function Dn(e){return e?new Ce(e):null}function Lr(e,n){var o=function(l,p){var C={afterRender:function(){return{section:gn(j().P),sn:Dn(j().P.activeSlide)}},onLeave:function(){return{origin:gn(p.items.origin),destination:gn(p.items.destination),direction:p.direction,trigger:j().H}},afterLoad:function(){return C.onLeave()},afterSlideLoad:function(){return{section:gn(p.items.section),origin:gn(p.items.origin),destination:gn(p.items.destination),direction:p.direction,trigger:j().H}},onSlideLeave:function(){return C.afterSlideLoad()},beforeLeave:function(){return C.onLeave()},onScrollOverflow:function(){return{section:gn(j().P),sn:Dn(j().P.activeSlide),position:p.position,direction:p.direction}}};return C[l]()}(e,n);return Kt(q(),e,o),c()[e].apply(o[Object.keys(o)[0]],Zn(o))!==!1}function ao(e){var n=ct(e);P("video, audio",n).forEach(function(o){o.hasAttribute("data-autoplay")&&typeof o.play=="function"&&o.play()}),P('iframe[src*="youtube.com/embed/"]',n).forEach(function(o){o.hasAttribute("data-autoplay")&&jo(o),o.onload=function(){o.hasAttribute("data-autoplay")&&jo(o)}})}function jo(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function lo(e){var n=ct(e);P("video, audio",n).forEach(function(o){o.hasAttribute("data-keepplaying")||typeof o.pause!="function"||o.pause()}),P('iframe[src*="youtube.com/embed/"]',n).forEach(function(o){/youtube\.com\/embed\//.test(ft(o,"src"))&&!o.hasAttribute("data-keepplaying")&&o.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Bn(e){c().lazyLoading&&P("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",ct(e)).forEach(function(n){if(["src","srcset"].forEach(function(l){var p=ft(n,"data-"+l);p!=null&&p&&(xn(n,l),n.addEventListener("load",function(){}))}),Dt(n,"source")){var o=be(n,"video, audio");o&&(o.load(),o.onloadeddata=function(){})}})}function Fo(){var e=j().P.item,n=j().P.activeSlide,o=Zo(e),l=String(o);n&&(l=l+"-"+Zo(n.item)),l=l.replace("/","-").replace("#","");var p=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");xe.className=xe.className.replace(p,""),ve(xe,"fp-viewing-"+l)}function Zo(e){if(!e)return null;var n=ft(e,"data-anchor"),o=lt(e);return n==null&&(n=o),n}function mn(e,n,o){var l="";c().anchors.length&&!c().lockAnchors&&(e?(o!=null&&(l=o),n==null&&(n=e),K({B:n}),ko(l+"/"+n)):(e!=null&&K({B:n}),ko(o))),Fo()}function ko(e){if(c().recordHistory)location.hash=e;else if(U||ce)A.history.replaceState(void 0,void 0,"#"+e);else{var n=A.location.href.split("#")[0];A.location.replace(n+"#"+e)}}function Wo(e,n,o){var l=n==="Section"?c().anchors[e]:ft(o,"data-anchor");return encodeURI(c().navigationTooltips[e]||l||n+" "+(e+1))}function li(e){e.cancelable&&vt(e),K({H:"horizontalNav"});var n=be(this,b),o=P(we,be(this,b))[0],l=Ct(j().N,n).slides[lt(be(this,"li"))];X.L(oo,{slides:o,destination:l.item})}function Vo(e,n){c().slidesNavigation&&e!=null&&(Ke(P(d,e),$t),ve(P("a",P("li",e)[n]),$t))}var so,$n={};function co(e,n,o){n!=="all"?$n[o][n]=e:Object.keys($n[o]).forEach(function(l){$n[o][l]=e})}function lr(){return $n}function si(){var e=be(this,b);pe(this,Rt)?lr().m.left&&(K({H:"slideArrow"}),X.L(nn,{section:e})):lr().m.right&&(K({H:"slideArrow"}),X.L(Vn,{section:e}))}function _o(e){!c().loopHorizontal&&c().controlArrows&&(bn(P(Mr,e.section),e.slideIndex!==0),bn(P(on,e.section),or(e.destiny)!=null))}function ci(){clearTimeout(so),K({W:!1})}function Cn(e,n,o){var l=be(e,b),p=j().N.filter(function(te){return te.item==l})[0],C=p.slides.filter(function(te){return te.item==n})[0],E={slides:e,destiny:n,direction:o,destinyPos:{left:n.offsetLeft},slideIndex:C.index(),section:l,sectionIndex:p.index(),anchorLink:p.anchor,slidesNav:P(gt,l)[0],slideAnchor:C.anchor,prevSlide:p.activeSlide.item,prevSlideIndex:p.activeSlide.index(),items:{section:p,origin:p.activeSlide,destination:C},localIsResizing:T.F};E.xMovement=Qo(E.prevSlideIndex,E.slideIndex),E.direction=E.direction?E.direction:E.xMovement,E.localIsResizing||K({canScroll:!1}),se("parallax","applyHorizontal",E),se("cards","apply",E),se("dropEffect","apply",E),se("waterEffect","apply",E),c().onSlideLeave&&!E.localIsResizing&&E.xMovement!=="none"&&Lt(c().onSlideLeave)&&Lr("onSlideLeave",E)===!1?K({W:!1}):(pt("dropEffect")&&c().dropEffect||(ve(n,$t),Ke(ur(n),$t)),ln(),E.localIsResizing||(lo(E.prevSlide),Bn(n)),_o(E),p.isActive&&!E.localIsResizing&&mn(E.slideIndex,E.slideAnchor,E.anchorLink),se("continuousHorizontal","apply",E),X.L(_r,E),ie()?Eo(E):Uo(e,E,!0),c().interlockedSlides&&D.interlockedSlides&&(pt("continuousHorizontal")&&o!==void 0&&o!==E.xMovement||se("interlockedSlides","apply",E)))}function Uo(e,n,o){var l=n.destinyPos;if(Vo(n.slidesNav,n.slideIndex),K({scrollX:Math.round(l.left)}),c().css3){var p="translate3d(-"+Math.round(l.left)+"px, 0px, 0px)";D.test.dn[n.sectionIndex]=p,pt("dragAndMove")&&n.vn!==void 0||Ue(P(st,e)),at(P(st,e),Ft(p)),pt("interlockedSlides")||clearTimeout(so),so=setTimeout(function(){o&&Eo(n)},c().scrollingSpeed)}else D.test.left[n.sectionIndex]=Math.round(l.left),Ir(e,Math.round(l.left),c().scrollingSpeed,function(){o&&Eo(n)})}function Qo(e,n){return e==n?"none":e>n?"left":"right"}function ui(){clearTimeout(so)}function Eo(e){se("continuousHorizontal","afterSlideLoads",e),se("dragAndMove","afterSlideLoads",e),e.localIsResizing||(se("parallax","afterSlideLoads"),se("scrollOverflowReset","setPrevious",e.prevSlide),se("scrollOverflowReset","reset"),Lt(c().afterSlideLoad)&&Lr("afterSlideLoad",e),K({canScroll:!0}),ao(e.destiny),X.L(fn,e)),K({W:!1}),se("interlockedSlides","interlockedSlides",e)}function eo(e,n){qt(0,"internal"),n!==void 0&&K({F:!0}),Cn(be(e,we),e),n!==void 0&&K({F:!1}),qt(jt().scrollingSpeed,"internal")}function $o(e,n){Qr("recordHistory",e,n)}function Nn(e,n){e||Tr(0),Qr("autoScrolling",e,n);var o=j().P.item;if(c().autoScrolling&&!c().scrollBar)at(vn,{overflow:"hidden",height:"100%"}),Ke(xe,"fp-scrollable"),$o(jt().recordHistory,"internal"),at(q(),{"-ms-touch-action":"none","touch-action":"none"}),o!=null&&Tr(o.offsetTop);else if(at(vn,{overflow:"visible",height:"initial"}),ve(xe,"fp-scrollable"),$o(!!c().autoScrolling&&jt().recordHistory,"internal"),at(q(),{"-ms-touch-action":"","touch-action":""}),Hr(q()),o!=null){var l=Ne(o.offsetTop);l.element.scrollTo(0,l.options)}Kt(q(),"setAutoScrolling",e)}function Co(){for(var e=P(De),n=0;n<e.length;n++)eo(e[n],"internal")}function Go(){var e=P(".fp-auto-height")[0]||go()&&P(".fp-auto-height-responsive")[0];c().lazyLoading&&e&&P(".fp-section:not(.active)").forEach(function(n){var o,l,p,C,E;l=(o=n.getBoundingClientRect()).top,p=o.bottom,C=l+2<T.q&&l>0,E=p>2&&p<T.q,(C||E)&&Bn(n)})}function di(){Kt(en(this),"click")}function Yo(){tn(P(H));var e=I.createElement("div");e.setAttribute("id","fp-nav");var n=I.createElement("ul");e.appendChild(n),Or(e,xe);var o=P(H)[0];ve(o,"fp-"+c().navigationPosition),c().showActiveTooltip&&ve(o,"fp-show-active");for(var l="",p=0;p<j().N.length;p++){var C=j().N[p],E="";c().anchors.length&&(E=C.anchor),l+='<li><a href="#'+encodeURI(E)+'"><span class="fp-sr-only">'+Wo(C.index(),"Section")+"</span><span></span></a>";var te=c().navigationTooltips[C.index()];te!==void 0&&te!==""&&(l+='<div class="fp-tooltip fp-'+c().navigationPosition+'">'+te+"</div>"),l+="</li>"}P("ul",o)[0].innerHTML=l;var G=P("li",P(H)[0])[j().P.index()];ve(P("a",G),$t)}function fi(e){e.preventDefault&&vt(e),K({H:"verticalNav"});var n=lt(be(this,"#fp-nav li"));X.L(Mn,{destination:j().N[n]})}function Po(e,n){var o;o=e,c().menu&&c().menu.length&&P(c().menu).forEach(function(l){l!=null&&(Ke(P(d,l),$t),ve(P('[data-menuanchor="'+o+'"]',l),$t))}),function(l,p){var C=P(H)[0];c().navigation&&C!=null&&C.style.display!=="none"&&(Ke(P(d,C),$t),ve(l?P('a[href="#'+l+'"]',C):P("a",P("li",C)[p]),$t))}(e,n)}$n.m={up:!0,down:!0,left:!0,right:!0},$n.k=Z({},$n.m),X.R(wn,function(e){var n=e.target;(Dt(n,St)||be(n,St))&&si.call(n,e)}),D.landscapeScroll=Cn,X.R(dr,function(){X.R(Qn,ci)}),D.setRecordHistory=$o,D.setAutoScrolling=Nn,D.test.setAutoScrolling=Nn,new Date().getTime();var To,uo,fo,Io,to,Lo,pi=(uo=!0,fo=new Date().getTime(),Io=!A.fullpage_api,function(e,n){var o=new Date().getTime(),l=e==="wheel"?c().scrollingSpeed:100;return uo=Io||o-fo>=l,Io=!A.fullpage_api,uo&&(To=n(),fo=o),To===void 0||To});function po(e,n){if(Lt(c().beforeLeave))return pi(j().H,function(){return Lr(e,n)})}function Pn(e,n,o){var l=e.item;if(l!=null){var p,C,E={element:l,callback:n,isMovementUp:o,dtop:Xo(l),yMovement:Mt(j().P,l),anchorLink:e.anchor,sectionIndex:e.index(),activeSlide:e.activeSlide?e.activeSlide.item:null,leavingSection:j().P.index()+1,localIsResizing:T.F,items:{origin:j().P,destination:e},direction:null};if(!(j().P.item==l&&!T.F||c().scrollBar&&It()===E.dtop&&!pe(l,"fp-auto-height"))){if(E.activeSlide!=null&&(p=ft(E.activeSlide,"data-anchor"),C=lt(E.activeSlide,null)),!E.localIsResizing){var te=E.yMovement;if(o!==void 0&&(te=o?"up":"down"),E.direction=te,wr("dropEffect")&&D.dropEffect.onLeave_(E),wr("waterEffect")&&D.waterEffect.onLeave_(E),Lt(c().beforeLeave)&&po("beforeLeave",E)===!1||Lt(c().onLeave)&&!Lr("onLeave",E))return}se("parallax","apply",E),se("cards","apply",E),se("dropEffect","apply",E),se("waterEffect","apply",E),c().autoScrolling&&c().continuousVertical&&E.isMovementUp!==void 0&&(!E.isMovementUp&&E.yMovement=="up"||E.isMovementUp&&E.yMovement=="down")&&(E=function(G){K({nn:!0});var Ee=j().P.item;return G.isMovementUp?qe(Ee,Fn(Ee,b)):wt(Ee,yn(Ee,b).reverse()),Tr(j().P.item.offsetTop),Co(),G.pn=Ee,G.dtop=G.element.offsetTop,G.yMovement=Mt(j().P,G.element),G.leavingSection=G.items.origin.index()+1,G.sectionIndex=G.items.destination.index(),Kt(q(),"onContinuousVertical",G),G}(E)),se("scrollOverflowReset","setPrevious",j().P.item),E.localIsResizing||lo(j().P.item),pt("dropEffect")&&c().dropEffect||(ve(l,$t),Ke(ur(l),$t)),ln(),Bn(l),K({canScroll:D.test.hn}),mn(C,p,E.anchorLink),X.L(Ao,E),function(G){var Ee=c().scrollingSpeed<700,Xe=Ee?700:c().scrollingSpeed;if(K({Y:"none",scrollY:Math.round(G.dtop)}),X.L(Qn),c().css3&&c().autoScrolling&&!c().scrollBar)En("translate3d(0px, -"+Math.round(G.dtop)+"px, 0px)",!0),pt("waterEffect")&&Co(),c().scrollingSpeed?(clearTimeout(to),to=setTimeout(function(){ho(G),K({canScroll:!Ee||D.test.hn})},c().scrollingSpeed)):ho(G);else{var Se=Ne(G.dtop);D.test.top=-G.dtop+"px",clearTimeout(to),Ir(Se.element,Se.options,c().scrollingSpeed,function(){c().scrollBar?to=setTimeout(function(){ho(G)},30):(ho(G),K({canScroll:!Ee||D.test.hn}))})}Ee&&(clearTimeout(Lo),Lo=setTimeout(function(){K({canScroll:!0})},Xe))}(E),K({Z:E.anchorLink}),Po(E.anchorLink,function(G){return G.pn!=null?G.isMovementUp?T.j-1:0:G.sectionIndex}(E))}}}function Xo(e){var n=e.offsetHeight,o=e.offsetTop,l=o,p=pt("dragAndMove")&&se("dragAndMove","isGrabbing")?se("dragAndMove","isScrollingDown"):o>T.K,C=l-Ze()+n,E=c().bigSectionsDestination;return n>Ze()?(p||E)&&E!=="bottom"||(l=C):(p||T.F&&or(e)==null)&&(l=C),pt("offsetSections")&&(l=D.offsetSections.getSectionPosition_(p,l,e)),K({K:l}),l}function ho(e){K({C:!1}),function(n){n.pn!=null&&(n.isMovementUp?qe(P(b)[0],n.pn):wt(P(b)[j().N.length-1],n.pn),Tr(j().P.item.offsetTop),function(){for(var o=P(De),l=0;l<o.length;l++)eo(o[l],"internal")}(),n.sectionIndex=n.items.destination.index(),n.leavingSection=n.items.origin.index()+1,K({nn:!1}))}(e),Lt(c().afterLoad)&&!e.localIsResizing&&Lr("afterLoad",e),se("parallax","afterLoad"),se("waterEffect","afterLoad"),se("dropEffect","afterLoad"),se("scrollOverflowReset","reset"),se("resetSliders","apply",e),ln(),e.localIsResizing||ao(e.element),ve(e.element,y),Ke(ur(e.element),y),Go(),K({canScroll:!0}),X.L(Gn,e),Lt(e.callback)&&e.callback()}function Ro(e,n){Qr("fitToSection",e,n)}function Ko(){T.canScroll&&(K({F:!0}),Pn(T.P),K({F:!1}))}function Oo(){var e=c().responsive||c().responsiveWidth,n=c().responsiveHeight,o=e&&A.innerWidth<e,l=n&&A.innerHeight<n;e&&n?vo(o||l):e?vo(o):n&&vo(l)}function vo(e){var n=go();e?n||(Nn(!1,"internal"),Ro(!1,"internal"),ht(P(H)),ve(xe,Jn),Lt(c().afterResponsive)&&c().afterResponsive.call(q(),e),se("responsiveSlides","toSections"),Kt(q(),"afterResponsive",e)):n&&(Nn(jt().autoScrolling,"internal"),Ro(jt().autoScrolling,"internal"),Wr(P(H)),Ke(xe,Jn),Lt(c().afterResponsive)&&c().afterResponsive.call(q(),e),se("responsiveSlides","toSlides"),Kt(q(),"afterResponsive",e))}function go(){return pe(xe,Jn)}function Mo(e){c().verticalCentered&&(!c().scrollOverflow&&Ae.gn(e.item)||Ae.mn(e)||pe(e.item,At)||ve(e.item,At))}D.moveTo=moveTo,D.getScrollY=function(){return T.scrollY},X.R(vr,function(){clearTimeout(to),clearTimeout(Lo)}),D.setFitToSection=Ro,D.fitToSection=Ko,D.setResponsive=vo;var mo,Jo=null;function Do(e){var n=e.item,o=e.wn.length,l=e.index();!j().P&&e.isVisible&&(ve(n,$t),ln(),Jo=j().P.item),pt("offsetSections")&&at(n,{height:J(n)}),c().paddingTop&&at(n,{"padding-top":c().paddingTop}),c().paddingBottom&&at(n,{"padding-bottom":c().paddingBottom}),c().sectionsColor[l]!==void 0&&at(n,{"background-color":c().sectionsColor[l]}),c().anchors[l]!==void 0&&n.setAttribute("data-anchor",e.anchor),o||Mo(e)}function hi(){c().scrollOverflow&&!c().scrollBar&&(Ae.bn(),Ae.Sn())}function Pi(){X.removeListener(Pr,hi),$r("keyup",Ae.yn)}D.getActiveSection=function(){return j().P},X.R(dr,function(){X.R(Pr,hi),X.R(Ao,Ae.onLeave),X.R(_r,Ae.onLeave),X.R(fn,Ae.afterLoad),X.R(Gn,Ae.afterLoad),X.R(vr,Pi),Nr("keyup",Ae.yn)});var qo,Ae={Mn:null,Tn:!0,An:!0,xn:null,On:null,kn:function(e){if(!T.canScroll)return vt(e),!1},En:function(e){if(!Rn()&&c().keyboardScrolling&&[38,33,32,40,34,36,35].indexOf(e.keyCode)>-1&&!Ae.An)return vt(e),!1},yn:function(){Ae.Tn=T.canScroll},onLeave:function(){clearTimeout(mo),Ae.An=!1},afterLoad:function(){Ae.An=!1,clearTimeout(mo),mo=setTimeout(function(){Ae.Tn=T.canScroll},200)},Rn:function(){I.activeElement===this.Mn&&(this.Mn.blur(),Ae.An=!1)},Sn:function(){if(c().scrollOverflow&&Ae.Tn){Ae.Rn();var e=Ae.Ln(j().P.item);!e||U||ce||(this.Mn=e,requestAnimationFrame(function(){e.focus(),Ae.An=!0})),Ae.Tn=!1}},bn:function(){c().scrollOverflowMacStyle&&!Ie&&ve(xe,"fp-scroll-mac"),j().un.forEach(function(e){if(!(e.slides&&e.slides.length||pe(e.item,"fp-auto-height-responsive")&&go())){var n,o=ct(e.item),l=Ae.gn(e.item),p=(n=e).rn?n:n.parent;if(Fe){var C=l?"addClass":"removeClass";no[C](p.item,ke),no[C](e.item,ke)}else ve(p.item,ke),ve(e.item,ke);e.on||(Ae.jn(o),Ae.zn(o)),e.on=!0}})},zn:function(e){Ae.Ln(e).addEventListener("scroll",Ae.Dn),e.addEventListener("wheel",Ae.kn,{passive:!1}),e.addEventListener("keydown",Ae.En,{passive:!1})},jn:function(e){var n=document.createElement("div");n.className=Be,fe(e,n),n.setAttribute("tabindex","-1")},Nn:function(e){var n=P(Qe,e)[0];n&&(Je(n),e.removeAttribute("tabindex"))},Ln:function(e){var n=ct(e);return P(Qe,n)[0]||n},on:function(e){return pe(e,Be)||P(Qe,e)[0]!=null},mn:function(e){return e.rn&&e.activeSlide?e.activeSlide.on:e.on},gn:function(e){return Ae.Ln(e).scrollHeight>A.innerHeight},Pn:function(e,n){if(!T.canScroll)return!1;if(c().scrollBar)return!0;var o=Ae.Ln(n);if(!c().scrollOverflow||!pe(o,Be)||pe(n,"fp-noscroll")||pe(ct(n),"fp-noscroll"))return!0;var l=Fe?1:0,p=o.scrollTop,C=e==="up"&&p<=0,E=e==="down"&&o.scrollHeight<=Math.ceil(o.offsetHeight+p)+l,te=C||E;return te||(this.xn=new Date().getTime()),te},Hn:function(){this.On=new Date().getTime();var e=this.On-Ae.xn,n=(U||ce)&&T.X,o=T._&&e>600;return n&&e>400||o},Dn:(qo=0,function(e){var n=e.target.scrollTop,o=T.Y!=="none"?T.Y:qo<n?"down":"up";qo=n,Lt(c().onScrollOverflow)&&Lr("onScrollOverflow",{position:n,direction:o}),pe(e.target,Be)&&T.canScroll&&Ae.Pn(o,e.target)&&Ae.Hn()&&Ae.gn(j().P.item)&&X.L(On,{direction:o})})},ei=null,ti=null;function ln(){T.P=null,T.N.map(function(e){var n=pe(e.item,$t);e.isActive=n,e.on=Ae.on(e.item),n&&(T.P=e),e.slides.length&&(e.activeSlide=null,e.slides.map(function(o){var l=pe(o.item,$t);o.on=Ae.on(e.item),o.isActive=l,l&&(e.activeSlide=o)}))}),function(){var e=T.P,n=!!T.P&&T.P.slides.length,o=T.P?T.P.activeSlide:null;if(!e&&T.N.length&&!j().C){if(ei){var l=gi(ei,T.N);l&&(T.P=l,T.P.isActive=!0,ve(T.P.item,$t)),T.P&&Tr(T.P.item.offsetTop)}if(n&&!o&&ti){var p=gi(ti,T.P.slides);p&&(T.P.activeSlide=p,T.P.activeSlide.isActive=!0,ve(T.P.activeSlide.item,$t)),T.P.activeSlide&&eo(T.P.activeSlide.item,"internal")}}}(),Kt(q(),"onUpdateStateDone")}function Bo(){var e=P(c().sectionSelector+", "+b,q()),n=Oe(e),o=Array.from(e).map(function(C){return new zn(C)}),l=o.filter(function(C){return C.isVisible}),p=l.reduce(function(C,E){return C.concat(E.slides)},[]);ei=vi(T.P),ti=vi(T.P?T.P.activeSlide:null),T.j=n.length,T.D=l.reduce(function(C,E){return C+E.slides.length},0),T.N=l,T.an=o,T.slides=p,T.un=T.N.concat(T.slides)}function vi(e){if(!e)return null;var n=e?e.item:null,o=e.rn?T.an:T.P.Cn;if(n){var l=Ct(o,n);return l?l.index():null}return null}function gi(e,n){var o,l=e-1,p=e;do{if(o=n[l]||n[p])break;l-=1,p+=1}while(l>=0||p<n.length);return o}var zn=function(e){var n=this;[].push.call(arguments,c().sectionSelector),Le.apply(this,arguments),this.wn=P(c().slideSelector,e),this.Cn=Array.from(this.wn).map(function(o){return new No(o,n)}),this.slides=this.Cn.filter(function(o){return o.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(o){return o.isActive})[0]||this.slides[0]:null};zn.prototype=Le.prototype,zn.prototype.constructor=zn;var bo,No=function(e,n){this.parent=n,Le.call(this,e,c().slideSelector)};function t(){ve(P(c().sectionSelector,q()),f),ve(P(c().slideSelector,q()),W)}function i(e){var n=e.slides.length,o=e.wn,l=e.slides,p=100*n,C=100/n;if(!P(we,e.item)[0]){var E=I.createElement("div");E.className=le,de(o,E);var te=I.createElement("div");te.className=Ve,de(o,te)}at(P(st,e.item),{width:p+"%"}),n>1&&(c().controlArrows&&function(Ee){var Xe=Ee.item,Se=[Vr(c().controlArrowsHTML[0]),Vr(c().controlArrowsHTML[1])];wt(P(we,Xe)[0],Se),ve(Se,Bt),ve(Se[0],Rt),ve(Se[1],"fp-next"),c().controlArrowColor!=="#fff"&&(at(P(on,Xe),{"border-color":"transparent transparent transparent "+c().controlArrowColor}),at(P(Mr,Xe),{"border-color":"transparent "+c().controlArrowColor+" transparent transparent"})),c().loopHorizontal||ht(P(Mr,Xe))}(e),c().slidesNavigation&&function(Ee){var Xe=Ee.item,Se=Ee.slides.length;Or(Vr('<div class="fp-slidesNav"><ul></ul></div>'),Xe);var bt=P(gt,Xe)[0];ve(bt,"fp-"+c().slidesNavPosition);for(var Pt=0;Pt<Se;Pt++)Or(Vr('<li><a href="#"><span class="fp-sr-only">'+Wo(Pt,"Slide",P(ee,Xe)[Pt])+"</span><span></span></a></li>"),P("ul",bt)[0]);at(bt,{"margin-left":"-"+bt.innerWidth/2+"px"});var yr=Ee.activeSlide?Ee.activeSlide.index():0;ve(P("a",P("li",bt)[yr]),$t)}(e)),l.forEach(function(Ee){at(Ee.item,{width:C+"%"}),c().verticalCentered&&Mo(Ee)});var G=pt("responsiveSlides")?null:e.activeSlide||null;G!=null&&T.P&&(T.P.index()!==0||T.P.index()===0&&G.index()!==0)?(eo(G.item,"internal"),ve(G.item,"fp-initial")):ve(o[0],$t)}No.prototype=Le.prototype,No.prototype.constructor=zn;var h={attributes:!1,subtree:!0,childList:!0,characterData:!0};function w(){return se("responsiveSlides","isResponsiveSlidesChanging")||Oe(P(c().slideSelector,q())).length!==j().D}function $(e){var n=w();(w()||se("responsiveSlides","isResponsiveSlidesChanging")||Oe(P(c().sectionSelector,q())).length!==j().j)&&!T.nn&&(c().observer&&bo&&bo.disconnect(),Bo(),ln(),c().anchors=[],tn(P(H)),se("responsiveSlides","isResponsiveSlidesChanging")||t(),Er(),c().navigation&&Yo(),n&&(tn(P(gt)),tn(P(St))),j().N.forEach(function(o){o.slides.length?n&&i(o):Do(o)})),c().observer&&bo&&P(pn)[0]&&bo.observe(P(pn)[0],h)}X.R(dr,function(){var e,n,o;c().observer&&"MutationObserver"in window&&P(pn)[0]&&(e=P(pn)[0],n=h,(o=new MutationObserver($)).observe(e,n),bo=o),X.R(_n,$)}),D.render=$;var O=function(){var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e=!0}});Sr("testPassive",null,n),Cr("testPassive",null,n)}catch(o){}return function(){return e}}();function L(){return!!O()&&{passive:!1}}var F,Y,_,re,Q=(_=new Date().getTime(),re=[],{In:function(e){var n=(e=e||A.event).wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,n)),l=e.wheelDeltaX!==void 0||e.deltaX!==void 0;F=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!l;var p=new Date().getTime();Y=o<0?"down":"up",re.length>149&&re.shift(),re.push(Math.abs(n));var C=p-_;_=p,C>200&&(re=[])},Wn:function(){var e=rn(re,10)>=rn(re,70);return!!re.length&&e&&F},Fn:function(){return Y}});function ze(){var e=c().css3?It()+Ze():kr(j().N).item.offsetTop+kr(j().N).item.offsetHeight,n=Ne(e);D.test.top=-e+"px",K({canScroll:!1}),Ir(n.element,n.options,c().scrollingSpeed,function(){setTimeout(function(){K({C:!0}),K({canScroll:!0})},30)})}function ge(){q().getBoundingClientRect().bottom>=0&&Pe()}function Pe(){var e=Ne(kr(j().N).item.offsetTop);K({canScroll:!1}),Ir(e.element,e.options,c().scrollingSpeed,function(){K({canScroll:!0}),K({C:!1}),K({Vn:!1})})}var rt,ue,Re,We=(rt=!1,ue={},Re={},function(e,n,o){switch(e){case"set":ue[n]=new Date().getTime(),Re[n]=o;break;case"isNewKeyframe":var l=new Date().getTime();rt=l-ue[n]>Re[n]}return rt});function me(){var e=j().P.next();e||!c().loopBottom&&!c().continuousVertical||(e=j().N[0]),e!=null?Pn(e,null,!1):q().scrollHeight<xe.scrollHeight&&c().scrollBar&&c().Zn&&X.L(Un)}function Te(){var e=j().P.prev();e||!c().loopTop&&!c().continuousVertical||(e=kr(j().N)),e!=null&&Pn(e,null,!0)}D.moveSectionDown=me,D.moveSectionUp=Te;var Me=0;function _e(e){c().autoScrolling&&(T.canScroll&&(e.pageY<Me&&lr().m.up?Te():e.pageY>Me&&lr().m.down&&me()),Me=e.pageY)}function Zt(e){if(lr().m[e]){var n=e==="down"?me:Te;pt("scrollHorizontally")&&(n=se("scrollHorizontally","getScrollSection",{type:e,scrollSection:n})),c().scrollOverflow&&Ae.mn(j().P)?Ae.Pn(e,j().P.item)&&Ae.Hn()&&n():n()}}var mr,sr,er,Vt=0,kt=0,_t=0,tr=0,pr=br(),Ot={Bn:"ontouchmove"in window?"touchmove":pr?pr.move:null,Gn:"ontouchstart"in window?"touchstart":pr?pr.down:null};function Ut(e){var n=be(e.target,b)||j().P.item,o=Ae.mn(j().P);if(Wt(e)){K({X:!0,_:!1}),c().autoScrolling&&(o&&!T.canScroll||c().scrollBar)&&vt(e);var l=Qt(e);_t=l.y,tr=l.x;var p=Math.abs(Vt-_t)>A.innerHeight/100*c().touchSensitivity,C=Math.abs(kt-tr)>nr()/100*c().touchSensitivity,E=P(we,n).length&&Math.abs(kt-tr)>Math.abs(Vt-_t),te=Vt>_t?"down":"up";K({Y:E?kt>tr?"right":"left":te}),E?!T.W&&C&&(kt>tr?lr().m.right&&X.L(Vn,{section:n}):lr().m.left&&X.L(nn,{section:n})):c().autoScrolling&&T.canScroll&&p&&Zt(te)}}function Wt(e){return e.pointerType===void 0||e.pointerType!="mouse"}function jr(e){if(c().fitToSection&&K({G:!1}),Wt(e)){var n=Qt(e);Vt=n.y,kt=n.x}Sr("touchend",mt)}function mt(){Cr("touchend",mt),K({X:!1})}function Qt(e){var n={};return n.y=e.pageY!==void 0&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=e.pageX!==void 0&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ce&&Wt(e)&&c().scrollBar&&e.touches!==void 0&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function br(){var e;return A.PointerEvent&&(e={down:"pointerdown",move:"pointermove"}),e}function sn(e){c().autoScrolling&&Wt(e)&&lr().m.up&&(T.canScroll||vt(e))}function Yr(e,n){var o=n==null?j().P.item:n,l=Ct(T.N,o),p=P(we,o)[0];if(!(p==null||Gr()||T.W||l.slides.length<2)){var C=l.activeSlide,E=e==="left"?C.prev():C.next();if(!E){if(!c().loopHorizontal)return;E=e==="left"?kr(l.slides):l.slides[0]}K({W:!D.test.hn}),Cn(p,E.item,e)}}function He(e){Yr("left",e)}function Ye(e){Yr("right",e)}function xt(e){var n=j().N.filter(function(l){return l.anchor===e})[0];if(!n){var o=e!==void 0?e-1:0;n=j().N[o]}return n}function ut(e){e!=null&&Cn(be(e,we),e)}function M(e,n){var o=xt(e);if(o!=null){var l=function(p,C){var E=C.slides.filter(function(te){return te.anchor===p})[0];return E==null&&(p=p!==void 0?p:0,E=C.slides[p]),E?E.item:null}(n,o);o.anchor&&o.anchor===T.Z||pe(o.item,$t)?ut(l):Pn(o,function(){ut(l)})}}function ye(e,n){var o=xt(e);n!==void 0?M(e,n):o!=null&&Pn(o)}function it(){clearTimeout(sr),$r("keydown",Gt),$r("keyup",Et)}function Gt(e){clearTimeout(sr);var n=e.keyCode,o=[37,39].indexOf(n)>-1,l=c().autoScrolling||c().fitToSection||o;n===9?function(p){var C=p.shiftKey,E=I.activeElement,te=Hn(ct(j().P.item));function G(hr){return vt(hr),te[0]?te[0].focus():null}if(T.canScroll){if(!function(hr){var zt=Hn(I),Ht=zt.indexOf(I.activeElement),nt=zt[hr.shiftKey?Ht-1:Ht+1],xr=be(nt,ee),Ar=be(nt,b);return!xr&&!Ar}(p)){E?be(E,".fp-section.active,.fp-section.active .fp-slide.active")==null&&(E=G(p)):G(p);var Ee=E==te[0],Xe=E==te[te.length-1],Se=C&&Ee;if(Se||!C&&Xe){vt(p);var bt=function(hr){var zt,Ht=hr?"prevPanel":"nextPanel",nt=[],xr=ar((T.P&&T.P.activeSlide?T.P.activeSlide:T.P)[Ht]());do(nt=Hn(xr.item)).length&&(zt={Yn:xr,Un:nt[hr?nt.length-1:0]}),xr=ar(xr[Ht]());while(xr&&nt.length===0);return zt}(Se),Pt=bt?bt.Yn:null;if(Pt){var yr=Pt.rn?Pt:Pt.parent;X.L(An,{Xn:yr.index()+1,slideAnchor:Pt.rn?0:Pt.index()}),er=bt.Un,vt(p)}}}}else vt(p)}(e):!Rn()&&c().keyboardScrolling&&l&&(mr=e.ctrlKey,sr=setTimeout(function(){(function(p){var C=p.shiftKey,E=I.activeElement,te=Dt(E,"video")||Dt(E,"audio"),G=Ae.Pn("up",j().P.item),Ee=Ae.Pn("down",j().P.item),Xe=[37,39].indexOf(p.keyCode)>-1;if(function(Se){(function(bt){return[40,38,32,33,34].indexOf(bt.keyCode)>-1&&!T.C})(Se)&&!be(Se.target,Qe)&&Se.preventDefault()}(p),T.canScroll||Xe)switch(K({H:"keydown"}),p.keyCode){case 38:case 33:lr().k.up&&G?T.C?X.L(Sn,{e:p}):Te():Ae.Sn();break;case 32:if(C&&lr().k.up&&!te&&G){Te();break}case 40:case 34:if(lr().k.down&&Ee){if(T.C)return;p.keyCode===32&&te||me()}else Ae.Sn();break;case 36:lr().k.up&&ye(1);break;case 35:lr().k.down&&ye(j().N.length);break;case 37:lr().k.left&&He();break;case 39:lr().k.right&&Ye()}})(e)},0))}function Et(e){T.J&&(mr=e.ctrlKey)}function Nt(){K({J:!1}),mr=!1}function rr(e){Xr()}function Fr(e){be(er,ee)&&!be(er,De)||Xr()}function Xr(){er&&(er.focus(),er=null)}function Hn(e){return[].slice.call(P('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter(function(n){return ft(n,"tabindex")!=="-1"&&n.offsetParent!==null})}D.moveSlideLeft=He,D.moveSlideRight=Ye,D.moveTo=ye,X.R(dr,function(){Sr("blur",Nt),Nr("keydown",Gt),Nr("keyup",Et),X.R(vr,it),X.R(fn,rr),X.R(Gn,Fr)});var yo=new Date().getTime(),Dr=[];function Kr(e){e?(function(){var n,o="";A.addEventListener?n="addEventListener":(n="attachEvent",o="on");var l="onwheel"in I.createElement("div")?"wheel":I.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll",p=L();l=="DOMMouseScroll"?I[n](o+"MozMousePixelScroll",Jr,p):I[n](o+l,Jr,p)}(),q().addEventListener("mousedown",ro),q().addEventListener("mouseup",zo)):(I.addEventListener?($r("mousewheel",Jr,!1),$r("wheel",Jr,!1),$r("MozMousePixelScroll",Jr,!1)):I.detachEvent("onmousewheel",Jr),q().removeEventListener("mousedown",ro),q().removeEventListener("mouseup",zo))}function Jr(e){var n=new Date().getTime(),o=pe(P(".fp-completely")[0],"fp-normal-scroll"),l=function(Xe,Se){new Date().getTime();var bt=j().C&&Xe.getBoundingClientRect().bottom>=0&&Q.Fn()==="up",Pt=j().Vn;if(Pt)return vt(Se),!1;if(j().C){if(bt){var yr;if(!(Pt||We("isNewKeyframe","beyondFullpage")&&Q.Wn()))return(yr=Ne(kr(j().N).item.offsetTop+kr(j().N).item.offsetHeight)).element.scrollTo(0,yr.options),K({Vn:!1}),vt(Se),!1;if(Q.Wn())return bt=!1,K({Vn:!0}),K({H:"wheel"}),Pe(),vt(Se),!1}else We("set","beyondFullpage",1e3);if(!Pt&&!bt)return!0}}(q(),e);if(T._||K({X:!1,_:!0,Y:"none"}),!lr().m.down&&!lr().m.up)return vt(e),!1;if(l)return!0;if(l===!1)return vt(e),!1;if(c().autoScrolling&&!mr&&!o){var p=(e=e||A.event).wheelDelta||-e.deltaY||-e.detail,C=Math.max(-1,Math.min(1,p)),E=e.wheelDeltaX!==void 0||e.deltaX!==void 0,te=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!E,G=C<0?"down":C>0?"up":"none";Dr.length>149&&Dr.shift(),Dr.push(Math.abs(p)),c().scrollBar&&vt(e);var Ee=n-yo;return yo=n,Ee>200&&(Dr=[]),K({U:G}),T.canScroll&&!Gr()&&rn(Dr,10)>=rn(Dr,70)&&te&&(K({H:"wheel"}),Zt(C<0?"down":"up")),!1}c().fitToSection&&K({G:!1})}function ro(e){var n;e.which==2&&(n=e.pageY,Me=n,q().addEventListener("mousemove",_e))}function zo(e){e.which==2&&q().removeEventListener("mousemove",_e)}function Ho(e){e?(Kr(!0),function(){if(Ot.Bn&&(U||ce)&&(!pt("dragAndMove")||c().dragAndMove==="mouseonly")){c().autoScrolling&&(xe.removeEventListener(Ot.Bn,sn,{passive:!1}),xe.addEventListener(Ot.Bn,sn,{passive:!1}));var n=c().touchWrapper;n.removeEventListener(Ot.Gn,jr),n.removeEventListener(Ot.Bn,Ut,{passive:!1}),n.addEventListener(Ot.Gn,jr),n.addEventListener(Ot.Bn,Ut,{passive:!1})}}()):(Kr(!1),function(){if(Ot.Bn&&(U||ce)){c().autoScrolling&&(xe.removeEventListener(Ot.Bn,Ut,{passive:!1}),xe.removeEventListener(Ot.Bn,sn,{passive:!1}));var n=c().touchWrapper;n.removeEventListener(Ot.Gn,jr),n.removeEventListener(Ot.Bn,Ut,{passive:!1})}}())}D.setMouseWheelScrolling=Kr;var mi=!0;function Qi(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){$r(e,Ii,!0)})}function Ti(e,n){document["fp_"+e]=n,Nr(e,Ii,!0)}function Ii(e){var n=e.type,o=!1,l=n==="mouseleave"?e.toElement||e.relatedTarget:e.target;l!=document&&l?(n==="touchend"&&(mi=!1,setTimeout(function(){mi=!0},800)),(n!=="mouseenter"||mi)&&(c().normalScrollElements.split(",").forEach(function(p){if(!o){var C=Dt(l,p),E=be(l,p);(C||E)&&(D.shared._n||Ho(!1),D.shared._n=!0,o=!0)}}),!o&&D.shared._n&&(Ho(!0),D.shared._n=!1))):Ho(!0)}function ri(e,n){qt(0,"internal"),ye(e,n),qt(jt().scrollingSpeed,"internal")}X.R(dr,function(){c().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ti(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ti(e,!0)})),X.R(vr,Qi)}),D.silentMoveTo=ri;var bi,Li,yi=Ze(),Ri=nr(),xi=!1;function Gi(){clearTimeout(bi),clearTimeout(Li),Cr("resize",wi)}function wi(){xi||(c().autoScrolling&&!c().scrollBar||!c().fitToSection)&&Oi(Ze()),function(){if(U)for(var e=0;e<4;e++)Li=setTimeout(function(){window.requestAnimationFrame(function(){c().autoScrolling&&!c().scrollBar&&(K({F:!0}),ri(T.P.index()+1),K({F:!1}))})},200*e)}(),xi=!0,clearTimeout(bi),bi=setTimeout(function(){(function(){if(K({F:!0}),Oi(""),Kt(q(),"onResize"),c().autoScrolling||T.C||function(){if(!c().autoScrolling||c().scrollBar){var p=.01*A.innerHeight;I.documentElement.style.setProperty("--vh","".concat(p,"px"))}}(),X.L(_n),ln(),Oo(),U){var e=I.activeElement;if(!Dt(e,"textarea")&&!Dt(e,"input")&&!Dt(e,"select")){var n=Ze();Math.abs(n-yi)>20*Math.max(yi,n)/100&&(Ai(!0),yi=n)}}else o=Ze(),l=nr(),T.q===o&&Ri===l||(K({q:o}),Ri=l,Ai(!0));var o,l;Kt(q(),"onResizeEnds"),K({F:!1})})(),xi=!1},400)}function Ai(e){if(!pe(q(),io)){K({F:!0,q:Ze(),Qn:nr()});for(var n=j().N,o=0;o<n.length;++o){var l=n[o],p=P(we,l.item)[0],C=l.slides;pt("offsetSections")&&at(l.item,{height:J(l.item)}),C.length>1&&Cn(p,l.activeSlide.item)}c().scrollOverflow&&Ae.bn();var E=j().P.index();T.C||!E||pt("fadingEffect")||pt("dropEffect")||pt("waterEffect")||ri(E+1),K({F:!1}),Lt(c().afterResize)&&e&&c().afterResize.call(q(),A.innerWidth,A.innerHeight),Lt(c().afterReBuild)&&!e&&c().afterReBuild.call(q()),Kt(q(),"afterRebuild")}}function Oi(e){j().N.forEach(function(n){var o=e!==""||pt("offsetSections")?J(n.item):"";at(n.item,{height:o})})}function Si(){var e,n,o=A.location.hash;if(o.length){var l=o.replace("#","").split("/"),p=o.indexOf("#/")>-1;e=p?"/"+l[1]:decodeURIComponent(l[0]);var C=p?l[2]:l[1];C&&C.length&&(n=decodeURIComponent(C))}return{section:e,sn:n}}function Yi(){Cr("hashchange",Mi)}function Mi(){if(!T.V&&!c().lockAnchors){var e=Si(),n=e.section,o=e.sn,l=T.Z===void 0,p=T.Z===void 0&&o===void 0&&!T.W;n&&n.length&&(n&&n!==T.Z&&!l||p&&!Gr()||!T.W&&T.B!=o&&!Gr())&&X.L(An,{Xn:n,slideAnchor:o})}}function Xi(e){var n=e.target;be(n,c().menu+" [data-menuanchor]")&&Ki.call(n,e)}function Ki(e){K({H:"menu"}),!P(c().menu)[0]||!c().lockAnchors&&c().anchors.length||(vt(e),X.L(kn,{anchor:ft(this,"data-menuanchor")}))}function Ji(e){var n=e.target;n&&be(n,"#fp-nav a")?fi.call(n,e.e):Dt(n,".fp-tooltip")?di.call(n):(Dt(n,Ge)||be(n,Ge)!=null)&&li.call(n,e.e)}D.reBuild=Ai,X.R(dr,function(){wi(),Sr("resize",wi),X.R(vr,Gi)}),D.setLockAnchors=function(e){c().lockAnchors=e},X.R(dr,function(){Sr("hashchange",Mi),X.R(vr,Yi)}),X.R(dr,function(){Nr("wheel",Q.In,L()),X.R(Un,ze),X.R(Sn,ge)}),X.R(dr,function(){X.R(wn,Xi)}),X.R(dr,function(){X.R(wn,Ji)});var ki,Ei,Di=0;function ni(e){var n,o,l,p,C;if(Kt(q(),"onScroll"),!T.F&&j().P&&(kr(j().N),!j().C&&!j().Vn&&(!c().autoScrolling||c().scrollBar||pt("dragAndMove"))&&!ie())){var E=pt("dragAndMove")?Math.abs(se("dragAndMove","getCurrentScroll")):It(),te=function(Br){var qr=Br>Di?"down":"up";return Di=Br,K({K:Br}),qr}(E),G=0,Ee=E+Ze()/2,Xe=(pt("dragAndMove")?se("dragAndMove","getDocumentHeight"):xe.scrollHeight-Ze())===E,Se=j().N;if(K({scrollY:E}),Xe)G=Se.length-1;else if(E)for(var bt=0;bt<Se.length;++bt)(be(Se[bt].item,b)||Se[bt].item).offsetTop<=Ee&&(G=bt);else G=0;if(l=te,p=j().P.item.offsetTop,C=p+Ze(),(l=="up"?C>=It()+Ze():p<=It())&&(pe(j().P.item,y)||(ve(j().P.item,y),Ke(ur(j().P.item),y))),o=(n=Se[G]).item,!n.isActive){K({V:!0});var Pt,yr,hr=j().P.item,zt=j().P.index()+1,Ht=Mt(j().P,o),nt=n.anchor,xr=n.index()+1,Ar=n.activeSlide,In={P:hr,sectionIndex:xr-1,anchorLink:nt,element:o,leavingSection:zt,direction:Ht,items:{origin:j().P,destination:n}};Ar&&(yr=Ar.anchor,Pt=Ar.index()),T.canScroll&&(Ke(Se.filter(function(Br){return Br.index()!==n.index()}).map(function(Br){return Br.item}),$t),ve(o,$t),se("parallax","afterLoad"),Lt(c().beforeLeave)&&po("beforeLeave",In),Lt(c().onLeave)&&Lr("onLeave",In),Lt(c().afterLoad)&&Lr("afterLoad",In),se("resetSliders","apply",{localIsResizing:T.F,leavingSection:zt}),lo(hr),Bn(o),ao(o),Po(nt,xr-1),c().anchors.length&&K({Z:nt}),ln(),mn(Pt,yr,nt)),clearTimeout(ki),ki=setTimeout(function(){K({V:!1})},100)}c().fitToSection&&T.canScroll&&(clearTimeout(Ei),Ei=setTimeout(function(){T.N.filter(function(Br){var qr=Br.item.getBoundingClientRect();return Math.round(qr.bottom)===Math.round(Ze())||Math.round(qr.top)===0}).length||Ko()},c().en))}}function Bi(e,n){n!==void 0?(n=n.replace(/ /g,"").split(",")).forEach(function(o){co(e,o,"k")}):(co(e,"all","k"),c().keyboardScrolling=e)}function qi(e){var n=e.index();c().anchors[n]!==void 0&&e.isActive&&Po(c().anchors[n],n),c().menu&&c().css3&&be(P(c().menu)[0],pn)!=null&&P(c().menu).forEach(function(o){xe.appendChild(o)})}function Ni(){var e,n,o=j().P,l=j().P.item;ve(l,y),Bn(l),Go(),ao(l),n=xt((e=Si()).section),e.section&&n&&(n===void 0||n.index()!==lt(Jo))||!Lt(c().afterLoad)||Lr("afterLoad",{P:l,element:l,direction:null,anchorLink:o.anchor,sectionIndex:o.index(),items:{origin:j().P,destination:j().P}}),Lt(c().afterRender)&&Lr("afterRender"),Kt(q(),"afterRender")}function $i(e,n){n!==void 0?(n=n.replace(/ /g,"").split(",")).forEach(function(o){co(e,o,"m")}):co(e,"all","m"),Kt(q(),"setAllowScrolling",{value:e,Jn:n})}function zi(){var e=Si(),n=e.section,o=e.sn;n?c().animateAnchor?M(n,o):ri(n,o):X.L(Pr,null)}X.R(vr,function(){clearTimeout(ki),clearTimeout(Ei)}),X.R(dr,function(){Sr("scroll",ni),I.body.addEventListener("scroll",ni),X.R(An,function(e){M(e.Xn,e.slideAnchor)}),X.R(kn,function(e){ye(e.anchor,void 0)}),X.R(On,function(e){(e.direction==="down"?me:Te)()}),X.R(Mn,function(e){Pn(e.destination)})}),X.R(vr,function(){Cr("scroll",ni)}),D.getActiveSlide=function(){return Dn(j().P.activeSlide)},D.getScrollX=function(){return T.scrollX},X.R(dr,function(){X.R(vr,ui),X.R(oo,function(e){Cn(e.slides,e.destination)}),X.R(Vn,function(e){Ye(e.section)}),X.R(nn,function(e){He(e.section)})}),X.R(dr,function(){var e=c().credits.position,n=["left","right"].indexOf(e)>-1?"".concat(e,": 0;"):"",o=`
        <div class="fp-watermark" style="`.concat(n,`">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(c().credits.label,`
            </a>
        </div>
    `),l=kr(T.N),p=!T.Kn||c().credits.enabled;l&&l.item&&p&&l.item.insertAdjacentHTML("beforeend",o)}),function(){X.R(wo,function(){var te,G,Ee;K({Kn:(c().licenseKey,te=c().licenseKey,G=function(Xe){var Se=parseInt("514").toString(16);if(!Xe||Xe.length<29||Xe.split(e[0]).length===4)return null;var bt=["Each","for"][p()]().join(""),Pt=Xe[["split"]]("-"),yr=[];Pt[bt](function(Ht,nt){if(nt<4){var xr=function(Br){var qr=Br[Br.length-1],ia=["NaN","is"][p()]().join("");return window[ia](qr)?C(qr):function(aa){return aa-$t.length}(qr)}(Ht);yr.push(xr);var Ar=C(Ht[xr]);if(nt===1){var In=["pa","dS","t","art"].join("");Ar=Ar.toString()[In](2,"0")}Se+=Ar,nt!==0&&nt!==1||(Se+="-")}});var hr=0,zt="";return Xe.split("-").forEach(function(Ht,nt){if(nt<4){for(var xr=0,Ar=0;Ar<4;Ar++)Ar!==yr[nt]&&(xr+=Math.abs(C(Ht[Ar])),isNaN(Ht[Ar])||hr++);var In=E(xr);zt+=In}}),zt+=E(hr),{qn:new Date(Se+"T00:00"),$n:Se.split("-")[2]===8*($t.length-2)+"",nt:zt}}(te),Ee=function(Xe){var Se=l[p()]().join("");return Xe&&Se.indexOf(Xe)===0&&Xe.length===Se.length}(te),(G||Ee)&&(G&&o<=G.qn&&G.nt===te.split(e[0])[4]||Ee||G.$n)||!1)})});var e=["-"],n="2023-4-29".split("-"),o=new Date(n[0],n[1],n[2]),l=["se","licen","-","v3","l","gp"];function p(){return[["re","verse"].join("")][0]}function C(te){return te?isNaN(te)?te.charCodeAt(0)-72:te:""}function E(te){var G=72+te;return G>90&&G<97&&(G+=15),String.fromCharCode(G).toUpperCase()}}(),D.setKeyboardScrolling=Bi,D.shared.tt=Ni,D.setAllowScrolling=$i;var ea={};function xo(){return ea}var oi,Tn,Hi,Ci,ii=!pe(xe,ae("OHNsd3AtZnVsbHBhZ2UtanM5T20="));function ji(e){if(Tn=I.createElement("div"),oi=ae("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),ii||(oi=oi.replace("extensions/","").replace("Extension","")),Tn.innerHTML=oi,Tn=Tn.firstChild,"MutationObserver"in window&&new MutationObserver(ta).observe(I.body,{childList:!0,subtree:!1}),(!ii||pt(e)&&D[e])&&(!function(o){var l=xo()[o]!==void 0&&xo()[o].length,p=[],C=!1;return cr(xo()[o])?p=xo()[o]:p.push(xo()[o]),p.forEach(function(E){var te=function(){if(I.domain.length){for(var qr=I.domain.replace(/^(www\.)/,"").split(".");qr.length>2;)qr.shift();return qr.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),G=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3","NDU2dGVzdDQ1Ng=="],Ee=ae(G[0]),Xe=ae(G[1]),Se=ae(G[2]),bt=ae(G[6]),Pt=ae(G[3]),yr=ae(G[4]),hr=ae(G[5]),zt=c()[yr+hr]!==void 0;l=l||zt;var Ht=[Ee,Xe,Se,bt].indexOf(te)<0&&te.length!==0;if(!l&&!zt&&Ht)return!1;var nt=l?ae(E):"",xr=(nt=nt.split("_")).length>1&&nt[1].indexOf(o,nt[1].length-o.length)>-1,Ar=nt.length>1&&nt[1].toLowerCase().indexOf(yr)>-1,In=nt[0].indexOf(te,nt[0].length-te.length)<0,Br=xr||Ar;C=C||!(In&&Ht&&Pt!=nt[0])&&Br||!Ht}),C}(e)||!ii)){Fi();var n=ae("MzQ1c2V0SW50ZXJ2YWwxMjM=");window[n](Fi,2e3)}}function Fi(){Tn&&(Ci||(Math.random()<.5?oe(xe,Tn):Or(Tn,xe),Ci=!0),Tn.setAttribute("style",ae("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ae("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function ta(e){e.forEach(function(n){if(n.removedNodes[0]&&n.removedNodes[0].isEqualNode(Tn)){clearTimeout(Hi);var o=ae("bDIwc2V0VGltZW91dDAzbA==");Hi=window[o](ra,900)}})}function ra(){Ci=!1}function na(){Bo(),ln(),c().scrollBar=c().scrollBar||c().hybrid,Er(),function(){at(Wn(q(),"body"),{height:"100%",position:"relative"}),ve(q(),Kn),ve(an,hn),K({q:Ze()}),Ke(q(),io),t(),se("parallax","init");for(var e=j().an,n=0;n<e.length;n++){var o=e[n],l=o.wn,p=ft(o.item,"style");p&&o.item.setAttribute("data-fp-styles",p),Do(o),qi(o),l.length>0&&i(o)}c().fixedElements&&c().css3&&P(c().fixedElements).forEach(function(C){xe.appendChild(C)}),c().navigation&&Yo(),P('iframe[src*="youtube.com/embed/"]',q()).forEach(function(C){var E,te;te=ft(E=C,"src"),E.setAttribute("src",te+(/\?/.test(te)?"&":"?")+"enablejsapi=1")}),se("fadingEffect","apply"),se("waterEffect","init"),se("dropEffect","init"),se("cards","init"),c().scrollOverflow&&Ae.bn()}(),$i(!0),Ho(!0),Nn(c().autoScrolling,"internal"),Oo(),Fo(),I.readyState==="complete"&&zi(),Sr("load",zi),Ni(),ii||ji("l"),Bo(),ln()}function Zi(){var e=c().licenseKey;c().licenseKey.trim()===""?(z("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),z("error","https://github.com/alvarotrigo/fullPage.js#options")):c()&&T.Kn||I.domain.indexOf("alvarotrigo.com")>-1?e&&e.length:(z("error","Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"),z("error","https://alvarotrigo.com/fullPage/pricing")),pe(an,hn)?z("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(c().continuousVertical&&(c().loopTop||c().loopBottom)&&(c().continuousVertical=!1,z("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!c().scrollOverflow||!c().scrollBar&&c().autoScrolling||z("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!c().continuousVertical||!c().scrollBar&&c().autoScrolling||(c().continuousVertical=!1,z("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),c().anchors.forEach(function(n){var o=[].slice.call(P("[name]")).filter(function(C){return ft(C,"name")&&ft(C,"name").toLowerCase()==n.toLowerCase()}),l=[].slice.call(P("[id]")).filter(function(C){return ft(C,"id")&&ft(C,"id").toLowerCase()==n.toLowerCase()});if(l.length||o.length){z("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var p=l.length?"id":"name";(l.length||o.length)&&z("error",'"'+n+'" is is being used by another element `'+p+"` property")}}))}function oa(){return{options:c(),internals:{container:q(),canScroll:T.canScroll,isScrollAllowed:lr(),getDestinationPosition:Xo,isTouch:ce,c:ji,getXmovement:Qo,removeAnimation:Hr,getTransforms:Ft,lazyLoad:Bn,addAnimation:Ue,performHorizontalMove:Uo,landscapeScroll:Cn,silentLandscapeScroll:eo,keepSlidesPosition:Co,silentScroll:Tr,styleSlides:i,styleSection:Do,scrollHandler:ni,getEventsPage:Qt,getMSPointer:br,isReallyTouch:Wt,usingExtension:pt,toggleControlArrows:_o,touchStartHandler:jr,touchMoveHandler:Ut,nullOrSection:gn,items:{SectionPanel:zn,SlidePanel:No,Item:Le},getVisible:Oe,getState:j,updateState:ln,updateStructuralState:Bo,activeSlidesNavigation:Vo,getPanels:function(){return T.un},getSections:function(){return T.N},setActiveSection:function(e){T.P=e}}}}function Zr(e){var n=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],o=ae(n[0]),l=ae(n[1]),p=c()[o+l]!==void 0,C="fp_"+e+"Extension";xo()[e]=p?c()[o+l]:c()[e+l],D[e]=window[C]!==void 0?new window[C]:null,D[e]&&D[e].c(e)}function Wi(e,n){var o;if(xe=P("body")[0],an=P("html")[0],vn=P("html, body"),!pe(an,hn))return o=typeof e=="string"?P(e)[0]:e,fr.touchWrapper=o,function(l){ir=Z({},fr,l),Ur=Object.assign({},ir)}(n),function(l){gr=l}(typeof e=="string"?P(e)[0]:e),X.L(wo),Zi(),D.getFullpageData=oa,D.version="4.0.20",D.test=Object.assign(D.test,{top:"0px",cn:"translate3d(0px, 0px, 0px)",dn:function(){for(var l=[],p=0;p<P(c().sectionSelector,q()).length;p++)l.push("translate3d(0px, 0px, 0px)");return l}(),left:function(){for(var l=[],p=0;p<P(c().sectionSelector,q()).length;p++)l.push(0);return l}(),options:c(),setAutoScrolling:null}),D.shared=Object.assign(D.shared,{tt:null,_n:!1}),A.fullpage_api=D,A.fullpage_extensions=!0,q()&&(X.L("beforeInit"),Zr("continuousHorizontal"),Zr("scrollHorizontally"),Zr("resetSliders"),Zr("interlockedSlides"),Zr("responsiveSlides"),Zr("fadingEffect"),Zr("dragAndMove"),Zr("offsetSections"),Zr("scrollOverflowReset"),Zr("parallax"),Zr("cards"),Zr("dropEffect"),Zr("waterEffect"),se("dragAndMove","init"),se("responsiveSlides","init"),na(),X.L(dr),se("dragAndMove","turnOffTouch")),A.fullpage_api;Zi()}return D.destroy=function(e){Kt(q(),"destroy",e),Nn(!1,"internal"),$i(!0),Ho(!1),Bi(!1),ve(q(),io),X.L(vr),se("dragAndMove","destroy"),e&&(Tr(0),P("img[data-src], source[data-src], audio[data-src], iframe[data-src]",q()).forEach(function(n){xn(n,"src")}),P("img[data-srcset]").forEach(function(n){xn(n,"srcset")}),tn(P("#fp-nav, .fp-slidesNav, .fp-controlArrow")),at(V(j().N),{height:"","background-color":"",padding:""}),at(V(j().slides),{width:""}),at(q(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),at(vn,{overflow:"",height:""}),Ke(an,hn),Ke(xe,Jn+" fp-scrollable"),xe.className.split(/\s+/).forEach(function(n){n.indexOf("fp-viewing")===0&&Ke(xe,n)}),V(j().un).forEach(function(n){c().scrollOverflow&&Ae.Nn(n),Ke(n,"fp-table active fp-completely "+ke);var o=ft(n,"data-fp-styles");o&&n.setAttribute("style",o),pe(n,f)&&!zr&&n.removeAttribute("data-anchor")}),Hr(q()),[R,st,we].forEach(function(n){P(n,q()).forEach(function(o){Je(o)})}),at(q(),{"-webkit-transition":"none",transition:"none"}),Ke(q(),Kn),A.scrollTo(0,0),[f,W,Ve].forEach(function(n){Ke(P("."+n),n)}))},A.fp_easings=Z(A.fp_easings,{easeInOutCubic:function(e,n,o,l){return(e/=l/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n}}),A.jQuery&&function(e,n){e&&n?e.fn.fullpage=function(o){o=e.extend({},o,{$:e}),new n(this[0],o),Object.keys(D).forEach(function(l){c().$.fn.fullpage[l]=D[l]})}:z("error","jQuery is required to use the jQuery fullpage adapter!")}(A.jQuery,Wi),Wi})},239:()=>{window.fp_easings={def:"easeOutQuad",linear:function(u,x,g,k){return g*u/k+x},swing:function(u,x,g,k){return window.fp_easings[window.fp_easings.def](u,x,g,k)},easeInQuad:function(u,x,g,k){return g*(u/=k)*u+x},easeOutQuad:function(u,x,g,k){return-g*(u/=k)*(u-2)+x},easeInOutQuad:function(u,x,g,k){return(u/=k/2)<1?g/2*u*u+x:-g/2*(--u*(u-2)-1)+x},easeInCubic:function(u,x,g,k){return g*(u/=k)*u*u+x},easeOutCubic:function(u,x,g,k){return g*((u=u/k-1)*u*u+1)+x},easeInOutCubic:function(u,x,g,k){return(u/=k/2)<1?g/2*u*u*u+x:g/2*((u-=2)*u*u+2)+x},easeInQuart:function(u,x,g,k){return g*(u/=k)*u*u*u+x},easeOutQuart:function(u,x,g,k){return-g*((u=u/k-1)*u*u*u-1)+x},easeInOutQuart:function(u,x,g,k){return(u/=k/2)<1?g/2*u*u*u*u+x:-g/2*((u-=2)*u*u*u-2)+x},easeInQuint:function(u,x,g,k){return g*(u/=k)*u*u*u*u+x},easeOutQuint:function(u,x,g,k){return g*((u=u/k-1)*u*u*u*u+1)+x},easeInOutQuint:function(u,x,g,k){return(u/=k/2)<1?g/2*u*u*u*u*u+x:g/2*((u-=2)*u*u*u*u+2)+x},easeInSine:function(u,x,g,k){return-g*Math.cos(u/k*(Math.PI/2))+g+x},easeOutSine:function(u,x,g,k){return g*Math.sin(u/k*(Math.PI/2))+x},easeInOutSine:function(u,x,g,k){return-g/2*(Math.cos(Math.PI*u/k)-1)+x},easeInExpo:function(u,x,g,k){return u==0?x:g*Math.pow(2,10*(u/k-1))+x},easeOutExpo:function(u,x,g,k){return u==k?x+g:g*(1-Math.pow(2,-10*u/k))+x},easeInOutExpo:function(u,x,g,k){return u==0?x:u==k?x+g:(u/=k/2)<1?g/2*Math.pow(2,10*(u-1))+x:g/2*(2-Math.pow(2,-10*--u))+x},easeInCirc:function(u,x,g,k){return-g*(Math.sqrt(1-(u/=k)*u)-1)+x},easeOutCirc:function(u,x,g,k){return g*Math.sqrt(1-(u=u/k-1)*u)+x},easeInOutCirc:function(u,x,g,k){return(u/=k/2)<1?-g/2*(Math.sqrt(1-u*u)-1)+x:g/2*(Math.sqrt(1-(u-=2)*u)+1)+x},easeInElastic:function(u,x,g,k){var B=1.70158,A=0,I=g;return u==0?x:(u/=k)==1?x+g:(A||(A=.3*k),I<Math.abs(g)?(I=g,B=A/4):B=A/(2*Math.PI)*Math.asin(g/I),-I*Math.pow(2,10*(u-=1))*Math.sin((u*k-B)*(2*Math.PI)/A)+x)},easeOutElastic:function(u,x,g,k){var B=1.70158,A=0,I=g;return u==0?x:(u/=k)==1?x+g:(A||(A=.3*k),I<Math.abs(g)?(I=g,B=A/4):B=A/(2*Math.PI)*Math.asin(g/I),I*Math.pow(2,-10*u)*Math.sin((u*k-B)*(2*Math.PI)/A)+g+x)},easeInOutElastic:function(u,x,g,k){var B=1.70158,A=0,I=g;return u==0?x:(u/=k/2)==2?x+g:(A||(A=k*.44999999999999996),I<Math.abs(g)?(I=g,B=A/4):B=A/(2*Math.PI)*Math.asin(g/I),u<1?I*Math.pow(2,10*(u-=1))*Math.sin((u*k-B)*(2*Math.PI)/A)*-.5+x:I*Math.pow(2,-10*(u-=1))*Math.sin((u*k-B)*(2*Math.PI)/A)*.5+g+x)},easeInBack:function(u,x,g,k,B){return B==null&&(B=1.70158),g*(u/=k)*u*((B+1)*u-B)+x},easeOutBack:function(u,x,g,k,B){return B==null&&(B=1.70158),g*((u=u/k-1)*u*((B+1)*u+B)+1)+x},easeInOutBack:function(u,x,g,k,B){return B==null&&(B=1.70158),(u/=k/2)<1?g/2*(u*u*((1+(B*=1.525))*u-B))+x:g/2*((u-=2)*u*((1+(B*=1.525))*u+B)+2)+x},easeInBounce:function(u,x,g,k){return g-window.fp_easings.easeOutBounce(k-u,0,g,k)+x},easeOutBounce:function(u,x,g,k){return(u/=k)<.36363636363636365?g*(7.5625*u*u)+x:u<.7272727272727273?g*(7.5625*(u-=.5454545454545454)*u+.75)+x:u<.9090909090909091?g*(7.5625*(u-=.8181818181818182)*u+.9375)+x:g*(7.5625*(u-=.9545454545454546)*u+.984375)+x},easeInOutBounce:function(u,x,g,k){return u<k/2?.5*window.fp_easings.easeInBounce(2*u,0,g,k)+x:.5*window.fp_easings.easeOutBounce(2*u-k,0,g,k)+.5*g+x}}},379:u=>{"use strict";var x=[];function g(A){for(var I=-1,U=0;U<x.length;U++)if(x[U].identifier===A){I=U;break}return I}function k(A,I){for(var U={},Ie=[],ce=0;ce<A.length;ce++){var Fe=A[ce],D=I.base?Fe[0]+I.base:Fe[0],z=U[D]||0,a="".concat(D," ").concat(z);U[D]=z+1;var Oe=g(a),P={css:Fe[1],media:Fe[2],sourceMap:Fe[3]};Oe!==-1?(x[Oe].references++,x[Oe].updater(P)):x.push({identifier:a,updater:B(P,I),references:1}),Ie.push(a)}return Ie}function B(A,I){var U=I.domAPI(I);return U.update(A),function(ce){if(ce){if(ce.css===A.css&&ce.media===A.media&&ce.sourceMap===A.sourceMap)return;U.update(A=ce)}else U.remove()}}u.exports=function(A,I){I=I||{},A=A||[];var U=k(A,I);return function(ce){ce=ce||[];for(var Fe=0;Fe<U.length;Fe++){var D=U[Fe],z=g(D);x[z].references--}for(var a=k(ce,I),Oe=0;Oe<U.length;Oe++){var P=U[Oe],Z=g(P);x[Z].references===0&&(x[Z].updater(),x.splice(Z,1))}U=a}}},569:u=>{"use strict";var x={};function g(B){if(typeof x[B]=="undefined"){var A=document.querySelector(B);if(window.HTMLIFrameElement&&A instanceof window.HTMLIFrameElement)try{A=A.contentDocument.head}catch(I){A=null}x[B]=A}return x[B]}function k(B,A){var I=g(B);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(A)}u.exports=k},216:u=>{"use strict";function x(g){var k=document.createElement("style");return g.setAttributes(k,g.attributes),g.insert(k),k}u.exports=x},565:(u,x,g)=>{"use strict";function k(B){var A=g.nc;A&&B.setAttribute("nonce",A)}u.exports=k},795:u=>{"use strict";function x(B,A,I){var U=I.css,Ie=I.media,ce=I.sourceMap;Ie?B.setAttribute("media",Ie):B.removeAttribute("media"),ce&&typeof btoa!="undefined"&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ce))))," */")),A.styleTagTransform(U,B)}function g(B){if(B.parentNode===null)return!1;B.parentNode.removeChild(B)}function k(B){var A=B.insertStyleElement(B);return{update:function(U){x(A,B,U)},remove:function(){g(A)}}}u.exports=k},589:u=>{"use strict";function x(g,k){if(k.styleSheet)k.styleSheet.cssText=g;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(g))}}u.exports=x},497:u=>{"use strict";u.exports=N(62435)}},v={};function yt(u){var x=v[u];if(x!==void 0)return x.exports;var g=v[u]={id:u,exports:{}};return dt[u].call(g.exports,g,g.exports,yt),g.exports}yt.n=u=>{var x=u&&u.__esModule?()=>u.default:()=>u;return yt.d(x,{a:x}),x},yt.d=(u,x)=>{for(var g in x)yt.o(x,g)&&!yt.o(u,g)&&Object.defineProperty(u,g,{enumerable:!0,get:x[g]})},yt.o=(u,x)=>Object.prototype.hasOwnProperty.call(u,x),yt.r=u=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})};var Yt={};(()=>{"use strict";yt.r(Yt),yt.d(Yt,{default:()=>A});var u=yt(497),x=yt.n(u);const k=I=>{let{children:U}=I;return x().createElement(u.Fragment,null,U)},B=()=>{if(typeof window=="undefined")return!1;try{return!"production".toLowerCase().match(/test/)}catch(I){return!0}},A=(()=>{let I;return B()?I=yt(88).Z:I=yt(882).Z,I.Wrapper=k,I})()})(),je.exports=Yt})()},8679:function(je,ne,N){"use strict";var dt=N(21296),v={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x={};x[dt.ForwardRef]=Yt,x[dt.Memo]=u;function g(Fe){return dt.isMemo(Fe)?u:x[Fe.$$typeof]||v}var k=Object.defineProperty,B=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,I=Object.getOwnPropertyDescriptor,U=Object.getPrototypeOf,Ie=Object.prototype;function ce(Fe,D,z){if(typeof D!="string"){if(Ie){var a=U(D);a&&a!==Ie&&ce(Fe,a,z)}var Oe=B(D);A&&(Oe=Oe.concat(A(D)));for(var P=g(Fe),Z=g(D),pe=0;pe<Oe.length;++pe){var Ze=Oe[pe];if(!yt[Ze]&&!(z&&z[Ze])&&!(Z&&Z[Ze])&&!(P&&P[Ze])){var nr=I(D,Ze);try{k(Fe,Ze,nr)}catch(at){}}}}return Fe}je.exports=ce},96103:function(je,ne){"use strict";var N=typeof Symbol=="function"&&Symbol.for,dt=N?Symbol.for("react.element"):60103,v=N?Symbol.for("react.portal"):60106,yt=N?Symbol.for("react.fragment"):60107,Yt=N?Symbol.for("react.strict_mode"):60108,u=N?Symbol.for("react.profiler"):60114,x=N?Symbol.for("react.provider"):60109,g=N?Symbol.for("react.context"):60110,k=N?Symbol.for("react.async_mode"):60111,B=N?Symbol.for("react.concurrent_mode"):60111,A=N?Symbol.for("react.forward_ref"):60112,I=N?Symbol.for("react.suspense"):60113,U=N?Symbol.for("react.suspense_list"):60120,Ie=N?Symbol.for("react.memo"):60115,ce=N?Symbol.for("react.lazy"):60116,Fe=N?Symbol.for("react.block"):60121,D=N?Symbol.for("react.fundamental"):60117,z=N?Symbol.for("react.responder"):60118,a=N?Symbol.for("react.scope"):60119;function Oe(Z){if(typeof Z=="object"&&Z!==null){var pe=Z.$$typeof;switch(pe){case dt:switch(Z=Z.type,Z){case k:case B:case yt:case u:case Yt:case I:return Z;default:switch(Z=Z&&Z.$$typeof,Z){case g:case A:case ce:case Ie:case x:return Z;default:return pe}}case v:return pe}}}function P(Z){return Oe(Z)===B}ne.AsyncMode=k,ne.ConcurrentMode=B,ne.ContextConsumer=g,ne.ContextProvider=x,ne.Element=dt,ne.ForwardRef=A,ne.Fragment=yt,ne.Lazy=ce,ne.Memo=Ie,ne.Portal=v,ne.Profiler=u,ne.StrictMode=Yt,ne.Suspense=I,ne.isAsyncMode=function(Z){return P(Z)||Oe(Z)===k},ne.isConcurrentMode=P,ne.isContextConsumer=function(Z){return Oe(Z)===g},ne.isContextProvider=function(Z){return Oe(Z)===x},ne.isElement=function(Z){return typeof Z=="object"&&Z!==null&&Z.$$typeof===dt},ne.isForwardRef=function(Z){return Oe(Z)===A},ne.isFragment=function(Z){return Oe(Z)===yt},ne.isLazy=function(Z){return Oe(Z)===ce},ne.isMemo=function(Z){return Oe(Z)===Ie},ne.isPortal=function(Z){return Oe(Z)===v},ne.isProfiler=function(Z){return Oe(Z)===u},ne.isStrictMode=function(Z){return Oe(Z)===Yt},ne.isSuspense=function(Z){return Oe(Z)===I},ne.isValidElementType=function(Z){return typeof Z=="string"||typeof Z=="function"||Z===yt||Z===B||Z===u||Z===Yt||Z===I||Z===U||typeof Z=="object"&&Z!==null&&(Z.$$typeof===ce||Z.$$typeof===Ie||Z.$$typeof===x||Z.$$typeof===g||Z.$$typeof===A||Z.$$typeof===D||Z.$$typeof===z||Z.$$typeof===a||Z.$$typeof===Fe)},ne.typeOf=Oe},21296:function(je,ne,N){"use strict";je.exports=N(96103)},69921:function(je,ne){"use strict";var N;var dt=Symbol.for("react.element"),v=Symbol.for("react.portal"),yt=Symbol.for("react.fragment"),Yt=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),g=Symbol.for("react.context"),k=Symbol.for("react.server_context"),B=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),Fe;Fe=Symbol.for("react.module.reference");function D(z){if(typeof z=="object"&&z!==null){var a=z.$$typeof;switch(a){case dt:switch(z=z.type,z){case yt:case u:case Yt:case A:case I:return z;default:switch(z=z&&z.$$typeof,z){case k:case g:case B:case Ie:case U:case x:return z;default:return a}}case v:return a}}}N=g,N=x,N=dt,N=B,N=yt,N=Ie,N=U,N=v,N=u,N=Yt,N=A,N=I,N=function(){return!1},N=function(){return!1},N=function(z){return D(z)===g},N=function(z){return D(z)===x},N=function(z){return typeof z=="object"&&z!==null&&z.$$typeof===dt},N=function(z){return D(z)===B},N=function(z){return D(z)===yt},N=function(z){return D(z)===Ie},N=function(z){return D(z)===U},N=function(z){return D(z)===v},N=function(z){return D(z)===u},N=function(z){return D(z)===Yt},N=function(z){return D(z)===A},N=function(z){return D(z)===I},ne.isValidElementType=function(z){return typeof z=="string"||typeof z=="function"||z===yt||z===u||z===Yt||z===A||z===I||z===ce||typeof z=="object"&&z!==null&&(z.$$typeof===Ie||z.$$typeof===U||z.$$typeof===x||z.$$typeof===g||z.$$typeof===B||z.$$typeof===Fe||z.getModuleId!==void 0)},ne.typeOf=D},59864:function(je,ne,N){"use strict";je.exports=N(69921)},25226:function(je){"use strict";var ne={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};je.exports=ne},94589:function(je,ne,N){"use strict";N.d(ne,{f6:function(){return Gn},vJ:function(){return Kn},iv:function(){return nn},ZP:function(){return $t}});var dt=N(59864),v=N(62435),yt=N(96774),Yt=N.n(yt);function u(d){function y(ie,J,oe,ae,S){for(var Le=0,V=0,Ct=0,tt=0,ot,Ce,ct=0,ar=0,Ne,Jt=Ne=ot=0,Ue=0,Mt=0,Hr=0,Ft=0,En=oe.length,Tr=En-1,qt,he="",xe="",an="",vn="",Ir;Ue<En;){if(Ce=oe.charCodeAt(Ue),Ue===Tr&&V+tt+Ct+Le!==0&&(V!==0&&(Ce=V===47?10:47),tt=Ct=Le=0,En++,Tr++),V+tt+Ct+Le===0){if(Ue===Tr&&(0<Mt&&(he=he.replace(st,"")),0<he.trim().length)){switch(Ce){case 32:case 9:case 59:case 13:case 10:break;default:he+=oe.charAt(Ue)}Ce=59}switch(Ce){case 123:for(he=he.trim(),ot=he.charCodeAt(0),Ne=1,Ft=++Ue;Ue<En;){switch(Ce=oe.charCodeAt(Ue)){case 123:Ne++;break;case 125:Ne--;break;case 47:switch(Ce=oe.charCodeAt(Ue+1)){case 42:case 47:e:{for(Jt=Ue+1;Jt<Tr;++Jt)switch(oe.charCodeAt(Jt)){case 47:if(Ce===42&&oe.charCodeAt(Jt-1)===42&&Ue+2!==Jt){Ue=Jt+1;break e}break;case 10:if(Ce===47){Ue=Jt+1;break e}}Ue=Jt}}break;case 91:Ce++;case 40:Ce++;case 34:case 39:for(;Ue++<Tr&&oe.charCodeAt(Ue)!==Ce;);}if(Ne===0)break;Ue++}switch(Ne=oe.substring(Ft,Ue),ot===0&&(ot=(he=he.replace(Ve,"").trim()).charCodeAt(0)),ot){case 64:switch(0<Mt&&(he=he.replace(st,"")),Ce=he.charCodeAt(1),Ce){case 100:case 109:case 115:case 45:Mt=J;break;default:Mt=Qr}if(Ne=y(J,Mt,Ne,Ce,S+1),Ft=Ne.length,0<wr&&(Mt=f(Qr,he,Hr),Ir=ee(3,Ne,Mt,J,q,ir,Ft,Ce,S,ae),he=Mt.join(""),Ir!==void 0&&(Ft=(Ne=Ir.trim()).length)===0&&(Ce=0,Ne="")),0<Ft)switch(Ce){case 115:he=he.replace(Mr,W);case 100:case 109:case 45:Ne=he+"{"+Ne+"}";break;case 107:he=he.replace(Ge,"$1 $2"),Ne=he+"{"+Ne+"}",Ne=jt===1||jt===2&&H("@"+Ne,3)?"@-webkit-"+Ne+"@"+Ne:"@"+Ne;break;default:Ne=he+Ne,ae===112&&(Ne=(xe+=Ne,""))}else Ne="";break;default:Ne=y(J,f(J,he,Hr),Ne,ae,S+1)}an+=Ne,Ne=Hr=Mt=Jt=ot=0,he="",Ce=oe.charCodeAt(++Ue);break;case 125:case 59:if(he=(0<Mt?he.replace(st,""):he).trim(),1<(Ft=he.length))switch(Jt===0&&(ot=he.charCodeAt(0),ot===45||96<ot&&123>ot)&&(Ft=(he=he.replace(" ",":")).length),0<wr&&(Ir=ee(1,he,J,ie,q,ir,xe.length,ae,S,ae))!==void 0&&(Ft=(he=Ir.trim()).length)===0&&(he="\0\0"),ot=he.charCodeAt(0),Ce=he.charCodeAt(1),ot){case 0:break;case 64:if(Ce===105||Ce===99){vn+=he+oe.charAt(Ue);break}default:he.charCodeAt(Ft-1)!==58&&(xe+=R(he,ot,Ce,he.charCodeAt(2)))}Hr=Mt=Jt=ot=0,he="",Ce=oe.charCodeAt(++Ue)}}switch(Ce){case 13:case 10:V===47?V=0:1+ot===0&&ae!==107&&0<he.length&&(Mt=1,he+="\0"),0<wr*se&&ee(0,he,J,ie,q,ir,xe.length,ae,S,ae),ir=1,q++;break;case 59:case 125:if(V+tt+Ct+Le===0){ir++;break}default:switch(ir++,qt=oe.charAt(Ue),Ce){case 9:case 32:if(tt+Le+V===0)switch(ct){case 44:case 58:case 9:case 32:qt="";break;default:Ce!==32&&(qt=" ")}break;case 0:qt="\\0";break;case 12:qt="\\f";break;case 11:qt="\\v";break;case 38:tt+V+Le===0&&(Mt=Hr=1,qt="\f"+qt);break;case 108:if(tt+V+Le+c===0&&0<Jt)switch(Ue-Jt){case 2:ct===112&&oe.charCodeAt(Ue-3)===58&&(c=ct);case 8:ar===111&&(c=ar)}break;case 58:tt+V+Le===0&&(Jt=Ue);break;case 44:V+Ct+tt+Le===0&&(Mt=1,qt+="\r");break;case 34:case 39:V===0&&(tt=tt===Ce?0:tt===0?Ce:tt);break;case 91:tt+V+Ct===0&&Le++;break;case 93:tt+V+Ct===0&&Le--;break;case 41:tt+V+Le===0&&Ct--;break;case 40:if(tt+V+Le===0){if(ot===0)switch(2*ct+3*ar){case 533:break;default:ot=1}Ct++}break;case 64:V+Ct+tt+Le+Jt+Ne===0&&(Ne=1);break;case 42:case 47:if(!(0<tt+Le+Ct))switch(V){case 0:switch(2*Ce+3*oe.charCodeAt(Ue+1)){case 235:V=47;break;case 220:Ft=Ue,V=42}break;case 42:Ce===47&&ct===42&&Ft+2!==Ue&&(oe.charCodeAt(Ft+2)===33&&(xe+=oe.substring(Ft,Ue+1)),qt="",V=0)}}V===0&&(he+=qt)}ar=ct,ct=Ce,Ue++}if(Ft=xe.length,0<Ft){if(Mt=J,0<wr&&(Ir=ee(2,xe,Mt,ie,q,ir,Ft,ae,S,ae),Ir!==void 0&&(xe=Ir).length===0))return vn+xe+an;if(xe=Mt.join(",")+"{"+xe+"}",jt*c!==0){switch(jt!==2||H(xe,2)||(c=0),c){case 111:xe=xe.replace(St,":-moz-$1")+xe;break;case 112:xe=xe.replace(Bt,"::-webkit-input-$1")+xe.replace(Bt,"::-moz-$1")+xe.replace(Bt,":-ms-input-$1")+xe}c=0}}return vn+xe+an}function f(ie,J,oe){var ae=J.trim().split(ke);J=ae;var S=ae.length,Le=ie.length;switch(Le){case 0:case 1:var V=0;for(ie=Le===0?"":ie[0]+" ";V<S;++V)J[V]=b(ie,J[V],oe).trim();break;default:var Ct=V=0;for(J=[];V<S;++V)for(var tt=0;tt<Le;++tt)J[Ct++]=b(ie[tt]+" ",ae[V],oe).trim()}return J}function b(ie,J,oe){var ae=J.charCodeAt(0);switch(33>ae&&(ae=(J=J.trim()).charCodeAt(0)),ae){case 38:return J.replace(gt,"$1"+ie.trim());case 58:return ie.trim()+J.replace(gt,"$1"+ie.trim());default:if(0<1*oe&&0<J.indexOf("\f"))return J.replace(gt,(ie.charCodeAt(0)===58?"":"$1")+ie.trim())}return ie+J}function R(ie,J,oe,ae){var S=ie+";",Le=2*J+3*oe+4*ae;if(Le===944){ie=S.indexOf(":",9)+1;var V=S.substring(ie,S.length-1).trim();return V=S.substring(0,ie).trim()+V+";",jt===1||jt===2&&H(V,1)?"-webkit-"+V+V:V}if(jt===0||jt===2&&!H(S,1))return S;switch(Le){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(Ur,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return V=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+V+"-webkit-"+S+"-ms-flex-pack"+V+S;case 1005:return Be.test(S)?S.replace(At,":-webkit-")+S.replace(At,":-moz-")+S:S;case 1e3:switch(V=S.substring(13).trim(),J=V.indexOf("-")+1,V.charCodeAt(0)+V.charCodeAt(J)){case 226:V=S.replace(Rt,"tb");break;case 232:V=S.replace(Rt,"tb-rl");break;case 220:V=S.replace(Rt,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+V+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(J=(S=ie).length-10,V=(S.charCodeAt(J)===33?S.substring(0,J):S).substring(ie.indexOf(":",7)+1).trim(),Le=V.charCodeAt(0)+(V.charCodeAt(7)|0)){case 203:if(111>V.charCodeAt(8))break;case 115:S=S.replace(V,"-webkit-"+V)+";"+S;break;case 207:case 102:S=S.replace(V,"-webkit-"+(102<Le?"inline-":"")+"box")+";"+S.replace(V,"-webkit-"+V)+";"+S.replace(V,"-ms-"+V+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return V=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+V+"-ms-flex-"+V+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(fr,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(fr,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(zr.test(ie)===!0)return(V=ie.substring(ie.indexOf(":")+1)).charCodeAt(0)===115?R(ie.replace("stretch","fill-available"),J,oe,ae).replace(":fill-available",":stretch"):S.replace(V,"-webkit-"+V)+S.replace(V,"-moz-"+V.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,oe+ae===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(Qe,"$1-webkit-$2")+S}return S}function H(ie,J){var oe=ie.indexOf(J===1?":":"{"),ae=ie.substring(0,J!==3?oe:10);return oe=ie.substring(oe+1,ie.length-1),pt(J!==2?ae:ae.replace(gr,"$1"),oe,J)}function W(ie,J){var oe=R(J,J.charCodeAt(0),J.charCodeAt(1),J.charCodeAt(2));return oe!==J+";"?oe.replace(on," or ($1)").substring(4):"("+J+")"}function ee(ie,J,oe,ae,S,Le,V,Ct,tt,ot){for(var Ce=0,ct=J,ar;Ce<wr;++Ce)switch(ar=Er[Ce].call(we,ie,ct,oe,ae,S,Le,V,Ct,tt,ot)){case void 0:case!1:case!0:case null:break;default:ct=ar}if(ct!==J)return ct}function De(ie){switch(ie){case void 0:case null:wr=Er.length=0;break;default:if(typeof ie=="function")Er[wr++]=ie;else if(typeof ie=="object")for(var J=0,oe=ie.length;J<oe;++J)De(ie[J]);else se=!!ie|0}return De}function le(ie){return ie=ie.prefix,ie!==void 0&&(pt=null,ie?typeof ie!="function"?jt=1:(jt=2,pt=ie):jt=0),le}function we(ie,J){var oe=ie;if(33>oe.charCodeAt(0)&&(oe=oe.trim()),Gr=oe,oe=[Gr],0<wr){var ae=ee(-1,J,oe,oe,q,ir,0,0,0,0);ae!==void 0&&typeof ae=="string"&&(J=ae)}var S=y(Qr,oe,J,0,0);return 0<wr&&(ae=ee(-2,S,oe,oe,q,ir,S.length,0,0,0),ae!==void 0&&(S=ae)),Gr="",c=0,ir=q=1,S}var Ve=/^\0+/g,st=/[\0\r\f]/g,At=/: */g,Be=/zoo|gra/,Qe=/([,: ])(transform)/g,ke=/,\r+?/g,gt=/([\t\r\n ])*\f?&/g,Ge=/@(k\w+)\s*(\S*)\s*/,Bt=/::(place)/g,St=/:(read-only)/g,Rt=/[svh]\w+-[tblr]{2}/,Mr=/\(\s*(.*)\s*\)/g,on=/([\s\S]*?);/g,fr=/-self|flex-/g,gr=/[^]*?(:[rp][el]a[\w-]+)[^]*/,zr=/stretch|:\s*\w+\-(?:conte|avail)/,Ur=/([^-])(image-set\()/,ir=1,q=1,c=0,jt=1,Qr=[],Er=[],wr=0,pt=null,se=0,Gr="";return we.use=De,we.set=le,d!==void 0&&le(d),we}var x=u,g=N(40351);function k(d){var y=Object.create(null);return function(f){return y[f]===void 0&&(y[f]=d(f)),y[f]}}var B=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,A=k(function(d){return B.test(d)||d.charCodeAt(0)===111&&d.charCodeAt(1)===110&&d.charCodeAt(2)<91}),I=N(8679),U=N.n(I),Ie=N(34155);function ce(){return(ce=Object.assign||function(d){for(var y=1;y<arguments.length;y++){var f=arguments[y];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(d[b]=f[b])}return d}).apply(this,arguments)}var Fe=function(d,y){for(var f=[d[0]],b=0,R=y.length;b<R;b+=1)f.push(y[b],d[b+1]);return f},D=function(d){return d!==null&&typeof d=="object"&&(d.toString?d.toString():Object.prototype.toString.call(d))==="[object Object]"&&!(0,dt.typeOf)(d)},z=Object.freeze([]),a=Object.freeze({});function Oe(d){return typeof d=="function"}function P(d){return d.displayName||d.name||"Component"}function Z(d){return d&&typeof d.styledComponentId=="string"}var pe=typeof Ie!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_ATTR)||"data-styled",Ze="5.3.11",nr=typeof window!="undefined"&&"HTMLElement"in window,at=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Ie!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY:{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==""&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY)),en={},or={};function Ln(){for(var d=arguments.length<=0?void 0:arguments[0],y=[],f=1,b=arguments.length;f<b;f+=1)y.push(f<0||arguments.length<=f?void 0:arguments[f]);return y.forEach(function(R){d=d.replace(/%[a-z]/,R)}),d}function lt(d){for(var y=arguments.length,f=new Array(y>1?y-1:0),b=1;b<y;b++)f[b-1]=arguments[b];throw new Error("An error occurred. See https://git.io/JUIaE#"+d+" for more information."+(f.length>0?" Args: "+f.join(", "):""))}var Rr=function(){function d(f){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=f}var y=d.prototype;return y.indexOfGroup=function(f){for(var b=0,R=0;R<f;R++)b+=this.groupSizes[R];return b},y.insertRules=function(f,b){if(f>=this.groupSizes.length){for(var R=this.groupSizes,H=R.length,W=H;f>=W;)(W<<=1)<0&&lt(16,""+f);this.groupSizes=new Uint32Array(W),this.groupSizes.set(R),this.length=W;for(var ee=H;ee<W;ee++)this.groupSizes[ee]=0}for(var De=this.indexOfGroup(f+1),le=0,we=b.length;le<we;le++)this.tag.insertRule(De,b[le])&&(this.groupSizes[f]++,De++)},y.clearGroup=function(f){if(f<this.length){var b=this.groupSizes[f],R=this.indexOfGroup(f),H=R+b;this.groupSizes[f]=0;for(var W=R;W<H;W++)this.tag.deleteRule(R)}},y.getGroup=function(f){var b="";if(f>=this.length||this.groupSizes[f]===0)return b;for(var R=this.groupSizes[f],H=this.indexOfGroup(f),W=H+R,ee=H;ee<W;ee++)b+=this.tag.getRule(ee)+`/*!sc*/
`;return b},d}(),ht=new Map,Wr=new Map,cr=1,ve=function(d){if(ht.has(d))return ht.get(d);for(;Wr.has(cr);)cr++;var y=cr++;return ht.set(d,y),Wr.set(y,d),y},Ke=function(d){return Wr.get(d)},Or=function(d,y){y>=cr&&(cr=y+1),ht.set(d,y),Wr.set(y,d)},Tt="style["+pe+'][data-styled-version="5.3.11"]',de=new RegExp("^"+pe+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fe=function(d,y,f){for(var b,R=f.split(","),H=0,W=R.length;H<W;H++)(b=R[H])&&d.registerName(y,b)},Je=function(d,y){for(var f=(y.textContent||"").split(`/*!sc*/
`),b=[],R=0,H=f.length;R<H;R++){var W=f[R].trim();if(W){var ee=W.match(de);if(ee){var De=0|parseInt(ee[1],10),le=ee[2];De!==0&&(Or(le,De),fe(d,le,ee[3]),d.getTag().insertRules(De,b)),b.length=0}else b.push(W)}}},be=function(){return N.nc},wt=function(d){var y=document.head,f=d||y,b=document.createElement("style"),R=function(ee){for(var De=ee.childNodes,le=De.length;le>=0;le--){var we=De[le];if(we&&we.nodeType===1&&we.hasAttribute(pe))return we}}(f),H=R!==void 0?R.nextSibling:null;b.setAttribute(pe,"active"),b.setAttribute("data-styled-version","5.3.11");var W=be();return W&&b.setAttribute("nonce",W),f.insertBefore(b,H),b},qe=function(){function d(f){var b=this.element=wt(f);b.appendChild(document.createTextNode("")),this.sheet=function(R){if(R.sheet)return R.sheet;for(var H=document.styleSheets,W=0,ee=H.length;W<ee;W++){var De=H[W];if(De.ownerNode===R)return De}lt(17)}(b),this.length=0}var y=d.prototype;return y.insertRule=function(f,b){try{return this.sheet.insertRule(b,f),this.length++,!0}catch(R){return!1}},y.deleteRule=function(f){this.sheet.deleteRule(f),this.length--},y.getRule=function(f){var b=this.sheet.cssRules[f];return b!==void 0&&typeof b.cssText=="string"?b.cssText:""},d}(),Xt=function(){function d(f){var b=this.element=wt(f);this.nodes=b.childNodes,this.length=0}var y=d.prototype;return y.insertRule=function(f,b){if(f<=this.length&&f>=0){var R=document.createTextNode(b),H=this.nodes[f];return this.element.insertBefore(R,H||null),this.length++,!0}return!1},y.deleteRule=function(f){this.element.removeChild(this.nodes[f]),this.length--},y.getRule=function(f){return f<this.length?this.nodes[f].textContent:""},d}(),It=function(){function d(f){this.rules=[],this.length=0}var y=d.prototype;return y.insertRule=function(f,b){return f<=this.length&&(this.rules.splice(f,0,b),this.length++,!0)},y.deleteRule=function(f){this.rules.splice(f,1),this.length--},y.getRule=function(f){return f<this.length?this.rules[f]:""},d}(),ur=nr,vt={isServer:!nr,useCSSOMInjection:!at},ft=function(){function d(f,b,R){f===void 0&&(f=a),b===void 0&&(b={}),this.options=ce({},vt,{},f),this.gs=b,this.names=new Map(R),this.server=!!f.isServer,!this.server&&nr&&ur&&(ur=!1,function(H){for(var W=document.querySelectorAll(Tt),ee=0,De=W.length;ee<De;ee++){var le=W[ee];le&&le.getAttribute(pe)!=="active"&&(Je(H,le),le.parentNode&&le.parentNode.removeChild(le))}}(this))}d.registerId=function(f){return ve(f)};var y=d.prototype;return y.reconstructWithOptions=function(f,b){return b===void 0&&(b=!0),new d(ce({},this.options,{},f),this.gs,b&&this.names||void 0)},y.allocateGSInstance=function(f){return this.gs[f]=(this.gs[f]||0)+1},y.getTag=function(){return this.tag||(this.tag=(R=(b=this.options).isServer,H=b.useCSSOMInjection,W=b.target,f=R?new It(W):H?new qe(W):new Xt(W),new Rr(f)));var f,b,R,H,W},y.hasNameForId=function(f,b){return this.names.has(f)&&this.names.get(f).has(b)},y.registerName=function(f,b){if(ve(f),this.names.has(f))this.names.get(f).add(b);else{var R=new Set;R.add(b),this.names.set(f,R)}},y.insertRules=function(f,b,R){this.registerName(f,b),this.getTag().insertRules(ve(f),R)},y.clearNames=function(f){this.names.has(f)&&this.names.get(f).clear()},y.clearRules=function(f){this.getTag().clearGroup(ve(f)),this.clearNames(f)},y.clearTag=function(){this.tag=void 0},y.toString=function(){return function(f){for(var b=f.getTag(),R=b.length,H="",W=0;W<R;W++){var ee=Ke(W);if(ee!==void 0){var De=f.names.get(ee),le=b.getGroup(W);if(De&&le&&De.size){var we=pe+".g"+W+'[id="'+ee+'"]',Ve="";De!==void 0&&De.forEach(function(st){st.length>0&&(Ve+=st+",")}),H+=""+le+we+'{content:"'+Ve+`"}/*!sc*/
`}}}return H}(this)},d}(),Nr=/(a)(d)/gi,Sr=function(d){return String.fromCharCode(d+(d>25?39:97))};function $r(d){var y,f="";for(y=Math.abs(d);y>52;y=y/52|0)f=Sr(y%52)+f;return(Sr(y%52)+f).replace(Nr,"$1-$2")}var Cr=function(d,y){for(var f=y.length;f;)d=33*d^y.charCodeAt(--f);return d},Lt=function(d){return Cr(5381,d)};function Kt(d){for(var y=0;y<d.length;y+=1){var f=d[y];if(Oe(f)&&!Z(f))return!1}return!0}var Dt=Lt("5.3.11"),bn=function(){function d(y,f,b){this.rules=y,this.staticRulesId="",this.isStatic=(b===void 0||b.isStatic)&&Kt(y),this.componentId=f,this.baseHash=Cr(Dt,f),this.baseStyle=b,ft.registerId(f)}return d.prototype.generateAndInjectStyles=function(y,f,b){var R=this.componentId,H=[];if(this.baseStyle&&H.push(this.baseStyle.generateAndInjectStyles(y,f,b)),this.isStatic&&!b.hash)if(this.staticRulesId&&f.hasNameForId(R,this.staticRulesId))H.push(this.staticRulesId);else{var W=Pr(this.rules,y,f,b).join(""),ee=$r(Cr(this.baseHash,W)>>>0);if(!f.hasNameForId(R,ee)){var De=b(W,"."+ee,void 0,R);f.insertRules(R,ee,De)}H.push(ee),this.staticRulesId=ee}else{for(var le=this.rules.length,we=Cr(this.baseHash,b.hash),Ve="",st=0;st<le;st++){var At=this.rules[st];if(typeof At=="string")Ve+=At;else if(At){var Be=Pr(At,y,f,b),Qe=Array.isArray(Be)?Be.join(""):Be;we=Cr(we,Qe+st),Ve+=Qe}}if(Ve){var ke=$r(we>>>0);if(!f.hasNameForId(R,ke)){var gt=b(Ve,"."+ke,void 0,R);f.insertRules(R,ke,gt)}H.push(ke)}}return H.join(" ")},d}(),Vr=/^\s*\/\/.*$/gm,tn=[":","[",".","#"];function jn(d){var y,f,b,R,H=d===void 0?a:d,W=H.options,ee=W===void 0?a:W,De=H.plugins,le=De===void 0?z:De,we=new x(ee),Ve=[],st=function(Qe){function ke(gt){if(gt)try{Qe(gt+"}")}catch(Ge){}}return function(gt,Ge,Bt,St,Rt,Mr,on,fr,gr,zr){switch(gt){case 1:if(gr===0&&Ge.charCodeAt(0)===64)return Qe(Ge+";"),"";break;case 2:if(fr===0)return Ge+"/*|*/";break;case 3:switch(fr){case 102:case 112:return Qe(Bt[0]+Ge),"";default:return Ge+(zr===0?"/*|*/":"")}case-2:Ge.split("/*|*/}").forEach(ke)}}}(function(Qe){Ve.push(Qe)}),At=function(Qe,ke,gt){return ke===0&&tn.indexOf(gt[f.length])!==-1||gt.match(R)?Qe:"."+y};function Be(Qe,ke,gt,Ge){Ge===void 0&&(Ge="&");var Bt=Qe.replace(Vr,""),St=ke&&gt?gt+" "+ke+" { "+Bt+" }":Bt;return y=Ge,f=ke,b=new RegExp("\\"+f+"\\b","g"),R=new RegExp("(\\"+f+"\\b){2,}"),we(gt||!ke?"":ke,St)}return we.use([].concat(le,[function(Qe,ke,gt){Qe===2&&gt.length&&gt[0].lastIndexOf(f)>0&&(gt[0]=gt[0].replace(b,At))},st,function(Qe){if(Qe===-2){var ke=Ve;return Ve=[],ke}}])),Be.hash=le.length?le.reduce(function(Qe,ke){return ke.name||lt(15),Cr(Qe,ke.name)},5381).toString():"",Be}var un=v.createContext(),Fn=un.Consumer,yn=v.createContext(),Zn=(yn.Consumer,new ft),kr=jn();function rn(){return(0,v.useContext)(un)||Zn}function xn(){return(0,v.useContext)(yn)||kr}function Wn(d){var y=(0,v.useState)(d.stylisPlugins),f=y[0],b=y[1],R=rn(),H=(0,v.useMemo)(function(){var ee=R;return d.sheet?ee=d.sheet:d.target&&(ee=ee.reconstructWithOptions({target:d.target},!1)),d.disableCSSOMInjection&&(ee=ee.reconstructWithOptions({useCSSOMInjection:!1})),ee},[d.disableCSSOMInjection,d.sheet,d.target]),W=(0,v.useMemo)(function(){return jn({options:{prefix:!d.disableVendorPrefixes},plugins:f})},[d.disableVendorPrefixes,f]);return(0,v.useEffect)(function(){Yt()(f,d.stylisPlugins)||b(d.stylisPlugins)},[d.stylisPlugins]),v.createElement(un.Provider,{value:H},v.createElement(yn.Provider,{value:W},d.children))}var Rn=function(){function d(y,f){var b=this;this.inject=function(R,H){H===void 0&&(H=kr);var W=b.name+H.hash;R.hasNameForId(b.id,W)||R.insertRules(b.id,W,H(b.rules,W,"@keyframes"))},this.toString=function(){return lt(12,String(b.name))},this.name=y,this.id="sc-keyframes-"+y,this.rules=f}return d.prototype.getName=function(y){return y===void 0&&(y=kr),this.name+y.hash},d}(),no=/([A-Z])/,dn=/([A-Z])/g,X=/^ms-/,T=function(d){return"-"+d.toLowerCase()};function K(d){return no.test(d)?d.replace(dn,T).replace(X,"-ms-"):d}var j=function(d){return d==null||d===!1||d===""};function Pr(d,y,f,b){if(Array.isArray(d)){for(var R,H=[],W=0,ee=d.length;W<ee;W+=1)(R=Pr(d[W],y,f,b))!==""&&(Array.isArray(R)?H.push.apply(H,R):H.push(R));return H}if(j(d))return"";if(Z(d))return"."+d.styledComponentId;if(Oe(d)){if(typeof(le=d)!="function"||le.prototype&&le.prototype.isReactComponent||!y)return d;var De=d(y);return Pr(De,y,f,b)}var le;return d instanceof Rn?f?(d.inject(f,b),d.getName(b)):d:D(d)?function we(Ve,st){var At,Be,Qe=[];for(var ke in Ve)Ve.hasOwnProperty(ke)&&!j(Ve[ke])&&(Array.isArray(Ve[ke])&&Ve[ke].isCss||Oe(Ve[ke])?Qe.push(K(ke)+":",Ve[ke],";"):D(Ve[ke])?Qe.push.apply(Qe,we(Ve[ke],ke)):Qe.push(K(ke)+": "+(At=ke,(Be=Ve[ke])==null||typeof Be=="boolean"||Be===""?"":typeof Be!="number"||Be===0||At in g.Z||At.startsWith("--")?String(Be).trim():Be+"px")+";"));return st?[st+" {"].concat(Qe,["}"]):Qe}(d):d.toString()}var wn=function(d){return Array.isArray(d)&&(d.isCss=!0),d};function nn(d){for(var y=arguments.length,f=new Array(y>1?y-1:0),b=1;b<y;b++)f[b-1]=arguments[b];return Oe(d)||D(d)?wn(Pr(Fe(z,[d].concat(f)))):f.length===0&&d.length===1&&typeof d[0]=="string"?d:wn(Pr(Fe(d,f)))}var Vn=/invalid hook call/i,wo=new Set,dr=function(d,y){if(!1)var f,b,R},vr=function(d,y,f){return f===void 0&&(f=a),d.theme!==f.theme&&d.theme||y||f.theme},_n=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,On=/(^-|-$)/g;function An(d){return d.replace(_n,"-").replace(On,"")}var Sn=function(d){return $r(Lt(d)>>>0)};function kn(d){return typeof d=="string"&&!0}var Mn=function(d){return typeof d=="function"||typeof d=="object"&&d!==null&&!Array.isArray(d)},oo=function(d){return d!=="__proto__"&&d!=="constructor"&&d!=="prototype"};function Un(d,y,f){var b=d[f];Mn(y)&&Mn(b)?Qn(b,y):d[f]=y}function Qn(d){for(var y=arguments.length,f=new Array(y>1?y-1:0),b=1;b<y;b++)f[b-1]=arguments[b];for(var R=0,H=f;R<H.length;R++){var W=H[R];if(Mn(W))for(var ee in W)oo(ee)&&Un(d,W[ee],ee)}return d}var _r=v.createContext(),Ao=_r.Consumer;function Gn(d){var y=(0,v.useContext)(_r),f=(0,v.useMemo)(function(){return function(b,R){if(!b)return lt(14);if(Oe(b)){var H=b(R);return H}return Array.isArray(b)||typeof b!="object"?lt(8):R?ce({},R,{},b):b}(d.theme,y)},[d.theme,y]);return d.children?v.createElement(_r.Provider,{value:f},d.children):null}var fn={};function Yn(d,y,f){var b=Z(d),R=!kn(d),H=y.attrs,W=H===void 0?z:H,ee=y.componentId,De=ee===void 0?function(Ge,Bt){var St=typeof Ge!="string"?"sc":An(Ge);fn[St]=(fn[St]||0)+1;var Rt=St+"-"+Sn("5.3.11"+St+fn[St]);return Bt?Bt+"-"+Rt:Rt}(y.displayName,y.parentComponentId):ee,le=y.displayName,we=le===void 0?function(Ge){return kn(Ge)?"styled."+Ge:"Styled("+P(Ge)+")"}(d):le,Ve=y.displayName&&y.componentId?An(y.displayName)+"-"+y.componentId:y.componentId||De,st=b&&d.attrs?Array.prototype.concat(d.attrs,W).filter(Boolean):W,At=y.shouldForwardProp;b&&d.shouldForwardProp&&(At=y.shouldForwardProp?function(Ge,Bt,St){return d.shouldForwardProp(Ge,Bt,St)&&y.shouldForwardProp(Ge,Bt,St)}:d.shouldForwardProp);var Be,Qe=new bn(f,Ve,b?d.componentStyle:void 0),ke=Qe.isStatic&&W.length===0,gt=function(Ge,Bt){return function(St,Rt,Mr,on){var fr=St.attrs,gr=St.componentStyle,zr=St.defaultProps,Ur=St.foldedComponentIds,ir=St.shouldForwardProp,q=St.styledComponentId,c=St.target,jt=function(ae,S,Le){ae===void 0&&(ae=a);var V=ce({},S,{theme:ae}),Ct={};return Le.forEach(function(tt){var ot,Ce,ct,ar=tt;for(ot in Oe(ar)&&(ar=ar(V)),ar)V[ot]=Ct[ot]=ot==="className"?(Ce=Ct[ot],ct=ar[ot],Ce&&ct?Ce+" "+ct:Ce||ct):ar[ot]}),[V,Ct]}(vr(Rt,(0,v.useContext)(_r),zr)||a,Rt,fr),Qr=jt[0],Er=jt[1],wr=function(ae,S,Le,V){var Ct=rn(),tt=xn(),ot=S?ae.generateAndInjectStyles(a,Ct,tt):ae.generateAndInjectStyles(Le,Ct,tt);return ot}(gr,on,Qr,void 0),pt=Mr,se=Er.$as||Rt.$as||Er.as||Rt.as||c,Gr=kn(se),ie=Er!==Rt?ce({},Rt,{},Er):Rt,J={};for(var oe in ie)oe[0]!=="$"&&oe!=="as"&&(oe==="forwardedAs"?J.as=ie[oe]:(ir?ir(oe,A,se):!Gr||A(oe))&&(J[oe]=ie[oe]));return Rt.style&&Er.style!==Rt.style&&(J.style=ce({},Rt.style,{},Er.style)),J.className=Array.prototype.concat(Ur,q,wr!==q?wr:null,Rt.className,Er.className).filter(Boolean).join(" "),J.ref=pt,(0,v.createElement)(se,J)}(Be,Ge,Bt,ke)};return gt.displayName=we,(Be=v.forwardRef(gt)).attrs=st,Be.componentStyle=Qe,Be.displayName=we,Be.shouldForwardProp=At,Be.foldedComponentIds=b?Array.prototype.concat(d.foldedComponentIds,d.styledComponentId):z,Be.styledComponentId=Ve,Be.target=b?d.target:d,Be.withComponent=function(Ge){var Bt=y.componentId,St=function(Mr,on){if(Mr==null)return{};var fr,gr,zr={},Ur=Object.keys(Mr);for(gr=0;gr<Ur.length;gr++)fr=Ur[gr],on.indexOf(fr)>=0||(zr[fr]=Mr[fr]);return zr}(y,["componentId"]),Rt=Bt&&Bt+"-"+(kn(Ge)?Ge:An(P(Ge)));return Yn(Ge,ce({},St,{attrs:st,componentId:Rt}),f)},Object.defineProperty(Be,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Ge){this._foldedDefaultProps=b?Qn({},d.defaultProps,Ge):Ge}}),Object.defineProperty(Be,"toString",{value:function(){return"."+Be.styledComponentId}}),R&&U()(Be,d,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),Be}var Xn=function(d){return function y(f,b,R){if(R===void 0&&(R=a),!(0,dt.isValidElementType)(b))return lt(1,String(b));var H=function(){return f(b,R,nn.apply(void 0,arguments))};return H.withConfig=function(W){return y(f,b,ce({},R,{},W))},H.attrs=function(W){return y(f,b,ce({},R,{attrs:Array.prototype.concat(R.attrs,W).filter(Boolean)}))},H}(Yn,d)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(d){Xn[d]=Xn(d)});var So=function(){function d(f,b){this.rules=f,this.componentId=b,this.isStatic=Kt(f),ft.registerId(this.componentId+1)}var y=d.prototype;return y.createStyles=function(f,b,R,H){var W=H(Pr(this.rules,b,R,H).join(""),""),ee=this.componentId+f;R.insertRules(ee,ee,W)},y.removeStyles=function(f,b){b.clearRules(this.componentId+f)},y.renderStyles=function(f,b,R,H){f>2&&ft.registerId(this.componentId+f),this.removeStyles(f,R),this.createStyles(f,b,R,H)},d}();function Kn(d){for(var y=arguments.length,f=new Array(y>1?y-1:0),b=1;b<y;b++)f[b-1]=arguments[b];var R=nn.apply(void 0,[d].concat(f)),H="sc-global-"+Sn(JSON.stringify(R)),W=new So(R,H);function ee(le){var we=rn(),Ve=xn(),st=(0,v.useContext)(_r),At=(0,v.useRef)(we.allocateGSInstance(H)).current;return we.server&&De(At,le,we,st,Ve),(0,v.useLayoutEffect)(function(){if(!we.server)return De(At,le,we,st,Ve),function(){return W.removeStyles(At,we)}},[At,le,we,st,Ve]),null}function De(le,we,Ve,st,At){if(W.isStatic)W.renderStyles(le,en,Ve,At);else{var Be=ce({},we,{theme:vr(we,st,ee.defaultProps)});W.renderStyles(le,Be,Ve,At)}}return v.memo(ee)}function pn(d){for(var y=arguments.length,f=new Array(y>1?y-1:0),b=1;b<y;b++)f[b-1]=arguments[b];var R=nn.apply(void 0,[d].concat(f)).join(""),H=Sn(R);return new Rn(H,R)}var Jn=function(){function d(){var f=this;this._emitSheetCSS=function(){var b=f.instance.toString();if(!b)return"";var R=be();return"<style "+[R&&'nonce="'+R+'"',pe+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+b+"</style>"},this.getStyleTags=function(){return f.sealed?lt(2):f._emitSheetCSS()},this.getStyleElement=function(){var b;if(f.sealed)return lt(2);var R=((b={})[pe]="",b["data-styled-version"]="5.3.11",b.dangerouslySetInnerHTML={__html:f.instance.toString()},b),H=be();return H&&(R.nonce=H),[v.createElement("style",ce({},R,{key:"sc-0-0"}))]},this.seal=function(){f.sealed=!0},this.instance=new ft({isServer:!0}),this.sealed=!1}var y=d.prototype;return y.collectStyles=function(f){return this.sealed?lt(2):v.createElement(Wn,{sheet:this.instance},f)},y.interleaveWithNodeStream=function(f){return lt(3)},d}(),qn=function(d){var y=r.forwardRef(function(f,b){var R=s(_r),H=d.defaultProps,W=vr(f,R,H);return r.createElement(d,ce({},f,{theme:W,ref:b}))});return m(y,d),y.displayName="WithTheme("+P(d)+")",y},io=function(){return s(_r)},hn={StyleSheet:ft,masterSheet:Zn},$t=Xn},62085:function(je,ne,N){"use strict";je.exports=N.p+"static/ms_sans_serif.4095bf42.woff2"},77430:function(je,ne,N){"use strict";je.exports=N.p+"static/ms_sans_serif_bold.1d0aba83.woff2"},68400:function(je){function ne(N,dt){return dt||(dt=N.slice(0)),Object.freeze(Object.defineProperties(N,{raw:{value:Object.freeze(dt)}}))}je.exports=ne,je.exports.__esModule=!0,je.exports.default=je.exports},60299:function(je,ne,N){"use strict";N.d(ne,{xG:function(){return pe},zx:function(){return ve},o8:function(){return hn},mw:function(){return dt}});var dt=`
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

`,v=N(94589),yt=N(48764).lW;const Yt="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",u="inset 2px 2px 3px rgba(0,0,0,0.2)",x=()=>v.iv`
  -webkit-text-fill-color: ${({theme:t})=>t.materialTextDisabled};
  color: ${({theme:t})=>t.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:t})=>t.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,g=({background:t="material",color:i="materialText"}={})=>v.iv`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:h})=>h[t]};
  color: ${({theme:h})=>h[i]};
`,k=({mainColor:t="black",secondaryColor:i="transparent",pixelSize:h=2})=>v.iv`
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
`,A={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},I=({theme:t,topLeftInner:i,bottomRightInner:h,hasShadow:w=!1,hasInsetShadow:$=!1})=>[w?Yt:!1,$?u:!1,i!==null?`inset 1px 1px 0px 1px ${t[i]}`:!1,h!==null?`inset -1px -1px 0 1px ${t[h]}`:!1].filter(Boolean).join(", "),U=({invert:t=!1,style:i="button"}={})=>{const h={topLeftOuter:t?"bottomRightOuter":"topLeftOuter",topLeftInner:t?"bottomRightInner":"topLeftInner",bottomRightInner:t?"topLeftInner":"bottomRightInner",bottomRightOuter:t?"topLeftOuter":"bottomRightOuter"};return v.iv`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:w})=>w[A[i][h.topLeftOuter]]};
    border-top-color: ${({theme:w})=>w[A[i][h.topLeftOuter]]};
    border-right-color: ${({theme:w})=>w[A[i][h.bottomRightOuter]]};
    border-bottom-color: ${({theme:w})=>w[A[i][h.bottomRightOuter]]};
    box-shadow: ${({theme:w,shadow:$})=>I({theme:w,topLeftInner:A[i][h.topLeftInner],bottomRightInner:A[i][h.bottomRightInner],hasShadow:$})};
  `},Ie=()=>v.iv`
  outline: 2px dotted ${({theme:t})=>t.materialText};
`,Fe=typeof btoa!="undefined"?btoa:t=>yt.from(t).toString("base64"),D=(t,i=0)=>{const h=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${i} 13 13)">
      <polygon fill="${t}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Fe(h)})`},z=(t="default")=>v.iv`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:i})=>k({mainColor:t==="flat"?i.flatLight:i.material,secondaryColor:t==="flat"?i.canvas:i.borderLightest})}
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
    background-image: ${({theme:i})=>D(i.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:i})=>D(i.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:i})=>D(i.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:i})=>D(i.materialText,0)};
  }
`;var a=N(62435);const Oe=v.ZP.a`
  color: ${({theme:t})=>t.anchor};
  font-size: inherit;
  text-decoration: ${({underline:t})=>t?"underline":"none"};
  &:visited {
    color: ${({theme:t})=>t.anchorVisited};
  }
`,P=(0,a.forwardRef)(($,w)=>{var O=$,{children:t,underline:i=!0}=O,h=et(O,["children","underline"]);return a.createElement(Oe,$e({ref:w,underline:i},h),t)});P.displayName="Anchor";const Z=v.ZP.header`
  ${U()};
  ${g()};

  position: ${t=>{var i;return(i=t.position)!==null&&i!==void 0?i:t.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,pe=(0,a.forwardRef)((O,$)=>{var L=O,{children:t,fixed:i=!0,position:h="fixed"}=L,w=et(L,["children","fixed","position"]);return a.createElement(Z,$e({fixed:i,position:i!==!1?h:void 0,ref:$},w),t)});pe.displayName="AppBar";const Ze=()=>{};function nr(t,i,h){return h!==null&&t>h?h:i!==null&&t<i?i:t}function at(t){if(Math.abs(t)<1){const h=t.toExponential().split("e-"),w=h[0].split(".")[1];return(w?w.length:0)+parseInt(h[1],10)}const i=t.toString().split(".")[1];return i?i.length:0}function en(t,i,h){const w=Math.round((t-h)/i)*i+h;return Number(w.toFixed(at(i)))}function or(t){return typeof t=="number"?`${t}px`:t}const Ln=v.ZP.div`
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
`,lt=v.ZP.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Rr=(0,a.forwardRef)((Y,F)=>{var _=Y,{alt:t="",children:i,noBorder:h=!1,size:w=35,square:$=!1,src:O}=_,L=et(_,["alt","children","noBorder","size","square","src"]);return a.createElement(Ln,$e({noBorder:h,ref:F,size:or(w),square:$,src:O},L),O?a.createElement(lt,{src:O,alt:t}):i)});Rr.displayName="Avatar";const ht={sm:"28px",md:"36px",lg:"44px"},Wr=v.iv`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:t="md"})=>ht[t]};
  width: ${({fullWidth:t,size:i="md",square:h})=>t?"100%":h?ht[i]:"auto"};
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
`,cr=v.ZP.button`
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
            ${!t&&!i&&Ie}
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
          ${t?k({mainColor:w.material,secondaryColor:w.borderLightest}):""}
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
            ${!t&&!i&&Ie}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${t?"0":"1px"};
          }
        `}
  ${Wr}
`,ve=(0,a.forwardRef)((ge,ze)=>{var Pe=ge,{onClick:t,disabled:i=!1,children:h,type:w="button",fullWidth:$=!1,size:O="md",square:L=!1,active:F=!1,onTouchStart:Y=Ze,primary:_=!1,variant:re="default"}=Pe,Q=et(Pe,["onClick","disabled","children","type","fullWidth","size","square","active","onTouchStart","primary","variant"]);return a.createElement(cr,$e({active:F,disabled:i,$disabled:i,fullWidth:$,onClick:i?void 0:t,onTouchStart:Y,primary:_,ref:ze,size:O,square:L,type:w,variant:re},Q),h)});ve.displayName="Button";function Ke({defaultValue:t,onChange:i,onChangePropName:h="onChange",readOnly:w,value:$,valuePropName:O="value"}){const L=$!==void 0,[F,Y]=(0,a.useState)(t),_=(0,a.useCallback)(re=>{L||Y(re)},[L]);if(L&&typeof i!="function"&&!w){const re=`Warning: You provided a \`${O}\` prop to a component without an \`${h}\` handler.${O==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${h}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${h}\` function that updates \`${O}\`.`}`;console.warn(re)}return[L?$:F,_]}const Or=v.ZP.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${t=>ht[t.size]};
  width: ${t=>t.square?ht[t.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${t=>t.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${t=>ht[t.size]};
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
`,Tt=(0,a.forwardRef)((Y,F)=>{var _=Y,{size:t="lg",disabled:i,square:h,children:w,onClick:$,primary:O}=_,L=et(_,["size","disabled","square","children","onClick","primary"]);return a.createElement(Or,$e({$disabled:i,size:t,square:h,onClick:i?void 0:$,primary:O,role:"menuitem",ref:F,"aria-disabled":i},L),w)});Tt.displayName="MenuListItem";const de=v.ZP.ul.attrs(()=>({role:"menu"}))`
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
`;de.displayName="MenuList";const fe=20,Je=v.ZP.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${fe}px;
  height: ${fe}px;
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

  ${Or} & {
    margin: 0;
    height: 100%;
  }
  ${Or}:hover & {
    ${({$disabled:t,theme:i})=>!t&&v.iv`
        color: ${i.materialTextInvert};
      `};
  }
`,wt=v.ZP.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Je}:focus ~ & {
    ${Ie}
  }
  ${Je}:not(:disabled) ~ &:active {
    ${Ie}
  }
`,qe=v.ZP.div`
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
`,Xt=v.ZP.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${z()}
`,It=(0,a.forwardRef)(($,w)=>{var O=$,{children:t,shadow:i=!0}=O,h=et(O,["children","shadow"]);return a.createElement(qe,$e({ref:w,shadow:i},h),a.createElement(Xt,null,t))});It.displayName="ScrollView";const ur=v.iv`
  width: ${fe}px;
  height: ${fe}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,vt=(0,v.ZP)(qe)`
  ${ur}
  width: ${fe}px;
  height: ${fe}px;
  background: ${({$disabled:t,theme:i})=>t?i.material:i.canvas};
  &:before {
    box-shadow: none;
  }
`,ft=v.ZP.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:t,theme:i})=>t?i.flatLight:i.canvas};
  ${ur}
  width: ${fe-4}px;
  height: ${fe-4}px;
  outline: none;
  border: 2px solid ${({theme:t})=>t.flatDark};
  background: ${({$disabled:t,theme:i})=>t?i.flatLight:i.canvas};
`,Nr=v.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Sr=v.ZP.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:t,theme:i})=>k({mainColor:t?i.checkmarkDisabled:i.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,$r={flat:ft,default:vt},Cr=(0,a.forwardRef)((ze,Q)=>{var ge=ze,{checked:t,className:i="",defaultChecked:h=!1,disabled:w=!1,indeterminate:$=!1,label:O="",onChange:L=Ze,style:F={},value:Y,variant:_="default"}=ge,re=et(ge,["checked","className","defaultChecked","disabled","indeterminate","label","onChange","style","value","variant"]);var Pe;const[rt,ue]=Ke({defaultValue:h,onChange:L,readOnly:(Pe=re.readOnly)!==null&&Pe!==void 0?Pe:w,value:t}),Re=(0,a.useCallback)(Te=>{const Me=Te.target.checked;ue(Me),L(Te)},[L,ue]),We=$r[_];let me=null;return $?me=Sr:rt&&(me=Nr),a.createElement(be,{$disabled:w,className:i,style:F},a.createElement(Je,$e({disabled:w,onChange:w?void 0:Re,readOnly:w,type:"checkbox",value:Y,checked:rt,"data-indeterminate":$,ref:Q},re)),a.createElement(We,{$disabled:w,role:"presentation"},me&&a.createElement(me,{$disabled:w,variant:_})),O&&a.createElement(wt,null,O))});Cr.displayName="Checkbox";const Lt=v.ZP.div`
  ${({orientation:t,theme:i,size:h="100%"})=>t==="vertical"?`
    height: ${or(h)};
    border-left: 2px solid ${i.borderDark};
    border-right: 2px solid ${i.borderLightest};
    margin: 0;
    `:`
    width: ${or(h)};
    border-bottom: 2px solid ${i.borderLightest};
    border-top: 2px solid ${i.borderDark};
    margin: 0;
    `}
`;Lt.displayName="Separator";const Kt=(0,v.ZP)(cr)`
  padding-left: 8px;
`,Dt=(0,v.ZP)(Lt)`
  height: 21px;
  position: relative;
  top: 0;
`,bn=v.ZP.input`
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
`,Vr=v.ZP.div`
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
  ${bn}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ie}
    outline-offset: -8px;
  }
`,tn=v.ZP.span`
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
`,jn=(0,a.forwardRef)((F,L)=>{var Y=F,{value:t,defaultValue:i,onChange:h=Ze,disabled:w=!1,variant:$="default"}=Y,O=et(Y,["value","defaultValue","onChange","disabled","variant"]);var _;const[re,Q]=Ke({defaultValue:i,onChange:h,readOnly:(_=O.readOnly)!==null&&_!==void 0?_:w,value:t}),ze=ge=>{const Pe=ge.target.value;Q(Pe),h(ge)};return a.createElement(Kt,{disabled:w,as:"div",variant:$,size:"md"},a.createElement(bn,$e({onChange:ze,readOnly:w,disabled:w,value:re!=null?re:"#008080",type:"color",ref:L},O)),a.createElement(Vr,{$disabled:w,color:re!=null?re:"#008080",role:"presentation"}),$==="default"&&a.createElement(Dt,{orientation:"vertical"}),a.createElement(tn,{$disabled:w,variant:$}))});jn.displayName="ColorInput";const un=v.ZP.div`
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
      ${k({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:t})}
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
`,Fn=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],yn=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Zn(w){var $=w,{digit:t=0,pixelSize:i=2}=$,h=et($,["digit","pixelSize"]);const O=yn[Number(t)].map((L,F)=>L?`${Fn[F]} active`:Fn[F]);return a.createElement(un,$e({pixelSize:i},h),O.map((L,F)=>a.createElement("span",{className:L,key:F})))}const kr=v.ZP.div`
  ${U({style:"status"})}
  display: inline-flex;
  background: #000000;
`,rn={sm:1,md:2,lg:3,xl:4},xn=(0,a.forwardRef)((O,$)=>{var L=O,{value:t=0,minLength:i=3,size:h="md"}=L,w=et(L,["value","minLength","size"]);const F=(0,a.useMemo)(()=>t.toString().padStart(i,"0").split(""),[i,t]);return a.createElement(kr,$e({ref:$},w),F.map((Y,_)=>a.createElement(Zn,{digit:Y,pixelSize:rn[h],key:_})))});xn.displayName="Counter";const Wn=v.iv`
  display: flex;
  align-items: center;
  width: ${({fullWidth:t})=>t?"100%":"auto"};
  min-height: ${ht.md};
`,Rn=(0,v.ZP)(qe).attrs({"data-testid":"variant-default"})`
  ${Wn}
  background: ${({$disabled:t,theme:i})=>t?i.material:i.canvas};
`,no=v.ZP.div.attrs({"data-testid":"variant-flat"})`
  ${B()}
  ${Wn}
  position: relative;
`,dn=v.iv`
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
`,X=v.ZP.input`
  ${dn}
  padding: 0 8px;
`,T=v.ZP.textarea`
  ${dn}
  padding: 8px;
  resize: none;
  ${({variant:t})=>z(t)}
`,K=(0,a.forwardRef)((_,Y)=>{var re=_,{className:t,disabled:i=!1,fullWidth:h,onChange:w=Ze,shadow:$=!0,style:O,variant:L="default"}=re,F=et(re,["className","disabled","fullWidth","onChange","shadow","style","variant"]);const Q=L==="flat"?no:Rn,ze=(0,a.useMemo)(()=>{var ge;return F.multiline?a.createElement(T,$e({disabled:i,onChange:i?void 0:w,readOnly:i,ref:Y,variant:L},F)):a.createElement(X,$e({disabled:i,onChange:i?void 0:w,readOnly:i,ref:Y,type:(ge=F.type)!==null&&ge!==void 0?ge:"text",variant:L},F))},[i,w,F,Y,L]);return a.createElement(Q,{className:t,fullWidth:h,$disabled:i,shadow:$,style:O},ze)});K.displayName="TextInput";const j=v.ZP.div`
  display: inline-flex;
  align-items: center;
`,Pr=(0,v.ZP)(ve)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:t})=>t==="flat"?v.iv`
          height: calc(50% - 1px);
        `:v.iv`
          height: 50%;
        `}
`,wn=v.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:t})=>t==="flat"?v.iv`
          height: calc(${ht.md} - 4px);
        `:v.iv`
          height: ${ht.md};
          margin-left: 2px;
        `}
`,nn=v.ZP.span`
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
  ${Pr}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
    );
    ${({invert:t})=>t?v.iv`
            border-bottom-color: ${({theme:i})=>i.materialTextDisabled};
          `:v.iv`
            border-top-color: ${({theme:i})=>i.materialTextDisabled};
          `}
  }
`,Vn=(0,a.forwardRef)((Pe,ge)=>{var rt=Pe,{className:t,defaultValue:i,disabled:h=!1,max:w,min:$,onChange:O,readOnly:L,step:F=1,style:Y,value:_,variant:re="default",width:Q}=rt,ze=et(rt,["className","defaultValue","disabled","max","min","onChange","readOnly","step","style","value","variant","width"]);const[ue,Re]=Ke({defaultValue:i,onChange:O,readOnly:L,value:_}),We=(0,a.useCallback)(mr=>{const sr=parseFloat(mr.target.value);Re(sr)},[Re]),me=(0,a.useCallback)(mr=>{const sr=nr(parseFloat(((ue!=null?ue:0)+mr).toFixed(2)),$!=null?$:null,w!=null?w:null);Re(sr),O==null||O(sr)},[w,$,O,Re,ue]),Te=(0,a.useCallback)(()=>{ue!==void 0&&(O==null||O(ue))},[O,ue]),Me=(0,a.useCallback)(()=>{me(F)},[me,F]),_e=(0,a.useCallback)(()=>{me(-F)},[me,F]),Zt=re==="flat"?"flat":"raised";return a.createElement(j,$e({className:t,style:cn($e({},Y),{width:Q!==void 0?or(Q):"auto"})},ze),a.createElement(K,{value:ue,variant:re,onChange:We,disabled:h,type:"number",readOnly:L,ref:ge,fullWidth:!0,onBlur:Te}),a.createElement(wn,{variant:re},a.createElement(Pr,{"data-testid":"increment",variant:Zt,disabled:h||L,onClick:Me},a.createElement(nn,{invert:!0})),a.createElement(Pr,{"data-testid":"decrement",variant:Zt,disabled:h||L,onClick:_e},a.createElement(nn,null))))});Vn.displayName="NumberInput";function wo(){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let i="";for(let h=0;h<10;h+=1)i+=t[Math.floor(Math.random()*t.length)];return i}const dr=t=>(0,a.useMemo)(()=>t!=null?t:wo(),[t]),vr=v.iv`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,_n=v.iv`
  background: ${({theme:t})=>t.hoverBackground};
  color: ${({theme:t})=>t.canvasTextInvert};
`,On=v.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,An=v.ZP.div`
  ${vr}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${On}:focus & {
    ${_n}
    border: 2px dotted ${({theme:t})=>t.focusSecondary};
  }
`,Sn=v.iv`
  height: ${ht.md};
  display: inline-block;
  color: ${({$disabled:t=!1,theme:i})=>t?x():i.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
`,kn=(0,v.ZP)(qe)`
  ${Sn}
  background: ${({$disabled:t=!1,theme:i})=>t?i.material:i.canvas};
  &:focus {
    outline: 0;
  }
`,Mn=v.ZP.div`
  ${B()}
  ${Sn}
  background: ${({$disabled:t=!1,theme:i})=>t?i.flatLight:i.canvas};
`,oo=v.ZP.select`
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
  ${vr}
  cursor: pointer;
  &:disabled {
    ${x()};
    background: ${({theme:t})=>t.material};
    cursor: default;
  }
`,Un=(0,v.ZP)(cr).attrs(()=>({"aria-hidden":"true"}))`
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
`,Qn=v.ZP.span`
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
  ${Un}:active & {
    margin-top: 2px;
  }
`,_r=v.ZP.ul`
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
  box-shadow: ${Yt};
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
`,Ao=v.ZP.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ht.md} - 4px);
  line-height: calc(${ht.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:t})=>t.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:t})=>t?_n:""}
  user-select: none;
`,Gn=[],fn=({className:t,defaultValue:i,disabled:h,native:w,onChange:$,options:O=Gn,readOnly:L,style:F,value:Y,variant:_,width:re})=>{var Q;const ze=(0,a.useMemo)(()=>O.filter(Boolean),[O]),[ge,Pe]=Ke({defaultValue:i!=null?i:(Q=ze==null?void 0:ze[0])===null||Q===void 0?void 0:Q.value,onChange:$,readOnly:L,value:Y}),rt=!(h||L),ue=(0,a.useMemo)(()=>({className:t,style:cn($e({},F),{width:re})}),[t,F,re]),Re=(0,a.useMemo)(()=>a.createElement(Un,{as:"div","data-testid":"select-button",$disabled:h,native:w,tabIndex:-1,variant:_==="flat"?"flat":"raised"},a.createElement(Qn,{"data-testid":"select-icon",$disabled:h})),[h,w,_]),We=(0,a.useMemo)(()=>_==="flat"?Mn:kn,[_]);return(0,a.useMemo)(()=>({isEnabled:rt,options:ze,value:ge,setValue:Pe,wrapperProps:ue,DropdownButton:Re,Wrapper:We}),[Re,We,rt,ze,Pe,ge,ue])},Yn={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Xn=1e3,So=({onBlur:t,onChange:i,onClose:h,onFocus:w,onKeyDown:$,onMouseDown:O,onOpen:L,open:F,options:Y,readOnly:_,value:re,selectRef:Q,setValue:ze,wrapperRef:ge})=>{const Pe=(0,a.useRef)(null),rt=(0,a.useRef)([]),ue=(0,a.useRef)(0),Re=(0,a.useRef)(0),We=(0,a.useRef)(),me=(0,a.useRef)("search"),Te=(0,a.useRef)(""),Me=(0,a.useRef)(),[_e,Zt]=Ke({defaultValue:!1,onChange:L,onChangePropName:"onOpen",readOnly:_,value:F,valuePropName:"open"}),mr=(0,a.useMemo)(()=>{const M=Y.findIndex(ye=>ye.value===re);return ue.current=nr(M,0,null),Y[M]},[Y,re]),[sr,er]=(0,a.useState)(Y[0]),Vt=(0,a.useCallback)(M=>{const ye=Pe.current,it=rt.current[M];if(!it||!ye){We.current=M;return}We.current=void 0;const Gt=ye.clientHeight,Et=ye.scrollTop,Nt=ye.scrollTop+Gt,rr=it.offsetTop,Fr=it.offsetHeight,Xr=it.offsetTop+it.offsetHeight;rr<Et&&ye.scrollTo(0,rr),Xr>Nt&&ye.scrollTo(0,rr-Gt+Fr),it.focus({preventScroll:!0})},[Pe]),kt=(0,a.useCallback)((M,{scroll:ye}={})=>{var it;const Gt=Y.length-1;let Et;switch(M){case"first":{Et=0;break}case"last":{Et=Gt;break}case"next":{Et=nr(Re.current+1,0,Gt);break}case"previous":{Et=nr(Re.current-1,0,Gt);break}case"selected":{Et=nr((it=ue.current)!==null&&it!==void 0?it:0,0,Gt);break}default:Et=M}Re.current=Et,er(Y[Et]),ye&&Vt(Et)},[Re,Y,Vt]),_t=(0,a.useCallback)(({fromEvent:M})=>{Zt(!0),kt("selected",{scroll:!0}),L==null||L({fromEvent:M})},[kt,L,Zt]),tr=(0,a.useCallback)(()=>{me.current="search",Te.current="",clearTimeout(Me.current)},[]),pr=(0,a.useCallback)(({focusSelect:M,fromEvent:ye})=>{var it;h==null||h({fromEvent:ye}),Zt(!1),er(Y[0]),tr(),We.current=void 0,M&&((it=Q.current)===null||it===void 0||it.focus())},[tr,h,Y,Q,Zt]),Ot=(0,a.useCallback)(({fromEvent:M})=>{_e?pr({focusSelect:!1,fromEvent:M}):_t({fromEvent:M})},[pr,_t,_e]),Ut=(0,a.useCallback)((M,{fromEvent:ye})=>{ue.current!==M&&(ue.current=M,ze(Y[M].value),i==null||i(Y[M],{fromEvent:ye}))},[i,Y,ze]),Wt=(0,a.useCallback)(({focusSelect:M,fromEvent:ye})=>{Ut(Re.current,{fromEvent:ye}),pr({focusSelect:M,fromEvent:ye})},[pr,Ut]),jr=(0,a.useCallback)((M,{fromEvent:ye,select:it})=>{var Gt;switch(me.current==="cycleFirstLetter"&&M!==Te.current&&(me.current="search"),M===Te.current?me.current="cycleFirstLetter":Te.current+=M,me.current){case"search":{let Et=Y.findIndex(Nt=>{var rr;return((rr=Nt.label)===null||rr===void 0?void 0:rr.toLocaleUpperCase().indexOf(Te.current))===0});Et<0&&(Et=Y.findIndex(Nt=>{var rr;return((rr=Nt.label)===null||rr===void 0?void 0:rr.toLocaleUpperCase().indexOf(M))===0}),Te.current=M),Et>=0&&(it?Ut(Et,{fromEvent:ye}):kt(Et,{scroll:!0}));break}case"cycleFirstLetter":{const Et=it?(Gt=ue.current)!==null&&Gt!==void 0?Gt:-1:Re.current;let Nt=Y.findIndex((rr,Fr)=>{var Xr;return Fr>Et&&((Xr=rr.label)===null||Xr===void 0?void 0:Xr.toLocaleUpperCase().indexOf(M))===0});Nt<0&&(Nt=Y.findIndex(rr=>{var Fr;return((Fr=rr.label)===null||Fr===void 0?void 0:Fr.toLocaleUpperCase().indexOf(M))===0})),Nt>=0&&(it?Ut(Nt,{fromEvent:ye}):kt(Nt,{scroll:!0}));break}}clearTimeout(Me.current),Me.current=setTimeout(()=>{me.current==="search"&&(Te.current="")},Xn)},[kt,Y,Ut]),mt=(0,a.useCallback)(M=>{var ye;M.button===0&&(M.preventDefault(),(ye=Q.current)===null||ye===void 0||ye.focus(),Ot({fromEvent:M}),O==null||O(M))},[O,Q,Ot]),Qt=(0,a.useCallback)(M=>{Wt({focusSelect:!0,fromEvent:M})},[Wt]),br=(0,a.useCallback)(M=>{const{altKey:ye,code:it,ctrlKey:Gt,metaKey:Et,shiftKey:Nt}=M,{ARROW_DOWN:rr,ARROW_UP:Fr,END:Xr,ENTER:Hn,ESC:yo,HOME:Dr,SPACE:Kr,TAB:Jr}=Yn,ro=ye||Gt||Et||Nt;if(!(it===Jr&&(ye||Gt||Et)||it!==Jr&&ro))switch(it){case rr:{if(M.preventDefault(),!_e){_t({fromEvent:M});return}kt("next",{scroll:!0});break}case Fr:{if(M.preventDefault(),!_e){_t({fromEvent:M});return}kt("previous",{scroll:!0});break}case Xr:{if(M.preventDefault(),!_e){_t({fromEvent:M});return}kt("last",{scroll:!0});break}case Hn:{if(!_e)return;M.preventDefault(),Wt({focusSelect:!0,fromEvent:M});break}case yo:{if(!_e)return;M.preventDefault(),pr({focusSelect:!0,fromEvent:M});break}case Dr:{if(M.preventDefault(),!_e){_t({fromEvent:M});return}kt("first",{scroll:!0});break}case Kr:{M.preventDefault(),_e?Wt({focusSelect:!0,fromEvent:M}):_t({fromEvent:M});break}case Jr:{if(!_e)return;Nt||M.preventDefault(),Wt({focusSelect:!Nt,fromEvent:M});break}default:!ro&&it.match(/^Key/)&&(M.preventDefault(),M.stopPropagation(),jr(it.replace(/^Key/,""),{select:!_e,fromEvent:M}))}},[kt,pr,_e,_t,jr,Wt]),sn=(0,a.useCallback)(M=>{br(M),$==null||$(M)},[br,$]),Yr=(0,a.useCallback)(M=>{kt(M)},[kt]),He=(0,a.useCallback)(M=>{_e||(tr(),t==null||t(M))},[tr,t,_e]),Ye=(0,a.useCallback)(M=>{tr(),w==null||w(M)},[tr,w]),xt=(0,a.useCallback)(M=>{Pe.current=M,We.current!==void 0&&Vt(We.current)},[Vt]),ut=(0,a.useCallback)((M,ye)=>{rt.current[ye]=M,We.current===ye&&Vt(We.current)},[Vt]);return(0,a.useEffect)(()=>{if(!_e)return()=>{};const M=ye=>{var it;const Gt=ye.target;!((it=ge.current)===null||it===void 0)&&it.contains(Gt)||(ye.preventDefault(),pr({focusSelect:!1,fromEvent:ye}))};return document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[pr,_e,ge]),(0,a.useMemo)(()=>({activeOption:sr,handleActivateOptionIndex:Yr,handleBlur:He,handleButtonKeyDown:sn,handleDropdownKeyDown:br,handleFocus:Ye,handleMouseDown:mt,handleOptionClick:Qt,handleSetDropdownRef:xt,handleSetOptionRef:ut,open:_e,selectedOption:mr}),[sr,Yr,He,sn,Ye,br,mt,Qt,xt,ut,_e,mr])},Kn=(0,a.forwardRef)((ze,Q)=>{var ge=ze,{className:t,defaultValue:i,disabled:h,onChange:w,options:$,readOnly:O,style:L,value:F,variant:Y,width:_}=ge,re=et(ge,["className","defaultValue","disabled","onChange","options","readOnly","style","value","variant","width"]);const{isEnabled:Pe,options:rt,setValue:ue,value:Re,DropdownButton:We,Wrapper:me}=fn({defaultValue:i,disabled:h,native:!0,onChange:w,options:$,readOnly:O,value:F,variant:Y}),Te=(0,a.useCallback)(Me=>{const _e=rt.find(Zt=>Zt.value===Me.target.value);_e&&(ue(_e.value),w==null||w(_e,{fromEvent:Me}))},[w,rt,ue]);return a.createElement(me,{className:t,style:cn($e({},L),{width:_})},a.createElement(On,null,a.createElement(oo,cn($e({},re),{disabled:h,onChange:Pe?Te:Ze,ref:Q,value:Re}),rt.map((Me,_e)=>{var Zt;return a.createElement("option",{key:`${Me.value}-${_e}`,value:Me.value},(Zt=Me.label)!==null&&Zt!==void 0?Zt:Me.value)})),We))});Kn.displayName="SelectNative";function pn({activateOptionIndex:t,active:i,index:h,onClick:w,option:$,selected:O,setRef:L}){const F=(0,a.useCallback)(()=>{t(h)},[t,h]),Y=(0,a.useCallback)(re=>{L(re,h)},[h,L]),_=dr();return a.createElement(Ao,{active:i,"aria-selected":O?"true":void 0,"data-value":$.value,id:_,onClick:w,onMouseEnter:F,ref:Y,role:"option",tabIndex:0},$.label)}function Jn(Vt,er){var kt=Vt,{"aria-label":t,"aria-labelledby":i,className:h,defaultValue:w,disabled:$=!1,formatDisplay:O,inputProps:L,labelId:F,menuMaxHeight:Y,name:_,onBlur:re,onChange:Q,onClose:ze,onFocus:ge,onKeyDown:Pe,onMouseDown:rt,onOpen:ue,open:Re,options:We,readOnly:me,shadow:Te=!0,style:Me,variant:_e="default",value:Zt,width:mr="auto"}=kt,sr=et(kt,["aria-label","aria-labelledby","className","defaultValue","disabled","formatDisplay","inputProps","labelId","menuMaxHeight","name","onBlur","onChange","onClose","onFocus","onKeyDown","onMouseDown","onOpen","open","options","readOnly","shadow","style","variant","value","width"]);const{isEnabled:_t,options:tr,setValue:pr,value:Ot,wrapperProps:Ut,DropdownButton:Wt,Wrapper:jr}=fn({className:h,defaultValue:w,disabled:$,native:!1,onChange:Q,options:We,style:Me,readOnly:me,value:Zt,variant:_e,width:mr}),mt=(0,a.useRef)(null),Qt=(0,a.useRef)(null),br=(0,a.useRef)(null),{activeOption:sn,handleActivateOptionIndex:Yr,handleBlur:He,handleButtonKeyDown:Ye,handleDropdownKeyDown:xt,handleFocus:ut,handleMouseDown:M,handleOptionClick:ye,handleSetDropdownRef:it,handleSetOptionRef:Gt,open:Et,selectedOption:Nt}=So({onBlur:re,onChange:Q,onClose:ze,onFocus:ge,onKeyDown:Pe,onMouseDown:rt,onOpen:ue,open:Re,options:tr,value:Ot,selectRef:Qt,setValue:pr,wrapperRef:br});(0,a.useImperativeHandle)(er,()=>({focus:Dr=>{var Kr;(Kr=Qt.current)===null||Kr===void 0||Kr.focus(Dr)},node:mt.current,value:String(Ot)}),[Ot]);const rr=(0,a.useMemo)(()=>Nt?typeof O=="function"?O(Nt):Nt.label:"",[O,Nt]),Fr=_t?1:void 0,Xr=(0,a.useMemo)(()=>Y?{overflow:"auto",maxHeight:Y}:void 0,[Y]),Hn=dr(),yo=(0,a.useMemo)(()=>tr.map((Dr,Kr)=>{const Jr=`${Ot}-${Kr}`,ro=Dr===sn,zo=Dr===Nt;return a.createElement(pn,{activateOptionIndex:Yr,active:ro,index:Kr,key:Jr,onClick:ye,option:Dr,selected:zo,setRef:Gt})}),[sn,Yr,ye,Gt,tr,Nt,Ot]);return a.createElement(jr,cn($e({},Ut),{$disabled:$,ref:br,shadow:Te,style:cn($e({},Me),{width:mr})}),a.createElement("input",$e({name:_,ref:mt,type:"hidden",value:String(Ot)},L)),a.createElement(On,$e({"aria-disabled":$,"aria-expanded":Et,"aria-haspopup":"listbox","aria-label":t,"aria-labelledby":i!=null?i:F,"aria-owns":_t&&Et?Hn:void 0,onBlur:He,onFocus:ut,onKeyDown:Ye,onMouseDown:_t?M:rt,ref:Qt,role:"button",tabIndex:Fr},sr),a.createElement(An,null,rr),Wt),_t&&Et&&a.createElement(_r,{id:Hn,onKeyDown:xt,ref:it,role:"listbox",style:Xr,tabIndex:0,variant:_e},yo))}const qn=(0,a.forwardRef)(Jn);qn.displayName="Select";const io=v.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${t=>t.noPadding?"0":"4px"};
`,hn=(0,a.forwardRef)(function(O,$){var L=O,{children:i,noPadding:h=!1}=L,w=et(L,["children","noPadding"]);return a.createElement(io,$e({noPadding:h,ref:$},w),i)});hn.displayName="Toolbar";const $t=v.ZP.div`
  padding: 16px;
`,d=(0,a.forwardRef)(function($,w){var O=$,{children:i}=O,h=et(O,["children"]);return a.createElement($t,$e({ref:w},h),i)});d.displayName="WindowContent";const y=v.ZP.div`
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

  ${cr} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,f=(0,a.forwardRef)(function(O,$){var L=O,{active:i=!0,children:h}=L,w=et(L,["active","children"]);return a.createElement(y,$e({active:i,ref:$},w),h)});f.displayName="WindowHeader";const b=v.ZP.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${U({style:"window"})}
  ${g()}
`,R=v.ZP.span`
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
`,H=(0,a.forwardRef)((L,O)=>{var F=L,{children:t,resizable:i=!1,resizeRef:h,shadow:w=!0}=F,$=et(F,["children","resizable","resizeRef","shadow"]);return a.createElement(b,$e({ref:O,shadow:w},$),t,i&&a.createElement(R,{"data-testid":"resizeHandle",ref:h}))});H.displayName="Window";const W=(0,v.ZP)(It)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:t})=>t.canvas};
`,ee=v.ZP.div`
  display: flex;
  background: ${({theme:t})=>t.materialDark};
  color: #dfe0e3;
`,De=v.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,le=v.ZP.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,we=v.ZP.span`
  cursor: pointer;

  background: ${({active:t,theme:i})=>t?i.hoverBackground:"transparent"};
  color: ${({active:t,theme:i})=>t?i.canvasTextInvert:i.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:t,active:i})=>i?"none":t.materialDark};
  }
`,Ve=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function st(t,i){return new Date(t,i+1,0).getDate()}function At(t,i,h){return new Date(t,i,h).getDay()}function Be(t){const i=new Date(Date.parse(t)),h=i.getUTCDate(),w=i.getUTCMonth(),$=i.getUTCFullYear();return{day:h,month:w,year:$}}const Qe=(0,a.forwardRef)(({className:t,date:i=new Date().toISOString(),onAccept:h,onCancel:w,shadow:$=!0},O)=>{const[L,F]=(0,a.useState)(()=>Be(i)),{year:Y,month:_,day:re}=L,Q=(0,a.useCallback)(({value:ue})=>{F(Re=>cn($e({},Re),{month:ue}))},[]),ze=(0,a.useCallback)(ue=>{F(Re=>cn($e({},Re),{year:ue}))},[]),ge=(0,a.useCallback)(ue=>{F(Re=>cn($e({},Re),{day:ue}))},[]),Pe=(0,a.useCallback)(()=>{const ue=[L.year,L.month+1,L.day].map(Re=>String(Re).padStart(2,"0")).join("-");h==null||h(ue)},[L.day,L.month,L.year,h]),rt=(0,a.useMemo)(()=>{const ue=Array.from({length:42}),Re=At(Y,_,1);let We=re;const me=st(Y,_);return We=We<me?We:me,ue.forEach((Te,Me)=>{if(Me>=Re&&Me<me+Re){const _e=Me-Re+1;ue[Me]=a.createElement(le,{key:Me,onClick:()=>{ge(_e)}},a.createElement(we,{active:_e===We},_e))}else ue[Me]=a.createElement(le,{key:Me})}),ue},[re,ge,_,Y]);return a.createElement(H,{className:t,ref:O,shadow:$,style:{margin:20}},a.createElement(f,null,a.createElement("span",{role:"img","aria-label":"\u{1F4C6}"},"\u{1F4C6}"),"Date"),a.createElement(d,null,a.createElement(hn,{noPadding:!0,style:{justifyContent:"space-between"}},a.createElement(qn,{options:Ve,value:_,onChange:Q,width:128,menuMaxHeight:200}),a.createElement(Vn,{value:Y,onChange:ze,width:100})),a.createElement(W,null,a.createElement(ee,null,a.createElement(le,null,"S"),a.createElement(le,null,"M"),a.createElement(le,null,"T"),a.createElement(le,null,"W"),a.createElement(le,null,"T"),a.createElement(le,null,"F"),a.createElement(le,null,"S")),a.createElement(De,null,rt)),a.createElement(hn,{noPadding:!0,style:{justifyContent:"space-between"}},a.createElement(ve,{fullWidth:!0,onClick:w,disabled:!w},"Cancel"),a.createElement(ve,{fullWidth:!0,onClick:h?Pe:void 0,disabled:!h},"OK"))))});Qe.displayName="DatePicker";const ke=t=>{switch(t){case"status":case"well":return v.iv`
        ${U({style:"status"})}
      `;case"window":case"outside":return v.iv`
        ${U({style:"window"})}
      `;case"field":return v.iv`
        ${U({style:"field"})}
      `;default:return v.iv`
        ${U()}
      `}},gt=v.ZP.div`
  position: relative;
  font-size: 1rem;
  ${({variant:t})=>ke(t)}
  ${({variant:t})=>g(t==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ge=(0,a.forwardRef)((O,$)=>{var L=O,{children:t,shadow:i=!1,variant:h="window"}=L,w=et(L,["children","shadow","variant"]);return a.createElement(gt,$e({ref:$,shadow:i,variant:h},w),t)});Ge.displayName="Frame";const Bt=v.ZP.fieldset`
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
`,St=v.ZP.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:t,variant:i})=>i==="flat"?t.canvas:t.material};
`,Rt=(0,a.forwardRef)((L,O)=>{var F=L,{label:t,disabled:i=!1,variant:h="default",children:w}=F,$=et(F,["label","disabled","variant","children"]);return a.createElement(Bt,$e({"aria-disabled":i,$disabled:i,variant:h,ref:O},$),t&&a.createElement(St,{variant:h},t),w)});Rt.displayName="GroupBox";const Mr=v.ZP.div`
  ${({theme:t,size:i="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${or(i)};
  width: 5px;
  border-top: 2px solid ${t.borderLightest};
  border-left: 2px solid ${t.borderLightest};
  border-bottom: 2px solid ${t.borderDark};
  border-right: 2px solid ${t.borderDark};
  background: ${t.material};
`}
`;Mr.displayName="Handle";const on="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",fr=v.ZP.div`
  display: inline-block;
  height: ${({size:t})=>or(t)};
  width: ${({size:t})=>or(t)};
`,gr=v.ZP.span`
  display: block;
  background: ${on};
  background-size: cover;
  width: 100%;
  height: 100%;
`,zr=(0,a.forwardRef)((w,h)=>{var $=w,{size:t=30}=$,i=et($,["size"]);return a.createElement(fr,$e({size:t,ref:h},i),a.createElement(gr,null))});zr.displayName="Hourglass";const Ur=v.ZP.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,ir=v.ZP.div`
  position: relative;
`,q=v.ZP.div`
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
`,c=(0,v.ZP)(qe).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,jt=v.ZP.div`
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
`,Qr=(0,a.forwardRef)(($,w)=>{var O=$,{backgroundStyles:t,children:i}=O,h=et(O,["backgroundStyles","children"]);return a.createElement(Ur,$e({ref:w},h),a.createElement(ir,null,a.createElement(q,null,a.createElement(c,{style:t},i)),a.createElement(jt,null)))});Qr.displayName="Monitor";const Er=v.ZP.div`
  display: inline-block;
  height: ${ht.md};
  width: 100%;
`,wr=(0,v.ZP)(qe)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,pt=v.iv`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,se=v.ZP.div`
  position: relative;
  top: 4px;
  ${pt}
  background: ${({theme:t})=>t.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:t})=>t.materialText};
`,Gr=v.ZP.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${pt}
  color: ${({theme:t})=>t.materialTextInvert};
  background: ${({theme:t})=>t.progress};
  clip-path: polygon(
    0 0,
    ${({value:t=0})=>t}% 0,
    ${({value:t=0})=>t}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,ie=v.ZP.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,J=17,oe=v.ZP.span`
  display: inline-block;
  width: ${J}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:t})=>t.progress};
  border-color: ${({theme:t})=>t.material};
  border-width: 0px 1px;
  border-style: solid;
`,ae=(0,a.forwardRef)((L,O)=>{var F=L,{hideValue:t=!1,shadow:i=!0,value:h,variant:w="default"}=F,$=et(F,["hideValue","shadow","value","variant"]);const Y=t?null:`${h}%`,_=(0,a.useRef)(null),[re,Q]=(0,a.useState)([]),ze=(0,a.useCallback)(()=>{if(!_.current||h===void 0)return;const ge=_.current.getBoundingClientRect().width,Pe=Math.round(h/100*ge/J);Q(Array.from({length:Pe}))},[h]);return(0,a.useEffect)(()=>(ze(),window.addEventListener("resize",ze),()=>window.removeEventListener("resize",ze)),[ze]),a.createElement(Er,$e({"aria-valuenow":h!==void 0?Math.round(h):void 0,ref:O,role:"progressbar",variant:w},$),a.createElement(wr,{variant:w,shadow:i},w==="default"?a.createElement(a.Fragment,null,a.createElement(se,{"data-testid":"defaultProgress1"},Y),a.createElement(Gr,{"data-testid":"defaultProgress2",value:h},Y)):a.createElement(ie,{ref:_,"data-testid":"tileProgress"},re.map((ge,Pe)=>a.createElement(oe,{key:Pe})))))});ae.displayName="ProgressBar";const S=v.iv`
  width: ${fe}px;
  height: ${fe}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Le=(0,v.ZP)(qe)`
  ${S}
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
`,V=v.ZP.div`
  ${B()}
  ${S}
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
`,Ct=v.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,tt={flat:V,default:Le},ot=(0,a.forwardRef)((_,Y)=>{var re=_,{checked:t,className:i="",disabled:h=!1,label:w="",onChange:$,style:O={},variant:L="default"}=re,F=et(re,["checked","className","disabled","label","onChange","style","variant"]);const Q=tt[L];return a.createElement(be,{$disabled:h,className:i,style:O},a.createElement(Q,{$disabled:h,role:"presentation"},t&&a.createElement(Ct,{$disabled:h,variant:L})),a.createElement(Je,$e({disabled:h,onChange:h?void 0:$,readOnly:h,type:"radio",checked:t,ref:Y},F)),w&&a.createElement(wt,null,w))});ot.displayName="Radio";const Ce=typeof window!="undefined"?a.useLayoutEffect:a.useEffect;function ct(t){const i=a.useRef(t);return Ce(()=>{i.current=t}),a.useCallback((...h)=>(0,i.current)(...h),[])}function ar(t,i){typeof t=="function"?t(i):t&&(t.current=i)}function Ne(t,i){return(0,a.useMemo)(()=>t==null&&i==null?null:h=>{ar(t,h),ar(i,h)},[t,i])}var Jt=N(61254);let Ue=!0,Mt=!1,Hr;const Ft={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function En(t){if("type"in t){const{type:i,tagName:h}=t;if(h==="INPUT"&&Ft[i]&&!t.readOnly||h==="TEXTAREA"&&!t.readOnly)return!0}return!!("isContentEditable"in t&&t.isContentEditable)}function Tr(t){t.metaKey||t.altKey||t.ctrlKey||(Ue=!0)}function qt(){Ue=!1}function he(){this.visibilityState==="hidden"&&Mt&&(Ue=!0)}function xe(t){t.addEventListener("keydown",Tr,!0),t.addEventListener("mousedown",qt,!0),t.addEventListener("pointerdown",qt,!0),t.addEventListener("touchstart",qt,!0),t.addEventListener("visibilitychange",he,!0)}function an(t){const{target:i}=t;try{return i.matches(":focus-visible")}catch(h){}return Ue||En(i)}function vn(){Mt=!0,window.clearTimeout(Hr),Hr=window.setTimeout(()=>{Mt=!1},100)}function Ir(){const t=(0,a.useCallback)(i=>{const h=(0,Jt.findDOMNode)(i);h!=null&&xe(h.ownerDocument)},[]);return{isFocusVisible:an,onBlurVisible:vn,ref:t}}function gn(t,i,h){return(h-i)*t+i}function Dn(t,i){if(i!==void 0&&"changedTouches"in t){for(let h=0;h<t.changedTouches.length;h+=1){const w=t.changedTouches[h];if(w.identifier===i)return{x:w.clientX,y:w.clientY}}return!1}return"clientX"in t?{x:t.clientX,y:t.clientY}:!1}function Lr(t){return t&&t.ownerDocument||document}function ao(t,i){var h;const{index:w}=(h=t.reduce(($,O,L)=>{const F=Math.abs(i-O);return $===null||F<$.distance||F===$.distance?{distance:F,index:L}:$},null))!==null&&h!==void 0?h:{};return w!=null?w:-1}const jo=v.ZP.div`
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
`,lo=()=>v.iv`
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
`,Bn=(0,v.ZP)(qe)`
  ${lo()}
`,Fo=(0,v.ZP)(qe)`
  ${lo()}

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
`,Zo=v.ZP.span`
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
    ${({$disabled:t,theme:i})=>t&&k({mainColor:i.material,secondaryColor:i.borderLightest})}
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
`,li=(0,a.forwardRef)((ue,rt)=>{var Re=ue,{defaultValue:t,disabled:i=!1,marks:h=!1,max:w=100,min:$=0,name:O,onChange:L,onChangeCommitted:F,onMouseDown:Y,orientation:_="horizontal",size:re="100%",step:Q=1,value:ze,variant:ge="default"}=Re,Pe=et(Re,["defaultValue","disabled","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","size","step","value","variant"]);const We=ge==="flat"?Fo:Bn,me=_==="vertical",[Te=$,Me]=Ke({defaultValue:t,onChange:L!=null?L:F,value:ze}),{isFocusVisible:_e,onBlurVisible:Zt,ref:mr}=Ir(),[sr,er]=(0,a.useState)(!1),Vt=(0,a.useRef)(),kt=(0,a.useRef)(null),_t=Ne(mr,Vt),tr=Ne(rt,_t),pr=ct(He=>{_e(He)&&er(!0)}),Ot=ct(()=>{sr!==!1&&(er(!1),Zt())}),Ut=(0,a.useRef)(),Wt=(0,a.useMemo)(()=>h===!0&&Number.isFinite(Q)?[...Array(Math.round((w-$)/Q)+1)].map((He,Ye)=>({label:void 0,value:$+Q*Ye})):Array.isArray(h)?h:[],[h,w,$,Q]),jr=ct(He=>{const Ye=(w-$)/10,xt=Wt.map(ye=>ye.value),ut=xt.indexOf(Te);let M=0;switch(He.key){case"Home":M=$;break;case"End":M=w;break;case"PageUp":Q&&(M=Te+Ye);break;case"PageDown":Q&&(M=Te-Ye);break;case"ArrowRight":case"ArrowUp":Q?M=Te+Q:M=xt[ut+1]||xt[xt.length-1];break;case"ArrowLeft":case"ArrowDown":Q?M=Te-Q:M=xt[ut-1]||xt[0];break;default:return}He.preventDefault(),Q&&(M=en(M,Q,$)),M=nr(M,$,w),Me(M),er(!0),L==null||L(M),F==null||F(M)}),mt=(0,a.useCallback)(He=>{if(!Vt.current)return 0;const Ye=Vt.current.getBoundingClientRect();let xt;me?xt=(Ye.bottom-He.y)/Ye.height:xt=(He.x-Ye.left)/Ye.width;let ut;if(ut=gn(xt,$,w),Q)ut=en(ut,Q,$);else{const M=Wt.map(it=>it.value),ye=ao(M,ut);ut=M[ye]}return ut=nr(ut,$,w),ut},[Wt,w,$,Q,me]),Qt=ct(He=>{var Ye;const xt=Dn(He,Ut.current);if(!xt)return;const ut=mt(xt);(Ye=kt.current)===null||Ye===void 0||Ye.focus(),Me(ut),er(!0),L==null||L(ut)}),br=ct(He=>{const Ye=Dn(He,Ut.current);if(!Ye)return;const xt=mt(Ye);F==null||F(xt),Ut.current=void 0;const ut=Lr(Vt.current);ut.removeEventListener("mousemove",Qt),ut.removeEventListener("mouseup",br),ut.removeEventListener("touchmove",Qt),ut.removeEventListener("touchend",br)}),sn=ct(He=>{var Ye;Y==null||Y(He),He.preventDefault(),(Ye=kt.current)===null||Ye===void 0||Ye.focus(),er(!0);const xt=Dn(He,Ut.current);if(xt){const M=mt(xt);Me(M),L==null||L(M)}const ut=Lr(Vt.current);ut.addEventListener("mousemove",Qt),ut.addEventListener("mouseup",br)}),Yr=ct(He=>{var Ye;He.preventDefault();const xt=He.changedTouches[0];xt!=null&&(Ut.current=xt.identifier),(Ye=kt.current)===null||Ye===void 0||Ye.focus(),er(!0);const ut=Dn(He,Ut.current);if(ut){const ye=mt(ut);Me(ye),L==null||L(ye)}const M=Lr(Vt.current);M.addEventListener("touchmove",Qt),M.addEventListener("touchend",br)});return(0,a.useEffect)(()=>{const{current:He}=Vt;He==null||He.addEventListener("touchstart",Yr);const Ye=Lr(He);return()=>{He==null||He.removeEventListener("touchstart",Yr),Ye.removeEventListener("mousemove",Qt),Ye.removeEventListener("mouseup",br),Ye.removeEventListener("touchmove",Qt),Ye.removeEventListener("touchend",br)}},[br,Qt,Yr]),a.createElement(jo,$e({$disabled:i,hasMarks:!!Wt.length,isFocused:sr,onMouseDown:sn,orientation:_,ref:tr,size:or(re)},Pe),a.createElement("input",{disabled:i,name:O,type:"hidden",value:Te!=null?Te:0}),Wt&&Wt.map(He=>a.createElement(ko,{$disabled:i,"data-testid":"tick",key:He.value/(w-$)*100,orientation:_,style:{[me?"bottom":"left"]:`${(He.value-$)/(w-$)*100}%`}},He.label&&a.createElement(Wo,{"aria-hidden":!0,"data-testid":"mark",orientation:_},He.label))),a.createElement(We,{orientation:_,variant:ge}),a.createElement(Zo,{$disabled:i,"aria-disabled":i?!0:void 0,"aria-orientation":_,"aria-valuemax":w,"aria-valuemin":$,"aria-valuenow":Te,onBlur:Ot,onFocus:pr,onKeyDown:jr,orientation:_,ref:kt,role:"slider",style:{[me?"bottom":"left"]:`${(me?-100:0)+100*(Te-$)/(w-$)}%`},tabIndex:i?void 0:0,variant:ge}))});li.displayName="Slider";const Vo=v.ZP.tbody`
  background: ${({theme:t})=>t.canvas};
  display: table-row-group;
  box-shadow: ${u};
  overflow-y: auto;
`,so=(0,a.forwardRef)(function($,w){var O=$,{children:i}=O,h=et(O,["children"]);return a.createElement(Vo,$e({ref:w},h),i)});so.displayName="TableBody";const $n=v.ZP.td`
  padding: 0 8px;
`,co=(0,a.forwardRef)(function($,w){var O=$,{children:i}=O,h=et(O,["children"]);return a.createElement($n,$e({ref:w},h),i)});co.displayName="TableDataCell";const lr=v.ZP.thead`
  display: table-header-group;
`,si=(0,a.forwardRef)(function($,w){var O=$,{children:i}=O,h=et(O,["children"]);return a.createElement(lr,$e({ref:w},h),i)});si.displayName="TableHead";const _o=v.ZP.th`
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
`,ci=(0,a.forwardRef)(function(Y,F){var _=Y,{disabled:i=!1,children:h,onClick:w,onTouchStart:$=Ze,sort:O}=_,L=et(_,["disabled","children","onClick","onTouchStart","sort"]);const re=O==="asc"?"ascending":O==="desc"?"descending":void 0;return a.createElement(_o,$e({$disabled:i,"aria-disabled":i,"aria-sort":re,onClick:i?void 0:w,onTouchStart:i?void 0:$,ref:F},L),a.createElement("div",null,h))});ci.displayName="TableHeadCell";const Cn=v.ZP.tr`
  color: inherit;
  display: table-row;
  height: calc(${ht.md} - 2px);
  line-height: calc(${ht.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:t})=>t.canvasText};
  &:hover {
    background: ${({theme:t})=>t.hoverBackground};
    color: ${({theme:t})=>t.canvasTextInvert};
  }
`,Uo=(0,a.forwardRef)(function($,w){var O=$,{children:i}=O,h=et(O,["children"]);return a.createElement(Cn,$e({ref:w},h),i)});Uo.displayName="TableRow";const Qo=v.ZP.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,ui=(0,v.ZP)(qe)`
  &:before {
    box-shadow: none;
  }
`,Eo=(0,a.forwardRef)((w,h)=>{var $=w,{children:t}=$,i=et($,["children"]);return a.createElement(ui,null,a.createElement(Qo,$e({ref:h},i),t))});Eo.displayName="Table";const eo=v.ZP.button`
  ${g()}
  ${U()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ht.md};
  line-height: ${ht.md};
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
    ${Ie}
    outline-offset: -6px;
  }
  ${t=>t.selected&&`
    z-index: 1;
    height: calc(${ht.md} + 4px);
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
`,$o=(0,a.forwardRef)((L,O)=>{var F=L,{value:t,onClick:i,selected:h=!1,children:w}=F,$=et(F,["value","onClick","selected","children"]);return a.createElement(eo,$e({"aria-selected":h,selected:h,onClick:Y=>i==null?void 0:i(t,Y),ref:O,role:"tab"},$),w)});$o.displayName="Tab";const Nn=v.ZP.div`
  ${g()}
  ${U()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Co=(0,a.forwardRef)((w,h)=>{var $=w,{children:t}=$,i=et($,["children"]);return a.createElement(Nn,$e({ref:h},i),t)});Co.displayName="TabBody";const Go=v.ZP.div`
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
`;function Yo(t,i){const h=[];for(let w=i;w>0;w-=1)h.push(t.splice(0,Math.ceil(t.length/w)));return h}const fi=(0,a.forwardRef)((L,O)=>{var F=L,{value:t,onChange:i=Ze,children:h,rows:w=1}=F,$=et(F,["value","onChange","children","rows"]);const Y=(0,a.useMemo)(()=>{var _;const re=(_=a.Children.map(h,ge=>{if(!a.isValidElement(ge))return null;const Pe={selected:ge.props.value===t,onClick:i};return a.cloneElement(ge,Pe)}))!==null&&_!==void 0?_:[],Q=Yo(re,w).map((ge,Pe)=>({key:Pe,tabs:ge})),ze=Q.findIndex(ge=>ge.tabs.some(Pe=>Pe.props.selected));return Q.push(Q.splice(ze,1)[0]),Q},[h,i,w,t]);return a.createElement(Go,cn($e({},$),{isMultiRow:w>1,role:"tablist",ref:O}),Y.map(_=>a.createElement(di,{key:_.key},_.tabs)))});fi.displayName="Tabs";const Po=["blur","focus"],To=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function uo(t){return"nativeEvent"in t&&Po.includes(t.type)}function fo(t){return"nativeEvent"in t&&To.includes(t.type)}const Io={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},to=v.ZP.span`
  position: absolute;

  z-index: 1;
  display: ${t=>t.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
  background: ${({theme:t})=>t.tooltip};
  box-shadow: ${Yt};
  text-align: center;
  font-size: 1rem;
  ${t=>Io[t.position]}
`,Lo=v.ZP.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,pi=(0,a.forwardRef)((Re,ue)=>{var We=Re,{className:t,children:i,disableFocusListener:h=!1,disableMouseListener:w=!1,enterDelay:$=1e3,leaveDelay:O=0,onBlur:L,onClose:F,onFocus:Y,onMouseEnter:_,onMouseLeave:re,onOpen:Q,style:ze,text:ge,position:Pe="top"}=We,rt=et(We,["className","children","disableFocusListener","disableMouseListener","enterDelay","leaveDelay","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","onOpen","style","text","position"]);const[me,Te]=(0,a.useState)(!1),[Me,_e]=(0,a.useState)(),[Zt,mr]=(0,a.useState)(),sr=!h,er=!w,Vt=mt=>{window.clearTimeout(Me),window.clearTimeout(Zt);const Qt=window.setTimeout(()=>{Te(!0),Q==null||Q(mt)},$);_e(Qt)},kt=mt=>{mt.persist(),uo(mt)?Y==null||Y(mt):fo(mt)&&(_==null||_(mt)),Vt(mt)},_t=mt=>{window.clearTimeout(Me),window.clearTimeout(Zt);const Qt=window.setTimeout(()=>{Te(!1),F==null||F(mt)},O);mr(Qt)},tr=mt=>{mt.persist(),uo(mt)?L==null||L(mt):fo(mt)&&(re==null||re(mt)),_t(mt)},pr=sr?tr:void 0,Ot=sr?kt:void 0,Ut=er?kt:void 0,Wt=er?tr:void 0,jr=sr?0:void 0;return a.createElement(Lo,{"data-testid":"tooltip-wrapper",onBlur:pr,onFocus:Ot,onMouseEnter:Ut,onMouseLeave:Wt,tabIndex:jr},a.createElement(to,$e({className:t,"data-testid":"tooltip",position:Pe,ref:ue,show:me,style:ze},rt),ge),i)});pi.displayName="Tooltip";const po=(0,v.ZP)(wt)`
  white-space: nowrap;
`,Pn=v.iv`
  :focus {
    outline: none;
  }

  ${({$disabled:t})=>t?"cursor: default;":v.iv`
          cursor: pointer;

          :focus {
            ${po} {
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
`,ho=v.ZP.li`
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
  ${Pn};

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
  ${Pn};
`,vo=v.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function go(t,i){return t.includes(i)?t.filter(h=>h!==i):[...t,i]}function Mo(t){t.preventDefault()}function mo({className:t,disabled:i,expanded:h,innerRef:w,level:$,select:O,selected:L,style:F,tree:Y=[]}){const _=$===0,re=(0,a.useCallback)(Q=>{var ze,ge;const Pe=!!(Q.items&&Q.items.length>0),rt=h.includes(Q.id),ue=(ze=i||Q.disabled)!==null&&ze!==void 0?ze:!1,Re=ue?Mo:Me=>O(Me,Q),We=ue?Mo:Me=>O(Me,Q),me=L===Q.id,Te=a.createElement(vo,{"aria-hidden":!0},Q.icon);return a.createElement(ho,{key:Q.label,isRootLevel:_,role:"treeitem","aria-expanded":rt,"aria-selected":me,hasItems:Pe},Pe?a.createElement(Ro,{open:rt},a.createElement(Ko,{onClick:Re,$disabled:ue},a.createElement(Oo,{$disabled:ue},Te,a.createElement(po,null,Q.label))),rt&&a.createElement(mo,{className:t,disabled:ue,expanded:h,level:$+1,select:O,selected:L,style:F,tree:(ge=Q.items)!==null&&ge!==void 0?ge:[]})):a.createElement(Oo,{as:"button",$disabled:ue,onClick:We},Te,a.createElement(po,null,Q.label)))},[t,i,h,_,$,O,L,F]);return a.createElement(Xo,{className:_?t:void 0,style:_?F:void 0,ref:_?w:void 0,role:_?"tree":"group",isRootLevel:_},Y.map(re))}function Jo({className:t,defaultExpanded:i=[],defaultSelected:h,disabled:w=!1,expanded:$,onNodeSelect:O,onNodeToggle:L,selected:F,style:Y,tree:_=[]},re){const[Q,ze]=Ke({defaultValue:i,onChange:L,onChangePropName:"onNodeToggle",value:$,valuePropName:"expanded"}),[ge,Pe]=Ke({defaultValue:h,onChange:O,onChangePropName:"onNodeSelect",value:F,valuePropName:"selected"}),rt=(0,a.useCallback)((We,me)=>{if(L){const Te=go(Q,me);L(We,Te)}ze(Te=>go(Te,me))},[Q,L,ze]),ue=(0,a.useCallback)((We,me)=>{Pe(me),O&&O(We,me)},[O,Pe]),Re=(0,a.useCallback)((We,me)=>{We.preventDefault(),ue(We,me.id),me.items&&me.items.length&&rt(We,me.id)},[ue,rt]);return a.createElement(mo,{className:t,disabled:w,expanded:Q,level:0,innerRef:re,select:Re,selected:ge,style:Y,tree:_})}const Do=(0,a.forwardRef)(Jo);Do.displayName="TreeView";const hi=null,Pi=null,qo=null,Ae=null,ei=null,ti=null,ln=null,Bo=null,vi=null,gi=null,zn=null,bo=null,No=null}}]);
}());