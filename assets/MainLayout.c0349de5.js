import{c as O,h as U,a as We,b as ct,d as Me,Q as le,e as W,u as dt,f as ft,g as vt,i as ht,j as mt,k as pt}from"./QBtn.cd1f81cf.js";import{i as ie,k as A,l as se,p as je,c as f,h as _,m as bt,g as X,w as C,o as J,n as Z,q as ze,s as ke,r as B,t as Ie,u as re,v as ae,a as gt,x as G,y as yt,z as ne,A as pe,B as Oe,C as be,D as qe,E as ge,G as wt,H as _t,I as Ct,_ as kt,d as Be,J as P,K as j,L as M,M as x,f as z,N as S,O as Se,F as Ne,P as Ue,Q as qt,R as ye,S as St,U as xt,V as Pe,W as zt}from"./index.358e964a.js";import{g as Bt,a as $t,b as Tt,c as we,d as Ve,s as Ae,e as Lt,u as Qt,f as Et,h as Mt,i as Ot,j as Pt,k as Vt,l as At,m as Dt,n as Ht,o as De}from"./js-quiz-store.f694dfee.js";import{u as Xe}from"./app-store.562cc807.js";var Rt=O({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:n}}=X(),l=ie(se,A);if(l===A)return console.error("QPageContainer needs to be child of QLayout"),A;je(bt,!0);const t=f(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>_("div",{class:"q-page-container",style:t.value},U(r.default))}});const{passive:He}=ke,Ft=["both","horizontal","vertical"];var Wt=O({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ft.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;C(()=>e.scrollTarget,()=>{u(),d()});function c(){l!==null&&l();const p=Math.max(0,$t(t)),y=Tt(t),h={top:p-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";n.position={top:p,left:y},n.directionChanged=n.direction!==m,n.delta=h,n.directionChanged===!0&&(n.direction=m,n.inflectionPoint=n.position),r("scroll",{...n})}function d(){t=Bt(a,e.scrollTarget),t.addEventListener("scroll",s,He),s(!0)}function u(){t!==void 0&&(t.removeEventListener("scroll",s,He),t=void 0)}function s(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(l===null){const[y,h]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];l=()=>{h(y),l=null}}}const{proxy:i}=X();return C(()=>i.$q.lang.rtl,c),J(()=>{a=i.$el.parentNode,d()}),Z(()=>{l!==null&&l(),u()}),Object.assign(i,{trigger:s,getPosition:()=>n}),ze}});function jt(){const e=B(!Ie.value);return e.value===!1&&J(()=>{e.value=!0}),e}const Ye=typeof ResizeObserver!="undefined",Re=Ye===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=O({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let n=null,l,t={width:-1,height:-1};function a(u){u===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),l){const{offsetWidth:u,offsetHeight:s}=l;(u!==t.width||s!==t.height)&&(t={width:u,height:s},r("resize",t))}}const{proxy:d}=X();if(Ye===!0){let u;const s=i=>{l=d.$el.parentNode,l?(u=new ResizeObserver(a),u.observe(l),c()):i!==!0&&re(()=>{s(!0)})};return J(()=>{s()}),Z(()=>{n!==null&&clearTimeout(n),u!==void 0&&(u.disconnect!==void 0?u.disconnect():l&&u.unobserve(l))}),ze}else{let i=function(){n!==null&&(clearTimeout(n),n=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,ke.passive),s=void 0)},p=function(){i(),l&&l.contentDocument&&(s=l.contentDocument.defaultView,s.addEventListener("resize",a,ke.passive),c())};const u=jt();let s;return J(()=>{re(()=>{l=d.$el,l&&p()})}),Z(i),d.trigger=a,()=>{if(u.value===!0)return _("object",{style:Re.style,tabindex:-1,type:"text/html",data:Re.url,"aria-hidden":"true",onLoad:p})}}}}),It=O({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:n}){const{proxy:{$q:l}}=X(),t=B(null),a=B(l.screen.height),c=B(e.container===!0?0:l.screen.width),d=B({position:0,direction:"down",inflectionPoint:0}),u=B(0),s=B(Ie.value===!0?0:we()),i=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=f(()=>s.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),h=f(()=>s.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function m(g){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};d.value=k,e.onScroll!==void 0&&n("scroll",k)}}function Q(g){const{height:k,width:L}=g;let R=!1;a.value!==k&&(R=!0,a.value=k,e.onScrollHeight!==void 0&&n("scrollHeight",k),w()),c.value!==L&&(R=!0,c.value=L),R===!0&&e.onResize!==void 0&&n("resize",g)}function q({height:g}){u.value!==g&&(u.value=g,w())}function w(){if(e.container===!0){const g=a.value>u.value?we():0;s.value!==g&&(s.value=g)}}let v=null;const $={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:u,scrollbarWidth:s,totalWidth:f(()=>c.value+s.value),rows:f(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:ae({size:0,offset:0,space:!1}),right:ae({size:300,offset:0,space:!1}),footer:ae({size:0,offset:0,space:!1}),left:ae({size:300,offset:0,space:!1}),scroll:d,animate(){v!==null?clearTimeout(v):document.body.classList.add("q-body--layout-animate"),v=setTimeout(()=>{v=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,k,L){$[g][k]=L}};if(je(se,$),we()>0){let L=function(){g=null,k.classList.remove("hide-scrollbar")},R=function(){if(g===null){if(k.scrollHeight>l.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout(L,300)},Y=function(F){g!==null&&F==="remove"&&(clearTimeout(g),L()),window[`${F}EventListener`]("resize",R)},g=null;const k=document.body;C(()=>e.container!==!0?"add":"remove",Y),e.container!==!0&&Y("add"),gt(()=>{Y("remove")})}return()=>{const g=We(r.default,[_(Wt,{onScroll:m}),_(xe,{onResize:Q})]),k=_("div",{class:i.value,style:p.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(xe,{onResize:q}),_("div",{class:"absolute-full",style:y.value},[_("div",{class:"scroll",style:h.value},[k])])]):k}}}),Nt=O({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:r}){const n=f(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${l.length!==0?" "+l:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>_("div",{class:n.value},U(r.default))}});function _e(e,r,n){const l=qe(e);let t,a=l.left-r.event.x,c=l.top-r.event.y,d=Math.abs(a),u=Math.abs(c);const s=r.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=c<0?"up":"down":s.up===!0&&c<0?(t="up",d>u&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&c>0?(t="down",d>u&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",d<u&&(s.up===!0&&c<0?t="up":s.down===!0&&c>0&&(t="down"))):s.right===!0&&a>0&&(t="right",d<u&&(s.up===!0&&c<0?t="up":s.down===!0&&c>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,i=!0,t==="left"||t==="right"?(l.left-=a,d=0,a=0):(l.top-=c,u=0,c=0)}return{synthetic:i,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:t,isFirst:r.event.isFirst,isFinal:n===!0,duration:Date.now()-r.event.time,distance:{x:d,y:u},offset:{x:a,y:c},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let Ut=0;var Ce=ct({name:"touch-pan",beforeMount(e,{value:r,modifiers:n}){if(n.mouse!==!0&&G.has.touch!==!0)return;function l(a,c){n.mouse===!0&&c===!0?wt(a):(n.stop===!0&&be(a),n.prevent===!0&&Oe(a))}const t={uid:"qvtp_"+Ut++,handler:r,modifiers:n,direction:Ve(n),noop:ze,mouseStart(a){Ae(a,t)&&yt(a)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ae(a,t)){const c=a.target;ne(t,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","passiveCapture"],[c,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,c){if(G.is.firefox===!0&&pe(e,!0),t.lastEvt=a,c===!0||n.stop===!0){if(t.direction.all!==!0&&(c!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Oe(s),a.cancelBubble===!0&&be(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}be(a)}const{left:d,top:u}=qe(a);t.event={x:d,y:u,time:Date.now(),mouse:c===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:d,lastY:u}},move(a){if(t.event===void 0)return;const c=qe(a),d=c.left-t.event.x,u=c.top-t.event.y;if(d===0&&u===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{l(a,s);let h;n.preserveCursor!==!0&&n.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Lt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),s===!0){const Q=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{Q(),m()},50):Q()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:h,synthetic:m}=_e(a,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const p=Math.abs(d),y=Math.abs(u);p!==y&&(t.direction.horizontal===!0&&p>y||t.direction.vertical===!0&&p<y||t.direction.up===!0&&p<y&&u<0||t.direction.down===!0&&p<y&&u>0||t.direction.left===!0&&p>y&&d<0||t.direction.right===!0&&p>y&&d>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,c){if(t.event!==void 0){if(ge(t,"temp"),G.is.firefox===!0&&pe(e,!1),c===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(_e(a===void 0?t.lastEvt:a,t).payload);const{payload:d}=_e(a===void 0?t.lastEvt:a,t,!0),u=()=>{t.handler(d)};t.styleCleanup!==void 0?t.styleCleanup(u):u()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}G.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const n=e.__qtouchpan;n!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&n.end(),n.handler=r.value),n.direction=Ve(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),ge(r,"main"),ge(r,"temp"),G.is.firefox===!0&&pe(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});function oe(e,r,n){return n<=r?r:Math.min(n,Math.max(r,e))}const Fe=150;var Xt=O({name:"QDrawer",inheritAttrs:!1,props:{...Qt,...Et,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Mt,"onLayout","miniState"],setup(e,{slots:r,emit:n,attrs:l}){const t=X(),{proxy:{$q:a}}=t,c=Ot(e,a),{preventBodyScroll:d}=Dt(),{registerTimeout:u,removeTimeout:s}=Pt(),i=ie(se,A);if(i===A)return console.error("QDrawer needs to be child of QLayout"),A;let p,y=null,h;const m=B(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),Q=f(()=>e.mini===!0&&m.value!==!0),q=f(()=>Q.value===!0?e.miniWidth:e.width),w=B(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),v=f(()=>e.persistent!==!0&&(m.value===!0||Ke.value===!0));function $(o,b){if(R(),o!==!1&&i.animate(),E(0),m.value===!0){const T=i.instances[ee.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),D(1),i.isContainer.value!==!0&&d(!0)}else D(0),o!==!1&&ve(!1);u(()=>{o!==!1&&ve(!0),b!==!0&&n("show",o)},Fe)}function g(o,b){Y(),o!==!1&&i.animate(),D(0),E(I.value*q.value),he(),b!==!0?u(()=>{n("hide",o)},Fe):s()}const{show:k,hide:L}=Vt({showing:w,hideOnRouteChange:v,handleShow:$,handleHide:g}),{addToHistory:R,removeFromHistory:Y}=At(w,L,v),F={belowBreakpoint:m,hide:L},V=f(()=>e.side==="right"),I=f(()=>(a.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),Te=B(0),N=B(!1),ue=B(!1),Le=B(q.value*I.value),ee=f(()=>V.value===!0?"left":"right"),ce=f(()=>w.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:q.value:0),de=f(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(V.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),K=f(()=>e.overlay===!1&&w.value===!0&&m.value===!1),Ke=f(()=>e.overlay===!0&&w.value===!0&&m.value===!1),Ge=f(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&N.value===!1?" hidden":"")),Je=f(()=>({backgroundColor:`rgba(0,0,0,${Te.value*.4})`})),Qe=f(()=>V.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ze=f(()=>V.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),et=f(()=>{const o={};return i.header.space===!0&&Qe.value===!1&&(de.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&Ze.value===!1&&(de.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),tt=f(()=>{const o={width:`${q.value}px`,transform:`translateX(${Le.value}px)`};return m.value===!0?o:Object.assign(o,et.value)}),at=f(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),nt=f(()=>`q-drawer q-drawer--${e.side}`+(ue.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(c.value===!0?" q-drawer--dark q-dark":"")+(N.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${Q.value===!0?"mini":"standard"}`+(de.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),ot=f(()=>{const o=a.lang.rtl===!0?e.side:ee.value;return[[Ce,st,void 0,{[o]:!0,mouse:!0}]]}),lt=f(()=>{const o=a.lang.rtl===!0?ee.value:e.side;return[[Ce,Ee,void 0,{[o]:!0,mouse:!0}]]}),rt=f(()=>{const o=a.lang.rtl===!0?ee.value:e.side;return[[Ce,Ee,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function fe(){ut(m,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}C(m,o=>{o===!0?(p=w.value,w.value===!0&&L(!1)):e.overlay===!1&&e.behavior!=="mobile"&&p!==!1&&(w.value===!0?(E(0),D(0),he()):k(!1))}),C(()=>e.side,(o,b)=>{i.instances[b]===F&&(i.instances[b]=void 0,i[b].space=!1,i[b].offset=0),i.instances[o]=F,i[o].size=q.value,i[o].space=K.value,i[o].offset=ce.value}),C(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&fe()}),C(()=>e.behavior+e.breakpoint,fe),C(i.isContainer,o=>{w.value===!0&&d(o!==!0),o===!0&&fe()}),C(i.scrollbarWidth,()=>{E(w.value===!0?0:void 0)}),C(ce,o=>{H("offset",o)}),C(K,o=>{n("onLayout",o),H("space",o)}),C(V,()=>{E()}),C(q,o=>{E(),me(e.miniToOverlay,o)}),C(()=>e.miniToOverlay,o=>{me(o,q.value)}),C(()=>a.lang.rtl,()=>{E()}),C(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(it(),i.animate())}),C(Q,o=>{n("miniState",o)});function E(o){o===void 0?re(()=>{o=w.value===!0?0:q.value,E(I.value*o)}):(i.isContainer.value===!0&&V.value===!0&&(m.value===!0||Math.abs(o)===q.value)&&(o+=I.value*i.scrollbarWidth.value),Le.value=o)}function D(o){Te.value=o}function ve(o){const b=o===!0?"remove":i.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function it(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ue.value=!0,y=setTimeout(()=>{y=null,ue.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function st(o){if(w.value!==!1)return;const b=q.value,T=oe(o.distance.x,0,b);if(o.isFinal===!0){T>=Math.min(75,b)===!0?k():(i.animate(),D(0),E(I.value*b)),N.value=!1;return}E((a.lang.rtl===!0?V.value!==!0:V.value)?Math.max(b-T,0):Math.min(0,T-b)),D(oe(T/b,0,1)),o.isFirst===!0&&(N.value=!0)}function Ee(o){if(w.value!==!0)return;const b=q.value,T=o.direction===e.side,te=(a.lang.rtl===!0?T!==!0:T)?oe(o.distance.x,0,b):0;if(o.isFinal===!0){Math.abs(te)<Math.min(75,b)===!0?(i.animate(),D(1),E(0)):L(),N.value=!1;return}E(I.value*te),D(oe(1-te/b,0,1)),o.isFirst===!0&&(N.value=!0)}function he(){d(!1),ve(!0)}function H(o,b){i.update(e.side,o,b)}function ut(o,b){o.value!==b&&(o.value=b)}function me(o,b){H("size",o===!0?e.miniWidth:b)}return i.instances[e.side]=F,me(e.miniToOverlay,q.value),H("space",K.value),H("offset",ce.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),J(()=>{n("onLayout",K.value),n("miniState",Q.value),p=e.showIfAbove===!0;const o=()=>{(w.value===!0?$:g)(!1,!0)};if(i.totalWidth.value!==0){re(o);return}h=C(i.totalWidth,()=>{h(),h=void 0,w.value===!1&&e.showIfAbove===!0&&m.value===!1?k(!1):o()})}),Z(()=>{h!==void 0&&h(),y!==null&&(clearTimeout(y),y=null),w.value===!0&&he(),i.instances[e.side]===F&&(i.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const o=[];m.value===!0&&(e.noSwipeOpen===!1&&o.push(_t(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ot.value)),o.push(Me("div",{ref:"backdrop",class:Ge.value,style:Je.value,"aria-hidden":"true",onClick:L},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>rt.value)));const b=Q.value===!0&&r.mini!==void 0,T=[_("div",{...l,key:""+b,class:[at.value,l.class]},b===!0?r.mini():U(r.default))];return e.elevated===!0&&w.value===!0&&T.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Me("aside",{ref:"content",class:nt.value,style:tt.value},T,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>lt.value)),_("div",{class:"q-drawer-container"},o)}}});function Yt(){return ie(Ct)}const Kt="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z|0 0 448 512",Gt="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z|0 0 448 512";const $e=e=>(St("data-v-7edf61b2"),e=e(),xt(),e),Jt={class:"full-height q-py-lg column items-center gap-7"},Zt={class:"column"},ea={class:"row gap-2"},ta=$e(()=>x("span",null," light ",-1)),aa={class:"row gap-2"},na=$e(()=>x("span",null," dark ",-1)),oa={class:"column col justify-between items-center"},la=$e(()=>x("div",{class:"column full-width justify-between items-center"},[x("span",{class:"text-center"},[Pe(" Heartfelt thanks to Lydia Hallie for her exceptional "),x("a",{class:"text-secondary",style:{"text-decoration":"none !important"},href:"https://github.com/lydiahallie/javascript-questions"},"JavaScript Questions"),Pe(" ,The github repository that powers this website's content. ")])],-1)),ra={key:0,class:"menu column col no-wrap scroll-y full-width q-gutter-md q-my-md"},ia={class:"row full-width justify-between"},sa={class:"row full-width justify-center q-col-gutter-sm"},ua={style:{"text-decoration":"none"},href:"https://github.com/lastbyte/code-cards"},ca={style:{"text-decoration":"none"},href:"https://www.linkedin.com/in/lastbyte/"},da=Be({__name:"AppDrawer",setup(e){const r=Yt(),n=Xe(),l=Ht();function t(c){l.setQuestion(c.id),n.toggleDrawer()}function a(c,d){return Object.keys(l.selectedAnswers).includes(c.id)?De[d].options[l.selectedAnswers[c.id]].correct===!0?1:-1:0}return(c,d)=>(P(),j(Xt,{modelValue:S(n).drawer,"onUpdate:modelValue":d[2]||(d[2]=u=>S(n).drawer=u),"show-if-above":"",width:300,breakpoint:800,elevated:"",class:"full-height"},{default:M(()=>[x("div",Jt,[x("div",Zt,[z(Nt,{class:"tapred"},{default:M(()=>[z(le,{flat:!S(r).dark.isActive,class:"bg-dark",color:S(r).dark.isActive?"":"primary",onClick:d[0]||(d[0]=u=>S(r).dark.set(!1))},{default:M(()=>[x("div",ea,[z(W,{name:"light_mode"}),ta])]),_:1},8,["flat","color"]),z(le,{flat:S(r).dark.isActive,class:"bg-dark",color:S(r).dark.isActive?"primary":"",onClick:d[1]||(d[1]=u=>S(r).dark.set(!0))},{default:M(()=>[x("div",aa,[z(W,{name:"dark_mode"}),na])]),_:1},8,["flat","color"])]),_:1})]),x("div",oa,[la,S(n).page==="js-quiz"?(P(),Se("div",ra,[(P(!0),Se(Ne,null,Ue(S(De),(u,s)=>(P(),j(le,{flat:"",outline:"",color:u.id===S(l).questionIndex?"secondary":"",key:s,onClick:()=>{t(u)}},{default:M(()=>[x("div",ia,[x("span",null,"QUESTION "+qt(u.id),1),a(u,s)===1?(P(),j(W,{key:0,color:"positive",name:"check_circle"})):ye("",!0),a(u,s)===-1?(P(),j(W,{key:1,color:"negative",name:"cancel"})):ye("",!0)])]),_:2},1032,["color","onClick"]))),128))])):ye("",!0),x("div",sa,[x("a",ua,[z(W,{size:"sm",color:"secondary",name:S(Kt)},null,8,["name"])]),x("a",ca,[z(W,{size:"sm",color:"secondary",name:S(Gt)},null,8,["name"])])])])])]),_:1},8,["modelValue"]))}});var fa=kt(da,[["__scopeId","data-v-7edf61b2"]]),va=O({name:"QBreadcrumbsEl",props:{...dt,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:r}){const{linkTag:n,linkAttrs:l,linkClass:t,navigateOnClick:a}=ft(),c=f(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+t.value:"q-breadcrumbs__el--disable"),...l.value,onClick:a})),d=f(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const u=[];return e.icon!==void 0&&u.push(_(W,{class:d.value,name:e.icon})),e.label!==void 0&&u.push(e.label),_(n.value,{...c.value},We(r.default,u))}}});const ha=["",!0];var ma=O({name:"QBreadcrumbs",props:{...vt,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:r}){const n=ht(e),l=f(()=>`flex items-center ${n.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),t=f(()=>e.separatorColor?` text-${e.separatorColor}`:""),a=f(()=>` text-${e.activeColor}`);return()=>{const c=mt(U(r.default));if(c.length===0)return;let d=1;const u=[],s=c.filter(p=>p.type!==void 0&&p.type.name==="QBreadcrumbsEl").length,i=r.separator!==void 0?r.separator:()=>e.separator;return c.forEach(p=>{if(p.type!==void 0&&p.type.name==="QBreadcrumbsEl"){const y=d<s,h=p.props!==null&&ha.includes(p.props.disable),m=(y===!0?"":" q-breadcrumbs--last")+(h!==!0&&y===!0?a.value:"");d++,u.push(_("div",{class:`flex items-center${m}`},[p])),y===!0&&u.push(_("div",{class:"q-breadcrumbs__separator"+t.value},i()))}else u.push(p)}),_("div",{class:"q-breadcrumbs"},[_("div",{class:l.value},u)])}}}),pa=O({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:n.value},U(r.default))}}),ba=O({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:n.value,role:"toolbar"},U(r.default))}}),ga=O({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:n}){const{proxy:{$q:l}}=X(),t=ie(se,A);if(t===A)return console.error("QHeader needs to be child of QLayout"),A;const a=B(parseInt(e.heightHint,10)),c=B(!0),d=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),u=f(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return c.value===!0?a.value:0;const v=a.value-t.scroll.value.position;return v>0?v:0}),s=f(()=>e.modelValue!==!0||d.value===!0&&c.value!==!0),i=f(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const v=t.rows.value.top,$={};return v[0]==="l"&&t.left.space===!0&&($[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&($[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),$});function h(v,$){t.update("header",v,$)}function m(v,$){v.value!==$&&(v.value=$)}function Q({height:v}){m(a,v),h("size",v)}function q(v){i.value===!0&&m(c,!0),n("focusin",v)}C(()=>e.modelValue,v=>{h("space",v),m(c,!0),t.animate()}),C(u,v=>{h("offset",v)}),C(()=>e.reveal,v=>{v===!1&&m(c,e.modelValue)}),C(c,v=>{t.animate(),n("reveal",v)}),C(t.scroll,v=>{e.reveal===!0&&m(c,v.direction==="up"||v.position<=e.revealOffset||v.position-v.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&h("size",a.value),h("space",e.modelValue),h("offset",u.value),Z(()=>{t.instances.header===w&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const v=pt(r.default,[]);return e.elevated===!0&&v.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),v.push(_(xe,{debounce:0,onResize:Q})),_("header",{class:p.value,style:y.value,onFocusin:q},v)}}});const ya=Be({__name:"AppHeader",setup(e){const r=Xe();return(n,l)=>(P(),j(ga,{elevated:"",class:"bg-yellow text-dark"},{default:M(()=>[z(ba,null,{default:M(()=>[z(le,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l[0]||(l[0]=()=>{S(r).toggleDrawer(),console.log("clicked")})}),z(pa,{class:"row items-center"},{default:M(()=>[z(ma,{"active-color":"white",style:{"font-size":"16px"}},{default:M(()=>[(P(!0),Se(Ne,null,Ue(S(r).breadcrumb,(t,a)=>(P(),j(va,{key:a,class:"text-dark",label:t.display,to:t.to},null,8,["label","to"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}}),Sa=Be({__name:"MainLayout",setup(e){return(r,n)=>{const l=zt("router-view");return P(),j(It,{view:"lHh Lpr lFf",class:"q-px-md"},{default:M(()=>[z(ya),z(fa),z(Rt,null,{default:M(()=>[z(l)]),_:1})]),_:1})}}});export{Sa as default};