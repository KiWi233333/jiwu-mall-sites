import { b as _export_sfc, B as BaseUrlImg, u as useUserStore, S as StatusCode, aD as delete_default, n as navigateTo, Y as useHead, v as appName, f as ElMessageBox, E as ElMessage, g as ElButton, e as __nuxt_component_0$1, _ as __nuxt_component_0 } from '../server.mjs';
import { E as ElDivider } from './divider-PhlLqhAq.mjs';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { E as ElCheckbox, a as ElCheckboxGroup, b as ElCheckboxButton } from './checkbox-zYdk3J0T.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { _ as __nuxt_component_1 } from './ElImage-j3i6j_3Z.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, computed, resolveDirective, withCtx, createVNode, createTextVNode, isRef, toDisplayString, withDirectives, openBlock, createBlock, Fragment, renderList, createCommentVNode, reactive, vShow } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import currency from 'currency.js';
import { v as vLoading } from './loading-9ZJxhv9k.mjs';
import { u as useAsyncData } from './fetch-YS3Fxkuj.mjs';
import { a as getGoodsCollectList, t as toggleGoodsCollectStatus, d as deleteBatchGoodsCollectByIds } from './collect-jWDvukS4.mjs';
import { w as watchDebounced, t as toReactive } from './event-9ZI5GX64.mjs';
import { _ as _sfc_main$6 } from './AutoIncre-z4AO2g2Q.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { _ as _sfc_main$5 } from './TagList-M6KmsX63.mjs';
import { f as PostActionType, i as getCommPostActionPage, t as togglePostAction } from './post-uKGC7P8z.mjs';
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
import './PreLoading-Sou-hyZj.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GoodsCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["link", "cancel"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardElImage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group w-full flex flex-col cursor-pointer border-transparent rounded-4px dark:border-transparent"
      }, _attrs))}><div class="img relative h-8rem w-full overflow-hidden rounded-t-inherit md:h-9rem">`);
      _push(ssrRenderComponent(_component_CardElImage, {
        loading: "lazy",
        class: "h-full w-full",
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.goods.images[0],
        alt: _ctx.data.goods.name,
        fit: "cover",
        onClick: ($event) => _ctx.$emit("link")
      }, null, _parent));
      _push(`<div class="absolute left-0 top-0">`);
      ssrRenderSlot(_ctx.$slots, "btns", {}, null, _push, _parent);
      _push(`</div><small class="group absolute right-0 top-0 m-2 bg-light py-0.6 pl-2.6 pr-1.8 text-0.8rem text-black opacity-100 shadow v-card dark:text-light hover:text-[var(--el-color-danger)] group-hover:opacity-100 md:opacity-0"><div class="inline text-dark dark:text-light">\u53D6\u6D88\u6536\u85CF</div><i i-solar:star-bold ml-1 p-0.6em text-yellow-4></i></small><small class="view absolute bottom-0 left-0 z-1 w-full flex-row-bt-c bg-[var(--el-bg-color-primary)] px-3 py-1 color-light opacity-0 backdrop-blur-2em transition-300" group-hover:opacity-80><div class="icon"><i class="i-solar:eye-bold mr-1 p-2"></i> ${ssrInterpolate(_ctx.data.goods.views)}</div></small></div><div class="relative h-1/3 flex flex-col justify-between justify-around px-2 py-2 md:px-3"><h4 class="w-full truncate">${ssrInterpolate(_ctx.data.goods.name)}</h4><p color-red-5 class="texts"><strong pr-1>\uFFE5${ssrInterpolate(unref(currency)(_ctx.data.goods.price))}</strong><small hidden text-0.6em color-coolgray md:inline style="${ssrRenderStyle({
        "text-decoration": "line-through"
      })}"> \uFFE5${ssrInterpolate(unref(currency)(_ctx.data.goods.costPrice))}</small></p></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/collect/GoodsCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "GoodsList",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = ref(false);
    const isEdit = ref(false);
    const user = useUserStore();
    const list = useAsyncData(async () => {
      if (isLoading.value)
        return;
      const {
        data,
        code
      } = await getGoodsCollectList(user.getToken);
      data.forEach((item) => {
        item.goods.images = typeof item.goods.images === "string" ? item.goods.images.split(",") : [];
      });
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
      if (code === StatusCode.SUCCESS)
        return data;
      else
        return [];
    }, "$WFAnLQopP7");
    function cancelCollect(gId) {
      if (isLoading.value)
        return;
      ElMessageBox.confirm("\u662F\u5426\u53D6\u6D88\u6536\u85CF\uFF1F", "\u53D6\u6D88\u63D0\u793A", {
        confirmButtonText: "\u786E \u8BA4",
        confirmButtonClass: "el-button--warning is-plain border-default ",
        lockScroll: false,
        cancelButtonText: "\u53D6 \u6D88",
        center: true,
        callback: async (action) => {
          if (action === "confirm") {
            isLoading.value = true;
            const {
              code
            } = await toggleGoodsCollectStatus(gId, user.getToken);
            if (code === StatusCode.SUCCESS) {
              if (list.data.value) {
                for (let i = 0; i < list.data.value.length; i++) {
                  if (list.data.value[i].goods.id === gId) {
                    list.data.value.splice(i, 1);
                    break;
                  }
                }
              }
              ElMessage.success("\u53D6\u6D88\u6210\u529F\uFF01");
            } else {
              ElMessage.error("\u53D6\u6D88\u5931\u8D25\uFF01");
            }
          }
          isLoading.value = false;
        }
      });
    }
    const selectIdsList = ref([]);
    const isSelectAll = computed({
      get() {
        var _a;
        return selectIdsList.value.length === ((_a = list.data.value) == null ? void 0 : _a.length);
      },
      set(val) {
        var _a;
        if (val)
          selectIdsList.value = ((_a = list.data.value) == null ? void 0 : _a.map((p) => p.goods.id)) || [];
        else
          selectIdsList.value.splice(0);
      }
    });
    watchDebounced(isEdit, (val) => {
      if (!val)
        selectIdsList.value.splice(0);
    });
    function batchCancelCollect() {
      if (isLoading.value || selectIdsList.value.length === 0)
        return ElMessage.warning("\u8BF7\u9009\u4E2D\u53D6\u6D88\u7684\u5546\u54C1\uFF01");
      ElMessageBox.confirm(`\u662F\u5426\u53D6\u6D88${selectIdsList.value.length}\u4E2A\u5546\u54C1\u6536\u85CF\uFF1F`, "\u53D6\u6D88\u63D0\u793A", {
        confirmButtonText: "\u786E \u8BA4",
        confirmButtonClass: "el-button--danger  border-default ",
        cancelButtonText: "\u53D6 \u6D88",
        lockScroll: false,
        center: true,
        callback: async (action) => {
          if (action === "confirm") {
            const {
              code
            } = await deleteBatchGoodsCollectByIds(selectIdsList.value, user.getToken);
            if (code === StatusCode.SUCCESS) {
              if (list.data.value) {
                list.data.value.forEach((p, i) => {
                  if (selectIdsList.value.includes(p.goods.id) && list.data.value)
                    list.data.value.splice(i, 1);
                });
              }
              ElMessage.success("\u53D6\u6D88\u6210\u529F\uFF01");
            } else {
              ElMessage.error("\u53D6\u6D88\u5931\u8D25\uFF01");
            }
          }
        }
      });
    }
    async function reload() {
      isLoading.value = true;
      setTimeout(async () => {
        isLoading.value = false;
        await list.refresh();
      }, 300);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_button = ElButton;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_checkbox_button = ElCheckboxButton;
      const _component_UserCollectGoodsCard = _sfc_main$4;
      const _directive_auto_animate = resolveDirective("auto-animate");
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "overflow-x-hidden": ""
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading), void 0, {
        fullscreen: true,
        lock: true
      })))} data-v-4734e6cb><div class="mb-3 flex-row-bt-c" data-v-4734e6cb><small opacity-60 data-v-4734e6cb>\u64CD \u4F5C \uFF1A</small><div class="btns flex" data-v-4734e6cb><div class="${ssrRenderClass([{
        "w-14.8em": unref(isEdit)
      }, "w-0 flex justify-between overflow-hidden truncate opacity-80 transition-300 transition-width"])}" mr-2 data-v-4734e6cb>`);
      _push(ssrRenderComponent(_component_el_button, {
        size: "small",
        onClick: reload
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="i-solar:refresh-outline h-1em w-1em cursor-pointer bg-[var(--el-color-info)] transition-300 hover:rotate-180" mr-2 data-v-4734e6cb${_scopeId}></i> \u5237\u65B0 `);
          } else {
            return [createVNode("i", {
              class: "i-solar:refresh-outline h-1em w-1em cursor-pointer bg-[var(--el-color-info)] transition-300 hover:rotate-180",
              "mr-2": ""
            }), createTextVNode(" \u5237\u65B0 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_checkbox, {
        modelValue: unref(isSelectAll),
        "onUpdate:modelValue": ($event) => isRef(isSelectAll) ? isSelectAll.value = $event : null,
        border: true,
        label: "\u5168\u9009",
        size: "small"
      }, null, _parent));
      _push(ssrRenderComponent(_component_el_button, {
        plain: "",
        type: "danger",
        icon: "ElIconDelete" in _ctx ? _ctx.ElIconDelete : unref(delete_default),
        size: "small",
        onClick: batchCancelCollect
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u6279\u91CF <div hidden md:inline data-v-4734e6cb${_scopeId}> \u53D6\u6D88 </div>`);
          } else {
            return [createTextVNode(" \u6279\u91CF "), createVNode("div", {
              hidden: "",
              "md:inline": ""
            }, " \u53D6\u6D88 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_button, {
        size: "small",
        plain: "",
        type: "info",
        onClick: ($event) => isEdit.value = !unref(isEdit)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isEdit) ? "\u53D6\u6D88" : "\u7BA1\u7406")}`);
          } else {
            return [createTextVNode(toDisplayString(unref(isEdit) ? "\u53D6\u6D88" : "\u7BA1\u7406"), 1)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        height: "62vh",
        "overflow-x-hidden": "",
        "rounded-8px": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_checkbox_group, {
              modelValue: unref(selectIdsList),
              "onUpdate:modelValue": ($event) => isRef(selectIdsList) ? selectIdsList.value = $event : null,
              disabled: !unref(isEdit)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(mergeProps({
                    grid: "~ cols-2 md:cols-5 gap-6"
                  }, ssrGetDirectiveProps(_ctx, _directive_auto_animate, {
                    duration: 300,
                    easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
                  })))} data-v-4734e6cb${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(list).data.value, (p) => {
                    _push3(`<div data-v-4734e6cb${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_el_checkbox_button, {
                      label: p.goods.id,
                      class: "transition-300 active:scale-96 hover:shadow"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UserCollectGoodsCard, {
                            data: p,
                            onLink: ($event) => !unref(isEdit) && ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/goods/detail/${p.goods.id}`),
                            onCancel: cancelCollect
                          }, {
                            btns: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5)
                                ;
                              else {
                                return [];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [createVNode(_component_UserCollectGoodsCard, {
                            data: p,
                            onLink: ($event) => !unref(isEdit) && ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/goods/detail/${p.goods.id}`),
                            onCancel: cancelCollect
                          }, {
                            btns: withCtx(() => []),
                            _: 2
                          }, 1032, ["data", "onLink"])];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [withDirectives((openBlock(), createBlock("div", {
                    grid: "~ cols-2 md:cols-5 gap-6"
                  }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(list).data.value, (p) => {
                    return openBlock(), createBlock("div", {
                      key: p.id
                    }, [createVNode(_component_el_checkbox_button, {
                      label: p.goods.id,
                      class: "transition-300 active:scale-96 hover:shadow"
                    }, {
                      default: withCtx(() => [createVNode(_component_UserCollectGoodsCard, {
                        data: p,
                        onLink: ($event) => !unref(isEdit) && ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/goods/detail/${p.goods.id}`),
                        onCancel: cancelCollect
                      }, {
                        btns: withCtx(() => []),
                        _: 2
                      }, 1032, ["data", "onLink"])]),
                      _: 2
                    }, 1032, ["label"])]);
                  }), 128))])), [[_directive_auto_animate, {
                    duration: 300,
                    easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
                  }]])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<small mt-6 block text-center opacity-60 data-v-4734e6cb${_scopeId}>${ssrInterpolate(((_a = unref(list).data.value) == null ? void 0 : _a.length) ? "\u6682\u65E0\u66F4\u591A\u6536\u85CF" : "\u8FD8\u6CA1\u6709\u6536\u85CF\u5662\uFF0C\u5FEB\u53BB\u901B\u4E00\u901B\u5546\u54C1\u5427")}</small>`);
          } else {
            return [createVNode(_component_el_checkbox_group, {
              modelValue: unref(selectIdsList),
              "onUpdate:modelValue": ($event) => isRef(selectIdsList) ? selectIdsList.value = $event : null,
              disabled: !unref(isEdit)
            }, {
              default: withCtx(() => [withDirectives((openBlock(), createBlock("div", {
                grid: "~ cols-2 md:cols-5 gap-6"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(list).data.value, (p) => {
                return openBlock(), createBlock("div", {
                  key: p.id
                }, [createVNode(_component_el_checkbox_button, {
                  label: p.goods.id,
                  class: "transition-300 active:scale-96 hover:shadow"
                }, {
                  default: withCtx(() => [createVNode(_component_UserCollectGoodsCard, {
                    data: p,
                    onLink: ($event) => !unref(isEdit) && ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/goods/detail/${p.goods.id}`),
                    onCancel: cancelCollect
                  }, {
                    btns: withCtx(() => []),
                    _: 2
                  }, 1032, ["data", "onLink"])]),
                  _: 2
                }, 1032, ["label"])]);
              }), 128))])), [[_directive_auto_animate, {
                duration: 300,
                easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
              }]])]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]), createVNode("small", {
              "mt-6": "",
              block: "",
              "text-center": "",
              "opacity-60": ""
            }, toDisplayString(((_b = unref(list).data.value) == null ? void 0 : _b.length) ? "\u6682\u65E0\u66F4\u591A\u6536\u85CF" : "\u8FD8\u6CA1\u6709\u6536\u85CF\u5662\uFF0C\u5FEB\u53BB\u901B\u4E00\u901B\u5546\u54C1\u5427"), 1)];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/collect/GoodsList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4734e6cb"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostCardSe",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  emits: ["cancel"],
  setup(__props, {
    emit: __emit
  }) {
    useUserStore();
    const Host = `${(void 0).protocol}/${void 0}`;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_el_tag = ElTag;
      const _component_CommTagList = _sfc_main$5;
      const _component_CardElImage = __nuxt_component_1;
      const _directive_copying = resolveDirective("copying");
      _push(`<main${ssrRenderAttrs(mergeProps({
        "h-fit": "",
        "flex-row-bt-c": "",
        "border-0": "",
        "border-b-1px": "",
        "py-4": "",
        "border-default": ""
      }, _attrs))} data-v-530a5227><div class="h-5rem flex flex-1 flex-col pr-4" data-v-530a5227>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        tag: "div",
        to: `/community/post/detail/${_ctx.data.postId}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
          if (_push2) {
            _push2(`<div class="flex-row-bt-c" data-v-530a5227${_scopeId}><h4 for="content" class="truncate" flex items-center gap-2 truncate font-500 data-v-530a5227${_scopeId}>`);
            if ((_b2 = (_a2 = _ctx.data) == null ? void 0 : _a2.postInfo) == null ? void 0 : _b2.isEssence) {
              _push2(ssrRenderComponent(_component_el_tag, {
                class: "font-600 shadow",
                round: "",
                type: "warning",
                effect: "dark",
                size: "small"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i i-solar:crown-star-bold mr-1 p-0.5em data-v-530a5227${_scopeId2}></i> \u7CBE\u9009 `);
                  } else {
                    return [createVNode("i", {
                      "i-solar:crown-star-bold": "",
                      "mr-1": "",
                      "p-0.5em": ""
                    }), createTextVNode(" \u7CBE\u9009 ")];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate((_d2 = (_c2 = _ctx.data) == null ? void 0 : _c2.postInfo) == null ? void 0 : _d2.title)}</h4></div>`);
          } else {
            return [createVNode("div", {
              class: "flex-row-bt-c"
            }, [createVNode("h4", {
              for: "content",
              class: "truncate",
              flex: "",
              "items-center": "",
              "gap-2": "",
              truncate: "",
              "font-500": ""
            }, [((_f2 = (_e2 = _ctx.data) == null ? void 0 : _e2.postInfo) == null ? void 0 : _f2.isEssence) ? (openBlock(), createBlock(_component_el_tag, {
              key: 0,
              class: "font-600 shadow",
              round: "",
              type: "warning",
              effect: "dark",
              size: "small"
            }, {
              default: withCtx(() => [createVNode("i", {
                "i-solar:crown-star-bold": "",
                "mr-1": "",
                "p-0.5em": ""
              }), createTextVNode(" \u7CBE\u9009 ")]),
              _: 1
            })) : createCommentVNode("", true), createTextVNode(" " + toDisplayString((_h2 = (_g2 = _ctx.data) == null ? void 0 : _g2.postInfo) == null ? void 0 : _h2.title), 1)])])];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-a flex-row-bt-c" data-v-530a5227><div class="mt-4 hidden w-full items-center gap-2 md:flex" data-v-530a5227><span class="tip-group tip-group link-text mr-2" data-v-530a5227><i class="i-solar:chat-dots-outline mr-1 p-0.5em" data-v-530a5227></i><small data-v-530a5227>${ssrInterpolate(((_b = (_a = _ctx.data) == null ? void 0 : _a.postInfo) == null ? void 0 : _b.comments) || "\u6682\u65E0")}</small></span><span class="link-text mr-2" data-v-530a5227><i class="i-solar:like-outline mr-1 p-0.5em" data-v-530a5227></i><small data-v-530a5227>${ssrInterpolate(((_d = (_c = _ctx.data) == null ? void 0 : _c.postInfo) == null ? void 0 : _d.likes) || "\u6682\u65E0")}</small></span><span${ssrRenderAttrs(mergeProps({
        class: "link-text"
      }, ssrGetDirectiveProps(_ctx, _directive_copying, `${Host}/community/post/detail/${(_f = (_e = _ctx.data) == null ? void 0 : _e.postInfo) == null ? void 0 : _f.id}`, void 0, {
        toast: true
      })))} data-v-530a5227><i class="i-solar:share-outline mr-1 p-0.5em" data-v-530a5227></i><small data-v-530a5227>\u5206\u4EAB</small></span><span class="link-text" data-v-530a5227><i class="i-solar:star-outline mr-1 p-0.5em" data-v-530a5227></i><small data-v-530a5227>\u53D6\u6D88\u6536\u85CF</small></span></div>`);
      if ((_i = (_h = (_g = _ctx.data) == null ? void 0 : _g.postInfo) == null ? void 0 : _h.tags) == null ? void 0 : _i.trim()) {
        _push(`<div data-v-530a5227>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          tag: "div",
          class: "grid flex gap-2 op-70",
          to: `/community/post/detail/${_ctx.data.postId}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_CommTagList, {
                size: "small",
                tags: (_b2 = (_a2 = _ctx.data) == null ? void 0 : _a2.postInfo) == null ? void 0 : _b2.tags,
                effect: "dark"
              }, null, _parent2, _scopeId));
            } else {
              return [createVNode(_component_CommTagList, {
                size: "small",
                tags: (_d2 = (_c2 = _ctx.data) == null ? void 0 : _c2.postInfo) == null ? void 0 : _d2.tags,
                effect: "dark"
              }, null, 8, ["tags"])];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        fit: "cover",
        class: "h-5rem w-8rem card-default",
        loading: "lazy",
        "preview-teleported": "",
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_k = (_j = _ctx.data) == null ? void 0 : _j.postInfo) == null ? void 0 : _k.cover)
      }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/collect/PostCardSe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-530a5227"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostActionList",
  __ssrInlineRender: true,
  props: {
    dto: {
      default: () => {
        return {
          isPostInfo: 1
        };
      }
    },
    limit: {},
    class: {
      default: ""
    },
    cardClass: {
      default: ""
    },
    title: {
      default: "\u6536\u85CF"
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const isLoading = ref(false);
    const postList = ref([]);
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
      return pageInfo.pages > 0 && (page.value >= pageInfo.pages || props.limit !== void 0 && props.limit <= postList.value.length);
    });
    const user = useUserStore();
    async function loadPostListPage() {
      if (isLoading.value || isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && postList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const res = await getCommPostActionPage(page.value, size.value, props == null ? void 0 : props.dto, user.getToken);
      if ((res == null ? void 0 : res.code) !== StatusCode.SUCCESS)
        return;
      pageInfo.total = res == null ? void 0 : res.data.total;
      pageInfo.current = res == null ? void 0 : res.data.current;
      pageInfo.pages = res == null ? void 0 : res.data.pages;
      if ((res == null ? void 0 : res.data.records) && (res == null ? void 0 : res.data.records.length))
        postList.value.push(...res == null ? void 0 : res.data.records);
      isLoading.value = false;
    }
    function clearResult() {
      postList.value.splice(0);
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      page.value = 0;
    }
    const dto = toReactive(props.dto);
    const timer = ref();
    watchDebounced(dto, async () => {
      if (timer.value)
        return;
      clearResult();
      await loadPostListPage();
      timer.value = setTimeout(() => {
        clearTimeout(timer.value);
        timer.value = null;
      }, 400);
    }, {
      immediate: true
    });
    function onChancelCollect({
      id,
      postId
    }) {
      ElMessageBox.confirm(`\u662F\u5426\u53D6\u6D88${props == null ? void 0 : props.title}\uFF1F`, "\u53D6\u6D88\u63D0\u793A", {
        confirmButtonText: "\u786E \u8BA4",
        confirmButtonClass: "el-button--danger  border-default ",
        lockScroll: false,
        cancelButtonText: "\u53D6 \u6D88",
        center: true,
        callback: async (action) => {
          if (action === "confirm") {
            const {
              code
            } = await togglePostAction(postId, {
              postId,
              type: PostActionType.COLLECT
            }, user.getToken);
            if (code === StatusCode.SUCCESS) {
              postList.value = postList.value.filter((item) => item.id !== id);
              ElMessage.warning(`\u53D6\u6D88${props == null ? void 0 : props.title}\u6210\u529F\uFF01`);
            }
          }
        }
      });
    }
    __expose({
      clearResult,
      // 清除
      loadPostListPage,
      postList,
      pageInfo
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_ListAutoIncre = _sfc_main$6;
      const _component_UserCollectPostCardSe = __nuxt_component_3;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(ssrRenderComponent(_component_el_scrollbar, mergeProps({
        height: "70vh"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [withDirectives((openBlock(), createBlock("div", {
                class: "grid grid-gap-6"
              }, [createVNode(_component_ListAutoIncre, {
                "loading-class": "mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-info)]",
                immediate: true,
                "no-more": unref(isNoMore) || unref(isNot),
                onLoad: loadPostListPage
              }, {
                done: withCtx(() => [withDirectives(createVNode("p", {
                  class: "w-full py-8",
                  "text-center": "",
                  "tracking-1": "",
                  "text-bluegray": ""
                }, toDisplayString(unref(isNoMore) ? "\u6682\u65E0\u66F4\u591A\u5E16\u5B50" : "\u6682\u65E0\u5E16\u5B50"), 513), [[vShow, unref(isNoMore) || unref(isNot)]])]),
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(postList), (p) => {
                  return openBlock(), createBlock("div", {
                    key: p.id,
                    class: "grid grid-cols-1 gap-4"
                  }, [createVNode(_component_UserCollectPostCardSe, {
                    data: p,
                    onCancel: onChancelCollect
                  }, null, 8, ["data"])]);
                }), 128))]),
                _: 1
              }, 8, ["no-more"])])), [[_directive_auto_animate]])]),
              _: 1
            })];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/collect/PostActionList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b548793c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "collect",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `\u6211\u7684\u6536\u85CF - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`,
      meta: [{
        name: "description",
        content: `\u6211\u7684\u6536\u85CF - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
      }]
    });
    const user = useUserStore();
    const activeMenu = ref("goods");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ElDivider = ElDivider;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_UserCollectGoodsList = __nuxt_component_5;
      const _component_UserCollectPostActionList = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9478b72a>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "user",
        menu: ["back"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="layout-default" data-v-9478b72a${_scopeId}><div class="flex-row-bt-c" data-v-9478b72a${_scopeId}><h2 class="mb-8 mt-4 flex animate-[fade-in-down_0.4s] items-center" data-v-9478b72a${_scopeId}> \u6211\u7684\u6536\u85CF `);
            _push2(ssrRenderComponent(_component_ElDivider, {
              direction: "vertical",
              style: {
                "margin": "0 1rem"
              }
            }, null, _parent2, _scopeId));
            _push2(`<i class="i-solar:star-bold-duotone bg-yellow-4 p-0.5em" data-v-9478b72a${_scopeId}></i></h2><div style="${ssrRenderStyle(unref(user).isLogin ? null : {
              display: "none"
            })}" data-v-9478b72a${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "layout-default"
            }, [createVNode("div", {
              class: "flex-row-bt-c"
            }, [createVNode("h2", {
              class: "mb-8 mt-4 flex animate-[fade-in-down_0.4s] items-center"
            }, [createTextVNode(" \u6211\u7684\u6536\u85CF "), createVNode(_component_ElDivider, {
              direction: "vertical",
              style: {
                "margin": "0 1rem"
              }
            }), createVNode("i", {
              class: "i-solar:star-bold-duotone bg-yellow-4 p-0.5em"
            })]), withDirectives(createVNode("div", null, null, 512), [[vShow, unref(user).isLogin]])]), createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [createVNode("div", {
                class: "animate-[fade-in_.3s_ease] rounded-14px p-6 leading-1.4em shadow card-default"
              }, [createVNode(_component_el_tabs, {
                modelValue: unref(activeMenu),
                "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
                "tab-position": "top",
                stretch: false
              }, {
                default: withCtx(() => [createVNode(_component_el_tab_pane, {
                  name: "goods",
                  label: "\u6536\u85CF\u5546\u54C1"
                }, {
                  default: withCtx(() => [createVNode(_component_UserCollectGoodsList)]),
                  _: 1
                }), createVNode(_component_el_tab_pane, {
                  name: "postcollect",
                  label: "\u6536\u85CF\u5E16\u5B50"
                }, {
                  default: withCtx(() => [createVNode(_component_UserCollectPostActionList, {
                    dto: {
                      type: ("PostActionType" in _ctx ? _ctx.PostActionType : unref(PostActionType)).COLLECT,
                      isPostInfo: 1
                    },
                    title: "\u6536\u85CF"
                  }, null, 8, ["dto"])]),
                  _: 1
                }), createVNode(_component_el_tab_pane, {
                  name: "postlike",
                  label: "\u70B9\u8D5E\u5E16\u5B50"
                }, {
                  default: withCtx(() => [createVNode(_component_UserCollectPostActionList, {
                    dto: {
                      type: ("PostActionType" in _ctx ? _ctx.PostActionType : unref(PostActionType)).LIKE,
                      isPostInfo: 1
                    },
                    title: "\u70B9\u8D5E"
                  }, null, 8, ["dto"])]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])])]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/collect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const collect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9478b72a"]]);

export { collect as default };
//# sourceMappingURL=collect-beRPZBUN.mjs.map
