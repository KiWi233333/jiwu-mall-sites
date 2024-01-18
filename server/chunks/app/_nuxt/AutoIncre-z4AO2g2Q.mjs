import { defineComponent, ref, onUnmounted, watch, useSSRContext } from 'vue';
import { a as useIntersectionObserver } from './event-9ZI5GX64.mjs';
import { ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AutoIncre",
  __ssrInlineRender: true,
  props: {
    noMore: {
      type: Boolean,
      default: false
    },
    immediate: {
      type: Boolean,
      default: true
    },
    delay: {
      default: 400
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingClass: {
      default: "mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-primary)]"
    },
    ssr: {
      type: Boolean,
      default: true
    },
    autoStop: {
      type: Boolean,
      default: true
    }
  },
  emits: ["load"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const loadMoreRef = ref();
    let timer = Date.now();
    const {
      stop,
      isSupported
    } = useIntersectionObserver(loadMoreRef, ([obj]) => {
      if (obj.isIntersecting)
        requestAnimationFrame(callBack);
      else
        timer && clearInterval(timer);
    });
    function callBack() {
      const now = Date.now();
      if (now - timer < props.delay)
        return;
      if (props.noMore && props.autoStop) {
        cancelAnimationFrame(timer);
        stop && stop();
      } else {
        timer = now;
        emit("load");
      }
    }
    if (props.immediate)
      emit("load");
    onUnmounted(() => {
      cancelAnimationFrame(timer);
      stop();
      timer = 0;
    });
    watch(() => props.noMore, (val) => {
      if (val && props.autoStop) {
        cancelAnimationFrame(timer);
        stop && stop();
      }
    });
    __expose({
      stop,
      loadMoreRef
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if (_ctx.loading) {
        _push(`<div class="min-h-1em">`);
        ssrRenderSlot(_ctx.$slots, "load", {}, () => {
          _push(`<div w-full flex-row-c-c py-2 text-center text-bluegray><div class="${ssrRenderClass(_ctx.loadingClass)}"></div></div>`);
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
//# sourceMappingURL=AutoIncre-z4AO2g2Q.mjs.map
