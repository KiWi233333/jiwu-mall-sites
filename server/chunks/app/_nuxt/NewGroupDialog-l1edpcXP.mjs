import { E as ElDialog } from './dialog-ti9X6b9G.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-Q_ZiRZvp.mjs';
import { a as ElCheckboxGroup, E as ElCheckbox } from './checkbox-grGLuZ3r.mjs';
import { E as ElScrollbar } from './scrollbar-uIUdvs5K.mjs';
import { _ as _sfc_main$1 } from './AutoIncre-nAzYjQ1D.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { b as _export_sfc, u as useUserStore, B as BaseUrlImg, E as ElMessage, S as StatusCode, h as ElButton } from '../server.mjs';
import { _ as __nuxt_component_9 } from './OssFileUpload-RLGBsbrF.mjs';
import { u as useChatStore, a as getChatFriendPage } from './contact-P14VjAlc.mjs';
import { useSSRContext, defineComponent, computed, ref, resolveDirective, mergeProps, unref, isRef, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, vShow, createCommentVNode } from 'vue';
import { a as addGroupMember, b as addNewGroupRoom } from './index-1Zpr1Kk6.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
import './PreLoading-Jnbo7kLW.mjs';
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
import './index-nLRih88y.mjs';
import './progress-Y_Nip7T-.mjs';
import './index-Md2P4aBV.mjs';
import 'qiniu-js';
import './useWs-5ZaJHe2X.mjs';
import './index-vwoBdBES.mjs';
import './index-Ve7Fq5RY.mjs';
import './index-1UBKVkQQ.mjs';
import './index-gZoFaHmS.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-0Uz170Jh.mjs';
import './nuxt-link-qWvYy4Gj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NewGroupDialog",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const user = useUserStore();
    useChatStore();
    const show = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    });
    const form = ref({
      roomId: null,
      avatar: null,
      uidList: []
    });
    const formRef = ref();
    function addGroupApply() {
      var _a;
      (_a = formRef == null ? void 0 : formRef.value) == null ? void 0 : _a.validate(async (valid) => {
        if (!valid)
          return;
        let res;
        if (form.value.roomId) {
          res = await addGroupMember({
            ...form.value
          }, user.getToken);
        } else {
          res = await addNewGroupRoom({
            ...form.value
          }, user.getToken);
        }
        if (res.code !== StatusCode.SUCCESS)
          return;
        show.value = false;
        ElNotification.success({
          title: "\u53D1\u8D77\u9080\u8BF7\u63D0\u9192",
          message: +res.data === form.value.uidList.length ? "\u7FA4\u804A\u9080\u8BF7\u5DF2\u53D1\u9001\uFF01" : "\u90E8\u5206\u9080\u8BF7\u672A\u9001\u8FBE\uFF01"
        });
      });
    }
    const isLoading = ref(false);
    const pageInfo = ref({
      cursor: null,
      isLast: false,
      size: 10,
      total: -1
    });
    const userList = ref([]);
    async function loadData() {
      if (isLoading.value || pageInfo.value.isLast)
        return;
      isLoading.value = true;
      const { data } = await getChatFriendPage(pageInfo.value.size, pageInfo.value.cursor, user.getToken);
      if (data.list)
        userList.value.push(...data.list);
      pageInfo.value.isLast = data.isLast;
      pageInfo.value.cursor = data.cursor;
      isLoading.value = false;
    }
    loadData();
    const getCheckList = computed(() => {
      const uidList = new Set(form.value.uidList);
      return userList.value.filter((item) => uidList.has(item.userId));
    });
    function remove(id) {
      form.value.uidList = form.value.uidList.filter((item) => item !== id);
    }
    const showImg = ref(false);
    const inputOssFileUploadRef = ref();
    function onSubmitImages(key, pathList, fileList) {
      form.value.avatar = key;
    }
    function reload(uidList = []) {
      form.value.roomId = null;
      form.value.uidList = uidList;
      form.value.avatar = null;
      showImg.value = false;
    }
    reload();
    function next() {
      if (form.value.roomId) {
        addGroupApply();
      } else {
        if (form.value.uidList.length <= 0)
          return ElMessage.warning("\u8BF7\u9009\u62E9\u6210\u5458");
        showImg.value = true;
      }
    }
    __expose({
      form,
      reload
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_scrollbar = ElScrollbar;
      const _component_ListAutoIncre = _sfc_main$1;
      const _component_el_checkbox = ElCheckbox;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_button = ElButton;
      const _component_InputOssFileUpload = __nuxt_component_9;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(show),
        "onUpdate:modelValue": ($event) => isRef(show) ? show.value = $event : null,
        title: unref(form).roomId ? "\u9080\u8BF7\u6210\u5458" : "\u65B0\u5EFA\u7FA4\u804A",
        width: "fit-content",
        class: "overflow-hidden",
        center: "",
        "append-to-body": ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form, {
              ref_key: "formRef",
              ref: formRef,
              "label-position": "top",
              model: unref(form),
              class: "relative max-h-400px flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_auto_animate))} data-v-43dfb6f2${_scopeId2}><div style="${ssrRenderStyle(!unref(showImg) ? null : { display: "none" })}" class="w-90vw flex md:w-800px" data-v-43dfb6f2${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u597D\u53CB\u5217\u8868",
                    class: "left flex-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_checkbox_group, {
                          modelValue: unref(form).uidList,
                          "onUpdate:modelValue": ($event) => unref(form).uidList = $event,
                          class: "w-full"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_el_scrollbar, {
                                height: "350px",
                                "wrap-class": "pr-2 w-full"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div flex flex-col data-v-43dfb6f2${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_ListAutoIncre, {
                                      immediate: true,
                                      "auto-stop": true,
                                      "no-more": unref(pageInfo).isLast,
                                      loading: unref(isLoading),
                                      onLoad: loadData
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(unref(userList), (p) => {
                                            _push7(ssrRenderComponent(_component_el_checkbox, {
                                              key: p.userId,
                                              class: "check-item mb-2",
                                              value: p.userId,
                                              label: p.userId,
                                              style: { "width": "100%", "height": "fit-content" }
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`<div class="w-full flex items-center gap-2" data-v-43dfb6f2${_scopeId7}><div class="avatar-icon" data-v-43dfb6f2${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(_component_CardElImage, {
                                                    class: "h-full w-full overflow-hidden rounded-6px",
                                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                    fit: "cover"
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(`</div><strong truncate data-v-43dfb6f2${_scopeId7}>${ssrInterpolate(p.nickName || "\u672A\u586B\u5199")}</strong></div>`);
                                                } else {
                                                  return [
                                                    createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                      createVNode("div", { class: "avatar-icon" }, [
                                                        createVNode(_component_CardElImage, {
                                                          class: "h-full w-full overflow-hidden rounded-6px",
                                                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                          fit: "cover"
                                                        }, null, 8, ["src"])
                                                      ]),
                                                      createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                                    ])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                                              return openBlock(), createBlock(_component_el_checkbox, {
                                                key: p.userId,
                                                class: "check-item mb-2",
                                                value: p.userId,
                                                label: p.userId,
                                                style: { "width": "100%", "height": "fit-content" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                    createVNode("div", { class: "avatar-icon" }, [
                                                      createVNode(_component_CardElImage, {
                                                        class: "h-full w-full overflow-hidden rounded-6px",
                                                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                        fit: "cover"
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "label"]);
                                            }), 128))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        flex: "",
                                        "flex-col": ""
                                      }, [
                                        createVNode(_component_ListAutoIncre, {
                                          immediate: true,
                                          "auto-stop": true,
                                          "no-more": unref(pageInfo).isLast,
                                          loading: unref(isLoading),
                                          onLoad: loadData
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                                              return openBlock(), createBlock(_component_el_checkbox, {
                                                key: p.userId,
                                                class: "check-item mb-2",
                                                value: p.userId,
                                                label: p.userId,
                                                style: { "width": "100%", "height": "fit-content" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                    createVNode("div", { class: "avatar-icon" }, [
                                                      createVNode(_component_CardElImage, {
                                                        class: "h-full w-full overflow-hidden rounded-6px",
                                                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                        fit: "cover"
                                                      }, null, 8, ["src"])
                                                    ]),
                                                    createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                                  ])
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "label"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["no-more", "loading"])
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_el_scrollbar, {
                                  height: "350px",
                                  "wrap-class": "pr-2 w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      flex: "",
                                      "flex-col": ""
                                    }, [
                                      createVNode(_component_ListAutoIncre, {
                                        immediate: true,
                                        "auto-stop": true,
                                        "no-more": unref(pageInfo).isLast,
                                        loading: unref(isLoading),
                                        onLoad: loadData
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                                            return openBlock(), createBlock(_component_el_checkbox, {
                                              key: p.userId,
                                              class: "check-item mb-2",
                                              value: p.userId,
                                              label: p.userId,
                                              style: { "width": "100%", "height": "fit-content" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                  createVNode("div", { class: "avatar-icon" }, [
                                                    createVNode(_component_CardElImage, {
                                                      class: "h-full w-full overflow-hidden rounded-6px",
                                                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                      fit: "cover"
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "label"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["no-more", "loading"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_checkbox_group, {
                            modelValue: unref(form).uidList,
                            "onUpdate:modelValue": ($event) => unref(form).uidList = $event,
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_scrollbar, {
                                height: "350px",
                                "wrap-class": "pr-2 w-full"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    flex: "",
                                    "flex-col": ""
                                  }, [
                                    createVNode(_component_ListAutoIncre, {
                                      immediate: true,
                                      "auto-stop": true,
                                      "no-more": unref(pageInfo).isLast,
                                      loading: unref(isLoading),
                                      onLoad: loadData
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                                          return openBlock(), createBlock(_component_el_checkbox, {
                                            key: p.userId,
                                            class: "check-item mb-2",
                                            value: p.userId,
                                            label: p.userId,
                                            style: { "width": "100%", "height": "fit-content" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                createVNode("div", { class: "avatar-icon" }, [
                                                  createVNode(_component_CardElImage, {
                                                    class: "h-full w-full overflow-hidden rounded-6px",
                                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                    fit: "cover"
                                                  }, null, 8, ["src"])
                                                ]),
                                                createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "label"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["no-more", "loading"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_form_item, {
                    label: "\u5DF2\u9009\u597D\u53CB",
                    prop: "uidList",
                    rules: [
                      {
                        required: true,
                        trigger: ["blur"],
                        message: "\u7FA4\u6210\u5458\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                      }
                    ],
                    class: "right flex-1 pb-2rem",
                    style: { "display": "flex", "flex-direction": "column" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_scrollbar, {
                          style: { "width": "100%" },
                          height: "300px",
                          "view-class": "min-h-full bg-light items-start w-full v-card grid grid-cols-5 gap-4 p-2 dark:bg-dark-9 mt-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(getCheckList), (p) => {
                                _push5(`<div class="item relative flex-col truncate p-2"${ssrRenderAttr("label", p.userId)} data-v-43dfb6f2${_scopeId4}><i i-solar:close-circle-bold p-2 btn-primary class="absolute right-0 top-0 z-1" data-v-43dfb6f2${_scopeId4}></i><div class="avatar-icon" data-v-43dfb6f2${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_CardElImage, {
                                  class: "h-full w-full overflow-hidden rounded-6px",
                                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                  fit: "cover"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><span data-v-43dfb6f2${_scopeId4}>${ssrInterpolate(p.nickName || "\u672A\u586B\u5199")}</span></div>`);
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(getCheckList), (p) => {
                                  return openBlock(), createBlock("div", {
                                    key: p.userId,
                                    class: "item relative flex-col truncate p-2",
                                    label: p.userId
                                  }, [
                                    createVNode("i", {
                                      "i-solar:close-circle-bold": "",
                                      "p-2": "",
                                      "btn-primary": "",
                                      class: "absolute right-0 top-0 z-1",
                                      onClick: ($event) => remove(p.userId)
                                    }, null, 8, ["onClick"]),
                                    createVNode("div", { class: "avatar-icon" }, [
                                      createVNode(_component_CardElImage, {
                                        class: "h-full w-full overflow-hidden rounded-6px",
                                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                        fit: "cover"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("span", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                  ], 8, ["label"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div mt-a w-full flex-row-c-c data-v-43dfb6f2${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_el_button, {
                          class: "w-1/3",
                          onClick: ($event) => show.value = false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u53D6\u6D88 `);
                            } else {
                              return [
                                createTextVNode(" \u53D6\u6D88 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_button, {
                          class: "w-1/3",
                          type: unref(form).roomId ? "warning" : "info",
                          onClick: ($event) => next()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(form).roomId ? "\u9080\u8BF7" : "\u4E0B\u4E00\u6B65")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(form).roomId ? "\u9080\u8BF7" : "\u4E0B\u4E00\u6B65"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_el_scrollbar, {
                            style: { "width": "100%" },
                            height: "300px",
                            "view-class": "min-h-full bg-light items-start w-full v-card grid grid-cols-5 gap-4 p-2 dark:bg-dark-9 mt-0"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(getCheckList), (p) => {
                                return openBlock(), createBlock("div", {
                                  key: p.userId,
                                  class: "item relative flex-col truncate p-2",
                                  label: p.userId
                                }, [
                                  createVNode("i", {
                                    "i-solar:close-circle-bold": "",
                                    "p-2": "",
                                    "btn-primary": "",
                                    class: "absolute right-0 top-0 z-1",
                                    onClick: ($event) => remove(p.userId)
                                  }, null, 8, ["onClick"]),
                                  createVNode("div", { class: "avatar-icon" }, [
                                    createVNode(_component_CardElImage, {
                                      class: "h-full w-full overflow-hidden rounded-6px",
                                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                      fit: "cover"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("span", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                ], 8, ["label"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode("div", {
                            "mt-a": "",
                            "w-full": "",
                            "flex-row-c-c": ""
                          }, [
                            createVNode(_component_el_button, {
                              class: "w-1/3",
                              onClick: ($event) => show.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u53D6\u6D88 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_el_button, {
                              class: "w-1/3",
                              type: unref(form).roomId ? "warning" : "info",
                              onClick: ($event) => next()
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).roomId ? "\u9080\u8BF7" : "\u4E0B\u4E00\u6B65"), 1)
                              ]),
                              _: 1
                            }, 8, ["type", "onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(showImg)) {
                    _push3(`<div class="h-300px w-90vw flex-row-c-c flex-col md:w-400px" data-v-43dfb6f2${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_form_item, {
                      label: "\u7FA4\u5934\u50CF",
                      prop: "avatar",
                      rules: [
                        {
                          required: true,
                          trigger: ["blur"],
                          message: "\u7FA4\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                        }
                      ],
                      class: "right flex-1 pb-2rem",
                      style: { "display": "flex", "flex-direction": "column" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_InputOssFileUpload, {
                            ref_key: "inputOssFileUploadRef",
                            ref: inputOssFileUploadRef,
                            key: "inputOssFileUploadRef",
                            multiple: false,
                            limit: 1,
                            "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                            "upload-quality": 0.4,
                            onErrorMsg: (msg) => {
                              ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                            },
                            onSubmit: onSubmitImages
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_InputOssFileUpload, {
                              ref_key: "inputOssFileUploadRef",
                              ref: inputOssFileUploadRef,
                              key: "inputOssFileUploadRef",
                              multiple: false,
                              limit: 1,
                              "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                              "upload-quality": 0.4,
                              onErrorMsg: (msg) => {
                                ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                              },
                              onSubmit: onSubmitImages
                            }, null, 8, ["onErrorMsg"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div mt-a w-full flex-row-c-c data-v-43dfb6f2${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_button, {
                      class: "w-1/5",
                      onClick: ($event) => showImg.value = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u4E0A\u4E00\u6B65 `);
                        } else {
                          return [
                            createTextVNode(" \u4E0A\u4E00\u6B65 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_el_button, {
                      class: "w-1/5",
                      type: unref(form).roomId ? "warning" : "info",
                      onClick: ($event) => addGroupApply()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u5B8C\u6210 `);
                        } else {
                          return [
                            createTextVNode(" \u5B8C\u6210 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    withDirectives((openBlock(), createBlock("div", null, [
                      withDirectives(createVNode("div", {
                        key: "left",
                        class: "w-90vw flex md:w-800px"
                      }, [
                        createVNode(_component_el_form_item, {
                          label: "\u597D\u53CB\u5217\u8868",
                          class: "left flex-1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_checkbox_group, {
                              modelValue: unref(form).uidList,
                              "onUpdate:modelValue": ($event) => unref(form).uidList = $event,
                              class: "w-full"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_scrollbar, {
                                  height: "350px",
                                  "wrap-class": "pr-2 w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      flex: "",
                                      "flex-col": ""
                                    }, [
                                      createVNode(_component_ListAutoIncre, {
                                        immediate: true,
                                        "auto-stop": true,
                                        "no-more": unref(pageInfo).isLast,
                                        loading: unref(isLoading),
                                        onLoad: loadData
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                                            return openBlock(), createBlock(_component_el_checkbox, {
                                              key: p.userId,
                                              class: "check-item mb-2",
                                              value: p.userId,
                                              label: p.userId,
                                              style: { "width": "100%", "height": "fit-content" }
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                  createVNode("div", { class: "avatar-icon" }, [
                                                    createVNode(_component_CardElImage, {
                                                      class: "h-full w-full overflow-hidden rounded-6px",
                                                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                      fit: "cover"
                                                    }, null, 8, ["src"])
                                                  ]),
                                                  createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                                ])
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "label"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["no-more", "loading"])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_form_item, {
                          label: "\u5DF2\u9009\u597D\u53CB",
                          prop: "uidList",
                          rules: [
                            {
                              required: true,
                              trigger: ["blur"],
                              message: "\u7FA4\u6210\u5458\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                            }
                          ],
                          class: "right flex-1 pb-2rem",
                          style: { "display": "flex", "flex-direction": "column" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_scrollbar, {
                              style: { "width": "100%" },
                              height: "300px",
                              "view-class": "min-h-full bg-light items-start w-full v-card grid grid-cols-5 gap-4 p-2 dark:bg-dark-9 mt-0"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(getCheckList), (p) => {
                                  return openBlock(), createBlock("div", {
                                    key: p.userId,
                                    class: "item relative flex-col truncate p-2",
                                    label: p.userId
                                  }, [
                                    createVNode("i", {
                                      "i-solar:close-circle-bold": "",
                                      "p-2": "",
                                      "btn-primary": "",
                                      class: "absolute right-0 top-0 z-1",
                                      onClick: ($event) => remove(p.userId)
                                    }, null, 8, ["onClick"]),
                                    createVNode("div", { class: "avatar-icon" }, [
                                      createVNode(_component_CardElImage, {
                                        class: "h-full w-full overflow-hidden rounded-6px",
                                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                        fit: "cover"
                                      }, null, 8, ["src"])
                                    ]),
                                    createVNode("span", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                  ], 8, ["label"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode("div", {
                              "mt-a": "",
                              "w-full": "",
                              "flex-row-c-c": ""
                            }, [
                              createVNode(_component_el_button, {
                                class: "w-1/3",
                                onClick: ($event) => show.value = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u53D6\u6D88 ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_el_button, {
                                class: "w-1/3",
                                type: unref(form).roomId ? "warning" : "info",
                                onClick: ($event) => next()
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(form).roomId ? "\u9080\u8BF7" : "\u4E0B\u4E00\u6B65"), 1)
                                ]),
                                _: 1
                              }, 8, ["type", "onClick"])
                            ])
                          ]),
                          _: 1
                        })
                      ], 512), [
                        [vShow, !unref(showImg)]
                      ]),
                      unref(showImg) ? (openBlock(), createBlock("div", {
                        key: "2",
                        class: "h-300px w-90vw flex-row-c-c flex-col md:w-400px"
                      }, [
                        createVNode(_component_el_form_item, {
                          label: "\u7FA4\u5934\u50CF",
                          prop: "avatar",
                          rules: [
                            {
                              required: true,
                              trigger: ["blur"],
                              message: "\u7FA4\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                            }
                          ],
                          class: "right flex-1 pb-2rem",
                          style: { "display": "flex", "flex-direction": "column" }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_InputOssFileUpload, {
                              ref_key: "inputOssFileUploadRef",
                              ref: inputOssFileUploadRef,
                              key: "inputOssFileUploadRef",
                              multiple: false,
                              limit: 1,
                              "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                              "upload-quality": 0.4,
                              onErrorMsg: (msg) => {
                                ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                              },
                              onSubmit: onSubmitImages
                            }, null, 8, ["onErrorMsg"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", {
                          "mt-a": "",
                          "w-full": "",
                          "flex-row-c-c": ""
                        }, [
                          createVNode(_component_el_button, {
                            class: "w-1/5",
                            onClick: ($event) => showImg.value = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u4E0A\u4E00\u6B65 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_el_button, {
                            class: "w-1/5",
                            type: unref(form).roomId ? "warning" : "info",
                            onClick: ($event) => addGroupApply()
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5B8C\u6210 ")
                            ]),
                            _: 1
                          }, 8, ["type", "onClick"])
                        ])
                      ])) : createCommentVNode("", true)
                    ])), [
                      [_directive_auto_animate]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form, {
                ref_key: "formRef",
                ref: formRef,
                "label-position": "top",
                model: unref(form),
                class: "relative max-h-400px flex"
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock("div", null, [
                    withDirectives(createVNode("div", {
                      key: "left",
                      class: "w-90vw flex md:w-800px"
                    }, [
                      createVNode(_component_el_form_item, {
                        label: "\u597D\u53CB\u5217\u8868",
                        class: "left flex-1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_checkbox_group, {
                            modelValue: unref(form).uidList,
                            "onUpdate:modelValue": ($event) => unref(form).uidList = $event,
                            class: "w-full"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_scrollbar, {
                                height: "350px",
                                "wrap-class": "pr-2 w-full"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    flex: "",
                                    "flex-col": ""
                                  }, [
                                    createVNode(_component_ListAutoIncre, {
                                      immediate: true,
                                      "auto-stop": true,
                                      "no-more": unref(pageInfo).isLast,
                                      loading: unref(isLoading),
                                      onLoad: loadData
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(userList), (p) => {
                                          return openBlock(), createBlock(_component_el_checkbox, {
                                            key: p.userId,
                                            class: "check-item mb-2",
                                            value: p.userId,
                                            label: p.userId,
                                            style: { "width": "100%", "height": "fit-content" }
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "w-full flex items-center gap-2" }, [
                                                createVNode("div", { class: "avatar-icon" }, [
                                                  createVNode(_component_CardElImage, {
                                                    class: "h-full w-full overflow-hidden rounded-6px",
                                                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                                    fit: "cover"
                                                  }, null, 8, ["src"])
                                                ]),
                                                createVNode("strong", { truncate: "" }, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "label"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["no-more", "loading"])
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_form_item, {
                        label: "\u5DF2\u9009\u597D\u53CB",
                        prop: "uidList",
                        rules: [
                          {
                            required: true,
                            trigger: ["blur"],
                            message: "\u7FA4\u6210\u5458\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                          }
                        ],
                        class: "right flex-1 pb-2rem",
                        style: { "display": "flex", "flex-direction": "column" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_scrollbar, {
                            style: { "width": "100%" },
                            height: "300px",
                            "view-class": "min-h-full bg-light items-start w-full v-card grid grid-cols-5 gap-4 p-2 dark:bg-dark-9 mt-0"
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(getCheckList), (p) => {
                                return openBlock(), createBlock("div", {
                                  key: p.userId,
                                  class: "item relative flex-col truncate p-2",
                                  label: p.userId
                                }, [
                                  createVNode("i", {
                                    "i-solar:close-circle-bold": "",
                                    "p-2": "",
                                    "btn-primary": "",
                                    class: "absolute right-0 top-0 z-1",
                                    onClick: ($event) => remove(p.userId)
                                  }, null, 8, ["onClick"]),
                                  createVNode("div", { class: "avatar-icon" }, [
                                    createVNode(_component_CardElImage, {
                                      class: "h-full w-full overflow-hidden rounded-6px",
                                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.avatar,
                                      fit: "cover"
                                    }, null, 8, ["src"])
                                  ]),
                                  createVNode("span", null, toDisplayString(p.nickName || "\u672A\u586B\u5199"), 1)
                                ], 8, ["label"]);
                              }), 128))
                            ]),
                            _: 1
                          }),
                          createVNode("div", {
                            "mt-a": "",
                            "w-full": "",
                            "flex-row-c-c": ""
                          }, [
                            createVNode(_component_el_button, {
                              class: "w-1/3",
                              onClick: ($event) => show.value = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u53D6\u6D88 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_el_button, {
                              class: "w-1/3",
                              type: unref(form).roomId ? "warning" : "info",
                              onClick: ($event) => next()
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(form).roomId ? "\u9080\u8BF7" : "\u4E0B\u4E00\u6B65"), 1)
                              ]),
                              _: 1
                            }, 8, ["type", "onClick"])
                          ])
                        ]),
                        _: 1
                      })
                    ], 512), [
                      [vShow, !unref(showImg)]
                    ]),
                    unref(showImg) ? (openBlock(), createBlock("div", {
                      key: "2",
                      class: "h-300px w-90vw flex-row-c-c flex-col md:w-400px"
                    }, [
                      createVNode(_component_el_form_item, {
                        label: "\u7FA4\u5934\u50CF",
                        prop: "avatar",
                        rules: [
                          {
                            required: true,
                            trigger: ["blur"],
                            message: "\u7FA4\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A\uFF01"
                          }
                        ],
                        class: "right flex-1 pb-2rem",
                        style: { "display": "flex", "flex-direction": "column" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_InputOssFileUpload, {
                            ref_key: "inputOssFileUploadRef",
                            ref: inputOssFileUploadRef,
                            key: "inputOssFileUploadRef",
                            multiple: false,
                            limit: 1,
                            "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                            "upload-quality": 0.4,
                            onErrorMsg: (msg) => {
                              ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                            },
                            onSubmit: onSubmitImages
                          }, null, 8, ["onErrorMsg"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", {
                        "mt-a": "",
                        "w-full": "",
                        "flex-row-c-c": ""
                      }, [
                        createVNode(_component_el_button, {
                          class: "w-1/5",
                          onClick: ($event) => showImg.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E0A\u4E00\u6B65 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_button, {
                          class: "w-1/5",
                          type: unref(form).roomId ? "warning" : "info",
                          onClick: ($event) => addGroupApply()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5B8C\u6210 ")
                          ]),
                          _: 1
                        }, 8, ["type", "onClick"])
                      ])
                    ])) : createCommentVNode("", true)
                  ])), [
                    [_directive_auto_animate]
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/NewGroupDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NewGroupDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43dfb6f2"]]);

export { NewGroupDialog as default };
//# sourceMappingURL=NewGroupDialog-l1edpcXP.mjs.map
