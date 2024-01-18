import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { b as ElSubMenu, a as ElMenuItem, E as ElMenu } from './index-sWHBwfNP.mjs';
import { b as _export_sfc, B as BaseUrlImg, t as useRoute, e as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, renderList, ref, watch, withAsyncContext } from 'vue';
import { ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { u as useSettingStore } from './useSettingStore-kkOnzP9-.mjs';
import { _ as _imports_0 } from './kiwi_strong-IxCbk6o6.mjs';
import './event-9ZI5GX64.mjs';
import '@vue/shared';
import 'lodash-unified';
import './index-OUXJ-ySL.mjs';
import './index-S-yJffF9.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-FUoXuQZs.mjs';
import '@ctrl/tinycolor';
import './vnode-YsXVLyOk.mjs';
import './index-Ud8N-GPr.mjs';
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
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import './category-HtxOPKX5.mjs';
import './fetch-YS3Fxkuj.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Line",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_MenuLine = _sfc_main$1;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(((_a = _ctx.data.children) == null ? void 0 : _a.length) ? unref(ElSubMenu) : unref(ElMenuItem)), mergeProps({
        index: (_b = _ctx.data) == null ? void 0 : _b.url,
        "popper-offset": 10
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            if ((_a2 = _ctx.data.children) == null ? void 0 : _a2.length) {
              _push2(`<div flex-row-c-c${_scopeId}>`);
              if (_ctx.data.icon) {
                _push2(`<i class="${ssrRenderClass([_ctx.data.icon, "transition-100"])}" p-0.8em filter-drop-shadow${_scopeId}></i>`);
              } else if (_ctx.data.image) {
                _push2(`<img${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image)} loading="lazy"${ssrRenderAttr("alt", _ctx.data.title)} class="h-2.4em w-2.4em card-default" fit="cover"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="flex-1 animate-[fade-in] overflow-hidden truncate text-center tracking-0.4em"${_scopeId}>${ssrInterpolate(_ctx.data.title)}</span>`);
          } else {
            return [((_b2 = _ctx.data.children) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
              key: 0,
              "flex-row-c-c": ""
            }, [_ctx.data.icon ? (openBlock(), createBlock("i", {
              key: 0,
              class: ["transition-100", _ctx.data.icon],
              "p-0.8em": "",
              "filter-drop-shadow": ""
            }, null, 2)) : _ctx.data.image ? (openBlock(), createBlock("img", {
              key: 1,
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image,
              loading: "lazy",
              alt: _ctx.data.title,
              class: "h-2.4em w-2.4em card-default",
              fit: "cover"
            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)])) : createCommentVNode("", true), createVNode("span", {
              class: "flex-1 animate-[fade-in] overflow-hidden truncate text-center tracking-0.4em"
            }, toDisplayString(_ctx.data.title), 1)];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<div flex-row-c-c${_scopeId}>`);
            if (_ctx.data.icon && !((_a2 = _ctx.data.children) == null ? void 0 : _a2.length)) {
              _push2(`<i class="${ssrRenderClass([_ctx.data.icon, "transition-200"])}" filter-drop-shadows p-0.8em${_scopeId}></i>`);
            } else if (_ctx.data.image && !((_b2 = _ctx.data.children) == null ? void 0 : _b2.length)) {
              _push2(`<img${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image)} loading="lazy"${ssrRenderAttr("alt", _ctx.data.title)} class="h-2.4em w-2.4em card-default" fit="cover"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div h-3rem w-full${_scopeId2}></div>`);
                } else {
                  return [createVNode("div", {
                    "h-3rem": "",
                    "w-full": ""
                  })];
                }
              })
            }, _parent2, _scopeId));
          } else {
            return [createVNode("div", {
              "flex-row-c-c": ""
            }, [_ctx.data.icon && !((_c = _ctx.data.children) == null ? void 0 : _c.length) ? (openBlock(), createBlock("i", {
              key: 0,
              class: ["transition-200", _ctx.data.icon],
              "filter-drop-shadows": "",
              "p-0.8em": ""
            }, null, 2)) : _ctx.data.image && !((_d = _ctx.data.children) == null ? void 0 : _d.length) ? (openBlock(), createBlock("img", {
              key: 1,
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image,
              loading: "lazy",
              alt: _ctx.data.title,
              class: "h-2.4em w-2.4em card-default",
              fit: "cover"
            }, null, 8, ["src", "alt"])) : createCommentVNode("", true)]), createVNode(_component_ClientOnly, null, {
              fallback: withCtx(() => [createVNode("div", {
                "h-3rem": "",
                "w-full": ""
              })]),
              default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.children, (child) => {
                return openBlock(), createBlock(_component_MenuLine, {
                  key: child.url,
                  data: child
                }, null, 8, ["data"]);
              }), 128))]),
              _: 1
            })];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/Line.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DrawerMenu",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const setting = useSettingStore();
    const route = useRoute();
    const path = ref(route.path);
    watch(() => route.path, (val) => {
      path.value = val;
    });
    [__temp, __restore] = withAsyncContext(() => setting.loadMenus()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_menu = ElMenu;
      const _component_MenuLine = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "menu-list fixed left-0 z-998 block h-full md:sticky"
      }, _attrs))} data-v-a63ed4d8><div style="${ssrRenderStyle([!unref(setting).isCollapse ? null : {
        display: "none"
      }, {
        "background-color": "#85858510"
      }])}" class="mock fixed left-0 top-0 z-998 block h-full w-full backdrop-blur sm:hidden" data-v-a63ed4d8></div><div class="menu relative top-0 z-998 animate-[300ms_fade-in] transition-200 md:shadow-none" data-v-a63ed4d8>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        style: !unref(setting).isCollapse ? null : {
          display: "none"
        },
        height: "100%",
        "wrap-class": "px-3 bg-white backdrop-blur-30 dark:bg-dark-8 border-default border-0 border-r-1px dark:bg-dark-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu, {
              class: "menu-first",
              "default-active": unref(path),
              collapse: (_a = unref(setting)) == null ? void 0 : _a.isFold,
              "unique-open": "",
              router: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  _push3(`<div class="sticky left-0 top-0 flex flex-wrap border-0 border-b-1px rounded-0 transition-200 transition-300 transition-all border-default hover:bg-transparent" data-v-a63ed4d8${_scopeId2}><img loading="lazy" alt="Design By Kiwi23333"${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass([{
                    "mx-a": (_a2 = unref(setting)) == null ? void 0 : _a2.isFold
                  }, "filter-shadow m-3 block"])}" h-1.8rem w-1.8rem data-v-a63ed4d8${_scopeId2}><i inline-block h-1.6rem w-1.6rem cursor-pointer class="${ssrRenderClass([{
                    "mx-a": (_b2 = unref(setting)) == null ? void 0 : _b2.isFold
                  }, "i-solar:hamburger-menu-line-duotone m-3 ml-a block text-dark dark:text-light"])}" data-v-a63ed4d8${_scopeId2}></i></div><!--[-->`);
                  ssrRenderList(unref(setting).menuList, (data) => {
                    _push3(ssrRenderComponent(_component_MenuLine, {
                      key: data.url,
                      data
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [createVNode("div", {
                    class: "sticky left-0 top-0 flex flex-wrap border-0 border-b-1px rounded-0 transition-200 transition-300 transition-all border-default hover:bg-transparent"
                  }, [createVNode("img", {
                    loading: "lazy",
                    alt: "Design By Kiwi23333",
                    src: _imports_0,
                    class: ["filter-shadow m-3 block", {
                      "mx-a": (_c = unref(setting)) == null ? void 0 : _c.isFold
                    }],
                    "h-1.8rem": "",
                    "w-1.8rem": ""
                  }, null, 2), createVNode("i", {
                    class: ["i-solar:hamburger-menu-line-duotone m-3 ml-a block text-dark dark:text-light", {
                      "mx-a": (_d = unref(setting)) == null ? void 0 : _d.isFold
                    }],
                    "inline-block": "",
                    "h-1.6rem": "",
                    "w-1.6rem": "",
                    "cursor-pointer": "",
                    onClick: ($event) => {
                      var _a3;
                      return unref(setting).isFold = !((_a3 = unref(setting)) == null ? void 0 : _a3.isFold);
                    }
                  }, null, 10, ["onClick"])]), (openBlock(true), createBlock(Fragment, null, renderList(unref(setting).menuList, (data) => {
                    return openBlock(), createBlock(_component_MenuLine, {
                      key: data.url,
                      data
                    }, null, 8, ["data"]);
                  }), 128))];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_menu, {
              class: "menu-first",
              "default-active": unref(path),
              collapse: (_b = unref(setting)) == null ? void 0 : _b.isFold,
              "unique-open": "",
              router: true
            }, {
              default: withCtx(() => {
                var _a2, _b2;
                return [createVNode("div", {
                  class: "sticky left-0 top-0 flex flex-wrap border-0 border-b-1px rounded-0 transition-200 transition-300 transition-all border-default hover:bg-transparent"
                }, [createVNode("img", {
                  loading: "lazy",
                  alt: "Design By Kiwi23333",
                  src: _imports_0,
                  class: ["filter-shadow m-3 block", {
                    "mx-a": (_a2 = unref(setting)) == null ? void 0 : _a2.isFold
                  }],
                  "h-1.8rem": "",
                  "w-1.8rem": ""
                }, null, 2), createVNode("i", {
                  class: ["i-solar:hamburger-menu-line-duotone m-3 ml-a block text-dark dark:text-light", {
                    "mx-a": (_b2 = unref(setting)) == null ? void 0 : _b2.isFold
                  }],
                  "inline-block": "",
                  "h-1.6rem": "",
                  "w-1.6rem": "",
                  "cursor-pointer": "",
                  onClick: ($event) => {
                    var _a3;
                    return unref(setting).isFold = !((_a3 = unref(setting)) == null ? void 0 : _a3.isFold);
                  }
                }, null, 10, ["onClick"])]), (openBlock(true), createBlock(Fragment, null, renderList(unref(setting).menuList, (data) => {
                  return openBlock(), createBlock(_component_MenuLine, {
                    key: data.url,
                    data
                  }, null, 8, ["data"]);
                }), 128))];
              }),
              _: 1
            }, 8, ["default-active", "collapse"])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div flex-row-c-c cursor-pointer rounded-r-8px shadow-sm hover:-translate-x-1 transition="all 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" class="${ssrRenderClass([{
        " bg-[var(--el-color-primary)] shadow-indigo-600 text-white": unref(setting).isCollapse
      }, "absolute bottom-2rem h-3rem w-2rem pl-1 text-[var(--el-color-primary)] -right-2rem -translate-x-2"])}" data-v-a63ed4d8><i transition="all 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" class="${ssrRenderClass({
        "rotate-180 text-white": unref(setting).isCollapse
      })}" i-solar:alt-arrow-left-bold p-3 data-v-a63ed4d8></i></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/DrawerMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DrawerMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a63ed4d8"]]);

export { DrawerMenu as default };
//# sourceMappingURL=DrawerMenu-3FbQcH0_.mjs.map
