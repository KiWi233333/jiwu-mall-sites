import { _ as __nuxt_component_0, a as _sfc_main$2 } from '../server.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_OtherError = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "error"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_OtherError, {
              msg: ((_a = _ctx.$route.query) == null ? void 0 : _a.errorMsg) ? (_b = _ctx.$route.query) == null ? void 0 : _b.errorMsg.toString() : "404, \u627E\u4E0D\u5230\u9875\u9762\u274C"
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_OtherError, {
              msg: ((_c = _ctx.$route.query) == null ? void 0 : _c.errorMsg) ? (_d = _ctx.$route.query) == null ? void 0 : _d.errorMsg.toString() : "404, \u627E\u4E0D\u5230\u9875\u9762\u274C"
            }, null, 8, ["msg"])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...all_-LhCU85kv.mjs.map
