import{E as it}from"./divider.Ixn223Qv.js";import{B as J,L as X,u as G,af as ct,S as z,w as Y,b2 as rt,n as dt,h as O,E as U,i as ut,A as mt,f as N,ai as _t,e as tt,ah as pt,a as ft,G as Z}from"./entry.t-rqPOs0.js";import{E as vt,b as gt,a as ht}from"./checkbox.zfGg0ai0.js";import{_ as et}from"./ElImage.MMEIiX96.js";import{j as D,O as v,P as b,Q as t,$ as c,u as i,X as bt,a6 as L,a5 as C,a as x,k as j,ap as F,ab as A,Z as yt,a2 as m,x as M,a0 as ot,as as at,an as H,ao as Q,a7 as st,a8 as q,r as $t,ac as lt}from"./swiper-vue.Dj7aAS3P.js";import{E as nt}from"./scrollbar.VqFpSCdd.js";/* empty css                       */import{a as kt,t as Ct,d as wt}from"./collect.9Z8GP7uy.js";import{E as xt,a as Et}from"./tabs.zy60X67L.js";import{E as St}from"./tag.C0ahusY6.js";import{_ as It}from"./nuxt-link.AUBdcVxd.js";import{_ as Tt}from"./TagList.vue.OeOiiCEW.js";import{_ as Lt}from"./AutoIncre.vue.cpfunnOh.js";import{i as Bt,t as Pt,P as R}from"./post.az1H9mBx.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./flatten.qRdZVAia.js";import"./debounce.0E-5_dMF.js";import"./strings.Y1vdtDWm.js";import"./index.T-hRbm4W.js";const Ut={class:"group w-full flex flex-col cursor-pointer border-transparent rounded-4px dark:border-transparent"},At={class:"img relative h-8rem w-full overflow-hidden rounded-t-inherit md:h-9rem"},Vt={class:"absolute left-0 top-0"},zt=t("div",{class:"inline text-dark dark:text-light"},"取消收藏",-1),Dt=t("i",{"i-solar:star-bold":"","ml-1":"","p-0.6em":"","text-yellow-4":""},null,-1),Gt=[zt,Dt],Nt={class:"view absolute bottom-0 left-0 z-1 w-full flex-row-bt-c bg-[var(--el-bg-color-primary)] px-3 py-1 color-light opacity-0 backdrop-blur-2em transition-300","group-hover:opacity-80":""},Ot={class:"icon"},jt=t("i",{class:"i-solar:eye-bold mr-1 p-2"},null,-1),Mt={class:"w-full truncate"},Rt={"color-red-5":"",class:"texts"},Ft={"pr-1":""},Ht={hidden:"","text-0.6em":"","color-coolgray":"","md:inline":"",style:{"text-decoration":"line-through"}},Qt=D({__name:"GoodsCard",props:{data:{}},emits:["link","cancel"],setup(p){return(l,e)=>{const a=et;return v(),b("div",Ut,[t("div",At,[c(a,{loading:"lazy",class:"h-full w-full",src:("BaseUrlImg"in l?l.BaseUrlImg:i(J))+l.data.goods.images[0],alt:l.data.goods.name,fit:"cover",onClick:e[0]||(e[0]=o=>l.$emit("link"))},null,8,["src","alt"]),t("div",Vt,[bt(l.$slots,"btns")]),t("small",{class:"group absolute right-0 top-0 m-2 bg-light py-0.6 pl-2.6 pr-1.8 text-0.8rem text-black opacity-100 shadow v-card dark:text-light hover:text-[var(--el-color-danger)] group-hover:opacity-100 md:opacity-0",onClick:e[1]||(e[1]=o=>l.$emit("cancel",l.data.goods.id))},Gt),t("small",Nt,[t("div",Ot,[jt,L(" "+C(l.data.goods.views),1)])])]),t("div",{class:"relative h-1/3 flex flex-col justify-between justify-around px-2 py-2 md:px-3",onClick:e[2]||(e[2]=o=>l.$emit("link"))},[t("h4",Mt,C(l.data.goods.name),1),t("p",Rt,[t("strong",Ft,"￥"+C(i(X)(l.data.goods.price)),1),t("small",Ht," ￥"+C(i(X)(l.data.goods.costPrice)),1)])])])}}}),K=p=>(H("data-v-4734e6cb"),p=p(),Q(),p),Kt={"overflow-x-hidden":""},Wt={class:"mb-3 flex-row-bt-c"},Xt=K(()=>t("small",{"opacity-60":""},"操 作 ：",-1)),Zt={class:"btns flex"},qt=K(()=>t("i",{class:"i-solar:refresh-outline h-1em w-1em cursor-pointer bg-[var(--el-color-info)] transition-300 hover:rotate-180","mr-2":""},null,-1)),Jt=K(()=>t("div",{hidden:"","md:inline":""}," 取消 ",-1)),Yt={grid:"~ cols-2 md:cols-5 gap-6"},te={"mt-6":"",block:"","text-center":"","opacity-60":""},ee=D({__name:"GoodsList",setup(p){const l=x(!1),e=x(!1),a=G(),o=ct(async()=>{if(l.value)return;const{data:n,code:r}=await kt(a.getToken);return n.forEach(u=>{u.goods.images=typeof u.goods.images=="string"?u.goods.images.split(","):[]}),setTimeout(()=>{l.value=!1},300),r===z.SUCCESS?n:[]},"$WFAnLQopP7");function y(n){l.value||O.confirm("是否取消收藏？","取消提示",{confirmButtonText:"确 认",confirmButtonClass:"el-button--warning is-plain border-default ",lockScroll:!1,cancelButtonText:"取 消",center:!0,callback:async r=>{if(r==="confirm"){l.value=!0;const{code:u}=await Ct(n,a.getToken);if(u===z.SUCCESS){if(o.data.value){for(let g=0;g<o.data.value.length;g++)if(o.data.value[g].goods.id===n){o.data.value.splice(g,1);break}}U.success("取消成功！")}else U.error("取消失败！")}l.value=!1}})}const _=x([]),d=j({get(){var n;return _.value.length===((n=o.data.value)==null?void 0:n.length)},set(n){var r;n?_.value=((r=o.data.value)==null?void 0:r.map(u=>u.goods.id))||[]:_.value.splice(0)}});Y(e,n=>{n||_.value.splice(0)});function $(){if(l.value||_.value.length===0)return U.warning("请选中取消的商品！");O.confirm(`是否取消${_.value.length}个商品收藏？`,"取消提示",{confirmButtonText:"确 认",confirmButtonClass:"el-button--danger  border-default ",cancelButtonText:"取 消",lockScroll:!1,center:!0,callback:async n=>{if(n==="confirm"){const{code:r}=await wt(_.value,a.getToken);r===z.SUCCESS?(o.data.value&&o.data.value.forEach((u,g)=>{_.value.includes(u.goods.id)&&o.data.value&&o.data.value.splice(g,1)}),U.success("取消成功！")):U.error("取消失败！")}}})}async function k(){l.value=!0,setTimeout(async()=>{l.value=!1,await o.refresh()},300)}return(n,r)=>{const u=ut,g=vt,w=Qt,P=gt,s=ht,E=nt,S=F("auto-animate"),I=mt;return A((v(),b("div",Kt,[t("div",Wt,[Xt,t("div",Zt,[t("div",{class:yt(["w-0 flex justify-between overflow-hidden truncate opacity-80 transition-300 transition-width",{"w-14.8em":i(e)}]),"mr-2":""},[c(u,{size:"small",onClick:k},{default:m(()=>[qt,L(" 刷新 ")]),_:1}),c(g,{modelValue:i(d),"onUpdate:modelValue":r[0]||(r[0]=h=>M(d)?d.value=h:null),border:!0,label:"全选",size:"small"},null,8,["modelValue"]),c(u,{plain:"",type:"danger",icon:"ElIconDelete"in n?n.ElIconDelete:i(rt),size:"small",onClick:$},{default:m(()=>[L(" 批量 "),Jt]),_:1},8,["icon"])],2),c(u,{size:"small",plain:"",type:"info",onClick:r[1]||(r[1]=h=>e.value=!i(e))},{default:m(()=>[L(C(i(e)?"取消":"管理"),1)]),_:1})])]),c(E,{height:"62vh","overflow-x-hidden":"","rounded-8px":""},{default:m(()=>{var h;return[c(s,{modelValue:i(_),"onUpdate:modelValue":r[2]||(r[2]=f=>M(_)?_.value=f:null),disabled:!i(e)},{default:m(()=>[A((v(),b("div",Yt,[(v(!0),b(ot,null,at(i(o).data.value,f=>(v(),b("div",{key:f.id},[c(P,{label:f.goods.id,class:"transition-300 active:scale-96 hover:shadow"},{default:m(()=>[c(w,{data:f,onLink:T=>!i(e)&&("navigateTo"in n?n.navigateTo:i(dt))(`/goods/detail/${f.goods.id}`),onCancel:y},{btns:m(()=>[]),_:2},1032,["data","onLink"])]),_:2},1032,["label"])]))),128))])),[[S,{duration:300,easing:"cubic-bezier(0.61, 0.225, 0.195, 1.3)"}]])]),_:1},8,["modelValue","disabled"]),t("small",te,C((h=i(o).data.value)!=null&&h.length?"暂无更多收藏":"还没有收藏噢，快去逛一逛商品吧"),1)]}),_:1})])),[[I,i(l),void 0,{fullscreen:!0,lock:!0}]])}}}),oe=N(ee,[["__scopeId","data-v-4734e6cb"]]),B=p=>(H("data-v-530a5227"),p=p(),Q(),p),ae={"h-fit":"","flex-row-bt-c":"","border-0":"","border-b-1px":"","py-4":"","border-default":""},se={class:"h-5rem flex flex-1 flex-col pr-4"},le={class:"flex-row-bt-c"},ne={for:"content",class:"truncate",flex:"","items-center":"","gap-2":"",truncate:"","font-500":""},ie=B(()=>t("i",{"i-solar:crown-star-bold":"","mr-1":"","p-0.5em":""},null,-1)),ce={class:"mt-a flex-row-bt-c"},re={class:"mt-4 hidden w-full items-center gap-2 md:flex"},de={class:"tip-group tip-group link-text mr-2"},ue=B(()=>t("i",{class:"i-solar:chat-dots-outline mr-1 p-0.5em"},null,-1)),me={class:"link-text mr-2"},_e=B(()=>t("i",{class:"i-solar:like-outline mr-1 p-0.5em"},null,-1)),pe={class:"link-text"},fe=B(()=>t("i",{class:"i-solar:share-outline mr-1 p-0.5em"},null,-1)),ve=B(()=>t("small",null,"分享",-1)),ge=[fe,ve],he=B(()=>t("i",{class:"i-solar:star-outline mr-1 p-0.5em"},null,-1)),be=B(()=>t("small",null,"取消收藏",-1)),ye=[he,be],$e={key:0},ke=D({__name:"PostCardSe",props:{data:{}},emits:["cancel"],setup(p,{emit:l}){G();const e=`${location.protocol}/${location==null?void 0:location.host}`;return(a,o)=>{var n,r,u,g,w,P,s,E,S,I,h;const y=St,_=It,d=Tt,$=et,k=F("copying");return v(),b("main",ae,[t("div",se,[c(_,{tag:"div",to:`/community/post/detail/${a.data.postId}`},{default:m(()=>{var f,T,V,W;return[t("div",le,[t("h4",ne,[(T=(f=a.data)==null?void 0:f.postInfo)!=null&&T.isEssence?(v(),st(y,{key:0,class:"font-600 shadow",round:"",type:"warning",effect:"dark",size:"small"},{default:m(()=>[ie,L(" 精选 ")]),_:1})):q("",!0),L(" "+C((W=(V=a.data)==null?void 0:V.postInfo)==null?void 0:W.title),1)])])]}),_:1},8,["to"]),t("div",ce,[t("div",re,[t("span",de,[ue,t("small",null,C(((r=(n=a.data)==null?void 0:n.postInfo)==null?void 0:r.comments)||"暂无"),1)]),t("span",me,[_e,t("small",null,C(((g=(u=a.data)==null?void 0:u.postInfo)==null?void 0:g.likes)||"暂无"),1)]),A((v(),b("span",pe,ge)),[[k,`${e}/community/post/detail/${(P=(w=a.data)==null?void 0:w.postInfo)==null?void 0:P.id}`,void 0,{toast:!0}]]),t("span",{class:"link-text",onClick:o[0]||(o[0]=f=>a.$emit("cancel",a.data))},ye)]),(S=(E=(s=a.data)==null?void 0:s.postInfo)==null?void 0:E.tags)!=null&&S.trim()?(v(),b("div",$e,[c(_,{tag:"div",class:"grid flex gap-2 op-70",to:`/community/post/detail/${a.data.postId}`},{default:m(()=>{var f,T;return[c(d,{size:"small",tags:(T=(f=a.data)==null?void 0:f.postInfo)==null?void 0:T.tags,effect:"dark"},null,8,["tags"])]}),_:1},8,["to"])])):q("",!0)])]),c($,{fit:"cover",class:"h-5rem w-8rem card-default",loading:"lazy","preview-teleported":"",src:("BaseUrlImg"in a?a.BaseUrlImg:i(J))+((h=(I=a.data)==null?void 0:I.postInfo)==null?void 0:h.cover)},null,8,["src"])])}}}),Ce=N(ke,[["__scopeId","data-v-530a5227"]]),we={class:"grid grid-gap-6"},xe=D({__name:"PostActionList",props:{dto:{default:()=>({isPostInfo:1})},limit:{},class:{default:""},cardClass:{default:""},title:{default:"收藏"}},setup(p,{expose:l}){const e=p,a=x(!1),o=x([]),y=x(0),_=x(e.limit||10),d=$t({total:-1,pages:-1,current:-1}),$=j(()=>(d==null?void 0:d.total)===0&&d.pages===0),k=j(()=>d.pages>0&&(y.value>=d.pages||e.limit!==void 0&&e.limit<=o.value.length)),n=G();async function r(){if(a.value||k.value||$.value)return;if(e.limit!==void 0&&o.value.length>=e.limit){a.value=!1;return}a.value=!0,y.value++;const s=await Bt(y.value,_.value,e==null?void 0:e.dto,n.getToken);(s==null?void 0:s.code)===z.SUCCESS&&(d.total=s==null?void 0:s.data.total,d.current=s==null?void 0:s.data.current,d.pages=s==null?void 0:s.data.pages,s!=null&&s.data.records&&(s!=null&&s.data.records.length)&&o.value.push(...s==null?void 0:s.data.records),a.value=!1)}function u(){o.value.splice(0),d.total=-1,d.pages=-1,d.current=-1,y.value=0}const g=_t(e.dto),w=x();Y(g,async()=>{w.value||(u(),await r(),w.value=setTimeout(()=>{clearTimeout(w.value),w.value=null},400))},{immediate:!0});function P({id:s,postId:E}){O.confirm(`是否取消${e==null?void 0:e.title}？`,"取消提示",{confirmButtonText:"确 认",confirmButtonClass:"el-button--danger  border-default ",lockScroll:!1,cancelButtonText:"取 消",center:!0,callback:async S=>{if(S==="confirm"){const{code:I}=await Pt(E,{postId:E,type:R.COLLECT},n.getToken);I===z.SUCCESS&&(o.value=o.value.filter(h=>h.id!==s),U.warning(`取消${e==null?void 0:e.title}成功！`))}}})}return l({clearResult:u,loadPostListPage:r,postList:o,pageInfo:d}),(s,E)=>{const S=Ce,I=Lt,h=tt,f=nt,T=F("auto-animate");return v(),st(f,{height:"70vh"},{default:m(()=>[c(h,null,{default:m(()=>[A((v(),b("div",we,[c(I,{"loading-class":"mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-info)]",immediate:!0,"no-more":i(k)||i($),onLoad:r},{done:m(()=>[A(t("p",{class:"w-full py-8","text-center":"","tracking-1":"","text-bluegray":""},C(i(k)?"暂无更多帖子":"暂无帖子"),513),[[lt,i(k)||i($)]])]),default:m(()=>[(v(!0),b(ot,null,at(i(o),V=>(v(),b("div",{key:V.id,class:"grid grid-cols-1 gap-4"},[c(S,{data:V,onCancel:P},null,8,["data"])]))),128))]),_:1},8,["no-more"])])),[[T]])]),_:1})]),_:1})}}}),Ee=N(xe,[["__scopeId","data-v-b548793c"]]),Se=p=>(H("data-v-9478b72a"),p=p(),Q(),p),Ie={class:"layout-default"},Te={class:"flex-row-bt-c"},Le={class:"mb-8 mt-4 flex animate-[fade-in-down_0.4s] items-center"},Be=Se(()=>t("i",{class:"i-solar:star-bold-duotone bg-yellow-4 p-0.5em"},null,-1)),Pe={class:"animate-[fade-in_.3s_ease] rounded-14px p-6 leading-1.4em shadow card-default"},Ue=D({__name:"collect",setup(p){pt({title:`我的收藏 - 个人中心 - ${Z}`,meta:[{name:"description",content:`我的收藏 - 个人中心 - ${Z}`}]});const l=G(),e=x("goods");return(a,o)=>{const y=it,_=oe,d=xt,$=Ee,k=Et,n=tt,r=ft;return v(),b("div",null,[c(r,{name:"user",menu:["back"]},{default:m(()=>[t("div",Ie,[t("div",Te,[t("h2",Le,[L(" 我的收藏 "),c(y,{direction:"vertical",style:{margin:"0 1rem"}}),Be]),A(t("div",null,null,512),[[lt,i(l).isLogin]])]),c(n,null,{default:m(()=>[t("div",Pe,[c(k,{modelValue:i(e),"onUpdate:modelValue":o[0]||(o[0]=u=>M(e)?e.value=u:null),"tab-position":"top",stretch:!1},{default:m(()=>[c(d,{name:"goods",label:"收藏商品"},{default:m(()=>[c(_)]),_:1}),c(d,{name:"postcollect",label:"收藏帖子"},{default:m(()=>[c($,{dto:{type:("PostActionType"in a?a.PostActionType:i(R)).COLLECT,isPostInfo:1},title:"收藏"},null,8,["dto"])]),_:1}),c(d,{name:"postlike",label:"点赞帖子"},{default:m(()=>[c($,{dto:{type:("PostActionType"in a?a.PostActionType:i(R)).LIKE,isPostInfo:1},title:"点赞"},null,8,["dto"])]),_:1})]),_:1},8,["modelValue"])])]),_:1})])]),_:1})])}}}),to=N(Ue,[["__scopeId","data-v-9478b72a"]]);export{to as default};
