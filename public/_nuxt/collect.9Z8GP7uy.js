import{b3 as e}from"./entry.t-rqPOs0.js";function c(t,o){return e.get(`/goods/action/collect/${t}`,{},{headers:{Authorization:o}})}function a(t,o){return e.put(`/goods/action/collect/${t}`,{},{headers:{Authorization:o}})}function n(t){return e.get("/goods/action/collect",{},{headers:{Authorization:t}})}function i(t,o){return e.deleted("/goods/action/collect",{ids:[...t]},{headers:{Authorization:o}})}export{n as a,i as d,c as g,a as t};
