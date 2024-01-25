import { _ as __nuxt_component_0 } from './nuxt-link-qWvYy4Gj.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { u as useUserStore, B as BaseUrlImg, S as StatusCode } from '../server.mjs';
import { defineComponent, ref, resolveDirective, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { j as getPostTotal } from './post-VFNrEwmr.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserPostTotal",
  __ssrInlineRender: true,
  props: {
    user: {},
    dto: {},
    gridClass: { default: "grid grid-cols-4 grid-gap-4" },
    cardClass: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const store = useUserStore();
    const dataList = ref([
      {
        label: "\u5E16\u5B50",
        value: 0
      },
      {
        label: "\u8BC4\u8BBA",
        value: 0
      },
      {
        label: "\u6536\u85CF",
        value: 0
      },
      {
        label: "\u70B9\u8D5E",
        value: 0
      }
    ]);
    async function loadData() {
      var _a, _b;
      if ((_a = props == null ? void 0 : props.dto) == null ? void 0 : _a.userId) {
        const res = await getPostTotal({
          userId: (_b = props == null ? void 0 : props.dto) == null ? void 0 : _b.userId
        }, store.getToken);
        if (res.code === StatusCode.SUCCESS) {
          dataList.value[0].value = res.data.postCount;
          dataList.value[1].value = res.data.postCommentCount;
          dataList.value[2].value = res.data.postCollectCount;
          dataList.value[3].value = res.data.postLikeCount;
        }
      }
    }
    loadData();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CardElImage = __nuxt_component_1;
      const _directive_incre_up_int = resolveDirective("incre-up-int");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-3 rounded-4px v-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: `/user/info`,
          query: {
            id: (_a = props == null ? void 0 : props.dto) == null ? void 0 : _a.userId
          }
        },
        class: "flex flex-col"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardElImage, {
              loading: "lazy",
              "transition-300": "",
              "hover:transform-scale-110": "",
              class: "mx-a h-5rem w-5rem rounded-1/2 border-default",
              src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a2 = _ctx.user) == null ? void 0 : _a2.avatar)}?imageView2/0/format/webp/interlace/1/q/70`,
              alt: (_b = _ctx.user) == null ? void 0 : _b.nickname,
              fit: "cover"
            }, null, _parent2, _scopeId));
            _push2(`<h4 text-center${_scopeId}>${ssrInterpolate((_c = _ctx.user) == null ? void 0 : _c.nickname)}</h4>`);
          } else {
            return [
              createVNode(_component_CardElImage, {
                loading: "lazy",
                "transition-300": "",
                "hover:transform-scale-110": "",
                class: "mx-a h-5rem w-5rem rounded-1/2 border-default",
                src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_d = _ctx.user) == null ? void 0 : _d.avatar)}?imageView2/0/format/webp/interlace/1/q/70`,
                alt: (_e = _ctx.user) == null ? void 0 : _e.nickname,
                fit: "cover"
              }, null, 8, ["src", "alt"]),
              createVNode("h4", { "text-center": "" }, toDisplayString((_f = _ctx.user) == null ? void 0 : _f.nickname), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass(_ctx.gridClass)}"><!--[-->`);
      ssrRenderList(unref(dataList), (p, i) => {
        _push(`<div class="${ssrRenderClass([_ctx.cardClass, "w-full p-2 text-center leading-1.8em transition-200 hover-scale-110"])}"><div class="title text-1em">${ssrInterpolate(p.label)}</div><span${ssrRenderAttrs(mergeProps({ class: "text-1em" }, ssrGetDirectiveProps(_ctx, _directive_incre_up_int, p.value)))}></span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/UserPostTotal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UserPostTotal-Kn3Agu8X.mjs.map
