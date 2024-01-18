import { _ as _sfc_main$1 } from './AutoIncre-z4AO2g2Q.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { c as getGoodsListByPage, _ as __nuxt_component_1$2 } from './index-4eJaJKt8.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, mergeProps, unref, withCtx, renderSlot, withDirectives, openBlock, createBlock, toDisplayString, vShow, createCommentVNode, createVNode, createTextVNode, TransitionGroup, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { t as toReactive, w as watchDebounced } from './event-9ZI5GX64.mjs';
import { b as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './ElImage-j3i6j_3Z.mjs';
import './PreLoading-Sou-hyZj.mjs';
import 'currency.js';
import './fetch-YS3Fxkuj.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import '@vue/shared';
import 'pinia-plugin-persistedstate';
import 'lodash-unified';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoodsList",
  __ssrInlineRender: true,
  props: {
    dto: {
      default: () => {
        return {};
      }
    },
    class: {},
    size: {
      default: 10
    },
    limit: {},
    load: {
      type: Boolean
    },
    isTimer: {
      type: Boolean,
      default: true
    },
    showMoreText: {
      type: Boolean,
      default: true
    },
    immediate: {
      type: Boolean,
      default: true
    },
    autoStop: {
      type: Boolean,
      default: true
    },
    transiton: {
      default: "fade-bt-list"
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const isLoading = ref(false);
    const goodsList = ref([]);
    const page = ref(0);
    const size = ref(props.limit || props.size || 10);
    const pageInfo = reactive({
      total: -1,
      pages: -1,
      current: -1
    });
    const isNot = computed(() => {
      return pageInfo.total === 0 && pageInfo.pages === 0;
    });
    const isNoMore = computed(() => {
      return pageInfo.pages > 0 && page.value >= pageInfo.pages;
    });
    async function loadGoodsPage() {
      if (isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && goodsList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const {
        data
      } = await getGoodsListByPage(page.value, size.value, props == null ? void 0 : props.dto);
      pageInfo.total = data.total;
      pageInfo.current = data.current;
      pageInfo.pages = data.pages;
      if (props.isTimer) {
        for await (const p of data.records) {
          p.images = typeof p.images === "string" ? p.images.split(",") : [];
          goodsList.value.push(Object.freeze(p));
        }
      } else {
        goodsList.value.push(...Object.freeze(data.records.map((p) => {
          p.images = typeof p.images === "string" ? p.images.split(",") : [];
          return p;
        })));
      }
      if (props.immediate) {
        isLoading.value = false;
      } else {
        setTimeout(() => {
          isLoading.value = false;
        }, 300);
      }
    }
    function clearResult() {
      goodsList.value.splice(0);
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      page.value = 0;
    }
    const dto = toReactive(props.dto);
    const timer = ref();
    watchDebounced(dto, async () => {
      if (timer.value)
        return;
      clearResult();
      await loadGoodsPage();
      timer.value = setTimeout(() => {
        clearTimeout(timer.value);
        timer.value = null;
      }, 400);
    }, {});
    if (props.immediate)
      loadGoodsPage();
    __expose({
      clearResult,
      // 清除
      loadGoodsPage,
      goodsList,
      pageInfo
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListAutoIncre = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_CardGoodsBox = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_ListAutoIncre, mergeProps({
        immediate: _ctx.immediate,
        "no-more": unref(isNoMore) || unref(isNot),
        loading: unref(isLoading) || !_ctx.immediate,
        "auto-stop": _ctx.autoStop,
        onLoad: loadGoodsPage
      }, _attrs), {
        load: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "load", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "load", {}, void 0, true)];
          }
        }),
        done: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.showMoreText) {
              _push2(`<p style="${ssrRenderStyle(unref(isNoMore) || unref(isNot) ? null : {
                display: "none"
              })}" class="w-1/1 py-8" text-center text-bluegray tracking-1 data-v-5ed468e7${_scopeId}>${ssrInterpolate(unref(isNoMore) ? "\u6682\u65E0\u66F4\u591A\u5546\u54C1" : "\u6682\u65E0\u5546\u54C1")}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [_ctx.showMoreText ? withDirectives((openBlock(), createBlock("p", {
              key: 0,
              class: "w-1/1 py-8",
              "text-center": "",
              "text-bluegray": "",
              "tracking-1": ""
            }, toDisplayString(unref(isNoMore) ? "\u6682\u65E0\u66F4\u591A\u5546\u54C1" : "\u6682\u65E0\u5546\u54C1"), 513)), [[vShow, unref(isNoMore) || unref(isNot)]]) : createCommentVNode("", true)];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "pre", {}, null, _push2, _parent2, _scopeId);
            _push2(`<div${ssrRenderAttrs({
              name: _ctx.transiton,
              class: ["pb-4", props.class !== null ? props.class : "flex flex-wrap"]
            })} data-v-5ed468e7>`);
            ssrRenderList(unref(goodsList), (p) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: p.id,
                to: `/goods/detail/${p.id}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardGoodsBox, {
                      class: "mt-4/100 transition-300 v-card",
                      goods: p
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<small class="ml-a mt-2px text-blueGray" data-v-5ed468e7${_scopeId3}><i i-solar:fire-bold-duotone bg-red-5 p-0.6em data-v-5ed468e7${_scopeId3}></i> ${ssrInterpolate(p.sales)}</small>`);
                        } else {
                          return [createVNode("small", {
                            class: "ml-a mt-2px text-blueGray"
                          }, [createVNode("i", {
                            "i-solar:fire-bold-duotone": "",
                            "bg-red-5": "",
                            "p-0.6em": ""
                          }), createTextVNode(" " + toDisplayString(p.sales), 1)])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [createVNode(_component_CardGoodsBox, {
                      class: "mt-4/100 transition-300 v-card",
                      goods: p
                    }, {
                      default: withCtx(() => [createVNode("small", {
                        class: "ml-a mt-2px text-blueGray"
                      }, [createVNode("i", {
                        "i-solar:fire-bold-duotone": "",
                        "bg-red-5": "",
                        "p-0.6em": ""
                      }), createTextVNode(" " + toDisplayString(p.sales), 1)])]),
                      _: 2
                    }, 1032, ["goods"])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`</div>`);
          } else {
            return [renderSlot(_ctx.$slots, "pre", {}, void 0, true), createVNode(TransitionGroup, {
              tag: "div",
              name: _ctx.transiton,
              class: ["pb-4", props.class !== null ? props.class : "flex flex-wrap"]
            }, {
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(goodsList), (p) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  key: p.id,
                  to: `/goods/detail/${p.id}`
                }, {
                  default: withCtx(() => [createVNode(_component_CardGoodsBox, {
                    class: "mt-4/100 transition-300 v-card",
                    goods: p
                  }, {
                    default: withCtx(() => [createVNode("small", {
                      class: "ml-a mt-2px text-blueGray"
                    }, [createVNode("i", {
                      "i-solar:fire-bold-duotone": "",
                      "bg-red-5": "",
                      "p-0.6em": ""
                    }), createTextVNode(" " + toDisplayString(p.sales), 1)])]),
                    _: 2
                  }, 1032, ["goods"])]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))]),
              _: 1
            }, 8, ["name", "class"])];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/GoodsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ed468e7"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=GoodsList-AABL3AGj.mjs.map
