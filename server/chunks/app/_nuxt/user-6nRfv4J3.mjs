import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { u as useUserStore, eO as _imports_0, t as useRoute, e as __nuxt_component_0$1, b as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1, a as _imports_2 } from './kiwi_strong-IxCbk6o6.mjs';
import { u as useSettingStore } from './useSettingStore-kkOnzP9-.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './category-HtxOPKX5.mjs';
import './fetch-YS3Fxkuj.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeaderMenuSe",
  __ssrInlineRender: true,
  setup(__props) {
    useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "nav select-none",
        "dark:text": "light",
        "text-m": "",
        "flex-row-bt-c": "",
        "px-2": "",
        "md:px-6": ""
      }, _attrs))} data-v-1e870a8f><div class="group left" flex-row-c-c data-v-1e870a8f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "mx-2": "",
        to: "/",
        "flex-row-c-c": "",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img loading="lazy" alt="Design By Kiwi23333"${ssrRenderAttr("src", _imports_0)} w-2.4rem object-contain transition-300 dark:hidden group-hover:opacity-85 group-hover:filter-blur-2px data-v-1e870a8f${_scopeId}><img loading="lazy" alt="Design By Kiwi23333"${ssrRenderAttr("src", _imports_0$1)} hidden w-2.4rem object-contain transition-300 dark:block group-hover:opacity-85 group-hover:filter-blur-2px data-v-1e870a8f${_scopeId}><span i-solar:home-2-bold absolute left-1 hidden h-1.6rem w-1.6rem transition-300 group-hover:block style="${ssrRenderStyle({
              "color": "var(--el-text-color-primary)"
            })}" data-v-1e870a8f${_scopeId}></span>`);
          } else {
            return [createVNode("img", {
              loading: "lazy",
              alt: "Design By Kiwi23333",
              src: _imports_0,
              "w-2.4rem": "",
              "object-contain": "",
              "transition-300": "",
              "dark:hidden": "",
              "group-hover:opacity-85": "",
              "group-hover:filter-blur-2px": ""
            }), createVNode("img", {
              loading: "lazy",
              alt: "Design By Kiwi23333",
              src: _imports_0$1,
              hidden: "",
              "w-2.4rem": "",
              "object-contain": "",
              "transition-300": "",
              "dark:block": "",
              "group-hover:opacity-85": "",
              "group-hover:filter-blur-2px": ""
            }), createVNode("span", {
              "i-solar:home-2-bold": "",
              absolute: "",
              "left-1": "",
              hidden: "",
              "h-1.6rem": "",
              "w-1.6rem": "",
              "transition-300": "",
              "group-hover:block": "",
              style: {
                "color": "var(--el-text-color-primary)"
              }
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="mx-4 hidden text-xl font-700 tracking-2 md:inline" data-v-1e870a8f>\u6781\u7269\u5708</span><a class="group hidden md:inline" target="_blank" data-v-1e870a8f><img loading="lazy" ml-4 w-5rem opacity-0 transition-300 group-hover:opacity-100 dark:filter-invert-100${ssrRenderAttr("src", _imports_2)} data-v-1e870a8f></a>`);
      ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/HeaderMenuSe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1e870a8f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CollMenu",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props) {
    useRoute();
    useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "menu fixed z-998 h-full bg-light bg-opacity-80 backdrop-blur-30 md:sticky md:block dark:bg-[#121212] md:shadow-none"
      }, _attrs))} data-v-468b6ece>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="bg" data-v-468b6ece></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/CollMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-468b6ece"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  props: {
    leftMenu: {
      type: Boolean,
      default: true,
      required: false
    },
    menu: {
      default: ["shopcart"],
      required: false
    }
  },
  setup(__props) {
    const setting = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuHeaderMenuSe = __nuxt_component_0;
      const _component_MenuCollMenu = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-100vh flex flex-col"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MenuHeaderMenuSe, {
        class: "sticky left-0 top-0 z-1001 max-w-100vw"
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="ml-2 block flex-row-c-c cursor-pointer v-btn rounded-1/2 md:hidden border-default card-default"${_scopeId}><i i-solar:hamburger-menu-broken p-4${_scopeId}></i></div>`);
          } else {
            return [createVNode("div", {
              class: "ml-2 block flex-row-c-c cursor-pointer v-btn rounded-1/2 md:hidden border-default card-default",
              onClick: ($event) => unref(setting).isUserCollapse = !unref(setting).isUserCollapse
            }, [createVNode("i", {
              "i-solar:hamburger-menu-broken": "",
              "p-4": ""
            })], 8, ["onClick"])];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex">`);
      if (__props.leftMenu) {
        _push(ssrRenderComponent(_component_MenuCollMenu, {
          class: ["left-0 transition-300 md:sticky md:translate-x-0", !unref(setting).isUserCollapse ? "translate-x-0 menu-bg" : "-translate-x-full"],
          onClose: ($event) => unref(setting).isUserCollapse = true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-6nRfv4J3.mjs.map
