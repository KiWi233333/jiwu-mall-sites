import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { Y as useHead, v as appName, c as useSeoMeta, i as isTrue, u as useUserStore, S as StatusCode, B as BaseUrlImg, _ as __nuxt_component_0, e as __nuxt_component_0$1, E as ElMessage, n as navigateTo, b as _export_sfc, g as ElButton } from '../server.mjs';
import { useSSRContext, defineAsyncComponent, defineComponent, ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, unref, createTextVNode, mergeProps, reactive, withAsyncContext, computed, toDisplayString, withModifiers, resolveDirective, withDirectives, vShow, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Controller, EffectCreative, Mousewheel } from 'swiper/modules';
import { b as getEventsLists } from './index-I9ZbP2md.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { _ as __nuxt_component_1 } from './ElImage-j3i6j_3Z.mjs';
import currency from 'currency.js';
import { ElText } from './index-eePIGq3N.mjs';
import { b as getGoodsListByPageLazy } from './index-4eJaJKt8.mjs';
import { a as getGoodsCategoryTree, b as getGoodsCategoryList, _ as __nuxt_component_2$1 } from './GoodsListSsr-hXClBatk.mjs';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { _ as _sfc_main$9 } from './PreLoading-Sou-hyZj.mjs';
import __nuxt_component_1$2 from './GoodsList-AABL3AGj.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
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
import './fetch-YS3Fxkuj.mjs';
import './event-9ZI5GX64.mjs';
import './strings-Xcuto3Xi.mjs';
import './aria-sbEPrgvQ.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';
import './AutoIncre-z4AO2g2Q.mjs';

const _imports_0 = "" + publicAssetsURL("images/other/index_bg.png");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TopMenu",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative flex-row-bt-c flex-col md:flex-row"
      }, _attrs))}><div class="animate-[fade-in-down_0.3s_ease] select-none py-10">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-3rem text-lg tracking-1 opacity-80"${_scopeId}></div>`);
          } else {
            return [createVNode("div", {
              class: "h-3rem text-lg tracking-1 opacity-80"
            })];
          }
        })
      }, _parent));
      _push(`<span text-2xl font-600 tracking-1> \u6B22\u8FCE\u6765\u5230 <span class="animate mark3">\u6781\u7269\u5708\u793E\u533A</span> \u{1F389} </span></div><img${ssrRenderAttr("src", _imports_0)} class="absolute top-0 block w-60vw -left-1/12 -z-1 dark:hidden" alt="\u80CC\u666F\u56FE"><img src="https://img.js.design/assets/static/04655ded30771e94bfa72bf9dab3cbbf.png" class="absolute top-0 hidden w-60vw -left-1/12 -z-1 dark:block" loading="lazy" alt="\u80CC\u666F\u56FE">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/TopMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SwiperList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const eventList = reactive([]);
    const {
      data
    } = ([__temp, __restore] = withAsyncContext(() => getEventsLists()), __temp = await __temp, __restore(), __temp);
    if (data.value && data.value.code === StatusCode.SUCCESS) {
      eventList.push(...data.value.data.sort((a, b) => b.level - a.level));
    }
    function toEventDetailView(event) {
      if (event.status !== 1) {
        if (Date.now() - new Date(event.endTime).getTime() >= 0 && event.status === 2) {
          ElMessage.warning("\u6D3B\u52A8\u5DF2\u7ED3\u675F\u4E86~");
          return;
        } else if (Date.now() - new Date(event.startTime).getTime() >= 0 && event.status === 0) {
          ElMessage.warning("\u6D3B\u52A8\u8FD8\u672A\u5F00\u59CB~");
          return;
        }
      }
      navigateTo(`/event/detail/${event.id}`);
    }
    const getEndDay = computed(() => {
      return (a, b) => {
        const newDate = (/* @__PURE__ */ new Date()).getTime();
        const start = Date.parse(a);
        const end = Date.parse(b);
        if (start > newDate) {
          return 0;
        }
        if (end < newDate) {
          return -1;
        }
        return +((end - newDate) / (1 * 24 * 60 * 60 * 1e3)).toFixed(0);
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "cursor-pointer": "",
        "overflow-hidden": "",
        "rounded-6px": "",
        class: "swpier relative"
      }, _attrs))} data-v-340f382c>`);
      _push(ssrRenderComponent(_component_swiper, {
        "grab-cursor": true,
        class: "h-full w-full",
        effect: "creative",
        draggable: true,
        loop: true,
        mousewheel: true,
        speed: 400,
        pagination: {
          clickable: true
        },
        "resistance-ratio": 0.6,
        "creative-effect": {
          limitProgress: 1,
          prev: {
            translate: ["-100%", 0, -1],
            opacity: 0.4,
            origin: "right center"
          },
          next: {
            translate: ["100%", 0, 0],
            origin: "center center"
          }
        },
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperPagination" in _ctx ? _ctx.SwiperPagination : unref(Pagination), "SwiperController" in _ctx ? _ctx.SwiperController : unref(Controller), "SwiperEffectCreative" in _ctx ? _ctx.SwiperEffectCreative : unref(EffectCreative), "SwiperMousewheel" in _ctx ? _ctx.SwiperMousewheel : unref(Mousewheel)]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(eventList), (p) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: p.id,
                class: "swiper-item overflow-hidden rounded bg-white border-default dark:bg-dark-4",
                onClick: ($event) => toEventDetailView(p)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img loading="lazy"${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.images)}${ssrRenderAttr("alt", p.details)} class="h-full w-full object-cover" fit="cover" data-v-340f382c${_scopeId2}><section class="tip w-full flex flex-col justify-around rounded-0 px-5 py-3 text-xs leading-1.4em line-height-none tracking-0.2em card-default md:text-1em md:line-height-normal" data-v-340f382c${_scopeId2}><h3 class="title" data-v-340f382c${_scopeId2}>${ssrInterpolate(p.title)}</h3>`);
                    if (p.status === 0) {
                      _push3(`<p opacity-80 style="${ssrRenderStyle({
                        "color": "var(--el-color-success)"
                      })}" data-v-340f382c${_scopeId2}> \u6D3B\u52A8\u5373\u5C06\u5F00\u59CB </p>`);
                    } else if (p.status === 1) {
                      _push3(`<p opacity-80 data-v-340f382c${_scopeId2}> \u8DDD\u79BB\u7ED3\u675F\u8FD8\u6709\uFF1A <strong text-lg style="${ssrRenderStyle({
                        "color": "var(--el-color-error)"
                      })}" data-v-340f382c${_scopeId2}>${ssrInterpolate(unref(getEndDay)(p.startTime, p.endTime))}</strong> \u5929 </p>`);
                    } else if (p.status === 2) {
                      _push3(`<p opacity-80 style="${ssrRenderStyle({
                        "text-decoration": "line-through"
                      })}" data-v-340f382c${_scopeId2}> \u6D3B\u52A8\u5DF2\u7ECF\u7ED3\u675F </p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</section>`);
                  } else {
                    return [createVNode("img", {
                      loading: "lazy",
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.images,
                      alt: p.details,
                      class: "h-full w-full object-cover",
                      fit: "cover"
                    }, null, 8, ["src", "alt"]), createVNode("section", {
                      class: "tip w-full flex flex-col justify-around rounded-0 px-5 py-3 text-xs leading-1.4em line-height-none tracking-0.2em card-default md:text-1em md:line-height-normal"
                    }, [createVNode("h3", {
                      class: "title"
                    }, toDisplayString(p.title), 1), p.status === 0 ? (openBlock(), createBlock("p", {
                      key: 0,
                      "opacity-80": "",
                      style: {
                        "color": "var(--el-color-success)"
                      }
                    }, " \u6D3B\u52A8\u5373\u5C06\u5F00\u59CB ")) : p.status === 1 ? (openBlock(), createBlock("p", {
                      key: 1,
                      "opacity-80": ""
                    }, [createTextVNode(" \u8DDD\u79BB\u7ED3\u675F\u8FD8\u6709\uFF1A "), createVNode("strong", {
                      "text-lg": "",
                      style: {
                        "color": "var(--el-color-error)"
                      }
                    }, toDisplayString(unref(getEndDay)(p.startTime, p.endTime)), 1), createTextVNode(" \u5929 ")])) : p.status === 2 ? (openBlock(), createBlock("p", {
                      key: 2,
                      "opacity-80": "",
                      style: {
                        "text-decoration": "line-through"
                      }
                    }, " \u6D3B\u52A8\u5DF2\u7ECF\u7ED3\u675F ")) : createCommentVNode("", true)])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(eventList), (p) => {
              return openBlock(), createBlock(_component_swiper_slide, {
                key: p.id,
                class: "swiper-item overflow-hidden rounded bg-white border-default dark:bg-dark-4",
                onClick: withModifiers(($event) => toEventDetailView(p), ["stop"])
              }, {
                default: withCtx(() => [createVNode("img", {
                  loading: "lazy",
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.images,
                  alt: p.details,
                  class: "h-full w-full object-cover",
                  fit: "cover"
                }, null, 8, ["src", "alt"]), createVNode("section", {
                  class: "tip w-full flex flex-col justify-around rounded-0 px-5 py-3 text-xs leading-1.4em line-height-none tracking-0.2em card-default md:text-1em md:line-height-normal"
                }, [createVNode("h3", {
                  class: "title"
                }, toDisplayString(p.title), 1), p.status === 0 ? (openBlock(), createBlock("p", {
                  key: 0,
                  "opacity-80": "",
                  style: {
                    "color": "var(--el-color-success)"
                  }
                }, " \u6D3B\u52A8\u5373\u5C06\u5F00\u59CB ")) : p.status === 1 ? (openBlock(), createBlock("p", {
                  key: 1,
                  "opacity-80": ""
                }, [createTextVNode(" \u8DDD\u79BB\u7ED3\u675F\u8FD8\u6709\uFF1A "), createVNode("strong", {
                  "text-lg": "",
                  style: {
                    "color": "var(--el-color-error)"
                  }
                }, toDisplayString(unref(getEndDay)(p.startTime, p.endTime)), 1), createTextVNode(" \u5929 ")])) : p.status === 2 ? (openBlock(), createBlock("p", {
                  key: 2,
                  "opacity-80": "",
                  style: {
                    "text-decoration": "line-through"
                  }
                }, " \u6D3B\u52A8\u5DF2\u7ECF\u7ED3\u675F ")) : createCommentVNode("", true)])]),
                _: 2
              }, 1032, ["onClick"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/SwiperList.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-340f382c"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "GoodsLine",
  __ssrInlineRender: true,
  props: {
    goods: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card_el_image = __nuxt_component_1;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex-row-bt-c cursor-pointer p-1"
      }, _attrs))}><div h-6em w-6em overflow-hidden border-default card-default>`);
      _push(ssrRenderComponent(_component_card_el_image, {
        loading: "lazy",
        class: "transition-300 hover:transform-scale-110",
        src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.goods.images[0]}?imageView2/1/w/100/h/100/format/webp/interlace/1/q/50`,
        style: {
          "width": "6em",
          "height": "6em"
        },
        alt: `${_ctx.goods.name}\u5546\u54C1\u56FE\u7247`,
        fit: "cover"
      }, null, _parent));
      _push(`</div><div class="flex flex-1 flex-col justify-between px-2 md:px-4"><h3 class="max-w-12em truncate tracking-1px md:max-w-16em">${ssrInterpolate(_ctx.goods.name)}</h3><p mb-5 mt-1 color-red-6 font-700 leading-1.2em> \uFFE5${ssrInterpolate(unref(currency)(_ctx.goods.price))} <small text-0.8em color-coolgray style="${ssrRenderStyle({
        "text-decoration": "line-through"
      })}"> \uFFE5${ssrInterpolate(unref(currency)(_ctx.goods.costPrice))}</small></p><div flex-row-bt-c flex-1 class="group"><small mr-3 opacity-80> \u6D4F\u89C8\uFF1A${ssrInterpolate(_ctx.goods.views)}</small><small opacity-80>\u9500\u91CF\uFF1A${ssrInterpolate(_ctx.goods.sales)}</small>`);
      _push(ssrRenderComponent(_component_el_button, {
        type: "danger",
        size: "small",
        style: {
          "padding": "0 1em",
          "margin-left": "2em"
        },
        class: "item float-right opacity-0 group-hover:opacity-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u524D\u5F80\u8D2D\u4E70 `);
          } else {
            return [createTextVNode(" \u524D\u5F80\u8D2D\u4E70 ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/GoodsLine.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "HotGoodsList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const page = ref(0);
    const size = ref(5);
    const isLoading = ref(false);
    const noMore = ref(false);
    const hotGoodsList = ref([]);
    async function loadGoodsList() {
      var _a, _b, _c, _d, _e;
      if (isLoading.value || noMore.value)
        return;
      isLoading.value = true;
      page.value++;
      const res = await getGoodsListByPageLazy(page.value, size.value, {
        viewsSort: isTrue.TRUE,
        saleSort: isTrue.TRUE
      });
      if (((_a = res.data.value) == null ? void 0 : _a.code) === StatusCode.SUCCESS) {
        (_c = (_b = res.data.value) == null ? void 0 : _b.data) == null ? void 0 : _c.records.forEach((p) => {
          p.images = p.images.toString().split(",");
          hotGoodsList.value.push(p);
        });
        noMore.value = ((_d = res.data.value) == null ? void 0 : _d.data.current) >= ((_e = res.data.value) == null ? void 0 : _e.data.pages);
      }
      isLoading.value = false;
    }
    [__temp, __restore] = withAsyncContext(() => loadGoodsList()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_CardGoodsLine = _sfc_main$6;
      const _component_el_text = ElText;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "hot-list h-420px min-h-420px flex flex-col overflow-visible rounded-4px p-4 shadow-sm backdrop-blur-20px md:w-470px border-default v-card dark:bg-dark-5"
      }, _attrs))} data-v-36373663><h3 px-1 data-v-36373663> \u70ED\u95E8\u5546\u54C1 <span i-solar:fire-bold mx-2 bg-red-6 p-3 data-v-36373663></span></h3>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        class: "flex-1",
        style: {
          "width": "100%"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_auto_animate))} data-v-36373663${_scopeId}><!--[-->`);
            ssrRenderList(unref(hotGoodsList), (p) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: p.id,
                to: `/goods/detail/${p.id}`,
                class: "mt-2 w-1/1 animate-[fade-in_0.3s]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CardGoodsLine, {
                      key: p.id,
                      goods: p,
                      class: "card my-2 border-0 border-b-1px pb-3 border-default"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [(openBlock(), createBlock(_component_CardGoodsLine, {
                      key: p.id,
                      goods: p,
                      class: "card my-2 border-0 border-b-1px pb-3 border-default"
                    }, null, 8, ["goods"]))];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_el_text, {
              style: !unref(isLoading) ? null : {
                display: "none"
              },
              key: "text",
              class: "block w-full cursor-pointer text-center",
              onClick: loadGoodsList
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(noMore) ? "\u6682\u65E0\u66F4\u591A" : "\u67E5\u770B\u66F4\u591A")}`);
                } else {
                  return [createTextVNode(toDisplayString(unref(noMore) ? "\u6682\u65E0\u66F4\u591A" : "\u67E5\u770B\u66F4\u591A"), 1)];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [withDirectives((openBlock(), createBlock("div", null, [(openBlock(true), createBlock(Fragment, null, renderList(unref(hotGoodsList), (p) => {
              return openBlock(), createBlock(_component_NuxtLink, {
                key: p.id,
                to: `/goods/detail/${p.id}`,
                class: "mt-2 w-1/1 animate-[fade-in_0.3s]"
              }, {
                default: withCtx(() => [(openBlock(), createBlock(_component_CardGoodsLine, {
                  key: p.id,
                  goods: p,
                  class: "card my-2 border-0 border-b-1px pb-3 border-default"
                }, null, 8, ["goods"]))]),
                _: 2
              }, 1032, ["to"]);
            }), 128)), withDirectives(createVNode(_component_el_text, {
              key: "text",
              class: "block w-full cursor-pointer text-center",
              onClick: loadGoodsList
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(noMore) ? "\u6682\u65E0\u66F4\u591A" : "\u67E5\u770B\u66F4\u591A"), 1)]),
              _: 1
            }, 512), [[vShow, !unref(isLoading)]])])), [[_directive_auto_animate]])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/HotGoodsList.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-36373663"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GoodsCategoryCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_el_button = ElButton;
      const _component_IndexGoodsCategoryCard = _sfc_main$4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `search?cname=${_ctx.data.name}&cid=${_ctx.data.id}`,
        class: "relative my-4 mr-4 block flex-row-c-c border-default card-default"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              size: "large",
              class: "first",
              style: {
                "position": "relative",
                "width": "9em",
                "height": "4.6em",
                "line-height": "100%"
              },
              "flex-row-c-c": "",
              "inline-flex": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="absolute left-0 top-0 z-0 h-full w-full overflow-hidden rounded-4px opacity-85"${_scopeId2}><img${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.icon)}${ssrRenderAttr("alt", _ctx.data.name)} loading="lazy" class="h-4.5rem w-9rem overflow-hidden object-cover" fit="cover"${_scopeId2}></div><h3 z-1 text-light${_scopeId2}>${ssrInterpolate(_ctx.data.name)}</h3>`);
                } else {
                  return [createVNode("div", {
                    class: "absolute left-0 top-0 z-0 h-full w-full overflow-hidden rounded-4px opacity-85"
                  }, [createVNode("img", {
                    src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.icon,
                    alt: _ctx.data.name,
                    loading: "lazy",
                    class: "h-4.5rem w-9rem overflow-hidden object-cover",
                    fit: "cover"
                  }, null, 8, ["src", "alt"])]), createVNode("h3", {
                    "z-1": "",
                    "text-light": ""
                  }, toDisplayString(_ctx.data.name), 1)];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_button, {
              size: "large",
              class: "first",
              style: {
                "position": "relative",
                "width": "9em",
                "height": "4.6em",
                "line-height": "100%"
              },
              "flex-row-c-c": "",
              "inline-flex": ""
            }, {
              default: withCtx(() => [createVNode("div", {
                class: "absolute left-0 top-0 z-0 h-full w-full overflow-hidden rounded-4px opacity-85"
              }, [createVNode("img", {
                src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.icon,
                alt: _ctx.data.name,
                loading: "lazy",
                class: "h-4.5rem w-9rem overflow-hidden object-cover",
                fit: "cover"
              }, null, 8, ["src", "alt"])]), createVNode("h3", {
                "z-1": "",
                "text-light": ""
              }, toDisplayString(_ctx.data.name), 1)]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(_ctx.data.children || [], (p) => {
        _push(ssrRenderComponent(_component_IndexGoodsCategoryCard, {
          key: p.id,
          data: p
        }, null, _parent));
      });
      _push(`<!--]--><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/GoodsCategoryCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CategoryLine",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data
    } = ([__temp, __restore] = withAsyncContext(() => getGoodsCategoryTree()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_IndexGoodsCategoryCard = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "category-list"
      }, _attrs))}><h3 class="title" pl-1 dark:text-amber-4> \u70ED\u95E8\u5206\u7C7B <i i-solar:adhesive-plaster-bold-duotone ml-4 bg-yellow-4 p-3></i></h3>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        style: {
          "width": "100%"
        },
        noresize: "",
        "z-0": "",
        "overflow-x-scroll": "",
        "tracking-0.1em": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="scroll flex flex-nowrap"${_scopeId}><!--[-->`);
            ssrRenderList((_a = unref(data)) == null ? void 0 : _a.data, (p) => {
              _push2(ssrRenderComponent(_component_IndexGoodsCategoryCard, {
                key: p.id,
                data: p
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [createVNode("div", {
              class: "scroll flex flex-nowrap"
            }, [(openBlock(true), createBlock(Fragment, null, renderList((_b = unref(data)) == null ? void 0 : _b.data, (p) => {
              return openBlock(), createBlock(_component_IndexGoodsCategoryCard, {
                key: p.id,
                data: p
              }, null, 8, ["data"]);
            }), 128))])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/CategoryLine.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GoodsTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMenu = ref("isHot");
    const planList = [{
      value: "isHot",
      icon: "i-solar:fire-bold-duotone bg-[var(--el-color-danger)]",
      label: "\u70ED\u5356\u597D\u7269",
      dto: {
        saleSort: isTrue.TRUE
      }
    }, {
      value: "isNew",
      icon: "i-solar:star-fall-minimalistic-bold-duotone bg-[var(--el-color-warning)]",
      label: "\u65B0\u54C1\u4E0A\u67B6",
      dto: {
        isNew: isTrue.TRUE
      }
    }, {
      value: "isViews",
      icon: "i-solar:sale-bold-duotone bg-[var(--el-color-success)]",
      label: "\u70ED\u5356\u597D\u7269",
      dto: {
        viewsSort: isTrue.TRUE
      }
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_ListGoodsListSsr = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_el_tabs, mergeProps({
        modelValue: unref(activeMenu),
        "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
        class: "goods-tabs"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(planList, (p) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: p.value,
                name: p.value,
                lazy: ""
              }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="${ssrRenderClass([p.icon, "mr-2 p-0.6em"])}" data-v-2fbfd506${_scopeId2}></i><strong data-v-2fbfd506${_scopeId2}>${ssrInterpolate(p.label)}</strong>`);
                  } else {
                    return [createVNode("i", {
                      class: [p.icon, "mr-2 p-0.6em"]
                    }, null, 2), createVNode("strong", null, toDisplayString(p.label), 1)];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_ListGoodsListSsr, {
                      class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5",
                      dto: p.dto,
                      "show-more-text": false,
                      limit: 10,
                      transiton: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(_component_ListGoodsListSsr, {
                      class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5",
                      dto: p.dto,
                      "show-more-text": false,
                      limit: 10,
                      transiton: ""
                    }, null, 8, ["dto"])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(), createBlock(Fragment, null, renderList(planList, (p) => {
              return createVNode(_component_el_tab_pane, {
                key: p.value,
                name: p.value,
                lazy: ""
              }, {
                label: withCtx(() => [createVNode("i", {
                  class: [p.icon, "mr-2 p-0.6em"]
                }, null, 2), createVNode("strong", null, toDisplayString(p.label), 1)]),
                default: withCtx(() => [createVNode(_component_ListGoodsListSsr, {
                  class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5",
                  dto: p.dto,
                  "show-more-text": false,
                  limit: 10,
                  transiton: ""
                }, null, 8, ["dto"])]),
                _: 2
              }, 1032, ["name"]);
            }), 64))];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/GoodsTabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2fbfd506"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CategoryGoodsList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const isLoading = ref(true);
    const {
      data
    } = ([__temp, __restore] = withAsyncContext(() => getGoodsCategoryList()), __temp = await __temp, __restore(), __temp);
    const categoryList = computed(() => {
      var _a;
      const arr = ((_a = data.value) == null ? void 0 : _a.data.sort((a, b) => a.sortOrder - b.sortOrder)) || [];
      return arr;
    });
    isLoading.value = false;
    const goodsRefs = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card_el_image = __nuxt_component_1;
      const _component_ListGoodsList = __nuxt_component_1$2;
      _push(`<!--[-->`);
      ssrRenderList(unref(categoryList), (p, i) => {
        var _a, _b;
        _push(`<div>`);
        if (unref(goodsRefs) && unref(goodsRefs)[i] && ((_b = (_a = unref(goodsRefs)[i]) == null ? void 0 : _a.goodsList) == null ? void 0 : _b.length)) {
          _push(`<h3 class="relative mt-4 flex items-center overflow-hidden border-0 border-t-1px pb-2 pt-4 border-default">${ssrInterpolate(p == null ? void 0 : p.name)} `);
          _push(ssrRenderComponent(_component_card_el_image, {
            src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.icon}?imageView2/0/w/100/format/q/50`,
            fit: "cover",
            class: "ml-4 h-8 w-8 rounded-1/2"
          }, null, _parent));
          _push(`<span ml-a cursor-pointer text-0.8rem opacity-60>\u66F4\u591A</span></h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ListGoodsList, {
          ref_for: true,
          ref_key: "goodsRefs",
          ref: goodsRefs,
          class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5",
          dto: {
            cid: p.id
          },
          limit: 10,
          "auto-stop": "",
          transiton: "",
          "show-more-text": false,
          immediate: true
        }, {
          load: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="h-2rem w-full"${_scopeId}></div>`);
            } else {
              return [createVNode("div", {
                class: "h-2rem w-full"
              })];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/CategoryGoodsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10_lazy = defineAsyncComponent(() => import('./GoodsList-AABL3AGj.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `${appName} - \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5 \u2728`,
      meta: [{
        name: "description",
        content: "\u6781\u7269\u5708-\u4E3B\u9875 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01"
      }]
    });
    useSeoMeta({
      title: `${appName} - \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5 \u2728`,
      description: "\u6781\u7269\u5708-\u4E3B\u9875 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: "\u793E\u533A,\u5546\u57CE,\u6781\u7269\u4E4B\u65C5,\u4E3B\u9875,\u804A\u5929,\u5BA2\u670D,\u8D2D\u7269,home,index,shop,chat"
    });
    const isShowGoods = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_IndexTopMenu = _sfc_main$8;
      const _component_IndexSwiperList = __nuxt_component_2;
      const _component_IndexHotGoodsList = __nuxt_component_3;
      const _component_IndexCategoryLine = _sfc_main$3;
      const _component_IndexGoodsTabs = __nuxt_component_5;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$9;
      const _component_IndexCategoryGoodsList = _sfc_main$1;
      const _component_el_text = ElText;
      const _component_LazyListGoodsList = __nuxt_component_10_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="animate-[500ms_fade-in] py-0 layout-default"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IndexTopMenu, {
              "w-full": ""
            }, null, _parent2, _scopeId));
            _push2(`<div w-full flex flex-col transition-300 md:flex-row${_scopeId}>`);
            if (_ctx.$route.path === "/") {
              _push2(ssrRenderComponent(_component_IndexSwiperList, {
                class: "my-6 aspect-ratio-1.48 w-full flex-shrink-0 md:mr-a md:h-420px md:w-620px"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_IndexHotGoodsList, {
              "mx-0": "",
              "my-6": "",
              "flex-shrink-0": ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="goods-list mb-50vh"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_IndexCategoryLine, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_IndexGoodsTabs, {
              class: "mt-6"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-2 grid-gap-6 md:grid-cols-5"${_scopeId2}><!--[-->`);
                  ssrRenderList(5, (i) => {
                    _push3(`<div h-200px w-full border-default card-default${_scopeId2}></div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_OtherPreLoading, {
                    message: "\u7535\u6CE2\u6B63\u5728\u5230\u8FBE...",
                    class: "h-20vh w-full flex-row-c-c"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode("div", {
                    class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5"
                  }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                    return createVNode("div", {
                      key: i,
                      "h-200px": "",
                      "w-full": "",
                      "border-default": "",
                      "card-default": ""
                    });
                  }), 64))]), createVNode(_component_OtherPreLoading, {
                    message: "\u7535\u6CE2\u6B63\u5728\u5230\u8FBE...",
                    class: "h-20vh w-full flex-row-c-c"
                  })];
                }
              })
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [createVNode("div", {
              class: "animate-[500ms_fade-in] py-0 layout-default"
            }, [createVNode(_component_IndexTopMenu, {
              "w-full": ""
            }), createVNode("div", {
              "w-full": "",
              flex: "",
              "flex-col": "",
              "transition-300": "",
              "md:flex-row": ""
            }, [_ctx.$route.path === "/" ? (openBlock(), createBlock(_component_IndexSwiperList, {
              key: 0,
              class: "my-6 aspect-ratio-1.48 w-full flex-shrink-0 md:mr-a md:h-420px md:w-620px"
            })) : createCommentVNode("", true), createVNode(_component_IndexHotGoodsList, {
              "mx-0": "",
              "my-6": "",
              "flex-shrink-0": ""
            })]), createVNode("div", {
              class: "goods-list mb-50vh"
            }, [createVNode(_component_IndexCategoryLine), createVNode(_component_IndexGoodsTabs, {
              class: "mt-6"
            }), createVNode(_component_ClientOnly, null, {
              fallback: withCtx(() => [createVNode("div", {
                class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5"
              }, [(openBlock(), createBlock(Fragment, null, renderList(5, (i) => {
                return createVNode("div", {
                  key: i,
                  "h-200px": "",
                  "w-full": "",
                  "border-default": "",
                  "card-default": ""
                });
              }), 64))]), createVNode(_component_OtherPreLoading, {
                message: "\u7535\u6CE2\u6B63\u5728\u5230\u8FBE...",
                class: "h-20vh w-full flex-row-c-c"
              })]),
              default: withCtx(() => [createVNode("div", {
                class: "w-full animate-[400ms_fade-in]"
              }, [createVNode(_component_IndexCategoryGoodsList), !unref(isShowGoods) ? (openBlock(), createBlock(_component_el_text, {
                key: 0,
                class: "block h-10vh w-full cursor-pointer text-center",
                onMouseenter: ($event) => isShowGoods.value = true,
                onClick: ($event) => isShowGoods.value = true
              }, {
                default: withCtx(() => [createTextVNode(" \u52A0\u8F7D\u66F4\u591A ")]),
                _: 1
              }, 8, ["onMouseenter", "onClick"])) : (openBlock(), createBlock(_component_LazyListGoodsList, {
                key: 1,
                class: "grid grid-cols-2 grid-gap-6 md:grid-cols-5",
                dto: {
                  viewsSort: ("isTrue" in _ctx ? _ctx.isTrue : unref(isTrue)).TRUE
                },
                immediate: "",
                "auto-stop": ""
              }, {
                pre: withCtx(() => [createVNode("h2", {
                  "mb-2em": "",
                  "text-center": "",
                  "tracking-0.1em": ""
                }, [createVNode("i", {
                  "i-solar:bag-smile-bold-duotone": "",
                  "mr-2": "",
                  class: "bg-[var(--el-color-danger)]",
                  "p-4": ""
                }), createTextVNode(" \u731C\u4F60\u559C\u6B22 ")])]),
                _: 1
              }, 8, ["dto"]))])]),
              _: 1
            })])])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-pt04Jo-C.mjs.map
