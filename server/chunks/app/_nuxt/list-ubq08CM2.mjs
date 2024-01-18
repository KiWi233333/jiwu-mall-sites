import { b as _export_sfc, i as isTrue, B as BaseUrlImg, c as useSeoMeta, u as useUserStore, n as navigateTo, _ as __nuxt_component_0, e as __nuxt_component_0$1 } from '../server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { Autoplay, Pagination, Controller, EffectCreative, Mousewheel } from 'swiper/modules';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, createTextVNode, toDisplayString, Fragment, renderList, ref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { a as getPostPageLazy } from './post-uKGC7P8z.mjs';
import { _ as _sfc_main$3 } from './PreLoading-Sou-hyZj.mjs';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import __nuxt_component_2 from './PostList--cNB2Ocs.mjs';
import { _ as _sfc_main$4 } from './SigninCard-hNL7zee-.mjs';
import __nuxt_component_6 from './Rank-IlBfomYu.mjs';
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
import 'currency.js';
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
import './progress-lh-pSAoE.mjs';
import './index-BBhc0WGX.mjs';
import './index-S-yJffF9.mjs';
import './focus-trap-FUoXuQZs.mjs';
import './divider-PhlLqhAq.mjs';
import './scrollbar-rGnTaDH3.mjs';
import './ElImage-j3i6j_3Z.mjs';
import './empty-YBmMukHu.mjs';
import './index-Jkc1A1yz.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostSwiper",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const tagTypeList = ["warning", "info", "danger", "", "warning", "success"];
    const {
      data
    } = ([__temp, __restore] = withAsyncContext(() => getPostPageLazy(1, 8, {
      viewsSort: isTrue.TRUE
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_el_tag = ElTag;
      _push(`<div${ssrRenderAttrs(mergeProps({
        "cursor-pointer": "",
        "overflow-hidden": "",
        "rounded-6px": "",
        class: "relative"
      }, _attrs))} data-v-a0d45437>`);
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
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_b = (_a = unref(data)) == null ? void 0 : _a.data) == null ? void 0 : _b.records, (p) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                key: p.id,
                class: "swiper-item overflow-hidden rounded bg-white border-default dark:bg-dark-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`<div class="swiper-card relative overflow-hidden card-default" data-v-a0d45437${_scopeId2}>`);
                    if (p.isEssence) {
                      _push3(`<div class="is-essence shadow-sm" data-v-a0d45437${_scopeId2}> \u7CBE\u9009 </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_NuxtLink, {
                      to: {
                        path: `/community/post/detail/${p.id}`,
                        query: {
                          title: p.title
                        }
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (p == null ? void 0 : p.cover) {
                            _push4(`<img loading="lazy"${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover)}${ssrRenderAttr("alt", p.title)} class="block h-20rem w-full overflow-hidden object-cover v-card" fit="cover" data-v-a0d45437${_scopeId3}>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [(p == null ? void 0 : p.cover) ? (openBlock(), createBlock("img", {
                            key: 0,
                            loading: "lazy",
                            src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover,
                            alt: p.title,
                            class: "block h-20rem w-full overflow-hidden object-cover v-card",
                            fit: "cover"
                          }, null, 8, ["src", "alt"])) : createCommentVNode("", true)];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    if (p.user) {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        to: `/user/info?id=${p == null ? void 0 : p.userId}`,
                        class: "absolute right-1rem top-1rem flex-row-bt-c cursor-pointer rounded bg-transparent px-3 py-2 leading-1.1em text-white backdrop-blur transition-300 group-hover:bg-[#31313142] hover:bg-[#33333333] hover:backdrop-blur dark:backdrop-blur-0"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          var _a3, _b3, _c2, _d2;
                          if (_push4) {
                            _push4(`<img class="mr-2 block h-1.8rem w-1.8rem rounded-1/2 object-cover" fill="cover" loading="lazy"${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a3 = p == null ? void 0 : p.user) == null ? void 0 : _a3.avatar))}${ssrRenderAttr("alt", (_b3 = p == null ? void 0 : p.user) == null ? void 0 : _b3.username)} data-v-a0d45437${_scopeId3}><small flex flex-col data-v-a0d45437${_scopeId3}>${ssrInterpolate(p == null ? void 0 : p.user.nickname)} <small opacity-60 transition-200 group-hover:opacity-100 class="text-[var(--el-color-info)]" data-v-a0d45437${_scopeId3}>\u5173\u6CE8</small></small>`);
                          } else {
                            return [createVNode("img", {
                              class: "mr-2 block h-1.8rem w-1.8rem rounded-1/2 object-cover",
                              fill: "cover",
                              loading: "lazy",
                              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_c2 = p == null ? void 0 : p.user) == null ? void 0 : _c2.avatar),
                              alt: (_d2 = p == null ? void 0 : p.user) == null ? void 0 : _d2.username
                            }, null, 8, ["src", "alt"]), createVNode("small", {
                              flex: "",
                              "flex-col": ""
                            }, [createTextVNode(toDisplayString(p == null ? void 0 : p.user.nickname) + " ", 1), createVNode("small", {
                              "opacity-60": "",
                              "transition-200": "",
                              "group-hover:opacity-100": "",
                              class: "text-[var(--el-color-info)]"
                            }, "\u5173\u6CE8")])];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div absolute bottom-1.4rem left-2rem transition-300 data-v-a0d45437${_scopeId2}><h2 class="blur-card-line truncate px-4 py-2" data-v-a0d45437${_scopeId2}>${ssrInterpolate(p.title)}</h2>`);
                    if (p.tags) {
                      _push3(`<div class="tags mt-2 h-0 overflow-hidden transition-300 transition-all" grid="~ gap-1" flex data-v-a0d45437${_scopeId2}><!--[-->`);
                      ssrRenderList((_a2 = p == null ? void 0 : p.tags) == null ? void 0 : _a2.split(","), (tag, i) => {
                        _push3(ssrRenderComponent(_component_el_tag, {
                          key: tag,
                          size: "small",
                          class: "opacity-80",
                          effect: "dark",
                          type: tagTypeList[i] || "info"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(tag)}`);
                            } else {
                              return [createTextVNode(toDisplayString(tag), 1)];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [createVNode("div", {
                      class: "swiper-card relative overflow-hidden card-default"
                    }, [p.isEssence ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "is-essence shadow-sm"
                    }, " \u7CBE\u9009 ")) : createCommentVNode("", true), createVNode(_component_NuxtLink, {
                      to: {
                        path: `/community/post/detail/${p.id}`,
                        query: {
                          title: p.title
                        }
                      }
                    }, {
                      default: withCtx(() => [(p == null ? void 0 : p.cover) ? (openBlock(), createBlock("img", {
                        key: 0,
                        loading: "lazy",
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover,
                        alt: p.title,
                        class: "block h-20rem w-full overflow-hidden object-cover v-card",
                        fit: "cover"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)]),
                      _: 2
                    }, 1032, ["to"]), p.user ? (openBlock(), createBlock(_component_NuxtLink, {
                      key: 1,
                      to: `/user/info?id=${p == null ? void 0 : p.userId}`,
                      class: "absolute right-1rem top-1rem flex-row-bt-c cursor-pointer rounded bg-transparent px-3 py-2 leading-1.1em text-white backdrop-blur transition-300 group-hover:bg-[#31313142] hover:bg-[#33333333] hover:backdrop-blur dark:backdrop-blur-0"
                    }, {
                      default: withCtx(() => {
                        var _a3, _b3;
                        return [createVNode("img", {
                          class: "mr-2 block h-1.8rem w-1.8rem rounded-1/2 object-cover",
                          fill: "cover",
                          loading: "lazy",
                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a3 = p == null ? void 0 : p.user) == null ? void 0 : _a3.avatar),
                          alt: (_b3 = p == null ? void 0 : p.user) == null ? void 0 : _b3.username
                        }, null, 8, ["src", "alt"]), createVNode("small", {
                          flex: "",
                          "flex-col": ""
                        }, [createTextVNode(toDisplayString(p == null ? void 0 : p.user.nickname) + " ", 1), createVNode("small", {
                          "opacity-60": "",
                          "transition-200": "",
                          "group-hover:opacity-100": "",
                          class: "text-[var(--el-color-info)]"
                        }, "\u5173\u6CE8")])];
                      }),
                      _: 2
                    }, 1032, ["to"])) : createCommentVNode("", true), createVNode("div", {
                      absolute: "",
                      "bottom-1.4rem": "",
                      "left-2rem": "",
                      "transition-300": ""
                    }, [createVNode("h2", {
                      class: "blur-card-line truncate px-4 py-2"
                    }, toDisplayString(p.title), 1), p.tags ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "tags mt-2 h-0 overflow-hidden transition-300 transition-all",
                      grid: "~ gap-1",
                      flex: ""
                    }, [(openBlock(true), createBlock(Fragment, null, renderList((_b2 = p == null ? void 0 : p.tags) == null ? void 0 : _b2.split(","), (tag, i) => {
                      return openBlock(), createBlock(_component_el_tag, {
                        key: tag,
                        size: "small",
                        class: "opacity-80",
                        effect: "dark",
                        type: tagTypeList[i] || "info"
                      }, {
                        default: withCtx(() => [createTextVNode(toDisplayString(tag), 1)]),
                        _: 2
                      }, 1032, ["type"]);
                    }), 128))])) : createCommentVNode("", true)])])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList((_d = (_c = unref(data)) == null ? void 0 : _c.data) == null ? void 0 : _d.records, (p) => {
              return openBlock(), createBlock(_component_swiper_slide, {
                key: p.id,
                class: "swiper-item overflow-hidden rounded bg-white border-default dark:bg-dark-4"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [createVNode("div", {
                    class: "swiper-card relative overflow-hidden card-default"
                  }, [p.isEssence ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "is-essence shadow-sm"
                  }, " \u7CBE\u9009 ")) : createCommentVNode("", true), createVNode(_component_NuxtLink, {
                    to: {
                      path: `/community/post/detail/${p.id}`,
                      query: {
                        title: p.title
                      }
                    }
                  }, {
                    default: withCtx(() => [(p == null ? void 0 : p.cover) ? (openBlock(), createBlock("img", {
                      key: 0,
                      loading: "lazy",
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p.cover,
                      alt: p.title,
                      class: "block h-20rem w-full overflow-hidden object-cover v-card",
                      fit: "cover"
                    }, null, 8, ["src", "alt"])) : createCommentVNode("", true)]),
                    _: 2
                  }, 1032, ["to"]), p.user ? (openBlock(), createBlock(_component_NuxtLink, {
                    key: 1,
                    to: `/user/info?id=${p == null ? void 0 : p.userId}`,
                    class: "absolute right-1rem top-1rem flex-row-bt-c cursor-pointer rounded bg-transparent px-3 py-2 leading-1.1em text-white backdrop-blur transition-300 group-hover:bg-[#31313142] hover:bg-[#33333333] hover:backdrop-blur dark:backdrop-blur-0"
                  }, {
                    default: withCtx(() => {
                      var _a3, _b2;
                      return [createVNode("img", {
                        class: "mr-2 block h-1.8rem w-1.8rem rounded-1/2 object-cover",
                        fill: "cover",
                        loading: "lazy",
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a3 = p == null ? void 0 : p.user) == null ? void 0 : _a3.avatar),
                        alt: (_b2 = p == null ? void 0 : p.user) == null ? void 0 : _b2.username
                      }, null, 8, ["src", "alt"]), createVNode("small", {
                        flex: "",
                        "flex-col": ""
                      }, [createTextVNode(toDisplayString(p == null ? void 0 : p.user.nickname) + " ", 1), createVNode("small", {
                        "opacity-60": "",
                        "transition-200": "",
                        "group-hover:opacity-100": "",
                        class: "text-[var(--el-color-info)]"
                      }, "\u5173\u6CE8")])];
                    }),
                    _: 2
                  }, 1032, ["to"])) : createCommentVNode("", true), createVNode("div", {
                    absolute: "",
                    "bottom-1.4rem": "",
                    "left-2rem": "",
                    "transition-300": ""
                  }, [createVNode("h2", {
                    class: "blur-card-line truncate px-4 py-2"
                  }, toDisplayString(p.title), 1), p.tags ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "tags mt-2 h-0 overflow-hidden transition-300 transition-all",
                    grid: "~ gap-1",
                    flex: ""
                  }, [(openBlock(true), createBlock(Fragment, null, renderList((_a2 = p == null ? void 0 : p.tags) == null ? void 0 : _a2.split(","), (tag, i) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: tag,
                      size: "small",
                      class: "opacity-80",
                      effect: "dark",
                      type: tagTypeList[i] || "info"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(tag), 1)]),
                      _: 2
                    }, 1032, ["type"]);
                  }), 128))])) : createCommentVNode("", true)])])];
                }),
                _: 2
              }, 1024);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/PostSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a0d45437"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostTabs",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMenu = ref("new");
    const menuList = [{
      name: "all",
      label: "\u5168\u90E8",
      dto: {}
    }, {
      name: "new",
      icon: "i-solar:bolt-bold-duotone mr-2 ",
      label: "\u6700\u65B0",
      dto: {
        isNew: isTrue.TRUE
      }
    }, {
      name: "hot",
      icon: "i-solar:fire-bold-duotone mr-2 ",
      label: "\u70ED\u95E8",
      dto: {
        viewsSort: isTrue.TRUE
      }
    }, {
      name: "essence",
      label: "\u7CBE\u9009",
      icon: "i-solar:star-fall-minimalistic-bold-duotone mr-2 ",
      dto: {
        isEssence: isTrue.TRUE
      }
    }, {
      name: "comment",
      icon: "i-solar:chat-round-line-bold-duotone mr-2 ",
      label: "\u70ED\u8BC4",
      dto: {
        commentSort: isTrue.TRUE
      }
    }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_CommPostList = __nuxt_component_2;
      _push(ssrRenderComponent(_component_el_tabs, mergeProps({
        modelValue: unref(activeMenu),
        "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
        "tab-position": "top"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(menuList, (p) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: p.name,
                class: "mt-4 px-1",
                name: p.name,
                lazy: ""
              }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="group"${_scopeId2}>`);
                    if (p.icon) {
                      _push3(`<i class="${ssrRenderClass([p.icon, "icon inline-block h-1em w-0 overflow-hidden transition-200 transition-all group-hover:w-1em"])}"${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(p.label)}</div>`);
                  } else {
                    return [createVNode("div", {
                      class: "group"
                    }, [p.icon ? (openBlock(), createBlock("i", {
                      key: 0,
                      class: [p.icon, "icon inline-block h-1em w-0 overflow-hidden transition-200 transition-all group-hover:w-1em"]
                    }, null, 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(p.label), 1)])];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_CommPostList, {
                      dto: p.dto,
                      class: "grid grid-gap-4"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [createVNode(_component_CommPostList, {
                      dto: p.dto,
                      class: "grid grid-gap-4"
                    }, null, 8, ["dto"])];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(), createBlock(Fragment, null, renderList(menuList, (p) => {
              return createVNode(_component_el_tab_pane, {
                key: p.name,
                class: "mt-4 px-1",
                name: p.name,
                lazy: ""
              }, {
                label: withCtx(() => [createVNode("div", {
                  class: "group"
                }, [p.icon ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: [p.icon, "icon inline-block h-1em w-0 overflow-hidden transition-200 transition-all group-hover:w-1em"]
                }, null, 2)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(p.label), 1)])]),
                default: withCtx(() => [createVNode(_component_CommPostList, {
                  dto: p.dto,
                  class: "grid grid-gap-4"
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/PostTabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u793E\u533A\u4E2D\u5FC3 - \u6781\u7269\u5708 \u{1F451}",
      description: "\u793E\u533A\u4E2D\u5FC3 - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: "\u793E\u533A,\u5546\u57CE,\u6781\u7269\u4E4B\u65C5,\u4E3B\u9875,\u804A\u5929,\u5BA2\u670D,\u8D2D\u7269,home,index,shop,chat"
    });
    const user = useUserStore();
    function toNewPostPage(cid) {
      navigateTo({
        path: cid ? `/community/post/new?cid=${cid}` : "/community/post/new"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CommPostSwiper = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$3;
      const _component_CommPostTabs = _sfc_main$1;
      const _component_UserInfoSigninCard = _sfc_main$4;
      const _component_CommPostRank = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-e3aacd0e>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "main",
        menu: ["back", {
          name: "home",
          isTeleport: true
        }, {
          name: "post",
          isTeleport: true,
          methods: toNewPostPage
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div layout-default grid="~ cols-1 gap-6" data-v-e3aacd0e${_scopeId}><h2 mt-2 leading-1.8em data-v-e3aacd0e${_scopeId}> Hello, <br data-v-e3aacd0e${_scopeId}>\u6B22\u8FCE\u6765\u5230\u6781\u7269\u5708 \u{1F451} </h2><div grid="~ md:cols-[5fr_2fr] cols-1 gap-6 items-start" min-h-100vh data-v-e3aacd0e${_scopeId}><main class="pt-0" grid="~ cols-1 gap-6" data-v-e3aacd0e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommPostSwiper, {
              class: "h-20rem w-full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OtherPreLoading, {
                    message: "",
                    class: "h-12rem max-w-full truncate card-default"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_OtherPreLoading, {
                    message: "",
                    class: "h-12rem max-w-full truncate card-default"
                  })];
                }
              })
            }, _parent2, _scopeId));
            _push2(`</main><section class="sticky top-5rem flex flex-col gap-6" data-v-e3aacd0e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OtherPreLoading, {
                    message: "",
                    class: "h-12rem max-w-full truncate card-default"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_OtherPreLoading, {
                    message: "",
                    class: "h-12rem max-w-full truncate card-default"
                  })];
                }
              })
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommPostRank, {
              immediate: true,
              limit: 10,
              dto: {
                viewsSort: 1
              }
            }, null, _parent2, _scopeId));
            _push2(`</section></div></div>`);
          } else {
            return [createVNode("div", {
              "layout-default": "",
              grid: "~ cols-1 gap-6"
            }, [createVNode("h2", {
              "mt-2": "",
              "leading-1.8em": ""
            }, [createTextVNode(" Hello, "), createVNode("br"), createTextVNode("\u6B22\u8FCE\u6765\u5230\u6781\u7269\u5708 \u{1F451} ")]), createVNode("div", {
              grid: "~ md:cols-[5fr_2fr] cols-1 gap-6 items-start",
              "min-h-100vh": ""
            }, [createVNode("main", {
              class: "pt-0",
              grid: "~ cols-1 gap-6"
            }, [createVNode(_component_CommPostSwiper, {
              class: "h-20rem w-full"
            }), createVNode(_component_ClientOnly, null, {
              fallback: withCtx(() => [createVNode(_component_OtherPreLoading, {
                message: "",
                class: "h-12rem max-w-full truncate card-default"
              })]),
              default: withCtx(() => [createVNode(_component_CommPostTabs)]),
              _: 1
            })]), createVNode("section", {
              class: "sticky top-5rem flex flex-col gap-6"
            }, [createVNode(_component_ClientOnly, null, {
              fallback: withCtx(() => [createVNode(_component_OtherPreLoading, {
                message: "",
                class: "h-12rem max-w-full truncate card-default"
              })]),
              default: withCtx(() => [unref(user).isLogin ? (openBlock(), createBlock(_component_UserInfoSigninCard, {
                key: 0,
                class: "h-12rem max-w-full truncate"
              })) : createCommentVNode("", true)]),
              _: 1
            }), createVNode(_component_CommPostRank, {
              immediate: true,
              limit: 10,
              dto: {
                viewsSort: 1
              }
            })])])])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community/post/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3aacd0e"]]);

export { list as default };
//# sourceMappingURL=list-ubq08CM2.mjs.map
