import { ref } from 'vue';
import { q as defineStore, u as useUserStore, fT as BaseWSUrl } from '../server.mjs';

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
  return WsMsgBodyType2;
})(WsMsgBodyType || {});
const useWs = defineStore("chat_websocket", () => {
  const webSocketHandler = ref(null);
  const fullWsUrl = ref("");
  const status = ref(WsStatusEnum.CLOSE);
  const wsMsgList = ref({
    newMsg: [],
    // 常规消息
    onlineNotice: [],
    recallMsg: [],
    applyMsg: [],
    memberMsg: [],
    tokenMsg: [],
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
    wsMsgList,
    // 方法
    onerror,
    initDefault,
    link,
    open,
    send,
    sendHeart,
    onMessage
  };
}, {
  // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
  persist: false
});

export { WsStatusEnum as W, useWs as u };
//# sourceMappingURL=useWs-gR1LkN1Z.mjs.map
