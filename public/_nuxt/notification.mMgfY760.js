import{j as Z,a as W,k as g,F as R,L as m,a5 as T,a0 as N,u as a,X as v,a2 as H,a1 as X,a6 as _,a3 as P,N as C,M as x,_ as Y,U as J,aa as F,a9 as $,ab as Q,Z as j,ac as ee,R as L,I as te,ag as D}from"./swiper-vue.4ZhlhtKr.js";import{H as oe,I as ne,L as I,gL as se,gM as V,gB as ie,M as A,K as ae,aY as le,b2 as re,al as M,aK as ce,gz as O,gN as ue}from"./entry.HuYbGiLS.js";const K=["success","info","warning","error"],fe=oe({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:ne},id:{type:String,default:""},message:{type:I([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:I(Function),default:()=>{}},onClose:{type:I(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...K,""],default:""},zIndex:Number}),de={destroy:()=>!0},pe=["id"],me=["textContent"],ve={key:0},ye=["innerHTML"],ge=Z({name:"ElNotification"}),Ce=Z({...ge,props:fe,emits:de,setup(t,{expose:s}){const o=t,{ns:n,zIndex:r}=se("notification"),{nextZIndex:f,currentZIndex:d}=r,{Close:c}=le,l=W(!1);let i;const u=g(()=>{const e=o.type;return e&&V[o.type]?n.m(e):""}),p=g(()=>o.type&&V[o.type]||o.icon),S=g(()=>o.position.endsWith("right")?"right":"left"),U=g(()=>o.position.startsWith("top")?"top":"bottom"),q=g(()=>{var e;return{[U.value]:`${o.offset}px`,zIndex:(e=o.zIndex)!=null?e:d.value}});function k(){o.duration>0&&({stop:i}=re(()=>{l.value&&h()},o.duration))}function B(){i==null||i()}function h(){l.value=!1}function G({code:e}){e===M.delete||e===M.backspace?B():e===M.esc?l.value&&h():k()}return R(()=>{k(),f(),l.value=!0}),ie(document,"keydown",G),s({visible:l,close:h}),(e,b)=>(m(),T(ee,{name:a(n).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:b[1]||(b[1]=z=>e.$emit("destroy")),persisted:""},{default:N(()=>[$(C("div",{id:e.id,class:v([a(n).b(),e.customClass,a(S)]),style:H(a(q)),role:"alert",onMouseenter:B,onMouseleave:k,onClick:b[0]||(b[0]=(...z)=>e.onClick&&e.onClick(...z))},[a(p)?(m(),T(a(A),{key:0,class:v([a(n).e("icon"),a(u)])},{default:N(()=>[(m(),T(X(a(p))))]),_:1},8,["class"])):_("v-if",!0),C("div",{class:v(a(n).e("group"))},[C("h2",{class:v(a(n).e("title")),textContent:P(e.title)},null,10,me),$(C("div",{class:v(a(n).e("content")),style:H(e.title?void 0:{margin:0})},[J(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),x(Y,{key:1},[_(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:e.message},null,8,ye)],2112)):(m(),x("p",ve,P(e.message),1))])],6),[[F,e.message]]),e.showClose?(m(),T(a(A),{key:0,class:v(a(n).e("closeBtn")),onClick:Q(h,["stop"])},{default:N(()=>[j(a(c))]),_:1},8,["class","onClick"])):_("v-if",!0)],2)],46,pe),[[F,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var he=ae(Ce,[["__file","notification.vue"]]);const E={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},w=16;let be=1;const y=function(t={},s=null){if(!ce)return{close:()=>{}};(typeof t=="string"||L(t))&&(t={message:t});const o=t.position||"top-right";let n=t.offset||0;E[o].forEach(({vm:u})=>{var p;n+=(((p=u.el)==null?void 0:p.offsetHeight)||0)+w}),n+=w;const r=`notification_${be++}`,f=t.onClose,d={...t,offset:n,id:r,onClose:()=>{Te(r,o,f)}};let c=document.body;O(t.appendTo)?c=t.appendTo:te(t.appendTo)&&(c=document.querySelector(t.appendTo)),O(c)||(c=document.body);const l=document.createElement("div"),i=j(he,d,L(d.message)?{default:()=>d.message}:null);return i.appContext=s??y._context,i.props.onDestroy=()=>{D(null,l)},D(i,l),E[o].push({vm:i}),c.appendChild(l.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};K.forEach(t=>{y[t]=(s={})=>((typeof s=="string"||L(s))&&(s={message:s}),y({...s,type:t}))});function Te(t,s,o){const n=E[s],r=n.findIndex(({vm:i})=>{var u;return((u=i.component)==null?void 0:u.props.id)===t});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const d=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let i=r;i<l;i++){const{el:u,component:p}=n[i].vm,S=Number.parseInt(u.style[c],10)-d-w;p.props.offset=S}}function Ee(){for(const t of Object.values(E))t.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=Ee;y._context=null;const Ne=ue(y,"$notify");export{Ne as E};
