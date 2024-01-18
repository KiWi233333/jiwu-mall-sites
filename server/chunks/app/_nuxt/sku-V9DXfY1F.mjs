import { a as useFetch } from './fetch-YS3Fxkuj.mjs';
import { o as BaseUrl, p as useHttp } from '../server.mjs';

function getGoodsSkuByGid(gid) {
  return useFetch(`${BaseUrl}/goods/sku?gid=${gid}`, "$AfkcphgTcz");
}
function getGoodsSkuByIds(ids) {
  return useHttp.post("/goods/sku", {
    ids: [...ids]
  });
}

export { getGoodsSkuByIds as a, getGoodsSkuByGid as g };
//# sourceMappingURL=sku-V9DXfY1F.mjs.map
