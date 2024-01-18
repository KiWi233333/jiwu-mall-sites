import { u as useUserStore, Y as useHead, v as appName, B as BaseUrlImg, t as useRoute, i as isTrue, n as navigateTo, _ as __nuxt_component_0, e as __nuxt_component_0$1, S as StatusCode, d as __nuxt_component_2, b as _export_sfc } from '../server.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { E as ElSelect, a as ElOption } from './index-K-gO0vbs.mjs';
import { _ as __nuxt_component_1 } from './ElImage-j3i6j_3Z.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, unref, openBlock, createBlock, createCommentVNode, ref, mergeProps, isRef, toDisplayString, Fragment, renderList, reactive, computed, watch, createTextVNode } from 'vue';
import { b as getCommCategory } from './category-HtxOPKX5.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { v as vLoading } from './loading-9ZJxhv9k.mjs';
import { P as PostStatus, k as getPostPageSelf } from './post-uKGC7P8z.mjs';
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
import './event-9ZI5GX64.mjs';
import './index-S-yJffF9.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-FUoXuQZs.mjs';
import './scrollbar-rGnTaDH3.mjs';
import './index-3Hd0ipYT.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-Jkc1A1yz.mjs';
import './index-Ud8N-GPr.mjs';
import './PreLoading-Sou-hyZj.mjs';
import './fetch-YS3Fxkuj.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CategorySelect",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    useUserStore();
    const value = ref(props.modelValue);
    const categoryList = ref([]);
    const isCateLoading = ref(false);
    async function loadData() {
      var _a, _b;
      const {
        data
      } = await getCommCategory();
      if (((_a = data.value) == null ? void 0 : _a.code) === StatusCode.SUCCESS)
        categoryList.value = ((_b = data.value) == null ? void 0 : _b.data) || [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_card_el_image = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col"
      }, _attrs))}><div class="flex items-center border-gray-400">`);
      _push(ssrRenderComponent(_component_el_select, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        "no-data-text": "\u6CA1\u6709\u6570\u636E",
        multiple: false,
        filterable: "",
        clearable: ""
      }, _ctx.$attrs, {
        placeholder: ((_a = _ctx.$attrs) == null ? void 0 : _a.placeholder) || "\u9009\u62E9\u53D1\u5E03\u7684\u5708\u5B50",
        loading: unref(isCateLoading),
        onFocus: loadData,
        onChange: (val) => _ctx.$emit("update:modelValue", val)
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(categoryList), (p) => {
              _push2(ssrRenderComponent(_component_el_option, {
                key: p.id,
                label: p.name,
                value: p.id,
                style: {
                  "height": "fit-content"
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div min-h-4rem flex items-center gap-2 text-center md:gap-4${_scopeId2}><div class="h-2rem w-2rem"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_card_el_image, {
                      fit: "cover",
                      class: "card-default",
                      loading: "lazy",
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><span truncate${_scopeId2}>${ssrInterpolate(p == null ? void 0 : p.name)}</span></div>`);
                  } else {
                    return [createVNode("div", {
                      "min-h-4rem": "",
                      flex: "",
                      "items-center": "",
                      "gap-2": "",
                      "text-center": "",
                      "md:gap-4": ""
                    }, [createVNode("div", {
                      class: "h-2rem w-2rem"
                    }, [createVNode(_component_card_el_image, {
                      fit: "cover",
                      class: "card-default",
                      loading: "lazy",
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image
                    }, null, 8, ["src"])]), createVNode("span", {
                      truncate: ""
                    }, toDisplayString(p == null ? void 0 : p.name), 1)])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(categoryList), (p) => {
              return openBlock(), createBlock(_component_el_option, {
                key: p.id,
                label: p.name,
                value: p.id,
                style: {
                  "height": "fit-content"
                }
              }, {
                default: withCtx(() => [createVNode("div", {
                  "min-h-4rem": "",
                  flex: "",
                  "items-center": "",
                  "gap-2": "",
                  "text-center": "",
                  "md:gap-4": ""
                }, [createVNode("div", {
                  class: "h-2rem w-2rem"
                }, [createVNode(_component_card_el_image, {
                  fit: "cover",
                  class: "card-default",
                  loading: "lazy",
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image
                }, null, 8, ["src"])]), createVNode("span", {
                  truncate: ""
                }, toDisplayString(p == null ? void 0 : p.name), 1)])]),
                _: 2
              }, 1032, ["label", "value"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        data: unref(categoryList)
      }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/post/CategorySelect.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InfoList",
  __ssrInlineRender: true,
  props: {
    dto: {
      default: () => {
        return {};
      }
    },
    limit: {},
    class: {
      default: ""
    },
    immediate: {
      type: Boolean,
      default: true
    },
    status: {},
    isAutoStop: {
      type: Boolean,
      default: false
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const user = useUserStore();
    const isLoading = ref(false);
    const postList = ref([]);
    const page = ref(0);
    const size = ref(props.limit || 10);
    const pageInfo = reactive({
      total: -1,
      pages: -1,
      current: -1
    });
    const isNot = computed(() => {
      return (pageInfo == null ? void 0 : pageInfo.total) === 0 && pageInfo.pages === 0;
    });
    const isNoMore = computed(() => {
      return pageInfo.pages > 0 && (page.value >= pageInfo.pages || props.limit !== void 0 && props.limit <= postList.value.length);
    });
    async function loadPageData() {
      var _a, _b;
      if (isLoading.value || isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && postList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const res = await getPostPageSelf(page.value, size.value, {
        ...props == null ? void 0 : props.dto,
        status: ((_a = props == null ? void 0 : props.dto) == null ? void 0 : _a.status) && +((_b = props == null ? void 0 : props.dto) == null ? void 0 : _b.status) < 0 ? void 0 : props == null ? void 0 : props.dto.status
      }, user.getToken);
      if ((res == null ? void 0 : res.code) !== StatusCode.SUCCESS)
        return;
      pageInfo.total = res == null ? void 0 : res.data.total;
      pageInfo.current = res == null ? void 0 : res.data.current;
      pageInfo.pages = res == null ? void 0 : res.data.pages;
      if ((res == null ? void 0 : res.data.records) && (res == null ? void 0 : res.data.records.length))
        postList.value.push(...res == null ? void 0 : res.data.records);
      else
        postList.value.splice(0);
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
    }
    function clearResult() {
      postList.value.splice(0);
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      page.value = 0;
    }
    const timer = ref();
    watch(() => props.dto, async (newVal, oldVal) => {
      if (timer.value || newVal.status !== props.status)
        return;
      clearResult();
      await loadPageData();
      timer.value = setTimeout(() => {
        clearTimeout(timer.value);
        timer.value = null;
      }, 300);
    }, {
      immediate: true,
      deep: true
    });
    __expose({
      clearResult,
      // 清除
      loadPageData,
      postList,
      pageInfo
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))))} data-v-11b0d340>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/post/InfoList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-11b0d340"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MangerTabs",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const user = useUserStore();
    const route = useRoute();
    const searchDTO = ref({
      userId: user.userInfo.id,
      status: (route == null ? void 0 : route.query.status) !== void 0 ? +(((_a = route == null ? void 0 : route.query) == null ? void 0 : _a.status) || -1) : -1,
      name: void 0,
      cid: void 0,
      commentSort: void 0,
      isEssence: void 0,
      isNew: void 0,
      viewsSort: void 0
    });
    const tabsList = ref([
      // 全部
      {
        label: "\u5168\u90E8",
        icon: "",
        dto: {
          status: -1,
          isNew: isTrue.TRUE
        }
      },
      // 待审核
      {
        label: "\u5F85\u5BA1\u6838",
        icon: "",
        dto: {
          status: +PostStatus.UNDOING,
          isNew: isTrue.TRUE
        }
      },
      // 已审核
      {
        label: "\u5DF2\u5BA1\u6838",
        icon: "",
        dto: {
          status: +PostStatus.PUBLISHED
        }
      },
      // 已驳回
      {
        label: "\u5DF2\u9A73\u56DE",
        icon: "",
        dto: {
          status: +PostStatus.REJECT
        }
      },
      // 管理员删除
      {
        label: "\u7BA1\u7406\u5458\u5220\u9664",
        icon: "",
        dto: {
          status: +PostStatus.ADMIN_DELETED
        }
      },
      // 草稿箱
      {
        label: "\u8349\u7A3F\u7BB1",
        icon: "i-solar:inbox-in-bold-duotone",
        dto: {
          status: +PostStatus.DRAFT
        }
      },
      // 回收站
      {
        label: "\u56DE\u6536\u7AD9",
        icon: "i-solar:trash-bin-trash-bold-duotone",
        dto: {
          status: +PostStatus.DELETED
        }
      }
    ]);
    useHead({
      title: `${tabsList.value[searchDTO.value.status] ? `${(_b = tabsList.value[searchDTO.value.status]) == null ? void 0 : _b.label}\u5E16\u5B50` : "\u6211\u7684\u5E16\u5B50"} - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
    });
    function reload(clear) {
      if (clear) {
        searchDTO.value = {
          userId: user.userInfo.id,
          name: void 0,
          status: -1,
          cid: void 0,
          commentSort: void 0,
          isEssence: void 0,
          isNew: void 0,
          viewsSort: void 0
        };
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_UserPostCategorySelect = _sfc_main$3;
      const _component_btn_el_button = __nuxt_component_2;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_UserPostInfoList = __nuxt_component_5;
      _push(`<!--[--><div mb-4 flex flex-nowrap items-center gap-4 truncate><small>\u7B5B\u9009\uFF1A</small><div>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(searchDTO).name,
        "onUpdate:modelValue": ($event) => unref(searchDTO).name = $event,
        modelModifiers: {
          lazy: true
        },
        "prefix-icon": "Search",
        placeholder: "\u5173\u952E\u5B57\uFF08 Enter \uFF09",
        onKeyup: reload
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UserPostCategorySelect, {
        modelValue: unref(searchDTO).cid,
        "onUpdate:modelValue": ($event) => unref(searchDTO).cid = $event,
        placeholder: "\u5708\u5B50\u5206\u7C7B\u7B5B\u9009"
      }, null, _parent));
      _push(`<div class="ml-a flex flex-nowrap">`);
      _push(ssrRenderComponent(_component_btn_el_button, {
        plain: "",
        "transition-icon": "",
        type: "danger",
        "icon-class": "i-solar:refresh-outline mr-1.4",
        onClick: ($event) => reload(true)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u91CD\u7F6E `);
          } else {
            return [createTextVNode(" \u91CD\u7F6E ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_btn_el_button, {
        "transition-icon": "",
        "icon-class": "i-solar:magnifer-broken mr-1.4",
        type: "info",
        onClick: ($event) => reload()
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
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(searchDTO).status,
        "onUpdate:modelValue": ($event) => unref(searchDTO).status = $event,
        "tab-position": "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(tabsList), (p) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: p.dto.status,
                name: p.dto.status,
                lazy: ""
              }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="group"${_scopeId2}>`);
                    if (p.icon) {
                      _push3(`<i class="${ssrRenderClass([p.icon, "p-0 transition-200 transition-all group-hover:m-1 group-hover:p-0.6em"])}"${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(p.label)}</span>`);
                  } else {
                    return [createVNode("span", {
                      class: "group"
                    }, [p.icon ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: [p.icon, "p-0 transition-200 transition-all group-hover:m-1 group-hover:p-0.6em"]
                    }, null, 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(p.label), 1)])];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UserPostInfoList, {
                      dto: unref(searchDTO),
                      status: p.dto.status
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(_component_UserPostInfoList, {
                      dto: unref(searchDTO),
                      status: p.dto.status
                    }, null, 8, ["dto", "status"])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(tabsList), (p) => {
              return openBlock(), createBlock(_component_el_tab_pane, {
                key: p.dto.status,
                name: p.dto.status,
                lazy: ""
              }, {
                label: withCtx(() => [createVNode("span", {
                  class: "group"
                }, [p.icon ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: [p.icon, "p-0 transition-200 transition-all group-hover:m-1 group-hover:p-0.6em"]
                }, null, 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(p.label), 1)])]),
                default: withCtx(() => [createVNode(_component_UserPostInfoList, {
                  dto: unref(searchDTO),
                  status: p.dto.status
                }, null, 8, ["dto", "status"])]),
                _: 2
              }, 1032, ["name"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/post/MangerTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "post",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    useHead({
      title: `\u6211\u7684\u5E16\u5B50 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`,
      meta: [{
        name: "description",
        content: `\u6211\u7684\u5E16\u5B50 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
      }]
    });
    function toNewPostPage(cid) {
      navigateTo({
        path: "/community/post/new",
        query: {
          cid
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_UserPostMangerTabs = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "user",
        menu: [{
          name: "post",
          isTeleport: true,
          methods: () => toNewPostPage()
        }, "back"],
        footer: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => {
                var _a;
                return [((_a = unref(user).userInfo) == null ? void 0 : _a.id) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex flex-col layout-default"
                }, [createVNode("div", {
                  class: "title animate-fade-in-down animate-duration-400",
                  "mt-3": ""
                }, [createVNode("h2", {
                  "tracking-1": ""
                }, " \u6211\u7684\u5E16\u5B50 ")]), createVNode("div", {
                  "mt-4": "",
                  "min-h-100vh": ""
                }, [createVNode(_component_UserPostMangerTabs)])])) : createCommentVNode("", true)];
              }),
              _: 1
            })];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=post-cR5NbO_u.mjs.map
