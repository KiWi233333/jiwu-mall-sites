import { q as buildProps, W as iconPropType, r as useNamespace, I as definePropType, M as ElIcon, w as withInstall, X as withNoopInstall, J as mutable, P as arrow_right_default, Y as buttonTypes, Z as question_filled_default, $ as addUnit, h as ElButton, b as _export_sfc, y as _export_sfc$1, B as BaseUrlImg, a0 as BaseUrlVideo, u as useUserStore, a1 as useShopStore, A as useRoute, S as StatusCode, a2 as useAsyncData, c as useSeoMeta, t as isNumber, f as __nuxt_component_2$1, a3 as arrow_left_bold_default, a4 as arrow_right_bold_default, E as ElMessage, n as navigateTo, e as __nuxt_component_2$2, _ as __nuxt_component_0$1, m as useFetch, o as BaseUrl } from '../server.mjs';
import { defineComponent, ref, provide, openBlock, createElementBlock, normalizeClass, unref, renderSlot, getCurrentInstance, inject, createElementVNode, createBlock, withCtx, resolveDynamicComponent, toDisplayString, withKeys, withModifiers, createTextVNode, createVNode, withDirectives, vShow, computed, mergeProps, normalizeStyle, createCommentVNode, useSSRContext, watch, withAsyncContext, resolveDirective, Fragment, renderList, reactive, isRef, resolveComponent } from 'vue';
import { _ as __nuxt_component_0 } from './nuxt-link-qWvYy4Gj.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList, ssrRenderTeleport, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { g as getGoodsCategoryByGid, _ as __nuxt_component_1$1 } from './GoodsListSsr-NiOzqUEG.mjs';
import { _ as _sfc_main$e } from './PreLoading-Jnbo7kLW.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { E as ElScrollbar } from './scrollbar-uIUdvs5K.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-Q_ZiRZvp.mjs';
import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { u as useTooltipContentProps, E as ElTooltip } from './index-gZoFaHmS.mjs';
import { u as useLocale } from './index-RvHFA2kt.mjs';
import { g as getGoodsIsCollect, t as toggleGoodsCollectStatus } from './collect-lhYy0sJ5.mjs';
import { E as ElRadioGroup, b as ElRadioButton, a as ElRadio } from './index-vwoBdBES.mjs';
import { E as ElInputNumber } from './input-number-LU9yE6dp.mjs';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import { u as useOrderStore } from './useOrderStore-KiN84DL2.mjs';
import { a as getEventsGoodsSkuList } from './index-hw581Gte.mjs';
import currency from 'currency.js';
import { E as ElTabs, a as ElTabPane } from './tab-pane-G1YGUFAr.mjs';
import { ElText } from './index-QzTfU9Or.mjs';
import { _ as _sfc_main$f } from './AutoIncre-nAzYjQ1D.mjs';
import { E as ElRate } from './rate-u9ag93GX.mjs';
import { E as ElDialog } from './dialog-ti9X6b9G.mjs';
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT } from './event-JIBAhsR9.mjs';
import { castArray } from 'lodash-unified';
import { _ as _CollapseTransition } from './index-cBHa6a8B.mjs';
import { g as generateId } from './rand-7lfgVUL1.mjs';
import { g as getGoodsInfoById, a as addGoodsViewsById } from './index-VI4pRKfC.mjs';
import { g as getGoodsSkuByGid } from './sku-QdHWne5L.mjs';
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
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './index-daJZwzbi.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-r09CvUzW.mjs';
import './index-nLRih88y.mjs';
import './index-deHNvRRV.mjs';
import './index-DNDo83-k.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';
import '@vue/reactivity';

const breadcrumbKey = Symbol("breadcrumbKey");
const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});
const __default__$4 = defineComponent({
  name: "ElBreadcrumb"
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: breadcrumbProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": "Breadcrumb",
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Breadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: {
    type: Boolean,
    default: false
  }
});
const __default__$3 = defineComponent({
  name: "ElBreadcrumbItem"
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router = instance.appContext.config.globalProperties.$router;
    const link = ref();
    const onClick = () => {
      if (!props.to || !router)
        return;
      props.replace ? router.replace(props.to) : router.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a2, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("item"))
      }, [
        createElementVNode("span", {
          ref_key: "link",
          ref: link,
          class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
          role: "link",
          onClick
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        ((_a2 = unref(breadcrumbContext)) == null ? void 0 : _a2.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("separator"))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
          ]),
          _: 1
        }, 8, ["class"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(ns).e("separator")),
          role: "presentation"
        }, toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator), 3))
      ], 2);
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);
const emitChangeFn = (value) => typeof isNumber(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = () => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => ns.b());
  return {
    rootKls
  };
};
const __default__$2 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM();
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: () => generateId()
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse = inject(collapseContextKey);
  const focusing = ref(false);
  const isClick = ref(false);
  const id = ref(generateId());
  const isActive = computed(() => collapse == null ? void 0 : collapse.activeNames.value.includes(props.name));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = () => {
    if (props.disabled)
      return;
    collapse == null ? void 0 : collapse.handleItemClick(props.name);
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = () => {
    collapse == null ? void 0 : collapse.handleItemClick(props.name);
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const _hoisted_1 = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"];
const _hoisted_2 = ["id", "aria-hidden", "aria-labelledby"];
const __default__$1 = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("button", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          type: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleHeaderClick) && unref(handleHeaderClick)(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(handleEnterClick) && unref(handleEnterClick)(...args), ["stop", "prevent"]), ["space", "enter"])),
          onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
          onBlur: _cache[3] || (_cache[3] = ($event) => focusing.value = false)
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          createVNode(unref(ElIcon), {
            class: normalizeClass(unref(arrowKls))
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_right_default))
            ]),
            _: 1
          }, 8, ["class"])
        ], 42, _hoisted_1),
        createVNode(unref(_CollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, _hoisted_2), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const popconfirmProps = buildProps({
  title: String,
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonType: {
    type: String,
    values: buttonTypes,
    default: "primary"
  },
  cancelButtonType: {
    type: String,
    values: buttonTypes,
    default: "text"
  },
  icon: {
    type: iconPropType,
    default: () => question_filled_default
  },
  iconColor: {
    type: String,
    default: "#f90"
  },
  hideIcon: {
    type: Boolean,
    default: false
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  teleported: useTooltipContentProps.teleported,
  persistent: useTooltipContentProps.persistent,
  width: {
    type: [String, Number],
    default: 150
  }
});
const popconfirmEmits = {
  confirm: (e) => e instanceof MouseEvent,
  cancel: (e) => e instanceof MouseEvent
};
const __default__ = defineComponent({
  name: "ElPopconfirm"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: popconfirmProps,
  emits: popconfirmEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("popconfirm");
    const tooltipRef = ref();
    const hidePopper = () => {
      var _a2, _b;
      (_b = (_a2 = tooltipRef.value) == null ? void 0 : _a2.onClose) == null ? void 0 : _b.call(_a2);
    };
    const style = computed(() => {
      return {
        width: addUnit(props.width)
      };
    });
    const confirm = (e) => {
      emit("confirm", e);
      hidePopper();
    };
    const cancel = (e) => {
      emit("cancel", e);
      hidePopper();
    };
    const finalConfirmButtonText = computed(() => props.confirmButtonText || t("el.popconfirm.confirmButtonText"));
    const finalCancelButtonText = computed(() => props.cancelButtonText || t("el.popconfirm.cancelButtonText"));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), mergeProps({
        ref_key: "tooltipRef",
        ref: tooltipRef,
        trigger: "click",
        effect: "light"
      }, _ctx.$attrs, {
        "popper-class": `${unref(ns).namespace.value}-popover`,
        "popper-style": unref(style),
        teleported: _ctx.teleported,
        "fallback-placements": ["bottom", "top", "right", "left"],
        "hide-after": _ctx.hideAfter,
        persistent: _ctx.persistent
      }), {
        content: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).b())
          }, [
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("main"))
            }, [
              !_ctx.hideIcon && _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass(unref(ns).e("icon")),
                style: normalizeStyle({ color: _ctx.iconColor })
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                ]),
                _: 1
              }, 8, ["class", "style"])) : createCommentVNode("v-if", true),
              createTextVNode(" " + toDisplayString(_ctx.title), 1)
            ], 2),
            createElementVNode("div", {
              class: normalizeClass(unref(ns).e("action"))
            }, [
              createVNode(unref(ElButton), {
                size: "small",
                type: _ctx.cancelButtonType === "text" ? "" : _ctx.cancelButtonType,
                text: _ctx.cancelButtonType === "text",
                onClick: cancel
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(finalCancelButtonText)), 1)
                ]),
                _: 1
              }, 8, ["type", "text"]),
              createVNode(unref(ElButton), {
                size: "small",
                type: _ctx.confirmButtonType === "text" ? "" : _ctx.confirmButtonType,
                text: _ctx.confirmButtonType === "text",
                onClick: confirm
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(finalConfirmButtonText)), 1)
                ]),
                _: 1
              }, 8, ["type", "text"])
            ], 2)
          ], 2)
        ]),
        default: withCtx(() => [
          _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["popper-class", "popper-style", "teleported", "hide-after", "persistent"]);
    };
  }
});
var Popconfirm = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popconfirm/src/popconfirm.vue"]]);
const ElPopconfirm = withInstall(Popconfirm);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CategoryTree",
  __ssrInlineRender: true,
  props: {
    gid: {},
    name: {}
  },
  async setup(__props) {
    var _a2;
    let __temp, __restore;
    const { gid } = __props;
    const { data } = ([__temp, __restore] = withAsyncContext(() => getGoodsCategoryByGid(gid.toString())), __temp = await __temp, __restore(), __temp);
    const category = ref(((_a2 = data.value) == null ? void 0 : _a2.data) || null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_breadcrumb = ElBreadcrumb;
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-tree" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_breadcrumb, {
        separator: "/",
        style: { "letter-spacing": "0.2em", "cursor": "pointer" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u4E3B\u9875 `);
                      } else {
                        return [
                          createTextVNode(" \u4E3B\u9875 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4E3B\u9875 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, {
              style: ((_a22 = unref(category)) == null ? void 0 : _a22.id) ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NuxtLink, {
                    to: `/search?cid=${(_a3 = unref(category)) == null ? void 0 : _a3.id}`
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a4, _b3;
                      if (_push4) {
                        _push4(`${ssrInterpolate((_a4 = unref(category)) == null ? void 0 : _a4.name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString((_b3 = unref(category)) == null ? void 0 : _b3.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, {
                      to: `/search?cid=${(_b2 = unref(category)) == null ? void 0 : _b2.id}`
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createTextVNode(toDisplayString((_a4 = unref(category)) == null ? void 0 : _a4.name), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["to"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_breadcrumb_item, {
              style: _ctx.name ? null : { display: "none" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p w-14em class="... overflow-hidden truncate"${_scopeId2}>${ssrInterpolate(_ctx.name)}</p>`);
                } else {
                  return [
                    createVNode("p", {
                      "w-14em": "",
                      class: "... overflow-hidden truncate"
                    }, toDisplayString(_ctx.name), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, { to: "/" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4E3B\u9875 ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              withDirectives(createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => {
                  var _a3;
                  return [
                    createVNode(_component_NuxtLink, {
                      to: `/search?cid=${(_a3 = unref(category)) == null ? void 0 : _a3.id}`
                    }, {
                      default: withCtx(() => {
                        var _a4;
                        return [
                          createTextVNode(toDisplayString((_a4 = unref(category)) == null ? void 0 : _a4.name), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["to"])
                  ];
                }),
                _: 1
              }, 512), [
                [vShow, (_b = unref(category)) == null ? void 0 : _b.id]
              ]),
              withDirectives(createVNode(_component_el_breadcrumb_item, null, {
                default: withCtx(() => [
                  createVNode("p", {
                    "w-14em": "",
                    class: "... overflow-hidden truncate"
                  }, toDisplayString(_ctx.name), 1)
                ]),
                _: 1
              }, 512), [
                [vShow, _ctx.name]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/CategoryTree.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PreSwiper",
  __ssrInlineRender: true,
  props: {
    goodsName: {},
    images: {},
    video: {}
  },
  setup(__props, { expose: __expose }) {
    const { goodsName, images, video } = __props;
    const isOpenVideo = ref(false);
    const getImagesPreview = computed(() => {
      return images.map((p) => p = BaseUrlImg + p);
    });
    const swiper = ref();
    const activeSmall = ref(images[0] || "");
    function setActiveItem(name) {
      var _a2;
      activeSmall.value = name;
      (_a2 = swiper.value) == null ? void 0 : _a2.setActiveItem(name);
    }
    const nextSwiper = () => {
      var _a2;
      return (_a2 = swiper.value) == null ? void 0 : _a2.next();
    };
    const prevSwiper = () => {
      var _a2;
      return (_a2 = swiper.value) == null ? void 0 : _a2.prev();
    };
    watch(activeSmall, (val) => {
      var _b;
      if (val !== video && void 0)
        (_a = (void 0).querySelector("#pre-video-goods")) == null ? void 0 : _a.pause();
      else
        (_b = (void 0).querySelector("#pre-video-goods")) == null ? void 0 : _b.play();
    });
    __expose({
      setActiveItem,
      nextSwiper,
      prevSwiper,
      activeSmall
    });
    defineComponent({
      setActiveItem,
      nextSwiper,
      prevSwiper,
      activeSmall
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_OtherPreLoading = _sfc_main$e;
      const _component_card_el_image = __nuxt_component_1;
      const _component_ElIconArrowLeftBold = arrow_left_bold_default;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ElIconArrowRightBold = arrow_right_bold_default;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper w-full flex flex-col" }, _attrs))} data-v-1cc7c0fb>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OtherPreLoading, {
              class: "block h-360px w-full flex-row-c-c animate-pulse v-card",
              message: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_OtherPreLoading, {
                class: "block h-360px w-full flex-row-c-c animate-pulse v-card",
                message: ""
              })
            ];
          }
        })
      }, _parent));
      _push(`<div class="scale-imgs" mt-4 flex-row-c-c data-v-1cc7c0fb>`);
      _push(ssrRenderComponent(_component_ElIconArrowLeftBold, {
        class: "mx-1 h-2em w-2em flex-row-c-c cursor-pointer opacity-20 transition-200 hover:opacity-100",
        onClick: prevSwiper
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_scrollbar, mergeProps({ "view-class": "flex py-4 cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.video) {
              _push2(`<div class="${ssrRenderClass([{ active: unref(activeSmall) === _ctx.video }, "scale-img relative mx-1 block h-4rem max-w-8rem min-w-4rem flex flex-shrink-0 flex-shrink-0 shadow card-default"])}" data-v-1cc7c0fb${_scopeId}><i i-solar:alt-arrow-right-bold-duotone absolute left-0 top-0 h-full w-full p-0.6em data-v-1cc7c0fb${_scopeId}></i></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.images, (p, i) => {
              _push2(`<div class="${ssrRenderClass([{ active: unref(activeSmall) === p }, "scale-img mx-1 block h-4rem max-w-8rem min-w-4rem flex flex-shrink-0 flex-shrink-0 shadow-sm card-default"])}" data-v-1cc7c0fb${_scopeId}>`);
              _push2(ssrRenderComponent(_component_card_el_image, {
                "preview-teleported": "",
                "preview-src-list": unref(getImagesPreview),
                loading: "lazy",
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                alt: _ctx.goodsName || "Design by Kiwi2333",
                class: "w-full rounded",
                style: { "max-width": "6em", "padding": "0" },
                fit: "cover",
                "transition-300": "",
                "hover:scale-110": "",
                onMouseenter: ($event) => setActiveItem(p)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              _ctx.video ? (openBlock(), createBlock("div", {
                key: _ctx.video,
                class: ["scale-img relative mx-1 block h-4rem max-w-8rem min-w-4rem flex flex-shrink-0 flex-shrink-0 shadow card-default", { active: unref(activeSmall) === _ctx.video }],
                onMouseenter: ($event) => setActiveItem(_ctx.video)
              }, [
                createVNode("i", {
                  "i-solar:alt-arrow-right-bold-duotone": "",
                  absolute: "",
                  "left-0": "",
                  "top-0": "",
                  "h-full": "",
                  "w-full": "",
                  "p-0.6em": ""
                })
              ], 42, ["onMouseenter"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.images, (p, i) => {
                return openBlock(), createBlock("div", {
                  key: i,
                  class: ["scale-img mx-1 block h-4rem max-w-8rem min-w-4rem flex flex-shrink-0 flex-shrink-0 shadow-sm card-default", { active: unref(activeSmall) === p }]
                }, [
                  createVNode(_component_card_el_image, {
                    "preview-teleported": "",
                    "preview-src-list": unref(getImagesPreview),
                    loading: "lazy",
                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                    alt: _ctx.goodsName || "Design by Kiwi2333",
                    class: "w-full rounded",
                    style: { "max-width": "6em", "padding": "0" },
                    fit: "cover",
                    "transition-300": "",
                    "hover:scale-110": "",
                    onMouseenter: ($event) => setActiveItem(p)
                  }, null, 8, ["preview-src-list", "src", "alt", "onMouseenter"])
                ], 2);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ElIconArrowRightBold, {
        class: "mx-1 h-2em w-2em flex-row-c-c cursor-pointer opacity-20 transition-200 hover:opacity-100",
        onClick: nextSwiper
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.video) {
        _push(`<small class="mx-a my-2 w-6em flex-row-c-c cursor-pointer rounded-2em bg-gray-200 p-2 leading-1.2em shadow-md transition-200 hover:scale-110 dark:bg-dark-200" data-v-1cc7c0fb><i i-solar:clapperboard-play-bold mr-1 p-2.4 data-v-1cc7c0fb></i> \u89C6\u9891 </small>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isOpenVideo)) {
          _push2(`<div class="mock" data-v-1cc7c0fb><video class="videoRef w-80vw md:w-40vw"${ssrRenderAttr("src", ("BaseUrlVideo" in _ctx ? _ctx.BaseUrlVideo : unref(BaseUrlVideo)) + _ctx.video)}${ssrRenderAttr("alt", _ctx.goodsName || " By Kiwi23333")}${ssrRenderAttr("name", _ctx.video)} controls data-v-1cc7c0fb></video></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/PreSwiper.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-1cc7c0fb"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CollectGoods",
  __ssrInlineRender: true,
  props: {
    gid: {}
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const user = useUserStore();
    const isCollect = ref(false);
    if (user.getTokenFn()) {
      if (props.gid) {
        const { data } = ([__temp, __restore] = withAsyncContext(() => getGoodsIsCollect(props.gid, user.getTokenFn())), __temp = await __temp, __restore(), __temp);
        isCollect.value = Boolean(data);
      }
    }
    async function onCollectGoods() {
      if (!props.gid)
        return;
      const { code, message } = await toggleGoodsCollectStatus(props.gid, user.getToken);
      if (code === StatusCode.SUCCESS) {
        ElMessage.success(`${isCollect.value ? "\u53D6\u6D88" : "\u6DFB\u52A0"}\u6536\u85CF\u6210\u529F`);
        isCollect.value = !isCollect.value;
      } else {
        ElMessage.error(message);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popconfirm = ElPopconfirm;
      const _directive_auth = resolveDirective("auth");
      _push(ssrRenderComponent(_component_el_popconfirm, mergeProps({
        style: { "text-align": "center" },
        "confirm-button-type": "danger",
        "confirm-button-text": "\u786E\u8BA4",
        "cancel-button-text": "\u53D6\u6D88",
        title: unref(isCollect) ? "\u662F\u5426\u53D6\u6D88\u6536\u85CF?" : "\u662F\u5426\u6DFB\u52A0\u6536\u85CF?",
        onConfirm: onCollectGoods
      }, _attrs), {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ "cursor-pointer": "" }, ssrGetDirectiveProps(_ctx, _directive_auth)))}${_scopeId}><span class="${ssrRenderClass(unref(isCollect) ? "i-solar:stars-minimalistic-bold-duotone bg-yellow-5" : "i-solar:stars-minimalistic-broken")}" animate-zoom-in p-3 transition-200${_scopeId}></span></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { "cursor-pointer": "" }, [
                createVNode("span", {
                  class: unref(isCollect) ? "i-solar:stars-minimalistic-bold-duotone bg-yellow-5" : "i-solar:stars-minimalistic-broken",
                  "animate-zoom-in": "",
                  "p-3": "",
                  "transition-200": ""
                }, null, 2)
              ])), [
                [_directive_auth]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btn/CollectGoods.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SkuCard",
  __ssrInlineRender: true,
  props: {
    goodsInfo: {},
    goodsSku: {}
  },
  emits: ["setActiveItem"],
  async setup(__props, { emit: __emit }) {
    var _a2, _b, _c, _d;
    let __temp, __restore;
    const { goodsInfo, goodsSku } = __props;
    const emit = __emit;
    const user = useUserStore();
    const shop = useShopStore();
    const form = reactive({
      skuId: "",
      quantity: 1,
      size: "",
      activityId: "",
      color: "",
      combo: ""
    });
    const fullscreenLoading = ref(false);
    const isAllCheckSku = ref(false);
    const FormRef = ref();
    function onSubmitShopCart(formRef, event) {
      formRef == null ? void 0 : formRef.validate(async (valid) => {
        if (valid && user.getToken) {
          if (await shop.addShopcartAction(form.skuId, form.quantity, user.getToken))
            ElMessage.success("\u6DFB\u52A0\u6210\u529F\uFF01");
          else
            ElMessage.error("\u6DFB\u52A0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
        } else {
          ElMessage.closeAll();
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
    const order = useOrderStore();
    function onSubmitBuy(formRef) {
      formRef == null ? void 0 : formRef.validate(async (valid) => {
        if (valid && user.getToken !== "") {
          const dto = [
            {
              skuId: form.skuId,
              activityId: form.activityId,
              quantity: form.quantity
            }
          ];
          fullscreenLoading.value = true;
          setTimeout(async () => {
            order.clearOrderItems();
            order.$patch({
              pushOrderItems: [...dto]
            });
            fullscreenLoading.value = false;
            await navigateTo({
              path: "/order/detail"
            });
          }, 500);
        } else {
          ElMessage.closeAll();
          fullscreenLoading.value = false;
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
    const eventSkuList = ref([]);
    const route = useRoute();
    const eventId = ((_a2 = route == null ? void 0 : route.query) == null ? void 0 : _a2.eventId) || ((_b = route == null ? void 0 : route.query) == null ? void 0 : _b.eid);
    if (eventId && (goodsInfo == null ? void 0 : goodsInfo.id)) {
      const res = ([__temp, __restore] = withAsyncContext(() => getEventsGoodsSkuList(goodsInfo == null ? void 0 : goodsInfo.id)), __temp = await __temp, __restore(), __temp);
      if (((_c = res.data.value) == null ? void 0 : _c.code) === StatusCode.SUCCESS)
        eventSkuList.value = (_d = res.data.value) == null ? void 0 : _d.data.filter((p) => p.eventId === eventId);
    }
    function getEventPrice(skuId) {
      var _a22;
      return ((_a22 = eventSkuList.value.find((p) => skuId === p.skuId)) == null ? void 0 : _a22.eventPrice) || 0;
    }
    const sizeList = ref([]);
    const colorList = ref([]);
    const comboList = ref([]);
    function initSku() {
      goodsSku == null ? void 0 : goodsSku.forEach((p) => {
        var _a22, _b2, _c2;
        if (p.size && !sizeList.value.find((k) => k.name === p.size)) {
          (_a22 = sizeList.value) == null ? void 0 : _a22.push({
            id: p.id,
            name: p.size
          });
        }
        if (p.color && !colorList.value.find((k) => k.name === p.color)) {
          (_b2 = colorList.value) == null ? void 0 : _b2.push({
            id: p.id,
            name: p.color,
            image: p.image
          });
        }
        if (p.combo && !comboList.value.find((k) => k.name === p.combo)) {
          (_c2 = comboList.value) == null ? void 0 : _c2.push({
            id: p.id,
            name: p.combo
          });
        }
      });
    }
    initSku();
    const submitText = ref("\u7ACB\u5373\u8D2D\u4E70");
    watch(
      form,
      (dto) => {
        const item = goodsSku == null ? void 0 : goodsSku.find((p) => dto.color === (p.color || "") && dto.combo === (p.combo || "") && dto.size === (p.size || ""));
        if (!item) {
          isAllCheckSku.value = false;
          submitText.value = "\u6682\u65E0\u8BE5\u9009\u914D";
          return;
        } else if (item.stock === 0) {
          submitText.value = "\u6682\u65E0\u5E93\u5B58";
          isAllCheckSku.value = false;
          return;
        }
        isAllCheckSku.value = true;
        submitText.value = "\u7ACB\u5373\u8D2D\u4E70";
        form.skuId = item == null ? void 0 : item.id;
      },
      { immediate: false, deep: true }
    );
    const getMaxStock = computed(() => {
      let count = 0;
      goodsSku == null ? void 0 : goodsSku.forEach((p) => {
        count += p.stock;
      });
      return count;
    });
    const allPostate = ref(0);
    const allReduce = reactive({
      activity: {
        add: 0,
        reduce: 0
      },
      all: 0
    });
    const allPrice = computed(() => {
      if (goodsSku) {
        for (const p of goodsSku) {
          if (p.id === form.skuId) {
            if (goodsInfo == null ? void 0 : goodsInfo.postage)
              allPostate.value = goodsInfo == null ? void 0 : goodsInfo.postage;
            let onePrice = currency(0);
            let oneReduce = currency(0);
            if (getEventPrice(form.skuId) && eventId) {
              onePrice = currency(getEventPrice(form.skuId));
              oneReduce = oneReduce.add(p.price).subtract(getEventPrice(form.skuId));
              form.activityId = eventId == null ? void 0 : eventId.toString();
              allReduce.activity.reduce = oneReduce.multiply(form.quantity).value;
            } else {
              onePrice = onePrice.add(p.price);
            }
            allReduce.all = oneReduce.multiply(form.quantity).value;
            return onePrice.multiply(form.quantity).add(allPostate.value).value;
          } else {
            allReduce.activity = {
              add: 0,
              reduce: 0
            };
            allReduce.all = 0;
          }
        }
      }
      return 0;
    });
    const getStock = computed(() => {
      var _a22;
      return ((_a22 = goodsSku == null ? void 0 : goodsSku.find((p) => p.id === form.skuId)) == null ? void 0 : _a22.stock) || 0;
    });
    function setActiveItem(image) {
      emit("setActiveItem", image);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_tag = ElTag;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_BtnCollectGoods = _sfc_main$6;
      const _component_el_form_item = ElFormItem;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_radio = ElRadio;
      const _component_el_input_number = ElInputNumber;
      const _component_BtnElButton = __nuxt_component_2$2;
      const _directive_incre_up = resolveDirective("incre-up");
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative rounded-6px shadow -z-1 v-card",
        "p-8": "",
        "pb-2": ""
      }, _attrs))} data-v-83017533>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "FormRef",
        ref: FormRef,
        model: unref(form),
        "label-position": "top",
        class: "group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a22, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="top opacity-90" mt-2 flex-row-bt-c data-v-83017533${_scopeId}><div class="left" data-v-83017533${_scopeId}>`);
            if ((_a22 = _ctx.goodsInfo) == null ? void 0 : _a22.isNew) {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "mr-2",
                effect: "dark",
                type: "danger"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u65B0\u54C1 `);
                  } else {
                    return [
                      createTextVNode(" \u65B0\u54C1 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_el_tag, {
              class: "mr-2",
              effect: "light",
              type: "info"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3, _c3, _d3;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a3 = _ctx.goodsInfo) == null ? void 0 : _a3.postage) ? `${(_b3 = _ctx.goodsInfo) == null ? void 0 : _b3.postage}\u5143\u8FD0\u8D39` : "\u514D\u8FD0\u8D39")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_c3 = _ctx.goodsInfo) == null ? void 0 : _c3.postage) ? `${(_d3 = _ctx.goodsInfo) == null ? void 0 : _d3.postage}\u5143\u8FD0\u8D39` : "\u514D\u8FD0\u8D39"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tag, {
              class: "mr-2",
              effect: "light",
              type: "info"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a3, _b3, _c3, _d3;
                if (_push3) {
                  _push3(`${ssrInterpolate(((_a3 = _ctx.goodsInfo) == null ? void 0 : _a3.refundTime) ? `${(_b3 = _ctx.goodsInfo) == null ? void 0 : _b3.refundTime}\u65E5\u65E0\u7406\u7531\u9000\u8D27` : "")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(((_c3 = _ctx.goodsInfo) == null ? void 0 : _c3.refundTime) ? `${(_d3 = _ctx.goodsInfo) == null ? void 0 : _d3.refundTime}\u65E5\u65E0\u7406\u7531\u9000\u8D27` : ""), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div><div class="sku-list" flex flex-col pt-6 leading-1.4em tracking-0.1em data-v-83017533${_scopeId}><h3 mb-6 border-0 leading-1.4em border-default-dashed data-v-83017533${_scopeId}>${ssrInterpolate((_b2 = _ctx.goodsInfo) == null ? void 0 : _b2.name)}</h3><div mb-4 flex-row-bt-c data-v-83017533${_scopeId}><small float-left opacity-90 data-v-83017533${_scopeId}>\u9500\u552E\u4EF7\uFF08\u5143\uFF09\uFF1A</small><div class="righjt" data-v-83017533${_scopeId}><span text-1.4em text-red-5 font-700 data-v-83017533${_scopeId}>\uFFE5 <span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_incre_up, (_c2 = _ctx.goodsInfo) == null ? void 0 : _c2.price))} data-v-83017533${_scopeId}></span></span><small style="${ssrRenderStyle({ "text-decoration": "line-through", "opacity": "0.9" })}" text-0.8em text-bluegray-3 data-v-83017533${_scopeId}>\uFFE5 <span${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_incre_up, (_d2 = _ctx.goodsInfo) == null ? void 0 : _d2.costPrice))} data-v-83017533${_scopeId}></span></small></div></div>`);
            if (unref(sizeList).length) {
              _push2(`<div class="card" data-v-83017533${_scopeId}><small data-v-83017533${_scopeId}>\u89C4 \u683C</small>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                prop: "size",
                required: "",
                "mt-1": ""
              }, {
                error: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<small pl-2 text-red-5 data-v-83017533${_scopeId2}>\u8BF7\u9009\u62E9\u89C4\u683C</small>`);
                  } else {
                    return [
                      createVNode("small", {
                        "pl-2": "",
                        "text-red-5": ""
                      }, "\u8BF7\u9009\u62E9\u89C4\u683C")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_radio_group, {
                      modelValue: unref(form).size,
                      "onUpdate:modelValue": ($event) => unref(form).size = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(sizeList), (p) => {
                            _push4(ssrRenderComponent(_component_el_radio_button, {
                              key: p.name,
                              label: p.name
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(sizeList), (p) => {
                              return openBlock(), createBlock(_component_el_radio_button, {
                                key: p.name,
                                label: p.name
                              }, null, 8, ["label"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(form).size,
                        "onUpdate:modelValue": ($event) => unref(form).size = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(sizeList), (p) => {
                            return openBlock(), createBlock(_component_el_radio_button, {
                              key: p.name,
                              label: p.name
                            }, null, 8, ["label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(colorList).length) {
              _push2(`<div class="card" data-v-83017533${_scopeId}><small data-v-83017533${_scopeId}>\u989C \u8272</small>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                prop: "color",
                required: "",
                "mt-1": ""
              }, {
                error: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<small pl-2 text-red-5 data-v-83017533${_scopeId2}>\u8BF7\u9009\u62E9\u989C\u8272</small>`);
                  } else {
                    return [
                      createVNode("small", {
                        "pl-2": "",
                        "text-red-5": ""
                      }, "\u8BF7\u9009\u62E9\u989C\u8272")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_radio_group, {
                      modelValue: unref(form).color,
                      "onUpdate:modelValue": ($event) => unref(form).color = $event,
                      size: "large"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(colorList), (p) => {
                            _push4(ssrRenderComponent(_component_el_radio, {
                              key: p.name,
                              border: true,
                              label: p.name,
                              style: { "height": "4em", "border-radius": "4px", "margin": "0 0.4rem 0.4rem 0" },
                              class: "color-group flex flex-col",
                              onClick: ($event) => setActiveItem(p.image)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img loading="lazy" class="sku-img"${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image)}${ssrRenderAttr("alt", p.name || "Design By Kiwi23333")} z-0 overflow-hidden rounded-4px data-v-83017533${_scopeId4}><div z-5 px-4 py-2 text-center class="tip" data-v-83017533${_scopeId4}>${ssrInterpolate(p.name)}</div>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      loading: "lazy",
                                      class: "sku-img",
                                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image,
                                      alt: p.name || "Design By Kiwi23333",
                                      "z-0": "",
                                      "overflow-hidden": "",
                                      "rounded-4px": ""
                                    }, null, 8, ["src", "alt"]),
                                    createVNode("div", {
                                      "z-5": "",
                                      "px-4": "",
                                      "py-2": "",
                                      "text-center": "",
                                      class: "tip"
                                    }, toDisplayString(p.name), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(colorList), (p) => {
                              return openBlock(), createBlock(_component_el_radio, {
                                key: p.name,
                                border: true,
                                label: p.name,
                                style: { "height": "4em", "border-radius": "4px", "margin": "0 0.4rem 0.4rem 0" },
                                class: "color-group flex flex-col",
                                onClick: ($event) => setActiveItem(p.image)
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    loading: "lazy",
                                    class: "sku-img",
                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image,
                                    alt: p.name || "Design By Kiwi23333",
                                    "z-0": "",
                                    "overflow-hidden": "",
                                    "rounded-4px": ""
                                  }, null, 8, ["src", "alt"]),
                                  createVNode("div", {
                                    "z-5": "",
                                    "px-4": "",
                                    "py-2": "",
                                    "text-center": "",
                                    class: "tip"
                                  }, toDisplayString(p.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["label", "onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(form).color,
                        "onUpdate:modelValue": ($event) => unref(form).color = $event,
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(colorList), (p) => {
                            return openBlock(), createBlock(_component_el_radio, {
                              key: p.name,
                              border: true,
                              label: p.name,
                              style: { "height": "4em", "border-radius": "4px", "margin": "0 0.4rem 0.4rem 0" },
                              class: "color-group flex flex-col",
                              onClick: ($event) => setActiveItem(p.image)
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  loading: "lazy",
                                  class: "sku-img",
                                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image,
                                  alt: p.name || "Design By Kiwi23333",
                                  "z-0": "",
                                  "overflow-hidden": "",
                                  "rounded-4px": ""
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", {
                                  "z-5": "",
                                  "px-4": "",
                                  "py-2": "",
                                  "text-center": "",
                                  class: "tip"
                                }, toDisplayString(p.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["label", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(comboList).length) {
              _push2(`<div class="card" data-v-83017533${_scopeId}><small data-v-83017533${_scopeId}>\u5957 \u9910</small>`);
              _push2(ssrRenderComponent(_component_el_form_item, {
                prop: "combo",
                required: "",
                "mt-1": ""
              }, {
                error: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<small pl-2 text-red-5 data-v-83017533${_scopeId2}>\u8BF7\u9009\u62E9\u5957\u9910</small>`);
                  } else {
                    return [
                      createVNode("small", {
                        "pl-2": "",
                        "text-red-5": ""
                      }, "\u8BF7\u9009\u62E9\u5957\u9910")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_radio_group, {
                      modelValue: unref(form).combo,
                      "onUpdate:modelValue": ($event) => unref(form).combo = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(comboList), (p) => {
                            _push4(ssrRenderComponent(_component_el_radio_button, {
                              key: p.name,
                              label: p.name
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(comboList), (p) => {
                              return openBlock(), createBlock(_component_el_radio_button, {
                                key: p.name,
                                label: p.name
                              }, null, 8, ["label"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(form).combo,
                        "onUpdate:modelValue": ($event) => unref(form).combo = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(comboList), (p) => {
                            return openBlock(), createBlock(_component_el_radio_button, {
                              key: p.name,
                              label: p.name
                            }, null, 8, ["label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (!_ctx.goodsSku || !_ctx.goodsSku.length) {
              _push2(`<div class="h-12rem w-full text-center leading-12rem" data-v-83017533${_scopeId}> \u6682\u672A\u5F00\u552E </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="card" data-v-83017533${_scopeId}><small data-v-83017533${_scopeId}>\u6570 \u91CF</small>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "quantity",
              required: "",
              "mt-2": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input_number, {
                    modelValue: unref(form).quantity,
                    "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                    disabled: unref(getStock) === 0,
                    min: 1,
                    max: unref(getStock) !== 0 ? 99 : 1
                  }, null, _parent3, _scopeId2));
                  _push3(`<small style="${ssrRenderStyle(unref(isAllCheckSku) ? null : { display: "none" })}" data-v-83017533${_scopeId2}>\uFF08\u5E93\u5B58\u5269\u4F59\uFF1A<span text-red-5 data-v-83017533${_scopeId2}>${ssrInterpolate(unref(getStock))}</span>\u4EF6\uFF09</small><small style="${ssrRenderStyle(!unref(isAllCheckSku) ? null : { display: "none" })}" data-v-83017533${_scopeId2}>\uFF08\u603B\u5E93\u5B58\u5269\u4F59\uFF1A${ssrInterpolate(unref(getMaxStock))} \u4EF6\uFF09</small>`);
                } else {
                  return [
                    createVNode(_component_el_input_number, {
                      modelValue: unref(form).quantity,
                      "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                      disabled: unref(getStock) === 0,
                      min: 1,
                      max: unref(getStock) !== 0 ? 99 : 1
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "max"]),
                    withDirectives(createVNode("small", null, [
                      createTextVNode("\uFF08\u5E93\u5B58\u5269\u4F59\uFF1A"),
                      createVNode("span", { "text-red-5": "" }, toDisplayString(unref(getStock)), 1),
                      createTextVNode("\u4EF6\uFF09")
                    ], 512), [
                      [vShow, unref(isAllCheckSku)]
                    ]),
                    withDirectives(createVNode("small", null, "\uFF08\u603B\u5E93\u5B58\u5269\u4F59\uFF1A" + toDisplayString(unref(getMaxStock)) + " \u4EF6\uFF09", 513), [
                      [vShow, !unref(isAllCheckSku)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="relative mb-4 mt-2 w-1/1 py-3 text-2rem" grid="~ gap-6 cols-2" data-v-83017533${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BtnElButton, {
              "transition-icon": true,
              plain: "",
              "icon-class": "i-solar:cart-large-bold mr-2  transition-100",
              disabled: !_ctx.goodsSku || !((_e = _ctx.goodsSku) == null ? void 0 : _e.length) || !unref(isAllCheckSku),
              size: "large",
              class: "group relative w-full",
              style: { "transition": "300ms", "font-size": "1rem", "letter-spacing": "0.2em" },
              onClick: ($event) => onSubmitShopCart(unref(FormRef))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u52A0\u5165\u8D2D\u7269\u8F66 `);
                } else {
                  return [
                    createTextVNode(" \u52A0\u5165\u8D2D\u7269\u8F66 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="relative flex-row-c-c flex-1 shadow shadow-[var(--el-color-info-light-3)]" data-v-83017533${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BtnElButton, mergeProps({
              "icon-class": "mr-2 i-solar:bag-bold",
              disabled: !unref(isAllCheckSku),
              size: "large",
              type: "info",
              class: "w-full",
              style: { "transition": "300ms", "font-size": "1rem", "letter-spacing": "0.2em" },
              onClick: ($event) => onSubmitBuy(unref(FormRef))
            }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(fullscreenLoading), void 0, {
              fullscreen: true,
              lock: true
            })), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(submitText) || "\u7ACB\u5373\u8D2D\u4E70")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(submitText) || "\u7ACB\u5373\u8D2D\u4E70"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div rounded="t-6px" border-border-dark-300 relative flex-row-c-c border-2px bg-white p-2 text-0.9rem text-red-5 shadow-md border-default-dashed dark:bg-dark-6 class="${ssrRenderClass([{ active: unref(isAllCheckSku) }, "all-price -translate-1/1"])}" data-v-83017533${_scopeId}><small block data-v-83017533${_scopeId}>\uFFE5</small><h3${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_incre_up, unref(allPrice)))} data-v-83017533${_scopeId}></h3><div style="${ssrRenderStyle(unref(allReduce).all ? null : { display: "none" })}" class="absolute w-full flex flex-col items-center font-600 -top-1.6rem" data-v-83017533${_scopeId}><small style="${ssrRenderStyle(unref(allReduce).activity.reduce ? null : { display: "none" })}" flex data-v-83017533${_scopeId}> -\uFFE5${ssrInterpolate(unref(allReduce).activity.reduce.toFixed(2))}</small></div></div></div></div>`);
          } else {
            return [
              createVNode("div", {
                class: "top opacity-90",
                "mt-2": "",
                "flex-row-bt-c": ""
              }, [
                createVNode("div", { class: "left" }, [
                  ((_f = _ctx.goodsInfo) == null ? void 0 : _f.isNew) ? (openBlock(), createBlock(_component_el_tag, {
                    key: 0,
                    class: "mr-2",
                    effect: "dark",
                    type: "danger"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u65B0\u54C1 ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_component_el_tag, {
                    class: "mr-2",
                    effect: "light",
                    type: "info"
                  }, {
                    default: withCtx(() => {
                      var _a3, _b3;
                      return [
                        createTextVNode(toDisplayString(((_a3 = _ctx.goodsInfo) == null ? void 0 : _a3.postage) ? `${(_b3 = _ctx.goodsInfo) == null ? void 0 : _b3.postage}\u5143\u8FD0\u8D39` : "\u514D\u8FD0\u8D39"), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_el_tag, {
                    class: "mr-2",
                    effect: "light",
                    type: "info"
                  }, {
                    default: withCtx(() => {
                      var _a3, _b3;
                      return [
                        createTextVNode(toDisplayString(((_a3 = _ctx.goodsInfo) == null ? void 0 : _a3.refundTime) ? `${(_b3 = _ctx.goodsInfo) == null ? void 0 : _b3.refundTime}\u65E5\u65E0\u7406\u7531\u9000\u8D27` : ""), 1)
                      ];
                    }),
                    _: 1
                  })
                ]),
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => {
                    var _a3;
                    return [
                      createVNode(_component_BtnCollectGoods, {
                        gid: (_a3 = _ctx.goodsInfo) == null ? void 0 : _a3.id
                      }, null, 8, ["gid"])
                    ];
                  }),
                  _: 1
                })
              ]),
              createVNode("div", {
                class: "sku-list",
                flex: "",
                "flex-col": "",
                "pt-6": "",
                "leading-1.4em": "",
                "tracking-0.1em": ""
              }, [
                createVNode("h3", {
                  "mb-6": "",
                  "border-0": "",
                  "leading-1.4em": "",
                  "border-default-dashed": ""
                }, toDisplayString((_g = _ctx.goodsInfo) == null ? void 0 : _g.name), 1),
                createVNode("div", {
                  "mb-4": "",
                  "flex-row-bt-c": ""
                }, [
                  createVNode("small", {
                    "float-left": "",
                    "opacity-90": ""
                  }, "\u9500\u552E\u4EF7\uFF08\u5143\uFF09\uFF1A"),
                  createVNode("div", { class: "righjt" }, [
                    createVNode("span", {
                      "text-1.4em": "",
                      "text-red-5": "",
                      "font-700": ""
                    }, [
                      createTextVNode("\uFFE5 "),
                      withDirectives(createVNode("span", null, null, 512), [
                        [_directive_incre_up, (_h = _ctx.goodsInfo) == null ? void 0 : _h.price]
                      ])
                    ]),
                    createVNode("small", {
                      style: { "text-decoration": "line-through", "opacity": "0.9" },
                      "text-0.8em": "",
                      "text-bluegray-3": ""
                    }, [
                      createTextVNode("\uFFE5 "),
                      withDirectives(createVNode("span", null, null, 512), [
                        [_directive_incre_up, (_i = _ctx.goodsInfo) == null ? void 0 : _i.costPrice]
                      ])
                    ])
                  ])
                ]),
                unref(sizeList).length ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "card"
                }, [
                  createVNode("small", null, "\u89C4 \u683C"),
                  createVNode(_component_el_form_item, {
                    prop: "size",
                    required: "",
                    "mt-1": ""
                  }, {
                    error: withCtx(() => [
                      createVNode("small", {
                        "pl-2": "",
                        "text-red-5": ""
                      }, "\u8BF7\u9009\u62E9\u89C4\u683C")
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(form).size,
                        "onUpdate:modelValue": ($event) => unref(form).size = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(sizeList), (p) => {
                            return openBlock(), createBlock(_component_el_radio_button, {
                              key: p.name,
                              label: p.name
                            }, null, 8, ["label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                unref(colorList).length ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "card"
                }, [
                  createVNode("small", null, "\u989C \u8272"),
                  createVNode(_component_el_form_item, {
                    prop: "color",
                    required: "",
                    "mt-1": ""
                  }, {
                    error: withCtx(() => [
                      createVNode("small", {
                        "pl-2": "",
                        "text-red-5": ""
                      }, "\u8BF7\u9009\u62E9\u989C\u8272")
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(form).color,
                        "onUpdate:modelValue": ($event) => unref(form).color = $event,
                        size: "large"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(colorList), (p) => {
                            return openBlock(), createBlock(_component_el_radio, {
                              key: p.name,
                              border: true,
                              label: p.name,
                              style: { "height": "4em", "border-radius": "4px", "margin": "0 0.4rem 0.4rem 0" },
                              class: "color-group flex flex-col",
                              onClick: ($event) => setActiveItem(p.image)
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  loading: "lazy",
                                  class: "sku-img",
                                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.image,
                                  alt: p.name || "Design By Kiwi23333",
                                  "z-0": "",
                                  "overflow-hidden": "",
                                  "rounded-4px": ""
                                }, null, 8, ["src", "alt"]),
                                createVNode("div", {
                                  "z-5": "",
                                  "px-4": "",
                                  "py-2": "",
                                  "text-center": "",
                                  class: "tip"
                                }, toDisplayString(p.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["label", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                unref(comboList).length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "card"
                }, [
                  createVNode("small", null, "\u5957 \u9910"),
                  createVNode(_component_el_form_item, {
                    prop: "combo",
                    required: "",
                    "mt-1": ""
                  }, {
                    error: withCtx(() => [
                      createVNode("small", {
                        "pl-2": "",
                        "text-red-5": ""
                      }, "\u8BF7\u9009\u62E9\u5957\u9910")
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(form).combo,
                        "onUpdate:modelValue": ($event) => unref(form).combo = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(comboList), (p) => {
                            return openBlock(), createBlock(_component_el_radio_button, {
                              key: p.name,
                              label: p.name
                            }, null, 8, ["label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ]),
              !_ctx.goodsSku || !_ctx.goodsSku.length ? (openBlock(), createBlock("div", {
                key: 0,
                class: "h-12rem w-full text-center leading-12rem"
              }, " \u6682\u672A\u5F00\u552E ")) : createCommentVNode("", true),
              createVNode("div", { class: "card" }, [
                createVNode("small", null, "\u6570 \u91CF"),
                createVNode(_component_el_form_item, {
                  prop: "quantity",
                  required: "",
                  "mt-2": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input_number, {
                      modelValue: unref(form).quantity,
                      "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                      disabled: unref(getStock) === 0,
                      min: 1,
                      max: unref(getStock) !== 0 ? 99 : 1
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "max"]),
                    withDirectives(createVNode("small", null, [
                      createTextVNode("\uFF08\u5E93\u5B58\u5269\u4F59\uFF1A"),
                      createVNode("span", { "text-red-5": "" }, toDisplayString(unref(getStock)), 1),
                      createTextVNode("\u4EF6\uFF09")
                    ], 512), [
                      [vShow, unref(isAllCheckSku)]
                    ]),
                    withDirectives(createVNode("small", null, "\uFF08\u603B\u5E93\u5B58\u5269\u4F59\uFF1A" + toDisplayString(unref(getMaxStock)) + " \u4EF6\uFF09", 513), [
                      [vShow, !unref(isAllCheckSku)]
                    ])
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", {
                class: "relative mb-4 mt-2 w-1/1 py-3 text-2rem",
                grid: "~ gap-6 cols-2"
              }, [
                createVNode(_component_BtnElButton, {
                  "transition-icon": true,
                  plain: "",
                  "icon-class": "i-solar:cart-large-bold mr-2  transition-100",
                  disabled: !_ctx.goodsSku || !((_j = _ctx.goodsSku) == null ? void 0 : _j.length) || !unref(isAllCheckSku),
                  size: "large",
                  class: "group relative w-full",
                  style: { "transition": "300ms", "font-size": "1rem", "letter-spacing": "0.2em" },
                  onClick: ($event) => onSubmitShopCart(unref(FormRef))
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u52A0\u5165\u8D2D\u7269\u8F66 ")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"]),
                createVNode("div", { class: "relative flex-row-c-c flex-1 shadow shadow-[var(--el-color-info-light-3)]" }, [
                  withDirectives((openBlock(), createBlock(_component_BtnElButton, {
                    "icon-class": "mr-2 i-solar:bag-bold",
                    disabled: !unref(isAllCheckSku),
                    size: "large",
                    type: "info",
                    class: "w-full",
                    style: { "transition": "300ms", "font-size": "1rem", "letter-spacing": "0.2em" },
                    onClick: ($event) => onSubmitBuy(unref(FormRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(submitText) || "\u7ACB\u5373\u8D2D\u4E70"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])), [
                    [
                      _directive_loading,
                      unref(fullscreenLoading),
                      void 0,
                      {
                        fullscreen: true,
                        lock: true
                      }
                    ]
                  ]),
                  createVNode("div", {
                    rounded: "t-6px",
                    "border-border-dark-300": "",
                    relative: "",
                    "flex-row-c-c": "",
                    "border-2px": "",
                    "bg-white": "",
                    "p-2": "",
                    "text-0.9rem": "",
                    "text-red-5": "",
                    "shadow-md": "",
                    "border-default-dashed": "",
                    "dark:bg-dark-6": "",
                    class: ["all-price -translate-1/1", { active: unref(isAllCheckSku) }]
                  }, [
                    createVNode("small", { block: "" }, "\uFFE5"),
                    withDirectives(createVNode("h3", null, null, 512), [
                      [_directive_incre_up, unref(allPrice)]
                    ]),
                    withDirectives(createVNode("div", { class: "absolute w-full flex flex-col items-center font-600 -top-1.6rem" }, [
                      withDirectives(createVNode("small", { flex: "" }, " -\uFFE5" + toDisplayString(unref(allReduce).activity.reduce.toFixed(2)), 513), [
                        [vShow, unref(allReduce).activity.reduce]
                      ])
                    ], 512), [
                      [vShow, unref(allReduce).all]
                    ])
                  ], 2)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/SkuCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-83017533"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CommentCard",
  __ssrInlineRender: true,
  props: {
    comment: {},
    skuItem: {}
  },
  emits: ["showVideo"],
  setup(__props) {
    const { comment, skuItem } = __props;
    const getPreImages = computed(() => {
      var _a2;
      return (_a2 = comment.images) == null ? void 0 : _a2.map(
        (p) => p = `${BaseUrlImg + p}?imageView2/0/format/webp/interlace/1/q/50`
      );
    });
    function getRateComm(rate) {
      const msg = ["\u5F88\u5DEE", "\u5DEE", "\u4E00\u822C", "\u6BD4\u8F83\u6EE1\u610F", "\u5F3A\u70C8\u63A8\u8350"];
      return msg[Math.floor(rate - 1)];
    }
    function getProps(p) {
      return [p == null ? void 0 : p.size, p == null ? void 0 : p.color, p == null ? void 0 : p.combo].join(" | ");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_rate = ElRate;
      const _component_el_text = ElText;
      const _component_el_tag = ElTag;
      const _component_el_scrollbar = ElScrollbar;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "card w-full hover:border-[var(--el-color-primary)] hover:border-solid",
        "border-2px": "",
        "rounded-6px": "",
        "p-4": "",
        "shadow-none": "",
        "transition-300": "",
        "border-default-dashed": "",
        "hover:shadow-lg": ""
      }, _attrs))}><div class="top flex justify-between">`);
      _push(ssrRenderComponent(_component_CardElImage, {
        loading: "lazy",
        "transition-300": "",
        "hover:transform-scale-110": "",
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.comment.avatar,
        style: { "width": "3em", "height": "3em" },
        class: "avatar border-default-deshed mr-2 border-1px rounded-10em",
        fit: "cover"
      }, null, _parent));
      _push(`<div flex flex-1 flex-col justify-around><p text-0.9em>${ssrInterpolate(_ctx.comment.isAnonymous ? "\u533F\u540D\u7528\u6237" : _ctx.comment.nickName)}</p><div flex-row-c-c justify-start><small mr-4 opacity-80>${ssrInterpolate(_ctx.comment.createTime)}</small>`);
      _push(ssrRenderComponent(_component_el_rate, {
        "model-value": _ctx.comment.rate,
        class: "float-left",
        disabled: "",
        "allow-half": ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_text, { class: "hidden md:inline" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(getRateComm(_ctx.comment.rate))}`);
          } else {
            return [
              createTextVNode(toDisplayString(getRateComm(_ctx.comment.rate)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="right" float-right>`);
      if (_ctx.comment.isRecommend) {
        _push(ssrRenderComponent(_component_el_tag, { effect: "dark" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i i-solar:like-bold-duotone mr-1 p-2${_scopeId}></i> \u4E70\u5BB6\u63A8\u8350 `);
            } else {
              return [
                createVNode("i", {
                  "i-solar:like-bold-duotone": "",
                  "mr-1": "",
                  "p-2": ""
                }),
                createTextVNode(" \u4E70\u5BB6\u63A8\u8350 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><p class="text text-overflow-5 max-h-8.6em border-1px rounded-6px bg-[#6b6b6b0c] leading-1.5em border-default-dashed" mt-4 p-2 text-0.9em md:p-4>${ssrInterpolate(_ctx.comment.content)}</p>`);
      _push(ssrRenderComponent(_component_el_scrollbar, { class: "my-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}>`);
            if (_ctx.comment.video) {
              _push2(`<div class="group relative mr-2 flex-row-c-c flex-shrink-0 cursor-pointer overflow-hidden border-1px rounded-4px border-default-dashed" h-5rem w-5rem backdrop-blur-12px md:h-6rem md:w-6rem style="${ssrRenderStyle({ "background-color": "rgba(73, 73, 73, 0.4)" })}"${_scopeId}><i class="transition-200 group-hover:bg-dark" i-solar:play-circle-bold z-1 bg-light p-3${_scopeId}></i><div absolute left-0 top-0${_scopeId}>`);
              if (_ctx.comment.images.length) {
                _push2(`<img loading="lazy"${ssrRenderAttr("preview-src-list", unref(getPreImages))} preview-teleported transition-300 hover:transform-scale-110${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.comment.images[_ctx.comment.images.length - 1])} class="mr-2 h-5rem w-5rem flex-shrink-0 object-cover filter-blur-4px md:h-6rem md:w-6rem"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.comment.images, (p) => {
              _push2(ssrRenderComponent(_component_CardElImage, {
                key: p,
                loading: "lazy",
                "preview-src-list": unref(getPreImages),
                "preview-teleported": "",
                "transition-300": "",
                "hover:transform-scale-110": "",
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                class: "mr-2 h-5rem w-5rem flex-shrink-0 border-1px rounded-4px md:h-6rem md:w-6rem border-default-dashed",
                fit: "cover"
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                _ctx.comment.video ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group relative mr-2 flex-row-c-c flex-shrink-0 cursor-pointer overflow-hidden border-1px rounded-4px border-default-dashed",
                  "h-5rem": "",
                  "w-5rem": "",
                  "backdrop-blur-12px": "",
                  "md:h-6rem": "",
                  "md:w-6rem": "",
                  style: { "background-color": "rgba(73, 73, 73, 0.4)" },
                  onClick: ($event) => _ctx.$emit("showVideo", _ctx.comment.video)
                }, [
                  createVNode("i", {
                    class: "transition-200 group-hover:bg-dark",
                    "i-solar:play-circle-bold": "",
                    "z-1": "",
                    "bg-light": "",
                    "p-3": ""
                  }),
                  createVNode("div", {
                    absolute: "",
                    "left-0": "",
                    "top-0": ""
                  }, [
                    _ctx.comment.images.length ? (openBlock(), createBlock("img", {
                      key: 0,
                      loading: "lazy",
                      "preview-src-list": unref(getPreImages),
                      "preview-teleported": "",
                      "transition-300": "",
                      "hover:transform-scale-110": "",
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.comment.images[_ctx.comment.images.length - 1],
                      class: "mr-2 h-5rem w-5rem flex-shrink-0 object-cover filter-blur-4px md:h-6rem md:w-6rem"
                    }, null, 8, ["preview-src-list", "src"])) : createCommentVNode("", true)
                  ])
                ], 8, ["onClick"])) : createCommentVNode("", true),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.comment.images, (p) => {
                  return openBlock(), createBlock(_component_CardElImage, {
                    key: p,
                    loading: "lazy",
                    "preview-src-list": unref(getPreImages),
                    "preview-teleported": "",
                    "transition-300": "",
                    "hover:transform-scale-110": "",
                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                    class: "mr-2 h-5rem w-5rem flex-shrink-0 border-1px rounded-4px md:h-6rem md:w-6rem border-default-dashed",
                    fit: "cover"
                  }, null, 8, ["preview-src-list", "src"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="comment-sku" inline-flex items-center border-2px rounded-6px bg-gray-100 pr-4 backdrop-blur-3px border-default-dashed dark:bg-dark-300>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        style: [
          ((_a2 = _ctx.skuItem) == null ? void 0 : _a2.image) ? null : { display: "none" },
          { "width": "3rem", "height": "3rem" }
        ],
        loading: "lazy",
        "transition-300": "",
        "hover:transform-scale-110": "",
        src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_b = _ctx.skuItem) == null ? void 0 : _b.image)}?imageView2/0/w/100/h/100/format/q/50`,
        class: "mr-2 border-1px rounded-4px border-default-dashed",
        fit: "cover"
      }, null, _parent));
      _push(`<small>${ssrInterpolate(getProps(_ctx.skuItem))}</small></div><div class="mt-2 w-full flex cursor-pointer justify-end"></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/CommentCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function getGoodsCommentPage(page, size, gid) {
  return useFetch(() => `${BaseUrl}/goods/comments/${page}/${size}/${gid}`, "$fogQwoeqNq");
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CommentList",
  __ssrInlineRender: true,
  props: {
    goodsId: {},
    skuList: {}
  },
  setup(__props) {
    const { goodsId, skuList } = __props;
    const isLoading = ref(false);
    const commentList = ref([]);
    const page = ref(0);
    const size = ref(10);
    const pageInfo = ref({
      records: [],
      total: -1,
      pages: -1,
      size: -1,
      current: -1
    });
    const isNoMore = computed(
      () => pageInfo.value.current > 0 && pageInfo.value.current >= pageInfo.value.pages
    );
    const skuMap = reactive(/* @__PURE__ */ new Map());
    skuList == null ? void 0 : skuList.forEach((p) => {
      skuMap.set(p.id, p);
    });
    async function loadCommentPage() {
      var _a2, _b;
      if (isLoading.value || isNoMore.value)
        return;
      isLoading.value = true;
      page.value++;
      const res = await getGoodsCommentPage(page.value, size.value, goodsId);
      const data = (_a2 = res.data.value) == null ? void 0 : _a2.data;
      if (isNoMore.value || (data == null ? void 0 : data.total) === -1)
        return isLoading.value = false;
      pageInfo.value = data;
      if (!(data == null ? void 0 : data.records))
        return;
      (_b = data.records) == null ? void 0 : _b.forEach((p) => {
        var _a22;
        p.images = typeof p.images === "string" ? (_a22 = p.images) == null ? void 0 : _a22.split(",") : [];
      });
      commentList.value.push(...data.records);
      isLoading.value = false;
    }
    loadCommentPage();
    const isShowVideo = ref(false);
    const showVideoUrl = ref("");
    function showVideo(url) {
      if (url) {
        showVideoUrl.value = url;
        isShowVideo.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListAutoIncre = _sfc_main$f;
      const _component_GoodsCommentCard = _sfc_main$4;
      const _component_el_dialog = ElDialog;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ListAutoIncre, {
        immediate: true,
        "no-more": unref(isNoMore),
        onLoad: loadCommentPage
      }, {
        done: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<small mb-10 inline-block w-full text-center${_scopeId}> \u6682\u65F6\u6CA1\u6709\u66F4\u591A\u8BC4\u8BBA </small>`);
          } else {
            return [
              createVNode("small", {
                "mb-10": "",
                "inline-block": "",
                "w-full": "",
                "text-center": ""
              }, " \u6682\u65F6\u6CA1\u6709\u66F4\u591A\u8BC4\u8BBA ")
            ];
          }
        }),
        load: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<small mb-10 inline-block w-full text-center${_scopeId}> \u52A0\u8F7D\u4E2D... </small>`);
          } else {
            return [
              createVNode("small", {
                "mb-10": "",
                "inline-block": "",
                "w-full": "",
                "text-center": ""
              }, " \u52A0\u8F7D\u4E2D... ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(commentList), (p) => {
              _push2(ssrRenderComponent(_component_GoodsCommentCard, {
                key: p.id,
                class: "mb-4",
                comment: p,
                "sku-item": unref(skuMap).get(p.skuId),
                onShowVideo: showVideo
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(commentList), (p) => {
                return openBlock(), createBlock(_component_GoodsCommentCard, {
                  key: p.id,
                  class: "mb-4",
                  comment: p,
                  "sku-item": unref(skuMap).get(p.skuId),
                  onShowVideo: showVideo
                }, null, 8, ["comment", "sku-item"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_el_dialog, {
          modelValue: unref(isShowVideo),
          "onUpdate:modelValue": ($event) => isRef(isShowVideo) ? isShowVideo.value = $event : null
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              if (unref(isShowVideo)) {
                _push3(`<video${ssrRenderAttr("src", ("BaseUrlVideo" in _ctx ? _ctx.BaseUrlVideo : unref(BaseUrlVideo)) + unref(showVideoUrl))} controls h-full w-full${_scopeId}></video>`);
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                unref(isShowVideo) ? (openBlock(), createBlock("video", {
                  key: 0,
                  src: ("BaseUrlVideo" in _ctx ? _ctx.BaseUrlVideo : unref(BaseUrlVideo)) + unref(showVideoUrl),
                  controls: "",
                  "h-full": "",
                  "w-full": ""
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/CommentList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_collapse = ElCollapse;
  const _component_el_collapse_item = ElCollapseItem;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_el_collapse, { accordion: "" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_collapse_item, { name: "1" }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<li text-4 my-2 font-700 style="${ssrRenderStyle({ "list-style": "circle" })}"${_scopeId2}> \u5E38\u89C1\u95EE\u9898\uFF1F <i i-solar:question-circle-broken p-2${_scopeId2}></i></li>`);
            } else {
              return [
                createVNode("li", {
                  "text-4": "",
                  "my-2": "",
                  "font-700": "",
                  style: { "list-style": "circle" }
                }, [
                  createTextVNode(" \u5E38\u89C1\u95EE\u9898\uFF1F "),
                  createVNode("i", {
                    "i-solar:question-circle-broken": "",
                    "p-2": ""
                  })
                ])
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}> 1\u3001\u5982\u4F55\u4E0B\u5355\u8D2D\u4E70\u5546\u54C1\uFF1F <br${_scopeId2}> \u7B54\uFF1A\u5728\u60A8\u6D4F\u89C8\u5546\u54C1\u65F6\uFF0C\u70B9\u51FB\u201C\u52A0\u5165\u8D2D\u7269\u8F66\u201D\uFF0C\u786E\u8BA4\u8D2D\u7269\u8F66\u4E2D\u7684\u5546\u54C1\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u7ED3\u7B97\u5E76\u4ED8\u6B3E\u201D\uFF0C\u9009\u62E9\u4ED8\u6B3E\u65B9\u5F0F\u548C\u6536\u8D27\u5730\u5740\u5373\u53EF\u4E0B\u5355\u8D2D\u4E70\u3002 </div><div${_scopeId2}> 2\u3001\u5546\u54C1\u53D1\u8D27\u65F6\u95F4\u662F\u591A\u4E45\uFF1F <br${_scopeId2}> \u7B54\uFF1A\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u53D1\u8D27\u3002\u5982\u679C\u51FA\u73B0\u7279\u6B8A\u60C5\u51B5\uFF0C\u4F8B\u5982\u8282\u5047\u65E5\u7B49\uFF0C\u6211\u4EEC\u5C06\u63D0\u524D\u5728\u7F51\u7AD9\u4E0A\u8FDB\u884C\u901A\u77E5\u3002 </div><div${_scopeId2}> 3\u3001\u5982\u4F55\u67E5\u8BE2\u6211\u7684\u8BA2\u5355\u72B6\u6001\uFF1F <br${_scopeId2}> \u7B54\uFF1A\u60A8\u53EF\u4EE5\u5728\u201C\u6211\u7684\u8BA2\u5355\u201D\u4E2D\u67E5\u770B\u6240\u6709\u8BA2\u5355\u7684\u72B6\u6001\uFF0C\u5305\u62EC\u5F85\u4ED8\u6B3E\u3001\u5F85\u53D1\u8D27\u3001\u5DF2\u53D1\u8D27\u7B49\u72B6\u6001\u3002 </div><div${_scopeId2}> 4\u3001\u662F\u5426\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF1F <br${_scopeId2}> \u7B54\uFF1A\u76EE\u524D\u6211\u4EEC\u6682\u65F6\u4E0D\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF0C\u4EC5\u652F\u6301\u5728\u7EBF\u652F\u4ED8\u3002 </div>`);
            } else {
              return [
                createVNode("div", null, [
                  createTextVNode(" 1\u3001\u5982\u4F55\u4E0B\u5355\u8D2D\u4E70\u5546\u54C1\uFF1F "),
                  createVNode("br"),
                  createTextVNode(" \u7B54\uFF1A\u5728\u60A8\u6D4F\u89C8\u5546\u54C1\u65F6\uFF0C\u70B9\u51FB\u201C\u52A0\u5165\u8D2D\u7269\u8F66\u201D\uFF0C\u786E\u8BA4\u8D2D\u7269\u8F66\u4E2D\u7684\u5546\u54C1\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u7ED3\u7B97\u5E76\u4ED8\u6B3E\u201D\uFF0C\u9009\u62E9\u4ED8\u6B3E\u65B9\u5F0F\u548C\u6536\u8D27\u5730\u5740\u5373\u53EF\u4E0B\u5355\u8D2D\u4E70\u3002 ")
                ]),
                createVNode("div", null, [
                  createTextVNode(" 2\u3001\u5546\u54C1\u53D1\u8D27\u65F6\u95F4\u662F\u591A\u4E45\uFF1F "),
                  createVNode("br"),
                  createTextVNode(" \u7B54\uFF1A\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u53D1\u8D27\u3002\u5982\u679C\u51FA\u73B0\u7279\u6B8A\u60C5\u51B5\uFF0C\u4F8B\u5982\u8282\u5047\u65E5\u7B49\uFF0C\u6211\u4EEC\u5C06\u63D0\u524D\u5728\u7F51\u7AD9\u4E0A\u8FDB\u884C\u901A\u77E5\u3002 ")
                ]),
                createVNode("div", null, [
                  createTextVNode(" 3\u3001\u5982\u4F55\u67E5\u8BE2\u6211\u7684\u8BA2\u5355\u72B6\u6001\uFF1F "),
                  createVNode("br"),
                  createTextVNode(" \u7B54\uFF1A\u60A8\u53EF\u4EE5\u5728\u201C\u6211\u7684\u8BA2\u5355\u201D\u4E2D\u67E5\u770B\u6240\u6709\u8BA2\u5355\u7684\u72B6\u6001\uFF0C\u5305\u62EC\u5F85\u4ED8\u6B3E\u3001\u5F85\u53D1\u8D27\u3001\u5DF2\u53D1\u8D27\u7B49\u72B6\u6001\u3002 ")
                ]),
                createVNode("div", null, [
                  createTextVNode(" 4\u3001\u662F\u5426\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF1F "),
                  createVNode("br"),
                  createTextVNode(" \u7B54\uFF1A\u76EE\u524D\u6211\u4EEC\u6682\u65F6\u4E0D\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF0C\u4EC5\u652F\u6301\u5728\u7EBF\u652F\u4ED8\u3002 ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_collapse_item, { name: "1" }, {
            title: withCtx(() => [
              createVNode("li", {
                "text-4": "",
                "my-2": "",
                "font-700": "",
                style: { "list-style": "circle" }
              }, [
                createTextVNode(" \u5E38\u89C1\u95EE\u9898\uFF1F "),
                createVNode("i", {
                  "i-solar:question-circle-broken": "",
                  "p-2": ""
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode("div", null, [
                createTextVNode(" 1\u3001\u5982\u4F55\u4E0B\u5355\u8D2D\u4E70\u5546\u54C1\uFF1F "),
                createVNode("br"),
                createTextVNode(" \u7B54\uFF1A\u5728\u60A8\u6D4F\u89C8\u5546\u54C1\u65F6\uFF0C\u70B9\u51FB\u201C\u52A0\u5165\u8D2D\u7269\u8F66\u201D\uFF0C\u786E\u8BA4\u8D2D\u7269\u8F66\u4E2D\u7684\u5546\u54C1\uFF0C\u7136\u540E\u70B9\u51FB\u201C\u7ED3\u7B97\u5E76\u4ED8\u6B3E\u201D\uFF0C\u9009\u62E9\u4ED8\u6B3E\u65B9\u5F0F\u548C\u6536\u8D27\u5730\u5740\u5373\u53EF\u4E0B\u5355\u8D2D\u4E70\u3002 ")
              ]),
              createVNode("div", null, [
                createTextVNode(" 2\u3001\u5546\u54C1\u53D1\u8D27\u65F6\u95F4\u662F\u591A\u4E45\uFF1F "),
                createVNode("br"),
                createTextVNode(" \u7B54\uFF1A\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u572824\u5C0F\u65F6\u5185\u53D1\u8D27\u3002\u5982\u679C\u51FA\u73B0\u7279\u6B8A\u60C5\u51B5\uFF0C\u4F8B\u5982\u8282\u5047\u65E5\u7B49\uFF0C\u6211\u4EEC\u5C06\u63D0\u524D\u5728\u7F51\u7AD9\u4E0A\u8FDB\u884C\u901A\u77E5\u3002 ")
              ]),
              createVNode("div", null, [
                createTextVNode(" 3\u3001\u5982\u4F55\u67E5\u8BE2\u6211\u7684\u8BA2\u5355\u72B6\u6001\uFF1F "),
                createVNode("br"),
                createTextVNode(" \u7B54\uFF1A\u60A8\u53EF\u4EE5\u5728\u201C\u6211\u7684\u8BA2\u5355\u201D\u4E2D\u67E5\u770B\u6240\u6709\u8BA2\u5355\u7684\u72B6\u6001\uFF0C\u5305\u62EC\u5F85\u4ED8\u6B3E\u3001\u5F85\u53D1\u8D27\u3001\u5DF2\u53D1\u8D27\u7B49\u72B6\u6001\u3002 ")
              ]),
              createVNode("div", null, [
                createTextVNode(" 4\u3001\u662F\u5426\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF1F "),
                createVNode("br"),
                createTextVNode(" \u7B54\uFF1A\u76EE\u524D\u6211\u4EEC\u6682\u65F6\u4E0D\u652F\u6301\u8D27\u5230\u4ED8\u6B3E\uFF0C\u4EC5\u652F\u6301\u5728\u7EBF\u652F\u4ED8\u3002 ")
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<li text-4 my-2 mb-4 font-700 style="${ssrRenderStyle({ "list-style": "circle" })}"> \u8D2D\u4E70\u987B\u77E5\uFF1A </li><p style="${ssrRenderStyle({ "text-indent": "2em", "line-height": "1.4em" })}" opacity-80> \u5546\u54C1\u5C55\u793A\u7684\u5212\u7EBF\u4EF7\u6216\u6307\u5BFC\u4EF7\u53EF\u80FD\u662F\u5546\u54C1\u5236\u9020\u5382\u5546\u7684\u96F6\u552E\u5E02\u573A\u6307\u5BFC\u4EF7\u3001\u54C1\u724C\u4E13\u67DC\u4EF7\u3001\u5546\u54C1\u540A\u724C\u4EF7\u6216\u8BE5\u5546\u54C1\u5728\u6781\u7269\u5708\u4E0A\u66FE\u7ECF\u5C55\u793A\u8FC7\u7684\u9500\u552E\u4EF7\uFF1B\u7531\u4E8E\u5730\u533A\u3001\u65F6\u95F4\u7684\u4E0D\u540C\u548C\u5E02\u573A\u6CE2\u52A8\uFF0C\u54C1\u724C\u4E13\u67DC\u6807\u4EF7\u3001\u5546\u54C1\u540A\u724C\u4EF7\u7B49\u53EF\u80FD\u4F1A\u4E0E\u60A8\u8D2D\u7269\u65F6\u5C55\u793A\u7684\u4E0D\u4E00\u81F4\uFF0C\u8BE5\u4EF7\u683C\u4EC5\u4F9B\u60A8\u53C2\u8003\u3002 \u56E0\u7CFB\u7EDF\u7F13\u5B58\u66F4\u65B0\u5EF6\u8FDF\u7B49\u4E0D\u786E\u5B9A\u6027\u60C5\u51B5\uFF0C\u53EF\u80FD\u5BFC\u81F4\u4EF7\u683C\u663E\u793A\u5F02\u5E38\uFF0C\u5546\u54C1\u5177\u4F53\u552E\u4EF7\u8BF7\u4EE5\u8BA2\u5355\u7ED3\u7B97\u9875\u4EF7\u683C\u4E3A\u51C6\u3002 \u82E5\u60A8\u5BF9\u5546\u54C1\u5C55\u793A\u6709\u7591\u95EE\uFF0C\u6B22\u8FCE\u54A8\u8BE2\u5BA2\u670D\u3002 \u4E3A\u4FDD\u62A4\u5E7F\u5927\u6D88\u8D39\u8005\u7684\u5229\u76CA\uFF0C\u6781\u7269\u5708\u62B5\u5236\u56E4\u79EF\u5C45\u5947\u7B49\u6270\u4E71\u5E02\u573A\u7684\u884C\u4E3A\uFF0C\u6211\u4EEC\u4F1A\u5BF9\u5546\u54C1\u7684\u4E0B\u5355\u8FDB\u884C\u98CE\u9669\u63A7\u5236\uFF0C\u5E76\u4FDD\u7559\u53D6\u6D88\u975E\u6B63\u5E38\u8D2D\u4E70\u8BA2\u5355\u4E4B\u6743\u5229\u3002 </p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/OtherTmp.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DetailTabs",
  __ssrInlineRender: true,
  props: {
    goodsInfo: {},
    skuList: {}
  },
  setup(__props) {
    const activeMenu = ref("detail");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_v_md_preview = resolveComponent("v-md-preview");
      const _component_el_text = ElText;
      const _component_card_el_image = __nuxt_component_1;
      const _component_GoodsCommentList = _sfc_main$3;
      const _component_GoodsOtherTmp = __nuxt_component_6;
      _push(ssrRenderComponent(_component_el_tabs, mergeProps({
        modelValue: unref(activeMenu),
        "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
        class: "goods-tabs",
        "tab-position": "top",
        type: "border-card"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              name: "detail",
              class: "mt-2 animate-[fade-in_0.4s]",
              label: "\u8BE6 \u60C5"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
                if (_push3) {
                  _push3(`<h3 style="${ssrRenderStyle(!((_a2 = _ctx.goodsInfo) == null ? void 0 : _a2.description) ? null : { display: "none" })}" mb-4 ml-2 data-v-56c92d63${_scopeId2}>${ssrInterpolate((_b = _ctx.goodsInfo) == null ? void 0 : _b.name)}</h3>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                  _push3(`<div class="text" mb-4 rounded-6px px-4 leading-2em border-default-dashed data-v-56c92d63${_scopeId2}><small data-v-56c92d63${_scopeId2}> \u53D1\u8D27\u5730\uFF1A${ssrInterpolate((((_c = _ctx.goodsInfo) == null ? void 0 : _c.province) || "") + (((_d = _ctx.goodsInfo) == null ? void 0 : _d.city) || "") + ((_e = _ctx.goodsInfo) == null ? void 0 : _e.district))}</small><br data-v-56c92d63${_scopeId2}><small data-v-56c92d63${_scopeId2}> \u4FDD\u969C\uFF1A `);
                  if ((_f = _ctx.goodsInfo) == null ? void 0 : _f.refundTime) {
                    _push3(ssrRenderComponent(_component_el_text, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a22, _b2;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a22 = _ctx.goodsInfo) == null ? void 0 : _a22.refundTime)}\u65E5\u65E0\u7406\u7531\u9000\u6362\u8D27`);
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b2 = _ctx.goodsInfo) == null ? void 0 : _b2.refundTime) + "\u65E5\u65E0\u7406\u7531\u9000\u6362\u8D27", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</small></div><div class="imgs overflow-hidden rounded-4px" flex flex-col data-v-56c92d63${_scopeId2}><!--[-->`);
                  ssrRenderList((_g = _ctx.goodsInfo) == null ? void 0 : _g.images, (p) => {
                    _push3(ssrRenderComponent(_component_card_el_image, {
                      key: p,
                      loading: "lazy",
                      style: { "width": "100%", "margin-bottom": "0.3em" },
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                      alt: p
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    withDirectives(createVNode("h3", {
                      "mb-4": "",
                      "ml-2": ""
                    }, toDisplayString((_h = _ctx.goodsInfo) == null ? void 0 : _h.name), 513), [
                      [vShow, !((_i = _ctx.goodsInfo) == null ? void 0 : _i.description)]
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => {
                        var _a22, _b2;
                        return [
                          ((_a22 = _ctx.goodsInfo) == null ? void 0 : _a22.description) ? (openBlock(), createBlock(_component_v_md_preview, {
                            key: 0,
                            class: "markdown mb-4",
                            text: (_b2 = _ctx.goodsInfo) == null ? void 0 : _b2.description
                          }, null, 8, ["text"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "text",
                      "mb-4": "",
                      "rounded-6px": "",
                      "px-4": "",
                      "leading-2em": "",
                      "border-default-dashed": ""
                    }, [
                      createVNode("small", null, " \u53D1\u8D27\u5730\uFF1A" + toDisplayString((((_j = _ctx.goodsInfo) == null ? void 0 : _j.province) || "") + (((_k = _ctx.goodsInfo) == null ? void 0 : _k.city) || "") + ((_l = _ctx.goodsInfo) == null ? void 0 : _l.district)), 1),
                      createVNode("br"),
                      createVNode("small", null, [
                        createTextVNode(" \u4FDD\u969C\uFF1A "),
                        ((_m = _ctx.goodsInfo) == null ? void 0 : _m.refundTime) ? (openBlock(), createBlock(_component_el_text, { key: 0 }, {
                          default: withCtx(() => {
                            var _a22;
                            return [
                              createTextVNode(toDisplayString((_a22 = _ctx.goodsInfo) == null ? void 0 : _a22.refundTime) + "\u65E5\u65E0\u7406\u7531\u9000\u6362\u8D27", 1)
                            ];
                          }),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", {
                      class: "imgs overflow-hidden rounded-4px",
                      flex: "",
                      "flex-col": ""
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_n = _ctx.goodsInfo) == null ? void 0 : _n.images, (p) => {
                        return openBlock(), createBlock(_component_card_el_image, {
                          key: p,
                          loading: "lazy",
                          style: { "width": "100%", "margin-bottom": "0.3em" },
                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                          alt: p
                        }, null, 8, ["src", "alt"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              lazy: "",
              name: "comment",
              class: "mt-2 animate-[fade-in_0.4s]",
              label: "\u8BC4 \u4EF7"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_GoodsCommentList, {
                    "goods-id": ((_a2 = _ctx.goodsInfo) == null ? void 0 : _a2.id) || "",
                    "sku-list": _ctx.skuList
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_GoodsCommentList, {
                      "goods-id": ((_b = _ctx.goodsInfo) == null ? void 0 : _b.id) || "",
                      "sku-list": _ctx.skuList
                    }, null, 8, ["goods-id", "sku-list"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              name: "other",
              lazy: "",
              class: "mt-2 animate-[fade-in_0.4s] px-2",
              label: "\u5176 \u4ED6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_GoodsOtherTmp, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_GoodsOtherTmp)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_tab_pane, {
                name: "detail",
                class: "mt-2 animate-[fade-in_0.4s]",
                label: "\u8BE6 \u60C5"
              }, {
                default: withCtx(() => {
                  var _a2, _b, _c, _d, _e, _f, _g;
                  return [
                    withDirectives(createVNode("h3", {
                      "mb-4": "",
                      "ml-2": ""
                    }, toDisplayString((_a2 = _ctx.goodsInfo) == null ? void 0 : _a2.name), 513), [
                      [vShow, !((_b = _ctx.goodsInfo) == null ? void 0 : _b.description)]
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => {
                        var _a22, _b2;
                        return [
                          ((_a22 = _ctx.goodsInfo) == null ? void 0 : _a22.description) ? (openBlock(), createBlock(_component_v_md_preview, {
                            key: 0,
                            class: "markdown mb-4",
                            text: (_b2 = _ctx.goodsInfo) == null ? void 0 : _b2.description
                          }, null, 8, ["text"])) : createCommentVNode("", true)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "text",
                      "mb-4": "",
                      "rounded-6px": "",
                      "px-4": "",
                      "leading-2em": "",
                      "border-default-dashed": ""
                    }, [
                      createVNode("small", null, " \u53D1\u8D27\u5730\uFF1A" + toDisplayString((((_c = _ctx.goodsInfo) == null ? void 0 : _c.province) || "") + (((_d = _ctx.goodsInfo) == null ? void 0 : _d.city) || "") + ((_e = _ctx.goodsInfo) == null ? void 0 : _e.district)), 1),
                      createVNode("br"),
                      createVNode("small", null, [
                        createTextVNode(" \u4FDD\u969C\uFF1A "),
                        ((_f = _ctx.goodsInfo) == null ? void 0 : _f.refundTime) ? (openBlock(), createBlock(_component_el_text, { key: 0 }, {
                          default: withCtx(() => {
                            var _a22;
                            return [
                              createTextVNode(toDisplayString((_a22 = _ctx.goodsInfo) == null ? void 0 : _a22.refundTime) + "\u65E5\u65E0\u7406\u7531\u9000\u6362\u8D27", 1)
                            ];
                          }),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", {
                      class: "imgs overflow-hidden rounded-4px",
                      flex: "",
                      "flex-col": ""
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_g = _ctx.goodsInfo) == null ? void 0 : _g.images, (p) => {
                        return openBlock(), createBlock(_component_card_el_image, {
                          key: p,
                          loading: "lazy",
                          style: { "width": "100%", "margin-bottom": "0.3em" },
                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                          alt: p
                        }, null, 8, ["src", "alt"]);
                      }), 128))
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                lazy: "",
                name: "comment",
                class: "mt-2 animate-[fade-in_0.4s]",
                label: "\u8BC4 \u4EF7"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(_component_GoodsCommentList, {
                      "goods-id": ((_a2 = _ctx.goodsInfo) == null ? void 0 : _a2.id) || "",
                      "sku-list": _ctx.skuList
                    }, null, 8, ["goods-id", "sku-list"])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                name: "other",
                lazy: "",
                class: "mt-2 animate-[fade-in_0.4s] px-2",
                label: "\u5176 \u4ED6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_GoodsOtherTmp)
                ]),
                _: 1
              })
            ];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Goods/DetailTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-56c92d63"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const user = useUserStore();
    const goodsId = route.params.id;
    const goodsSku = ([__temp, __restore] = withAsyncContext(() => getGoodsSkuByGid(goodsId.toString())), __temp = await __temp, __restore(), __temp);
    const goodsInfo = ([__temp, __restore] = withAsyncContext(() => getGoodsInfoById(goodsId.toString())), __temp = await __temp, __restore(), __temp);
    const goodsSwiper = ref();
    function setActive(name) {
      var _a2;
      (_a2 = goodsSwiper == null ? void 0 : goodsSwiper.value) == null ? void 0 : _a2.setActiveItem(name);
    }
    const goodsImages = computed(() => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      const set = /* @__PURE__ */ new Set();
      if (((_a2 = goodsInfo.data.value) == null ? void 0 : _a2.data) && ((_b = goodsInfo.data.value) == null ? void 0 : _b.data.images))
        goodsInfo.data.value.data.images = (_c = goodsInfo.data.value) == null ? void 0 : _c.data.images.toString().split(",");
      (_e = (_d = goodsSku.data.value) == null ? void 0 : _d.data) == null ? void 0 : _e.forEach((p) => {
        if (p.image)
          set.add(p.image);
      });
      if (Array.isArray((_g = (_f = goodsInfo.data.value) == null ? void 0 : _f.data) == null ? void 0 : _g.images)) {
        (_i = (_h = goodsInfo.data.value) == null ? void 0 : _h.data) == null ? void 0 : _i.images.forEach((p) => {
          set.add(p);
        });
      }
      return [...set];
    });
    useAsyncData(async () => {
      if (user.isLogin)
        await addGoodsViewsById(goodsId.toString(), user.getToken);
    }, "$3uEUgPC4sJ");
    useSeoMeta({
      title: () => {
        var _a2, _b;
        return `\u6781\u7269\u5546\u54C1 - ${(_b = (_a2 = goodsInfo.data.value) == null ? void 0 : _a2.data) == null ? void 0 : _b.name}`;
      },
      description: () => {
        var _a2, _b, _c, _d;
        return `${(_b = (_a2 = goodsInfo.data.value) == null ? void 0 : _a2.data) == null ? void 0 : _b.name}+${(_d = (_c = goodsInfo.data.value) == null ? void 0 : _c.data) == null ? void 0 : _d.description}`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_GoodsCategoryTree = _sfc_main$8;
      const _component_GoodsPreSwiper = __nuxt_component_2;
      const _component_GoodsSkuCard = __nuxt_component_3;
      const _component_GoodsDetailTabs = __nuxt_component_4;
      const _component_ListGoodsListSsr = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b767739f>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "second",
        menu: ["shopcart", "back", "home"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
          if (_push2) {
            _push2(`<div class="goods-detail mb-50vh layout-default" data-v-b767739f${_scopeId}><section class="top pt-2" flex items-center data-v-b767739f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_GoodsCategoryTree, {
              class: "left",
              gid: unref(goodsId).toString(),
              name: (_b = (_a2 = unref(goodsInfo).data.value) == null ? void 0 : _a2.data) == null ? void 0 : _b.name
            }, null, _parent2, _scopeId));
            _push2(`</section><main class="mt-6 min-h-74vh w-full flex-row-bt-c flex-wrap gap-x-20" data-v-b767739f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_GoodsPreSwiper, {
              ref_key: "goodsSwiper",
              ref: goodsSwiper,
              class: "mx-a mt-6 w-full md:w-500px",
              images: unref(goodsImages),
              video: (_d = (_c = unref(goodsInfo).data.value) == null ? void 0 : _c.data) == null ? void 0 : _d.video,
              "goods-name": (_f = (_e = unref(goodsInfo).data.value) == null ? void 0 : _e.data) == null ? void 0 : _f.name
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_GoodsSkuCard, {
              class: "z-1 mt-2rem w-full md:w-1/3",
              "goods-info": (_g = unref(goodsInfo).data.value) == null ? void 0 : _g.data,
              "goods-sku": (_h = unref(goodsSku).data.value) == null ? void 0 : _h.data,
              onSetActiveItem: setActive
            }, null, _parent2, _scopeId));
            _push2(`</main><section mt-5rem w-full flex flex-wrap justify-between border-0 border-default border-t="2px solid" class="bottom" data-v-b767739f${_scopeId}><div class="left w-full pt-3rem md:w-2/3" data-v-b767739f${_scopeId}><h2 tracking-0.1em data-v-b767739f${_scopeId}><i i-solar:bolt-outline mr-2 bg-amber p-3.5 data-v-b767739f${_scopeId}></i> \u5546\u54C1\u4ECB\u7ECD </h2>`);
            if ((_k = (_j = (_i = unref(goodsSku)) == null ? void 0 : _i.data) == null ? void 0 : _j.value) == null ? void 0 : _k.data) {
              _push2(ssrRenderComponent(_component_GoodsDetailTabs, {
                class: "mt-10 min-h-800px w-full overflow-hidden rounded-4px shadow-sm md:w-680px dark:opacity-90",
                "goods-info": (_l = unref(goodsInfo).data.value) == null ? void 0 : _l.data,
                "sku-list": (_m = unref(goodsSku).data.value) == null ? void 0 : _m.data
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="h-10rem w-full text-center leading-10rem" data-v-b767739f${_scopeId}> \u6682\u65E0\u5185\u5BB9 </div>`);
            }
            _push2(`</div><div class="w-full pt-3rem md:w-1/3" data-v-b767739f${_scopeId}><h2 mb-0.8em tracking-0.1em data-v-b767739f${_scopeId}><i i-solar:bomb-emoji-outline mr-2 bg-lime p-4 data-v-b767739f${_scopeId}></i> \u731C\u4F60\u559C\u6B22 </h2>`);
            _push2(ssrRenderComponent(_component_ListGoodsListSsr, {
              class: "grid grid-cols-2 grid-gap-x-4 grid-gap-y-2",
              dto: {
                name: (_o = (_n = unref(goodsInfo).data.value) == null ? void 0 : _n.data) == null ? void 0 : _o.name[Math.floor(Math.random())]
              },
              limit: 10
            }, null, _parent2, _scopeId));
            _push2(`</div></section></div>`);
          } else {
            return [
              createVNode("div", { class: "goods-detail mb-50vh layout-default" }, [
                createVNode("section", {
                  class: "top pt-2",
                  flex: "",
                  "items-center": ""
                }, [
                  createVNode(_component_GoodsCategoryTree, {
                    class: "left",
                    gid: unref(goodsId).toString(),
                    name: (_q = (_p = unref(goodsInfo).data.value) == null ? void 0 : _p.data) == null ? void 0 : _q.name
                  }, null, 8, ["gid", "name"])
                ]),
                createVNode("main", { class: "mt-6 min-h-74vh w-full flex-row-bt-c flex-wrap gap-x-20" }, [
                  createVNode(_component_GoodsPreSwiper, {
                    ref_key: "goodsSwiper",
                    ref: goodsSwiper,
                    class: "mx-a mt-6 w-full md:w-500px",
                    images: unref(goodsImages),
                    video: (_s = (_r = unref(goodsInfo).data.value) == null ? void 0 : _r.data) == null ? void 0 : _s.video,
                    "goods-name": (_u = (_t = unref(goodsInfo).data.value) == null ? void 0 : _t.data) == null ? void 0 : _u.name
                  }, null, 8, ["images", "video", "goods-name"]),
                  createVNode(_component_GoodsSkuCard, {
                    class: "z-1 mt-2rem w-full md:w-1/3",
                    "goods-info": (_v = unref(goodsInfo).data.value) == null ? void 0 : _v.data,
                    "goods-sku": (_w = unref(goodsSku).data.value) == null ? void 0 : _w.data,
                    onSetActiveItem: setActive
                  }, null, 8, ["goods-info", "goods-sku"])
                ]),
                createVNode("section", {
                  "mt-5rem": "",
                  "w-full": "",
                  flex: "",
                  "flex-wrap": "",
                  "justify-between": "",
                  "border-0": "",
                  "border-default": "",
                  "border-t": "2px solid",
                  class: "bottom"
                }, [
                  createVNode("div", { class: "left w-full pt-3rem md:w-2/3" }, [
                    createVNode("h2", { "tracking-0.1em": "" }, [
                      createVNode("i", {
                        "i-solar:bolt-outline": "",
                        "mr-2": "",
                        "bg-amber": "",
                        "p-3.5": ""
                      }),
                      createTextVNode(" \u5546\u54C1\u4ECB\u7ECD ")
                    ]),
                    ((_z = (_y = (_x = unref(goodsSku)) == null ? void 0 : _x.data) == null ? void 0 : _y.value) == null ? void 0 : _z.data) ? (openBlock(), createBlock(_component_GoodsDetailTabs, {
                      key: 0,
                      class: "mt-10 min-h-800px w-full overflow-hidden rounded-4px shadow-sm md:w-680px dark:opacity-90",
                      "goods-info": (_A = unref(goodsInfo).data.value) == null ? void 0 : _A.data,
                      "sku-list": (_B = unref(goodsSku).data.value) == null ? void 0 : _B.data
                    }, null, 8, ["goods-info", "sku-list"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "h-10rem w-full text-center leading-10rem"
                    }, " \u6682\u65E0\u5185\u5BB9 "))
                  ]),
                  createVNode("div", { class: "w-full pt-3rem md:w-1/3" }, [
                    createVNode("h2", {
                      "mb-0.8em": "",
                      "tracking-0.1em": ""
                    }, [
                      createVNode("i", {
                        "i-solar:bomb-emoji-outline": "",
                        "mr-2": "",
                        "bg-lime": "",
                        "p-4": ""
                      }),
                      createTextVNode(" \u731C\u4F60\u559C\u6B22 ")
                    ]),
                    createVNode(_component_ListGoodsListSsr, {
                      class: "grid grid-cols-2 grid-gap-x-4 grid-gap-y-2",
                      dto: {
                        name: (_D = (_C = unref(goodsInfo).data.value) == null ? void 0 : _C.data) == null ? void 0 : _D.name[Math.floor(Math.random())]
                      },
                      limit: 10
                    }, null, 8, ["dto"])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/goods/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b767739f"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-G5ZXjis3.mjs.map
