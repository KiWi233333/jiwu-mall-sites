import{u as X,B as pe,H as Ve,S as N,f as te,E as B,h as fe,A as ge,D as ve,I as de,J as me,c as $e,v as xe,x as Te,d as _e,k as Ue,P as K,K as De,n as Le,_ as Be,e as Pe,a as qe,l as Oe}from"./entry.t-rqPOs0.js";import{_ as Fe}from"./OssFileUpload.AYjrnYRm.js";import{b as Me,E as Re}from"./index.8LNiojwe.js";import{_ as Ne}from"./ElImage.MMEIiX96.js";import{E as be,a as ye}from"./select.CPu1gYEQ.js";import"./tag.C0ahusY6.js";import"./scrollbar.VqFpSCdd.js";import"./popper.b7Al0Wsi.js";import{j as Y,a as $,I as je,O as u,P as I,Q as M,$ as m,a2 as i,a0 as G,u as t,a5 as Z,a7 as V,as as ee,Y as he,x as ae,X as Ae,an as ze,ao as Ke,k as H,aj as Ge,ab as ke,a6 as L,a8 as J,K as He}from"./swiper-vue.Dj7aAS3P.js";import{E as Q}from"./notification.YJSnxgg5.js";import{g as Je,O as Qe,c as Xe,u as Ye,a as We,d as Ze}from"./index.keDQovFV.js";import{_ as et}from"./StatusTag.ZIClFibV.js";/* empty css                     *//* empty css                    */import{c as D,d as tt,u as at,e as ot,f as st,h as lt}from"./post.az1H9mBx.js";import"./progress.FoUIz2xX.js";import"./debounce.0E-5_dMF.js";import"./strings.Y1vdtDWm.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./index.dh5FAeg5.js";const rt=U=>(ze("data-v-d94657d1"),U=U(),Ke(),U),nt={class:"flex flex-col"},it={class:"max-w-20rem w-16rem flex items-center border-gray-400 rounded-1rem border-default-dashed"},ut=rt(()=>M("i",{"i-solar:asteroid-line-duotone":"","mx-2":"","p-0.5em":"","opacity-70":""},null,-1)),dt={"h-3rem":"",flex:"","items-center":"","gap-2":"","text-center":""},mt=Y({__name:"CategorySelect",props:{modelValue:{default:""}},emits:["update:modelValue"],setup(U,{emit:P}){X();const x=$(""),f=$([]),s=$(!1);async function p(){const o=await Ve();(o==null?void 0:o.code)===N.SUCCESS&&(f.value=(o==null?void 0:o.data)||[])}return je(()=>{p()}),(o,S)=>{const d=Ne,k=be,T=ye;return u(),I("div",nt,[M("div",it,[ut,m(T,he({modelValue:t(x),"onUpdate:modelValue":S[0]||(S[0]=a=>ae(x)?x.value=a:null),class:"select mr-2","no-data-text":"没有数据",multiple:!1,filterable:"",clearable:""},o.$attrs,{placeholder:"选择发布的圈子",loading:t(s),onFocus:p,onChange:S[1]||(S[1]=a=>o.$emit("update:modelValue",a))}),{default:i(()=>[(u(!0),I(G,null,ee(t(f),a=>(u(),V(k,{key:a.id,label:a.name,value:a.id,style:{height:"auto"},class:"relative"},{default:i(()=>[M("div",dt,[m(d,{fit:"cover",class:"mr-2 h-2.6rem w-2.6rem card-default",loading:"lazy",src:("BaseUrlImg"in o?o.BaseUrlImg:t(pe))+(a==null?void 0:a.image)},null,8,["src"]),M("span",null,Z(a==null?void 0:a.name),1)])]),_:2},1032,["label","value"]))),128))]),_:1},16,["modelValue","loading"])]),Ae(o.$slots,"default",{data:t(f)},void 0,!0)])}}}),ct=te(mt,[["__scopeId","data-v-d94657d1"]]),ce="https://jiwu.api.kiwi2333.top/res/",pt=Y({__name:"MdEdit",props:{modelValue:{default:""},pathList:{},uploadImage:{type:Boolean,default:!1},autoSave:{type:Boolean,default:!1}},emits:["update:modelValue","update:pathList","submit"],setup(U,{expose:P,emit:x}){const f=U,s=x,p=X(),o=$([]);function S(c,g,y){y.forEach(async v=>{if(!v)return;const b=await Je(Qe.IMAGE,p.getToken);b.code===N.SUCCESS?Xe(v,{quality:.6,noCompressIfLarger:!0}).then(C=>{d(C.dist,b.data.key,b.data.uploadToken,()=>{g({url:`${ce}${b.data.key}`,desc:v.name,width:"100%"}),o.value.push(b.data.key),f.autoSave&&E(),s("update:pathList",o.value)})}):B.warning("网络错误，请稍后再试！")})}function d(c,g,y,v){Ye(c,g,y).subscribe({next(){},error(C){const h=C;h!=null&&h.code?B.error(We(h==null?void 0:h.code)):B.error("上传失败，稍后再试！")},complete(){v&&v()}})}const k=$(!1),T=H({get(){return f.modelValue},set(c){s("update:modelValue",c)}});function a(c,g){k.value||c[g]&&fe.confirm("是否删除该图片？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",lockScroll:!1,center:!0,callback:async y=>{var v;if(y==="confirm"){const b=await Ze((v=c[g])==null?void 0:v.replace(ce,""),p.getToken);k.value=!0;const C=new RegExp(`!\\[.*?\\]\\((${c[g]})\\){{{width="100%"}}}`);o.value.splice(o.value.findIndex(h=>h===c[g]),1),s("update:modelValue",f.modelValue.replace(C,"")),s("update:pathList",o.value),b.code===N.SUCCESS?Q.success({title:"删除提示",message:"删除成功！"}):(Q.closeAll(),B.closeAll("error")),setTimeout(()=>{k.value=!1,f.autoSave&&E()},300)}}})}function E(){k.value||(k.value=!0,s("submit",f.modelValue),setTimeout(()=>{k.value=!1},300))}return P({pathList:()=>o.value}),(c,g)=>{const y=Ge("v-md-editor"),v=ge;return ke((u(),V(y,he(c.$attrs,{modelValue:t(T),"onUpdate:modelValue":g[0]||(g[0]=b=>ae(T)?T.value=b:null),placeholder:"请输入详情","toc-nav-position-right":!0,height:"60vh","disabled-menus":[],"include-level":[2,3,4,5],"left-toolbar":"undo redo clear | italic strikethrough quote | ul ol table hr | link image code | save",onSave:E,onUploadImage:S,onImageClick:a}),null,16,["modelValue"])),[[v,t(k)]])}}}),ft=te(pt,[["__scopeId","data-v-710ed78e"]]),gt={"flex-row-bt-c":"","flex-wrap":""},vt={class:"sticky bottom-1rem z-99 flex-row-bt-c rounded-t-2 p-4 shadow shadow-sm border-default card-default"},_t=Y({__name:"PostForm",props:{cid:{default:""}},emits:["submit"],setup(U,{emit:P}){const x=P,f={insert:{massage:"发布成功，等待审核中...⏳",icon:"i-solar:cup-hot-bold-duotone opacity-60",isShow:!0},delete:{massage:"移入回收站成功",icon:"i-solar:check-circle-bold op-60 text-[var(--el-color-danger)]",isShow:!0},recover:{massage:"帖子已被删除或移至回收站，可恢复🔔",icon:"i-solar:adhesive-plaster-broken op-60",isShow:!1}},s=ve(),p=X(),o=$(!1),S=$(),d=$(),k=$([]),T=s.fullPath,a=de(T,{id:void 0,title:void 0,categoryId:void 0,cover:void 0,content:void 0,images:void 0,tags:void 0},{deep:!0}),E=de(`${s.path}_coverList`,[]),c=H(()=>{var e;const l=(e=d.value)==null?void 0:e.status;return l===D.DELETED||l===D.ADMIN_DELETED||l===D.REJECT}),g=H(()=>{var _;let l="立即发布";const e=(_=d.value)==null?void 0:_.status;return c.value?l="重新发布":e===D.PUBLISHED||e===D.UNDOING?l="确认修改":l="立即发布",l});function y(l){const e=f[l]||{};return x("submit",e)}async function v(l){var _,n,O,F,j;o.value=!0;const e=await tt(l,p.getToken);if(e.code===N.SUCCESS){[D.DELETED,D.ADMIN_DELETED].includes(e.data.status)&&(y("recover"),o.value=!1);const A=((_=e.data.images)==null?void 0:_.split(",").filter(W=>W))||[];a.value={...e.data,images:A,tags:(n=e.data.tags)!=null&&n.trim()?(O=e.data.tags)==null?void 0:O.split(","):[]},d.value={...e.data,images:A,tags:(F=e.data.tags)!=null&&F.trim()?(j=e.data.tags)==null?void 0:j.split(","):[]},a.value.cover&&(E.value=[{file:void 0,id:pe+a.value.cover,status:"success",percent:100,key:a.value.cover}])}else y("recover");o.value=!1}s!=null&&s.query.id?v(String(s.query.id)):q(),s!=null&&s.query.cid&&(a.value.categoryId=String(s.query.cid||"")||"");const b=H(()=>d.value&&!o.value?Object.keys(me(d.value,a.value)).length>0:!1);function C(l,e="insert",_="发布"){var n;o.value||(n=S.value)==null||n.validate(async O=>{O&&fe.confirm(`是否确认${_}？`,{title:"提示",customClass:"text-center",lockScroll:!1,showCancelButton:!0,cancelButtonText:"取 消",confirmButtonText:_,center:!0,callback:async F=>{F==="confirm"&&h(l,e,_)}})})}async function h(l,e="insert",_="发布"){o.value=!0;let n;if(e==="update"&&l)n=await at(l,me(d.value,a.value),p.getToken);else if(e==="insert")n=await ot({...a.value},p.getToken);else if(e==="delete"&&l)n=await st(l,p.getToken);else if(e==="hardDel"&&l)n=await lt(l,p.getToken);else{B.error("未知操作");return}n.code===N.SUCCESS?(Q.success({title:"操作提示",message:`${_}成功！`}),e==="insert"?(y("insert"),q()):e==="delete"?(y("delete"),q()):e==="update"&&l&&c.value&&v(l)):Q.error({title:"错误提示",message:n.message||`${_}失败，请稍后再试！`}),setTimeout(()=>{o.value=!1},300)}function R(){var l;o.value||(l=S.value)==null||l.validate(async e=>{var _,n;e&&(o.value=!0,(_=d.value)!=null&&_.id?h((n=d.value)==null?void 0:n.id,"update","保存"):B.success("暂存成功！"),o.value=!1)})}function q(){a.value={id:void 0,title:void 0,categoryId:void 0,content:void 0,cover:void 0,images:[],tags:[]},k.value=[],E.value=[]}return(l,e)=>{var oe,se,le,re,ne,ie;const _=$e,n=xe,O=Fe,F=Me,j=Re,A=ct,W=be,we=ye,Se=ft,Ee=Te,Ce=et,z=_e,Ie=ge;return u(),I(G,null,[(u(),V(He,null,[ke((u(),V(Ee,{ref_key:"formRef",ref:S,disabled:t(o),"label-position":"top","hide-required-asterisk":"",model:t(a),class:"form"},{default:i(()=>[M("div",gt,[m(n,{prop:"title",rules:[{required:!0,message:"起一个标题吧 ~",trigger:"blur"},{min:5,max:100,message:"长度为5-100字符！",trigger:["change","blur"]}],label:"",class:"title-in order-1 w-1/2"},{default:i(()=>[m(_,{modelValue:t(a).title,"onUpdate:modelValue":e[0]||(e[0]=r=>t(a).title=r),placeholder:"起一个标题吧 ~ ",size:"large",style:{"font-size":"1.4rem"},class:"text w-full font-700"},null,8,["modelValue"])]),_:1}),m(n,{prop:"cover",rules:[{required:!0,message:"请选择封面",trigger:"blur"}],label:"封面",class:"group order-0 ml-a w-full flex md:order-1 md:h-10rem md:w-16rem"},{default:i(()=>[m(O,{key:"inputOssFileUploadRef",modelValue:t(E),"onUpdate:modelValue":e[1]||(e[1]=r=>ae(E)?E.value=r:null),multiple:!1,limit:1,class:"object-fit w-full w-full md:w-16rem md:w-auto","input-class":"h-18rem card-default md:h-10rem md:w-16rem w-full mr-2 flex-row-c-c object-fit flex-shrink-0","upload-quality":.5,onErrorMsg:e[2]||(e[2]=r=>{("ElMessage"in l?l.ElMessage:t(B)).error(r)}),onSubmit:e[3]||(e[3]=r=>{r&&(t(a).cover=r)})},null,8,["modelValue"])]),_:1})]),m(n,{prop:"categoryId",rules:[{required:!0,message:"圈子不能为空！",trigger:"blur"},{min:10,max:25,message:"长度为10-25字符！",trigger:["change","blur"]}],label:""},{default:i(()=>[m(A,{modelValue:t(a).categoryId,"onUpdate:modelValue":e[5]||(e[5]=r=>t(a).categoryId=r)},{default:i(r=>[r.data?(u(),V(j,{key:0,modelValue:t(a).categoryId,"onUpdate:modelValue":e[4]||(e[4]=w=>t(a).categoryId=w)},{default:i(()=>[(u(!0),I(G,null,ee(r.data,w=>(u(),V(F,{key:w.id,style:{border:"1px solid rgb(255 255 255 / 25.3%)","border-radius":"2rem",padding:"0",margin:"1rem 0.5rem 0 0"},label:w.id,class:"relative overflow-hidden shadow-sm card-default"},{default:i(()=>[L(Z(w.name),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue"])):J("",!0)]),_:1},8,["modelValue"])]),_:1}),m(n,{prop:"tags",rules:[{type:"array",min:0,max:20,message:"最多添加20张标签！",trigger:["change","blur"]}],label:"",class:"round w-fit-content"},{default:i(()=>[m(we,{modelValue:t(a).tags,"onUpdate:modelValue":e[6]||(e[6]=r=>t(a).tags=r),"multiple-limit":20,"max-collapse-tags":4,style:{padding:"0 1rem",width:"16rem"},"collection-tag-class":"border-default card-default",class:"tags-in rounded-1rem border-default","collapse-tags-tooltip":!0,filterable:"","collapse-tags":"",multiple:"","default-first-option":"","allow-create":"","tag-effect":"dark","tag-type":"info",teleported:!1,placeholder:"填写文章标签"},{default:i(()=>[(u(!0),I(G,null,ee(t(k),r=>(u(),V(W,{key:r,label:r,value:r},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),m(n,{prop:"content",rules:[{required:!0,message:"内容不能为空！",trigger:"blur"},{min:1,max:1024,message:"长度为10-1024字符！",trigger:["change","blur"]}],label:""},{default:i(()=>[m(Se,{"model-value":t(a).content,"onUpdate:modelValue":e[7]||(e[7]=r=>t(a).content=r),"path-list":t(a).images,"onUpdate:pathList":e[8]||(e[8]=r=>t(a).images=r),autofocus:!0,class:"my-2 min-h-50vh w-full",onSubmit:R},null,8,["model-value","path-list"])]),_:1})]),_:1},8,["disabled","model"])),[[Ie,t(o),void 0,{fullscreen:!0}]])],1024)),M("div",vt,[t(a).id?(u(),V(Ce,{key:0,status:(oe=t(d))==null?void 0:oe.status,size:"large"},null,8,["status"])):J("",!0),(se=t(d))!=null&&se.id&&!t(c)?(u(),V(z,{key:1,disabled:!((le=t(d))!=null&&le.id),class:"group ml-a animate-fade-in-left animate-ease-in-out shadow","icon-class":"i-solar:trash-bin-trash-broken   block  mr-1",type:"danger",plain:"",onClick:e[9]||(e[9]=r=>{var w;return C((w=t(a))==null?void 0:w.id,"delete","移入回收站")})},{default:i(()=>[L(" 回收站  ")]),_:1},8,["disabled"])):(re=t(d))!=null&&re.id&&t(c)?(u(),V(z,{key:2,disabled:!((ne=t(d))!=null&&ne.id),class:"group ml-a animate-fade-in-left animate-ease-in-out shadow","icon-class":"i-solar:trash-bin-trash-broken   block  mr-1",type:"danger",plain:"",onClick:e[10]||(e[10]=r=>{var w;return C((w=t(a))==null?void 0:w.id,"hardDel","彻底删除")})},{default:i(()=>[L(" 彻底删除  ")]),_:1},8,["disabled"])):J("",!0),m(z,{disabled:t(o)||!t(b),class:"group ml-a animate-fade-in-left animate-ease-in-out shadow","icon-class":"i-solar:inbox-in-bold-duotone   block  mr-1",type:"info",plain:"",onClick:R},{default:i(()=>[L(" 存草稿  ")]),_:1},8,["disabled"]),m(z,{disabled:t(o)||((ie=t(d))==null?void 0:ie.id)&&!t(b),class:"group sticky bottom-0 ml-a animate-fade-in-left animate-ease-in-out shadow","icon-class":"i-solar:map-arrow-right-bold-duotone block  mr-1",type:"info",onClick:e[11]||(e[11]=r=>{var w,ue;return C((w=t(a))==null?void 0:w.id,(ue=t(a))!=null&&ue.id?"update":"insert",t(g))})},{default:i(()=>[L(Z(t(g))+"  ",1)]),_:1},8,["disabled"])])],64)}}}),bt=te(_t,[["__scopeId","data-v-48071560"]]),yt={key:0},ht={key:0,"layout-default-se":""},kt={key:0,"my-6":""},wt={key:1,"my-6":""},St={key:1,class:"h-100vh w-full flex-row-c-c"},Kt=Y({__name:"new",setup(U){const P=ve();Ue({title:()=>{var s;return`${(s=P.query)!=null&&s.id?"修改":"新建"}帖子 - 社区 - 极物圈`},description:"新建帖子 - 社区 - 极物圈 开启你的极物之旅！",keywords:Oe});const x=X(),f=$();return(s,p)=>{var a;const o=bt,S=_e,d=Be,k=Pe,T=qe;return u(),I("div",null,[m(T,{name:"second",footer:!1,header:!((a=t(f))!=null&&a.isShow),menu:["back","home"]},{default:i(()=>[m(k,null,{default:i(()=>{var E,c,g,y,v,b,C;return[(E=t(x).userInfo)!=null&&E.id?(u(),I("div",yt,[(c=t(f))!=null&&c.isShow?(u(),I("div",St,[m(d,{msg:(b=t(f))==null?void 0:b.massage,icon:(C=t(f))==null?void 0:C.icon},{footer:i(()=>[m(S,{plain:"",type:"danger","icon-class":"i-solar:alt-arrow-left-line-duotone mr-2",onClick:p[1]||(p[1]=h=>{var R,q,l,e;return("clearError"in s?s.clearError:t(De))({redirect:(q=(R=s._.provides[K]||s.$route)==null?void 0:R.query)!=null&&q.rollback?(e=(l=s._.provides[K]||s.$route)==null?void 0:l.query)==null?void 0:e.rollback.toString():"/"})})},{default:i(()=>[L(" 返回 ")]),_:1}),m(S,{type:"danger",onClick:p[2]||(p[2]=h=>("navigateTo"in s?s.navigateTo:t(Le))("/user/post"))},{default:i(()=>[L(" 我的帖子 ")]),_:1})]),_:1},8,["msg","icon"])])):(u(),I("main",ht,[(y=(g=s._.provides[K]||s.$route)==null?void 0:g.query)!=null&&y.id?(u(),I("h2",wt," 编辑帖子 ✍ ")):(u(),I("h2",kt," 新建帖子 ✍ ")),m(o,{cid:`${((v=(s._.provides[K]||s.$route).query)==null?void 0:v.cid)||""}`,onSubmit:p[0]||(p[0]=h=>f.value=h)},null,8,["cid"])]))])):J("",!0)]}),_:1})]),_:1},8,["header"])])}}});export{Kt as default};
