import { E as ElProgress } from './progress-Y_Nip7T-.mjs';
import { u as useUserStore, aI as getUserLeave, E as ElMessage, e as __nuxt_component_2 } from '../server.mjs';
import { E as ElPopover } from './index-Xv5DtpYi.mjs';
import { defineComponent, computed, resolveDirective, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SigninCard",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    const points = computed(() => user.userWallet.points);
    const getLeave = computed(() => getUserLeave(user.userWallet.points || 0));
    function submit() {
      ElMessage.warning("\u529F\u80FD\u5F00\u53D1\u4E2D...");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_progress = ElProgress;
      const _component_btn_el_button = __nuxt_component_2;
      const _component_el_popover = ElPopover;
      const _directive_incre_up_int = resolveDirective("incre-up-int");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-4px px-10 py-8 v-card" }, _attrs))}><div class="flex justify-between"><strong class="inline-block w-8rem flex-row-c-c cursor-pointer opacity-90 transition-300 hover:scale-110"><small mr-4 text-1em> \u79EF\u5206 </small><h2${ssrRenderAttrs(mergeProps({ inline: "" }, ssrGetDirectiveProps(_ctx, _directive_incre_up_int, unref(points))))}></h2></strong><div ml-3em flex flex-col><small pb-3>\u7B49\u7EA7\uFF1Alv.${ssrInterpolate(unref(getLeave))}</small>`);
      _push(ssrRenderComponent(_component_el_progress, {
        percentage: unref(getLeave) / 6 * 100,
        "show-text": false,
        striped: ""
      }, null, _parent));
      _push(`</div></div><div class="btn my-4">`);
      _push(ssrRenderComponent(_component_btn_el_button, {
        type: "info",
        "icon-class": "i-solar:dollar-bold-duotone mr-1",
        "transition-icon": true,
        onClick: submit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u7B7E \u5230 `);
          } else {
            return [
              createTextVNode(" \u7B7E \u5230 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<small ml-3 truncate text-0.7em opacity-80> \u6BCF\u65E5\u7B7E\u5230+100\u79EF\u5206 </small></div>`);
      _push(ssrRenderComponent(_component_el_popover, {
        width: 160,
        trigger: "hover"
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<small cursor-pointer text-blueGray underline${_scopeId}> \u5982\u4F55\u83B7\u53D6\u79EF\u5206? <i i-solar:dollar-linear ml-2 p-2 text-bluegray${_scopeId}></i></small>`);
          } else {
            return [
              createVNode("small", {
                "cursor-pointer": "",
                "text-blueGray": "",
                underline: ""
              }, [
                createTextVNode(" \u5982\u4F55\u83B7\u53D6\u79EF\u5206? "),
                createVNode("i", {
                  "i-solar:dollar-linear": "",
                  "ml-2": "",
                  "p-2": "",
                  "text-bluegray": ""
                })
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li${_scopeId}>1\u3001\u901A\u8FC7\u94B1\u5305\u989D\u5EA6\u5145\u503C</li><li${_scopeId}>2\u3001\u901A\u8FC7\u6BCF\u65E5\u7B7E\u5230</li>`);
          } else {
            return [
              createVNode("li", null, "1\u3001\u901A\u8FC7\u94B1\u5305\u989D\u5EA6\u5145\u503C"),
              createVNode("li", null, "2\u3001\u901A\u8FC7\u6BCF\u65E5\u7B7E\u5230")
            ];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/info/SigninCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SigninCard-zf-9e3x9.mjs.map
