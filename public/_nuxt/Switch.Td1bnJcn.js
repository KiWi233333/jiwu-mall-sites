import{m as _,o as m,z as g,i as d,f as r}from"./entry.t-rqPOs0.js";import{j as u,O as t,a7 as p,a2 as h,Q as x,a5 as f,u as n,P as a}from"./swiper-vue.Dj7aAS3P.js";const k=""+globalThis.__publicAssetsURL("images/icon/sun.svg"),v=""+globalThis.__publicAssetsURL("images/icon/moon.svg"),B={hidden:"","overflow-hidden":"",truncate:"","md:inline":""},T={key:0,class:"h-1.3em w-1.3em",sizes:"md:20px",densities:"x1 x2",src:k,quality:"50",alt:"sun 日间模式"},b={key:1,src:v,sizes:"md:20px",quality:"50",densities:"x1 x2",class:"h-1.3em w-1.3em fill-light-5",alt:"sun 日间模式"},w=u({__name:"Switch",setup(y){const e=_(),i=m();function c(o){const s=i.value==="dark"?"light":"dark";e.settingPage.modeToggle.value=s,g(s,o)}return(o,s)=>{const l=d;return t(),p(l,{class:"btn mx-2 v-card",round:"",onClick:c},{default:h(()=>[x("span",B,f(n(e).settingPage.modeToggle.value==="dark"?"切换日间":"切换夜间"),1),n(e).settingPage.modeToggle.value==="light"?(t(),a("img",T)):(t(),a("img",b))]),_:1})}}}),S=r(w,[["__scopeId","data-v-708cc123"]]);export{S as _};
