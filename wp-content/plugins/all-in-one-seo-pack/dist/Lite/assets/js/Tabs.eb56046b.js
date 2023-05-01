import{S as st}from"./SaveChanges.bc66cd69.js";import{T as lt}from"./TruSeoScore.76897846.js";import{a as ut,m as ct}from"./vuex.esm-bundler.8589b2dd.js";import{B as dt,e as ft,a as vt}from"./Caret.42a820e0.js";import{S as pt}from"./Information.a08d0ef0.js";import{_ as Ae,c as k,o as b,f as C,D as be,P as Ne,J as fe,Q as De,R as ht,B as D,S as Ie,U as Re,I as mt,L as bt,E as S,A as ye,M as yt,V as gt,K as ge,N as y,W as wt,x as N,n as z,p as q,X as Oe,q as ve,T as Tt,h as H,w as F,m as St,k as Ct,v as kt,d as Y,e as j,t as V,g as Se,a as B,r as E,F as se,i as le}from"./_plugin-vue_export-helper.2d9794a3.js";import{T as Mt}from"./Slide.cd756e61.js";const _t={},$t={viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-ellipse"},Lt=C("circle",{r:"2",transform:"matrix(-1 0 0 1 3 3)",fill:"currentColor",stroke:"currentColor","stroke-width":"2"},null,-1),Et=[Lt];function zt(e,t){return b(),k("svg",$t,Et)}const Pt=Ae(_t,[["render",zt]]);var xe={locks:{},zIndex:2e3,enableRipple:!0};be(xe);const Ve=be(xe),L=e=>typeof e=="string",Bt=e=>typeof e=="boolean",we=e=>typeof e=="number",Wt=e=>typeof e=="function",Fe=e=>Array.isArray(e),Xe=e=>e==null?0:L(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):Bt(e)?Number(e):e,Ce=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},At=()=>typeof window<"u";var ke=e=>e,Nt=()=>typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:self;function Dt(e,t){throw Error("Varlet ["+e+"]: "+t)}function It(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function Rt(e){var t="scrollLeft"in e?e.scrollLeft:e.pageXOffset;return Math.max(t,0)}function Ot(e){for(var t=e;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){var n=/(scroll|auto)/,{overflowY:r,overflow:i}=window.getComputedStyle(t);if(n.test(r)||n.test(i))return t}return window}function Me(){var{innerWidth:e,innerHeight:t}=window;return e>t?{vMin:t,vMax:e}:{vMin:e,vMax:t}}var Ye=e=>L(e)&&e.endsWith("rem"),xt=e=>L(e)&&e.endsWith("px")||we(e),Vt=e=>L(e)&&e.endsWith("%"),He=e=>L(e)&&e.endsWith("vw"),Ue=e=>L(e)&&e.endsWith("vh"),qe=e=>L(e)&&e.endsWith("vmin"),Ke=e=>L(e)&&e.endsWith("vmax"),Ft=e=>L(e)&&e.startsWith("calc("),Xt=e=>L(e)&&e.startsWith("var("),je=e=>{if(we(e))return e;if(xt(e))return+e.replace("px","");if(He(e))return+e.replace("vw","")*window.innerWidth/100;if(Ue(e))return+e.replace("vh","")*window.innerHeight/100;if(Ye(e)){var t=+e.replace("rem",""),n=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(n)}return qe(e)?Me().vMin:Ke(e)?Me().vMax:L(e)?Xe(e):0},Yt=e=>{if(e!=null)return Vt(e)||He(e)||Ue(e)||Ye(e)||Ft(e)||Xt(e)||qe(e)||Ke(e)?e:je(e)+"px"};function K(e){var t=Nt();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e,16)}function Ge(){return new Promise(e=>{K(()=>{K(e)})})}function Ht(){return new Promise(e=>{K(e)})}function _e(e,t){var{top:n=0,left:r=0,duration:i=300,animation:a}=t,o=Date.now(),l=It(e),s=Rt(e);return new Promise(u=>{var f=()=>{var p=(Date.now()-o)/i;if(p<1){var g=l+(n-l)*a(p),c=s+(r-s)*a(p);e.scrollTo(c,g),K(f)}else e.scrollTo(r,n),u()};K(f)})}function Ut(){var e=typeof window<"u";return e&&"ontouchstart"in window}function Ze(e){let t=!1;Ne(()=>{e(),fe(()=>{t=!0})}),De(()=>{t&&e()})}function pe(e,t,n,r={}){if(!At())return;const{passive:i=!1,capture:a=!1}=r;let o=!1,l=!1;const s=c=>Wt(c)?c():mt(c),u=c=>{if(o||l)return;const h=s(c);h&&(h.addEventListener(t,n,{passive:i,capture:a}),o=!0)},f=c=>{if(!o||l)return;const h=s(c);h&&(h.removeEventListener(t,n,{capture:a}),o=!1)};let p;ht(e)&&(p=D(()=>e.value,(c,h)=>{f(h),u(c)}));const g=()=>{p==null||p(),f(e),l=!0};return Ze(()=>{u(e)}),Ie(()=>{f(e)}),Re(()=>{f(e)}),g}var qt=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Kt(e){const t=ye();return e in t.provides}function jt(e){if(!Kt(e))return{index:null,parentProvider:null,bindParent:null};const t=bt(e),{childInstances:n,collect:r,clear:i}=t,a=qt(t,["childInstances","collect","clear"]),o=ye();return{index:S(()=>n.indexOf(o)),parentProvider:a,bindParent:u=>{Ne(()=>{fe().then(()=>{r(o,u)})}),Ie(()=>{fe().then(()=>{i(o,u)})})}}}function Gt(e){const t=[],n=r=>{if(r!=null&&r.component){n(r==null?void 0:r.component.subTree);return}Array.isArray(r==null?void 0:r.children)&&r.children.forEach(i=>{gt(i)&&(t.push(i),n(i))})};return n(e),t}function Zt(e){const t=ye(),n=be([]),r=[],i=S(()=>n.length),a=()=>{const u=Gt(t.subTree);n.sort((f,p)=>u.indexOf(f.vnode)-u.indexOf(p.vnode))},o=(u,f)=>{n.push(u),r.push(f),a()},l=(u,f)=>{Ce(n,u),Ce(r,f)};return{length:i,childProviders:r,bindChildren:u=>{yt(e,Object.assign({childInstances:n,collect:o,clear:l},u))}}}function ue(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=e[r],n),{}):e[t]}function ne(e){var t="var",n=t+"-"+e,r=a=>a?a[0]==="$"?a.replace("$",t):a.startsWith("--")?""+n+a:n+"__"+a:n,i=function(){for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return o.map(s=>{if(Fe(s)){var[u,f,p=null]=s;return u?f:p}return s})};return{n:r,classes:i}}function X(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(Fe(e))return e.map(i=>i(...n));if(e)return e(...n)}function U(e){return{type:[Function,Array],default:e}}function Jt(e,t){return e===!1?null:(e===!0&&t&&(e=t),"var-elevation--"+e)}function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}var{n:Je}=ne("ripple"),$e=250;function Qt(e){var{zIndex:t,position:n}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",n==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function en(e,t){var{top:n,left:r}=e.getBoundingClientRect(),{clientWidth:i,clientHeight:a}=e,o=Math.sqrt(Math.pow(i,2)+Math.pow(a,2))/2,l=o*2,s=t.touches[0].clientX-r,u=t.touches[0].clientY-n,f=(i-o*2)/2,p=(a-o*2)/2,g=s-o,c=u-o;return{x:g,y:c,centerX:f,centerY:p,size:l}}function Qe(e){var t=this._ripple;if(t.removeRipple(),!(t.disabled||t.tasker||!Ve.enableRipple)){var n=()=>{t.tasker=null;var{x:r,y:i,centerX:a,centerY:o,size:l}=en(this,e),s=document.createElement("div");s.classList.add(Je()),s.style.opacity="0",s.style.transform="translate("+r+"px, "+i+"px) scale3d(.3, .3, .3)",s.style.width=l+"px",s.style.height=l+"px",t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),Qt(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform="translate("+a+"px, "+o+"px) scale3d(1, 1, 1)",s.style.opacity=".25"},20)};t.tasker=window.setTimeout(n,30)}}function he(){var e=this._ripple,t=()=>{var n=this.querySelectorAll("."+Je());if(n.length){var r=n[n.length-1],i=$e-performance.now()+Number(r.dataset.createdAt);window.setTimeout(()=>{r.style.opacity="0",window.setTimeout(()=>{var a;return(a=r.parentNode)==null?void 0:a.removeChild(r)},$e)},i)}};e.tasker?window.setTimeout(t,30):t()}function et(){if(!(!Ut()||!Ve.enableRipple)){var e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}}function tn(e,t){var n;e._ripple=te({tasker:null},(n=t.value)!=null?n:{},{removeRipple:he.bind(e)}),e.addEventListener("touchstart",Qe,{passive:!0}),e.addEventListener("touchmove",et,{passive:!0}),e.addEventListener("dragstart",he,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function nn(e){e.removeEventListener("touchstart",Qe),e.removeEventListener("touchmove",et),e.removeEventListener("dragstart",he),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function rn(e,t){var n,r,i,a,o={color:(n=t.value)==null?void 0:n.color,disabled:(r=t.value)==null?void 0:r.disabled},l=o.color!==((i=e._ripple)==null?void 0:i.color)||o.disabled!==((a=e._ripple)==null?void 0:a.disabled);if(l){var s,u;e._ripple=te({tasker:o.disabled?null:(s=e._ripple)==null?void 0:s.tasker,removeRipple:(u=e._ripple)==null?void 0:u.removeRipple},o)}}var an={mounted:tn,unmounted:nn,updated:rn,install(e){e.directive("ripple",this)}};const tt=an;var Z={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},onScroll:U()};function Le(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function Ee(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){Le(a,r,i,o,l,"next",s)}function l(s){Le(a,r,i,o,l,"throw",s)}o(void 0)})}}var{n:on,classes:sn}=ne("sticky");function ln(e,t){return b(),k("div",{class:z(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:q({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?e.offsetTop+"px":void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[C("div",{class:z(e.n("wrapper")),ref:"wrapperEl",style:q({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[N(e.$slots,"default")],6)],6)}var nt=ge({name:"VarSticky",props:Z,setup(e){var t=y(null),n=y(null),r=y(!1),i=y("0px"),a=y("0px"),o=y("auto"),l=y("auto"),s=y("auto"),u=y("auto"),f=S(()=>!e.disabled&&e.cssMode),p=S(()=>!e.disabled&&!e.cssMode&&r.value),g=S(()=>je(e.offsetTop)),c,h=()=>{var{cssMode:w,disabled:W}=e;if(!W){var A=0;if(c!==window){var{top:R}=c.getBoundingClientRect();A=R}var O=n.value,$=t.value,{top:re,left:ie}=$.getBoundingClientRect(),v=re-A;return v<=g.value?(w||(o.value=$.offsetWidth+"px",l.value=$.offsetHeight+"px",i.value=A+g.value+"px",a.value=ie+"px",s.value=O.offsetWidth+"px",u.value=O.offsetHeight+"px",r.value=!0),{offsetTop:g.value,isFixed:!0}):(r.value=!1,{offsetTop:v,isFixed:!1})}},M=()=>{if(c){var w=h();w&&X(e.onScroll,w.offsetTop,w.isFixed)}},d=function(){var w=Ee(function*(){r.value=!1,yield Ht(),h()});return function(){return w.apply(this,arguments)}}(),_=function(){var w=Ee(function*(){yield Ge(),c=Ot(t.value),c!==window&&c.addEventListener("scroll",M),M()});return function(){return w.apply(this,arguments)}}(),P=()=>{c!==window&&c.removeEventListener("scroll",M)};return D(()=>e.disabled,d),Ze(_),wt(P),Re(P),pe(()=>window,"scroll",M),pe(()=>window,"resize",d),{n:on,classes:sn,resize:d,stickyEl:t,wrapperEl:n,isFixed:r,offsetTop:g,fixedTop:i,fixedLeft:a,fixedWidth:o,fixedHeight:l,fixedWrapperWidth:s,fixedWrapperHeight:u,enableCSSMode:f,enableFixedMode:p,toNumber:Xe}}});nt.render=ln;const J=nt;J.install=function(e){e.component(J.name,J)};var un={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:U()},rt=Symbol("TABS_BIND_TAB_KEY");function cn(){var{childProviders:e,bindChildren:t,length:n}=Zt(rt);return{length:n,tabList:e,bindTabList:t}}function dn(){var{parentProvider:e,bindParent:t,index:n}=jt(rt);return t||Dt("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:t}}var{n:G,classes:fn}=ne("tab");function vn(e,t){var n=Oe("ripple");return ve((b(),k("div",{class:z(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n("--"+e.itemDirection))),ref:"tabEl",style:q({color:e.computeColorStyle()}),onClick:t[0]||(t[0]=function(){return e.handleClick&&e.handleClick(...arguments)})},[N(e.$slots,"default")],6)),[[n,{disabled:e.disabled}]])}var it=ge({name:"VarTab",directives:{Ripple:tt},props:un,setup(e){var t=y(null),n=S(()=>e.name),r=S(()=>e.disabled),i=S(()=>t.value),{index:a,tabs:o,bindTabs:l}=dn(),{onTabClick:s,active:u,activeColor:f,inactiveColor:p,disabledColor:g,itemDirection:c,resize:h}=o,M={name:n,index:a,disabled:r,element:i};l(M);var d=()=>e.name!=null?u.value===e.name:u.value===(a==null?void 0:a.value),_=()=>e.disabled?g.value:d()?f.value:p.value,P=()=>e.disabled?G("$-tab--disabled"):d()?G("$-tab--active"):G("$-tab--inactive"),w=W=>{var{disabled:A,name:R,onClick:O}=e;A||(X(O,R??a.value,W),s(M))};return D(()=>e.name,h),D(()=>e.disabled,h),{n:G,classes:fn,tabEl:t,active:u,activeColor:f,inactiveColor:p,itemDirection:c,computeColorStyle:_,computeColorClass:P,handleClick:w}}});it.render=vn;const Q=it;Q.install=function(e){e.component(Q.name,Q)};function ze(e){return["horizontal","vertical"].includes(e)}function pn(e){return["auto","always"].includes(e)}function hn(e){return["normal","reverse"].includes(e)}var mn={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:ze},itemDirection:{type:String,default:"horizontal",validator:ze},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto",validator:pn},indicatorPosition:{type:String,default:"normal",validator:hn},safeArea:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},stickyCssMode:ue(Z,"cssMode"),stickyZIndex:ue(Z,"zIndex"),offsetTop:ue(Z,"offsetTop"),onClick:U(),onChange:U(),"onUpdate:active":U()};function Pe(e,t,n,r,i,a,o){try{var l=e[a](o),s=l.value}catch(u){n(u);return}l.done?t(s):Promise.resolve(s).then(r,i)}function Be(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(s){Pe(a,r,i,o,l,"next",s)}function l(s){Pe(a,r,i,o,l,"throw",s)}o(void 0)})}}var{n:bn,classes:yn}=ne("tabs");function gn(e,t){return b(),H(Ct(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:F(()=>[C("div",St({class:e.classes(e.n(),e.n("$--box"),e.n("--item-"+e.itemDirection),e.n("--layout-"+e.layoutDirection+"-padding"),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[C("div",{ref:"scrollerEl",class:z(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n("--layout-"+e.layoutDirection+"-scrollable")],e.n("--layout-"+e.layoutDirection)))},[N(e.$slots,"default"),C("div",{class:z(e.classes(e.n("indicator"),e.n("--layout-"+e.layoutDirection+e.indicatorPosition+"-indicator"))),style:q({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?"translateX("+e.indicatorX+")":"translateY("+e.indicatorY+")"})},[C("div",{class:z(e.classes(e.n("indicator-inner"),e.n("--layout-"+e.layoutDirection+"-indicator-inner"))),style:q({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}var at=ge({name:"VarTabs",components:{VarSticky:J},inheritAttrs:!1,props:mn,setup(e){var t=y("0px"),n=y("0px"),r=y("0px"),i=y("0px"),a=y(!1),o=y(null),l=S(()=>e.active),s=S(()=>e.indicatorPosition==="reverse"?"-reverse":""),u=S(()=>e.activeColor),f=S(()=>e.inactiveColor),p=S(()=>e.disabledColor),g=S(()=>e.itemDirection),c=y(null),{tabList:h,bindTabList:M,length:d}=cn(),_=v=>{var T,m=(T=v.name.value)!=null?T:v.index.value,{active:x,onChange:ae,onClick:oe}=e;X(e["onUpdate:active"],m),X(oe,m),m!==x&&X(ae,m)},P=()=>h.find(v=>{var{name:T}=v;return e.active===T.value}),w=v=>h.find(T=>{var{index:m}=T;return(v??e.active)===m.value}),W=()=>{if(d.value!==0){var{active:v}=e;if(we(v)){var T=v>d.value-1?d.value-1:0;return X(e["onUpdate:active"],T),w(T)}}},A=()=>{a.value=e.scrollable==="always"||h.length>=5},R=v=>{var{element:T}=v,m=T.value;m&&(e.layoutDirection==="horizontal"?(t.value=m.offsetWidth+"px",r.value=m.offsetLeft+"px"):(n.value=m.offsetHeight+"px",i.value=m.offsetTop+"px"))},O=v=>{var{element:T}=v;if(a.value){var m=o.value,x=T.value;if(e.layoutDirection==="horizontal"){var ae=x.offsetLeft+x.offsetWidth/2-m.offsetWidth/2;_e(m,{left:ae,animation:ke})}else{var oe=x.offsetTop+x.offsetHeight/2-m.offsetHeight/2;_e(m,{top:oe,animation:ke})}}},$=()=>{var v=P()||w()||W();!v||v.disabled.value||(A(),R(v),O(v))},re=function(){var v=Be(function*(){e.sticky&&c.value&&(yield c.value.resize())});return function(){return v.apply(this,arguments)}}(),ie={active:l,activeColor:u,inactiveColor:f,disabledColor:p,itemDirection:g,resize:$,onTabClick:_};return M(ie),D(()=>d.value,Be(function*(){yield Ge(),$()})),D(()=>e.active,$),D(()=>e.scrollable,$),De($),pe(()=>window,"resize",$),{stickyComponent:c,indicatorWidth:t,indicatorHeight:n,indicatorX:r,indicatorY:i,indicatorPosition:s,localScrollable:a,scrollerEl:o,Transition:Tt,toSizeUnit:Yt,n:bn,classes:yn,resize:$,resizeSticky:re,formatElevation:Jt}}});at.render=gn;const ee=at;ee.install=function(e){e.component(ee.name,ee)};const wn="ontouchstart"in window;let ce=!1,I;const ot=e=>e==="mousedown",Tn=e=>e==="mousemove",me=e=>e==="mouseup",Sn=e=>ot(e)||!I||I&&!I.dispatchEvent;function Cn(e,t,n){const{clientX:r,clientY:i,screenX:a,screenY:o,pageX:l,pageY:s}=n;this.identifier=t,this.target=e,this.clientX=r,this.clientY=i,this.screenX=a,this.screenY=o,this.pageX=l,this.pageY=s}function kn(e){const t=Te();return t.push(new Cn(I,1,e)),t}function Te(){const e=[];return e.item=function(t){return this[t]||null},e}function We(e){const{type:t}=e;return me(t)?Te():kn(e)}function Mn(e,t){const{altKey:n,ctrlKey:r,metaKey:i,shiftKey:a}=t,o=new Event(e,{bubbles:!0,cancelable:!0});o.altKey=n,o.ctrlKey=r,o.metaKey=i,o.shiftKey=a,o.touches=We(t),o.targetTouches=We(t),o.changedTouches=Te(),I.dispatchEvent(o)}function de(e,t){const{type:n,target:r}=e;ce=ot(n)?!0:me(n)?!1:ce,!(Tn(n)&&!ce)&&(Sn(n)&&(I=r),Mn(t,e),me(n)&&(I=null))}function _n(e){e.addEventListener("mousedown",t=>de(t,"touchstart"),!0),e.addEventListener("mousemove",t=>de(t,"touchmove"),!0),e.addEventListener("mouseup",t=>de(t,"touchend"),!0)}const $n={emits:["changed"],directives:{ripple:tt},components:{BaseButton:dt,SvgCaret:ft,SvgCircleCheck:vt,SvgCircleInformation:pt,SvgEllipse:Pt,TransitionSlide:Mt,VarTab:Q,VarTabs:ee},mixins:[st,lt],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:{saveChanges:this.$t.__("Save Changes",this.$td)}}},computed:{...ut(["loading","currentPost"]),activeTab(){var e;return this.active?this.active:this.$route&&this.$route.name?this.$route.name:(e=this.tabs[0])==null?void 0:e.slug},filteredTabs(){return this.tabs.filter(e=>e.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}},methods:{...ct(["openModal"]),maybeChangeTab(e){if(this.active){this.$emit("changed",e);return}const t=this.tabs.find(n=>n.slug===e);t&&this.$router.push(t.url)},getActiveTabName(){const e=this.tabs.find(t=>t.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return e?e.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let e=0;this.calculateWidth=!0,this.$nextTick(()=>{e=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let t=0;const n=this.$refs["tabs-button"];if(n){const r=n.querySelector(".aioseo-button");t=r?r.scrollWidth:0}if(e+t>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})}},beforeMount(){window.addEventListener("resize",this.maybeShowMobileMenu)},async mounted(){this.$nextTick(()=>{this.maybeShowMobileMenu();const e=this.$refs["aioseo-tabs"],t=e.querySelector(".var-tab--active"),n=e.querySelector(".var-tabs__indicator");if(!t||!n)return;setTimeout(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)},300),new MutationObserver(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)}).observe(n,{attributes:!0}),wn||_n(e)})},beforeUnmount(){window.removeEventListener("resize",this.maybeShowMobileMenu)}},Ln={class:"tabs-scroller",ref:"tabs-scroller"},En={class:"label"},zn={key:1,class:"warning"},Pn={key:0,class:"aioseo-mobile-tabs"},Bn=C("span",{class:"tab-indicator"},null,-1),Wn={class:"tab-links"},An=["onClick"],Nn={key:1,class:"button-right",ref:"tabs-button"},Dn={class:"tabs-extra"};function In(e,t,n,r,i,a){const o=E("svg-ellipse"),l=E("svg-circle-check"),s=E("svg-circle-information"),u=E("var-tab"),f=E("var-tabs"),p=E("svg-caret"),g=E("router-link"),c=E("transition-slide"),h=E("base-button"),M=Oe("ripple");return b(),k("div",{class:z(["aioseo-tabs",{internal:n.internal,skinny:n.skinnyTabs}]),ref:"aioseo-tabs"},[ve(C("div",Ln,[Y(f,{active:a.activeTab,onClick:a.maybeChangeTab,ref:"var-tabs"},{default:F(()=>[(b(!0),k(se,null,le(n.tabs,(d,_)=>ve((b(),H(u,{name:d.slug,key:_},{default:F(()=>[N(e.$slots,"var-tab",{tab:d},()=>[N(e.$slots,"var-tab-icon",{tab:d}),C("span",En,V(d.name),1),d.errorCount>=0?(b(),k("span",{key:0,class:z(["tab-score",e.getErrorClass(e.currentPost.page_analysis.analysis[d.slug].errors)])},[0<e.currentPost.page_analysis.analysis[d.slug].errors?(b(),H(o,{key:0,width:"6"})):B("",!0),e.currentPost.page_analysis.analysis[d.slug].errors===0?(b(),H(l,{key:1,width:"12"})):B("",!0),j(" "+V(e.getErrorDisplay(e.currentPost.page_analysis.analysis[d.slug].errors)),1)],2)):B("",!0),d.warning&&e.$root._data.screenContext!=="sidebar"?(b(),k("span",zn,[Y(s,{width:"15",height:"15"})])):B("",!0)])]),_:2},1032,["name"])),[[M]])),128))]),_:3},8,["active","onClick"])],512),[[kt,!i.showMobileMenu||i.calculateWidth]]),i.showMobileMenu?(b(),k("div",Pn,[C("div",{class:"active-tab",onClick:t[1]||(t[1]=d=>i.showMobileTabs=!i.showMobileTabs)},[C("div",null,[j(V(a.getActiveTabName())+" ",1),Y(p,{onClick:t[0]||(t[0]=Se(d=>i.showMobileTabs=!i.showMobileTabs,["stop"])),class:z({rotated:!i.showMobileTabs})},null,8,["class"]),Bn])]),Y(c,{active:i.showMobileTabs,class:"tab-dropdown"},{default:F(()=>[C("div",Wn,[n.active?B("",!0):(b(!0),k(se,{key:0},le(a.filteredTabs,(d,_)=>(b(),H(g,{key:_,to:d.url,onClick:t[2]||(t[2]=P=>i.showMobileTabs=!1)},{default:F(()=>[j(V(d.name),1)]),_:2},1032,["to"]))),128)),n.active?(b(!0),k(se,{key:1},le(a.filteredTabs,(d,_)=>(b(),k("a",{href:"#",key:_,onClick:Se(P=>e.$emit("changed",d.slug)&&(i.showMobileTabs=!1),["prevent"])},V(d.name),9,An))),128)):B("",!0)])]),_:1},8,["active"])])):B("",!0),n.showSaveButton?(b(),k("div",Nn,[N(e.$slots,"button",{},()=>[Y(h,{type:"blue",size:"medium",loading:e.loading,onClick:e.processSaveChanges},{default:F(()=>[j(V(i.strings.saveChanges),1)]),_:1},8,["loading","onClick"])])],512)):B("",!0),C("div",Dn,[N(e.$slots,"extra")])],2)}const Hn=Ae($n,[["render",In]]);export{Hn as C,Pt as S};