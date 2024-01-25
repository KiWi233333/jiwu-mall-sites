import { m as useFetch, o as BaseUrl, j as useHttp } from '../server.mjs';

function getPostPageLazy(page, size, dto) {
  return useFetch(`${BaseUrl}/community/post/list/${page}/${size}`, {
    method: "POST",
    body: { ...dto }
  }, "$L8FRAJ4Irt");
}
function getPostPage(page, size, dto) {
  return useHttp.post(`/community/post/list/${page}/${size}`, { ...dto }, {});
}
function getPostPageSelf(page, size, dto, token) {
  return useHttp.post(`/community/post/self/list/${page}/${size}`, { ...dto }, {
    headers: {
      Authorization: token
    }
  });
}
var PostStatus = /* @__PURE__ */ ((PostStatus2) => {
  PostStatus2[PostStatus2["UNDOING"] = 0] = "UNDOING";
  PostStatus2[PostStatus2["PUBLISHED"] = 1] = "PUBLISHED";
  PostStatus2[PostStatus2["DELETED"] = 2] = "DELETED";
  PostStatus2[PostStatus2["REJECT"] = 3] = "REJECT";
  PostStatus2[PostStatus2["ADMIN_DELETED"] = 4] = "ADMIN_DELETED";
  PostStatus2[PostStatus2["DRAFT"] = 5] = "DRAFT";
  return PostStatus2;
})(PostStatus || {});
function getCommPostDetailBySelf(id, token) {
  return useHttp.get(`/community/post/self/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function getCommPostDetailHttp(id, token) {
  return useHttp.get(`/community/post/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function addCommPost(dto, token) {
  return useHttp.post("/community/post", {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function updateCommPost(id, dto, token) {
  return useHttp.put(`/community/post/${id}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function delCommPost(id, token) {
  return useHttp.deleted(`/community/post/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function hardDelCommPost(id, token) {
  return useHttp.deleted(`/community/post/hard/${id}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function getCommPostActionPage(page, size, dto, token) {
  return useHttp.post(`/community/post/action/list/${page}/${size}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function togglePostAction(pid, dto, token) {
  return useHttp.put(`/community/post/action/${pid}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
var PostActionType = /* @__PURE__ */ ((PostActionType2) => {
  PostActionType2[PostActionType2["LIKE"] = 0] = "LIKE";
  PostActionType2[PostActionType2["COLLECT"] = 1] = "COLLECT";
  return PostActionType2;
})(PostActionType || {});
const getPostStatusList = [
  { title: "\u5F85\u5BA1\u6838", iconClass: "warning", value: 0 },
  { title: "\u5DF2\u5BA1\u6838", iconClass: "", value: 1 },
  { title: "\u56DE\u6536\u7AD9", iconClass: "danger", value: 2 },
  { title: "\u5DF2\u9A73\u56DE", iconClass: "danger", value: 3 },
  { title: "\u7BA1\u7406\u5458\u5220\u9664", iconClass: "", value: 4 },
  { title: "\u5B58\u8349\u7A3F", iconClass: "success", value: 5 }
];
Object.freeze(getPostStatusList);
function getPostTotal(dto, token) {
  return useHttp.post("/community/post/total", {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}

export { PostStatus as P, getPostPageLazy as a, getPostStatusList as b, getCommPostDetailBySelf as c, addCommPost as d, delCommPost as e, PostActionType as f, getCommPostDetailHttp as g, hardDelCommPost as h, getCommPostActionPage as i, getPostTotal as j, getPostPageSelf as k, getPostPage as l, togglePostAction as t, updateCommPost as u };
//# sourceMappingURL=post-VFNrEwmr.mjs.map
