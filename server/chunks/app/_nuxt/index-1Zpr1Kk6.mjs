import { j as useHttp, u as useUserStore, k as useSettingStore, S as StatusCode, l as useColorMode, s as search_default, B as BaseUrlImg, E as ElMessage, c as useSeoMeta, d as appKeywords, m as useFetch, o as BaseUrl, e as __nuxt_component_2$1, b as _export_sfc, g as ElMessageBox, n as navigateTo, p as useAsyncCopyText, _ as __nuxt_component_0$2 } from '../server.mjs';
import { E as ElInput } from './index-nLRih88y.mjs';
import { E as ElRadioGroup, a as ElRadio } from './index-vwoBdBES.mjs';
import { _ as _sfc_main$g } from './AutoIncre-nAzYjQ1D.mjs';
import { u as useChatStore, R as RoomType, e as getChatContactInfo, M as MessageType, f as getChatContactPage, E as ElBadge, r as refundChatMessage, h as deleteChatMessage, j as getChatMessagePage, k as addChatMessage, F as FriendOptType, i as isChatFriend } from './contact-P14VjAlc.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { defineAsyncComponent, useSSRContext, defineComponent, ref, computed, resolveDirective, mergeProps, unref, isRef, withCtx, createVNode, withModifiers, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, onUnmounted, watch, toRefs, resolveComponent, createTextVNode, resolveDynamicComponent, nextTick, withKeys, vShow, createCommentVNode } from 'vue';
import { u as useWs, W as WsStatusEnum, a as WSMemberStatusEnum } from './useWs-5ZaJHe2X.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode } from 'vue/server-renderer';
import ContextMenu from '@imengyu/vue3-context-menu';
import { a as watchThrottled, b as useIntersectionObserver, w as watchDebounced, c as useDateFormat } from './index-daJZwzbi.mjs';
import { E as ElNotification } from './index-481vqEaW.mjs';
import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { E as ElScrollbar } from './scrollbar-uIUdvs5K.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-Q_ZiRZvp.mjs';
import { E as ElSelect, a as ElOption } from './index-1UBKVkQQ.mjs';
import { _ as __nuxt_component_9 } from './OssFileUpload-RLGBsbrF.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-qWvYy4Gj.mjs';
import { O as OssFileType, d as deleteOssFile } from './index-Md2P4aBV.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import '@vue/shared';
import 'pinia-plugin-persistedstate';
import 'lodash-unified';
import 'currency.js';
import 'gsap';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './event-JIBAhsR9.mjs';
import './PreLoading-Jnbo7kLW.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';
import './index-gZoFaHmS.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-r09CvUzW.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-RvHFA2kt.mjs';
import './index-0Uz170Jh.mjs';
import './progress-Y_Nip7T-.mjs';
import 'qiniu-js';

function getRoomGroupUserPage(roomId = null, pageSize = 10, cursor = null, token) {
  return useHttp.get(
    "/chat/room/group/member/page",
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
var ChatOfflineType = /* @__PURE__ */ ((ChatOfflineType2) => {
  ChatOfflineType2[ChatOfflineType2["ONLINE"] = 1] = "ONLINE";
  ChatOfflineType2[ChatOfflineType2["OFFLINE"] = 0] = "OFFLINE";
  return ChatOfflineType2;
})(ChatOfflineType || {});
var ChatRoomRoleEnum = /* @__PURE__ */ ((ChatRoomRoleEnum2) => {
  ChatRoomRoleEnum2[ChatRoomRoleEnum2["OWNER"] = 1] = "OWNER";
  ChatRoomRoleEnum2[ChatRoomRoleEnum2["ADMIN"] = 2] = "ADMIN";
  ChatRoomRoleEnum2[ChatRoomRoleEnum2["MEMBER"] = 3] = "MEMBER";
  return ChatRoomRoleEnum2;
})(ChatRoomRoleEnum || {});
const ChatRoomRoleEnumMap = {
  [
    1
    /* OWNER */
  ]: "\u7FA4\u4E3B",
  [
    2
    /* ADMIN */
  ]: "\u7BA1\u7406\u5458",
  [
    3
    /* MEMBER */
  ]: "\u6210\u5458"
};
function getRoomGroupAllUser(roomId, token) {
  return useFetch(
    `${BaseUrl}/chat/room/group/member/list/${roomId}`,
    {
      headers: {
        Authorization: token
      }
    },
    "$nzaFCPeOAS"
  );
}
function addNewGroupRoom(dto, token) {
  return useHttp.post(
    "/chat/room/group",
    dto,
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function addGroupMember(dto, token) {
  return useHttp.post(
    "/chat/room/group/member",
    dto,
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function exitRoomGroup(roomId, token) {
  return useHttp.deleted(
    `/chat/room/group/member/exit/${roomId}`,
    {},
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function exitRoomGroupByUid(roomId, uid, token) {
  return useHttp.deleted(
    `/chat/room/group/member/${roomId}/${uid}`,
    {},
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function addChatRoomAdmin(dto, token) {
  return useHttp.put(
    "/chat/room/group/admin",
    dto,
    {
      headers: {
        Authorization: token
      }
    }
  );
}
function delChatRoomAdmin(dto, token) {
  return useHttp.deleted(
    "/chat/room/group/admin",
    {},
    {
      headers: {
        Authorization: token
      },
      params: {
        ...dto
      }
    }
  );
}
const __nuxt_component_7_lazy = defineAsyncComponent(() => import('./NewGroupDialog-l1edpcXP.mjs').then((m) => m.default || m));
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ContactList",
  __ssrInlineRender: true,
  props: {
    dto: {}
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(false);
    const user = useUserStore();
    const chat = useChatStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10
    });
    const searchKeyWords = ref("");
    const getContactList = computed(() => {
      return chat.contactList.sort((a, b) => b.activeTime - a.activeTime).filter((p) => p.name.includes(searchKeyWords.value));
    });
    async function loadData(dto) {
      if (isLoading.value || pageInfo.value.isLast)
        return;
      isLoading.value = true;
      const { data } = await getChatContactPage(pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list) {
        if ((dto == null ? void 0 : dto.type) === RoomType.GROUP) {
          data.list.forEach((p) => {
            if (p.type === RoomType.GROUP)
              chat.contactList.push(p);
          });
        } else if ((dto == null ? void 0 : dto.type) === RoomType.SELFT) {
          data.list.forEach((p) => {
            if (p.type === RoomType.SELFT)
              chat.contactList.push(p);
          });
        } else {
          chat.contactList.push(...data.list);
        }
      }
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    const setting = useSettingStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    const contact = useChatStore();
    const theContactId = computed({
      get() {
        return contact.theContact.roomId;
      },
      set(val) {
        const item = chat.contactList.find((p) => p.roomId === val);
        if (!item)
          return;
        if (item.type === RoomType.SELFT) {
          contact.setContact(item);
        } else {
          (async () => {
            var _a, _b;
            const res = await getChatContactInfo(val, item == null ? void 0 : item.type, user.getToken);
            if (res && res.code === StatusCode.SUCCESS) {
              contact.setContact(res == null ? void 0 : res.data);
              if (item) {
                item.roomGroup = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.roomGroup;
                item.member = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.member;
              }
            }
          })();
        }
        setting.isOpenContact = false;
      }
    });
    function reload(size = 15, dto, isAll = true, roomId) {
      if (isAll) {
        chat.contactList = [];
        pageInfo.value.cursor = null;
        pageInfo.value.isLast = false;
        pageInfo.value.size = size;
        loadData(dto || props.dto);
      } else {
        if (roomId)
          refreshItem(roomId);
      }
    }
    async function refreshItem(roomId) {
      if (!roomId)
        return;
      const itemIndex = chat.contactList.findIndex((p) => p.roomId === roomId);
      if (itemIndex === -1)
        return;
      const res = await getChatContactInfo(roomId, RoomType.GROUP, user.getToken);
      if (res)
        chat.contactList[itemIndex] = res.data;
    }
    contact.onReloadContact = reload;
    const showDialog = ref(false);
    const ChatNewGroupDialogRef = ref();
    const colorMode = useColorMode();
    function onContextMenu(e, item) {
      e.preventDefault();
      const opt = {
        x: e.x,
        y: e.y,
        theme: colorMode.preference === "dark" ? "mac dark" : "wind10",
        items: []
      };
      if (item.type === RoomType.GROUP) {
        opt.items = [
          {
            customClass: "group",
            icon: "i-solar:user-speak-broken group-btn-warning group-hover:i-solar:user-speak-bold-duotone",
            label: "\u9080\u8BF7\u597D\u53CB",
            onClick: () => {
              var _a, _b, _c;
              ((_a = ChatNewGroupDialogRef.value) == null ? void 0 : _a.reload) && ((_b = ChatNewGroupDialogRef.value) == null ? void 0 : _b.reload());
              if ((_c = ChatNewGroupDialogRef.value) == null ? void 0 : _c.form) {
                ChatNewGroupDialogRef.value.form.roomId = item.roomId;
                showDialog.value = true;
              }
            }
          },
          {
            icon: "i-solar:logout-3-broken group-btn-error group-hover:i-solar:logout-3-bold-duotone",
            label: "\u9000\u51FA\u7FA4\u804A",
            customClass: "group",
            onClick: () => {
              ElMessageBox.confirm("\u662F\u5426\u9000\u51FA\u8BE5\u7FA4\u804A\uFF1F", {
                confirmButtonText: "\u9000\u51FA",
                center: true,
                cancelButtonText: "\u53D6\u6D88",
                lockScroll: false,
                callback: async (action) => {
                  if (action === "confirm") {
                    const res = await exitRoomGroup(item.roomId, user.getToken);
                    if (res.code === StatusCode.SUCCESS) {
                      ElNotification.success("\u9000\u51FA\u6210\u529F\uFF01");
                      if (chat.theContact.roomId === item.roomId)
                        chat.setContact();
                      chat.contactList = chat.contactList.filter((e2) => e2.roomId !== item.roomId);
                    }
                  }
                }
              });
            }
          }
        ];
      } else if (item.type === RoomType.SELFT) {
        opt.items = [
          {
            customClass: "group",
            icon: "i-solar:user-outline group-btn-info group-hover:i-solar:user-bold-duotone",
            label: "\u8054\u7CFB\u4EBA",
            onClick: () => {
              chat.setTheFriendOpt(FriendOptType.Empty);
              navigateTo("/chat/friend");
            }
          }
        ];
      }
      ContextMenu.showContextMenu(opt);
    }
    const ws = useWs();
    watchThrottled(() => ws.wsMsgList.memberMsg, async (list) => {
      if (list.length) {
        for (const p of list) {
          if (p.changeType === WSMemberStatusEnum.JOIN) {
            const index2 = chat.contactList.findIndex((ctx) => ctx.roomId === p.roomId);
            const res = await getChatContactInfo(p.roomId, RoomType.GROUP, user.getToken);
            if (res) {
              if (index2 > -1) {
                chat.contactList[index2] = res.data;
              } else {
                res.data.unreadCount = 1;
                if (chat.contactList[index2])
                  chat.contactList.unshift(res.data);
              }
            }
          } else if (p.changeType === WSMemberStatusEnum.LEAVE) {
            for (let i = 0; i < chat.onOfflineList.length; i++) {
              const u = chat.onOfflineList[i];
              if (u.userId === p.uid) {
                chat.onOfflineList.splice(i, 1);
                break;
              }
            }
          } else if (p.changeType === WSMemberStatusEnum.DEL) {
            for (let i = 0; i < chat.contactList.length; i++) {
              const u = chat.contactList[i];
              if (u.roomId === p.roomId) {
                chat.contactList.splice(i, 1);
                break;
              }
            }
          }
        }
        ws.wsMsgList.memberMsg.splice(0);
      }
    }, {
      deep: true,
      immediate: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElInput = ElInput;
      const _component_BtnElButton = __nuxt_component_2$1;
      const _component_el_radio_group = ElRadioGroup;
      const _component_ListAutoIncre = _sfc_main$g;
      const _component_el_radio = ElRadio;
      const _component_el_badge = ElBadge;
      const _component_CardElImage = __nuxt_component_1;
      const _component_LazyChatNewGroupDialog = __nuxt_component_7_lazy;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({ relative: "" }, _attrs))} data-v-32c1d647><div class="mb-4 py-2 v-card" flex-row-c-c data-v-32c1d647>`);
      _push(ssrRenderComponent(_component_ElInput, {
        modelValue: unref(searchKeyWords),
        "onUpdate:modelValue": ($event) => isRef(searchKeyWords) ? searchKeyWords.value = $event : null,
        modelModifiers: { lazy: true },
        class: "mr-2",
        type: "text",
        clearable: "",
        autocomplete: "off",
        "prefix-icon": "ElIconSearch" in _ctx ? _ctx.ElIconSearch : unref(search_default),
        minlength: "2",
        maxlength: "30",
        placeholder: "\u641C\u7D22"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BtnElButton, {
        plain: "",
        style: { "width": "2rem", "transition": "200ms" },
        loading: unref(isLoading),
        onClick: ($event) => showDialog.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i i-carbon:add-large p-2 data-v-32c1d647${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                "i-carbon:add-large": "",
                "p-2": ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_radio_group, {
        modelValue: unref(theContactId),
        "onUpdate:modelValue": ($event) => isRef(theContactId) ? theContactId.value = $event : null,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              "w-full": "",
              flex: "",
              "flex-col": ""
            }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-32c1d647${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ListAutoIncre, {
              immediate: true,
              "auto-stop": false,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: ($event) => loadData(_ctx.dto)
            }, {
              done: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<small class="block w-full text-center text-0.8rem opacity-60" data-v-32c1d647${_scopeId2}> \u6682\u65E0\u66F4\u591A </small>`);
                } else {
                  return [
                    createVNode("small", { class: "block w-full text-center text-0.8rem opacity-60" }, " \u6682\u65E0\u66F4\u591A ")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(getContactList), (room) => {
                    _push3(ssrRenderComponent(_component_el_radio, {
                      key: room.roomId,
                      style: { "overflow": "hidden" },
                      border: "",
                      label: room.roomId
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="group flex gap-2 truncate bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:p-4 text-color" data-v-32c1d647${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_badge, {
                            hidden: !room.unreadCount,
                            max: 99,
                            value: room.unreadCount,
                            class: "h-2.6rem w-2.6rem flex-shrink-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_CardElImage, {
                                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                  fit: "cover",
                                  class: "h-2.6rem w-2.6rem object-cover border-default card-default"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_CardElImage, {
                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                    fit: "cover",
                                    class: "h-2.6rem w-2.6rem object-cover border-default card-default"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-1 flex-col justify-between truncate" data-v-32c1d647${_scopeId3}><p truncate data-v-32c1d647${_scopeId3}>${ssrInterpolate(room.name)}</p><div class="flex" data-v-32c1d647${_scopeId3}><small overflow-hidden truncate op-70 class="${ssrRenderClass({
                            "text-[var(--el-color-info)] font-600": room.unreadCount
                          })}" data-v-32c1d647${_scopeId3}>${ssrInterpolate(room.text)}</small><span ml-a mt-a hidden w-7em flex-shrink-0 truncate text-right text-0.7em op-35 sm:block group-hover:op-70 data-v-32c1d647${_scopeId3}>${ssrInterpolate(getTime(room.activeTime))}</span></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "group flex gap-2 truncate bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:p-4 text-color",
                              onContextmenu: withModifiers(($event) => onContextMenu($event, room), ["stop"])
                            }, [
                              createVNode(_component_el_badge, {
                                hidden: !room.unreadCount,
                                max: 99,
                                value: room.unreadCount,
                                class: "h-2.6rem w-2.6rem flex-shrink-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_CardElImage, {
                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                    fit: "cover",
                                    class: "h-2.6rem w-2.6rem object-cover border-default card-default"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1032, ["hidden", "value"]),
                              createVNode("div", { class: "flex flex-1 flex-col justify-between truncate" }, [
                                createVNode("p", { truncate: "" }, toDisplayString(room.name), 1),
                                createVNode("div", { class: "flex" }, [
                                  createVNode("small", {
                                    "overflow-hidden": "",
                                    truncate: "",
                                    "op-70": "",
                                    class: {
                                      "text-[var(--el-color-info)] font-600": room.unreadCount
                                    }
                                  }, toDisplayString(room.text), 3),
                                  createVNode("span", {
                                    "ml-a": "",
                                    "mt-a": "",
                                    hidden: "",
                                    "w-7em": "",
                                    "flex-shrink-0": "",
                                    truncate: "",
                                    "text-right": "",
                                    "text-0.7em": "",
                                    "op-35": "",
                                    "sm:block": "",
                                    "group-hover:op-70": ""
                                  }, toDisplayString(getTime(room.activeTime)), 1)
                                ])
                              ])
                            ], 40, ["onContextmenu"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(getContactList), (room) => {
                      return openBlock(), createBlock(_component_el_radio, {
                        key: room.roomId,
                        style: { "overflow": "hidden" },
                        border: "",
                        label: room.roomId
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "group flex gap-2 truncate bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:p-4 text-color",
                            onContextmenu: withModifiers(($event) => onContextMenu($event, room), ["stop"])
                          }, [
                            createVNode(_component_el_badge, {
                              hidden: !room.unreadCount,
                              max: 99,
                              value: room.unreadCount,
                              class: "h-2.6rem w-2.6rem flex-shrink-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_CardElImage, {
                                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                  fit: "cover",
                                  class: "h-2.6rem w-2.6rem object-cover border-default card-default"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1032, ["hidden", "value"]),
                            createVNode("div", { class: "flex flex-1 flex-col justify-between truncate" }, [
                              createVNode("p", { truncate: "" }, toDisplayString(room.name), 1),
                              createVNode("div", { class: "flex" }, [
                                createVNode("small", {
                                  "overflow-hidden": "",
                                  truncate: "",
                                  "op-70": "",
                                  class: {
                                    "text-[var(--el-color-info)] font-600": room.unreadCount
                                  }
                                }, toDisplayString(room.text), 3),
                                createVNode("span", {
                                  "ml-a": "",
                                  "mt-a": "",
                                  hidden: "",
                                  "w-7em": "",
                                  "flex-shrink-0": "",
                                  truncate: "",
                                  "text-right": "",
                                  "text-0.7em": "",
                                  "op-35": "",
                                  "sm:block": "",
                                  "group-hover:op-70": ""
                                }, toDisplayString(getTime(room.activeTime)), 1)
                              ])
                            ])
                          ], 40, ["onContextmenu"])
                        ]),
                        _: 2
                      }, 1032, ["label"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", {
                "w-full": "",
                flex: "",
                "flex-col": ""
              }, [
                createVNode(_component_ListAutoIncre, {
                  immediate: true,
                  "auto-stop": false,
                  "no-more": unref(pageInfo).isLast,
                  loading: unref(isLoading),
                  onLoad: ($event) => loadData(_ctx.dto)
                }, {
                  done: withCtx(() => [
                    createVNode("small", { class: "block w-full text-center text-0.8rem opacity-60" }, " \u6682\u65E0\u66F4\u591A ")
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(getContactList), (room) => {
                      return openBlock(), createBlock(_component_el_radio, {
                        key: room.roomId,
                        style: { "overflow": "hidden" },
                        border: "",
                        label: room.roomId
                      }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            class: "group flex gap-2 truncate bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:p-4 text-color",
                            onContextmenu: withModifiers(($event) => onContextMenu($event, room), ["stop"])
                          }, [
                            createVNode(_component_el_badge, {
                              hidden: !room.unreadCount,
                              max: 99,
                              value: room.unreadCount,
                              class: "h-2.6rem w-2.6rem flex-shrink-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_CardElImage, {
                                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                  fit: "cover",
                                  class: "h-2.6rem w-2.6rem object-cover border-default card-default"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1032, ["hidden", "value"]),
                            createVNode("div", { class: "flex flex-1 flex-col justify-between truncate" }, [
                              createVNode("p", { truncate: "" }, toDisplayString(room.name), 1),
                              createVNode("div", { class: "flex" }, [
                                createVNode("small", {
                                  "overflow-hidden": "",
                                  truncate: "",
                                  "op-70": "",
                                  class: {
                                    "text-[var(--el-color-info)] font-600": room.unreadCount
                                  }
                                }, toDisplayString(room.text), 3),
                                createVNode("span", {
                                  "ml-a": "",
                                  "mt-a": "",
                                  hidden: "",
                                  "w-7em": "",
                                  "flex-shrink-0": "",
                                  truncate: "",
                                  "text-right": "",
                                  "text-0.7em": "",
                                  "op-35": "",
                                  "sm:block": "",
                                  "group-hover:op-70": ""
                                }, toDisplayString(getTime(room.activeTime)), 1)
                              ])
                            ])
                          ], 40, ["onContextmenu"])
                        ]),
                        _: 2
                      }, 1032, ["label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["no-more", "loading", "onLoad"])
              ])), [
                [_directive_auto_animate]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_LazyChatNewGroupDialog, {
        ref_key: "ChatNewGroupDialogRef",
        ref: ChatNewGroupDialogRef,
        modelValue: unref(showDialog),
        "onUpdate:modelValue": ($event) => isRef(showDialog) ? showDialog.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ContactList.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-32c1d647"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "ContactTabs",
  __ssrInlineRender: true,
  setup(__props) {
    ref("all");
    ref([
      {
        name: "all",
        title: "\u5168\u90E8"
      },
      {
        name: "group",
        title: "\u7FA4\u804A",
        dto: {
          type: RoomType.GROUP
        }
      },
      {
        name: "self",
        title: "\u4E2A\u4EBA",
        dto: {
          type: RoomType.SELFT
        }
      }
    ]);
    const setting = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatContactList = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group absolute z-4 h-full w-0 flex-shrink-0 overflow-hidden pl-4.5rem transition-300 transition-property-all sm:relative sm:left-0 sm:top-0 sm:w-1/4 sm:pl-0", unref(setting).isOpenContact ? "w-100% sm:w-1/4" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ChatContactList, { class: "p-4" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ContactTabs.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "DisAutoIncre",
  __ssrInlineRender: true,
  props: {
    noMore: { type: Boolean, default: false },
    immediate: { type: Boolean, default: true },
    delay: { default: 400 },
    loading: { type: Boolean, default: false },
    loadingClass: { default: "mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-primary)]" },
    autoStop: { type: Boolean, default: true }
  },
  emits: ["load"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loadMoreRef = ref();
    const isIntersecting = ref(false);
    let timer = null;
    const { stop, isSupported } = useIntersectionObserver(
      loadMoreRef,
      ([obj]) => {
        isIntersecting.value = obj.isIntersecting;
        if (obj.isIntersecting) {
          clearInterval(timer);
          callBack && callBack();
          timer = setInterval(callBack, props.delay * 2);
        } else {
          clearInterval(timer);
        }
      }
    );
    function callBack() {
      if (props.noMore && props.autoStop) {
        cancelAnimationFrame(timer);
        clearInterval(timer);
        stop && stop();
      } else {
        emit("load");
      }
    }
    if (props.immediate)
      emit("load");
    onUnmounted(() => {
      cancelAnimationFrame(timer);
      clearInterval(timer);
      stop();
      timer = null;
    });
    watch(() => props.noMore, (val) => {
      if (val && props.autoStop) {
        cancelAnimationFrame(timer);
        stop && stop();
      }
    });
    watch(() => props.loading, (val) => {
      if (val)
        requestAnimationFrame(callBack);
    });
    const showLoad = computed(() => {
      return props.loading || !props.noMore;
    });
    __expose({
      stop,
      loadMoreRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (unref(showLoad)) {
        _push(`<div class="min-h-1em">`);
        ssrRenderSlot(_ctx.$slots, "load", {}, () => {
          _push(`<div w-full flex-row-c-c py-2 text-center text-bluegray><div class="${ssrRenderClass(_ctx.loadingClass)}"></div></div>`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="animate-fade-in">`);
        ssrRenderSlot(_ctx.$slots, "done", {}, () => {
          if (!_ctx.noMore && !_ctx.loading) {
            _push(`<div h-2 w-full text-center text-bluegray></div>`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/DisAutoIncre.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AiMsg",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { data } = toRefs(props);
    useChatStore();
    const user = useUserStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD HH:mm:ss").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    const body = ((_a = props.data.message) == null ? void 0 : _a.body) || {};
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_tag = ElTag;
      const _component_v_md_preview = resolveComponent("v-md-preview");
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        label: unref(data).roomId,
        class: {
          self: ((_b = (_a2 = unref(data)) == null ? void 0 : _a2.fromUser) == null ? void 0 : _b.userId) === ((_c = unref(user)) == null ? void 0 : _c.userInfo.id)
        },
        "max-w-full": "",
        "w-fit": "",
        flex: "",
        "flex-shrink-0": "",
        "gap-4": "",
        "p-2": "",
        "py-3": "",
        "transition-300": "",
        "transition-transform": "",
        "active:scale-95": ""
      }))} data-v-1e97d739>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(data).fromUser.avatar,
        fit: "cover",
        class: "avatar h-2.4rem w-2.4rem flex-shrink-0 rounded-1/2 object-cover border-default"
      }, null, _parent));
      _push(`<div class="flex flex-col" data-v-1e97d739><div class="mb-2 block flex flex-row items-center gap-2" data-v-1e97d739><small data-v-1e97d739>${ssrInterpolate(unref(data).fromUser.nickName)}</small>`);
      if (unref(data).fromUser.userId === unref(user).userInfo.id) {
        _push(ssrRenderComponent(_component_el_tag, {
          class: "op-80",
          effect: "dark",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u81EA\u5DF1 `);
            } else {
              return [
                createTextVNode(" \u81EA\u5DF1 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="self-child msg-popper w-fit p-2 px-4 leading-1.2em shadow-sm card-default" data-v-1e97d739>`);
      if (unref(data).fromUser.userId === unref(user).userInfo.id) {
        _push(`<!--[-->${ssrInterpolate((_d = unref(data).message) == null ? void 0 : _d.content)}<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_v_md_preview, {
          class: "markdown",
          text: ((_e = unref(data).message) == null ? void 0 : _e.content) || ""
        }, null, _parent));
      }
      _push(`</div>`);
      if ((_f = unref(body)) == null ? void 0 : _f.reply) {
        _push(`<small mt-2 class="cursor-pointer truncate px-2 py-1 op-70 border-default card-default" data-v-1e97d739> \u56DE\u590D: ${ssrInterpolate(`${unref(body).reply.nickName}:${((_g = unref(body).reply) == null ? void 0 : _g.body) || ""}`)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.index % 8 === 0) {
        _push(`<p w-full py-2 text-center text-0.8em op-80 data-v-1e97d739>${ssrInterpolate(getTime(unref(data).message.sendTime))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/AiMsg.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const ChatMsgAiMsg = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1e97d739"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Delete",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "mx-a my-2 w-fit rounded-1em px-4 py-1 text-0.8rem font-500 op-60 border-default card-default" }, _attrs))} data-v-0bb61cbc>${ssrInterpolate((_b = (_a = _ctx.data) == null ? void 0 : _a.message) == null ? void 0 : _b.content)}</span>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Delete.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ChatMsgDelete = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-0bb61cbc"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Img",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { data } = toRefs(props);
    useChatStore();
    const user = useUserStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD HH:mm:ss").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    const body = ((_a = props.data.message) == null ? void 0 : _a.body) || {};
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_tag = ElTag;
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        label: unref(data).roomId,
        class: {
          self: ((_b = (_a2 = unref(data)) == null ? void 0 : _a2.fromUser) == null ? void 0 : _b.userId) === ((_c = unref(user)) == null ? void 0 : _c.userInfo.id)
        },
        "max-w-full": "",
        "w-fit": "",
        flex: "",
        "gap-4": "",
        "p-2": "",
        "py-3": "",
        "transition-300": "",
        "transition-transform": "",
        "active:scale-95": ""
      }))} data-v-503a9b5d>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(data).fromUser.avatar,
        fit: "cover",
        class: "avatar h-2.4rem w-2.4rem rounded-1/2 object-cover border-default"
      }, null, _parent));
      _push(`<div class="flex flex-col" data-v-503a9b5d><div class="mb-2 block flex flex-row items-center gap-2" data-v-503a9b5d><small data-v-503a9b5d>${ssrInterpolate(unref(data).fromUser.nickName)}</small>`);
      if (unref(data).fromUser.userId === unref(user).userInfo.id) {
        _push(ssrRenderComponent(_component_el_tag, {
          class: "op-80",
          effect: "dark",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u81EA\u5DF1 `);
            } else {
              return [
                createTextVNode(" \u81EA\u5DF1 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="msg-popper w-fit shadow-sm" style="${ssrRenderStyle({ "border-radius": "6px" })}" data-v-503a9b5d>`);
      if (unref(body).url) {
        _push(ssrRenderComponent(_component_CardElImage, {
          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(body).url,
          class: "h-8rem w-8rem shadow-sm border-default v-card",
          "preview-teleported": "",
          alt: unref(body).url,
          "preview-src-list": [("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(body).url]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p mt-2 w-fit p-2 leading-1.2em class="text transform-origin-ct transition-300 transition-transform active:scale-95" card-default data-v-503a9b5d>${ssrInterpolate(unref(data).message.content)}</p></div>`);
      if ((_d = unref(body)) == null ? void 0 : _d.reply) {
        _push(`<small mt-2 class="max-h-4rem max-w-20rem w-fit cursor-pointer break-words px-2 py-1 op-70 border-default card-default" data-v-503a9b5d>`);
        _push(ssrRenderComponent(_component_el_tag, { size: "small" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u56DE\u590D`);
            } else {
              return [
                createTextVNode("\u56DE\u590D")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` ${ssrInterpolate(`${unref(body).reply.nickName}:${((_e = unref(body).reply) == null ? void 0 : _e.body) || ""}`)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.index % 8 === 0) {
        _push(`<p w-full py-2 text-center text-0.8em op-80 data-v-503a9b5d>${ssrInterpolate(getTime(unref(data).message.sendTime))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Img.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ChatMsgImg = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-503a9b5d"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Recall",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<span${ssrRenderAttrs(mergeProps({ class: "mx-a my-2 w-fit rounded-1em px-4 py-1 text-0.8rem font-500 op-60 border-default card-default" }, _attrs))} data-v-6ddeba73>${ssrInterpolate((_b = (_a = _ctx.data) == null ? void 0 : _a.message) == null ? void 0 : _b.content)}</span>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Recall.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ChatMsgRecall = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-6ddeba73"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "System",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-full": "",
        "flex-row-c-c": "",
        truncate: "",
        "p-2": "",
        "text-center": ""
      }, _attrs))} data-v-80902259><span class="rounded-1em px-4 py-1 text-0.8rem font-500 op-60" data-v-80902259>${ssrInterpolate((_b = (_a = _ctx.data) == null ? void 0 : _a.message) == null ? void 0 : _b.content)}</span></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/System.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ChatMsgSystem = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-80902259"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { data } = toRefs(props);
    const chat = useChatStore();
    const user = useUserStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD HH:mm:ss").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    const body = ((_a = props.data.message) == null ? void 0 : _a.body) || {};
    const getAtText = computed(() => {
      if ((body == null ? void 0 : body.atUidList) && (body == null ? void 0 : body.atUidList.length) > 0)
        return chat.onOfflineList.filter((item) => {
          var _a2;
          return (_a2 = body == null ? void 0 : body.atUidList) == null ? void 0 : _a2.includes(item.userId);
        }).map((item) => `@${item.nickName}`).join("\u3001");
      else
        return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_tag = ElTag;
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        label: unref(data).roomId,
        class: {
          self: ((_b = (_a2 = unref(data)) == null ? void 0 : _a2.fromUser) == null ? void 0 : _b.userId) === ((_c = unref(user)) == null ? void 0 : _c.userInfo.id)
        },
        "max-w-full": "",
        "w-fit": "",
        flex: "",
        "gap-4": "",
        "p-2": "",
        "py-3": ""
      }))} data-v-64b5db36>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(data).fromUser.avatar,
        fit: "cover",
        class: "avatar h-2.4rem w-2.4rem flex-shrink-0 rounded-1/2 object-cover border-default"
      }, null, _parent));
      _push(`<div class="flex flex-col" data-v-64b5db36><div class="mb-2 block flex flex-row items-center gap-2" data-v-64b5db36><small data-v-64b5db36>${ssrInterpolate(unref(data).fromUser.nickName)}</small>`);
      if (unref(data).fromUser.userId === unref(user).userInfo.id) {
        _push(ssrRenderComponent(_component_el_tag, {
          class: "op-80",
          effect: "dark",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u81EA\u5DF1 `);
            } else {
              return [
                createTextVNode(" \u81EA\u5DF1 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p text- transform-origin-ct transition-300 transition-transform active:scale-95 class="self-child msg-popper w-fit p-2 px-4 leading-1.2em shadow-sm card-default" data-v-64b5db36>${ssrInterpolate(unref(data).message.content)}</p>`);
      if (((_d = unref(body)) == null ? void 0 : _d.atUidList) && ((_e = unref(body)) == null ? void 0 : _e.atUidList.length)) {
        _push(`<small mt-2 class="flex-ml-a w-fit cursor-pointer truncate px-2 py-1 op-70 border-default card-default" data-v-64b5db36>${ssrInterpolate(unref(getAtText))}</small>`);
      } else {
        _push(`<!---->`);
      }
      if ((_f = unref(body)) == null ? void 0 : _f.reply) {
        _push(`<small mt-2 class="cursor-pointer truncate px-2 py-1 op-70 border-default card-default" data-v-64b5db36> \u56DE\u590D: ${ssrInterpolate(`${unref(body).reply.nickName}:${((_g = unref(body).reply) == null ? void 0 : _g.body) || ""}`)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.index % 8 === 0) {
        _push(`<p w-full py-2 text-center text-0.8em op-80 data-v-64b5db36>${ssrInterpolate(getTime(unref(data).message.sendTime))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Text.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ChatMsgText = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-64b5db36"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    const props = __props;
    const map = {
      [MessageType.TEXT]: ChatMsgText,
      [MessageType.RECALL]: ChatMsgRecall,
      [MessageType.DELETE]: ChatMsgDelete,
      [MessageType.IMG]: ChatMsgImg,
      [MessageType.SYSTEM]: ChatMsgSystem,
      [MessageType.AI_CHAT]: ChatMsgAiMsg
    };
    const chat = useChatStore();
    const user = useUserStore();
    computed(() => {
      var _a, _b;
      return (_b = (_a = chat.theContact) == null ? void 0 : _a.member) == null ? void 0 : _b.role;
    });
    computed(() => {
      var _a, _b;
      return ((_b = (_a = chat.theContact) == null ? void 0 : _a.member) == null ? void 0 : _b.role) === ChatRoomRoleEnum.OWNER;
    });
    const isTheGroupPermission = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = chat.theContact) == null ? void 0 : _a.member) == null ? void 0 : _b.role) === ChatRoomRoleEnum.OWNER || ((_d = (_c = chat.theContact) == null ? void 0 : _c.member) == null ? void 0 : _d.role) === ChatRoomRoleEnum.ADMIN;
    });
    const colorMode = useColorMode();
    function onContextMenu(e, item) {
      e.preventDefault();
      const isSelf = user.userInfo.id === item.fromUser.userId;
      const opt = {
        x: e.x,
        y: e.y,
        theme: colorMode.preference === "dark" ? "mac dark" : "wind10",
        items: [
          {
            label: "\u64A4\u56DE",
            hidden: !isSelf,
            customClass: "group",
            icon: "i-solar:backspace-broken group-btn-danger",
            onClick: () => {
              refundMsg(item.message.roomId, item.message.id);
            }
          },
          {
            label: "\u5220\u9664",
            customClass: "group",
            icon: "i-solar:trash-bin-minimalistic-outline group-btn-danger",
            hidden: !isTheGroupPermission.value,
            onClick: () => {
              deleteMsg(item.message.roomId, item.message.id);
            }
          },
          {
            label: "@TA",
            customClass: "group",
            hidden: isSelf,
            onClick: () => {
              chat.setAtUid(item.fromUser.userId);
            }
          },
          {
            label: "\u56DE\u590D",
            icon: "i-solar:arrow-to-down-right-line-duotone -rotate-90 group-btn-info",
            hidden: isSelf,
            onClick: () => {
              chat.setReplyMsg(item);
            }
          }
        ]
      };
      ContextMenu.showContextMenu(opt);
    }
    function refundMsg(roomId, msgId) {
      ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u64A4\u56DE\u6D88\u606F\uFF1F", "\u64A4\u56DE\u63D0\u793A", {
        lockScroll: false,
        confirmButtonText: "\u786E \u8BA4",
        confirmButtonClass: "el-button--primary is-plain border-default ",
        cancelButtonText: "\u53D6 \u6D88",
        center: true,
        callback: async (action) => {
          if (action !== "confirm")
            return;
          const res = await refundChatMessage(roomId, msgId, user.getToken);
          if (res.code === StatusCode.SUCCESS) {
            ElMessage.success("\u64A4\u56DE\u6210\u529F\uFF01");
            if (props.data.message.id === msgId) {
              props.data.message.type = MessageType.RECALL;
              props.data.message.content = `${chat.theContact.type === RoomType.GROUP ? `"${props.data.fromUser.nickName}"` : '"\u5BF9\u65B9"'}\u64A4\u56DE\u4E86\u4E00\u6761\u6D88\u606F`;
              props.data.message.body = void 0;
            }
          }
        }
      });
    }
    function deleteMsg(roomId, msgId) {
      ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u5220\u9664\u6D88\u606F\uFF1F", "\u5220\u9664\u63D0\u793A", {
        lockScroll: false,
        confirmButtonText: "\u786E \u8BA4",
        confirmButtonClass: "el-button--primary is-plain border-default ",
        cancelButtonText: "\u53D6 \u6D88",
        center: true,
        callback: async (action) => {
          if (action !== "confirm")
            return;
          const res = await deleteChatMessage(roomId, msgId, user.getToken);
          if (res.code === StatusCode.SUCCESS) {
            ElMessage.success("\u5220\u9664\u6210\u529F\uFF01");
            if (props.data.message.id === msgId) {
              props.data.message.type = MessageType.RECALL;
              props.data.message.content = "\u5220\u9664\u4E86\u4E00\u6761\u6D88\u606F";
              props.data.message.body = void 0;
            }
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(map[((_a = _ctx.data.message) == null ? void 0 : _a.type) || unref(MessageType).TEXT]), mergeProps({
        index: _ctx.index,
        data: _ctx.data
      }, _ctx.$attrs, {
        onContextmenu: ($event) => onContextMenu($event, _ctx.data)
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Main.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "MessageList",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const chat = useChatStore();
    const isLoading = ref(false);
    const user = useUserStore();
    const ws = useWs();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 20
    });
    async function loadData(call) {
      if (isLoading.value || pageInfo.value.isLast || !chat.theContact.roomId)
        return;
      isLoading.value = true;
      getChatMessagePage(chat.theContact.roomId, pageInfo.value.size, pageInfo.value.cursor, user.getToken).then(({ data }) => {
        if (data.list && data.list.length)
          chat.theContact.msgList.unshift(...data.list);
        const oldSize = chat.scrollTopSize;
        nextTick(() => {
          chat.saveScrollTop && chat.saveScrollTop();
          if (pageInfo.value.cursor === null) {
            call && call();
          } else {
            const newSize = chat.scrollTopSize;
            const msgRangeSize = newSize - oldSize;
            if (msgRangeSize > 0)
              chat.scrollTop(msgRangeSize);
          }
          pageInfo.value.isLast = data.isLast;
          pageInfo.value.cursor = data.cursor;
          isLoading.value = false;
        });
      }).catch(() => {
        isLoading.value = false;
        pageInfo.value.isLast = false;
        pageInfo.value.cursor = null;
      });
    }
    watch(() => chat.theContact.roomId, (val) => {
      reload();
      if (val) {
        chat.setReadList(val);
        chat.scrollBottom();
      }
    }, {
      immediate: true
    });
    function reload() {
      chat.theContact.msgList = [];
      pageInfo.value = {
        cursor: null,
        isLast: false,
        size: 20
      };
      chat.scrollTopSize = 0;
      loadData(() => {
        chat.scrollBottom();
      });
    }
    watch(() => ws.wsMsgList.newMsg, (list) => {
      resolveNewMsg(list);
    }, {
      deep: true
    });
    watch(() => ws.wsMsgList.recallMsg, (list) => {
      resolveRevokeMsg(list);
    }, {
      deep: true
    });
    watch(() => ws.wsMsgList.deleteMsg, (list) => {
      resolveDeleteMsg(list);
    }, {
      deep: true
    });
    function resolveNewMsg(list) {
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        upContact(
          p.message.roomId,
          {
            text: `${p.fromUser.nickName}\uFF1A${p.message.content}`
          },
          false,
          (contact) => {
            if (contact.roomId !== chat.theContact.roomId) {
              contact.unreadCount += 1;
            }
            contact.activeTime = Date.now();
          }
        );
        if (p.message.roomId !== chat.theContact.roomId)
          continue;
        ws.wsMsgList.newMsg.splice(i, 1);
        chat.setReadList(chat.theContact.roomId);
        const msg = findMsg(p.message.id);
        if (!msg)
          chat.theContact.msgList.push(p);
      }
    }
    function resolveRevokeMsg(list) {
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        for (let k = 0; k < chat.contactList.length; k++) {
          const r = chat.contactList[k];
          if (r.roomId === p.roomId) {
            r.text = "\u64A4\u56DE\u4E86\u4E00\u6761\u6D88\u606F";
            break;
          }
        }
        if (p.roomId !== chat.theContact.roomId) {
          continue;
        } else {
          ws.wsMsgList.recallMsg.splice(i, 1);
        }
        const msg = findMsg(p.msgId);
        if (msg) {
          msg.message.type = MessageType.RECALL;
          msg.message.content = `${chat.theContact.type === RoomType.GROUP ? `"${msg.fromUser.nickName}"` : '"\u5BF9\u65B9"'}\u64A4\u56DE\u4E86\u4E00\u6761\u6D88\u606F`;
          msg.message.body = void 0;
          ws.wsMsgList.recallMsg = ws.wsMsgList.recallMsg.filter((k) => k.msgId !== p.msgId);
        }
      }
    }
    function resolveDeleteMsg(list) {
      for (let i = 0; i < list.length; i++) {
        const p = list[i];
        for (let k = 0; k < chat.contactList.length; k++) {
          const r = chat.contactList[k];
          if (r.roomId === p.roomId) {
            r.text = "\u5220\u9664\u4E86\u4E00\u6761\u6D88\u606F";
            break;
          }
        }
        if (p.roomId !== chat.theContact.roomId) {
          continue;
        } else {
          ws.wsMsgList.deleteMsg.splice(i, 1);
        }
        const msg = findMsg(p.msgId);
        if (msg) {
          msg.message.type = MessageType.DELETE;
          msg.message.content = `${chat.theContact.type === RoomType.GROUP ? `"${msg.fromUser.nickName}"` : '"\u5BF9\u65B9"'}\u5220\u9664\u4E86\u4E00\u6761\u6D88\u606F`;
          msg.message.body = void 0;
          ws.wsMsgList.deleteMsg = ws.wsMsgList.deleteMsg.filter((k) => k.msgId !== p.msgId);
        }
      }
    }
    function upContact(roomId, data, isReload = false, callBack) {
      for (let i = 0; i < chat.contactList.length; i++) {
        const p = chat.contactList[i];
        if (p.roomId === roomId) {
          p.text = data.text || p.text;
          p.unreadCount = data.unreadCount || p.unreadCount;
          p.activeTime = data.activeTime || p.activeTime;
          p.avatar = data.avatar || p.avatar;
          callBack && callBack(p);
        }
      }
    }
    function appendMsg(data) {
      if (data)
        chat.theContact.msgList.push(data);
    }
    function findMsg(msgId) {
      for (const p of chat.theContact.msgList) {
        if (p.message.id === msgId)
          return p;
      }
    }
    __expose({
      reload,
      appendMsg,
      findMsg
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListDisAutoIncre = _sfc_main$d;
      const _component_ChatMsgMain = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ relative: "" }, _ctx.$attrs, {
        flex: "",
        "flex-col": "",
        class: "msg-list"
      }, _attrs))} data-v-e67e74db>`);
      _push(ssrRenderComponent(_component_ListDisAutoIncre, {
        "auto-stop": false,
        "no-more": unref(pageInfo).isLast,
        loading: unref(isLoading),
        "loading-class": "mx-a mb-2 h-1rem w-1rem animate-[spin_2s_infinite_linear] rounded-4px bg-[var(--el-color-primary)] py-0.4em",
        onLoad: loadData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(chat).theContact.msgList, (msg, i) => {
              _push2(ssrRenderComponent(_component_ChatMsgMain, {
                id: `chat-msg-${msg.message.id}`,
                key: msg.message.id,
                index: i,
                class: "animate-[0.2s_zoom-in]",
                data: msg
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(chat).theContact.msgList, (msg, i) => {
                return openBlock(), createBlock(_component_ChatMsgMain, {
                  id: `chat-msg-${msg.message.id}`,
                  key: msg.message.id,
                  index: i,
                  class: "animate-[0.2s_zoom-in]",
                  data: msg
                }, null, 8, ["id", "index", "data"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/MessageList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e67e74db"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MsgContentCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7491fff6>${ssrInterpolate(`${(_b = (_a = _ctx.data) == null ? void 0 : _a.fromUser) == null ? void 0 : _b.nickName}:${(_d = (_c = _ctx.data) == null ? void 0 : _c.message) == null ? void 0 : _d.content}`)}</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/MsgContentCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7491fff6"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MsgForm",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const user = useUserStore();
    const chat = useChatStore();
    const form = ref({
      roomId: chat.theContact.roomId,
      msgType: MessageType.TEXT,
      // 默认
      content: "",
      body: {}
    });
    const inputRef = ref();
    watch(() => {
      var _a, _b;
      return (_b = (_a = chat.replyMsg) == null ? void 0 : _a.message) == null ? void 0 : _b.id;
    }, (val) => {
      form.value.body.replyMsgId = val;
      nextTick(() => {
        var _a;
        if (inputRef.value)
          (_a = inputRef.value) == null ? void 0 : _a.focus();
      });
    });
    const inputOssFileUploadRef = ref();
    const imgList = ref([]);
    function onSubmitImg(key, pathList, fileList) {
      var _a;
      const file = imgList.value.find((f) => f.key === key);
      if (key && (file == null ? void 0 : file.file)) {
        const url = (void 0).URL || (void 0).webkitURL;
        let width = 0;
        let height = 0;
        const img = new Image();
        img.src = url.createObjectURL(file == null ? void 0 : file.file);
        img.onload = function() {
          width = img.width || 0;
          height = img.height || 0;
        };
        form.value = {
          roomId: chat.theContact.roomId,
          msgType: MessageType.IMG,
          // 图片
          content: form.value.content,
          body: {
            url: key,
            width,
            height,
            size: (_a = file == null ? void 0 : file.file) == null ? void 0 : _a.size
          }
        };
      }
    }
    const formRef = ref();
    function onSubmit() {
      var _a, _b, _c;
      (_a = form.value.content) == null ? void 0 : _a.trim().replace(/\n$/g, "");
      if (!((_b = form.value.content) == null ? void 0 : _b.trim())) {
        ElMessage.warning("\u4E0D\u80FD\u53D1\u9001\u7A7A\u767D\u6D88\u606F\uFF01");
        return;
      }
      (_c = formRef.value) == null ? void 0 : _c.validate(async (action) => {
        var _a2;
        if (form.value.msgType === MessageType.TEXT && (!form.value.content || ((_a2 = form.value.content) == null ? void 0 : _a2.trim().length) > 500))
          ElMessage.error("\u6D88\u606F\u5185\u5BB9\u4E0D\u80FD\u8D85\u8FC7500\u5B57\uFF01");
        if (!action)
          return;
        const res = await addChatMessage({
          ...form.value,
          roomId: chat.theContact.roomId
        }, user.getToken);
        if (res.code === StatusCode.SUCCESS)
          emit("submit", res.data);
        form.value.content = "";
        reloadForm();
      });
    }
    let timer = 0;
    watch(() => chat.theContact.roomId, () => {
      var _a;
      reloadForm();
      if (inputRef.value)
        (_a = inputRef.value) == null ? void 0 : _a.focus();
    });
    onUnmounted(() => {
      clearTimeout(timer);
      clearInterval(timer);
      timer = null;
    });
    function reloadForm() {
      form.value = {
        roomId: chat.theContact.roomId,
        msgType: MessageType.TEXT,
        // 默认
        content: "",
        body: {
          atUidList: []
        }
      };
      imgList.value = [];
      chat.atUserList.splice(0);
      chat.setReplyMsg({});
    }
    watch(() => chat.theContact.roomId, () => {
      reloadForm();
      loadUser();
    });
    function setReadAll() {
      if (chat.theContact.roomId) {
        chat.setReadList(chat.theContact.roomId);
        chat.scrollBottom();
      }
    }
    const colorMode = useColorMode();
    function onContextMenu(e, key, index2 = 0) {
      e.preventDefault();
      const opt = {
        x: e.x,
        y: e.y,
        theme: colorMode.preference === "dark" ? "mac dark" : "wind10",
        items: [
          {
            customClass: "group",
            icon: "i-solar:trash-bin-minimalistic-outline group-btn-danger",
            label: "\u5220\u9664\u56FE\u7247",
            onClick: async () => {
              if (!key)
                return;
              const res = await deleteOssFile(key, user.getToken);
              if (res.code === StatusCode.SUCCESS) {
                imgList.value.splice(
                  index2,
                  1
                );
                ElMessage.success("\u5220\u9664\u6210\u529F");
              } else if (res.code === StatusCode.DELETE_ERR) {
                imgList.value.splice(
                  index2,
                  1
                );
              }
              inputOssFileUploadRef == null ? void 0 : inputOssFileUploadRef.value.resetInput();
            }
          }
        ]
      };
      ContextMenu.showContextMenu(opt);
    }
    const isDisabled = computed(() => !(user == null ? void 0 : user.isLogin));
    const atSelectRef = ref();
    const userList = ref([]);
    async function loadUser() {
      var _a;
      if (!chat.theContact.roomId || chat.theContact.type !== RoomType.GROUP)
        return;
      const { data } = await getRoomGroupAllUser(chat.theContact.roomId, user.getToken);
      if (data.value && data.value.code === StatusCode.SUCCESS)
        userList.value = ((_a = data.value) == null ? void 0 : _a.data) || [];
    }
    const theRoomUnReadLength = computed(() => {
      return chat.theContact.unReadLength;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_tag = ElTag;
      const _component_CardElImage = __nuxt_component_1;
      const _component_ChatMsgContentCard = __nuxt_component_4$1;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_InputOssFileUpload = __nuxt_component_9;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_el_input = ElInput;
      const _component_BtnElButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        model: unref(form),
        disabled: unref(isDisabled),
        class: "w-full",
        onSubmit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              style: [
                unref(theRoomUnReadLength) ? null : { display: "none" },
                { "padding": "0 0.5rem", "margin": "0", "margin-bottom": "0.4rem", "display": "flex", "justify-content": "right" }
              ],
              class: "w-full cursor-pointer",
              onClick: setReadAll
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_tag, {
                    type: "warning",
                    effect: "light",
                    round: "",
                    class: "ml-a"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u6709${ssrInterpolate(unref(theRoomUnReadLength))}\u6761\u65B0\u6D88\u606F `);
                      } else {
                        return [
                          createTextVNode(" \u6709" + toDisplayString(unref(theRoomUnReadLength)) + "\u6761\u65B0\u6D88\u606F ", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_tag, {
                      type: "warning",
                      effect: "light",
                      round: "",
                      class: "ml-a"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6709" + toDisplayString(unref(theRoomUnReadLength)) + "\u6761\u65B0\u6D88\u606F ", 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(imgList).length > 0) {
              _push2(ssrRenderComponent(_component_el_form_item, {
                class: "w-full cursor-pointer",
                style: { "padding": "0 0.5rem", "margin": "0", "margin-bottom": "0.4rem", "display": "flex", "justify-content": "center", "grid-gap": "0.2rem", "margin-left": "auto" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(imgList), (img, i) => {
                      _push3(ssrRenderComponent(_component_CardElImage, {
                        key: i,
                        "preview-teleported": "",
                        loading: "lazy",
                        "preview-src-list": [img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key],
                        src: img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key,
                        class: "ml-a h-8rem w-8rem overflow-hidden rounded-6px p-2 border-default card-default",
                        onContextmenu: ($event) => onContextMenu($event, img.key, i)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(imgList), (img, i) => {
                        return openBlock(), createBlock(_component_CardElImage, {
                          key: i,
                          "preview-teleported": "",
                          loading: "lazy",
                          "preview-src-list": [img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key],
                          src: img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key,
                          class: "ml-a h-8rem w-8rem overflow-hidden rounded-6px p-2 border-default card-default",
                          onContextmenu: ($event) => onContextMenu($event, img.key, i)
                        }, null, 8, ["preview-src-list", "src", "onContextmenu"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if ((_a = unref(chat).replyMsg) == null ? void 0 : _a.fromUser) {
              _push2(ssrRenderComponent(_component_el_form_item, {
                prop: "body.replyMsgId",
                class: "w-full",
                style: { "padding": "0.4rem", "margin": "0", "margin-bottom": "0.2rem", "display": "flex" }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full flex animate-[300ms_fade-in] items-center rounded-6px bg-[#ffffff9c] p-2 shadow backdrop-blur-10px border-default dark:bg-dark" data-v-c54b18ee${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_tag, {
                      effect: "dark",
                      class: "mr-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u56DE\u590D `);
                        } else {
                          return [
                            createTextVNode(" \u56DE\u590D ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ChatMsgContentCard, {
                      class: "w-4/5 truncate",
                      data: unref(chat).replyMsg
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="i-solar:close-circle-bold text-dark op-80 transition-200 transition-color btn-default dark:text-light hover:text-[var(--el-color-danger)]" h-2em w-2em data-v-c54b18ee${_scopeId2}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full flex animate-[300ms_fade-in] items-center rounded-6px bg-[#ffffff9c] p-2 shadow backdrop-blur-10px border-default dark:bg-dark" }, [
                        createVNode(_component_el_tag, {
                          effect: "dark",
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u56DE\u590D ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ChatMsgContentCard, {
                          class: "w-4/5 truncate",
                          data: unref(chat).replyMsg
                        }, null, 8, ["data"]),
                        createVNode("div", {
                          class: "i-solar:close-circle-bold text-dark op-80 transition-200 transition-color btn-default dark:text-light hover:text-[var(--el-color-danger)]",
                          "h-2em": "",
                          "w-2em": "",
                          onClick: ($event) => unref(chat).setReplyMsg({})
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col rounded-b-0 px-4 py-2 shadow card-default" data-v-c54b18ee${_scopeId}><div class="relative flex grid-gap-4" data-v-c54b18ee${_scopeId}>`);
            if (unref(chat).theContact.type === ("RoomType" in _ctx ? _ctx.RoomType : unref(RoomType)).GROUP) {
              _push2(ssrRenderComponent(_component_el_form_item, {
                disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
                style: { "padding": "0", "margin": "0" },
                prop: "body.atUidList",
                class: "at-select w-12rem"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_select, {
                      ref_key: "atSelectRef",
                      ref: atSelectRef,
                      modelValue: unref(chat).atUserList,
                      "onUpdate:modelValue": ($event) => unref(chat).atUserList = $event,
                      disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
                      max: 20,
                      "max-collapse-tags": 1,
                      clearable: "",
                      filterable: "",
                      "collapse-tags": "",
                      multiple: "",
                      "default-first-option": "",
                      "reserve-keyword": true,
                      placeholder: "@\u5176\u4ED6\u4EBA",
                      onChange: (val) => unref(form).body.atUidList = val
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(userList), (p) => {
                            _push4(ssrRenderComponent(_component_el_option, {
                              key: p.userId,
                              value: p.userId,
                              label: `@${p.nickName}`
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: p.userId,
                                value: p.userId,
                                label: `@${p.nickName}`
                              }, null, 8, ["value", "label"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_select, {
                        ref_key: "atSelectRef",
                        ref: atSelectRef,
                        modelValue: unref(chat).atUserList,
                        "onUpdate:modelValue": ($event) => unref(chat).atUserList = $event,
                        disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
                        max: 20,
                        "max-collapse-tags": 1,
                        clearable: "",
                        filterable: "",
                        "collapse-tags": "",
                        multiple: "",
                        "default-first-option": "",
                        "reserve-keyword": true,
                        placeholder: "@\u5176\u4ED6\u4EBA",
                        onChange: (val) => unref(form).body.atUidList = val
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: p.userId,
                              value: p.userId,
                              label: `@${p.nickName}`
                            }, null, 8, ["value", "label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_el_form_item, {
              style: { "cursor": "pointer", "padding": "0", "margin": "0" },
              prop: "body.url",
              class: "cursor-pointer"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputOssFileUpload, {
                    ref_key: "inputOssFileUploadRef",
                    ref: inputOssFileUploadRef,
                    modelValue: unref(imgList),
                    "onUpdate:modelValue": ($event) => isRef(imgList) ? imgList.value = $event : null,
                    multiple: false,
                    preview: false,
                    limit: 1,
                    class: "i-solar:album-line-duotone h-1.5rem w-1.5rem cursor-pointer",
                    "upload-type": ("OssFileType" in _ctx ? _ctx.OssFileType : unref(OssFileType)).IMAGE,
                    "input-class": "op-0 h-1.5rem w-1.5rem cursor-pointer ",
                    "upload-quality": 0.5,
                    onErrorMsg: (msg) => {
                      ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                    },
                    onSubmit: onSubmitImg
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputOssFileUpload, {
                      ref_key: "inputOssFileUploadRef",
                      ref: inputOssFileUploadRef,
                      modelValue: unref(imgList),
                      "onUpdate:modelValue": ($event) => isRef(imgList) ? imgList.value = $event : null,
                      multiple: false,
                      preview: false,
                      limit: 1,
                      class: "i-solar:album-line-duotone h-1.5rem w-1.5rem cursor-pointer",
                      "upload-type": ("OssFileType" in _ctx ? _ctx.OssFileType : unref(OssFileType)).IMAGE,
                      "input-class": "op-0 h-1.5rem w-1.5rem cursor-pointer ",
                      "upload-quality": 0.5,
                      onErrorMsg: (msg) => {
                        ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                      },
                      onSubmit: onSubmitImg
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "upload-type", "onErrorMsg"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="ml-a w-fit flex-row-c-c px-2 transition-200 btn-primary" data-v-c54b18ee${_scopeId}><i i-solar:double-alt-arrow-down-line-duotone p-3 data-v-c54b18ee${_scopeId}></i></div></div><div my-4 flex items-end gap-3 data-v-c54b18ee${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/user/info",
              class: "flex-row-c-c"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardElImage, {
                    src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : "",
                    class: "block h-2rem w-2rem rounded-1/2 shadow-sm"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardElImage, {
                      src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : "",
                      class: "block h-2rem w-2rem rounded-1/2 shadow-sm"
                    }, null, 8, ["src"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "content",
              style: { "padding": "0", "margin": "0" },
              class: "w-full",
              rules: [
                { min: 1, max: 500, message: "\u957F\u5EA6\u5728 1 \u5230 500 \u4E2A\u5B57\u7B26", trigger: `change` }
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d, _e, _f;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    ref_key: "inputRef",
                    ref: inputRef,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    modelModifiers: { lazy: true },
                    autosize: { minRows: 1, maxRows: 4 },
                    rows: ((_a2 = unref(form)) == null ? void 0 : _a2.content) && ((_c = (_b2 = unref(form)) == null ? void 0 : _b2.content) == null ? void 0 : _c.length) > 30 ? 4 : 1,
                    maxlength: 500,
                    placeholder: "\u6765\u804A\u70B9\u4EC0\u4E48\u5427 \u2728",
                    type: "textarea",
                    class: ["input", {
                      focused: unref(form).content
                    }],
                    onKeyup: ($event) => onSubmit()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      ref_key: "inputRef",
                      ref: inputRef,
                      modelValue: unref(form).content,
                      "onUpdate:modelValue": ($event) => unref(form).content = $event,
                      modelModifiers: { lazy: true },
                      autosize: { minRows: 1, maxRows: 4 },
                      rows: ((_d = unref(form)) == null ? void 0 : _d.content) && ((_f = (_e = unref(form)) == null ? void 0 : _e.content) == null ? void 0 : _f.length) > 30 ? 4 : 1,
                      maxlength: 500,
                      placeholder: "\u6765\u804A\u70B9\u4EC0\u4E48\u5427 \u2728",
                      type: "textarea",
                      class: ["input", {
                        focused: unref(form).content
                      }],
                      onKeyup: withKeys(withModifiers(($event) => onSubmit(), ["prevent"]), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "rows", "class", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BtnElButton, {
              round: "",
              disabled: !unref(user).isLogin,
              "transition-icon": "",
              class: "group ml-a",
              "icon-class": "i-solar:map-arrow-right-bold-duotone block -rotate-45 mr-1",
              type: "info",
              onClick: ($event) => onSubmit()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D1\u9001\xA0 `);
                } else {
                  return [
                    createTextVNode(" \u53D1\u9001\xA0 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              withDirectives(createVNode(_component_el_form_item, {
                class: "w-full cursor-pointer",
                style: { "padding": "0 0.5rem", "margin": "0", "margin-bottom": "0.4rem", "display": "flex", "justify-content": "right" },
                onClick: setReadAll
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_tag, {
                    type: "warning",
                    effect: "light",
                    round: "",
                    class: "ml-a"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6709" + toDisplayString(unref(theRoomUnReadLength)) + "\u6761\u65B0\u6D88\u606F ", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512), [
                [vShow, unref(theRoomUnReadLength)]
              ]),
              unref(imgList).length > 0 ? (openBlock(), createBlock(_component_el_form_item, {
                key: 0,
                class: "w-full cursor-pointer",
                style: { "padding": "0 0.5rem", "margin": "0", "margin-bottom": "0.4rem", "display": "flex", "justify-content": "center", "grid-gap": "0.2rem", "margin-left": "auto" }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(imgList), (img, i) => {
                    return openBlock(), createBlock(_component_CardElImage, {
                      key: i,
                      "preview-teleported": "",
                      loading: "lazy",
                      "preview-src-list": [img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key],
                      src: img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key,
                      class: "ml-a h-8rem w-8rem overflow-hidden rounded-6px p-2 border-default card-default",
                      onContextmenu: ($event) => onContextMenu($event, img.key, i)
                    }, null, 8, ["preview-src-list", "src", "onContextmenu"]);
                  }), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              ((_b = unref(chat).replyMsg) == null ? void 0 : _b.fromUser) ? (openBlock(), createBlock(_component_el_form_item, {
                key: 1,
                prop: "body.replyMsgId",
                class: "w-full",
                style: { "padding": "0.4rem", "margin": "0", "margin-bottom": "0.2rem", "display": "flex" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full flex animate-[300ms_fade-in] items-center rounded-6px bg-[#ffffff9c] p-2 shadow backdrop-blur-10px border-default dark:bg-dark" }, [
                    createVNode(_component_el_tag, {
                      effect: "dark",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u56DE\u590D ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_ChatMsgContentCard, {
                      class: "w-4/5 truncate",
                      data: unref(chat).replyMsg
                    }, null, 8, ["data"]),
                    createVNode("div", {
                      class: "i-solar:close-circle-bold text-dark op-80 transition-200 transition-color btn-default dark:text-light hover:text-[var(--el-color-danger)]",
                      "h-2em": "",
                      "w-2em": "",
                      onClick: ($event) => unref(chat).setReplyMsg({})
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode("div", { class: "flex flex-col rounded-b-0 px-4 py-2 shadow card-default" }, [
                createVNode("div", { class: "relative flex grid-gap-4" }, [
                  unref(chat).theContact.type === ("RoomType" in _ctx ? _ctx.RoomType : unref(RoomType)).GROUP ? (openBlock(), createBlock(_component_el_form_item, {
                    key: 0,
                    disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
                    style: { "padding": "0", "margin": "0" },
                    prop: "body.atUidList",
                    class: "at-select w-12rem"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_select, {
                        ref_key: "atSelectRef",
                        ref: atSelectRef,
                        modelValue: unref(chat).atUserList,
                        "onUpdate:modelValue": ($event) => unref(chat).atUserList = $event,
                        disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
                        max: 20,
                        "max-collapse-tags": 1,
                        clearable: "",
                        filterable: "",
                        "collapse-tags": "",
                        multiple: "",
                        "default-first-option": "",
                        "reserve-keyword": true,
                        placeholder: "@\u5176\u4ED6\u4EBA",
                        onChange: (val) => unref(form).body.atUidList = val
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: p.userId,
                              value: p.userId,
                              label: `@${p.nickName}`
                            }, null, 8, ["value", "label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : createCommentVNode("", true),
                  createVNode(_component_el_form_item, {
                    style: { "cursor": "pointer", "padding": "0", "margin": "0" },
                    prop: "body.url",
                    class: "cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_InputOssFileUpload, {
                        ref_key: "inputOssFileUploadRef",
                        ref: inputOssFileUploadRef,
                        modelValue: unref(imgList),
                        "onUpdate:modelValue": ($event) => isRef(imgList) ? imgList.value = $event : null,
                        multiple: false,
                        preview: false,
                        limit: 1,
                        class: "i-solar:album-line-duotone h-1.5rem w-1.5rem cursor-pointer",
                        "upload-type": ("OssFileType" in _ctx ? _ctx.OssFileType : unref(OssFileType)).IMAGE,
                        "input-class": "op-0 h-1.5rem w-1.5rem cursor-pointer ",
                        "upload-quality": 0.5,
                        onErrorMsg: (msg) => {
                          ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                        },
                        onSubmit: onSubmitImg
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "upload-type", "onErrorMsg"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", {
                    class: "ml-a w-fit flex-row-c-c px-2 transition-200 btn-primary",
                    onClick: ($event) => unref(chat).scrollBottom()
                  }, [
                    createVNode("i", {
                      "i-solar:double-alt-arrow-down-line-duotone": "",
                      "p-3": ""
                    })
                  ], 8, ["onClick"])
                ]),
                createVNode("div", {
                  "my-4": "",
                  flex: "",
                  "items-end": "",
                  "gap-3": ""
                }, [
                  createVNode(_component_NuxtLink, {
                    to: "/user/info",
                    class: "flex-row-c-c"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_CardElImage, {
                        src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : "",
                        class: "block h-2rem w-2rem rounded-1/2 shadow-sm"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, {
                    prop: "content",
                    style: { "padding": "0", "margin": "0" },
                    class: "w-full",
                    rules: [
                      { min: 1, max: 500, message: "\u957F\u5EA6\u5728 1 \u5230 500 \u4E2A\u5B57\u7B26", trigger: `change` }
                    ]
                  }, {
                    default: withCtx(() => {
                      var _a2, _b2, _c;
                      return [
                        createVNode(_component_el_input, {
                          ref_key: "inputRef",
                          ref: inputRef,
                          modelValue: unref(form).content,
                          "onUpdate:modelValue": ($event) => unref(form).content = $event,
                          modelModifiers: { lazy: true },
                          autosize: { minRows: 1, maxRows: 4 },
                          rows: ((_a2 = unref(form)) == null ? void 0 : _a2.content) && ((_c = (_b2 = unref(form)) == null ? void 0 : _b2.content) == null ? void 0 : _c.length) > 30 ? 4 : 1,
                          maxlength: 500,
                          placeholder: "\u6765\u804A\u70B9\u4EC0\u4E48\u5427 \u2728",
                          type: "textarea",
                          class: ["input", {
                            focused: unref(form).content
                          }],
                          onKeyup: withKeys(withModifiers(($event) => onSubmit(), ["prevent"]), ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rows", "class", "onKeyup"])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_BtnElButton, {
                    round: "",
                    disabled: !unref(user).isLogin,
                    "transition-icon": "",
                    class: "group ml-a",
                    "icon-class": "i-solar:map-arrow-right-bold-duotone block -rotate-45 mr-1",
                    type: "info",
                    onClick: ($event) => onSubmit()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u53D1\u9001\xA0 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/MsgForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c54b18ee"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    roomId: {}
  },
  setup(__props) {
    const chat = useChatStore();
    const ws = useWs();
    useSettingStore();
    const getType = computed(() => {
      var _a;
      let msg = "";
      switch ((_a = chat == null ? void 0 : chat.theContact) == null ? void 0 : _a.type) {
        case RoomType.GROUP:
          msg = "\u7FA4";
          break;
        case RoomType.SELFT:
          msg = "\u79C1";
          break;
        case RoomType.AICHAT:
          msg = "AI";
          break;
      }
      return msg;
    });
    const ChatMessageListRef = ref();
    const scrollbarRef = ref();
    function onSendMsg(msg) {
      scrollBottom();
    }
    const timer = ref(0);
    function scrollReplyMsg(msgId, gapCount = 0) {
      if (!msgId)
        return;
      const offset = -10;
      const el = (void 0).querySelector(`#chat-msg-${msgId}`);
      if (!el) {
        timer.value = setTimeout(() => {
          var _a;
          (_a = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _a.setScrollTop(0);
          scrollReplyMsg(msgId, gapCount);
          if (el) {
            timer.value && clearTimeout(timer.value);
            timer.value = null;
          }
        }, 500);
        return;
      } else {
        clearTimeout(timer.value);
        timer.value = null;
      }
      nextTick(() => {
        var _a, _b, _c, _d, _e;
        if (!el)
          return;
        clearTimeout(timer.value);
        if ((_b = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.scrollTo) {
          (_d = (_c = scrollbarRef.value) == null ? void 0 : _c.wrapRef) == null ? void 0 : _d.scrollTo({
            top: ((el == null ? void 0 : el.offsetTop) || 0) + offset,
            behavior: "smooth"
          });
        } else {
          (_e = scrollbarRef.value) == null ? void 0 : _e.setScrollTop(((el == null ? void 0 : el.offsetTop) || 0) + offset);
        }
        el.classList.add("reply-shaing");
        timer.value = setTimeout(() => {
          el.classList.remove("reply-shaing");
          timer.value = null;
        }, 3e3);
      });
    }
    function scrollBottom(animate = true) {
      timer.value = setTimeout(() => {
        var _a, _b, _c, _d, _e, _f, _g;
        if (animate) {
          (_d = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _d.scrollTo({
            top: ((_c = (_b = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _b.wrapRef) == null ? void 0 : _c.scrollHeight) || 0,
            behavior: "smooth"
          });
        } else {
          (_g = scrollbarRef.value) == null ? void 0 : _g.setScrollTop(((_f = (_e = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _e.wrapRef) == null ? void 0 : _f.scrollHeight) || 0);
        }
      }, 200);
    }
    function saveScrollTop() {
      var _a, _b;
      chat.scrollTopSize = (_b = (_a = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.scrollHeight;
    }
    function scrollTop(size) {
      var _a;
      (_a = scrollbarRef.value) == null ? void 0 : _a.scrollTo({
        top: size || 0
      });
    }
    nextTick(() => {
      chat.scrollBottom = scrollBottom;
      chat.scrollReplyMsg = scrollReplyMsg;
      chat.saveScrollTop = saveScrollTop;
      chat.scrollTop = scrollTop;
      scrollBottom();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_tag = ElTag;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ChatMessageList = __nuxt_component_3$1;
      const _component_ChatMsgForm = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col" }, _attrs))} data-v-6fcfcf7f><h4 class="flex-row-bt-c border-0 border-b-1 rounded-0 p-4 border-default card-default md:p-4" data-v-6fcfcf7f><div w-full flex flex-shrink-0 items-center gap-3 data-v-6fcfcf7f>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(chat).theContact.avatar,
        class: "h-2.2rem w-2.2rem object-cover border-default card-default"
      }, null, _parent));
      _push(`<span data-v-6fcfcf7f>${ssrInterpolate(unref(chat).theContact.name)}</span>`);
      _push(ssrRenderComponent(_component_el_tag, {
        effect: "dark",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(getType))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(getType)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(ws).status === unref(WsStatusEnum).OPEN) {
        _push(`<i circle plain class="ml-a btn-danger" transition="all  op-60 group-hover:op-100 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" i-solar:power-bold p-2.2 data-v-6fcfcf7f></i>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(chat).theContact.type === ("RoomType" in _ctx ? _ctx.RoomType : unref(RoomType)).GROUP) {
        _push(`<i class="flex-row-c-c grid-gap-2 btn-primary" transition="all  op-60 group-hover:op-100 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" i-solar:users-group-two-rounded-bold-duotone p-2.2 data-v-6fcfcf7f></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></h4><div class="relative mt-a flex-1 bg-light-5 shadow-sm dark:bg-dark-9" data-v-6fcfcf7f>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        class: "stop-transition",
        "wrap-class": "h-65vh px-0 sm:px-2",
        "view-class": "msg-list h-65vh"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(chat).theContact.roomId) {
              _push2(ssrRenderComponent(_component_ChatMessageList, {
                ref_key: "ChatMessageListRef",
                ref: ChatMessageListRef,
                class: "pb-7rem pt-2rem sm:pb-8rem",
                onScrollBottom: scrollBottom
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-full w-full flex items-center justify-center" data-v-6fcfcf7f${_scopeId}> \u5F00\u542F\u804A\u5929\u5427 </div>`);
            }
          } else {
            return [
              unref(chat).theContact.roomId ? (openBlock(), createBlock(_component_ChatMessageList, {
                key: 0,
                ref_key: "ChatMessageListRef",
                ref: ChatMessageListRef,
                class: "pb-7rem pt-2rem sm:pb-8rem",
                onScrollBottom: scrollBottom
              }, null, 512)) : (openBlock(), createBlock("div", {
                key: 1,
                class: "h-full w-full flex items-center justify-center"
              }, " \u5F00\u542F\u804A\u5929\u5427 "))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div flex flex-col data-v-6fcfcf7f>`);
      _push(ssrRenderComponent(_component_ChatMsgForm, {
        class: "absolute bottom-0 left-0 z-2",
        onSubmit: onSendMsg
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Content.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6fcfcf7f"]]);
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./NewGroupDialog-l1edpcXP.mjs').then((m) => m.default || m));
const __nuxt_component_6_lazy = defineAsyncComponent(() => import('./ApplyDialog-mpEDvnLw.mjs').then((m) => m.default || m));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoomGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const chatRoomRoleEnumMap = ChatRoomRoleEnumMap;
    const ws = useWs();
    const chat = useChatStore();
    const setting = useSettingStore();
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 15
    });
    chat.onOfflineList.splice(0);
    async function loadData() {
      if (isLoading.value || pageInfo.value.isLast || chat.theContact.type !== RoomType.GROUP)
        return;
      isLoading.value = true;
      const { data } = await getRoomGroupUserPage(chat.theContact.roomId, pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      if (data.list)
        chat.onOfflineList.push(...data.list);
      isLoading.value = false;
    }
    function reload() {
      chat.onOfflineList = [];
      pageInfo.value = {
        cursor: null,
        isLast: false,
        size: 15
      };
      if (!isLoading.value) {
        isLoading.value = false;
        loadData();
      }
    }
    const theUser = ref();
    const isShowApply = ref();
    const getTheRoleType = computed(() => {
      var _a, _b;
      return (_b = (_a = chat.theContact) == null ? void 0 : _a.member) == null ? void 0 : _b.role;
    });
    const isTheGroupOwner = computed(() => {
      var _a, _b;
      return ((_b = (_a = chat.theContact) == null ? void 0 : _a.member) == null ? void 0 : _b.role) === ChatRoomRoleEnum.OWNER;
    });
    const isTheGroupPermission = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = chat.theContact) == null ? void 0 : _a.member) == null ? void 0 : _b.role) === ChatRoomRoleEnum.OWNER || ((_d = (_c = chat.theContact) == null ? void 0 : _c.member) == null ? void 0 : _d.role) === ChatRoomRoleEnum.ADMIN;
    });
    const colorMode = useColorMode();
    function onContextMenu(e, item) {
      e.preventDefault();
      const isSelf = user.userInfo.id === item.userId;
      ContextMenu.showContextMenu({
        x: e.x,
        y: e.y,
        theme: colorMode.preference === "dark" ? "mac dark" : "wind10",
        items: [
          {
            label: "@ \u4ED6",
            hidden: isSelf,
            onClick: () => {
              chat.setAtUid(item.userId);
            }
          },
          {
            icon: "btn-info i-solar:user-bold ",
            label: "\u8054\u7CFB\u4ED6",
            hidden: isSelf,
            onClick: () => {
              chat.setTheFriendOpt(FriendOptType.User, {
                id: item.userId
              });
              navigateTo({
                path: "/chat/friend",
                query: {
                  id: item.userId
                },
                replace: false
              });
            }
          },
          {
            label: "\u6DFB\u52A0\u597D\u53CB",
            icon: "i-carbon:add-large btn-info",
            hidden: isSelf,
            onClick: () => {
              isChatFriend({ uidList: [item.userId] }, user.getToken).then((res) => {
                if (res.code !== StatusCode.SUCCESS)
                  return ElMessage.error(res.msg || "\u7533\u8BF7\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
                const user2 = res.data.checkedList.find((p) => p.uid === item.userId);
                if (user2 && user2.isFriend)
                  return ElMessage.error("\u7533\u8BF7\u5931\u8D25\uFF0C\u548C\u5BF9\u65B9\u5DF2\u662F\u597D\u53CB\uFF01");
                theUser.value = item;
                isShowApply.value = true;
              }).catch(() => {
              });
            }
          },
          {
            label: "\u7BA1\u7406\u5458",
            icon: "i-solar:shield-user-bold-duotone btn-warning",
            hidden: isSelf || !isTheGroupOwner.value,
            children: [
              {
                label: "\u6DFB\u52A0",
                hidden: item.roleType === ChatRoomRoleEnum.ADMIN,
                icon: "i-carbon:add-large btn-info",
                onClick: () => {
                  toggleAdminRole({
                    userId: item.userId,
                    roomId: chat.theContact.roomId
                  }, ChatRoomRoleEnum.ADMIN);
                }
              },
              {
                label: "\u79FB\u9664",
                // icon: "i-carbon:add-large btn-info",
                hidden: !item.roleType || item.roleType !== ChatRoomRoleEnum.ADMIN,
                onClick: () => {
                  toggleAdminRole({
                    userId: item.userId,
                    roomId: chat.theContact.roomId
                  }, ChatRoomRoleEnum.MEMBER);
                }
              }
            ]
          },
          {
            label: "\u5176\u4ED6",
            children: [
              {
                label: "\u5206\u4EAB",
                icon: "i-solar:share-line-duotone",
                onClick: async () => {
                  await useAsyncCopyText(`${(void 0).location.origin}/user/info?id=${item.userId}`);
                  ElMessage.success({
                    message: "\u6210\u529F\u590D\u5236\u81F3\u526A\u8D34\u677F\uFF01",
                    grouping: true
                  });
                }
              }
            ]
          },
          {
            label: "\u8E22\u51FA\u7FA4\u804A",
            icon: "i-solar:logout-3-broken",
            hidden: isSelf || !isTheGroupPermission.value,
            onClick: () => {
              ElMessageBox.confirm("\u662F\u5426\u5C06\u8BE5\u7528\u6237\u8E22\u51FA\u7FA4\u804A\uFF1F", {
                center: true,
                confirmButtonText: "\u8E22\u51FA",
                cancelButtonText: "\u53D6\u6D88",
                confirmButtonClass: "btn-error",
                lockScroll: false,
                callback: async (action) => {
                  if (action === "confirm") {
                    const res = await exitRoomGroupByUid(chat.theContact.roomId, item.userId, user.getToken);
                    if (res.code === StatusCode.SUCCESS) {
                      ElNotification.success("\u8E22\u51FA\u6210\u529F\uFF01");
                      chat.onOfflineList = chat.onOfflineList.filter((e2) => e2.userId !== item.userId);
                    }
                  }
                }
              });
            }
          }
        ]
      });
    }
    function toggleAdminRole(dto, type) {
      const isAdmin = type === ChatRoomRoleEnum.ADMIN;
      ElMessageBox.confirm(`\u662F\u5426\u5C06\u8BE5\u7528\u6237${isAdmin ? "\u8BBE\u4E3A" : "\u53D6\u6D88"}\u7BA1\u7406\u5458\uFF1F`, {
        center: true,
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88",
        lockScroll: false,
        callback: async (action) => {
          if (action === "confirm") {
            const fn = isAdmin ? addChatRoomAdmin : delChatRoomAdmin;
            const res = await fn(dto, user.getToken);
            if (res.code === StatusCode.SUCCESS) {
              ElNotification.success("\u64CD\u4F5C\u6210\u529F\uFF01");
              for (const p of chat.onOfflineList) {
                if (p.userId === dto.userId)
                  return p.roleType = type;
              }
            }
          }
        }
      });
    }
    watchDebounced(() => chat.theContact.roomId, (val) => {
      if (val && chat.theContact.type === RoomType.GROUP)
        reload();
    });
    watchThrottled(() => ws.wsMsgList.onlineNotice, (list) => {
      if (list.length) {
        for (const p of list) {
          if (!p.changeList)
            return;
          for (const item of chat.onOfflineList) {
            for (const k of p.changeList) {
              if (k.userId === item.userId) {
                item.activeStatus = k.activeStatus;
                break;
              }
            }
          }
        }
      }
    }, {
      deep: true,
      immediate: true
    });
    const merberList = computed(() => {
      return chat.onOfflineList.sort((a, b) => b.activeStatus - a.activeStatus);
    });
    const ChatNewGroupDialogRef = ref();
    const showAddDialog = ref(false);
    function exitGroup() {
      ElMessageBox.confirm(isTheGroupOwner.value ? "\u662F\u5426\u89E3\u6563\u8BE5\u7FA4\u804A\uFF1F" : "\u662F\u5426\u9000\u51FA\u8BE5\u7FA4\u804A\uFF1F", {
        center: true,
        confirmButtonText: isTheGroupOwner.value ? "\u89E3\u6563" : "\u9000\u51FA",
        cancelButtonText: "\u53D6\u6D88",
        lockScroll: false,
        callback: async (action) => {
          if (action === "confirm") {
            const res = await exitRoomGroup(chat.theContact.roomId, user.getToken);
            if (res.code === StatusCode.SUCCESS) {
              ElNotification.success("\u64CD\u4F5C\u6210\u529F\uFF01");
              chat.setContact();
              chat.contactList = chat.contactList.filter((e) => e.roomId !== chat.theContact.roomId);
            }
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ListAutoIncre = _sfc_main$g;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_tag = ElTag;
      const _component_btn_el_button = __nuxt_component_2$1;
      const _component_LazyChatNewGroupDialog = __nuxt_component_5_lazy;
      const _component_LazyChatFriendApplyDialog = __nuxt_component_6_lazy;
      if (unref(chat).theContact.type === ("RoomType" in _ctx ? _ctx.RoomType : unref(RoomType)).GROUP && unref(setting).isOpenGroupMember) {
        _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "group flex flex-col animate-[fade-in-right_300ms] gap-2 p-2 transition-200 transition-width sm:relative sm:w-1/5 sm:flex-col sm:p-4" }, _attrs))} data-v-2db30174><div flex-row-bt-c flex-col gap-4 truncate pb-1rem pt-2 sm:flex-row data-v-2db30174><i class="sm:h-1.8em sm:w-1.8em" data-v-2db30174></i><span data-v-2db30174> \u7FA4\u6210\u5458 </span><div class="rounded-2rem p-1.5 transition-all border-default sm:border-0 group-hover:op-100 sm:op-0" data-v-2db30174><i class="block h-1.8em w-1.8em rounded-2rem btn-info sm:h-1.6em sm:w-1.6em border-default" i-carbon:add-large data-v-2db30174></i></div></div>`);
        _push(ssrRenderComponent(_component_el_scrollbar, {
          height: "100%",
          class: "mx-a h-70vh max-w-full w-fit w-full md:w-full",
          "view-class": "max-w-full mx-a  tracking-0.1em flex flex-col gap-2",
          "wrap-class": "w-full mx-a"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ListAutoIncre, {
                immediate: true,
                "auto-stop": true,
                "no-more": unref(pageInfo).isLast,
                loading: unref(isLoading),
                onLoad: loadData
              }, {
                done: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p mx-a hidden truncate text-center text-0.8em op-60 sm:block data-v-2db30174${_scopeId2}> \u6682\u65E0\u66F4\u591A </p>`);
                  } else {
                    return [
                      createVNode("p", {
                        "mx-a": "",
                        hidden: "",
                        truncate: "",
                        "text-center": "",
                        "text-0.8em": "",
                        "op-60": "",
                        "sm:block": ""
                      }, " \u6682\u65E0\u66F4\u591A ")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(merberList), (p) => {
                      _push3(`<div class="${ssrRenderClass([p.activeStatus === ("ChatOfflineType" in _ctx ? _ctx.ChatOfflineType : unref(ChatOfflineType)).ONLINE ? "live" : "op-50 filter-grayscale filter-grayscale-100 ", "user-card flex-shrink-0"])}" data-v-2db30174${_scopeId2}><div class="relative flex-row-c-c" data-v-2db30174${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_CardElImage, {
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                        fit: "cover",
                        class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="g-avatar" data-v-2db30174${_scopeId2}></span></div><small hidden truncate md:inline-block data-v-2db30174${_scopeId2}>${ssrInterpolate(p.nickName || "\u672A\u586B\u5199")}</small><div class="tags ml-a block hidden pl-1 sm:block" data-v-2db30174${_scopeId2}>`);
                      if (p.userId === unref(user).userInfo.id) {
                        _push3(ssrRenderComponent(_component_el_tag, {
                          class: "mr-1",
                          style: { "font-size": "0.6em" },
                          size: "small",
                          type: "warning"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` \u6211 `);
                            } else {
                              return [
                                createTextVNode(" \u6211 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      if (p.roleType !== null && p.roleType !== unref(ChatRoomRoleEnum).MEMBER) {
                        _push3(ssrRenderComponent(_component_el_tag, {
                          class: "mr-1",
                          style: { "font-size": "0.6em" },
                          size: "small",
                          effect: "dark",
                          type: "info"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(unref(chatRoomRoleEnumMap)[p.roleType || unref(ChatRoomRoleEnum).MEMBER])}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(chatRoomRoleEnumMap)[p.roleType || unref(ChatRoomRoleEnum).MEMBER]), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(merberList), (p) => {
                        return openBlock(), createBlock("div", {
                          key: p.userId,
                          class: [p.activeStatus === ("ChatOfflineType" in _ctx ? _ctx.ChatOfflineType : unref(ChatOfflineType)).ONLINE ? "live" : "op-50 filter-grayscale filter-grayscale-100 ", "user-card flex-shrink-0"],
                          onContextmenu: ($event) => onContextMenu($event, p),
                          onClick: ($event) => onContextMenu($event, p)
                        }, [
                          createVNode("div", { class: "relative flex-row-c-c" }, [
                            createVNode(_component_CardElImage, {
                              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                              fit: "cover",
                              class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                            }, null, 8, ["src"]),
                            createVNode("span", { class: "g-avatar" })
                          ]),
                          createVNode("small", {
                            hidden: "",
                            truncate: "",
                            "md:inline-block": ""
                          }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1),
                          createVNode("div", { class: "tags ml-a block hidden pl-1 sm:block" }, [
                            p.userId === unref(user).userInfo.id ? (openBlock(), createBlock(_component_el_tag, {
                              key: 0,
                              class: "mr-1",
                              style: { "font-size": "0.6em" },
                              size: "small",
                              type: "warning"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6211 ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            p.roleType !== null && p.roleType !== unref(ChatRoomRoleEnum).MEMBER ? (openBlock(), createBlock(_component_el_tag, {
                              key: 1,
                              class: "mr-1",
                              style: { "font-size": "0.6em" },
                              size: "small",
                              effect: "dark",
                              type: "info"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(chatRoomRoleEnumMap)[p.roleType || unref(ChatRoomRoleEnum).MEMBER]), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ])
                        ], 42, ["onContextmenu", "onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ListAutoIncre, {
                  immediate: true,
                  "auto-stop": true,
                  "no-more": unref(pageInfo).isLast,
                  loading: unref(isLoading),
                  onLoad: loadData
                }, {
                  done: withCtx(() => [
                    createVNode("p", {
                      "mx-a": "",
                      hidden: "",
                      truncate: "",
                      "text-center": "",
                      "text-0.8em": "",
                      "op-60": "",
                      "sm:block": ""
                    }, " \u6682\u65E0\u66F4\u591A ")
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(merberList), (p) => {
                      return openBlock(), createBlock("div", {
                        key: p.userId,
                        class: [p.activeStatus === ("ChatOfflineType" in _ctx ? _ctx.ChatOfflineType : unref(ChatOfflineType)).ONLINE ? "live" : "op-50 filter-grayscale filter-grayscale-100 ", "user-card flex-shrink-0"],
                        onContextmenu: ($event) => onContextMenu($event, p),
                        onClick: ($event) => onContextMenu($event, p)
                      }, [
                        createVNode("div", { class: "relative flex-row-c-c" }, [
                          createVNode(_component_CardElImage, {
                            src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                            fit: "cover",
                            class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "g-avatar" })
                        ]),
                        createVNode("small", {
                          hidden: "",
                          truncate: "",
                          "md:inline-block": ""
                        }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1),
                        createVNode("div", { class: "tags ml-a block hidden pl-1 sm:block" }, [
                          p.userId === unref(user).userInfo.id ? (openBlock(), createBlock(_component_el_tag, {
                            key: 0,
                            class: "mr-1",
                            style: { "font-size": "0.6em" },
                            size: "small",
                            type: "warning"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6211 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          p.roleType !== null && p.roleType !== unref(ChatRoomRoleEnum).MEMBER ? (openBlock(), createBlock(_component_el_tag, {
                            key: 1,
                            class: "mr-1",
                            style: { "font-size": "0.6em" },
                            size: "small",
                            effect: "dark",
                            type: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(chatRoomRoleEnumMap)[p.roleType || unref(ChatRoomRoleEnum).MEMBER]), 1)
                            ]),
                            _: 2
                          }, 1024)) : createCommentVNode("", true)
                        ])
                      ], 42, ["onContextmenu", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["no-more", "loading"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_btn_el_button, {
          class: "op-0 group-hover:op-100",
          "icon-class": "i-solar:logout-3-broken mr-2",
          round: "",
          type: "danger",
          plain: "",
          onClick: ($event) => exitGroup()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span hidden sm:block data-v-2db30174${_scopeId}>${ssrInterpolate(unref(getTheRoleType) === unref(ChatRoomRoleEnum).OWNER ? "\u89E3\u6563\u7FA4\u804A" : "\u9000\u51FA\u7FA4\u804A")}</span>`);
            } else {
              return [
                createVNode("span", {
                  hidden: "",
                  "sm:block": ""
                }, toDisplayString(unref(getTheRoleType) === unref(ChatRoomRoleEnum).OWNER ? "\u89E3\u6563\u7FA4\u804A" : "\u9000\u51FA\u7FA4\u804A"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_LazyChatNewGroupDialog, {
          ref_key: "ChatNewGroupDialogRef",
          ref: ChatNewGroupDialogRef,
          modelValue: unref(showAddDialog),
          "onUpdate:modelValue": ($event) => isRef(showAddDialog) ? showAddDialog.value = $event : null
        }, null, _parent));
        _push(ssrRenderComponent(_component_LazyChatFriendApplyDialog, {
          show: unref(isShowApply),
          "onUpdate:show": ($event) => isRef(isShowApply) ? isShowApply.value = $event : null,
          "user-id": (_a = unref(theUser)) == null ? void 0 : _a.userId
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/RoomGroup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2db30174"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u6781\u7269 - \u804A\u5929 - \u6781\u7269\u5708 \u{1F451}",
      description: "\u6781\u7269 - \u804A\u5929 - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: appKeywords
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$2;
      const _component_ChatContactTabs = _sfc_main$e;
      const _component_ChatContent = __nuxt_component_2;
      const _component_ChatRoomGroup = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "chat" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChatContactTabs, { class: "card-default" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ChatContent, { class: "flex-1 truncate border-0 border-l-1px sm:flex-shrink-0 border-default" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ChatRoomGroup, { class: "bg-white p-4 dark:bg-dark" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ChatContactTabs, { class: "card-default" }),
              createVNode(_component_ChatContent, { class: "flex-1 truncate border-0 border-l-1px sm:flex-shrink-0 border-default" }),
              createVNode(_component_ChatRoomGroup, { class: "bg-white p-4 dark:bg-dark" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main
});

export { addGroupMember as a, addNewGroupRoom as b, index as i };
//# sourceMappingURL=index-1Zpr1Kk6.mjs.map
