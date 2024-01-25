import { m as useFetch, o as BaseUrl, j as useHttp } from '../server.mjs';

function getGoodsSkuByGid(gid) {
  return useFetch(`${BaseUrl}/goods/sku?gid=${gid}`, "$AfkcphgTcz");
}
function getGoodsSkuByIds(ids) {
  return useHttp.post("/goods/sku", {
    ids: [...ids]
  });
}

export { getGoodsSkuByIds as a, getGoodsSkuByGid as g };
//# sourceMappingURL=sku-QdHWne5L.mjs.map
