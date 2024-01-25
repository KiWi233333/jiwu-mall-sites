import { b as _export_sfc, k as useSettingStore, c as useSeoMeta, d as appKeywords, z as useModeToggle, _ as __nuxt_component_0, e as __nuxt_component_2 } from '../server.mjs';
import { E as ElDivider } from './divider-SNINqp0P.mjs';
import { E as ElSelect, a as ElOption } from './index-1UBKVkQQ.mjs';
import { E as ElRadioGroup, b as ElRadioButton } from './index-vwoBdBES.mjs';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import { useSSRContext, defineComponent, ref, withCtx, mergeProps, unref, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, withDirectives, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { E as ElNotification } from './index-481vqEaW.mjs';
import { w as watchDebounced } from './index-daJZwzbi.mjs';
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
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './index-gZoFaHmS.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-r09CvUzW.mjs';
import './index-nLRih88y.mjs';
import './event-JIBAhsR9.mjs';
import './scrollbar-uIUdvs5K.mjs';
import './index-Ve7Fq5RY.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-RvHFA2kt.mjs';
import './index-0Uz170Jh.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "setting",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const setting2 = useSettingStore();
    watchDebounced(() => setting2.settingPage.fontFamily.value, (val) => {
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
    watchDebounced(() => setting2.settingPage.modeToggle.value, async (val) => {
      if (val && void 0) {
        if (val)
          useModeToggle(val, val === "auto" ? void 0 : theEvent.value);
      }
    });
    useSeoMeta({
      title: "\u8BBE\u7F6E - \u804A\u5929 - \u6781\u7269\u5708 \u{1F451}",
      description: "\u8BBE\u7F6E - \u804A\u5929 - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: appKeywords
    });
    function onSave() {
      ElNotification.success("\u4FDD\u5B58\u6210\u529F\uFF01");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ElDivider = ElDivider;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_BtnElButton = __nuxt_component_2;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-13505e03>`);
      _push(ssrRenderComponent(_component_NuxtLayout, { name: "chat" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${ssrRenderAttrs(mergeProps({ class: "my-8 flex flex-1 flex-col p-4 layout-default-se md:p-6" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))))} data-v-13505e03${_scopeId}><h3 flex items-center data-v-13505e03${_scopeId}> \u7CFB\u7EDF\u8BBE\u7F6E <i i-solar:settings-bold ml-2 inline-block p0.6em opacity-60 hover:animate-spin data-v-13505e03${_scopeId}></i></h3>`);
            _push2(ssrRenderComponent(_component_ElDivider, { class: "opacity-60" }, null, _parent2, _scopeId));
            _push2(`<section text-0.9rem grid="~ cols-1 gap-4" data-v-13505e03${_scopeId}><div class="group flex-row-bt-c" data-v-13505e03${_scopeId}> \u5B57\u4F53\u8BBE\u7F6E `);
            _push2(ssrRenderComponent(_component_el_select, {
              modelValue: unref(setting2).settingPage.fontFamily.value,
              "onUpdate:modelValue": ($event) => unref(setting2).settingPage.fontFamily.value = $event,
              teleported: false,
              disabled: unref(isLoading),
              class: "inputs w-12rem",
              placeholder: "\u8BF7\u9009\u62E9\u4E3B\u9898\u5B57\u4F53"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(setting2).settingPage.fontFamily.list, (item) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key: item.value,
                      label: item.name,
                      value: item.value
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(setting2).settingPage.fontFamily.list, (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.value,
                        label: item.name,
                        value: item.value
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="group flex-row-bt-c" data-v-13505e03${_scopeId}> \u6DF1\u8272\u6A21\u5F0F `);
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(setting2).settingPage.modeToggle.value,
              "onUpdate:modelValue": ($event) => unref(setting2).settingPage.modeToggle.value = $event,
              class: "inputs w-12rem",
              disabled: unref(isLoading),
              onClick: (e) => theEvent.value = e
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(setting2).settingPage.modeToggle.list, (p) => {
                    _push3(ssrRenderComponent(_component_el_radio_button, {
                      key: p.value,
                      disabled: unref(isLoading),
                      class: "flex-1",
                      label: p.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(p.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(p.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(setting2).settingPage.modeToggle.list, (p) => {
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section><div class="btns mt-a flex-row-bt-c" data-v-13505e03${_scopeId}><i data-v-13505e03${_scopeId}></i>`);
            _push2(ssrRenderComponent(_component_BtnElButton, {
              class: "ml-a shadow",
              "icon-class": "i-solar:diskette-bold",
              type: "info",
              "transition-icon": true,
              round: "",
              onClick: onSave
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u4FDD\u5B58 `);
                } else {
                  return [
                    createTextVNode(" \u4FDD\u5B58 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></main>`);
          } else {
            return [
              withDirectives((openBlock(), createBlock("main", { class: "my-8 flex flex-1 flex-col p-4 layout-default-se md:p-6" }, [
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
                      modelValue: unref(setting2).settingPage.fontFamily.value,
                      "onUpdate:modelValue": ($event) => unref(setting2).settingPage.fontFamily.value = $event,
                      teleported: false,
                      disabled: unref(isLoading),
                      class: "inputs w-12rem",
                      placeholder: "\u8BF7\u9009\u62E9\u4E3B\u9898\u5B57\u4F53"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(setting2).settingPage.fontFamily.list, (item) => {
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
                      modelValue: unref(setting2).settingPage.modeToggle.value,
                      "onUpdate:modelValue": ($event) => unref(setting2).settingPage.modeToggle.value = $event,
                      class: "inputs w-12rem",
                      disabled: unref(isLoading),
                      onClick: (e) => theEvent.value = e
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(setting2).settingPage.modeToggle.list, (p) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-13505e03"]]);

export { setting as default };
//# sourceMappingURL=setting-Pgw68NPd.mjs.map
