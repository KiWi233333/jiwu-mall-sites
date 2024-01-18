import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { b as _export_sfc, u as useUserStore, eO as _imports_0$1, E as ElMessage, n as navigateTo, e as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, isRef, ref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot, ssrRenderClass } from 'vue/server-renderer';
import { u as useSettingStore } from './useSettingStore-kkOnzP9-.mjs';
import { _ as _imports_0$2, a as _imports_2 } from './kiwi_strong-IxCbk6o6.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    isChange: {
      type: Boolean
    }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const word = computed({
      get() {
        return props.modelValue;
      },
      set(v) {
        emit("update:modelValue", v);
      }
    });
    function onSearch() {
      if (!word.value.trim())
        return ElMessage.warning("\u641C\u7D22\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01");
      emit("open");
      navigateTo({
        path: "/search",
        query: {
          name: word.value.trim()
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElInput = ElInput;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group relative flex items-center"
      }, _attrs))} data-v-ed772fed>`);
      _push(ssrRenderComponent(_component_ElInput, {
        modelValue: unref(word),
        "onUpdate:modelValue": ($event) => isRef(word) ? word.value = $event : null,
        modelModifiers: {
          trim: true
        },
        type: "text",
        clearable: "",
        "text-center": "",
        placeholder: "\u5F00\u542F\u641C\u7D22\u4E4B\u65C5\u2728",
        class: "v-input mx-1",
        onKeyup: [onSearch, ($event) => _ctx.$emit("close")],
        onFocus: ($event) => _ctx.$emit("open"),
        onBlur: ($event) => _ctx.$emit("close")
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Search.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ed772fed"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const isShowSearch = ref(false);
    const searchWord = ref("");
    useUserStore();
    const setting = useSettingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_InputSearch = __nuxt_component_1;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "nav select-none",
        "dark:text": "light",
        "text-m": "",
        "flex-row-bt-c": "",
        "px-2": "",
        "md:px-6": ""
      }, _attrs))} data-v-5bf1c017><div class="group left" flex-row-c-c data-v-5bf1c017>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "mx-2": "",
        to: "/",
        "flex-row-c-c": "",
        class: "relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img loading="lazy" alt="Design By Kiwi23333"${ssrRenderAttr("src", _imports_0$1)} w-2.4rem object-contain transition-300 dark:hidden group-hover:opacity-85 group-hover:filter-blur-2px data-v-5bf1c017${_scopeId}><img loading="lazy" alt="Design By Kiwi23333"${ssrRenderAttr("src", _imports_0$2)} hidden w-2.4rem object-contain transition-300 dark:block group-hover:opacity-85 group-hover:filter-blur-2px data-v-5bf1c017${_scopeId}><span i-solar:home-2-bold absolute left-1 hidden h-1.6rem w-1.6rem transition-300 group-hover:block style="${ssrRenderStyle({
              "color": "var(--el-text-color-primary)"
            })}" data-v-5bf1c017${_scopeId}></span>`);
          } else {
            return [createVNode("img", {
              loading: "lazy",
              alt: "Design By Kiwi23333",
              src: _imports_0$1,
              "w-2.4rem": "",
              "object-contain": "",
              "transition-300": "",
              "dark:hidden": "",
              "group-hover:opacity-85": "",
              "group-hover:filter-blur-2px": ""
            }), createVNode("img", {
              loading: "lazy",
              alt: "Design By Kiwi23333",
              src: _imports_0$2,
              hidden: "",
              "w-2.4rem": "",
              "object-contain": "",
              "transition-300": "",
              "dark:block": "",
              "group-hover:opacity-85": "",
              "group-hover:filter-blur-2px": ""
            }), createVNode("span", {
              "i-solar:home-2-bold": "",
              absolute: "",
              "left-1": "",
              hidden: "",
              "h-1.6rem": "",
              "w-1.6rem": "",
              "transition-300": "",
              "group-hover:block": "",
              style: {
                "color": "var(--el-text-color-primary)"
              }
            })];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "pre", {}, () => {
        _push(`<span class="${ssrRenderClass([unref(setting).isCollapse ? "block" : "sm:hidden", "i-solar:hamburger-menu-outline mx-2 p-3"])}" cursor-pointer data-v-5bf1c017></span>`);
      }, _push, _parent);
      _push(`<span class="mx-4 hidden text-xl font-700 tracking-2 md:inline" data-v-5bf1c017>\u6781\u7269\u5708</span><a class="group hidden md:inline" target="_blank" href="https://github.com/KiWi233333" data-v-5bf1c017><img loading="lazy" ml-4 w-5rem opacity-0 transition-300 group-hover:opacity-100 dark:filter-invert-100${ssrRenderAttr("src", _imports_2)} data-v-5bf1c017></a></div><div style="${ssrRenderStyle(unref(isShowSearch) ? null : {
        display: "none"
      })}" class="fixed left-0 top-0 z-2 h-[100vh] w-full animate-[fade-in_0.2s_ease-out] bg-[rgba(0,0,0,0.8)] dark:bg-[rgba(10,10,10,0.9)]" data-v-5bf1c017></div><div class="${ssrRenderClass([{
        "translate-y-20vh scale-120": unref(isShowSearch)
      }, "z-2 translate-y-0 transition-300 transition-ease-in-out absolute-center"])}" data-v-5bf1c017>`);
      _push(ssrRenderComponent(_component_InputSearch, {
        modelValue: unref(searchWord),
        "onUpdate:modelValue": ($event) => isRef(searchWord) ? searchWord.value = $event : null,
        onOpen: ($event) => isShowSearch.value = true,
        onClose: ($event) => isShowSearch.value = false
      }, null, _parent));
      _push(`<h2 class="${ssrRenderClass([{
        "-translate-y-3em": unref(isShowSearch)
      }, "text-center text-light font-500 transition-300 absolute-center -translate-y-4em"])}" data-v-5bf1c017> \u641C \u7D22 </h2></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/HeaderMenu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5bf1c017"]]);
const _imports_0 = "" + publicAssetsURL("logo_title.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "min-h-200px w-full flex-row-c-c rounded-0 card-default",
    "border-0px": "",
    "border-t": "1px solid gray-200",
    "dark:border-t-dark-3": "",
    "dark:bg-dark-9": ""
  }, _attrs))}><div class="layout-default" flex-row-c-c flex-col dark:opacity-80><img loading="lazy"${ssrRenderAttr("src", _imports_0)} w-10rem alt="Design By: Kiwi2333">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "https://github.com/KiWi233333",
    class: "mt-4 flex-row-c-c text-0.8rem tracking-0.1em opacity-70"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i i-carbon:logo-github mr-2 p-0.8em${_scopeId}></i>@KiWi233333 `);
      } else {
        return [createVNode("i", {
          "i-carbon:logo-github": "",
          "mr-2": "",
          "p-0.8em": ""
        }), createTextVNode("@KiWi233333 ")];
      }
    }),
    _: 1
  }, _parent));
  _push(`<strong pt-1em opacity-80> Design By `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    target: "_blank",
    to: "https://github.com/KiWi233333"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img loading="lazy"${ssrRenderAttr("src", _imports_2)} alt="Design By Kiwi23333" class="ml-4 w-80px" dark:filter-invert-100${_scopeId}>`);
      } else {
        return [createVNode("img", {
          loading: "lazy",
          src: _imports_2,
          alt: "Design By Kiwi23333",
          class: "ml-4 w-80px",
          "dark:filter-invert-100": ""
        })];
      }
    }),
    _: 1
  }, _parent));
  _push(`</strong></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Footer-CSejDGCf.mjs.map
