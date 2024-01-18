import { a as useFetch } from './fetch-YS3Fxkuj.mjs';
import { p as useHttp, o as BaseUrl } from '../server.mjs';

function getCommCategory() {
  return useFetch(() => `${BaseUrl}/community/category/tree`, "$KmVHAG10kk");
}
function getCommCategoryList() {
  return useHttp.get(`${BaseUrl}/community/category/list`);
}
function getCommPostCategoryById(id) {
  return useHttp.get(`/community/category/post/${id}`);
}
function getCommCategoryById(id) {
  return useHttp.get(`/community/category/one/${id}`);
}

export { getCommCategoryList as a, getCommCategory as b, getCommPostCategoryById as c, getCommCategoryById as g };
//# sourceMappingURL=category-HtxOPKX5.mjs.map
