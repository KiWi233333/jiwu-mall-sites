import { b as _export_sfc, t as useRoute, c as useSeoMeta, n as navigateTo, _ as __nuxt_component_0, e as __nuxt_component_0$1 } from '../server.mjs';
import { _ as __nuxt_component_2 } from './CategoryTabs-cikbCf4u.mjs';
import { defineAsyncComponent, useSSRContext, defineComponent, withCtx, createVNode } from 'vue';
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
import './PostList--cNB2Ocs.mjs';
import './post-uKGC7P8z.mjs';
import './fetch-YS3Fxkuj.mjs';
import './GoodsList-AABL3AGj.mjs';
import './AutoIncre-z4AO2g2Q.mjs';
import './nuxt-link-tpk2tUXY.mjs';
import './index-4eJaJKt8.mjs';
import './ElImage-j3i6j_3Z.mjs';
import './PreLoading-Sou-hyZj.mjs';

const __nuxt_component_3_lazy = defineAsyncComponent(() => import('./Rank-IlBfomYu.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useSeoMeta({
      title: "\u793E\u533A\u5206\u7C7B - \u6781\u7269\u5708 \u{1F451}",
      description: "\u793E\u533A\u5206\u7C7B - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: "\u793E\u533A,\u5546\u57CE,\u6781\u7269\u4E4B\u65C5,\u4E3B\u9875,\u804A\u5929,\u5BA2\u670D,\u8D2D\u7269,home,index,shop,chat"
    });
    function toNewPostPage(cid) {
      navigateTo({
        path: "/community/post/new",
        query: {
          cid
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_CommCategoryTabs = __nuxt_component_2;
      const _component_LazyCommPostRank = __nuxt_component_3_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f5e55fe6>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "main",
        menu: [{
          name: "post",
          isTeleport: true,
          methods: () => toNewPostPage()
        }, "back"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [createVNode("div", {
                "layout-default": "",
                grid: "~ cols-1 gap-6"
              }, [createVNode("div", {
                grid: "~ md:cols-[5fr_2fr] cols-1 gap-6 items-start"
              }, [createVNode("main", {
                class: "pt-0",
                grid: "~ cols-1 gap-6"
              }, [createVNode(_component_CommCategoryTabs)]), createVNode("section", {
                class: "sticky top-5.6rem max-h-500px min-h-300px"
              }, [createVNode(_component_LazyCommPostRank, {
                dto: {
                  viewsSort: 1,
                  commentSort: 1
                },
                limit: 10,
                title: "\u70ED\u699C"
              })])])])]),
              _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community/category/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5e55fe6"]]);

export { index as default };
//# sourceMappingURL=index-tWJhgDeg.mjs.map
