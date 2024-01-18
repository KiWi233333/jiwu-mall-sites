import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createCommentVNode } from 'vue';
import { h as buildProps, z as definePropType, j as useNamespace, w as withInstall, l as _export_sfc$1 } from '../server.mjs';

const dividerProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  contentPosition: {
    type: String,
    values: ["left", "center", "right"],
    default: "center"
  },
  borderStyle: {
    type: definePropType(String),
    default: "solid"
  }
});
const __default__ = defineComponent({
  name: "ElDivider"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dividerProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("divider");
    const dividerStyle = computed(() => {
      return ns.cssVar({
        "border-style": props.borderStyle
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.direction)]),
        style: normalizeStyle(unref(dividerStyle)),
        role: "separator"
      }, [
        _ctx.$slots.default && _ctx.direction !== "vertical" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(ns).e("text"), unref(ns).is(_ctx.contentPosition)])
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Divider = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__file", "divider.vue"]]);
const ElDivider = withInstall(Divider);

export { ElDivider as E };
//# sourceMappingURL=divider-PhlLqhAq.mjs.map
