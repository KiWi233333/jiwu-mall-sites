import { b as _export_sfc, n as navigateTo, u as useUserStore, Y as useHead, v as appName, e as __nuxt_component_0$1, g as ElButton, S as StatusCode, E as ElMessage, f as ElMessageBox, _ as __nuxt_component_0 } from '../server.mjs';
import { E as ElDivider } from './divider-PhlLqhAq.mjs';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { _ as _sfc_main$5 } from './AutoIncre-z4AO2g2Q.mjs';
import { E as ElDatePicker } from './date-picker-r2lWvUoQ.mjs';
import { ElText } from './index-eePIGq3N.mjs';
import { _ as _sfc_main$4 } from './DelayTimer-F8E5aGkX.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { useSSRContext, defineComponent, resolveDirective, mergeProps, toRefs, computed, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, createCommentVNode, toDisplayString, ref, withDirectives, vShow, isRef, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { u as useOrderStore } from './useOrderStore-Z9M9KVKz.mjs';
import { O as OrdersStatus, f as getAllOrderPage, h as getOrderPageByDTO, c as cancelOrders, e as deleteOrders, r as refundOrders, d as checkDeliveryOrders } from './index-bcSo8MsF.mjs';
import currency from 'currency.js';
import { b as useDateFormat } from './event-9ZI5GX64.mjs';
import { E as ElNotification } from './index-KIyZNhTO.mjs';
import { v as vLoading } from './loading-9ZJxhv9k.mjs';
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
import './strings-Xcuto3Xi.mjs';
import './aria-sbEPrgvQ.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import './index-ukcTjM2L.mjs';
import './utils-e-yu3oTC.mjs';
import './index-Jkc1A1yz.mjs';
import './arrays-ZDr1kzfz.mjs';
import './index-S-yJffF9.mjs';
import './focus-trap-FUoXuQZs.mjs';
import './index-deHNvRRV.mjs';
import './index-Ud8N-GPr.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CopyText",
  __ssrInlineRender: true,
  props: {
    text: {},
    pretext: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_copying = resolveDirective("copying");
      _push(`<small${ssrRenderAttrs(mergeProps({
        class: "cursor-pointer transition-300 hover:text-[var(--el-color-info)]"
      }, _attrs))}><div inline>${ssrInterpolate(_ctx.pretext)}</div><div${ssrRenderAttrs(mergeProps({
        "ml-a": "",
        inline: ""
      }, ssrGetDirectiveProps(_ctx, _directive_copying, _ctx.text, void 0, {
        toast: true
      })))}>${ssrInterpolate(_ctx.text)}</div>`);
      if (_ctx.icon) {
        _push(`<i class="${ssrRenderClass([_ctx.icon, "ml-1 p-0.5em opacity-60"])}"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</small>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btn/CopyText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InfoLine",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  emits: ["submit"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const {
      order
    } = toRefs(props);
    const store = useOrderStore();
    const types = computed(() => {
      const data = {
        banner: "",
        type: "",
        btns: []
      };
      switch (order.value.status) {
        case OrdersStatus.UN_PAID:
          data.banner = "\u5F85\u4ED8\u6B3E";
          data.btns = [{
            title: "\u53D6 \u6D88",
            type: "default",
            fn: () => {
              emit("submit", "cancel", order.value);
            }
          }, {
            title: "\u4FEE \u6539",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }, {
            title: "\u7ACB\u5373\u4ED8\u6B3E",
            type: "danger",
            fn: () => {
              toDetail(order.value);
            }
          }];
          data.type = "danger";
          break;
        case OrdersStatus.PAID:
          data.banner = "\u5DF2\u4ED8\u6B3E\uFF0C\u7B49\u5F85\u53D1\u8D27";
          data.type = "primary";
          data.btns = [{
            title: "\u9000 \u6B3E",
            type: "default",
            fn: () => {
              emit("submit", "pushRefund", order);
            }
          }, {
            title: "\u50AC\u53D1\u8D27",
            type: "primary",
            fn: () => {
              emit("submit", "toastDelivery");
            }
          }];
          break;
        case OrdersStatus.DELIVERED:
          data.banner = "\u5DF2\u53D1\u8D27\uFF0C\u8BF7\u7B49\u5F85\u7269\u6D41";
          data.type = "info";
          data.btns = [{
            title: "\u9000 \u6B3E",
            type: "default",
            fn: () => {
              emit("submit", "pushRefund", order);
            }
          }, {
            title: "\u786E\u8BA4\u6536\u8D27",
            type: "info",
            fn: () => {
              emit("submit", "checkDelivery", order);
            }
          }];
          break;
        case OrdersStatus.RECEIVED:
          data.banner = "\u5DF2\u786E\u8BA4\u6536\u8D27\uFF0C\u671F\u5F85\u4F60\u7684\u8BC4\u4EF7\uFF01";
          data.type = "info";
          data.btns = [{
            title: "\u518D\u6765\u4E00\u5355",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }, {
            title: "\u53BB\u8BC4\u4EF7",
            type: "info",
            fn: () => {
              toCommon();
            }
          }];
          break;
        case OrdersStatus.COMMENTED:
          data.banner = "\u5DF2\u5B8C\u6210\u8BC4\u8BBA\uFF0C\u6B22\u8FCE\u4E0B\u6B21\u5149\u4E34\uFF01";
          data.type = "success";
          data.btns = [{
            title: "\u518D\u6765\u4E00\u5355",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }];
          break;
        case OrdersStatus.CANCELED:
          data.banner = "\u8BA2\u5355\u5DF2\u53D6\u6D88";
          data.type = "danger";
          data.btns = [{
            title: "\u5220\u9664\u8BA2\u5355",
            type: "danger",
            fn: () => {
              emit("submit", "toDelete", order.value);
            }
          }, {
            title: "\u518D\u6765\u4E00\u5355",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }];
          break;
        case OrdersStatus.DELAY_CANCELED:
          data.banner = "\u8BA2\u5355\u8D85\u65F6\uFF0C\u5DF2\u81EA\u52A8\u53D6\u6D88";
          data.type = "danger";
          data.btns = [{
            title: "\u5220\u9664\u8BA2\u5355",
            type: "danger",
            fn: () => {
              emit("submit", "toDelete", order.value);
            }
          }, {
            title: "\u518D\u6765\u4E00\u5355",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }];
          break;
        case OrdersStatus.REFUND:
          data.banner = "\u53D1\u8D77\u9000\u6B3E\u4E2D\uFF0C\u7B49\u7B49\u5356\u5BB6\u5904\u7406...";
          data.type = "";
          data.btns = [{
            title: "\u5904\u7406\u4E2D\uFF0C\u8BF7\u7A0D\u540E",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }];
          break;
        case OrdersStatus.REFUND_SUCCESS:
          data.banner = "\u9000\u6B3E\u6210\u529F\uFF0C\u8BF7\u6CE8\u610F\u5230\u8D26\uFF01";
          data.type = "info";
          data.btns = [{
            title: "\u5DF2\u9000\u6B3E",
            type: "default",
            fn: () => {
              toDetail(order.value);
            }
          }];
          break;
      }
      return data;
    });
    const priceClass = computed(() => {
      return `text-[var(--el-color-${types.value.type || "default"})]`;
    });
    function toDetail(o = order.value) {
      store.$patch({
        orderId: o.id,
        status: o.status,
        orderInfo: {
          ...o
        },
        pushOrderItems: [...o.ordersItems.map((p) => {
          return {
            skuId: p.skuId,
            quantity: p.quantity,
            // couponId: p?.couponId,
            shopId: p == null ? void 0 : p.shopId,
            activityId: p == null ? void 0 : p.activityId
          };
        })],
        unPaidVO: {
          finalPrice: o.totalPrice,
          reducePrice: currency(o.totalPrice).subtract(o.spendPrice).value
        }
      });
      setTimeout(() => {
        navigateTo(`/order/detail?id=${o.id}`, {
          open: {
            target: "_blank"
          }
        });
      }, 50);
    }
    function toCommon() {
      if (order.value.status !== OrdersStatus.RECEIVED)
        return;
      navigateTo({
        path: `/order/comment/${order.value.id}`
      });
    }
    const getReduce = computed(() => {
      if (order.value.spendPrice)
        return currency(order.value.totalPrice).subtract(order.value.spendPrice);
      else
        return null;
    });
    function delayOrder() {
      order.value.status = OrdersStatus.DELAY_CANCELED;
      order.value.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_text = ElText;
      const _component_OrderDelayTimer = _sfc_main$4;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_el_tag = ElTag;
      const _component_BtnCopyText = _sfc_main$3;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group mb-6 rounded-10px bg-white p-4 tracking-0.1em shadow-none backdrop-blur-2rem transition-300 border-default dark:bg-dark-400 active:shadow hover:shadow"
      }, _attrs))} data-v-6f0e1f95><span class="flex items-center border-0 border-b-1px pb-2 border-default" data-v-6f0e1f95><i class="i-solar:shop-bold-duotone mr-2 bg-[var(--el-color-primary)] p-2 opacity-50" data-v-6f0e1f95></i><small font-600 data-v-6f0e1f95>\u6781\u7269\u5708</small><div ml-a data-v-6f0e1f95>`);
      _push(ssrRenderComponent(_component_el_text, {
        type: unref(types).type,
        class: "flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(order).status === ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).UN_PAID) {
              _push2(`<span flex items-center data-v-6f0e1f95${_scopeId}>`);
              _push2(ssrRenderComponent(_component_OrderDelayTimer, {
                date: new Date(unref(order).createTime),
                onDelay: delayOrder
              }, null, _parent2, _scopeId));
              _push2(` \uFF0C </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span data-v-6f0e1f95${_scopeId}>${ssrInterpolate(unref(types).banner)}</span>`);
          } else {
            return [unref(order).status === ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).UN_PAID ? (openBlock(), createBlock("span", {
              key: 0,
              flex: "",
              "items-center": ""
            }, [createVNode(_component_OrderDelayTimer, {
              date: new Date(unref(order).createTime),
              onDelay: delayOrder
            }, null, 8, ["date"]), createTextVNode(" \uFF0C ")])) : createCommentVNode("", true), createVNode("span", null, toDisplayString(unref(types).banner), 1)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></span><!--[-->`);
      ssrRenderList(unref(order).ordersItems, (p) => {
        _push(`<div class="flex cursor-pointer items-center" my-4 data-v-6f0e1f95>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`<div class="center flex flex-1 flex-col overflow-hidden truncate px-2 text-0.8rem leading-1.6em md:px-4 md:text-1rem md:leading-1.8em" data-v-6f0e1f95><strong flex-1 truncate data-v-6f0e1f95>${ssrInterpolate(p.goods.name)} `);
        if (p.activityId) {
          _push(ssrRenderComponent(_component_el_tag, {
            type: "danger",
            size: "small",
            "opacity-80": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u6D3B\u52A8 `);
              } else {
                return [createTextVNode(" \u6D3B\u52A8 ")];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</strong><small truncate data-v-6f0e1f95>${ssrInterpolate([p.goodsSku.size, p.goodsSku.color, p.goodsSku.combo].filter((p2) => p2).join(" | "))}</small><small ml-a inline flex flex-col justify-end data-v-6f0e1f95><div ml-a hidden line-through opacity-80 md:block data-v-6f0e1f95> \uFFE5${ssrInterpolate(unref(currency)(p.goodsSku.price))}</div><div opacity-80 class="${ssrRenderClass([unref(priceClass), "text-1.2em font-600"])}" data-v-6f0e1f95> \uFFE5${ssrInterpolate(unref(currency)(p.goodsSku.price))}</div></small></div><span ml-4 h-full flex items-center font-600 data-v-6f0e1f95> X${ssrInterpolate(p.quantity)}</span></div>`);
      });
      _push(`<!--]--><div class="mt-4 w-full flex flex-col" data-v-6f0e1f95><div flex-row-bt-c data-v-6f0e1f95>`);
      _push(ssrRenderComponent(_component_BtnCopyText, {
        hidden: "",
        "md:inline": "",
        class: "opacity-0 opacity-80 hover:underline group-hover:opacity-70",
        text: unref(order).id,
        pretext: "\u8BA2\u5355\u53F7\uFF1A"
      }, null, _parent));
      if (unref(getReduce) && unref(getReduce).value > 0) {
        _push(`<small class="mb-2 ml-a" data-v-6f0e1f95> -\uFFE5${ssrInterpolate(unref(getReduce))}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div flex-row-bt-c data-v-6f0e1f95><span ml-a flex text-1.2rem font-600 data-v-6f0e1f95><small text-0.85rem data-v-6f0e1f95>\u603B\u8BA1\uFF1A</small><div class="${ssrRenderClass(unref(priceClass))}" data-v-6f0e1f95> \uFFE5${ssrInterpolate(unref(getReduce) ? unref(currency)(unref(order).spendPrice) : unref(currency)(unref(order).totalPrice))}</div></span></div></div><div mt-3 flex-row-bt-c tracking-0.3em data-v-6f0e1f95><div class="left flex cursor-pointer items-center" data-v-6f0e1f95><i i-solar:headphones-square-broken bg-dark p-1.8 dark:bg-light data-v-6f0e1f95></i><small class="mx-2 hover:text-[var(--el-color-primary)] hover:underline" data-v-6f0e1f95>\u5BA2\u670D</small></div><div class="btns" data-v-6f0e1f95><!--[-->`);
      ssrRenderList(unref(types).btns, (p) => {
        _push(ssrRenderComponent(_component_el_button, {
          key: p.title,
          class: "ml-2 hover:-translate-y-0.15em",
          type: p.type || "default",
          onClick: ($event) => (p.fn || toDetail)()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(p.title)}`);
            } else {
              return [createTextVNode(toDisplayString(p.title), 1)];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/InfoLine.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6f0e1f95"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InfoList",
  __ssrInlineRender: true,
  props: {
    dto: {
      default: () => {
        return {};
      }
    },
    status: {
      default: () => -1
    }
  },
  setup(__props) {
    const props = __props;
    const params = ref({
      id: void 0,
      endTime: void 0,
      startTime: void 0
    });
    const user = useUserStore();
    const isLoading = ref(false);
    const list2 = ref([]);
    const page = ref(0);
    const size = ref(10);
    const pageInfo = ref({
      total: -1,
      pages: -1,
      current: -1
    });
    const isNotMore = computed(() => {
      return page.value === pageInfo.value.pages;
    });
    const isNothing = computed(() => {
      return pageInfo.value.pages === 0;
    });
    async function loadOrdersPage() {
      if (isNotMore.value || isNothing.value || isLoading.value)
        return;
      isLoading.value = true;
      page.value++;
      const {
        data,
        code
      } = props.status === -1 ? await getAllOrderPage(page.value, size.value, params.value || {}, user.getToken) : await getOrderPageByDTO(props.status, page.value, size.value, params.value || {}, user.getToken);
      if (code === StatusCode.SUCCESS) {
        if (data.records.length)
          list2.value.push(...data.records);
        pageInfo.value = {
          total: data.total,
          pages: data.pages,
          current: data.current
        };
      } else {
        ElMessage.error({
          grouping: true,
          message: "\u83B7\u53D6\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
        });
      }
      setTimeout(() => {
        isLoading.value = false;
      }, 120);
    }
    loadOrdersPage();
    function reload() {
      page.value = 0;
      pageInfo.value = {
        total: -1,
        pages: -1,
        current: -1
      };
      list2.value.splice(0);
      loadOrdersPage();
    }
    function reloadSearch() {
      params.value.startTime = void 0;
      params.value.endTime = void 0;
      reload();
    }
    const isUpdateLoading = ref(false);
    function submit(type, order) {
      switch (type) {
        case "cancel":
          cancel(order);
          break;
        case "toastDelivery":
          toastDelivery();
          break;
        case "pushRefund":
          pushRefund(order);
          break;
        case "checkDelivery":
          checkDelivery(order);
          break;
        case "toDelete":
          toDelete(order);
          break;
      }
    }
    async function cancel(order) {
      if (order.status !== OrdersStatus.UN_PAID)
        return;
      try {
        const action = await ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u8BA2\u5355\uFF1F", "\u53D6\u6D88\u63D0\u793A", {
          lockScroll: false,
          confirmButtonText: "\u786E \u8BA4",
          confirmButtonClass: "el-button--primary is-plain border-default ",
          cancelButtonText: "\u53D6 \u6D88",
          center: true
        });
        if (action === "confirm") {
          isUpdateLoading.value = true;
          const {
            code
          } = await cancelOrders(order.id, user.getToken);
          isUpdateLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
            order.status = OrdersStatus.CANCELED;
            ElNotification.success({
              title: "\u53D6\u6D88\u6210\u529F",
              message: "\u8BA2\u5355\u53D6\u6D88\u6210\u529F\uFF0C\u4F18\u60E0\u5377\u7B49\u4F18\u60E0\u4E5F\u5C06\u539F\u8DEF\u9000\u56DE\uFF01"
            });
          } else {
            ElNotification.error({
              title: "\u8BA2\u5355\u53D6\u6D88\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
            });
          }
        }
      } catch (e) {
        isUpdateLoading.value = false;
      } finally {
        isUpdateLoading.value = false;
      }
    }
    function toastDelivery() {
      ElMessageBox.alert("\u6211\u4EEC\u5DF2\u6536\u5230\u60A8\u7684\u8BA2\u5355\uFF0C\u5C06\u5C3D\u5FEB\u5904\u7406\u5E76\u5B89\u6392\u53D1\u8D27\uFF01", "\u63D0 \u9192", {
        lockScroll: false,
        confirmButtonText: "\u597D \u7684",
        center: true
      }).catch();
    }
    async function toDelete(order) {
      if (order.status !== OrdersStatus.REFUND_SUCCESS && order.status !== OrdersStatus.CANCELED && order.status !== OrdersStatus.DELAY_CANCELED && order.status !== OrdersStatus.COMMENTED)
        return;
      try {
        const action = await ElMessageBox.confirm("\u5220\u9664\u5C06\u6C38\u4E45\u79FB\u9664\u8BE5\u8BA2\u5355\u53CA\u5176\u76F8\u5173\u4FE1\u606F\uFF0C\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F", "\u5220\u9664\u64CD\u4F5C", {
          center: true,
          lockScroll: false,
          confirmButtonText: "\u5220 \u9664",
          confirmButtonClass: "el-button--danger border-default shadow-sm",
          cancelButtonText: "\u53D6 \u6D88"
        });
        if (action === "confirm") {
          isLoading.value = true;
          const {
            code
          } = await deleteOrders(order.id, user.getToken);
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            for (let i = 0; i < list2.value.length; i++) {
              if (list2.value[i].id === order.id) {
                list2.value.splice(i, 1);
                return;
              }
            }
            ElNotification.success({
              title: "\u5220\u9664\u63D0\u793A",
              message: "\u8BA2\u5355\u548C\u76F8\u5173\u4FE1\u606F\u79FB\u9664\u6210\u529F\uFF01"
            });
          } else {
            ElNotification.error({
              title: "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
            });
          }
        }
      } catch (e) {
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    }
    async function pushRefund(order) {
      if (order.status !== OrdersStatus.PAID && order.status !== OrdersStatus.RECEIVED && order.status !== OrdersStatus.DELIVERED)
        return;
      try {
        const action = await ElMessageBox.confirm("\u786E\u8BA4\u53D1\u8D77\u9000\u6B3E\uFF1F\u{1F622}", "\u9000\u6B3E\u63D0\u793A", {
          center: true,
          lockScroll: false,
          confirmButtonText: "\u9000 \u6B3E",
          confirmButtonClass: "el-button--danger border-default shadow-sm",
          cancelButtonText: "\u53D6 \u6D88"
        });
        if (action === "confirm") {
          isLoading.value = true;
          const {
            message,
            code
          } = await refundOrders(order.id, user.getToken);
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
            if (order.status === OrdersStatus.RECEIVED) {
              order.status = OrdersStatus.REFUND;
              ElNotification.success({
                title: "\u53D1\u8D77\u9000\u6B3E\u6210\u529F",
                message
              });
            } else {
              order.status = OrdersStatus.REFUND_SUCCESS;
              ElNotification.success({
                title: "\u53D1\u8D77\u9000\u6B3E\u6210\u529F",
                message: "\u672A\u53D1\u8D27\uFF0C\u6B63\u5728\u81EA\u52A8\u9000\u6B3E\uFF0C\u8BF7\u7B49\u5F85\uFF01"
              });
            }
          } else {
            ElNotification.error({
              title: "\u53D1\u8D77\u9000\u6B3E\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
            });
          }
        }
      } catch (e) {
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    }
    async function checkDelivery(order) {
      if (order.status !== OrdersStatus.DELIVERED)
        return;
      try {
        const action = await ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u6536\u8D27\uFF1F", "\u6536\u8D27\u63D0\u793A", {
          center: true,
          confirmButtonText: "\u786E \u8BA4",
          lockScroll: false,
          confirmButtonClass: "el-button--success border-default shadow-sm",
          cancelButtonText: "\u53D6 \u6D88"
        });
        if (action === "confirm") {
          isLoading.value = true;
          const {
            code
          } = await checkDeliveryOrders(order.id, user.getToken);
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
            order.status = OrdersStatus.RECEIVED;
            ElNotification.success({
              title: "\u6536\u8D27\u6210\u529F",
              message: "\u6536\u8D27\u786E\u8BA4\u6210\u529F\uFF01\u5982\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\u4EEC\u7684\u5BA2\u670D\u3002"
            });
          } else {
            ElNotification.error({
              title: "\u786E\u8BA4\u6536\u8D27\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
            });
          }
        }
      } catch (e) {
      } finally {
        isLoading.value = false;
      }
    }
    const isShow = ref(false);
    const selectDate = ref("");
    function changeDate() {
      const startTime = useDateFormat(selectDate.value[0], "YYYY-MM-DD HH:mm:ss").value.toString();
      const endTime = useDateFormat(selectDate.value[1], "YYYY-MM-DD HH:mm:ss").value.toString();
      params.value.startTime = startTime;
      params.value.endTime = endTime;
      reload();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_ListAutoIncre = _sfc_main$5;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_button = ElButton;
      const _component_OrderInfoLine = __nuxt_component_4;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_component_el_scrollbar, mergeProps({
        height: "70vh",
        class: "group px-2",
        style: {
          "overflow": "auto"
        }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ListAutoIncre, {
              immediate: true,
              "no-more": unref(isNotMore) || unref(isNothing),
              loading: unref(isLoading),
              onLoad: loadOrdersPage
            }, {
              done: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p style="${ssrRenderStyle(!unref(isNothing) ? null : {
                    display: "none"
                  })}" class="w-1/1 py-4" text-center text-bluegray tracking-1${_scopeId2}> \u6682\u65E0\u66F4\u591A\u8BA2\u5355 </p><p style="${ssrRenderStyle(unref(isNothing) ? null : {
                    display: "none"
                  })}" class="w-1/1 py-4" text-center text-bluegray tracking-1${_scopeId2}> \u6682\u65E0\u8BA2\u5355\uFF0C\u5FEB\u53BB\u4E0B\u5355\u5427 ~ </p>`);
                } else {
                  return [withDirectives(createVNode("p", {
                    class: "w-1/1 py-4",
                    "text-center": "",
                    "text-bluegray": "",
                    "tracking-1": ""
                  }, " \u6682\u65E0\u66F4\u591A\u8BA2\u5355 ", 512), [[vShow, !unref(isNothing)]]), withDirectives(createVNode("p", {
                    class: "w-1/1 py-4",
                    "text-center": "",
                    "text-bluegray": "",
                    "tracking-1": ""
                  }, " \u6682\u65E0\u8BA2\u5355\uFF0C\u5FEB\u53BB\u4E0B\u5355\u5427 ~ ", 512), [[vShow, unref(isNothing)]])];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mb-4 ml-a flex cursor-pointer items-center opacity-60 group-hover:opacity-100"${_scopeId2}><small w-6rem${_scopeId2}>\u7B5B\u9009\uFF1A</small><div class="${ssrRenderClass([{
                    "scale-x-100": unref(isShow)
                  }, "ml-a flex-row-c-c transform-origin-right scale-x-0 truncate py-1 transition-300 transition-transform"])}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_date_picker, {
                    modelValue: unref(selectDate),
                    "onUpdate:modelValue": ($event) => isRef(selectDate) ? selectDate.value = $event : null,
                    format: "YYYY-MM-DD HH:mm:ss",
                    type: "datetimerange",
                    size: "small",
                    "start-placeholder": "\u8D77 \u59CB",
                    "time-arrow-control": true,
                    "end-placeholder": "\u7ED3 \u675F",
                    onChange: changeDate
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_button, {
                    size: "small",
                    "ml-1": "",
                    "md:ml-2": "",
                    onClick: reloadSearch
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u91CD\u7F6E `);
                      } else {
                        return [createTextVNode(" \u91CD\u7F6E ")];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_el_button, {
                    size: "small",
                    "ml-1": "",
                    "md:ml-2": "",
                    type: unref(isShow) ? "danger" : "default",
                    onClick: ($event) => isShow.value = !unref(isShow)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(isShow) ? "\u6536\u8D77" : "\u5C55\u5F00")}`);
                      } else {
                        return [createTextVNode(toDisplayString(unref(isShow) ? "\u6536\u8D77" : "\u5C55\u5F00"), 1)];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><ul${ssrRenderAttrs(mergeProps({
                    class: "relative"
                  }, ssrGetDirectiveProps(_ctx, _directive_auto_animate, {
                    duration: 300,
                    easing: "cubic-bezier(0.61, 0.225, 0.195, 1.19)"
                  })))}${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(list2), (p) => {
                    _push3(ssrRenderComponent(_component_OrderInfoLine, {
                      key: p.id,
                      order: p,
                      onSubmit: submit
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [createVNode("div", {
                    class: "mb-4 ml-a flex cursor-pointer items-center opacity-60 group-hover:opacity-100"
                  }, [createVNode("small", {
                    "w-6rem": ""
                  }, "\u7B5B\u9009\uFF1A"), createVNode("div", {
                    class: ["ml-a flex-row-c-c transform-origin-right scale-x-0 truncate py-1 transition-300 transition-transform", {
                      "scale-x-100": unref(isShow)
                    }]
                  }, [createVNode(_component_el_date_picker, {
                    modelValue: unref(selectDate),
                    "onUpdate:modelValue": ($event) => isRef(selectDate) ? selectDate.value = $event : null,
                    format: "YYYY-MM-DD HH:mm:ss",
                    type: "datetimerange",
                    size: "small",
                    "start-placeholder": "\u8D77 \u59CB",
                    "time-arrow-control": true,
                    "end-placeholder": "\u7ED3 \u675F",
                    onChange: changeDate
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_button, {
                    size: "small",
                    "ml-1": "",
                    "md:ml-2": "",
                    onClick: reloadSearch
                  }, {
                    default: withCtx(() => [createTextVNode(" \u91CD\u7F6E ")]),
                    _: 1
                  })], 2), createVNode(_component_el_button, {
                    size: "small",
                    "ml-1": "",
                    "md:ml-2": "",
                    type: unref(isShow) ? "danger" : "default",
                    onClick: ($event) => isShow.value = !unref(isShow)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(isShow) ? "\u6536\u8D77" : "\u5C55\u5F00"), 1)]),
                    _: 1
                  }, 8, ["type", "onClick"])]), withDirectives((openBlock(), createBlock("ul", {
                    class: "relative"
                  }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(list2), (p) => {
                    return openBlock(), createBlock(_component_OrderInfoLine, {
                      key: p.id,
                      order: p,
                      onSubmit: submit
                    }, null, 8, ["order"]);
                  }), 128))])), [[_directive_auto_animate, {
                    duration: 300,
                    easing: "cubic-bezier(0.61, 0.225, 0.195, 1.19)"
                  }]])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ListAutoIncre, {
              immediate: true,
              "no-more": unref(isNotMore) || unref(isNothing),
              loading: unref(isLoading),
              onLoad: loadOrdersPage
            }, {
              done: withCtx(() => [withDirectives(createVNode("p", {
                class: "w-1/1 py-4",
                "text-center": "",
                "text-bluegray": "",
                "tracking-1": ""
              }, " \u6682\u65E0\u66F4\u591A\u8BA2\u5355 ", 512), [[vShow, !unref(isNothing)]]), withDirectives(createVNode("p", {
                class: "w-1/1 py-4",
                "text-center": "",
                "text-bluegray": "",
                "tracking-1": ""
              }, " \u6682\u65E0\u8BA2\u5355\uFF0C\u5FEB\u53BB\u4E0B\u5355\u5427 ~ ", 512), [[vShow, unref(isNothing)]])]),
              default: withCtx(() => [createVNode("div", {
                class: "mb-4 ml-a flex cursor-pointer items-center opacity-60 group-hover:opacity-100"
              }, [createVNode("small", {
                "w-6rem": ""
              }, "\u7B5B\u9009\uFF1A"), createVNode("div", {
                class: ["ml-a flex-row-c-c transform-origin-right scale-x-0 truncate py-1 transition-300 transition-transform", {
                  "scale-x-100": unref(isShow)
                }]
              }, [createVNode(_component_el_date_picker, {
                modelValue: unref(selectDate),
                "onUpdate:modelValue": ($event) => isRef(selectDate) ? selectDate.value = $event : null,
                format: "YYYY-MM-DD HH:mm:ss",
                type: "datetimerange",
                size: "small",
                "start-placeholder": "\u8D77 \u59CB",
                "time-arrow-control": true,
                "end-placeholder": "\u7ED3 \u675F",
                onChange: changeDate
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_button, {
                size: "small",
                "ml-1": "",
                "md:ml-2": "",
                onClick: reloadSearch
              }, {
                default: withCtx(() => [createTextVNode(" \u91CD\u7F6E ")]),
                _: 1
              })], 2), createVNode(_component_el_button, {
                size: "small",
                "ml-1": "",
                "md:ml-2": "",
                type: unref(isShow) ? "danger" : "default",
                onClick: ($event) => isShow.value = !unref(isShow)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(isShow) ? "\u6536\u8D77" : "\u5C55\u5F00"), 1)]),
                _: 1
              }, 8, ["type", "onClick"])]), withDirectives((openBlock(), createBlock("ul", {
                class: "relative"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(list2), (p) => {
                return openBlock(), createBlock(_component_OrderInfoLine, {
                  key: p.id,
                  order: p,
                  onSubmit: submit
                }, null, 8, ["order"]);
              }), 128))])), [[_directive_auto_animate, {
                duration: 300,
                easing: "cubic-bezier(0.61, 0.225, 0.195, 1.19)"
              }]])]),
              _: 1
            }, 8, ["no-more", "loading"])];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/InfoList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `\u8BA2\u5355 - ${appName}`,
      meta: [{
        name: "description",
        content: "\u6781\u7269\u5708 - \u6211\u7684\u8BA2\u5355"
      }]
    });
    const user = useUserStore();
    const activeMenu = ref("all");
    const isLoading = ref(false);
    function reload() {
      if (isLoading.value)
        return;
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_ElDivider = ElDivider;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_OrderInfoList = _sfc_main$1;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1d167f00>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "second",
        "left-menu": false,
        footer: false,
        menu: ["back", "service"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-1d167f00${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", null, [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => {
                var _a;
                return [((_a = unref(user)) == null ? void 0 : _a.isLogin) ? withDirectives((openBlock(), createBlock("div", {
                  key: 0,
                  class: "group min-h-80vh layout-default-se"
                }, [createVNode("div", {
                  class: "top my-4 mb-6 flex-row-bt-c"
                }, [createVNode("h2", {
                  flex: "",
                  "items-center": ""
                }, [createVNode("span", {
                  "mr-2": ""
                }, "\u6211\u7684\u8BA2\u5355"), createVNode(_component_ElDivider, {
                  direction: "vertical"
                }), createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [createVNode("span", {
                    "ml-2": "",
                    "text-0.8em": "",
                    "opacity-80": ""
                  }, toDisplayString(unref(user).userInfo.nickname), 1)]),
                  _: 1
                })]), createVNode("i", {
                  "opacity-0": "",
                  "transition-300": "",
                  "group-hover:opacity-100": "",
                  class: "i-solar:refresh-outline block cursor-pointer bg-[var(--el-color-info)] p-0.8em transition-300 hover:rotate-180",
                  onClick: reload
                })]), !unref(isLoading) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-10px p-6 shadow v-card"
                }, [createVNode(_component_el_tabs, {
                  modelValue: unref(activeMenu),
                  "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
                  "tab-position": "top",
                  stretch: true
                }, {
                  default: withCtx(() => [createVNode(_component_el_tab_pane, {
                    name: "all",
                    label: "\u5168\u90E8"
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList)]),
                    _: 1
                  }), createVNode(_component_el_tab_pane, {
                    lazy: "",
                    name: "unpaid",
                    label: "\u5F85\u4ED8\u6B3E"
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList, {
                      status: ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).UN_PAID
                    }, null, 8, ["status"])]),
                    _: 1
                  }), createVNode(_component_el_tab_pane, {
                    lazy: "",
                    name: "paid",
                    label: "\u5F85\u53D1\u8D27"
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList, {
                      status: ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).PAID
                    }, null, 8, ["status"])]),
                    _: 1
                  }), createVNode(_component_el_tab_pane, {
                    name: "received",
                    label: "\u5F85\u6536\u8D27",
                    lazy: ""
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList, {
                      status: ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).DELIVERED
                    }, null, 8, ["status"])]),
                    _: 1
                  }), createVNode(_component_el_tab_pane, {
                    name: "comment",
                    label: "\u5F85\u8BC4\u4EF7",
                    lazy: ""
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList, {
                      status: ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).RECEIVED
                    }, null, 8, ["status"])]),
                    _: 1
                  }), createVNode(_component_el_tab_pane, {
                    name: "commented",
                    label: "\u5DF2\u8BC4\u4EF7",
                    lazy: ""
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList, {
                      status: ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).COMMENTED
                    }, null, 8, ["status"])]),
                    _: 1
                  }), createVNode(_component_el_tab_pane, {
                    name: "canceled",
                    label: "\u5DF2\u53D6\u6D88",
                    lazy: ""
                  }, {
                    default: withCtx(() => [createVNode(_component_OrderInfoList, {
                      status: ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).CANCELED
                    }, null, 8, ["status"])]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])])) : createCommentVNode("", true)])), [[_directive_loading, unref(isLoading), void 0, {
                  fullscreen: true
                }]]) : createCommentVNode("", true)];
              }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d167f00"]]);

export { list as default };
//# sourceMappingURL=list-yce_47ch.mjs.map
