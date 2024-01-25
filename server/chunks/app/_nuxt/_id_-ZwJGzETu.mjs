import { b as _export_sfc, A as useRoute, c as useSeoMeta, d as appKeywords, B as BaseUrlImg, C as getCommCategoryById, S as StatusCode, n as navigateTo, _ as __nuxt_component_0, f as __nuxt_component_2$1 } from '../server.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { _ as __nuxt_component_2 } from './CategoryTabs-Cr4Xfgye.mjs';
import { defineAsyncComponent, useSSRContext, defineComponent, ref, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './PreLoading-Jnbo7kLW.mjs';
import './tab-pane-G1YGUFAr.mjs';
import './index-daJZwzbi.mjs';
import './strings-Xcuto3Xi.mjs';
import './aria-sbEPrgvQ.mjs';
import './event-JIBAhsR9.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';
import './PostList-Wuy5b0GJ.mjs';
import './post-VFNrEwmr.mjs';
import './GoodsList-jFkO4WGn.mjs';
import './AutoIncre-nAzYjQ1D.mjs';
import './nuxt-link-qWvYy4Gj.mjs';
import './index-VI4pRKfC.mjs';

const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./Rank-l5ic3HVq.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const categoryId = ref((_b = (_a = route.params) == null ? void 0 : _a.id) == null ? void 0 : _b.toString());
    const category = ref();
    async function loadCategory() {
      const res = await getCommCategoryById(categoryId.value);
      if (res.data && res.code === StatusCode.SUCCESS)
        category.value = res.data;
    }
    [__temp, __restore] = withAsyncContext(() => loadCategory()), await __temp, __restore();
    useSeoMeta({
      title: () => {
        var _a2;
        return `${(_a2 = category == null ? void 0 : category.value) == null ? void 0 : _a2.name} \u793E\u533A\u5206\u7C7B - \u6781\u7269\u5708 \u{1F451}`;
      },
      description: () => {
        var _a2;
        return `${(_a2 = category == null ? void 0 : category.value) == null ? void 0 : _a2.name} \u793E\u533A\u5206\u7C7B - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01`;
      },
      keywords: appKeywords
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
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_CardElImage = __nuxt_component_1;
      const _component_CommCategoryTabs = __nuxt_component_2;
      const _component_LazyCommPostRank = __nuxt_component_4_lazy;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-608f3b98>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "main",
        menu: [{
          name: "post",
          isTeleport: true,
          methods: () => toNewPostPage(unref(categoryId))
        }, "back"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    createVNode("div", {
                      "layout-default": "",
                      grid: "~ cols-1 gap-6"
                    }, [
                      createVNode("h2", {
                        "mt-2": "",
                        flex: "",
                        "items-center": "",
                        "gap-6": ""
                      }, [
                        createVNode(_component_CardElImage, {
                          class: "h-4rem w-4rem shadow-sm border-default v-card",
                          fit: "cover",
                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a2 = unref(category)) == null ? void 0 : _a2.image)
                        }, null, 8, ["src"]),
                        createTextVNode(" " + toDisplayString((_b2 = unref(category)) == null ? void 0 : _b2.name), 1)
                      ]),
                      createVNode("div", { grid: "~ md:cols-[5fr_2fr] cols-1 gap-6 items-start" }, [
                        createVNode("main", {
                          class: "pt-0",
                          grid: "~ cols-1 gap-6"
                        }, [
                          createVNode(_component_CommCategoryTabs, { "category-id": unref(categoryId) }, null, 8, ["category-id"])
                        ]),
                        createVNode("section", { class: "sticky top-5.6rem max-h-500px min-h-300px" }, [
                          createVNode(_component_LazyCommPostRank, {
                            dto: {
                              cid: unref(categoryId),
                              viewsSort: 1,
                              commentSort: 1
                            },
                            limit: 10,
                            title: "\u70ED\u699C"
                          }, null, 8, ["dto"])
                        ])
                      ])
                    ])
                  ];
                }),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community/category/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-608f3b98"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-ZwJGzETu.mjs.map
