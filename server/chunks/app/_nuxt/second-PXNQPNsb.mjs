import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-CSejDGCf.mjs';
import { b as _export_sfc, e as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps } from 'vue';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-tpk2tUXY.mjs';
import './index-ukcTjM2L.mjs';
import './event-9ZI5GX64.mjs';
import 'lodash-unified';
import '@vue/shared';
import './useSettingStore-kkOnzP9-.mjs';
import './category-HtxOPKX5.mjs';
import './fetch-YS3Fxkuj.mjs';
import './kiwi_strong-IxCbk6o6.mjs';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "second",
  __ssrInlineRender: true,
  props: {
    footer: {
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
      default: ["shopcart", "back", "service", "aichat"],
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuHeaderMenu = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_MenuFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-100vh flex flex-col"
      }, _attrs))} data-v-6e2c3e9f>`);
      if (__props.header) {
        _push(ssrRenderComponent(_component_MenuHeaderMenu, {
          class: "sticky left-0 top-0 z-1001 max-w-100vw"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex-1" data-v-6e2c3e9f>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      if (__props.footer) {
        _push(ssrRenderComponent(_component_MenuFooter, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/second.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const second = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e2c3e9f"]]);

export { second as default };
//# sourceMappingURL=second-PXNQPNsb.mjs.map
