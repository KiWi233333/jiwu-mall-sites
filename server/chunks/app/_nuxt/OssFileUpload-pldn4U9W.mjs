import { h as buildProps, z as definePropType, A as mutable, C as full_screen_default, D as scale_to_original_default, j as useNamespace, k as isNumber, F as ElIcon, G as close_default, H as arrow_left_default, I as arrow_right_default, J as zoom_out_default, K as zoom_in_default, L as refresh_left_default, M as refresh_right_default, w as withInstall, u as useUserStore, B as BaseUrlImg, b as _export_sfc, l as _export_sfc$1, S as StatusCode, N as plus_default } from '../server.mjs';
import { defineComponent, markRaw, ref, effectScope, shallowRef, computed, watch, nextTick, openBlock, createBlock, Teleport, createVNode, Transition, withCtx, createElementVNode, normalizeClass, unref, normalizeStyle, withModifiers, createCommentVNode, createElementBlock, Fragment, resolveDynamicComponent, renderList, withDirectives, vShow, renderSlot, useAttrs, toDisplayString, mergeProps, resolveDirective, useSSRContext } from 'vue';
import { d as useEventListener } from './event-9ZI5GX64.mjs';
import { throttle } from 'lodash-unified';
import { u as useLocale } from './index-Jkc1A1yz.mjs';
import { u as useZIndex } from './focus-trap-FUoXuQZs.mjs';
import { k as keysOf } from './objects-HNc5gIZI.mjs';
import { u as useAttrs$1 } from './index-ukcTjM2L.mjs';
import { E as ElProgress } from './progress-lh-pSAoE.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { O as OssFileType, d as deleteOssFile } from './index-hfRePjpv.mjs';

const imageViewerProps = buildProps({
  urlList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: Boolean,
  teleported: Boolean,
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: definePropType(String),
    default: "anonymous"
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index) => isNumber(index),
  rotate: (deg) => isNumber(deg)
};
const _hoisted_1$1 = ["src", "crossorigin"];
const __default__$1 = defineComponent({
  name: "ElImageViewer"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const modes = {
      CONTAIN: {
        name: "contain",
        icon: markRaw(full_screen_default)
      },
      ORIGINAL: {
        name: "original",
        icon: markRaw(scale_to_original_default)
      }
    };
    const { t } = useLocale();
    const ns = useNamespace("image-viewer");
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading = ref(true);
    const crossorigin = ref(props.crossorigin);
    const activeIndex = ref(props.initialIndex);
    const mode = shallowRef(modes.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => {
      return activeIndex.value === 0;
    });
    const isLast = computed(() => {
      return activeIndex.value === props.urlList.length - 1;
    });
    const currentImg = computed(() => {
      return props.urlList[activeIndex.value];
    });
    const arrowPrevKls = computed(() => [
      ns.e("btn"),
      ns.e("prev"),
      ns.is("disabled", !props.infinite && isFirst.value)
    ]);
    const arrowNextKls = computed(() => [
      ns.e("btn"),
      ns.e("next"),
      ns.is("disabled", !props.infinite && isLast.value)
    ]);
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      switch (deg % 360) {
        case 90:
        case -270:
          [translateX, translateY] = [translateY, -translateX];
          break;
        case 180:
        case -180:
          [translateX, translateY] = [-translateX, -translateY];
          break;
        case 270:
        case -90:
          [translateX, translateY] = [-translateY, translateX];
          break;
      }
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === modes.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    const computedZIndex = computed(() => {
      return isNumber(props.zIndex) ? props.zIndex : nextZIndex();
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loading.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(void 0, "mousemove", dragHandler);
      useEventListener(void 0, "mouseup", () => {
        removeMousemove();
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = keysOf(modes);
      const modeValues = Object.values(modes);
      const currentMode = mode.value.name;
      const index = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index + 1) % modeNames.length;
      mode.value = modes[modeNames[nextIndex]];
      reset();
    }
    function setActiveItem(index) {
      const len = props.urlList.length;
      activeIndex.value = (index + len) % len;
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value - 1);
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value + 1);
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { minScale, maxScale } = props;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: props.zoomRate,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > minScale) {
            transform.value.scale = Number.parseFloat((transform.value.scale / zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          if (transform.value.scale < maxScale) {
            transform.value.scale = Number.parseFloat((transform.value.scale * zoomRate).toFixed(3));
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          emit("rotate", transform.value.deg);
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          emit("rotate", transform.value.deg);
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(activeIndex, (val) => {
      reset();
      emit("switch", val);
    });
    expose({
      setActiveItem
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.teleported
      }, [
        createVNode(Transition, {
          name: "viewer-fade",
          appear: ""
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              ref_key: "wrapper",
              ref: wrapper,
              tabindex: -1,
              class: normalizeClass(unref(ns).e("wrapper")),
              style: normalizeStyle({ zIndex: unref(computedZIndex) })
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("mask")),
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"]))
              }, null, 2),
              createCommentVNode(" CLOSE "),
              createElementVNode("span", {
                class: normalizeClass([unref(ns).e("btn"), unref(ns).e("close")]),
                onClick: hide
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                })
              ], 2),
              createCommentVNode(" ARROW "),
              !unref(isSingle) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createElementVNode("span", {
                  class: normalizeClass(unref(arrowPrevKls)),
                  onClick: prev
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_left_default))
                    ]),
                    _: 1
                  })
                ], 2),
                createElementVNode("span", {
                  class: normalizeClass(unref(arrowNextKls)),
                  onClick: next
                }, [
                  createVNode(unref(ElIcon), null, {
                    default: withCtx(() => [
                      createVNode(unref(arrow_right_default))
                    ]),
                    _: 1
                  })
                ], 2)
              ], 64)) : createCommentVNode("v-if", true),
              createCommentVNode(" ACTIONS "),
              createElementVNode("div", {
                class: normalizeClass([unref(ns).e("btn"), unref(ns).e("actions")])
              }, [
                createElementVNode("div", {
                  class: normalizeClass(unref(ns).e("actions__inner"))
                }, [
                  createVNode(unref(ElIcon), {
                    onClick: _cache[1] || (_cache[1] = ($event) => handleActions("zoomOut"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(zoom_out_default))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[2] || (_cache[2] = ($event) => handleActions("zoomIn"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(zoom_in_default))
                    ]),
                    _: 1
                  }),
                  createElementVNode("i", {
                    class: normalizeClass(unref(ns).e("actions__divider"))
                  }, null, 2),
                  createVNode(unref(ElIcon), { onClick: toggleMode }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(unref(mode).icon)))
                    ]),
                    _: 1
                  }),
                  createElementVNode("i", {
                    class: normalizeClass(unref(ns).e("actions__divider"))
                  }, null, 2),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[3] || (_cache[3] = ($event) => handleActions("anticlockwise"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_left_default))
                    ]),
                    _: 1
                  }),
                  createVNode(unref(ElIcon), {
                    onClick: _cache[4] || (_cache[4] = ($event) => handleActions("clockwise"))
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(refresh_right_default))
                    ]),
                    _: 1
                  })
                ], 2)
              ], 2),
              createCommentVNode(" CANVAS "),
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("canvas"))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.urlList, (url, i) => {
                  return withDirectives((openBlock(), createElementBlock("img", {
                    ref_for: true,
                    ref: (el) => imgRefs.value[i] = el,
                    key: url,
                    src: url,
                    style: normalizeStyle(unref(imgStyle)),
                    class: normalizeClass(unref(ns).e("img")),
                    crossorigin: crossorigin.value,
                    onLoad: handleImgLoad,
                    onError: handleImgError,
                    onMousedown: handleMouseDown
                  }, null, 46, _hoisted_1$1)), [
                    [vShow, i === activeIndex.value]
                  ]);
                }), 128))
              ], 2),
              renderSlot(_ctx.$slots, "default")
            ], 6)
          ]),
          _: 3
        })
      ], 8, ["disabled"]);
    };
  }
});
var ImageViewer = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "image-viewer.vue"]]);
const ElImageViewer = withInstall(ImageViewer);
const imageProps = buildProps({
  hideOnClickModal: Boolean,
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  loading: {
    type: String,
    values: ["eager", "lazy"]
  },
  lazy: Boolean,
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  previewTeleported: Boolean,
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: definePropType(String),
    default: "anonymous"
  }
});
const imageEmits = {
  load: (evt) => evt instanceof Event,
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber(val),
  close: () => true,
  show: () => true
};
const _hoisted_1 = ["src", "loading", "crossorigin"];
const _hoisted_2 = { key: 0 };
const __default__ = defineComponent({
  name: "ElImage",
  inheritAttrs: false
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: imageProps,
  emits: imageEmits,
  setup(__props, { emit }) {
    const props = __props;
    let prevOverflow = "";
    const { t } = useLocale();
    const ns = useNamespace("image");
    const rawAttrs = useAttrs();
    const attrs = useAttrs$1();
    const imageSrc = ref();
    const crossorigin = ref(props.crossorigin);
    const hasLoadError = ref(false);
    const isLoading = ref(true);
    const showViewer = ref(false);
    const container = ref();
    ref();
    let stopWheelListener;
    const imageKls = computed(() => [
      ns.e("inner"),
      preview.value && ns.e("preview"),
      isLoading.value && ns.is("loading")
    ]);
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const isManual = computed(() => {
      if (props.loading === "eager")
        return false;
      return props.loading === "lazy" || props.lazy;
    });
    function handleLoad(event) {
      isLoading.value = false;
      hasLoadError.value = false;
      emit("load", event);
    }
    function handleError(event) {
      isLoading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    async function addLazyLoadListener() {
      return;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = (void 0).body.style.overflow;
      (void 0).body.style.overflow = "hidden";
      showViewer.value = true;
      emit("show");
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      (void 0).body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (isManual.value) {
        isLoading.value = true;
        hasLoadError.value = false;
        addLazyLoadListener();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: normalizeClass([unref(ns).b(), _ctx.$attrs.class]),
        style: normalizeStyle(unref(containerStyle))
      }, [
        hasLoadError.value ? renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("error"))
          }, toDisplayString(unref(t)("el.image.error")), 3)
        ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          imageSrc.value !== void 0 ? (openBlock(), createElementBlock("img", mergeProps({ key: 0 }, unref(attrs), {
            src: imageSrc.value,
            loading: _ctx.loading,
            style: unref(imageStyle),
            class: unref(imageKls),
            crossorigin: crossorigin.value,
            onClick: clickHandler,
            onLoad: handleLoad,
            onError: handleError
          }), null, 16, _hoisted_1)) : createCommentVNode("v-if", true),
          isLoading.value ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(ns).e("wrapper"))
          }, [
            renderSlot(_ctx.$slots, "placeholder", {}, () => [
              createElementVNode("div", {
                class: normalizeClass(unref(ns).e("placeholder"))
              }, null, 2)
            ])
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)),
        unref(preview) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          showViewer.value ? (openBlock(), createBlock(unref(ElImageViewer), {
            key: 0,
            "z-index": _ctx.zIndex,
            "initial-index": unref(imageIndex),
            infinite: _ctx.infinite,
            "zoom-rate": _ctx.zoomRate,
            "min-scale": _ctx.minScale,
            "max-scale": _ctx.maxScale,
            "url-list": _ctx.previewSrcList,
            "hide-on-click-modal": _ctx.hideOnClickModal,
            teleported: _ctx.previewTeleported,
            "close-on-press-escape": _ctx.closeOnPressEscape,
            onClose: closeViewer,
            onSwitch: switchViewer
          }, {
            default: withCtx(() => [
              _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "viewer")
              ])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : createCommentVNode("v-if", true)
        ], 64)) : createCommentVNode("v-if", true)
      ], 6);
    };
  }
});
var Image = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__file", "image.vue"]]);
const ElImage = withInstall(Image);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OssFileUpload",
  __ssrInlineRender: true,
  props: {
    limit: {
      default: 1
    },
    multiple: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    modelValue: {
      default: () => []
    },
    preview: {
      type: Boolean,
      default: true
    },
    disable: {
      type: Boolean,
      default: false
    },
    uploadQuality: {
      default: 0.6
    },
    accept: {
      default: "image/*"
    },
    uploadType: {
      default: OssFileType.IMAGE
    },
    size: {},
    draggable: {
      type: Boolean
    },
    errorClass: {},
    inputClass: {}
  },
  emits: ["submit", "errorMsg", "update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    const props = __props;
    const emit = __emit;
    const user = useUserStore();
    const fileList = ref(props.modelValue || []);
    const pathList = computed(() => {
      return getNewPathList(fileList.value);
    });
    function getNewPathList(list) {
      const pathList2 = [];
      if (list) {
        for (let i = 0; i < list.length; i++) {
          const p = list[i];
          if (p.key)
            pathList2.push(p.key);
        }
      }
      return pathList2;
    }
    const error = ref("");
    const inputRef = ref();
    async function removeItem(t) {
      if (!t.key)
        return;
      let flag = false;
      if (t.key) {
        const res = await deleteOssFile(t.key, user.getToken);
        if (res.code === StatusCode.SUCCESS) {
          fileList.value.splice(fileList.value.findIndex((item) => item.key === t.key), 1);
          flag = true;
        } else if (res.code === StatusCode.DELETE_ERR) {
          fileList.value.splice(fileList.value.findIndex((item) => item.key === t.key), 1);
        }
      } else {
        fileList.value.splice(fileList.value.findIndex((item) => item.id === t.id), 1);
      }
      emit("update:modelValue", fileList.value);
      emit("submit", "", pathList.value, fileList.value);
      return flag;
    }
    function resetInput() {
    }
    const preImageClass = computed(() => {
      const arr = [];
      if (props.limit === 1)
        arr.push("absolute top-0 z-1");
      if (props.inputClass)
        arr.push(props == null ? void 0 : props.inputClass);
      return arr;
    });
    __expose({
      inputRef,
      fileList,
      pathList,
      removeItem,
      resetInput
    });
    watch(() => props.modelValue, (val) => {
      if (val)
        fileList.value = val;
    }, {
      immediate: true
    });
    const getPreImage = computed(() => {
      if (props.preview)
        return pathList.value.map((p) => BaseUrlImg + p);
      else
        return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElIconPlus = plus_default;
      const _component_ElImage = ElImage;
      const _component_el_progress = ElProgress;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "input-list relative flex cursor-pointer select-none"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-2c0d2108><div flex-row-c-c transition-300 hover:border="[var(--el-color-primary)]" class="${ssrRenderClass([_ctx.inputClass, "relative z-1 backdrop-blur-12px border-default-dashed hover:text-[var(--el-color-primary)]"])}" data-v-2c0d2108><input class="z-10 block h-full w-full cursor-pointer opacity-0 absolute-center" type="file"${ssrIncludeBooleanAttr(_ctx.multiple) ? " multiple" : ""}${ssrRenderAttr("accept", _ctx.accept)}${ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""}${ssrIncludeBooleanAttr(_ctx.disable) ? " disabled" : ""}${ssrRenderAttr("draggable", _ctx.draggable)} data-v-2c0d2108>`);
      _push(ssrRenderComponent(_component_ElIconPlus, {
        class: "h-1/3 w-1/3 absolute-center"
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.uploadType === unref(OssFileType).IMAGE) {
        _push(`<!--[-->`);
        ssrRenderList(unref(fileList), (p, index) => {
          _push(`<div class="${ssrRenderClass([unref(preImageClass), "pre-group flex flex-shrink-0 overflow-hidden backdrop-blur-12px"])}" data-v-2c0d2108>`);
          _push(ssrRenderComponent(_component_ElImage, {
            loading: "lazy",
            alt: p.id,
            src: p.id,
            "preview-src-list": unref(getPreImage),
            "preview-teleported": "",
            "initial-index": index,
            class: "relative h-full w-full select-none object-cover"
          }, null, _parent));
          _push(`<div class="absolute left-0 top-0 h-full w-full flex-row-c-c" data-v-2c0d2108>`);
          if (p.status !== "success") {
            _push(ssrRenderComponent(_component_el_progress, {
              style: {
                "aspect-ratio": "1/1",
                "height": "100%",
                "padding": "16%"
              },
              color: "var(--el-color-primary)",
              class: "backdrop-blur-12px",
              striped: "",
              "striped-flow": "",
              type: "circle",
              percentage: p == null ? void 0 : p.percent,
              status: p.status
            }, null, _parent));
          } else {
            _push(`<div class="pre-group-hover absolute h-full w-full flex-row-c-c gap-1 opacity-0 backdrop-blur-12px transition-300" data-v-2c0d2108>`);
            ssrRenderSlot(_ctx.$slots, "pre-btns", {}, () => {
              _push(`<i class="pre-btn hover:bg-[var(--el-color-danger)]" i-solar:trash-bin-trash-bold-duotone data-v-2c0d2108></i>`);
              if ((p == null ? void 0 : p.percent) && (p == null ? void 0 : p.percent) < 100) {
                _push(`<div class="h-1/5 max-h-2rem max-w-2rem w-1/5 cursor-pointer hover:bg-[var(--el-color-danger)]" i-solar:close-circle-bold-duotone data-v-2c0d2108></div>`);
              } else {
                _push(`<!---->`);
              }
            }, _push, _parent);
            _push(`</div>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.uploadType === unref(OssFileType).VIDEO) {
        _push(`<!--[-->`);
        ssrRenderList(_ctx.modelValue, (p) => {
          _push(`<div class="${ssrRenderClass([unref(preImageClass), "pre-group relative flex-shrink-0 overflow-hidden backdrop-blur-12px"])}" data-v-2c0d2108><video${ssrRenderAttr("src", p.id)} controls z-0 h-full w-full select-none object-cover data-v-2c0d2108></video><div class="absolute left-0 top-0 z-1 h-1/4 w-full flex-row-c-c" data-v-2c0d2108>`);
          if ((p == null ? void 0 : p.percent) && (p == null ? void 0 : p.percent) < 100) {
            _push(ssrRenderComponent(_component_el_progress, {
              style: {
                "width": "100%",
                "height": "100%",
                "padding": "16%"
              },
              color: "var(--el-color-primary)",
              class: "backdrop-blur-12px",
              striped: "",
              "striped-flow": "",
              type: "circle",
              percentage: p == null ? void 0 : p.percent,
              status: p == null ? void 0 : p.status
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!(p == null ? void 0 : p.percent) && (p == null ? void 0 : p.percent) < 100) {
            _push(`<div class="z-2 h-1/5 max-h-2rem max-w-2rem w-1/5 cursor-pointer hover:bg-[var(--el-color-danger)]" i-solar:close-circle-bold data-v-2c0d2108></div>`);
          } else {
            _push(`<div class="pre-group-hover absolute left-0 top-0 h-full w-full flex-row-c-c gap-1 opacity-0 backdrop-blur-20px transition-300 v-card" data-v-2c0d2108>`);
            ssrRenderSlot(_ctx.$slots, "pre-btns", {}, () => {
              _push(`<div class="h-full max-h-2rem max-w-2rem w-1/5 cursor-pointer hover:bg-[var(--el-color-danger)]" i-solar:trash-bin-trash-bold-duotone data-v-2c0d2108></div>`);
            }, _push, _parent);
            _push(`</div>`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div style="${ssrRenderStyle(unref(error) ? null : {
        display: "none"
      })}" class="${ssrRenderClass([_ctx.errorClass, "m-1 block w-full overflow-hidden truncate text-[var(--el-color-danger)] leading-1em opacity-80"])}" data-v-2c0d2108>${ssrInterpolate(unref(error))}</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/OssFileUpload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c0d2108"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=OssFileUpload-pldn4U9W.mjs.map
