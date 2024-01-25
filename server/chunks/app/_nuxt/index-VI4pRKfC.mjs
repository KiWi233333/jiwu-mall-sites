import { _ as __nuxt_component_1$1 } from './ElImage-hdm4w1vf.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { m as useFetch, o as BaseUrl, j as useHttp, B as BaseUrlImg, b as _export_sfc } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import currency from 'currency.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoodsBox",
  __ssrInlineRender: true,
  props: {
    goods: {}
  },
  setup(__props) {
    const { goods } = __props;
    const getDiscount = computed(() => {
      return currency(1).subtract(currency(goods.price).divide(goods.costPrice)).intValue;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardElImage = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group w-full flex flex-col cursor-pointer rounded-4px border-default hover:shadow-md md:shadow-none",
        "aspect-ratio-1": "",
        "md:aspect-ratio-1.2": ""
      }, _attrs))} data-v-c6ecc9ec><div class="img relative h-2/3 w-full overflow-hidden" data-v-c6ecc9ec>`);
      _push(ssrRenderComponent(_component_CardElImage, {
        loading: "lazy",
        "transition-300": "",
        "hover:transform-scale-110": "",
        class: "h-full w-full rounded-t-4px",
        src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.goods.images[0]}?imageView2/0/format/webp/interlace/1/q/70`,
        alt: _ctx.goods.name,
        fit: "cover"
      }, null, _parent));
      _push(`<small class="absolute bottom-0 left-0 z-1 w-full flex-row-bt-c bg-[var(--el-bg-color-primary)] px-3 py-1 color-light opacity-0 backdrop-blur-2em transition-300" group-hover:opacity-80 data-v-c6ecc9ec><div class="icon" data-v-c6ecc9ec><i class="i-solar:eye-bold mr-1 p-2" data-v-c6ecc9ec></i> ${ssrInterpolate(_ctx.goods.views)}</div>`);
      if (+unref(getDiscount)) {
        _push(`<strong class="dis rounded-2em bg-red-5 px-2 py-0.2em tracking-0.1em" data-v-c6ecc9ec>${ssrInterpolate(`-${unref(getDiscount)}%`)}</strong>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</small></div><div class="relative h-1/3 flex flex-col justify-between justify-around px-2 py-2 md:px-3" data-v-c6ecc9ec><h4 class="w-full truncate" data-v-c6ecc9ec>${ssrInterpolate(_ctx.goods.name)}</h4><p color-red-5 class="texts flex items-end truncate" data-v-c6ecc9ec><strong pr-1 data-v-c6ecc9ec>\uFFE5${ssrInterpolate(unref(currency)(_ctx.goods.price))}</strong><small hidden text-0.8em color-coolgray md:inline style="${ssrRenderStyle({ "text-decoration": "line-through" })}" data-v-c6ecc9ec> \uFFE5${ssrInterpolate(unref(currency)(_ctx.goods.costPrice))}</small>`);
      ssrRenderSlot(_ctx.$slots, "default", { goods: _ctx.goods }, null, _push, _parent);
      _push(`</p>`);
      ssrRenderSlot(_ctx.$slots, "bottom", { goods: _ctx.goods }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/GoodsBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c6ecc9ec"]]);
function getGoodsListByPageLazy(page, size, dto) {
  return useFetch(`${BaseUrl}/goods/list/${page}/${size}`, {
    method: "POST",
    body: { ...dto },
    headers: { "Content-Type": "application/json" }
  }, "$JxWVxvka8o");
}
function getGoodsListByPage(page, size, dto) {
  return useHttp.post(
    `/goods/list/${page}/${size}`,
    { ...dto }
  );
}
function getGoodsInfoById(gid) {
  return useFetch(`${BaseUrl}/goods/item/${gid}`, "$VYsWCMxwaG");
}
function addGoodsViewsById(gid, token) {
  return useHttp.put(`/goods/views/${gid}`, {}, {
    headers: {
      Authorization: token
    }
  });
}

export { __nuxt_component_1 as _, addGoodsViewsById as a, getGoodsListByPageLazy as b, getGoodsListByPage as c, getGoodsInfoById as g };
//# sourceMappingURL=index-VI4pRKfC.mjs.map
