import{E as u}from"./progress.FoUIz2xX.js";import{u as h,b6 as f,E as v,d as x}from"./entry.t-rqPOs0.js";import{E as g}from"./index.uAaZKamD.js";import"./popper.b7Al0Wsi.js";/* empty css                */import{j as b,k as i,ap as y,O as w,P as E,Q as e,ab as k,u as t,a5 as C,$ as o,a2 as s,a6 as a}from"./swiper-vue.Dj7aAS3P.js";const B={class:"rounded-4px px-10 py-8 v-card"},D={class:"flex justify-between"},N={class:"inline-block w-8rem flex-row-c-c cursor-pointer opacity-90 transition-300 hover:scale-110"},P=e("small",{"mr-4":"","text-1em":""}," 积分 ",-1),S={inline:""},V={"ml-3em":"",flex:"","flex-col":""},j={"pb-3":""},L={class:"btn my-4"},U=e("small",{"ml-3":"",truncate:"","text-0.7em":"","opacity-80":""}," 每日签到+100积分 ",-1),W=e("small",{"cursor-pointer":"","text-blueGray":"",underline:""},[a(" 如何获取积分? "),e("i",{"i-solar:dollar-linear":"","ml-2":"","p-2":"","text-bluegray":""})],-1),G=e("li",null,"1、通过钱包额度充值",-1),M=e("li",null,"2、通过每日签到",-1),I=b({__name:"SigninCard",setup(O){const n=h(),l=i(()=>n.userWallet.points),r=i(()=>f(n.userWallet.points||0));function c(){v.warning("功能开发中...")}return(Q,T)=>{const _=u,p=x,d=g,m=y("incre-up-int");return w(),E("div",B,[e("div",D,[e("strong",N,[P,k(e("h2",S,null,512),[[m,t(l)]])]),e("div",V,[e("small",j,"等级：lv."+C(t(r)),1),o(_,{percentage:t(r)/6*100,"show-text":!1,striped:""},null,8,["percentage"])])]),e("div",L,[o(p,{type:"info","icon-class":"i-solar:dollar-bold-duotone mr-1","transition-icon":!0,onClick:c},{default:s(()=>[a(" 签 到 ")]),_:1}),U]),o(d,{width:160,trigger:"hover"},{reference:s(()=>[W]),default:s(()=>[G,M]),_:1})])}}});export{I as _};