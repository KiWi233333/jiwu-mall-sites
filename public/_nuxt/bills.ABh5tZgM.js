import{o}from"./entry.HuYbGiLS.js";function e(t,a,r,s){return o.post(`/user/bills/list/${t}/${a}`,{},{headers:{Authorization:s},body:{...r}})}function A(t,a){return o.post("/user/bills/total/detail",{},{headers:{Authorization:a},body:{...t}})}function b(t,a){return o.post("/user/bills/total",{},{headers:{Authorization:a},body:{...t}})}var i=(t=>(t.Day="DAY",t.Month="MONTH",t.Year="YEAR",t))(i||{}),l=(t=>(t[t.OUT=0]="OUT",t[t.IN=1]="IN",t))(l||{}),n=(t=>(t[t.BALANCE=0]="BALANCE",t[t.POINT=1]="POINT",t))(n||{});export{l as B,n as C,i as T,A as a,b,e as g};
