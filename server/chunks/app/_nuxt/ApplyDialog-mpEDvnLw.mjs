import { E as ElDialog } from './dialog-ti9X6b9G.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-Q_ZiRZvp.mjs';
import { E as ElInput } from './index-nLRih88y.mjs';
import { u as useUserStore, S as StatusCode, h as ElButton } from '../server.mjs';
import { defineComponent, computed, ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, withKeys, useSSRContext } from 'vue';
import { l as addFriendApply } from './contact-P14VjAlc.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { E as ElNotification } from './index-481vqEaW.mjs';
import '@vue/shared';
import './vnode-YsXVLyOk.mjs';
import './index-RvHFA2kt.mjs';
import 'lodash-unified';
import './focus-trap-r09CvUzW.mjs';
import './aria-sbEPrgvQ.mjs';
import './event-JIBAhsR9.mjs';
import '@vue/reactivity';
import './index-daJZwzbi.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';
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
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './useWs-5ZaJHe2X.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ApplyDialog",
  __ssrInlineRender: true,
  props: {
    show: { type: [Boolean, null] },
    userId: {}
  },
  emits: ["update:show", "submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isShowApply = computed({
      get: () => props.show !== void 0 && props.show === true,
      set: (value) => emit("update:show", value)
    });
    const applyFormRef = ref();
    const applyForm = ref({
      msg: "",
      targetUid: ""
    });
    const user = useUserStore();
    async function addFrendApplyById() {
      var _a;
      (_a = applyFormRef == null ? void 0 : applyFormRef.value) == null ? void 0 : _a.validate(async (valid) => {
        if (!valid || !props.userId)
          return;
        const res = await addFriendApply({
          ...applyForm.value,
          targetUid: props.userId
        }, user.getToken);
        isShowApply.value = false;
        if (res.code !== StatusCode.SUCCESS)
          return;
        applyForm.value = {
          msg: "",
          targetUid: ""
        };
        emit("submit", props.userId);
        ElNotification.success("\u597D\u53CB\u7533\u8BF7\u5DF2\u53D1\u9001\uFF01");
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(isShowApply),
        "onUpdate:modelValue": ($event) => isRef(isShowApply) ? isShowApply.value = $event : null,
        title: "\u597D\u53CB\u7533\u8BF7",
        width: "fit-content",
        center: "",
        "append-to-body": ""
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="dialog-footer"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_button, {
              onClick: ($event) => isShowApply.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u53D6\u6D88`);
                } else {
                  return [
                    createTextVNode("\u53D6\u6D88")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "primary",
              onClick: addFrendApplyById
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D1\u8D77\u7533\u8BF7 `);
                } else {
                  return [
                    createTextVNode(" \u53D1\u8D77\u7533\u8BF7 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "dialog-footer" }, [
                createVNode(_component_el_button, {
                  onClick: ($event) => isShowApply.value = false
                }, {
                  default: withCtx(() => [
                    createTextVNode("\u53D6\u6D88")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_el_button, {
                  type: "primary",
                  onClick: addFrendApplyById
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u53D1\u8D77\u7533\u8BF7 ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "applyFormRef",
              ref: applyFormRef,
              model: unref(applyForm)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "",
                    prop: "msg",
                    rules: [
                      {
                        min: 1,
                        max: 50,
                        trigger: ["blur", "change"],
                        message: "\u7533\u8BF7\u7406\u75311-50\u5B57\u7B26\uFF01"
                      },
                      {
                        required: true,
                        trigger: ["blur"],
                        message: "\u7533\u8BF7\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                      }
                    ],
                    class: "w-20rem"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_input, {
                          modelValue: unref(applyForm).msg,
                          "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                          type: "textarea",
                          rows: 4,
                          placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                          onKeyup: addFrendApplyById
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_input, {
                            modelValue: unref(applyForm).msg,
                            "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                            type: "textarea",
                            rows: 4,
                            placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                            onKeyup: withKeys(addFrendApplyById, ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_form_item, {
                      label: "",
                      prop: "msg",
                      rules: [
                        {
                          min: 1,
                          max: 50,
                          trigger: ["blur", "change"],
                          message: "\u7533\u8BF7\u7406\u75311-50\u5B57\u7B26\uFF01"
                        },
                        {
                          required: true,
                          trigger: ["blur"],
                          message: "\u7533\u8BF7\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                        }
                      ],
                      class: "w-20rem"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_input, {
                          modelValue: unref(applyForm).msg,
                          "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                          type: "textarea",
                          rows: 4,
                          placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                          onKeyup: withKeys(addFrendApplyById, ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form, {
                ref_key: "applyFormRef",
                ref: applyFormRef,
                model: unref(applyForm)
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, {
                    label: "",
                    prop: "msg",
                    rules: [
                      {
                        min: 1,
                        max: 50,
                        trigger: ["blur", "change"],
                        message: "\u7533\u8BF7\u7406\u75311-50\u5B57\u7B26\uFF01"
                      },
                      {
                        required: true,
                        trigger: ["blur"],
                        message: "\u7533\u8BF7\u7406\u7531\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                      }
                    ],
                    class: "w-20rem"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_input, {
                        modelValue: unref(applyForm).msg,
                        "onUpdate:modelValue": ($event) => unref(applyForm).msg = $event,
                        type: "textarea",
                        rows: 4,
                        placeholder: "\u53D1\u9001\u4E00\u6761\u6709\u8DA3\u7684\u95EE\u5019\u8BED\u5427~",
                        onKeyup: withKeys(addFrendApplyById, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Friend/ApplyDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ApplyDialog-mpEDvnLw.mjs.map
