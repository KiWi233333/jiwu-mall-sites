import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { defineComponent, computed, unref, effect, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TagList",
  __ssrInlineRender: true,
  props: {
    tags: { default: "" },
    random: { type: Boolean, default: true },
    effect: { default: "" },
    size: {},
    round: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const tagTypeList = [
      "info",
      "",
      "danger",
      "warning",
      "success",
      "warning"
    ];
    const tagsList = computed(() => {
      var _a;
      if (props.tags)
        return Array.isArray(props.tags) ? props.tags : (_a = props.tags) == null ? void 0 : _a.split(",");
      else
        return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      _push(`<!--[-->`);
      ssrRenderList(unref(tagsList), (p, i) => {
        _push(ssrRenderComponent(_component_el_tag, {
          key: p,
          effect: "effect" in _ctx ? _ctx.effect : unref(effect),
          size: _ctx.size,
          round: _ctx.round,
          type: _ctx.random ? tagTypeList[i] : ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(p)}`);
            } else {
              return [
                createTextVNode(toDisplayString(p), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/TagList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TagList-HC8gpUm-.mjs.map
