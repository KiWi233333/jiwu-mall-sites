import{_ as ve}from"./ElImage.H3VTC2Vd.js";import{u as ge,B as W,f as _e,o as ie,E as le,i as de,S as ce,aa as Ie,g as we,c as $e,p as Ee,d as Ue,q as Be,e as Se}from"./entry.HuYbGiLS.js";import{E as Le,a as ze}from"./select.Bh0wcPP9.js";import{_ as Te}from"./OssFileUpload.5SsdOgf4.js";import{_ as Ne}from"./PreLoading.vue.RcEKquDI.js";import{_ as he}from"./nuxt-link.eZ5kOSgI.js";import{E as Ve}from"./tag.Q9i6oaRN.js";import{j as ye,a as d,k as P,ao as re,L as r,M as k,a9 as q,X as fe,a2 as xe,Z as u,a0 as p,u as t,N as c,a3 as V,a5 as F,a4 as Y,a6 as pe,_ as H,ar as ee,r as Re,b as Fe,ai as Me,ab as Oe,x as De,aa as Ae}from"./swiper-vue.4ZhlhtKr.js";import{_ as Pe}from"./AutoIncre.vue.KpzenuDu.js";import"./scrollbar.ylZGouLy.js";import"./popper.TZrEXPn8.js";import{E as qe}from"./notification.mMgfY760.js";const He=["id"],je={flex:"","flex-1":"","flex-col":"",style:{"font-size":"inherit"}},Ke={class:"w-full flex flex-col"},Xe={"leading-1.4em":""},Ze={class:"font-500 text-[var(--el-color-info)]",style:{"text-shadow":"1px 1px 1px #7272721f,-1px -1px 1px #7272721f"}},Ge={truncate:"","opacity-60":""},Je={class:"mt-4 max-w-20rem flex gap-2 md:gap-4"},Qe={class:"card-hover flex gap-2 opacity-30 transition-200 hover-opacity-100"},We={class:"card-btn i-solar:share-broken hover:i-solar:share-bold hover:text-[var(--el-color-info)]"},Ye={class:"child pl-4"},et=ye({__name:"CommentCard",props:{data:{},leftClass:{},leftStyle:{},atUser:{},position:{default:()=>[]}},emits:["comment","delete"],setup($,{emit:v}){var U;const s=$,E=d(((U=s.data.content)==null?void 0:U.length)>50),te=P(()=>`${location.href}#post${s.data.postId}`),g=P(()=>{var b;return(((b=s.data.images)==null?void 0:b.split(","))||[]).filter(m=>m)}),w=ge();return(e,b)=>{var M,O,D,C;const m=ve,x=he,oe=Ve,i=ke,T=re("copying"),R=re("auto-animate");return r(),k(H,null,[q((r(),k("div",{id:`comment${e.data.id}`,class:fe(["card",e.leftClass]),style:xe(e.leftStyle),flex:"","justify-between":"","gap-4":"","py-4":""},[u(x,{to:{path:"/user/info",query:{id:(M=e.data)==null?void 0:M.userId}}},{default:p(()=>[u(m,{loading:"lazy",lazy:!0,class:"block h-3rem w-3rem rounded-1/2 border-default v-card",src:("BaseUrlImg"in e?e.BaseUrlImg:t(W))+e.data.user.avatar},null,8,["src"])]),_:1},8,["to"]),c("div",je,[c("div",Ke,[c("div",Xe,[c("span",Ze,V(((O=e.data.user)==null?void 0:O.nickname)||"匿名用户"),1),c("p",{class:fe({"text-overflow-4":t(E)}),onClick:b[0]||(b[0]=l=>E.value=!t(E))},[e.atUser?(r(),F(oe,{key:0,effect:"dark",size:"small",type:"info",style:{padding:"0 0.4em","border-radius":"1rem"},class:"font-500 text-[var(--el-color-danger)]"},{default:p(()=>{var l,y;return[Y(" @"+V(((l=e.atUser)==null?void 0:l.username)===((y=t(w))==null?void 0:y.userInfo.username)?"本人":e.atUser.nickname),1)]}),_:1})):pe("",!0),Y(" "+V(e.data.content),1)],2)]),c("small",Ge,V(e.data.createTime)+V((D=e.data.children)==null?void 0:D.length),1)]),c("div",Je,[(r(!0),k(H,null,ee(t(g),l=>(r(),F(m,{key:l,loading:"lazy",lazy:!0,class:"block h-5rem w-5rem flex-shrink-0 cursor-pointer border-default card-default",src:("BaseUrlImg"in e?e.BaseUrlImg:t(W))+l,"preview-teleported":"","preview-src-list":t(g).map(y=>("BaseUrlImg"in e?e.BaseUrlImg:t(W))+y)},null,8,["src","preview-src-list"]))),128))])]),c("div",Qe,[e.data.userId===t(w).userInfo.id?(r(),k("div",{key:0,class:"card-btn i-solar:trash-bin-minimalistic-broken hover:i-solar:trash-bin-minimalistic-bold hover:text-[var(--el-color-info)]",onClick:b[1]||(b[1]=l=>e.$emit("delete",e.data.id,[...e.position],e.data))})):pe("",!0),q(c("div",We,null,512),[[T,t(te),void 0,{toast:!0}]]),c("div",{class:"card-btn i-solar:chat-round-line-broken hover:i-solar:chat-round-line-bold hover:text-[var(--el-color-info)]",onClick:b[2]||(b[2]=l=>e.$emit("comment",e.data.id,[...e.position],e.data,{isAt:e.position.length===1,nickname:e.data.user.nickname}))})])],14,He)),[[R]]),c("div",Ye,[(r(!0),k(H,null,ee((C=e.data)==null?void 0:C.children,(l,y)=>(r(),F(i,{key:l.id,position:[...e.position,y],"left-class":"pl-2rem text-0.8em border-0 border-dashed border-#6e7378 border-l-1px opacity-80 hover:op-100 transition-300","at-user":e.data.user,data:l,onComment:ae=>e.$emit("comment",e.data.id,[...e.position,y],l),onDelete:ae=>e.$emit("delete",l.id,[...e.position,y],l)},null,8,["position","at-user","data","onComment","onDelete"]))),128))])],64)}}}),ke=_e(et,[["__scopeId","data-v-7a6fc3e3"]]);function tt($,v,s,E){return ie.post(`/community/post/comment/list/${$}/${v}/${s}`,{...E},{})}function ot($,v,s){return ie.post(`/community/post/comment/${$}`,{...v},{headers:{Authorization:s}})}function at($,v,s){return ie.deleted(`/community/post/comment/${$}/${v}`,{},{headers:{Authorization:s}})}const nt={"w-full":""},st={class:"forms sticky bottom-1rem"},lt={"w-full":"",flex:"","items-center":""},rt={"mt-4":"","flex-row-c-c":"","grid-gap-4":"",class:"select-parent"},it=ye({__name:"CommentPreview",props:{postId:{},limit:{default:void 0},dto:{default:()=>({})},showMoreText:{type:Boolean,default:!0}},setup($){const v=$,s=d({content:"",parentId:"",images:[]}),E=d(),te=d(),g=ge(),w=d(!1),U=d(!1),e=d();function b(n,o,B){s.value.images=o.filter(I=>I)}const m=d([]),x=d(0),oe=d(v.limit||10),i=Re({total:-1,pages:-1,current:-1}),T=d({isHot:void 0,isNew:void 0}),R=d("new");Fe(R,n=>{n==="hot"?(T.value.isHot=de.TRUE,T.value.isNew=void 0):(T.value.isHot=void 0,T.value.isNew=de.TRUE),se()});const M=P(()=>x.value>=1&&(i==null?void 0:i.pages)===0&&m.value.length===0),O=P(()=>i.total>=1&&i.current>=i.pages);async function D(){if(U.value||O.value||M.value){U.value=!1;return}if(v.limit!==void 0&&m.value.length>=v.limit){U.value=!1;return}U.value=!0,x.value++;const{data:n}=await tt(v.postId,x.value,oe.value,{...T.value});i.total=n.total||0,i.current=n.current||0,i.pages=n.pages||0,m.value.push(...(n==null?void 0:n.records)||[]),U.value=!1}const C=d(),l=d([]),y=d();function ae(n,o,B){var I;n&&(s.value.parentId=n,l.value=o||[],(I=C.value)==null||I.focus(),y.value=B)}function ue(n,o){var B;(B=E.value)==null||B.validate(async I=>{var S,N,j,K,X,Z,G,J,Q;if(!I){(S=C==null?void 0:C.value)==null||S.focus();return}w.value=!0;const f=await ot(v.postId,s.value,g.getToken);if(f.code===ce.SUCCESS){(N=E.value)==null||N.resetFields(),qe.success("评论成功！");const L={...f.data,user:{username:(j=g.userInfo)==null?void 0:j.username,nickname:(K=g.userInfo)==null?void 0:K.nickname,gender:(X=g.userInfo)==null?void 0:X.gender,avatar:(Z=g.userInfo)==null?void 0:Z.avatar,slogan:(G=g.userInfo)==null?void 0:G.slogan,lastLoginIp:(J=g.userInfo)==null?void 0:J.lastLoginIp,birthday:(Q=g.userInfo)==null?void 0:Q.birthday}};if(n&&n!==""){if(o&&o.length>0){const z=m.value;o.forEach((_,a)=>{var h,A;a+1===o.length&&(z[_]&&z[_].children&&Array.isArray(z[_].children)?(A=(h=z[_])==null?void 0:h.children)==null||A.push(L):z[_].children=Ie([L]))})}else m.value.unshift(L);me()}else m.value.unshift(L)}setTimeout(()=>{var L;w.value=!1,(L=C.value)==null||L.focus()},300)})}function be(n,o){!n||!o||we.confirm(o.length?"注意子评论也将会被删除！":"是否删除评论？","删除评论",{confirmButtonText:"删除",cancelButtonText:"取消",lockScroll:!1,type:"warning",callback:async B=>{if(B==="confirm"){w.value=!0;const I=await at(v.postId,n,g.getToken);if(I.code===ce.SUCCESS){if(o&&o.length>1){let f=m.value;o.forEach((S,N)=>{N+1===o.length?f==null||f.splice(S,1):f=f[S].children})}else m.value=m.value.filter(f=>f.id!==n);le.info("删除成功！")}else le.error(I.message);me(),w.value=!1}}})}function me(){s.value={content:"",parentId:"",images:[]},l.value.splice(0)}const ne=d(!1);function se(){ne.value||(ne.value=!0,x.value=0,m.value=[],i.total=-1,i.pages=-1,i.current=-1,setTimeout(()=>{D(),ne.value=!1},300))}const Ce=P(()=>{var n;return(n=y.value)!=null&&n.id?[y.value]:[]});return(n,o)=>{const B=ve,I=$e,f=Ee,S=Le,N=ze,j=Ue,K=Te,X=Be,Z=Ne,G=ke,J=he,Q=Pe,L=Se,z=re("auto-animate");return r(),k("div",nt,[c("div",st,[u(X,{ref_key:"formRef",ref:E,disabled:t(w),"label-position":"top","hide-required-asterisk":"",rules:t(te),model:t(s)},{default:p(()=>{var _;return[q((r(),k("div",lt,[u(B,{class:"h-3rem w-3rem rounded-1/2 shadow-sm border-default v-card",fit:"cover",src:("BaseUrlImg"in n?n.BaseUrlImg:t(W))+((_=t(g).userInfo)==null?void 0:_.avatar)},null,8,["src"]),u(f,{style:{margin:"0.5rem 0"},prop:"content",class:"w-full pl-4",rules:[{required:!0,message:"评论内容不能为空！",trigger:"blur"},{min:2,max:50,message:"评论内容不能为空评论长度为2-50字符！",trigger:"change"}]},{default:p(()=>[u(I,{ref_key:"commentRef",ref:C,modelValue:t(s).content,"onUpdate:modelValue":o[0]||(o[0]=a=>t(s).content=a),modelModifiers:{lazy:!0},class:"w-full",size:"large",placeholder:"说说你的心得 ~",onKeyup:o[1]||(o[1]=Me(Oe(a=>ue(t(s).parentId,t(l)),["self"]),["enter"]))},null,8,["modelValue"])]),_:1})])),[[z]]),c("div",rt,[c("i",{"i-tabler:photo-plus":"","ml-3":"","cursor-pointer":"","p-0.7rem":"",class:"transition-200 hover:bg-[var(--el-color-info)]",onClick:o[2]||(o[2]=a=>{var h,A;return(A=(h=t(e))==null?void 0:h.inputRef)==null?void 0:A.click()})}),c("i",{class:"i-solar:refresh-outline block cursor-pointer p-0.6rem transition-300 hover:rotate-180 hover:bg-[var(--el-color-info)]",onClick:se}),u(f,{prop:"parentId",class:"md:w-12rem",style:{padding:"0",margin:"0","margin-left":"0.8rem"}},{default:p(()=>[u(N,{modelValue:t(s).parentId,"onUpdate:modelValue":o[3]||(o[3]=a=>t(s).parentId=a),clearable:"",placeholder:"@回复",onClear:o[4]||(o[4]=a=>t(s).parentId="")},{default:p(()=>[(r(!0),k(H,null,ee(t(Ce),a=>{var h;return r(),F(S,{key:a==null?void 0:a.id,label:(h=a==null?void 0:a.user)==null?void 0:h.nickname,value:a==null?void 0:a.id},null,8,["label","value"])}),128))]),_:1},8,["modelValue"])]),_:1}),u(N,{modelValue:t(R),"onUpdate:modelValue":o[5]||(o[5]=a=>De(R)?R.value=a:null),class:"md:w-12rem",placeholder:"排序方式",onChange:o[6]||(o[6]=a=>se())},{default:p(()=>[u(S,{label:"最新排序",value:"new"}),u(S,{label:"最热排序",value:"hot"})]),_:1},8,["modelValue"]),u(j,{disabled:t(w),class:"group ml-a animate-fade-in-left animate-ease-in-out","icon-class":"i-solar:map-arrow-right-bold-duotone block  animate-zoom-in-left mr-1",round:"",type:"info",onClick:o[7]||(o[7]=a=>ue(t(s).parentId,t(l)))},{default:p(()=>[Y(" 发送  ")]),_:1},8,["disabled"])]),u(f,{style:{margin:"0.5rem 0"},prop:"images"},{default:p(()=>{var a;return[q((r(),k("div",null,[u(K,{ref_key:"inputOssFileUploadRef",ref:e,key:"inputOssFileUploadRef",multiple:!0,limit:3,"input-class":"w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card","upload-quality":.7,onErrorMsg:o[8]||(o[8]=h=>{("ElMessage"in n?n.ElMessage:t(le)).error(h)}),onSubmit:b},null,512)])),[[Ae,(a=t(s).images)==null?void 0:a.length],[z]])]}),_:1})]}),_:1},8,["disabled","rules","model"])]),u(L,null,{fallback:p(()=>[u(Z,{class:"w-full"})]),default:p(()=>[q((r(),k("div",null,[u(Q,{immediate:!0,"auto-stop":!1,"no-more":t(O)||t(M),loading:t(U)&&!t(w),onLoad:D},{done:p(()=>[n.limit!==void 0?(r(),F(J,{key:0,to:{path:`/community/post/detail/${n.postId}`},target:"_blank",class:"block w-full text-center text-0.8rem opacity-60 transition-200 hover:text-[var(--el-color-info)]"},{default:p(()=>[Y(V(t(i).total>0?`查看全部 ${t(i).total} 条评论`:"暂无评论，快去发表吧！"),1)]),_:1},8,["to"])):(r(),k("small",{key:1,class:"block w-full text-center text-0.8rem opacity-60",onClick:o[9]||(o[9]=(..._)=>{var a,h;return((a=t(C))==null?void 0:a.focus)&&((h=t(C))==null?void 0:h.focus(..._))})}," 暂无"+V(t(i).total>0?"更多":"评论，快去发表吧！"),1))]),default:p(()=>[(r(!0),k(H,null,ee(t(m),(_,a)=>(r(),F(G,{key:_.id,position:[a],data:_,onComment:ae,onDelete:be},null,8,["position","data"]))),128))]),_:1},8,["no-more","loading"])])),[[z,{duration:200}]])]),_:1})])}}}),bt=_e(it,[["__scopeId","data-v-fad20028"]]);export{bt as _};
