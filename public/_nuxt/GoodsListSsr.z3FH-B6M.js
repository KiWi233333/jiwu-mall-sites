import{ad as x,ae as h,ai as z,w as M,f as I}from"./entry.t-rqPOs0.js";import{b as P,_ as j}from"./index.-orXLehy.js";import{_ as E}from"./nuxt-link.AUBdcVxd.js";import{ElText as K}from"./index.Ody5FIGE.js";import{j as O,a as c,r as R,k as B,au as W,O as n,P as v,a7 as y,a2 as g,a0 as A,as as H,$ as J,Q as G,a6 as C,a5 as T,u as l,Z as Q,a3 as U,a9 as Y,ab as Z,ac as q,a8 as $,an as X,ao as ee}from"./swiper-vue.Dj7aAS3P.js";function ce(){return x(`${h}/goods/category/tree`,"$HreoDSWYKV")}function de(){return x(`${h}/goods/category/list`,"$5FhJKlx1F0")}function me(s){return x(`${h}/goods/category/one/${s}`,"$hFrW1zsa4r")}const te=s=>(X("data-v-a2462ea3"),s=s(),ee(),s),ae={class:"ml-a mt-2px text-blueGray"},oe=te(()=>G("i",{"i-solar:fire-bold-duotone":"","bg-red-5":"","p-0.6em":""},null,-1)),se=O({__name:"GoodsListSsr",props:{dto:{default:()=>({})},class:{},limit:{},load:{type:Boolean},isTimer:{type:Boolean,default:!0},showMoreText:{type:Boolean,default:!0},immediate:{type:Boolean,default:!0},transiton:{}},async setup(s,{expose:L}){let w,b;const e=s,d=c(!1),r=c([]),m=c(0),N=c(e.limit||10),t=R({total:-1,pages:-1,current:-1}),_=B(()=>(t==null?void 0:t.total)===0&&t.pages===0),p=B(()=>t.pages>0&&(m.value>=t.pages||e.limit!==void 0&&e.limit<=r.value.length));async function i(){if(d.value||p.value||_.value)return;if(e.limit!==void 0&&r.value.length>=e.limit){d.value=!1;return}d.value=!0,m.value++;const{data:o}=await P(m.value,N.value,e==null?void 0:e.dto);if(t.total=o.total,t.current=o.current,t.pages=o.pages,e.isTimer)for await(const a of o.records)a.images=typeof a.images=="string"?a.images.split(","):[],r.value.push(Object.freeze(a));else for(const a of o.records)a.images=typeof a.images=="string"?a.images.split(","):[],r.value.push(a);d.value=!1}function k(){r.value.splice(0),t.total=-1,t.pages=-1,t.current=-1,m.value=0}const S=z(e.dto),f=c();return M(S,async()=>{f.value||(k(),await i(),f.value=setTimeout(()=>{clearTimeout(f.value),f.value=null},400))},{}),e.immediate&&i(),L({clearResult:k,loadGoodsPage:i,goodsList:r,pageInfo:t}),e.immediate&&([w,b]=W(()=>i()),await w,b()),(o,a)=>{const D=j,F=E,V=K;return n(),v("div",null,[(n(),y(U(e.transiton?Y:"div"),{tag:"div",name:o.transiton||"fade-bt-list",class:Q(["pb-4",e.class!==null?e.class:"flex flex-wrap"])},{default:g(()=>[(n(!0),v(A,null,H(l(r),u=>(n(),y(F,{key:u.id,to:`/goods/detail/${u.id}`},{default:g(()=>[J(D,{class:"mt-4/100 transition-300 v-card",goods:u},{default:g(()=>[G("small",ae,[oe,C(" "+T(u.sales),1)])]),_:2},1032,["goods"])]),_:2},1032,["to"]))),128))]),_:1},8,["name","class"])),o.showMoreText?Z((n(),v("small",{key:0,"mt-2":"",block:"","w-full":"","text-center":"","text-bluegray":"","tracking-1":""},T(l(p)?"暂无更多商品":"暂无商品"),513)),[[q,l(p)||l(_)]]):$("",!0),o.showMoreText&&!l(p)&&!l(_)?(n(),y(V,{key:1,"mt-4":"",block:"","w-full":"","cursor-pointer":"","text-center":"",onClick:a[0]||(a[0]=u=>i())},{default:g(()=>[C(" 加载更多 ")]),_:1})):$("",!0)])}}}),pe=I(se,[["__scopeId","data-v-a2462ea3"]]);export{pe as _,ce as a,de as b,me as g};
