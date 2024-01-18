import{T as se,j as N,i as q,k as F,L as T,M as K,N as R,U as D,X as y,u as e,a3 as te,Z as M,a0 as k,a1 as ne,a5 as _,a6 as j,a2 as H,g as ie,a as E,b as Z,n as re,F as ue,$ as de,p as ce,V as fe,aF as ve,aa as me,a9 as pe,ac as ye,aB as ge}from"./swiper-vue.4ZhlhtKr.js";import{H as W,I as be,a2 as Ce,aW as he,aX as ke,M as De,K as Q,aY as Ee,L as Y,Y as x,az as Fe,aZ as Ie,a_ as J,a$ as Te,a3 as Be,b0 as Se,b1 as Ae,b2 as X,aK as $e,aF as G,J as we,b3 as Le,b4 as Pe,b5 as Re,N as Me}from"./entry.HuYbGiLS.js";import{i as Ne}from"./isUndefined.IZwZ21d-.js";const Oe=(...o)=>a=>{o.forEach(i=>{se(i)?i(a):i.value=a})},ee=Symbol("dialogInjectionKey"),oe=W({center:Boolean,alignCenter:Boolean,closeIcon:{type:be},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),ze={close:()=>!0},Ve=["aria-level"],Ue=["aria-label"],Ke=["id"],_e=N({name:"ElDialogContent"}),je=N({..._e,props:oe,emits:ze,setup(o){const a=o,{t:i}=Ce(),{Close:A}=Ee,{dialogRef:n,headerRef:c,bodyId:I,ns:t,style:g}=q(ee),{focusTrapRef:r}=q(he),f=F(()=>[t.b(),t.is("fullscreen",a.fullscreen),t.is("draggable",a.draggable),t.is("align-center",a.alignCenter),{[t.m("center")]:a.center},a.customClass]),v=Oe(r,n),b=F(()=>a.draggable);return ke(n,c,b),(s,d)=>(T(),K("div",{ref:e(v),class:y(e(f)),style:H(e(g)),tabindex:"-1"},[R("header",{ref_key:"headerRef",ref:c,class:y(e(t).e("header"))},[D(s.$slots,"header",{},()=>[R("span",{role:"heading","aria-level":s.ariaLevel,class:y(e(t).e("title"))},te(s.title),11,Ve)]),s.showClose?(T(),K("button",{key:0,"aria-label":e(i)("el.dialog.close"),class:y(e(t).e("headerbtn")),type:"button",onClick:d[0]||(d[0]=$=>s.$emit("close"))},[M(e(De),{class:y(e(t).e("close"))},{default:k(()=>[(T(),_(ne(s.closeIcon||e(A))))]),_:1},8,["class"])],10,Ue)):j("v-if",!0)],2),R("div",{id:e(I),class:y(e(t).e("body"))},[D(s.$slots,"default")],10,Ke),s.$slots.footer?(T(),K("footer",{key:0,class:y(e(t).e("footer"))},[D(s.$slots,"footer")],2)):j("v-if",!0)],6))}});var qe=Q(je,[["__file","dialog-content.vue"]]);const Ze=W({...oe,appendToBody:Boolean,appendTo:{type:Y(String),default:"body"},beforeClose:{type:Y(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),Ye={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[x]:o=>Fe(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Je=(o,a)=>{var i;const n=ie().emit,{nextZIndex:c}=Ie();let I="";const t=J(),g=J(),r=E(!1),f=E(!1),v=E(!1),b=E((i=o.zIndex)!=null?i:c());let s,d;const $=Te("namespace",Ae),O=F(()=>{const u={},h=`--${$.value}-dialog`;return o.fullscreen||(o.top&&(u[`${h}-margin-top`]=o.top),o.width&&(u[`${h}-width`]=Be(o.width))),u}),z=F(()=>o.alignCenter?{display:"flex"}:{});function w(){n("opened")}function V(){n("closed"),n(x,!1),o.destroyOnClose&&(v.value=!1)}function U(){n("close")}function L(){d==null||d(),s==null||s(),o.openDelay&&o.openDelay>0?{stop:s}=X(()=>P(),o.openDelay):P()}function B(){s==null||s(),d==null||d(),o.closeDelay&&o.closeDelay>0?{stop:d}=X(()=>l(),o.closeDelay):l()}function S(){function u(h){h||(f.value=!0,r.value=!1)}o.beforeClose?o.beforeClose(u):B()}function m(){o.closeOnClickModal&&S()}function P(){$e&&(r.value=!0)}function l(){r.value=!1}function p(){n("openAutoFocus")}function C(){n("closeAutoFocus")}function le(u){var h;((h=u.detail)==null?void 0:h.focusReason)==="pointer"&&u.preventDefault()}o.lockScroll&&Se(r);function ae(){o.closeOnPressEscape&&S()}return Z(()=>o.modelValue,u=>{u?(f.value=!1,L(),v.value=!0,b.value=Ne(o.zIndex)?c():b.value++,re(()=>{n("open"),a.value&&(a.value.scrollTop=0)})):r.value&&B()}),Z(()=>o.fullscreen,u=>{a.value&&(u?(I=a.value.style.transform,a.value.style.transform=""):a.value.style.transform=I)}),ue(()=>{o.modelValue&&(r.value=!0,v.value=!0,L())}),{afterEnter:w,afterLeave:V,beforeLeave:U,handleClose:S,onModalClick:m,close:B,doClose:l,onOpenAutoFocus:p,onCloseAutoFocus:C,onCloseRequested:ae,onFocusoutPrevented:le,titleId:t,bodyId:g,closed:f,style:O,overlayDialogStyle:z,rendered:v,visible:r,zIndex:b}},Xe=["aria-label","aria-labelledby","aria-describedby"],Ge=N({name:"ElDialog",inheritAttrs:!1}),He=N({...Ge,props:Ze,emits:Ye,setup(o,{expose:a}){const i=o,A=de();G({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},F(()=>!!A.title)),G({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},F(()=>!!i.customClass));const n=we("dialog"),c=E(),I=E(),t=E(),{visible:g,titleId:r,bodyId:f,style:v,overlayDialogStyle:b,rendered:s,zIndex:d,afterEnter:$,afterLeave:O,beforeLeave:z,handleClose:w,onModalClick:V,onOpenAutoFocus:U,onCloseAutoFocus:L,onCloseRequested:B,onFocusoutPrevented:S}=Je(i,c);ce(ee,{dialogRef:c,headerRef:I,bodyId:f,ns:n,rendered:s,style:v});const m=Re(V),P=F(()=>i.draggable&&!i.fullscreen);return a({visible:g,dialogContentRef:t}),(l,p)=>(T(),_(ge,{to:l.appendTo,disabled:l.appendTo!=="body"?!1:!l.appendToBody},[M(ye,{name:"dialog-fade",onAfterEnter:e($),onAfterLeave:e(O),onBeforeLeave:e(z),persisted:""},{default:k(()=>[pe(M(e(Le),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e(d)},{default:k(()=>[R("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(r),"aria-describedby":e(f),class:y(`${e(n).namespace.value}-overlay-dialog`),style:H(e(b)),onClick:p[0]||(p[0]=(...C)=>e(m).onClick&&e(m).onClick(...C)),onMousedown:p[1]||(p[1]=(...C)=>e(m).onMousedown&&e(m).onMousedown(...C)),onMouseup:p[2]||(p[2]=(...C)=>e(m).onMouseup&&e(m).onMouseup(...C))},[M(e(Pe),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(U),onFocusAfterReleased:e(L),onFocusoutPrevented:e(S),onReleaseRequested:e(B)},{default:k(()=>[e(s)?(T(),_(qe,fe({key:0,ref_key:"dialogContentRef",ref:t},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(P),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,"aria-level":l.headerAriaLevel,onClose:e(w)}),ve({header:k(()=>[l.$slots.title?D(l.$slots,"title",{key:1}):D(l.$slots,"header",{key:0,close:e(w),titleId:e(r),titleClass:e(n).e("title")})]),default:k(()=>[D(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:k(()=>[D(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","aria-level","onClose"])):j("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,Xe)]),_:3},8,["mask","overlay-class","z-index"]),[[me,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var We=Q(He,[["__file","dialog.vue"]]);const oo=Me(We);export{oo as E};
