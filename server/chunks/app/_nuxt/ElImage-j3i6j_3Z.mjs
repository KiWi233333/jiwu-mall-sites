import { b as _export_sfc, e as __nuxt_component_0$1 } from '../server.mjs';
import { _ as _sfc_main$1 } from './PreLoading-Sou-hyZj.mjs';
import { useSSRContext, defineComponent, ref, withCtx, mergeProps, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ElImage",
  __ssrInlineRender: true,
  props: {
    src: {}
  },
  setup(__props) {
    ref("loading");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OtherPreLoading, mergeProps({
              message: "",
              icon: ""
            }, _ctx.$attrs), null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_OtherPreLoading, mergeProps({
              message: "",
              icon: ""
            }, _ctx.$attrs), null, 16)];
          }
        })
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/ElImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-991a8cb9"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ElImage-j3i6j_3Z.mjs.map
