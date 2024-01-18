import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-CSejDGCf.mjs';
import { b as _export_sfc, u as useUserStore, t as useRoute, e as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineAsyncComponent, defineComponent, ref, watch, onUnmounted, resolveDirective, withCtx, createVNode, unref, renderSlot } from 'vue';
import { _ as _sfc_main$2 } from './PreLoading-Sou-hyZj.mjs';
import { u as useWs, W as WsStatusEnum } from './useWs-gR1LkN1Z.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useSettingStore } from './useSettingStore-kkOnzP9-.mjs';
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
import './kiwi_strong-IxCbk6o6.mjs';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './category-HtxOPKX5.mjs';
import './fetch-YS3Fxkuj.mjs';

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
        ws.onMessage(() => {
        });
      });
    }
    const route = useRoute();
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
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$2;
      resolveDirective("auth");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-c33b044f>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main-box" data-v-c33b044f${_scopeId}><div class="hidden h-80vh w-2/7 truncate p-4 md:block" data-v-c33b044f${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_OtherPreLoading, {
              class: "h-80vh flex-row-c-c flex-1 border-0 border-l-1px op-60 border-default bg-color"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [createVNode("div", {
              class: "main-box"
            }, [createVNode("div", {
              class: "hidden h-80vh w-2/7 truncate p-4 md:block"
            }), createVNode(_component_OtherPreLoading, {
              class: "h-80vh flex-row-c-c flex-1 border-0 border-l-1px op-60 border-default bg-color"
            })])];
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c33b044f"]]);
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./ChatMenu-CBMt2ZI8.mjs').then((m) => m.default || m));
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./index-MWwjSsNT.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chat",
  __ssrInlineRender: true,
  props: {
    footer: {
      type: Boolean,
      default: true,
      required: false
    },
    menu: {
      default: ["back", "home"],
      required: false
    }
  },
  setup(__props) {
    const setting = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuHeaderMenu = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_LazyMenuChatMenu = __nuxt_component_2_lazy;
      const _component_ChatLayout = __nuxt_component_3;
      const _component_LazyMenuRightButtons = __nuxt_component_4_lazy;
      const _component_MenuFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-be84a706>`);
      _push(ssrRenderComponent(_component_MenuHeaderMenu, {
        class: "sticky left-0 top-0 z-1001 max-w-100vw"
      }, {
        pre: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [createVNode("span", {
                class: "i-solar:hamburger-menu-outline mx-2 p-3",
                "cursor-pointer": "",
                onClick: ($event) => unref(setting).isChatFold = !unref(setting).isChatFold
              }, null, 8, ["onClick"])]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex" data-v-be84a706>`);
      _push(ssrRenderComponent(_component_LazyMenuChatMenu, null, null, _parent));
      _push(ssrRenderComponent(_component_ChatLayout, {
        class: "flex-row-c-c flex-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [renderSlot(_ctx.$slots, "default", {}, void 0, true)];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_LazyMenuRightButtons, {
        menu: __props.menu
      }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be84a706"]]);

export { chat as default };
//# sourceMappingURL=chat-Xyagk2XX.mjs.map
