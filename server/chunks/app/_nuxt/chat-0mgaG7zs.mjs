import { b as _export_sfc, u as useUserStore, B as BaseUrlImg, A as useRoute, l as useColorMode, f as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _sfc_main$2 } from './PreLoading-Jnbo7kLW.mjs';
import { u as useWs, b as WsMsgBodyType, W as WsStatusEnum } from './useWs-5ZaJHe2X.mjs';
import { useSSRContext, defineAsyncComponent, defineComponent, ref, watch, onUnmounted, resolveDirective, withCtx, mergeProps, createVNode, renderSlot } from 'vue';
import { u as useWebToast } from './useWebToast-yKj8WQwG.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
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
import './index-481vqEaW.mjs';
import './index-daJZwzbi.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const user = useUserStore();
    const ws = useWs();
    const timer = ref();
    watch(() => user.getToken, (val) => {
      var _a;
      if (val)
        load();
      else
        (_a = ws.webSocketHandler) == null ? void 0 : _a.close();
    }, {
      immediate: true,
      deep: true
    });
    const noticeType = [
      WsMsgBodyType.MESSAGE
      // 普通消息
    ];
    function load() {
      ws.initDefault((e) => {
        timer.value = setInterval(() => {
          if (ws.status === WsStatusEnum.CLOSE) {
            clearInterval(timer.value);
            timer.value = null;
            load();
          } else {
            ws.sendHeart();
          }
        }, 1e4);
        ws.onMessage((msg) => {
          if (ws.isWindBlur && noticeType.includes(msg.type)) {
            const body = msg.data;
            useWebToast(
              `${body.fromUser.nickName}:`,
              // 发送人
              `${body.message.content}`,
              // 发送消息
              {
                icon: BaseUrlImg + body.fromUser.avatar
              }
            );
          }
        });
      });
    }
    const route = useRoute();
    useColorMode();
    onUnmounted(() => {
      var _a;
      if (!route.path.startsWith("/chat")) {
        clearInterval(timer.value);
        if (ws.webSocketHandler)
          (_a = ws.webSocketHandler) == null ? void 0 : _a.close();
        timer.value = false;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_OtherPreLoading = _sfc_main$2;
      resolveDirective("auth");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9504f13d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, { class: "main-box" }))} data-v-9504f13d${_scopeId}><div class="hidden h-95vh w-2/7 truncate p-4 md:block md:h-80vh" data-v-9504f13d${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_OtherPreLoading, { class: "h-95vh flex-row-c-c flex-1 border-0 border-l-1px op-60 md:h-80vh border-default bg-color" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", mergeProps(_ctx.$attrs, { class: "main-box" }), [
                createVNode("div", { class: "hidden h-95vh w-2/7 truncate p-4 md:block md:h-80vh" }),
                createVNode(_component_OtherPreLoading, { class: "h-95vh flex-row-c-c flex-1 border-0 border-l-1px op-60 md:h-80vh border-default bg-color" })
              ], 16)
            ];
          }
        })
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Chat/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9504f13d"]]);
const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./index-7WDfumgs.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  props: {
    menu: {
      default: ["back", "home", "aichat"],
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatLayout = __nuxt_component_0;
      const _component_LazyMenuRightButtons = __nuxt_component_1_lazy;
      _push(`<main${ssrRenderAttrs(mergeProps({
        "h-100vh": "",
        "w-100vw": "",
        "flex-row-c-c": "",
        "overflow-hidden": ""
      }, _attrs))} data-v-f2bb5c10>`);
      _push(ssrRenderComponent(_component_ChatLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_LazyMenuRightButtons, { menu: __props.menu }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2bb5c10"]]);

export { chat as default };
//# sourceMappingURL=chat-0mgaG7zs.mjs.map
