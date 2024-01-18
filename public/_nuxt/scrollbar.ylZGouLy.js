import{H as $,K,J as I,aG as Z,gB as A,aK as ee,L as te,Q as E,a3 as j,R as ae,N as le}from"./entry.HuYbGiLS.js";import{j as B,i as oe,a as c,k as S,o as se,t as D,L as H,a5 as W,a0 as q,u as m,X as N,a2 as X,N as Y,aa as re,a9 as ne,ac as ie,M as J,Z as U,_ as ce,b as V,n as F,p as ue,r as ve,F as fe,Y as me,U as de,a1 as he,a6 as pe,H as be}from"./swiper-vue.4ZhlhtKr.js";const g=4,ye={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},ge=({move:d,size:u,bar:r})=>({[r.size]:u,transform:`translate${r.axis}(${d}%)`}),Q=Symbol("scrollbarContextKey"),Se=$({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),we="Thumb",ze=B({__name:"thumb",props:Se,setup(d){const u=d,r=oe(Q),l=I("scrollbar");r||Z(we,"can not inject scrollbar context");const i=c(),v=c(),s=c({}),f=c(!1);let a=!1,p=!1,b=ee?document.onselectstart:null;const t=S(()=>ye[u.vertical?"vertical":"horizontal"]),w=S(()=>ge({size:u.size,move:u.move,bar:t.value})),z=S(()=>i.value[t.value.offset]**2/r.wrapElement[t.value.scrollSize]/u.ratio/v.value[t.value.offset]),T=o=>{var e;if(o.stopPropagation(),o.ctrlKey||[1,2].includes(o.button))return;(e=window.getSelection())==null||e.removeAllRanges(),M(o);const n=o.currentTarget;n&&(s.value[t.value.axis]=n[t.value.offset]-(o[t.value.client]-n.getBoundingClientRect()[t.value.direction]))},P=o=>{if(!v.value||!i.value||!r.wrapElement)return;const e=Math.abs(o.target.getBoundingClientRect()[t.value.direction]-o[t.value.client]),n=v.value[t.value.offset]/2,h=(e-n)*100*z.value/i.value[t.value.offset];r.wrapElement[t.value.scroll]=h*r.wrapElement[t.value.scrollSize]/100},M=o=>{o.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",k),document.addEventListener("mouseup",y),b=document.onselectstart,document.onselectstart=()=>!1},k=o=>{if(!i.value||!v.value||a===!1)return;const e=s.value[t.value.axis];if(!e)return;const n=(i.value.getBoundingClientRect()[t.value.direction]-o[t.value.client])*-1,h=v.value[t.value.offset]-e,_=(n-h)*100*z.value/i.value[t.value.offset];r.wrapElement[t.value.scroll]=_*r.wrapElement[t.value.scrollSize]/100},y=()=>{a=!1,s.value[t.value.axis]=0,document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",y),L(),p&&(f.value=!1)},O=()=>{p=!1,f.value=!!u.size},x=()=>{p=!0,f.value=a};se(()=>{L(),document.removeEventListener("mouseup",y)});const L=()=>{document.onselectstart!==b&&(document.onselectstart=b)};return A(D(r,"scrollbarElement"),"mousemove",O),A(D(r,"scrollbarElement"),"mouseleave",x),(o,e)=>(H(),W(ie,{name:m(l).b("fade"),persisted:""},{default:q(()=>[ne(Y("div",{ref_key:"instance",ref:i,class:N([m(l).e("bar"),m(l).is(m(t).key)]),onMousedown:P},[Y("div",{ref_key:"thumb",ref:v,class:N(m(l).e("thumb")),style:X(m(w)),onMousedown:T},null,38)],34),[[re,o.always||f.value]])]),_:1},8,["name"]))}});var G=K(ze,[["__file","thumb.vue"]]);const _e=$({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ee=B({__name:"bar",props:_e,setup(d,{expose:u}){const r=d,l=c(0),i=c(0);return u({handleScroll:s=>{if(s){const f=s.offsetHeight-g,a=s.offsetWidth-g;i.value=s.scrollTop*100/f*r.ratioY,l.value=s.scrollLeft*100/a*r.ratioX}}}),(s,f)=>(H(),J(ce,null,[U(G,{move:l.value,ratio:s.ratioX,size:s.width,always:s.always},null,8,["move","ratio","size","always"]),U(G,{move:i.value,ratio:s.ratioY,size:s.height,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var He=K(Ee,[["__file","bar.vue"]]);const Ne=$({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:te([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Te={scroll:({scrollTop:d,scrollLeft:u})=>[d,u].every(E)},ke="ElScrollbar",Le=B({name:ke}),Re=B({...Le,props:Ne,emits:Te,setup(d,{expose:u,emit:r}){const l=d,i=I("scrollbar");let v,s;const f=c(),a=c(),p=c(),b=c("0"),t=c("0"),w=c(),z=c(1),T=c(1),P=S(()=>{const e={};return l.height&&(e.height=j(l.height)),l.maxHeight&&(e.maxHeight=j(l.maxHeight)),[l.wrapStyle,e]}),M=S(()=>[l.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!l.native}]),k=S(()=>[i.e("view"),l.viewClass]),y=()=>{var e;a.value&&((e=w.value)==null||e.handleScroll(a.value),r("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function O(e,n){be(e)?a.value.scrollTo(e):E(e)&&E(n)&&a.value.scrollTo(e,n)}const x=e=>{E(e)&&(a.value.scrollTop=e)},L=e=>{E(e)&&(a.value.scrollLeft=e)},o=()=>{if(!a.value)return;const e=a.value.offsetHeight-g,n=a.value.offsetWidth-g,h=e**2/a.value.scrollHeight,_=n**2/a.value.scrollWidth,R=Math.max(h,l.minSize),C=Math.max(_,l.minSize);z.value=h/(e-h)/(R/(e-R)),T.value=_/(n-_)/(C/(n-C)),t.value=R+g<e?`${R}px`:"",b.value=C+g<n?`${C}px`:""};return V(()=>l.noresize,e=>{e?(v==null||v(),s==null||s()):({stop:v}=ae(p,o),s=A("resize",o))},{immediate:!0}),V(()=>[l.maxHeight,l.height],()=>{l.native||F(()=>{var e;o(),a.value&&((e=w.value)==null||e.handleScroll(a.value))})}),ue(Q,ve({scrollbarElement:f,wrapElement:a})),fe(()=>{l.native||F(()=>{o()})}),me(()=>o()),u({wrapRef:a,update:o,scrollTo:O,setScrollTop:x,setScrollLeft:L,handleScroll:y}),(e,n)=>(H(),J("div",{ref_key:"scrollbarRef",ref:f,class:N(m(i).b())},[Y("div",{ref_key:"wrapRef",ref:a,class:N(m(M)),style:X(m(P)),onScroll:y},[(H(),W(he(e.tag),{id:e.id,ref_key:"resizeRef",ref:p,class:N(m(k)),style:X(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:q(()=>[de(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?pe("v-if",!0):(H(),W(He,{key:0,ref_key:"barRef",ref:w,height:t.value,width:b.value,always:e.always,"ratio-x":T.value,"ratio-y":z.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Ce=K(Re,[["__file","scrollbar.vue"]]);const Me=le(Ce);export{Me as E};
