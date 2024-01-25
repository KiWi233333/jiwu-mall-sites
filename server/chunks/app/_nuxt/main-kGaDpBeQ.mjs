import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-0Ubu48Ez.mjs';
import { defineAsyncComponent, defineComponent, mergeProps, useSSRContext } from 'vue';
import { f as __nuxt_component_2$1 } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-qWvYy4Gj.mjs';
import './index-nLRih88y.mjs';
import './index-daJZwzbi.mjs';
import 'lodash-unified';
import '@vue/shared';
import './event-JIBAhsR9.mjs';
import './kiwi_strong-IxCbk6o6.mjs';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./DrawerMenu-HTYLgQ4o.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "main",
  __ssrInlineRender: true,
  props: {
    footer: {
      type: Boolean,
      default: true,
      required: false
    },
    leftMenu: {
      type: Boolean,
      default: true,
      required: false
    },
    header: {
      type: Boolean,
      default: true,
      required: false
    },
    menu: {
      default: ["shopcart", "service", "aichat"],
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuHeaderMenu = __nuxt_component_0;
      const _component_LazyMenuDrawerMenu = __nuxt_component_1_lazy;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_MenuFooter = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-100vh" }, _attrs))}>`);
      if (__props.header) {
        _push(ssrRenderComponent(_component_MenuHeaderMenu, { class: "sticky left-0 top-0 z-1001 max-w-100vw" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="flex">`);
      if (__props.leftMenu) {
        _push(ssrRenderComponent(_component_LazyMenuDrawerMenu, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="min-h-100vh flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (__props.footer) {
        _push(ssrRenderComponent(_component_MenuFooter, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=main-kGaDpBeQ.mjs.map
