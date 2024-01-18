import { ref, useSSRContext, defineComponent, computed, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, withKeys } from 'vue';
import { q as defineStore, r as persistedState, p as useHttp, u as useUserStore, S as StatusCode, g as ElButton } from '../server.mjs';
import { u as useWs } from './useWs-gR1LkN1Z.mjs';
import { E as ElDialog } from './dialog-5eWjtfeR.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-d_pUYt5T.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { E as ElNotification } from './index-KIyZNhTO.mjs';

function getChatFriendPage(pageSize = 10, cursor, token) {
  return useHttp.get("/chat/user/friend/page", {
    pageSize,
    cursor
  }, {
    headers: {
      Authorization: token
    }
  });
}
function getChatFriendApplyPage(page = 10, size, token) {
  return useHttp.get("/chat/user/friend/apply/page", {
    page,
    size
  }, {
    headers: {
      Authorization: token
    }
  });
}
function getUserSeListByPage(page, size, dto, token) {
  return useHttp.post(`/chat/user/friend/user/${page}/${size}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
var ChatApplyStatusType = /* @__PURE__ */ ((ChatApplyStatusType2) => {
  ChatApplyStatusType2[ChatApplyStatusType2["Load"] = 0] = "Load";
  ChatApplyStatusType2[ChatApplyStatusType2["Argee"] = 1] = "Argee";
  return ChatApplyStatusType2;
})(ChatApplyStatusType || {});
function addFriendApply(dto, token) {
  return useHttp.post("/chat/user/friend/apply", {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function isChatFriend(dto, token) {
  return useHttp.post("/chat/user/friend/check", {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function deleteFriendById(targetUid, token) {
  return useHttp.deleted(`/chat/user/friend/${targetUid}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
var FriendOptType = /* @__PURE__ */ ((FriendOptType2) => {
  FriendOptType2[FriendOptType2["Empty"] = -1] = "Empty";
  FriendOptType2[FriendOptType2["User"] = 0] = "User";
  FriendOptType2[FriendOptType2["NewFriend"] = 1] = "NewFriend";
  FriendOptType2[FriendOptType2["GroupFriend"] = 2] = "GroupFriend";
  return FriendOptType2;
})(FriendOptType || {});
function argeeFriendApply(dto, token) {
  return useHttp.put("/chat/user/friend/apply", {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function getChatMessagePage(roomId, pageSize = 10, cursor = null, token) {
  return useHttp.get("/chat/message/page", {
    roomId,
    pageSize,
    cursor
  }, {
    headers: {
      Authorization: token
    }
  });
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
  return MessageType2;
})(MessageType || {});
function addChatMessage(dto, token) {
  return useHttp.post("/chat/message", {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
function setMsgReadByRoomId(roomId, token) {
  return useHttp.put(`/chat/message/msg/read/${roomId}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
const useChatStore = defineStore("chat", () => {
  const theContact = ref({
    activeTime: "",
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
  });
  function setContact(vo, list = [], unReadList = []) {
    if (vo) {
      vo.unreadCount = 0;
      theContact.value = vo;
    }
    if (list)
      theContact.value.msgList = list;
    if (unReadList)
      theContact.value.unreadMsgList = unReadList;
  }
  const onOfflineList = ref([]);
  function setReadList(roomId, lastMsg = "") {
    const user = useUserStore();
    setMsgReadByRoomId(roomId, user.getToken).then((res) => {
      if (res.code !== StatusCode.SUCCESS)
        return false;
      theContact.value.unreadCount = 0;
      if (lastMsg)
        theContact.value.text = lastMsg;
      const ws = useWs();
      ws.wsMsgList.newMsg = ws.wsMsgList.newMsg.filter((k) => k.message.roomId !== roomId);
    }).catch(() => {
    });
  }
  const onReloadContact = (size = 20, dto, isAll = true, roomId) => {
  };
  const scrollBottom = () => {
  };
  const scrollReplyMsg = (msgId, gapCount = 0) => {
  };
  const atUserList = ref([]);
  function setAtUid(item) {
    const find = atUserList.value.find((p) => p.userId === item.userId);
    if (!find)
      atUserList.value.push(item);
  }
  function removeAtUid(item) {
    const findIndex = atUserList.value.findIndex((p) => p.userId === item.userId);
    if (findIndex !== void 0)
      atUserList.value.splice(findIndex, 1);
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
  return {
    // state
    theContact,
    replyMsg,
    atUserList,
    theFriendOpt,
    delUserId,
    isAddNewFriend,
    onOfflineList,
    // 方法
    setContact,
    setReadList,
    setIsAddNewFriend,
    setAtUid,
    removeAtUid,
    setReplyMsg,
    setDelUserId,
    setTheFriendOpt,
    onReloadContact,
    // dom
    scrollReplyMsg,
    scrollBottom
  };
}, {
  // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
  persist: {
    storage: persistedState.localStorage
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ApplyDialog",
  __ssrInlineRender: true,
  props: {
    show: {
      type: [Boolean, null]
    },
    userId: {}
  },
  emits: ["update:show", "submit"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const isShowApply = computed({
      get: () => props.show !== void 0 && props.show === true,
      set: (value) => emit("update:show", value)
    });
    const applyFormRef = ref();
    const applyForm = ref({
      msg: "",
      targetUid: ""
    });
    const user = useUserStore();
    async function addFrendApplyById() {
      var _a;
      (_a = applyFormRef == null ? void 0 : applyFormRef.value) == null ? void 0 : _a.validate(async (valid) => {
        if (!valid || !props.userId)
          return;
        const res = await addFriendApply({
          ...applyForm.value,
          targetUid: props.userId
        }, user.getToken);
        isShowApply.value = false;
        if (res.code !== StatusCode.SUCCESS)
          return;
        applyForm.value = {
          msg: "",
          targetUid: ""
        };
        emit("submit", props.userId);
        ElNotification.success("\u597D\u53CB\u7533\u8BF7\u5DF2\u53D1\u9001\uFF01");
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(isShowApply),
        "onUpdate:modelValue": ($event) => isRef(isShowApply) ? isShowApply.value = $event : null,
        title: "\u597D\u53CB\u7533\u8BF7",
        width: "fit-content",
        center: "",
        "append-to-body": ""
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dialog-footer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => isShowApply.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [createTextVNode("\u53D6\u6D88")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: addFrendApplyById
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D1\u8D77\u7533\u8BF7 `);
                } else {
                  return [createTextVNode(" \u53D1\u8D77\u7533\u8BF7 ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [createVNode("span", {
              class: "dialog-footer"
            }, [createVNode(_component_el_button, {
              onClick: ($event) => isShowApply.value = false
            }, {
              default: withCtx(() => [createTextVNode("\u53D6\u6D88")]),
              _: 1
            }, 8, ["onClick"]), createVNode(_component_el_button, {
              type: "primary",
              onClick: addFrendApplyById
            }, {
              default: withCtx(() => [createTextVNode(" \u53D1\u8D77\u7533\u8BF7 ")]),
              _: 1
            })])];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "applyFormRef",
              ref: applyFormRef,
              model: unref(applyForm)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "",
                    prop: "msg",
                    rules: [{
                      min: 1,
                      max: 50,
                      trigger: ["blur", "change"],
                      message: "\u7533\u8BF7\u7406\u75311-50\u5B57\u7B26\uFF01"
                    }, {
                      required: true,
                      trigger: ["blur"],
                      message: "\u7533\u8BF7\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                    }],
                    class: "w-20rem"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(applyForm).msg,
                          "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                          type: "textarea",
                          rows: 4,
                          placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                          onKeyup: addFrendApplyById
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [createVNode(_component_el_input, {
                          modelValue: unref(applyForm).msg,
                          "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                          type: "textarea",
                          rows: 4,
                          placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                          onKeyup: withKeys(addFrendApplyById, ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_el_form_item, {
                    label: "",
                    prop: "msg",
                    rules: [{
                      min: 1,
                      max: 50,
                      trigger: ["blur", "change"],
                      message: "\u7533\u8BF7\u7406\u75311-50\u5B57\u7B26\uFF01"
                    }, {
                      required: true,
                      trigger: ["blur"],
                      message: "\u7533\u8BF7\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                    }],
                    class: "w-20rem"
                  }, {
                    default: withCtx(() => [createVNode(_component_el_input, {
                      modelValue: unref(applyForm).msg,
                      "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                      type: "textarea",
                      rows: 4,
                      placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                      onKeyup: withKeys(addFrendApplyById, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                    _: 1
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_form, {
              ref_key: "applyFormRef",
              ref: applyFormRef,
              model: unref(applyForm)
            }, {
              default: withCtx(() => [createVNode(_component_el_form_item, {
                label: "",
                prop: "msg",
                rules: [{
                  min: 1,
                  max: 50,
                  trigger: ["blur", "change"],
                  message: "\u7533\u8BF7\u7406\u75311-50\u5B57\u7B26\uFF01"
                }, {
                  required: true,
                  trigger: ["blur"],
                  message: "\u7533\u8BF7\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                }],
                class: "w-20rem"
              }, {
                default: withCtx(() => [createVNode(_component_el_input, {
                  modelValue: unref(applyForm).msg,
                  "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                  type: "textarea",
                  rows: 4,
                  placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                  onKeyup: withKeys(addFrendApplyById, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["model"])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/ApplyDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function getChatContactPage(pageSize = 10, cursor = null, token) {
  return useHttp.get("/chat/contact/page", {
    pageSize,
    cursor
  }, {
    headers: {
      Authorization: token
    }
  });
}
var RoomType = /* @__PURE__ */ ((RoomType2) => {
  RoomType2[RoomType2["GROUP"] = 1] = "GROUP";
  RoomType2[RoomType2["SELFT"] = 2] = "SELFT";
  RoomType2[RoomType2["AICHAT"] = 3] = "AICHAT";
  return RoomType2;
})(RoomType || {});
function getChatContactInfo(id, roomType = 1, token) {
  if (roomType === 1) {
    return useHttp.get(`/chat/contact/${id}`, {}, {
      headers: {
        Authorization: token
      }
    });
  } else if (roomType === 2) {
    return useHttp.get(`/chat/contact/self/${id}`, {}, {
      headers: {
        Authorization: token
      }
    });
  }
}

export { ChatApplyStatusType as C, FriendOptType as F, MessageType as M, RoomType as R, _sfc_main as _, getChatFriendPage as a, getChatFriendApplyPage as b, argeeFriendApply as c, deleteFriendById as d, getChatContactInfo as e, getChatContactPage as f, getUserSeListByPage as g, getChatMessagePage as h, isChatFriend as i, addChatMessage as j, useChatStore as u };
//# sourceMappingURL=contact-Lyk8Xsoc.mjs.map
