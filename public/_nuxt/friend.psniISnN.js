import{b3 as a}from"./entry.t-rqPOs0.js";function s(e=10,r,t){return a.get("/chat/user/friend/page",{pageSize:e,cursor:r},{headers:{Authorization:t}})}function d(e=10,r,t){return a.get("/chat/user/friend/apply/page",{page:e,size:r},{headers:{Authorization:t}})}function h(e,r,t,n){return a.post(`/chat/user/friend/user/${e}/${r}`,{...t},{headers:{Authorization:n}})}var i=(e=>(e[e.Load=0]="Load",e[e.Argee=1]="Argee",e))(i||{});function c(e){return a.get("/chat/user/friend/apply/unread",{},{headers:{Authorization:e}})}function f(e,r){return a.post("/chat/user/friend/apply",{...e},{headers:{Authorization:r}})}function g(e,r){return a.post("/chat/user/friend/check",{...e},{headers:{Authorization:r}})}function A(e,r){return a.deleted(`/chat/user/friend/${e}`,{},{headers:{Authorization:r}})}var u=(e=>(e[e.Empty=-1]="Empty",e[e.User=0]="User",e[e.NewFriend=1]="NewFriend",e[e.GroupFriend=2]="GroupFriend",e))(u||{});function z(e,r){return a.put("/chat/user/friend/apply",{...e},{headers:{Authorization:r}})}export{i as C,u as F,s as a,d as b,z as c,A as d,c as e,f,h as g,g as i};
