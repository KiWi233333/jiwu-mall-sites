import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { w as watchDebounced } from './event-9ZI5GX64.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DelayTimer",
  __ssrInlineRender: true,
  props: {
    date: {}
  },
  emits: ["delay"],
  setup(__props, {
    emit: __emit
  }) {
    const {
      date
    } = __props;
    const endDate = computed(() => {
      return date ? new Date(date.getTime() + 24 * 60 * 60 * 1e3).getTime() : null;
    });
    const countdown = (endTime, callback) => {
      let animId;
      const update = () => {
        const currentTime = Date.now();
        const remainingTime = Math.max(endTime - currentTime, 0);
        const seconds = Math.floor(remainingTime / 1e3 % 60);
        const minutes = Math.floor(remainingTime / 1e3 / 60 % 60);
        const hours = Math.floor(remainingTime / 1e3 / 60 / 60 % 24);
        callback(hours, minutes, seconds);
        if (remainingTime > 0) {
          animId = requestAnimationFrame(update);
        } else {
          cancelAnimationFrame(animId);
        }
      };
      requestAnimationFrame(update);
    };
    const text = ref("");
    const emit = __emit;
    watchDebounced(() => date, (val) => {
      if (val && endDate.value && Date.now() < endDate.value) {
        countdown(endDate.value, (hours, minutes, seconds) => {
          if (+hours + +minutes + +seconds <= 0) {
            text.value = "\u8BA2\u5355\u8D85\u65F6\uFF0C\u81EA\u52A8\u53D6\u6D88";
            emit("delay");
            return;
          }
          text.value = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        });
      } else {
        text.value = "";
      }
    }, {
      immediate: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        inline: ""
      }, _attrs))}>${ssrInterpolate(unref(text))}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/DelayTimer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DelayTimer-F8E5aGkX.mjs.map
