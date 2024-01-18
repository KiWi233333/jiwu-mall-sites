import { b as _export_sfc, V as useShopStore, u as useUserStore, aT as updateShopcart, S as StatusCode, E as ElMessage, B as BaseUrlImg, Y as useHead, v as appName, e as __nuxt_component_0$1, f as ElMessageBox, aU as useRouter, _ as __nuxt_component_0, g as ElButton } from '../server.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { a as ElCheckboxGroup, E as ElCheckbox } from './checkbox-zYdk3J0T.mjs';
import { _ as _sfc_main$2 } from './AutoIncre-z4AO2g2Q.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-tpk2tUXY.mjs';
import { _ as __nuxt_component_1$1 } from './ElImage-j3i6j_3Z.mjs';
import { E as ElInputNumber } from './input-number-hD1rWVpc.mjs';
import { v as vLoading } from './loading-9ZJxhv9k.mjs';
import { useSSRContext, defineComponent, ref, watch, computed, toRaw, mergeProps, unref, withCtx, createVNode, resolveDirective, openBlock, createBlock, toDisplayString, createTextVNode, isRef, Fragment, renderList, createCommentVNode, withDirectives, vShow } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import currency from 'currency.js';
import { u as useOrderStore } from './useOrderStore-Z9M9KVKz.mjs';
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
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './event-9ZI5GX64.mjs';
import './PreLoading-Sou-hyZj.mjs';
import './index-ukcTjM2L.mjs';
import './index-Jkc1A1yz.mjs';
import './index-deHNvRRV.mjs';
import './index-bcSo8MsF.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ShopLine",
  __ssrInlineRender: true,
  props: {
    shopCart: {}
  },
  setup(__props) {
    const {
      shopCart
    } = __props;
    useShopStore();
    const user = useUserStore();
    const isUpdateLoading = ref(false);
    ref(true);
    const skuList = ref([]);
    const selectShopcartId = ref(shopCart.id);
    watch(shopCart, (vo) => {
      changeUpdateShopcart(vo.skuId, vo.quantity);
    }, {
      deep: true
    });
    async function changeUpdateShopcart(skuId, quantity) {
      if (isUpdateLoading.value || !quantity)
        return;
      isUpdateLoading.value = true;
      const data = await updateShopcart(selectShopcartId.value, {
        skuId,
        quantity
      }, user.getToken);
      if (data.code !== StatusCode.SUCCESS) {
        ElMessage.closeAll();
        ElMessage.error("\u4FEE\u6539\u5931\u8D25\uFF0C\u7A0D\u540E\u91CD\u8BD5\uFF01");
      } else {
        shopCart.skuId = skuId;
        shopCart.quantity = quantity;
      }
      const timer = setTimeout(() => {
        isUpdateLoading.value = false;
        clearTimeout(timer);
      }, 300);
    }
    computed({
      get() {
        return `${shopCart.size || ""} ${shopCart.color || ""} ${shopCart.combo || ""}`;
      },
      set(skuId) {
        const p = toRaw(skuList.value.find((p2) => p2.id === skuId));
        if (p) {
          shopCart.size = p.size;
          shopCart.image = p.image;
          shopCart.price = p.price;
          shopCart.costPrice = p.costPrice;
          shopCart.color = p.color;
          shopCart.combo = p.combo;
          shopCart.skuId = skuId;
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      const _component_card_el_image = __nuxt_component_1$1;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_el_input_number = ElInputNumber;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group mb-3 mt-2 flex-row-bt-c cursor-pointer border-2px rounded-6px transition-300 hover:shadow",
        "border-dashed": "",
        "p-0": "",
        "pr-2": "",
        "border-default": "",
        "md:p-4": "",
        "hover:border": "solid [var(--el-color-primary)]",
        "dark:hover:bg": "dark-1"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isUpdateLoading))))} data-v-7a9eed22>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/goods/detail/${_ctx.shopCart.goodsId}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_card_el_image, {
              loading: "lazy",
              "transition-300": "",
              "hover:transform-scale-110": "",
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.shopCart.image,
              style: {
                "width": "8em",
                "height": "8em",
                "border": "1px solid #eee",
                "border-radius": "4px"
              },
              fit: "cover"
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_card_el_image, {
              loading: "lazy",
              "transition-300": "",
              "hover:transform-scale-110": "",
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.shopCart.image,
              style: {
                "width": "8em",
                "height": "8em",
                "border": "1px solid #eee",
                "border-radius": "4px"
              },
              fit: "cover"
            }, null, 8, ["src"])];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div style="${ssrRenderStyle({
        "width": "78%",
        "height": "100%"
      })}" group flex flex-col items-start justify-between overflow-hidden truncate px-4 data-v-7a9eed22><h3 max-w-12em tracking-1px md:max-w-16em class="... overflow-hidden truncate" data-v-7a9eed22>${ssrInterpolate(_ctx.shopCart.name)}</h3><p mb-5 mt-1 font-700 color-red-6 data-v-7a9eed22> \uFFE5${ssrInterpolate(unref(currency)(_ctx.shopCart.price))} <span text-0.9em color-coolgray style="${ssrRenderStyle({
        "text-decoration": "line-through"
      })}" data-v-7a9eed22> \uFFE5${ssrInterpolate(unref(currency)(_ctx.shopCart.costPrice))}</span></p><p flex-row-bt-c class="mt-2 w-1/1" data-v-7a9eed22>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_el_input_number, {
        modelValue: _ctx.shopCart.quantity,
        "onUpdate:modelValue": ($event) => _ctx.shopCart.quantity = $event,
        size: "small",
        min: 1,
        max: 99
      }, null, _parent));
      _push(`</p></div><div relative flex flex-1 flex-col items-center data-v-7a9eed22><span i-solar:trash-bin-minimalistic-bold-duotone absolute p-3 opacity-0 transition-300 dark:bg-light group-hover:opacity-80 style="${ssrRenderStyle({
        "top": "-3em"
      })}" data-v-7a9eed22></span>`);
      ssrRenderSlot(_ctx.$slots, "btn", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/ShopLine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a9eed22"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "shopcart",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `\u6211\u7684\u8D2D\u7269\u8F66 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`,
      meta: [{
        name: "description",
        content: `\u6211\u7684\u8D2D\u7269\u8F66 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
      }]
    });
    const shop = useShopStore();
    const user = useUserStore();
    const isEdit = ref(false);
    const selectIds = ref([]);
    function deleteBatchShopcart(text = "\u5220\u9664") {
      ElMessageBox();
    }
    function clearShopcart() {
      selectIds.value.push(...shop.shopcartList.map((p) => p.id));
      deleteBatchShopcart("\u6E05\u7A7A");
    }
    const isSelectAll = ref(false);
    watch(isSelectAll, (val) => {
      selectIds.value.splice(0);
      if (val)
        selectIds.value.push(...shop.shopcartList.map((p) => p.id));
    });
    const order = useOrderStore();
    function toOrderPage(ids) {
      const dtoList = [];
      shop.shopcartList.forEach((p) => {
        if (ids.includes(p.id)) {
          const {
            skuId,
            quantity
          } = p;
          dtoList.push({
            skuId,
            quantity
          });
        }
      });
      order.clearOrderItems();
      order.$patch({
        pushOrderItems: dtoList
      });
      useRouter().push({
        path: "/order/detail"
      });
    }
    const getAllPostate = ref(0);
    const getAllNums = ref(0);
    const getAllPrice = computed(() => {
      getAllNums.value = 0;
      getAllPostate.value = 0;
      const selectList = shop.shopcartList.filter((p) => selectIds.value.includes(p.id));
      let prices = currency(0);
      selectList.forEach((p) => {
        if (p.postage)
          getAllPostate.value += +p.postage;
        getAllNums.value += p.quantity;
        prices = prices.add(currency(p.price).multiply(p.quantity).add(+(p.postage || 0)));
      });
      return prices;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_ListAutoIncre = _sfc_main$2;
      const _component_CardShopLine = __nuxt_component_5;
      const _component_el_checkbox = ElCheckbox;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_el_button = ElButton;
      const _directive_incre_up = resolveDirective("incre-up");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6f80651b>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "user",
        menu: ["back"],
        footer: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-6f80651b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", null, [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [createVNode("main", {
                class: "mx-a overflow-y-hidden pb-0 layout-default md:w-700px"
              }, [unref(user).isLogin ? (openBlock(), createBlock("div", {
                key: 0,
                class: "shopcart-list",
                relative: "",
                "mx-a": "",
                "rounded-10px": "",
                "p-4": "",
                "border-default": "",
                "card-default": "",
                "md:p-6": ""
              }, [createVNode("h3", {
                "mb-2": "",
                "border-0": "",
                "border-b-1": "",
                "pb-4": "",
                "text-center": "",
                "tracking-0.1em": "",
                "border-default": ""
              }, [createVNode("small", {
                style: {
                  "font-size": "1rem"
                },
                "float-right": "",
                "my-1": "",
                "cursor-pointer": "",
                "select-none": "",
                plain: !unref(isEdit),
                class: "transition-300",
                "text-green-5": "",
                onClick: ($event) => isEdit.value = !unref(isEdit)
              }, toDisplayString(!unref(isEdit) ? "\u7BA1\u7406" : "\u53D6\u6D88"), 9, ["plain", "onClick"]), createTextVNode(" \u8D2D\u7269\u8F66 ")]), createVNode(_component_el_scrollbar, {
                height: "66vh"
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                  modelValue: unref(selectIds),
                  "onUpdate:modelValue": ($event) => isRef(selectIds) ? selectIds.value = $event : null,
                  size: "large",
                  class: "relative"
                }, {
                  default: withCtx(() => [createVNode(_component_ListAutoIncre, {
                    immediate: true,
                    loading: unref(shop).isLoading,
                    "no-more": unref(shop).notMore,
                    onLoad: unref(shop).loadShopcartList
                  }, {
                    done: withCtx(() => [createVNode("small", {
                      "mt-4": "",
                      "flex-row-c-c": ""
                    }, [createVNode("div", {
                      "opacity-50": ""
                    }, " \u6CA1\u6709\u66F4\u591A\uFF0C\u7EE7\u7EED\u63A2\u7D22\u5427~ "), createVNode(_component_NuxtLink, {
                      to: {
                        path: "/"
                      },
                      class: "ml-2 text-0.8em text-[var(--el-color-info)] opacity-80"
                    }, {
                      default: withCtx(() => [createTextVNode("\u524D\u5F80")]),
                      _: 1
                    })])]),
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(shop).shopcartList, (p) => {
                      return openBlock(), createBlock("li", {
                        key: p.id
                      }, [createVNode(_component_CardShopLine, {
                        "shop-cart": p
                      }, {
                        btn: withCtx(() => [createVNode(_component_el_checkbox, {
                          label: p.id,
                          disabled: !p.stock
                        }, null, 8, ["label", "disabled"])]),
                        _: 2
                      }, 1032, ["shop-cart"])]);
                    }), 128))]),
                    _: 1
                  }, 8, ["loading", "no-more", "onLoad"])]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])]),
                _: 1
              })])) : createCommentVNode("", true), createVNode("div", {
                sticky: "",
                "bottom-4": "",
                "z-99": "",
                class: "my-4 mb-0 w-full animate-fade-in-up animate-duration-300"
              }, [createVNode("div", {
                "flex-row-bt-c": "",
                "p-2": "",
                "px-4": ""
              }, [createVNode("span", {
                "float-left": "",
                "p-1": ""
              }, " \u5171\u8BA1 " + toDisplayString(unref(getAllNums)) + " \u4EF6 ", 1), createVNode("div", {
                "ml-a": "",
                flex: "",
                "items-end": ""
              }, [createVNode("span", {
                "p-1": ""
              }, "\u603B\u8BA1\uFF1A\uFFE5"), withDirectives(createVNode("h2", {
                "text-red-5": ""
              }, null, 512), [[_directive_incre_up, unref(getAllPrice)]])]), withDirectives(createVNode("small", {
                claas: ""
              }, " \uFF08\u8FD0\u8D39\uFF1A" + toDisplayString(unref(currency)(unref(getAllPostate))) + "\uFFE5\uFF09 ", 513), [[vShow, unref(getAllPostate) > 0]])]), createVNode("div", {
                class: "h-4em w-full flex items-center justify-between rounded-10px bg-white px-4 backdrop-blur-2em border-default dark-bg-dark-6"
              }, [createVNode(_component_el_checkbox, {
                modelValue: unref(isSelectAll),
                "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
                size: "large",
                label: "\u5168 \u9009"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode("div", {
                flex: ""
              }, [unref(isEdit) && unref(selectIds).length ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                class: "fadeInOut flex-1",
                style: {
                  "padding": "0em 1em"
                },
                type: "danger",
                disabled: unref(selectIds).length === 0 && !unref(isEdit),
                round: "",
                plain: "",
                onClick: ($event) => deleteBatchShopcart("\u6279\u91CF\u5220\u9664")
              }, {
                default: withCtx(() => [createTextVNode(" \u6279\u91CF\u5220\u9664 "), createVNode("i", {
                  "i-solar:trash-bin-trash-broken": "",
                  "mr-1": ""
                })]),
                _: 1
              }, 8, ["disabled", "onClick"])) : createCommentVNode("", true), unref(isEdit) ? (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "fadeInOut flex-1",
                style: {
                  "padding": "0em 1em"
                },
                type: "danger",
                plain: "",
                disabled: !unref(isEdit),
                round: "",
                onClick: clearShopcart
              }, {
                default: withCtx(() => [createVNode("i", {
                  "i-solar:trash-bin-trash-broken": "",
                  "mr-1": ""
                }), createTextVNode(" \u6E05\u7A7A ")]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true), createVNode(_component_el_button, {
                class: "fadeInOut flex-1",
                style: {
                  "padding": "0em 2em"
                },
                type: "info",
                round: "",
                disabled: unref(selectIds).length === 0,
                "tracking-0.1em": "",
                onClick: ($event) => toOrderPage(unref(selectIds))
              }, {
                default: withCtx(() => [createTextVNode(" \u53BB\u7ED3\u7B97 ")]),
                _: 1
              }, 8, ["disabled", "onClick"])])])])])]),
              _: 1
            })])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/shopcart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shopcart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6f80651b"]]);

export { shopcart as default };
//# sourceMappingURL=shopcart-eskicbMB.mjs.map
