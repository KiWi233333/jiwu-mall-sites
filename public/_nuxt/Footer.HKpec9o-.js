import{E as W,n as M,c as O,h as L,e as z,f as w,u as j,d as A,x as P,g0 as q}from"./entry.HuYbGiLS.js";import{_ as E}from"./nuxt-link.eZ5kOSgI.js";import{j as I,k as H,L as _,M as h,Z as o,u as s,x as K,ai as C,a0 as n,a4 as g,aa as D,a9 as N,a as B,N as t,U as X,X as k,ac as Z,a5 as V,a6 as S,at as G,am as J,an as Q}from"./swiper-vue.4ZhlhtKr.js";import{_ as Y,a as U,b as ee}from"./kiwi_strong.4i0rfJn6.js";import{_ as te}from"./Switch.CiJ5_qW7.js";import{E as oe}from"./index.Uhk89Gac.js";import"./popper.TZrEXPn8.js";/* empty css                */import{u as ne}from"./useToggleThemeAnima.rqlolBiN.js";const se={class:"group relative flex items-center"},re=I({__name:"Search",props:{modelValue:{},isChange:{type:Boolean}},emits:["update:modelValue","open","close"],setup(a,{emit:i}){const m=a,r=i,l=H({get(){return m.modelValue},set(d){r("update:modelValue",d)}});function u(){if(!l.value.trim())return W.warning("搜索内容不能为空！");r("open"),M({path:"/search",query:{name:l.value.trim()}})}return(d,e)=>{const x=O,b=L,y=z;return _(),h("div",se,[o(x,{modelValue:s(l),"onUpdate:modelValue":e[0]||(e[0]=p=>K(l)?l.value=p:null),modelModifiers:{trim:!0},type:"text",clearable:"","text-center":"",placeholder:"开启搜索之旅✨",class:"v-input mx-1",onKeyup:[C(u,["enter"]),e[3]||(e[3]=C(p=>d.$emit("close"),["esc"]))],onFocus:e[1]||(e[1]=p=>d.$emit("open")),onBlur:e[2]||(e[2]=p=>d.$emit("close"))},null,8,["modelValue"]),o(y,null,{default:n(()=>[N(o(b,{type:"primary",class:"absolute right-0 shadow md:hidden border-default group-hover:opacity-100 md:opacity-0",round:"",style:{height:"80%",margin:"0 0.5rem"},onClick:e[4]||(e[4]=p=>u())},{default:n(()=>[g(" 搜索 ")]),_:1},512),[[D,s(l)!==""]])]),_:1})])}}}),ae=w(re,[["__scopeId","data-v-ed772fed"]]),le=G(()=>P(()=>import("./UserLine.AOrglsBR.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url).then(a=>a.default||a)),f=a=>(J("data-v-5bf1c017"),a=a(),Q(),a),ie={class:"nav select-none","dark:text":"light","text-m":"","flex-row-bt-c":"","px-2":"","md:px-6":""},de={class:"group left","flex-row-c-c":""},ce=f(()=>t("img",{loading:"lazy",alt:"Design By Kiwi23333",src:q,"w-2.4rem":"","object-contain":"","transition-300":"","dark:hidden":"","group-hover:opacity-85":"","group-hover:filter-blur-2px":""},null,-1)),me=f(()=>t("img",{loading:"lazy",alt:"Design By Kiwi23333",src:Y,hidden:"","w-2.4rem":"","object-contain":"","transition-300":"","dark:block":"","group-hover:opacity-85":"","group-hover:filter-blur-2px":""},null,-1)),ue=f(()=>t("span",{"i-solar:home-2-bold":"",absolute:"","left-1":"",hidden:"","h-1.6rem":"","w-1.6rem":"","transition-300":"","group-hover:block":"",style:{color:"var(--el-text-color-primary)"}},null,-1)),pe=f(()=>t("span",{class:"mx-4 hidden text-xl font-700 tracking-2 md:inline"},"极物圈",-1)),_e=f(()=>t("a",{class:"group hidden md:inline",target:"_blank",href:"https://github.com/KiWi233333"},[t("img",{loading:"lazy","ml-4":"","w-5rem":"","opacity-0":"","transition-300":"","group-hover:opacity-100":"","dark:filter-invert-100":"",src:U})],-1)),ge={class:"right","flex-row-c-c":""},fe=f(()=>t("i",{class:"mx-2 p-3 px-0.7em transition-100 hover:i-solar:cart-large-2-bold hover:bg-[var(--el-color-danger)]","i-solar:cart-large-2-linear":""},null,-1)),he={key:0,class:"group z-0 flex flex-col"},xe={class:"block md:hidden"},ve=f(()=>t("i",{class:"cursor-pointer rounded-4em bg-dark-1 p-2 opacity-80 shadow-md dark:bg-light","i-solar:user-outline":""},null,-1)),be={"inline-block":"",flex:"","flex-col":"","sm:hidden":"",grid:"~ cols-1 sm:cols-2 gap-2"},ye={hidden:"","flex-col":"","items-center":"","md:block":"","md:flex-row":"",class:"z-1 rounded-10px bg-[#d8d8d854] p-2 backdrop-blur-12px md:static dark:bg-[#4d4d4d48] md:bg-transparent md:p-0 dark:md:bg-transparent"},ke={key:1,class:"box"},we=I({__name:"HeaderMenu",setup(a){const i=B(!1),m=B(""),r=j(),l=ne();function u(d){d===0?(r.showLoginForm=!0,r.showRegisterForm=!1):(r.showLoginForm=!1,r.showRegisterForm=!0)}return(d,e)=>{const x=E,b=ae,y=ee,p=te,F=L,v=A,R=oe,T=le,$=z;return _(),h("header",ie,[t("div",de,[o(x,{"mx-2":"",to:"/","flex-row-c-c":"",class:"relative"},{default:n(()=>[ce,me,ue]),_:1}),X(d.$slots,"pre",{},()=>[t("span",{class:k(["i-solar:hamburger-menu-outline mx-2 p-3",s(l).isCollapse?"block":"sm:hidden"]),"cursor-pointer":"",onClick:e[0]||(e[0]=c=>s(l).isCollapse=!s(l).isCollapse)},null,2)],!0),pe,_e]),o(Z,{name:"fade",duration:200},{default:n(()=>[N(t("div",{class:"fixed left-0 top-0 z-2 h-[100vh] w-full animate-[fade-in_0.2s_ease-out] bg-[rgba(0,0,0,0.8)] dark:bg-[rgba(10,10,10,0.9)]",onClick:e[1]||(e[1]=c=>i.value=!1)},null,512),[[D,s(i)]])]),_:1}),t("div",{class:k(["z-2 translate-y-0 transition-300 transition-ease-in-out absolute-center",{"translate-y-20vh scale-120":s(i)}])},[o(b,{modelValue:s(m),"onUpdate:modelValue":e[2]||(e[2]=c=>K(m)?m.value=c:null),onOpen:e[3]||(e[3]=c=>i.value=!0),onClose:e[4]||(e[4]=c=>i.value=!1)},null,8,["modelValue"]),t("h2",{class:k(["text-center text-light font-500 transition-300 absolute-center -translate-y-4em",{"-translate-y-3em":s(i)}])}," 搜 索 ",2)],2),o($,null,{default:n(()=>[t("div",ge,[s(r).isLogin?(_(),V(y,{key:0,class:"mx-2 hidden md:block"})):S("",!0),s(r).isLogin?(_(),V(x,{key:1,to:"/user/shopcart",class:"hidden md:block hover:animate-[shopcart_1s_ease-in]"},{default:n(()=>[fe]),_:1})):S("",!0),o(p),o($,null,{default:n(()=>[s(r).isLogin?(_(),h("div",ke,[o(T,{"user-info":s(r).userInfo},null,8,["user-info"])])):(_(),h("div",he,[t("div",xe,[o(R,{placement:"bottom",class:"inline-block sm:hidden",teleported:"",width:100,offset:20,trigger:"click"},{reference:n(()=>[o(F,{class:"sm:hidden",round:"",style:{margin:"0",padding:"0.5em"},tag:"登录"},{default:n(()=>[ve]),_:1})]),default:n(()=>[t("div",be,[o(v,{"icon-class":"i-solar:user-rounded-outline mr-2",round:"",class:"m-2 cursor-pointer px-2 shadow-md",type:"primary",style:{margin:"0.2rem"},onClick:e[5]||(e[5]=c=>u(0))},{default:n(()=>[g(" 登 录 ")]),_:1}),o(v,{round:"","icon-class":"i-solar:crown-outline mr-2",class:"m-2 cursor-pointer px-2",style:{margin:"0.2rem"},onClick:e[6]||(e[6]=c=>u(1))},{default:n(()=>[g(" 注 册 ")]),_:1})])]),_:1})]),t("div",ye,[o(v,{"icon-class":"i-solar:user-bold-duotone mr-2",round:"","transition-icon":!0,class:"m-2 cursor-pointer px-2 shadow-md",type:"primary",style:{margin:"0.2rem"},onClick:e[7]||(e[7]=c=>u(0))},{default:n(()=>[g(" 登 录 ")]),_:1}),o(v,{round:"","icon-class":"i-solar:crown-outline mr-2","transition-icon":!0,class:"m-2 cursor-pointer px-2",style:{margin:"0.2rem"},onClick:e[8]||(e[8]=c=>u(1))},{default:n(()=>[g(" 注 册 ")]),_:1})])]))]),_:1})])]),_:1})])}}}),Oe=w(we,[["__scopeId","data-v-5bf1c017"]]),$e=""+globalThis.__publicAssetsURL("logo_title.png"),Ce={},Be={class:"min-h-200px w-full flex-row-c-c rounded-0 card-default","border-0px":"","border-t":"1px solid gray-200","dark:border-t-dark-3":"","dark:bg-dark-9":""},Ve={class:"layout-default","flex-row-c-c":"","flex-col":"","dark:opacity-80":""},Se=t("img",{loading:"lazy",src:$e,"w-10rem":"",alt:"Design By: Kiwi2333"},null,-1),Le=t("i",{"i-carbon:logo-github":"","mr-2":"","p-0.8em":""},null,-1),ze={"pt-1em":"","opacity-80":""},Ee=t("img",{loading:"lazy",src:U,alt:"Design By Kiwi23333",class:"ml-4 w-80px","dark:filter-invert-100":""},null,-1);function Ie(a,i){const m=E;return _(),h("footer",Be,[t("div",Ve,[Se,o(m,{target:"_blank",to:"https://github.com/KiWi233333",class:"mt-4 flex-row-c-c text-0.8rem tracking-0.1em opacity-70"},{default:n(()=>[Le,g("@KiWi233333 ")]),_:1}),t("strong",ze,[g(" Design By "),o(m,{target:"_blank",to:"https://github.com/KiWi233333"},{default:n(()=>[Ee]),_:1})])])])}const je=w(Ce,[["render",Ie]]);export{Oe as _,je as a};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./UserLine.AOrglsBR.js","./avatar.-bRo_r6d.js","./entry.HuYbGiLS.js","./swiper-vue.4ZhlhtKr.js","./swiper-vue.CRufKKKm.css","./entry.NyAeeWMW.css","./avatar.bZH1-Oig.css","./upload.0ACO-yOs.js","./progress.UYU20Rtn.js","./progress.rXLlm_9F.css","./cloneDeep.3YksgvLn.js","./isEqual.gU3elsgQ.js","./upload.5r92S6hB.css","./nuxt-link.eZ5kOSgI.js","./index.Uhk89Gac.js","./popper.TZrEXPn8.js","./isUndefined.IZwZ21d-.js","./popper.nTJkgMH4.css","./UserLine.EVm1sRas.css","./popover.LAISAeEG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
