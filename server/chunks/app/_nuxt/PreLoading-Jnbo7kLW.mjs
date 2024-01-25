import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PreLoading",
  __ssrInlineRender: true,
  props: {
    message: { default: "\u52A0\u8F7D\u4E2D..." },
    icon: { default: "i-tabler:loader animate-spin animate-duration-2000 op-40" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "flex-row-c-c": "",
        "flex-col": "",
        "gap-4": ""
      }, _attrs))}><span class="${ssrRenderClass([_ctx.icon, "h-1.8rem w-1.8rem"])}"></span> ${ssrInterpolate(_ctx.message)}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/other/PreLoading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PreLoading-Jnbo7kLW.mjs.map
