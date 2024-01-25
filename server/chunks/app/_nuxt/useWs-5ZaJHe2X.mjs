import { v as defineStore, u as useUserStore, fZ as BaseWSUrl, g as ElMessageBox } from '../server.mjs';
import { ref } from 'vue';
import { E as ElNotification } from './index-481vqEaW.mjs';

var WsMsgType = /* @__PURE__ */ ((WsMsgType2) => {
  WsMsgType2[WsMsgType2["CHECK_TOKEN"] = 1] = "CHECK_TOKEN";
  WsMsgType2[WsMsgType2["HEARTBEAT"] = 2] = "HEARTBEAT";
  return WsMsgType2;
})(WsMsgType || {});
var WsStatusEnum = /* @__PURE__ */ ((WsStatusEnum2) => {
  WsStatusEnum2[WsStatusEnum2["OPEN"] = 1] = "OPEN";
  WsStatusEnum2[WsStatusEnum2["SAFE_CLOSE"] = 2] = "SAFE_CLOSE";
  WsStatusEnum2[WsStatusEnum2["CLOSE"] = 3] = "CLOSE";
  return WsStatusEnum2;
})(WsStatusEnum || {});
var WsMsgBodyType = /* @__PURE__ */ ((WsMsgBodyType2) => {
  WsMsgBodyType2[WsMsgBodyType2["MESSAGE"] = 1] = "MESSAGE";
  WsMsgBodyType2[WsMsgBodyType2["ONLINE_OFFLINE_NOTIFY"] = 2] = "ONLINE_OFFLINE_NOTIFY";
  WsMsgBodyType2[WsMsgBodyType2["RECALL"] = 3] = "RECALL";
  WsMsgBodyType2[WsMsgBodyType2["APPLY"] = 4] = "APPLY";
  WsMsgBodyType2[WsMsgBodyType2["MEMBER_CHANGE"] = 5] = "MEMBER_CHANGE";
  WsMsgBodyType2[WsMsgBodyType2["TOKEN_EXPIRED_ERR"] = 6] = "TOKEN_EXPIRED_ERR";
  WsMsgBodyType2[WsMsgBodyType2["DELETE"] = 8] = "DELETE";
  return WsMsgBodyType2;
})(WsMsgBodyType || {});
var WSMemberStatusEnum = /* @__PURE__ */ ((WSMemberStatusEnum2) => {
  WSMemberStatusEnum2[WSMemberStatusEnum2["JOIN"] = 1] = "JOIN";
  WSMemberStatusEnum2[WSMemberStatusEnum2["LEAVE"] = 2] = "LEAVE";
  WSMemberStatusEnum2[WSMemberStatusEnum2["DEL"] = 3] = "DEL";
  return WSMemberStatusEnum2;
})(WSMemberStatusEnum || {});
const useWs = defineStore(
  "chat_websocket",
  () => {
    const webSocketHandler = ref(null);
    const fullWsUrl = ref("");
    const isWindBlur = ref(false);
    const status = ref(WsStatusEnum.CLOSE);
    const wsMsgList = ref({
      /**
       * 常规消息
       */
      newMsg: [],
      /**
       * 上下线消息
       */
      onlineNotice: [],
      /**
       * 撤回消息
       */
      recallMsg: [],
      /**
       * 删除消息
       */
      deleteMsg: [],
      /**
       * 申请好友消息
       */
      applyMsg: [],
      /**
       * 群成员变动消息
       */
      memberMsg: [],
      /**
       * token失效
       */
      tokenMsg: [],
      /**
       * 其他
       */
      other: []
    });
    function initDefault(call) {
      var _a;
      const user = useUserStore();
      if (!user.getToken) {
        (_a = webSocketHandler.value) == null ? void 0 : _a.close();
        status.value = WsStatusEnum.SAFE_CLOSE;
        return false;
      }
      link(BaseWSUrl, user.getToken);
      open(call);
      onerror();
      oncolse();
    }
    function link(url = BaseWSUrl, token = "") {
      if (webSocketHandler.value && status.value === WsStatusEnum.OPEN)
        return webSocketHandler.value;
      fullWsUrl.value = `${url}?Authorization=${token}`;
      webSocketHandler.value = new WebSocket(fullWsUrl.value);
      status.value = WsStatusEnum.OPEN;
      return webSocketHandler.value;
    }
    function open(call) {
      if (!webSocketHandler.value)
        return;
      webSocketHandler.value.onopen = call;
    }
    function onerror() {
      if (!webSocketHandler.value)
        return;
      webSocketHandler.value.addEventListener("error", (e) => {
        status.value = WsStatusEnum.CLOSE;
        webSocketHandler.value = null;
      });
    }
    function oncolse() {
      if (!webSocketHandler.value)
        return;
      webSocketHandler.value.addEventListener("close", (e) => {
        status.value = WsStatusEnum.SAFE_CLOSE;
        webSocketHandler.value = null;
      });
    }
    const wsMsgMap = {
      [WsMsgBodyType.MESSAGE]: "newMsg",
      [WsMsgBodyType.ONLINE_OFFLINE_NOTIFY]: "onlineNotice",
      [WsMsgBodyType.RECALL]: "recallMsg",
      [WsMsgBodyType.DELETE]: "deleteMsg",
      [WsMsgBodyType.APPLY]: "applyMsg",
      [WsMsgBodyType.MEMBER_CHANGE]: "memberMsg",
      [WsMsgBodyType.TOKEN_EXPIRED_ERR]: "tokenMsg"
    };
    function onMessage(call) {
      if (!webSocketHandler.value)
        return;
      webSocketHandler.value.addEventListener("message", (event) => {
        if (event && !event.data)
          return false;
        try {
          const data = JSON.parse(event.data);
          if (data) {
            const cts = data.data;
            const body = cts.data;
            if (wsMsgMap[cts.type] !== void 0)
              wsMsgList.value[wsMsgMap[cts.type]].push(body);
            call(cts);
          }
        } catch (err) {
          return null;
        }
      });
    }
    function close() {
      if (!webSocketHandler.value)
        return;
      ElMessageBox.confirm("\u662F\u5426\u65AD\u5F00\u4F1A\u8BDD\uFF1F", "\u63D0\u793A", {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88",
        confirmButtonClass: "el-button--danger shadow border-default ",
        lockScroll: false,
        center: true,
        callback: async (res) => {
          if (res === "confirm") {
            if (!webSocketHandler.value)
              return;
            webSocketHandler.value.close();
            status.value = WsStatusEnum.SAFE_CLOSE;
            ElNotification.success("\u65AD\u5F00\u6210\u529F\uFF01");
          }
        }
      });
    }
    function sendHeart() {
      send({
        type: WsMsgType.HEARTBEAT,
        data: null
      });
    }
    function send(dto) {
      var _a, _b;
      if ((_a = webSocketHandler.value) == null ? void 0 : _a.OPEN)
        (_b = webSocketHandler.value) == null ? void 0 : _b.send(JSON.stringify(dto));
    }
    return {
      // state
      webSocketHandler,
      status,
      isWindBlur,
      wsMsgList,
      // 方法
      onerror,
      initDefault,
      link,
      open,
      send,
      close,
      sendHeart,
      onMessage
    };
  },
  {
    // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    persist: false
  }
);

export { WsStatusEnum as W, WSMemberStatusEnum as a, WsMsgBodyType as b, useWs as u };
//# sourceMappingURL=useWs-5ZaJHe2X.mjs.map
