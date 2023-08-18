!(function(){var Ro=Object.defineProperty,Lo=Object.defineProperties;var Bo=Object.getOwnPropertyDescriptors;var dn=Object.getOwnPropertySymbols;var Hn=Object.prototype.hasOwnProperty,zn=Object.prototype.propertyIsEnumerable;var Zn=(se,M,y)=>M in se?Ro(se,M,{enumerable:!0,configurable:!0,writable:!0,value:y}):se[M]=y,C=(se,M)=>{for(var y in M||(M={}))Hn.call(M,y)&&Zn(se,y,M[y]);if(dn)for(var y of dn(M))zn.call(M,y)&&Zn(se,y,M[y]);return se},ze=(se,M)=>Lo(se,Bo(M));var xe=(se,M)=>{var y={};for(var k in se)Hn.call(se,k)&&M.indexOf(k)<0&&(y[k]=se[k]);if(se!=null&&dn)for(var k of dn(se))M.indexOf(k)<0&&zn.call(se,k)&&(y[k]=se[k]);return y};var Qn=(se,M,y)=>new Promise((k,i)=>{var he=oe=>{try{Me(y.next(oe))}catch(me){i(me)}},re=oe=>{try{Me(y.throw(oe))}catch(me){i(me)}},Me=oe=>oe.done?k(oe.value):Promise.resolve(oe.value).then(he,re);Me((y=y.apply(se,M)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[150],{15381:function(se,M,y){"use strict";y.d(M,{Z:function(){return me}});var k=y(1413),i=y(67294),he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 00-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 01-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0133.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0119.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0119.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0119.6 43c0 19.1-11 37.5-28.8 48.4z"}}]},name:"dislike",theme:"outlined"},re=he,Me=y(91146),oe=function(Ge,Fe){return i.createElement(Me.Z,(0,k.Z)((0,k.Z)({},Ge),{},{ref:Fe,icon:re}))};oe.displayName="DislikeOutlined";var me=i.forwardRef(oe)},65429:function(se,M,y){"use strict";y.d(M,{Z:function(){return me}});var k=y(1413),i=y(67294),he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]},name:"like",theme:"outlined"},re=he,Me=y(91146),oe=function(Ge,Fe){return i.createElement(Me.Z,(0,k.Z)((0,k.Z)({},Ge),{},{ref:Fe,icon:re}))};oe.displayName="LikeOutlined";var me=i.forwardRef(oe)},40581:function(){"use strict"},42075:function(se,M,y){"use strict";y.d(M,{Z:function(){return n}});var k=y(94184),i=y.n(k),he=y(50344),re=y(67294),Me=y(98082),oe=y(53124),me=y(4173);const lt=re.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),Ge=lt.Provider;var Et=ae=>{let{className:yt,direction:v,index:o,marginDirection:d,children:h,split:B,wrap:_,style:J}=ae;const{horizontalSize:Pe,verticalSize:$,latestIndex:S,supportFlexGap:I}=re.useContext(lt);let W={};return I||(v==="vertical"?o<S&&(W={marginBottom:Pe/(B?2:1)}):W=Object.assign(Object.assign({},o<S&&{[d]:Pe/(B?2:1)}),_&&{paddingBottom:$})),h==null?null:re.createElement(re.Fragment,null,re.createElement("div",{className:yt,style:Object.assign(Object.assign({},W),J)},h),o<S&&B&&re.createElement("span",{className:`${yt}-split`,style:W},B))},Ae=y(51916),tt=function(ae,yt){var v={};for(var o in ae)Object.prototype.hasOwnProperty.call(ae,o)&&yt.indexOf(o)<0&&(v[o]=ae[o]);if(ae!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,o=Object.getOwnPropertySymbols(ae);d<o.length;d++)yt.indexOf(o[d])<0&&Object.prototype.propertyIsEnumerable.call(ae,o[d])&&(v[o[d]]=ae[o[d]]);return v};const Qe={small:8,middle:16,large:24};function vt(ae){return typeof ae=="string"?Qe[ae]:ae||0}const D=re.forwardRef((ae,yt)=>{var v,o;const{getPrefixCls:d,space:h,direction:B}=re.useContext(oe.E_),{size:_=(h==null?void 0:h.size)||"small",align:J,className:Pe,rootClassName:$,children:S,direction:I="horizontal",prefixCls:W,split:q,style:z,wrap:fe=!1,classNames:Ie,styles:Ke}=ae,pt=tt(ae,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),qe=(0,Me.Z)(),[rt,be]=re.useMemo(()=>(Array.isArray(_)?_:[_,_]).map(Xe=>vt(Xe)),[_]),ct=(0,he.Z)(S,{keepEmpty:!0}),ee=J===void 0&&I==="horizontal"?"center":J,Y=d("space",W),[V,Ze]=(0,Ae.Z)(Y),ot=i()(Y,h==null?void 0:h.className,Ze,`${Y}-${I}`,{[`${Y}-rtl`]:B==="rtl",[`${Y}-align-${ee}`]:ee},Pe,$),je=i()(`${Y}-item`,(v=Ie==null?void 0:Ie.item)!==null&&v!==void 0?v:(o=h==null?void 0:h.classNames)===null||o===void 0?void 0:o.item),er=B==="rtl"?"marginLeft":"marginRight";let Ye=0;const zt=ct.map((Xe,Kt)=>{var cr,gr;Xe!=null&&(Ye=Kt);const ur=Xe&&Xe.key||`${je}-${Kt}`;return re.createElement(Et,{className:je,key:ur,direction:I,index:Kt,marginDirection:er,split:q,wrap:fe,style:(cr=Ke==null?void 0:Ke.item)!==null&&cr!==void 0?cr:(gr=h==null?void 0:h.styles)===null||gr===void 0?void 0:gr.item},Xe)}),Nt=re.useMemo(()=>({horizontalSize:rt,verticalSize:be,latestIndex:Ye,supportFlexGap:qe}),[rt,be,Ye,qe]);if(ct.length===0)return null;const xt={};return fe&&(xt.flexWrap="wrap",qe||(xt.marginBottom=-be)),qe&&(xt.columnGap=rt,xt.rowGap=be),V(re.createElement("div",Object.assign({ref:yt,className:ot,style:Object.assign(Object.assign(Object.assign({},xt),h==null?void 0:h.style),z)},pt),re.createElement(Ge,{value:Nt},zt)))});D.Compact=me.ZP;var n=D},8679:function(se,M,y){"use strict";var k=y(21296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},he={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},re={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Me={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oe={};oe[k.ForwardRef]=re,oe[k.Memo]=Me;function me(vt){return k.isMemo(vt)?Me:oe[vt.$$typeof]||i}var lt=Object.defineProperty,Ge=Object.getOwnPropertyNames,Fe=Object.getOwnPropertySymbols,Et=Object.getOwnPropertyDescriptor,Ae=Object.getPrototypeOf,tt=Object.prototype;function Qe(vt,Ce,D){if(typeof Ce!="string"){if(tt){var n=Ae(Ce);n&&n!==tt&&Qe(vt,n,D)}var ae=Ge(Ce);Fe&&(ae=ae.concat(Fe(Ce)));for(var yt=me(vt),v=me(Ce),o=0;o<ae.length;++o){var d=ae[o];if(!he[d]&&!(D&&D[d])&&!(v&&v[d])&&!(yt&&yt[d])){var h=Et(Ce,d);try{lt(vt,d,h)}catch(B){}}}}return vt}se.exports=Qe},96103:function(se,M){"use strict";var y=typeof Symbol=="function"&&Symbol.for,k=y?Symbol.for("react.element"):60103,i=y?Symbol.for("react.portal"):60106,he=y?Symbol.for("react.fragment"):60107,re=y?Symbol.for("react.strict_mode"):60108,Me=y?Symbol.for("react.profiler"):60114,oe=y?Symbol.for("react.provider"):60109,me=y?Symbol.for("react.context"):60110,lt=y?Symbol.for("react.async_mode"):60111,Ge=y?Symbol.for("react.concurrent_mode"):60111,Fe=y?Symbol.for("react.forward_ref"):60112,Et=y?Symbol.for("react.suspense"):60113,Ae=y?Symbol.for("react.suspense_list"):60120,tt=y?Symbol.for("react.memo"):60115,Qe=y?Symbol.for("react.lazy"):60116,vt=y?Symbol.for("react.block"):60121,Ce=y?Symbol.for("react.fundamental"):60117,D=y?Symbol.for("react.responder"):60118,n=y?Symbol.for("react.scope"):60119;function ae(v){if(typeof v=="object"&&v!==null){var o=v.$$typeof;switch(o){case k:switch(v=v.type,v){case lt:case Ge:case he:case Me:case re:case Et:return v;default:switch(v=v&&v.$$typeof,v){case me:case Fe:case Qe:case tt:case oe:return v;default:return o}}case i:return o}}}function yt(v){return ae(v)===Ge}M.AsyncMode=lt,M.ConcurrentMode=Ge,M.ContextConsumer=me,M.ContextProvider=oe,M.Element=k,M.ForwardRef=Fe,M.Fragment=he,M.Lazy=Qe,M.Memo=tt,M.Portal=i,M.Profiler=Me,M.StrictMode=re,M.Suspense=Et,M.isAsyncMode=function(v){return yt(v)||ae(v)===lt},M.isConcurrentMode=yt,M.isContextConsumer=function(v){return ae(v)===me},M.isContextProvider=function(v){return ae(v)===oe},M.isElement=function(v){return typeof v=="object"&&v!==null&&v.$$typeof===k},M.isForwardRef=function(v){return ae(v)===Fe},M.isFragment=function(v){return ae(v)===he},M.isLazy=function(v){return ae(v)===Qe},M.isMemo=function(v){return ae(v)===tt},M.isPortal=function(v){return ae(v)===i},M.isProfiler=function(v){return ae(v)===Me},M.isStrictMode=function(v){return ae(v)===re},M.isSuspense=function(v){return ae(v)===Et},M.isValidElementType=function(v){return typeof v=="string"||typeof v=="function"||v===he||v===Ge||v===Me||v===re||v===Et||v===Ae||typeof v=="object"&&v!==null&&(v.$$typeof===Qe||v.$$typeof===tt||v.$$typeof===oe||v.$$typeof===me||v.$$typeof===Fe||v.$$typeof===Ce||v.$$typeof===D||v.$$typeof===n||v.$$typeof===vt)},M.typeOf=ae},21296:function(se,M,y){"use strict";se.exports=y(96103)},69921:function(se,M){"use strict";var y;var k=Symbol.for("react.element"),i=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),Me=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),me=Symbol.for("react.context"),lt=Symbol.for("react.server_context"),Ge=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),Qe=Symbol.for("react.offscreen"),vt;vt=Symbol.for("react.module.reference");function Ce(D){if(typeof D=="object"&&D!==null){var n=D.$$typeof;switch(n){case k:switch(D=D.type,D){case he:case Me:case re:case Fe:case Et:return D;default:switch(D=D&&D.$$typeof,D){case lt:case me:case Ge:case tt:case Ae:case oe:return D;default:return n}}case i:return n}}}y=me,y=oe,y=k,y=Ge,y=he,y=tt,y=Ae,y=i,y=Me,y=re,y=Fe,y=Et,y=function(){return!1},y=function(){return!1},y=function(D){return Ce(D)===me},y=function(D){return Ce(D)===oe},y=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===k},y=function(D){return Ce(D)===Ge},y=function(D){return Ce(D)===he},y=function(D){return Ce(D)===tt},y=function(D){return Ce(D)===Ae},y=function(D){return Ce(D)===i},y=function(D){return Ce(D)===Me},y=function(D){return Ce(D)===re},y=function(D){return Ce(D)===Fe},y=function(D){return Ce(D)===Et},M.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===he||D===Me||D===re||D===Fe||D===Et||D===Qe||typeof D=="object"&&D!==null&&(D.$$typeof===tt||D.$$typeof===Ae||D.$$typeof===oe||D.$$typeof===me||D.$$typeof===Ge||D.$$typeof===vt||D.getModuleId!==void 0)},M.typeOf=Ce},59864:function(se,M,y){"use strict";se.exports=y(69921)},25226:function(se){"use strict";var M={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};se.exports=M},94589:function(se,M,y){"use strict";y.d(M,{f6:function(){return vn},vJ:function(){return xn},iv:function(){return Pr},ZP:function(){return wn}});var k=y(59864),i=y(67294),he=y(96774),re=y.n(he);function Me(a){function f(U,Z,j,ue,b){for(var Ue=0,R=0,gt=0,_e=0,Je,de,mt=0,Mt=0,Be,Lt=Be=Je=0,Ne=0,Pt=0,Er=0,Dt=0,Hr=j.length,Ir=Hr-1,_t,ie="",kt="",Wr="",Gr="",br;Ne<Hr;){if(de=j.charCodeAt(Ne),Ne===Ir&&R+_e+gt+Ue!==0&&(R!==0&&(de=R===47?10:47),_e=gt=Ue=0,Hr++,Ir++),R+_e+gt+Ue===0){if(Ne===Ir&&(0<Pt&&(ie=ie.replace(it,"")),0<ie.trim().length)){switch(de){case 32:case 9:case 59:case 13:case 10:break;default:ie+=j.charAt(Ne)}de=59}switch(de){case 123:for(ie=ie.trim(),Je=ie.charCodeAt(0),Be=1,Dt=++Ne;Ne<Hr;){switch(de=j.charCodeAt(Ne)){case 123:Be++;break;case 125:Be--;break;case 47:switch(de=j.charCodeAt(Ne+1)){case 42:case 47:e:{for(Lt=Ne+1;Lt<Ir;++Lt)switch(j.charCodeAt(Lt)){case 47:if(de===42&&j.charCodeAt(Lt-1)===42&&Ne+2!==Lt){Ne=Lt+1;break e}break;case 10:if(de===47){Ne=Lt+1;break e}}Ne=Lt}}break;case 91:de++;case 40:de++;case 34:case 39:for(;Ne++<Ir&&j.charCodeAt(Ne)!==de;);}if(Be===0)break;Ne++}switch(Be=j.substring(Dt,Ne),Je===0&&(Je=(ie=ie.replace(Oe,"").trim()).charCodeAt(0)),Je){case 64:switch(0<Pt&&(ie=ie.replace(it,"")),de=ie.charCodeAt(1),de){case 100:case 109:case 115:case 45:Pt=Z;break;default:Pt=Tr}if(Be=f(Z,Pt,Be,de,b+1),Dt=Be.length,0<Yt&&(Pt=l(Tr,ie,Er),br=Q(3,Be,Pt,Z,tr,Ut,Dt,de,b,ue),ie=Pt.join(""),br!==void 0&&(Dt=(Be=br.trim()).length)===0&&(de=0,Be="")),0<Dt)switch(de){case 115:ie=ie.replace(hr,O);case 100:case 109:case 45:Be=ie+"{"+Be+"}";break;case 107:ie=ie.replace(Le,"$1 $2"),Be=ie+"{"+Be+"}",Be=Qt===1||Qt===2&&P("@"+Be,3)?"@-webkit-"+Be+"@"+Be:"@"+Be;break;default:Be=ie+Be,ue===112&&(Be=(kt+=Be,""))}else Be="";break;default:Be=f(Z,l(Z,ie,Er),Be,ue,b+1)}Wr+=Be,Be=Er=Pt=Lt=Je=0,ie="",de=j.charCodeAt(++Ne);break;case 125:case 59:if(ie=(0<Pt?ie.replace(it,""):ie).trim(),1<(Dt=ie.length))switch(Lt===0&&(Je=ie.charCodeAt(0),Je===45||96<Je&&123>Je)&&(Dt=(ie=ie.replace(" ",":")).length),0<Yt&&(br=Q(1,ie,Z,U,tr,Ut,kt.length,ue,b,ue))!==void 0&&(Dt=(ie=br.trim()).length)===0&&(ie="\0\0"),Je=ie.charCodeAt(0),de=ie.charCodeAt(1),Je){case 0:break;case 64:if(de===105||de===99){Gr+=ie+j.charAt(Ne);break}default:ie.charCodeAt(Dt-1)!==58&&(kt+=x(ie,Je,de,ie.charCodeAt(2)))}Er=Pt=Lt=Je=0,ie="",de=j.charCodeAt(++Ne)}}switch(de){case 13:case 10:R===47?R=0:1+Je===0&&ue!==107&&0<ie.length&&(Pt=1,ie+="\0"),0<Yt*$r&&Q(0,ie,Z,U,tr,Ut,kt.length,ue,b,ue),Ut=1,tr++;break;case 59:case 125:if(R+_e+gt+Ue===0){Ut++;break}default:switch(Ut++,_t=j.charAt(Ne),de){case 9:case 32:if(_e+Ue+R===0)switch(mt){case 44:case 58:case 9:case 32:_t="";break;default:de!==32&&(_t=" ")}break;case 0:_t="\\0";break;case 12:_t="\\f";break;case 11:_t="\\v";break;case 38:_e+R+Ue===0&&(Pt=Er=1,_t="\f"+_t);break;case 108:if(_e+R+Ue+ir===0&&0<Lt)switch(Ne-Lt){case 2:mt===112&&j.charCodeAt(Ne-3)===58&&(ir=mt);case 8:Mt===111&&(ir=Mt)}break;case 58:_e+R+Ue===0&&(Lt=Ne);break;case 44:R+gt+_e+Ue===0&&(Pt=1,_t+="\r");break;case 34:case 39:R===0&&(_e=_e===de?0:_e===0?de:_e);break;case 91:_e+R+gt===0&&Ue++;break;case 93:_e+R+gt===0&&Ue--;break;case 41:_e+R+Ue===0&&gt--;break;case 40:if(_e+R+Ue===0){if(Je===0)switch(2*mt+3*Mt){case 533:break;default:Je=1}gt++}break;case 64:R+gt+_e+Ue+Lt+Be===0&&(Be=1);break;case 42:case 47:if(!(0<_e+Ue+gt))switch(R){case 0:switch(2*de+3*j.charCodeAt(Ne+1)){case 235:R=47;break;case 220:Dt=Ne,R=42}break;case 42:de===47&&mt===42&&Dt+2!==Ne&&(j.charCodeAt(Dt+2)===33&&(kt+=j.substring(Dt,Ne+1)),_t="",R=0)}}R===0&&(ie+=_t)}Mt=mt,mt=de,Ne++}if(Dt=kt.length,0<Dt){if(Pt=Z,0<Yt&&(br=Q(2,kt,Pt,U,tr,Ut,Dt,ue,b,ue),br!==void 0&&(kt=br).length===0))return Gr+kt+Wr;if(kt=Pt.join(",")+"{"+kt+"}",Qt*ir!==0){switch(Qt!==2||P(kt,2)||(ir=0),ir){case 111:kt=kt.replace(ht,":-moz-$1")+kt;break;case 112:kt=kt.replace(Ct,"::-webkit-input-$1")+kt.replace(Ct,"::-moz-$1")+kt.replace(Ct,":-ms-input-$1")+kt}ir=0}}return Gr+kt+Wr}function l(U,Z,j){var ue=Z.trim().split(ge);Z=ue;var b=ue.length,Ue=U.length;switch(Ue){case 0:case 1:var R=0;for(U=Ue===0?"":U[0]+" ";R<b;++R)Z[R]=u(U,Z[R],j).trim();break;default:var gt=R=0;for(Z=[];R<b;++R)for(var _e=0;_e<Ue;++_e)Z[gt++]=u(U[_e]+" ",ue[R],j).trim()}return Z}function u(U,Z,j){var ue=Z.charCodeAt(0);switch(33>ue&&(ue=(Z=Z.trim()).charCodeAt(0)),ue){case 38:return Z.replace(st,"$1"+U.trim());case 58:return U.trim()+Z.replace(st,"$1"+U.trim());default:if(0<1*j&&0<Z.indexOf("\f"))return Z.replace(st,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+Z}function x(U,Z,j,ue){var b=U+";",Ue=2*Z+3*j+4*ue;if(Ue===944){U=b.indexOf(":",9)+1;var R=b.substring(U,b.length-1).trim();return R=b.substring(0,U).trim()+R+";",Qt===1||Qt===2&&P(R,1)?"-webkit-"+R+R:R}if(Qt===0||Qt===2&&!P(b,1))return b;switch(Ue){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(wr,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return R=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+R+"-webkit-"+b+"-ms-flex-pack"+R+b;case 1005:return Re.test(b)?b.replace(ut,":-webkit-")+b.replace(ut,":-moz-")+b:b;case 1e3:switch(R=b.substring(13).trim(),Z=R.indexOf("-")+1,R.charCodeAt(0)+R.charCodeAt(Z)){case 226:R=b.replace(wt,"tb");break;case 232:R=b.replace(wt,"tb-rl");break;case 220:R=b.replace(wt,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+R+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(Z=(b=U).length-10,R=(b.charCodeAt(Z)===33?b.substring(0,Z):b).substring(U.indexOf(":",7)+1).trim(),Ue=R.charCodeAt(0)+(R.charCodeAt(7)|0)){case 203:if(111>R.charCodeAt(8))break;case 115:b=b.replace(R,"-webkit-"+R)+";"+b;break;case 207:case 102:b=b.replace(R,"-webkit-"+(102<Ue?"inline-":"")+"box")+";"+b.replace(R,"-webkit-"+R)+";"+b.replace(R,"-ms-"+R+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return R=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+R+"-ms-flex-"+R+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(qt,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(qt,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(mr.test(U)===!0)return(R=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?x(U.replace("stretch","fill-available"),Z,j,ue).replace(":fill-available",":stretch"):b.replace(R,"-webkit-"+R)+b.replace(R,"-moz-"+R.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,j+ue===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(Ve,"$1-webkit-$2")+b}return b}function P(U,Z){var j=U.indexOf(Z===1?":":"{"),ue=U.substring(0,Z!==3?j:10);return j=U.substring(j+1,U.length-1),kr(Z!==2?ue:ue.replace(ar,"$1"),j,Z)}function O(U,Z){var j=x(Z,Z.charCodeAt(0),Z.charCodeAt(1),Z.charCodeAt(2));return j!==Z+";"?j.replace(Ar," or ($1)").substring(4):"("+Z+")"}function Q(U,Z,j,ue,b,Ue,R,gt,_e,Je){for(var de=0,mt=Z,Mt;de<Yt;++de)switch(Mt=rr[de].call(we,U,mt,j,ue,b,Ue,R,gt,_e,Je)){case void 0:case!1:case!0:case null:break;default:mt=Mt}if(mt!==Z)return mt}function Te(U){switch(U){case void 0:case null:Yt=rr.length=0;break;default:if(typeof U=="function")rr[Yt++]=U;else if(typeof U=="object")for(var Z=0,j=U.length;Z<j;++Z)Te(U[Z]);else $r=!!U|0}return Te}function K(U){return U=U.prefix,U!==void 0&&(kr=null,U?typeof U!="function"?Qt=1:(Qt=2,kr=U):Qt=0),K}function we(U,Z){var j=U;if(33>j.charCodeAt(0)&&(j=j.trim()),Dr=j,j=[Dr],0<Yt){var ue=Q(-1,Z,j,j,tr,Ut,0,0,0,0);ue!==void 0&&typeof ue=="string"&&(Z=ue)}var b=f(Tr,j,Z,0,0);return 0<Yt&&(ue=Q(-2,b,j,j,tr,Ut,b.length,0,0,0),ue!==void 0&&(b=ue)),Dr="",ir=0,Ut=tr=1,b}var Oe=/^\0+/g,it=/[\0\r\f]/g,ut=/: */g,Re=/zoo|gra/,Ve=/([,: ])(transform)/g,ge=/,\r+?/g,st=/([\t\r\n ])*\f?&/g,Le=/@(k\w+)\s*(\S*)\s*/,Ct=/::(place)/g,ht=/:(read-only)/g,wt=/[svh]\w+-[tblr]{2}/,hr=/\(\s*(.*)\s*\)/g,Ar=/([\s\S]*?);/g,qt=/-self|flex-/g,ar=/[^]*?(:[rp][el]a[\w-]+)[^]*/,mr=/stretch|:\s*\w+\-(?:conte|avail)/,wr=/([^-])(image-set\()/,Ut=1,tr=1,ir=0,Qt=1,Tr=[],rr=[],Yt=0,kr=null,$r=0,Dr="";return we.use=Te,we.set=K,a!==void 0&&K(a),we}var oe=Me,me=y(40351);function lt(a){var f=Object.create(null);return function(l){return f[l]===void 0&&(f[l]=a(l)),f[l]}}var Ge=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Fe=lt(function(a){return Ge.test(a)||a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)<91}),Et=y(8679),Ae=y.n(Et),tt=y(34155);function Qe(){return(Qe=Object.assign||function(a){for(var f=1;f<arguments.length;f++){var l=arguments[f];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a}).apply(this,arguments)}var vt=function(a,f){for(var l=[a[0]],u=0,x=f.length;u<x;u+=1)l.push(f[u],a[u+1]);return l},Ce=function(a){return a!==null&&typeof a=="object"&&(a.toString?a.toString():Object.prototype.toString.call(a))==="[object Object]"&&!(0,k.typeOf)(a)},D=Object.freeze([]),n=Object.freeze({});function ae(a){return typeof a=="function"}function yt(a){return a.displayName||a.name||"Component"}function v(a){return a&&typeof a.styledComponentId=="string"}var o=typeof tt!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_ATTR)||"data-styled",d="5.3.11",h=typeof window!="undefined"&&"HTMLElement"in window,B=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof tt!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY:{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==""&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY)),_={},J={};function Pe(){for(var a=arguments.length<=0?void 0:arguments[0],f=[],l=1,u=arguments.length;l<u;l+=1)f.push(l<0||arguments.length<=l?void 0:arguments[l]);return f.forEach(function(x){a=a.replace(/%[a-z]/,x)}),a}function $(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];throw new Error("An error occurred. See https://git.io/JUIaE#"+a+" for more information."+(l.length>0?" Args: "+l.join(", "):""))}var S=function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}var f=a.prototype;return f.indexOfGroup=function(l){for(var u=0,x=0;x<l;x++)u+=this.groupSizes[x];return u},f.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var x=this.groupSizes,P=x.length,O=P;l>=O;)(O<<=1)<0&&$(16,""+l);this.groupSizes=new Uint32Array(O),this.groupSizes.set(x),this.length=O;for(var Q=P;Q<O;Q++)this.groupSizes[Q]=0}for(var Te=this.indexOfGroup(l+1),K=0,we=u.length;K<we;K++)this.tag.insertRule(Te,u[K])&&(this.groupSizes[l]++,Te++)},f.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],x=this.indexOfGroup(l),P=x+u;this.groupSizes[l]=0;for(var O=x;O<P;O++)this.tag.deleteRule(x)}},f.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var x=this.groupSizes[l],P=this.indexOfGroup(l),O=P+x,Q=P;Q<O;Q++)u+=this.tag.getRule(Q)+`/*!sc*/
`;return u},a}(),I=new Map,W=new Map,q=1,z=function(a){if(I.has(a))return I.get(a);for(;W.has(q);)q++;var f=q++;return I.set(a,f),W.set(f,a),f},fe=function(a){return W.get(a)},Ie=function(a,f){f>=q&&(q=f+1),I.set(a,f),W.set(f,a)},Ke="style["+o+'][data-styled-version="5.3.11"]',pt=new RegExp("^"+o+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),qe=function(a,f,l){for(var u,x=l.split(","),P=0,O=x.length;P<O;P++)(u=x[P])&&a.registerName(f,u)},rt=function(a,f){for(var l=(f.textContent||"").split(`/*!sc*/
`),u=[],x=0,P=l.length;x<P;x++){var O=l[x].trim();if(O){var Q=O.match(pt);if(Q){var Te=0|parseInt(Q[1],10),K=Q[2];Te!==0&&(Ie(K,Te),qe(a,K,Q[3]),a.getTag().insertRules(Te,u)),u.length=0}else u.push(O)}}},be=function(){return y.nc},ct=function(a){var f=document.head,l=a||f,u=document.createElement("style"),x=function(Q){for(var Te=Q.childNodes,K=Te.length;K>=0;K--){var we=Te[K];if(we&&we.nodeType===1&&we.hasAttribute(o))return we}}(l),P=x!==void 0?x.nextSibling:null;u.setAttribute(o,"active"),u.setAttribute("data-styled-version","5.3.11");var O=be();return O&&u.setAttribute("nonce",O),l.insertBefore(u,P),u},ee=function(){function a(l){var u=this.element=ct(l);u.appendChild(document.createTextNode("")),this.sheet=function(x){if(x.sheet)return x.sheet;for(var P=document.styleSheets,O=0,Q=P.length;O<Q;O++){var Te=P[O];if(Te.ownerNode===x)return Te}$(17)}(u),this.length=0}var f=a.prototype;return f.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch(x){return!1}},f.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},f.getRule=function(l){var u=this.sheet.cssRules[l];return u!==void 0&&typeof u.cssText=="string"?u.cssText:""},a}(),Y=function(){function a(l){var u=this.element=ct(l);this.nodes=u.childNodes,this.length=0}var f=a.prototype;return f.insertRule=function(l,u){if(l<=this.length&&l>=0){var x=document.createTextNode(u),P=this.nodes[l];return this.element.insertBefore(x,P||null),this.length++,!0}return!1},f.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},f.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a}(),V=function(){function a(l){this.rules=[],this.length=0}var f=a.prototype;return f.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},f.deleteRule=function(l){this.rules.splice(l,1),this.length--},f.getRule=function(l){return l<this.length?this.rules[l]:""},a}(),Ze=h,ot={isServer:!h,useCSSOMInjection:!B},je=function(){function a(l,u,x){l===void 0&&(l=n),u===void 0&&(u={}),this.options=Qe({},ot,{},l),this.gs=u,this.names=new Map(x),this.server=!!l.isServer,!this.server&&h&&Ze&&(Ze=!1,function(P){for(var O=document.querySelectorAll(Ke),Q=0,Te=O.length;Q<Te;Q++){var K=O[Q];K&&K.getAttribute(o)!=="active"&&(rt(P,K),K.parentNode&&K.parentNode.removeChild(K))}}(this))}a.registerId=function(l){return z(l)};var f=a.prototype;return f.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new a(Qe({},this.options,{},l),this.gs,u&&this.names||void 0)},f.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},f.getTag=function(){return this.tag||(this.tag=(x=(u=this.options).isServer,P=u.useCSSOMInjection,O=u.target,l=x?new V(O):P?new ee(O):new Y(O),new S(l)));var l,u,x,P,O},f.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},f.registerName=function(l,u){if(z(l),this.names.has(l))this.names.get(l).add(u);else{var x=new Set;x.add(u),this.names.set(l,x)}},f.insertRules=function(l,u,x){this.registerName(l,u),this.getTag().insertRules(z(l),x)},f.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},f.clearRules=function(l){this.getTag().clearGroup(z(l)),this.clearNames(l)},f.clearTag=function(){this.tag=void 0},f.toString=function(){return function(l){for(var u=l.getTag(),x=u.length,P="",O=0;O<x;O++){var Q=fe(O);if(Q!==void 0){var Te=l.names.get(Q),K=u.getGroup(O);if(Te&&K&&Te.size){var we=o+".g"+O+'[id="'+Q+'"]',Oe="";Te!==void 0&&Te.forEach(function(it){it.length>0&&(Oe+=it+",")}),P+=""+K+we+'{content:"'+Oe+`"}/*!sc*/
`}}}return P}(this)},a}(),er=/(a)(d)/gi,Ye=function(a){return String.fromCharCode(a+(a>25?39:97))};function zt(a){var f,l="";for(f=Math.abs(a);f>52;f=f/52|0)l=Ye(f%52)+l;return(Ye(f%52)+l).replace(er,"$1-$2")}var Nt=function(a,f){for(var l=f.length;l;)a=33*a^f.charCodeAt(--l);return a},xt=function(a){return Nt(5381,a)};function Xe(a){for(var f=0;f<a.length;f+=1){var l=a[f];if(ae(l)&&!v(l))return!1}return!0}var Kt=xt("5.3.11"),cr=function(){function a(f,l,u){this.rules=f,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&Xe(f),this.componentId=l,this.baseHash=Nt(Kt,l),this.baseStyle=u,je.registerId(l)}return a.prototype.generateAndInjectStyles=function(f,l,u){var x=this.componentId,P=[];if(this.baseStyle&&P.push(this.baseStyle.generateAndInjectStyles(f,l,u)),this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(x,this.staticRulesId))P.push(this.staticRulesId);else{var O=sr(this.rules,f,l,u).join(""),Q=zt(Nt(this.baseHash,O)>>>0);if(!l.hasNameForId(x,Q)){var Te=u(O,"."+Q,void 0,x);l.insertRules(x,Q,Te)}P.push(Q),this.staticRulesId=Q}else{for(var K=this.rules.length,we=Nt(this.baseHash,u.hash),Oe="",it=0;it<K;it++){var ut=this.rules[it];if(typeof ut=="string")Oe+=ut;else if(ut){var Re=sr(ut,f,l,u),Ve=Array.isArray(Re)?Re.join(""):Re;we=Nt(we,Ve+it),Oe+=Ve}}if(Oe){var ge=zt(we>>>0);if(!l.hasNameForId(x,ge)){var st=u(Oe,"."+ge,void 0,x);l.insertRules(x,ge,st)}P.push(ge)}}return P.join(" ")},a}(),gr=/^\s*\/\/.*$/gm,ur=[":","[",".","#"];function Lr(a){var f,l,u,x,P=a===void 0?n:a,O=P.options,Q=O===void 0?n:O,Te=P.plugins,K=Te===void 0?D:Te,we=new oe(Q),Oe=[],it=function(Ve){function ge(st){if(st)try{Ve(st+"}")}catch(Le){}}return function(st,Le,Ct,ht,wt,hr,Ar,qt,ar,mr){switch(st){case 1:if(ar===0&&Le.charCodeAt(0)===64)return Ve(Le+";"),"";break;case 2:if(qt===0)return Le+"/*|*/";break;case 3:switch(qt){case 102:case 112:return Ve(Ct[0]+Le),"";default:return Le+(mr===0?"/*|*/":"")}case-2:Le.split("/*|*/}").forEach(ge)}}}(function(Ve){Oe.push(Ve)}),ut=function(Ve,ge,st){return ge===0&&ur.indexOf(st[l.length])!==-1||st.match(x)?Ve:"."+f};function Re(Ve,ge,st,Le){Le===void 0&&(Le="&");var Ct=Ve.replace(gr,""),ht=ge&&st?st+" "+ge+" { "+Ct+" }":Ct;return f=Le,l=ge,u=new RegExp("\\"+l+"\\b","g"),x=new RegExp("(\\"+l+"\\b){2,}"),we(st||!ge?"":ge,ht)}return we.use([].concat(K,[function(Ve,ge,st){Ve===2&&st.length&&st[0].lastIndexOf(l)>0&&(st[0]=st[0].replace(u,ut))},it,function(Ve){if(Ve===-2){var ge=Oe;return Oe=[],ge}}])),Re.hash=K.length?K.reduce(function(Ve,ge){return ge.name||$(15),Nt(Ve,ge.name)},5381).toString():"",Re}var bt=i.createContext(),Rt=bt.Consumer,At=i.createContext(),dr=(At.Consumer,new je),fr=Lr();function pr(){return(0,i.useContext)(bt)||dr}function qr(){return(0,i.useContext)(At)||fr}function Yr(a){var f=(0,i.useState)(a.stylisPlugins),l=f[0],u=f[1],x=pr(),P=(0,i.useMemo)(function(){var Q=x;return a.sheet?Q=a.sheet:a.target&&(Q=Q.reconstructWithOptions({target:a.target},!1)),a.disableCSSOMInjection&&(Q=Q.reconstructWithOptions({useCSSOMInjection:!1})),Q},[a.disableCSSOMInjection,a.sheet,a.target]),O=(0,i.useMemo)(function(){return Lr({options:{prefix:!a.disableVendorPrefixes},plugins:l})},[a.disableVendorPrefixes,l]);return(0,i.useEffect)(function(){re()(l,a.stylisPlugins)||u(a.stylisPlugins)},[a.stylisPlugins]),i.createElement(bt.Provider,{value:P},i.createElement(At.Provider,{value:O},a.children))}var Xr=function(){function a(f,l){var u=this;this.inject=function(x,P){P===void 0&&(P=fr);var O=u.name+P.hash;x.hasNameForId(u.id,O)||x.insertRules(u.id,O,P(u.rules,O,"@keyframes"))},this.toString=function(){return $(12,String(u.name))},this.name=f,this.id="sc-keyframes-"+f,this.rules=l}return a.prototype.getName=function(f){return f===void 0&&(f=fr),this.name+f.hash},a}(),fn=/([A-Z])/,Jr=/([A-Z])/g,pn=/^ms-/,hn=function(a){return"-"+a.toLowerCase()};function Br(a){return fn.test(a)?a.replace(Jr,hn).replace(pn,"-ms-"):a}var en=function(a){return a==null||a===!1||a===""};function sr(a,f,l,u){if(Array.isArray(a)){for(var x,P=[],O=0,Q=a.length;O<Q;O+=1)(x=sr(a[O],f,l,u))!==""&&(Array.isArray(x)?P.push.apply(P,x):P.push(x));return P}if(en(a))return"";if(v(a))return"."+a.styledComponentId;if(ae(a)){if(typeof(K=a)!="function"||K.prototype&&K.prototype.isReactComponent||!f)return a;var Te=a(f);return sr(Te,f,l,u)}var K;return a instanceof Xr?l?(a.inject(l,u),a.getName(u)):a:Ce(a)?function we(Oe,it){var ut,Re,Ve=[];for(var ge in Oe)Oe.hasOwnProperty(ge)&&!en(Oe[ge])&&(Array.isArray(Oe[ge])&&Oe[ge].isCss||ae(Oe[ge])?Ve.push(Br(ge)+":",Oe[ge],";"):Ce(Oe[ge])?Ve.push.apply(Ve,we(Oe[ge],ge)):Ve.push(Br(ge)+": "+(ut=ge,(Re=Oe[ge])==null||typeof Re=="boolean"||Re===""?"":typeof Re!="number"||Re===0||ut in me.Z||ut.startsWith("--")?String(Re).trim():Re+"px")+";"));return it?[it+" {"].concat(Ve,["}"]):Ve}(a):a.toString()}var tn=function(a){return Array.isArray(a)&&(a.isCss=!0),a};function Pr(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];return ae(a)||Ce(a)?tn(sr(vt(D,[a].concat(l)))):l.length===0&&a.length===1&&typeof a[0]=="string"?a:tn(sr(vt(a,l)))}var mn=/invalid hook call/i,En=new Set,bn=function(a,f){if(!1)var l,u,x},Nr=function(a,f,l){return l===void 0&&(l=n),a.theme!==l.theme&&a.theme||f||l.theme},rn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qr=/(^-|-$)/g;function jr(a){return a.replace(rn,"-").replace(Qr,"")}var Mr=function(a){return zt(xt(a)>>>0)};function Fr(a){return typeof a=="string"&&!0}var Vr=function(a){return typeof a=="function"||typeof a=="object"&&a!==null&&!Array.isArray(a)},gn=function(a){return a!=="__proto__"&&a!=="constructor"&&a!=="prototype"};function nn(a,f,l){var u=a[l];Vr(f)&&Vr(u)?on(u,f):a[l]=f}function on(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];for(var x=0,P=l;x<P.length;x++){var O=P[x];if(Vr(O))for(var Q in O)gn(Q)&&nn(a,O[Q],Q)}return a}var vr=i.createContext(),Sn=vr.Consumer;function vn(a){var f=(0,i.useContext)(vr),l=(0,i.useMemo)(function(){return function(u,x){if(!u)return $(14);if(ae(u)){var P=u(x);return P}return Array.isArray(u)||typeof u!="object"?$(8):x?Qe({},x,{},u):u}(a.theme,f)},[a.theme,f]);return a.children?i.createElement(vr.Provider,{value:l},a.children):null}var Zr={};function an(a,f,l){var u=v(a),x=!Fr(a),P=f.attrs,O=P===void 0?D:P,Q=f.componentId,Te=Q===void 0?function(Le,Ct){var ht=typeof Le!="string"?"sc":jr(Le);Zr[ht]=(Zr[ht]||0)+1;var wt=ht+"-"+Mr("5.3.11"+ht+Zr[ht]);return Ct?Ct+"-"+wt:wt}(f.displayName,f.parentComponentId):Q,K=f.displayName,we=K===void 0?function(Le){return Fr(Le)?"styled."+Le:"Styled("+yt(Le)+")"}(a):K,Oe=f.displayName&&f.componentId?jr(f.displayName)+"-"+f.componentId:f.componentId||Te,it=u&&a.attrs?Array.prototype.concat(a.attrs,O).filter(Boolean):O,ut=f.shouldForwardProp;u&&a.shouldForwardProp&&(ut=f.shouldForwardProp?function(Le,Ct,ht){return a.shouldForwardProp(Le,Ct,ht)&&f.shouldForwardProp(Le,Ct,ht)}:a.shouldForwardProp);var Re,Ve=new cr(l,Oe,u?a.componentStyle:void 0),ge=Ve.isStatic&&O.length===0,st=function(Le,Ct){return function(ht,wt,hr,Ar){var qt=ht.attrs,ar=ht.componentStyle,mr=ht.defaultProps,wr=ht.foldedComponentIds,Ut=ht.shouldForwardProp,tr=ht.styledComponentId,ir=ht.target,Qt=function(ue,b,Ue){ue===void 0&&(ue=n);var R=Qe({},b,{theme:ue}),gt={};return Ue.forEach(function(_e){var Je,de,mt,Mt=_e;for(Je in ae(Mt)&&(Mt=Mt(R)),Mt)R[Je]=gt[Je]=Je==="className"?(de=gt[Je],mt=Mt[Je],de&&mt?de+" "+mt:de||mt):Mt[Je]}),[R,gt]}(Nr(wt,(0,i.useContext)(vr),mr)||n,wt,qt),Tr=Qt[0],rr=Qt[1],Yt=function(ue,b,Ue,R){var gt=pr(),_e=qr(),Je=b?ue.generateAndInjectStyles(n,gt,_e):ue.generateAndInjectStyles(Ue,gt,_e);return Je}(ar,Ar,Tr,void 0),kr=hr,$r=rr.$as||wt.$as||rr.as||wt.as||ir,Dr=Fr($r),U=rr!==wt?Qe({},wt,{},rr):wt,Z={};for(var j in U)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?Z.as=U[j]:(Ut?Ut(j,Fe,$r):!Dr||Fe(j))&&(Z[j]=U[j]));return wt.style&&rr.style!==wt.style&&(Z.style=Qe({},wt.style,{},rr.style)),Z.className=Array.prototype.concat(wr,tr,Yt!==tr?Yt:null,wt.className,rr.className).filter(Boolean).join(" "),Z.ref=kr,(0,i.createElement)($r,Z)}(Re,Le,Ct,ge)};return st.displayName=we,(Re=i.forwardRef(st)).attrs=it,Re.componentStyle=Ve,Re.displayName=we,Re.shouldForwardProp=ut,Re.foldedComponentIds=u?Array.prototype.concat(a.foldedComponentIds,a.styledComponentId):D,Re.styledComponentId=Oe,Re.target=u?a.target:a,Re.withComponent=function(Le){var Ct=f.componentId,ht=function(hr,Ar){if(hr==null)return{};var qt,ar,mr={},wr=Object.keys(hr);for(ar=0;ar<wr.length;ar++)qt=wr[ar],Ar.indexOf(qt)>=0||(mr[qt]=hr[qt]);return mr}(f,["componentId"]),wt=Ct&&Ct+"-"+(Fr(Le)?Le:jr(yt(Le)));return an(Le,Qe({},ht,{attrs:it,componentId:wt}),l)},Object.defineProperty(Re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Le){this._foldedDefaultProps=u?on({},a.defaultProps,Le):Le}}),Object.defineProperty(Re,"toString",{value:function(){return"."+Re.styledComponentId}}),x&&Ae()(Re,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),Re}var Ur=function(a){return function f(l,u,x){if(x===void 0&&(x=n),!(0,k.isValidElementType)(u))return $(1,String(u));var P=function(){return l(u,x,Pr.apply(void 0,arguments))};return P.withConfig=function(O){return f(l,u,Qe({},x,{},O))},P.attrs=function(O){return f(l,u,Qe({},x,{attrs:Array.prototype.concat(x.attrs,O).filter(Boolean)}))},P}(an,a)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(a){Ur[a]=Ur(a)});var yn=function(){function a(l,u){this.rules=l,this.componentId=u,this.isStatic=Xe(l),je.registerId(this.componentId+1)}var f=a.prototype;return f.createStyles=function(l,u,x,P){var O=P(sr(this.rules,u,x,P).join(""),""),Q=this.componentId+l;x.insertRules(Q,Q,O)},f.removeStyles=function(l,u){u.clearRules(this.componentId+l)},f.renderStyles=function(l,u,x,P){l>2&&je.registerId(this.componentId+l),this.removeStyles(l,x),this.createStyles(l,u,x,P)},a}();function xn(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];var x=Pr.apply(void 0,[a].concat(l)),P="sc-global-"+Mr(JSON.stringify(x)),O=new yn(x,P);function Q(K){var we=pr(),Oe=qr(),it=(0,i.useContext)(vr),ut=(0,i.useRef)(we.allocateGSInstance(P)).current;return we.server&&Te(ut,K,we,it,Oe),(0,i.useLayoutEffect)(function(){if(!we.server)return Te(ut,K,we,it,Oe),function(){return O.removeStyles(ut,we)}},[ut,K,we,it,Oe]),null}function Te(K,we,Oe,it,ut){if(O.isStatic)O.renderStyles(K,_,Oe,ut);else{var Re=Qe({},we,{theme:Nr(we,it,Q.defaultProps)});O.renderStyles(K,Re,Oe,ut)}}return i.memo(Q)}function Cn(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];var x=Pr.apply(void 0,[a].concat(l)).join(""),P=Mr(x);return new Xr(P,x)}var Pn=function(){function a(){var l=this;this._emitSheetCSS=function(){var u=l.instance.toString();if(!u)return"";var x=be();return"<style "+[x&&'nonce="'+x+'"',o+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+u+"</style>"},this.getStyleTags=function(){return l.sealed?$(2):l._emitSheetCSS()},this.getStyleElement=function(){var u;if(l.sealed)return $(2);var x=((u={})[o]="",u["data-styled-version"]="5.3.11",u.dangerouslySetInnerHTML={__html:l.instance.toString()},u),P=be();return P&&(x.nonce=P),[i.createElement("style",Qe({},x,{key:"sc-0-0"}))]},this.seal=function(){l.sealed=!0},this.instance=new je({isServer:!0}),this.sealed=!1}var f=a.prototype;return f.collectStyles=function(l){return this.sealed?$(2):i.createElement(Yr,{sheet:this.instance},l)},f.interleaveWithNodeStream=function(l){return $(3)},a}(),An=function(a){var f=r.forwardRef(function(l,u){var x=s(vr),P=a.defaultProps,O=Nr(l,x,P);return r.createElement(a,Qe({},l,{theme:O,ref:u}))});return m(f,a),f.displayName="WithTheme("+yt(a)+")",f},Tn=function(){return s(vr)},_r={StyleSheet:je,masterSheet:dr},wn=Ur},62085:function(se,M,y){"use strict";se.exports=y.p+"static/ms_sans_serif.4095bf42.woff2"},77430:function(se,M,y){"use strict";se.exports=y.p+"static/ms_sans_serif_bold.1d0aba83.woff2"},68400:function(se){function M(y,k){return k||(k=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(k)}}))}se.exports=M,se.exports.__esModule=!0,se.exports.default=se.exports},526:function(se,M,y){"use strict";y.d(M,{S:function(){return yt}});var k=y(32161);const i=console;var he=y(30081),re=y(72379);class Me{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,k.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(o){this.cacheTime=Math.max(this.cacheTime||0,o!=null?o:k.sk?1/0:5*60*1e3)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class oe extends Me{constructor(o){super(),this.abortSignalConsumed=!1,this.defaultOptions=o.defaultOptions,this.setOptions(o.options),this.observers=[],this.cache=o.cache,this.logger=o.logger||i,this.queryKey=o.queryKey,this.queryHash=o.queryHash,this.initialState=o.state||me(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(o){this.options=C(C({},this.defaultOptions),o),this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(o,d){const h=(0,k.oE)(this.state.data,o,this.options);return this.dispatch({data:h,type:"success",dataUpdatedAt:d==null?void 0:d.updatedAt,manual:d==null?void 0:d.manual}),h}setState(o,d){this.dispatch({type:"setState",state:o,setStateOptions:d})}cancel(o){var d;const h=this.promise;return(d=this.retryer)==null||d.cancel(o),h?h.then(k.ZT).catch(k.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(o=>o.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(o=>o.getCurrentResult().isStale)}isStaleByTime(o=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,k.Kp)(this.state.dataUpdatedAt,o)}onFocus(){var o;const d=this.observers.find(h=>h.shouldFetchOnWindowFocus());d&&d.refetch({cancelRefetch:!1}),(o=this.retryer)==null||o.continue()}onOnline(){var o;const d=this.observers.find(h=>h.shouldFetchOnReconnect());d&&d.refetch({cancelRefetch:!1}),(o=this.retryer)==null||o.continue()}addObserver(o){this.observers.includes(o)||(this.observers.push(o),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:o}))}removeObserver(o){this.observers.includes(o)&&(this.observers=this.observers.filter(d=>d!==o),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:o}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(o,d){var h,B;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&d!=null&&d.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var _;return(_=this.retryer)==null||_.continueRetry(),this.promise}}if(o&&this.setOptions(o),!this.options.queryFn){const z=this.observers.find(fe=>fe.options.queryFn);z&&this.setOptions(z.options)}Array.isArray(this.options.queryKey);const J=(0,k.G9)(),Pe={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},$=z=>{Object.defineProperty(z,"signal",{enumerable:!0,get:()=>{if(J)return this.abortSignalConsumed=!0,J.signal}})};$(Pe);const S=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(Pe)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),I={fetchOptions:d,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:S};if($(I),(h=this.options.behavior)==null||h.onFetch(I),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((B=I.fetchOptions)==null?void 0:B.meta)){var W;this.dispatch({type:"fetch",meta:(W=I.fetchOptions)==null?void 0:W.meta})}const q=z=>{if((0,re.DV)(z)&&z.silent||this.dispatch({type:"error",error:z}),!(0,re.DV)(z)){var fe,Ie,Ke,pt;(fe=(Ie=this.cache.config).onError)==null||fe.call(Ie,z,this),(Ke=(pt=this.cache.config).onSettled)==null||Ke.call(pt,this.state.data,z,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,re.Mz)({fn:I.fetchFn,abort:J==null?void 0:J.abort.bind(J),onSuccess:z=>{var fe,Ie,Ke,pt;if(typeof z=="undefined"){q(new Error(this.queryHash+" data is undefined"));return}this.setData(z),(fe=(Ie=this.cache.config).onSuccess)==null||fe.call(Ie,z,this),(Ke=(pt=this.cache.config).onSettled)==null||Ke.call(pt,z,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:q,onFail:(z,fe)=>{this.dispatch({type:"failed",failureCount:z,error:fe})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:I.options.retry,retryDelay:I.options.retryDelay,networkMode:I.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(o){const d=h=>{var B,_;switch(o.type){case"failed":return ze(C({},h),{fetchFailureCount:o.failureCount,fetchFailureReason:o.error});case"pause":return ze(C({},h),{fetchStatus:"paused"});case"continue":return ze(C({},h),{fetchStatus:"fetching"});case"fetch":return C(ze(C({},h),{fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(B=o.meta)!=null?B:null,fetchStatus:(0,re.Kw)(this.options.networkMode)?"fetching":"paused"}),!h.dataUpdatedAt&&{error:null,status:"loading"});case"success":return C(ze(C({},h),{data:o.data,dataUpdateCount:h.dataUpdateCount+1,dataUpdatedAt:(_=o.dataUpdatedAt)!=null?_:Date.now(),error:null,isInvalidated:!1,status:"success"}),!o.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null});case"error":const J=o.error;return(0,re.DV)(J)&&J.revert&&this.revertState?C({},this.revertState):ze(C({},h),{error:J,errorUpdateCount:h.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:h.fetchFailureCount+1,fetchFailureReason:J,fetchStatus:"idle",status:"error"});case"invalidate":return ze(C({},h),{isInvalidated:!0});case"setState":return C(C({},h),o.state)}};this.state=d(this.state),he.V.batch(()=>{this.observers.forEach(h=>{h.onQueryUpdate(o)}),this.cache.notify({query:this,type:"updated",action:o})})}}function me(v){const o=typeof v.initialData=="function"?v.initialData():v.initialData,d=typeof o!="undefined",h=d?typeof v.initialDataUpdatedAt=="function"?v.initialDataUpdatedAt():v.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:d?h!=null?h:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:d?"success":"loading",fetchStatus:"idle"}}var lt=y(33989);class Ge extends lt.l{constructor(o){super(),this.config=o||{},this.queries=[],this.queriesMap={}}build(o,d,h){var B;const _=d.queryKey,J=(B=d.queryHash)!=null?B:(0,k.Rm)(_,d);let Pe=this.get(J);return Pe||(Pe=new oe({cache:this,logger:o.getLogger(),queryKey:_,queryHash:J,options:o.defaultQueryOptions(d),state:h,defaultOptions:o.getQueryDefaults(_)}),this.add(Pe)),Pe}add(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"added",query:o}))}remove(o){const d=this.queriesMap[o.queryHash];d&&(o.destroy(),this.queries=this.queries.filter(h=>h!==o),d===o&&delete this.queriesMap[o.queryHash],this.notify({type:"removed",query:o}))}clear(){he.V.batch(()=>{this.queries.forEach(o=>{this.remove(o)})})}get(o){return this.queriesMap[o]}getAll(){return this.queries}find(o,d){const[h]=(0,k.I6)(o,d);return typeof h.exact=="undefined"&&(h.exact=!0),this.queries.find(B=>(0,k._x)(h,B))}findAll(o,d){const[h]=(0,k.I6)(o,d);return Object.keys(h).length>0?this.queries.filter(B=>(0,k._x)(h,B)):this.queries}notify(o){he.V.batch(()=>{this.listeners.forEach(({listener:d})=>{d(o)})})}onFocus(){he.V.batch(()=>{this.queries.forEach(o=>{o.onFocus()})})}onOnline(){he.V.batch(()=>{this.queries.forEach(o=>{o.onOnline()})})}}class Fe extends Me{constructor(o){super(),this.defaultOptions=o.defaultOptions,this.mutationId=o.mutationId,this.mutationCache=o.mutationCache,this.logger=o.logger||i,this.observers=[],this.state=o.state||Et(),this.setOptions(o.options),this.scheduleGc()}setOptions(o){this.options=C(C({},this.defaultOptions),o),this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(o){this.dispatch({type:"setState",state:o})}addObserver(o){this.observers.includes(o)||(this.observers.push(o),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:o}))}removeObserver(o){this.observers=this.observers.filter(d=>d!==o),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:o})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var o,d;return(o=(d=this.retryer)==null?void 0:d.continue())!=null?o:this.execute()}execute(){return Qn(this,null,function*(){const o=()=>{var Y;return this.retryer=(0,re.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(V,Ze)=>{this.dispatch({type:"failed",failureCount:V,error:Ze})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(Y=this.options.retry)!=null?Y:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},d=this.state.status==="loading";try{var h,B,_,J,Pe,$,S,I;if(!d){var W,q,z,fe;this.dispatch({type:"loading",variables:this.options.variables}),yield(W=(q=this.mutationCache.config).onMutate)==null?void 0:W.call(q,this.state.variables,this);const V=yield(z=(fe=this.options).onMutate)==null?void 0:z.call(fe,this.state.variables);V!==this.state.context&&this.dispatch({type:"loading",context:V,variables:this.state.variables})}const Y=yield o();return yield(h=(B=this.mutationCache.config).onSuccess)==null?void 0:h.call(B,Y,this.state.variables,this.state.context,this),yield(_=(J=this.options).onSuccess)==null?void 0:_.call(J,Y,this.state.variables,this.state.context),yield(Pe=($=this.mutationCache.config).onSettled)==null?void 0:Pe.call($,Y,null,this.state.variables,this.state.context,this),yield(S=(I=this.options).onSettled)==null?void 0:S.call(I,Y,null,this.state.variables,this.state.context),this.dispatch({type:"success",data:Y}),Y}catch(Y){try{var Ie,Ke,pt,qe,rt,be,ct,ee;throw yield(Ie=(Ke=this.mutationCache.config).onError)==null?void 0:Ie.call(Ke,Y,this.state.variables,this.state.context,this),yield(pt=(qe=this.options).onError)==null?void 0:pt.call(qe,Y,this.state.variables,this.state.context),yield(rt=(be=this.mutationCache.config).onSettled)==null?void 0:rt.call(be,void 0,Y,this.state.variables,this.state.context,this),yield(ct=(ee=this.options).onSettled)==null?void 0:ct.call(ee,void 0,Y,this.state.variables,this.state.context),Y}finally{this.dispatch({type:"error",error:Y})}}})}dispatch(o){const d=h=>{switch(o.type){case"failed":return ze(C({},h),{failureCount:o.failureCount,failureReason:o.error});case"pause":return ze(C({},h),{isPaused:!0});case"continue":return ze(C({},h),{isPaused:!1});case"loading":return ze(C({},h),{context:o.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,re.Kw)(this.options.networkMode),status:"loading",variables:o.variables});case"success":return ze(C({},h),{data:o.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1});case"error":return ze(C({},h),{data:void 0,error:o.error,failureCount:h.failureCount+1,failureReason:o.error,isPaused:!1,status:"error"});case"setState":return C(C({},h),o.state)}};this.state=d(this.state),he.V.batch(()=>{this.observers.forEach(h=>{h.onMutationUpdate(o)}),this.mutationCache.notify({mutation:this,type:"updated",action:o})})}}function Et(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class Ae extends lt.l{constructor(o){super(),this.config=o||{},this.mutations=[],this.mutationId=0}build(o,d,h){const B=new Fe({mutationCache:this,logger:o.getLogger(),mutationId:++this.mutationId,options:o.defaultMutationOptions(d),state:h,defaultOptions:d.mutationKey?o.getMutationDefaults(d.mutationKey):void 0});return this.add(B),B}add(o){this.mutations.push(o),this.notify({type:"added",mutation:o})}remove(o){this.mutations=this.mutations.filter(d=>d!==o),this.notify({type:"removed",mutation:o})}clear(){he.V.batch(()=>{this.mutations.forEach(o=>{this.remove(o)})})}getAll(){return this.mutations}find(o){return typeof o.exact=="undefined"&&(o.exact=!0),this.mutations.find(d=>(0,k.X7)(o,d))}findAll(o){return this.mutations.filter(d=>(0,k.X7)(o,d))}notify(o){he.V.batch(()=>{this.listeners.forEach(({listener:d})=>{d(o)})})}resumePausedMutations(){var o;return this.resuming=((o=this.resuming)!=null?o:Promise.resolve()).then(()=>{const d=this.mutations.filter(h=>h.state.isPaused);return he.V.batch(()=>d.reduce((h,B)=>h.then(()=>B.continue().catch(k.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var tt=y(15761),Qe=y(96474);function vt(){return{onFetch:v=>{v.fetchFn=()=>{var o,d,h,B,_,J;const Pe=(o=v.fetchOptions)==null||(d=o.meta)==null?void 0:d.refetchPage,$=(h=v.fetchOptions)==null||(B=h.meta)==null?void 0:B.fetchMore,S=$==null?void 0:$.pageParam,I=($==null?void 0:$.direction)==="forward",W=($==null?void 0:$.direction)==="backward",q=((_=v.state.data)==null?void 0:_.pages)||[],z=((J=v.state.data)==null?void 0:J.pageParams)||[];let fe=z,Ie=!1;const Ke=ee=>{Object.defineProperty(ee,"signal",{enumerable:!0,get:()=>{var Y;if((Y=v.signal)!=null&&Y.aborted)Ie=!0;else{var V;(V=v.signal)==null||V.addEventListener("abort",()=>{Ie=!0})}return v.signal}})},pt=v.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+v.options.queryHash+"'")),qe=(ee,Y,V,Ze)=>(fe=Ze?[Y,...fe]:[...fe,Y],Ze?[V,...ee]:[...ee,V]),rt=(ee,Y,V,Ze)=>{if(Ie)return Promise.reject("Cancelled");if(typeof V=="undefined"&&!Y&&ee.length)return Promise.resolve(ee);const ot={queryKey:v.queryKey,pageParam:V,meta:v.options.meta};Ke(ot);const je=pt(ot);return Promise.resolve(je).then(Ye=>qe(ee,V,Ye,Ze))};let be;if(!q.length)be=rt([]);else if(I){const ee=typeof S!="undefined",Y=ee?S:Ce(v.options,q);be=rt(q,ee,Y)}else if(W){const ee=typeof S!="undefined",Y=ee?S:D(v.options,q);be=rt(q,ee,Y,!0)}else{fe=[];const ee=typeof v.options.getNextPageParam=="undefined";be=(Pe&&q[0]?Pe(q[0],0,q):!0)?rt([],ee,z[0]):Promise.resolve(qe([],z[0],q[0]));for(let V=1;V<q.length;V++)be=be.then(Ze=>{if(Pe&&q[V]?Pe(q[V],V,q):!0){const je=ee?z[V]:Ce(v.options,Ze);return rt(Ze,ee,je)}return Promise.resolve(qe(Ze,z[V],q[V]))})}return be.then(ee=>({pages:ee,pageParams:fe}))}}}}function Ce(v,o){return v.getNextPageParam==null?void 0:v.getNextPageParam(o[o.length-1],o)}function D(v,o){return v.getPreviousPageParam==null?void 0:v.getPreviousPageParam(o[0],o)}function n(v,o){if(v.getNextPageParam&&Array.isArray(o)){const d=Ce(v,o);return typeof d!="undefined"&&d!==null&&d!==!1}}function ae(v,o){if(v.getPreviousPageParam&&Array.isArray(o)){const d=D(v,o);return typeof d!="undefined"&&d!==null&&d!==!1}}class yt{constructor(o={}){this.queryCache=o.queryCache||new Ge,this.mutationCache=o.mutationCache||new Ae,this.logger=o.logger||i,this.defaultOptions=o.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=tt.j.subscribe(()=>{tt.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Qe.N.subscribe(()=>{Qe.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var o,d;this.mountCount--,this.mountCount===0&&((o=this.unsubscribeFocus)==null||o.call(this),this.unsubscribeFocus=void 0,(d=this.unsubscribeOnline)==null||d.call(this),this.unsubscribeOnline=void 0)}isFetching(o,d){const[h]=(0,k.I6)(o,d);return h.fetchStatus="fetching",this.queryCache.findAll(h).length}isMutating(o){return this.mutationCache.findAll(ze(C({},o),{fetching:!0})).length}getQueryData(o,d){var h;return(h=this.queryCache.find(o,d))==null?void 0:h.state.data}ensureQueryData(o,d,h){const B=(0,k._v)(o,d,h),_=this.getQueryData(B.queryKey);return _?Promise.resolve(_):this.fetchQuery(B)}getQueriesData(o){return this.getQueryCache().findAll(o).map(({queryKey:d,state:h})=>{const B=h.data;return[d,B]})}setQueryData(o,d,h){const B=this.queryCache.find(o),_=B==null?void 0:B.state.data,J=(0,k.SE)(d,_);if(typeof J=="undefined")return;const Pe=(0,k._v)(o),$=this.defaultQueryOptions(Pe);return this.queryCache.build(this,$).setData(J,ze(C({},h),{manual:!0}))}setQueriesData(o,d,h){return he.V.batch(()=>this.getQueryCache().findAll(o).map(({queryKey:B})=>[B,this.setQueryData(B,d,h)]))}getQueryState(o,d){var h;return(h=this.queryCache.find(o,d))==null?void 0:h.state}removeQueries(o,d){const[h]=(0,k.I6)(o,d),B=this.queryCache;he.V.batch(()=>{B.findAll(h).forEach(_=>{B.remove(_)})})}resetQueries(o,d,h){const[B,_]=(0,k.I6)(o,d,h),J=this.queryCache,Pe=C({type:"active"},B);return he.V.batch(()=>(J.findAll(B).forEach($=>{$.reset()}),this.refetchQueries(Pe,_)))}cancelQueries(o,d,h){const[B,_={}]=(0,k.I6)(o,d,h);typeof _.revert=="undefined"&&(_.revert=!0);const J=he.V.batch(()=>this.queryCache.findAll(B).map(Pe=>Pe.cancel(_)));return Promise.all(J).then(k.ZT).catch(k.ZT)}invalidateQueries(o,d,h){const[B,_]=(0,k.I6)(o,d,h);return he.V.batch(()=>{var J,Pe;if(this.queryCache.findAll(B).forEach(S=>{S.invalidate()}),B.refetchType==="none")return Promise.resolve();const $=ze(C({},B),{type:(J=(Pe=B.refetchType)!=null?Pe:B.type)!=null?J:"active"});return this.refetchQueries($,_)})}refetchQueries(o,d,h){const[B,_]=(0,k.I6)(o,d,h),J=he.V.batch(()=>this.queryCache.findAll(B).filter($=>!$.isDisabled()).map($=>{var S;return $.fetch(void 0,ze(C({},_),{cancelRefetch:(S=_==null?void 0:_.cancelRefetch)!=null?S:!0,meta:{refetchPage:B.refetchPage}}))}));let Pe=Promise.all(J).then(k.ZT);return _!=null&&_.throwOnError||(Pe=Pe.catch(k.ZT)),Pe}fetchQuery(o,d,h){const B=(0,k._v)(o,d,h),_=this.defaultQueryOptions(B);typeof _.retry=="undefined"&&(_.retry=!1);const J=this.queryCache.build(this,_);return J.isStaleByTime(_.staleTime)?J.fetch(_):Promise.resolve(J.state.data)}prefetchQuery(o,d,h){return this.fetchQuery(o,d,h).then(k.ZT).catch(k.ZT)}fetchInfiniteQuery(o,d,h){const B=(0,k._v)(o,d,h);return B.behavior=vt(),this.fetchQuery(B)}prefetchInfiniteQuery(o,d,h){return this.fetchInfiniteQuery(o,d,h).then(k.ZT).catch(k.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(o){this.defaultOptions=o}setQueryDefaults(o,d){const h=this.queryDefaults.find(B=>(0,k.yF)(o)===(0,k.yF)(B.queryKey));h?h.defaultOptions=d:this.queryDefaults.push({queryKey:o,defaultOptions:d})}getQueryDefaults(o){if(!o)return;const d=this.queryDefaults.find(h=>(0,k.to)(o,h.queryKey));return d==null?void 0:d.defaultOptions}setMutationDefaults(o,d){const h=this.mutationDefaults.find(B=>(0,k.yF)(o)===(0,k.yF)(B.mutationKey));h?h.defaultOptions=d:this.mutationDefaults.push({mutationKey:o,defaultOptions:d})}getMutationDefaults(o){if(!o)return;const d=this.mutationDefaults.find(h=>(0,k.to)(o,h.mutationKey));return d==null?void 0:d.defaultOptions}defaultQueryOptions(o){if(o!=null&&o._defaulted)return o;const d=ze(C(C(C({},this.defaultOptions.queries),this.getQueryDefaults(o==null?void 0:o.queryKey)),o),{_defaulted:!0});return!d.queryHash&&d.queryKey&&(d.queryHash=(0,k.Rm)(d.queryKey,d)),typeof d.refetchOnReconnect=="undefined"&&(d.refetchOnReconnect=d.networkMode!=="always"),typeof d.useErrorBoundary=="undefined"&&(d.useErrorBoundary=!!d.suspense),d}defaultMutationOptions(o){return o!=null&&o._defaulted?o:ze(C(C(C({},this.defaultOptions.mutations),this.getMutationDefaults(o==null?void 0:o.mutationKey)),o),{_defaulted:!0})}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},81071:function(se,M,y){"use strict";y.d(M,{ck:function(){return h},v2:function(){return d},av:function(){return vt}});var k=y(67294);function i($){var S,I,W="";if(typeof $=="string"||typeof $=="number")W+=$;else if(typeof $=="object")if(Array.isArray($))for(S=0;S<$.length;S++)$[S]&&(I=i($[S]))&&(W&&(W+=" "),W+=I);else for(S in $)$[S]&&(W&&(W+=" "),W+=S);return W}function he(){for(var $,S,I=0,W="";I<arguments.length;)($=arguments[I++])&&(S=i($))&&(W&&(W+=" "),W+=S);return W}var re=he,Me=y(73935),oe=(0,k.createContext)({}),me=()=>(0,k.useContext)(oe),lt=$=>k.createElement(oe.Provider,C({},$));function Ge(){let $=new Map;return{on(S,I){return $.has(S)?$.get(S).add(I):$.set(S,new Set([I])),this},off(S,I){return $.has(S)&&$.get(S).delete(I),this},emit(S,I){return $.has(S)&&$.get(S).forEach(W=>{W(I)}),this}}}var Fe=Ge(),Et=()=>(0,k.useRef)(new Map).current,Ae=()=>{},tt=["resize","contextmenu","click","scroll","blur"],Qe={show({event:$,id:S,props:I,position:W}){$.preventDefault&&$.preventDefault(),Fe.emit(0).emit(S,{event:$.nativeEvent||$,props:I,position:W})},hideAll(){Fe.emit(0)}};function vt($){return{show(S){Qe.show(C(C({},$),S))},hideAll(){Qe.hideAll()}}}function Ce(){let $=new Map,S,I,W,q,z=!1;function fe(V){q=Array.from(V.values()),S=-1,W=!0}function Ie(){q[S].node.focus()}let Ke=()=>S>=0&&q[S].isSubmenu,pt=()=>Array.from(q[S].submenuRefTracker.values());function qe(){return S===-1?(rt(),!1):!0}function rt(){S+1<q.length?S++:S+1===q.length&&(S=0),z&&ee(),Ie()}function be(){S===-1||S===0?S=q.length-1:S-1<q.length&&S--,z&&ee(),Ie()}function ct(){if(qe()&&Ke()){let V=pt(),{node:Ze,setSubmenuPosition:ot}=q[S];return $.set(Ze,{isRoot:W,focusedIndex:S,parentNode:I||Ze,items:q}),ot(),Ze.classList.add("contexify_submenu-isOpen"),I=Ze,V.length>0?(S=0,q=V):z=!0,W=!1,Ie(),!0}return!1}function ee(){if(qe()&&!W){let V=$.get(I);I.classList.remove("contexify_submenu-isOpen"),q=V.items,I=V.parentNode,V.isRoot&&(W=!0,$.clear()),z||(S=V.focusedIndex,Ie())}}function Y(V){function Ze(ot){for(let je of ot)je.isSubmenu&&je.submenuRefTracker&&Ze(Array.from(je.submenuRefTracker.values())),je.keyMatcher&&je.keyMatcher(V)}Ze(q)}return{init:fe,moveDown:rt,moveUp:be,openSubmenu:ct,closeSubmenu:ee,matchKeys:Y}}function D($){return typeof $=="function"}function n($){return typeof $=="string"}function ae($,S){return k.Children.map(k.Children.toArray($).filter(Boolean),I=>(0,k.cloneElement)(I,S))}function yt($){let S={x:$.clientX,y:$.clientY},I=$.changedTouches;return I&&(S.x=I[0].clientX,S.y=I[0].clientY),(!S.x||S.x<0)&&(S.x=0),(!S.y||S.y<0)&&(S.y=0),S}function v($,S){return D($)?$(S):$}function o($,S){return C(C({},$),D(S)?S($):S)}var d=qe=>{var rt=qe,{id:$,theme:S,style:I,className:W,children:q,animation:z="fade",preventDefaultOnKeydown:fe=!0,disableBoundariesCheck:Ie=!1,onVisibilityChange:Ke}=rt,pt=xe(rt,["id","theme","style","className","children","animation","preventDefaultOnKeydown","disableBoundariesCheck","onVisibilityChange"]);let[be,ct]=(0,k.useReducer)(o,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),ee=(0,k.useRef)(null),Y=Et(),[V]=(0,k.useState)(()=>Ce()),Ze=(0,k.useRef)(),ot=(0,k.useRef)();(0,k.useEffect)(()=>(Fe.on($,er).on(0,Ye),()=>{Fe.off($,er).off(0,Ye)}),[$,z,Ie]),(0,k.useEffect)(()=>{be.visible?V.init(Y):Y.clear()},[be.visible,V,Y]);function je(bt,Rt){if(ee.current&&!Ie){let{innerWidth:At,innerHeight:dr}=window,{offsetWidth:fr,offsetHeight:pr}=ee.current;bt+fr>At&&(bt-=bt+fr-At),Rt+pr>dr&&(Rt-=Rt+pr-dr)}return{x:bt,y:Rt}}(0,k.useEffect)(()=>{be.visible&&ct(je(be.x,be.y))},[be.visible]),(0,k.useEffect)(()=>{function bt(At){fe&&At.preventDefault()}function Rt(At){switch(At.key){case"Enter":case" ":V.openSubmenu()||Ye();break;case"Escape":Ye();break;case"ArrowUp":bt(At),V.moveUp();break;case"ArrowDown":bt(At),V.moveDown();break;case"ArrowRight":bt(At),V.openSubmenu();break;case"ArrowLeft":bt(At),V.closeSubmenu();break;default:V.matchKeys(At);break}}if(be.visible){window.addEventListener("keydown",Rt);for(let At of tt)window.addEventListener(At,Ye)}return()=>{window.removeEventListener("keydown",Rt);for(let At of tt)window.removeEventListener(At,Ye)}},[be.visible,V,fe]);function er({event:bt,props:Rt,position:At}){bt.stopPropagation();let dr=At||yt(bt),{x:fr,y:pr}=je(dr.x,dr.y);(0,Me.flushSync)(()=>{ct({visible:!0,willLeave:!1,x:fr,y:pr,triggerEvent:bt,propsFromTrigger:Rt})}),clearTimeout(ot.current),!Ze.current&&D(Ke)&&(Ke(!0),Ze.current=!0)}function Ye(bt){bt!=null&&(bt.button===2||bt.ctrlKey)&&bt.type!=="contextmenu"||(z&&(n(z)||"exit"in z&&z.exit)?ct(Rt=>({willLeave:Rt.visible})):ct(Rt=>({visible:Rt.visible?!1:Rt.visible})),ot.current=setTimeout(()=>{D(Ke)&&Ke(!1),Ze.current=!1}))}function zt(){be.willLeave&&be.visible&&(0,Me.flushSync)(()=>ct({visible:!1,willLeave:!1}))}function Nt(){return n(z)?re({[`contexify_willEnter-${z}`]:xt&&!ur,[`contexify_willLeave-${z} contexify_willLeave-'disabled'`]:xt&&ur}):z&&"enter"in z&&"exit"in z?re({[`contexify_willEnter-${z.enter}`]:z.enter&&xt&&!ur,[`contexify_willLeave-${z.exit} contexify_willLeave-'disabled'`]:z.exit&&xt&&ur}):null}let{visible:xt,triggerEvent:Xe,propsFromTrigger:Kt,x:cr,y:gr,willLeave:ur}=be,Lr=re("contexify",W,{[`contexify_theme-${S}`]:S},Nt());return k.createElement(lt,{value:Y},xt&&k.createElement("div",ze(C({},pt),{className:Lr,onAnimationEnd:zt,style:ze(C({},I),{left:cr,top:gr,opacity:1}),ref:ee,role:"menu"}),ae(q,{propsFromTrigger:Kt,triggerEvent:Xe})))},h=ee=>{var Y=ee,{id:$,children:S,className:I,style:W,triggerEvent:q,data:z,propsFromTrigger:fe,keyMatcher:Ie,onClick:Ke=Ae,disabled:pt=!1,hidden:qe=!1,closeOnClick:rt=!0,handlerEvent:be="onClick"}=Y,ct=xe(Y,["id","children","className","style","triggerEvent","data","propsFromTrigger","keyMatcher","onClick","disabled","hidden","closeOnClick","handlerEvent"]);let V=(0,k.useRef)(),Ze=me(),ot={id:$,data:z,triggerEvent:q,props:fe},je=v(pt,ot),er=v(qe,ot);function Ye(Xe){ot.event=Xe,Xe.stopPropagation(),je||(rt?zt():Ke(ot))}function zt(){let Xe=V.current;Xe.focus(),Xe.addEventListener("animationend",()=>setTimeout(Qe.hideAll),{once:!0}),Xe.classList.add("contexify_item-feedback"),Ke(ot)}function Nt(Xe){Xe&&!je&&(V.current=Xe,Ze.set(Xe,{node:Xe,isSubmenu:!1,keyMatcher:!je&&D(Ie)&&(Kt=>{Ie(Kt)&&(Kt.stopPropagation(),Kt.preventDefault(),ot.event=Kt,zt())})}))}function xt(Xe){(Xe.key==="Enter"||Xe.key===" ")&&(Xe.stopPropagation(),ot.event=Xe,zt())}return er?null:k.createElement("div",ze(C({},ct),{[be]:Ye,className:re("contexify_item",I,{["contexify_item-disabled"]:je}),style:W,onKeyDown:xt,ref:Nt,tabIndex:-1,role:"menuitem","aria-disabled":je}),k.createElement("div",{className:"contexify_itemContent"},S))},B=({triggerEvent:$,data:S,propsFromTrigger:I,hidden:W=!1})=>v(W,{data:S,triggerEvent:$,props:I})?null:H.createElement("div",{className:"contexify_separator"}),_=()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},H.createElement("polyline",{points:"9 18 15 12 9 6"})),J=I=>{var W=I,{className:$}=W,S=xe(W,["className"]);return H.createElement("div",C({className:X("contexify_rightSlot",$)},S))},Pe=qe=>{var rt=qe,{arrow:$,children:S,disabled:I=!1,hidden:W=!1,label:q,className:z,triggerEvent:fe,propsFromTrigger:Ie,style:Ke}=rt,pt=xe(rt,["arrow","children","disabled","hidden","label","className","triggerEvent","propsFromTrigger","style"]);let be=me(),ct=Et(),ee=useRef(null),Y={triggerEvent:fe,props:Ie},V=v(I,Y),Ze=v(W,Y);function ot(){let Ye=ee.current;if(Ye){let zt="contexify_submenu-bottom",Nt="contexify_submenu-right";Ye.classList.remove(zt,Nt);let xt=Ye.getBoundingClientRect();xt.right>window.innerWidth&&Ye.classList.add(Nt),xt.bottom>window.innerHeight&&Ye.classList.add(zt)}}function je(Ye){Ye&&!V&&be.set(Ye,{node:Ye,isSubmenu:!0,submenuRefTracker:ct,setSubmenuPosition:ot})}if(Ze)return null;let er=X("contexify_item",z,{["contexify_item-disabled"]:V});return H.createElement(lt,{value:ct},H.createElement("div",ze(C({},pt),{className:er,ref:je,tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":V,onMouseEnter:ot,onTouchStart:ot}),H.createElement("div",{className:"contexify_itemContent",onClick:Ye=>Ye.stopPropagation()},q,H.createElement(J,null,$||H.createElement(_,null))),H.createElement("div",{className:"contexify contexify_submenu",ref:ee,style:Ke},ae(S,{propsFromTrigger:Ie,triggerEvent:fe}))))}},60299:function(se,M,y){"use strict";y.d(M,{xG:function(){return o},zx:function(){return z},qy:function(){return pt},MF:function(){return Ke},Z0:function(){return xt},oi:function(){return Br},o8:function(){return _r},Rz:function(){return P},GH:function(){return a},ib:function(){return l},mw:function(){return k}});var k=`
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

`,i=y(94589),he=y(48764).lW;const re="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Me="inset 2px 2px 3px rgba(0,0,0,0.2)",oe=()=>i.iv`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,me=({background:e="material",color:t="materialText"}={})=>i.iv`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:c})=>c[e]};
  color: ${({theme:c})=>c[t]};
`,lt=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:c=2})=>i.iv`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${c*2}px ${c*2}px`};
  background-position: 0 0, ${`${c}px ${c}px`};
`,Ge=()=>i.iv`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Fe={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Et=({theme:e,topLeftInner:t,bottomRightInner:c,hasShadow:p=!1,hasInsetShadow:g=!1})=>[p?re:!1,g?Me:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,c!==null?`inset -1px -1px 0 1px ${e[c]}`:!1].filter(Boolean).join(", "),Ae=({invert:e=!1,style:t="button"}={})=>{const c={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return i.iv`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:p})=>p[Fe[t][c.topLeftOuter]]};
    border-top-color: ${({theme:p})=>p[Fe[t][c.topLeftOuter]]};
    border-right-color: ${({theme:p})=>p[Fe[t][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:p})=>p[Fe[t][c.bottomRightOuter]]};
    box-shadow: ${({theme:p,shadow:g})=>Et({theme:p,topLeftInner:Fe[t][c.topLeftInner],bottomRightInner:Fe[t][c.bottomRightInner],hasShadow:g})};
  `},tt=()=>i.iv`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,vt=typeof btoa!="undefined"?btoa:e=>he.from(e).toString("base64"),Ce=(e,t=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${vt(c)})`},D=(e="default")=>i.iv`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>lt({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${me()}
    ${e==="flat"?Ge():Ae({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${me()}
    ${e==="flat"?Ge():Ae({style:"window"})}
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
    ${e==="default"?Ae({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Ce(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Ce(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Ce(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Ce(t.materialText,0)};
  }
`;var n=y(67294);const ae=i.ZP.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,yt=(0,n.forwardRef)((g,p)=>{var w=g,{children:e,underline:t=!0}=w,c=xe(w,["children","underline"]);return n.createElement(ae,C({ref:p,underline:t},c),e)});yt.displayName="Anchor";const v=i.ZP.header`
  ${Ae()};
  ${me()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,o=(0,n.forwardRef)((w,g)=>{var A=w,{children:e,fixed:t=!0,position:c="fixed"}=A,p=xe(A,["children","fixed","position"]);return n.createElement(v,C({fixed:t,position:t!==!1?c:void 0,ref:g},p),e)});o.displayName="AppBar";const d=()=>{};function h(e,t,c){return c!==null&&e>c?c:t!==null&&e<t?t:e}function B(e){if(Math.abs(e)<1){const c=e.toExponential().split("e-"),p=c[0].split(".")[1];return(p?p.length:0)+parseInt(c[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function _(e,t,c){const p=Math.round((e-c)/t)*t+c;return Number(p.toFixed(B(t)))}function J(e){return typeof e=="number"?`${e}px`:e}const Pe=i.ZP.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,$=i.ZP.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,S=(0,n.forwardRef)((N,T)=>{var L=N,{alt:e="",children:t,noBorder:c=!1,size:p=35,square:g=!1,src:w}=L,A=xe(L,["alt","children","noBorder","size","square","src"]);return n.createElement(Pe,C({noBorder:c,ref:T,size:J(p),square:g,src:w},A),w?n.createElement($,{src:w,alt:e}):t)});S.displayName="Avatar";const I={sm:"28px",md:"36px",lg:"44px"},W=i.iv`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>I[e]};
  width: ${({fullWidth:e,size:t="md",square:c})=>e?"100%":c?I[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
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
`,q=i.ZP.button`
  ${({active:e,disabled:t,primary:c,theme:p,variant:g})=>g==="flat"?i.iv`
          ${Ge()}
          ${c?`
          border: 2px solid ${p.checkmark};
            outline: 2px solid ${p.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${p.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&tt}
            outline-offset: -4px;
          }
        `:g==="menu"||g==="thin"?i.iv`
          ${me()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&Ae({style:"buttonThin"})}
          }
          &:active {
            ${!t&&Ae({style:"buttonThinPressed"})}
          }
          ${e&&Ae({style:"buttonThinPressed"})}
          ${t&&oe()}
        `:i.iv`
          ${me()};
          border: none;
          ${t&&oe()}
          ${e?lt({mainColor:p.material,secondaryColor:p.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${c?i.iv`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${p.borderDarkest};
                `:i.iv`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Ae(e?{style:g==="raised"?"window":"button",invert:!0}:{style:g==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&Ae({style:g==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&tt}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${W}
`,z=(0,n.forwardRef)((ne,ve)=>{var pe=ne,{onClick:e,disabled:t=!1,children:c,type:p="button",fullWidth:g=!1,size:w="md",square:A=!1,active:T=!1,onTouchStart:N=d,primary:L=!1,variant:G="default"}=pe,F=xe(pe,["onClick","disabled","children","type","fullWidth","size","square","active","onTouchStart","primary","variant"]);return n.createElement(q,C({active:T,disabled:t,$disabled:t,fullWidth:g,onClick:t?void 0:e,onTouchStart:N,primary:L,ref:ve,size:w,square:A,type:p,variant:G},F),c)});z.displayName="Button";function fe({defaultValue:e,onChange:t,onChangePropName:c="onChange",readOnly:p,value:g,valuePropName:w="value"}){const A=g!==void 0,[T,N]=(0,n.useState)(e),L=(0,n.useCallback)(G=>{A||N(G)},[A]);if(A&&typeof t!="function"&&!p){const G=`Warning: You provided a \`${w}\` prop to a component without an \`${c}\` handler.${w==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${w}\`.`}`;console.warn(G)}return[A?g:T,L]}const Ie=i.ZP.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>I[e.size]};
  width: ${e=>e.square?I[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>I[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&oe()}
`,Ke=(0,n.forwardRef)((N,T)=>{var L=N,{size:e="lg",disabled:t,square:c,children:p,onClick:g,primary:w}=L,A=xe(L,["size","disabled","square","children","onClick","primary"]);return n.createElement(Ie,C({$disabled:t,size:e,square:c,onClick:t?void 0:g,primary:w,role:"menuitem",ref:T,"aria-disabled":t},A),p)});Ke.displayName="MenuListItem";const pt=i.ZP.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ae({style:"window"})}
  ${me()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;pt.displayName="MenuList";const qe=20,rt=i.ZP.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${qe}px;
  height: ${qe}px;
  opacity: 0;
  z-index: -1;
`,be=i.ZP.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&oe()}

  ${Ie} & {
    margin: 0;
    height: 100%;
  }
  ${Ie}:hover & {
    ${({$disabled:e,theme:t})=>!e&&i.iv`
        color: ${t.materialTextInvert};
      `};
  }
`,ct=i.ZP.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${rt}:focus ~ & {
    ${tt}
  }
  ${rt}:not(:disabled) ~ &:active {
    ${tt}
  }
`,ee=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
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
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Me};`}
  }
`,Y=i.ZP.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${D()}
`,V=(0,n.forwardRef)((g,p)=>{var w=g,{children:e,shadow:t=!0}=w,c=xe(w,["children","shadow"]);return n.createElement(ee,C({ref:p,shadow:t},c),n.createElement(Y,null,e))});V.displayName="ScrollView";const Ze=i.iv`
  width: ${qe}px;
  height: ${qe}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ot=(0,i.ZP)(ee)`
  ${Ze}
  width: ${qe}px;
  height: ${qe}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,je=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${Ze}
  width: ${qe-4}px;
  height: ${qe-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,er=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Ye=i.ZP.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>lt({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,zt={flat:je,default:ot},Nt=(0,n.forwardRef)((ve,F)=>{var ne=ve,{checked:e,className:t="",defaultChecked:c=!1,disabled:p=!1,indeterminate:g=!1,label:w="",onChange:A=d,style:T={},value:N,variant:L="default"}=ne,G=xe(ne,["checked","className","defaultChecked","disabled","indeterminate","label","onChange","style","value","variant"]);var pe;const[et,te]=fe({defaultValue:c,onChange:A,readOnly:(pe=G.readOnly)!==null&&pe!==void 0?pe:p,value:e}),ye=(0,n.useCallback)($e=>{const Ee=$e.target.checked;te(Ee),A($e)},[A,te]),ke=zt[L];let le=null;return g?le=Ye:et&&(le=er),n.createElement(be,{$disabled:p,className:t,style:T},n.createElement(rt,C({disabled:p,onChange:p?void 0:ye,readOnly:p,type:"checkbox",value:N,checked:et,"data-indeterminate":g,ref:F},G)),n.createElement(ke,{$disabled:p,role:"presentation"},le&&n.createElement(le,{$disabled:p,variant:L})),w&&n.createElement(ct,null,w))});Nt.displayName="Checkbox";const xt=i.ZP.div`
  ${({orientation:e,theme:t,size:c="100%"})=>e==="vertical"?`
    height: ${J(c)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${J(c)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;xt.displayName="Separator";const Xe=(0,i.ZP)(q)`
  padding-left: 8px;
`,Kt=(0,i.ZP)(xt)`
  height: 21px;
  position: relative;
  top: 0;
`,cr=i.ZP.input`
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
`,gr=i.ZP.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?i.iv`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:i.iv`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${cr}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${tt}
    outline-offset: -8px;
  }
`,ur=i.ZP.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?i.iv`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:i.iv`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Lr=(0,n.forwardRef)((T,A)=>{var N=T,{value:e,defaultValue:t,onChange:c=d,disabled:p=!1,variant:g="default"}=N,w=xe(N,["value","defaultValue","onChange","disabled","variant"]);var L;const[G,F]=fe({defaultValue:t,onChange:c,readOnly:(L=w.readOnly)!==null&&L!==void 0?L:p,value:e}),ve=ne=>{const pe=ne.target.value;F(pe),c(ne)};return n.createElement(Xe,{disabled:p,as:"div",variant:g,size:"md"},n.createElement(cr,C({onChange:ve,readOnly:p,disabled:p,value:G!=null?G:"#008080",type:"color",ref:A},w)),n.createElement(gr,{$disabled:p,color:G!=null?G:"#008080",role:"presentation"}),g==="default"&&n.createElement(Kt,{orientation:"vertical"}),n.createElement(ur,{$disabled:p,variant:g}))});Lr.displayName="ColorInput";const bt=i.ZP.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>i.iv`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

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
      ${lt({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
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
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
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
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Rt=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],At=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function dr(p){var g=p,{digit:e=0,pixelSize:t=2}=g,c=xe(g,["digit","pixelSize"]);const w=At[Number(e)].map((A,T)=>A?`${Rt[T]} active`:Rt[T]);return n.createElement(bt,C({pixelSize:t},c),w.map((A,T)=>n.createElement("span",{className:A,key:T})))}const fr=i.ZP.div`
  ${Ae({style:"status"})}
  display: inline-flex;
  background: #000000;
`,pr={sm:1,md:2,lg:3,xl:4},qr=(0,n.forwardRef)((w,g)=>{var A=w,{value:e=0,minLength:t=3,size:c="md"}=A,p=xe(A,["value","minLength","size"]);const T=(0,n.useMemo)(()=>e.toString().padStart(t,"0").split(""),[t,e]);return n.createElement(fr,C({ref:g},p),T.map((N,L)=>n.createElement(dr,{digit:N,pixelSize:pr[c],key:L})))});qr.displayName="Counter";const Yr=i.iv`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${I.md};
`,Xr=(0,i.ZP)(ee).attrs({"data-testid":"variant-default"})`
  ${Yr}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,fn=i.ZP.div.attrs({"data-testid":"variant-flat"})`
  ${Ge()}
  ${Yr}
  position: relative;
`,Jr=i.iv`
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
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&oe()}
`,pn=i.ZP.input`
  ${Jr}
  padding: 0 8px;
`,hn=i.ZP.textarea`
  ${Jr}
  padding: 8px;
  resize: none;
  ${({variant:e})=>D(e)}
`,Br=(0,n.forwardRef)((L,N)=>{var G=L,{className:e,disabled:t=!1,fullWidth:c,onChange:p=d,shadow:g=!0,style:w,variant:A="default"}=G,T=xe(G,["className","disabled","fullWidth","onChange","shadow","style","variant"]);const F=A==="flat"?fn:Xr,ve=(0,n.useMemo)(()=>{var ne;return T.multiline?n.createElement(hn,C({disabled:t,onChange:t?void 0:p,readOnly:t,ref:N,variant:A},T)):n.createElement(pn,C({disabled:t,onChange:t?void 0:p,readOnly:t,ref:N,type:(ne=T.type)!==null&&ne!==void 0?ne:"text",variant:A},T))},[t,p,T,N,A]);return n.createElement(F,{className:e,fullWidth:c,$disabled:t,shadow:g,style:w},ve)});Br.displayName="TextInput";const en=i.ZP.div`
  display: inline-flex;
  align-items: center;
`,sr=(0,i.ZP)(z)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?i.iv`
          height: calc(50% - 1px);
        `:i.iv`
          height: 50%;
        `}
`,tn=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?i.iv`
          height: calc(${I.md} - 4px);
        `:i.iv`
          height: ${I.md};
          margin-left: 2px;
        `}
`,Pr=i.ZP.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?i.iv`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:i.iv`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${sr}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?i.iv`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:i.iv`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,mn=(0,n.forwardRef)((pe,ne)=>{var et=pe,{className:e,defaultValue:t,disabled:c=!1,max:p,min:g,onChange:w,readOnly:A,step:T=1,style:N,value:L,variant:G="default",width:F}=et,ve=xe(et,["className","defaultValue","disabled","max","min","onChange","readOnly","step","style","value","variant","width"]);const[te,ye]=fe({defaultValue:t,onChange:w,readOnly:A,value:L}),ke=(0,n.useCallback)(nr=>{const jt=parseFloat(nr.target.value);ye(jt)},[ye]),le=(0,n.useCallback)(nr=>{const jt=h(parseFloat(((te!=null?te:0)+nr).toFixed(2)),g!=null?g:null,p!=null?p:null);ye(jt),w==null||w(jt)},[p,g,w,ye,te]),$e=(0,n.useCallback)(()=>{te!==void 0&&(w==null||w(te))},[w,te]),Ee=(0,n.useCallback)(()=>{le(T)},[le,T]),De=(0,n.useCallback)(()=>{le(-T)},[le,T]),Tt=G==="flat"?"flat":"raised";return n.createElement(en,C({className:e,style:ze(C({},N),{width:F!==void 0?J(F):"auto"})},ve),n.createElement(Br,{value:te,variant:G,onChange:ke,disabled:c,type:"number",readOnly:A,ref:ne,fullWidth:!0,onBlur:$e}),n.createElement(tn,{variant:G},n.createElement(sr,{"data-testid":"increment",variant:Tt,disabled:c||A,onClick:Ee},n.createElement(Pr,{invert:!0})),n.createElement(sr,{"data-testid":"decrement",variant:Tt,disabled:c||A,onClick:De},n.createElement(Pr,null))))});mn.displayName="NumberInput";function En(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let c=0;c<10;c+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const bn=e=>(0,n.useMemo)(()=>e!=null?e:En(),[e]),Nr=i.iv`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,rn=i.iv`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Qr=i.ZP.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,jr=i.ZP.div`
  ${Nr}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Qr}:focus & {
    ${rn}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Mr=i.iv`
  height: ${I.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?oe():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Fr=(0,i.ZP)(ee)`
  ${Mr}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,Vr=i.ZP.div`
  ${Ge()}
  ${Mr}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,gn=i.ZP.select`
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
  ${Nr}
  cursor: pointer;
  &:disabled {
    ${oe()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,nn=(0,i.ZP)(q).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?i.iv`
          height: 100%;
          margin-right: 0;
        `:i.iv`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,on=i.ZP.span`
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
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${nn}:active & {
    margin-top: 2px;
  }
`,vr=i.ZP.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${re};
  ${({variant:e="default"})=>e==="flat"?i.iv`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:i.iv`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>D(e)}
`,Sn=i.ZP.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${I.md} - 4px);
  line-height: calc(${I.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?rn:""}
  user-select: none;
`,vn=[],Zr=({className:e,defaultValue:t,disabled:c,native:p,onChange:g,options:w=vn,readOnly:A,style:T,value:N,variant:L,width:G})=>{var F;const ve=(0,n.useMemo)(()=>w.filter(Boolean),[w]),[ne,pe]=fe({defaultValue:t!=null?t:(F=ve==null?void 0:ve[0])===null||F===void 0?void 0:F.value,onChange:g,readOnly:A,value:N}),et=!(c||A),te=(0,n.useMemo)(()=>({className:e,style:ze(C({},T),{width:G})}),[e,T,G]),ye=(0,n.useMemo)(()=>n.createElement(nn,{as:"div","data-testid":"select-button",$disabled:c,native:p,tabIndex:-1,variant:L==="flat"?"flat":"raised"},n.createElement(on,{"data-testid":"select-icon",$disabled:c})),[c,p,L]),ke=(0,n.useMemo)(()=>L==="flat"?Vr:Fr,[L]);return(0,n.useMemo)(()=>({isEnabled:et,options:ve,value:ne,setValue:pe,wrapperProps:te,DropdownButton:ye,Wrapper:ke}),[ye,ke,et,ve,pe,ne,te])},an={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ur=1e3,yn=({onBlur:e,onChange:t,onClose:c,onFocus:p,onKeyDown:g,onMouseDown:w,onOpen:A,open:T,options:N,readOnly:L,value:G,selectRef:F,setValue:ve,wrapperRef:ne})=>{const pe=(0,n.useRef)(null),et=(0,n.useRef)([]),te=(0,n.useRef)(0),ye=(0,n.useRef)(0),ke=(0,n.useRef)(),le=(0,n.useRef)("search"),$e=(0,n.useRef)(""),Ee=(0,n.useRef)(),[De,Tt]=fe({defaultValue:!1,onChange:A,onChangePropName:"onOpen",readOnly:L,value:T,valuePropName:"open"}),nr=(0,n.useMemo)(()=>{const E=N.findIndex(ce=>ce.value===G);return te.current=h(E,0,null),N[E]},[N,G]),[jt,Xt]=(0,n.useState)(N[0]),Ft=(0,n.useCallback)(E=>{const ce=pe.current,We=et.current[E];if(!We||!ce){ke.current=E;return}ke.current=void 0;const It=ce.clientHeight,ft=ce.scrollTop,St=ce.scrollTop+It,Ot=We.offsetTop,lr=We.offsetHeight,xr=We.offsetTop+We.offsetHeight;Ot<ft&&ce.scrollTo(0,Ot),xr>St&&ce.scrollTo(0,Ot-It+lr),We.focus({preventScroll:!0})},[pe]),$t=(0,n.useCallback)((E,{scroll:ce}={})=>{var We;const It=N.length-1;let ft;switch(E){case"first":{ft=0;break}case"last":{ft=It;break}case"next":{ft=h(ye.current+1,0,It);break}case"previous":{ft=h(ye.current-1,0,It);break}case"selected":{ft=h((We=te.current)!==null&&We!==void 0?We:0,0,It);break}default:ft=E}ye.current=ft,Xt(N[ft]),ce&&Ft(ft)},[ye,N,Ft]),Zt=(0,n.useCallback)(({fromEvent:E})=>{Tt(!0),$t("selected",{scroll:!0}),A==null||A({fromEvent:E})},[$t,A,Tt]),Wt=(0,n.useCallback)(()=>{le.current="search",$e.current="",clearTimeout(Ee.current)},[]),Jt=(0,n.useCallback)(({focusSelect:E,fromEvent:ce})=>{var We;c==null||c({fromEvent:ce}),Tt(!1),Xt(N[0]),Wt(),ke.current=void 0,E&&((We=F.current)===null||We===void 0||We.focus())},[Wt,c,N,F,Tt]),or=(0,n.useCallback)(({fromEvent:E})=>{De?Jt({focusSelect:!1,fromEvent:E}):Zt({fromEvent:E})},[Jt,Zt,De]),Vt=(0,n.useCallback)((E,{fromEvent:ce})=>{te.current!==E&&(te.current=E,ve(N[E].value),t==null||t(N[E],{fromEvent:ce}))},[t,N,ve]),Ht=(0,n.useCallback)(({focusSelect:E,fromEvent:ce})=>{Vt(ye.current,{fromEvent:ce}),Jt({focusSelect:E,fromEvent:ce})},[Jt,Vt]),Sr=(0,n.useCallback)((E,{fromEvent:ce,select:We})=>{var It;switch(le.current==="cycleFirstLetter"&&E!==$e.current&&(le.current="search"),E===$e.current?le.current="cycleFirstLetter":$e.current+=E,le.current){case"search":{let ft=N.findIndex(St=>{var Ot;return((Ot=St.label)===null||Ot===void 0?void 0:Ot.toLocaleUpperCase().indexOf($e.current))===0});ft<0&&(ft=N.findIndex(St=>{var Ot;return((Ot=St.label)===null||Ot===void 0?void 0:Ot.toLocaleUpperCase().indexOf(E))===0}),$e.current=E),ft>=0&&(We?Vt(ft,{fromEvent:ce}):$t(ft,{scroll:!0}));break}case"cycleFirstLetter":{const ft=We?(It=te.current)!==null&&It!==void 0?It:-1:ye.current;let St=N.findIndex((Ot,lr)=>{var xr;return lr>ft&&((xr=Ot.label)===null||xr===void 0?void 0:xr.toLocaleUpperCase().indexOf(E))===0});St<0&&(St=N.findIndex(Ot=>{var lr;return((lr=Ot.label)===null||lr===void 0?void 0:lr.toLocaleUpperCase().indexOf(E))===0})),St>=0&&(We?Vt(St,{fromEvent:ce}):$t(St,{scroll:!0}));break}}clearTimeout(Ee.current),Ee.current=setTimeout(()=>{le.current==="search"&&($e.current="")},Ur)},[$t,N,Vt]),at=(0,n.useCallback)(E=>{var ce;E.button===0&&(E.preventDefault(),(ce=F.current)===null||ce===void 0||ce.focus(),or({fromEvent:E}),w==null||w(E))},[w,F,or]),Bt=(0,n.useCallback)(E=>{Ht({focusSelect:!0,fromEvent:E})},[Ht]),Gt=(0,n.useCallback)(E=>{const{altKey:ce,code:We,ctrlKey:It,metaKey:ft,shiftKey:St}=E,{ARROW_DOWN:Ot,ARROW_UP:lr,END:xr,ENTER:cn,ESC:$n,HOME:Rr,SPACE:Cr,TAB:Kr}=an,un=ce||It||ft||St;if(!(We===Kr&&(ce||It||ft)||We!==Kr&&un))switch(We){case Ot:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}$t("next",{scroll:!0});break}case lr:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}$t("previous",{scroll:!0});break}case xr:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}$t("last",{scroll:!0});break}case cn:{if(!De)return;E.preventDefault(),Ht({focusSelect:!0,fromEvent:E});break}case $n:{if(!De)return;E.preventDefault(),Jt({focusSelect:!0,fromEvent:E});break}case Rr:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}$t("first",{scroll:!0});break}case Cr:{E.preventDefault(),De?Ht({focusSelect:!0,fromEvent:E}):Zt({fromEvent:E});break}case Kr:{if(!De)return;St||E.preventDefault(),Ht({focusSelect:!St,fromEvent:E});break}default:!un&&We.match(/^Key/)&&(E.preventDefault(),E.stopPropagation(),Sr(We.replace(/^Key/,""),{select:!De,fromEvent:E}))}},[$t,Jt,De,Zt,Sr,Ht]),Or=(0,n.useCallback)(E=>{Gt(E),g==null||g(E)},[Gt,g]),yr=(0,n.useCallback)(E=>{$t(E)},[$t]),Se=(0,n.useCallback)(E=>{De||(Wt(),e==null||e(E))},[Wt,e,De]),He=(0,n.useCallback)(E=>{Wt(),p==null||p(E)},[Wt,p]),dt=(0,n.useCallback)(E=>{pe.current=E,ke.current!==void 0&&Ft(ke.current)},[Ft]),nt=(0,n.useCallback)((E,ce)=>{et.current[ce]=E,ke.current===ce&&Ft(ke.current)},[Ft]);return(0,n.useEffect)(()=>{if(!De)return()=>{};const E=ce=>{var We;const It=ce.target;!((We=ne.current)===null||We===void 0)&&We.contains(It)||(ce.preventDefault(),Jt({focusSelect:!1,fromEvent:ce}))};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[Jt,De,ne]),(0,n.useMemo)(()=>({activeOption:jt,handleActivateOptionIndex:yr,handleBlur:Se,handleButtonKeyDown:Or,handleDropdownKeyDown:Gt,handleFocus:He,handleMouseDown:at,handleOptionClick:Bt,handleSetDropdownRef:dt,handleSetOptionRef:nt,open:De,selectedOption:nr}),[jt,yr,Se,Or,He,Gt,at,Bt,dt,nt,De,nr])},xn=(0,n.forwardRef)((ve,F)=>{var ne=ve,{className:e,defaultValue:t,disabled:c,onChange:p,options:g,readOnly:w,style:A,value:T,variant:N,width:L}=ne,G=xe(ne,["className","defaultValue","disabled","onChange","options","readOnly","style","value","variant","width"]);const{isEnabled:pe,options:et,setValue:te,value:ye,DropdownButton:ke,Wrapper:le}=Zr({defaultValue:t,disabled:c,native:!0,onChange:p,options:g,readOnly:w,value:T,variant:N}),$e=(0,n.useCallback)(Ee=>{const De=et.find(Tt=>Tt.value===Ee.target.value);De&&(te(De.value),p==null||p(De,{fromEvent:Ee}))},[p,et,te]);return n.createElement(le,{className:e,style:ze(C({},A),{width:L})},n.createElement(Qr,null,n.createElement(gn,ze(C({},G),{disabled:c,onChange:pe?$e:d,ref:F,value:ye}),et.map((Ee,De)=>{var Tt;return n.createElement("option",{key:`${Ee.value}-${De}`,value:Ee.value},(Tt=Ee.label)!==null&&Tt!==void 0?Tt:Ee.value)})),ke))});xn.displayName="SelectNative";function Cn({activateOptionIndex:e,active:t,index:c,onClick:p,option:g,selected:w,setRef:A}){const T=(0,n.useCallback)(()=>{e(c)},[e,c]),N=(0,n.useCallback)(G=>{A(G,c)},[c,A]),L=bn();return n.createElement(Sn,{active:t,"aria-selected":w?"true":void 0,"data-value":g.value,id:L,onClick:p,onMouseEnter:T,ref:N,role:"option",tabIndex:0},g.label)}function Pn(Ft,Xt){var $t=Ft,{"aria-label":e,"aria-labelledby":t,className:c,defaultValue:p,disabled:g=!1,formatDisplay:w,inputProps:A,labelId:T,menuMaxHeight:N,name:L,onBlur:G,onChange:F,onClose:ve,onFocus:ne,onKeyDown:pe,onMouseDown:et,onOpen:te,open:ye,options:ke,readOnly:le,shadow:$e=!0,style:Ee,variant:De="default",value:Tt,width:nr="auto"}=$t,jt=xe($t,["aria-label","aria-labelledby","className","defaultValue","disabled","formatDisplay","inputProps","labelId","menuMaxHeight","name","onBlur","onChange","onClose","onFocus","onKeyDown","onMouseDown","onOpen","open","options","readOnly","shadow","style","variant","value","width"]);const{isEnabled:Zt,options:Wt,setValue:Jt,value:or,wrapperProps:Vt,DropdownButton:Ht,Wrapper:Sr}=Zr({className:c,defaultValue:p,disabled:g,native:!1,onChange:F,options:ke,style:Ee,readOnly:le,value:Tt,variant:De,width:nr}),at=(0,n.useRef)(null),Bt=(0,n.useRef)(null),Gt=(0,n.useRef)(null),{activeOption:Or,handleActivateOptionIndex:yr,handleBlur:Se,handleButtonKeyDown:He,handleDropdownKeyDown:dt,handleFocus:nt,handleMouseDown:E,handleOptionClick:ce,handleSetDropdownRef:We,handleSetOptionRef:It,open:ft,selectedOption:St}=yn({onBlur:G,onChange:F,onClose:ve,onFocus:ne,onKeyDown:pe,onMouseDown:et,onOpen:te,open:ye,options:Wt,value:or,selectRef:Bt,setValue:Jt,wrapperRef:Gt});(0,n.useImperativeHandle)(Xt,()=>({focus:Rr=>{var Cr;(Cr=Bt.current)===null||Cr===void 0||Cr.focus(Rr)},node:at.current,value:String(or)}),[or]);const Ot=(0,n.useMemo)(()=>St?typeof w=="function"?w(St):St.label:"",[w,St]),lr=Zt?1:void 0,xr=(0,n.useMemo)(()=>N?{overflow:"auto",maxHeight:N}:void 0,[N]),cn=bn(),$n=(0,n.useMemo)(()=>Wt.map((Rr,Cr)=>{const Kr=`${or}-${Cr}`,un=Rr===Or,Fn=Rr===St;return n.createElement(Cn,{activateOptionIndex:yr,active:un,index:Cr,key:Kr,onClick:ce,option:Rr,selected:Fn,setRef:It})}),[Or,yr,ce,It,Wt,St,or]);return n.createElement(Sr,ze(C({},Vt),{$disabled:g,ref:Gt,shadow:$e,style:ze(C({},Ee),{width:nr})}),n.createElement("input",C({name:L,ref:at,type:"hidden",value:String(or)},A)),n.createElement(Qr,C({"aria-disabled":g,"aria-expanded":ft,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:T,"aria-owns":Zt&&ft?cn:void 0,onBlur:Se,onFocus:nt,onKeyDown:He,onMouseDown:Zt?E:et,ref:Bt,role:"button",tabIndex:lr},jt),n.createElement(jr,null,Ot),Ht),Zt&&ft&&n.createElement(vr,{id:cn,onKeyDown:dt,ref:We,role:"listbox",style:xr,tabIndex:0,variant:De},$n))}const An=(0,n.forwardRef)(Pn);An.displayName="Select";const Tn=i.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,_r=(0,n.forwardRef)(function(w,g){var A=w,{children:t,noPadding:c=!1}=A,p=xe(A,["children","noPadding"]);return n.createElement(Tn,C({noPadding:c,ref:g},p),t)});_r.displayName="Toolbar";const wn=i.ZP.div`
  padding: 16px;
`,a=(0,n.forwardRef)(function(g,p){var w=g,{children:t}=w,c=xe(w,["children"]);return n.createElement(wn,C({ref:p},c),t)});a.displayName="WindowContent";const f=i.ZP.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?i.iv`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:i.iv`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${q} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,l=(0,n.forwardRef)(function(w,g){var A=w,{active:t=!0,children:c}=A,p=xe(A,["active","children"]);return n.createElement(f,C({active:t,ref:g},p),c)});l.displayName="WindowHeader";const u=i.ZP.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ae({style:"window"})}
  ${me()}
`,x=i.ZP.span`
  ${({theme:e})=>i.iv`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,P=(0,n.forwardRef)((A,w)=>{var T=A,{children:e,resizable:t=!1,resizeRef:c,shadow:p=!0}=T,g=xe(T,["children","resizable","resizeRef","shadow"]);return n.createElement(u,C({ref:w,shadow:p},g),e,t&&n.createElement(x,{"data-testid":"resizeHandle",ref:c}))});P.displayName="Window";const O=(0,i.ZP)(V)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,Q=i.ZP.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Te=i.ZP.div`
  display: flex;
  flex-wrap: wrap;
`,K=i.ZP.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,we=i.ZP.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Oe=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function it(e,t){return new Date(e,t+1,0).getDate()}function ut(e,t,c){return new Date(e,t,c).getDay()}function Re(e){const t=new Date(Date.parse(e)),c=t.getUTCDate(),p=t.getUTCMonth(),g=t.getUTCFullYear();return{day:c,month:p,year:g}}const Ve=(0,n.forwardRef)(({className:e,date:t=new Date().toISOString(),onAccept:c,onCancel:p,shadow:g=!0},w)=>{const[A,T]=(0,n.useState)(()=>Re(t)),{year:N,month:L,day:G}=A,F=(0,n.useCallback)(({value:te})=>{T(ye=>ze(C({},ye),{month:te}))},[]),ve=(0,n.useCallback)(te=>{T(ye=>ze(C({},ye),{year:te}))},[]),ne=(0,n.useCallback)(te=>{T(ye=>ze(C({},ye),{day:te}))},[]),pe=(0,n.useCallback)(()=>{const te=[A.year,A.month+1,A.day].map(ye=>String(ye).padStart(2,"0")).join("-");c==null||c(te)},[A.day,A.month,A.year,c]),et=(0,n.useMemo)(()=>{const te=Array.from({length:42}),ye=ut(N,L,1);let ke=G;const le=it(N,L);return ke=ke<le?ke:le,te.forEach(($e,Ee)=>{if(Ee>=ye&&Ee<le+ye){const De=Ee-ye+1;te[Ee]=n.createElement(K,{key:Ee,onClick:()=>{ne(De)}},n.createElement(we,{active:De===ke},De))}else te[Ee]=n.createElement(K,{key:Ee})}),te},[G,ne,L,N]);return n.createElement(P,{className:e,ref:w,shadow:g,style:{margin:20}},n.createElement(l,null,n.createElement("span",{role:"img","aria-label":"\u{1F4C6}"},"\u{1F4C6}"),"Date"),n.createElement(a,null,n.createElement(_r,{noPadding:!0,style:{justifyContent:"space-between"}},n.createElement(An,{options:Oe,value:L,onChange:F,width:128,menuMaxHeight:200}),n.createElement(mn,{value:N,onChange:ve,width:100})),n.createElement(O,null,n.createElement(Q,null,n.createElement(K,null,"S"),n.createElement(K,null,"M"),n.createElement(K,null,"T"),n.createElement(K,null,"W"),n.createElement(K,null,"T"),n.createElement(K,null,"F"),n.createElement(K,null,"S")),n.createElement(Te,null,et)),n.createElement(_r,{noPadding:!0,style:{justifyContent:"space-between"}},n.createElement(z,{fullWidth:!0,onClick:p,disabled:!p},"Cancel"),n.createElement(z,{fullWidth:!0,onClick:c?pe:void 0,disabled:!c},"OK"))))});Ve.displayName="DatePicker";const ge=e=>{switch(e){case"status":case"well":return i.iv`
        ${Ae({style:"status"})}
      `;case"window":case"outside":return i.iv`
        ${Ae({style:"window"})}
      `;case"field":return i.iv`
        ${Ae({style:"field"})}
      `;default:return i.iv`
        ${Ae()}
      `}},st=i.ZP.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>ge(e)}
  ${({variant:e})=>me(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Le=(0,n.forwardRef)((w,g)=>{var A=w,{children:e,shadow:t=!1,variant:c="window"}=A,p=xe(A,["children","shadow","variant"]);return n.createElement(st,C({ref:g,shadow:t,variant:c},p),e)});Le.displayName="Frame";const Ct=i.ZP.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&i.iv`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&oe()}
`,ht=i.ZP.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,wt=(0,n.forwardRef)((A,w)=>{var T=A,{label:e,disabled:t=!1,variant:c="default",children:p}=T,g=xe(T,["label","disabled","variant","children"]);return n.createElement(Ct,C({"aria-disabled":t,$disabled:t,variant:c,ref:w},g),e&&n.createElement(ht,{variant:c},e),p)});wt.displayName="GroupBox";const hr=i.ZP.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${J(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;hr.displayName="Handle";const Ar="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",qt=i.ZP.div`
  display: inline-block;
  height: ${({size:e})=>J(e)};
  width: ${({size:e})=>J(e)};
`,ar=i.ZP.span`
  display: block;
  background: ${Ar};
  background-size: cover;
  width: 100%;
  height: 100%;
`,mr=(0,n.forwardRef)((p,c)=>{var g=p,{size:e=30}=g,t=xe(g,["size"]);return n.createElement(qt,C({size:e,ref:c},t),n.createElement(ar,null))});mr.displayName="Hourglass";const wr=i.ZP.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ut=i.ZP.div`
  position: relative;
`,tr=i.ZP.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

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
`,ir=(0,i.ZP)(ee).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Qt=i.ZP.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Tr=(0,n.forwardRef)((g,p)=>{var w=g,{backgroundStyles:e,children:t}=w,c=xe(w,["backgroundStyles","children"]);return n.createElement(wr,C({ref:p},c),n.createElement(Ut,null,n.createElement(tr,null,n.createElement(ir,{style:e},t)),n.createElement(Qt,null)))});Tr.displayName="Monitor";const rr=i.ZP.div`
  display: inline-block;
  height: ${I.md};
  width: 100%;
`,Yt=(0,i.ZP)(ee)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,kr=i.iv`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,$r=i.ZP.div`
  position: relative;
  top: 4px;
  ${kr}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Dr=i.ZP.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${kr}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,U=i.ZP.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Z=17,j=i.ZP.span`
  display: inline-block;
  width: ${Z}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,ue=(0,n.forwardRef)((A,w)=>{var T=A,{hideValue:e=!1,shadow:t=!0,value:c,variant:p="default"}=T,g=xe(T,["hideValue","shadow","value","variant"]);const N=e?null:`${c}%`,L=(0,n.useRef)(null),[G,F]=(0,n.useState)([]),ve=(0,n.useCallback)(()=>{if(!L.current||c===void 0)return;const ne=L.current.getBoundingClientRect().width,pe=Math.round(c/100*ne/Z);F(Array.from({length:pe}))},[c]);return(0,n.useEffect)(()=>(ve(),window.addEventListener("resize",ve),()=>window.removeEventListener("resize",ve)),[ve]),n.createElement(rr,C({"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:w,role:"progressbar",variant:p},g),n.createElement(Yt,{variant:p,shadow:t},p==="default"?n.createElement(n.Fragment,null,n.createElement($r,{"data-testid":"defaultProgress1"},N),n.createElement(Dr,{"data-testid":"defaultProgress2",value:c},N)):n.createElement(U,{ref:L,"data-testid":"tileProgress"},G.map((ne,pe)=>n.createElement(j,{key:pe})))))});ue.displayName="ProgressBar";const b=i.iv`
  width: ${qe}px;
  height: ${qe}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ue=(0,i.ZP)(ee)`
  ${b}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

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
`,R=i.ZP.div`
  ${Ge()}
  ${b}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,gt=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,_e={flat:R,default:Ue},Je=(0,n.forwardRef)((L,N)=>{var G=L,{checked:e,className:t="",disabled:c=!1,label:p="",onChange:g,style:w={},variant:A="default"}=G,T=xe(G,["checked","className","disabled","label","onChange","style","variant"]);const F=_e[A];return n.createElement(be,{$disabled:c,className:t,style:w},n.createElement(F,{$disabled:c,role:"presentation"},e&&n.createElement(gt,{$disabled:c,variant:A})),n.createElement(rt,C({disabled:c,onChange:c?void 0:g,readOnly:c,type:"radio",checked:e,ref:N},T)),p&&n.createElement(ct,null,p))});Je.displayName="Radio";const de=typeof window!="undefined"?n.useLayoutEffect:n.useEffect;function mt(e){const t=n.useRef(e);return de(()=>{t.current=e}),n.useCallback((...c)=>(0,t.current)(...c),[])}function Mt(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Be(e,t){return(0,n.useMemo)(()=>e==null&&t==null?null:c=>{Mt(e,c),Mt(t,c)},[e,t])}var Lt=y(73935);let Ne=!0,Pt=!1,Er;const Dt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Hr(e){if("type"in e){const{type:t,tagName:c}=e;if(c==="INPUT"&&Dt[t]&&!e.readOnly||c==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Ir(e){e.metaKey||e.altKey||e.ctrlKey||(Ne=!0)}function _t(){Ne=!1}function ie(){this.visibilityState==="hidden"&&Pt&&(Ne=!0)}function kt(e){e.addEventListener("keydown",Ir,!0),e.addEventListener("mousedown",_t,!0),e.addEventListener("pointerdown",_t,!0),e.addEventListener("touchstart",_t,!0),e.addEventListener("visibilitychange",ie,!0)}function Wr(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(c){}return Ne||Hr(t)}function Gr(){Pt=!0,window.clearTimeout(Er),Er=window.setTimeout(()=>{Pt=!1},100)}function br(){const e=(0,n.useCallback)(t=>{const c=(0,Lt.findDOMNode)(t);c!=null&&kt(c.ownerDocument)},[]);return{isFocusVisible:Wr,onBlurVisible:Gr,ref:e}}function jn(e,t,c){return(c-t)*e+t}function sn(e,t){if(t!==void 0&&"changedTouches"in e){for(let c=0;c<e.changedTouches.length;c+=1){const p=e.changedTouches[c];if(p.identifier===t)return{x:p.clientX,y:p.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function ln(e){return e&&e.ownerDocument||document}function Vn(e,t){var c;const{index:p}=(c=e.reduce((g,w,A)=>{const T=Math.abs(t-w);return g===null||T<g.distance||T===g.distance?{distance:T,index:A}:g},null))!==null&&c!==void 0?c:{};return p!=null?p:-1}const Un=i.ZP.div`
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
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?i.iv`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `:i.iv`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Dn=()=>i.iv`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?i.iv`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:i.iv`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,_n=(0,i.ZP)(ee)`
  ${Dn()}
`,Wn=(0,i.ZP)(ee)`
  ${Dn()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,Gn=i.ZP.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?i.iv`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:i.iv`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?i.iv`
          ${Ge()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:i.iv`
          ${me()}
          ${Ae()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&lt({mainColor:t.material,secondaryColor:t.borderLightest})}
`,zr=6,Kn=i.ZP.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?i.iv`
          right: ${-zr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${zr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:i.iv`
          bottom: ${-zr}px;
          height: ${zr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&i.iv`
      ${oe()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,qn=i.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?i.iv`
          transform: translate(${zr+2}px, ${zr+1}px);
        `:i.iv`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Yn=(0,n.forwardRef)((te,et)=>{var ye=te,{defaultValue:e,disabled:t=!1,marks:c=!1,max:p=100,min:g=0,name:w,onChange:A,onChangeCommitted:T,onMouseDown:N,orientation:L="horizontal",size:G="100%",step:F=1,value:ve,variant:ne="default"}=ye,pe=xe(ye,["defaultValue","disabled","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","size","step","value","variant"]);const ke=ne==="flat"?Wn:_n,le=L==="vertical",[$e=g,Ee]=fe({defaultValue:e,onChange:A!=null?A:T,value:ve}),{isFocusVisible:De,onBlurVisible:Tt,ref:nr}=br(),[jt,Xt]=(0,n.useState)(!1),Ft=(0,n.useRef)(),$t=(0,n.useRef)(null),Zt=Be(nr,Ft),Wt=Be(et,Zt),Jt=mt(Se=>{De(Se)&&Xt(!0)}),or=mt(()=>{jt!==!1&&(Xt(!1),Tt())}),Vt=(0,n.useRef)(),Ht=(0,n.useMemo)(()=>c===!0&&Number.isFinite(F)?[...Array(Math.round((p-g)/F)+1)].map((Se,He)=>({label:void 0,value:g+F*He})):Array.isArray(c)?c:[],[c,p,g,F]),Sr=mt(Se=>{const He=(p-g)/10,dt=Ht.map(ce=>ce.value),nt=dt.indexOf($e);let E=0;switch(Se.key){case"Home":E=g;break;case"End":E=p;break;case"PageUp":F&&(E=$e+He);break;case"PageDown":F&&(E=$e-He);break;case"ArrowRight":case"ArrowUp":F?E=$e+F:E=dt[nt+1]||dt[dt.length-1];break;case"ArrowLeft":case"ArrowDown":F?E=$e-F:E=dt[nt-1]||dt[0];break;default:return}Se.preventDefault(),F&&(E=_(E,F,g)),E=h(E,g,p),Ee(E),Xt(!0),A==null||A(E),T==null||T(E)}),at=(0,n.useCallback)(Se=>{if(!Ft.current)return 0;const He=Ft.current.getBoundingClientRect();let dt;le?dt=(He.bottom-Se.y)/He.height:dt=(Se.x-He.left)/He.width;let nt;if(nt=jn(dt,g,p),F)nt=_(nt,F,g);else{const E=Ht.map(We=>We.value),ce=Vn(E,nt);nt=E[ce]}return nt=h(nt,g,p),nt},[Ht,p,g,F,le]),Bt=mt(Se=>{var He;const dt=sn(Se,Vt.current);if(!dt)return;const nt=at(dt);(He=$t.current)===null||He===void 0||He.focus(),Ee(nt),Xt(!0),A==null||A(nt)}),Gt=mt(Se=>{const He=sn(Se,Vt.current);if(!He)return;const dt=at(He);T==null||T(dt),Vt.current=void 0;const nt=ln(Ft.current);nt.removeEventListener("mousemove",Bt),nt.removeEventListener("mouseup",Gt),nt.removeEventListener("touchmove",Bt),nt.removeEventListener("touchend",Gt)}),Or=mt(Se=>{var He;N==null||N(Se),Se.preventDefault(),(He=$t.current)===null||He===void 0||He.focus(),Xt(!0);const dt=sn(Se,Vt.current);if(dt){const E=at(dt);Ee(E),A==null||A(E)}const nt=ln(Ft.current);nt.addEventListener("mousemove",Bt),nt.addEventListener("mouseup",Gt)}),yr=mt(Se=>{var He;Se.preventDefault();const dt=Se.changedTouches[0];dt!=null&&(Vt.current=dt.identifier),(He=$t.current)===null||He===void 0||He.focus(),Xt(!0);const nt=sn(Se,Vt.current);if(nt){const ce=at(nt);Ee(ce),A==null||A(ce)}const E=ln(Ft.current);E.addEventListener("touchmove",Bt),E.addEventListener("touchend",Gt)});return(0,n.useEffect)(()=>{const{current:Se}=Ft;Se==null||Se.addEventListener("touchstart",yr);const He=ln(Se);return()=>{Se==null||Se.removeEventListener("touchstart",yr),He.removeEventListener("mousemove",Bt),He.removeEventListener("mouseup",Gt),He.removeEventListener("touchmove",Bt),He.removeEventListener("touchend",Gt)}},[Gt,Bt,yr]),n.createElement(Un,C({$disabled:t,hasMarks:!!Ht.length,isFocused:jt,onMouseDown:Or,orientation:L,ref:Wt,size:J(G)},pe),n.createElement("input",{disabled:t,name:w,type:"hidden",value:$e!=null?$e:0}),Ht&&Ht.map(Se=>n.createElement(Kn,{$disabled:t,"data-testid":"tick",key:Se.value/(p-g)*100,orientation:L,style:{[le?"bottom":"left"]:`${(Se.value-g)/(p-g)*100}%`}},Se.label&&n.createElement(qn,{"aria-hidden":!0,"data-testid":"mark",orientation:L},Se.label))),n.createElement(ke,{orientation:L,variant:ne}),n.createElement(Gn,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":L,"aria-valuemax":p,"aria-valuemin":g,"aria-valuenow":$e,onBlur:or,onFocus:Jt,onKeyDown:Sr,orientation:L,ref:$t,role:"slider",style:{[le?"bottom":"left"]:`${(le?-100:0)+100*($e-g)/(p-g)}%`},tabIndex:t?void 0:0,variant:ne}))});Yn.displayName="Slider";const Xn=i.ZP.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Me};
  overflow-y: auto;
`,Jn=(0,n.forwardRef)(function(g,p){var w=g,{children:t}=w,c=xe(w,["children"]);return n.createElement(Xn,C({ref:p},c),t)});Jn.displayName="TableBody";const eo=i.ZP.td`
  padding: 0 8px;
`,to=(0,n.forwardRef)(function(g,p){var w=g,{children:t}=w,c=xe(w,["children"]);return n.createElement(eo,C({ref:p},c),t)});to.displayName="TableDataCell";const ro=i.ZP.thead`
  display: table-header-group;
`,no=(0,n.forwardRef)(function(g,p){var w=g,{children:t}=w,c=xe(w,["children"]);return n.createElement(ro,C({ref:p},c),t)});no.displayName="TableHead";const oo=i.ZP.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
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
    ${Ae()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&i.iv`
      &:active {
        &:before {
          ${Ae({invert:!0,style:"window"})}
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

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&oe()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&oe()}
  }
`,ao=(0,n.forwardRef)(function(N,T){var L=N,{disabled:t=!1,children:c,onClick:p,onTouchStart:g=d,sort:w}=L,A=xe(L,["disabled","children","onClick","onTouchStart","sort"]);const G=w==="asc"?"ascending":w==="desc"?"descending":void 0;return n.createElement(oo,C({$disabled:t,"aria-disabled":t,"aria-sort":G,onClick:t?void 0:p,onTouchStart:t?void 0:g,ref:T},A),n.createElement("div",null,c))});ao.displayName="TableHeadCell";const io=i.ZP.tr`
  color: inherit;
  display: table-row;
  height: calc(${I.md} - 2px);
  line-height: calc(${I.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,so=(0,n.forwardRef)(function(g,p){var w=g,{children:t}=w,c=xe(w,["children"]);return n.createElement(io,C({ref:p},c),t)});so.displayName="TableRow";const lo=i.ZP.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,co=(0,i.ZP)(ee)`
  &:before {
    box-shadow: none;
  }
`,uo=(0,n.forwardRef)((p,c)=>{var g=p,{children:e}=g,t=xe(g,["children"]);return n.createElement(co,null,n.createElement(lo,C({ref:c},t),e))});uo.displayName="Table";const fo=i.ZP.button`
  ${me()}
  ${Ae()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${I.md};
  line-height: ${I.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
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
    ${tt}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${I.md} + 4px);
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
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,po=(0,n.forwardRef)((A,w)=>{var T=A,{value:e,onClick:t,selected:c=!1,children:p}=T,g=xe(T,["value","onClick","selected","children"]);return n.createElement(fo,C({"aria-selected":c,selected:c,onClick:N=>t==null?void 0:t(e,N),ref:w,role:"tab"},g),p)});po.displayName="Tab";const ho=i.ZP.div`
  ${me()}
  ${Ae()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,mo=(0,n.forwardRef)((p,c)=>{var g=p,{children:e}=g,t=xe(g,["children"]);return n.createElement(ho,C({ref:c},t),e)});mo.displayName="TabBody";const bo=i.ZP.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,go=i.ZP.div.attrs(()=>({"data-testid":"tab-row"}))`
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
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function vo(e,t){const c=[];for(let p=t;p>0;p-=1)c.push(e.splice(0,Math.ceil(e.length/p)));return c}const yo=(0,n.forwardRef)((A,w)=>{var T=A,{value:e,onChange:t=d,children:c,rows:p=1}=T,g=xe(T,["value","onChange","children","rows"]);const N=(0,n.useMemo)(()=>{var L;const G=(L=n.Children.map(c,ne=>{if(!n.isValidElement(ne))return null;const pe={selected:ne.props.value===e,onClick:t};return n.cloneElement(ne,pe)}))!==null&&L!==void 0?L:[],F=vo(G,p).map((ne,pe)=>({key:pe,tabs:ne})),ve=F.findIndex(ne=>ne.tabs.some(pe=>pe.props.selected));return F.push(F.splice(ve,1)[0]),F},[c,t,p,e]);return n.createElement(bo,ze(C({},g),{isMultiRow:p>1,role:"tablist",ref:w}),N.map(L=>n.createElement(go,{key:L.key},L.tabs)))});yo.displayName="Tabs";const xo=["blur","focus"],Ao=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function In(e){return"nativeEvent"in e&&xo.includes(e.type)}function On(e){return"nativeEvent"in e&&Ao.includes(e.type)}const wo={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},ko=i.ZP.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${re};
  text-align: center;
  font-size: 1rem;
  ${e=>wo[e.position]}
`,$o=i.ZP.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Eo=(0,n.forwardRef)((ye,te)=>{var ke=ye,{className:e,children:t,disableFocusListener:c=!1,disableMouseListener:p=!1,enterDelay:g=1e3,leaveDelay:w=0,onBlur:A,onClose:T,onFocus:N,onMouseEnter:L,onMouseLeave:G,onOpen:F,style:ve,text:ne,position:pe="top"}=ke,et=xe(ke,["className","children","disableFocusListener","disableMouseListener","enterDelay","leaveDelay","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","onOpen","style","text","position"]);const[le,$e]=(0,n.useState)(!1),[Ee,De]=(0,n.useState)(),[Tt,nr]=(0,n.useState)(),jt=!c,Xt=!p,Ft=at=>{window.clearTimeout(Ee),window.clearTimeout(Tt);const Bt=window.setTimeout(()=>{$e(!0),F==null||F(at)},g);De(Bt)},$t=at=>{at.persist(),In(at)?N==null||N(at):On(at)&&(L==null||L(at)),Ft(at)},Zt=at=>{window.clearTimeout(Ee),window.clearTimeout(Tt);const Bt=window.setTimeout(()=>{$e(!1),T==null||T(at)},w);nr(Bt)},Wt=at=>{at.persist(),In(at)?A==null||A(at):On(at)&&(G==null||G(at)),Zt(at)},Jt=jt?Wt:void 0,or=jt?$t:void 0,Vt=Xt?$t:void 0,Ht=Xt?Wt:void 0,Sr=jt?0:void 0;return n.createElement($o,{"data-testid":"tooltip-wrapper",onBlur:Jt,onFocus:or,onMouseEnter:Vt,onMouseLeave:Ht,tabIndex:Sr},n.createElement(ko,C({className:e,"data-testid":"tooltip",position:pe,ref:te,show:le,style:ve},et),ne),t)});Eo.displayName="Tooltip";const kn=(0,i.ZP)(ct)`
  white-space: nowrap;
`,Rn=i.iv`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":i.iv`
          cursor: pointer;

          :focus {
            ${kn} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,So=i.ZP.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&i.iv`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
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
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,Co=i.ZP.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?i.iv`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:i.iv`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
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
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,Po=i.ZP.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,To=i.ZP.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Rn};

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
`,Ln=(0,i.ZP)(be)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Rn};
`,Do=i.ZP.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Bn(e,t){return e.includes(t)?e.filter(c=>c!==t):[...e,t]}function Nn(e){e.preventDefault()}function Mn({className:e,disabled:t,expanded:c,innerRef:p,level:g,select:w,selected:A,style:T,tree:N=[]}){const L=g===0,G=(0,n.useCallback)(F=>{var ve,ne;const pe=!!(F.items&&F.items.length>0),et=c.includes(F.id),te=(ve=t||F.disabled)!==null&&ve!==void 0?ve:!1,ye=te?Nn:Ee=>w(Ee,F),ke=te?Nn:Ee=>w(Ee,F),le=A===F.id,$e=n.createElement(Do,{"aria-hidden":!0},F.icon);return n.createElement(Co,{key:F.label,isRootLevel:L,role:"treeitem","aria-expanded":et,"aria-selected":le,hasItems:pe},pe?n.createElement(Po,{open:et},n.createElement(To,{onClick:ye,$disabled:te},n.createElement(Ln,{$disabled:te},$e,n.createElement(kn,null,F.label))),et&&n.createElement(Mn,{className:e,disabled:te,expanded:c,level:g+1,select:w,selected:A,style:T,tree:(ne=F.items)!==null&&ne!==void 0?ne:[]})):n.createElement(Ln,{as:"button",$disabled:te,onClick:ke},$e,n.createElement(kn,null,F.label)))},[e,t,c,L,g,w,A,T]);return n.createElement(So,{className:L?e:void 0,style:L?T:void 0,ref:L?p:void 0,role:L?"tree":"group",isRootLevel:L},N.map(G))}function Io({className:e,defaultExpanded:t=[],defaultSelected:c,disabled:p=!1,expanded:g,onNodeSelect:w,onNodeToggle:A,selected:T,style:N,tree:L=[]},G){const[F,ve]=fe({defaultValue:t,onChange:A,onChangePropName:"onNodeToggle",value:g,valuePropName:"expanded"}),[ne,pe]=fe({defaultValue:c,onChange:w,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),et=(0,n.useCallback)((ke,le)=>{if(A){const $e=Bn(F,le);A(ke,$e)}ve($e=>Bn($e,le))},[F,A,ve]),te=(0,n.useCallback)((ke,le)=>{pe(le),w&&w(ke,le)},[w,pe]),ye=(0,n.useCallback)((ke,le)=>{ke.preventDefault(),te(ke,le.id),le.items&&le.items.length&&et(ke,le.id)},[te,et]);return n.createElement(Mn,{className:e,disabled:p,expanded:F,level:0,innerRef:G,select:ye,selected:ne,style:N,tree:L})}const Oo=(0,n.forwardRef)(Io);Oo.displayName="TreeView";const No=null,Mo=null,Fo=null,Zo=null,Ho=null,zo=null,Qo=null,jo=null,Vo=null,Uo=null,_o=null,Wo=null,Go=null}}]);
}());