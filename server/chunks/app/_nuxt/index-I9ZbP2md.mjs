import { a as useFetch } from './fetch-YS3Fxkuj.mjs';
import { o as BaseUrl } from '../server.mjs';

function getEventsLists() {
  return useFetch(() => `${BaseUrl}/event/list`, "$xvkmTfuJqN");
}
function getEventsInfo(eid) {
  return useFetch(() => `${BaseUrl}/event/info/${eid}`, "$RCOJD6duVz");
}
function getEventsGoodsSkuList(gid) {
  return useFetch(() => `${BaseUrl}/event/goods/sku/${gid}`, "$T6xeGbxDlZ");
}

export { getEventsGoodsSkuList as a, getEventsLists as b, getEventsInfo as g };
//# sourceMappingURL=index-I9ZbP2md.mjs.map
