import { j as useHttp } from '../server.mjs';
import * as qiniu from 'qiniu-js';

function uploadOssFile(file, filenameKey = null, token, observer, putExtra, config) {
  const observable = qiniu.upload(
    file,
    filenameKey,
    token,
    putExtra,
    config
  );
  return observable.subscribe(observer);
}
function uploadOssFileSe(file, fileName = null, token, putExtra, config) {
  return qiniu.upload(
    file,
    fileName,
    token,
    putExtra,
    config
  );
}
const ossErrorCode = /* @__PURE__ */ new Map([
  [298, "\u90E8\u5206\u64CD\u4F5C\u6267\u884C\u6210\u529F"],
  [400, "\u8BF7\u6C42\u62A5\u6587\u683C\u5F0F\u9519\u8BEF"],
  [401, "\u8BA4\u8BC1\u6388\u6743\u5931\u8D25"],
  [403, "\u6743\u9650\u4E0D\u8DB3\uFF0C\u62D2\u7EDD\u8BBF\u95EE"],
  [404, "\u8D44\u6E90\u4E0D\u5B58\u5728"],
  [405, "\u8BF7\u6C42\u65B9\u5F0F\u9519\u8BEF"],
  [406, "\u4E0A\u4F20\u7684\u6570\u636E CRC32 \u6821\u9A8C\u9519\u8BEF"],
  [413, "\u8BF7\u6C42\u8D44\u6E90\u5927\u5C0F\u5927\u4E8E\u6307\u5B9A\u7684\u6700\u5927\u503C"],
  [419, "\u7528\u6237\u8D26\u53F7\u88AB\u51BB\u7ED3"],
  [478, "\u955C\u50CF\u56DE\u6E90\u5931\u8D25"],
  [502, "\u9519\u8BEF\u7F51\u5173"],
  [503, "\u670D\u52A1\u7AEF\u4E0D\u53EF\u7528"],
  [504, "\u670D\u52A1\u7AEF\u64CD\u4F5C\u8D85\u65F6"],
  [573, "\u5355\u4E2A\u8D44\u6E90\u8BBF\u95EE\u9891\u7387\u8FC7\u9AD8"],
  [579, "\u4E0A\u4F20\u6210\u529F\u4F46\u662F\u56DE\u8C03\u5931\u8D25"],
  [599, "\u670D\u52A1\u7AEF\u64CD\u4F5C\u5931\u8D25"],
  [608, "\u8D44\u6E90\u5185\u5BB9\u88AB\u4FEE\u6539"],
  [612, "\u6307\u5B9A\u8D44\u6E90\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664"],
  [614, "\u76EE\u6807\u8D44\u6E90\u5DF2\u5B58\u5728"],
  [630, "\u5DF2\u521B\u5EFA\u7684\u7A7A\u95F4\u6570\u91CF\u8FBE\u5230\u4E0A\u9650\uFF0C\u65E0\u6CD5\u521B\u5EFA\u65B0\u7A7A\u95F4"],
  [631, "\u6307\u5B9A\u7A7A\u95F4\u4E0D\u5B58\u5728"],
  [640, "\u8C03\u7528\u5217\u4E3E\u8D44\u6E90(list)\u63A5\u53E3\u65F6\uFF0C\u6307\u5B9A\u975E\u6CD5\u7684marker\u53C2\u6570"],
  [701, "\u5728\u65AD\u70B9\u7EED\u4E0A\u4F20\u8FC7\u7A0B\u4E2D\uFF0C\u540E\u7EED\u4E0A\u4F20\u63A5\u6536\u5730\u5740\u4E0D\u6B63\u786E\u6216ctx\u4FE1\u606F\u5DF2\u8FC7\u671F"]
]);
Object.freeze(ossErrorCode);
function getOssErrorCode(code) {
  return ossErrorCode.get(code) || "\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01";
}
function getResToken(fileType, token) {
  return useHttp.get(`/res/user/${fileType}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
function deleteOssFile(key, token) {
  return useHttp.deleted(`/res/user/files?key=${key}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
var OssFileType = /* @__PURE__ */ ((OssFileType2) => {
  OssFileType2["IMAGE"] = "image";
  OssFileType2["VIDEO"] = "video";
  OssFileType2["FILE"] = "file";
  OssFileType2["FONT"] = "font";
  return OssFileType2;
})(OssFileType || {});

export { OssFileType as O, getOssErrorCode as a, uploadOssFile as b, deleteOssFile as d, getResToken as g, uploadOssFileSe as u };
//# sourceMappingURL=index-Md2P4aBV.mjs.map
