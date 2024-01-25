import { m as useFetch, o as BaseUrl, b as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-qWvYy4Gj.mjs';
import { c as getGoodsListByPage, _ as __nuxt_component_1$1 } from './index-VI4pRKfC.mjs';
import { ElText } from './index-QzTfU9Or.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, withAsyncContext, createVNode, resolveDynamicComponent, TransitionGroup, withCtx, unref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { t as toReactive, w as watchDebounced } from './index-daJZwzbi.mjs';

function getGoodsCategoryTree() {
  return useFetch(`${BaseUrl}/goods/category/tree`, "$HreoDSWYKV");
}
function getGoodsCategoryList() {
  return useFetch(`${BaseUrl}/goods/category/list`, "$5FhJKlx1F0");
}
function getGoodsCategoryByGid(gid) {
  return useFetch(`${BaseUrl}/goods/category/one/${gid}`, "$hFrW1zsa4r");
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoodsListSsr",
  __ssrInlineRender: true,
  props: {
    dto: { default: () => {
      return {};
    } },
    class: {},
    limit: {},
    load: { type: Boolean },
    isTimer: { type: Boolean, default: true },
    showMoreText: { type: Boolean, default: true },
    immediate: { type: Boolean, default: true },
    transiton: {}
  },
  async setup(__props, { expose: __expose }) {
    let __temp, __restore;
    const props = __props;
    const isLoading = ref(false);
    const goodsList = ref([]);
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
      if (pageInfo.pages > 0 && (page.value >= pageInfo.pages || props.limit !== void 0 && props.limit <= goodsList.value.length))
        return true;
      else
        return false;
    });
    async function loadGoodsPage() {
      if (isLoading.value || isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && goodsList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const { data } = await getGoodsListByPage(page.value, size.value, props == null ? void 0 : props.dto);
      pageInfo.total = data.total;
      pageInfo.current = data.current;
      pageInfo.pages = data.pages;
      if (props.isTimer) {
        for await (const p of data.records) {
          p.images = typeof p.images === "string" ? p.images.split(",") : [];
          goodsList.value.push(Object.freeze(p));
        }
      } else {
        for (const p of data.records) {
          p.images = typeof p.images === "string" ? p.images.split(",") : [];
          goodsList.value.push(p);
        }
      }
      isLoading.value = false;
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
    watchDebounced(
      dto,
      async () => {
        if (timer.value)
          return;
        clearResult();
        await loadGoodsPage();
        timer.value = setTimeout(() => {
          clearTimeout(timer.value);
          timer.value = null;
        }, 400);
      },
      {}
    );
    if (props.immediate)
      loadGoodsPage();
    __expose({
      clearResult,
      // 清除
      loadGoodsPage,
      goodsList,
      pageInfo
    });
    if (props.immediate)
      [__temp, __restore] = withAsyncContext(() => loadGoodsPage()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CardGoodsBox = __nuxt_component_1$1;
      const _component_el_text = ElText;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-a2462ea3>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(props.transiton ? TransitionGroup : "div"), {
        tag: "div",
        name: _ctx.transiton || "fade-bt-list",
        class: ["pb-4", props.class !== null ? props.class : "flex flex-wrap"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
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
                          _push4(`<small class="ml-a mt-2px text-blueGray" data-v-a2462ea3${_scopeId3}><i i-solar:fire-bold-duotone bg-red-5 p-0.6em data-v-a2462ea3${_scopeId3}></i> ${ssrInterpolate(p.sales)}</small>`);
                        } else {
                          return [
                            createVNode("small", { class: "ml-a mt-2px text-blueGray" }, [
                              createVNode("i", {
                                "i-solar:fire-bold-duotone": "",
                                "bg-red-5": "",
                                "p-0.6em": ""
                              }),
                              createTextVNode(" " + toDisplayString(p.sales), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_CardGoodsBox, {
                        class: "mt-4/100 transition-300 v-card",
                        goods: p
                      }, {
                        default: withCtx(() => [
                          createVNode("small", { class: "ml-a mt-2px text-blueGray" }, [
                            createVNode("i", {
                              "i-solar:fire-bold-duotone": "",
                              "bg-red-5": "",
                              "p-0.6em": ""
                            }),
                            createTextVNode(" " + toDisplayString(p.sales), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["goods"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(goodsList), (p) => {
                return openBlock(), createBlock(_component_NuxtLink, {
                  key: p.id,
                  to: `/goods/detail/${p.id}`
                }, {
                  default: withCtx(() => [
                    createVNode(_component_CardGoodsBox, {
                      class: "mt-4/100 transition-300 v-card",
                      goods: p
                    }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "ml-a mt-2px text-blueGray" }, [
                          createVNode("i", {
                            "i-solar:fire-bold-duotone": "",
                            "bg-red-5": "",
                            "p-0.6em": ""
                          }),
                          createTextVNode(" " + toDisplayString(p.sales), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["goods"])
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }), _parent);
      if (_ctx.showMoreText) {
        _push(`<small style="${ssrRenderStyle(unref(isNoMore) || unref(isNot) ? null : { display: "none" })}" mt-2 block w-full text-center text-bluegray tracking-1 data-v-a2462ea3>${ssrInterpolate(unref(isNoMore) ? "\u6682\u65E0\u66F4\u591A\u5546\u54C1" : "\u6682\u65E0\u5546\u54C1")}</small>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.showMoreText && !unref(isNoMore) && !unref(isNot)) {
        _push(ssrRenderComponent(_component_el_text, {
          "mt-4": "",
          block: "",
          "w-full": "",
          "cursor-pointer": "",
          "text-center": "",
          onClick: ($event) => loadGoodsPage()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u52A0\u8F7D\u66F4\u591A `);
            } else {
              return [
                createTextVNode(" \u52A0\u8F7D\u66F4\u591A ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/GoodsListSsr.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a2462ea3"]]);

export { __nuxt_component_1 as _, getGoodsCategoryTree as a, getGoodsCategoryList as b, getGoodsCategoryByGid as g };
//# sourceMappingURL=GoodsListSsr-NiOzqUEG.mjs.map
