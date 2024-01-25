import { q as buildProps, r as useNamespace, W as iconPropType, t as isNumber, M as ElIcon, ah as check_default, N as close_default, w as withInstall, X as withNoopInstall, b as _export_sfc, y as _export_sfc$1, u as useUserStore, a2 as useAsyncData, S as StatusCode, ai as shopping_cart_full_default, aj as money_default, ak as credit_card_default, al as van_default, am as chat_dot_square_default, B as BaseUrlImg, an as useAddressStore, A as useRoute, D as appName, a5 as useHead, h as ElButton, E as ElMessage, ao as useCheckXXSText, g as ElMessageBox, n as navigateTo, _ as __nuxt_component_0, f as __nuxt_component_2$1, ap as circle_plus_filled_default } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-qWvYy4Gj.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { E as ElDivider } from './divider-SNINqp0P.mjs';
import { defineComponent, getCurrentInstance, watch, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot, ref, inject, computed, reactive, normalizeStyle, createCommentVNode, createElementVNode, createBlock, withCtx, resolveDynamicComponent, createVNode, toDisplayString, createTextVNode, h, useSSRContext, defineAsyncComponent, mergeProps, resolveDirective, withDirectives, Fragment, renderList, vShow, withAsyncContext, toRaw, isRef } from 'vue';
import { _ as _sfc_main$b } from './DelayTimer-UsJG6rYy.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { _ as __nuxt_component_8 } from './Switch-Z3STMCL-.mjs';
import { C as CHANGE_EVENT } from './event-JIBAhsR9.mjs';
import { u as useOrderedChildren } from './index-PIw9jEwu.mjs';
import { ElText } from './index-QzTfU9Or.mjs';
import { g as getBillsPage, B as BillsType } from './bills-iqVZUO9z.mjs';
import { a as getDelivertOrders, O as OrdersStatus, P as PayType, p as pushOrdersItems, b as payOrders, c as cancelOrders, u as updateOrders, r as refundOrders, d as checkDeliveryOrders, e as deleteOrders } from './index-DNDo83-k.mjs';
import { u as useOrderStore } from './useOrderStore-KiN84DL2.mjs';
import { c as useDateFormat } from './index-daJZwzbi.mjs';
import { E as ElRadioGroup, a as ElRadio } from './index-vwoBdBES.mjs';
import { E as ElScrollbar } from './scrollbar-uIUdvs5K.mjs';
import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { E as ElSelect, a as ElOption } from './index-1UBKVkQQ.mjs';
import { E as ElInputNumber } from './input-number-LU9yE6dp.mjs';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import { g as getEventsInfo } from './index-hw581Gte.mjs';
import currency from 'currency.js';
import { g as getGoodsSkuByGid, a as getGoodsSkuByIds } from './sku-QdHWne5L.mjs';
import { E as ElInput } from './index-nLRih88y.mjs';
import { E as ElEmpty } from './empty-vE9uksjp.mjs';
import { u as useWebToast } from './useWebToast-yKj8WQwG.mjs';
import { E as ElNotification } from './index-481vqEaW.mjs';
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
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './PreLoading-Jnbo7kLW.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './vnode-YsXVLyOk.mjs';
import './index-gZoFaHmS.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-r09CvUzW.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-RvHFA2kt.mjs';
import './index-0Uz170Jh.mjs';
import './index-deHNvRRV.mjs';

const stepsProps = buildProps({
  space: {
    type: [Number, String],
    default: ""
  },
  active: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    values: ["horizontal", "vertical"]
  },
  alignCenter: {
    type: Boolean
  },
  simple: {
    type: Boolean
  },
  finishStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "finish"
  },
  processStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "process"
  }
});
const stepsEmits = {
  [CHANGE_EVENT]: (newVal, oldVal) => [newVal, oldVal].every(isNumber)
};
const __default__$2 = defineComponent({
  name: "ElSteps"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: stepsProps,
  emits: stepsEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("steps");
    const {
      children: steps,
      addChild: addStep,
      removeChild: removeStep
    } = useOrderedChildren(getCurrentInstance(), "ElStep");
    watch(steps, () => {
      steps.value.forEach((instance, index) => {
        instance.setIndex(index);
      });
    });
    provide("ElSteps", { props, steps, addStep, removeStep });
    watch(() => props.active, (newVal, oldVal) => {
      emit(CHANGE_EVENT, newVal, oldVal);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.simple ? "simple" : _ctx.direction)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Steps = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);
const stepProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  description: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    values: ["", "wait", "process", "finish", "error", "success"],
    default: ""
  }
});
const __default__$1 = defineComponent({
  name: "ElStep"
});
const _sfc_main$9 = defineComponent({
  ...__default__$1,
  props: stepProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("step");
    const index = ref(-1);
    const lineStyle = ref({});
    const internalStatus = ref("");
    const parent = inject("ElSteps");
    const currentInstance = getCurrentInstance();
    const currentStatus = computed(() => {
      return props.status || internalStatus.value;
    });
    computed(() => {
      const prevStep = parent.steps.value[index.value - 1];
      return prevStep ? prevStep.currentStatus : "wait";
    });
    const isCenter = computed(() => {
      return parent.props.alignCenter;
    });
    const isVertical = computed(() => {
      return parent.props.direction === "vertical";
    });
    const isSimple = computed(() => {
      return parent.props.simple;
    });
    const stepsCount = computed(() => {
      return parent.steps.value.length;
    });
    const isLast = computed(() => {
      var _a;
      return ((_a = parent.steps.value[stepsCount.value - 1]) == null ? void 0 : _a.uid) === (currentInstance == null ? void 0 : currentInstance.uid);
    });
    const space = computed(() => {
      return isSimple.value ? "" : parent.props.space;
    });
    const containerKls = computed(() => {
      return [
        ns.b(),
        ns.is(isSimple.value ? "simple" : parent.props.direction),
        ns.is("flex", isLast.value && !space.value && !isCenter.value),
        ns.is("center", isCenter.value && !isVertical.value && !isSimple.value)
      ];
    });
    const style = computed(() => {
      const style2 = {
        flexBasis: isNumber(space.value) ? `${space.value}px` : space.value ? space.value : `${100 / (stepsCount.value - (isCenter.value ? 0 : 1))}%`
      };
      if (isVertical.value)
        return style2;
      if (isLast.value) {
        style2.maxWidth = `${100 / stepsCount.value}%`;
      }
      return style2;
    });
    const setIndex = (val) => {
      index.value = val;
    };
    const calcProgress = (status) => {
      const isWait = status === "wait";
      const style2 = {
        transitionDelay: `${isWait ? "-" : ""}${150 * index.value}ms`
      };
      const step = status === parent.props.processStatus || isWait ? 0 : 100;
      style2.borderWidth = step && !isSimple.value ? "1px" : 0;
      style2[parent.props.direction === "vertical" ? "height" : "width"] = `${step}%`;
      lineStyle.value = style2;
    };
    const stepItemState = reactive({
      uid: currentInstance.uid,
      currentStatus,
      setIndex,
      calcProgress
    });
    parent.addStep(stepItemState);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(unref(style)),
        class: normalizeClass(unref(containerKls))
      }, [
        createCommentVNode(" icon & line "),
        createElementVNode("div", {
          class: normalizeClass([unref(ns).e("head"), unref(ns).is(unref(currentStatus))])
        }, [
          !unref(isSimple) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("line"))
          }, [
            createElementVNode("i", {
              class: normalizeClass(unref(ns).e("line-inner")),
              style: normalizeStyle(lineStyle.value)
            }, null, 6)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass([unref(ns).e("icon"), unref(ns).is(_ctx.icon || _ctx.$slots.icon ? "icon" : "text")])
          }, [
            renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(ns).e("icon-inner"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                ]),
                _: 1
              }, 8, ["class"])) : unref(currentStatus) === "success" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 1,
                class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
              }, {
                default: withCtx(() => [
                  createVNode(unref(check_default))
                ]),
                _: 1
              }, 8, ["class"])) : unref(currentStatus) === "error" ? (openBlock(), createBlock(unref(ElIcon), {
                key: 2,
                class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
              }, {
                default: withCtx(() => [
                  createVNode(unref(close_default))
                ]),
                _: 1
              }, 8, ["class"])) : !unref(isSimple) ? (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass(unref(ns).e("icon-inner"))
              }, toDisplayString(index.value + 1), 3)) : createCommentVNode("v-if", true)
            ])
          ], 2)
        ], 2),
        createCommentVNode(" title & description "),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("main"))
        }, [
          createElementVNode("div", {
            class: normalizeClass([unref(ns).e("title"), unref(ns).is(unref(currentStatus))])
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2),
          unref(isSimple) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("arrow"))
          }, null, 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(ns).e("description"), unref(ns).is(unref(currentStatus))])
          }, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createTextVNode(toDisplayString(_ctx.description), 1)
            ])
          ], 2))
        ], 2)
      ], 6);
    };
  }
});
var Step = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);
const ElSteps = withInstall(Steps, {
  Step
});
const ElStep = withNoopInstall(Step);
const Timeline = defineComponent({
  name: "ElTimeline",
  setup(_, { slots }) {
    const ns = useNamespace("timeline");
    provide("timeline", slots);
    return () => {
      return h("ul", { class: [ns.b()] }, [renderSlot(slots, "default")]);
    };
  }
});
const timelineItemProps = buildProps({
  timestamp: {
    type: String,
    default: ""
  },
  hideTimestamp: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String,
    values: ["top", "bottom"],
    default: "bottom"
  },
  type: {
    type: String,
    values: ["primary", "success", "warning", "danger", "info"],
    default: ""
  },
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ["normal", "large"],
    default: "normal"
  },
  icon: {
    type: iconPropType
  },
  hollow: {
    type: Boolean,
    default: false
  }
});
const __default__ = defineComponent({
  name: "ElTimelineItem"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: timelineItemProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("timeline-item");
    const defaultNodeKls = computed(() => [
      ns.e("node"),
      ns.em("node", props.size || ""),
      ns.em("node", props.type || ""),
      ns.is("hollow", props.hollow)
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", {
        class: normalizeClass([unref(ns).b(), { [unref(ns).e("center")]: _ctx.center }])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("tail"))
        }, null, 2),
        !_ctx.$slots.dot ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(defaultNodeKls)),
          style: normalizeStyle({
            backgroundColor: _ctx.color
          })
        }, [
          _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
            key: 0,
            class: normalizeClass(unref(ns).e("icon"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 6)) : createCommentVNode("v-if", true),
        _ctx.$slots.dot ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(ns).e("dot"))
        }, [
          renderSlot(_ctx.$slots, "dot")
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("div", {
          class: normalizeClass(unref(ns).e("wrapper"))
        }, [
          !_ctx.hideTimestamp && _ctx.placement === "top" ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(ns).e("timestamp"), unref(ns).is("top")])
          }, toDisplayString(_ctx.timestamp), 3)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("content"))
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2),
          !_ctx.hideTimestamp && _ctx.placement === "bottom" ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(ns).e("timestamp"), unref(ns).is("bottom")])
          }, toDisplayString(_ctx.timestamp), 3)) : createCommentVNode("v-if", true)
        ], 2)
      ], 2);
    };
  }
});
var TimelineItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/timeline/src/timeline-item.vue"]]);
const ElTimeline = withInstall(Timeline, {
  TimelineItem
});
const ElTimelineItem = withNoopInstall(TimelineItem);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Reload",
  __ssrInlineRender: true,
  emits: ["reload"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      _push(ssrRenderComponent(_component_ElButton, mergeProps({
        class: "btn",
        round: "",
        onClick: ($event) => _ctx.$emit("reload")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="hidden overflow-hidden truncate md:inline" data-v-c575cda8${_scopeId}>\u5237\u65B0</span><i class="i-solar:refresh-outline w-1.4em w-1.4em cursor-pointer bg-[var(--el-color-info)] transition-300 hover:rotate-180" alt="\u9875\u9762\u5237\u65B0" data-v-c575cda8${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "hidden overflow-hidden truncate md:inline" }, "\u5237\u65B0"),
              createVNode("i", {
                class: "i-solar:refresh-outline w-1.4em w-1.4em cursor-pointer bg-[var(--el-color-info)] transition-300 hover:rotate-180",
                alt: "\u9875\u9762\u5237\u65B0"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btn/Reload.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-c575cda8"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TimeLine",
  __ssrInlineRender: true,
  props: {
    orderInfo: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const user = useUserStore();
    const isFold = ref(false);
    const list = ref([
      {
        active: 1,
        time: props.orderInfo.createTime,
        title: "\u521B\u5EFA\u8BA2\u5355"
      }
    ]);
    const delivery = useAsyncData(async () => {
      const { data, code } = await getBillsPage(
        1,
        1,
        {
          orderId: props.orderInfo.id,
          type: BillsType.OUT
        },
        user.getToken
      );
      if (code !== StatusCode.SUCCESS)
        return;
      if (data.records.length > 0) {
        list.value.push({
          active: 2,
          title: "\u5DF2\u652F\u4ED8\uFF0C\u5F85\u53D1\u8D27",
          time: data.records[0].createTime
        });
      }
      const delivery2 = await getDelivertOrders(props.orderInfo.id, user.getToken);
      return delivery2.data;
    }, "$XiIXeT5yya");
    __expose({
      reload: delivery.refresh
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_timeline = ElTimeline;
      const _component_el_timeline_item = ElTimelineItem;
      const _component_el_text = ElText;
      const _directive_copying = resolveDirective("copying");
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_timeline, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(list), (p) => {
              _push2(ssrRenderComponent(_component_el_timeline_item, {
                key: p.active,
                color: "var(--el-color-success-light-3)",
                timestamp: p.time
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(p.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(p.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_el_timeline_item, {
              style: unref(delivery).data.value ? null : { display: "none" },
              timestamp: (_a = unref(delivery).data.value) == null ? void 0 : _a.createTime,
              color: "var(--el-color-success-light-3)"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(`<div${_scopeId2}><div class="el-timeline-item__content pb-1"${_scopeId2}> \u5DF2\u53D1\u8D27\uFF0C <span${ssrRenderAttrs(mergeProps({ class: "mr-2 cursor-pointer select-none text-[var(--el-color-success)] active:underline hover:underline" }, ssrGetDirectiveProps(_ctx, _directive_copying, (_a2 = unref(delivery).data.value) == null ? void 0 : _a2.deliveryNum, void 0, { toast: true })))}${_scopeId2}>${ssrInterpolate((_b2 = unref(delivery).data.value) == null ? void 0 : _b2.deliveryNum)}</span>`);
                  _push3(ssrRenderComponent(_component_el_text, {
                    size: "small",
                    class: "cursor-pointer select-none active:underline hover:underline",
                    type: unref(isFold) ? "danger" : "",
                    onClick: ($event) => isFold.value = !unref(isFold)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(isFold) ? "\u6298\u53E0" : "\u5C55\u5F00")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(isFold) ? "\u6298\u53E0" : "\u5C55\u5F00"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="${ssrRenderClass([{ "h-6em": unref(isFold) }, "h-0 flex flex-col overflow-hidden rounded-6px pt-1 leading-1.4em opacity-90 transition-height"])}"${_scopeId2}><small${_scopeId2}>\u8BA2\u5355\u53F7\uFF1A${ssrInterpolate((_c = unref(delivery).data.value) == null ? void 0 : _c.deliveryNum)}</small><small${_scopeId2}>\u5FEB\u9012\u5355\u53F7\uFF1A${ssrInterpolate((_d = unref(delivery).data.value) == null ? void 0 : _d.deliveryNum)}</small><small${_scopeId2}>\u6536\u8D27\u5730\u5740\uFF1A${ssrInterpolate((_e = unref(delivery).data.value) == null ? void 0 : _e.sendAddress)}</small><small${_scopeId2}>\u53D1\u8D27\u5730\u5740\uFF1A${ssrInterpolate((_f = unref(delivery).data.value) == null ? void 0 : _f.deliverAddress)}</small></div></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "el-timeline-item__content pb-1" }, [
                        createTextVNode(" \u5DF2\u53D1\u8D27\uFF0C "),
                        withDirectives((openBlock(), createBlock("span", { class: "mr-2 cursor-pointer select-none text-[var(--el-color-success)] active:underline hover:underline" }, [
                          createTextVNode(toDisplayString((_g = unref(delivery).data.value) == null ? void 0 : _g.deliveryNum), 1)
                        ])), [
                          [
                            _directive_copying,
                            (_h = unref(delivery).data.value) == null ? void 0 : _h.deliveryNum,
                            void 0,
                            { toast: true }
                          ]
                        ]),
                        createVNode(_component_el_text, {
                          size: "small",
                          class: "cursor-pointer select-none active:underline hover:underline",
                          type: unref(isFold) ? "danger" : "",
                          onClick: ($event) => isFold.value = !unref(isFold)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isFold) ? "\u6298\u53E0" : "\u5C55\u5F00"), 1)
                          ]),
                          _: 1
                        }, 8, ["type", "onClick"])
                      ]),
                      createVNode("div", {
                        class: [{ "h-6em": unref(isFold) }, "h-0 flex flex-col overflow-hidden rounded-6px pt-1 leading-1.4em opacity-90 transition-height"]
                      }, [
                        createVNode("small", null, "\u8BA2\u5355\u53F7\uFF1A" + toDisplayString((_i = unref(delivery).data.value) == null ? void 0 : _i.deliveryNum), 1),
                        createVNode("small", null, "\u5FEB\u9012\u5355\u53F7\uFF1A" + toDisplayString((_j = unref(delivery).data.value) == null ? void 0 : _j.deliveryNum), 1),
                        createVNode("small", null, "\u6536\u8D27\u5730\u5740\uFF1A" + toDisplayString((_k = unref(delivery).data.value) == null ? void 0 : _k.sendAddress), 1),
                        createVNode("small", null, "\u53D1\u8D27\u5730\u5740\uFF1A" + toDisplayString((_l = unref(delivery).data.value) == null ? void 0 : _l.deliverAddress), 1)
                      ], 2)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", { data: unref(delivery) }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(list), (p) => {
                return openBlock(), createBlock(_component_el_timeline_item, {
                  key: p.active,
                  color: "var(--el-color-success-light-3)",
                  timestamp: p.time
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(p.title), 1)
                  ]),
                  _: 2
                }, 1032, ["timestamp"]);
              }), 128)),
              withDirectives(createVNode(_component_el_timeline_item, {
                timestamp: (_b = unref(delivery).data.value) == null ? void 0 : _b.createTime,
                color: "var(--el-color-success-light-3)"
              }, {
                default: withCtx(() => {
                  var _a2, _b2, _c, _d, _e, _f;
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "el-timeline-item__content pb-1" }, [
                        createTextVNode(" \u5DF2\u53D1\u8D27\uFF0C "),
                        withDirectives((openBlock(), createBlock("span", { class: "mr-2 cursor-pointer select-none text-[var(--el-color-success)] active:underline hover:underline" }, [
                          createTextVNode(toDisplayString((_a2 = unref(delivery).data.value) == null ? void 0 : _a2.deliveryNum), 1)
                        ])), [
                          [
                            _directive_copying,
                            (_b2 = unref(delivery).data.value) == null ? void 0 : _b2.deliveryNum,
                            void 0,
                            { toast: true }
                          ]
                        ]),
                        createVNode(_component_el_text, {
                          size: "small",
                          class: "cursor-pointer select-none active:underline hover:underline",
                          type: unref(isFold) ? "danger" : "",
                          onClick: ($event) => isFold.value = !unref(isFold)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isFold) ? "\u6298\u53E0" : "\u5C55\u5F00"), 1)
                          ]),
                          _: 1
                        }, 8, ["type", "onClick"])
                      ]),
                      createVNode("div", {
                        class: [{ "h-6em": unref(isFold) }, "h-0 flex flex-col overflow-hidden rounded-6px pt-1 leading-1.4em opacity-90 transition-height"]
                      }, [
                        createVNode("small", null, "\u8BA2\u5355\u53F7\uFF1A" + toDisplayString((_c = unref(delivery).data.value) == null ? void 0 : _c.deliveryNum), 1),
                        createVNode("small", null, "\u5FEB\u9012\u5355\u53F7\uFF1A" + toDisplayString((_d = unref(delivery).data.value) == null ? void 0 : _d.deliveryNum), 1),
                        createVNode("small", null, "\u6536\u8D27\u5730\u5740\uFF1A" + toDisplayString((_e = unref(delivery).data.value) == null ? void 0 : _e.sendAddress), 1),
                        createVNode("small", null, "\u53D1\u8D27\u5730\u5740\uFF1A" + toDisplayString((_f = unref(delivery).data.value) == null ? void 0 : _f.deliverAddress), 1)
                      ], 2)
                    ])
                  ];
                }),
                _: 1
              }, 8, ["timestamp"]), [
                [vShow, unref(delivery).data.value]
              ]),
              renderSlot(_ctx.$slots, "default", { data: unref(delivery) })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/TimeLine.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StatusSteps",
  __ssrInlineRender: true,
  props: {
    active: {},
    date: {},
    color: {}
  },
  setup(__props) {
    const props = __props;
    const order = useOrderStore();
    const getColorClass = computed(() => {
      return `color:var(--el-color-${props.color})`;
    });
    function delayOrder() {
      order.status = OrdersStatus.DELAY_CANCELED;
      order.orderInfo.status = OrdersStatus.DELAY_CANCELED;
      order.orderInfo.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_steps = ElSteps;
      const _component_el_step = ElStep;
      const _component_OrderDelayTimer = _sfc_main$b;
      const _component_OrderTimeLine = _sfc_main$6;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "mb-3 flex flex-col" }, _attrs))} data-v-aee7fb3a>`);
      if (props.active > unref(OrdersStatus).READY && props.active < unref(OrdersStatus).CANCELED) {
        _push(ssrRenderComponent(_component_el_steps, {
          class: "mt-4",
          style: unref(getColorClass),
          active: props.active + 1,
          "align-center": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_step, {
                title: "\u63D0\u4EA4\u8BA2\u5355",
                icon: "ElIconShoppingCartFull" in _ctx ? _ctx.ElIconShoppingCartFull : unref(shopping_cart_full_default)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_step, { icon: "ElIconMoney" in _ctx ? _ctx.ElIconMoney : unref(money_default) }, {
                icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="${ssrRenderClass({
                      "text-[var(--el-color-danger)] ": _ctx.active === unref(OrdersStatus).UN_PAID
                    })}" i-solar:sale-broken p-3.4 data-v-aee7fb3a${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", {
                        class: {
                          "text-[var(--el-color-danger)] ": _ctx.active === unref(OrdersStatus).UN_PAID
                        },
                        "i-solar:sale-broken": "",
                        "p-3.4": ""
                      }, null, 2)
                    ];
                  }
                }),
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<strong class="${ssrRenderClass({
                      "text-[var(--el-color-danger)] ": _ctx.active === unref(OrdersStatus).UN_PAID
                    })}" data-v-aee7fb3a${_scopeId2}> \u5F85\u652F\u4ED8 </strong>`);
                  } else {
                    return [
                      createVNode("strong", {
                        class: {
                          "text-[var(--el-color-danger)] ": _ctx.active === unref(OrdersStatus).UN_PAID
                        }
                      }, " \u5F85\u652F\u4ED8 ", 2)
                    ];
                  }
                }),
                description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (_ctx.active === unref(OrdersStatus).UN_PAID) {
                      _push3(ssrRenderComponent(_component_OrderDelayTimer, {
                        date: new Date(props.date),
                        class: "font-600 text-[var(--el-color-danger)]",
                        onDelay: delayOrder
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      _ctx.active === unref(OrdersStatus).UN_PAID ? (openBlock(), createBlock(_component_OrderDelayTimer, {
                        key: 0,
                        date: new Date(props.date),
                        class: "font-600 text-[var(--el-color-danger)]",
                        onDelay: delayOrder
                      }, null, 8, ["date"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_step, {
                title: "\u5F85\u53D1\u8D27",
                description: "48\u5C0F\u65F6\u5185\u53D1\u8D27",
                icon: "ElIconCreditCard" in _ctx ? _ctx.ElIconCreditCard : unref(credit_card_default)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_step, {
                title: "\u5F85\u6536\u8D27",
                icon: "ElIconVan" in _ctx ? _ctx.ElIconVan : unref(van_default)
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_step, {
                title: "\u5F85\u8BC4\u4EF7",
                icon: "ElIconChatDotSquare" in _ctx ? _ctx.ElIconChatDotSquare : unref(chat_dot_square_default)
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_step, {
                  title: "\u63D0\u4EA4\u8BA2\u5355",
                  icon: "ElIconShoppingCartFull" in _ctx ? _ctx.ElIconShoppingCartFull : unref(shopping_cart_full_default)
                }, null, 8, ["icon"]),
                createVNode(_component_el_step, { icon: "ElIconMoney" in _ctx ? _ctx.ElIconMoney : unref(money_default) }, {
                  icon: withCtx(() => [
                    createVNode("i", {
                      class: {
                        "text-[var(--el-color-danger)] ": _ctx.active === unref(OrdersStatus).UN_PAID
                      },
                      "i-solar:sale-broken": "",
                      "p-3.4": ""
                    }, null, 2)
                  ]),
                  title: withCtx(() => [
                    createVNode("strong", {
                      class: {
                        "text-[var(--el-color-danger)] ": _ctx.active === unref(OrdersStatus).UN_PAID
                      }
                    }, " \u5F85\u652F\u4ED8 ", 2)
                  ]),
                  description: withCtx(() => [
                    _ctx.active === unref(OrdersStatus).UN_PAID ? (openBlock(), createBlock(_component_OrderDelayTimer, {
                      key: 0,
                      date: new Date(props.date),
                      class: "font-600 text-[var(--el-color-danger)]",
                      onDelay: delayOrder
                    }, null, 8, ["date"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["icon"]),
                createVNode(_component_el_step, {
                  title: "\u5F85\u53D1\u8D27",
                  description: "48\u5C0F\u65F6\u5185\u53D1\u8D27",
                  icon: "ElIconCreditCard" in _ctx ? _ctx.ElIconCreditCard : unref(credit_card_default)
                }, null, 8, ["icon"]),
                createVNode(_component_el_step, {
                  title: "\u5F85\u6536\u8D27",
                  icon: "ElIconVan" in _ctx ? _ctx.ElIconVan : unref(van_default)
                }, null, 8, ["icon"]),
                createVNode(_component_el_step, {
                  title: "\u5F85\u8BC4\u4EF7",
                  icon: "ElIconChatDotSquare" in _ctx ? _ctx.ElIconChatDotSquare : unref(chat_dot_square_default)
                }, null, 8, ["icon"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (props.active === unref(OrdersStatus).DELIVERED) {
        _push(`<section class="mt-4 border-0 border-t-1px rounded-0 pl-2 pt-4 border-default md:pl-12" data-v-aee7fb3a>`);
        _push(ssrRenderComponent(_component_OrderTimeLine, {
          "order-info": unref(order).orderInfo
        }, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.active === unref(OrdersStatus).DELAY_CANCELED || props.active === unref(OrdersStatus).CANCELED) {
        _push(`<section class="text-[var(--el-color-primary)]" flex items-center px-3 leading-2em data-v-aee7fb3a><i i-solar:clock-circle-broken mx-4 mr-6 p-4 data-v-aee7fb3a></i><div class="flex flex-1 flex-col" data-v-aee7fb3a>`);
        if (props.active === unref(OrdersStatus).DELAY_CANCELED) {
          _push(`<h3 data-v-aee7fb3a> \u8BA2\u5355\u5DF2\u8D85\u65F6 \u81EA\u52A8\u53D6\u6D88\uFF0C\u6B22\u8FCE\u4E0B\u6B21\u9009\u8D2D\uFF01 </h3>`);
        } else {
          _push(`<!---->`);
        }
        if (props.active === unref(OrdersStatus).CANCELED) {
          _push(`<h3 data-v-aee7fb3a> \u8BA2\u5355\u5DF2\u53D6\u6D88\uFF0C\u6B22\u8FCE\u4E0B\u6B21\u9009\u8D2D\uFF01 </h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<small data-v-aee7fb3a>${ssrInterpolate(unref(order).orderInfo.updateTime)}</small></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.active === unref(OrdersStatus).REFUND) {
        _push(`<section flex flex-col leading-1.6em data-v-aee7fb3a><h3 mb-2 data-v-aee7fb3a> \u9000\u6B3E\u4E2D\uFF0C\u8BF7\u7B49\u5F85\u5546\u5BB6\u5904\u7406\uFF01 </h3><small data-v-aee7fb3a>\u6700\u540E\u66F4\u65B0\uFF1A${ssrInterpolate(unref(order).orderInfo.updateTime)}</small></section>`);
      } else {
        _push(`<!---->`);
      }
      if (props.active === unref(OrdersStatus).REFUND_SUCCESS) {
        _push(`<section flex flex-col leading-1.6em data-v-aee7fb3a><h3 mb-2 data-v-aee7fb3a> \u9000\u6B3E\u6210\u529F\uFF0C\u8BF7\u6CE8\u610F\u67E5\u6536\u9000\u6B3E\u91D1\u989D\uFF01 </h3><small data-v-aee7fb3a>\u9000\u6B3E\u65F6\u95F4\uFF1A${ssrInterpolate(unref(order).orderInfo.updateTime)}</small></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/StatusSteps.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-aee7fb3a"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AddressBoxSe",
  __ssrInlineRender: true,
  props: {
    address: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      _push(`<div${ssrRenderAttrs(mergeProps({
        key: _ctx.address.id,
        relative: "",
        "mr-3": "",
        "mt-2": "",
        "min-h-160px": "",
        "w-240px": "",
        flex: "",
        "flex-col": "",
        "cursor-pointer": "",
        "border-2px": "",
        "rounded-6px": "",
        "rounded-8px": "",
        "p-3.4": "",
        "leading-1.2em": "",
        "opacity-90": "",
        "transition-300": "",
        "border-default": "",
        class: "group hover:border-[var(--el-color-primary)] dark:hover:border-[var(--el-color-primary)]"
      }, _attrs))}><div flex-row-c-c justify-start border-0 border-b-2px pb-2 font-600 border-default-dashed><p>${ssrInterpolate(_ctx.address.name)}</p>`);
      if (_ctx.address.isDefault && _ctx.address.isDefault === 1) {
        _push(ssrRenderComponent(_component_el_tag, {
          class: "ml-a",
          plain: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u9ED8\u8BA4\u5730\u5740 `);
            } else {
              return [
                createTextVNode(" \u9ED8\u8BA4\u5730\u5740 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><small pt-2>${ssrInterpolate(_ctx.address.phone)}</small><div mt-1 opacity-80><small pr-1>${ssrInterpolate(_ctx.address.province)}</small><small pr-1>${ssrInterpolate(_ctx.address.city)}</small><small pr-1>${ssrInterpolate(_ctx.address.county)}</small></div><small class="truncate">${ssrInterpolate(_ctx.address.address)}</small><div class="btns mt-a w-1/1 flex-row-bt-c">`);
      ssrRenderSlot(_ctx.$slots, "btns", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/AddressBoxSe.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AddressInfo",
  __ssrInlineRender: true,
  props: {
    address: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col text-1.1rem" }, _attrs))}><div class="flex flex-wrap items-center px-2 leading-1.6em"><i class="i-solar:map-point-bold-duotone mx-3 bg-[var(--el-color-danger-light-3)] p-5"></i><div class="flex flex-col p-3"><strong>${ssrInterpolate(_ctx.address.name)} <small font-500 opacity-80>${ssrInterpolate(_ctx.address.phone)}</small></strong><small>${ssrInterpolate(_ctx.address.province)} ${ssrInterpolate(_ctx.address.city)} ${ssrInterpolate(_ctx.address.county)}</small><small text-0.8em>${ssrInterpolate(_ctx.address.address)} ${ssrInterpolate(_ctx.address.postalCode)}</small></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/AddressInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderSku",
  __ssrInlineRender: true,
  props: {
    data: {},
    disable: { type: Boolean }
  },
  async setup(__props) {
    let __temp, __restore;
    const { data, disable } = __props;
    const isUpdateLoading = ref(false);
    const isLoading = ref(true);
    const skuList = ref([]);
    async function loadGoodSkuList(val) {
      if (val && isLoading.value) {
        const res = await getGoodsSkuByGid(data.goodsId);
        setTimeout(() => {
          var _a;
          (_a = res.data.value) == null ? void 0 : _a.data.forEach((p) => skuList.value.push(p));
          isLoading.value = false;
        }, 300);
      }
    }
    const eventSkuList = ref(/* @__PURE__ */ new Map());
    async function loadEventSkuList() {
      var _a, _b;
      if (!data.activityId)
        return;
      const res = await getEventsInfo(data.activityId);
      if ((_a = res.data.value) == null ? void 0 : _a.code) {
        (_b = res.data.value) == null ? void 0 : _b.data.list.forEach((p) => {
          if (data.skuId === p.skuId)
            eventSkuList.value.set(p.skuId, p);
        });
      }
    }
    [__temp, __restore] = withAsyncContext(() => loadEventSkuList()), await __temp, __restore();
    watch(() => data.activityId, () => {
      loadEventSkuList();
    }, { immediate: true });
    watch(() => data.skuId, (val) => {
      if (val) {
        if (val) {
          const event = eventSkuList.value.get(val);
          if (event)
            data.price = event == null ? void 0 : event.eventPrice;
        }
      }
    }, {
      immediate: true
    });
    function getSkuProps(goodsSku) {
      return `${goodsSku.size || ""} ${goodsSku.color || ""} ${goodsSku.combo || ""}`;
    }
    const getProps = computed({
      get() {
        return `${data.size || ""} ${data.color || ""} ${data.combo || ""}`;
      },
      set(skuId) {
        const p = toRaw(skuList.value.find((p2) => p2.id === skuId));
        let onePrice = p == null ? void 0 : p.price;
        if (p && p.id && data.activityId) {
          const event = eventSkuList.value.get(p.id);
          if (event)
            onePrice = event == null ? void 0 : event.eventPrice;
        }
        if (p && p.id !== "") {
          data.size = p.size || "";
          data.image = p.image;
          data.price = onePrice || 0;
          data.costPrice = p.costPrice;
          data.color = p.color || "";
          data.combo = p.combo;
          data.skuId = p.id;
          data.id = p.id;
        }
      }
    });
    const getGoodsPrices = computed(() => {
      return currency(data.price).multiply(data.quantity);
    });
    const getTotalPrice = computed(() => {
      return getGoodsPrices.value.add(data.postage);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_input_number = ElInputNumber;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group overflow-hidden text-1rem",
        flex: "",
        "flex-wrap": "",
        "cursor-pointer": "",
        "justify-between": "",
        "border-2px": "",
        "rounded-8px": "",
        "p-0": "",
        "text-0.6rem": "",
        "border-default-hover": "",
        "md:p-3": "",
        "md:text-1em": ""
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isUpdateLoading))))} data-v-33cab4ab><div class="${ssrRenderClass([{ "is-event ": _ctx.data.activityId }, "relative w-2/7 md:w-8em"])}" data-v-33cab4ab>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        loading: "lazy",
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image,
        style: { "width": "100%", "height": "100%", "aspect-ratio": "1/1", "border-radius": "4px" },
        fit: "cover"
      }, null, _parent));
      _push(`</div><div class="flex flex-1 justify-between overflow-hidden truncate py-2" data-v-33cab4ab><div class="group left h-full flex flex-col items-start justify-between px-4" data-v-33cab4ab><h3 class="max-w-1/1 overflow-hidden truncate text-1.2em md:max-w-16em" data-v-33cab4ab>${ssrInterpolate(_ctx.data.name)}</h3><div my-a color-red-6 font-700 data-v-33cab4ab> \uFFE5${ssrInterpolate(unref(currency)(_ctx.data.price))} <span text-0.8em color-coolgray style="${ssrRenderStyle({ "text-decoration": "line-through" })}" data-v-33cab4ab> \uFFE5${ssrInterpolate(unref(currency)(_ctx.data.costPrice))}</span></div><div flex-row-bt-c class="mt-2" data-v-33cab4ab>`);
      _push(ssrRenderComponent(_component_el_select, {
        modelValue: unref(getProps),
        "onUpdate:modelValue": ($event) => isRef(getProps) ? getProps.value = $event : null,
        disabled: _ctx.disable,
        "no-data-text": "\u6682\u65E0\u5176\u4ED6\u89C4\u683C\uFF01",
        "loading-text": "\u52A0\u8F7D\u4E2D...",
        loading: unref(isLoading),
        placeholder: unref(getProps),
        "collapse-tags-tooltip": "",
        onVisibleChange: loadGoodSkuList
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(skuList), (p) => {
              _push2(ssrRenderComponent(_component_el_option, {
                key: p.id,
                label: getSkuProps(p),
                value: p.id,
                disabled: p.stock === 0
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(skuList), (p) => {
                return openBlock(), createBlock(_component_el_option, {
                  key: p.id,
                  label: getSkuProps(p),
                  value: p.id,
                  disabled: p.stock === 0
                }, null, 8, ["label", "value", "disabled"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-end md:mr-4" data-v-33cab4ab><div class="mr-2 mt-a" data-v-33cab4ab>`);
      if (_ctx.disable) {
        _push(`<small data-v-33cab4ab> \u5171 <strong class="text-[var(--el-color-error)]" data-v-33cab4ab>${ssrInterpolate(_ctx.data.quantity)}</strong> \u4EF6\xA0 </small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-a hidden flex-col items-end leading-1.2em md:flex" data-v-33cab4ab><small data-v-33cab4ab>${ssrInterpolate(_ctx.data.postage ? `\u8FD0\u8D39\uFF1A\uFFE5${_ctx.data.postage}` : "\u514D\u8FD0\u8D39")}</small>`);
      if (_ctx.data) {
        _push(`<small class="${ssrRenderClass({ "text-[var(--el-color-error)]": (_a = unref(eventSkuList).get(_ctx.data.skuId)) == null ? void 0 : _a.eventPrice })}" data-v-33cab4ab>${ssrInterpolate(((_b = unref(eventSkuList).get(_ctx.data.skuId)) == null ? void 0 : _b.eventPrice) ? "\u6D3B\u52A8" : "")}\u4EF7\u683C\uFF1A\uFFE5${ssrInterpolate(unref(getGoodsPrices))}</small>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.quantity) {
        _push(`<small mt-1 font-600 data-v-33cab4ab> \u5408\u8BA1\uFF1A\uFFE5${ssrInterpolate(unref(getTotalPrice))}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="relative mr-4 flex-row-c-c flex-col text-0.9em md:mr-0 md:w-1/10" data-v-33cab4ab>`);
      ssrRenderSlot(_ctx.$slots, "btn", {}, () => {
        if (!_ctx.disable) {
          _push(ssrRenderComponent(_component_el_input_number, {
            modelValue: _ctx.data.quantity,
            "onUpdate:modelValue": ($event) => _ctx.data.quantity = $event,
            min: 1,
            max: 99,
            style: { "width": "5rem" },
            disabled: _ctx.disable,
            size: "small"
          }, null, _parent));
        } else {
          _push(`<span class="font-700 opacity-40" data-v-33cab4ab> \u9009\u4E2D </span>`);
        }
      }, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/OrderSku.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-33cab4ab"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SelectPoints",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: 0 },
    getPointMax: {},
    getFinalPrice: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    });
    const user = useUserStore();
    const order = useOrderStore();
    function onWheelPoints(e) {
      if (order.status !== OrdersStatus.READY && order.status !== OrdersStatus.UN_PAID)
        return;
      if (e.deltaY < 0) {
        if (props.modelValue < 1e4 && props.getFinalPrice.intValue > 0)
          emit("update:modelValue", props.modelValue + 100);
      } else {
        if (props.modelValue >= 100)
          emit("update:modelValue", props.modelValue - 100);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input_number = ElInputNumber;
      _push(`<div${ssrRenderAttrs(mergeProps({
        flex: "",
        "items-end": ""
      }, _attrs))}><small class="relative flex flex-col"><div style="${ssrRenderStyle(props.modelValue > 0 ? null : { display: "none" })}" class="absolute bottom-1em right-0 mb-1 ml-a flex-row-c-c text-[var(--el-color-error)]"> - <span block>${ssrInterpolate(props.modelValue)}</span></div><div flex items-end justify-end> \u79EF\u5206\u5269\u4F59\uFF1A <div class="flex flex-col"><div>${ssrInterpolate(unref(user).userWallet.points)}</div></div></div></small>`);
      _push(ssrRenderComponent(_component_el_input_number, {
        modelValue: unref(model),
        "onUpdate:modelValue": ($event) => isRef(model) ? model.value = $event : null,
        modelModifiers: { lazy: true },
        style: { "width": "6em" },
        class: ["ml-4 cursor-ns-resize transition-300", { "opacity-60": props.modelValue === 0 }],
        disabled: unref(order).status !== ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).READY && unref(order).status !== ("OrdersStatus" in _ctx ? _ctx.OrdersStatus : unref(OrdersStatus)).UN_PAID,
        step: 100,
        "step-strictly": true,
        "controls-position": "right",
        label: "\u53EA\u80FD\u4EE5100\u4E3A\u500D\u6570",
        min: 0,
        max: props.getPointMax,
        onWheel: ($event) => onWheelPoints($event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/SelectPoints.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./index-QzTfU9Or.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "detail",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const order = useOrderStore();
    const address = useAddressStore();
    const user = useUserStore();
    const route = useRoute();
    const selectPayType = ref(PayType.WEALLET);
    const payTypeList = ref([
      {
        disable: false,
        type: PayType.WEALLET,
        icon: "<i block w-full h-full   i-solar:wallet-bold-duotone bg-red-5>",
        title: "\u94B1\u5305",
        amount: computed(() => `\uFFE5${currency(user.userWallet.balance)}`)
      },
      {
        disable: true,
        type: PayType.WECHAT,
        icon: `<svg
					t="1689749259928"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="1522"
				>
					<path
						class="fill-[#29bd29] dark-fill-##29bd29"
						d="M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z"
						p-id="1523"
					></path>
				</svg>`,
        title: "\u5FAE\u4FE1"
      },
      {
        disable: true,
        type: PayType.ALIPAY,
        icon: `<svg
					t="1689752384390"
					class="icon"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					p-id="2518"
				>
					<path
						d="M230.771014 576.556522c-12.614493 9.646377-25.228986 23.744928-28.93913 42.295652-5.194203 24.486957-0.742029 55.652174 22.26087 80.13913 28.93913 28.93913 72.718841 37.101449 92.011594 38.585508 51.2 3.710145 106.110145-22.26087 147.663768-50.457971 16.324638-11.130435 43.77971-34.133333 70.492754-69.750725-59.362319-30.423188-133.565217-64.556522-212.22029-61.588406-41.553623 1.484058-70.492754 9.646377-91.269566 20.776812zM983.188406 712.347826c25.971014-61.588406 40.811594-129.113043 40.811594-200.347826 0-281.971014-230.028986-512-512-512S0 230.028986 0 512s230.028986 512 512 512c170.666667 0 321.298551-83.849275 414.794203-212.22029C838.492754 768.742029 693.797101 696.023188 604.011594 652.985507c-42.295652 48.973913-105.368116 97.205797-176.602898 117.982609-44.521739 13.356522-85.333333 18.550725-126.886957 9.646377-42.295652-8.904348-72.718841-28.197101-90.527536-47.489855-8.904348-10.388406-19.292754-22.26087-27.455073-37.843479 0.742029 0.742029 0.742029 2.226087 0.742029 2.968116 0 0-4.452174-7.42029-7.420289-19.292753-1.484058-5.936232-2.968116-11.872464-3.710145-17.808696-0.742029-4.452174-0.742029-8.904348 0-12.614493-0.742029-7.42029 0-15.582609 1.484058-23.744927 4.452174-20.776812 12.614493-43.77971 35.617391-65.298551 48.973913-48.231884 115.014493-50.457971 149.147826-50.457971 50.457971 0.742029 138.017391 22.26087 212.22029 48.973913 20.776812-43.77971 34.133333-89.785507 42.295652-121.692754H304.973913v-33.391304h158.052174v-66.782609H272.324638v-34.133333h190.701449v-66.782609c0-8.904348 2.226087-16.324638 16.324638-16.324637h74.944927v83.107246h207.026087v33.391304H554.295652v66.782609H719.768116S702.701449 494.933333 651.501449 586.202899c115.014493 40.811594 277.518841 104.626087 331.686957 126.144927z m0 0"
						fill="#1374f7"
						p-id="2519"
					></path>
				</svg>`,
        title: "\u652F\u4ED8\u5B9D"
      }
    ]);
    if (route.query.id)
      order.reloadOrderInfo();
    const orderStatusMap = /* @__PURE__ */ new Map([
      [OrdersStatus.READY, { banner: "\u63D0\u4EA4\u8BA2\u5355", submitText: "\u63D0\u4EA4\u8BA2\u5355", type: "primary", btnType: "primary" }],
      [OrdersStatus.UN_PAID, { banner: "\u5F85\u4ED8\u6B3E", submitText: "\u7ACB\u5373\u4ED8\u6B3E", type: "danger", btnType: "danger" }],
      [OrdersStatus.PAID, { banner: "\u5DF2\u4ED8\u6B3E\uFF0C\u7B49\u5F85\u53D1\u8D27\u{1F4E6}", submitText: "\u50AC\u53D1\u8D27", type: "primary", btnType: "primary" }],
      [OrdersStatus.DELIVERED, { banner: "\u5DF2\u53D1\u8D27\uFF0C\u8BF7\u7B49\u5F85\u7269\u6D41\u8FD0\u7B97", submitText: "\u786E\u8BA4\u6536\u8D27", type: "success", btnType: "success" }],
      [OrdersStatus.RECEIVED, { banner: "\u5DF2\u786E\u8BA4\u6536\u8D27\uFF0C\u671F\u5F85\u4F60\u7684\u8BC4\u4EF7\uFF01", submitText: "\u53BB\u8BC4\u4EF7", type: "info", btnType: "info" }],
      [OrdersStatus.COMMENTED, { banner: "\u5DF2\u5B8C\u6210\u8BC4\u8BBA\uFF0C\u6B22\u8FCE\u4E0B\u6B21\u5149\u4E34\uFF01", submitText: "\u518D\u6765\u4E00\u5355", type: "success", btnType: "success" }],
      [OrdersStatus.CANCELED, { banner: "\u8BA2\u5355\u5DF2\u53D6\u6D88...", submitText: "\u518D\u6765\u4E00\u5355", type: "primary", btnType: "primary" }],
      [OrdersStatus.DELAY_CANCELED, { banner: "\u8BA2\u5355\u5DF2\u8D85\u65F6\u81EA\u52A8\u53D6\u6D88...", submitText: "\u518D\u6765\u4E00\u5355", type: "primary", btnType: "primary" }],
      [OrdersStatus.REFUND, { banner: "\u53D1\u8D77\u9000\u6B3E\u4E2D\uFF0C\u7B49\u7B49\u5356\u5BB6\u5904\u7406...", submitText: "\u7B49\u5F85\u4E2D\uFF0C\u8BF7\u7A0D\u540E", type: "warning", btnType: "warning" }],
      [OrdersStatus.REFUND_SUCCESS, { banner: "\u9000\u6B3E\u6210\u529F\uFF0C\u8BF7\u6CE8\u610F\u5230\u8D26\uFF01", submitText: "\u518D\u6765\u4E00\u5355", type: "info", btnType: "info" }]
    ]);
    const ordersTitle = computed(() => {
      return orderStatusMap.get(order.status) || {
        banner: "",
        submitText: "",
        type: "primary",
        btnType: "primary"
      };
    });
    const isEdit = ref(false);
    const isUpdate = ref(order.status === OrdersStatus.READY);
    const isLoading = ref(false);
    const isLoadAddressList = ref(false);
    if (address.addressList.length === 0)
      address.resetRequestList(user.getToken);
    const orderItems = ref([]);
    const skuIdList = [];
    (_a = order.pushOrderItems) == null ? void 0 : _a.forEach((p) => {
      skuIdList.push(p.skuId);
    });
    async function loadSkuItems() {
      if (skuIdList.length === 0)
        return;
      const { data, code } = await getGoodsSkuByIds(skuIdList);
      if (code === StatusCode.SUCCESS) {
        data.forEach((sku) => {
          const item = order.pushOrderItems.find((p) => p.skuId === sku.id) || {
            skuId: "",
            quantity: 0
          };
          orderItems.value.push({ ...sku, ...item });
        });
      }
    }
    loadSkuItems();
    const selectAddressId = ref("");
    const selectVoucherId = ref("");
    const voucherList = ref([]);
    const selectPointsVal = ref(0);
    const selectEventReduceVal = ref(0);
    const remark = ref(order.orderInfo.remark);
    watch(isEdit, (val) => {
      if (val)
        selectPointsVal.value = 0;
    });
    async function onSubmitOrders(status) {
      isEdit.value = false;
      isUpdate.value = false;
      saveOrdersItems();
      switch (status) {
        case OrdersStatus.READY:
          pushOrder(() => {
            payOrder(selectPayType.value);
            isLoading.value = false;
          });
          break;
        case OrdersStatus.UN_PAID:
          await payOrder(selectPayType.value);
          break;
        case OrdersStatus.PAID:
          toastOrder();
          break;
        case OrdersStatus.DELIVERED:
          checkDeliveryOrder();
          break;
        case OrdersStatus.CANCELED:
        case OrdersStatus.DELAY_CANCELED:
        case OrdersStatus.COMMENTED:
        case OrdersStatus.REFUND_SUCCESS:
          await aginPushOrder(order.pushOrderItems);
          break;
        case OrdersStatus.RECEIVED:
          toCommon();
          break;
      }
    }
    const getAllCoastPrice = computed(() => {
      let price = currency(0);
      orderItems.value.forEach((p) => {
        price = price.add(currency(p.price).multiply(p.quantity));
      });
      return price;
    });
    const getAllPostage = computed(() => {
      let price = currency(0);
      orderItems.value.forEach((p) => {
        price = price.add(currency(p.postage));
      });
      return price;
    });
    const getPointMax = computed(() => {
      const price = getAllCoastPrice.value.add(getAllPostage.value);
      return price.intValue > 1e4 ? 1e4 : price.intValue;
    });
    const getFinalPrice = computed(() => {
      return getAllCoastPrice.value.add(getAllPostage.value).subtract((selectPointsVal.value || 0) / 100);
    });
    const getReduce = computed(() => {
      if (order.orderInfo.spendPrice)
        return currency(order.orderInfo.totalPrice).subtract(order.orderInfo.spendPrice);
      else
        return 0;
    });
    async function pushOrder(call) {
      if (!selectAddressId.value) {
        ElMessage.error("\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740\uFF01");
        isUpdate.value = true;
        return;
      }
      if (isLoading.value)
        return;
      isLoading.value = true;
      const items = orderItems.value.map((p) => {
        return {
          skuId: p.skuId,
          quantity: p.quantity,
          shopId: p.shopId,
          // 店铺id
          couponId: p.couponId,
          // 代金卷
          activityId: p.activityId
          // 活动id
        };
      });
      const { data, message, code } = await pushOrdersItems(
        selectAddressId.value,
        items,
        useCheckXXSText(remark.value),
        user.getToken
      );
      if (code === StatusCode.SUCCESS) {
        order.$patch({
          orderId: data.orderId,
          unPaidVO: data,
          status: OrdersStatus.UN_PAID
        });
        order.orderInfo.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
        order.orderInfo.createTime = order.orderInfo.updateTime;
        setTimeout(async () => {
          ElNotification.success({
            title: "\u63D0\u4EA4\u6210\u529F\uFF01",
            message: "\u63D0\u4EA4\u8BA2\u5355\u6210\u529F\uFF0C\u8BF7\u572824\u5C0F\u65F6\u5185\u5B8C\u6210\u4ED8\u6B3E"
          });
          useWebToast("\u63D0\u4EA4\u6210\u529F\uFF01", "\u63D0\u4EA4\u8BA2\u5355\u6210\u529F\uFF0C\u8BF7\u572824\u5C0F\u65F6\u5185\u5B8C\u6210\u4ED8\u6B3E");
          call && call();
        }, 300);
      } else {
        ElNotification.error({
          title: "\u63D0\u4EA4\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01",
          message: message || ""
        });
        isLoading.value = false;
      }
    }
    async function payOrder(payType) {
      var _a2;
      if (order.status !== OrdersStatus.UN_PAID)
        return;
      if (getFinalPrice.value.value > +user.userWallet.balance) {
        ElMessageBox.confirm(
          "\u4F59\u989D\u4E0D\u8DB3\uFF0C\u662F\u5426\u524D\u5F80\u5145\u503C?",
          "\u4F59\u989D\u63D0\u793A",
          {
            confirmButtonText: "\u5145\u503C",
            cancelButtonText: "\u53D6\u6D88",
            lockScroll: false,
            type: "warning"
          }
        ).then(() => {
          navigateTo({
            path: "/user/info"
          });
        }).catch(() => {
          ElNotification.error({
            title: "\u64CD\u4F5C\u63D0\u9192",
            message: "\u7528\u6237\u53D6\u6D88\u4E86\u652F\u4ED8\uFF01"
          });
        });
        return;
      }
      const str = ((_a2 = payTypeList.value.find((p) => p.type === payType)) == null ? void 0 : _a2.title) || PayType.WEALLET;
      try {
        const action = await ElMessageBox.confirm(
          `\u4F7F\u7528${str}\u652F\u4ED8 \uFFE5${getFinalPrice.value}\uFF1F`,
          "\u786E\u8BA4\u652F\u4ED8",
          {
            confirmButtonText: "\u652F \u4ED8",
            lockScroll: false,
            confirmButtonClass: "el-button--info border-default shadow-sm",
            cancelButtonText: "\u53D6 \u6D88",
            center: true
          }
        );
        if (action === "confirm") {
          isLoading.value = true;
          const { data, message, code } = await payOrders(
            order.orderId || order.orderInfo.id,
            PayType.WEALLET,
            selectPointsVal.value,
            selectVoucherId.value,
            user.getToken
          );
          if (code === StatusCode.SUCCESS) {
            ElNotification.success({
              title: "\u4ED8\u6B3E\u6210\u529F\uFF01",
              message: `\u652F\u4ED8\u6210\u529F\uFF0C\u5171\u82B1\u8D39${data}\u5143`
            });
            useWebToast("\u4ED8\u6B3E\u6210\u529F\uFF01", `\u652F\u4ED8\u6210\u529F\uFF0C\u5171\u82B1\u8D39${data}\u5143`);
            order.status = OrdersStatus.PAID;
            order.orderInfo.status = OrdersStatus.PAID;
          } else {
            ElNotification.error({
              title: "\u652F\u4ED8\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01",
              message
            });
          }
        }
        isLoading.value = false;
      } catch (e) {
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    }
    function toastOrder() {
      ElMessageBox.alert("\u6211\u4EEC\u5DF2\u6536\u5230\u60A8\u7684\u8BA2\u5355\uFF0C\u5C06\u5C3D\u5FEB\u5904\u7406\u5E76\u5B89\u6392\u53D1\u8D27\uFF01", "\u63D0 \u9192", {
        confirmButtonText: "\u660E \u767D",
        lockScroll: false,
        center: true
      }).catch();
    }
    async function cancelOrder(orderId) {
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
          isLoading.value = true;
          const { code } = await cancelOrders(
            orderId || order.orderInfo.id,
            user.getToken
          );
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.orderInfo.updateTime = useDateFormat(
              Date.now(),
              "YYYY-MM-DD HH:mm:ss"
            ).value.toString();
            order.status = OrdersStatus.CANCELED;
            order.orderInfo.status = OrdersStatus.CANCELED;
            ElNotification.success({
              title: "\u53D6\u6D88\u6210\u529F \u{1F39F}",
              message: "\u8BA2\u5355\u53D6\u6D88\u6210\u529F\uFF0C\u4F18\u60E0\u5377\u7B49\u4F18\u60E0\u4E5F\u5C06\u539F\u8DEF\u9000\u56DE\uFF01"
            });
          } else {
            ElNotification.error({
              title: "\u8BA2\u5355\u53D6\u6D88\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
            });
          }
        }
      } catch (e) {
        isLoading.value = false;
      } finally {
        isLoading.value = false;
      }
    }
    async function updateOrder(orderId) {
      if (order.status !== OrdersStatus.UN_PAID && order.status !== OrdersStatus.PAID)
        return;
      isUpdate.value = false;
      isLoading.value = true;
      if (selectAddressId.value === "") {
        ElMessage.warning("\u8BF7\u9009\u62E9\u4FEE\u6539\u5730\u5740\uFF01");
        return;
      }
      const { message, code } = await updateOrders(
        orderId,
        selectAddressId.value,
        remark.value || order.orderInfo.remark,
        user.getToken
      );
      isLoading.value = false;
      if (code === StatusCode.SUCCESS) {
        order.orderInfo.updateTime = useDateFormat(Date.now(), "YYYY-MM-DD HH:mm:ss").value.toString();
        const vo = address.addressList.find((p) => p.id === selectAddressId.value);
        if (vo) {
          order.orderInfo.name = vo.name;
          order.orderInfo.phone = vo.phone;
          order.orderInfo.province = vo.province;
          order.orderInfo.city = vo.city;
          order.orderInfo.county = vo.county;
          order.orderInfo.address = vo.address;
          order.orderInfo.postalCode = vo.postalCode;
          order.orderInfo.remark = remark.value;
        }
        ElNotification.success({
          title: "\u4FEE\u6539\u8BA2\u5355\u6210\u529F\uFF01"
        });
      } else {
        ElNotification.error({
          title: "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01",
          message
        });
      }
    }
    async function pushRefundOrder(orderId) {
      if (order.status !== OrdersStatus.PAID && order.status !== OrdersStatus.RECEIVED && order.status !== OrdersStatus.DELIVERED)
        return;
      try {
        const action = await ElMessageBox.confirm("\u786E\u8BA4\u53D1\u8D77\u9000\u6B3E\uFF1F\u{1F622}", "\u9000\u6B3E\u63D0\u793A", {
          center: true,
          confirmButtonText: "\u9000 \u6B3E",
          confirmButtonClass: "el-button--danger border-default shadow-sm",
          cancelButtonText: "\u53D6 \u6D88",
          lockScroll: false
        });
        if (action === "confirm") {
          isLoading.value = true;
          const { message, code } = await refundOrders(
            orderId || order.orderInfo.id,
            user.getToken
          );
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.orderInfo.updateTime = useDateFormat(
              Date.now(),
              "YYYY-MM-DD HH:mm:ss"
            ).value.toString();
            if (order.status === OrdersStatus.RECEIVED) {
              order.status = OrdersStatus.REFUND;
              order.orderInfo.status = OrdersStatus.REFUND;
              ElNotification.success({
                title: "\u53D1\u8D77\u9000\u6B3E\u6210\u529F",
                message
              });
            } else {
              order.status = OrdersStatus.REFUND_SUCCESS;
              order.orderInfo.status = OrdersStatus.REFUND_SUCCESS;
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
    async function checkDeliveryOrder() {
      if (order.status !== OrdersStatus.DELIVERED)
        return;
      try {
        const action = await ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u6536\u8D27\uFF1F", "\u6536\u8D27\u63D0\u793A", {
          center: true,
          confirmButtonText: "\u786E \u8BA4",
          confirmButtonClass: "el-button--success border-default shadow-sm",
          cancelButtonText: "\u53D6 \u6D88",
          lockScroll: false
        });
        if (action === "confirm") {
          isLoading.value = true;
          const { code } = await checkDeliveryOrders(order.orderInfo.id, user.getToken);
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.orderInfo.updateTime = useDateFormat(
              Date.now(),
              "YYYY-MM-DD HH:mm:ss"
            ).value.toString();
            order.status = OrdersStatus.RECEIVED;
            order.orderInfo.status = OrdersStatus.RECEIVED;
            ElNotification.success({
              title: "\u6536\u8D27\u6210\u529F",
              message: "\u6536\u8D27\u786E\u8BA4\u6210\u529F\uFF01\u5982\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\u4EEC\u7684\u5BA2\u670D\u3002"
            });
            useWebToast("\u6536\u8D27\u6210\u529F", "\u6536\u8D27\u786E\u8BA4\u6210\u529F\uFF01\u5982\u6709\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\u4EEC\u7684\u5BA2\u670D\u3002");
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
    async function aginPushOrder(items) {
      if (!items || items.length === 0)
        return;
      isLoading.value = true;
      const pushOrderItems = [...items];
      order.clearOrderItems();
      order.$patch({
        pushOrderItems
      });
      isUpdate.value = true;
      isEdit.value = false;
      setTimeout(() => {
        isLoading.value = false;
      }, 500);
    }
    function toCommon() {
      if (order.status !== OrdersStatus.RECEIVED)
        return;
      navigateTo({
        path: `/order/comment/${order.orderInfo.id}`
      });
    }
    async function deleteOrder(orderId) {
      if (order.orderInfo.status !== OrdersStatus.REFUND_SUCCESS && order.orderInfo.status !== OrdersStatus.CANCELED && order.orderInfo.status !== OrdersStatus.DELAY_CANCELED && order.orderInfo.status !== OrdersStatus.COMMENTED)
        return;
      try {
        const action = await ElMessageBox.confirm(
          "\u5220\u9664\u5C06\u6C38\u4E45\u79FB\u9664\u8BE5\u8BA2\u5355\u53CA\u5176\u76F8\u5173\u4FE1\u606F\uFF0C\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",
          "\u5220\u9664\u64CD\u4F5C",
          {
            center: true,
            confirmButtonText: "\u5220 \u9664",
            confirmButtonClass: "el-button--danger border-default shadow-sm",
            cancelButtonText: "\u53D6 \u6D88",
            lockScroll: false
          }
        );
        if (action === "confirm") {
          isLoading.value = true;
          const { code } = await deleteOrders(orderId || order.orderInfo.id, user.getToken);
          isLoading.value = false;
          if (code === StatusCode.SUCCESS) {
            order.clearOrderItems();
            order.status = OrdersStatus.DELETED;
            order.orderInfo.status = OrdersStatus.DELETED;
            ElNotification.success({
              title: "\u5220\u9664\u63D0\u793A",
              message: "\u8BA2\u5355\u548C\u76F8\u5173\u4FE1\u606F\u5220\u9664\u6210\u529F\uFF01"
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
    function updateAddressId(id) {
      if (isUpdate.value)
        selectAddressId.value = id;
    }
    function toEditGoods(status) {
      if (status !== OrdersStatus.READY)
        return;
      if (isEdit.value) {
        saveOrdersItems();
        isEdit.value = false;
        return;
      }
      ElMessageBox.alert("\u63D0\u4EA4\u8BA2\u5355\u540E\u4FBF\u4E0D\u53EF\u4FEE\u6539\u89C4\u683C\u6570\u91CF\u548C\u4F18\u60E0", "\u6CE8\u610F", {
        confirmButtonText: "\u6211\u5DF2\u4E86\u89E3",
        lockScroll: false,
        center: true,
        callback: (action) => {
          if (action === "confirm")
            isEdit.value = true;
        }
      });
    }
    function saveOrdersItems() {
      const list = orderItems.value.map((p) => {
        return {
          skuId: p.skuId,
          quantity: p.quantity,
          shopId: p.shopId,
          // 店铺id
          couponId: p.couponId,
          // 优惠卷id
          activityId: p.activityId
          // 活动id
        };
      });
      order.$patch({
        pushOrderItems: list
      });
    }
    async function reloadAddress() {
      if (isLoadAddressList.value)
        return;
      isLoadAddressList.value = true;
      await address.resetRequestList(user.getToken);
      setTimeout(() => {
        isLoadAddressList.value = false;
      }, 300);
    }
    const title = computed(() => {
      var _a2;
      return `${appName} - ${(_a2 = ordersTitle.value) == null ? void 0 : _a2.banner}`;
    });
    useHead({
      title,
      meta: [
        {
          name: "description",
          content: title
        }
      ]
    });
    async function reload() {
      if (isLoading.value)
        return;
      isLoading.value = true;
      await order.reloadOrderInfo(order.orderId);
      setTimeout(() => {
        ElMessage.success("\u5237\u65B0\u6210\u529F\uFF01");
        isLoading.value = false;
      }, 300);
    }
    function toBack() {
      if (history)
        history.length > 1 ? history.back() : navigateTo("/");
      else
        navigateTo("/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_card_el_image = __nuxt_component_1;
      const _component_ElDivider = ElDivider;
      const _component_lazy_el_text = __nuxt_component_5_lazy;
      const _component_OrderDelayTimer = _sfc_main$b;
      const _component_BtnReload = __nuxt_component_7;
      const _component_BtnSwitch = __nuxt_component_8;
      const _component_OrderStatusSteps = __nuxt_component_9;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_scrollbar = ElScrollbar;
      const _component_OrderAddressBoxSe = _sfc_main$4;
      const _component_el_radio = ElRadio;
      const _component_ElIconCirclePlusFilled = circle_plus_filled_default;
      const _component_OrderAddressInfo = _sfc_main$3;
      const _component_el_text = ElText;
      const _component_CardOrderSku = __nuxt_component_16;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_OrderSelectPoints = _sfc_main$1;
      const _component_el_input = ElInput;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_el_button = ElButton;
      const _component_el_empty = ElEmpty;
      const _directive_auto_animate = resolveDirective("auto-animate");
      const _directive_loading = vLoading;
      const _directive_copying = resolveDirective("copying");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f3b50f73>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "second",
        header: false,
        "left-menu": false,
        footer: false,
        menu: ["back", "home", "service"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => {
                  var _a2, _b;
                  return [
                    unref(user).isLogin && unref(order).pushOrderItems.length > 0 ? withDirectives((openBlock(), createBlock("div", {
                      key: 0,
                      class: "min-h-100vh tracking-0.1em layout-default-se"
                    }, [
                      createVNode("div", { class: "group mb-2rem mt-1rem flex flex-row-bt-c flex-wrap select-none" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_NuxtLink, { to: "/" }, {
                            default: withCtx(() => [
                              createVNode(_component_card_el_image, {
                                loading: "lazy",
                                src: "/logo_title.png",
                                alt: "Design by Kiwi2333 LOGO",
                                class: "w-20vw md:w-10rem"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_ElDivider, {
                            direction: "vertical",
                            style: { "border-width": "2px", "border-radius": "10px", "margin": "0 1.4rem" }
                          }),
                          createVNode(_component_lazy_el_text, {
                            flex: "",
                            style: { "font-weight": "700", "font-size": "1.2rem" },
                            type: (_a2 = unref(ordersTitle)) == null ? void 0 : _a2.type
                          }, {
                            default: withCtx(() => {
                              var _a3;
                              return [
                                createTextVNode(toDisplayString((_a3 = unref(ordersTitle)) == null ? void 0 : _a3.banner) + " ", 1),
                                unref(order).status === unref(OrdersStatus).UN_PAID ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  inline: "",
                                  truncate: ""
                                }, [
                                  createTextVNode(" \uFF1A "),
                                  createVNode(_component_OrderDelayTimer, {
                                    date: new Date(unref(order).orderInfo.createTime)
                                  }, null, 8, ["date"])
                                ])) : createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          }, 8, ["type"])
                        ]),
                        createVNode("div", { class: "flex" }, [
                          createVNode(_component_BtnReload, {
                            class: "group-hover:opacity-90 md:opacity-0",
                            onReload: reload
                          }),
                          createVNode(_component_BtnSwitch, { class: "mr-0 group-hover:opacity-90 md:opacity-0" })
                        ])
                      ]),
                      withDirectives((openBlock(), createBlock("div", {
                        class: "group flex flex-col overflow-hidden border-t-[var(--el-color-primary)] border-default dark:border-t-[var(--el-color-primary)] v-card",
                        "border-t": "0.5rem solid ",
                        style: { borderTopColor: `var(--el-color-${unref(ordersTitle).type})` }
                      }, [
                        unref(order).status > unref(OrdersStatus).READY ? (openBlock(), createBlock(_component_OrderStatusSteps, {
                          key: "OrderStatusSteps-list",
                          class: "mt-2",
                          active: unref(order).status,
                          date: unref(order).orderInfo.createTime,
                          color: (_b = unref(ordersTitle)) == null ? void 0 : _b.type
                        }, null, 8, ["active", "date", "color"])) : createCommentVNode("", true),
                        unref(isUpdate) ? (openBlock(), createBlock("div", {
                          key: "address-list",
                          class: "address-list w-full flex flex-col"
                        }, [
                          createVNode("h4", {
                            "mb-2": "",
                            "tracking-0.2em": ""
                          }, [
                            createTextVNode(" \u6536\u8D27\u5730\u5740\uFF1A "),
                            withDirectives(createVNode("i", {
                              "opacity-0": "",
                              "group-hover:opacity-100": "",
                              class: "i-solar:refresh-outline float-right cursor-pointer bg-[var(--el-color-info)] px-3 transition-300 hover:rotate-180",
                              onClick: reloadAddress
                            }, null, 512), [
                              [vShow, unref(isUpdate)]
                            ])
                          ]),
                          createVNode(_component_ElDivider, {
                            style: { "margin": "0.7rem 0" },
                            "opacity-40": ""
                          }),
                          createVNode(_component_el_radio_group, {
                            modelValue: unref(selectAddressId),
                            "onUpdate:modelValue": ($event) => isRef(selectAddressId) ? selectAddressId.value = $event : null,
                            disabled: !unref(isEdit)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_scrollbar, null, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock("ul", { class: "w-800px flex pb-3 md:w-full" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(address).addressList, (p) => {
                                      return openBlock(), createBlock(_component_OrderAddressBoxSe, {
                                        key: p.id,
                                        address: p,
                                        class: [
                                          "w-220px flex-shrink-0 overflow-hidden opacity-80 transition-200 dark:opacity-70",
                                          p.id === unref(selectAddressId) ? "border-[var(--el-color-primary)] dark:border-[var(--el-color-primary)]" : ""
                                        ],
                                        onClick: ($event) => updateAddressId(p.id)
                                      }, {
                                        btns: withCtx(() => [
                                          createVNode(_component_el_radio, {
                                            label: p.id
                                          }, null, 8, ["label"])
                                        ]),
                                        _: 2
                                      }, 1032, ["address", "class", "onClick"]);
                                    }), 128)),
                                    createVNode(_component_NuxtLink, {
                                      key: "/user/address",
                                      target: "_blank",
                                      to: "/user/address",
                                      class: "group relative mr-3 mt-2 min-h-160px w-240px flex flex-row-c-c flex-shrink-0 flex-col cursor-pointer border-2px rounded-6px rounded-8px p-3.4 leading-1.2em opacity-90 transition-300 hover:scale-96 border-default-dashed hover:border-solid"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_ElIconCirclePlusFilled, { class: "h-4em w-4em opacity-40 transition-300" }),
                                        createVNode("strong", { class: "mt-2 opacity-40 transition-300" }, "\u6DFB\u52A0\u65B0\u5730\u5740")
                                      ]),
                                      _: 1
                                    })
                                  ])), [
                                    [_directive_auto_animate, {
                                      duration: 300,
                                      easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
                                    }]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ])) : createCommentVNode("", true)
                      ], 4)), [
                        [_directive_loading, unref(isLoadAddressList)],
                        [_directive_auto_animate]
                      ]),
                      withDirectives(createVNode(_component_OrderAddressInfo, {
                        class: "border-default v-card",
                        address: unref(order).orderInfo
                      }, null, 8, ["address"]), [
                        [vShow, unref(order).status > unref(OrdersStatus).READY]
                      ]),
                      createVNode("div", { class: "order-item flex flex-col border-default v-card" }, [
                        createVNode("h4", { "mb-2": "" }, [
                          createTextVNode(" \u9009\u8D2D\u5546\u54C1 "),
                          unref(order).status === unref(OrdersStatus).READY ? (openBlock(), createBlock(_component_el_text, {
                            key: 0,
                            class: "float-right ml-a cursor-pointer",
                            plain: "",
                            type: unref(isEdit) ? "danger" : "primary",
                            szie: "small",
                            onClick: ($event) => toEditGoods(unref(order).status)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isEdit) ? "\u786E\u5B9A\u4FEE\u6539" : "\u4FEE\u6539"), 1)
                            ]),
                            _: 1
                          }, 8, ["type", "onClick"])) : createCommentVNode("", true),
                          createVNode(_component_ElDivider, {
                            style: { "margin": "0.7rem 0" },
                            "opacity-40": ""
                          })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(orderItems), (p) => {
                          return openBlock(), createBlock("section", {
                            key: p.id
                          }, [
                            createVNode(_component_CardOrderSku, {
                              class: "mb-3",
                              data: p,
                              disable: !unref(isEdit)
                            }, {
                              btn: withCtx(() => []),
                              _: 2
                            }, 1032, ["data", "disable"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("section", { class: "border-default v-card" }, [
                        createVNode("div", { class: "flex-row-bt-c" }, [
                          createVNode("span", null, "\u4EE3\u91D1\u5377"),
                          createVNode(_component_el_select, {
                            modelValue: unref(selectVoucherId),
                            "onUpdate:modelValue": ($event) => isRef(selectVoucherId) ? selectVoucherId.value = $event : null,
                            disabled: unref(voucherList).length === 0 || !unref(isEdit),
                            class: unref(voucherList).length === 0 || !unref(isEdit) ? "w-5rem" : "w-1/5",
                            placeholder: unref(voucherList).length ? "\u9009\u62E9\u4EE3\u91D1\u5377" : "\u6682\u65E0\u4EE3\u91D1\u5377"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(voucherList), (p) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: p,
                                  label: p,
                                  value: p
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class", "placeholder"])
                        ]),
                        createVNode(_component_ElDivider, {
                          class: "opacity-40",
                          style: { "margin": "0.8em 0" }
                        }),
                        unref(order).status === unref(OrdersStatus).READY || unref(order).status === unref(OrdersStatus).UN_PAID ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex-row-bt-c border-0"
                        }, [
                          createVNode("span", null, [
                            createTextVNode(" \u79EF\u5206\u62B5\u6263 "),
                            createVNode("small", { "opacity-80": "" }, "100\u79EF\u5206\u4F4E1\u5143\uFF08\u6BCF\u5355\u4E0A\u965010000\u79EF\u5206\uFF09")
                          ]),
                          unref(user).userWallet.points > 0 ? (openBlock(), createBlock(_component_OrderSelectPoints, {
                            key: 0,
                            modelValue: unref(selectPointsVal),
                            "onUpdate:modelValue": ($event) => isRef(selectPointsVal) ? selectPointsVal.value = $event : null,
                            "get-point-max": unref(getPointMax),
                            "get-final-price": unref(getFinalPrice)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "get-point-max", "get-final-price"])) : (openBlock(), createBlock("small", {
                            key: 1,
                            "font-600": "",
                            "opacity-40": ""
                          }, " \u6682\u65E0\u79EF\u5206 "))
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("section", { class: "flex-row-bt-c border-default v-card" }, [
                        createTextVNode(" \u5907\u6CE8 "),
                        createVNode("div", { class: "w-10rem flex justify-end md:w-14rem" }, [
                          unref(order).status < unref(OrdersStatus).DELIVERED ? (openBlock(), createBlock(_component_el_input, {
                            key: 0,
                            modelValue: unref(remark),
                            "onUpdate:modelValue": ($event) => isRef(remark) ? remark.value = $event : null,
                            modelModifiers: { lazy: true },
                            disabled: !unref(isUpdate),
                            class: "remark",
                            type: "textarea",
                            rows: "1",
                            minlength: 0,
                            maxlength: 40,
                            placeholder: "\u7ED9\u5356\u5BB6\u7684\u5907\u6CE8\uFF08\u9009\u586B\uFF09"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])) : (openBlock(), createBlock("small", {
                            key: 1,
                            "text-right": ""
                          }, toDisplayString(unref(order).orderInfo.remark || "\u6682\u65E0\u5907\u6CE8"), 1))
                        ])
                      ]),
                      unref(order).orderInfo.status === unref(OrdersStatus).UN_PAID ? (openBlock(), createBlock("section", {
                        key: 0,
                        class: "border-default v-card"
                      }, [
                        createVNode("h4", { "tracking-0.2em": "" }, [
                          createTextVNode(" \u4ED8\u6B3E\u65B9\u5F0F "),
                          createVNode(_component_ElDivider, {
                            style: { "margin": "0.7rem 0" },
                            "opacity-40": ""
                          }),
                          createVNode(_component_el_radio_group, {
                            modelValue: unref(selectPayType),
                            "onUpdate:modelValue": ($event) => isRef(selectPayType) ? selectPayType.value = $event : null,
                            disable: !unref(isUpdate) || !unref(isEdit),
                            class: "pay-type-list w-full",
                            style: { "width": "100%" }
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(payTypeList), (p) => {
                                return openBlock(), createBlock("div", {
                                  key: p.type,
                                  class: "my-2.4 w-full flex-row-bt-c"
                                }, [
                                  createVNode("div", { class: "left flex items-center" }, [
                                    createVNode("span", {
                                      class: "mr-4 inline-block h-2rem w-2rem",
                                      innerHTML: p.icon
                                    }, null, 8, ["innerHTML"]),
                                    createVNode("small", { "text-0.8rem": "" }, [
                                      createTextVNode(toDisplayString(p.title) + " ", 1),
                                      (p == null ? void 0 : p.amount) ? (openBlock(), createBlock("span", { key: 0 }, "\uFF08\u5269\u4F59\uFF1A" + toDisplayString(p == null ? void 0 : p.amount) + "\uFF09", 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  !p.disable ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    flex: "",
                                    "items-center": ""
                                  }, [
                                    createVNode(_component_el_radio, {
                                      label: p.type,
                                      disable: p.disable
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(""))
                                      ]),
                                      _: 2
                                    }, 1032, ["label", "disable"])
                                  ])) : (openBlock(), createBlock("small", {
                                    key: 1,
                                    "text-0.6rem": "",
                                    "font-500": "",
                                    "opacity-60": ""
                                  }, " \u6682\u672A\u5F00\u542F "))
                                ]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disable"])
                        ])
                      ])) : createCommentVNode("", true),
                      unref(order).status !== unref(OrdersStatus).READY ? (openBlock(), createBlock("section", {
                        key: 1,
                        class: "flex flex-col leading-2em opacity-80 border-default v-card"
                      }, [
                        createVNode("h4", { "tracking-0.2em": "" }, [
                          createTextVNode(" \u8BA2\u5355\u4FE1\u606F "),
                          createVNode(_component_ElDivider, {
                            style: { "margin": "0.7rem 0" },
                            "opacity-40": ""
                          })
                        ]),
                        withDirectives((openBlock(), createBlock("small", { class: "w-full flex-row-bt-c cursor-pointer" }, [
                          createTextVNode(" \u8BA2\u5355\u53F7 "),
                          createVNode("span", { class: "transition-300 hover:text-[var(--el-color-info)] hover:underline" }, [
                            createTextVNode(toDisplayString(unref(order).orderInfo.id) + " ", 1),
                            createVNode("i", { class: "i-solar:copy-outline p-2 opacity-60" })
                          ])
                        ])), [
                          [
                            _directive_copying,
                            unref(order).orderInfo.id,
                            void 0,
                            { toast: true }
                          ]
                        ]),
                        withDirectives(createVNode("small", {
                          "w-full": "",
                          "flex-row-bt-c": ""
                        }, [
                          createTextVNode(" \u652F\u4ED8\u65F6\u95F4 "),
                          createVNode("span", {
                            "opacity-80": "",
                            style: { "font-family": "Helvetica" }
                          }, toDisplayString(unref(order).orderInfo.paidTime), 1)
                        ], 512), [
                          [vShow, unref(order).orderInfo.paidTime]
                        ]),
                        createVNode("small", {
                          "w-full": "",
                          "flex-row-bt-c": ""
                        }, [
                          createTextVNode(" \u66F4\u65B0\u65F6\u95F4 "),
                          createVNode("span", {
                            "opacity-80": "",
                            style: { "font-family": "Helvetica" }
                          }, toDisplayString(unref(order).orderInfo.updateTime), 1)
                        ]),
                        createVNode("small", {
                          "w-full": "",
                          "flex-row-bt-c": ""
                        }, [
                          createTextVNode(" \u4E0B\u5355\u65F6\u95F4 "),
                          createVNode("span", {
                            "opacity-80": "",
                            style: { "font-family": "Helvetica" }
                          }, toDisplayString(unref(order).orderInfo.createTime), 1)
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("section", { class: "flex flex-col leading-2em border-default v-card" }, [
                        createVNode("h4", { "tracking-0.2em": "" }, " \u91D1\u989D\u660E\u7EC6 "),
                        createVNode(_component_ElDivider, {
                          style: { "margin": "0.6rem 0" },
                          "opacity-40": ""
                        }),
                        createVNode("small", { class: "w-full flex-row-bt-c opacity-80" }, [
                          createTextVNode(" \u539F\u603B\u4EF7 "),
                          createVNode("span", null, "\uFFE5" + toDisplayString(unref(getAllCoastPrice)), 1)
                        ]),
                        withDirectives(createVNode("small", { class: "w-full flex-row-bt-c opacity-80" }, [
                          createTextVNode(" \u4F18\u60E0 "),
                          createVNode("strong", { class: "text-[var(--el-color-error)]" }, "-" + toDisplayString(`\uFFE5${unref(getReduce)}`), 1)
                        ], 512), [
                          [vShow, unref(order).status > unref(OrdersStatus).UN_PAID && unref(getReduce) !== 0]
                        ]),
                        createVNode("small", { class: "w-full flex-row-bt-c opacity-80" }, [
                          createTextVNode(" \u8FD0\u8D39 "),
                          createVNode("span", null, toDisplayString(unref(getAllPostage).value > 0 ? `\uFFE5${unref(getAllPostage)}` : "\uFFE50.00"), 1)
                        ]),
                        withDirectives(createVNode("small", { class: "w-full flex-row-bt-c opacity-80" }, [
                          createTextVNode(" \u4EE3\u91D1\u5377\u4F18\u60E0 "),
                          createVNode("span", null, toDisplayString(unref(voucherList).length ? unref(selectVoucherId) : 0) + "\u5143", 1)
                        ], 512), [
                          [vShow, unref(selectVoucherId) !== "" && unref(order).status <= unref(OrdersStatus).UN_PAID]
                        ]),
                        withDirectives(createVNode("small", { class: "w-full flex-row-bt-c opacity-80" }, [
                          createTextVNode(" \u79EF\u5206\u62B5\u6263 "),
                          createVNode("span", { class: "text-[var(--el-color-error)]" }, " -" + toDisplayString(`\uFFE5${unref(currency)(unref(selectPointsVal) / 100)}`), 1)
                        ], 512), [
                          [vShow, unref(selectPointsVal) > 0 && unref(order).status <= unref(OrdersStatus).UN_PAID]
                        ]),
                        withDirectives(createVNode("small", { class: "w-full flex-row-bt-c opacity-80" }, [
                          createTextVNode(" \u6D3B\u52A8\u4F18\u60E0 "),
                          createVNode("span", { class: "text-[var(--el-color-error)]" }, " -" + toDisplayString(`\uFFE5${unref(currency)(unref(selectEventReduceVal) / 100)}`), 1)
                        ], 512), [
                          [vShow, unref(selectEventReduceVal) > 0 && unref(order).status <= unref(OrdersStatus).UN_PAID]
                        ]),
                        unref(getReduce) ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "w-full flex-row-bt-c opacity-80"
                        }, [
                          createTextVNode(" \u51CF\u5C11 "),
                          createVNode("span", { class: "text-[var(--el-color-error)]" }, " -" + toDisplayString(`\uFFE5${unref(currency)(unref(order).orderInfo.totalPrice).subtract(unref(order).orderInfo.spendPrice)}`), 1)
                        ])) : createCommentVNode("", true),
                        createVNode(_component_ElDivider, {
                          style: { "margin": "0.6rem 0" },
                          "opacity-30": ""
                        }),
                        createVNode("div", {
                          "w-full": "",
                          "flex-row-bt-c": ""
                        }, [
                          createTextVNode(" \u603B\u8BA1 "),
                          createVNode("h3", { class: "flex text-[var(--el-color-error)]" }, [
                            createTextVNode(" \uFFE5 "),
                            createVNode("strong", { block: "" }, toDisplayString(unref(getReduce) ? unref(currency)(unref(order).orderInfo.spendPrice) : unref(getFinalPrice)), 1)
                          ])
                        ])
                      ]),
                      createVNode("section", { class: "sticky bottom-6 flex-row-bt-c shadow-lg border-default v-card" }, [
                        createVNode("div", { class: "menu" }, [
                          createVNode(_component_el_text, null, {
                            default: withCtx(() => [
                              createVNode("i", {
                                "i-solar:headphones-round-sound-line-duotone": "",
                                "mr-2": "",
                                "p-.8em": ""
                              }),
                              createVNode(_component_nuxt_link, {
                                to: "/chat?type=service",
                                class: "hidden md:inline"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5BA2\u670D ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "group submit flex cursor-pointer items-center" }, [
                          createVNode("i", { class: "fold i-solar:menu-dots-bold-duotone mr-6 block h-6 w-6 md:hidden" }),
                          createVNode("div", { class: "submit-lbtns mr-3 hidden flex-row-c-c transition-200 transition-all md:flex border-default md:border-none" }, [
                            unref(order).status === unref(OrdersStatus).UN_PAID ? (openBlock(), createBlock(_component_el_button, {
                              key: 0,
                              size: "default",
                              plain: "",
                              onClick: ($event) => cancelOrder(unref(order).orderId)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u53D6\u6D88\u8BA2\u5355 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            unref(order).orderInfo.status === unref(OrdersStatus).REFUND_SUCCESS || unref(order).orderInfo.status === unref(OrdersStatus).CANCELED || unref(order).orderInfo.status === unref(OrdersStatus).DELAY_CANCELED || unref(order).orderInfo.status === unref(OrdersStatus).COMMENTED ? (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "danger",
                              plain: "",
                              onClick: ($event) => deleteOrder(unref(order).orderId)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5220\u9664\u8BA2\u5355 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            unref(order).status === unref(OrdersStatus).UN_PAID || unref(order).status === unref(OrdersStatus).PAID ? (openBlock(), createBlock(_component_el_button, {
                              key: 2,
                              size: "default",
                              type: unref(isUpdate) ? "danger" : "",
                              plain: "",
                              onClick: ($event) => isUpdate.value = !unref(isUpdate)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(isUpdate) ? "\u53D6\u6D88\u4FEE\u6539" : "\u4FEE\u6539\u8BA2\u5355"), 1)
                              ]),
                              _: 1
                            }, 8, ["type", "onClick"])) : createCommentVNode("", true),
                            unref(order).status === unref(OrdersStatus).PAID || unref(order).status === unref(OrdersStatus).RECEIVED || unref(order).status === unref(OrdersStatus).DELIVERED ? (openBlock(), createBlock(_component_el_button, {
                              key: 3,
                              size: "default",
                              type: "danger",
                              plain: "",
                              onClick: ($event) => pushRefundOrder(unref(order).orderId)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u7533\u8BF7\u9000\u6B3E ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ]),
                          unref(ordersTitle).submitText ? (openBlock(), createBlock(_component_el_button, {
                            key: 0,
                            size: "default",
                            "min-w-8em": "",
                            "shadow-md": "",
                            style: { "font-weight": "600" },
                            type: unref(ordersTitle).btnType || "primary",
                            onClick: ($event) => unref(isUpdate) && unref(order).status !== unref(OrdersStatus).READY ? updateOrder(unref(order).orderInfo.id) : onSubmitOrders(unref(order).status)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isUpdate) && unref(order).status !== unref(OrdersStatus).READY ? "\u786E \u8BA4" : unref(ordersTitle).submitText), 1)
                            ]),
                            _: 1
                          }, 8, ["type", "onClick"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])), [
                      [
                        _directive_loading,
                        unref(isLoading),
                        void 0,
                        {
                          fullscreen: true,
                          lock: true
                        }
                      ]
                    ]) : (openBlock(), createBlock("div", {
                      key: 1,
                      "h-90vh": "",
                      "w-full": "",
                      "flex-row-c-c": ""
                    }, [
                      createVNode(_component_el_empty, { description: " " }, {
                        default: withCtx(() => [
                          createVNode("h4", {
                            mb4: "",
                            "font-500": ""
                          }, " \u8BA2\u5355\u5DF2\u5220\u9664\u6216\u4E0D\u5B58\u5728\uFF01 "),
                          createVNode(_component_el_button, {
                            type: "primary",
                            onClick: toBack
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u8FD4 \u56DE ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]))
                  ];
                }),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3b50f73"]]);

export { detail as default };
//# sourceMappingURL=detail-ok9wBrxl.mjs.map
