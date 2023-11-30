import{c as Q,h as N,a as Ae,b as ot,d as Le,Q as _e,e as K,u as lt,f as rt,g as it,i as st,j as ut,k as ct}from"./QBtn.d90b59c8.js";import{i as re,k as V,l as ie,p as De,c as d,h as _,m as dt,g as j,w as q,o as G,n as J,q as ke,s as qe,r as S,t as Re,u as oe,v as te,a as ft,x as Y,y as vt,z as ae,A as me,B as Ee,C as pe,D as Ce,E as be,G as ht,H as mt,I as pt,d as Se,J as U,K as le,L as O,M,f as k,N as E,O as Me,P as bt,F as gt,Q as yt,R as wt}from"./index.c8a8414a.js";import{g as _t,a as qt,b as Ct,c as ge,d as Qe,s as Oe,e as xt,u as kt,f as St,h as zt,i as Bt,j as $t,k as Tt,l as Lt,m as Et}from"./selection.9f17caf5.js";import{u as Fe}from"./app-store.ffa169b5.js";var Mt=Q({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:n}}=j(),l=re(ie,V);if(l===V)return console.error("QPageContainer needs to be child of QLayout"),V;De(dt,!0);const t=d(()=>{const a={};return l.header.space===!0&&(a.paddingTop=`${l.header.size}px`),l.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(a.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),a});return()=>_("div",{class:"q-page-container",style:t.value},N(r.default))}});const{passive:Pe}=qe,Qt=["both","horizontal","vertical"];var Ot=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Qt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,a;q(()=>e.scrollTarget,()=>{c(),v()});function u(){l!==null&&l();const p=Math.max(0,qt(t)),y=Ct(t),h={top:p-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const m=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";n.position={top:p,left:y},n.directionChanged=n.direction!==m,n.delta=h,n.directionChanged===!0&&(n.direction=m,n.inflectionPoint=n.position),r("scroll",{...n})}function v(){t=_t(a,e.scrollTarget),t.addEventListener("scroll",s,Pe),s(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",s,Pe),t=void 0)}function s(p){if(p===!0||e.debounce===0||e.debounce==="0")u();else if(l===null){const[y,h]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];l=()=>{h(y),l=null}}}const{proxy:i}=j();return q(()=>i.$q.lang.rtl,u),G(()=>{a=i.$el.parentNode,v()}),J(()=>{l!==null&&l(),c()}),Object.assign(i,{trigger:s,getPosition:()=>n}),ke}});function Pt(){const e=S(!Re.value);return e.value===!1&&G(()=>{e.value=!0}),e}const We=typeof ResizeObserver!="undefined",Ve=We===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var xe=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let n=null,l,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),l){const{offsetWidth:c,offsetHeight:s}=l;(c!==t.width||s!==t.height)&&(t={width:c,height:s},r("resize",t))}}const{proxy:v}=j();if(We===!0){let c;const s=i=>{l=v.$el.parentNode,l?(c=new ResizeObserver(a),c.observe(l),u()):i!==!0&&oe(()=>{s(!0)})};return G(()=>{s()}),J(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():l&&c.unobserve(l))}),ke}else{let i=function(){n!==null&&(clearTimeout(n),n=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,qe.passive),s=void 0)},p=function(){i(),l&&l.contentDocument&&(s=l.contentDocument.defaultView,s.addEventListener("resize",a,qe.passive),u())};const c=Pt();let s;return G(()=>{oe(()=>{l=v.$el,l&&p()})}),J(i),v.trigger=a,()=>{if(c.value===!0)return _("object",{style:Ve.style,tabindex:-1,type:"text/html",data:Ve.url,"aria-hidden":"true",onLoad:p})}}}}),Vt=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:n}){const{proxy:{$q:l}}=j(),t=S(null),a=S(l.screen.height),u=S(e.container===!0?0:l.screen.width),v=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),s=S(Re.value===!0?0:ge()),i=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=d(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),y=d(()=>s.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),h=d(()=>s.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function m(g){if(e.container===!0||document.qScrollPrevented!==!0){const C={position:g.position.top,direction:g.direction,directionChanged:g.directionChanged,inflectionPoint:g.inflectionPoint.top,delta:g.delta.top};v.value=C,e.onScroll!==void 0&&n("scroll",C)}}function T(g){const{height:C,width:$}=g;let D=!1;a.value!==C&&(D=!0,a.value=C,e.onScrollHeight!==void 0&&n("scrollHeight",C),w()),u.value!==$&&(D=!0,u.value=$),D===!0&&e.onResize!==void 0&&n("resize",g)}function x({height:g}){c.value!==g&&(c.value=g,w())}function w(){if(e.container===!0){const g=a.value>c.value?ge():0;s.value!==g&&(s.value=g)}}let f=null;const z={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:s,totalWidth:d(()=>u.value+s.value),rows:d(()=>{const g=e.view.toLowerCase().split(" ");return{top:g[0].split(""),middle:g[1].split(""),bottom:g[2].split("")}}),header:te({size:0,offset:0,space:!1}),right:te({size:300,offset:0,space:!1}),footer:te({size:0,offset:0,space:!1}),left:te({size:300,offset:0,space:!1}),scroll:v,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(g,C,$){z[g][C]=$}};if(De(ie,z),ge()>0){let $=function(){g=null,C.classList.remove("hide-scrollbar")},D=function(){if(g===null){if(C.scrollHeight>l.screen.height)return;C.classList.add("hide-scrollbar")}else clearTimeout(g);g=setTimeout($,300)},I=function(R){g!==null&&R==="remove"&&(clearTimeout(g),$()),window[`${R}EventListener`]("resize",D)},g=null;const C=document.body;q(()=>e.container!==!0?"add":"remove",I),e.container!==!0&&I("add"),ft(()=>{I("remove")})}return()=>{const g=Ae(r.default,[_(Ot,{onScroll:m}),_(xe,{onResize:T})]),C=_("div",{class:i.value,style:p.value,ref:e.container===!0?void 0:t,tabindex:-1},g);return e.container===!0?_("div",{class:"q-layout-container overflow-hidden",ref:t},[_(xe,{onResize:x}),_("div",{class:"absolute-full",style:y.value},[_("div",{class:"scroll",style:h.value},[C])])]):C}}}),Ht=Q({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:r}){const n=d(()=>{const l=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${l.length!==0?" "+l:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>_("div",{class:n.value},N(r.default))}});function ye(e,r,n){const l=Ce(e);let t,a=l.left-r.event.x,u=l.top-r.event.y,v=Math.abs(a),c=Math.abs(u);const s=r.direction;s.horizontal===!0&&s.vertical!==!0?t=a<0?"left":"right":s.horizontal!==!0&&s.vertical===!0?t=u<0?"up":"down":s.up===!0&&u<0?(t="up",v>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.down===!0&&u>0?(t="down",v>c&&(s.left===!0&&a<0?t="left":s.right===!0&&a>0&&(t="right"))):s.left===!0&&a<0?(t="left",v<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down"))):s.right===!0&&a>0&&(t="right",v<c&&(s.up===!0&&u<0?t="up":s.down===!0&&u>0&&(t="down")));let i=!1;if(t===void 0&&n===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,i=!0,t==="left"||t==="right"?(l.left-=a,v=0,a=0):(l.top-=u,c=0,u=0)}return{synthetic:i,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:l,direction:t,isFirst:r.event.isFirst,isFinal:n===!0,duration:Date.now()-r.event.time,distance:{x:v,y:c},offset:{x:a,y:u},delta:{x:l.left-r.event.lastX,y:l.top-r.event.lastY}}}}let At=0;var we=ot({name:"touch-pan",beforeMount(e,{value:r,modifiers:n}){if(n.mouse!==!0&&Y.has.touch!==!0)return;function l(a,u){n.mouse===!0&&u===!0?ht(a):(n.stop===!0&&pe(a),n.prevent===!0&&Ee(a))}const t={uid:"qvtp_"+At++,handler:r,modifiers:n,direction:Qe(n),noop:ke,mouseStart(a){Oe(a,t)&&vt(a)&&(ae(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Oe(a,t)){const u=a.target;ae(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(Y.is.firefox===!0&&me(e,!0),t.lastEvt=a,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const s=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ee(s),a.cancelBubble===!0&&pe(s),Object.assign(s,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:s}}pe(a)}const{left:v,top:c}=Ce(a);t.event={x:v,y:c,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:v,lastY:c}},move(a){if(t.event===void 0)return;const u=Ce(a),v=u.left-t.event.x,c=u.top-t.event.y;if(v===0&&c===0)return;t.lastEvt=a;const s=t.event.mouse===!0,i=()=>{l(a,s);let h;n.preserveCursor!==!0&&n.preservecursor!==!0&&(h=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),s===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),xt(),t.styleCleanup=m=>{if(t.styleCleanup=void 0,h!==void 0&&(document.documentElement.style.cursor=h),document.body.classList.remove("non-selectable"),s===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};m!==void 0?setTimeout(()=>{T(),m()},50):T()}else m!==void 0&&m()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(a,t.event.mouse);const{payload:h,synthetic:m}=ye(a,t,!1);h!==void 0&&(t.handler(h)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=h.position.left,t.event.lastY=h.position.top,t.event.lastDir=m===!0?void 0:h.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||s===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(a);return}const p=Math.abs(v),y=Math.abs(c);p!==y&&(t.direction.horizontal===!0&&p>y||t.direction.vertical===!0&&p<y||t.direction.up===!0&&p<y&&c<0||t.direction.down===!0&&p<y&&c>0||t.direction.left===!0&&p>y&&v<0||t.direction.right===!0&&p>y&&v>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(be(t,"temp"),Y.is.firefox===!0&&me(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ye(a===void 0?t.lastEvt:a,t).payload);const{payload:v}=ye(a===void 0?t.lastEvt:a,t,!0),c=()=>{t.handler(v)};t.styleCleanup!==void 0?t.styleCleanup(c):c()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ae(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}Y.has.touch===!0&&ae(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const n=e.__qtouchpan;n!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&n.end(),n.handler=r.value),n.direction=Qe(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),be(r,"main"),be(r,"temp"),Y.is.firefox===!0&&me(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});function ne(e,r,n){return n<=r?r:Math.min(n,Math.max(r,e))}const He=150;var Dt=Q({name:"QDrawer",inheritAttrs:!1,props:{...kt,...St,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...zt,"onLayout","miniState"],setup(e,{slots:r,emit:n,attrs:l}){const t=j(),{proxy:{$q:a}}=t,u=Bt(e,a),{preventBodyScroll:v}=Et(),{registerTimeout:c,removeTimeout:s}=$t(),i=re(ie,V);if(i===V)return console.error("QDrawer needs to be child of QLayout"),V;let p,y=null,h;const m=S(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),T=d(()=>e.mini===!0&&m.value!==!0),x=d(()=>T.value===!0?e.miniWidth:e.width),w=S(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),f=d(()=>e.persistent!==!0&&(m.value===!0||Ne.value===!0));function z(o,b){if(D(),o!==!1&&i.animate(),L(0),m.value===!0){const B=i.instances[Z.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),H(1),i.isContainer.value!==!0&&v(!0)}else H(0),o!==!1&&fe(!1);c(()=>{o!==!1&&fe(!0),b!==!0&&n("show",o)},He)}function g(o,b){I(),o!==!1&&i.animate(),H(0),L(F.value*x.value),ve(),b!==!0?c(()=>{n("hide",o)},He):s()}const{show:C,hide:$}=Tt({showing:w,hideOnRouteChange:f,handleShow:z,handleHide:g}),{addToHistory:D,removeFromHistory:I}=Lt(w,$,f),R={belowBreakpoint:m,hide:$},P=d(()=>e.side==="right"),F=d(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ze=S(0),W=S(!1),se=S(!1),Be=S(x.value*F.value),Z=d(()=>P.value===!0?"left":"right"),ue=d(()=>w.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),ce=d(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(P.value?"R":"L")>-1||a.platform.is.ios===!0&&i.isContainer.value===!0),X=d(()=>e.overlay===!1&&w.value===!0&&m.value===!1),Ne=d(()=>e.overlay===!0&&w.value===!0&&m.value===!1),je=d(()=>"fullscreen q-drawer__backdrop"+(w.value===!1&&W.value===!1?" hidden":"")),Ie=d(()=>({backgroundColor:`rgba(0,0,0,${ze.value*.4})`})),$e=d(()=>P.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Xe=d(()=>P.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),Ye=d(()=>{const o={};return i.header.space===!0&&$e.value===!1&&(ce.value===!0?o.top=`${i.header.offset}px`:i.header.space===!0&&(o.top=`${i.header.size}px`)),i.footer.space===!0&&Xe.value===!1&&(ce.value===!0?o.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(o.bottom=`${i.footer.size}px`)),o}),Ke=d(()=>{const o={width:`${x.value}px`,transform:`translateX(${Be.value}px)`};return m.value===!0?o:Object.assign(o,Ye.value)}),Ue=d(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ge=d(()=>`q-drawer q-drawer--${e.side}`+(se.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":w.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(ce.value===!0||X.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+($e.value===!0?" q-drawer--top-padding":""))),Je=d(()=>{const o=a.lang.rtl===!0?e.side:Z.value;return[[we,at,void 0,{[o]:!0,mouse:!0}]]}),Ze=d(()=>{const o=a.lang.rtl===!0?Z.value:e.side;return[[we,Te,void 0,{[o]:!0,mouse:!0}]]}),et=d(()=>{const o=a.lang.rtl===!0?Z.value:e.side;return[[we,Te,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){nt(m,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}q(m,o=>{o===!0?(p=w.value,w.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&p!==!1&&(w.value===!0?(L(0),H(0),ve()):C(!1))}),q(()=>e.side,(o,b)=>{i.instances[b]===R&&(i.instances[b]=void 0,i[b].space=!1,i[b].offset=0),i.instances[o]=R,i[o].size=x.value,i[o].space=X.value,i[o].offset=ue.value}),q(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),q(()=>e.behavior+e.breakpoint,de),q(i.isContainer,o=>{w.value===!0&&v(o!==!0),o===!0&&de()}),q(i.scrollbarWidth,()=>{L(w.value===!0?0:void 0)}),q(ue,o=>{A("offset",o)}),q(X,o=>{n("onLayout",o),A("space",o)}),q(P,()=>{L()}),q(x,o=>{L(),he(e.miniToOverlay,o)}),q(()=>e.miniToOverlay,o=>{he(o,x.value)}),q(()=>a.lang.rtl,()=>{L()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(tt(),i.animate())}),q(T,o=>{n("miniState",o)});function L(o){o===void 0?oe(()=>{o=w.value===!0?0:x.value,L(F.value*o)}):(i.isContainer.value===!0&&P.value===!0&&(m.value===!0||Math.abs(o)===x.value)&&(o+=F.value*i.scrollbarWidth.value),Be.value=o)}function H(o){ze.value=o}function fe(o){const b=o===!0?"remove":i.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function tt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),se.value=!0,y=setTimeout(()=>{y=null,se.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function at(o){if(w.value!==!1)return;const b=x.value,B=ne(o.distance.x,0,b);if(o.isFinal===!0){B>=Math.min(75,b)===!0?C():(i.animate(),H(0),L(F.value*b)),W.value=!1;return}L((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(b-B,0):Math.min(0,B-b)),H(ne(B/b,0,1)),o.isFirst===!0&&(W.value=!0)}function Te(o){if(w.value!==!0)return;const b=x.value,B=o.direction===e.side,ee=(a.lang.rtl===!0?B!==!0:B)?ne(o.distance.x,0,b):0;if(o.isFinal===!0){Math.abs(ee)<Math.min(75,b)===!0?(i.animate(),H(1),L(0)):$(),W.value=!1;return}L(F.value*ee),H(ne(1-ee/b,0,1)),o.isFirst===!0&&(W.value=!0)}function ve(){v(!1),fe(!0)}function A(o,b){i.update(e.side,o,b)}function nt(o,b){o.value!==b&&(o.value=b)}function he(o,b){A("size",o===!0?e.miniWidth:b)}return i.instances[e.side]=R,he(e.miniToOverlay,x.value),A("space",X.value),A("offset",ue.value),e.showIfAbove===!0&&e.modelValue!==!0&&w.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),G(()=>{n("onLayout",X.value),n("miniState",T.value),p=e.showIfAbove===!0;const o=()=>{(w.value===!0?z:g)(!1,!0)};if(i.totalWidth.value!==0){oe(o);return}h=q(i.totalWidth,()=>{h(),h=void 0,w.value===!1&&e.showIfAbove===!0&&m.value===!1?C(!1):o()})}),J(()=>{h!==void 0&&h(),y!==null&&(clearTimeout(y),y=null),w.value===!0&&ve(),i.instances[e.side]===R&&(i.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const o=[];m.value===!0&&(e.noSwipeOpen===!1&&o.push(mt(_("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Je.value)),o.push(Le("div",{ref:"backdrop",class:je.value,style:Ie.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&w.value===!0,()=>et.value)));const b=T.value===!0&&r.mini!==void 0,B=[_("div",{...l,key:""+b,class:[Ue.value,l.class]},b===!0?r.mini():N(r.default))];return e.elevated===!0&&w.value===!0&&B.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Le("aside",{ref:"content",class:Ge.value,style:Ke.value},B,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Ze.value)),_("div",{class:"q-drawer-container"},o)}}});function Rt(){return re(pt)}const Ft="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z|0 0 448 512",Wt="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z|0 0 448 512",Nt={class:"full-height q-py-lg q-px-sm column col items-center gap-4",style:{"box-sizing":"border-box"}},jt={class:"row"},It={class:"row gap-2"},Xt=M("span",null," light ",-1),Yt={class:"row gap-2"},Kt=M("span",null," dark ",-1),Ut={class:"column col full-width justify-between items-center q-pt-xl"},Gt=M("span",{class:"text-center"},[Me(" Heartfelt thanks to Lydia Hallie for her exceptional "),M("a",{class:"text-secondary",style:{"text-decoration":"none !important"},href:"https://github.com/lydiahallie/javascript-questions"},"JavaScript Questions"),Me(" ,The github repository that powers this website's content. ")],-1),Jt={class:"row full-width justify-center q-col-gutter-sm"},Zt={style:{"text-decoration":"none"},href:"https://github.com/lastbyte/code-cards"},ea={style:{"text-decoration":"none"},href:"https://www.linkedin.com/in/lastbyte/"},ta=Se({__name:"AppDrawer",setup(e){const r=Rt(),n=Fe();return(l,t)=>(U(),le(Dt,{modelValue:E(n).drawer,"onUpdate:modelValue":t[2]||(t[2]=a=>E(n).drawer=a),"show-if-above":"",width:300,breakpoint:800,elevated:"",class:"full-height"},{default:O(()=>[M("div",Nt,[M("div",jt,[k(Ht,{class:"tapred"},{default:O(()=>[k(_e,{flat:!E(r).dark.isActive,class:"bg-dark",color:E(r).dark.isActive?"":"primary",onClick:t[0]||(t[0]=a=>E(r).dark.set(!1))},{default:O(()=>[M("div",It,[k(K,{name:"light_mode"}),Xt])]),_:1},8,["flat","color"]),k(_e,{flat:E(r).dark.isActive,class:"bg-dark",color:E(r).dark.isActive?"primary":"",onClick:t[1]||(t[1]=a=>E(r).dark.set(!0))},{default:O(()=>[M("div",Yt,[k(K,{name:"dark_mode"}),Kt])]),_:1},8,["flat","color"])]),_:1})]),M("div",Ut,[Gt,M("div",Jt,[M("a",Zt,[k(K,{size:"sm",color:"secondary",name:E(Ft)},null,8,["name"])]),M("a",ea,[k(K,{size:"sm",color:"secondary",name:E(Wt)},null,8,["name"])])])])])]),_:1},8,["modelValue"]))}});var aa=Q({name:"QBreadcrumbsEl",props:{...lt,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:r}){const{linkTag:n,linkAttrs:l,linkClass:t,navigateOnClick:a}=rt(),u=d(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+t.value:"q-breadcrumbs__el--disable"),...l.value,onClick:a})),v=d(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const c=[];return e.icon!==void 0&&c.push(_(K,{class:v.value,name:e.icon})),e.label!==void 0&&c.push(e.label),_(n.value,{...u.value},Ae(r.default,c))}}});const na=["",!0];var oa=Q({name:"QBreadcrumbs",props:{...it,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:r}){const n=st(e),l=d(()=>`flex items-center ${n.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),t=d(()=>e.separatorColor?` text-${e.separatorColor}`:""),a=d(()=>` text-${e.activeColor}`);return()=>{const u=ut(N(r.default));if(u.length===0)return;let v=1;const c=[],s=u.filter(p=>p.type!==void 0&&p.type.name==="QBreadcrumbsEl").length,i=r.separator!==void 0?r.separator:()=>e.separator;return u.forEach(p=>{if(p.type!==void 0&&p.type.name==="QBreadcrumbsEl"){const y=v<s,h=p.props!==null&&na.includes(p.props.disable),m=(y===!0?"":" q-breadcrumbs--last")+(h!==!0&&y===!0?a.value:"");v++,c.push(_("div",{class:`flex items-center${m}`},[p])),y===!0&&c.push(_("div",{class:"q-breadcrumbs__separator"+t.value},i()))}else c.push(p)}),_("div",{class:"q-breadcrumbs"},[_("div",{class:l.value},c)])}}}),la=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:r}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>_("div",{class:n.value},N(r.default))}}),ra=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>_("div",{class:n.value,role:"toolbar"},N(r.default))}}),ia=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:n}){const{proxy:{$q:l}}=j(),t=re(ie,V);if(t===V)return console.error("QHeader needs to be child of QLayout"),V;const a=S(parseInt(e.heightHint,10)),u=S(!0),v=d(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),c=d(()=>{if(e.modelValue!==!0)return 0;if(v.value===!0)return u.value===!0?a.value:0;const f=a.value-t.scroll.value.position;return f>0?f:0}),s=d(()=>e.modelValue!==!0||v.value===!0&&u.value!==!0),i=d(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),p=d(()=>"q-header q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=d(()=>{const f=t.rows.value.top,z={};return f[0]==="l"&&t.left.space===!0&&(z[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),f[2]==="r"&&t.right.space===!0&&(z[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),z});function h(f,z){t.update("header",f,z)}function m(f,z){f.value!==z&&(f.value=z)}function T({height:f}){m(a,f),h("size",f)}function x(f){i.value===!0&&m(u,!0),n("focusin",f)}q(()=>e.modelValue,f=>{h("space",f),m(u,!0),t.animate()}),q(c,f=>{h("offset",f)}),q(()=>e.reveal,f=>{f===!1&&m(u,e.modelValue)}),q(u,f=>{t.animate(),n("reveal",f)}),q(t.scroll,f=>{e.reveal===!0&&m(u,f.direction==="up"||f.position<=e.revealOffset||f.position-f.inflectionPoint<100)});const w={};return t.instances.header=w,e.modelValue===!0&&h("size",a.value),h("space",e.modelValue),h("offset",c.value),J(()=>{t.instances.header===w&&(t.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const f=ct(r.default,[]);return e.elevated===!0&&f.push(_("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),f.push(_(xe,{debounce:0,onResize:T})),_("header",{class:p.value,style:y.value,onFocusin:x},f)}}});const sa=Se({__name:"AppHeader",setup(e){const r=Fe();return(n,l)=>(U(),le(ia,{elevated:"",class:"bg-yellow text-dark"},{default:O(()=>[k(ra,null,{default:O(()=>[k(_e,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:l[0]||(l[0]=()=>{E(r).toggleDrawer(),console.log("clicked")})}),k(la,{class:"row items-center"},{default:O(()=>[k(oa,{"active-color":"white",style:{"font-size":"16px"}},{default:O(()=>[(U(!0),bt(gt,null,yt(E(r).breadcrumb,(t,a)=>(U(),le(aa,{key:a,class:"text-dark",label:t.display,to:t.to},null,8,["label","to"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}}),ha=Se({__name:"MainLayout",setup(e){return(r,n)=>{const l=wt("router-view");return U(),le(Vt,{view:"lHh Lpr lFf",class:"q-px-md"},{default:O(()=>[k(sa),k(ta),k(Mt,null,{default:O(()=>[k(l)]),_:1})]),_:1})}}});export{ha as default};