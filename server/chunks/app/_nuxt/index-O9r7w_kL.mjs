import { c as useSeoMeta, _ as __nuxt_component_0 } from '../server.mjs';
import { _ as _sfc_main$b, a as __nuxt_component_2, b as __nuxt_component_3 } from './RoomGroup-z5Wmr0A6.mjs';
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
import './tab-pane-VfJmI_8q.mjs';
import './event-9ZI5GX64.mjs';
import './strings-Xcuto3Xi.mjs';
import './aria-sbEPrgvQ.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';
import './scrollbar-rGnTaDH3.mjs';
import './index-pIjkPV4Z.mjs';
import './AutoIncre-z4AO2g2Q.mjs';
import './ElImage-j3i6j_3Z.mjs';
import './PreLoading-Sou-hyZj.mjs';
import './contact-Lyk8Xsoc.mjs';
import './useWs-gR1LkN1Z.mjs';
import './dialog-5eWjtfeR.mjs';
import './index-Jkc1A1yz.mjs';
import './focus-trap-FUoXuQZs.mjs';
import '@vue/reactivity';
import './form-item-d_pUYt5T.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';
import './index-ukcTjM2L.mjs';
import './index-KIyZNhTO.mjs';
import './index-3Hd0ipYT.mjs';
import './composables-6B_M9sIU.mjs';
import './index-K-gO0vbs.mjs';
import './index-S-yJffF9.mjs';
import './index-Ud8N-GPr.mjs';
import './OssFileUpload-pldn4U9W.mjs';
import './progress-lh-pSAoE.mjs';
import './index-hfRePjpv.mjs';
import 'qiniu-js';
import './nuxt-link-tpk2tUXY.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "\u6781\u804A\u5929 - \u6781\u7269\u5708 \u{1F451}",
      description: "\u6781\u804A\u5929 - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: "\u793E\u533A,\u5546\u57CE,\u6781\u7269\u4E4B\u65C5,\u4E3B\u9875,\u804A\u5929,\u5BA2\u670D,\u8D2D\u7269,home,index,shop,chat"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ChatContactTabs = _sfc_main$b;
      const _component_ChatContent = __nuxt_component_2;
      const _component_ChatRoomGroup = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "chat",
        header: true,
        "left-menu": true,
        footer: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ChatContactTabs, {
              class: "absolute left-0 top-0 flex-shrink-0 p-4 md:static"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ChatContent, {
              class: "flex-1 border-0 border-l-1px border-default"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ChatRoomGroup, {
              class: "bg-white p-4 dark:bg-dark"
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ChatContactTabs, {
              class: "absolute left-0 top-0 flex-shrink-0 p-4 md:static"
            }), createVNode(_component_ChatContent, {
              class: "flex-1 border-0 border-l-1px border-default"
            }), createVNode(_component_ChatRoomGroup, {
              class: "bg-white p-4 dark:bg-dark"
            })];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-O9r7w_kL.mjs.map
