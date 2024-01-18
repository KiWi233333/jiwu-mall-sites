import{o,u as U,S as V,c as b,p as k,q as B,h as C}from"./entry.HuYbGiLS.js";import{E as F}from"./dialog.jW0LsHVx.js";import{E as I}from"./notification.mMgfY760.js";import{j as x,k as z,a as _,L as N,a5 as S,a0 as s,a4 as w,Z as l,N as L,u as p,ai as $,x as P}from"./swiper-vue.4ZhlhtKr.js";function J(e=10,t,r){return o.get("/chat/user/friend/page",{pageSize:e,cursor:t},{headers:{Authorization:r}})}function M(e=10,t,r){return o.get("/chat/user/friend/apply/page",{page:e,size:t},{headers:{Authorization:r}})}function Q(e,t,r,d){return o.post(`/chat/user/friend/user/${e}/${t}`,{...r},{headers:{Authorization:d}})}var q=(e=>(e[e.Load=0]="Load",e[e.Argee=1]="Argee",e))(q||{});function D(e,t){return o.post("/chat/user/friend/apply",{...e},{headers:{Authorization:t}})}function W(e,t){return o.post("/chat/user/friend/check",{...e},{headers:{Authorization:t}})}function X(e,t){return o.deleted(`/chat/user/friend/${e}`,{},{headers:{Authorization:t}})}var G=(e=>(e[e.Empty=-1]="Empty",e[e.User=0]="User",e[e.NewFriend=1]="NewFriend",e[e.GroupFriend=2]="GroupFriend",e))(G||{});function Y(e,t){return o.put("/chat/user/friend/apply",{...e},{headers:{Authorization:t}})}const K={class:"dialog-footer"},O=x({__name:"ApplyDialog",props:{show:{type:[Boolean,null]},userId:{}},emits:["update:show","submit"],setup(e,{emit:t}){const r=e,d=t,n=z({get:()=>r.show!==void 0&&r.show===!0,set:i=>d("update:show",i)}),c=_(),u=_({msg:"",targetUid:""}),y=U();async function g(){var i;(i=c==null?void 0:c.value)==null||i.validate(async a=>{if(!a||!r.userId)return;const f=await D({...u.value,targetUid:r.userId},y.getToken);n.value=!1,f.code===V.SUCCESS&&(u.value={msg:"",targetUid:""},d("submit",r.userId),I.success("好友申请已发送！"))})}return(i,a)=>{const f=b,A=k,v=B,h=C,E=F;return N(),S(E,{modelValue:p(n),"onUpdate:modelValue":a[2]||(a[2]=m=>P(n)?n.value=m:null),title:"好友申请",width:"fit-content",center:"","append-to-body":""},{footer:s(()=>[L("span",K,[l(h,{onClick:a[1]||(a[1]=m=>n.value=!1)},{default:s(()=>[w("取消")]),_:1}),l(h,{type:"primary",onClick:g},{default:s(()=>[w(" 发起申请 ")]),_:1})])]),default:s(()=>[l(v,{ref_key:"applyFormRef",ref:c,model:p(u)},{default:s(()=>[l(A,{label:"",prop:"msg",rules:[{min:1,max:50,trigger:["blur","change"],message:"申请理由1-50字符！"},{required:!0,trigger:["blur"],message:"申请理由不能为空！"}],class:"w-20rem"},{default:s(()=>[l(f,{modelValue:p(u).msg,"onUpdate:modelValue":a[0]||(a[0]=m=>p(u).msg=m),type:"textarea",rows:4,placeholder:"发送一条有趣的问候语吧~",onKeyup:$(g,["enter"])},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])}}});export{q as C,G as F,O as _,J as a,M as b,Y as c,X as d,Q as g,W as i};
