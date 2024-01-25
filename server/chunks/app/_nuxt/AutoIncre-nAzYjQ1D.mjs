import { defineComponent, ref, onUnmounted, watch, computed, unref, useSSRContext } from 'vue';
import { b as useIntersectionObserver } from './index-daJZwzbi.mjs';
import { ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AutoIncre",
  __ssrInlineRender: true,
  props: {
    noMore: { type: Boolean, default: false },
    immediate: { type: Boolean, default: true },
    delay: { default: 400 },
    loading: { type: Boolean, default: false },
    loadingClass: { default: "mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-primary)]" },
    appendLoadingClass: { default: "" },
    ssr: { type: Boolean, default: true },
    autoStop: { type: Boolean, default: true }
  },
  emits: ["load"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loadMoreRef = ref();
    let timer = null;
    const { stop, isSupported } = useIntersectionObserver(
      loadMoreRef,
      ([obj]) => {
        if (obj.isIntersecting) {
          clearInterval(timer);
          callBack && callBack();
          timer = setInterval(callBack, props.delay * 2);
        } else {
          clearInterval(timer);
          clearTimeout(timer);
        }
      }
    );
    function callBack() {
      if (props.noMore && props.autoStop) {
        cancelAnimationFrame(timer);
        clearInterval(timer);
        stop && stop();
      } else {
        emit("load");
      }
    }
    if (props.immediate)
      emit("load");
    onUnmounted(() => {
      cancelAnimationFrame(timer);
      clearInterval(timer);
      stop();
      timer = null;
    });
    watch(() => props.noMore, (val) => {
      if (val && props.autoStop) {
        cancelAnimationFrame(timer);
        stop && stop();
      }
    });
    const showLoad = computed(() => {
      return props.loading || !props.noMore;
    });
    __expose({
      stop,
      loadMoreRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (unref(showLoad)) {
        _push(`<div class="min-h-1em">`);
        ssrRenderSlot(_ctx.$slots, "load", {}, () => {
          _push(`<div w-full flex-row-c-c py-2 text-center text-bluegray><div class="${ssrRenderClass(`${_ctx.loadingClass} ${_ctx.appendLoadingClass}`)}"></div></div>`);
        }, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="animate-fade-in">`);
        ssrRenderSlot(_ctx.$slots, "done", {}, () => {
          if (!_ctx.noMore && !_ctx.loading) {
            _push(`<div h-2 w-full text-center text-bluegray></div>`);
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/list/AutoIncre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AutoIncre-nAzYjQ1D.mjs.map
