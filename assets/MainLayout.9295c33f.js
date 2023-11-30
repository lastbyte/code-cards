import{c as Q,h as ee,a as Ee,b as ht,d as Ve,Q as Me,e as oe,u as mt,f as bt,g as gt,i as pt,j as yt,k as zt}from"./QBtn.ef9f6b4e.js";import{i as be,k as I,l as ge,p as Ge,c as f,h as z,m as St,g as G,w as k,o as ie,n as Z,q as He,s as Pe,r as C,t as Je,u as he,v as ve,a as wt,x as le,y as _t,z as fe,A as qe,B as De,C as Ce,D as Le,E as ke,G as qt,H as Ct,I as kt,J as xt,K as Oe,L as Tt,d as Ae,M as ne,N as me,O as R,f as B,P as A,Q as H,R as Re,S as $t,F as Bt,U as Mt,V as Pt}from"./index.cf8b6c62.js";import{g as Lt,a as Ot,b as Et,c as xe,d as Fe,s as je,e as Ht,u as Ze,f as et,h as We,i as Te,j as At,k as Qt,l as Vt,m as Dt,n as Rt,o as Ft}from"./use-timeout.60a20015.js";import{u as tt}from"./app-store.11a6c8db.js";var jt=Q({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:o}}=G(),i=be(ge,I);if(i===I)return console.error("QPageContainer needs to be child of QLayout"),I;Ge(St,!0);const t=f(()=>{const a={};return i.header.space===!0&&(a.paddingTop=`${i.header.size}px`),i.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${i.right.size}px`),i.footer.space===!0&&(a.paddingBottom=`${i.footer.size}px`),i.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${i.left.size}px`),a});return()=>z("div",{class:"q-page-container",style:t.value},ee(s.default))}});const{passive:Ne}=Pe,Wt=["both","horizontal","vertical"];var at=Q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Wt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i=null,t,a;k(()=>e.scrollTarget,()=>{d(),l()});function n(){i!==null&&i();const p=Math.max(0,Ot(t)),y=Et(t),m={top:p-o.position.top,left:y-o.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const g=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";o.position={top:p,left:y},o.directionChanged=o.direction!==g,o.delta=m,o.directionChanged===!0&&(o.direction=g,o.inflectionPoint=o.position),s("scroll",{...o})}function l(){t=Lt(a,e.scrollTarget),t.addEventListener("scroll",c,Ne),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,Ne),t=void 0)}function c(p){if(p===!0||e.debounce===0||e.debounce==="0")n();else if(i===null){const[y,m]=e.debounce?[setTimeout(n,e.debounce),clearTimeout]:[requestAnimationFrame(n),cancelAnimationFrame];i=()=>{m(y),i=null}}}const{proxy:u}=G();return k(()=>u.$q.lang.rtl,n),ie(()=>{a=u.$el.parentNode,l()}),Z(()=>{i!==null&&i(),d()}),Object.assign(u,{trigger:c,getPosition:()=>o}),He}});function Nt(){const e=C(!Je.value);return e.value===!1&&ie(()=>{e.value=!0}),e}const lt=typeof ResizeObserver!="undefined",Ie=lt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ue=Q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let o=null,i,t={width:-1,height:-1};function a(d){d===!0||e.debounce===0||e.debounce==="0"?n():o===null&&(o=setTimeout(n,e.debounce))}function n(){if(o!==null&&(clearTimeout(o),o=null),i){const{offsetWidth:d,offsetHeight:c}=i;(d!==t.width||c!==t.height)&&(t={width:d,height:c},s("resize",t))}}const{proxy:l}=G();if(lt===!0){let d;const c=u=>{i=l.$el.parentNode,i?(d=new ResizeObserver(a),d.observe(i),n()):u!==!0&&he(()=>{c(!0)})};return ie(()=>{c()}),Z(()=>{o!==null&&clearTimeout(o),d!==void 0&&(d.disconnect!==void 0?d.disconnect():i&&d.unobserve(i))}),He}else{let u=function(){o!==null&&(clearTimeout(o),o=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",a,Pe.passive),c=void 0)},p=function(){u(),i&&i.contentDocument&&(c=i.contentDocument.defaultView,c.addEventListener("resize",a,Pe.passive),n())};const d=Nt();let c;return ie(()=>{he(()=>{i=l.$el,i&&p()})}),Z(u),l.trigger=a,()=>{if(d.value===!0)return z("object",{style:Ie.style,tabindex:-1,type:"text/html",data:Ie.url,"aria-hidden":"true",onLoad:p})}}}}),It=Q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:o}){const{proxy:{$q:i}}=G(),t=C(null),a=C(i.screen.height),n=C(e.container===!0?0:i.screen.width),l=C({position:0,direction:"down",inflectionPoint:0}),d=C(0),c=C(Je.value===!0?0:xe()),u=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:i.screen.height+"px"}:null),y=f(()=>c.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=f(()=>c.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function g(S){if(e.container===!0||document.qScrollPrevented!==!0){const x={position:S.position.top,direction:S.direction,directionChanged:S.directionChanged,inflectionPoint:S.inflectionPoint.top,delta:S.delta.top};l.value=x,e.onScroll!==void 0&&o("scroll",x)}}function P(S){const{height:x,width:M}=S;let F=!1;a.value!==x&&(F=!0,a.value=x,e.onScrollHeight!==void 0&&o("scrollHeight",x),q()),n.value!==M&&(F=!0,n.value=M),F===!0&&e.onResize!==void 0&&o("resize",S)}function T({height:S}){d.value!==S&&(d.value=S,q())}function q(){if(e.container===!0){const S=a.value>d.value?xe():0;c.value!==S&&(c.value=S)}}let h=null;const $={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:d,scrollbarWidth:c,totalWidth:f(()=>n.value+c.value),rows:f(()=>{const S=e.view.toLowerCase().split(" ");return{top:S[0].split(""),middle:S[1].split(""),bottom:S[2].split("")}}),header:ve({size:0,offset:0,space:!1}),right:ve({size:300,offset:0,space:!1}),footer:ve({size:0,offset:0,space:!1}),left:ve({size:300,offset:0,space:!1}),scroll:l,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(S,x,M){$[S][x]=M}};if(Ge(ge,$),xe()>0){let M=function(){S=null,x.classList.remove("hide-scrollbar")},F=function(){if(S===null){if(x.scrollHeight>i.screen.height)return;x.classList.add("hide-scrollbar")}else clearTimeout(S);S=setTimeout(M,300)},X=function(j){S!==null&&j==="remove"&&(clearTimeout(S),M()),window[`${j}EventListener`]("resize",F)},S=null;const x=document.body;k(()=>e.container!==!0?"add":"remove",X),e.container!==!0&&X("add"),wt(()=>{X("remove")})}return()=>{const S=Ee(s.default,[z(at,{onScroll:g}),z(ue,{onResize:P})]),x=z("div",{class:u.value,style:p.value,ref:e.container===!0?void 0:t,tabindex:-1},S);return e.container===!0?z("div",{class:"q-layout-container overflow-hidden",ref:t},[z(ue,{onResize:T}),z("div",{class:"absolute-full",style:y.value},[z("div",{class:"scroll",style:m.value},[x])])]):x}}}),Xt=Q({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:s}){const o=f(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(t=>e[t]===!0).map(t=>`q-btn-group--${t}`).join(" ");return`q-btn-group row no-wrap${i.length!==0?" "+i:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>z("div",{class:o.value},ee(s.default))}});function $e(e,s,o){const i=Le(e);let t,a=i.left-s.event.x,n=i.top-s.event.y,l=Math.abs(a),d=Math.abs(n);const c=s.direction;c.horizontal===!0&&c.vertical!==!0?t=a<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=n<0?"up":"down":c.up===!0&&n<0?(t="up",l>d&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.down===!0&&n>0?(t="down",l>d&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.left===!0&&a<0?(t="left",l<d&&(c.up===!0&&n<0?t="up":c.down===!0&&n>0&&(t="down"))):c.right===!0&&a>0&&(t="right",l<d&&(c.up===!0&&n<0?t="up":c.down===!0&&n>0&&(t="down")));let u=!1;if(t===void 0&&o===!1){if(s.event.isFirst===!0||s.event.lastDir===void 0)return{};t=s.event.lastDir,u=!0,t==="left"||t==="right"?(i.left-=a,l=0,a=0):(i.top-=n,d=0,n=0)}return{synthetic:u,payload:{evt:e,touch:s.event.mouse!==!0,mouse:s.event.mouse===!0,position:i,direction:t,isFirst:s.event.isFirst,isFinal:o===!0,duration:Date.now()-s.event.time,distance:{x:l,y:d},offset:{x:a,y:n},delta:{x:i.left-s.event.lastX,y:i.top-s.event.lastY}}}}let Yt=0;var re=ht({name:"touch-pan",beforeMount(e,{value:s,modifiers:o}){if(o.mouse!==!0&&le.has.touch!==!0)return;function i(a,n){o.mouse===!0&&n===!0?qt(a):(o.stop===!0&&Ce(a),o.prevent===!0&&De(a))}const t={uid:"qvtp_"+Yt++,handler:s,modifiers:o,direction:Fe(o),noop:He,mouseStart(a){je(a,t)&&_t(a)&&(fe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(je(a,t)){const n=a.target;fe(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,n){if(le.is.firefox===!0&&qe(e,!0),t.lastEvt=a,n===!0||o.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&De(c),a.cancelBubble===!0&&Ce(c),Object.assign(c,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:c}}Ce(a)}const{left:l,top:d}=Le(a);t.event={x:l,y:d,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:d}},move(a){if(t.event===void 0)return;const n=Le(a),l=n.left-t.event.x,d=n.top-t.event.y;if(l===0&&d===0)return;t.lastEvt=a;const c=t.event.mouse===!0,u=()=>{i(a,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ht(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{P(),g()},50):P()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&i(a,t.event.mouse);const{payload:m,synthetic:g}=$e(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&u(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=g===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){u(),t.event.detected=!0,t.move(a);return}const p=Math.abs(l),y=Math.abs(d);p!==y&&(t.direction.horizontal===!0&&p>y||t.direction.vertical===!0&&p<y||t.direction.up===!0&&p<y&&d<0||t.direction.down===!0&&p<y&&d>0||t.direction.left===!0&&p>y&&l<0||t.direction.right===!0&&p>y&&l>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,n){if(t.event!==void 0){if(ke(t,"temp"),le.is.firefox===!0&&qe(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler($e(a===void 0?t.lastEvt:a,t).payload);const{payload:l}=$e(a===void 0?t.lastEvt:a,t,!0),d=()=>{t.handler(l)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const a=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";fe(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}le.has.touch===!0&&fe(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,s){const o=e.__qtouchpan;o!==void 0&&(s.oldValue!==s.value&&(typeof value!="function"&&o.end(),o.handler=s.value),o.direction=Fe(s.modifiers))},beforeUnmount(e){const s=e.__qtouchpan;s!==void 0&&(s.event!==void 0&&s.end(),ke(s,"main"),ke(s,"temp"),le.is.firefox===!0&&qe(e,!1),s.styleCleanup!==void 0&&s.styleCleanup(),delete e.__qtouchpan)}});function K(e,s,o){return o<=s?s:Math.min(o,Math.max(s,e))}const Xe=["vertical","horizontal"],Be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ye={prevent:!0,mouse:!0,mouseAllDir:!0},Ue=e=>e>=250?50:Math.ceil(e/5);var Ut=Q({name:"QScrollArea",props:{...Ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:s,emit:o}){const i=C(!1),t=C(!1),a=C(!1),n={vertical:C(0),horizontal:C(0)},l={vertical:{ref:C(null),position:C(0),size:C(0)},horizontal:{ref:C(null),position:C(0),size:C(0)}},{proxy:d}=G(),c=et(e,d.$q);let u=null,p;const y=C(null),m=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=f(()=>{const v=l.vertical.size.value-n.vertical.value;if(v<=0)return 0;const b=K(l.vertical.position.value/v,0,1);return Math.round(b*1e4)/1e4}),l.vertical.thumbHidden=f(()=>(e.visible===null?a.value:e.visible)!==!0&&i.value===!1&&t.value===!1||l.vertical.size.value<=n.vertical.value+1),l.vertical.thumbStart=f(()=>l.vertical.percentage.value*(n.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=f(()=>Math.round(K(n.vertical.value*n.vertical.value/l.vertical.size.value,Ue(n.vertical.value),n.vertical.value))),l.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=f(()=>{const v=l.horizontal.size.value-n.horizontal.value;if(v<=0)return 0;const b=K(Math.abs(l.horizontal.position.value)/v,0,1);return Math.round(b*1e4)/1e4}),l.horizontal.thumbHidden=f(()=>(e.visible===null?a.value:e.visible)!==!0&&i.value===!1&&t.value===!1||l.horizontal.size.value<=n.horizontal.value+1),l.horizontal.thumbStart=f(()=>l.horizontal.percentage.value*(n.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=f(()=>Math.round(K(n.horizontal.value*n.horizontal.value/l.horizontal.size.value,Ue(n.horizontal.value),n.horizontal.value))),l.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[d.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const g=f(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),P=[[re,v=>{F(v,"vertical")},void 0,{vertical:!0,...Ye}]],T=[[re,v=>{F(v,"horizontal")},void 0,{horizontal:!0,...Ye}]];function q(){const v={};return Xe.forEach(b=>{const _=l[b];v[b+"Position"]=_.position.value,v[b+"Percentage"]=_.percentage.value,v[b+"Size"]=_.size.value,v[b+"ContainerSize"]=n[b].value}),v}const h=Ct(()=>{const v=q();v.ref=d,o("scroll",v)},0);function $(v,b,_){if(Xe.includes(v)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(v==="vertical"?We:Te)(y.value,b,_)}function S({height:v,width:b}){let _=!1;n.vertical.value!==v&&(n.vertical.value=v,_=!0),n.horizontal.value!==b&&(n.horizontal.value=b,_=!0),_===!0&&D()}function x({position:v}){let b=!1;l.vertical.position.value!==v.top&&(l.vertical.position.value=v.top,b=!0),l.horizontal.position.value!==v.left&&(l.horizontal.position.value=v.left,b=!0),b===!0&&D()}function M({height:v,width:b}){l.horizontal.size.value!==b&&(l.horizontal.size.value=b,D()),l.vertical.size.value!==v&&(l.vertical.size.value=v,D())}function F(v,b){const _=l[b];if(v.isFirst===!0){if(_.thumbHidden.value===!0)return;p=_.position.value,t.value=!0}else if(t.value!==!0)return;v.isFinal===!0&&(t.value=!1);const N=Be[b],J=n[b].value,pe=(_.size.value-J)/(J-_.thumbSize.value),ce=v.distance[N.dist],ye=p+(v.direction===N.dir?1:-1)*ce*pe;te(ye,b)}function X(v,b){const _=l[b];if(_.thumbHidden.value!==!0){const N=v[Be[b].offset];if(N<_.thumbStart.value||N>_.thumbStart.value+_.thumbSize.value){const J=N-_.thumbSize.value/2;te(J/n[b].value*_.size.value,b)}_.ref.value!==null&&_.ref.value.dispatchEvent(new MouseEvent(v.type,v))}}function j(v){X(v,"vertical")}function V(v){X(v,"horizontal")}function D(){i.value=!0,u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,i.value=!1},e.delay),e.onScroll!==void 0&&h()}function te(v,b){y.value[Be[b].scroll]=v}let L=null;function ae(){L!==null&&clearTimeout(L),L=setTimeout(()=>{L=null,a.value=!0},d.$q.platform.is.ios?50:0)}function se(){L!==null&&(clearTimeout(L),L=null),a.value=!1}let W=null;return k(()=>d.$q.lang.rtl,v=>{y.value!==null&&Te(y.value,Math.abs(l.horizontal.position.value)*(v===!0?-1:1))}),kt(()=>{W={top:l.vertical.position.value,left:l.horizontal.position.value}}),xt(()=>{if(W===null)return;const v=y.value;v!==null&&(Te(v,W.left),We(v,W.top))}),Z(h.cancel),Object.assign(d,{getScrollTarget:()=>y.value,getScroll:q,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(v,b,_){$(v,b*(l[v].size.value-n[v].value)*(v==="horizontal"&&d.$q.lang.rtl===!0?-1:1),_)}}),()=>z("div",{class:m.value,onMouseenter:ae,onMouseleave:se},[z("div",{ref:y,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[z("div",{class:"q-scrollarea__content absolute",style:g.value},Ee(s.default,[z(ue,{debounce:0,onResize:M})])),z(at,{axis:"both",onScroll:x})]),z(ue,{debounce:0,onResize:S}),z("div",{class:l.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:j}),z("div",{class:l.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:V}),Oe(z("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),P),Oe(z("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),T)])}});const Ke=150;var Kt=Q({name:"QDrawer",inheritAttrs:!1,props:{...At,...Ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Qt,"onLayout","miniState"],setup(e,{slots:s,emit:o,attrs:i}){const t=G(),{proxy:{$q:a}}=t,n=et(e,a),{preventBodyScroll:l}=Ft(),{registerTimeout:d,removeTimeout:c}=Vt(),u=be(ge,I);if(u===I)return console.error("QDrawer needs to be child of QLayout"),I;let p,y=null,m;const g=C(e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint),P=f(()=>e.mini===!0&&g.value!==!0),T=f(()=>P.value===!0?e.miniWidth:e.width),q=C(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),h=f(()=>e.persistent!==!0&&(g.value===!0||N.value===!0));function $(r,w){if(F(),r!==!1&&u.animate(),E(0),g.value===!0){const O=u.instances[W.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),Y(1),u.isContainer.value!==!0&&l(!0)}else Y(0),r!==!1&&Se(!1);d(()=>{r!==!1&&Se(!0),w!==!0&&o("show",r)},Ke)}function S(r,w){X(),r!==!1&&u.animate(),Y(0),E(D.value*T.value),we(),w!==!0?d(()=>{o("hide",r)},Ke):c()}const{show:x,hide:M}=Dt({showing:q,hideOnRouteChange:h,handleShow:$,handleHide:S}),{addToHistory:F,removeFromHistory:X}=Rt(q,M,h),j={belowBreakpoint:g,hide:M},V=f(()=>e.side==="right"),D=f(()=>(a.lang.rtl===!0?-1:1)*(V.value===!0?1:-1)),te=C(0),L=C(!1),ae=C(!1),se=C(T.value*D.value),W=f(()=>V.value===!0?"left":"right"),v=f(()=>q.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),b=f(()=>e.overlay===!0||e.miniToOverlay===!0||u.view.value.indexOf(V.value?"R":"L")>-1||a.platform.is.ios===!0&&u.isContainer.value===!0),_=f(()=>e.overlay===!1&&q.value===!0&&g.value===!1),N=f(()=>e.overlay===!0&&q.value===!0&&g.value===!1),J=f(()=>"fullscreen q-drawer__backdrop"+(q.value===!1&&L.value===!1?" hidden":"")),pe=f(()=>({backgroundColor:`rgba(0,0,0,${te.value*.4})`})),ce=f(()=>V.value===!0?u.rows.value.top[2]==="r":u.rows.value.top[0]==="l"),ye=f(()=>V.value===!0?u.rows.value.bottom[2]==="r":u.rows.value.bottom[0]==="l"),ot=f(()=>{const r={};return u.header.space===!0&&ce.value===!1&&(b.value===!0?r.top=`${u.header.offset}px`:u.header.space===!0&&(r.top=`${u.header.size}px`)),u.footer.space===!0&&ye.value===!1&&(b.value===!0?r.bottom=`${u.footer.offset}px`:u.footer.space===!0&&(r.bottom=`${u.footer.size}px`)),r}),nt=f(()=>{const r={width:`${T.value}px`,transform:`translateX(${se.value}px)`};return g.value===!0?r:Object.assign(r,ot.value)}),rt=f(()=>"q-drawer__content fit "+(u.isContainer.value!==!0?"scroll":"overflow-auto")),it=f(()=>`q-drawer q-drawer--${e.side}`+(ae.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(L.value===!0?" no-transition":q.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(b.value===!0||_.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ce.value===!0?" q-drawer--top-padding":""))),ut=f(()=>{const r=a.lang.rtl===!0?e.side:W.value;return[[re,vt,void 0,{[r]:!0,mouse:!0}]]}),st=f(()=>{const r=a.lang.rtl===!0?W.value:e.side;return[[re,Qe,void 0,{[r]:!0,mouse:!0}]]}),ct=f(()=>{const r=a.lang.rtl===!0?W.value:e.side;return[[re,Qe,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function ze(){ft(g,e.behavior==="mobile"||e.behavior!=="desktop"&&u.totalWidth.value<=e.breakpoint)}k(g,r=>{r===!0?(p=q.value,q.value===!0&&M(!1)):e.overlay===!1&&e.behavior!=="mobile"&&p!==!1&&(q.value===!0?(E(0),Y(0),we()):x(!1))}),k(()=>e.side,(r,w)=>{u.instances[w]===j&&(u.instances[w]=void 0,u[w].space=!1,u[w].offset=0),u.instances[r]=j,u[r].size=T.value,u[r].space=_.value,u[r].offset=v.value}),k(u.totalWidth,()=>{(u.isContainer.value===!0||document.qScrollPrevented!==!0)&&ze()}),k(()=>e.behavior+e.breakpoint,ze),k(u.isContainer,r=>{q.value===!0&&l(r!==!0),r===!0&&ze()}),k(u.scrollbarWidth,()=>{E(q.value===!0?0:void 0)}),k(v,r=>{U("offset",r)}),k(_,r=>{o("onLayout",r),U("space",r)}),k(V,()=>{E()}),k(T,r=>{E(),_e(e.miniToOverlay,r)}),k(()=>e.miniToOverlay,r=>{_e(r,T.value)}),k(()=>a.lang.rtl,()=>{E()}),k(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(dt(),u.animate())}),k(P,r=>{o("miniState",r)});function E(r){r===void 0?he(()=>{r=q.value===!0?0:T.value,E(D.value*r)}):(u.isContainer.value===!0&&V.value===!0&&(g.value===!0||Math.abs(r)===T.value)&&(r+=D.value*u.scrollbarWidth.value),se.value=r)}function Y(r){te.value=r}function Se(r){const w=r===!0?"remove":u.isContainer.value!==!0?"add":"";w!==""&&document.body.classList[w]("q-body--drawer-toggle")}function dt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ae.value=!0,y=setTimeout(()=>{y=null,ae.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function vt(r){if(q.value!==!1)return;const w=T.value,O=K(r.distance.x,0,w);if(r.isFinal===!0){O>=Math.min(75,w)===!0?x():(u.animate(),Y(0),E(D.value*w)),L.value=!1;return}E((a.lang.rtl===!0?V.value!==!0:V.value)?Math.max(w-O,0):Math.min(0,O-w)),Y(K(O/w,0,1)),r.isFirst===!0&&(L.value=!0)}function Qe(r){if(q.value!==!0)return;const w=T.value,O=r.direction===e.side,de=(a.lang.rtl===!0?O!==!0:O)?K(r.distance.x,0,w):0;if(r.isFinal===!0){Math.abs(de)<Math.min(75,w)===!0?(u.animate(),Y(1),E(0)):M(),L.value=!1;return}E(D.value*de),Y(K(1-de/w,0,1)),r.isFirst===!0&&(L.value=!0)}function we(){l(!1),Se(!0)}function U(r,w){u.update(e.side,r,w)}function ft(r,w){r.value!==w&&(r.value=w)}function _e(r,w){U("size",r===!0?e.miniWidth:w)}return u.instances[e.side]=j,_e(e.miniToOverlay,T.value),U("space",_.value),U("offset",v.value),e.showIfAbove===!0&&e.modelValue!==!0&&q.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),ie(()=>{o("onLayout",_.value),o("miniState",P.value),p=e.showIfAbove===!0;const r=()=>{(q.value===!0?$:S)(!1,!0)};if(u.totalWidth.value!==0){he(r);return}m=k(u.totalWidth,()=>{m(),m=void 0,q.value===!1&&e.showIfAbove===!0&&g.value===!1?x(!1):r()})}),Z(()=>{m!==void 0&&m(),y!==null&&(clearTimeout(y),y=null),q.value===!0&&we(),u.instances[e.side]===j&&(u.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const r=[];g.value===!0&&(e.noSwipeOpen===!1&&r.push(Oe(z("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ut.value)),r.push(Ve("div",{ref:"backdrop",class:J.value,style:pe.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",e.noSwipeBackdrop!==!0&&q.value===!0,()=>ct.value)));const w=P.value===!0&&s.mini!==void 0,O=[z("div",{...i,key:""+w,class:[rt.value,i.class]},w===!0?s.mini():ee(s.default))];return e.elevated===!0&&q.value===!0&&O.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Ve("aside",{ref:"content",class:it.value,style:nt.value},O,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>st.value)),z("div",{class:"q-drawer-container"},r)}}});function Gt(){return be(Tt)}const Jt="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z|0 0 448 512",Zt="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z|0 0 448 512",ea={class:"window-height q-py-lg q-px-sm column col items-center gap-4"},ta={class:"row"},aa={class:"row gap-2"},la=A("span",null," light ",-1),oa={class:"row gap-2"},na=A("span",null," dark ",-1),ra={class:"column col full-width justify-between items-center q-pt-xl"},ia=A("span",{class:"text-center"},[Re(" Heartfelt thanks to Lydia Hallie for her exceptional "),A("a",{class:"text-secondary",style:{"text-decoration":"none !important"},href:"https://github.com/lydiahallie/javascript-questions"},"JavaScript Questions"),Re(" ,The github repository that powers this website's content. ")],-1),ua={class:"row full-width justify-center q-col-gutter-sm"},sa={style:{"text-decoration":"none"},href:"https://github.com/lastbyte/code-cards"},ca={style:{"text-decoration":"none"},href:"https://www.linkedin.com/in/lastbyte/"},da=Ae({__name:"AppDrawer",setup(e){const s=Gt(),o=tt();return(i,t)=>(ne(),me(Kt,{modelValue:H(o).drawer,"onUpdate:modelValue":t[2]||(t[2]=a=>H(o).drawer=a),"show-if-above":"",width:300,breakpoint:800,elevated:""},{default:R(()=>[B(Ut,{class:"fit"},{default:R(()=>[A("div",ea,[A("div",ta,[B(Xt,{class:"tapred"},{default:R(()=>[B(Me,{flat:!H(s).dark.isActive,class:"bg-dark",color:H(s).dark.isActive?"":"primary",onClick:t[0]||(t[0]=a=>H(s).dark.set(!1))},{default:R(()=>[A("div",aa,[B(oe,{name:"light_mode"}),la])]),_:1},8,["flat","color"]),B(Me,{flat:H(s).dark.isActive,class:"bg-dark",color:H(s).dark.isActive?"primary":"",onClick:t[1]||(t[1]=a=>H(s).dark.set(!0))},{default:R(()=>[A("div",oa,[B(oe,{name:"dark_mode"}),na])]),_:1},8,["flat","color"])]),_:1})]),A("div",ra,[ia,A("div",ua,[A("a",sa,[B(oe,{size:"sm",color:"secondary",name:H(Jt)},null,8,["name"])]),A("a",ca,[B(oe,{size:"sm",color:"secondary",name:H(Zt)},null,8,["name"])])])])])]),_:1})]),_:1},8,["modelValue"]))}});var va=Q({name:"QBreadcrumbsEl",props:{...mt,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:s}){const{linkTag:o,linkAttrs:i,linkClass:t,navigateOnClick:a}=bt(),n=f(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+t.value:"q-breadcrumbs__el--disable"),...i.value,onClick:a})),l=f(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const d=[];return e.icon!==void 0&&d.push(z(oe,{class:l.value,name:e.icon})),e.label!==void 0&&d.push(e.label),z(o.value,{...n.value},Ee(s.default,d))}}});const fa=["",!0];var ha=Q({name:"QBreadcrumbs",props:{...gt,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:s}){const o=pt(e),i=f(()=>`flex items-center ${o.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),t=f(()=>e.separatorColor?` text-${e.separatorColor}`:""),a=f(()=>` text-${e.activeColor}`);return()=>{const n=yt(ee(s.default));if(n.length===0)return;let l=1;const d=[],c=n.filter(p=>p.type!==void 0&&p.type.name==="QBreadcrumbsEl").length,u=s.separator!==void 0?s.separator:()=>e.separator;return n.forEach(p=>{if(p.type!==void 0&&p.type.name==="QBreadcrumbsEl"){const y=l<c,m=p.props!==null&&fa.includes(p.props.disable),g=(y===!0?"":" q-breadcrumbs--last")+(m!==!0&&y===!0?a.value:"");l++,d.push(z("div",{class:`flex items-center${g}`},[p])),y===!0&&d.push(z("div",{class:"q-breadcrumbs__separator"+t.value},u()))}else d.push(p)}),z("div",{class:"q-breadcrumbs"},[z("div",{class:i.value},d)])}}}),ma=Q({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>z("div",{class:o.value},ee(s.default))}}),ba=Q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>z("div",{class:o.value,role:"toolbar"},ee(s.default))}}),ga=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:o}){const{proxy:{$q:i}}=G(),t=be(ge,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const a=C(parseInt(e.heightHint,10)),n=C(!0),l=f(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||i.platform.is.ios&&t.isContainer.value===!0),d=f(()=>{if(e.modelValue!==!0)return 0;if(l.value===!0)return n.value===!0?a.value:0;const h=a.value-t.scroll.value.position;return h>0?h:0}),c=f(()=>e.modelValue!==!0||l.value===!0&&n.value!==!0),u=f(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(l.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),y=f(()=>{const h=t.rows.value.top,$={};return h[0]==="l"&&t.left.space===!0&&($[i.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),h[2]==="r"&&t.right.space===!0&&($[i.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),$});function m(h,$){t.update("header",h,$)}function g(h,$){h.value!==$&&(h.value=$)}function P({height:h}){g(a,h),m("size",h)}function T(h){u.value===!0&&g(n,!0),o("focusin",h)}k(()=>e.modelValue,h=>{m("space",h),g(n,!0),t.animate()}),k(d,h=>{m("offset",h)}),k(()=>e.reveal,h=>{h===!1&&g(n,e.modelValue)}),k(n,h=>{t.animate(),o("reveal",h)}),k(t.scroll,h=>{e.reveal===!0&&g(n,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const q={};return t.instances.header=q,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",d.value),Z(()=>{t.instances.header===q&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const h=zt(s.default,[]);return e.elevated===!0&&h.push(z("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(z(ue,{debounce:0,onResize:P})),z("header",{class:p.value,style:y.value,onFocusin:T},h)}}});const pa=Ae({__name:"AppHeader",setup(e){const s=tt();return(o,i)=>(ne(),me(ga,{elevated:"",class:"bg-yellow text-dark"},{default:R(()=>[B(ba,null,{default:R(()=>[B(Me,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:i[0]||(i[0]=()=>{H(s).toggleDrawer(),console.log("clicked")})}),B(ma,{class:"row items-center"},{default:R(()=>[B(ha,{"active-color":"white",style:{"font-size":"16px"}},{default:R(()=>[(ne(!0),$t(Bt,null,Mt(H(s).breadcrumb,(t,a)=>(ne(),me(va,{key:a,class:"text-dark",label:t.display,to:t.to},null,8,["label","to"]))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}}),qa=Ae({__name:"MainLayout",setup(e){return(s,o)=>{const i=Pt("router-view");return ne(),me(It,{view:"lHh Lpr lFf",class:"q-px-md"},{default:R(()=>[B(pa),B(da),B(jt,null,{default:R(()=>[B(i)]),_:1})]),_:1})}}});export{qa as default};
