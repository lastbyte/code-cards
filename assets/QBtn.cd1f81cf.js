import{X as re,d as ve,h as v,H as ae,N as me,c,g as Q,Y as I,z as ge,E as he,C as ie,D as be,r as H,n as ye,Z as ke,G as P,s as pe,B as xe}from"./index.358e964a.js";const F=e=>re(ve(e)),qe=e=>re(e);function Ee(e,t){return e!==void 0&&e()||t}function et(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}function tt(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function nt(e,t,n,r,l,d){t.key=r+l;const s=v(e,t,n);return l===!0?ae(s,d()):s}function Se(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function rt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=me(e);if(t)return t.$el||t}function at(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}const V={xs:18,sm:24,md:32,lg:38,xl:46},ue={size:String};function le(e,t=V){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const U="0 0 24 24",W=e=>e,K=e=>`ionicons ${e}`,se={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":K,"ion-ios":K,"ion-logo":K,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},ce={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},$e=new RegExp("^("+Object.keys(se).join("|")+")"),we=new RegExp("^("+Object.keys(oe).join("|")+")"),X=new RegExp("^("+Object.keys(ce).join("|")+")"),Ce=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,Be=/^svguse:/,Le=/^ion-/,_e=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=F({name:"QIcon",props:{...ue,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=Q(),r=le(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=c(()=>{let s,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const o=n.iconMapFn(a);if(o!==void 0)if(o.icon!==void 0){if(a=o.icon,a==="none"||!a)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(Ce.test(a)===!0){const[o,y=U]=a.split("|");return{svg:!0,viewBox:y,nodes:o.split("&&").map(u=>{const[k,h,p]=u.split("@@");return v("path",{style:h,d:k,transform:p})})}}if(Re.test(a)===!0)return{img:!0,src:a.substring(4)};if(Be.test(a)===!0){const[o,y=U]=a.split("|");return{svguse:!0,src:o.substring(7),viewBox:y}}let q=" ";const b=a.match($e);if(b!==null)s=se[b[1]](a);else if(_e.test(a)===!0)s=a;else if(Le.test(a)===!0)s=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(X.test(a)===!0){s="notranslate material-symbols";const o=a.match(X);o!==null&&(a=a.substring(6),s+=ce[o[1]]),q=a}else{s="notranslate material-icons";const o=a.match(we);o!==null&&(a=a.substring(2),s+=oe[o[1]]),q=a}return{cls:s,content:q}});return()=>{const s={class:l.value,style:r.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,s,Ee(t.default)):d.value.img===!0?v("span",s,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v("span",s,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v("span",s,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(s.class+=" "+d.value.cls),v(e.tag,s,z(t.default,[d.value.content])))}}});const Pe={size:{type:[Number,String],default:"1em"},color:String};function Te(e){return{cSize:c(()=>e.size in V?`${V[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ae=F({name:"QSpinner",props:{...Pe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Te(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Oe(e,t=250){let n=!1,r;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),r=e.apply(this,arguments)),r}}function G(e,t,n,r){n.modifiers.stop===!0&&ie(e);const l=n.modifiers.color;let d=n.modifiers.center;d=d===!0||r===!0;const s=document.createElement("span"),a=document.createElement("span"),q=be(e),{left:b,top:o,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),h=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-b-h}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-o-h}px`;a.className="q-ripple__inner",Se(a,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),s.className=`q-ripple${l?" text-"+l:""}`,s.setAttribute("dir","ltr"),s.appendChild(a),t.appendChild(s);const B=()=>{s.remove(),clearTimeout(L)};n.abort.push(B);let L=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,a.style.opacity=.2,L=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,L=setTimeout(()=>{s.remove(),n.abort.splice(n.abort.indexOf(B),1)},275)},250)},50)}function Z(e,{modifiers:t,value:n,arg:r}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||r,keyCodes:[].concat(l.keyCodes||13)}}var Me=qe({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const r={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){r.enabled===!0&&l.qSkipRipple!==!0&&l.type===(r.modifiers.early===!0?"pointerdown":"click")&&G(l,e,r,l.qKeyEvent===!0)},keystart:Oe(l=>{r.enabled===!0&&l.qSkipRipple!==!0&&I(l,r.modifiers.keyCodes)===!0&&l.type===`key${r.modifiers.early===!0?"down":"up"}`&&G(l,e,r,!0)},300)};Z(r,t),e.__qripple=r,ge(r,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&Z(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),he(t,"main"),delete e._qripple)}});const de={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(de),ze={align:{type:String,validator:e=>je.includes(e)}};function Ne(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${de[t]}`})}function fe(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{fe(e,n)}):e.add(t)}function it(e){const t=new Set;return e.forEach(n=>{fe(t,n)}),Array.from(t)}function De(e){return e.appContext.config.globalProperties.$router!==void 0}function ut(e){return e.isUnmounted===!0||e.isDeactivated===!0}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ke(e,t){for(const n in t){const r=t[n],l=e[n];if(typeof r=="string"){if(r!==l)return!1}else if(Array.isArray(l)===!1||l.length!==r.length||r.some((d,s)=>d!==l[s]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ie(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ve(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Ie(e[n],t[n])===!1)return!1;return!0}const Qe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=Q(),{props:r,proxy:l,emit:d}=n,s=De(n),a=c(()=>r.disable!==!0&&r.href!==void 0),q=t===!0?c(()=>s===!0&&r.disable!==!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):c(()=>s===!0&&a.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),b=c(()=>q.value===!0?_(r.to):null),o=c(()=>b.value!==null),y=c(()=>a.value===!0||o.value===!0),u=c(()=>r.type==="a"||y.value===!0?"a":r.tag||e||"div"),k=c(()=>a.value===!0?{href:r.href,target:r.target}:o.value===!0?{href:b.value.href,target:r.target}:{}),h=c(()=>{if(o.value===!1)return-1;const{matched:m}=b.value,{length:E}=m,$=m[E-1];if($===void 0)return-1;const C=l.$route.matched;if(C.length===0)return-1;const R=C.findIndex(ee.bind(null,$));if(R>-1)return R;const N=J(m[E-2]);return E>1&&J($)===N&&C[C.length-1].path!==N?C.findIndex(ee.bind(null,m[E-2])):R}),p=c(()=>o.value===!0&&h.value!==-1&&Ke(l.$route.params,b.value.params)),f=c(()=>p.value===!0&&h.value===l.$route.matched.length-1&&Ve(l.$route.params,b.value.params)),x=c(()=>o.value===!0?f.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":p.value===!0?` ${r.activeClass}`:"":"");function _(m){try{return l.$router.resolve(m)}catch{}return null}function B(m,{returnRouterError:E,to:$=r.to,replace:C=r.replace}={}){if(r.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||r.target==="_blank")return Promise.resolve(!1);m.preventDefault();const R=l.$router[C===!0?"replace":"push"]($);return E===!0?R:R.then(()=>{}).catch(()=>{})}function L(m){if(o.value===!0){const E=$=>B(m,$);d("click",m,E),m.defaultPrevented!==!0&&E()}else d("click",m)}return{hasRouterLink:o,hasHrefLink:a,hasLink:y,linkTag:u,resolvedLink:b,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:L}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},He={xs:8,sm:10,md:14,lg:20,xl:24},Ue=["button","submit","reset"],We=/[^\s]\/[^\s]/,Xe=["flat","outline","push","unelevated"],Ye=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ge={...ue,...Qe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Xe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ze(e){const t=le(e,He),n=Ne(e),{hasRouterLink:r,hasLink:l,linkTag:d,linkAttrs:s,navigateOnClick:a}=Fe({fallbackTag:"button"}),q=c(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),b=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),o=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>o.value===!0?e.tabindex||0:-1),u=c(()=>Ye(e,"standard")),k=c(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,s.value):Ue.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),r.value!==!0&&We.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),h=c(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(o.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:a,isActionable:o}}const{passiveCapture:S}=pe;let T=null,A=null,O=null;var lt=F({name:"QBtn",props:{...Ge,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:r}=Q(),{classes:l,style:d,innerClasses:s,attributes:a,hasLink:q,linkTag:b,navigateOnClick:o,isActionable:y}=Ze(e),u=H(null),k=H(null);let h=null,p,f=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=c(()=>({center:e.round})),L=c(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),m=c(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const i={onClick:$,onKeydown:C,onMousedown:N};if(r.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";i[`onTouchstart${g}`]=R}return i}return{onClick:P}}),E=c(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...a.value,...m.value}));function $(i){if(u.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&u.value.contains(g)===!1&&g.contains(u.value)===!1){u.value.focus();const D=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",D,S),u.value!==null&&u.value.removeEventListener("blur",D,S)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",D,S),u.value.addEventListener("blur",D,S)}}o(i)}}function C(i){u.value!==null&&(n("keydown",i),I(i,[13,32])===!0&&A!==u.value&&(A!==null&&M(),i.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,S)),P(i)))}function R(i){u.value!==null&&(n("touchstart",i),i.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&M(),T=u.value,h=i.target,h.addEventListener("touchcancel",w,S),h.addEventListener("touchend",w,S)),p=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p=!1},200)))}function N(i){u.value!==null&&(i.qSkipRipple=p===!0,n("mousedown",i),i.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,S)))}function w(i){if(u.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===u.value)){if(i!==void 0&&i.type==="keyup"){if(A===u.value&&I(i,[13,32])===!0){const g=new MouseEvent("click",i);g.qKeyEvent=!0,i.defaultPrevented===!0&&xe(g),i.cancelBubble===!0&&ie(g),u.value.dispatchEvent(g),P(i),i.qKeyEvent=!0}n("keyup",i)}M()}}function M(i){const g=k.value;i!==!0&&(T===u.value||O===u.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===u.value&&(h!==null&&(h.removeEventListener("touchcancel",w,S),h.removeEventListener("touchend",w,S)),T=h=null),O===u.value&&(document.removeEventListener("mouseup",w,S),O=null),A===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,S),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(i){P(i),i.qSkipRipple=!0}return ye(()=>{M(!0)}),Object.assign(r,{click:$}),()=>{let i=[];e.icon!==void 0&&i.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=z(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:L.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+s.value},i)),e.loading!==null&&g.push(v(ke,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Ae)])]:null)),ae(v(b.value,E.value,g),[[Me,_.value,void 0,B.value]])}}});export{lt as Q,z as a,qe as b,F as c,nt as d,Y as e,Fe as f,ze as g,Ee as h,Ne as i,it as j,et as k,Se as l,rt as m,ut as n,ue as o,le as p,tt as q,at as r,Qe as u,De as v};