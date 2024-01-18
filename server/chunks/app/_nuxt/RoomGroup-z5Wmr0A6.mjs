import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { E as ElRadioGroup, a as ElRadio } from './index-pIjkPV4Z.mjs';
import { _ as _sfc_main$e } from './AutoIncre-z4AO2g2Q.mjs';
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createVNode, Transition, withCtx, withDirectives, createElementVNode, toDisplayString, vShow, useSSRContext, ref, mergeProps, isRef, createBlock, Fragment, renderList, onUnmounted, watch, toRefs, createTextVNode, resolveDynamicComponent, resolveDirective, nextTick, withKeys, createCommentVNode } from 'vue';
import { h as buildProps, j as useNamespace, k as isNumber, w as withInstall, b as _export_sfc, l as _export_sfc$1, u as useUserStore, B as BaseUrlImg, E as ElMessage, S as StatusCode, d as __nuxt_component_2$1, n as navigateTo, m as useAsyncCopyText, o as BaseUrl, p as useHttp } from '../server.mjs';
import { _ as __nuxt_component_1 } from './ElImage-j3i6j_3Z.mjs';
import { R as RoomType, u as useChatStore, M as MessageType, f as getChatContactPage, e as getChatContactInfo, h as getChatMessagePage, j as addChatMessage, i as isChatFriend, _ as _sfc_main$f } from './contact-Lyk8Xsoc.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderStyle, ssrRenderVNode, ssrGetDirectiveProps } from 'vue/server-renderer';
import { a as useIntersectionObserver, w as watchDebounced, b as useDateFormat } from './event-9ZI5GX64.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { u as useColorMode } from './composables-6B_M9sIU.mjs';
import ContextMenu from '@imengyu/vue3-context-menu';
import { u as useWs } from './useWs-gR1LkN1Z.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-d_pUYt5T.mjs';
import { E as ElSelect, a as ElOption } from './index-K-gO0vbs.mjs';
import { _ as __nuxt_component_3$2 } from './OssFileUpload-pldn4U9W.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { O as OssFileType, d as deleteOssFile } from './index-hfRePjpv.mjs';

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
const _sfc_main$d = /* @__PURE__ */ defineComponent({
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
var Badge = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "badge.vue"]]);
const ElBadge = withInstall(Badge);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ContactList",
  __ssrInlineRender: true,
  props: {
    dto: {}
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10
    });
    const contactList = ref([]);
    async function loadData(dto) {
      if (isLoading.value || pageInfo.value.isLast)
        return;
      isLoading.value = true;
      const {
        data
      } = await getChatContactPage(pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list) {
        if ((dto == null ? void 0 : dto.type) === RoomType.GROUP) {
          data.list.forEach((p) => {
            if (p.type === RoomType.GROUP)
              contactList.value.push(p);
          });
        } else if ((dto == null ? void 0 : dto.type) === RoomType.SELFT) {
          data.list.forEach((p) => {
            if (p.type === RoomType.SELFT)
              contactList.value.push(p);
          });
        } else {
          contactList.value.push(...data.list);
        }
      }
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    loadData(props.dto);
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
        const item = contactList.value.find((p) => p.roomId === val);
        if (item)
          contact.setContact(item);
      }
    });
    function reload(size = 20, dto, isAll = true, roomId) {
      if (isAll) {
        contactList.value = [];
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
      const itemIndex = contactList.value.findIndex((p) => p.roomId === roomId);
      if (itemIndex === -1)
        return;
      const res = await getChatContactInfo(roomId, RoomType.GROUP, user.getToken);
      if (res)
        contactList.value[itemIndex] = res.data;
    }
    contact.onReloadContact = reload;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_radio_group = ElRadioGroup;
      const _component_ListAutoIncre = _sfc_main$e;
      const _component_el_radio = ElRadio;
      const _component_el_badge = ElBadge;
      const _component_CardElImage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_el_radio_group, mergeProps({
        modelValue: unref(theContactId),
        "onUpdate:modelValue": ($event) => isRef(theContactId) ? theContactId.value = $event : null,
        class: "w-full"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div w-full flex flex-col data-v-cc675e82${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ListAutoIncre, {
              immediate: true,
              "auto-stop": false,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: ($event) => loadData(_ctx.dto)
            }, {
              done: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<small class="block w-full text-center text-0.8rem opacity-60" data-v-cc675e82${_scopeId2}> \u6682\u65E0\u66F4\u591A </small>`);
                } else {
                  return [createVNode("small", {
                    class: "block w-full text-center text-0.8rem opacity-60"
                  }, " \u6682\u65E0\u66F4\u591A ")];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(contactList), (room) => {
                    _push3(ssrRenderComponent(_component_el_radio, {
                      key: room.roomId,
                      style: {
                        "overflow": "hidden"
                      },
                      border: "",
                      label: room.roomId
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="group w-fit flex gap-2 bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:py-4 text-color" data-v-cc675e82${_scopeId3}>`);
                          if (room.unreadCount) {
                            _push4(ssrRenderComponent(_component_el_badge, {
                              max: 99,
                              value: room.unreadCount,
                              class: "h-2.6rem w-2.6rem flex-shrink-0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_CardElImage, {
                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                    fit: "cover",
                                    class: "h-2.6rem w-2.6rem rounded-1/2 object-cover border-default"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [createVNode(_component_CardElImage, {
                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                                    fit: "cover",
                                    class: "h-2.6rem w-2.6rem rounded-1/2 object-cover border-default"
                                  }, null, 8, ["src"])];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(ssrRenderComponent(_component_CardElImage, {
                              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                              fit: "cover",
                              class: "h-2.6rem w-2.6rem flex-shrink-0 rounded-1/2 object-cover border-default"
                            }, null, _parent4, _scopeId3));
                          }
                          _push4(`<div class="hidden w-2/3 flex-col justify-between truncate pl-4 sm:flex" data-v-cc675e82${_scopeId3}><span overflow-hidden truncate data-v-cc675e82${_scopeId3}>${ssrInterpolate(room.name)}</span><small overflow-hidden truncate op-70 data-v-cc675e82${_scopeId3}>${ssrInterpolate(room.text)}</small></div><span ml-a mt-a hidden w-7em flex-shrink-0 truncate text-right text-0.7em op-35 sm:block group-hover:op-70 data-v-cc675e82${_scopeId3}>${ssrInterpolate(getTime(room.activeTime))}</span></div>`);
                        } else {
                          return [createVNode("div", {
                            class: "group w-fit flex gap-2 bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:py-4 text-color"
                          }, [room.unreadCount ? (openBlock(), createBlock(_component_el_badge, {
                            key: 0,
                            max: 99,
                            value: room.unreadCount,
                            class: "h-2.6rem w-2.6rem flex-shrink-0"
                          }, {
                            default: withCtx(() => [createVNode(_component_CardElImage, {
                              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                              fit: "cover",
                              class: "h-2.6rem w-2.6rem rounded-1/2 object-cover border-default"
                            }, null, 8, ["src"])]),
                            _: 2
                          }, 1032, ["value"])) : (openBlock(), createBlock(_component_CardElImage, {
                            key: 1,
                            src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                            fit: "cover",
                            class: "h-2.6rem w-2.6rem flex-shrink-0 rounded-1/2 object-cover border-default"
                          }, null, 8, ["src"])), createVNode("div", {
                            class: "hidden w-2/3 flex-col justify-between truncate pl-4 sm:flex"
                          }, [createVNode("span", {
                            "overflow-hidden": "",
                            truncate: ""
                          }, toDisplayString(room.name), 1), createVNode("small", {
                            "overflow-hidden": "",
                            truncate: "",
                            "op-70": ""
                          }, toDisplayString(room.text), 1)]), createVNode("span", {
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
                          }, toDisplayString(getTime(room.activeTime)), 1)])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(true), createBlock(Fragment, null, renderList(unref(contactList), (room) => {
                    return openBlock(), createBlock(_component_el_radio, {
                      key: room.roomId,
                      style: {
                        "overflow": "hidden"
                      },
                      border: "",
                      label: room.roomId
                    }, {
                      default: withCtx(() => [createVNode("div", {
                        class: "group w-fit flex gap-2 bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:py-4 text-color"
                      }, [room.unreadCount ? (openBlock(), createBlock(_component_el_badge, {
                        key: 0,
                        max: 99,
                        value: room.unreadCount,
                        class: "h-2.6rem w-2.6rem flex-shrink-0"
                      }, {
                        default: withCtx(() => [createVNode(_component_CardElImage, {
                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                          fit: "cover",
                          class: "h-2.6rem w-2.6rem rounded-1/2 object-cover border-default"
                        }, null, 8, ["src"])]),
                        _: 2
                      }, 1032, ["value"])) : (openBlock(), createBlock(_component_CardElImage, {
                        key: 1,
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                        fit: "cover",
                        class: "h-2.6rem w-2.6rem flex-shrink-0 rounded-1/2 object-cover border-default"
                      }, null, 8, ["src"])), createVNode("div", {
                        class: "hidden w-2/3 flex-col justify-between truncate pl-4 sm:flex"
                      }, [createVNode("span", {
                        "overflow-hidden": "",
                        truncate: ""
                      }, toDisplayString(room.name), 1), createVNode("small", {
                        "overflow-hidden": "",
                        truncate: "",
                        "op-70": ""
                      }, toDisplayString(room.text), 1)]), createVNode("span", {
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
                      }, toDisplayString(getTime(room.activeTime)), 1)])]),
                      _: 2
                    }, 1032, ["label"]);
                  }), 128))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              "w-full": "",
              flex: "",
              "flex-col": ""
            }, [createVNode(_component_ListAutoIncre, {
              immediate: true,
              "auto-stop": false,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: ($event) => loadData(_ctx.dto)
            }, {
              done: withCtx(() => [createVNode("small", {
                class: "block w-full text-center text-0.8rem opacity-60"
              }, " \u6682\u65E0\u66F4\u591A ")]),
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(contactList), (room) => {
                return openBlock(), createBlock(_component_el_radio, {
                  key: room.roomId,
                  style: {
                    "overflow": "hidden"
                  },
                  border: "",
                  label: room.roomId
                }, {
                  default: withCtx(() => [createVNode("div", {
                    class: "group w-fit flex gap-2 bg-white p-2 transition-200 transition-shadow sm:w-full dark:bg-dark md:py-4 text-color"
                  }, [room.unreadCount ? (openBlock(), createBlock(_component_el_badge, {
                    key: 0,
                    max: 99,
                    value: room.unreadCount,
                    class: "h-2.6rem w-2.6rem flex-shrink-0"
                  }, {
                    default: withCtx(() => [createVNode(_component_CardElImage, {
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                      fit: "cover",
                      class: "h-2.6rem w-2.6rem rounded-1/2 object-cover border-default"
                    }, null, 8, ["src"])]),
                    _: 2
                  }, 1032, ["value"])) : (openBlock(), createBlock(_component_CardElImage, {
                    key: 1,
                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + room.avatar,
                    fit: "cover",
                    class: "h-2.6rem w-2.6rem flex-shrink-0 rounded-1/2 object-cover border-default"
                  }, null, 8, ["src"])), createVNode("div", {
                    class: "hidden w-2/3 flex-col justify-between truncate pl-4 sm:flex"
                  }, [createVNode("span", {
                    "overflow-hidden": "",
                    truncate: ""
                  }, toDisplayString(room.name), 1), createVNode("small", {
                    "overflow-hidden": "",
                    truncate: "",
                    "op-70": ""
                  }, toDisplayString(room.text), 1)]), createVNode("span", {
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
                  }, toDisplayString(getTime(room.activeTime)), 1)])]),
                  _: 2
                }, 1032, ["label"]);
              }), 128))]),
              _: 1
            }, 8, ["no-more", "loading", "onLoad"])])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ContactList.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-cc675e82"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ContactTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMenu = ref("all");
    const menuList = ref([{
      name: "all",
      title: "\u5168\u90E8"
    }, {
      name: "group",
      title: "\u7FA4\u804A",
      dto: {
        type: RoomType.GROUP
      }
    }, {
      name: "self",
      title: "\u4E2A\u4EBA",
      dto: {
        type: RoomType.SELFT
      }
    }]);
    const fold = ref(false);
    useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ChatContactList = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["group relative overflow-hidden transition-200 transition-width", unref(fold) ? "w-0" : "w-2/7 max-w-2/7"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        style: !unref(fold) ? null : {
          display: "none"
        },
        modelValue: unref(activeMenu),
        "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
        "tab-position": "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(menuList), (p, i) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: i,
                class: "w-full transform-origin-center-top animate-[300ms_zoom-in]",
                lazy: "",
                name: p.name,
                label: p.title
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_scrollbar, {
                      "view-class": " tracking-0.1em pr-2",
                      "wrap-class": "w-full"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_ChatContactList, {
                            dto: p.dto
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [createVNode(_component_ChatContactList, {
                            dto: p.dto
                          }, null, 8, ["dto"])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [createVNode(_component_el_scrollbar, {
                      "view-class": " tracking-0.1em pr-2",
                      "wrap-class": "w-full"
                    }, {
                      default: withCtx(() => [createVNode(_component_ChatContactList, {
                        dto: p.dto
                      }, null, 8, ["dto"])]),
                      _: 2
                    }, 1024)];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(menuList), (p, i) => {
              return openBlock(), createBlock(_component_el_tab_pane, {
                key: i,
                class: "w-full transform-origin-center-top animate-[300ms_zoom-in]",
                lazy: "",
                name: p.name,
                label: p.title
              }, {
                default: withCtx(() => [createVNode(_component_el_scrollbar, {
                  "view-class": " tracking-0.1em pr-2",
                  "wrap-class": "w-full"
                }, {
                  default: withCtx(() => [createVNode(_component_ChatContactList, {
                    dto: p.dto
                  }, null, 8, ["dto"])]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1032, ["name", "label"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="absolute right-0 top-0 z-99 cursor-pointer border py-2rem hover:text-[var(--el-color-info)]" h-full flex flex-col justify-between><i opacity-100 transition-300 group-hover:opacity-100 md:opacity-0 class="i-solar:refresh-outline float-right block h-5 w-5 cursor-pointer bg-[var(--el-color-info)] transition-300 hover:rotate-180 text-color"></i><i transition="all op-60 group-hover:op-100 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" i-solar:alt-arrow-left-bold p-3 class="${ssrRenderClass({
        "rotate-180": unref(fold)
      })}"></i><span p-1></span></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/ContactTabs.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DisAutoIncre",
  __ssrInlineRender: true,
  props: {
    noMore: {
      type: Boolean,
      default: false
    },
    immediate: {
      type: Boolean,
      default: true
    },
    delay: {
      default: 400
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingClass: {
      default: "mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-primary)]"
    },
    autoStop: {
      type: Boolean,
      default: true
    }
  },
  emits: ["load"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const loadMoreRef = ref();
    let timer = Date.now();
    const {
      stop,
      isSupported
    } = useIntersectionObserver(loadMoreRef, ([obj]) => {
      if (obj.isIntersecting)
        requestAnimationFrame(callBack);
      else
        timer && clearInterval(timer);
    });
    function callBack() {
      const now = Date.now();
      if (now - timer < props.delay)
        return;
      if (props.noMore && props.autoStop) {
        cancelAnimationFrame(timer);
        stop && stop();
      } else {
        timer = now;
        emit("load");
      }
    }
    if (props.immediate)
      emit("load");
    onUnmounted(() => {
      cancelAnimationFrame(timer);
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
    __expose({
      stop,
      loadMoreRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (_ctx.loading) {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/DisAutoIncre.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AiMsg",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const {
      data
    } = toRefs(props);
    useChatStore();
    const user = useUserStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD HH:mm:ss").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    useColorMode();
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
        "flex-shrink-0": "",
        "gap-4": "",
        "p-2": "",
        "py-3": "",
        "transition-300": "",
        "transition-transform": "",
        "active:scale-95": ""
      }))} data-v-e849e77c>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(data).fromUser.avatar,
        fit: "cover",
        class: "avatar h-2.4rem w-2.4rem flex-shrink-0 rounded-1/2 object-cover border-default"
      }, null, _parent));
      _push(`<div class="flex flex-shrink-0 flex-col" data-v-e849e77c><div class="mb-2 block flex flex-row items-center gap-2" data-v-e849e77c><small data-v-e849e77c>${ssrInterpolate(unref(data).fromUser.nickName)}</small>`);
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
              return [createTextVNode(" \u81EA\u5DF1 ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="self-child msg-popper w-fit p-2 px-4 leading-1.2em shadow-sm card-default" data-v-e849e77c>${ssrInterpolate(unref(data).message.content)}</p>`);
      if ((_d = unref(body)) == null ? void 0 : _d.reply) {
        _push(`<small mt-2 class="cursor-pointer truncate px-2 py-1 op-70 border-default card-default" data-v-e849e77c> \u56DE\u590D: ${ssrInterpolate(`${unref(body).reply.nickName}:${((_e = unref(body).reply) == null ? void 0 : _e.body) || ""}`)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.index % 8 === 0) {
        _push(`<p w-full py-2 text-center text-0.8em op-80 data-v-e849e77c>${ssrInterpolate(getTime(unref(data).message.sendTime))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/AiMsg.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ChatMsgAiMsg = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e849e77c"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Img",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const {
      data
    } = toRefs(props);
    useChatStore();
    const user = useUserStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD HH:mm:ss").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    useColorMode();
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
      }))} data-v-154c941a>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(data).fromUser.avatar,
        fit: "cover",
        class: "avatar h-2.4rem w-2.4rem rounded-1/2 object-cover border-default"
      }, null, _parent));
      _push(`<div class="flex flex-col" data-v-154c941a><div class="mb-2 block flex flex-row items-center gap-2" data-v-154c941a><small data-v-154c941a>${ssrInterpolate(unref(data).fromUser.nickName)}</small>`);
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
              return [createTextVNode(" \u81EA\u5DF1 ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="self-child msg-popper w-fit p-3 shadow-sm card-default" style="${ssrRenderStyle({
        "border-radius": "6px"
      })}" data-v-154c941a>`);
      if (unref(body).url) {
        _push(ssrRenderComponent(_component_CardElImage, {
          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(body).url,
          class: "h-8rem w-8rem border-default v-card",
          "preview-teleported": "",
          alt: unref(body).url,
          "preview-src-list": [("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(body).url]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p mt-2 leading-1.2em data-v-154c941a>${ssrInterpolate(unref(data).message.content)}</p></div>`);
      if ((_d = unref(body)) == null ? void 0 : _d.reply) {
        _push(`<small mt-2 class="cursor-pointer truncate px-2 py-1 op-70 border-default card-default" data-v-154c941a> \u56DE\u590D: ${ssrInterpolate(`${unref(body).reply.nickName}:${((_e = unref(body).reply) == null ? void 0 : _e.body) || ""}`)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.index % 8 === 0) {
        _push(`<p w-full py-2 text-center text-0.8em op-80 data-v-154c941a>${ssrInterpolate(getTime(unref(data).message.sendTime))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Img.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ChatMsgImg = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-154c941a"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Recall",
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
      }, _attrs))} data-v-fe0ffe77><span class="rounded-1em px-4 py-1 text-0.8rem font-500 op-60 border-default card-default" data-v-fe0ffe77>${ssrInterpolate((_b = (_a = _ctx.data) == null ? void 0 : _a.message) == null ? void 0 : _b.content)}</span></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Recall.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ChatMsgRecall = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-fe0ffe77"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Text",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const {
      data
    } = toRefs(props);
    useChatStore();
    const user = useUserStore();
    const nowDate = Date.now();
    function getTime(time) {
      return nowDate - +time > 24 * 3600 ? useDateFormat(time, "YYYY-MM-DD HH:mm:ss").value.toString() : useDateFormat(time, "HH:mm:ss").value.toString();
    }
    useColorMode();
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
      }))} data-v-aa241f3c>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(data).fromUser.avatar,
        fit: "cover",
        class: "avatar h-2.4rem w-2.4rem flex-shrink-0 rounded-1/2 object-cover border-default"
      }, null, _parent));
      _push(`<div class="flex flex-col" data-v-aa241f3c><div class="mb-2 block flex flex-row items-center gap-2" data-v-aa241f3c><small data-v-aa241f3c>${ssrInterpolate(unref(data).fromUser.nickName)}</small>`);
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
              return [createTextVNode(" \u81EA\u5DF1 ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="self-child msg-popper w-fit p-2 px-4 leading-1.2em shadow-sm card-default" data-v-aa241f3c>${ssrInterpolate(unref(data).message.content)}</p>`);
      if ((_d = unref(body)) == null ? void 0 : _d.reply) {
        _push(`<small mt-2 class="cursor-pointer truncate px-2 py-1 op-70 border-default card-default" data-v-aa241f3c> \u56DE\u590D: ${ssrInterpolate(`${unref(body).reply.nickName}:${((_e = unref(body).reply) == null ? void 0 : _e.body) || ""}`)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.index % 8 === 0) {
        _push(`<p w-full py-2 text-center text-0.8em op-80 data-v-aa241f3c>${ssrInterpolate(getTime(unref(data).message.sendTime))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Text.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ChatMsgText = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-aa241f3c"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Main",
  __ssrInlineRender: true,
  props: {
    data: {},
    index: {}
  },
  setup(__props) {
    const map = {
      [MessageType.TEXT]: ChatMsgText,
      [MessageType.RECALL]: ChatMsgRecall,
      [MessageType.IMG]: ChatMsgImg,
      [MessageType.AI_CHAT]: ChatMsgAiMsg
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(map[((_a = _ctx.data.message) == null ? void 0 : _a.type) || unref(MessageType).TEXT]), mergeProps({
        index: _ctx.index,
        data: _ctx.data
      }, _ctx.$attrs, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Msg/Main.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MessageList",
  __ssrInlineRender: true,
  setup(__props, {
    expose: __expose
  }) {
    const chat = useChatStore();
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 20
    });
    async function loadData() {
      var _a;
      if (isLoading.value || pageInfo.value.isLast || !chat.theContact.roomId)
        return;
      isLoading.value = true;
      const {
        data
      } = await getChatMessagePage(chat.theContact.roomId, pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list && data.list.length)
        chat.theContact.msgList.unshift(...data.list);
      if (!data.isLast && (data == null ? void 0 : data.list) && chat.theContact.msgList.length === ((_a = data == null ? void 0 : data.list) == null ? void 0 : _a.length))
        chat.scrollBottom();
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    watch(() => chat.theContact.roomId, (val) => {
      reload();
      if (val)
        chat.setReadList(val);
    }, {
      immediate: false
    });
    function reload() {
      chat.theContact.msgList.splice(0);
      pageInfo.value = {
        cursor: null,
        isLast: false,
        size: 20
      };
      loadData();
    }
    const ws = useWs();
    watch(() => ws.wsMsgList.newMsg, (val) => {
      for (const p of val) {
        if (p.message.roomId !== chat.theContact.roomId || p.fromUser.userId === user.userInfo.id)
          continue;
        const msg = findMsg(p.message.id);
        if (!msg) {
          chat.theContact.msgList.push(p);
          chat.setReadList(chat.theContact.roomId);
          chat.onReloadContact(void 0, void 0, false, p.message.roomId);
          return;
        } else {
          chat.onReloadContact(void 0, void 0, false, p.message.roomId);
        }
      }
    }, {
      deep: true
    });
    watch(() => ws.wsMsgList.recallMsg, (val) => {
      for (const p of val) {
        if (p.roomId !== chat.theContact.roomId || p.recallUid === user.userInfo.id)
          continue;
        const msg = findMsg(p.msgId);
        if (msg) {
          msg.message.type = MessageType.RECALL;
          msg.message.content = `${chat.theContact.type === RoomType.GROUP ? `"${msg.fromUser.nickName}"` : '"\u5BF9\u65B9"'}\u64A4\u56DE\u4E86\u4E00\u6761\u6D88\u606F`;
          msg.message.body = void 0;
          ws.wsMsgList.recallMsg = ws.wsMsgList.recallMsg.filter((k) => k.msgId !== p.msgId);
          return;
        }
      }
    }, {
      deep: true
    });
    function appendMsg(data) {
      if (data)
        chat.theContact.msgList.push(data);
    }
    function findMsg(msgId) {
      return chat.theContact.msgList.find((p) => p.message.id === msgId);
    }
    __expose({
      reload,
      appendMsg,
      findMsg
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListDisAutoIncre = _sfc_main$a;
      const _component_ChatMsgMain = _sfc_main$5;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        relative: ""
      }, _ctx.$attrs, {
        "w-full": "",
        flex: "",
        "flex-col": ""
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate, {
        duration: 300,
        easing: "cubic-bezier(0.61, 0.225, 0.195, 1.19)"
      })))}>`);
      _push(ssrRenderComponent(_component_ListDisAutoIncre, {
        "auto-stop": false,
        "no-more": unref(pageInfo).isLast,
        loading: unref(isLoading) || !unref(pageInfo).isLast,
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
                data: msg
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(chat).theContact.msgList, (msg, i) => {
              return openBlock(), createBlock(_component_ChatMsgMain, {
                id: `chat-msg-${msg.message.id}`,
                key: msg.message.id,
                index: i,
                data: msg
              }, null, 8, ["id", "index", "data"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/MessageList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/MsgContentCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7491fff6"]]);
function getRoomGroupUserPage(roomId = null, pageSize = 10, cursor = null, token) {
  return useHttp.get("/chat/room/group/member/page", {
    roomId,
    pageSize,
    cursor
  }, {
    headers: {
      Authorization: token
    }
  });
}
var ChatOfflineType = /* @__PURE__ */ ((ChatOfflineType2) => {
  ChatOfflineType2[ChatOfflineType2["ONLINE"] = 1] = "ONLINE";
  ChatOfflineType2[ChatOfflineType2["OFFLINE"] = 0] = "OFFLINE";
  return ChatOfflineType2;
})(ChatOfflineType || {});
function getRoomGroupAllUser(roomId, token) {
  return useHttp.get(`/chat/room/group/member/list/${roomId}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MsgForm",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, {
    emit: __emit
  }) {
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
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate(async (action) => {
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
      reloadForm();
      timer = setTimeout(() => {
        var _a;
        chat.scrollBottom();
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }, 800);
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
        body: {}
      };
      imgList.value.splice(0);
      chat.atUserList.splice(0);
      chat.setReplyMsg({});
    }
    function setReadAll() {
      if (chat.theContact.roomId) {
        chat.setReadList(chat.theContact.roomId);
        setTimeout(() => {
          chat.scrollBottom();
        }, 400);
      }
    }
    const ws = useWs();
    const isNewMsg = computed(() => {
      return ws.wsMsgList.newMsg.filter((item) => item.roomId === chat.theContact.roomId && item.fromUser.userId === user.userInfo.id).length;
    });
    const colorMode = useColorMode();
    function onContextMenu(e, key, index = 0) {
      e.preventDefault();
      const opt = {
        x: e.x,
        y: e.y,
        theme: colorMode.preference === "dark" ? "mac dark" : "wind10",
        items: [{
          label: "\u5220\u9664",
          onClick: async () => {
            if (!key)
              return;
            const res = await deleteOssFile(key, user.getToken);
            if (res.code === StatusCode.SUCCESS) {
              imgList.value.splice(index, 1);
              ElMessage.success("\u5220\u9664\u6210\u529F");
            } else if (res.code === StatusCode.DELETE_ERR) {
              imgList.value.splice(index, 1);
            }
            inputOssFileUploadRef == null ? void 0 : inputOssFileUploadRef.value.resetInput();
          }
        }]
      };
      ContextMenu.showContextMenu(opt);
    }
    const isDisabled = computed(() => !(user == null ? void 0 : user.isLogin));
    const userList = ref([]);
    function loadUser() {
      if (!chat.theContact.roomId)
        return;
      getRoomGroupAllUser(chat.theContact.roomId, user.getToken).then((res) => {
        if (res.code === StatusCode.SUCCESS)
          userList.value = res.data;
      }).catch(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_tag = ElTag;
      const _component_CardElImage = __nuxt_component_1;
      const _component_ChatMsgContentCard = __nuxt_component_4$1;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_InputOssFileUpload = __nuxt_component_3$2;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_el_input = ElInput;
      const _component_BtnElButton = __nuxt_component_2$1;
      const _directive_auth = resolveDirective("auth");
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        model: unref(form),
        disabled: unref(isDisabled),
        class: "absolute bottom-0 left-0 z-1 mt-2 w-full",
        onSubmit
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_auth)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (unref(isNewMsg) > 0) {
              _push2(ssrRenderComponent(_component_el_form_item, {
                class: "w-full cursor-pointer",
                style: {
                  "padding": "0 0.5rem",
                  "margin": "0",
                  "margin-bottom": "0.4rem",
                  "display": "flex",
                  "justify-content": "right"
                },
                onClick: setReadAll
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_tag, {
                      type: "info",
                      effect: "dark",
                      round: "",
                      class: "ml-a"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u6709${ssrInterpolate(unref(isNewMsg))}\u6761\u65B0\u6D88\u606F `);
                        } else {
                          return [createTextVNode(" \u6709" + toDisplayString(unref(isNewMsg)) + "\u6761\u65B0\u6D88\u606F ", 1)];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [createVNode(_component_el_tag, {
                      type: "info",
                      effect: "dark",
                      round: "",
                      class: "ml-a"
                    }, {
                      default: withCtx(() => [createTextVNode(" \u6709" + toDisplayString(unref(isNewMsg)) + "\u6761\u65B0\u6D88\u606F ", 1)]),
                      _: 1
                    })];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(imgList).length > 0) {
              _push2(ssrRenderComponent(_component_el_form_item, {
                class: "w-full cursor-pointer",
                style: {
                  "padding": "0 0.5rem",
                  "margin": "0",
                  "margin-bottom": "0.4rem",
                  "display": "flex",
                  "justify-content": "center",
                  "grid-gap": "0.2rem",
                  "margin-left": "auto"
                }
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
                    return [(openBlock(true), createBlock(Fragment, null, renderList(unref(imgList), (img, i) => {
                      return openBlock(), createBlock(_component_CardElImage, {
                        key: i,
                        "preview-teleported": "",
                        loading: "lazy",
                        "preview-src-list": [img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key],
                        src: img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key,
                        class: "ml-a h-8rem w-8rem overflow-hidden rounded-6px p-2 border-default card-default",
                        onContextmenu: ($event) => onContextMenu($event, img.key, i)
                      }, null, 8, ["preview-src-list", "src", "onContextmenu"]);
                    }), 128))];
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
                style: {
                  "padding": "0.4rem",
                  "margin": "0",
                  "margin-bottom": "0.2rem",
                  "display": "flex"
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full flex animate-[300ms_fade-in] items-center rounded-6px bg-[#ffffff9c] p-2 shadow backdrop-blur-10px border-default dark:bg-dark" data-v-46237e29${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_tag, {
                      effect: "dark",
                      class: "mr-2"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u56DE\u590D `);
                        } else {
                          return [createTextVNode(" \u56DE\u590D ")];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_ChatMsgContentCard, {
                      class: "w-4/5 truncate",
                      data: unref(chat).replyMsg
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="i-solar:close-circle-bold text-dark op-80 transition-200 transition-color btn-default dark:text-light hover:text-[var(--el-color-danger)]" h-2em w-2em data-v-46237e29${_scopeId2}></div></div>`);
                  } else {
                    return [createVNode("div", {
                      class: "w-full flex animate-[300ms_fade-in] items-center rounded-6px bg-[#ffffff9c] p-2 shadow backdrop-blur-10px border-default dark:bg-dark"
                    }, [createVNode(_component_el_tag, {
                      effect: "dark",
                      class: "mr-2"
                    }, {
                      default: withCtx(() => [createTextVNode(" \u56DE\u590D ")]),
                      _: 1
                    }), createVNode(_component_ChatMsgContentCard, {
                      class: "w-4/5 truncate",
                      data: unref(chat).replyMsg
                    }, null, 8, ["data"]), createVNode("div", {
                      class: "i-solar:close-circle-bold text-dark op-80 transition-200 transition-color btn-default dark:text-light hover:text-[var(--el-color-danger)]",
                      "h-2em": "",
                      "w-2em": "",
                      onClick: ($event) => unref(chat).setReplyMsg({})
                    }, null, 8, ["onClick"])])];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col rounded-b-0 px-4 py-2 shadow card-default" data-v-46237e29${_scopeId}><div class="relative flex" data-v-46237e29${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
              style: {
                "padding": "0",
                "margin": "0"
              },
              prop: "body.atUidList",
              class: "at-select w-12rem"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_select, {
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
                    onFocus: loadUser,
                    onChange: (val) => unref(form).body.atUidList = val.map((p) => p.userId)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(userList), (p) => {
                          _push4(ssrRenderComponent(_component_el_option, {
                            key: p.userId,
                            label: `@${p.nickName}`,
                            value: p
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [(openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: p.userId,
                            label: `@${p.nickName}`,
                            value: p
                          }, null, 8, ["label", "value"]);
                        }), 128))];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_el_select, {
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
                    onFocus: loadUser,
                    onChange: (val) => unref(form).body.atUidList = val.map((p) => p.userId)
                  }, {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: p.userId,
                        label: `@${p.nickName}`,
                        value: p
                      }, null, 8, ["label", "value"]);
                    }), 128))]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              style: {
                "padding": "0",
                "margin": "0",
                "margin-left": "0.4em"
              },
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
                  return [createVNode(_component_InputOssFileUpload, {
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
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "upload-type", "onErrorMsg"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div w-full flex items-center gap-3 data-v-46237e29${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/user/info"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardElImage, {
                    src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : "",
                    class: "h-2.4rem w-2.4rem rounded-1/2 border-default"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_CardElImage, {
                    src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : "",
                    class: "h-2.4rem w-2.4rem rounded-1/2 border-default"
                  }, null, 8, ["src"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "content",
              class: "w-full"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d, _e, _f;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    ref_key: "inputRef",
                    ref: inputRef,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    modelModifiers: {
                      lazy: true
                    },
                    rows: ((_a2 = unref(form)) == null ? void 0 : _a2.content) && ((_c = (_b2 = unref(form)) == null ? void 0 : _b2.content) == null ? void 0 : _c.length) > 30 ? 4 : 1,
                    maxlength: 500,
                    type: "textarea",
                    placeholder: "\u6765\u804A\u70B9\u4EC0\u4E48\u5427 \u2728",
                    class: "input pt-4",
                    onKeyup: ($event) => onSubmit()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_el_input, {
                    ref_key: "inputRef",
                    ref: inputRef,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    modelModifiers: {
                      lazy: true
                    },
                    rows: ((_d = unref(form)) == null ? void 0 : _d.content) && ((_f = (_e = unref(form)) == null ? void 0 : _e.content) == null ? void 0 : _f.length) > 30 ? 4 : 1,
                    maxlength: 500,
                    type: "textarea",
                    placeholder: "\u6765\u804A\u70B9\u4EC0\u4E48\u5427 \u2728",
                    class: "input pt-4",
                    onKeyup: withKeys(($event) => onSubmit(), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rows", "onKeyup"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BtnElButton, {
              round: "",
              disabled: !unref(user).isLogin,
              class: "group ml-a",
              "icon-class": "i-solar:map-arrow-right-bold-duotone block -rotate-45 mr-1",
              type: "info",
              onClick: ($event) => onSubmit()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D1\u9001\xA0 `);
                } else {
                  return [createTextVNode(" \u53D1\u9001\xA0 ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [unref(isNewMsg) > 0 ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              class: "w-full cursor-pointer",
              style: {
                "padding": "0 0.5rem",
                "margin": "0",
                "margin-bottom": "0.4rem",
                "display": "flex",
                "justify-content": "right"
              },
              onClick: setReadAll
            }, {
              default: withCtx(() => [createVNode(_component_el_tag, {
                type: "info",
                effect: "dark",
                round: "",
                class: "ml-a"
              }, {
                default: withCtx(() => [createTextVNode(" \u6709" + toDisplayString(unref(isNewMsg)) + "\u6761\u65B0\u6D88\u606F ", 1)]),
                _: 1
              })]),
              _: 1
            })) : createCommentVNode("", true), unref(imgList).length > 0 ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              class: "w-full cursor-pointer",
              style: {
                "padding": "0 0.5rem",
                "margin": "0",
                "margin-bottom": "0.4rem",
                "display": "flex",
                "justify-content": "center",
                "grid-gap": "0.2rem",
                "margin-left": "auto"
              }
            }, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(imgList), (img, i) => {
                return openBlock(), createBlock(_component_CardElImage, {
                  key: i,
                  "preview-teleported": "",
                  loading: "lazy",
                  "preview-src-list": [img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key],
                  src: img.id || ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + img.key,
                  class: "ml-a h-8rem w-8rem overflow-hidden rounded-6px p-2 border-default card-default",
                  onContextmenu: ($event) => onContextMenu($event, img.key, i)
                }, null, 8, ["preview-src-list", "src", "onContextmenu"]);
              }), 128))]),
              _: 1
            })) : createCommentVNode("", true), ((_b = unref(chat).replyMsg) == null ? void 0 : _b.fromUser) ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2,
              prop: "body.replyMsgId",
              class: "w-full",
              style: {
                "padding": "0.4rem",
                "margin": "0",
                "margin-bottom": "0.2rem",
                "display": "flex"
              }
            }, {
              default: withCtx(() => [createVNode("div", {
                class: "w-full flex animate-[300ms_fade-in] items-center rounded-6px bg-[#ffffff9c] p-2 shadow backdrop-blur-10px border-default dark:bg-dark"
              }, [createVNode(_component_el_tag, {
                effect: "dark",
                class: "mr-2"
              }, {
                default: withCtx(() => [createTextVNode(" \u56DE\u590D ")]),
                _: 1
              }), createVNode(_component_ChatMsgContentCard, {
                class: "w-4/5 truncate",
                data: unref(chat).replyMsg
              }, null, 8, ["data"]), createVNode("div", {
                class: "i-solar:close-circle-bold text-dark op-80 transition-200 transition-color btn-default dark:text-light hover:text-[var(--el-color-danger)]",
                "h-2em": "",
                "w-2em": "",
                onClick: ($event) => unref(chat).setReplyMsg({})
              }, null, 8, ["onClick"])])]),
              _: 1
            })) : createCommentVNode("", true), createVNode("div", {
              class: "flex flex-col rounded-b-0 px-4 py-2 shadow card-default"
            }, [createVNode("div", {
              class: "relative flex"
            }, [createVNode(_component_el_form_item, {
              disabled: unref(form).msgType !== ("MessageType" in _ctx ? _ctx.MessageType : unref(MessageType)).TEXT,
              style: {
                "padding": "0",
                "margin": "0"
              },
              prop: "body.atUidList",
              class: "at-select w-12rem"
            }, {
              default: withCtx(() => [createVNode(_component_el_select, {
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
                onFocus: loadUser,
                onChange: (val) => unref(form).body.atUidList = val.map((p) => p.userId)
              }, {
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: p.userId,
                    label: `@${p.nickName}`,
                    value: p
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onChange"])]),
              _: 1
            }, 8, ["disabled"]), createVNode(_component_el_form_item, {
              style: {
                "padding": "0",
                "margin": "0",
                "margin-left": "0.4em"
              },
              prop: "body.url",
              class: "cursor-pointer"
            }, {
              default: withCtx(() => [createVNode(_component_InputOssFileUpload, {
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
              }, null, 8, ["modelValue", "onUpdate:modelValue", "upload-type", "onErrorMsg"])]),
              _: 1
            })]), createVNode("div", {
              "w-full": "",
              flex: "",
              "items-center": "",
              "gap-3": ""
            }, [createVNode(_component_NuxtLink, {
              to: "/user/info"
            }, {
              default: withCtx(() => [createVNode(_component_CardElImage, {
                src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : "",
                class: "h-2.4rem w-2.4rem rounded-1/2 border-default"
              }, null, 8, ["src"])]),
              _: 1
            }), createVNode(_component_el_form_item, {
              prop: "content",
              class: "w-full"
            }, {
              default: withCtx(() => {
                var _a2, _b2, _c;
                return [createVNode(_component_el_input, {
                  ref_key: "inputRef",
                  ref: inputRef,
                  modelValue: unref(form).content,
                  "onUpdate:modelValue": ($event) => unref(form).content = $event,
                  modelModifiers: {
                    lazy: true
                  },
                  rows: ((_a2 = unref(form)) == null ? void 0 : _a2.content) && ((_c = (_b2 = unref(form)) == null ? void 0 : _b2.content) == null ? void 0 : _c.length) > 30 ? 4 : 1,
                  maxlength: 500,
                  type: "textarea",
                  placeholder: "\u6765\u804A\u70B9\u4EC0\u4E48\u5427 \u2728",
                  class: "input pt-4",
                  onKeyup: withKeys(($event) => onSubmit(), ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "rows", "onKeyup"])];
              }),
              _: 1
            }), createVNode(_component_BtnElButton, {
              round: "",
              disabled: !unref(user).isLogin,
              class: "group ml-a",
              "icon-class": "i-solar:map-arrow-right-bold-duotone block -rotate-45 mr-1",
              type: "info",
              onClick: ($event) => onSubmit()
            }, {
              default: withCtx(() => [createTextVNode(" \u53D1\u9001\xA0 ")]),
              _: 1
            }, 8, ["disabled", "onClick"])])])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/MsgForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-46237e29"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  props: {
    roomId: {}
  },
  setup(__props) {
    const chat = useChatStore();
    const getType = computed(() => {
      var _a;
      let msg = "";
      switch ((_a = chat == null ? void 0 : chat.theContact) == null ? void 0 : _a.type) {
        case RoomType.GROUP:
          msg = "\u7FA4";
          break;
        case RoomType.SELFT:
          msg = "\u4E2A";
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
      var _a;
      (_a = ChatMessageListRef.value) == null ? void 0 : _a.appendMsg(msg);
      scrollBottom();
    }
    const timer = ref(0);
    function scrollReplyMsg(msgId, gapCount = 0) {
      var _a;
      if (!msgId)
        return;
      const offset = -10;
      const el = (void 0).querySelector(`#chat-msg-${msgId}`);
      if (!el || !((_a = ChatMessageListRef.value) == null ? void 0 : _a.findMsg(msgId))) {
        timer.value = setTimeout(() => {
          var _a2;
          (_a2 = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _a2.setScrollTop(0);
          scrollReplyMsg(msgId, gapCount);
          if (el) {
            timer.value && clearTimeout(timer.value);
            timer.value = null;
          }
        }, 400);
      } else {
        timer.value && clearTimeout(timer.value);
        timer.value = null;
      }
      nextTick(() => {
        var _a2, _b, _c, _d, _e;
        el.classList.add("reply-shaing");
        timer.value = setTimeout(() => {
          el.classList.remove("reply-shaing");
          timer.value = null;
        }, 3e3);
        if ((_b = (_a2 = scrollbarRef.value) == null ? void 0 : _a2.wrapRef) == null ? void 0 : _b.scrollTo) {
          (_d = (_c = scrollbarRef.value) == null ? void 0 : _c.wrapRef) == null ? void 0 : _d.scrollTo({
            top: ((el == null ? void 0 : el.offsetTop) || 0) + offset,
            behavior: "smooth"
          });
        } else {
          (_e = scrollbarRef.value) == null ? void 0 : _e.setScrollTop(((el == null ? void 0 : el.offsetTop) || 0) + offset);
        }
      });
    }
    function scrollBottom() {
      timer.value = setTimeout(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        if ((_b = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef) == null ? void 0 : _b.scrollTo) {
          (_f = (_c = scrollbarRef.value) == null ? void 0 : _c.wrapRef) == null ? void 0 : _f.scrollTo({
            top: ((_e = (_d = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _d.wrapRef) == null ? void 0 : _e.scrollHeight) + 20 || 0,
            behavior: "smooth"
          });
        } else {
          (_i = scrollbarRef.value) == null ? void 0 : _i.setScrollTop(((_h = (_g = scrollbarRef == null ? void 0 : scrollbarRef.value) == null ? void 0 : _g.wrapRef) == null ? void 0 : _h.scrollHeight) + 20 || 0);
        }
      }, 300);
    }
    chat.scrollBottom = scrollBottom;
    chat.scrollReplyMsg = scrollReplyMsg;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_tag = ElTag;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ChatMessageList = _sfc_main$4;
      const _component_ChatMsgForm = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative flex flex-col"
      }, _attrs))} data-v-4b1243b6><h4 class="flex-row-bt-c border-0 border-b-1 rounded-0 p-4 border-default card-default md:p-4" data-v-4b1243b6><div flex items-center gap-2 data-v-4b1243b6>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(chat).theContact.avatar,
        class: "h-2.2rem w-2.2rem object-cover border-default card-default"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(chat).theContact.name)} `);
      _push(ssrRenderComponent(_component_el_tag, {
        effect: "dark",
        size: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(getType))}`);
          } else {
            return [createTextVNode(toDisplayString(unref(getType)), 1)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></h4><div class="relative mt-a flex-1 bg-light-5 p-4 shadow-sm dark:bg-dark-9" data-v-4b1243b6>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        "wrap-class": "w-full h-70vh",
        "view-class": "msg-list w-full h-70vh pr-2 "
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(chat).theContact.roomId) {
              _push2(ssrRenderComponent(_component_ChatMessageList, {
                ref_key: "ChatMessageListRef",
                ref: ChatMessageListRef,
                class: "pb-7rem pt-2rem",
                onScrollBottom: scrollBottom
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-full w-full flex items-center justify-center" data-v-4b1243b6${_scopeId}> \u5F00\u542F\u804A\u5929\u5427 </div>`);
            }
          } else {
            return [unref(chat).theContact.roomId ? (openBlock(), createBlock(_component_ChatMessageList, {
              key: 0,
              ref_key: "ChatMessageListRef",
              ref: ChatMessageListRef,
              class: "pb-7rem pt-2rem",
              onScrollBottom: scrollBottom
            }, null, 512)) : (openBlock(), createBlock("div", {
              key: 1,
              class: "h-full w-full flex items-center justify-center"
            }, " \u5F00\u542F\u804A\u5929\u5427 "))];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div flex flex-col data-v-4b1243b6><div class="ml-a w-fit rounded-10px p-1 px-3 btn-primary-bg border-default v-card" data-v-4b1243b6><i i-solar:double-alt-arrow-down-line-duotone p-2 data-v-4b1243b6></i></div>`);
      _push(ssrRenderComponent(_component_ChatMsgForm, {
        onSubmit: onSendMsg
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4b1243b6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RoomGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const chat = useChatStore();
    const fold = ref(false);
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10
    });
    chat.onOfflineList.splice(0);
    async function loadData() {
      if (isLoading.value || pageInfo.value.isLast || chat.theContact.type !== RoomType.GROUP)
        return;
      isLoading.value = true;
      const {
        data
      } = await getRoomGroupUserPage(chat.theContact.roomId, pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list)
        chat.onOfflineList.push(...data.list);
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    function reload() {
      chat.onOfflineList = [];
      pageInfo.value = {
        cursor: null,
        isLast: false,
        size: 10
      };
      isLoading.value = false;
      loadData();
    }
    const theUser = ref();
    const isShowApply = ref();
    const colorMode = useColorMode();
    function onContextMenu(e, item) {
      e.preventDefault();
      ContextMenu.showContextMenu({
        x: e.x,
        y: e.y,
        theme: colorMode.preference === "dark" ? "mac dark" : "wind10",
        items: [{
          label: "\u4E2A\u4EBA\u4E3B\u9875",
          onClick: () => {
            navigateTo({
              path: "/user/info",
              query: {
                id: item.userId
              },
              replace: false
            });
          }
        }, {
          label: "@\u4ED6",
          onClick: () => {
            chat.setAtUid(item);
          }
        }, {
          label: "\u6DFB\u52A0\u597D\u53CB",
          onClick: () => {
            isChatFriend({
              uidList: [item.userId]
            }, user.getToken).then((res) => {
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
        }, {
          label: "\u5176\u4ED6",
          children: [{
            label: "\u5206\u4EAB",
            onClick: async () => {
              await useAsyncCopyText(`${BaseUrl}/user/info?id=${item.userId}`);
              ElMessage.success({
                message: "\u6210\u529F\u590D\u5236\u81F3\u526A\u8D34\u677F\uFF01",
                grouping: true
              });
            }
          }]
        }]
      });
    }
    watchDebounced(() => chat.theContact.roomId, (val) => {
      if (val && chat.theContact.type === RoomType.GROUP)
        reload();
    });
    const ws = useWs();
    watch(() => ws.wsMsgList.onlineNotice, (val) => {
      for (const p of val) {
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
    }, {
      deep: true,
      immediate: false
    });
    const merberList = computed(() => {
      return chat.onOfflineList.sort((a, b) => b.activeStatus - a.activeStatus);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ListAutoIncre = _sfc_main$e;
      const _component_CardElImage = __nuxt_component_1;
      const _component_ChatFriendApplyDialog = _sfc_main$f;
      _push(`<!--[--><div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        class: ["relative flex flex-col gap-2 p-4 transition-200 transition-width", unref(fold) || unref(chat).theContact.type !== ("RoomType" in _ctx ? _ctx.RoomType : unref(RoomType)).GROUP ? "w-0" : "w-1/5"]
      }))} data-v-904808ef><div class="${ssrRenderClass([{
        "": unref(fold)
      }, "block cursor-pointer gap-2 border -ml-4 hover:text-[var(--el-color-info)]"])}" data-v-904808ef><i transition="all  op-60 group-hover:op-100 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" i-solar:signpost-2-line-duotone p-2.2 data-v-904808ef></i><span ml-4em truncate text-center data-v-904808ef>\u7FA4\u6210\u5458</span></div>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        class: "py-2rem",
        "view-class": "h-70vh tracking-0.1em",
        "wrap-class": "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListAutoIncre, {
              immediate: true,
              "auto-stop": false,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: loadData
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(merberList), (p) => {
                    _push3(`<div class="${ssrRenderClass([p.activeStatus === ("ChatOfflineType" in _ctx ? _ctx.ChatOfflineType : unref(ChatOfflineType)).ONLINE ? "live" : "op-50 filter-grayscale filter-grayscale-100 ", "hover:bg-while relative mb-2 flex items-center gap-1 truncate rounded-2rem p-2 filter-grayscale transition-300 transition-all active:scale-96 border-default hover:border-[var(--el-color-primary)] hover:op-100 hover:shadow hover:shadow-inset hover:dark:bg-dark-9"])}" data-v-904808ef${_scopeId2}><div class="relative flex-row-c-c" data-v-904808ef${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_CardElImage, {
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                      fit: "cover",
                      class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span class="g-avatar" data-v-904808ef${_scopeId2}></span></div><small data-v-904808ef${_scopeId2}>${ssrInterpolate(p.nickName || "\u672A\u586B\u5199")}</small></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(true), createBlock(Fragment, null, renderList(unref(merberList), (p) => {
                    return openBlock(), createBlock("div", {
                      key: p.userId,
                      class: ["hover:bg-while relative mb-2 flex items-center gap-1 truncate rounded-2rem p-2 filter-grayscale transition-300 transition-all active:scale-96 border-default hover:border-[var(--el-color-primary)] hover:op-100 hover:shadow hover:shadow-inset hover:dark:bg-dark-9", p.activeStatus === ("ChatOfflineType" in _ctx ? _ctx.ChatOfflineType : unref(ChatOfflineType)).ONLINE ? "live" : "op-50 filter-grayscale filter-grayscale-100 "],
                      onContextmenu: ($event) => onContextMenu($event, p),
                      onClick: ($event) => onContextMenu($event, p)
                    }, [createVNode("div", {
                      class: "relative flex-row-c-c"
                    }, [createVNode(_component_CardElImage, {
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                      fit: "cover",
                      class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                    }, null, 8, ["src"]), createVNode("span", {
                      class: "g-avatar"
                    })]), createVNode("small", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)], 42, ["onContextmenu", "onClick"]);
                  }), 128))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ListAutoIncre, {
              immediate: true,
              "auto-stop": false,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: loadData
            }, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(merberList), (p) => {
                return openBlock(), createBlock("div", {
                  key: p.userId,
                  class: ["hover:bg-while relative mb-2 flex items-center gap-1 truncate rounded-2rem p-2 filter-grayscale transition-300 transition-all active:scale-96 border-default hover:border-[var(--el-color-primary)] hover:op-100 hover:shadow hover:shadow-inset hover:dark:bg-dark-9", p.activeStatus === ("ChatOfflineType" in _ctx ? _ctx.ChatOfflineType : unref(ChatOfflineType)).ONLINE ? "live" : "op-50 filter-grayscale filter-grayscale-100 "],
                  onContextmenu: ($event) => onContextMenu($event, p),
                  onClick: ($event) => onContextMenu($event, p)
                }, [createVNode("div", {
                  class: "relative flex-row-c-c"
                }, [createVNode(_component_CardElImage, {
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                  fit: "cover",
                  class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                }, null, 8, ["src"]), createVNode("span", {
                  class: "g-avatar"
                })]), createVNode("small", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)], 42, ["onContextmenu", "onClick"]);
              }), 128))]),
              _: 1
            }, 8, ["no-more", "loading"])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ChatFriendApplyDialog, {
        show: unref(isShowApply),
        "onUpdate:show": ($event) => isRef(isShowApply) ? isShowApply.value = $event : null,
        "user-id": (_a = unref(theUser)) == null ? void 0 : _a.userId
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/RoomGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-904808ef"]]);

export { _sfc_main$b as _, __nuxt_component_2 as a, __nuxt_component_3 as b };
//# sourceMappingURL=RoomGroup-z5Wmr0A6.mjs.map
