import{D as S,k as B,B as I,F as k,S as P,n as E,e as N,a as T,r as b,l as U,f as V}from"./entry.t-rqPOs0.js";import{_ as $}from"./ElImage.MMEIiX96.js";import{_ as A}from"./CategoryTabs.5rBu88jF.js";import{j as D,a as l,au as L,O,P as R,$ as a,a2 as u,Q as s,u as e,a6 as z,a5 as j,at as q}from"./swiper-vue.Dj7aAS3P.js";import"./debounce.0E-5_dMF.js";import"./tabs.zy60X67L.js";import"./strings.Y1vdtDWm.js";import"./index.T-hRbm4W.js";import"./PostList.pyopvlUc.js";import"./nuxt-link.AUBdcVxd.js";import"./tag.C0ahusY6.js";import"./TagList.vue.OeOiiCEW.js";import"./CommentPreview.1tOtzHAm.js";import"./select.CPu1gYEQ.js";import"./popper.b7Al0Wsi.js";import"./scrollbar.VqFpSCdd.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./index.dh5FAeg5.js";import"./OssFileUpload.AYjrnYRm.js";import"./progress.FoUIz2xX.js";import"./index.keDQovFV.js";import"./AutoIncre.vue.cpfunnOh.js";import"./notification.YJSnxgg5.js";import"./post.az1H9mBx.js";import"./GoodsList.O9ct8try.js";import"./index.-orXLehy.js";const F=q(()=>b(()=>import("./Rank.-Nh02S7t.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url).then(r=>r.default||r)),K={"layout-default":"",grid:"~ cols-1 gap-6"},M={"mt-2":"",flex:"","items-center":"","gap-6":""},Q={grid:"~ md:cols-[5fr_2fr] cols-1 gap-6 items-start"},G={class:"pt-0",grid:"~ cols-1 gap-6"},H={class:"sticky top-5.6rem max-h-500px min-h-300px"},J=D({__name:"[id]",async setup(r){var _,p;let m,i;const f=S(),n=l((p=(_=f.params)==null?void 0:_.id)==null?void 0:p.toString()),o=l();async function g(){const t=await k(n.value);t.data&&t.code===P.SUCCESS&&(o.value=t.data)}[m,i]=L(()=>g()),await m,i(),B({title:()=>{var t;return`${(t=o==null?void 0:o.value)==null?void 0:t.name} 社区分类 - 极物圈 👑`},description:()=>{var t;return`${(t=o==null?void 0:o.value)==null?void 0:t.name} 社区分类 - 极物圈 开启你的极物之旅！`},keywords:U});function y(t){E({path:"/community/post/new",query:{cid:t}})}return(t,W)=>{const h=$,C=A,v=F,x=N,w=T;return O(),R("div",null,[a(w,{name:"main",menu:[{name:"post",isTeleport:!0,methods:()=>y(e(n))},"back"]},{default:u(()=>[a(x,null,{default:u(()=>{var c,d;return[s("div",K,[s("h2",M,[a(h,{class:"h-4rem w-4rem shadow-sm border-default v-card",fit:"cover",src:("BaseUrlImg"in t?t.BaseUrlImg:e(I))+((c=e(o))==null?void 0:c.image)},null,8,["src"]),z(" "+j((d=e(o))==null?void 0:d.name),1)]),s("div",Q,[s("main",G,[a(C,{"category-id":e(n)},null,8,["category-id"])]),s("section",H,[a(v,{dto:{cid:e(n),viewsSort:1,commentSort:1},limit:10,title:"热榜"},null,8,["dto"])])])])]}),_:1})]),_:1},8,["menu"])])}}}),Bt=V(J,[["__scopeId","data-v-608f3b98"]]);export{Bt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Rank.-Nh02S7t.js","./divider.Ixn223Qv.js","./entry.t-rqPOs0.js","./swiper-vue.Dj7aAS3P.js","./swiper-vue.CRufKKKm.css","./entry.k6-BttGb.css","./divider.mvCfgREV.css","./tag.C0ahusY6.js","./tag.ItIytdvz.css","./ElImage.MMEIiX96.js","./debounce.0E-5_dMF.js","./ElImage.dg4y3aGk.css","./nuxt-link.AUBdcVxd.js","./empty.RhpDpTy5.js","./empty.sDhVTJEQ.css","./scrollbar.VqFpSCdd.js","./scrollbar.Smf0pYfu.css","./post.az1H9mBx.js","./Rank.y3OSjSFp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}