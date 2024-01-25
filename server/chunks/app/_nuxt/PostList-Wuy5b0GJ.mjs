import { b as _export_sfc, S as StatusCode, f as __nuxt_component_2$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, reactive, computed, resolveDirective } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { l as getPostPage } from './post-VFNrEwmr.mjs';
import { t as toReactive, w as watchDebounced } from './index-daJZwzbi.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostList",
  __ssrInlineRender: true,
  props: {
    dto: { default: () => {
      return {};
    } },
    limit: {},
    class: { default: "" },
    immediate: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const isLoading = ref(false);
    const postList = ref([]);
    const page = ref(0);
    const size = ref(props.limit || 10);
    const pageInfo = reactive({
      total: -1,
      pages: -1,
      current: -1
    });
    const isNot = computed(() => {
      return (pageInfo == null ? void 0 : pageInfo.total) === 0 && pageInfo.pages === 0;
    });
    const isNoMore = computed(() => {
      return pageInfo.pages > 0 && (page.value >= pageInfo.pages || props.limit !== void 0 && props.limit <= postList.value.length);
    });
    async function loadPostListPage() {
      if (isLoading.value || isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && postList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const res = await getPostPage(page.value, size.value, props == null ? void 0 : props.dto);
      if ((res == null ? void 0 : res.code) !== StatusCode.SUCCESS)
        return;
      pageInfo.total = res == null ? void 0 : res.data.total;
      pageInfo.current = res == null ? void 0 : res.data.current;
      pageInfo.pages = res == null ? void 0 : res.data.pages;
      if ((res == null ? void 0 : res.data.records) && (res == null ? void 0 : res.data.records.length))
        postList.value.push(...res == null ? void 0 : res.data.records);
      isLoading.value = false;
    }
    function clearResult() {
      postList.value.splice(0);
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      page.value = 0;
    }
    const dto = toReactive(props.dto);
    const timer = ref();
    watchDebounced(
      dto,
      async () => {
        if (timer.value)
          return;
        clearResult();
        await loadPostListPage();
        timer.value = setTimeout(() => {
          clearTimeout(timer.value);
          timer.value = null;
        }, 400);
      },
      {
        immediate: props.immediate
      }
    );
    __expose({
      clearResult,
      // 清除
      loadPostListPage,
      postList,
      pageInfo
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2$1;
      resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1ad4a674>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/PostList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ad4a674"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=PostList-Wuy5b0GJ.mjs.map
