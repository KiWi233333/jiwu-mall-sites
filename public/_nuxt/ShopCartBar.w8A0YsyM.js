import{E as Y,a as Z}from"./checkbox.zfGg0ai0.js";import{_ as ee}from"./ShopLine.8vISMB1F.js";import{_ as te}from"./AutoIncre.vue.cpfunnOh.js";import{E as oe}from"./scrollbar.VqFpSCdd.js";import{ac as se,u as ae,L as K,h as ne,bs as re,S as ie,E as N,n as le,e as ce,i as de,A as pe,f as ue}from"./entry.t-rqPOs0.js";import{E as me}from"./index.uAaZKamD.js";/* empty css                       */import"./popper.b7Al0Wsi.js";/* empty css                */import{j as fe,a as h,b as P,k as E,ap as B,u as t,ab as f,O as d,P as $,$ as p,a2 as l,ak as V,Q as o,ac as O,a5 as _e,a6 as x,x as U,a0 as he,a7 as y,as as ve,a8 as k,an as ge,ao as be}from"./swiper-vue.Dj7aAS3P.js";import{u as xe}from"./useOrderStore.eUMUt3Tv.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./flatten.qRdZVAia.js";import"./ElImage.MMEIiX96.js";import"./debounce.0E-5_dMF.js";import"./nuxt-link.AUBdcVxd.js";import"./select.CPu1gYEQ.js";import"./tag.C0ahusY6.js";import"./strings.Y1vdtDWm.js";import"./index.dh5FAeg5.js";import"./input-number.O-5fmpcb.js";import"./index.m5OxfFYg.js";import"./sku.3bWIpLkz.js";import"./index.T5JhbHk1.js";const w=v=>(ge("data-v-35f7027a"),v=v(),be(),v),ye={key:0,class:"shop-cart"},ke={class:"count animate-fade-in animate-duration-300","shadow-sm":""},we={class:"count animate-fade-in animate-duration-300","shadow-sm":""},Se=w(()=>o("i",{"i-solar:cart-large-bold-duotone":"",style:{width:"60%",height:"60%"}},null,-1)),Ce={"mb-2":"","border-0":"","border-b-1":"","pb-4":"","text-center":"","tracking-0.1em":"","border-default":""},Le=["plain"],Ie={class:"w-90vw md:w-460px"},Ee={class:"bottom",style:{width:"100%"},flex:"","items-center":"","justify-between":"","rounded-6px":"","px-3":"","py-2":"","border-default":""},Be={"flex-row-bt-c":"",truncate:""},$e={class:"mx-4"},Ve=w(()=>o("small",null,"总计：￥",-1)),Oe={class:"text-[var(--el-color-error)]"},Te=w(()=>o("i",{"i-solar:trash-bin-trash-broken":"","mr-1":""},null,-1)),ze=w(()=>o("i",{"i-solar:trash-bin-trash-broken":"","mr-1":""},null,-1)),Ae=fe({__name:"ShopCartBar",setup(v){const i=se(),g=ae(),u=h(!1);P(()=>g.isLogin,a=>{a&&i.reLoadShopcartList()}),i.loadShopcartList();const c=h(!1),s=h([]);function T(a="删除"){ne({title:`${a}提示！`,message:`确定要${a}吗？`,type:"warning",showClose:!1,lockScroll:!1,center:!0,customClass:"text-center",showCancelButton:!0,cancelButtonText:"取 消",confirmButtonText:"删 除"}).then(async e=>{if(e==="confirm"&&e==="confirm"){const{code:n}=await re(s.value,g.getToken);n===ie.SUCCESS&&i.deleteBatchShopCart(s.value)?(s.value.splice(0),N.success(`${a}成功！`)):N.error("删除失败，请稍后再试试看！")}}).catch()}function D(){T("清空")}const b=h(!1);P(b,a=>{s.value.splice(0),a&&s.value.push(...i.shopcartList.map(e=>e.id))});const _=E(()=>i.pageInfo.total),M=E(()=>i.pageInfo.current===i.pageInfo.pages),j=E(()=>{const a=i.shopcartList.filter(n=>s.value.includes(n.id));let e=K("0.00");return a.forEach(n=>{e=e.add(K(n.price).multiply(n.quantity))}),e}),S=h(!1),z=xe();function q(a){const e=[];i.shopcartList.forEach(n=>{if(a.includes(n.id)){const{skuId:C,quantity:L}=n;e.push({skuId:C,quantity:L})}}),S.value=!0,setTimeout(()=>{z.clearOrderItems(),z.$patch({pushOrderItems:e}),S.value=!1,le({path:"/order/detail"})},800)}return(a,e)=>{var A;const n=Y,C=ee,L=te,F=Z,G=oe,Q=ce,I=de,R=me,H=B("incre-up-int"),J=B("auto-animate"),W=B("incre-up"),X=pe;return(A=t(g).userInfo)!=null&&A.id?f((d(),$("div",ye,[p(R,{placement:"top","shadow-lg":"",teleported:!1,"popper-class":"popover",transition:"fade",trigger:"click","hide-after":0,"popper-style":`width:fit-content; box-shadow:rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;border-radius:6px;\r
      min-height:380px; padding: 1.2em 1em; right: 0;`,tabindex:"0",onKeyup:e[7]||(e[7]=V(r=>u.value=!1,["esc"]))},{reference:l(()=>[o("div",{class:"icon shadow-[#5d33f9] shadow-md shadow-opacity-60 -z-1","flex-row-c-c":"","cursor-pointer":"","transition-300":"",onClick:e[0]||(e[0]=r=>u.value=!0),onKeyup:e[1]||(e[1]=V(r=>u.value=!1,["esc"]))},[f(o("span",ke,null,512),[[O,t(_)&&t(_)<99],[H,t(_)]]),f(o("span",we," 99+ ",512),[[O,t(_)&&t(_)>99]]),Se],32)]),default:l(()=>[o("div",null,[o("h2",Ce,[o("span",{style:{"font-size":"0.6em",position:"absolute",right:"2em",top:"2em"},"cursor-pointer":"","select-none":"",plain:!t(c),class:"transition-300",onClick:e[2]||(e[2]=r=>c.value=!t(c))},_e(t(c)?"取消":"管理"),9,Le),x(" 购物车 ")]),p(Q,{tag:"div"},{default:l(()=>{var r;return[(r=t(g).userInfo)!=null&&r.id?(d(),y(G,{key:0,height:"50vh","mb-2":"","px-3":""},{default:l(()=>[p(F,{modelValue:t(s),"onUpdate:modelValue":e[3]||(e[3]=m=>U(s)?s.value=m:null)},{default:l(()=>[f((d(),$("div",Ie,[p(L,{immediate:!0,"no-more":t(M),onLoad:t(i).loadShopcartList},{default:l(()=>[(d(!0),$(he,null,ve(t(i).shopcartList,m=>(d(),y(C,{key:m.id,"shop-cart":m},{btn:l(()=>[p(n,{label:m.id,disabled:!m.stock},null,8,["label","disabled"])]),_:2},1032,["shop-cart"]))),128))]),_:1},8,["no-more","onLoad"])])),[[J]])]),_:1},8,["modelValue"])]),_:1})):k("",!0)]}),_:1}),o("div",Ee,[p(n,{modelValue:t(b),"onUpdate:modelValue":e[4]||(e[4]=r=>U(b)?b.value=r:null),"mx-2":"",size:"large",label:"全 选"},null,8,["modelValue"]),o("div",Be,[o("h3",$e,[Ve,f(o("span",Oe,null,512),[[W,t(j)]])]),t(c)&&t(s).length?(d(),y(I,{key:0,class:"fadeInOut flex-1",style:{padding:"0em 1em"},type:"danger",disabled:t(s).length===0&&!t(c),plain:"",round:"",onClick:e[5]||(e[5]=r=>T("批量删除"))},{default:l(()=>[x(" 批量删除 "),Te]),_:1},8,["disabled"])):k("",!0),t(c)?(d(),y(I,{key:1,class:"fadeInOut flex-1",style:{padding:"0em 1em"},type:"danger",plain:"",disabled:!t(c),round:"",onClick:D},{default:l(()=>[ze,x(" 清空 ")]),_:1},8,["disabled"])):k("",!0),p(I,{class:"fadeInOut flex-1",style:{padding:"0em 2em"},type:"info",round:"",disabled:t(s).length===0,"tracking-0.1em":"",onClick:e[6]||(e[6]=r=>q(t(s)))},{default:l(()=>[x(" 去结算 ")]),_:1},8,["disabled"])])])])]),_:1}),f(o("div",{class:"shop-cart-mock","h-100vh":"","w-100vw":"","opacity-40":"","transition-200":"",style:{position:"fixed",top:"0",left:"0","z-index":"-1"},onClick:e[8]||(e[8]=r=>u.value=!1),onKeyup:e[9]||(e[9]=V(r=>u.value=!1,["esc"]))},null,544),[[O,t(u)]])])),[[X,t(S),void 0,{fullscreen:!0,lock:!0}]]):k("",!0)}}}),it=ue(Ae,[["__scopeId","data-v-35f7027a"]]);export{it as default};
