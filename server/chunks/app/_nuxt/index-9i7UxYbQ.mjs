import { q as buildProps, W as iconPropType, I as definePropType, aq as useFormItem, ae as useFormSize, r as useNamespace, af as useFormItemInputId, ar as useFormDisabled, $ as addUnit, as as debugWarn, M as ElIcon, at as loading_default, w as withInstall, b as _export_sfc, au as isBoolean, t as isNumber, av as useDeprecated, aw as throwError$1, y as _export_sfc$1, u as useUserStore, k as useSettingStore, z as useModeToggle, _ as __nuxt_component_0, f as __nuxt_component_2$1, e as __nuxt_component_2 } from '../server.mjs';
import { E as ElDivider } from './divider-SNINqp0P.mjs';
import { i as isValidComponentSize, E as ElSelect, a as ElOption } from './index-1UBKVkQQ.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './index-vwoBdBES.mjs';
import { defineComponent, getCurrentInstance, computed, ref, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, withModifiers, createElementVNode, withKeys, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, toDisplayString, createVNode, useSSRContext, nextTick, withDirectives, createTextVNode, Fragment, renderList, isRef } from 'vue';
import { isString, isPromise } from '@vue/shared';
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT, I as INPUT_EVENT } from './event-JIBAhsR9.mjs';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import { f as useLocalStorage, w as watchDebounced } from './index-daJZwzbi.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'pinia-plugin-persistedstate';
import 'lodash-unified';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './index-gZoFaHmS.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-r09CvUzW.mjs';
import './index-nLRih88y.mjs';
import './scrollbar-uIUdvs5K.mjs';
import './index-Ve7Fq5RY.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-RvHFA2kt.mjs';
import './index-0Uz170Jh.mjs';

const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    validator: isValidComponentSize
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  inactiveActionIcon: {
    type: iconPropType
  },
  activeActionIcon: {
    type: iconPropType
  },
  activeIcon: {
    type: iconPropType
  },
  inactiveIcon: {
    type: iconPropType
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  beforeChange: {
    type: definePropType(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  label: {
    type: String,
    default: void 0
  }
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val),
  [INPUT_EVENT]: (val) => isBoolean(val) || isString(val) || isNumber(val)
};
const _hoisted_1 = ["onClick"];
const _hoisted_2 = ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const COMPONENT_NAME = "ElSwitch";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const vm = getCurrentInstance();
    const { formItem } = useFormItem();
    const switchSize = useFormSize();
    const ns = useNamespace("switch");
    const useBatchDeprecated = (list) => {
      list.forEach((param) => {
        useDeprecated({
          from: param[0],
          replacement: param[1],
          scope: COMPONENT_NAME,
          version: "2.3.0",
          ref: "https://element-plus.org/en-US/component/switch.html#attributes",
          type: "Attribute"
        }, computed(() => {
          var _a;
          return !!((_a = vm.vnode.props) == null ? void 0 : _a[param[2]]);
        }));
      });
    };
    useBatchDeprecated([
      ['"value"', '"model-value" or "v-model"', "value"],
      ['"active-color"', "CSS var `--el-switch-on-color`", "activeColor"],
      ['"inactive-color"', "CSS var `--el-switch-off-color`", "inactiveColor"],
      ['"border-color"', "CSS var `--el-switch-border-color`", "borderColor"]
    ]);
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useFormDisabled(computed(() => props.loading));
    const isControlled = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const labelLeftKls = computed(() => [
      ns.e("label"),
      ns.em("label", "left"),
      ns.is("active", !checked.value)
    ]);
    const labelRightKls = computed(() => [
      ns.e("label"),
      ns.em("label", "right"),
      ns.is("active", checked.value)
    ]);
    const coreStyle = computed(() => ({
      width: addUnit(props.width)
    }));
    watch(() => props.modelValue, () => {
      isControlled.value = true;
    });
    watch(() => props.value, () => {
      isControlled.value = false;
    });
    const actualValue = computed(() => {
      return isControlled.value ? props.modelValue : props.value;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, (val) => {
      var _a;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn());
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError$1(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const styles = computed(() => {
      return ns.cssVarBlock({
        ...props.activeColor ? { "on-color": props.activeColor } : null,
        ...props.inactiveColor ? { "off-color": props.inactiveColor } : null,
        ...props.borderColor ? { "border-color": props.borderColor } : null
      });
    });
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    expose({
      focus,
      checked
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(switchKls)),
        style: normalizeStyle(unref(styles)),
        onClick: withModifiers(switchValue, ["prevent"])
      }, [
        createElementVNode("input", {
          id: unref(inputId),
          ref_key: "input",
          ref: input,
          class: normalizeClass(unref(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": unref(checked),
          "aria-disabled": unref(switchDisabled),
          "aria-label": _ctx.label,
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: unref(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: withKeys(switchValue, ["enter"])
        }, null, 42, _hoisted_2),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(labelLeftKls))
        }, [
          _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": unref(checked)
          }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true),
        createElementVNode("span", {
          ref_key: "core",
          ref: core,
          class: normalizeClass(unref(ns).e("core")),
          style: normalizeStyle(unref(coreStyle))
        }, [
          _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("icon"))
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(checked) ? _ctx.activeIcon : _ctx.inactiveIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeText || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(ns).is("text")),
              "aria-hidden": !unref(checked)
            }, toDisplayString(unref(checked) ? _ctx.activeText : _ctx.inactiveText), 11, _hoisted_4)) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("action"))
          }, [
            _ctx.loading ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).is("loading"))
            }, {
              default: withCtx(() => [
                createVNode(unref(loading_default))
              ]),
              _: 1
            }, 8, ["class"])) : _ctx.activeActionIcon && unref(checked) ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeActionIcon)))
              ]),
              _: 1
            })) : _ctx.inactiveActionIcon && !unref(checked) ? (openBlock(), createBlock(unref(ElIcon), { key: 2 }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveActionIcon)))
              ]),
              _: 1
            })) : createCommentVNode("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: normalizeClass(unref(labelRightKls))
        }, [
          _ctx.activeIcon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          })) : createCommentVNode("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 1,
            "aria-hidden": !unref(checked)
          }, toDisplayString(_ctx.activeText), 9, _hoisted_5)) : createCommentVNode("v-if", true)
        ], 2)) : createCommentVNode("v-if", true)
      ], 14, _hoisted_1);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);
const ElSwitch = withInstall(Switch);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    useUserStore();
    const setting = useSettingStore();
    const isColseAllTransition = useLocalStorage("isColseAllTransition", false);
    function isColseChange(val) {
      if (val)
        (void 0).documentElement.classList.add("stop-transition-all");
      else
        (void 0).documentElement.classList.remove("stop-transition-all");
    }
    watchDebounced(() => setting.settingPage.fontFamily.value, (val) => {
      if (val && void 0) {
        isLoading.value = true;
        localStorage.setItem("--font-family", val);
        (void 0).documentElement.style.setProperty("--font-family", val);
        setTimeout(() => {
          isLoading.value = false;
        }, 500);
      }
    });
    const theEvent = ref();
    watchDebounced(() => setting.settingPage.modeToggle.value, async (val) => {
      if (val && void 0) {
        if (val)
          useModeToggle(val, val === "auto" ? void 0 : theEvent.value);
      }
    });
    function onSave() {
      ElNotification.success("\u4FDD\u5B58\u6210\u529F\uFF01");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_ElDivider = ElDivider;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_switch = ElSwitch;
      const _component_BtnElButton = __nuxt_component_2;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3825e78f>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "main" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-3825e78f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_ClientOnly, null, {
                  default: withCtx(() => [
                    withDirectives((openBlock(), createBlock("main", { class: "my-8 min-h-80vh flex flex-col p-4 layout-default-se lg:w-60vw md:w-80vw border-default card-default md:p-6" }, [
                      createVNode("h3", {
                        flex: "",
                        "items-center": ""
                      }, [
                        createTextVNode(" \u7CFB\u7EDF\u8BBE\u7F6E "),
                        createVNode("i", {
                          "i-solar:settings-bold": "",
                          "ml-2": "",
                          "inline-block": "",
                          "p0.6em": "",
                          "opacity-60": "",
                          "hover:animate-spin": ""
                        })
                      ]),
                      createVNode(_component_ElDivider, { class: "opacity-60" }),
                      createVNode("section", {
                        "text-0.9rem": "",
                        grid: "~ cols-1 gap-4"
                      }, [
                        createVNode("div", { class: "group flex-row-bt-c" }, [
                          createTextVNode(" \u5B57\u4F53\u8BBE\u7F6E "),
                          createVNode(_component_el_select, {
                            modelValue: unref(setting).settingPage.fontFamily.value,
                            "onUpdate:modelValue": ($event) => unref(setting).settingPage.fontFamily.value = $event,
                            teleported: false,
                            disabled: unref(isLoading),
                            class: "inputs w-12rem",
                            placeholder: "\u8BF7\u9009\u62E9\u4E3B\u9898\u5B57\u4F53"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(setting).settingPage.fontFamily.list, (item) => {
                                return openBlock(), createBlock(_component_el_option, {
                                  key: item.value,
                                  label: item.name,
                                  value: item.value
                                }, null, 8, ["label", "value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        createVNode("div", { class: "group flex-row-bt-c" }, [
                          createTextVNode(" \u6DF1\u8272\u6A21\u5F0F "),
                          createVNode(_component_el_radio_group, {
                            modelValue: unref(setting).settingPage.modeToggle.value,
                            "onUpdate:modelValue": ($event) => unref(setting).settingPage.modeToggle.value = $event,
                            class: "inputs w-12rem",
                            disabled: unref(isLoading),
                            onClick: (e) => theEvent.value = e
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(setting).settingPage.modeToggle.list, (p) => {
                                return openBlock(), createBlock(_component_el_radio_button, {
                                  key: p.value,
                                  disabled: unref(isLoading),
                                  class: "flex-1",
                                  label: p.value
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(p.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "label"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "onClick"])
                        ]),
                        createVNode("div", { class: "group flex-row-bt-c" }, [
                          createTextVNode(" \u6D41\u7545\u6A21\u5F0F\uFF08\u5173\u95ED\u52A8\u753B\uFF09 "),
                          createVNode(_component_el_switch, {
                            modelValue: unref(isColseAllTransition),
                            "onUpdate:modelValue": ($event) => isRef(isColseAllTransition) ? isColseAllTransition.value = $event : null,
                            class: "mb-2",
                            "active-text": "\u5F00\u542F",
                            "inactive-text": "\u5173\u95ED",
                            "inline-prompt": "",
                            size: "large",
                            onChange: isColseChange
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "btns mt-a flex-row-bt-c" }, [
                        createVNode("i"),
                        createVNode(_component_BtnElButton, {
                          class: "ml-a shadow",
                          "icon-class": "i-solar:diskette-bold",
                          type: "info",
                          "transition-icon": true,
                          round: "",
                          onClick: onSave
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4FDD\u5B58 ")
                          ]),
                          _: 1
                        })
                      ])
                    ])), [
                      [_directive_loading, unref(isLoading)]
                    ])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/setting/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3825e78f"]]);

export { index as default };
//# sourceMappingURL=index-9i7UxYbQ.mjs.map
