!(function(){var Ro=Object.defineProperty,Lo=Object.defineProperties;var Bo=Object.getOwnPropertyDescriptors;var dn=Object.getOwnPropertySymbols;var Zn=Object.prototype.hasOwnProperty,zn=Object.prototype.propertyIsEnumerable;var Hn=(ae,N,y)=>N in ae?Ro(ae,N,{enumerable:!0,configurable:!0,writable:!0,value:y}):ae[N]=y,C=(ae,N)=>{for(var y in N||(N={}))Zn.call(N,y)&&Hn(ae,y,N[y]);if(dn)for(var y of dn(N))zn.call(N,y)&&Hn(ae,y,N[y]);return ae},He=(ae,N)=>Lo(ae,Bo(N));var ve=(ae,N)=>{var y={};for(var x in ae)Zn.call(ae,x)&&N.indexOf(x)<0&&(y[x]=ae[x]);if(ae!=null&&dn)for(var x of dn(ae))N.indexOf(x)<0&&zn.call(ae,x)&&(y[x]=ae[x]);return y};var Qn=(ae,N,y)=>new Promise((x,i)=>{var de=ee=>{try{Re(y.next(ee))}catch(pe){i(pe)}},ke=ee=>{try{Re(y.throw(ee))}catch(pe){i(pe)}},Re=ee=>ee.done?x(ee.value):Promise.resolve(ee.value).then(de,ke);Re((y=y.apply(ae,N)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[627],{15381:function(ae,N,y){"use strict";y.d(N,{Z:function(){return pe}});var x=y(1413),i=y(67294),de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4a66.1 66.1 0 00-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81zm627.2 160.4H496.8l9.6 198.4c.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7a44.28 44.28 0 01-42.2-32.3L329 459.2V172h415.4a56.85 56.85 0 0133.6 51.8c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0119.6 43c0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19a56.76 56.76 0 0119.6 43c0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19a56.76 56.76 0 0119.6 43c0 19.1-11 37.5-28.8 48.4z"}}]},name:"dislike",theme:"outlined"},ke=de,Re=y(84089),ee=function(Ve,Le){return i.createElement(Re.Z,(0,x.Z)((0,x.Z)({},Ve),{},{ref:Le,icon:ke}))};ee.displayName="DislikeOutlined";var pe=i.forwardRef(ee)},65429:function(ae,N,y){"use strict";y.d(N,{Z:function(){return pe}});var x=y(1413),i=y(67294),de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]},name:"like",theme:"outlined"},ke=de,Re=y(84089),ee=function(Ve,Le){return i.createElement(Re.Z,(0,x.Z)((0,x.Z)({},Ve),{},{ref:Le,icon:ke}))};ee.displayName="LikeOutlined";var pe=i.forwardRef(ee)},40581:function(){"use strict"},78957:function(ae,N,y){"use strict";y.d(N,{Z:function(){return D}});var x=y(67294),i=y(94184),de=y.n(i),ke=y(50344);function Re(n){return["small","middle","large"].includes(n)}function ee(n){return n?typeof n=="number"&&!Number.isNaN(n):!1}var pe=y(53124),ft=y(4173);const Ve=x.createContext({latestIndex:0}),Le=Ve.Provider;var ye=n=>{let{className:Ae,index:pt,children:h,split:o,style:d}=n;const{latestIndex:g}=x.useContext(Ve);return h==null?null:x.createElement(x.Fragment,null,x.createElement("div",{className:Ae,style:d},h),pt<g&&o&&x.createElement("span",{className:`${Ae}-split`},o))},Xe=y(51916),Qe=function(n,Ae){var pt={};for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&Ae.indexOf(h)<0&&(pt[h]=n[h]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,h=Object.getOwnPropertySymbols(n);o<h.length;o++)Ae.indexOf(h[o])<0&&Object.prototype.propertyIsEnumerable.call(n,h[o])&&(pt[h[o]]=n[h[o]]);return pt};const xe=x.forwardRef((n,Ae)=>{var pt,h;const{getPrefixCls:o,space:d,direction:g}=x.useContext(pe.E_),{size:F=(d==null?void 0:d.size)||"small",align:q,className:te,rootClassName:Ze,children:$,direction:S="horizontal",prefixCls:L,split:K,style:G,wrap:z=!1,classNames:le,styles:Ie}=n,tt=Qe(n,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[nt,Ge]=Array.isArray(F)?F:[F,F],rt=Re(Ge),we=Re(nt),ht=ee(Ge),J=ee(nt),re=(0,ke.Z)($,{keepEmpty:!0}),V=q===void 0&&S==="horizontal"?"center":q,he=o("space",L),[ot,qe]=(0,Xe.Z)(he),er=de()(he,d==null?void 0:d.className,qe,`${he}-${S}`,{[`${he}-rtl`]:g==="rtl",[`${he}-align-${V}`]:V,[`${he}-gap-row-${Ge}`]:rt,[`${he}-gap-col-${nt}`]:we},te,Ze),Je=de()(`${he}-item`,(pt=le==null?void 0:le.item)!==null&&pt!==void 0?pt:(h=d==null?void 0:d.classNames)===null||h===void 0?void 0:h.item);let Rt=0;const Mt=re.map((Qt,ur)=>{var gr,ar;Qt!=null&&(Rt=ur);const Ar=Qt&&Qt.key||`${Je}-${ur}`;return x.createElement(ye,{className:Je,key:Ar,index:ur,split:K,style:(gr=Ie==null?void 0:Ie.item)!==null&&gr!==void 0?gr:(ar=d==null?void 0:d.styles)===null||ar===void 0?void 0:ar.item},Qt)}),Tt=x.useMemo(()=>({latestIndex:Rt}),[Rt]);if(re.length===0)return null;const at={};return z&&(at.flexWrap="wrap"),!we&&J&&(at.columnGap=nt),!rt&&ht&&(at.rowGap=Ge),ot(x.createElement("div",Object.assign({ref:Ae,className:er,style:Object.assign(Object.assign(Object.assign({},at),d==null?void 0:d.style),G)},tt),x.createElement(Le,{value:Tt},Mt)))});xe.Compact=ft.ZP;var D=xe},8679:function(ae,N,y){"use strict";var x=y(21296),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},de={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ke={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Re={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ee={};ee[x.ForwardRef]=ke,ee[x.Memo]=Re;function pe(kt){return x.isMemo(kt)?Re:ee[kt.$$typeof]||i}var ft=Object.defineProperty,Ve=Object.getOwnPropertyNames,Le=Object.getOwnPropertySymbols,Et=Object.getOwnPropertyDescriptor,ye=Object.getPrototypeOf,Xe=Object.prototype;function Qe(kt,xe,D){if(typeof xe!="string"){if(Xe){var n=ye(xe);n&&n!==Xe&&Qe(kt,n,D)}var Ae=Ve(xe);Le&&(Ae=Ae.concat(Le(xe)));for(var pt=pe(kt),h=pe(xe),o=0;o<Ae.length;++o){var d=Ae[o];if(!de[d]&&!(D&&D[d])&&!(h&&h[d])&&!(pt&&pt[d])){var g=Et(xe,d);try{ft(kt,d,g)}catch(F){}}}}return kt}ae.exports=Qe},96103:function(ae,N){"use strict";var y=typeof Symbol=="function"&&Symbol.for,x=y?Symbol.for("react.element"):60103,i=y?Symbol.for("react.portal"):60106,de=y?Symbol.for("react.fragment"):60107,ke=y?Symbol.for("react.strict_mode"):60108,Re=y?Symbol.for("react.profiler"):60114,ee=y?Symbol.for("react.provider"):60109,pe=y?Symbol.for("react.context"):60110,ft=y?Symbol.for("react.async_mode"):60111,Ve=y?Symbol.for("react.concurrent_mode"):60111,Le=y?Symbol.for("react.forward_ref"):60112,Et=y?Symbol.for("react.suspense"):60113,ye=y?Symbol.for("react.suspense_list"):60120,Xe=y?Symbol.for("react.memo"):60115,Qe=y?Symbol.for("react.lazy"):60116,kt=y?Symbol.for("react.block"):60121,xe=y?Symbol.for("react.fundamental"):60117,D=y?Symbol.for("react.responder"):60118,n=y?Symbol.for("react.scope"):60119;function Ae(h){if(typeof h=="object"&&h!==null){var o=h.$$typeof;switch(o){case x:switch(h=h.type,h){case ft:case Ve:case de:case Re:case ke:case Et:return h;default:switch(h=h&&h.$$typeof,h){case pe:case Le:case Qe:case Xe:case ee:return h;default:return o}}case i:return o}}}function pt(h){return Ae(h)===Ve}N.AsyncMode=ft,N.ConcurrentMode=Ve,N.ContextConsumer=pe,N.ContextProvider=ee,N.Element=x,N.ForwardRef=Le,N.Fragment=de,N.Lazy=Qe,N.Memo=Xe,N.Portal=i,N.Profiler=Re,N.StrictMode=ke,N.Suspense=Et,N.isAsyncMode=function(h){return pt(h)||Ae(h)===ft},N.isConcurrentMode=pt,N.isContextConsumer=function(h){return Ae(h)===pe},N.isContextProvider=function(h){return Ae(h)===ee},N.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===x},N.isForwardRef=function(h){return Ae(h)===Le},N.isFragment=function(h){return Ae(h)===de},N.isLazy=function(h){return Ae(h)===Qe},N.isMemo=function(h){return Ae(h)===Xe},N.isPortal=function(h){return Ae(h)===i},N.isProfiler=function(h){return Ae(h)===Re},N.isStrictMode=function(h){return Ae(h)===ke},N.isSuspense=function(h){return Ae(h)===Et},N.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===de||h===Ve||h===Re||h===ke||h===Et||h===ye||typeof h=="object"&&h!==null&&(h.$$typeof===Qe||h.$$typeof===Xe||h.$$typeof===ee||h.$$typeof===pe||h.$$typeof===Le||h.$$typeof===xe||h.$$typeof===D||h.$$typeof===n||h.$$typeof===kt)},N.typeOf=Ae},21296:function(ae,N,y){"use strict";ae.exports=y(96103)},69921:function(ae,N){"use strict";var y;var x=Symbol.for("react.element"),i=Symbol.for("react.portal"),de=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),Re=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),pe=Symbol.for("react.context"),ft=Symbol.for("react.server_context"),Ve=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),Et=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Qe=Symbol.for("react.offscreen"),kt;kt=Symbol.for("react.module.reference");function xe(D){if(typeof D=="object"&&D!==null){var n=D.$$typeof;switch(n){case x:switch(D=D.type,D){case de:case Re:case ke:case Le:case Et:return D;default:switch(D=D&&D.$$typeof,D){case ft:case pe:case Ve:case Xe:case ye:case ee:return D;default:return n}}case i:return n}}}y=pe,y=ee,y=x,y=Ve,y=de,y=Xe,y=ye,y=i,y=Re,y=ke,y=Le,y=Et,y=function(){return!1},y=function(){return!1},y=function(D){return xe(D)===pe},y=function(D){return xe(D)===ee},y=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===x},y=function(D){return xe(D)===Ve},y=function(D){return xe(D)===de},y=function(D){return xe(D)===Xe},y=function(D){return xe(D)===ye},y=function(D){return xe(D)===i},y=function(D){return xe(D)===Re},y=function(D){return xe(D)===ke},y=function(D){return xe(D)===Le},y=function(D){return xe(D)===Et},N.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===de||D===Re||D===ke||D===Le||D===Et||D===Qe||typeof D=="object"&&D!==null&&(D.$$typeof===Xe||D.$$typeof===ye||D.$$typeof===ee||D.$$typeof===pe||D.$$typeof===Ve||D.$$typeof===kt||D.getModuleId!==void 0)},N.typeOf=xe},59864:function(ae,N,y){"use strict";ae.exports=y(69921)},25226:function(ae){"use strict";var N={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};ae.exports=N},94589:function(ae,N,y){"use strict";y.d(N,{f6:function(){return vn},vJ:function(){return xn},iv:function(){return Tr},ZP:function(){return wn}});var x=y(59864),i=y(67294),de=y(96774),ke=y.n(de);function Re(a){function f(U,Z,j,ce,b){for(var Ue=0,O=0,vt=0,_e=0,Ke,ue,bt=0,Ft=0,Me,Bt=Me=Ke=0,Fe=0,Ct=0,Sr=0,Dt=0,Zr=j.length,Or=Zr-1,Wt,oe="",At="",Wr="",Gr="",br;Fe<Zr;){if(ue=j.charCodeAt(Fe),Fe===Or&&O+_e+vt+Ue!==0&&(O!==0&&(ue=O===47?10:47),_e=vt=Ue=0,Zr++,Or++),O+_e+vt+Ue===0){if(Fe===Or&&(0<Ct&&(oe=oe.replace(st,"")),0<oe.trim().length)){switch(ue){case 32:case 9:case 59:case 13:case 10:break;default:oe+=j.charAt(Fe)}ue=59}switch(ue){case 123:for(oe=oe.trim(),Ke=oe.charCodeAt(0),Me=1,Dt=++Fe;Fe<Zr;){switch(ue=j.charCodeAt(Fe)){case 123:Me++;break;case 125:Me--;break;case 47:switch(ue=j.charCodeAt(Fe+1)){case 42:case 47:e:{for(Bt=Fe+1;Bt<Or;++Bt)switch(j.charCodeAt(Bt)){case 47:if(ue===42&&j.charCodeAt(Bt-1)===42&&Fe+2!==Bt){Fe=Bt+1;break e}break;case 10:if(ue===47){Fe=Bt+1;break e}}Fe=Bt}}break;case 91:ue++;case 40:ue++;case 34:case 39:for(;Fe++<Or&&j.charCodeAt(Fe)!==ue;);}if(Me===0)break;Fe++}switch(Me=j.substring(Dt,Fe),Ke===0&&(Ke=(oe=oe.replace(Oe,"").trim()).charCodeAt(0)),Ke){case 64:switch(0<Ct&&(oe=oe.replace(st,"")),ue=oe.charCodeAt(1),ue){case 100:case 109:case 115:case 45:Ct=Z;break;default:Ct=Dr}if(Me=f(Z,Ct,Me,ue,b+1),Dt=Me.length,0<Yt&&(Ct=l(Dr,oe,Sr),br=Q(3,Me,Ct,Z,tr,_t,Dt,ue,b,ce),oe=Ct.join(""),br!==void 0&&(Dt=(Me=br.trim()).length)===0&&(ue=0,Me="")),0<Dt)switch(ue){case 115:oe=oe.replace(hr,I);case 100:case 109:case 45:Me=oe+"{"+Me+"}";break;case 107:oe=oe.replace(Ne,"$1 $2"),Me=oe+"{"+Me+"}",Me=Vt===1||Vt===2&&P("@"+Me,3)?"@-webkit-"+Me+"@"+Me:"@"+Me;break;default:Me=oe+Me,ce===112&&(Me=(At+=Me,""))}else Me="";break;default:Me=f(Z,l(Z,oe,Sr),Me,ce,b+1)}Wr+=Me,Me=Sr=Ct=Bt=Ke=0,oe="",ue=j.charCodeAt(++Fe);break;case 125:case 59:if(oe=(0<Ct?oe.replace(st,""):oe).trim(),1<(Dt=oe.length))switch(Bt===0&&(Ke=oe.charCodeAt(0),Ke===45||96<Ke&&123>Ke)&&(Dt=(oe=oe.replace(" ",":")).length),0<Yt&&(br=Q(1,oe,Z,U,tr,_t,At.length,ce,b,ce))!==void 0&&(Dt=(oe=br.trim()).length)===0&&(oe="\0\0"),Ke=oe.charCodeAt(0),ue=oe.charCodeAt(1),Ke){case 0:break;case 64:if(ue===105||ue===99){Gr+=oe+j.charAt(Fe);break}default:oe.charCodeAt(Dt-1)!==58&&(At+=A(oe,Ke,ue,oe.charCodeAt(2)))}Sr=Ct=Bt=Ke=0,oe="",ue=j.charCodeAt(++Fe)}}switch(ue){case 13:case 10:O===47?O=0:1+Ke===0&&ce!==107&&0<oe.length&&(Ct=1,oe+="\0"),0<Yt*Er&&Q(0,oe,Z,U,tr,_t,At.length,ce,b,ce),_t=1,tr++;break;case 59:case 125:if(O+_e+vt+Ue===0){_t++;break}default:switch(_t++,Wt=j.charAt(Fe),ue){case 9:case 32:if(_e+Ue+O===0)switch(bt){case 44:case 58:case 9:case 32:Wt="";break;default:ue!==32&&(Wt=" ")}break;case 0:Wt="\\0";break;case 12:Wt="\\f";break;case 11:Wt="\\v";break;case 38:_e+O+Ue===0&&(Ct=Sr=1,Wt="\f"+Wt);break;case 108:if(_e+O+Ue+sr===0&&0<Bt)switch(Fe-Bt){case 2:bt===112&&j.charCodeAt(Fe-3)===58&&(sr=bt);case 8:Ft===111&&(sr=Ft)}break;case 58:_e+O+Ue===0&&(Bt=Fe);break;case 44:O+vt+_e+Ue===0&&(Ct=1,Wt+="\r");break;case 34:case 39:O===0&&(_e=_e===ue?0:_e===0?ue:_e);break;case 91:_e+O+vt===0&&Ue++;break;case 93:_e+O+vt===0&&Ue--;break;case 41:_e+O+Ue===0&&vt--;break;case 40:if(_e+O+Ue===0){if(Ke===0)switch(2*bt+3*Ft){case 533:break;default:Ke=1}vt++}break;case 64:O+vt+_e+Ue+Bt+Me===0&&(Me=1);break;case 42:case 47:if(!(0<_e+Ue+vt))switch(O){case 0:switch(2*ue+3*j.charCodeAt(Fe+1)){case 235:O=47;break;case 220:Dt=Fe,O=42}break;case 42:ue===47&&bt===42&&Dt+2!==Fe&&(j.charCodeAt(Dt+2)===33&&(At+=j.substring(Dt,Fe+1)),Wt="",O=0)}}O===0&&(oe+=Wt)}Ft=bt,bt=ue,Fe++}if(Dt=At.length,0<Dt){if(Ct=Z,0<Yt&&(br=Q(2,At,Ct,U,tr,_t,Dt,ce,b,ce),br!==void 0&&(At=br).length===0))return Gr+At+Wr;if(At=Ct.join(",")+"{"+At+"}",Vt*sr!==0){switch(Vt!==2||P(At,2)||(sr=0),sr){case 111:At=At.replace(mt,":-moz-$1")+At;break;case 112:At=At.replace(St,"::-webkit-input-$1")+At.replace(St,"::-moz-$1")+At.replace(St,":-ms-input-$1")+At}sr=0}}return Gr+At+Wr}function l(U,Z,j){var ce=Z.trim().split(me);Z=ce;var b=ce.length,Ue=U.length;switch(Ue){case 0:case 1:var O=0;for(U=Ue===0?"":U[0]+" ";O<b;++O)Z[O]=u(U,Z[O],j).trim();break;default:var vt=O=0;for(Z=[];O<b;++O)for(var _e=0;_e<Ue;++_e)Z[vt++]=u(U[_e]+" ",ce[O],j).trim()}return Z}function u(U,Z,j){var ce=Z.charCodeAt(0);switch(33>ce&&(ce=(Z=Z.trim()).charCodeAt(0)),ce){case 38:return Z.replace(lt,"$1"+U.trim());case 58:return U.trim()+Z.replace(lt,"$1"+U.trim());default:if(0<1*j&&0<Z.indexOf("\f"))return Z.replace(lt,(U.charCodeAt(0)===58?"":"$1")+U.trim())}return U+Z}function A(U,Z,j,ce){var b=U+";",Ue=2*Z+3*j+4*ce;if(Ue===944){U=b.indexOf(":",9)+1;var O=b.substring(U,b.length-1).trim();return O=b.substring(0,U).trim()+O+";",Vt===1||Vt===2&&P(O,1)?"-webkit-"+O+O:O}if(Vt===0||Vt===2&&!P(b,1))return b;switch(Ue){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(kr,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return O=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+b+"-ms-flex-pack"+O+b;case 1005:return Be.test(b)?b.replace(ct,":-webkit-")+b.replace(ct,":-moz-")+b:b;case 1e3:switch(O=b.substring(13).trim(),Z=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(Z)){case 226:O=b.replace(xt,"tb");break;case 232:O=b.replace(xt,"tb-rl");break;case 220:O=b.replace(xt,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+O+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(Z=(b=U).length-10,O=(b.charCodeAt(Z)===33?b.substring(0,Z):b).substring(U.indexOf(":",7)+1).trim(),Ue=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:b=b.replace(O,"-webkit-"+O)+";"+b;break;case 207:case 102:b=b.replace(O,"-webkit-"+(102<Ue?"inline-":"")+"box")+";"+b.replace(O,"-webkit-"+O)+";"+b.replace(O,"-ms-"+O+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return O=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+O+"-ms-flex-"+O+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(Kt,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(Kt,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(mr.test(U)===!0)return(O=U.substring(U.indexOf(":")+1)).charCodeAt(0)===115?A(U.replace("stretch","fill-available"),Z,j,ce).replace(":fill-available",":stretch"):b.replace(O,"-webkit-"+O)+b.replace(O,"-moz-"+O.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,j+ce===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(je,"$1-webkit-$2")+b}return b}function P(U,Z){var j=U.indexOf(Z===1?":":"{"),ce=U.substring(0,Z!==3?j:10);return j=U.substring(j+1,U.length-1),$r(Z!==2?ce:ce.replace(ir,"$1"),j,Z)}function I(U,Z){var j=A(Z,Z.charCodeAt(0),Z.charCodeAt(1),Z.charCodeAt(2));return j!==Z+";"?j.replace(wr," or ($1)").substring(4):"("+Z+")"}function Q(U,Z,j,ce,b,Ue,O,vt,_e,Ke){for(var ue=0,bt=Z,Ft;ue<Yt;++ue)switch(Ft=rr[ue].call($e,U,bt,j,ce,b,Ue,O,vt,_e,Ke)){case void 0:case!1:case!0:case null:break;default:bt=Ft}if(bt!==Z)return bt}function Te(U){switch(U){case void 0:case null:Yt=rr.length=0;break;default:if(typeof U=="function")rr[Yt++]=U;else if(typeof U=="object")for(var Z=0,j=U.length;Z<j;++Z)Te(U[Z]);else Er=!!U|0}return Te}function W(U){return U=U.prefix,U!==void 0&&($r=null,U?typeof U!="function"?Vt=1:(Vt=2,$r=U):Vt=0),W}function $e(U,Z){var j=U;if(33>j.charCodeAt(0)&&(j=j.trim()),Ir=j,j=[Ir],0<Yt){var ce=Q(-1,Z,j,j,tr,_t,0,0,0,0);ce!==void 0&&typeof ce=="string"&&(Z=ce)}var b=f(Dr,j,Z,0,0);return 0<Yt&&(ce=Q(-2,b,j,j,tr,_t,b.length,0,0,0),ce!==void 0&&(b=ce)),Ir="",sr=0,_t=tr=1,b}var Oe=/^\0+/g,st=/[\0\r\f]/g,ct=/: */g,Be=/zoo|gra/,je=/([,: ])(transform)/g,me=/,\r+?/g,lt=/([\t\r\n ])*\f?&/g,Ne=/@(k\w+)\s*(\S*)\s*/,St=/::(place)/g,mt=/:(read-only)/g,xt=/[svh]\w+-[tblr]{2}/,hr=/\(\s*(.*)\s*\)/g,wr=/([\s\S]*?);/g,Kt=/-self|flex-/g,ir=/[^]*?(:[rp][el]a[\w-]+)[^]*/,mr=/stretch|:\s*\w+\-(?:conte|avail)/,kr=/([^-])(image-set\()/,_t=1,tr=1,sr=0,Vt=1,Dr=[],rr=[],Yt=0,$r=null,Er=0,Ir="";return $e.use=Te,$e.set=W,a!==void 0&&W(a),$e}var ee=Re,pe=y(40351);function ft(a){var f=Object.create(null);return function(l){return f[l]===void 0&&(f[l]=a(l)),f[l]}}var Ve=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Le=ft(function(a){return Ve.test(a)||a.charCodeAt(0)===111&&a.charCodeAt(1)===110&&a.charCodeAt(2)<91}),Et=y(8679),ye=y.n(Et),Xe=y(34155);function Qe(){return(Qe=Object.assign||function(a){for(var f=1;f<arguments.length;f++){var l=arguments[f];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(a[u]=l[u])}return a}).apply(this,arguments)}var kt=function(a,f){for(var l=[a[0]],u=0,A=f.length;u<A;u+=1)l.push(f[u],a[u+1]);return l},xe=function(a){return a!==null&&typeof a=="object"&&(a.toString?a.toString():Object.prototype.toString.call(a))==="[object Object]"&&!(0,x.typeOf)(a)},D=Object.freeze([]),n=Object.freeze({});function Ae(a){return typeof a=="function"}function pt(a){return a.displayName||a.name||"Component"}function h(a){return a&&typeof a.styledComponentId=="string"}var o=typeof Xe!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_ATTR)||"data-styled",d="5.3.11",g=typeof window!="undefined"&&"HTMLElement"in window,F=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof Xe!="undefined"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}!==void 0&&({NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.REACT_APP_SC_DISABLE_SPEEDY:{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==void 0&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!==""&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY!=="false"&&{NODE_ENV:"production",PUBLIC_PATH:"/"}.SC_DISABLE_SPEEDY)),q={},te={};function Ze(){for(var a=arguments.length<=0?void 0:arguments[0],f=[],l=1,u=arguments.length;l<u;l+=1)f.push(l<0||arguments.length<=l?void 0:arguments[l]);return f.forEach(function(A){a=a.replace(/%[a-z]/,A)}),a}function $(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];throw new Error("An error occurred. See https://git.io/JUIaE#"+a+" for more information."+(l.length>0?" Args: "+l.join(", "):""))}var S=function(){function a(l){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=l}var f=a.prototype;return f.indexOfGroup=function(l){for(var u=0,A=0;A<l;A++)u+=this.groupSizes[A];return u},f.insertRules=function(l,u){if(l>=this.groupSizes.length){for(var A=this.groupSizes,P=A.length,I=P;l>=I;)(I<<=1)<0&&$(16,""+l);this.groupSizes=new Uint32Array(I),this.groupSizes.set(A),this.length=I;for(var Q=P;Q<I;Q++)this.groupSizes[Q]=0}for(var Te=this.indexOfGroup(l+1),W=0,$e=u.length;W<$e;W++)this.tag.insertRule(Te,u[W])&&(this.groupSizes[l]++,Te++)},f.clearGroup=function(l){if(l<this.length){var u=this.groupSizes[l],A=this.indexOfGroup(l),P=A+u;this.groupSizes[l]=0;for(var I=A;I<P;I++)this.tag.deleteRule(A)}},f.getGroup=function(l){var u="";if(l>=this.length||this.groupSizes[l]===0)return u;for(var A=this.groupSizes[l],P=this.indexOfGroup(l),I=P+A,Q=P;Q<I;Q++)u+=this.tag.getRule(Q)+`/*!sc*/
`;return u},a}(),L=new Map,K=new Map,G=1,z=function(a){if(L.has(a))return L.get(a);for(;K.has(G);)G++;var f=G++;return L.set(a,f),K.set(f,a),f},le=function(a){return K.get(a)},Ie=function(a,f){f>=G&&(G=f+1),L.set(a,f),K.set(f,a)},tt="style["+o+'][data-styled-version="5.3.11"]',nt=new RegExp("^"+o+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ge=function(a,f,l){for(var u,A=l.split(","),P=0,I=A.length;P<I;P++)(u=A[P])&&a.registerName(f,u)},rt=function(a,f){for(var l=(f.textContent||"").split(`/*!sc*/
`),u=[],A=0,P=l.length;A<P;A++){var I=l[A].trim();if(I){var Q=I.match(nt);if(Q){var Te=0|parseInt(Q[1],10),W=Q[2];Te!==0&&(Ie(W,Te),Ge(a,W,Q[3]),a.getTag().insertRules(Te,u)),u.length=0}else u.push(I)}}},we=function(){return y.nc},ht=function(a){var f=document.head,l=a||f,u=document.createElement("style"),A=function(Q){for(var Te=Q.childNodes,W=Te.length;W>=0;W--){var $e=Te[W];if($e&&$e.nodeType===1&&$e.hasAttribute(o))return $e}}(l),P=A!==void 0?A.nextSibling:null;u.setAttribute(o,"active"),u.setAttribute("data-styled-version","5.3.11");var I=we();return I&&u.setAttribute("nonce",I),l.insertBefore(u,P),u},J=function(){function a(l){var u=this.element=ht(l);u.appendChild(document.createTextNode("")),this.sheet=function(A){if(A.sheet)return A.sheet;for(var P=document.styleSheets,I=0,Q=P.length;I<Q;I++){var Te=P[I];if(Te.ownerNode===A)return Te}$(17)}(u),this.length=0}var f=a.prototype;return f.insertRule=function(l,u){try{return this.sheet.insertRule(u,l),this.length++,!0}catch(A){return!1}},f.deleteRule=function(l){this.sheet.deleteRule(l),this.length--},f.getRule=function(l){var u=this.sheet.cssRules[l];return u!==void 0&&typeof u.cssText=="string"?u.cssText:""},a}(),re=function(){function a(l){var u=this.element=ht(l);this.nodes=u.childNodes,this.length=0}var f=a.prototype;return f.insertRule=function(l,u){if(l<=this.length&&l>=0){var A=document.createTextNode(u),P=this.nodes[l];return this.element.insertBefore(A,P||null),this.length++,!0}return!1},f.deleteRule=function(l){this.element.removeChild(this.nodes[l]),this.length--},f.getRule=function(l){return l<this.length?this.nodes[l].textContent:""},a}(),V=function(){function a(l){this.rules=[],this.length=0}var f=a.prototype;return f.insertRule=function(l,u){return l<=this.length&&(this.rules.splice(l,0,u),this.length++,!0)},f.deleteRule=function(l){this.rules.splice(l,1),this.length--},f.getRule=function(l){return l<this.length?this.rules[l]:""},a}(),he=g,ot={isServer:!g,useCSSOMInjection:!F},qe=function(){function a(l,u,A){l===void 0&&(l=n),u===void 0&&(u={}),this.options=Qe({},ot,{},l),this.gs=u,this.names=new Map(A),this.server=!!l.isServer,!this.server&&g&&he&&(he=!1,function(P){for(var I=document.querySelectorAll(tt),Q=0,Te=I.length;Q<Te;Q++){var W=I[Q];W&&W.getAttribute(o)!=="active"&&(rt(P,W),W.parentNode&&W.parentNode.removeChild(W))}}(this))}a.registerId=function(l){return z(l)};var f=a.prototype;return f.reconstructWithOptions=function(l,u){return u===void 0&&(u=!0),new a(Qe({},this.options,{},l),this.gs,u&&this.names||void 0)},f.allocateGSInstance=function(l){return this.gs[l]=(this.gs[l]||0)+1},f.getTag=function(){return this.tag||(this.tag=(A=(u=this.options).isServer,P=u.useCSSOMInjection,I=u.target,l=A?new V(I):P?new J(I):new re(I),new S(l)));var l,u,A,P,I},f.hasNameForId=function(l,u){return this.names.has(l)&&this.names.get(l).has(u)},f.registerName=function(l,u){if(z(l),this.names.has(l))this.names.get(l).add(u);else{var A=new Set;A.add(u),this.names.set(l,A)}},f.insertRules=function(l,u,A){this.registerName(l,u),this.getTag().insertRules(z(l),A)},f.clearNames=function(l){this.names.has(l)&&this.names.get(l).clear()},f.clearRules=function(l){this.getTag().clearGroup(z(l)),this.clearNames(l)},f.clearTag=function(){this.tag=void 0},f.toString=function(){return function(l){for(var u=l.getTag(),A=u.length,P="",I=0;I<A;I++){var Q=le(I);if(Q!==void 0){var Te=l.names.get(Q),W=u.getGroup(I);if(Te&&W&&Te.size){var $e=o+".g"+I+'[id="'+Q+'"]',Oe="";Te!==void 0&&Te.forEach(function(st){st.length>0&&(Oe+=st+",")}),P+=""+W+$e+'{content:"'+Oe+`"}/*!sc*/
`}}}return P}(this)},a}(),er=/(a)(d)/gi,Je=function(a){return String.fromCharCode(a+(a>25?39:97))};function Rt(a){var f,l="";for(f=Math.abs(a);f>52;f=f/52|0)l=Je(f%52)+l;return(Je(f%52)+l).replace(er,"$1-$2")}var Mt=function(a,f){for(var l=f.length;l;)a=33*a^f.charCodeAt(--l);return a},Tt=function(a){return Mt(5381,a)};function at(a){for(var f=0;f<a.length;f+=1){var l=a[f];if(Ae(l)&&!h(l))return!1}return!0}var Qt=Tt("5.3.11"),ur=function(){function a(f,l,u){this.rules=f,this.staticRulesId="",this.isStatic=(u===void 0||u.isStatic)&&at(f),this.componentId=l,this.baseHash=Mt(Qt,l),this.baseStyle=u,qe.registerId(l)}return a.prototype.generateAndInjectStyles=function(f,l,u){var A=this.componentId,P=[];if(this.baseStyle&&P.push(this.baseStyle.generateAndInjectStyles(f,l,u)),this.isStatic&&!u.hash)if(this.staticRulesId&&l.hasNameForId(A,this.staticRulesId))P.push(this.staticRulesId);else{var I=lr(this.rules,f,l,u).join(""),Q=Rt(Mt(this.baseHash,I)>>>0);if(!l.hasNameForId(A,Q)){var Te=u(I,"."+Q,void 0,A);l.insertRules(A,Q,Te)}P.push(Q),this.staticRulesId=Q}else{for(var W=this.rules.length,$e=Mt(this.baseHash,u.hash),Oe="",st=0;st<W;st++){var ct=this.rules[st];if(typeof ct=="string")Oe+=ct;else if(ct){var Be=lr(ct,f,l,u),je=Array.isArray(Be)?Be.join(""):Be;$e=Mt($e,je+st),Oe+=je}}if(Oe){var me=Rt($e>>>0);if(!l.hasNameForId(A,me)){var lt=u(Oe,"."+me,void 0,A);l.insertRules(A,me,lt)}P.push(me)}}return P.join(" ")},a}(),gr=/^\s*\/\/.*$/gm,ar=[":","[",".","#"];function Ar(a){var f,l,u,A,P=a===void 0?n:a,I=P.options,Q=I===void 0?n:I,Te=P.plugins,W=Te===void 0?D:Te,$e=new ee(Q),Oe=[],st=function(je){function me(lt){if(lt)try{je(lt+"}")}catch(Ne){}}return function(lt,Ne,St,mt,xt,hr,wr,Kt,ir,mr){switch(lt){case 1:if(ir===0&&Ne.charCodeAt(0)===64)return je(Ne+";"),"";break;case 2:if(Kt===0)return Ne+"/*|*/";break;case 3:switch(Kt){case 102:case 112:return je(St[0]+Ne),"";default:return Ne+(mr===0?"/*|*/":"")}case-2:Ne.split("/*|*/}").forEach(me)}}}(function(je){Oe.push(je)}),ct=function(je,me,lt){return me===0&&ar.indexOf(lt[l.length])!==-1||lt.match(A)?je:"."+f};function Be(je,me,lt,Ne){Ne===void 0&&(Ne="&");var St=je.replace(gr,""),mt=me&&lt?lt+" "+me+" { "+St+" }":St;return f=Ne,l=me,u=new RegExp("\\"+l+"\\b","g"),A=new RegExp("(\\"+l+"\\b){2,}"),$e(lt||!me?"":me,mt)}return $e.use([].concat(W,[function(je,me,lt){je===2&&lt.length&&lt[0].lastIndexOf(l)>0&&(lt[0]=lt[0].replace(u,ct))},st,function(je){if(je===-2){var me=Oe;return Oe=[],me}}])),Be.hash=W.length?W.reduce(function(je,me){return me.name||$(15),Mt(je,me.name)},5381).toString():"",Be}var gt=i.createContext(),Lt=gt.Consumer,yt=i.createContext(),dr=(yt.Consumer,new qe),fr=Ar();function pr(){return(0,i.useContext)(gt)||dr}function Kr(){return(0,i.useContext)(yt)||fr}function Yr(a){var f=(0,i.useState)(a.stylisPlugins),l=f[0],u=f[1],A=pr(),P=(0,i.useMemo)(function(){var Q=A;return a.sheet?Q=a.sheet:a.target&&(Q=Q.reconstructWithOptions({target:a.target},!1)),a.disableCSSOMInjection&&(Q=Q.reconstructWithOptions({useCSSOMInjection:!1})),Q},[a.disableCSSOMInjection,a.sheet,a.target]),I=(0,i.useMemo)(function(){return Ar({options:{prefix:!a.disableVendorPrefixes},plugins:l})},[a.disableVendorPrefixes,l]);return(0,i.useEffect)(function(){ke()(l,a.stylisPlugins)||u(a.stylisPlugins)},[a.stylisPlugins]),i.createElement(gt.Provider,{value:P},i.createElement(yt.Provider,{value:I},a.children))}var Xr=function(){function a(f,l){var u=this;this.inject=function(A,P){P===void 0&&(P=fr);var I=u.name+P.hash;A.hasNameForId(u.id,I)||A.insertRules(u.id,I,P(u.rules,I,"@keyframes"))},this.toString=function(){return $(12,String(u.name))},this.name=f,this.id="sc-keyframes-"+f,this.rules=l}return a.prototype.getName=function(f){return f===void 0&&(f=fr),this.name+f.hash},a}(),fn=/([A-Z])/,Jr=/([A-Z])/g,pn=/^ms-/,hn=function(a){return"-"+a.toLowerCase()};function Br(a){return fn.test(a)?a.replace(Jr,hn).replace(pn,"-ms-"):a}var en=function(a){return a==null||a===!1||a===""};function lr(a,f,l,u){if(Array.isArray(a)){for(var A,P=[],I=0,Q=a.length;I<Q;I+=1)(A=lr(a[I],f,l,u))!==""&&(Array.isArray(A)?P.push.apply(P,A):P.push(A));return P}if(en(a))return"";if(h(a))return"."+a.styledComponentId;if(Ae(a)){if(typeof(W=a)!="function"||W.prototype&&W.prototype.isReactComponent||!f)return a;var Te=a(f);return lr(Te,f,l,u)}var W;return a instanceof Xr?l?(a.inject(l,u),a.getName(u)):a:xe(a)?function $e(Oe,st){var ct,Be,je=[];for(var me in Oe)Oe.hasOwnProperty(me)&&!en(Oe[me])&&(Array.isArray(Oe[me])&&Oe[me].isCss||Ae(Oe[me])?je.push(Br(me)+":",Oe[me],";"):xe(Oe[me])?je.push.apply(je,$e(Oe[me],me)):je.push(Br(me)+": "+(ct=me,(Be=Oe[me])==null||typeof Be=="boolean"||Be===""?"":typeof Be!="number"||Be===0||ct in pe.Z||ct.startsWith("--")?String(Be).trim():Be+"px")+";"));return st?[st+" {"].concat(je,["}"]):je}(a):a.toString()}var tn=function(a){return Array.isArray(a)&&(a.isCss=!0),a};function Tr(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];return Ae(a)||xe(a)?tn(lr(kt(D,[a].concat(l)))):l.length===0&&a.length===1&&typeof a[0]=="string"?a:tn(lr(kt(a,l)))}var mn=/invalid hook call/i,En=new Set,bn=function(a,f){if(!1)var l,u,A},Nr=function(a,f,l){return l===void 0&&(l=n),a.theme!==l.theme&&a.theme||f||l.theme},rn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qr=/(^-|-$)/g;function Vr(a){return a.replace(rn,"-").replace(Qr,"")}var Mr=function(a){return Rt(Tt(a)>>>0)};function Fr(a){return typeof a=="string"&&!0}var jr=function(a){return typeof a=="function"||typeof a=="object"&&a!==null&&!Array.isArray(a)},gn=function(a){return a!=="__proto__"&&a!=="constructor"&&a!=="prototype"};function nn(a,f,l){var u=a[l];jr(f)&&jr(u)?on(u,f):a[l]=f}function on(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];for(var A=0,P=l;A<P.length;A++){var I=P[A];if(jr(I))for(var Q in I)gn(Q)&&nn(a,I[Q],Q)}return a}var vr=i.createContext(),Sn=vr.Consumer;function vn(a){var f=(0,i.useContext)(vr),l=(0,i.useMemo)(function(){return function(u,A){if(!u)return $(14);if(Ae(u)){var P=u(A);return P}return Array.isArray(u)||typeof u!="object"?$(8):A?Qe({},A,{},u):u}(a.theme,f)},[a.theme,f]);return a.children?i.createElement(vr.Provider,{value:l},a.children):null}var Hr={};function an(a,f,l){var u=h(a),A=!Fr(a),P=f.attrs,I=P===void 0?D:P,Q=f.componentId,Te=Q===void 0?function(Ne,St){var mt=typeof Ne!="string"?"sc":Vr(Ne);Hr[mt]=(Hr[mt]||0)+1;var xt=mt+"-"+Mr("5.3.11"+mt+Hr[mt]);return St?St+"-"+xt:xt}(f.displayName,f.parentComponentId):Q,W=f.displayName,$e=W===void 0?function(Ne){return Fr(Ne)?"styled."+Ne:"Styled("+pt(Ne)+")"}(a):W,Oe=f.displayName&&f.componentId?Vr(f.displayName)+"-"+f.componentId:f.componentId||Te,st=u&&a.attrs?Array.prototype.concat(a.attrs,I).filter(Boolean):I,ct=f.shouldForwardProp;u&&a.shouldForwardProp&&(ct=f.shouldForwardProp?function(Ne,St,mt){return a.shouldForwardProp(Ne,St,mt)&&f.shouldForwardProp(Ne,St,mt)}:a.shouldForwardProp);var Be,je=new ur(l,Oe,u?a.componentStyle:void 0),me=je.isStatic&&I.length===0,lt=function(Ne,St){return function(mt,xt,hr,wr){var Kt=mt.attrs,ir=mt.componentStyle,mr=mt.defaultProps,kr=mt.foldedComponentIds,_t=mt.shouldForwardProp,tr=mt.styledComponentId,sr=mt.target,Vt=function(ce,b,Ue){ce===void 0&&(ce=n);var O=Qe({},b,{theme:ce}),vt={};return Ue.forEach(function(_e){var Ke,ue,bt,Ft=_e;for(Ke in Ae(Ft)&&(Ft=Ft(O)),Ft)O[Ke]=vt[Ke]=Ke==="className"?(ue=vt[Ke],bt=Ft[Ke],ue&&bt?ue+" "+bt:ue||bt):Ft[Ke]}),[O,vt]}(Nr(xt,(0,i.useContext)(vr),mr)||n,xt,Kt),Dr=Vt[0],rr=Vt[1],Yt=function(ce,b,Ue,O){var vt=pr(),_e=Kr(),Ke=b?ce.generateAndInjectStyles(n,vt,_e):ce.generateAndInjectStyles(Ue,vt,_e);return Ke}(ir,wr,Dr,void 0),$r=hr,Er=rr.$as||xt.$as||rr.as||xt.as||sr,Ir=Fr(Er),U=rr!==xt?Qe({},xt,{},rr):xt,Z={};for(var j in U)j[0]!=="$"&&j!=="as"&&(j==="forwardedAs"?Z.as=U[j]:(_t?_t(j,Le,Er):!Ir||Le(j))&&(Z[j]=U[j]));return xt.style&&rr.style!==xt.style&&(Z.style=Qe({},xt.style,{},rr.style)),Z.className=Array.prototype.concat(kr,tr,Yt!==tr?Yt:null,xt.className,rr.className).filter(Boolean).join(" "),Z.ref=$r,(0,i.createElement)(Er,Z)}(Be,Ne,St,me)};return lt.displayName=$e,(Be=i.forwardRef(lt)).attrs=st,Be.componentStyle=je,Be.displayName=$e,Be.shouldForwardProp=ct,Be.foldedComponentIds=u?Array.prototype.concat(a.foldedComponentIds,a.styledComponentId):D,Be.styledComponentId=Oe,Be.target=u?a.target:a,Be.withComponent=function(Ne){var St=f.componentId,mt=function(hr,wr){if(hr==null)return{};var Kt,ir,mr={},kr=Object.keys(hr);for(ir=0;ir<kr.length;ir++)Kt=kr[ir],wr.indexOf(Kt)>=0||(mr[Kt]=hr[Kt]);return mr}(f,["componentId"]),xt=St&&St+"-"+(Fr(Ne)?Ne:Vr(pt(Ne)));return an(Ne,Qe({},mt,{attrs:st,componentId:xt}),l)},Object.defineProperty(Be,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Ne){this._foldedDefaultProps=u?on({},a.defaultProps,Ne):Ne}}),Object.defineProperty(Be,"toString",{value:function(){return"."+Be.styledComponentId}}),A&&ye()(Be,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),Be}var Ur=function(a){return function f(l,u,A){if(A===void 0&&(A=n),!(0,x.isValidElementType)(u))return $(1,String(u));var P=function(){return l(u,A,Tr.apply(void 0,arguments))};return P.withConfig=function(I){return f(l,u,Qe({},A,{},I))},P.attrs=function(I){return f(l,u,Qe({},A,{attrs:Array.prototype.concat(A.attrs,I).filter(Boolean)}))},P}(an,a)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(a){Ur[a]=Ur(a)});var yn=function(){function a(l,u){this.rules=l,this.componentId=u,this.isStatic=at(l),qe.registerId(this.componentId+1)}var f=a.prototype;return f.createStyles=function(l,u,A,P){var I=P(lr(this.rules,u,A,P).join(""),""),Q=this.componentId+l;A.insertRules(Q,Q,I)},f.removeStyles=function(l,u){u.clearRules(this.componentId+l)},f.renderStyles=function(l,u,A,P){l>2&&qe.registerId(this.componentId+l),this.removeStyles(l,A),this.createStyles(l,u,A,P)},a}();function xn(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];var A=Tr.apply(void 0,[a].concat(l)),P="sc-global-"+Mr(JSON.stringify(A)),I=new yn(A,P);function Q(W){var $e=pr(),Oe=Kr(),st=(0,i.useContext)(vr),ct=(0,i.useRef)($e.allocateGSInstance(P)).current;return $e.server&&Te(ct,W,$e,st,Oe),(0,i.useLayoutEffect)(function(){if(!$e.server)return Te(ct,W,$e,st,Oe),function(){return I.removeStyles(ct,$e)}},[ct,W,$e,st,Oe]),null}function Te(W,$e,Oe,st,ct){if(I.isStatic)I.renderStyles(W,q,Oe,ct);else{var Be=Qe({},$e,{theme:Nr($e,st,Q.defaultProps)});I.renderStyles(W,Be,Oe,ct)}}return i.memo(Q)}function Cn(a){for(var f=arguments.length,l=new Array(f>1?f-1:0),u=1;u<f;u++)l[u-1]=arguments[u];var A=Tr.apply(void 0,[a].concat(l)).join(""),P=Mr(A);return new Xr(P,A)}var Pn=function(){function a(){var l=this;this._emitSheetCSS=function(){var u=l.instance.toString();if(!u)return"";var A=we();return"<style "+[A&&'nonce="'+A+'"',o+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+u+"</style>"},this.getStyleTags=function(){return l.sealed?$(2):l._emitSheetCSS()},this.getStyleElement=function(){var u;if(l.sealed)return $(2);var A=((u={})[o]="",u["data-styled-version"]="5.3.11",u.dangerouslySetInnerHTML={__html:l.instance.toString()},u),P=we();return P&&(A.nonce=P),[i.createElement("style",Qe({},A,{key:"sc-0-0"}))]},this.seal=function(){l.sealed=!0},this.instance=new qe({isServer:!0}),this.sealed=!1}var f=a.prototype;return f.collectStyles=function(l){return this.sealed?$(2):i.createElement(Yr,{sheet:this.instance},l)},f.interleaveWithNodeStream=function(l){return $(3)},a}(),An=function(a){var f=r.forwardRef(function(l,u){var A=s(vr),P=a.defaultProps,I=Nr(l,A,P);return r.createElement(a,Qe({},l,{theme:I,ref:u}))});return m(f,a),f.displayName="WithTheme("+pt(a)+")",f},Tn=function(){return s(vr)},_r={StyleSheet:qe,masterSheet:dr},wn=Ur},62085:function(ae,N,y){"use strict";ae.exports=y.p+"static/ms_sans_serif.4095bf42.woff2"},77430:function(ae,N,y){"use strict";ae.exports=y.p+"static/ms_sans_serif_bold.1d0aba83.woff2"},68400:function(ae){function N(y,x){return x||(x=y.slice(0)),Object.freeze(Object.defineProperties(y,{raw:{value:Object.freeze(x)}}))}ae.exports=N,ae.exports.__esModule=!0,ae.exports.default=ae.exports},526:function(ae,N,y){"use strict";y.d(N,{S:function(){return pt}});var x=y(32161);const i=console;var de=y(30081),ke=y(72379);class Re{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,x.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(o){this.cacheTime=Math.max(this.cacheTime||0,o!=null?o:x.sk?1/0:5*60*1e3)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class ee extends Re{constructor(o){super(),this.abortSignalConsumed=!1,this.defaultOptions=o.defaultOptions,this.setOptions(o.options),this.observers=[],this.cache=o.cache,this.logger=o.logger||i,this.queryKey=o.queryKey,this.queryHash=o.queryHash,this.initialState=o.state||pe(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(o){this.options=C(C({},this.defaultOptions),o),this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(o,d){const g=(0,x.oE)(this.state.data,o,this.options);return this.dispatch({data:g,type:"success",dataUpdatedAt:d==null?void 0:d.updatedAt,manual:d==null?void 0:d.manual}),g}setState(o,d){this.dispatch({type:"setState",state:o,setStateOptions:d})}cancel(o){var d;const g=this.promise;return(d=this.retryer)==null||d.cancel(o),g?g.then(x.ZT).catch(x.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(o=>o.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(o=>o.getCurrentResult().isStale)}isStaleByTime(o=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,x.Kp)(this.state.dataUpdatedAt,o)}onFocus(){var o;const d=this.observers.find(g=>g.shouldFetchOnWindowFocus());d&&d.refetch({cancelRefetch:!1}),(o=this.retryer)==null||o.continue()}onOnline(){var o;const d=this.observers.find(g=>g.shouldFetchOnReconnect());d&&d.refetch({cancelRefetch:!1}),(o=this.retryer)==null||o.continue()}addObserver(o){this.observers.includes(o)||(this.observers.push(o),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:o}))}removeObserver(o){this.observers.includes(o)&&(this.observers=this.observers.filter(d=>d!==o),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:o}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(o,d){var g,F;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&d!=null&&d.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var q;return(q=this.retryer)==null||q.continueRetry(),this.promise}}if(o&&this.setOptions(o),!this.options.queryFn){const z=this.observers.find(le=>le.options.queryFn);z&&this.setOptions(z.options)}const te=(0,x.G9)(),Ze={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},$=z=>{Object.defineProperty(z,"signal",{enumerable:!0,get:()=>{if(te)return this.abortSignalConsumed=!0,te.signal}})};$(Ze);const S=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(Ze)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),L={fetchOptions:d,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:S};if($(L),(g=this.options.behavior)==null||g.onFetch(L),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((F=L.fetchOptions)==null?void 0:F.meta)){var K;this.dispatch({type:"fetch",meta:(K=L.fetchOptions)==null?void 0:K.meta})}const G=z=>{if((0,ke.DV)(z)&&z.silent||this.dispatch({type:"error",error:z}),!(0,ke.DV)(z)){var le,Ie,tt,nt;(le=(Ie=this.cache.config).onError)==null||le.call(Ie,z,this),(tt=(nt=this.cache.config).onSettled)==null||tt.call(nt,this.state.data,z,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,ke.Mz)({fn:L.fetchFn,abort:te==null?void 0:te.abort.bind(te),onSuccess:z=>{var le,Ie,tt,nt;if(typeof z=="undefined"){G(new Error(this.queryHash+" data is undefined"));return}this.setData(z),(le=(Ie=this.cache.config).onSuccess)==null||le.call(Ie,z,this),(tt=(nt=this.cache.config).onSettled)==null||tt.call(nt,z,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:G,onFail:(z,le)=>{this.dispatch({type:"failed",failureCount:z,error:le})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:L.options.retry,retryDelay:L.options.retryDelay,networkMode:L.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(o){const d=g=>{var F,q;switch(o.type){case"failed":return He(C({},g),{fetchFailureCount:o.failureCount,fetchFailureReason:o.error});case"pause":return He(C({},g),{fetchStatus:"paused"});case"continue":return He(C({},g),{fetchStatus:"fetching"});case"fetch":return C(He(C({},g),{fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(F=o.meta)!=null?F:null,fetchStatus:(0,ke.Kw)(this.options.networkMode)?"fetching":"paused"}),!g.dataUpdatedAt&&{error:null,status:"loading"});case"success":return C(He(C({},g),{data:o.data,dataUpdateCount:g.dataUpdateCount+1,dataUpdatedAt:(q=o.dataUpdatedAt)!=null?q:Date.now(),error:null,isInvalidated:!1,status:"success"}),!o.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null});case"error":const te=o.error;return(0,ke.DV)(te)&&te.revert&&this.revertState?He(C({},this.revertState),{fetchStatus:"idle"}):He(C({},g),{error:te,errorUpdateCount:g.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:g.fetchFailureCount+1,fetchFailureReason:te,fetchStatus:"idle",status:"error"});case"invalidate":return He(C({},g),{isInvalidated:!0});case"setState":return C(C({},g),o.state)}};this.state=d(this.state),de.V.batch(()=>{this.observers.forEach(g=>{g.onQueryUpdate(o)}),this.cache.notify({query:this,type:"updated",action:o})})}}function pe(h){const o=typeof h.initialData=="function"?h.initialData():h.initialData,d=typeof o!="undefined",g=d?typeof h.initialDataUpdatedAt=="function"?h.initialDataUpdatedAt():h.initialDataUpdatedAt:0;return{data:o,dataUpdateCount:0,dataUpdatedAt:d?g!=null?g:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:d?"success":"loading",fetchStatus:"idle"}}var ft=y(33989);class Ve extends ft.l{constructor(o){super(),this.config=o||{},this.queries=[],this.queriesMap={}}build(o,d,g){var F;const q=d.queryKey,te=(F=d.queryHash)!=null?F:(0,x.Rm)(q,d);let Ze=this.get(te);return Ze||(Ze=new ee({cache:this,logger:o.getLogger(),queryKey:q,queryHash:te,options:o.defaultQueryOptions(d),state:g,defaultOptions:o.getQueryDefaults(q)}),this.add(Ze)),Ze}add(o){this.queriesMap[o.queryHash]||(this.queriesMap[o.queryHash]=o,this.queries.push(o),this.notify({type:"added",query:o}))}remove(o){const d=this.queriesMap[o.queryHash];d&&(o.destroy(),this.queries=this.queries.filter(g=>g!==o),d===o&&delete this.queriesMap[o.queryHash],this.notify({type:"removed",query:o}))}clear(){de.V.batch(()=>{this.queries.forEach(o=>{this.remove(o)})})}get(o){return this.queriesMap[o]}getAll(){return this.queries}find(o,d){const[g]=(0,x.I6)(o,d);return typeof g.exact=="undefined"&&(g.exact=!0),this.queries.find(F=>(0,x._x)(g,F))}findAll(o,d){const[g]=(0,x.I6)(o,d);return Object.keys(g).length>0?this.queries.filter(F=>(0,x._x)(g,F)):this.queries}notify(o){de.V.batch(()=>{this.listeners.forEach(({listener:d})=>{d(o)})})}onFocus(){de.V.batch(()=>{this.queries.forEach(o=>{o.onFocus()})})}onOnline(){de.V.batch(()=>{this.queries.forEach(o=>{o.onOnline()})})}}class Le extends Re{constructor(o){super(),this.defaultOptions=o.defaultOptions,this.mutationId=o.mutationId,this.mutationCache=o.mutationCache,this.logger=o.logger||i,this.observers=[],this.state=o.state||Et(),this.setOptions(o.options),this.scheduleGc()}setOptions(o){this.options=C(C({},this.defaultOptions),o),this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(o){this.dispatch({type:"setState",state:o})}addObserver(o){this.observers.includes(o)||(this.observers.push(o),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:o}))}removeObserver(o){this.observers=this.observers.filter(d=>d!==o),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:o})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var o,d;return(o=(d=this.retryer)==null?void 0:d.continue())!=null?o:this.execute()}execute(){return Qn(this,null,function*(){const o=()=>{var re;return this.retryer=(0,ke.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(V,he)=>{this.dispatch({type:"failed",failureCount:V,error:he})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(re=this.options.retry)!=null?re:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},d=this.state.status==="loading";try{var g,F,q,te,Ze,$,S,L;if(!d){var K,G,z,le;this.dispatch({type:"loading",variables:this.options.variables}),yield(K=(G=this.mutationCache.config).onMutate)==null?void 0:K.call(G,this.state.variables,this);const V=yield(z=(le=this.options).onMutate)==null?void 0:z.call(le,this.state.variables);V!==this.state.context&&this.dispatch({type:"loading",context:V,variables:this.state.variables})}const re=yield o();return yield(g=(F=this.mutationCache.config).onSuccess)==null?void 0:g.call(F,re,this.state.variables,this.state.context,this),yield(q=(te=this.options).onSuccess)==null?void 0:q.call(te,re,this.state.variables,this.state.context),yield(Ze=($=this.mutationCache.config).onSettled)==null?void 0:Ze.call($,re,null,this.state.variables,this.state.context,this),yield(S=(L=this.options).onSettled)==null?void 0:S.call(L,re,null,this.state.variables,this.state.context),this.dispatch({type:"success",data:re}),re}catch(re){try{var Ie,tt,nt,Ge,rt,we,ht,J;throw yield(Ie=(tt=this.mutationCache.config).onError)==null?void 0:Ie.call(tt,re,this.state.variables,this.state.context,this),yield(nt=(Ge=this.options).onError)==null?void 0:nt.call(Ge,re,this.state.variables,this.state.context),yield(rt=(we=this.mutationCache.config).onSettled)==null?void 0:rt.call(we,void 0,re,this.state.variables,this.state.context,this),yield(ht=(J=this.options).onSettled)==null?void 0:ht.call(J,void 0,re,this.state.variables,this.state.context),re}finally{this.dispatch({type:"error",error:re})}}})}dispatch(o){const d=g=>{switch(o.type){case"failed":return He(C({},g),{failureCount:o.failureCount,failureReason:o.error});case"pause":return He(C({},g),{isPaused:!0});case"continue":return He(C({},g),{isPaused:!1});case"loading":return He(C({},g),{context:o.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,ke.Kw)(this.options.networkMode),status:"loading",variables:o.variables});case"success":return He(C({},g),{data:o.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1});case"error":return He(C({},g),{data:void 0,error:o.error,failureCount:g.failureCount+1,failureReason:o.error,isPaused:!1,status:"error"});case"setState":return C(C({},g),o.state)}};this.state=d(this.state),de.V.batch(()=>{this.observers.forEach(g=>{g.onMutationUpdate(o)}),this.mutationCache.notify({mutation:this,type:"updated",action:o})})}}function Et(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class ye extends ft.l{constructor(o){super(),this.config=o||{},this.mutations=[],this.mutationId=0}build(o,d,g){const F=new Le({mutationCache:this,logger:o.getLogger(),mutationId:++this.mutationId,options:o.defaultMutationOptions(d),state:g,defaultOptions:d.mutationKey?o.getMutationDefaults(d.mutationKey):void 0});return this.add(F),F}add(o){this.mutations.push(o),this.notify({type:"added",mutation:o})}remove(o){this.mutations=this.mutations.filter(d=>d!==o),this.notify({type:"removed",mutation:o})}clear(){de.V.batch(()=>{this.mutations.forEach(o=>{this.remove(o)})})}getAll(){return this.mutations}find(o){return typeof o.exact=="undefined"&&(o.exact=!0),this.mutations.find(d=>(0,x.X7)(o,d))}findAll(o){return this.mutations.filter(d=>(0,x.X7)(o,d))}notify(o){de.V.batch(()=>{this.listeners.forEach(({listener:d})=>{d(o)})})}resumePausedMutations(){var o;return this.resuming=((o=this.resuming)!=null?o:Promise.resolve()).then(()=>{const d=this.mutations.filter(g=>g.state.isPaused);return de.V.batch(()=>d.reduce((g,F)=>g.then(()=>F.continue().catch(x.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var Xe=y(15761),Qe=y(96474);function kt(){return{onFetch:h=>{h.fetchFn=()=>{var o,d,g,F,q,te;const Ze=(o=h.fetchOptions)==null||(d=o.meta)==null?void 0:d.refetchPage,$=(g=h.fetchOptions)==null||(F=g.meta)==null?void 0:F.fetchMore,S=$==null?void 0:$.pageParam,L=($==null?void 0:$.direction)==="forward",K=($==null?void 0:$.direction)==="backward",G=((q=h.state.data)==null?void 0:q.pages)||[],z=((te=h.state.data)==null?void 0:te.pageParams)||[];let le=z,Ie=!1;const tt=J=>{Object.defineProperty(J,"signal",{enumerable:!0,get:()=>{var re;if((re=h.signal)!=null&&re.aborted)Ie=!0;else{var V;(V=h.signal)==null||V.addEventListener("abort",()=>{Ie=!0})}return h.signal}})},nt=h.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+h.options.queryHash+"'")),Ge=(J,re,V,he)=>(le=he?[re,...le]:[...le,re],he?[V,...J]:[...J,V]),rt=(J,re,V,he)=>{if(Ie)return Promise.reject("Cancelled");if(typeof V=="undefined"&&!re&&J.length)return Promise.resolve(J);const ot={queryKey:h.queryKey,pageParam:V,meta:h.options.meta};tt(ot);const qe=nt(ot);return Promise.resolve(qe).then(Je=>Ge(J,V,Je,he))};let we;if(!G.length)we=rt([]);else if(L){const J=typeof S!="undefined",re=J?S:xe(h.options,G);we=rt(G,J,re)}else if(K){const J=typeof S!="undefined",re=J?S:D(h.options,G);we=rt(G,J,re,!0)}else{le=[];const J=typeof h.options.getNextPageParam=="undefined";we=(Ze&&G[0]?Ze(G[0],0,G):!0)?rt([],J,z[0]):Promise.resolve(Ge([],z[0],G[0]));for(let V=1;V<G.length;V++)we=we.then(he=>{if(Ze&&G[V]?Ze(G[V],V,G):!0){const qe=J?z[V]:xe(h.options,he);return rt(he,J,qe)}return Promise.resolve(Ge(he,z[V],G[V]))})}return we.then(J=>({pages:J,pageParams:le}))}}}}function xe(h,o){return h.getNextPageParam==null?void 0:h.getNextPageParam(o[o.length-1],o)}function D(h,o){return h.getPreviousPageParam==null?void 0:h.getPreviousPageParam(o[0],o)}function n(h,o){if(h.getNextPageParam&&Array.isArray(o)){const d=xe(h,o);return typeof d!="undefined"&&d!==null&&d!==!1}}function Ae(h,o){if(h.getPreviousPageParam&&Array.isArray(o)){const d=D(h,o);return typeof d!="undefined"&&d!==null&&d!==!1}}class pt{constructor(o={}){this.queryCache=o.queryCache||new Ve,this.mutationCache=o.mutationCache||new ye,this.logger=o.logger||i,this.defaultOptions=o.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=Xe.j.subscribe(()=>{Xe.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=Qe.N.subscribe(()=>{Qe.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var o,d;this.mountCount--,this.mountCount===0&&((o=this.unsubscribeFocus)==null||o.call(this),this.unsubscribeFocus=void 0,(d=this.unsubscribeOnline)==null||d.call(this),this.unsubscribeOnline=void 0)}isFetching(o,d){const[g]=(0,x.I6)(o,d);return g.fetchStatus="fetching",this.queryCache.findAll(g).length}isMutating(o){return this.mutationCache.findAll(He(C({},o),{fetching:!0})).length}getQueryData(o,d){var g;return(g=this.queryCache.find(o,d))==null?void 0:g.state.data}ensureQueryData(o,d,g){const F=(0,x._v)(o,d,g),q=this.getQueryData(F.queryKey);return q?Promise.resolve(q):this.fetchQuery(F)}getQueriesData(o){return this.getQueryCache().findAll(o).map(({queryKey:d,state:g})=>{const F=g.data;return[d,F]})}setQueryData(o,d,g){const F=this.queryCache.find(o),q=F==null?void 0:F.state.data,te=(0,x.SE)(d,q);if(typeof te=="undefined")return;const Ze=(0,x._v)(o),$=this.defaultQueryOptions(Ze);return this.queryCache.build(this,$).setData(te,He(C({},g),{manual:!0}))}setQueriesData(o,d,g){return de.V.batch(()=>this.getQueryCache().findAll(o).map(({queryKey:F})=>[F,this.setQueryData(F,d,g)]))}getQueryState(o,d){var g;return(g=this.queryCache.find(o,d))==null?void 0:g.state}removeQueries(o,d){const[g]=(0,x.I6)(o,d),F=this.queryCache;de.V.batch(()=>{F.findAll(g).forEach(q=>{F.remove(q)})})}resetQueries(o,d,g){const[F,q]=(0,x.I6)(o,d,g),te=this.queryCache,Ze=C({type:"active"},F);return de.V.batch(()=>(te.findAll(F).forEach($=>{$.reset()}),this.refetchQueries(Ze,q)))}cancelQueries(o,d,g){const[F,q={}]=(0,x.I6)(o,d,g);typeof q.revert=="undefined"&&(q.revert=!0);const te=de.V.batch(()=>this.queryCache.findAll(F).map(Ze=>Ze.cancel(q)));return Promise.all(te).then(x.ZT).catch(x.ZT)}invalidateQueries(o,d,g){const[F,q]=(0,x.I6)(o,d,g);return de.V.batch(()=>{var te,Ze;if(this.queryCache.findAll(F).forEach(S=>{S.invalidate()}),F.refetchType==="none")return Promise.resolve();const $=He(C({},F),{type:(te=(Ze=F.refetchType)!=null?Ze:F.type)!=null?te:"active"});return this.refetchQueries($,q)})}refetchQueries(o,d,g){const[F,q]=(0,x.I6)(o,d,g),te=de.V.batch(()=>this.queryCache.findAll(F).filter($=>!$.isDisabled()).map($=>{var S;return $.fetch(void 0,He(C({},q),{cancelRefetch:(S=q==null?void 0:q.cancelRefetch)!=null?S:!0,meta:{refetchPage:F.refetchPage}}))}));let Ze=Promise.all(te).then(x.ZT);return q!=null&&q.throwOnError||(Ze=Ze.catch(x.ZT)),Ze}fetchQuery(o,d,g){const F=(0,x._v)(o,d,g),q=this.defaultQueryOptions(F);typeof q.retry=="undefined"&&(q.retry=!1);const te=this.queryCache.build(this,q);return te.isStaleByTime(q.staleTime)?te.fetch(q):Promise.resolve(te.state.data)}prefetchQuery(o,d,g){return this.fetchQuery(o,d,g).then(x.ZT).catch(x.ZT)}fetchInfiniteQuery(o,d,g){const F=(0,x._v)(o,d,g);return F.behavior=kt(),this.fetchQuery(F)}prefetchInfiniteQuery(o,d,g){return this.fetchInfiniteQuery(o,d,g).then(x.ZT).catch(x.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(o){this.defaultOptions=o}setQueryDefaults(o,d){const g=this.queryDefaults.find(F=>(0,x.yF)(o)===(0,x.yF)(F.queryKey));g?g.defaultOptions=d:this.queryDefaults.push({queryKey:o,defaultOptions:d})}getQueryDefaults(o){if(!o)return;const d=this.queryDefaults.find(g=>(0,x.to)(o,g.queryKey));return d==null?void 0:d.defaultOptions}setMutationDefaults(o,d){const g=this.mutationDefaults.find(F=>(0,x.yF)(o)===(0,x.yF)(F.mutationKey));g?g.defaultOptions=d:this.mutationDefaults.push({mutationKey:o,defaultOptions:d})}getMutationDefaults(o){if(!o)return;const d=this.mutationDefaults.find(g=>(0,x.to)(o,g.mutationKey));return d==null?void 0:d.defaultOptions}defaultQueryOptions(o){if(o!=null&&o._defaulted)return o;const d=He(C(C(C({},this.defaultOptions.queries),this.getQueryDefaults(o==null?void 0:o.queryKey)),o),{_defaulted:!0});return!d.queryHash&&d.queryKey&&(d.queryHash=(0,x.Rm)(d.queryKey,d)),typeof d.refetchOnReconnect=="undefined"&&(d.refetchOnReconnect=d.networkMode!=="always"),typeof d.useErrorBoundary=="undefined"&&(d.useErrorBoundary=!!d.suspense),d}defaultMutationOptions(o){return o!=null&&o._defaulted?o:He(C(C(C({},this.defaultOptions.mutations),this.getMutationDefaults(o==null?void 0:o.mutationKey)),o),{_defaulted:!0})}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},81071:function(ae,N,y){"use strict";y.d(N,{ck:function(){return g},v2:function(){return d},av:function(){return kt}});var x=y(67294);function i($){var S,L,K="";if(typeof $=="string"||typeof $=="number")K+=$;else if(typeof $=="object")if(Array.isArray($))for(S=0;S<$.length;S++)$[S]&&(L=i($[S]))&&(K&&(K+=" "),K+=L);else for(S in $)$[S]&&(K&&(K+=" "),K+=S);return K}function de(){for(var $,S,L=0,K="";L<arguments.length;)($=arguments[L++])&&(S=i($))&&(K&&(K+=" "),K+=S);return K}var ke=de,Re=y(73935),ee=(0,x.createContext)({}),pe=()=>(0,x.useContext)(ee),ft=$=>x.createElement(ee.Provider,C({},$));function Ve(){let $=new Map;return{on(S,L){return $.has(S)?$.get(S).add(L):$.set(S,new Set([L])),this},off(S,L){return $.has(S)&&$.get(S).delete(L),this},emit(S,L){return $.has(S)&&$.get(S).forEach(K=>{K(L)}),this}}}var Le=Ve(),Et=()=>(0,x.useRef)(new Map).current,ye=()=>{},Xe=["resize","contextmenu","click","scroll","blur"],Qe={show({event:$,id:S,props:L,position:K}){$.preventDefault&&$.preventDefault(),Le.emit(0).emit(S,{event:$.nativeEvent||$,props:L,position:K})},hideAll(){Le.emit(0)}};function kt($){return{show(S){Qe.show(C(C({},$),S))},hideAll(){Qe.hideAll()}}}function xe(){let $=new Map,S,L,K,G,z=!1;function le(V){G=Array.from(V.values()),S=-1,K=!0}function Ie(){G[S].node.focus()}let tt=()=>S>=0&&G[S].isSubmenu,nt=()=>Array.from(G[S].submenuRefTracker.values());function Ge(){return S===-1?(rt(),!1):!0}function rt(){S+1<G.length?S++:S+1===G.length&&(S=0),z&&J(),Ie()}function we(){S===-1||S===0?S=G.length-1:S-1<G.length&&S--,z&&J(),Ie()}function ht(){if(Ge()&&tt()){let V=nt(),{node:he,setSubmenuPosition:ot}=G[S];return $.set(he,{isRoot:K,focusedIndex:S,parentNode:L||he,items:G}),ot(),he.classList.add("contexify_submenu-isOpen"),L=he,V.length>0?(S=0,G=V):z=!0,K=!1,Ie(),!0}return!1}function J(){if(Ge()&&!K){let V=$.get(L);L.classList.remove("contexify_submenu-isOpen"),G=V.items,L=V.parentNode,V.isRoot&&(K=!0,$.clear()),z||(S=V.focusedIndex,Ie())}}function re(V){function he(ot){for(let qe of ot)qe.isSubmenu&&qe.submenuRefTracker&&he(Array.from(qe.submenuRefTracker.values())),qe.keyMatcher&&qe.keyMatcher(V)}he(G)}return{init:le,moveDown:rt,moveUp:we,openSubmenu:ht,closeSubmenu:J,matchKeys:re}}function D($){return typeof $=="function"}function n($){return typeof $=="string"}function Ae($,S){return x.Children.map(x.Children.toArray($).filter(Boolean),L=>(0,x.cloneElement)(L,S))}function pt($){let S={x:$.clientX,y:$.clientY},L=$.changedTouches;return L&&(S.x=L[0].clientX,S.y=L[0].clientY),(!S.x||S.x<0)&&(S.x=0),(!S.y||S.y<0)&&(S.y=0),S}function h($,S){return D($)?$(S):$}function o($,S){return C(C({},$),D(S)?S($):S)}var d=Ge=>{var rt=Ge,{id:$,theme:S,style:L,className:K,children:G,animation:z="fade",preventDefaultOnKeydown:le=!0,disableBoundariesCheck:Ie=!1,onVisibilityChange:tt}=rt,nt=ve(rt,["id","theme","style","className","children","animation","preventDefaultOnKeydown","disableBoundariesCheck","onVisibilityChange"]);let[we,ht]=(0,x.useReducer)(o,{x:0,y:0,visible:!1,triggerEvent:{},propsFromTrigger:null,willLeave:!1}),J=(0,x.useRef)(null),re=Et(),[V]=(0,x.useState)(()=>xe()),he=(0,x.useRef)(),ot=(0,x.useRef)();(0,x.useEffect)(()=>(Le.on($,er).on(0,Je),()=>{Le.off($,er).off(0,Je)}),[$,z,Ie]),(0,x.useEffect)(()=>{we.visible?V.init(re):re.clear()},[we.visible,V,re]);function qe(gt,Lt){if(J.current&&!Ie){let{innerWidth:yt,innerHeight:dr}=window,{offsetWidth:fr,offsetHeight:pr}=J.current;gt+fr>yt&&(gt-=gt+fr-yt),Lt+pr>dr&&(Lt-=Lt+pr-dr)}return{x:gt,y:Lt}}(0,x.useEffect)(()=>{we.visible&&ht(qe(we.x,we.y))},[we.visible]),(0,x.useEffect)(()=>{function gt(yt){le&&yt.preventDefault()}function Lt(yt){switch(yt.key){case"Enter":case" ":V.openSubmenu()||Je();break;case"Escape":Je();break;case"ArrowUp":gt(yt),V.moveUp();break;case"ArrowDown":gt(yt),V.moveDown();break;case"ArrowRight":gt(yt),V.openSubmenu();break;case"ArrowLeft":gt(yt),V.closeSubmenu();break;default:V.matchKeys(yt);break}}if(we.visible){window.addEventListener("keydown",Lt);for(let yt of Xe)window.addEventListener(yt,Je)}return()=>{window.removeEventListener("keydown",Lt);for(let yt of Xe)window.removeEventListener(yt,Je)}},[we.visible,V,le]);function er({event:gt,props:Lt,position:yt}){gt.stopPropagation();let dr=yt||pt(gt),{x:fr,y:pr}=qe(dr.x,dr.y);(0,Re.flushSync)(()=>{ht({visible:!0,willLeave:!1,x:fr,y:pr,triggerEvent:gt,propsFromTrigger:Lt})}),clearTimeout(ot.current),!he.current&&D(tt)&&(tt(!0),he.current=!0)}function Je(gt){gt!=null&&(gt.button===2||gt.ctrlKey)&&gt.type!=="contextmenu"||(z&&(n(z)||"exit"in z&&z.exit)?ht(Lt=>({willLeave:Lt.visible})):ht(Lt=>({visible:Lt.visible?!1:Lt.visible})),ot.current=setTimeout(()=>{D(tt)&&tt(!1),he.current=!1}))}function Rt(){we.willLeave&&we.visible&&(0,Re.flushSync)(()=>ht({visible:!1,willLeave:!1}))}function Mt(){return n(z)?ke({[`contexify_willEnter-${z}`]:Tt&&!ar,[`contexify_willLeave-${z} contexify_willLeave-'disabled'`]:Tt&&ar}):z&&"enter"in z&&"exit"in z?ke({[`contexify_willEnter-${z.enter}`]:z.enter&&Tt&&!ar,[`contexify_willLeave-${z.exit} contexify_willLeave-'disabled'`]:z.exit&&Tt&&ar}):null}let{visible:Tt,triggerEvent:at,propsFromTrigger:Qt,x:ur,y:gr,willLeave:ar}=we,Ar=ke("contexify",K,{[`contexify_theme-${S}`]:S},Mt());return x.createElement(ft,{value:re},Tt&&x.createElement("div",He(C({},nt),{className:Ar,onAnimationEnd:Rt,style:He(C({},L),{left:ur,top:gr,opacity:1}),ref:J,role:"menu"}),Ae(G,{propsFromTrigger:Qt,triggerEvent:at})))},g=J=>{var re=J,{id:$,children:S,className:L,style:K,triggerEvent:G,data:z,propsFromTrigger:le,keyMatcher:Ie,onClick:tt=ye,disabled:nt=!1,hidden:Ge=!1,closeOnClick:rt=!0,handlerEvent:we="onClick"}=re,ht=ve(re,["id","children","className","style","triggerEvent","data","propsFromTrigger","keyMatcher","onClick","disabled","hidden","closeOnClick","handlerEvent"]);let V=(0,x.useRef)(),he=pe(),ot={id:$,data:z,triggerEvent:G,props:le},qe=h(nt,ot),er=h(Ge,ot);function Je(at){ot.event=at,at.stopPropagation(),qe||(rt?Rt():tt(ot))}function Rt(){let at=V.current;at.focus(),at.addEventListener("animationend",()=>setTimeout(Qe.hideAll),{once:!0}),at.classList.add("contexify_item-feedback"),tt(ot)}function Mt(at){at&&!qe&&(V.current=at,he.set(at,{node:at,isSubmenu:!1,keyMatcher:!qe&&D(Ie)&&(Qt=>{Ie(Qt)&&(Qt.stopPropagation(),Qt.preventDefault(),ot.event=Qt,Rt())})}))}function Tt(at){(at.key==="Enter"||at.key===" ")&&(at.stopPropagation(),ot.event=at,Rt())}return er?null:x.createElement("div",He(C({},ht),{[we]:Je,className:ke("contexify_item",L,{["contexify_item-disabled"]:qe}),style:K,onKeyDown:Tt,ref:Mt,tabIndex:-1,role:"menuitem","aria-disabled":qe}),x.createElement("div",{className:"contexify_itemContent"},S))},F=({triggerEvent:$,data:S,propsFromTrigger:L,hidden:K=!1})=>h(K,{data:S,triggerEvent:$,props:L})?null:H.createElement("div",{className:"contexify_separator"}),q=()=>H.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},H.createElement("polyline",{points:"9 18 15 12 9 6"})),te=L=>{var K=L,{className:$}=K,S=ve(K,["className"]);return H.createElement("div",C({className:X("contexify_rightSlot",$)},S))},Ze=Ge=>{var rt=Ge,{arrow:$,children:S,disabled:L=!1,hidden:K=!1,label:G,className:z,triggerEvent:le,propsFromTrigger:Ie,style:tt}=rt,nt=ve(rt,["arrow","children","disabled","hidden","label","className","triggerEvent","propsFromTrigger","style"]);let we=pe(),ht=Et(),J=useRef(null),re={triggerEvent:le,props:Ie},V=h(L,re),he=h(K,re);function ot(){let Je=J.current;if(Je){let Rt="contexify_submenu-bottom",Mt="contexify_submenu-right";Je.classList.remove(Rt,Mt);let Tt=Je.getBoundingClientRect();Tt.right>window.innerWidth&&Je.classList.add(Mt),Tt.bottom>window.innerHeight&&Je.classList.add(Rt)}}function qe(Je){Je&&!V&&we.set(Je,{node:Je,isSubmenu:!0,submenuRefTracker:ht,setSubmenuPosition:ot})}if(he)return null;let er=X("contexify_item",z,{["contexify_item-disabled"]:V});return H.createElement(ft,{value:ht},H.createElement("div",He(C({},nt),{className:er,ref:qe,tabIndex:-1,role:"menuitem","aria-haspopup":!0,"aria-disabled":V,onMouseEnter:ot,onTouchStart:ot}),H.createElement("div",{className:"contexify_itemContent",onClick:Je=>Je.stopPropagation()},G,H.createElement(te,null,$||H.createElement(q,null))),H.createElement("div",{className:"contexify contexify_submenu",ref:J,style:tt},Ae(S,{propsFromTrigger:Ie,triggerEvent:le}))))}},60299:function(ae,N,y){"use strict";y.d(N,{xG:function(){return o},zx:function(){return z},qy:function(){return nt},MF:function(){return tt},Z0:function(){return Tt},oi:function(){return Br},o8:function(){return _r},Rz:function(){return P},GH:function(){return a},ib:function(){return l},mw:function(){return x}});var x=`
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

`,i=y(94589),de=y(48764).lW;const ke="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Re="inset 2px 2px 3px rgba(0,0,0,0.2)",ee=()=>(0,i.iv)`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,pe=({background:e="material",color:t="materialText"}={})=>(0,i.iv)`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:c})=>c[e]};
  color: ${({theme:c})=>c[t]};
`,ft=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:c=2})=>(0,i.iv)`
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
`,Ve=()=>(0,i.iv)`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Le={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Et=({theme:e,topLeftInner:t,bottomRightInner:c,hasShadow:p=!1,hasInsetShadow:v=!1})=>[p?ke:!1,v?Re:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,c!==null?`inset -1px -1px 0 1px ${e[c]}`:!1].filter(Boolean).join(", "),ye=({invert:e=!1,style:t="button"}={})=>{const c={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return(0,i.iv)`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:p})=>p[Le[t][c.topLeftOuter]]};
    border-top-color: ${({theme:p})=>p[Le[t][c.topLeftOuter]]};
    border-right-color: ${({theme:p})=>p[Le[t][c.bottomRightOuter]]};
    border-bottom-color: ${({theme:p})=>p[Le[t][c.bottomRightOuter]]};
    box-shadow: ${({theme:p,shadow:v})=>Et({theme:p,topLeftInner:Le[t][c.topLeftInner],bottomRightInner:Le[t][c.bottomRightInner],hasShadow:v})};
  `},Xe=()=>(0,i.iv)`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,kt=typeof btoa!="undefined"?btoa:e=>de.from(e).toString("base64"),xe=(e,t=0)=>{const c=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${kt(c)})`},D=(e="default")=>(0,i.iv)`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>ft({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${pe()}
    ${e==="flat"?Ve():ye({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${pe()}
    ${e==="flat"?Ve():ye({style:"window"})}
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
    ${e==="default"?ye({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>xe(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>xe(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>xe(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>xe(t.materialText,0)};
  }
`;var n=y(67294);const Ae=i.ZP.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,pt=(0,n.forwardRef)((v,p)=>{var k=v,{children:e,underline:t=!0}=k,c=ve(k,["children","underline"]);return n.createElement(Ae,C({ref:p,underline:t},c),e)});pt.displayName="Anchor";const h=i.ZP.header`
  ${ye()};
  ${pe()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,o=(0,n.forwardRef)((k,v)=>{var w=k,{children:e,fixed:t=!0,position:c="fixed"}=w,p=ve(w,["children","fixed","position"]);return n.createElement(h,C({fixed:t,position:t!==!1?c:void 0,ref:v},p),e)});o.displayName="AppBar";const d=()=>{};function g(e,t,c){return c!==null&&e>c?c:t!==null&&e<t?t:e}function F(e){if(Math.abs(e)<1){const c=e.toExponential().split("e-"),p=c[0].split(".")[1];return(p?p.length:0)+parseInt(c[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function q(e,t,c){const p=Math.round((e-c)/t)*t+c;return Number(p.toFixed(F(t)))}function te(e){return typeof e=="number"?`${e}px`:e}const Ze=i.ZP.div`
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
`,S=(0,n.forwardRef)((B,T)=>{var R=B,{alt:e="",children:t,noBorder:c=!1,size:p=35,square:v=!1,src:k}=R,w=ve(R,["alt","children","noBorder","size","square","src"]);return n.createElement(Ze,C({noBorder:c,ref:T,size:te(p),square:v,src:k},w),k?n.createElement($,{src:k,alt:e}):t)});S.displayName="Avatar";const L={sm:"28px",md:"36px",lg:"44px"},K=(0,i.iv)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>L[e]};
  width: ${({fullWidth:e,size:t="md",square:c})=>e?"100%":c?L[t]:"auto"};
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
`,G=i.ZP.button`
  ${({active:e,disabled:t,primary:c,theme:p,variant:v})=>v==="flat"?(0,i.iv)`
          ${Ve()}
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
            ${!e&&!t&&Xe}
            outline-offset: -4px;
          }
        `:v==="menu"||v==="thin"?(0,i.iv)`
          ${pe()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&ye({style:"buttonThin"})}
          }
          &:active {
            ${!t&&ye({style:"buttonThinPressed"})}
          }
          ${e&&ye({style:"buttonThinPressed"})}
          ${t&&ee()}
        `:(0,i.iv)`
          ${pe()};
          border: none;
          ${t&&ee()}
          ${e?ft({mainColor:p.material,secondaryColor:p.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${c?(0,i.iv)`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${p.borderDarkest};
                `:(0,i.iv)`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${ye(e?{style:v==="raised"?"window":"button",invert:!0}:{style:v==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&ye({style:v==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Xe}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${K}
`,z=(0,n.forwardRef)((ne,be)=>{var fe=ne,{onClick:e,disabled:t=!1,children:c,type:p="button",fullWidth:v=!1,size:k="md",square:w=!1,active:T=!1,onTouchStart:B=d,primary:R=!1,variant:_="default"}=fe,M=ve(fe,["onClick","disabled","children","type","fullWidth","size","square","active","onTouchStart","primary","variant"]);return n.createElement(G,C({active:T,disabled:t,$disabled:t,fullWidth:v,onClick:t?void 0:e,onTouchStart:B,primary:R,ref:be,size:k,square:w,type:p,variant:_},M),c)});z.displayName="Button";function le({defaultValue:e,onChange:t,onChangePropName:c="onChange",readOnly:p,value:v,valuePropName:k="value"}){const w=v!==void 0,[T,B]=(0,n.useState)(e),R=(0,n.useCallback)(_=>{w||B(_)},[w]);if(w&&typeof t!="function"&&!p){const _=`Warning: You provided a \`${k}\` prop to a component without an \`${c}\` handler.${k==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${c}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${c}\` function that updates \`${k}\`.`}`;console.warn(_)}return[w?v:T,R]}const Ie=i.ZP.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>L[e.size]};
  width: ${e=>e.square?L[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>L[e.size]};
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
  ${e=>e.$disabled&&ee()}
`,tt=(0,n.forwardRef)((B,T)=>{var R=B,{size:e="lg",disabled:t,square:c,children:p,onClick:v,primary:k}=R,w=ve(R,["size","disabled","square","children","onClick","primary"]);return n.createElement(Ie,C({$disabled:t,size:e,square:c,onClick:t?void 0:v,primary:k,role:"menuitem",ref:T,"aria-disabled":t},w),p)});tt.displayName="MenuListItem";const nt=i.ZP.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${ye({style:"window"})}
  ${pe()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;nt.displayName="MenuList";const Ge=20,rt=i.ZP.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ge}px;
  height: ${Ge}px;
  opacity: 0;
  z-index: -1;
`,we=i.ZP.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&ee()}

  ${Ie} & {
    margin: 0;
    height: 100%;
  }
  ${Ie}:hover & {
    ${({$disabled:e,theme:t})=>!e&&(0,i.iv)`
        color: ${t.materialTextInvert};
      `};
  }
`,ht=i.ZP.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${rt}:focus ~ & {
    ${Xe}
  }
  ${rt}:not(:disabled) ~ &:active {
    ${Xe}
  }
`,J=i.ZP.div`
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
    ${e=>e.shadow&&`box-shadow:${Re};`}
  }
`,re=i.ZP.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${D()}
`,V=(0,n.forwardRef)((v,p)=>{var k=v,{children:e,shadow:t=!0}=k,c=ve(k,["children","shadow"]);return n.createElement(J,C({ref:p,shadow:t},c),n.createElement(re,null,e))});V.displayName="ScrollView";const he=(0,i.iv)`
  width: ${Ge}px;
  height: ${Ge}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ot=(0,i.ZP)(J)`
  ${he}
  width: ${Ge}px;
  height: ${Ge}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,qe=i.ZP.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${he}
  width: ${Ge-4}px;
  height: ${Ge-4}px;
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
`,Je=i.ZP.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>ft({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Rt={flat:qe,default:ot},Mt=(0,n.forwardRef)((be,M)=>{var ne=be,{checked:e,className:t="",defaultChecked:c=!1,disabled:p=!1,indeterminate:v=!1,label:k="",onChange:w=d,style:T={},value:B,variant:R="default"}=ne,_=ve(ne,["checked","className","defaultChecked","disabled","indeterminate","label","onChange","style","value","variant"]);var fe;const[Ye,Y]=le({defaultValue:c,onChange:w,readOnly:(fe=_.readOnly)!==null&&fe!==void 0?fe:p,value:e}),ge=(0,n.useCallback)(Se=>{const Ce=Se.target.checked;Y(Ce),w(Se)},[w,Y]),Ee=Rt[R];let ie=null;return v?ie=Je:Ye&&(ie=er),n.createElement(we,{$disabled:p,className:t,style:T},n.createElement(rt,C({disabled:p,onChange:p?void 0:ge,readOnly:p,type:"checkbox",value:B,checked:Ye,"data-indeterminate":v,ref:M},_)),n.createElement(Ee,{$disabled:p,role:"presentation"},ie&&n.createElement(ie,{$disabled:p,variant:R})),k&&n.createElement(ht,null,k))});Mt.displayName="Checkbox";const Tt=i.ZP.div`
  ${({orientation:e,theme:t,size:c="100%"})=>e==="vertical"?`
    height: ${te(c)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${te(c)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Tt.displayName="Separator";const at=(0,i.ZP)(G)`
  padding-left: 8px;
`,Qt=(0,i.ZP)(Tt)`
  height: 21px;
  position: relative;
  top: 0;
`,ur=i.ZP.input`
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

  ${({$disabled:e})=>e?(0,i.iv)`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:(0,i.iv)`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${ur}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Xe}
    outline-offset: -8px;
  }
`,ar=i.ZP.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?(0,i.iv)`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:(0,i.iv)`
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
`,Ar=(0,n.forwardRef)((T,w)=>{var B=T,{value:e,defaultValue:t,onChange:c=d,disabled:p=!1,variant:v="default"}=B,k=ve(B,["value","defaultValue","onChange","disabled","variant"]);var R;const[_,M]=le({defaultValue:t,onChange:c,readOnly:(R=k.readOnly)!==null&&R!==void 0?R:p,value:e}),be=ne=>{const fe=ne.target.value;M(fe),c(ne)};return n.createElement(at,{disabled:p,as:"div",variant:v,size:"md"},n.createElement(ur,C({onChange:be,readOnly:p,disabled:p,value:_!=null?_:"#008080",type:"color",ref:w},k)),n.createElement(gr,{$disabled:p,color:_!=null?_:"#008080",role:"presentation"}),v==="default"&&n.createElement(Qt,{orientation:"vertical"}),n.createElement(ar,{$disabled:p,variant:v}))});Ar.displayName="ColorInput";const gt=i.ZP.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>(0,i.iv)`
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
      ${ft({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,Lt=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],yt=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function dr(p){var v=p,{digit:e=0,pixelSize:t=2}=v,c=ve(v,["digit","pixelSize"]);const k=yt[Number(e)].map((w,T)=>w?`${Lt[T]} active`:Lt[T]);return n.createElement(gt,C({pixelSize:t},c),k.map((w,T)=>n.createElement("span",{className:w,key:T})))}const fr=i.ZP.div`
  ${ye({style:"status"})}
  display: inline-flex;
  background: #000000;
`,pr={sm:1,md:2,lg:3,xl:4},Kr=(0,n.forwardRef)((k,v)=>{var w=k,{value:e=0,minLength:t=3,size:c="md"}=w,p=ve(w,["value","minLength","size"]);const T=(0,n.useMemo)(()=>e.toString().padStart(t,"0").split(""),[t,e]);return n.createElement(fr,C({ref:v},p),T.map((B,R)=>n.createElement(dr,{digit:B,pixelSize:pr[c],key:R})))});Kr.displayName="Counter";const Yr=(0,i.iv)`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${L.md};
`,Xr=(0,i.ZP)(J).attrs({"data-testid":"variant-default"})`
  ${Yr}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,fn=i.ZP.div.attrs({"data-testid":"variant-flat"})`
  ${Ve()}
  ${Yr}
  position: relative;
`,Jr=(0,i.iv)`
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
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&ee()}
`,pn=i.ZP.input`
  ${Jr}
  padding: 0 8px;
`,hn=i.ZP.textarea`
  ${Jr}
  padding: 8px;
  resize: none;
  ${({variant:e})=>D(e)}
`,Br=(0,n.forwardRef)((R,B)=>{var _=R,{className:e,disabled:t=!1,fullWidth:c,onChange:p=d,shadow:v=!0,style:k,variant:w="default"}=_,T=ve(_,["className","disabled","fullWidth","onChange","shadow","style","variant"]);const M=w==="flat"?fn:Xr,be=(0,n.useMemo)(()=>{var ne;return T.multiline?n.createElement(hn,C({disabled:t,onChange:t?void 0:p,readOnly:t,ref:B,variant:w},T)):n.createElement(pn,C({disabled:t,onChange:t?void 0:p,readOnly:t,ref:B,type:(ne=T.type)!==null&&ne!==void 0?ne:"text",variant:w},T))},[t,p,T,B,w]);return n.createElement(M,{className:e,fullWidth:c,$disabled:t,shadow:v,style:k},be)});Br.displayName="TextInput";const en=i.ZP.div`
  display: inline-flex;
  align-items: center;
`,lr=(0,i.ZP)(z)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?(0,i.iv)`
          height: calc(50% - 1px);
        `:(0,i.iv)`
          height: 50%;
        `}
`,tn=i.ZP.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?(0,i.iv)`
          height: calc(${L.md} - 4px);
        `:(0,i.iv)`
          height: ${L.md};
          margin-left: 2px;
        `}
`,Tr=i.ZP.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?(0,i.iv)`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:(0,i.iv)`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${lr}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?(0,i.iv)`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:(0,i.iv)`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,mn=(0,n.forwardRef)((fe,ne)=>{var Ye=fe,{className:e,defaultValue:t,disabled:c=!1,max:p,min:v,onChange:k,readOnly:w,step:T=1,style:B,value:R,variant:_="default",width:M}=Ye,be=ve(Ye,["className","defaultValue","disabled","max","min","onChange","readOnly","step","style","value","variant","width"]);const[Y,ge]=le({defaultValue:t,onChange:k,readOnly:w,value:R}),Ee=(0,n.useCallback)(nr=>{const jt=parseFloat(nr.target.value);ge(jt)},[ge]),ie=(0,n.useCallback)(nr=>{const jt=g(parseFloat(((Y!=null?Y:0)+nr).toFixed(2)),v!=null?v:null,p!=null?p:null);ge(jt),k==null||k(jt)},[p,v,k,ge,Y]),Se=(0,n.useCallback)(()=>{Y!==void 0&&(k==null||k(Y))},[k,Y]),Ce=(0,n.useCallback)(()=>{ie(T)},[ie,T]),De=(0,n.useCallback)(()=>{ie(-T)},[ie,T]),Pt=_==="flat"?"flat":"raised";return n.createElement(en,C({className:e,style:He(C({},B),{width:M!==void 0?te(M):"auto"})},be),n.createElement(Br,{value:Y,variant:_,onChange:Ee,disabled:c,type:"number",readOnly:w,ref:ne,fullWidth:!0,onBlur:Se}),n.createElement(tn,{variant:_},n.createElement(lr,{"data-testid":"increment",variant:Pt,disabled:c||w,onClick:Ce},n.createElement(Tr,{invert:!0})),n.createElement(lr,{"data-testid":"decrement",variant:Pt,disabled:c||w,onClick:De},n.createElement(Tr,null))))});mn.displayName="NumberInput";function En(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let c=0;c<10;c+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const bn=e=>(0,n.useMemo)(()=>e!=null?e:En(),[e]),Nr=(0,i.iv)`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,rn=(0,i.iv)`
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
`,Vr=i.ZP.div`
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
`,Mr=(0,i.iv)`
  height: ${L.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?ee():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,Fr=(0,i.ZP)(J)`
  ${Mr}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,jr=i.ZP.div`
  ${Ve()}
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
    ${ee()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,nn=(0,i.ZP)(G).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?(0,i.iv)`
          height: 100%;
          margin-right: 0;
        `:(0,i.iv)`
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
  box-shadow: ${ke};
  ${({variant:e="default"})=>e==="flat"?(0,i.iv)`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:(0,i.iv)`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>D(e)}
`,Sn=i.ZP.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${L.md} - 4px);
  line-height: calc(${L.md} - 4px);
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
`,vn=[],Hr=({className:e,defaultValue:t,disabled:c,native:p,onChange:v,options:k=vn,readOnly:w,style:T,value:B,variant:R,width:_})=>{var M;const be=(0,n.useMemo)(()=>k.filter(Boolean),[k]),[ne,fe]=le({defaultValue:t!=null?t:(M=be==null?void 0:be[0])===null||M===void 0?void 0:M.value,onChange:v,readOnly:w,value:B}),Ye=!(c||w),Y=(0,n.useMemo)(()=>({className:e,style:He(C({},T),{width:_})}),[e,T,_]),ge=(0,n.useMemo)(()=>n.createElement(nn,{as:"div","data-testid":"select-button",$disabled:c,native:p,tabIndex:-1,variant:R==="flat"?"flat":"raised"},n.createElement(on,{"data-testid":"select-icon",$disabled:c})),[c,p,R]),Ee=(0,n.useMemo)(()=>R==="flat"?jr:Fr,[R]);return(0,n.useMemo)(()=>({isEnabled:Ye,options:be,value:ne,setValue:fe,wrapperProps:Y,DropdownButton:ge,Wrapper:Ee}),[ge,Ee,Ye,be,fe,ne,Y])},an={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ur=1e3,yn=({onBlur:e,onChange:t,onClose:c,onFocus:p,onKeyDown:v,onMouseDown:k,onOpen:w,open:T,options:B,readOnly:R,value:_,selectRef:M,setValue:be,wrapperRef:ne})=>{const fe=(0,n.useRef)(null),Ye=(0,n.useRef)([]),Y=(0,n.useRef)(0),ge=(0,n.useRef)(0),Ee=(0,n.useRef)(),ie=(0,n.useRef)("search"),Se=(0,n.useRef)(""),Ce=(0,n.useRef)(),[De,Pt]=le({defaultValue:!1,onChange:w,onChangePropName:"onOpen",readOnly:R,value:T,valuePropName:"open"}),nr=(0,n.useMemo)(()=>{const E=B.findIndex(se=>se.value===_);return Y.current=g(E,0,null),B[E]},[B,_]),[jt,Xt]=(0,n.useState)(B[0]),Ht=(0,n.useCallback)(E=>{const se=fe.current,We=Ye.current[E];if(!We||!se){Ee.current=E;return}Ee.current=void 0;const It=se.clientHeight,dt=se.scrollTop,$t=se.scrollTop+It,Ot=We.offsetTop,cr=We.offsetHeight,xr=We.offsetTop+We.offsetHeight;Ot<dt&&se.scrollTo(0,Ot),xr>$t&&se.scrollTo(0,Ot-It+cr),We.focus({preventScroll:!0})},[fe]),wt=(0,n.useCallback)((E,{scroll:se}={})=>{var We;const It=B.length-1;let dt;switch(E){case"first":{dt=0;break}case"last":{dt=It;break}case"next":{dt=g(ge.current+1,0,It);break}case"previous":{dt=g(ge.current-1,0,It);break}case"selected":{dt=g((We=Y.current)!==null&&We!==void 0?We:0,0,It);break}default:dt=E}ge.current=dt,Xt(B[dt]),se&&Ht(dt)},[ge,B,Ht]),Zt=(0,n.useCallback)(({fromEvent:E})=>{Pt(!0),wt("selected",{scroll:!0}),w==null||w({fromEvent:E})},[wt,w,Pt]),Gt=(0,n.useCallback)(()=>{ie.current="search",Se.current="",clearTimeout(Ce.current)},[]),Jt=(0,n.useCallback)(({focusSelect:E,fromEvent:se})=>{var We;c==null||c({fromEvent:se}),Pt(!1),Xt(B[0]),Gt(),Ee.current=void 0,E&&((We=M.current)===null||We===void 0||We.focus())},[Gt,c,B,M,Pt]),or=(0,n.useCallback)(({fromEvent:E})=>{De?Jt({focusSelect:!1,fromEvent:E}):Zt({fromEvent:E})},[Jt,Zt,De]),Ut=(0,n.useCallback)((E,{fromEvent:se})=>{Y.current!==E&&(Y.current=E,be(B[E].value),t==null||t(B[E],{fromEvent:se}))},[t,B,be]),zt=(0,n.useCallback)(({focusSelect:E,fromEvent:se})=>{Ut(ge.current,{fromEvent:se}),Jt({focusSelect:E,fromEvent:se})},[Jt,Ut]),Cr=(0,n.useCallback)((E,{fromEvent:se,select:We})=>{var It;switch(ie.current==="cycleFirstLetter"&&E!==Se.current&&(ie.current="search"),E===Se.current?ie.current="cycleFirstLetter":Se.current+=E,ie.current){case"search":{let dt=B.findIndex($t=>{var Ot;return((Ot=$t.label)===null||Ot===void 0?void 0:Ot.toLocaleUpperCase().indexOf(Se.current))===0});dt<0&&(dt=B.findIndex($t=>{var Ot;return((Ot=$t.label)===null||Ot===void 0?void 0:Ot.toLocaleUpperCase().indexOf(E))===0}),Se.current=E),dt>=0&&(We?Ut(dt,{fromEvent:se}):wt(dt,{scroll:!0}));break}case"cycleFirstLetter":{const dt=We?(It=Y.current)!==null&&It!==void 0?It:-1:ge.current;let $t=B.findIndex((Ot,cr)=>{var xr;return cr>dt&&((xr=Ot.label)===null||xr===void 0?void 0:xr.toLocaleUpperCase().indexOf(E))===0});$t<0&&($t=B.findIndex(Ot=>{var cr;return((cr=Ot.label)===null||cr===void 0?void 0:cr.toLocaleUpperCase().indexOf(E))===0})),$t>=0&&(We?Ut($t,{fromEvent:se}):wt($t,{scroll:!0}));break}}clearTimeout(Ce.current),Ce.current=setTimeout(()=>{ie.current==="search"&&(Se.current="")},Ur)},[wt,B,Ut]),it=(0,n.useCallback)(E=>{var se;E.button===0&&(E.preventDefault(),(se=M.current)===null||se===void 0||se.focus(),or({fromEvent:E}),k==null||k(E))},[k,M,or]),Nt=(0,n.useCallback)(E=>{zt({focusSelect:!0,fromEvent:E})},[zt]),qt=(0,n.useCallback)(E=>{const{altKey:se,code:We,ctrlKey:It,metaKey:dt,shiftKey:$t}=E,{ARROW_DOWN:Ot,ARROW_UP:cr,END:xr,ENTER:cn,ESC:$n,HOME:Lr,SPACE:Pr,TAB:qr}=an,un=se||It||dt||$t;if(!(We===qr&&(se||It||dt)||We!==qr&&un))switch(We){case Ot:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}wt("next",{scroll:!0});break}case cr:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}wt("previous",{scroll:!0});break}case xr:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}wt("last",{scroll:!0});break}case cn:{if(!De)return;E.preventDefault(),zt({focusSelect:!0,fromEvent:E});break}case $n:{if(!De)return;E.preventDefault(),Jt({focusSelect:!0,fromEvent:E});break}case Lr:{if(E.preventDefault(),!De){Zt({fromEvent:E});return}wt("first",{scroll:!0});break}case Pr:{E.preventDefault(),De?zt({focusSelect:!0,fromEvent:E}):Zt({fromEvent:E});break}case qr:{if(!De)return;$t||E.preventDefault(),zt({focusSelect:!$t,fromEvent:E});break}default:!un&&We.match(/^Key/)&&(E.preventDefault(),E.stopPropagation(),Cr(We.replace(/^Key/,""),{select:!De,fromEvent:E}))}},[wt,Jt,De,Zt,Cr,zt]),Rr=(0,n.useCallback)(E=>{qt(E),v==null||v(E)},[qt,v]),yr=(0,n.useCallback)(E=>{wt(E)},[wt]),Pe=(0,n.useCallback)(E=>{De||(Gt(),e==null||e(E))},[Gt,e,De]),ze=(0,n.useCallback)(E=>{Gt(),p==null||p(E)},[Gt,p]),ut=(0,n.useCallback)(E=>{fe.current=E,Ee.current!==void 0&&Ht(Ee.current)},[Ht]),et=(0,n.useCallback)((E,se)=>{Ye.current[se]=E,Ee.current===se&&Ht(Ee.current)},[Ht]);return(0,n.useEffect)(()=>{if(!De)return()=>{};const E=se=>{var We;const It=se.target;!((We=ne.current)===null||We===void 0)&&We.contains(It)||(se.preventDefault(),Jt({focusSelect:!1,fromEvent:se}))};return document.addEventListener("mousedown",E),()=>{document.removeEventListener("mousedown",E)}},[Jt,De,ne]),(0,n.useMemo)(()=>({activeOption:jt,handleActivateOptionIndex:yr,handleBlur:Pe,handleButtonKeyDown:Rr,handleDropdownKeyDown:qt,handleFocus:ze,handleMouseDown:it,handleOptionClick:Nt,handleSetDropdownRef:ut,handleSetOptionRef:et,open:De,selectedOption:nr}),[jt,yr,Pe,Rr,ze,qt,it,Nt,ut,et,De,nr])},xn=(0,n.forwardRef)((be,M)=>{var ne=be,{className:e,defaultValue:t,disabled:c,onChange:p,options:v,readOnly:k,style:w,value:T,variant:B,width:R}=ne,_=ve(ne,["className","defaultValue","disabled","onChange","options","readOnly","style","value","variant","width"]);const{isEnabled:fe,options:Ye,setValue:Y,value:ge,DropdownButton:Ee,Wrapper:ie}=Hr({defaultValue:t,disabled:c,native:!0,onChange:p,options:v,readOnly:k,value:T,variant:B}),Se=(0,n.useCallback)(Ce=>{const De=Ye.find(Pt=>Pt.value===Ce.target.value);De&&(Y(De.value),p==null||p(De,{fromEvent:Ce}))},[p,Ye,Y]);return n.createElement(ie,{className:e,style:He(C({},w),{width:R})},n.createElement(Qr,null,n.createElement(gn,He(C({},_),{disabled:c,onChange:fe?Se:d,ref:M,value:ge}),Ye.map((Ce,De)=>{var Pt;return n.createElement("option",{key:`${Ce.value}-${De}`,value:Ce.value},(Pt=Ce.label)!==null&&Pt!==void 0?Pt:Ce.value)})),Ee))});xn.displayName="SelectNative";function Cn({activateOptionIndex:e,active:t,index:c,onClick:p,option:v,selected:k,setRef:w}){const T=(0,n.useCallback)(()=>{e(c)},[e,c]),B=(0,n.useCallback)(_=>{w(_,c)},[c,w]),R=bn();return n.createElement(Sn,{active:t,"aria-selected":k?"true":void 0,"data-value":v.value,id:R,onClick:p,onMouseEnter:T,ref:B,role:"option",tabIndex:0},v.label)}function Pn(Ht,Xt){var wt=Ht,{"aria-label":e,"aria-labelledby":t,className:c,defaultValue:p,disabled:v=!1,formatDisplay:k,inputProps:w,labelId:T,menuMaxHeight:B,name:R,onBlur:_,onChange:M,onClose:be,onFocus:ne,onKeyDown:fe,onMouseDown:Ye,onOpen:Y,open:ge,options:Ee,readOnly:ie,shadow:Se=!0,style:Ce,variant:De="default",value:Pt,width:nr="auto"}=wt,jt=ve(wt,["aria-label","aria-labelledby","className","defaultValue","disabled","formatDisplay","inputProps","labelId","menuMaxHeight","name","onBlur","onChange","onClose","onFocus","onKeyDown","onMouseDown","onOpen","open","options","readOnly","shadow","style","variant","value","width"]);const{isEnabled:Zt,options:Gt,setValue:Jt,value:or,wrapperProps:Ut,DropdownButton:zt,Wrapper:Cr}=Hr({className:c,defaultValue:p,disabled:v,native:!1,onChange:M,options:Ee,style:Ce,readOnly:ie,value:Pt,variant:De,width:nr}),it=(0,n.useRef)(null),Nt=(0,n.useRef)(null),qt=(0,n.useRef)(null),{activeOption:Rr,handleActivateOptionIndex:yr,handleBlur:Pe,handleButtonKeyDown:ze,handleDropdownKeyDown:ut,handleFocus:et,handleMouseDown:E,handleOptionClick:se,handleSetDropdownRef:We,handleSetOptionRef:It,open:dt,selectedOption:$t}=yn({onBlur:_,onChange:M,onClose:be,onFocus:ne,onKeyDown:fe,onMouseDown:Ye,onOpen:Y,open:ge,options:Gt,value:or,selectRef:Nt,setValue:Jt,wrapperRef:qt});(0,n.useImperativeHandle)(Xt,()=>({focus:Lr=>{var Pr;(Pr=Nt.current)===null||Pr===void 0||Pr.focus(Lr)},node:it.current,value:String(or)}),[or]);const Ot=(0,n.useMemo)(()=>$t?typeof k=="function"?k($t):$t.label:"",[k,$t]),cr=Zt?1:void 0,xr=(0,n.useMemo)(()=>B?{overflow:"auto",maxHeight:B}:void 0,[B]),cn=bn(),$n=(0,n.useMemo)(()=>Gt.map((Lr,Pr)=>{const qr=`${or}-${Pr}`,un=Lr===Rr,Fn=Lr===$t;return n.createElement(Cn,{activateOptionIndex:yr,active:un,index:Pr,key:qr,onClick:se,option:Lr,selected:Fn,setRef:It})}),[Rr,yr,se,It,Gt,$t,or]);return n.createElement(Cr,He(C({},Ut),{$disabled:v,ref:qt,shadow:Se,style:He(C({},Ce),{width:nr})}),n.createElement("input",C({name:R,ref:it,type:"hidden",value:String(or)},w)),n.createElement(Qr,C({"aria-disabled":v,"aria-expanded":dt,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t!=null?t:T,"aria-owns":Zt&&dt?cn:void 0,onBlur:Pe,onFocus:et,onKeyDown:ze,onMouseDown:Zt?E:Ye,ref:Nt,role:"button",tabIndex:cr},jt),n.createElement(Vr,null,Ot),zt),Zt&&dt&&n.createElement(vr,{id:cn,onKeyDown:ut,ref:We,role:"listbox",style:xr,tabIndex:0,variant:De},$n))}const An=(0,n.forwardRef)(Pn);An.displayName="Select";const Tn=i.ZP.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,_r=(0,n.forwardRef)(function(k,v){var w=k,{children:t,noPadding:c=!1}=w,p=ve(w,["children","noPadding"]);return n.createElement(Tn,C({noPadding:c,ref:v},p),t)});_r.displayName="Toolbar";const wn=i.ZP.div`
  padding: 16px;
`,a=(0,n.forwardRef)(function(v,p){var k=v,{children:t}=k,c=ve(k,["children"]);return n.createElement(wn,C({ref:p},c),t)});a.displayName="WindowContent";const f=i.ZP.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?(0,i.iv)`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:(0,i.iv)`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${G} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,l=(0,n.forwardRef)(function(k,v){var w=k,{active:t=!0,children:c}=w,p=ve(w,["active","children"]);return n.createElement(f,C({active:t,ref:v},p),c)});l.displayName="WindowHeader";const u=i.ZP.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${ye({style:"window"})}
  ${pe()}
`,A=i.ZP.span`
  ${({theme:e})=>(0,i.iv)`
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
`,P=(0,n.forwardRef)((w,k)=>{var T=w,{children:e,resizable:t=!1,resizeRef:c,shadow:p=!0}=T,v=ve(T,["children","resizable","resizeRef","shadow"]);return n.createElement(u,C({ref:k,shadow:p},v),e,t&&n.createElement(A,{"data-testid":"resizeHandle",ref:c}))});P.displayName="Window";const I=(0,i.ZP)(V)`
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
`,W=i.ZP.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,$e=i.ZP.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Oe=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function st(e,t){return new Date(e,t+1,0).getDate()}function ct(e,t,c){return new Date(e,t,c).getDay()}function Be(e){const t=new Date(Date.parse(e)),c=t.getUTCDate(),p=t.getUTCMonth(),v=t.getUTCFullYear();return{day:c,month:p,year:v}}const je=(0,n.forwardRef)(({className:e,date:t=new Date().toISOString(),onAccept:c,onCancel:p,shadow:v=!0},k)=>{const[w,T]=(0,n.useState)(()=>Be(t)),{year:B,month:R,day:_}=w,M=(0,n.useCallback)(({value:Y})=>{T(ge=>He(C({},ge),{month:Y}))},[]),be=(0,n.useCallback)(Y=>{T(ge=>He(C({},ge),{year:Y}))},[]),ne=(0,n.useCallback)(Y=>{T(ge=>He(C({},ge),{day:Y}))},[]),fe=(0,n.useCallback)(()=>{const Y=[w.year,w.month+1,w.day].map(ge=>String(ge).padStart(2,"0")).join("-");c==null||c(Y)},[w.day,w.month,w.year,c]),Ye=(0,n.useMemo)(()=>{const Y=Array.from({length:42}),ge=ct(B,R,1);let Ee=_;const ie=st(B,R);return Ee=Ee<ie?Ee:ie,Y.forEach((Se,Ce)=>{if(Ce>=ge&&Ce<ie+ge){const De=Ce-ge+1;Y[Ce]=n.createElement(W,{key:Ce,onClick:()=>{ne(De)}},n.createElement($e,{active:De===Ee},De))}else Y[Ce]=n.createElement(W,{key:Ce})}),Y},[_,ne,R,B]);return n.createElement(P,{className:e,ref:k,shadow:v,style:{margin:20}},n.createElement(l,null,n.createElement("span",{role:"img","aria-label":"\u{1F4C6}"},"\u{1F4C6}"),"Date"),n.createElement(a,null,n.createElement(_r,{noPadding:!0,style:{justifyContent:"space-between"}},n.createElement(An,{options:Oe,value:R,onChange:M,width:128,menuMaxHeight:200}),n.createElement(mn,{value:B,onChange:be,width:100})),n.createElement(I,null,n.createElement(Q,null,n.createElement(W,null,"S"),n.createElement(W,null,"M"),n.createElement(W,null,"T"),n.createElement(W,null,"W"),n.createElement(W,null,"T"),n.createElement(W,null,"F"),n.createElement(W,null,"S")),n.createElement(Te,null,Ye)),n.createElement(_r,{noPadding:!0,style:{justifyContent:"space-between"}},n.createElement(z,{fullWidth:!0,onClick:p,disabled:!p},"Cancel"),n.createElement(z,{fullWidth:!0,onClick:c?fe:void 0,disabled:!c},"OK"))))});je.displayName="DatePicker";const me=e=>{switch(e){case"status":case"well":return(0,i.iv)`
        ${ye({style:"status"})}
      `;case"window":case"outside":return(0,i.iv)`
        ${ye({style:"window"})}
      `;case"field":return(0,i.iv)`
        ${ye({style:"field"})}
      `;default:return(0,i.iv)`
        ${ye()}
      `}},lt=i.ZP.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>me(e)}
  ${({variant:e})=>pe(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ne=(0,n.forwardRef)((k,v)=>{var w=k,{children:e,shadow:t=!1,variant:c="window"}=w,p=ve(w,["children","shadow","variant"]);return n.createElement(lt,C({ref:v,shadow:t,variant:c},p),e)});Ne.displayName="Frame";const St=i.ZP.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&(0,i.iv)`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&ee()}
`,mt=i.ZP.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,xt=(0,n.forwardRef)((w,k)=>{var T=w,{label:e,disabled:t=!1,variant:c="default",children:p}=T,v=ve(T,["label","disabled","variant","children"]);return n.createElement(St,C({"aria-disabled":t,$disabled:t,variant:c,ref:k},v),e&&n.createElement(mt,{variant:c},e),p)});xt.displayName="GroupBox";const hr=i.ZP.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${te(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;hr.displayName="Handle";const wr="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Kt=i.ZP.div`
  display: inline-block;
  height: ${({size:e})=>te(e)};
  width: ${({size:e})=>te(e)};
`,ir=i.ZP.span`
  display: block;
  background: ${wr};
  background-size: cover;
  width: 100%;
  height: 100%;
`,mr=(0,n.forwardRef)((p,c)=>{var v=p,{size:e=30}=v,t=ve(v,["size"]);return n.createElement(Kt,C({size:e,ref:c},t),n.createElement(ir,null))});mr.displayName="Hourglass";const kr=i.ZP.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,_t=i.ZP.div`
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
`,sr=(0,i.ZP)(J).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Vt=i.ZP.div`
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
`,Dr=(0,n.forwardRef)((v,p)=>{var k=v,{backgroundStyles:e,children:t}=k,c=ve(k,["backgroundStyles","children"]);return n.createElement(kr,C({ref:p},c),n.createElement(_t,null,n.createElement(tr,null,n.createElement(sr,{style:e},t)),n.createElement(Vt,null)))});Dr.displayName="Monitor";const rr=i.ZP.div`
  display: inline-block;
  height: ${L.md};
  width: 100%;
`,Yt=(0,i.ZP)(J)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,$r=(0,i.iv)`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Er=i.ZP.div`
  position: relative;
  top: 4px;
  ${$r}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Ir=i.ZP.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${$r}
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
`,ce=(0,n.forwardRef)((w,k)=>{var T=w,{hideValue:e=!1,shadow:t=!0,value:c,variant:p="default"}=T,v=ve(T,["hideValue","shadow","value","variant"]);const B=e?null:`${c}%`,R=(0,n.useRef)(null),[_,M]=(0,n.useState)([]),be=(0,n.useCallback)(()=>{if(!R.current||c===void 0)return;const ne=R.current.getBoundingClientRect().width,fe=Math.round(c/100*ne/Z);M(Array.from({length:fe}))},[c]);return(0,n.useEffect)(()=>(be(),window.addEventListener("resize",be),()=>window.removeEventListener("resize",be)),[be]),n.createElement(rr,C({"aria-valuenow":c!==void 0?Math.round(c):void 0,ref:k,role:"progressbar",variant:p},v),n.createElement(Yt,{variant:p,shadow:t},p==="default"?n.createElement(n.Fragment,null,n.createElement(Er,{"data-testid":"defaultProgress1"},B),n.createElement(Ir,{"data-testid":"defaultProgress2",value:c},B)):n.createElement(U,{ref:R,"data-testid":"tileProgress"},_.map((ne,fe)=>n.createElement(j,{key:fe})))))});ce.displayName="ProgressBar";const b=(0,i.iv)`
  width: ${Ge}px;
  height: ${Ge}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Ue=(0,i.ZP)(J)`
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
`,O=i.ZP.div`
  ${Ve()}
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
`,vt=i.ZP.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,_e={flat:O,default:Ue},Ke=(0,n.forwardRef)((R,B)=>{var _=R,{checked:e,className:t="",disabled:c=!1,label:p="",onChange:v,style:k={},variant:w="default"}=_,T=ve(_,["checked","className","disabled","label","onChange","style","variant"]);const M=_e[w];return n.createElement(we,{$disabled:c,className:t,style:k},n.createElement(M,{$disabled:c,role:"presentation"},e&&n.createElement(vt,{$disabled:c,variant:w})),n.createElement(rt,C({disabled:c,onChange:c?void 0:v,readOnly:c,type:"radio",checked:e,ref:B},T)),p&&n.createElement(ht,null,p))});Ke.displayName="Radio";const ue=typeof window!="undefined"?n.useLayoutEffect:n.useEffect;function bt(e){const t=n.useRef(e);return ue(()=>{t.current=e}),n.useCallback((...c)=>(0,t.current)(...c),[])}function Ft(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Me(e,t){return(0,n.useMemo)(()=>e==null&&t==null?null:c=>{Ft(e,c),Ft(t,c)},[e,t])}var Bt=y(73935);let Fe=!0,Ct=!1,Sr;const Dt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Zr(e){if("type"in e){const{type:t,tagName:c}=e;if(c==="INPUT"&&Dt[t]&&!e.readOnly||c==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Or(e){e.metaKey||e.altKey||e.ctrlKey||(Fe=!0)}function Wt(){Fe=!1}function oe(){this.visibilityState==="hidden"&&Ct&&(Fe=!0)}function At(e){e.addEventListener("keydown",Or,!0),e.addEventListener("mousedown",Wt,!0),e.addEventListener("pointerdown",Wt,!0),e.addEventListener("touchstart",Wt,!0),e.addEventListener("visibilitychange",oe,!0)}function Wr(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(c){}return Fe||Zr(t)}function Gr(){Ct=!0,window.clearTimeout(Sr),Sr=window.setTimeout(()=>{Ct=!1},100)}function br(){const e=(0,n.useCallback)(t=>{const c=(0,Bt.findDOMNode)(t);c!=null&&At(c.ownerDocument)},[]);return{isFocusVisible:Wr,onBlurVisible:Gr,ref:e}}function Vn(e,t,c){return(c-t)*e+t}function sn(e,t){if(t!==void 0&&"changedTouches"in e){for(let c=0;c<e.changedTouches.length;c+=1){const p=e.changedTouches[c];if(p.identifier===t)return{x:p.clientX,y:p.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function ln(e){return e&&e.ownerDocument||document}function jn(e,t){var c;const{index:p}=(c=e.reduce((v,k,w)=>{const T=Math.abs(t-k);return v===null||T<v.distance||T===v.distance?{distance:T,index:w}:v},null))!==null&&c!==void 0?c:{};return p!=null?p:-1}const Un=i.ZP.div`
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

  ${({orientation:e,size:t})=>e==="vertical"?(0,i.iv)`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:c})=>c?"41px":"39px"};
          }
        `:(0,i.iv)`
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
`,Dn=()=>(0,i.iv)`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?(0,i.iv)`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:(0,i.iv)`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,_n=(0,i.ZP)(J)`
  ${Dn()}
`,Wn=(0,i.ZP)(J)`
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
  ${({orientation:e})=>e==="vertical"?(0,i.iv)`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:(0,i.iv)`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?(0,i.iv)`
          ${Ve()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:(0,i.iv)`
          ${pe()}
          ${ye()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&ft({mainColor:t.material,secondaryColor:t.borderLightest})}
`,zr=6,qn=i.ZP.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?(0,i.iv)`
          right: ${-zr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${zr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:(0,i.iv)`
          bottom: ${-zr}px;
          height: ${zr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&(0,i.iv)`
      ${ee()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,Kn=i.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?(0,i.iv)`
          transform: translate(${zr+2}px, ${zr+1}px);
        `:(0,i.iv)`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Yn=(0,n.forwardRef)((Y,Ye)=>{var ge=Y,{defaultValue:e,disabled:t=!1,marks:c=!1,max:p=100,min:v=0,name:k,onChange:w,onChangeCommitted:T,onMouseDown:B,orientation:R="horizontal",size:_="100%",step:M=1,value:be,variant:ne="default"}=ge,fe=ve(ge,["defaultValue","disabled","marks","max","min","name","onChange","onChangeCommitted","onMouseDown","orientation","size","step","value","variant"]);const Ee=ne==="flat"?Wn:_n,ie=R==="vertical",[Se=v,Ce]=le({defaultValue:e,onChange:w!=null?w:T,value:be}),{isFocusVisible:De,onBlurVisible:Pt,ref:nr}=br(),[jt,Xt]=(0,n.useState)(!1),Ht=(0,n.useRef)(),wt=(0,n.useRef)(null),Zt=Me(nr,Ht),Gt=Me(Ye,Zt),Jt=bt(Pe=>{De(Pe)&&Xt(!0)}),or=bt(()=>{jt!==!1&&(Xt(!1),Pt())}),Ut=(0,n.useRef)(),zt=(0,n.useMemo)(()=>c===!0&&Number.isFinite(M)?[...Array(Math.round((p-v)/M)+1)].map((Pe,ze)=>({label:void 0,value:v+M*ze})):Array.isArray(c)?c:[],[c,p,v,M]),Cr=bt(Pe=>{const ze=(p-v)/10,ut=zt.map(se=>se.value),et=ut.indexOf(Se);let E=0;switch(Pe.key){case"Home":E=v;break;case"End":E=p;break;case"PageUp":M&&(E=Se+ze);break;case"PageDown":M&&(E=Se-ze);break;case"ArrowRight":case"ArrowUp":M?E=Se+M:E=ut[et+1]||ut[ut.length-1];break;case"ArrowLeft":case"ArrowDown":M?E=Se-M:E=ut[et-1]||ut[0];break;default:return}Pe.preventDefault(),M&&(E=q(E,M,v)),E=g(E,v,p),Ce(E),Xt(!0),w==null||w(E),T==null||T(E)}),it=(0,n.useCallback)(Pe=>{if(!Ht.current)return 0;const ze=Ht.current.getBoundingClientRect();let ut;ie?ut=(ze.bottom-Pe.y)/ze.height:ut=(Pe.x-ze.left)/ze.width;let et;if(et=Vn(ut,v,p),M)et=q(et,M,v);else{const E=zt.map(We=>We.value),se=jn(E,et);et=E[se]}return et=g(et,v,p),et},[zt,p,v,M,ie]),Nt=bt(Pe=>{var ze;const ut=sn(Pe,Ut.current);if(!ut)return;const et=it(ut);(ze=wt.current)===null||ze===void 0||ze.focus(),Ce(et),Xt(!0),w==null||w(et)}),qt=bt(Pe=>{const ze=sn(Pe,Ut.current);if(!ze)return;const ut=it(ze);T==null||T(ut),Ut.current=void 0;const et=ln(Ht.current);et.removeEventListener("mousemove",Nt),et.removeEventListener("mouseup",qt),et.removeEventListener("touchmove",Nt),et.removeEventListener("touchend",qt)}),Rr=bt(Pe=>{var ze;B==null||B(Pe),Pe.preventDefault(),(ze=wt.current)===null||ze===void 0||ze.focus(),Xt(!0);const ut=sn(Pe,Ut.current);if(ut){const E=it(ut);Ce(E),w==null||w(E)}const et=ln(Ht.current);et.addEventListener("mousemove",Nt),et.addEventListener("mouseup",qt)}),yr=bt(Pe=>{var ze;Pe.preventDefault();const ut=Pe.changedTouches[0];ut!=null&&(Ut.current=ut.identifier),(ze=wt.current)===null||ze===void 0||ze.focus(),Xt(!0);const et=sn(Pe,Ut.current);if(et){const se=it(et);Ce(se),w==null||w(se)}const E=ln(Ht.current);E.addEventListener("touchmove",Nt),E.addEventListener("touchend",qt)});return(0,n.useEffect)(()=>{const{current:Pe}=Ht;Pe==null||Pe.addEventListener("touchstart",yr);const ze=ln(Pe);return()=>{Pe==null||Pe.removeEventListener("touchstart",yr),ze.removeEventListener("mousemove",Nt),ze.removeEventListener("mouseup",qt),ze.removeEventListener("touchmove",Nt),ze.removeEventListener("touchend",qt)}},[qt,Nt,yr]),n.createElement(Un,C({$disabled:t,hasMarks:!!zt.length,isFocused:jt,onMouseDown:Rr,orientation:R,ref:Gt,size:te(_)},fe),n.createElement("input",{disabled:t,name:k,type:"hidden",value:Se!=null?Se:0}),zt&&zt.map(Pe=>n.createElement(qn,{$disabled:t,"data-testid":"tick",key:Pe.value/(p-v)*100,orientation:R,style:{[ie?"bottom":"left"]:`${(Pe.value-v)/(p-v)*100}%`}},Pe.label&&n.createElement(Kn,{"aria-hidden":!0,"data-testid":"mark",orientation:R},Pe.label))),n.createElement(Ee,{orientation:R,variant:ne}),n.createElement(Gn,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":R,"aria-valuemax":p,"aria-valuemin":v,"aria-valuenow":Se,onBlur:or,onFocus:Jt,onKeyDown:Cr,orientation:R,ref:wt,role:"slider",style:{[ie?"bottom":"left"]:`${(ie?-100:0)+100*(Se-v)/(p-v)}%`},tabIndex:t?void 0:0,variant:ne}))});Yn.displayName="Slider";const Xn=i.ZP.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Re};
  overflow-y: auto;
`,Jn=(0,n.forwardRef)(function(v,p){var k=v,{children:t}=k,c=ve(k,["children"]);return n.createElement(Xn,C({ref:p},c),t)});Jn.displayName="TableBody";const eo=i.ZP.td`
  padding: 0 8px;
`,to=(0,n.forwardRef)(function(v,p){var k=v,{children:t}=k,c=ve(k,["children"]);return n.createElement(eo,C({ref:p},c),t)});to.displayName="TableDataCell";const ro=i.ZP.thead`
  display: table-header-group;
`,no=(0,n.forwardRef)(function(v,p){var k=v,{children:t}=k,c=ve(k,["children"]);return n.createElement(ro,C({ref:p},c),t)});no.displayName="TableHead";const oo=i.ZP.th`
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
    ${ye()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&(0,i.iv)`
      &:active {
        &:before {
          ${ye({invert:!0,style:"window"})}
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
  ${({$disabled:e})=>e&&ee()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&ee()}
  }
`,ao=(0,n.forwardRef)(function(B,T){var R=B,{disabled:t=!1,children:c,onClick:p,onTouchStart:v=d,sort:k}=R,w=ve(R,["disabled","children","onClick","onTouchStart","sort"]);const _=k==="asc"?"ascending":k==="desc"?"descending":void 0;return n.createElement(oo,C({$disabled:t,"aria-disabled":t,"aria-sort":_,onClick:t?void 0:p,onTouchStart:t?void 0:v,ref:T},w),n.createElement("div",null,c))});ao.displayName="TableHeadCell";const io=i.ZP.tr`
  color: inherit;
  display: table-row;
  height: calc(${L.md} - 2px);
  line-height: calc(${L.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,so=(0,n.forwardRef)(function(v,p){var k=v,{children:t}=k,c=ve(k,["children"]);return n.createElement(io,C({ref:p},c),t)});so.displayName="TableRow";const lo=i.ZP.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,co=(0,i.ZP)(J)`
  &:before {
    box-shadow: none;
  }
`,uo=(0,n.forwardRef)((p,c)=>{var v=p,{children:e}=v,t=ve(v,["children"]);return n.createElement(co,null,n.createElement(lo,C({ref:c},t),e))});uo.displayName="Table";const fo=i.ZP.button`
  ${pe()}
  ${ye()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${L.md};
  line-height: ${L.md};
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
    ${Xe}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${L.md} + 4px);
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
`,po=(0,n.forwardRef)((w,k)=>{var T=w,{value:e,onClick:t,selected:c=!1,children:p}=T,v=ve(T,["value","onClick","selected","children"]);return n.createElement(fo,C({"aria-selected":c,selected:c,onClick:B=>t==null?void 0:t(e,B),ref:k,role:"tab"},v),p)});po.displayName="Tab";const ho=i.ZP.div`
  ${pe()}
  ${ye()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,mo=(0,n.forwardRef)((p,c)=>{var v=p,{children:e}=v,t=ve(v,["children"]);return n.createElement(ho,C({ref:c},t),e)});mo.displayName="TabBody";const bo=i.ZP.div`
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
`;function vo(e,t){const c=[];for(let p=t;p>0;p-=1)c.push(e.splice(0,Math.ceil(e.length/p)));return c}const yo=(0,n.forwardRef)((w,k)=>{var T=w,{value:e,onChange:t=d,children:c,rows:p=1}=T,v=ve(T,["value","onChange","children","rows"]);const B=(0,n.useMemo)(()=>{var R;const _=(R=n.Children.map(c,ne=>{if(!n.isValidElement(ne))return null;const fe={selected:ne.props.value===e,onClick:t};return n.cloneElement(ne,fe)}))!==null&&R!==void 0?R:[],M=vo(_,p).map((ne,fe)=>({key:fe,tabs:ne})),be=M.findIndex(ne=>ne.tabs.some(fe=>fe.props.selected));return M.push(M.splice(be,1)[0]),M},[c,t,p,e]);return n.createElement(bo,He(C({},v),{isMultiRow:p>1,role:"tablist",ref:k}),B.map(R=>n.createElement(go,{key:R.key},R.tabs)))});yo.displayName="Tabs";const xo=["blur","focus"],Ao=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function In(e){return"nativeEvent"in e&&xo.includes(e.type)}function On(e){return"nativeEvent"in e&&Ao.includes(e.type)}const wo={top:`top: -4px;
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
  box-shadow: ${ke};
  text-align: center;
  font-size: 1rem;
  ${e=>wo[e.position]}
`,$o=i.ZP.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Eo=(0,n.forwardRef)((ge,Y)=>{var Ee=ge,{className:e,children:t,disableFocusListener:c=!1,disableMouseListener:p=!1,enterDelay:v=1e3,leaveDelay:k=0,onBlur:w,onClose:T,onFocus:B,onMouseEnter:R,onMouseLeave:_,onOpen:M,style:be,text:ne,position:fe="top"}=Ee,Ye=ve(Ee,["className","children","disableFocusListener","disableMouseListener","enterDelay","leaveDelay","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","onOpen","style","text","position"]);const[ie,Se]=(0,n.useState)(!1),[Ce,De]=(0,n.useState)(),[Pt,nr]=(0,n.useState)(),jt=!c,Xt=!p,Ht=it=>{window.clearTimeout(Ce),window.clearTimeout(Pt);const Nt=window.setTimeout(()=>{Se(!0),M==null||M(it)},v);De(Nt)},wt=it=>{it.persist(),In(it)?B==null||B(it):On(it)&&(R==null||R(it)),Ht(it)},Zt=it=>{window.clearTimeout(Ce),window.clearTimeout(Pt);const Nt=window.setTimeout(()=>{Se(!1),T==null||T(it)},k);nr(Nt)},Gt=it=>{it.persist(),In(it)?w==null||w(it):On(it)&&(_==null||_(it)),Zt(it)},Jt=jt?Gt:void 0,or=jt?wt:void 0,Ut=Xt?wt:void 0,zt=Xt?Gt:void 0,Cr=jt?0:void 0;return n.createElement($o,{"data-testid":"tooltip-wrapper",onBlur:Jt,onFocus:or,onMouseEnter:Ut,onMouseLeave:zt,tabIndex:Cr},n.createElement(ko,C({className:e,"data-testid":"tooltip",position:fe,ref:Y,show:ie,style:be},Ye),ne),t)});Eo.displayName="Tooltip";const kn=(0,i.ZP)(ht)`
  white-space: nowrap;
`,Rn=(0,i.iv)`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":(0,i.iv)`
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

  ${({isRootLevel:e})=>e&&(0,i.iv)`
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

  ${({isRootLevel:e})=>e?(0,i.iv)`
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
        `:(0,i.iv)`
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
`,Ln=(0,i.ZP)(we)`
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
`;function Bn(e,t){return e.includes(t)?e.filter(c=>c!==t):[...e,t]}function Nn(e){e.preventDefault()}function Mn({className:e,disabled:t,expanded:c,innerRef:p,level:v,select:k,selected:w,style:T,tree:B=[]}){const R=v===0,_=(0,n.useCallback)(M=>{var be,ne;const fe=!!(M.items&&M.items.length>0),Ye=c.includes(M.id),Y=(be=t||M.disabled)!==null&&be!==void 0?be:!1,ge=Y?Nn:Ce=>k(Ce,M),Ee=Y?Nn:Ce=>k(Ce,M),ie=w===M.id,Se=n.createElement(Do,{"aria-hidden":!0},M.icon);return n.createElement(Co,{key:M.label,isRootLevel:R,role:"treeitem","aria-expanded":Ye,"aria-selected":ie,hasItems:fe},fe?n.createElement(Po,{open:Ye},n.createElement(To,{onClick:ge,$disabled:Y},n.createElement(Ln,{$disabled:Y},Se,n.createElement(kn,null,M.label))),Ye&&n.createElement(Mn,{className:e,disabled:Y,expanded:c,level:v+1,select:k,selected:w,style:T,tree:(ne=M.items)!==null&&ne!==void 0?ne:[]})):n.createElement(Ln,{as:"button",$disabled:Y,onClick:Ee},Se,n.createElement(kn,null,M.label)))},[e,t,c,R,v,k,w,T]);return n.createElement(So,{className:R?e:void 0,style:R?T:void 0,ref:R?p:void 0,role:R?"tree":"group",isRootLevel:R},B.map(_))}function Io({className:e,defaultExpanded:t=[],defaultSelected:c,disabled:p=!1,expanded:v,onNodeSelect:k,onNodeToggle:w,selected:T,style:B,tree:R=[]},_){const[M,be]=le({defaultValue:t,onChange:w,onChangePropName:"onNodeToggle",value:v,valuePropName:"expanded"}),[ne,fe]=le({defaultValue:c,onChange:k,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),Ye=(0,n.useCallback)((Ee,ie)=>{if(w){const Se=Bn(M,ie);w(Ee,Se)}be(Se=>Bn(Se,ie))},[M,w,be]),Y=(0,n.useCallback)((Ee,ie)=>{fe(ie),k&&k(Ee,ie)},[k,fe]),ge=(0,n.useCallback)((Ee,ie)=>{Ee.preventDefault(),Y(Ee,ie.id),ie.items&&ie.items.length&&Ye(Ee,ie.id)},[Y,Ye]);return n.createElement(Mn,{className:e,disabled:p,expanded:M,level:0,innerRef:_,select:ge,selected:ne,style:B,tree:R})}const Oo=(0,n.forwardRef)(Io);Oo.displayName="TreeView";const No=null,Mo=null,Fo=null,Ho=null,Zo=null,zo=null,Qo=null,Vo=null,jo=null,Uo=null,_o=null,Wo=null,Go=null}}]);
}());