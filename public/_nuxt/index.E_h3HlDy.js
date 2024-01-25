import{D as de,b as ue,s as me,E as A,c as ce,i as pe,d as M,e as _e,a as fe,r as H,f as ve}from"./entry.t-rqPOs0.js";import{E as ge}from"./checkbox.zfGg0ai0.js";import{E as he,a as be}from"./select.CPu1gYEQ.js";import{E as ye}from"./tag.C0ahusY6.js";import{j as xe,a as m,r as we,k as P,O as x,P as L,$ as o,a2 as n,Q as r,u as t,x as w,ak as ke,a6 as f,Z as K,a5 as k,a0 as Ee,as as Ve,a7 as Se,ab as F,ac as G,a8 as ze,at as Q,an as Ce,ao as Ie}from"./swiper-vue.Dj7aAS3P.js";import{E as Pe,a as Le}from"./tabs.zy60X67L.js";import{E as Ne}from"./empty.RhpDpTy5.js";import"./scrollbar.VqFpSCdd.js";import"./popper.b7Al0Wsi.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./flatten.qRdZVAia.js";import"./strings.Y1vdtDWm.js";import"./debounce.0E-5_dMF.js";import"./index.dh5FAeg5.js";import"./index.T-hRbm4W.js";const Te=Q(()=>H(()=>import("./GoodsList.O9ct8try.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url).then(i=>i.default||i)),Be=Q(()=>H(()=>import("./PostList.pyopvlUc.js"),__vite__mapDeps([13,2,3,4,5,6,7,8,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,11,33,34,35,36,37]),import.meta.url).then(i=>i.default||i)),N=i=>(Ce("data-v-87455719"),i=i(),Ie(),i),Oe={class:"mt-10 layout-default",grid:"~ cols-1 md:cols-[1fr_4fr_1fr]"},Ue=N(()=>r("div",{class:"left sticky top-6rem"},null,-1)),$e={"min-h-80vh":"",flex:"","flex-col":"","justify-start":""},De=N(()=>r("header",{class:"group mb-2rem flex-row-c-c cursor-pointer text-center text-2rem tracking-0.4em"},[r("i",{class:"i-solar:magnifer-outline mr-4 inline-block transform-origin-[right_bottom] text-0.6em transition-200 transition-all group-hover:-rotate-10"}),f(" 搜索 ")],-1)),Re={class:"h-2.6rem w-1/1 flex-row-c-c"},je={class:"mt-3 flex items-start md:h-2rem"},qe={"pr-0.3em":""},Ae={key:0,"min-h-80vh":"","animate-fade-in":""},Me=N(()=>r("div",{class:"right sticky top-6rem"},null,-1)),Ke=xe({__name:"index",setup(i){var T,B,O,U,$,D;const E=m("goods"),V=de(),p=m(!0),S=m(!1),d=m(((B=(T=V.query)==null?void 0:T.name)==null?void 0:B.toString())||""),_=m(!1),v=m(),g=m(),a=we({name:(U=(O=V.query)==null?void 0:O.name)==null?void 0:U.toString(),cid:(D=($=V.query)==null?void 0:$.cid)==null?void 0:D.toString(),isPostage:void 0,priceSort:void 0,viewsSort:void 0,saleSort:void 0,isNew:void 0}),u=ue("jiwu_index_search",[]),z=P({get(){return!!a.isNew},set(s){a.isNew=+s||void 0}}),C=P({get(){return!!a.isPostage},set(s){a.isPostage=+s||void 0}});function h(s="goods"){if(S.value)return A.warning("搜索太频繁了");if(!d.value)return A.warning("请输入关键词");const e=u.value.includes(d.value);return!e&&u.value.length<=8?u.value.unshift(d.value.trim()):e&&u.value.pop(),a.name=d.value,S.value=!0,setTimeout(()=>(S.value=!1,p.value=!0,Promise.resolve()),500)}function W(s){u.value.splice(u.value.indexOf(s),1)}m(!1);function Z(){p.value=!1,a.cid=void 0,a.name=void 0,a.isPostage=void 0,a.priceSort=void 0,a.viewsSort=void 0,a.saleSort=void 0,a.isNew=void 0,d.value=""}function J(s){u.value.push(s),d.value=s,h()}const X=P(()=>{var s,e,b,y;return`${((e=(s=v==null?void 0:v.value)==null?void 0:s.pageInfo)==null?void 0:e.total)||"0"}个商品, ${((y=(b=g==null?void 0:g.value)==null?void 0:b.pageInfo)==null?void 0:y.total)||"0"}条帖子`});return(s,e)=>{const b=ce,y=pe,R=ge,c=he,I=be,Y=M,ee=M,oe=ye,j=_e,te=Te,q=Pe,ae=Be,le=Le,se=Ne,ne=fe;return x(),L("div",null,[o(ne,{name:"main",header:!1,"left-menu":!1,menu:["shopcart","back"]},{default:n(()=>[o(j,null,{default:n(()=>[r("div",Oe,[Ue,r("div",$e,[De,r("div",Re,[o(b,{modelValue:t(d),"onUpdate:modelValue":e[0]||(e[0]=l=>w(d)?d.value=l:null),modelModifiers:{trim:!0},clearable:"","input-style":"border-radius:1rem;height:2.6rem;font-size:1rem;",type:"text",size:"large",class:"shadow-sm",autocomplete:"off","prefix-icon":"ElIconSearch"in s?s.ElIconSearch:t(me),minlength:"2",maxlength:"30","on-search":h,placeholder:"搜索关键字帖子、商品...",onKeyup:ke(h,["enter"])},null,8,["modelValue","prefix-icon"]),o(y,{type:"info","shadow-md":"",style:{width:"10em",height:"100%","font-size":"1.2rem","margin-left":"1em"},size:"large",onClick:e[1]||(e[1]=l=>h())},{default:n(()=>[f(" 搜 索 ")]),_:1})]),r("div",je,[r("div",{class:K([{"h-6rem md:h-3rem":t(_)},"grid grid-cols-4 h-0 flex-1 gap-2 overflow-hidden opacity-80 transition-300 transition-height md:grid-cols-8"])},[o(R,{modelValue:t(z),"onUpdate:modelValue":e[2]||(e[2]=l=>w(z)?z.value=l:null),class:"rounded-4px bg-white px-2 border-default dark:bg-dark-5",label:"新品",style:{margin:"0"}},null,8,["modelValue"]),o(R,{modelValue:t(C),"onUpdate:modelValue":e[3]||(e[3]=l=>w(C)?C.value=l:null),class:"rounded-4px bg-white px-2 border-default dark:bg-dark-5",label:"免运费",style:{margin:"0"}},null,8,["modelValue"]),o(I,{modelValue:t(a).saleSort,"onUpdate:modelValue":e[4]||(e[4]=l=>t(a).saleSort=l),size:"default",placeholder:"销量排序"},{default:n(()=>[o(c,{label:"销量升序",value:0}),o(c,{label:"销量降序",value:1})]),_:1},8,["modelValue"]),o(I,{modelValue:t(a).priceSort,"onUpdate:modelValue":e[5]||(e[5]=l=>t(a).priceSort=l),size:"default",placeholder:"价格排序"},{default:n(()=>[o(c,{label:"价格升序",value:0}),o(c,{label:"价格降序",value:1})]),_:1},8,["modelValue"]),o(I,{modelValue:t(a).viewsSort,"onUpdate:modelValue":e[6]||(e[6]=l=>t(a).viewsSort=l),size:"default",placeholder:"浏览量排序"},{default:n(()=>[o(c,{label:"浏览量升序",value:0}),o(c,{label:"浏览量降序",value:1})]),_:1},8,["modelValue"]),o(Y,{"icon-class":"i-solar:refresh-outline mr-2","transition-icon":"",onClick:Z},{default:n(()=>[f(" 重置 ")]),_:1})],2),o(ee,{border:"false",plain:"",class:"z-8","icon-class":"i-solar:hamburger-menu-line-duotone ml-2 order-2",style:{"box-shadow":"none",border:"none","background-color":"transparent"},onClick:e[7]||(e[7]=l=>_.value=!t(_))},{default:n(()=>[f(k(t(_)?"收起":"筛选"),1)]),_:1})]),o(j,null,{fallback:n(()=>[f(" 历史加载中... ")]),default:n(()=>[r("div",{class:K(["flex flex-nowrap cursor-pointer items-center overflow-hidden py-1 transition-200 transition-margin",t(_)?"mt-0":"-mt-2.5rem"])},[(x(!0),L(Ee,null,Ve(t(u),(l,re)=>(x(),Se(oe,{key:l+re,size:"large",closable:"",class:"mr-1 mt-2 transition-300",onClose:ie=>W(l),onClick:ie=>J(l)},{default:n(()=>[r("span",qe,k(l),1)]),_:2},1032,["onClose","onClick"]))),128))],2)]),_:1}),F(r("small",{"my-2":"","opacity-80":""},k("搜索结果")+" "+k(t(X)),513),[[G,t(p)]]),F(o(le,{modelValue:t(E),"onUpdate:modelValue":e[8]||(e[8]=l=>w(E)?E.value=l:null),class:"min-h-50vh","tab-position":"top"},{default:n(()=>[o(q,{lazy:"",class:"zoom-in",name:"goods",label:"商 品"},{default:n(()=>[o(te,{ref_key:"goodsListRef",ref:v,class:"grid grid-cols-2 grid-gap-4 md:grid-cols-4",dto:t(a)},null,8,["dto"])]),_:1}),o(q,{name:"post",label:"帖 子",class:"zoom-in"},{default:n(()=>[o(ae,{ref_key:"postListRef",ref:g,dto:t(a),class:"grid grid-gap-4"},null,8,["dto"])]),_:1})]),_:1},8,["modelValue"]),[[G,t(p)]]),t(p)?ze("",!0):(x(),L("div",Ae,[o(se,{"image-size":180,class:"mt-10em",description:"期待你的搜索 ✨"})]))]),Me])]),_:1})]),_:1})])}}}),ro=ve(Ke,[["__scopeId","data-v-87455719"]]);export{ro as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./GoodsList.O9ct8try.js","./index.-orXLehy.js","./ElImage.MMEIiX96.js","./swiper-vue.Dj7aAS3P.js","./swiper-vue.CRufKKKm.css","./entry.t-rqPOs0.js","./entry.k6-BttGb.css","./debounce.0E-5_dMF.js","./ElImage.dg4y3aGk.css","./index.8uyA1Q9v.css","./nuxt-link.AUBdcVxd.js","./AutoIncre.vue.cpfunnOh.js","./GoodsList.1p6fEF-7.css","./PostList.pyopvlUc.js","./tag.C0ahusY6.js","./tag.ItIytdvz.css","./TagList.vue.OeOiiCEW.js","./CommentPreview.1tOtzHAm.js","./select.CPu1gYEQ.js","./popper.b7Al0Wsi.js","./popper.2BhxBuwE.css","./scrollbar.VqFpSCdd.js","./scrollbar.Smf0pYfu.css","./strings.Y1vdtDWm.js","./isEqual.OSnr_sHV.js","./hasIn.6fummut8.js","./index.dh5FAeg5.js","./select.WyCmEko8.css","./OssFileUpload.AYjrnYRm.js","./progress.FoUIz2xX.js","./progress.rXLlm_9F.css","./index.keDQovFV.js","./OssFileUpload.-TDo8IgO.css","./notification.YJSnxgg5.js","./notification.6oJvQm9r.css","./CommentPreview.JFJ3T4Gg.css","./post.az1H9mBx.js","./PostList.BPaQlUWh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
