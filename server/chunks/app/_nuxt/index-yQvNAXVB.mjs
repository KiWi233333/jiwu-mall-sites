import { p as useHttp, o as BaseUrl } from '../server.mjs';

function getCommUserInfoSe(userId, token) {
  return useHttp.get(`${BaseUrl}/community/user/${userId}`, {}, {
    headers: {
      Authorization: token
    }
  });
}

export { getCommUserInfoSe as g };
//# sourceMappingURL=index-yQvNAXVB.mjs.map
