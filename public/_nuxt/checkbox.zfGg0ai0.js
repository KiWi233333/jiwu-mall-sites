import{M as U,i as I,k as h,g as j,b as q,n as X,a as F,J as E,L as be,z as K,j as L,a1 as Z,O as C,a7 as Y,a2 as _,u,Z as x,x as w,ad as $,P as y,aT as V,ab as N,Q as A,X as P,a0 as ve,a5 as ee,a6 as ae,a8 as G,a3 as le,a4 as me,p as fe,C as pe}from"./swiper-vue.Dj7aAS3P.js";import{hz as H,h2 as ke,hA as he,hu as ge,ao as ne,a2 as z,W as J,aG as T,a0 as D,aJ as xe,aI as O,aK as te,ar as Q,gx as Ce,as as oe,O as M,Q as R,M as ye,R as Se,U as Le,V as se}from"./entry.t-rqPOs0.js";import{i as Be}from"./isEqual.OSnr_sHV.js";import{i as Ee,h as Ie}from"./hasIn.6fummut8.js";import{f as we}from"./flatten.qRdZVAia.js";function $e(e,a,n){switch(n.length){case 0:return e.call(a);case 1:return e.call(a,n[0]);case 2:return e.call(a,n[0],n[1]);case 3:return e.call(a,n[0],n[1],n[2])}return e.apply(a,n)}var Ve=800,Ne=16,ze=Date.now;function Fe(e){var a=0,n=0;return function(){var l=ze(),r=Ne-(l-n);if(n=l,r>0){if(++a>=Ve)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Ge(e){return function(){return e}}var Te=H?function(e,a){return H(e,"toString",{configurable:!0,enumerable:!1,value:Ge(a),writable:!0})}:Ee;const De=Te;var Pe=Fe(De),W=Math.max;function Oe(e,a,n){return a=W(a===void 0?e.length-1:a,0),function(){for(var l=arguments,r=-1,d=W(l.length-a,0),c=Array(d);++r<d;)c[r]=l[a+r];r=-1;for(var t=Array(a+1);++r<a;)t[r]=l[r];return t[a]=n(c),$e(e,this,t)}}function Me(e){return Pe(Oe(e,void 0,we),e+"")}function Re(e,a,n){for(var l=-1,r=a.length,d={};++l<r;){var c=a[l],t=ke(e,c);n(t,c)&&he(d,ge(c,e),t)}return d}function Ue(e,a){return Re(e,a,function(n,l){return Ie(e,l)})}var Ke=Me(function(e,a){return e==null?{}:Ue(e,a)});const ue={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ne,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ie={[z]:e=>U(e)||J(e)||T(e),change:e=>U(e)||J(e)||T(e)},B=Symbol("checkboxGroupContextKey"),Ae=({model:e,isChecked:a})=>{const n=I(B,void 0),l=h(()=>{var d,c;const t=(d=n==null?void 0:n.max)==null?void 0:d.value,m=(c=n==null?void 0:n.min)==null?void 0:c.value;return!D(t)&&e.value.length>=t&&!a.value||!D(m)&&e.value.length<=m&&a.value});return{isDisabled:xe(h(()=>(n==null?void 0:n.disabled.value)||l.value)),isLimitDisabled:l}},He=(e,{model:a,isLimitExceeded:n,hasOwnLabel:l,isDisabled:r,isLabeledByFormItem:d})=>{const c=I(B,void 0),{formItem:t}=O(),{emit:m}=j();function o(s){var v,p;return s===e.trueLabel||s===!0?(v=e.trueLabel)!=null?v:!0:(p=e.falseLabel)!=null?p:!1}function f(s,v){m("change",o(s),v)}function k(s){if(n.value)return;const v=s.target;m("change",o(v.checked),s)}async function S(s){n.value||!l.value&&!r.value&&d.value&&(s.composedPath().some(b=>b.tagName==="LABEL")||(a.value=o([!1,e.falseLabel].includes(a.value)),await X(),f(a.value,s)))}const i=h(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return q(()=>e.modelValue,()=>{i.value&&(t==null||t.validate("change").catch(s=>te()))}),{handleChange:k,onClickRoot:S}},Je=e=>{const a=F(!1),{emit:n}=j(),l=I(B,void 0),r=h(()=>D(l)===!1),d=F(!1);return{model:h({get(){var t,m;return r.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:a.value},set(t){var m,o;r.value&&E(t)?(d.value=((m=l==null?void 0:l.max)==null?void 0:m.value)!==void 0&&t.length>(l==null?void 0:l.max.value),d.value===!1&&((o=l==null?void 0:l.changeEvent)==null||o.call(l,t))):(n(z,t),a.value=t)}}),isGroup:r,isLimitExceeded:d}},Qe=(e,a,{model:n})=>{const l=I(B,void 0),r=F(!1),d=h(()=>{const o=n.value;return T(o)?o:E(o)?be(e.label)?o.map(K).some(f=>Be(f,e.label)):o.map(K).includes(e.label):o!=null?o===e.trueLabel:!!o}),c=Q(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),t=Q(h(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),m=h(()=>!!a.default||!Ce(e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:r,checkboxSize:t,hasOwnLabel:m}},We=(e,{model:a})=>{function n(){E(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&n()},re=(e,a)=>{const{formItem:n}=O(),{model:l,isGroup:r,isLimitExceeded:d}=Je(e),{isFocused:c,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=Qe(e,a,{model:l}),{isDisabled:k}=Ae({model:l,isChecked:t}),{inputId:S,isLabeledByFormItem:i}=oe(e,{formItemContext:n,disableIdGeneration:f,disableIdManagement:r}),{handleChange:s,onClickRoot:v}=He(e,{model:l,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:i});return We(e,{model:l}),{inputId:S,isLabeledByFormItem:i,isChecked:t,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:l,handleChange:s,onClickRoot:v}},je=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],qe=["id","indeterminate","disabled","value","name","tabindex"],Xe=L({name:"ElCheckbox"}),Ze=L({...Xe,props:ue,emits:ie,setup(e){const a=e,n=Z(),{inputId:l,isLabeledByFormItem:r,isChecked:d,isDisabled:c,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:k,onClickRoot:S}=re(a,n),i=M("checkbox"),s=h(()=>[i.b(),i.m(m.value),i.is("disabled",c.value),i.is("bordered",a.border),i.is("checked",d.value)]),v=h(()=>[i.e("input"),i.is("disabled",c.value),i.is("checked",d.value),i.is("indeterminate",a.indeterminate),i.is("focus",t.value)]);return(p,b)=>(C(),Y(le(!u(o)&&u(r)?"span":"label"),{class:x(u(s)),"aria-controls":p.indeterminate?p.controls:null,onClick:u(S)},{default:_(()=>[A("span",{class:x(u(v))},[p.trueLabel||p.falseLabel?N((C(),y("input",{key:0,id:u(l),"onUpdate:modelValue":b[0]||(b[0]=g=>w(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox",indeterminate:p.indeterminate,name:p.name,tabindex:p.tabindex,disabled:u(c),"true-value":p.trueLabel,"false-value":p.falseLabel,onChange:b[1]||(b[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:b[2]||(b[2]=g=>t.value=!0),onBlur:b[3]||(b[3]=g=>t.value=!1),onClick:b[4]||(b[4]=$(()=>{},["stop"]))},null,42,je)),[[V,u(f)]]):N((C(),y("input",{key:1,id:u(l),"onUpdate:modelValue":b[5]||(b[5]=g=>w(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox",indeterminate:p.indeterminate,disabled:u(c),value:p.label,name:p.name,tabindex:p.tabindex,onChange:b[6]||(b[6]=(...g)=>u(k)&&u(k)(...g)),onFocus:b[7]||(b[7]=g=>t.value=!0),onBlur:b[8]||(b[8]=g=>t.value=!1),onClick:b[9]||(b[9]=$(()=>{},["stop"]))},null,42,qe)),[[V,u(f)]]),A("span",{class:x(u(i).e("inner"))},null,2)],2),u(o)?(C(),y("span",{key:0,class:x(u(i).e("label"))},[P(p.$slots,"default"),p.$slots.default?G("v-if",!0):(C(),y(ve,{key:0},[ae(ee(p.label),1)],64))],2)):G("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var Ye=R(Ze,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const _e=["name","tabindex","disabled","true-value","false-value"],ea=["name","tabindex","disabled","value"],aa=L({name:"ElCheckboxButton"}),la=L({...aa,props:ue,emits:ie,setup(e){const a=e,n=Z(),{isFocused:l,isChecked:r,isDisabled:d,checkboxButtonSize:c,model:t,handleChange:m}=re(a,n),o=I(B,void 0),f=M("checkbox"),k=h(()=>{var i,s,v,p;const b=(s=(i=o==null?void 0:o.fill)==null?void 0:i.value)!=null?s:"";return{backgroundColor:b,borderColor:b,color:(p=(v=o==null?void 0:o.textColor)==null?void 0:v.value)!=null?p:"",boxShadow:b?`-1px 0 0 0 ${b}`:void 0}}),S=h(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",r.value),f.is("focus",l.value)]);return(i,s)=>(C(),y("label",{class:x(u(S))},[i.trueLabel||i.falseLabel?N((C(),y("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=v=>w(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),"true-value":i.trueLabel,"false-value":i.falseLabel,onChange:s[1]||(s[1]=(...v)=>u(m)&&u(m)(...v)),onFocus:s[2]||(s[2]=v=>l.value=!0),onBlur:s[3]||(s[3]=v=>l.value=!1),onClick:s[4]||(s[4]=$(()=>{},["stop"]))},null,42,_e)),[[V,u(t)]]):N((C(),y("input",{key:1,"onUpdate:modelValue":s[5]||(s[5]=v=>w(t)?t.value=v:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),value:i.label,onChange:s[6]||(s[6]=(...v)=>u(m)&&u(m)(...v)),onFocus:s[7]||(s[7]=v=>l.value=!0),onBlur:s[8]||(s[8]=v=>l.value=!1),onClick:s[9]||(s[9]=$(()=>{},["stop"]))},null,42,ea)),[[V,u(t)]]),i.$slots.default||i.label?(C(),y("span",{key:2,class:x(u(f).be("button","inner")),style:me(u(r)?u(k):void 0)},[P(i.$slots,"default",{},()=>[ae(ee(i.label),1)])],6)):G("v-if",!0)],2))}});var de=R(la,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const na=ye({modelValue:{type:Se(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ne,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ta={[z]:e=>E(e),change:e=>E(e)},oa=L({name:"ElCheckboxGroup"}),sa=L({...oa,props:na,emits:ta,setup(e,{emit:a}){const n=e,l=M("checkbox"),{formItem:r}=O(),{inputId:d,isLabeledByFormItem:c}=oe(n,{formItemContext:r}),t=async o=>{a(z,o),await X(),a("change",o)},m=h({get(){return n.modelValue},set(o){t(o)}});return fe(B,{...Ke(pe(n),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),q(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(o=>te()))}),(o,f)=>{var k;return C(),Y(le(o.tag),{id:u(d),class:x(u(l).b("group")),role:"group","aria-label":u(c)?void 0:o.label||"checkbox-group","aria-labelledby":u(c)?(k=u(r))==null?void 0:k.labelId:void 0},{default:_(()=>[P(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ce=R(sa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const ba=Le(Ye,{CheckboxButton:de,CheckboxGroup:ce}),va=se(de),ma=se(ce);export{ba as E,ma as a,va as b};
