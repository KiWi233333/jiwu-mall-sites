import { _ as __nuxt_component_1 } from './nuxt-link-tpk2tUXY.mjs';
import { _ as __nuxt_component_1$1 } from './ElImage-j3i6j_3Z.mjs';
import { u as useUserStore, S as StatusCode, B as BaseUrlImg } from '../server.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { c as getCommPostCategoryById } from './category-HtxOPKX5.mjs';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './PreLoading-Sou-hyZj.mjs';
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
import './fetch-YS3Fxkuj.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CateGoryLine",
  __ssrInlineRender: true,
  props: {
    postId: {
      default: ""
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    useUserStore();
    const category = ref({
      id: "",
      name: "",
      image: ""
    });
    const res = ([__temp, __restore] = withAsyncContext(() => getCommPostCategoryById(props.postId)), __temp = await __temp, __restore(), __temp);
    if (res.data && res.code === StatusCode.SUCCESS)
      category.value = res.data;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_CardElImage = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/community/category/${(_a = unref(category)) == null ? void 0 : _a.id}`,
        flex: "",
        "items-center": "",
        truncate: "",
        "bg-center": "",
        "bg-no-repeat": "",
        class: "bg-cover"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardElImage, {
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a2 = unref(category)) == null ? void 0 : _a2.image),
              class: "absolute h-4rem w-4rem rounded shadow border-default card-default",
              fit: "cover"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-4 h-full flex flex-col justify-around truncate tracking-0.16em"${_scopeId}><h3${_scopeId}>${ssrInterpolate((_b = unref(category)) == null ? void 0 : _b.name)}</h3><span class="text-0.7rem opacity-50 hover:text-[var(--el-color-info)] hover:transition-200"${_scopeId}> \u67E5\u770B\u76F8\u5173 </span></div>`);
          } else {
            return [createVNode(_component_CardElImage, {
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_c = unref(category)) == null ? void 0 : _c.image),
              class: "absolute h-4rem w-4rem rounded shadow border-default card-default",
              fit: "cover"
            }, null, 8, ["src"]), createVNode("div", {
              class: "ml-4 h-full flex flex-col justify-around truncate tracking-0.16em"
            }, [createVNode("h3", null, toDisplayString((_d = unref(category)) == null ? void 0 : _d.name), 1), createVNode("span", {
              class: "text-0.7rem opacity-50 hover:text-[var(--el-color-info)] hover:transition-200"
            }, " \u67E5\u770B\u76F8\u5173 ")])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/post/CateGoryLine.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CateGoryLine-7XWk_hMT.mjs.map
