import { b as _export_sfc, t as useRoute, s as search_default, E as ElMessage, _ as __nuxt_component_0, e as __nuxt_component_0$1, g as ElButton, d as __nuxt_component_2 } from '../server.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { E as ElCheckbox } from './checkbox-zYdk3J0T.mjs';
import { E as ElSelect, a as ElOption } from './index-K-gO0vbs.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { defineAsyncComponent, useSSRContext, defineComponent, ref, reactive, computed, withCtx, createVNode, createTextVNode, unref, isRef, withKeys, toDisplayString, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, createCommentVNode } from 'vue';
import { E as ElEmpty } from './empty-YBmMukHu.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStorage } from './event-9ZI5GX64.mjs';
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
import './index-S-yJffF9.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-FUoXuQZs.mjs';
import './scrollbar-rGnTaDH3.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-Jkc1A1yz.mjs';
import './index-Ud8N-GPr.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';

const __nuxt_component_11_lazy = defineAsyncComponent(() => import('./GoodsList-AABL3AGj.mjs').then((m) => m.default || m));
const __nuxt_component_12_lazy = defineAsyncComponent(() => import('./PostList--cNB2Ocs.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const activeMenu = ref("goods");
    const r = useRoute();
    const showResult = ref(true);
    const isLoading = ref(false);
    const keyWord = ref(((_b = (_a = r.query) == null ? void 0 : _a.name) == null ? void 0 : _b.toString()) || "");
    const isShowOrder = ref(false);
    const goodsListRef = ref();
    const postListRef = ref();
    const dto = reactive({
      name: (_d = (_c = r.query) == null ? void 0 : _c.name) == null ? void 0 : _d.toString(),
      cid: (_f = (_e = r.query) == null ? void 0 : _e.cid) == null ? void 0 : _f.toString(),
      isPostage: void 0,
      priceSort: void 0,
      viewsSort: void 0,
      saleSort: void 0,
      isNew: void 0
    });
    const searchHistoryList = useStorage("jiwu_index_search", []);
    const isNew = computed({
      get() {
        return Boolean(dto.isNew);
      },
      set(val) {
        dto.isNew = +val || void 0;
      }
    });
    const isPostage = computed({
      get() {
        return Boolean(dto.isPostage);
      },
      set(val) {
        dto.isPostage = +val || void 0;
      }
    });
    function onSearch(type = "goods") {
      if (isLoading.value)
        return ElMessage.warning("\u641C\u7D22\u592A\u9891\u7E41\u4E86");
      else if (!keyWord.value)
        return ElMessage.warning("\u8BF7\u8F93\u5165\u5173\u952E\u8BCD");
      const flag = searchHistoryList.value.includes(keyWord.value);
      if (!flag && searchHistoryList.value.length <= 8)
        searchHistoryList.value.unshift(keyWord.value.trim());
      else if (flag)
        searchHistoryList.value.pop();
      dto.name = keyWord.value;
      isLoading.value = true;
      return setTimeout(() => {
        isLoading.value = false;
        showResult.value = true;
        return Promise.resolve();
      }, 500);
    }
    function handleClose(tag) {
      searchHistoryList.value.splice(searchHistoryList.value.indexOf(tag), 1);
    }
    ref(false);
    function reset() {
      showResult.value = false;
      dto.cid = void 0;
      dto.name = void 0;
      dto.isPostage = void 0;
      dto.priceSort = void 0;
      dto.viewsSort = void 0;
      dto.saleSort = void 0;
      dto.isNew = void 0;
      keyWord.value = "";
    }
    function clickTag(val) {
      searchHistoryList.value.push(val);
      keyWord.value = val;
      onSearch();
    }
    const getTotal = computed(() => {
      var _a2, _b2, _c2, _d2;
      return `${((_b2 = (_a2 = goodsListRef == null ? void 0 : goodsListRef.value) == null ? void 0 : _a2.pageInfo) == null ? void 0 : _b2.total) || "0"}\u4E2A\u5546\u54C1, ${((_d2 = (_c2 = postListRef == null ? void 0 : postListRef.value) == null ? void 0 : _c2.pageInfo) == null ? void 0 : _d2.total) || "0"}\u6761\u5E16\u5B50`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_ElInput = ElInput;
      const _component_el_button = ElButton;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_btn_el_button = __nuxt_component_2;
      const _component_BtnElButton = __nuxt_component_2;
      const _component_ElTag = ElTag;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_LazyListGoodsList = __nuxt_component_11_lazy;
      const _component_LazyCommPostList = __nuxt_component_12_lazy;
      const _component_el_empty = ElEmpty;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-87455719>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "main",
        header: false,
        "left-menu": false,
        menu: ["shopcart", "back"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [createVNode("div", {
                class: "mt-10 layout-default",
                grid: "~ cols-1 md:cols-[1fr_4fr_1fr]"
              }, [createVNode("div", {
                class: "left sticky top-6rem"
              }), createVNode("div", {
                "min-h-80vh": "",
                flex: "",
                "flex-col": "",
                "justify-start": ""
              }, [createVNode("header", {
                class: "group mb-2rem flex-row-c-c cursor-pointer text-center text-2rem tracking-0.4em"
              }, [createVNode("i", {
                class: "i-solar:magnifer-outline mr-4 inline-block transform-origin-[right_bottom] text-0.6em transition-200 transition-all group-hover:-rotate-10"
              }), createTextVNode(" \u641C\u7D22 ")]), createVNode("div", {
                class: "h-2.6rem w-1/1 flex-row-c-c"
              }, [createVNode(_component_ElInput, {
                modelValue: unref(keyWord),
                "onUpdate:modelValue": ($event) => isRef(keyWord) ? keyWord.value = $event : null,
                modelModifiers: {
                  trim: true
                },
                clearable: "",
                "input-style": "border-radius:1rem;height:2.6rem;font-size:1rem;",
                type: "text",
                size: "large",
                class: "shadow-sm",
                autocomplete: "off",
                "prefix-icon": "ElIconSearch" in _ctx ? _ctx.ElIconSearch : unref(search_default),
                minlength: "2",
                maxlength: "30",
                "on-search": onSearch,
                placeholder: "\u641C\u7D22\u5173\u952E\u5B57\u5E16\u5B50\u3001\u5546\u54C1...",
                onKeyup: withKeys(onSearch, ["enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "prefix-icon"]), createVNode(_component_el_button, {
                type: "info",
                "shadow-md": "",
                style: {
                  "width": "10em",
                  "height": "100%",
                  "font-size": "1.2rem",
                  "margin-left": "1em"
                },
                size: "large",
                onClick: ($event) => onSearch()
              }, {
                default: withCtx(() => [createTextVNode(" \u641C \u7D22 ")]),
                _: 1
              }, 8, ["onClick"])]), createVNode("div", {
                class: "mt-3 flex items-start md:h-2rem"
              }, [createVNode("div", {
                class: [{
                  "h-6rem md:h-3rem": unref(isShowOrder)
                }, "grid grid-cols-4 h-0 flex-1 gap-2 overflow-hidden opacity-80 transition-300 transition-height md:grid-cols-8"]
              }, [createVNode(_component_el_checkbox, {
                modelValue: unref(isNew),
                "onUpdate:modelValue": ($event) => isRef(isNew) ? isNew.value = $event : null,
                class: "rounded-4px bg-white px-2 border-default dark:bg-dark-5",
                label: "\u65B0\u54C1",
                style: {
                  "margin": "0"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_checkbox, {
                modelValue: unref(isPostage),
                "onUpdate:modelValue": ($event) => isRef(isPostage) ? isPostage.value = $event : null,
                class: "rounded-4px bg-white px-2 border-default dark:bg-dark-5",
                label: "\u514D\u8FD0\u8D39",
                style: {
                  "margin": "0"
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_select, {
                modelValue: unref(dto).saleSort,
                "onUpdate:modelValue": ($event) => unref(dto).saleSort = $event,
                size: "default",
                placeholder: "\u9500\u91CF\u6392\u5E8F"
              }, {
                default: withCtx(() => [createVNode(_component_el_option, {
                  label: "\u9500\u91CF\u5347\u5E8F",
                  value: 0
                }), createVNode(_component_el_option, {
                  label: "\u9500\u91CF\u964D\u5E8F",
                  value: 1
                })]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_select, {
                modelValue: unref(dto).priceSort,
                "onUpdate:modelValue": ($event) => unref(dto).priceSort = $event,
                size: "default",
                placeholder: "\u4EF7\u683C\u6392\u5E8F"
              }, {
                default: withCtx(() => [createVNode(_component_el_option, {
                  label: "\u4EF7\u683C\u5347\u5E8F",
                  value: 0
                }), createVNode(_component_el_option, {
                  label: "\u4EF7\u683C\u964D\u5E8F",
                  value: 1
                })]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_select, {
                modelValue: unref(dto).viewsSort,
                "onUpdate:modelValue": ($event) => unref(dto).viewsSort = $event,
                size: "default",
                placeholder: "\u6D4F\u89C8\u91CF\u6392\u5E8F"
              }, {
                default: withCtx(() => [createVNode(_component_el_option, {
                  label: "\u6D4F\u89C8\u91CF\u5347\u5E8F",
                  value: 0
                }), createVNode(_component_el_option, {
                  label: "\u6D4F\u89C8\u91CF\u964D\u5E8F",
                  value: 1
                })]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_btn_el_button, {
                "icon-class": "i-solar:refresh-outline mr-2",
                "transition-icon": "",
                onClick: reset
              }, {
                default: withCtx(() => [createTextVNode(" \u91CD\u7F6E ")]),
                _: 1
              })], 2), createVNode(_component_BtnElButton, {
                border: "false",
                plain: "",
                class: "z-8",
                "icon-class": "i-solar:hamburger-menu-line-duotone ml-2 order-2",
                style: {
                  "box-shadow": "none",
                  "border": "none",
                  "background-color": "transparent"
                },
                onClick: ($event) => isShowOrder.value = !unref(isShowOrder)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(isShowOrder) ? "\u6536\u8D77" : "\u7B5B\u9009"), 1)]),
                _: 1
              }, 8, ["onClick"])]), createVNode(_component_ClientOnly, null, {
                fallback: withCtx(() => [createTextVNode(" \u5386\u53F2\u52A0\u8F7D\u4E2D... ")]),
                default: withCtx(() => [createVNode("div", {
                  class: ["flex flex-nowrap cursor-pointer items-center overflow-hidden py-1 transition-200 transition-margin", unref(isShowOrder) ? "mt-0" : "-mt-2.5rem"]
                }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(searchHistoryList), (p, i) => {
                  return openBlock(), createBlock(_component_ElTag, {
                    key: p + i,
                    size: "large",
                    closable: "",
                    class: "mr-1 mt-2 transition-300",
                    onClose: ($event) => handleClose(p),
                    onClick: ($event) => clickTag(p)
                  }, {
                    default: withCtx(() => [createVNode("span", {
                      "pr-0.3em": ""
                    }, toDisplayString(p), 1)]),
                    _: 2
                  }, 1032, ["onClose", "onClick"]);
                }), 128))], 2)]),
                _: 1
              }), withDirectives(createVNode("small", {
                "my-2": "",
                "opacity-80": ""
              }, toDisplayString(`\u641C\u7D22\u7ED3\u679C`) + " " + toDisplayString(unref(getTotal)), 513), [[vShow, unref(showResult)]]), withDirectives(createVNode(_component_el_tabs, {
                modelValue: unref(activeMenu),
                "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
                class: "min-h-50vh",
                "tab-position": "top"
              }, {
                default: withCtx(() => [createVNode(_component_el_tab_pane, {
                  lazy: "",
                  class: "zoom-in",
                  name: "goods",
                  label: "\u5546 \u54C1"
                }, {
                  default: withCtx(() => [createVNode(_component_LazyListGoodsList, {
                    ref_key: "goodsListRef",
                    ref: goodsListRef,
                    class: "grid grid-cols-2 grid-gap-4 md:grid-cols-4",
                    dto: unref(dto)
                  }, null, 8, ["dto"])]),
                  _: 1
                }), createVNode(_component_el_tab_pane, {
                  name: "post",
                  label: "\u5E16 \u5B50",
                  class: "zoom-in"
                }, {
                  default: withCtx(() => [createVNode(_component_LazyCommPostList, {
                    ref_key: "postListRef",
                    ref: postListRef,
                    dto: unref(dto),
                    class: "grid grid-gap-4"
                  }, null, 8, ["dto"])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]), [[vShow, unref(showResult)]]), !unref(showResult) ? (openBlock(), createBlock("div", {
                key: 0,
                "min-h-80vh": "",
                "animate-fade-in": ""
              }, [createVNode(_component_el_empty, {
                "image-size": 180,
                class: "mt-10em",
                description: "\u671F\u5F85\u4F60\u7684\u641C\u7D22 \u2728"
              })])) : createCommentVNode("", true)]), createVNode("div", {
                class: "right sticky top-6rem"
              })])]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87455719"]]);

export { index as default };
//# sourceMappingURL=index-TqBYo8BW.mjs.map
