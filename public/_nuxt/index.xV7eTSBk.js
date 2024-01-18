import{o}from"./entry.HuYbGiLS.js";function D(e,r,i,n,E){return o.post(`/orders/${e}/${r}/${i}`,{...n},{headers:{Authorization:E}})}function a(e,r,i,n){return o.post(`/orders/${e}/${r}`,{...i},{headers:{Authorization:n}})}var t=(e=>(e[e.DELETED=-2]="DELETED",e[e.READY=-1]="READY",e[e.UN_PAID=0]="UN_PAID",e[e.PAID=1]="PAID",e[e.DELIVERED=2]="DELIVERED",e[e.RECEIVED=3]="RECEIVED",e[e.COMMENTED=4]="COMMENTED",e[e.CANCELED=5]="CANCELED",e[e.DELAY_CANCELED=6]="DELAY_CANCELED",e[e.REFUND=7]="REFUND",e[e.REFUND_SUCCESS=8]="REFUND_SUCCESS",e))(t||{});function h(e,r){return o.get(`/orders/${e}`,{},{headers:{Authorization:r}})}function d(e,r,i,n){return o.post("/orders/",{addressId:e,items:[...r],remark:i},{headers:{Authorization:n}})}function c(e,r,i,n){return o.put(`/orders/${e}`,{addressId:r,remark:i},{headers:{Authorization:n}})}function s(e,r,i,n,E){return o.put(`/orders/pay/${e}`,{type:r,points:i,voucherId:n},{headers:{Authorization:E}})}var A=(e=>(e.WEALLET="WALLET",e.WECHAT="WECHAT",e.ALIPAY="ALIPAY",e))(A||{});function C(e,r){return o.put(`/orders/cancel/${e}`,{},{headers:{Authorization:r}})}function f(e,r){return o.put(`/orders/refund/${e}`,{},{headers:{Authorization:r}})}function p(e,r){return o.get(`/orders/delivery/${e}`,{},{headers:{Authorization:r}})}function L(e,r){return o.put(`/orders/delivered/${e}`,{},{headers:{Authorization:r}})}function m(e,r){return o.deleted(`/orders/${e}`,{},{headers:{Authorization:r}})}function $(e,r,i){return o.post(`/orders/comment/${e}`,{list:r.map(n=>(n.isAnonymous=+n.isAnonymous,n.isRecommend=+n.isRecommend,n))},{headers:{Authorization:i}})}export{t as O,A as P,p as a,s as b,C as c,L as d,m as e,a as f,h as g,D as h,d as p,f as r,$ as t,c as u};
