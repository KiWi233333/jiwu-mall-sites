import { p as useHttp } from '../server.mjs';

function getGoodsIsCollect(gid, token) {
  return useHttp.get(`/goods/action/collect/${gid}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function toggleGoodsCollectStatus(gid, token) {
  return useHttp.put(`/goods/action/collect/${gid}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function getGoodsCollectList(token) {
  return useHttp.get("/goods/action/collect", {}, {
    headers: {
      Authorization: token
    }
  });
}
function deleteBatchGoodsCollectByIds(ids, token) {
  return useHttp.deleted("/goods/action/collect", {
    ids: [...ids]
  }, {
    headers: {
      Authorization: token
    }
  });
}

export { getGoodsCollectList as a, deleteBatchGoodsCollectByIds as d, getGoodsIsCollect as g, toggleGoodsCollectStatus as t };
//# sourceMappingURL=collect-jWDvukS4.mjs.map
