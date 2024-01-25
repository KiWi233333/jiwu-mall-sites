import { q as buildProps, aS as componentSizes, t as isNumber, W as iconPropType, I as definePropType, r as useNamespace, $ as addUnit, M as ElIcon, w as withInstall, u as useUserStore, a5 as useHead, D as appName, y as _export_sfc$1, a1 as useShopStore, an as useAddressStore, B as BaseUrlImg, E as ElMessage, _ as __nuxt_component_0$1, f as __nuxt_component_2$1$1, g as ElMessageBox, S as StatusCode, h as ElButton, b as _export_sfc, aT as updatePwdByToken, aU as updatePhone, aV as getUpdateNewCode, aW as DeviceType, aX as updateEmail, n as navigateTo, j as useHttp } from '../server.mjs';
import { E as ElScrollbar } from './scrollbar-uIUdvs5K.mjs';
import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { defineComponent, ref, computed, watch, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, renderSlot, useSSRContext, createVNode, createCommentVNode, mergeProps, createTextVNode, resolveDirective, withDirectives, Fragment, renderList, reactive, withKeys, toDisplayString, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import { isString } from '@vue/shared';
import { E as ElDivider } from './divider-SNINqp0P.mjs';
import { ElText } from './index-QzTfU9Or.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-Q_ZiRZvp.mjs';
import { E as ElInput } from './index-nLRih88y.mjs';
import { u as useOrderStore } from './useOrderStore-KiN84DL2.mjs';
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
import './index-daJZwzbi.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';
import './event-JIBAhsR9.mjs';
import './index-DNDo83-k.mjs';

const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const _hoisted_1 = ["src", "alt", "srcset"];
const __default__ = defineComponent({
  name: "ElAvatar"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(() => props.src, () => hasLoadError.value = false);
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          style: normalizeStyle(unref(fitStyle)),
          onError: handleError
        }, null, 44, _hoisted_1)) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DeviceCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col border-2px rounded-8px p-4 leading-1.5em border-default-dashed v-card" }, _attrs))}><small class="mb-1 flex-row-bt-c font-600">${ssrInterpolate(_ctx.data.country && _ctx.data.country !== "0" ? _ctx.data.country : "\u672A\u77E5")} ${ssrInterpolate(_ctx.data.province && _ctx.data.province !== "0" ? _ctx.data.province : "\u672A\u77E5")} ${ssrInterpolate(_ctx.data.city && _ctx.data.city !== "0" ? _ctx.data.city : "\u672A\u77E5")} `);
      if (_ctx.data.isLocal) {
        _push(ssrRenderComponent(_component_el_tag, {
          type: "info",
          size: "small",
          plain: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u672C\u673A `);
            } else {
              return [
                createTextVNode(" \u672C\u673A ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</small><small text-0.7em>IP\uFF1A${ssrInterpolate(_ctx.data.ip)}</small><small text-0.7em opacity-80> \u7CFB\u7EDF\uFF1A${ssrInterpolate(_ctx.data.operatingSystem)}</small><small text-0.7em opacity-80> \u6D4F\u89C8\u5668\uFF1A${ssrInterpolate(_ctx.data.browser)}</small><small text-0.7em opacity-80> \u8FD0\u8425\u5546\uFF1A${ssrInterpolate(_ctx.data.operator)}</small><div class="btns mt-1 flex-row-bt-c opacity-100 transition-300 group-hover:opacity-100 md:opacity-0">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/DeviceCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function getLoginDeviceList(token) {
  return useHttp.get("/user/device", {}, { headers: { Authorization: token } });
}
function toUserOffline(userAgent, token) {
  return useHttp.deleted("/user/device", { userAgent }, { headers: { Authorization: token } });
}
function getDeviceIpInfo(ip, token) {
  return useHttp.get(`/res/ip/info?ip=${ip}`, {}, {
    headers: {
      Authorization: token
    }
  });
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DeviceList",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    const isLoading = ref(false);
    const deviceList = ref([]);
    async function getDeviceList() {
      const res = await getLoginDeviceList(user.getToken);
      const result = res.data.sort((a, b) => b.isLocal - a.isLocal);
      const getList = [];
      for (const p of result)
        getList.push(await getDeviceIpInfo(p.ip, user.getToken));
      const ProList = await Promise.all(getList);
      ProList.forEach((p, i) => {
        result[i] = {
          ...p.data,
          ...result[i]
        };
      });
      deviceList.value = result.sort((a, b) => a.isLocal);
      return true;
    }
    getDeviceList();
    function exitLogin(ua) {
      ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u4E0B\u7EBF\u7528\u6237?", "\u786E\u8BA4\u9009\u62E9", {
        cancelButtonText: "\u53D6\u6D88",
        lockScroll: false,
        confirmButtonText: "\u786E\u8BA4\u4E0B\u7EBF",
        confirmButtonClass: "el-button--danger"
      }).then(async (action) => {
        var _a;
        if (action === "confirm") {
          const arr = ua ? [ua] : (_a = deviceList.value) == null ? void 0 : _a.map((p) => p.userAgentString);
          const { code, message } = await toUserOffline(arr, user.getToken);
          if (code === StatusCode.SUCCESS) {
            if (deviceList.value) {
              for (let i = 0; i < deviceList.value.length; i++) {
                if (deviceList.value[i].userAgentString === ua) {
                  deviceList.value.splice(i, 1);
                  break;
                }
              }
            }
            ElMessage.success("\u4E0B\u7EBF\u6210\u529F\uFF01");
          } else {
            ElMessage.error(message);
          }
        }
      }).catch(() => {
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_UserSafeDeviceCard = _sfc_main$7;
      const _component_el_button = ElButton;
      const _directive_auto_animate = resolveDirective("auto-animate");
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group flex flex-col" }, _attrs))} data-v-fba7f367><strong my-4 block opacity-70 data-v-fba7f367><i class="i-solar:devices-outline mr-2 p-2.5" data-v-fba7f367></i> \u767B\u5F55\u8BBE\u5907 <i opacity-100 transition-300 group-hover:opacity-100 md:opacity-0 class="i-solar:refresh-outline float-right cursor-pointer bg-[var(--el-color-info)] px-3 transition-300 hover:rotate-180" data-v-fba7f367></i></strong><div${ssrRenderAttrs(mergeProps({ class: "group flex-1 select-none overflow-hidden rounded-14px p-4 shadow-sm border-default v-card" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))))} data-v-fba7f367>`);
      _push(ssrRenderComponent(_component_el_scrollbar, { height: "400px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({ class: "relative grid grid-cols-1 grid-gap-3 md:grid-cols-3" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate, {
              duration: 300,
              easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
            })))} data-v-fba7f367${_scopeId}><!--[-->`);
            ssrRenderList(unref(deviceList), (p) => {
              _push2(ssrRenderComponent(_component_UserSafeDeviceCard, {
                key: p.id,
                class: "cursor-pointer active:scale-97 hover:border-[var(--el-color-info)]",
                data: p
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-fba7f367${_scopeId2}></div>`);
                    if (!p.isLocal) {
                      _push3(ssrRenderComponent(_component_el_button, {
                        size: "small",
                        type: "danger",
                        style: { "padding": "0 8px" },
                        plain: "",
                        onClick: ($event) => exitLogin(p.userAgentString)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u4E0B\u7EBF `);
                          } else {
                            return [
                              createTextVNode(" \u4E0B\u7EBF ")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div"),
                      !p.isLocal ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        size: "small",
                        type: "danger",
                        style: { "padding": "0 8px" },
                        plain: "",
                        onClick: ($event) => exitLogin(p.userAgentString)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E0B\u7EBF ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("div", { class: "relative grid grid-cols-1 grid-gap-3 md:grid-cols-3" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(deviceList), (p) => {
                  return openBlock(), createBlock(_component_UserSafeDeviceCard, {
                    key: p.id,
                    class: "cursor-pointer active:scale-97 hover:border-[var(--el-color-info)]",
                    data: p
                  }, {
                    default: withCtx(() => [
                      createVNode("div"),
                      !p.isLocal ? (openBlock(), createBlock(_component_el_button, {
                        key: 0,
                        size: "small",
                        type: "danger",
                        style: { "padding": "0 8px" },
                        plain: "",
                        onClick: ($event) => exitLogin(p.userAgentString)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u4E0B\u7EBF ")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["data"]);
                }), 128))
              ])), [
                [_directive_auto_animate, {
                  duration: 300,
                  easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
                }]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/DeviceList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-fba7f367"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PwdForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const user = useUserStore();
    const isLoading = ref(false);
    const userForm = reactive({
      password: "",
      // 旧密码
      newPassword: ""
      // 密码
    });
    const rules = reactive({
      password: [
        { required: true, message: "\u65E7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
        { min: 6, max: 20, message: "\u65E7\u5BC6\u7801\u957F\u5EA66-20\u5B57\u7B26\uFF01", trigger: "blur" },
        {
          pattern: /^\w{6,20}$/,
          message: "\u5BC6\u7801\u7531\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\u7EC4\u6210",
          trigger: "change"
        }
      ],
      newPassword: [
        { required: true, message: "\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
        { required: true, message: "\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
        {
          pattern: /^\w{6,20}$/,
          message: "\u5BC6\u7801\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\u7EC4\u6210",
          trigger: "change"
        },
        { min: 6, max: 20, message: "\u65B0\u5BC6\u7801\u957F\u5EA66-20\u5B57\u7B26\uFF01", trigger: "blur" },
        {
          validator: () => userForm.password !== userForm.newPassword,
          message: "\u65B0\u65E7\u5BC6\u7801\u76F8\u540C\uFF01",
          trigger: "change"
        },
        {
          validator: () => userForm.password !== userForm.newPassword,
          message: "\u65B0\u65E7\u5BC6\u7801\u76F8\u540C\uFF01",
          trigger: "blur"
        }
      ]
    });
    const userFormRefs = ref();
    async function onUpdatePwd(formEl) {
      if (!formEl || isLoading.value)
        return;
      await formEl.validate(async (valid) => {
        if (valid) {
          isLoading.value = true;
          try {
            const action = await ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u4FEE\u6539\u5BC6\u7801?", "\u4FEE\u6539\u5BC6\u7801", {
              confirmButtonText: "\u786E\u8BA4\u4FEE\u6539",
              cancelButtonText: "\u53D6\u6D88",
              lockScroll: false
            });
            if (action === "confirm")
              await toUpdate();
          } finally {
            setTimeout(() => {
              isLoading.value = false;
            }, 300);
          }
        }
      });
    }
    async function toUpdate() {
      const res = await updatePwdByToken(
        { oldPassword: userForm.password, newPassword: userForm.newPassword },
        user.getToken
      );
      if (res.code === StatusCode.SUCCESS) {
        ElMessage.success({
          message: "\u4FEE\u6539\u6210\u529F\uFF0C\u4E0B\u6B21\u767B\u5F55\u8BF7\u7528\u65B0\u5BC6\u7801\uFF01",
          duration: 2e3
        });
        emits("close");
      }
      return true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "userFormRefs",
        ref: userFormRefs,
        "label-position": "top",
        "hide-required-asterisk": "",
        rules: unref(rules),
        model: unref(userForm),
        class: "form"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 mb-5 mt-4 text-center tracking-0.2em data-v-275e76e8${_scopeId}> \u5BC6\u7801\u4FEE\u6539 </h2>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              type: "password",
              label: "\u65E7\u5BC6\u7801",
              prop: "password",
              class: "animated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(userForm).password,
                    "onUpdate:modelValue": ($event) => unref(userForm).password = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Unlock",
                    size: "large",
                    placeholder: "\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",
                    required: "",
                    "show-password": "",
                    type: "password",
                    onKeyup: ($event) => onUpdatePwd(unref(userFormRefs))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(userForm).password,
                      "onUpdate:modelValue": ($event) => unref(userForm).password = $event,
                      modelModifiers: { trim: true },
                      "prefix-icon": "Unlock",
                      size: "large",
                      placeholder: "\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",
                      required: "",
                      "show-password": "",
                      type: "password",
                      onKeyup: withKeys(($event) => onUpdatePwd(unref(userFormRefs)), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              type: "password",
              label: "\u65B0\u5BC6\u7801",
              prop: "newPassword",
              class: "animated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(userForm).newPassword,
                    "onUpdate:modelValue": ($event) => unref(userForm).newPassword = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Unlock",
                    size: "large",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
                    required: "",
                    "show-password": "",
                    type: "password",
                    onKeyup: ($event) => onUpdatePwd(unref(userFormRefs))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(userForm).newPassword,
                      "onUpdate:modelValue": ($event) => unref(userForm).newPassword = $event,
                      modelModifiers: { trim: true },
                      "prefix-icon": "Unlock",
                      size: "large",
                      placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
                      required: "",
                      "show-password": "",
                      type: "password",
                      onKeyup: withKeys(($event) => onUpdatePwd(unref(userFormRefs)), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, { "mt-1em": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "danger",
                    class: "submit w-full",
                    style: { "padding": "20px" },
                    onKeyup: ($event) => onUpdatePwd(unref(userFormRefs)),
                    onClick: ($event) => onUpdatePwd(unref(userFormRefs))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u4FEE \u6539 `);
                      } else {
                        return [
                          createTextVNode(" \u4FEE \u6539 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "danger",
                      class: "submit w-full",
                      style: { "padding": "20px" },
                      onKeyup: withKeys(($event) => onUpdatePwd(unref(userFormRefs)), ["enter"]),
                      onClick: ($event) => onUpdatePwd(unref(userFormRefs))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u4FEE \u6539 ")
                      ]),
                      _: 1
                    }, 8, ["onKeyup", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", {
                "mb-5": "",
                "mt-4": "",
                "text-center": "",
                "tracking-0.2em": ""
              }, " \u5BC6\u7801\u4FEE\u6539 "),
              createVNode(_component_el_form_item, {
                type: "password",
                label: "\u65E7\u5BC6\u7801",
                prop: "password",
                class: "animated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(userForm).password,
                    "onUpdate:modelValue": ($event) => unref(userForm).password = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Unlock",
                    size: "large",
                    placeholder: "\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",
                    required: "",
                    "show-password": "",
                    type: "password",
                    onKeyup: withKeys(($event) => onUpdatePwd(unref(userFormRefs)), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                type: "password",
                label: "\u65B0\u5BC6\u7801",
                prop: "newPassword",
                class: "animated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(userForm).newPassword,
                    "onUpdate:modelValue": ($event) => unref(userForm).newPassword = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Unlock",
                    size: "large",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
                    required: "",
                    "show-password": "",
                    type: "password",
                    onKeyup: withKeys(($event) => onUpdatePwd(unref(userFormRefs)), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { "mt-1em": "" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "danger",
                    class: "submit w-full",
                    style: { "padding": "20px" },
                    onKeyup: withKeys(($event) => onUpdatePwd(unref(userFormRefs)), ["enter"]),
                    onClick: ($event) => onUpdatePwd(unref(userFormRefs))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u4FEE \u6539 ")
                    ]),
                    _: 1
                  }, 8, ["onKeyup", "onClick"])
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/PwdForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-275e76e8"]]);
function checkEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email);
}
function checkPhone(phone) {
  return /^1(3\d|4[57]|5[0-35-9]|6[56]|7[013678]|8\d|9[89])\d{8}$/g.test(phone);
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PhoneForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const user = useUserStore();
    const isLoading = ref(false);
    const phoneCodeStorage = ref(0);
    const formRef = ref();
    const form = reactive({
      newPhone: user.userInfo.phone || "",
      code: ""
    });
    const rules = reactive({
      newPhone: [
        { required: true, message: "\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
        {
          pattern: /^1(3\d|4[57]|5[0-35-9]|6[56]|7[013678]|8\d|9[89])\d{8}$/g,
          message: "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E\uFF01",
          trigger: "change"
        }
      ],
      code: [
        {
          required: true,
          message: "\u9A8C\u8BC1\u78016\u4F4D\u7EC4\u6210\uFF01",
          trigger: "change"
        }
      ]
    });
    async function onUpdatePhone(formEl) {
      if (!formEl || isLoading.value)
        return;
      await formEl.validate((valid) => {
        if (valid) {
          isLoading.value = true;
          ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u4FEE\u6539?", "\u4FEE\u6539\u624B\u673A\u53F7", {
            confirmButtonText: "\u786E\u8BA4\u4FEE\u6539",
            lockScroll: false,
            cancelButtonText: "\u53D6\u6D88"
          }).then((action) => {
            if (action === "confirm")
              toUpdate();
          });
        }
      });
    }
    async function toUpdate() {
      const res = await updatePhone({ newPhone: form.newPhone, code: form.code }, user.getToken);
      if (res.code === StatusCode.SUCCESS) {
        ElMessage.success({
          message: "\u4FEE\u6539\u624B\u673A\u53F7\u6210\u529F\uFF01",
          duration: 2e3
        });
        user.userInfo.phone = form.newPhone;
        emits("close");
        setTimeout(() => {
          isLoading.value = false;
        }, 300);
      } else {
        ElMessage.error(res.message || "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01");
      }
    }
    let timer;
    async function getPhoneCode() {
      if (phoneCodeStorage.value > 0)
        return;
      if (!form.newPhone)
        return ElMessage.warning("\u65B0\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A");
      if (!checkPhone(form.newPhone))
        return ElMessage.error("\u65B0\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E!");
      if (user.userInfo.phone === form.newPhone.trim())
        return ElMessage.error("\u65B0\u65E7\u624B\u673A\u53F7\u4E0D\u80FD\u4E00\u81F4!");
      const { code } = await getUpdateNewCode(form.newPhone, DeviceType.PHONE, user.getToken);
      if (code === StatusCode.SUCCESS) {
        phoneCodeStorage.value = 60;
        ElMessage.success("\u53D1\u9001\u6210\u529F\uFF0C\u8BF7\u67E5\u770B\u624B\u673A\u77ED\u4FE1\uFF01");
        timer = setInterval(() => {
          phoneCodeStorage.value--;
          clearInterval(timer);
          timer = void 0;
        }, 1e3);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        "label-position": "top",
        "hide-required-asterisk": "",
        rules: unref(rules),
        model: unref(form),
        class: "form",
        onSubmit: () => {
        }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 mb-6 mt-4 text-center tracking-0.2em data-v-79bf058d${_scopeId}>${ssrInterpolate(unref(user).userInfo.isPhoneVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A")}\u624B\u673A\u53F7 </h2>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "",
              prop: "newPhone",
              class: "animated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).newPhone,
                    "onUpdate:modelValue": ($event) => unref(form).newPhone = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Iphone",
                    size: "default",
                    clearable: "",
                    type: "tel",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7",
                    onKeyup: getPhoneCode
                  }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          disabled: unref(phoneCodeStorage) > 0,
                          onClick: getPhoneCode
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(phoneCodeStorage) > 0 ? `${unref(phoneCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(phoneCodeStorage) > 0 ? `${unref(phoneCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            disabled: unref(phoneCodeStorage) > 0,
                            onClick: getPhoneCode
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(phoneCodeStorage) > 0 ? `${unref(phoneCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).newPhone,
                      "onUpdate:modelValue": ($event) => unref(form).newPhone = $event,
                      modelModifiers: { trim: true },
                      "prefix-icon": "Iphone",
                      size: "default",
                      clearable: "",
                      type: "tel",
                      placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7",
                      onKeyup: withKeys(getPhoneCode, ["enter"])
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          disabled: unref(phoneCodeStorage) > 0,
                          onClick: getPhoneCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(phoneCodeStorage) > 0 ? `${unref(phoneCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              type: "number",
              label: "",
              prop: "code",
              class: "animated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "message",
                    size: "default",
                    type: "number",
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                    onKeyup: ($event) => onUpdatePhone(unref(formRef))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": ($event) => unref(form).code = $event,
                      modelModifiers: { trim: true },
                      "prefix-icon": "message",
                      size: "default",
                      type: "number",
                      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                      onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, { "mt-1em": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    size: "large",
                    class: "submit w-full",
                    onKeyup: ($event) => onUpdatePhone(unref(formRef)),
                    onClick: ($event) => onUpdatePhone(unref(formRef))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u7ACB\u5373${ssrInterpolate(unref(user).userInfo.isPhoneVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A")}`);
                      } else {
                        return [
                          createTextVNode(" \u7ACB\u5373" + toDisplayString(unref(user).userInfo.isPhoneVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "large",
                      class: "submit w-full",
                      onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"]),
                      onClick: ($event) => onUpdatePhone(unref(formRef))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u7ACB\u5373" + toDisplayString(unref(user).userInfo.isPhoneVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A"), 1)
                      ]),
                      _: 1
                    }, 8, ["onKeyup", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", {
                "mb-6": "",
                "mt-4": "",
                "text-center": "",
                "tracking-0.2em": ""
              }, toDisplayString(unref(user).userInfo.isPhoneVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A") + "\u624B\u673A\u53F7 ", 1),
              createVNode(_component_el_form_item, {
                label: "",
                prop: "newPhone",
                class: "animated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).newPhone,
                    "onUpdate:modelValue": ($event) => unref(form).newPhone = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Iphone",
                    size: "default",
                    clearable: "",
                    type: "tel",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u624B\u673A\u53F7",
                    onKeyup: withKeys(getPhoneCode, ["enter"])
                  }, {
                    append: withCtx(() => [
                      createVNode(_component_el_button, {
                        type: "primary",
                        disabled: unref(phoneCodeStorage) > 0,
                        onClick: getPhoneCode
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(phoneCodeStorage) > 0 ? `${unref(phoneCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                type: "number",
                label: "",
                prop: "code",
                class: "animated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "message",
                    size: "default",
                    type: "number",
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                    onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { "mt-1em": "" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    size: "large",
                    class: "submit w-full",
                    onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"]),
                    onClick: ($event) => onUpdatePhone(unref(formRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u7ACB\u5373" + toDisplayString(unref(user).userInfo.isPhoneVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A"), 1)
                    ]),
                    _: 1
                  }, 8, ["onKeyup", "onClick"])
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/PhoneForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-79bf058d"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "EmailForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const user = useUserStore();
    const isLoading = ref(false);
    const emailCodeStorage = ref(0);
    const formRef = ref();
    const form = reactive({
      newEmail: user.userInfo.email || "",
      code: ""
    });
    const rules = reactive({
      newEmail: [
        { required: true, message: "\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
        {
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g,
          message: "\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E\uFF01",
          trigger: "change"
        }
      ],
      code: [
        {
          required: true,
          message: "\u9A8C\u8BC1\u78016\u4F4D\u7EC4\u6210\uFF01",
          trigger: "change"
        }
      ]
    });
    async function onUpdatePhone(formEl) {
      if (!formEl || isLoading.value)
        return;
      await formEl.validate((valid) => {
        if (valid) {
          isLoading.value = true;
          ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u4FEE\u6539?", "\u4FEE\u6539\u90AE\u7BB1", {
            confirmButtonText: "\u786E\u8BA4\u4FEE\u6539",
            cancelButtonText: "\u53D6\u6D88",
            lockScroll: false
          }).then((action) => {
            if (action === "confirm")
              toUpdate();
          });
        }
      });
    }
    async function toUpdate() {
      const res = await updateEmail({ newEmail: form.newEmail, code: form.code }, user.getToken);
      if (res.code === StatusCode.SUCCESS) {
        ElMessage.success({
          message: "\u4FEE\u6539\u90AE\u7BB1\u6210\u529F\uFF01",
          duration: 2e3
        });
        user.userInfo.email = form.newEmail;
        emits("close");
        setTimeout(() => {
          isLoading.value = false;
        }, 300);
      } else {
        ElMessage.error(res.message || "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01");
      }
    }
    let timer;
    async function getEmailCode() {
      if (emailCodeStorage.value > 0)
        return;
      if (!form.newEmail)
        return ElMessage.warning("\u65B0\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A");
      if (!checkEmail(form.newEmail))
        return ElMessage.error("\u65B0\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E!");
      if (user.userInfo.email === form.newEmail.trim())
        return ElMessage.error("\u65B0\u65E7\u90AE\u7BB1\u4E0D\u80FD\u4E00\u81F4!");
      const { code } = await getUpdateNewCode(form.newEmail, DeviceType.EMAIL, user.getToken);
      if (code === StatusCode.SUCCESS) {
        emailCodeStorage.value = 60;
        ElMessage.success("\u53D1\u9001\u9A8C\u8BC1\u7801\u6210\u529F\uFF01");
        timer = setInterval(() => {
          emailCodeStorage.value--;
          clearInterval(timer);
          timer = void 0;
        }, 1e3);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        "label-position": "top",
        "hide-required-asterisk": "",
        rules: unref(rules),
        model: unref(form),
        class: "form",
        onSubmit: () => {
        }
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 mb-6 mt-4 text-center tracking-0.2em data-v-5bc5454e${_scopeId}>${ssrInterpolate(unref(user).userInfo.isEmailVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A")}\u90AE\u7BB1 </h2>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              type: "newEmail",
              label: "",
              prop: "newEmail",
              class: "animated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).newEmail,
                    "onUpdate:modelValue": ($event) => unref(form).newEmail = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Iphone",
                    size: "default",
                    clearable: "",
                    type: "email",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u90AE\u7BB1",
                    onKeyup: getEmailCode
                  }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_button, {
                          type: "primary",
                          disabled: unref(emailCodeStorage) > 0,
                          onClick: getEmailCode
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(emailCodeStorage) > 0 ? `${unref(emailCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(emailCodeStorage) > 0 ? `${unref(emailCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_button, {
                            type: "primary",
                            disabled: unref(emailCodeStorage) > 0,
                            onClick: getEmailCode
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(emailCodeStorage) > 0 ? `${unref(emailCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).newEmail,
                      "onUpdate:modelValue": ($event) => unref(form).newEmail = $event,
                      modelModifiers: { trim: true },
                      "prefix-icon": "Iphone",
                      size: "default",
                      clearable: "",
                      type: "email",
                      placeholder: "\u8BF7\u8F93\u5165\u65B0\u90AE\u7BB1",
                      onKeyup: withKeys(getEmailCode, ["enter"])
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_el_button, {
                          type: "primary",
                          disabled: unref(emailCodeStorage) > 0,
                          onClick: getEmailCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(emailCodeStorage) > 0 ? `${unref(emailCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              type: "number",
              label: "",
              prop: "code",
              class: "animated"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "message",
                    size: "default",
                    type: "number",
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                    onKeyup: ($event) => onUpdatePhone(unref(formRef))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).code,
                      "onUpdate:modelValue": ($event) => unref(form).code = $event,
                      modelModifiers: { trim: true },
                      "prefix-icon": "message",
                      size: "default",
                      type: "number",
                      placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                      onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, { "mt-1em": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    type: "primary",
                    size: "large",
                    class: "submit w-full",
                    onKeyup: ($event) => onUpdatePhone(unref(formRef)),
                    onClick: ($event) => onUpdatePhone(unref(formRef))
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u7ACB\u5373${ssrInterpolate(unref(user).userInfo.isEmailVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A")}`);
                      } else {
                        return [
                          createTextVNode(" \u7ACB\u5373" + toDisplayString(unref(user).userInfo.isEmailVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "large",
                      class: "submit w-full",
                      onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"]),
                      onClick: ($event) => onUpdatePhone(unref(formRef))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u7ACB\u5373" + toDisplayString(unref(user).userInfo.isEmailVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A"), 1)
                      ]),
                      _: 1
                    }, 8, ["onKeyup", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("h2", {
                "mb-6": "",
                "mt-4": "",
                "text-center": "",
                "tracking-0.2em": ""
              }, toDisplayString(unref(user).userInfo.isEmailVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A") + "\u90AE\u7BB1 ", 1),
              createVNode(_component_el_form_item, {
                type: "newEmail",
                label: "",
                prop: "newEmail",
                class: "animated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).newEmail,
                    "onUpdate:modelValue": ($event) => unref(form).newEmail = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "Iphone",
                    size: "default",
                    clearable: "",
                    type: "email",
                    placeholder: "\u8BF7\u8F93\u5165\u65B0\u90AE\u7BB1",
                    onKeyup: withKeys(getEmailCode, ["enter"])
                  }, {
                    append: withCtx(() => [
                      createVNode(_component_el_button, {
                        type: "primary",
                        disabled: unref(emailCodeStorage) > 0,
                        onClick: getEmailCode
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(emailCodeStorage) > 0 ? `${unref(emailCodeStorage)}s\u540E\u91CD\u65B0\u53D1\u9001` : "\u83B7\u53D6\u9A8C\u8BC1\u7801"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                type: "number",
                label: "",
                prop: "code",
                class: "animated"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    modelModifiers: { trim: true },
                    "prefix-icon": "message",
                    size: "default",
                    type: "number",
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                    onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { "mt-1em": "" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    size: "large",
                    class: "submit w-full",
                    onKeyup: withKeys(($event) => onUpdatePhone(unref(formRef)), ["enter"]),
                    onClick: ($event) => onUpdatePhone(unref(formRef))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u7ACB\u5373" + toDisplayString(unref(user).userInfo.isEmailVerified ? "\u66F4\u6362" : "\u7ED1\u5B9A"), 1)
                    ]),
                    _: 1
                  }, 8, ["onKeyup", "onClick"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/EmailForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5bc5454e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Dialog",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  setup(__props) {
    const props = __props;
    const close = () => {
      props.modelValue.showUpdateEmail = false;
      props.modelValue.showUpdatePhone = false;
      props.modelValue.showUpdatePwd = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserSafePwdForm = __nuxt_component_0;
      const _component_UserSafePhoneForm = __nuxt_component_1;
      const _component_UserSafeEmailForm = __nuxt_component_2;
      if (_ctx.modelValue.showUpdatePwd || _ctx.modelValue.showUpdateEmail || _ctx.modelValue.showUpdatePhone) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-row-c-c overflow-hidden fixed top-0 left-0 z-1000 w-full h-100vh" }, _attrs))}><div class="w-full h-full absolute bg-[#b4b4b459] dark:bg-[#1d1d1d80] backdrop-blur-5px"></div>`);
        if (_ctx.modelValue.showUpdatePwd) {
          _push(ssrRenderComponent(_component_UserSafePwdForm, {
            onClose: ($event) => close()
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.modelValue.showUpdatePhone) {
          _push(ssrRenderComponent(_component_UserSafePhoneForm, {
            onClose: ($event) => close()
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.modelValue.showUpdateEmail) {
          _push(ssrRenderComponent(_component_UserSafeEmailForm, {
            onClose: ($event) => close()
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/Dialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UpdateCards",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    const shop = useShopStore();
    const order = useOrderStore();
    const address = useAddressStore();
    async function toExistLogin() {
      ElMessageBox.confirm("\u662F\u5426\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F", "\u9000\u51FA\u767B\u5F55", {
        confirmButtonText: "\u786E\u8BA4\u9000\u51FA",
        lockScroll: false,
        cancelButtonText: "\u53D6\u6D88"
      }).then(async (action) => {
        if (action === "confirm") {
          await user.onUserExit(user.getToken);
          setTimeout(() => {
            user.$reset();
            shop.$reset();
            order.$reset();
            address.$reset();
          }, 50);
          navigateTo("/");
        }
      });
    }
    const isLoading = ref(false);
    const form = ref({
      showUpdatePwd: false,
      showUpdatePhone: false,
      showUpdateEmail: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_avatar = ElAvatar;
      const _component_ElDivider = ElDivider;
      const _component_el_text = ElText;
      const _component_UserSafeDialog = _sfc_main$2;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card flex flex-col" }, _attrs))}><strong my-4 block opacity-70><i i-solar:shield-check-broken mr-2 p-2.5></i> \u4FEE\u6539\u4FE1\u606F </strong><div${ssrRenderAttrs(mergeProps({
        class: "group flex flex-col overflow-hidden rounded-14px p-5 text-1em shadow-sm border-default v-card",
        flex: "",
        "flex-1": "",
        "flex-col": ""
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))))}><div class="flex items-center">`);
      _push(ssrRenderComponent(_component_el_avatar, {
        size: "large",
        src: unref(user).userInfo.avatar ? ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(user).userInfo.avatar : `${"BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)}default.png`
      }, null, _parent));
      _push(`<strong class="ml-3 block">\u7528\u6237\u540D\uFF1A${ssrInterpolate(unref(user).userInfo.username)}</strong><i opacity-0 transition-300 group-hover:opacity-100 class="i-solar:refresh-outline ml-a cursor-pointer bg-[var(--el-color-info)] px-3 transition-300 hover:rotate-180"></i></div><div ml-1 mt-6 flex-row-bt-c><small> \u5BC6\u2003\u7801\uFF1A <small opacity-80>*******</small></small><small class="cursor-pointer transition-300 hover:text-[var(--el-color-primary)]"> \u4FEE\u6539\u5BC6\u7801 </small></div><div ml-1 mt-6 flex-row-bt-c><small> \u624B\u673A\u53F7\uFF1A <small opacity-80 class="${ssrRenderClass({ "text-red-5": unref(user).userInfo.isPhoneVerified === 0 })}">${ssrInterpolate(unref(user).userInfo.phone || "\u8FD8\u672A\u7ED1\u5B9A")}</small></small><small class="cursor-pointer transition-300 hover:text-[var(--el-color-primary)]">${ssrInterpolate(unref(user).userInfo.isPhoneVerified ? "\u4FEE\u6539\u624B\u673A\u53F7" : "\u7ED1\u5B9A")}</small></div><div ml-1 mt-6 flex-row-bt-c><small> \u90AE\u2003\u7BB1\uFF1A <small opacity-80 class="${ssrRenderClass({ "text-red-5": unref(user).userInfo.isEmailVerified === 0 })}">${ssrInterpolate(unref(user).userInfo.email || "\u8FD8\u672A\u7ED1\u5B9A")}</small></small><small class="cursor-pointer transition-300 hover:text-[var(--el-color-primary)]">${ssrInterpolate(unref(user).userInfo.isEmailVerified ? "\u4FEE\u6539\u90AE\u7BB1" : "\u7ED1\u5B9A")}</small></div><div mt-a w-full>`);
      _push(ssrRenderComponent(_component_ElDivider, { class: "dark:opacity-20" }, null, _parent));
      _push(`<div mb-1 flex-row-bt-c justify-end>`);
      _push(ssrRenderComponent(_component_el_text, {
        style: { "margin-left": "1rem" },
        class: "cursor-pointer transition-300 hover:text-[var(--el-color-primar)y]",
        onClick: ($event) => ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).warning("\u529F\u80FD\u8FD8\u672A\u5F00\u653E!")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6CE8\u9500 `);
          } else {
            return [
              createTextVNode(" \u6CE8\u9500 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_text, {
        style: { "margin-left": "1rem" },
        class: "cursor-pointer transition-300 hover:text-[var(--el-color-primar)y]",
        type: "danger",
        onClick: toExistLogin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u9000\u51FA\u767B\u5F55 `);
          } else {
            return [
              createTextVNode(" \u9000\u51FA\u767B\u5F55 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UserSafeDialog, {
        modelValue: unref(form),
        "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/safe/UpdateCards.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "safe",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    useHead({
      title: `\u8D26\u53F7\u4E0E\u5B89\u5168 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`,
      meta: [
        {
          name: "description",
          content: `\u8D26\u53F7\u4E0E\u5B89\u5168 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_2$1$1;
      const _component_UserSafeDeviceList = __nuxt_component_2$1;
      const _component_UserSafeUpdateCards = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "user",
        menu: ["back"],
        footer: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  unref(user).isLogin ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex flex-col layout-default"
                  }, [
                    createVNode("div", {
                      class: "animate__animated title animate-fade-in-down animate-duration-400",
                      "mt-3": ""
                    }, [
                      createVNode("h2", { "tracking-1": "" }, " \u8D26\u6237\u4E0E\u5B89\u5168 ")
                    ]),
                    createVNode("div", { class: "flex flex-col-reverse grid-gap-6 md:grid md:grid-cols-2" }, [
                      createVNode(_component_UserSafeDeviceList, { "mt-4": "" }),
                      createVNode(_component_UserSafeUpdateCards, { "mt-4": "" })
                    ])
                  ])) : createCommentVNode("", true)
                ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/safe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=safe-IgNhWwO0.mjs.map
