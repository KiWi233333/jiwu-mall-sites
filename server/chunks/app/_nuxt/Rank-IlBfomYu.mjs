import { E as ElDivider } from './divider-PhlLqhAq.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-tpk2tUXY.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { _ as __nuxt_component_1$1 } from './ElImage-j3i6j_3Z.mjs';
import { E as ElEmpty } from './empty-YBmMukHu.mjs';
import { b as _export_sfc, B as BaseUrlImg, S as StatusCode } from '../server.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, withAsyncContext, resolveDirective, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withDirectives, Fragment, renderList } from 'vue';
import { a as getPostPageLazy } from './post-uKGC7P8z.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { t as toReactive, w as watchDebounced } from './event-9ZI5GX64.mjs';
import '@vue/shared';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './PreLoading-Sou-hyZj.mjs';
import './index-Jkc1A1yz.mjs';
import 'lodash-unified';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './fetch-YS3Fxkuj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Rank",
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
    title: {
      default: "\u70ED\u95E8\u5E16\u5B50"
    },
    immediate: {
      type: Boolean,
      default: false
    }
  },
  async setup(__props, {
    expose: __expose
  }) {
    let __temp, __restore;
    const props = __props;
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
    async function loadPostListPage() {
      var _a, _b, _c, _d, _e;
      if (isLoading.value || isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && postList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const {
        data
      } = await getPostPageLazy(page.value, size.value, props == null ? void 0 : props.dto);
      if (((_a = data.value) == null ? void 0 : _a.code) !== StatusCode.SUCCESS)
        return;
      pageInfo.total = (_b = data.value) == null ? void 0 : _b.data.total;
      pageInfo.current = (_c = data.value) == null ? void 0 : _c.data.current;
      pageInfo.pages = (_d = data.value) == null ? void 0 : _d.data.pages;
      postList.value.push(...(_e = data.value) == null ? void 0 : _e.data.records);
      isLoading.value = false;
    }
    function clearResult() {
      postList.value.splice(0);
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      page.value = 0;
    }
    const dto = toReactive(props.dto);
    const timer = ref();
    __expose({
      clearResult,
      // 清除
      loadPostListPage,
      postList,
      pageInfo
    });
    watchDebounced(dto, async () => {
      if (timer.value || isLoading.value)
        return;
      clearResult();
      await loadPostListPage();
      timer.value = setTimeout(() => {
        clearTimeout(timer.value);
        timer.value = null;
      }, 400);
    }, {
      immediate: true
    });
    const getColor = ["var(--el-color-danger)", "var(--el-color-danger-light-3)", "var(--el-color-warning)", "var(--el-color-warning-light-3)", "var(--el-color-warning-light-5)"];
    if (props.immediate)
      [__temp, __restore] = withAsyncContext(() => loadPostListPage()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElDivider = ElDivider;
      const _component_el_scrollbar = ElScrollbar;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_el_tag = ElTag;
      const _component_CardElImage = __nuxt_component_1$1;
      const _component_el_empty = ElEmpty;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        group: "",
        "h-full": "",
        "p-4": "",
        "card-default": "",
        "md:p-6": ""
      }, _attrs))} data-v-a390a5c5><h3 data-v-a390a5c5>${ssrInterpolate(_ctx.title)} <i i-solar:fire-bold class="ml-2 p-0.5em text-[var(--el-color-danger)]" data-v-a390a5c5></i></h3>`);
      _push(ssrRenderComponent(_component_ElDivider, {
        "opacity-50": "",
        style: {
          "margin": "1rem 0"
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_scrollbar, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${ssrRenderAttrs(mergeProps({
              class: "grid"
            }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-a390a5c5${_scopeId}><!--[-->`);
            ssrRenderList(unref(postList), (p, i) => {
              _push2(ssrRenderComponent(_component_nuxt_link, {
                key: p.id,
                to: {
                  path: `/community/post/detail/${p.id}`
                },
                class: "group pb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3 transition-200 hover:text-[var(--el-color-info)]" data-v-a390a5c5${_scopeId2}><h4 style="${ssrRenderStyle({
                      color: getColor[i] || ""
                    })}" data-v-a390a5c5${_scopeId2}>${ssrInterpolate(i + 1)}</h4><span class="w-12rem flex-1 truncate" data-v-a390a5c5${_scopeId2}>${ssrInterpolate(p.title)}</span><small ml-a w-6rem flex items-center justify-end gap-1 truncate data-v-a390a5c5${_scopeId2}><i i-solar:fire-line-duotone class="scale-0 p-0.5em transition-200 transition-transform group-hover:scale-100" data-v-a390a5c5${_scopeId2}></i> ${ssrInterpolate(p.views)} `);
                    if (p.isEssence) {
                      _push3(ssrRenderComponent(_component_el_tag, {
                        size: "small",
                        effect: "dark",
                        style: {
                          "padding": "0 0.2rem"
                        },
                        type: "warning"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u7CBE `);
                          } else {
                            return [createTextVNode(" \u7CBE ")];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</small></div>`);
                    if (p.cover) {
                      _push3(`<div class="block h-0 w-0 overflow-hidden py-0 opacity-0 transition-200 transition-all group-hover:h-6rem group-hover:w-full group-hover:py-2 group-hover:op-100" data-v-a390a5c5${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_CardElImage, {
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover,
                        fit: "cover",
                        class: "h-full w-full v-card"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [createVNode("div", {
                      class: "flex items-center gap-3 transition-200 hover:text-[var(--el-color-info)]"
                    }, [createVNode("h4", {
                      style: {
                        color: getColor[i] || ""
                      }
                    }, toDisplayString(i + 1), 5), createVNode("span", {
                      class: "w-12rem flex-1 truncate"
                    }, toDisplayString(p.title), 1), createVNode("small", {
                      "ml-a": "",
                      "w-6rem": "",
                      flex: "",
                      "items-center": "",
                      "justify-end": "",
                      "gap-1": "",
                      truncate: ""
                    }, [createVNode("i", {
                      "i-solar:fire-line-duotone": "",
                      class: "scale-0 p-0.5em transition-200 transition-transform group-hover:scale-100"
                    }), createTextVNode(" " + toDisplayString(p.views) + " ", 1), p.isEssence ? (openBlock(), createBlock(_component_el_tag, {
                      key: 0,
                      size: "small",
                      effect: "dark",
                      style: {
                        "padding": "0 0.2rem"
                      },
                      type: "warning"
                    }, {
                      default: withCtx(() => [createTextVNode(" \u7CBE ")]),
                      _: 1
                    })) : createCommentVNode("", true)])]), p.cover ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "block h-0 w-0 overflow-hidden py-0 opacity-0 transition-200 transition-all group-hover:h-6rem group-hover:w-full group-hover:py-2 group-hover:op-100"
                    }, [createVNode(_component_CardElImage, {
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover,
                      fit: "cover",
                      class: "h-full w-full v-card"
                    }, null, 8, ["src"])])) : createCommentVNode("", true)];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (unref(postList).length === 0 && unref(pageInfo).current > 0) {
              _push2(ssrRenderComponent(_component_el_empty, {
                description: "\u6682\u65E0\u5E16\u5B50"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section>`);
          } else {
            return [withDirectives((openBlock(), createBlock("section", {
              class: "grid"
            }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(postList), (p, i) => {
              return openBlock(), createBlock(_component_nuxt_link, {
                key: p.id,
                to: {
                  path: `/community/post/detail/${p.id}`
                },
                class: "group pb-6"
              }, {
                default: withCtx(() => [createVNode("div", {
                  class: "flex items-center gap-3 transition-200 hover:text-[var(--el-color-info)]"
                }, [createVNode("h4", {
                  style: {
                    color: getColor[i] || ""
                  }
                }, toDisplayString(i + 1), 5), createVNode("span", {
                  class: "w-12rem flex-1 truncate"
                }, toDisplayString(p.title), 1), createVNode("small", {
                  "ml-a": "",
                  "w-6rem": "",
                  flex: "",
                  "items-center": "",
                  "justify-end": "",
                  "gap-1": "",
                  truncate: ""
                }, [createVNode("i", {
                  "i-solar:fire-line-duotone": "",
                  class: "scale-0 p-0.5em transition-200 transition-transform group-hover:scale-100"
                }), createTextVNode(" " + toDisplayString(p.views) + " ", 1), p.isEssence ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  size: "small",
                  effect: "dark",
                  style: {
                    "padding": "0 0.2rem"
                  },
                  type: "warning"
                }, {
                  default: withCtx(() => [createTextVNode(" \u7CBE ")]),
                  _: 1
                })) : createCommentVNode("", true)])]), p.cover ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "block h-0 w-0 overflow-hidden py-0 opacity-0 transition-200 transition-all group-hover:h-6rem group-hover:w-full group-hover:py-2 group-hover:op-100"
                }, [createVNode(_component_CardElImage, {
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover,
                  fit: "cover",
                  class: "h-full w-full v-card"
                }, null, 8, ["src"])])) : createCommentVNode("", true)]),
                _: 2
              }, 1032, ["to"]);
            }), 128)), unref(postList).length === 0 && unref(pageInfo).current > 0 ? (openBlock(), createBlock(_component_el_empty, {
              key: 0,
              description: "\u6682\u65E0\u5E16\u5B50"
            })) : createCommentVNode("", true)])), [[_directive_auto_animate]])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/post/Rank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a390a5c5"]]);

export { __nuxt_component_6 as default };
//# sourceMappingURL=Rank-IlBfomYu.mjs.map
