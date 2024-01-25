import { A as useRoute, n as navigateTo, c as useSeoMeta, B as BaseUrlImg, _ as __nuxt_component_0, b as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-qWvYy4Gj.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createTextVNode, withDirectives, Fragment, renderList, vShow, createCommentVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import currency from 'currency.js';
import { g as getEventsInfo } from './index-hw581Gte.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GoodsEvent",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const { data } = __props;
    const getInsurance = computed(() => {
      return data.warrantyTime ? `${data.warrantyTime}\u5929\u65E0\u7406\u7531 ` : `${data.refundTime}` ? `${data.refundTime}\u5929\u4FDD\u4FEE ` : " ";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_card_el_image = __nuxt_component_1;
      const _component_el_tag = ElTag;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group goods-card aspect-ratio-1 w-full flex flex-col cursor-pointer border-gray-200 rounded-4px shadow-sm border-default dark:border-dark-200 dark:bg-dark-8" }, _attrs))} data-v-9f846494><div class="img relative h-120px w-full overflow-hidden rounded-t-inherit md:h-160px" data-v-9f846494>`);
      _push(ssrRenderComponent(_component_card_el_image, {
        loading: "lazy",
        class: "h-full w-full",
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + (((_a = _ctx.data) == null ? void 0 : _a.image) ? (_b = _ctx.data) == null ? void 0 : _b.image : (_d = (_c = _ctx.data) == null ? void 0 : _c.images) == null ? void 0 : _d.split(",")[0]),
        alt: _ctx.data.name,
        fit: "cover"
      }, null, _parent));
      _push(`<div class="absolute right-2 top-2" data-v-9f846494>`);
      if (((_e = _ctx.data) == null ? void 0 : _e.price) && ((_f = _ctx.data) == null ? void 0 : _f.eventPrice)) {
        _push(ssrRenderComponent(_component_el_tag, {
          type: "danger",
          effect: "dark",
          "rounded-3px": "",
          style: { "letter-spacing": "0.1em" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(` -\uFFE5${ssrInterpolate(unref(currency)((_a2 = _ctx.data) == null ? void 0 : _a2.price).subtract((_b2 = _ctx.data) == null ? void 0 : _b2.eventPrice))}`);
            } else {
              return [
                createTextVNode(" -\uFFE5" + toDisplayString(unref(currency)((_c2 = _ctx.data) == null ? void 0 : _c2.price).subtract((_d2 = _ctx.data) == null ? void 0 : _d2.eventPrice)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><small class="view absolute bottom-0 left-0 z-1 w-full flex-row-bt-c bg-[var(--el-bg-color-primary)] px-3 py-1 color-light opacity-0 backdrop-blur-2em transition-300" group-hover:opacity-80 data-v-9f846494><div data-v-9f846494><i class="i-solar:eye-bold mr-1 p-2" data-v-9f846494></i> ${ssrInterpolate(_ctx.data.views)}</div><div data-v-9f846494> \u9500\u91CF\uFF1A ${ssrInterpolate(_ctx.data.sales)}</div></small></div><div class="texts relative flex flex-col justify-between justify-around px-2 py-2 md:px-3" data-v-9f846494><h4 class="w-full truncate" data-v-9f846494>${ssrInterpolate(_ctx.data.name)}</h4><p class="my-1 text-0.8em opacity-80" data-v-9f846494><small data-v-9f846494>${ssrInterpolate(_ctx.data.city ? `${_ctx.data.city}\u53D1\u8D27 ` : "")}</small><small float-right data-v-9f846494>${ssrInterpolate(unref(getInsurance))}</small></p><p class="flex items-end color-[var(--el-color-danger)]" data-v-9f846494><strong pr-1 data-v-9f846494>\uFFE5${ssrInterpolate(unref(currency)(_ctx.data.eventPrice))}</strong><small hidden text-0.8em color-coolgray md:inline style="${ssrRenderStyle({ "text-decoration": "line-through" })}" data-v-9f846494> \uFFE5${ssrInterpolate(unref(currency)(_ctx.data.price))}</small></p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Event/GoodsEvent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f846494"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[eid]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d;
    let __temp, __restore;
    const route = useRoute();
    const eventId = ((_a = route.params) == null ? void 0 : _a.eid) ? (_b = route.params) == null ? void 0 : _b.eid.toString() : "";
    const list = ([__temp, __restore] = withAsyncContext(() => getEventsInfo(eventId || "")), __temp = await __temp, __restore(), __temp);
    if (!eventId || !((_d = (_c = list.data.value) == null ? void 0 : _c.data) == null ? void 0 : _d.id)) {
      [__temp, __restore] = withAsyncContext(() => navigateTo({
        replace: true,
        path: "/error",
        query: {
          errorMsg: "\u6D3B\u52A8\u672A\u5F00\u59CB\u6216\u7ED3\u675F \u274C"
        }
      })), await __temp, __restore();
    }
    const isNot = computed(() => {
      var _a2;
      return ((_a2 = list.data.value) == null ? void 0 : _a2.data.list.length) === 0;
    });
    useSeoMeta({
      title: () => {
        var _a2, _b2;
        return `${((_b2 = (_a2 = list.data.value) == null ? void 0 : _a2.data) == null ? void 0 : _b2.title) || ""} - \u6781\u7269\u5708`;
      },
      description: () => {
        var _a2, _b2;
        return ((_b2 = (_a2 = list.data.value) == null ? void 0 : _a2.data) == null ? void 0 : _b2.details) || "";
      }
    });
    const getEventStatus = computed(() => {
      var _a2, _b2;
      if (((_a2 = list.data.value) == null ? void 0 : _a2.data.status) === -1) {
        return {
          title: "\u5DF2\u7ED3\u675F",
          class: "text-light bg-[var(--el-color-danger)]"
        };
      } else if (((_b2 = list.data.value) == null ? void 0 : _b2.data.status) === 0) {
        return {
          title: "\u672A\u5F00\u59CB",
          class: "text-light bg-[var(--el-color-info)]"
        };
      } else {
        return {
          title: "\u8FDB\u884C\u4E2D",
          class: "text-light bg-[var(--el-color-info)]"
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_EventGoodsEvent = __nuxt_component_2;
      const _component_v_md_preview = resolveComponent("v-md-preview");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "main",
        "left-menu": false,
        header: false,
        menu: ["home", "back", "service"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
          if (_push2) {
            if ((_b2 = (_a2 = unref(list).data.value) == null ? void 0 : _a2.data) == null ? void 0 : _b2.id) {
              _push2(`<div class="layout-default"${_scopeId}><div class="mx-a min-h-100vh w-full flex flex-col rounded-10px p-4 shadow md:w-80% v-card"${_scopeId}><div class="bg absolute relative left-0 h-300px w-full overflow-hidden rounded-t-10px"${_scopeId}><img${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_c2 = unref(list).data.value) == null ? void 0 : _c2.data.images))} class="h-full w-full" style="${ssrRenderStyle({ "object-fit": "cover" })}" crossOrigin="anonymous"${_scopeId}><div absolute left-0 top-0 backdrop-blur-20px class="z-1 h-full w-full flex-row-c-c flex-col leading-1.2em text-shadow-lg"${_scopeId}><h3 text-light border-t="2px dashed light" border-b="2px dashed light" class="${ssrRenderClass([unref(getEventStatus).class, "tip absolute right-0 top-0 w-8em translate-x-10 translate-y-5 rotate-45 p-2 text-center"])}"${_scopeId}>${ssrInterpolate(unref(getEventStatus).title)}</h3><h2 text-light class="mt-4 cursor-pointer text-center tracking-1 transition-300 hover:scale-106 md:text-3xl"${_scopeId}>${ssrInterpolate((_d2 = unref(list).data.value) == null ? void 0 : _d2.data.title)}</h2><small class="my-2 text-[var(--el-color-info)]"${_scopeId}> \u6D3B\u52A8\u65F6\u95F4\uFF1A <small class="opacity-60"${_scopeId}>${ssrInterpolate((_e = unref(list).data.value) == null ? void 0 : _e.data.startTime)}</small> ~ <small class="opacity-60"${_scopeId}>${ssrInterpolate((_f = unref(list).data.value) == null ? void 0 : _f.data.endTime)}</small></small></div></div><section style="${ssrRenderStyle(!unref(isNot) ? null : { display: "none" })}" class="list min-h-80vh flex-1 pb-6"${_scopeId}><h3 my-6 border-l-0 border-r-0 py-4 text-center border-default${_scopeId}> \u6D3B\u52A8\u5546\u54C1 </h3><div grid="~ cols-2 md:cols-4 gap-4 md:gap-6"${_scopeId}><!--[-->`);
              ssrRenderList((_g = unref(list).data.value) == null ? void 0 : _g.data.list, (p) => {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  key: p == null ? void 0 : p.id,
                  to: {
                    path: `/goods/detail/${p.goodsId}`,
                    query: {
                      eventId: p.eventId
                    }
                  }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_EventGoodsEvent, { data: p }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_EventGoodsEvent, { data: p }, null, 8, ["data"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></section><div style="${ssrRenderStyle(unref(isNot) ? null : { display: "none" })}" class="w-full flex-row-c-c flex-1 text-center"${_scopeId}> \u6682\u65E0\u6D3B\u52A8\u5546\u54C1 </div>`);
              if ((_i = (_h = unref(list).data.value) == null ? void 0 : _h.data) == null ? void 0 : _i.details) {
                _push2(`<section${_scopeId}>`);
                _push2(ssrRenderComponent(_component_v_md_preview, {
                  text: (_k = (_j = unref(list).data.value) == null ? void 0 : _j.data) == null ? void 0 : _k.details,
                  "preview-class": "vuepress-markdown-body"
                }, null, _parent2, _scopeId));
                _push2(`</section>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_m = (_l = unref(list).data.value) == null ? void 0 : _l.data) == null ? void 0 : _m.id) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "layout-default"
              }, [
                createVNode("div", { class: "mx-a min-h-100vh w-full flex flex-col rounded-10px p-4 shadow md:w-80% v-card" }, [
                  createVNode("div", { class: "bg absolute relative left-0 h-300px w-full overflow-hidden rounded-t-10px" }, [
                    createVNode("img", {
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_n = unref(list).data.value) == null ? void 0 : _n.data.images),
                      class: "h-full w-full",
                      style: { "object-fit": "cover" },
                      crossOrigin: "anonymous"
                    }, null, 8, ["src"]),
                    createVNode("div", {
                      absolute: "",
                      "left-0": "",
                      "top-0": "",
                      "backdrop-blur-20px": "",
                      class: "z-1 h-full w-full flex-row-c-c flex-col leading-1.2em text-shadow-lg"
                    }, [
                      createVNode("h3", {
                        "text-light": "",
                        class: ["tip absolute right-0 top-0 w-8em translate-x-10 translate-y-5 rotate-45 p-2 text-center", unref(getEventStatus).class],
                        "border-t": "2px dashed light",
                        "border-b": "2px dashed light"
                      }, toDisplayString(unref(getEventStatus).title), 3),
                      createVNode("h2", {
                        "text-light": "",
                        class: "mt-4 cursor-pointer text-center tracking-1 transition-300 hover:scale-106 md:text-3xl"
                      }, toDisplayString((_o = unref(list).data.value) == null ? void 0 : _o.data.title), 1),
                      createVNode("small", { class: "my-2 text-[var(--el-color-info)]" }, [
                        createTextVNode(" \u6D3B\u52A8\u65F6\u95F4\uFF1A "),
                        createVNode("small", { class: "opacity-60" }, toDisplayString((_p = unref(list).data.value) == null ? void 0 : _p.data.startTime), 1),
                        createTextVNode(" ~ "),
                        createVNode("small", { class: "opacity-60" }, toDisplayString((_q = unref(list).data.value) == null ? void 0 : _q.data.endTime), 1)
                      ])
                    ])
                  ]),
                  withDirectives(createVNode("section", { class: "list min-h-80vh flex-1 pb-6" }, [
                    createVNode("h3", {
                      "my-6": "",
                      "border-l-0": "",
                      "border-r-0": "",
                      "py-4": "",
                      "text-center": "",
                      "border-default": ""
                    }, " \u6D3B\u52A8\u5546\u54C1 "),
                    createVNode("div", { grid: "~ cols-2 md:cols-4 gap-4 md:gap-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList((_r = unref(list).data.value) == null ? void 0 : _r.data.list, (p) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: p == null ? void 0 : p.id,
                          to: {
                            path: `/goods/detail/${p.goodsId}`,
                            query: {
                              eventId: p.eventId
                            }
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_EventGoodsEvent, { data: p }, null, 8, ["data"])
                          ]),
                          _: 2
                        }, 1032, ["to"]);
                      }), 128))
                    ])
                  ], 512), [
                    [vShow, !unref(isNot)]
                  ]),
                  withDirectives(createVNode("div", { class: "w-full flex-row-c-c flex-1 text-center" }, " \u6682\u65E0\u6D3B\u52A8\u5546\u54C1 ", 512), [
                    [vShow, unref(isNot)]
                  ]),
                  ((_t = (_s = unref(list).data.value) == null ? void 0 : _s.data) == null ? void 0 : _t.details) ? (openBlock(), createBlock("section", { key: 0 }, [
                    createVNode(_component_v_md_preview, {
                      text: (_v = (_u = unref(list).data.value) == null ? void 0 : _u.data) == null ? void 0 : _v.details,
                      "preview-class": "vuepress-markdown-body"
                    }, null, 8, ["text"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/detail/[eid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_eid_-2iCz7d7q.mjs.map
