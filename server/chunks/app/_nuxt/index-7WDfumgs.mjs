import { b as _export_sfc, n as navigateTo, u as useUserStore, aZ as useRouter, f as __nuxt_component_2$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    menu: { default: () => [
      "shopcart",
      "backtop",
      {
        name: "service",
        methods: () => {
          navigateTo({
            path: "/chat?type=service"
          });
        }
      },
      "aichat"
    ] }
  },
  setup(__props) {
    const { menu } = __props;
    const btnsMap = /* @__PURE__ */ new Map();
    menu.forEach((item) => {
      if (typeof item === "string") {
        btnsMap.set(item, {
          name: item,
          iconClass: "",
          methods: () => {
          }
        });
      } else if (typeof item === "object") {
        btnsMap.set(item.name, item);
      }
    });
    useUserStore();
    useRouter();
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$1;
      resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7fd9d690>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/RightButtons/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7fd9d690"]]);

export { index as default };
//# sourceMappingURL=index-7WDfumgs.mjs.map
