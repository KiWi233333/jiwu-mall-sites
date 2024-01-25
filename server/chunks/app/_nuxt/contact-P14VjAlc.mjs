import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, toDisplayString, vShow, ref } from 'vue';
import { q as buildProps, r as useNamespace, t as isNumber, w as withInstall, v as defineStore, x as persistedState, j as useHttp, y as _export_sfc$1, u as useUserStore, S as StatusCode } from '../server.mjs';
import { u as useWs } from './useWs-5ZaJHe2X.mjs';

const badgeProps = buildProps({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
});
const _hoisted_1 = ["textContent"];
const __default__ = defineComponent({
  name: "ElBadge"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: badgeProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("badge");
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (isNumber(props.value) && isNumber(props.max)) {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    expose({
      content
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns).b())
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(Transition, {
          name: `${unref(ns).namespace.value}-zoom-in-center`,
          persisted: ""
        }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("sup", {
              class: normalizeClass([
                unref(ns).e("content"),
                unref(ns).em("content", _ctx.type),
                unref(ns).is("fixed", !!_ctx.$slots.default),
                unref(ns).is("dot", _ctx.isDot)
              ]),
              textContent: toDisplayString(unref(content))
            }, null, 10, _hoisted_1), [
              [vShow, !_ctx.hidden && (unref(content) || _ctx.isDot)]
            ])
          ]),
          _: 1
        }, 8, ["name"])
      ], 2);
    };
  }
});
var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const ElBadge = withInstall(Badge);
function getChatFriendPage(pageSize = 10, cursor, token) {
  return useHttp.get(
    "/chat/user/friend/page",
    {
      pageSize,
      cursor
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function getChatFriendApplyPage(page = 10, size, token) {
  return useHttp.get(
    "/chat/user/friend/apply/page",
    {
      page,
      size
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function getUserSeListByPage(page, size, dto, token) {
  return useHttp.post(
    `/chat/user/friend/user/${page}/${size}`,
    { ...dto },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
var ChatApplyStatusType = /* @__PURE__ */ ((ChatApplyStatusType2) => {
  ChatApplyStatusType2[ChatApplyStatusType2["Load"] = 0] = "Load";
  ChatApplyStatusType2[ChatApplyStatusType2["Argee"] = 1] = "Argee";
  return ChatApplyStatusType2;
})(ChatApplyStatusType || {});
function addFriendApply(dto, token) {
  return useHttp.post(
    "/chat/user/friend/apply",
    {
      ...dto
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function isChatFriend(dto, token) {
  return useHttp.post(
    "/chat/user/friend/check",
    {
      ...dto
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function deleteFriendById(targetUid, token) {
  return useHttp.deleted(
    `/chat/user/friend/${targetUid}`,
    {},
    {
      headers: {
        Authorization: token
      }
    }
  );
}
var FriendOptType = /* @__PURE__ */ ((FriendOptType2) => {
  FriendOptType2[FriendOptType2["Empty"] = -1] = "Empty";
  FriendOptType2[FriendOptType2["User"] = 0] = "User";
  FriendOptType2[FriendOptType2["NewFriend"] = 1] = "NewFriend";
  FriendOptType2[FriendOptType2["GroupFriend"] = 2] = "GroupFriend";
  return FriendOptType2;
})(FriendOptType || {});
function argeeFriendApply(dto, token) {
  return useHttp.put(
    "/chat/user/friend/apply",
    {
      ...dto
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function getChatMessagePage(roomId, pageSize = 10, cursor = null, token) {
  return useHttp.get(
    "/chat/message/page",
    {
      roomId,
      pageSize,
      cursor
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
var MessageType = /* @__PURE__ */ ((MessageType2) => {
  MessageType2[MessageType2["TEXT"] = 1] = "TEXT";
  MessageType2[MessageType2["RECALL"] = 2] = "RECALL";
  MessageType2[MessageType2["IMG"] = 3] = "IMG";
  MessageType2[MessageType2["FILE"] = 4] = "FILE";
  MessageType2[MessageType2["SOUND"] = 5] = "SOUND";
  MessageType2[MessageType2["VIDEO"] = 6] = "VIDEO";
  MessageType2[MessageType2["EMOJI"] = 7] = "EMOJI";
  MessageType2[MessageType2["SYSTEM"] = 8] = "SYSTEM";
  MessageType2[MessageType2["AI_CHAT"] = 9] = "AI_CHAT";
  MessageType2[MessageType2["DELETE"] = 10] = "DELETE";
  return MessageType2;
})(MessageType || {});
function addChatMessage(dto, token) {
  return useHttp.post(
    "/chat/message",
    { ...dto },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function refundChatMessage(roomId, id, token) {
  return useHttp.put(
    `/chat/message/recall/${roomId}/${id}`,
    {},
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function deleteChatMessage(roomId, id, token) {
  return useHttp.deleted(
    `/chat/message/recall/${roomId}/${id}`,
    {},
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function setMsgReadByRoomId(roomId, token) {
  return useHttp.put(
    `/chat/message/msg/read/${roomId}`,
    {},
    {
      headers: {
        Authorization: token
      }
    }
  );
}
const useChatStore = defineStore(
  "chat",
  () => {
    const isOpenContact = ref(true);
    const contactList = ref([]);
    const theContact = ref({
      activeTime: 0,
      avatar: "",
      roomId: 1,
      hotFlag: 1,
      name: "",
      text: "",
      type: 1,
      unreadCount: 0,
      // 消息列表
      msgList: [],
      unreadMsgList: [],
      roomGroup: void 0,
      member: void 0
    });
    function setContact(vo, list = [], unReadList = []) {
      if (vo)
        vo.unreadCount = 0;
      theContact.value = vo || {
        activeTime: 0,
        avatar: "",
        roomId: 1,
        hotFlag: 1,
        name: "",
        text: "",
        type: 1,
        unreadCount: 0,
        // 消息列表
        msgList: [],
        unreadMsgList: []
      };
      if (list)
        theContact.value.msgList = list;
      if (unReadList)
        theContact.value.unreadMsgList = unReadList;
    }
    const onOfflineList = ref([]);
    function setGroupMember(list) {
      onOfflineList.value = list;
    }
    function setReadList(roomId, lastMsg = "") {
      const user = useUserStore();
      setMsgReadByRoomId(roomId, user.getToken).then((res) => {
        if (res.code !== StatusCode.SUCCESS)
          return false;
        const ctx = contactList.value.find((p) => p.roomId === roomId);
        if (ctx) {
          ctx.unreadCount = 0;
          if (lastMsg)
            ctx.text = lastMsg;
        }
        const ws = useWs();
        ws.wsMsgList.newMsg = ws.wsMsgList.newMsg.filter((k) => k.message.roomId !== roomId);
      }).catch(() => {
      });
    }
    const onReloadContact = (size = 10, dto, isAll = true, roomId) => {
    };
    const scrollBottom = () => {
    };
    const scrollTopSize = ref(0);
    const scrollReplyMsg = (msgId, gapCount = 0) => {
    };
    const saveScrollTop = () => {
    };
    const scrollTop = (size) => {
    };
    const atUserList = ref([]);
    function setAtUid(userId) {
      const find = atUserList.value.includes(userId);
      if (!find)
        atUserList.value.push(userId);
    }
    function removeAtUid(userId) {
      return atUserList.value = atUserList.value.filter((p) => p === userId);
    }
    const replyMsg = ref();
    function setReplyMsg(item) {
      replyMsg.value = item;
    }
    const theFriendOpt = ref({
      type: -1,
      data: {}
    });
    function setTheFriendOpt(type, data) {
      theFriendOpt.value.type = type;
      theFriendOpt.value.data = data;
    }
    const delUserId = ref("");
    function setDelUserId(userId) {
      delUserId.value = userId;
    }
    const isAddNewFriend = ref(false);
    function setIsAddNewFriend(val) {
      isAddNewFriend.value = val;
    }
    const showTheFriendPanel = computed({
      get: () => theFriendOpt.value.type !== -1,
      set: (val) => {
        if (!val)
          setTheFriendOpt(
            -1
            /* Empty */
          );
      }
    });
    return {
      // state
      contactList,
      theContact,
      replyMsg,
      atUserList,
      theFriendOpt,
      showTheFriendPanel,
      delUserId,
      isAddNewFriend,
      isOpenContact,
      onOfflineList,
      // 方法
      setContact,
      setReadList,
      setGroupMember,
      setIsAddNewFriend,
      setAtUid,
      removeAtUid,
      setReplyMsg,
      setDelUserId,
      setTheFriendOpt,
      onReloadContact,
      // dom
      scrollTopSize,
      saveScrollTop,
      scrollReplyMsg,
      scrollBottom,
      scrollTop
    };
  },
  {
    // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
    persist: {
      storage: persistedState.localStorage
    }
  }
);
function getChatContactPage(pageSize = 10, cursor = null, token) {
  return useHttp.get(
    "/chat/contact/page",
    {
      pageSize,
      cursor
    },
    {
      headers: {
        Authorization: token
      }
    }
  );
}
var RoomType = /* @__PURE__ */ ((RoomType2) => {
  RoomType2[RoomType2["GROUP"] = 1] = "GROUP";
  RoomType2[RoomType2["SELFT"] = 2] = "SELFT";
  RoomType2[RoomType2["AICHAT"] = 3] = "AICHAT";
  return RoomType2;
})(RoomType || {});
function getChatContactInfo(id, roomType = 1, token) {
  if (roomType === 1) {
    return useHttp.get(
      `/chat/contact/${id}`,
      {},
      {
        headers: {
          Authorization: token
        }
      }
    );
  } else if (roomType === 2) {
    return useHttp.get(
      `/chat/contact/self/${id}`,
      {},
      {
        headers: {
          Authorization: token
        }
      }
    );
  }
}

export { ChatApplyStatusType as C, ElBadge as E, FriendOptType as F, MessageType as M, RoomType as R, getChatFriendPage as a, getChatFriendApplyPage as b, argeeFriendApply as c, deleteFriendById as d, getChatContactInfo as e, getChatContactPage as f, getUserSeListByPage as g, deleteChatMessage as h, isChatFriend as i, getChatMessagePage as j, addChatMessage as k, addFriendApply as l, refundChatMessage as r, useChatStore as u };
//# sourceMappingURL=contact-P14VjAlc.mjs.map
