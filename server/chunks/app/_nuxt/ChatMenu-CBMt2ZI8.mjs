import { E as ElMenu, a as ElMenuItem } from './index-sWHBwfNP.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-tpk2tUXY.mjs';
import { b as _export_sfc, t as useRoute } from '../server.mjs';
import { u as useSettingStore } from './useSettingStore-kkOnzP9-.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createVNode, withDirectives, vShow, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import './event-9ZI5GX64.mjs';
import 'lodash-unified';
import './index-OUXJ-ySL.mjs';
import './index-S-yJffF9.mjs';
import './aria-sbEPrgvQ.mjs';
import '@vue/shared';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChatMenu",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props) {
    const route = useRoute();
    const menuList = [{
      title: "\u804A\u5929",
      path: "/chat",
      icon: "i-solar:chat-line-broken",
      activeIcon: "i-solar:chat-line-bold-duotone"
    }, {
      title: "\u597D\u53CB",
      path: "/chat/friend",
      icon: "i-solar:users-group-rounded-line-duotone",
      activeIcon: "i-solar:users-group-rounded-bold-duotone"
    }, {
      title: "\u56DE\u5230\u9996\u9875",
      path: "/",
      icon: "i-solar:logout-3-broken"
    }];
    const setting = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_menu = ElMenu;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_el_menu_item = ElMenuItem;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "menu fixed z-998 h-full bg-light bg-opacity-80 backdrop-blur-30 md:sticky md:block dark:bg-[#121212] md:shadow-none"
      }, _attrs))} data-v-84d945fa>`);
      if (unref(setting).isChatFold) {
        _push(ssrRenderComponent(_component_el_menu, {
          router: true,
          "default-active": unref(route).path,
          collapse: unref(setting).isUserFold
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-full flex-row-c-c flex-wrap px-5 transition-300 transition-300 hover:bg-transparent" data-v-84d945fa${_scopeId}><div class="home mt-6 self-center transition-300" data-v-84d945fa${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                "flex-row-c-c": "",
                class: "group"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="i-solar:home-2-broken p-0.6em" data-v-84d945fa${_scopeId2}></i>`);
                  } else {
                    return [createVNode("i", {
                      class: "i-solar:home-2-broken p-0.6em"
                    })];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><span class="${ssrRenderClass([unref(setting).isUserFold ? "hover:rotate-15" : "hover:-rotate-15", "ml-a mt-6 p-1 transition-300"])}" data-v-84d945fa${_scopeId}><i class="i-solar:signpost-2-line-duotone" cursor-pointer p-0.6em data-v-84d945fa${_scopeId}></i></span></div><div class="mx-a my-4 w-5/6 border-0 border-b-1px border-default" data-v-84d945fa${_scopeId}></div><!--[-->`);
              ssrRenderList(menuList, (p) => {
                _push2(ssrRenderComponent(_component_el_menu_item, {
                  key: p.path,
                  index: p.path
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i style="${ssrRenderStyle(unref(route).path !== p.path ? null : {
                        display: "none"
                      })}" class="${ssrRenderClass([p.icon, "icon"])}" data-v-84d945fa${_scopeId2}></i><i style="${ssrRenderStyle(unref(route).path === p.path ? null : {
                        display: "none"
                      })}" class="${ssrRenderClass([p.activeIcon, "icon"])}" data-v-84d945fa${_scopeId2}></i><span class="title overflow-hidden px-6 font-500 tracking-0.2em" data-v-84d945fa${_scopeId2}>${ssrInterpolate(p.title)}</span>`);
                    } else {
                      return [withDirectives(createVNode("i", {
                        class: ["icon", p.icon]
                      }, null, 2), [[vShow, unref(route).path !== p.path]]), withDirectives(createVNode("i", {
                        class: ["icon", p.activeIcon]
                      }, null, 2), [[vShow, unref(route).path === p.path]]), createVNode("span", {
                        class: "title overflow-hidden px-6 font-500 tracking-0.2em"
                      }, toDisplayString(p.title), 1)];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [createVNode("div", {
                class: "w-full flex-row-c-c flex-wrap px-5 transition-300 transition-300 hover:bg-transparent"
              }, [createVNode("div", {
                class: "home mt-6 self-center transition-300"
              }, [createVNode(_component_NuxtLink, {
                to: "/",
                "flex-row-c-c": "",
                class: "group"
              }, {
                default: withCtx(() => [createVNode("i", {
                  class: "i-solar:home-2-broken p-0.6em"
                })]),
                _: 1
              })]), createVNode("span", {
                class: ["ml-a mt-6 p-1 transition-300", unref(setting).isUserFold ? "hover:rotate-15" : "hover:-rotate-15"],
                onClick: ($event) => unref(setting).isUserFold = !unref(setting).isUserFold
              }, [createVNode("i", {
                class: "i-solar:signpost-2-line-duotone",
                "cursor-pointer": "",
                "p-0.6em": ""
              })], 10, ["onClick"])]), createVNode("div", {
                class: "mx-a my-4 w-5/6 border-0 border-b-1px border-default"
              }), (openBlock(), createBlock(Fragment, null, renderList(menuList, (p) => {
                return createVNode(_component_el_menu_item, {
                  key: p.path,
                  index: p.path
                }, {
                  default: withCtx(() => [withDirectives(createVNode("i", {
                    class: ["icon", p.icon]
                  }, null, 2), [[vShow, unref(route).path !== p.path]]), withDirectives(createVNode("i", {
                    class: ["icon", p.activeIcon]
                  }, null, 2), [[vShow, unref(route).path === p.path]]), createVNode("span", {
                    class: "title overflow-hidden px-6 font-500 tracking-0.2em"
                  }, toDisplayString(p.title), 1)]),
                  _: 2
                }, 1032, ["index"]);
              }), 64))];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(setting).isChatFold) {
        _push(`<div class="absolute left-0 top-0 block h-100vh w-100vw overflow-hidden bg-[#8181811a] -z-1 md:hidden" style="${ssrRenderStyle({
          "background-color": "#2222223a"
        })}" data-v-84d945fa></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/ChatMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChatMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-84d945fa"]]);

export { ChatMenu as default };
//# sourceMappingURL=ChatMenu-CBMt2ZI8.mjs.map
