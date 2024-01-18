import { b as _export_sfc, u as useUserStore, s as search_default, B as BaseUrlImg, c as useSeoMeta, E as ElMessage, d as __nuxt_component_2$1, e as __nuxt_component_0$1, f as ElMessageBox, S as StatusCode, g as ElButton, i as isTrue, n as navigateTo, _ as __nuxt_component_0 } from '../server.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { _ as _sfc_main$a } from './AutoIncre-z4AO2g2Q.mjs';
import { _ as __nuxt_component_1$3 } from './ElImage-j3i6j_3Z.mjs';
import { E as ElEmpty } from './empty-YBmMukHu.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, resolveDirective, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, withDirectives, openBlock, createBlock, Fragment, renderList, toDisplayString, watch, renderSlot, createCommentVNode, toRef, resolveDynamicComponent, nextTick } from 'vue';
import { u as useChatStore, F as FriendOptType, C as ChatApplyStatusType, g as getUserSeListByPage, a as getChatFriendPage, b as getChatFriendApplyPage, c as argeeFriendApply, i as isChatFriend, d as deleteFriendById, e as getChatContactInfo, R as RoomType, _ as _sfc_main$b } from './contact-Lyk8Xsoc.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { u as useStorage, w as watchDebounced } from './event-9ZI5GX64.mjs';
import { E as ElRadioGroup } from './index-pIjkPV4Z.mjs';
import { E as ElNotification } from './index-KIyZNhTO.mjs';
import { E as ElDivider } from './divider-PhlLqhAq.mjs';
import { g as getCommUserInfoSe } from './index-yQvNAXVB.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import '@vue/shared';
import 'pinia-plugin-persistedstate';
import 'lodash-unified';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './PreLoading-Sou-hyZj.mjs';
import './index-Jkc1A1yz.mjs';
import './useWs-gR1LkN1Z.mjs';
import './dialog-5eWjtfeR.mjs';
import './vnode-YsXVLyOk.mjs';
import './focus-trap-FUoXuQZs.mjs';
import './aria-sbEPrgvQ.mjs';
import '@vue/reactivity';
import './form-item-d_pUYt5T.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ApplySearch",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, {
    emit: __emit
  }) {
    const emit = __emit;
    const searchKeyWords = ref("");
    const isShowResult = ref(false);
    const searchPage = ref({
      total: 0,
      pages: 0,
      size: 0,
      current: 0
    });
    const searchPageList = reactive([]);
    const user = useUserStore();
    const isLoading = ref(false);
    const page = ref(0);
    const size = ref(10);
    const noMore = computed(() => searchPage.value.total > 0 && searchPageList.length >= searchPage.value.total);
    const searchHistoryList = useStorage("jiwu_chat_friend_user", []);
    async function onSearch() {
      if (!searchKeyWords.value) {
        return ElMessage.error({
          message: "\u641C\u7D22\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
        });
      }
      await reSearch();
      if (!searchHistoryList.value.includes(searchKeyWords.value) && searchHistoryList.value.length <= 6)
        searchHistoryList.value.unshift(searchKeyWords.value.trim());
      else
        searchHistoryList.value.pop();
      await onLoadMore();
    }
    async function onLoadMore() {
      if (noMore.value || isLoading.value)
        return;
      isLoading.value = true;
      page.value++;
      const res = await getUserSeListByPage(page.value, size.value, {
        keyWord: searchKeyWords.value
      }, user.getToken);
      searchPage.value = {
        total: res.data.total,
        pages: res.data.pages,
        size: res.data.size,
        current: res.data.current
      };
      searchPageList.push(...res.data.records);
      isLoading.value = false;
      isShowResult.value = true;
    }
    function clearSearch() {
      isShowResult.value = false;
      searchKeyWords.value = "";
      searchPageList.splice(0);
      searchPage.value = {
        total: 0,
        pages: 0,
        size: 0,
        current: 0
      };
    }
    function reSearch() {
      searchPageList.splice(0);
      searchPage.value = {
        total: 0,
        pages: 0,
        size: 0,
        current: 0
      };
      page.value = 0;
    }
    const isShowModel = ref(false);
    const timer = ref();
    function onBlur() {
      if (isShowModel.value) {
        clearTimeout(timer.value);
        timer.value = null;
      }
      if (!isLoading.value && !searchKeyWords.value)
        isShowModel.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElInput = ElInput;
      const _component_BtnElButton = __nuxt_component_2$1;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_ElScrollbar = ElScrollbar;
      const _component_ListAutoIncre = _sfc_main$a;
      const _component_CardElImage = __nuxt_component_1$3;
      const _component_ElEmpty = ElEmpty;
      const _directive_auto_animate = resolveDirective("auto-animate");
      const _directive_window_lock = resolveDirective("window-lock");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "h-full w-full flex flex-col",
        relative: ""
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_window_lock, unref(isShowResult))))} data-v-6d2b0410><div class="v-input" flex-row-c-c data-v-6d2b0410>`);
      _push(ssrRenderComponent(_component_ElInput, {
        modelValue: unref(searchKeyWords),
        "onUpdate:modelValue": ($event) => isRef(searchKeyWords) ? searchKeyWords.value = $event : null,
        modelModifiers: {
          trim: true
        },
        class: "mr-2",
        type: "text",
        clearable: "",
        autocomplete: "off",
        "prefix-icon": "ElIconSearch" in _ctx ? _ctx.ElIconSearch : unref(search_default),
        minlength: "2",
        maxlength: "30",
        "on-search": onSearch,
        placeholder: "\u641C\u7D22\u597D\u53CB",
        onBlur,
        onFocus: ($event) => isShowModel.value = true,
        onKeyup: [clearSearch, onSearch]
      }, null, _parent));
      _push(ssrRenderComponent(_component_BtnElButton, {
        type: "primary",
        class: "w-5rem text-0.6em shadow",
        style: {
          "position": "relative",
          "transition": "0.2s"
        },
        loading: unref(isLoading),
        "icon-class": "i-solar:magnifer-outline mr-2",
        onFocus: ($event) => isShowModel.value = true,
        onClick: onSearch
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u641C\u7D22 `);
          } else {
            return [createTextVNode(" \u641C\u7D22 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(isShowModel)) {
        _push(`<div class="absolute left-0 top-2rem z-1 h-80vh w-full flex-1 bg-color" data-v-6d2b0410>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`<span style="${ssrRenderStyle(unref(searchPageList).length > 0 ? null : {
          display: "none"
        })}" class="px-2 py-5 text-0.7rem" data-v-6d2b0410>${ssrInterpolate(` \u627E\u5230 ${unref(searchPage).total} \u4E2A\u5339\u914D\u597D\u53CB`)}</span>`);
        _push(ssrRenderComponent(_component_ElScrollbar, {
          style: unref(isShowResult) && unref(searchPage).current && unref(searchPageList).length > 0 ? null : {
            display: "none"
          },
          "wrap-class": "pb-6 flex-1  pr-2 pt-2 overflow-hidden",
          class: "pb-6"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ListAutoIncre, {
                immediate: false,
                "no-more": unref(noMore),
                onLoad: onLoadMore
              }, {
                done: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p text-center text-0.7em op-70 data-v-6d2b0410${_scopeId2}> \u6682\u65E0\u66F4\u591A </p>`);
                  } else {
                    return [createVNode("p", {
                      "text-center": "",
                      "text-0.7em": "",
                      "op-70": ""
                    }, " \u6682\u65E0\u66F4\u591A ")];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div${ssrRenderAttrs(mergeProps({
                      "pt-4": ""
                    }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-6d2b0410${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(searchPageList), (p) => {
                      _push3(`<div class="relative mb-2 flex cursor-pointer items-center gap-4 truncate truncate p-2 px-4 filter-grayscale transition-300 transition-all active:scale-96 border-default hover:border-[var(--el-color-primary)] hover:bg-white hover:op-100 hover:shadow hover:shadow-inset hover:dark:bg-dark-9 v-card" data-v-6d2b0410${_scopeId2}><div class="relative flex-row-c-c" data-v-6d2b0410${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_CardElImage, {
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                        fit: "cover",
                        class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                      }, null, _parent3, _scopeId2));
                      _push3(`<span class="g-avatar" data-v-6d2b0410${_scopeId2}></span></div><small data-v-6d2b0410${_scopeId2}>${ssrInterpolate(p.nickname || p.username)}</small></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [withDirectives((openBlock(), createBlock("div", {
                      "pt-4": ""
                    }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(searchPageList), (p) => {
                      return openBlock(), createBlock("div", {
                        key: p.id,
                        class: "relative mb-2 flex cursor-pointer items-center gap-4 truncate truncate p-2 px-4 filter-grayscale transition-300 transition-all active:scale-96 border-default hover:border-[var(--el-color-primary)] hover:bg-white hover:op-100 hover:shadow hover:shadow-inset hover:dark:bg-dark-9 v-card",
                        onClick: ($event) => emit("submit", p)
                      }, [createVNode("div", {
                        class: "relative flex-row-c-c"
                      }, [createVNode(_component_CardElImage, {
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                        fit: "cover",
                        class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                      }, null, 8, ["src"]), createVNode("span", {
                        class: "g-avatar"
                      })]), createVNode("small", null, toDisplayString(p.nickname || p.username), 1)], 8, ["onClick"]);
                    }), 128))])), [[_directive_auto_animate]])];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [createVNode(_component_ListAutoIncre, {
                immediate: false,
                "no-more": unref(noMore),
                onLoad: onLoadMore
              }, {
                done: withCtx(() => [createVNode("p", {
                  "text-center": "",
                  "text-0.7em": "",
                  "op-70": ""
                }, " \u6682\u65E0\u66F4\u591A ")]),
                default: withCtx(() => [withDirectives((openBlock(), createBlock("div", {
                  "pt-4": ""
                }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(searchPageList), (p) => {
                  return openBlock(), createBlock("div", {
                    key: p.id,
                    class: "relative mb-2 flex cursor-pointer items-center gap-4 truncate truncate p-2 px-4 filter-grayscale transition-300 transition-all active:scale-96 border-default hover:border-[var(--el-color-primary)] hover:bg-white hover:op-100 hover:shadow hover:shadow-inset hover:dark:bg-dark-9 v-card",
                    onClick: ($event) => emit("submit", p)
                  }, [createVNode("div", {
                    class: "relative flex-row-c-c"
                  }, [createVNode(_component_CardElImage, {
                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                    fit: "cover",
                    class: "h-2.2em w-2.2em flex-shrink-0 overflow-auto rounded-1/2 object-cover border-default"
                  }, null, 8, ["src"]), createVNode("span", {
                    class: "g-avatar"
                  })]), createVNode("small", null, toDisplayString(p.nickname || p.username), 1)], 8, ["onClick"]);
                }), 128))])), [[_directive_auto_animate]])]),
                _: 1
              }, 8, ["no-more"])];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ElEmpty, {
          "mt-10": "",
          "image-size": 80,
          description: unref(searchPageList).length <= 0 && unref(searchPage).current > 0 ? "\u6CA1\u6709\u627E\u5230\u597D\u53CB" : "\u597D\u53CB\u67E5\u627E"
        }, {
          image: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i i-solar:users-group-two-rounded-bold-duotone p-2rem op-40 data-v-6d2b0410${_scopeId}></i>`);
            } else {
              return [createVNode("i", {
                "i-solar:users-group-two-rounded-bold-duotone": "",
                "p-2rem": "",
                "op-40": ""
              })];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/ApplySearch.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-6d2b0410"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "GroupList",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10,
      total: -1
    });
    const list = ref([]);
    async function loadData() {
      if (isLoading.value || pageInfo.value.isLast)
        return;
      isLoading.value = true;
      const {
        data
      } = await getChatFriendPage(pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list)
        list.value.push(...data.list);
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    loadData();
    const chat = useChatStore();
    watchDebounced(() => chat.delUserId, (val) => {
      if (val) {
        list.value = list.value.filter((p) => p.userId !== val);
        chat.setDelUserId("");
      }
    }, {
      debounce: 300
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_radio_group = ElRadioGroup;
      const _component_ListAutoIncre = _sfc_main$a;
      _push(ssrRenderComponent(_component_el_radio_group, mergeProps({
        class: "w-full"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div w-full flex flex-col data-v-d01ad81d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ListAutoIncre, {
              immediate: true,
              "auto-stop": true,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: loadData
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(list), (p) => {
                    _push3(`<div data-v-d01ad81d${_scopeId2}>${ssrInterpolate(p.nickName)} ${ssrInterpolate(p.activeStatus)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [(openBlock(true), createBlock(Fragment, null, renderList(unref(list), (p) => {
                    return openBlock(), createBlock("div", {
                      key: p.uid
                    }, toDisplayString(p.nickName) + " " + toDisplayString(p.activeStatus), 1);
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
              "auto-stop": true,
              "no-more": unref(pageInfo).isLast,
              loading: unref(isLoading),
              onLoad: loadData
            }, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(list), (p) => {
                return openBlock(), createBlock("div", {
                  key: p.uid
                }, toDisplayString(p.nickName) + " " + toDisplayString(p.activeStatus), 1);
              }), 128))]),
              _: 1
            }, 8, ["no-more", "loading"])])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/GroupList.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d01ad81d"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FriendList",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10,
      total: -1
    });
    const list = ref([]);
    async function loadData() {
      if (isLoading.value || pageInfo.value.isLast)
        return;
      isLoading.value = true;
      const {
        data
      } = await getChatFriendPage(pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list)
        list.value.push(...data.list);
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    loadData();
    const chat = useChatStore();
    watch(() => chat.isAddNewFriend, (val) => {
      if (val && !isLoading.value) {
        reloadData();
        chat.isAddNewFriend = false;
      }
    });
    function reloadData() {
      pageInfo.value.cursor = null;
      pageInfo.value.isLast = false;
      list.value = [];
      loadData();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListAutoIncre = _sfc_main$a;
      const _component_CardElImage = __nuxt_component_1$3;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-full": "",
        flex: "",
        "flex-col": ""
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-33444f6d>`);
      _push(ssrRenderComponent(_component_ListAutoIncre, {
        immediate: true,
        "auto-stop": true,
        "no-more": unref(pageInfo).isLast,
        loading: unref(isLoading),
        onLoad: loadData
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(list), (p) => {
              _push2(`<div class="item" data-v-33444f6d${_scopeId}><div class="avatar-icon" data-v-33444f6d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CardElImage, {
                class: "h-full w-full overflow-hidden rounded-6px",
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                fit: "cover"
              }, null, _parent2, _scopeId));
              _push2(`</div><small data-v-33444f6d${_scopeId}>${ssrInterpolate(p.nickName || "\u672A\u586B\u5199")}</small></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(list), (p) => {
              return openBlock(), createBlock("div", {
                key: p.id,
                class: "item",
                onClick: ($event) => unref(chat).setTheFriendOpt(("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).User, {
                  id: p.userId
                })
              }, [createVNode("div", {
                class: "avatar-icon"
              }, [createVNode(_component_CardElImage, {
                class: "h-full w-full overflow-hidden rounded-6px",
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                fit: "cover"
              }, null, 8, ["src"])]), createVNode("small", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)], 8, ["onClick"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/FriendList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-33444f6d"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    const chat = useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_ChatFriendApplySearch = __nuxt_component_1$2;
      const _component_ChatFriendGroupList = __nuxt_component_2;
      const _component_ChatFriendList = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative overflow-hidden border-0 border-r-1px transition-200 transition-width border-default"
      }, _attrs))} data-v-9565384c>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        "view-class": " tracking-0.1em pr-2",
        "wrap-class": "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top", {}, () => {
              _push2(`<div class="list" data-v-9565384c${_scopeId}><div class="py-2 hover:bg-transparent" data-v-9565384c${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ChatFriendApplySearch, {
                onSubmit: (val) => {
                  unref(chat).setTheFriendOpt(("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).User, val);
                }
              }, null, _parent2, _scopeId));
              _push2(`</div></div><div class="list" data-v-9565384c${_scopeId}><small op-90 data-v-9565384c${_scopeId}>\u65B0\u7684\u670B\u53CB</small><div class="item" data-v-9565384c${_scopeId}><div class="avatar-icon bg-[var(--el-color-warning)]" data-v-9565384c${_scopeId}><i i-solar:user-plus-bold bg-light p-3 data-v-9565384c${_scopeId}></i></div><small data-v-9565384c${_scopeId}>\u65B0\u7684\u670B\u53CB</small></div></div>`);
            }, _push2, _parent2, _scopeId);
            _push2(`<div class="list pb-4" data-v-9565384c${_scopeId}><small op-90 data-v-9565384c${_scopeId}>\u7FA4\u804A</small>`);
            _push2(ssrRenderComponent(_component_ChatFriendGroupList, null, null, _parent2, _scopeId));
            _push2(`</div><div class="list" data-v-9565384c${_scopeId}><small op-90 data-v-9565384c${_scopeId}>\u597D\u53CB</small>`);
            _push2(ssrRenderComponent(_component_ChatFriendList, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [renderSlot(_ctx.$slots, "top", {}, () => [createVNode("div", {
              class: "list"
            }, [createVNode("div", {
              class: "py-2 hover:bg-transparent"
            }, [createVNode(_component_ChatFriendApplySearch, {
              onSubmit: (val) => {
                unref(chat).setTheFriendOpt(("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).User, val);
              }
            }, null, 8, ["onSubmit"])])]), createVNode("div", {
              class: "list"
            }, [createVNode("small", {
              "op-90": ""
            }, "\u65B0\u7684\u670B\u53CB"), createVNode("div", {
              class: "item",
              onClick: ($event) => unref(chat).setTheFriendOpt(("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).NewFriend, {})
            }, [createVNode("div", {
              class: "avatar-icon bg-[var(--el-color-warning)]"
            }, [createVNode("i", {
              "i-solar:user-plus-bold": "",
              "bg-light": "",
              "p-3": ""
            })]), createVNode("small", null, "\u65B0\u7684\u670B\u53CB")], 8, ["onClick"])])], true), createVNode("div", {
              class: "list pb-4"
            }, [createVNode("small", {
              "op-90": ""
            }, "\u7FA4\u804A"), createVNode(_component_ChatFriendGroupList)]), createVNode("div", {
              class: "list"
            }, [createVNode("small", {
              "op-90": ""
            }, "\u597D\u53CB"), createVNode(_component_ChatFriendList)])];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/Tabs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9565384c"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GroupFriend",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(_ctx.data)}</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/MainType/GroupFriend.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ApplyList",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const user = useUserStore();
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10,
      page: 0,
      total: -1
    });
    const list = ref([]);
    async function loadData() {
      if (isLoading.value || pageInfo.value.isLast)
        return;
      pageInfo.value.page++;
      isLoading.value = true;
      const {
        data
      } = await getChatFriendApplyPage(pageInfo.value.page, pageInfo.value.size, user.getToken);
      if (data.records)
        list.value.push(...data.records);
      pageInfo.value.isLast = Boolean(data.isLast);
      pageInfo.value.page = data.current || 1;
      isLoading.value = false;
    }
    loadData();
    const chat = useChatStore();
    function onArgeeFriend(applyId) {
      ElMessageBox.confirm("\u662F\u5426\u540C\u610F\u597D\u53CB\u7533\u8BF7\uFF1F", {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88",
        lockScroll: false,
        callback: async (action) => {
          if (action === "confirm") {
            const res = await argeeFriendApply({
              applyId
            }, user.getToken);
            if (res.code === StatusCode.SUCCESS) {
              ElNotification.success("\u5DF2\u6DFB\u52A0\u597D\u53CB\uFF01");
              for (const p of list.value) {
                if (p.userId)
                  p.status = ChatApplyStatusType.Argee;
              }
              chat.setIsAddNewFriend(true);
            } else {
              ElMessage.error(res.message);
            }
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListAutoIncre = _sfc_main$a;
      const _component_CardElImage = __nuxt_component_1$3;
      const _component_el_button = ElButton;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-full": "",
        flex: "",
        "flex-col": ""
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-a675528d>`);
      _push(ssrRenderComponent(_component_ListAutoIncre, {
        immediate: true,
        "auto-stop": true,
        "no-more": unref(pageInfo).isLast,
        loading: unref(isLoading),
        onLoad: loadData
      }, {
        done: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-1rem text-center op-70" data-v-a675528d${_scopeId}>${ssrInterpolate(unref(list).length ? "\u6CA1\u6709\u66F4\u591A\u4E86" : "\u5FEB\u53BB\u8BA4\u8BC6\u5176\u4ED6\u4EBA")}</div>`);
          } else {
            return [createVNode("div", {
              class: "py-1rem text-center op-70"
            }, toDisplayString(unref(list).length ? "\u6CA1\u6709\u66F4\u591A\u4E86" : "\u5FEB\u53BB\u8BA4\u8BC6\u5176\u4ED6\u4EBA"), 1)];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(list), (p) => {
              var _a, _b;
              _push2(`<div class="mb-3 border-0 border-b-1px pb-3 border-default" data-v-a675528d${_scopeId}><div class="item" data-v-a675528d${_scopeId}><div class="avatar-icon cursor-pointer" data-v-a675528d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CardElImage, {
                class: "h-full w-full overflow-hidden rounded-6px",
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a = p.user) == null ? void 0 : _a.avatar),
                fit: "cover"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="flex flex-col truncate" data-v-a675528d${_scopeId}><p cursor-pointer data-v-a675528d${_scopeId}>${ssrInterpolate(((_b = p.user) == null ? void 0 : _b.nickName) || "\u672A\u586B\u5199")}</p><small cursor-pointer data-v-a675528d${_scopeId}>${ssrInterpolate(p.msg || "")}</small></div><div class="ml-a flex-row-c-c flex-shrink-0" data-v-a675528d${_scopeId}>`);
              if (p.status === ("ChatApplyStatusType" in _ctx ? _ctx.ChatApplyStatusType : unref(ChatApplyStatusType)).Load) {
                _push2(ssrRenderComponent(_component_el_button, {
                  onClick: ($event) => onArgeeFriend(p.applyId)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u540C\u610F `);
                    } else {
                      return [createTextVNode(" \u540C\u610F ")];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else if (p.status === ("ChatApplyStatusType" in _ctx ? _ctx.ChatApplyStatusType : unref(ChatApplyStatusType)).Argee) {
                _push2(`<small data-v-a675528d${_scopeId}>\u5DF2\u540C\u610F</small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(list), (p) => {
              var _a, _b;
              return openBlock(), createBlock("div", {
                key: p.applyId,
                class: "mb-3 border-0 border-b-1px pb-3 border-default"
              }, [createVNode("div", {
                class: "item"
              }, [createVNode("div", {
                class: "avatar-icon cursor-pointer",
                onClick: ($event) => unref(chat).setTheFriendOpt(("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).User, {
                  id: p.userId
                })
              }, [createVNode(_component_CardElImage, {
                class: "h-full w-full overflow-hidden rounded-6px",
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a = p.user) == null ? void 0 : _a.avatar),
                fit: "cover"
              }, null, 8, ["src"])], 8, ["onClick"]), createVNode("div", {
                class: "flex flex-col truncate"
              }, [createVNode("p", {
                "cursor-pointer": ""
              }, toDisplayString(((_b = p.user) == null ? void 0 : _b.nickName) || "\u672A\u586B\u5199"), 1), createVNode("small", {
                "cursor-pointer": ""
              }, toDisplayString(p.msg || ""), 1)]), createVNode("div", {
                class: "ml-a flex-row-c-c flex-shrink-0"
              }, [p.status === ("ChatApplyStatusType" in _ctx ? _ctx.ChatApplyStatusType : unref(ChatApplyStatusType)).Load ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                onClick: ($event) => onArgeeFriend(p.applyId)
              }, {
                default: withCtx(() => [createTextVNode(" \u540C\u610F ")]),
                _: 2
              }, 1032, ["onClick"])) : p.status === ("ChatApplyStatusType" in _ctx ? _ctx.ChatApplyStatusType : unref(ChatApplyStatusType)).Argee ? (openBlock(), createBlock("small", {
                key: 1
              }, "\u5DF2\u540C\u610F")) : createCommentVNode("", true)])])]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/ApplyList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a675528d"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NewFriend",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_ChatFriendApplyList = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative flex flex-col"
      }, _attrs))}><h4 class="flex-row-bt-c border-0 border-b-1 rounded-0 p-4 border-default bg-color md:p-4"> \u65B0\u7684\u670B\u53CB </h4>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        "view-class": "w-1/2 mx-a",
        "wrap-class": "w-full flex-1 h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChatFriendApplyList, null, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ChatFriendApplyList)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/MainType/NewFriend.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "User",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const data = toRef(props.data);
    const isLoading = ref(false);
    const isFrend = ref(false);
    const user = ref({});
    const store = useUserStore();
    async function loadData(val) {
      if (isLoading.value)
        return;
      isFrend.value = false;
      isLoading.value = true;
      const res = await getCommUserInfoSe(val, store.getToken);
      if (res.code === StatusCode.SUCCESS)
        user.value = res.data;
      setTimeout(() => {
        isLoading.value = false;
      }, 400);
      isChatFriend({
        uidList: [val]
      }, store.getToken).then((res2) => {
        const data2 = res2.data.checkedList.find((p) => p.uid === val);
        isFrend.value = data2 && data2.isFriend === isTrue.TRUE;
      }).catch(() => {
      });
    }
    const chat = useChatStore();
    function deleteFriend(userId2) {
      ElMessageBox.confirm("\u662F\u5426\u5220\u9664\u8BE5\u597D\u53CB\uFF1F", {
        confirmButtonText: "\u5220\u9664",
        cancelButtonText: "\u53D6\u6D88",
        lockScroll: false,
        type: "warning",
        callback: async (action) => {
          if (action === "confirm") {
            const res = await deleteFriendById(userId2, store.getToken);
            if (res.code === StatusCode.SUCCESS) {
              ElNotification.success("\u5220\u9664\u6210\u529F\uFF01");
              chat.setTheFriendOpt(FriendOptType.Empty, {});
              chat.setDelUserId(userId2);
              chat.setIsAddNewFriend(true);
            }
            chat.setIsAddNewFriend(true);
          }
        }
      });
    }
    const isShowApply = ref(false);
    const userId = computed(() => {
      return data.value.data.id;
    });
    watch(userId, (val) => {
      if (val)
        loadData(val);
    }, {
      immediate: true,
      deep: true
    });
    async function toSend(uid) {
      if (!isFrend.value)
        return;
      const res = await getChatContactInfo(uid, RoomType.SELFT, store.getToken);
      if (!res)
        return;
      if (res && res.code !== StatusCode.SUCCESS)
        return ElMessage.error(res ? res.message : "\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u597D\u53CB\uFF01");
      chat.setContact(res.data);
      nextTick(() => {
        navigateTo({
          path: "/chat"
        });
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardElImage = __nuxt_component_1$3;
      const _component_ElDivider = ElDivider;
      const _component_BtnElButton = __nuxt_component_2$1;
      const _component_ChatFriendApplyDialog = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        "h-full": "",
        "w-full": "",
        flex: "",
        "flex-1": "",
        "flex-col": "",
        "items-center": "",
        "gap-1rem": "",
        "pt-6rem": "",
        "bg-color": ""
      }, _attrs))}><div flex gap-4>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).avatar,
        fit: "cover",
        class: "h-3.8rem w-3.8rem flex-shrink-0 overflow-auto object-cover shadow-sm border-default v-card"
      }, null, _parent));
      _push(`<div class="text-0.8rem leading-1.5em"><strong>${ssrInterpolate(unref(user).nickname)}</strong><p op-60> ID\uFF1A${ssrInterpolate(unref(userId))} ${ssrInterpolate(unref(user).gender || "")}</p><p op-60> \u90AE\u7BB1\uFF1A${ssrInterpolate(unref(user).email || "\u672A\u586B\u5199")}</p></div></div>`);
      _push(ssrRenderComponent(_component_ElDivider, {
        style: {
          "margin": "2rem auto",
          "width": "30%"
        }
      }, null, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(isLoading) ? null : {
        display: "none"
      })}">`);
      if (unref(isFrend)) {
        _push(ssrRenderComponent(_component_BtnElButton, {
          "icon-class": "i-solar:trash-bin-trash-bold-duotone p-2 mr-2",
          class: "op-80",
          type: "danger",
          plain: "",
          onClick: ($event) => deleteFriend(unref(userId))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5220\u9664\u597D\u53CB\u2002 `);
            } else {
              return [createTextVNode(" \u5220\u9664\u597D\u53CB\u2002 ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isFrend)) {
        _push(ssrRenderComponent(_component_BtnElButton, {
          "icon-class": "i-solar:chat-line-line-duotone p-2 mr-2",
          class: "border-default",
          type: "info",
          onClick: ($event) => toSend(unref(userId))
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u53D1\u6D88\u606F\u2002 `);
            } else {
              return [createTextVNode(" \u53D1\u6D88\u606F\u2002 ")];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_BtnElButton, {
          "icon-class": "i-solar:user-plus-bold p-2 mr-2",
          class: "op-80",
          type: "primary",
          onClick: ($event) => isShowApply.value = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u6DFB\u52A0\u597D\u53CB\u2002 `);
            } else {
              return [createTextVNode(" \u6DFB\u52A0\u597D\u53CB\u2002 ")];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ChatFriendApplyDialog, {
        show: unref(isShowApply),
        "onUpdate:show": ($event) => isRef(isShowApply) ? isShowApply.value = $event : null,
        "user-id": unref(userId),
        onSubmit: ($event) => unref(chat).setTheFriendOpt(("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).Empty, {})
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/MainType/User.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const maps = {
      [FriendOptType.User]: _sfc_main$2,
      [FriendOptType.NewFriend]: _sfc_main$3,
      [FriendOptType.GroupFriend]: _sfc_main$5
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(maps[_ctx.data.type || ("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).User]), mergeProps({
        data: _ctx.data
      }, _ctx.$attrs, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/MainType/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "friend",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u6781\u804A\u5929 - \u6781\u7269\u5708 \u{1F451}",
      description: "\u6781\u804A\u5929 - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: "\u793E\u533A,\u5546\u57CE,\u6781\u7269\u4E4B\u65C5,\u4E3B\u9875,\u804A\u5929,\u5BA2\u670D,\u8D2D\u7269,home,index,shop,chat"
    });
    useUserStore();
    const chat = useChatStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ChatFriendTabs = __nuxt_component_1$1;
      const _component_ChatFriendMainType = _sfc_main$1;
      const _component_ElEmpty = ElEmpty;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-61bd6582>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "chat",
        header: true,
        "left-menu": true,
        footer: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChatFriendTabs, {
              class: "w-2/7 flex-shrink-0 p-4"
            }, null, _parent2, _scopeId));
            if (unref(chat).theFriendOpt.type !== ("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).Empty) {
              _push2(ssrRenderComponent(_component_ChatFriendMainType, {
                data: unref(chat).theFriendOpt,
                class: "w-5/7 flex-1 flex-shrink-0 bg-color"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="w-5/7 flex-row-c-c flex-1 flex-shrink-0 bg-color" data-v-61bd6582${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ElEmpty, {
                "mt-10": "",
                "image-size": 80,
                description: " "
              }, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i i-solar:users-group-two-rounded-bold-duotone p-2rem op-40 data-v-61bd6582${_scopeId2}></i>`);
                  } else {
                    return [createVNode("i", {
                      "i-solar:users-group-two-rounded-bold-duotone": "",
                      "p-2rem": "",
                      "op-40": ""
                    })];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [createVNode(_component_ChatFriendTabs, {
              class: "w-2/7 flex-shrink-0 p-4"
            }), unref(chat).theFriendOpt.type !== ("FriendOptType" in _ctx ? _ctx.FriendOptType : unref(FriendOptType)).Empty ? (openBlock(), createBlock(_component_ChatFriendMainType, {
              key: 0,
              data: unref(chat).theFriendOpt,
              class: "w-5/7 flex-1 flex-shrink-0 bg-color"
            }, null, 8, ["data"])) : (openBlock(), createBlock("div", {
              key: 1,
              class: "w-5/7 flex-row-c-c flex-1 flex-shrink-0 bg-color"
            }, [createVNode(_component_ElEmpty, {
              "mt-10": "",
              "image-size": 80,
              description: " "
            }, {
              image: withCtx(() => [createVNode("i", {
                "i-solar:users-group-two-rounded-bold-duotone": "",
                "p-2rem": "",
                "op-40": ""
              })]),
              _: 1
            })]))];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/friend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const friend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61bd6582"]]);

export { friend as default };
//# sourceMappingURL=friend-UGvjFhEi.mjs.map
