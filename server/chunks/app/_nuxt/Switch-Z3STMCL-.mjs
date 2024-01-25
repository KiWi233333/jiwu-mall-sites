import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { b as _export_sfc, k as useSettingStore, l as useColorMode, z as useModeToggle, h as ElButton } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "" + publicAssetsURL("images/icon/sun.svg");
const _imports_1 = "" + publicAssetsURL("images/icon/moon.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  setup(__props) {
    const setting = useSettingStore();
    const mode = useColorMode();
    function toggleFn(e) {
      const modes = mode.value === "dark" ? "light" : "dark";
      setting.settingPage.modeToggle.value = modes;
      useModeToggle(modes);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElButton = ElButton;
      _push(ssrRenderComponent(_component_ElButton, mergeProps({
        class: "btn mx-2 v-card",
        round: "",
        onClick: toggleFn
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span hidden overflow-hidden truncate md:inline data-v-708cc123${_scopeId}>${ssrInterpolate(unref(setting).settingPage.modeToggle.value === "dark" ? "\u5207\u6362\u65E5\u95F4" : "\u5207\u6362\u591C\u95F4")}</span>`);
            if (unref(setting).settingPage.modeToggle.value === "light") {
              _push2(`<img class="h-1.3em w-1.3em" sizes="md:20px" densities="x1 x2"${ssrRenderAttr("src", _imports_0)} quality="50" alt="sun \u65E5\u95F4\u6A21\u5F0F" data-v-708cc123${_scopeId}>`);
            } else {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} sizes="md:20px" quality="50" densities="x1 x2" class="h-1.3em w-1.3em fill-light-5" alt="sun \u65E5\u95F4\u6A21\u5F0F" data-v-708cc123${_scopeId}>`);
            }
          } else {
            return [
              createVNode("span", {
                hidden: "",
                "overflow-hidden": "",
                truncate: "",
                "md:inline": ""
              }, toDisplayString(unref(setting).settingPage.modeToggle.value === "dark" ? "\u5207\u6362\u65E5\u95F4" : "\u5207\u6362\u591C\u95F4"), 1),
              unref(setting).settingPage.modeToggle.value === "light" ? (openBlock(), createBlock("img", {
                key: 0,
                class: "h-1.3em w-1.3em",
                sizes: "md:20px",
                densities: "x1 x2",
                src: _imports_0,
                quality: "50",
                alt: "sun \u65E5\u95F4\u6A21\u5F0F"
              })) : (openBlock(), createBlock("img", {
                key: 1,
                src: _imports_1,
                sizes: "md:20px",
                quality: "50",
                densities: "x1 x2",
                class: "h-1.3em w-1.3em fill-light-5",
                alt: "sun \u65E5\u95F4\u6A21\u5F0F"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/btn/Switch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-708cc123"]]);

export { __nuxt_component_8 as _ };
//# sourceMappingURL=Switch-Z3STMCL-.mjs.map
