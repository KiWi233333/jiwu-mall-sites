import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { u as useUserStore, A as useRoute, a2 as useAsyncData, S as StatusCode, a6 as useError, a5 as useHead, D as appName, n as navigateTo, E as ElMessage, B as BaseUrlImg, a7 as star_filled_default, g as ElMessageBox, _ as __nuxt_component_0, f as __nuxt_component_2$1, h as ElButton, a as _sfc_main$2$1, R as zoom_in_default, a8 as close_bold_default, a9 as caret_right_default, b as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_8 } from './Switch-Z3STMCL-.mjs';
import { E as ElInput } from './index-nLRih88y.mjs';
import { E as ElUpload } from './upload-QmSWdu5C.mjs';
import { E as ElProgress } from './progress-Y_Nip7T-.mjs';
import { E as ElDialog } from './dialog-ti9X6b9G.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, createVNode, unref, withDirectives, openBlock, createBlock, createTextVNode, Fragment, renderList, mergeProps, vShow, isRef, reactive, watch } from 'vue';
import { g as getResToken, O as OssFileType, b as uploadOssFile, d as deleteOssFile } from './index-Md2P4aBV.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderTeleport, ssrInterpolate } from 'vue/server-renderer';
import { w as watchDebounced, u as useStorage } from './index-daJZwzbi.mjs';
import { _ as __nuxt_component_1$1 } from './ElImage-hdm4w1vf.mjs';
import { E as ElRate } from './rate-u9ag93GX.mjs';
import { E as ElCheckbox } from './checkbox-grGLuZ3r.mjs';
import { ElText } from './index-QzTfU9Or.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-qWvYy4Gj.mjs';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import { g as getOrdersInfoById, O as OrdersStatus, t as toOrdersComment } from './index-DNDo83-k.mjs';
import { E as ElNotification } from './index-481vqEaW.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
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
import './event-JIBAhsR9.mjs';
import './index-RvHFA2kt.mjs';
import './objects-HNc5gIZI.mjs';
import './vnode-YsXVLyOk.mjs';
import './focus-trap-r09CvUzW.mjs';
import './aria-sbEPrgvQ.mjs';
import '@vue/reactivity';
import 'qiniu-js';
import './PreLoading-Jnbo7kLW.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Upload",
  __ssrInlineRender: true,
  props: {
    isDisable: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const user = useUserStore();
    const uploadList = ref([]);
    const videoList = ref([]);
    const imgUrl = ref("");
    const videoUrl = ref("");
    const isShowPreDialog = ref(false);
    const isPicture = ref(true);
    const videoRef = ref();
    function getVideoPath(file) {
      return file.url;
    }
    function onPreview(uploadFile) {
      imgUrl.value = uploadFile.url;
      isShowPreDialog.value = true;
      isPicture.value = true;
    }
    function onVideoPre(file) {
      videoUrl.value = file.url || "";
      isShowPreDialog.value = true;
      isPicture.value = false;
    }
    ref({
      url: "",
      key: "",
      uploadToken: "",
      endDateTime: -1
    });
    function checkFile(rawFile, size, msg) {
      if (rawFile.size && rawFile.size / 1024 / 1024 > size) {
        ElMessage.error(`${msg || "\u6587\u4EF6"}\u5927\u5C0F\u9700\u5C0F\u4E8E${size}MB!`);
        return false;
      }
      return true;
    }
    async function onChange(file, fileList) {
      if (!checkFile(file, 3, "\u56FE\u7247"))
        return;
      const index = uploadList.value.findIndex((p) => p.uid === file.uid);
      if (index === -1) {
        const { data, code } = await getResToken(OssFileType.IMAGE, user.getToken);
        if (code === StatusCode.SUCCESS) {
          file.key = data.key;
          uploadList.value.push(file);
          const i = uploadList.value.length - 1;
          uploadOssFile(file.raw, data.key, data.uploadToken, {
            next(res) {
              uploadList.value[i].status = "uploading";
              uploadList.value[i].percentage = Number.parseFloat(res.total.percent.toFixed(2));
              if (res.total.percent === 100)
                uploadList.value[i].status = "success";
            },
            error() {
              uploadList.value[i].status = "fail";
            },
            complete() {
              uploadList.value[i].status = "success";
            }
          });
        } else {
          ElMessage.error("\u83B7\u53D6\u4E0A\u4F20\u64CD\u4F5C\u9891\u7E41\uFF0C\u8BF75\u5206\u949F\u540E\u518D\u8BD5");
        }
      } else {
        fileList.splice(fileList.length - 1, 1);
        ElMessage.warning("\u6587\u4EF6\u5DF2\u5B58\u5728\uFF01");
      }
    }
    async function onChangeVideo(file, fileList) {
      if (!checkFile(file, 6, "\u89C6\u9891"))
        return;
      const index = videoList.value.findIndex((p) => p.name === file.name);
      if (index === -1) {
        const { data, code } = await getResToken(OssFileType.VIDEO, user.getToken);
        if (code === StatusCode.SUCCESS) {
          file.key = data.key;
          videoList.value.push(file);
          const i = videoList.value.length - 1;
          uploadOssFile(file.raw, data.key, data.uploadToken, {
            next(res) {
              videoList.value[i].status = "uploading";
              videoList.value[i].percentage = Number.parseFloat(res.total.percent.toFixed(2));
              if (res.total.percent === 100)
                videoList.value[i].status = "success";
            },
            error() {
              videoList.value[i].status = "fail";
            },
            complete() {
              videoList.value[i].status = "success";
            }
          });
        } else {
          ElMessage.error("\u83B7\u53D6\u4E0A\u4F20\u64CD\u4F5C\u9891\u7E41\uFF0C\u8BF75\u5206\u949F\u540E\u518D\u8BD5");
        }
      } else {
        fileList.splice(fileList.length - 1, 1);
        ElMessage.warning("\u6587\u4EF6\u5DF2\u5B58\u5728\uFF01");
      }
    }
    const imageRef = ref();
    async function onRemove(removeFile) {
      const i = uploadList.value.findIndex((p) => p.uid === removeFile.uid);
      if (i === -1)
        return;
      const item = uploadList.value[i];
      ElMessageBox.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u56FE\u7247?", "\u5220\u9664\u63D0\u793A", {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88",
        type: "warning",
        lockScroll: false
      }).then(async () => {
        const { code } = await deleteOssFile(item.key, user.getToken);
        imageRef.value.handleRemove(removeFile);
        if (code === StatusCode.SUCCESS)
          ElMessage.success("\u5220\u9664\u6210\u529F\uFF01");
      }).catch(() => {
      });
    }
    const videoInputRef = ref();
    function onVideoRemove(file) {
      ElMessageBox.confirm("\u786E\u5B9A\u5220\u9664\u8BE5\u89C6\u9891?", "\u5220\u9664\u63D0\u793A", {
        confirmButtonText: "\u786E\u5B9A",
        cancelButtonText: "\u53D6\u6D88",
        lockScroll: false,
        type: "warning"
      }).then(async () => {
        const { code } = await deleteOssFile(file.key, user.getToken);
        videoList.value.splice(0);
        videoInputRef.value.handleRemove(file);
        if (code === StatusCode.SUCCESS)
          ElMessage.success("\u5220\u9664\u6210\u529F\uFF01");
      }).catch(() => {
      });
    }
    const images = ref([]);
    const video = ref("");
    watchDebounced(
      videoList,
      (val) => {
        if (val.length) {
          video.value = val[0].key;
        }
      },
      {
        deep: true
      }
    );
    watchDebounced(
      uploadList,
      (val) => {
        if (val.length) {
          const list = val.map((p) => p.key ? p.key : false);
          images.value = list;
        }
      },
      {
        deep: true
      }
    );
    __expose({
      images,
      video
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_upload = ElUpload;
      const _component_ElIconZoomIn = zoom_in_default;
      const _component_ElIconCloseBold = close_bold_default;
      const _component_el_progress = ElProgress;
      const _component_ElIconCaretRight = caret_right_default;
      const _component_el_dialog = ElDialog;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "upload-group flex" }, _attrs))} data-v-ee64029b>`);
      _push(ssrRenderComponent(_component_el_upload, {
        ref_key: "imageRef",
        ref: imageRef,
        "file-list": unref(uploadList),
        multiple: "",
        accept: "image/*",
        limit: 3,
        draggable: "",
        "list-type": "picture-card",
        disabled: _ctx.isDisable,
        "auto-upload": false,
        onPreview,
        onExceed: () => ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).warning("\u53EA\u80FD\u4E0A\u4F203\u5F20\u56FE\u7247\uFF01"),
        onChange
      }, {
        file: withCtx(({ file }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative h-6rem w-6rem cursor-pointer" data-v-ee64029b${_scopeId}><img class="h-full w-full" style="${ssrRenderStyle({ "object-fit": "cover" })}"${ssrRenderAttr("src", file.url)} alt="\u9884\u89C8" loading="lazy" fit="cover" data-v-ee64029b${_scopeId}><div style="${ssrRenderStyle(file.status === "success" ? null : { display: "none" })}" class="absolute left-0 top-0 h-full w-full flex-row-c-c bg-dark-100 opacity-0 transition-300 group-hover:opacity-80" data-v-ee64029b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElIconZoomIn, {
              class: "h-1.2rem w-1.2rem cursor-pointer text-[#fff] hover:text-[var(--el-color-primary)]",
              onClick: ($event) => onPreview(file)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElIconCloseBold, {
              class: "absolute right-2 top-2 h-1rem w-1rem cursor-pointer text-[#fff] hover:text-[var(--el-color-danger)]",
              onClick: ($event) => onRemove(file)
            }, null, _parent2, _scopeId));
            _push2(`</div><div style="${ssrRenderStyle(file.status === "uploading" ? null : { display: "none" })}" class="absolute top-0 z-1 h-full w-full flex-row-c-c bg-light dark:bg-dark-1" data-v-ee64029b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_progress, {
              width: 60,
              indeterminate: "",
              type: "circle",
              percentage: file.percentage,
              status: file.status === "success" ? "success" : ""
            }, null, _parent2, _scopeId));
            _push2(`</div><small class="absolute top-0 z-10 text-[var(--el-color-danger)]" data-v-ee64029b${_scopeId}>\u4E0A\u4F20\u5931\u8D25</small></div>`);
          } else {
            return [
              createVNode("div", { class: "group relative h-6rem w-6rem cursor-pointer" }, [
                createVNode("img", {
                  class: "h-full w-full",
                  style: { "object-fit": "cover" },
                  src: file.url,
                  alt: "\u9884\u89C8",
                  loading: "lazy",
                  fit: "cover"
                }, null, 8, ["src"]),
                withDirectives(createVNode("div", { class: "absolute left-0 top-0 h-full w-full flex-row-c-c bg-dark-100 opacity-0 transition-300 group-hover:opacity-80" }, [
                  createVNode(_component_ElIconZoomIn, {
                    class: "h-1.2rem w-1.2rem cursor-pointer text-[#fff] hover:text-[var(--el-color-primary)]",
                    onClick: ($event) => onPreview(file)
                  }, null, 8, ["onClick"]),
                  createVNode(_component_ElIconCloseBold, {
                    class: "absolute right-2 top-2 h-1rem w-1rem cursor-pointer text-[#fff] hover:text-[var(--el-color-danger)]",
                    onClick: ($event) => onRemove(file)
                  }, null, 8, ["onClick"])
                ], 512), [
                  [vShow, file.status === "success"]
                ]),
                withDirectives(createVNode("div", { class: "absolute top-0 z-1 h-full w-full flex-row-c-c bg-light dark:bg-dark-1" }, [
                  createVNode(_component_el_progress, {
                    width: 60,
                    indeterminate: "",
                    type: "circle",
                    percentage: file.percentage,
                    status: file.status === "success" ? "success" : ""
                  }, null, 8, ["percentage", "status"])
                ], 512), [
                  [vShow, file.status === "uploading"]
                ]),
                createVNode("small", { class: "absolute top-0 z-10 text-[var(--el-color-danger)]" }, "\u4E0A\u4F20\u5931\u8D25")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i i-solar:camera-linear p-1rem opacity-70 data-v-ee64029b${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                "i-solar:camera-linear": "",
                "p-1rem": "",
                "opacity-70": ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_upload, {
        ref_key: "videoInputRef",
        ref: videoInputRef,
        class: "upload-video ml-3",
        "file-list": unref(videoList),
        accept: "video/*",
        limit: 1,
        "list-type": "picture-card",
        disabled: _ctx.isDisable,
        "auto-upload": false,
        onPreview,
        onExceed: () => ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).warning("\u53EA\u80FD\u4E0A\u4F20\u4E00\u4E2A\u89C6\u9891\uFF01"),
        onChange: onChangeVideo
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i i-solar:video-library-line-duotone p-1rem opacity-70 data-v-ee64029b${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                "i-solar:video-library-line-duotone": "",
                "p-1rem": "",
                "opacity-70": ""
              })
            ];
          }
        }),
        file: withCtx(({ file }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative" data-v-ee64029b${_scopeId}><video${ssrRenderAttr("src", getVideoPath(file))} h-full w-full data-v-ee64029b${_scopeId}></video><div class="absolute left-0 top-0 h-full w-full flex-row-c-c bg-dark-100 opacity-0 transition-300 group-hover:opacity-80" data-v-ee64029b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ElIconCaretRight, {
              class: "h-1.6rem w-1.6rem cursor-pointer text-[#fff] hover:text-[var(--el-color-primary)]",
              onClick: ($event) => onVideoPre(file)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ElIconCloseBold, {
              class: "absolute right-2 top-2 h-1rem w-1rem cursor-pointer text-[#fff] hover:text-[var(--el-color-danger)]",
              onClick: ($event) => onVideoRemove(file)
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "group relative" }, [
                createVNode("video", {
                  src: getVideoPath(file),
                  "h-full": "",
                  "w-full": ""
                }, null, 8, ["src"]),
                createVNode("div", { class: "absolute left-0 top-0 h-full w-full flex-row-c-c bg-dark-100 opacity-0 transition-300 group-hover:opacity-80" }, [
                  createVNode(_component_ElIconCaretRight, {
                    class: "h-1.6rem w-1.6rem cursor-pointer text-[#fff] hover:text-[var(--el-color-primary)]",
                    onClick: ($event) => onVideoPre(file)
                  }, null, 8, ["onClick"]),
                  createVNode(_component_ElIconCloseBold, {
                    class: "absolute right-2 top-2 h-1rem w-1rem cursor-pointer text-[#fff] hover:text-[var(--el-color-danger)]",
                    onClick: ($event) => onVideoRemove(file)
                  }, null, 8, ["onClick"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderTeleport(_push, (_push2) => {
        _push2(ssrRenderComponent(_component_el_dialog, {
          modelValue: unref(isShowPreDialog),
          "onUpdate:modelValue": ($event) => isRef(isShowPreDialog) ? isShowPreDialog.value = $event : null
        }, {
          default: withCtx((_, _push3, _parent2, _scopeId) => {
            if (_push3) {
              _push3(`<img style="${ssrRenderStyle(unref(isPicture) ? null : { display: "none" })}" w-full${ssrRenderAttr("src", unref(imgUrl))} alt="Kiwi2333 \u6781\u7269\u5708" data-v-ee64029b${_scopeId}><video style="${ssrRenderStyle(!unref(isPicture) ? null : { display: "none" })}"${ssrRenderAttr("src", unref(videoUrl))} preload="auto" controls h-full w-full data-v-ee64029b${_scopeId}></video>`);
            } else {
              return [
                withDirectives(createVNode("img", {
                  "w-full": "",
                  src: unref(imgUrl),
                  alt: "Kiwi2333 \u6781\u7269\u5708"
                }, null, 8, ["src"]), [
                  [vShow, unref(isPicture)]
                ]),
                withDirectives(createVNode("video", {
                  ref_key: "videoRef",
                  ref: videoRef,
                  src: unref(videoUrl),
                  preload: "auto",
                  controls: "",
                  "h-full": "",
                  "w-full": ""
                }, null, 8, ["src"]), [
                  [vShow, !unref(isPicture)]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/comm/Upload.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ee64029b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Goods",
  __ssrInlineRender: true,
  props: {
    orderItem: {}
  },
  setup(__props) {
    function getProps(p) {
      return `${(p == null ? void 0 : p.size) || ""} ${(p == null ? void 0 : p.color) || ""} ${(p == null ? void 0 : p.combo) || ""}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_card_el_image = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "goods flex" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_card_el_image, {
        loading: "lazy",
        fit: "cover",
        class: "h-4rem w-4rem overflow-hidden rounded-6px border-default",
        src: `${("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.orderItem.goodsSku.image}?imageView2/0/w/100/h/100/format/webp/interlace/1/q/50`
      }, null, _parent));
      _push(`<div class="flex flex-col justify-around px-4"><small>${ssrInterpolate(_ctx.orderItem.goods.name)}</small><small opacity-60>${ssrInterpolate(getProps(_ctx.orderItem.goodsSku))}</small></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/comm/Goods.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommentCard",
  __ssrInlineRender: true,
  props: {
    orderItem: {},
    isDisable: { type: Boolean },
    index: {}
  },
  setup(__props, { expose: __expose }) {
    const { orderItem, index, isDisable } = __props;
    const uploadFilesRef = ref({
      images: [],
      video: ""
    });
    const dto = useStorage(
      `jiwu_order_comment_${orderItem.id}`,
      reactive({
        orderItemId: orderItem.id,
        skuId: orderItem.skuId,
        content: "",
        rate: 0,
        images: [],
        video: "",
        isRecommend: 0,
        isAnonymous: 0
      }),
      sessionStorage
    );
    watch(
      [() => uploadFilesRef.value.images, () => uploadFilesRef.value.video],
      (val) => {
        if (val[0]) {
          dto.value.images = val[0];
        }
        if (val[1]) {
          dto.value.video = val[1];
        }
      },
      { deep: true }
    );
    async function clearData() {
      uploadFilesRef.value.images = [];
      uploadFilesRef.value.video = "";
      dto.value = {
        orderItemId: orderItem.id,
        skuId: orderItem.skuId,
        content: "",
        rate: 0,
        images: [],
        video: "",
        isRecommend: 0,
        isAnonymous: 0
      };
    }
    __expose({ dto, clearData });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = ElInput;
      const _component_OrderCommUpload = __nuxt_component_1;
      const _component_OrderCommGoods = _sfc_main$2;
      const _component_el_rate = ElRate;
      const _component_el_checkbox = ElCheckbox;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-b427f6bc>`);
      _push(ssrRenderComponent(_component_el_input, {
        modelValue: unref(dto).content,
        "onUpdate:modelValue": ($event) => unref(dto).content = $event,
        modelModifiers: { lazy: true },
        class: "mb-4 rounded-10px shadow",
        disabled: _ctx.isDisable,
        type: "textarea",
        rows: 6,
        "show-word-limit": true,
        "max-length": 250,
        size: "large",
        placeholder: "\u5199\u4E0B\u4F60\u5BF9\u5546\u54C1\u7684\u771F\u5B9E\u8BC4\u4EF7\uFF01"
      }, null, _parent));
      _push(`<div class="flex" data-v-b427f6bc>`);
      _push(ssrRenderComponent(_component_OrderCommUpload, {
        ref_key: "uploadFilesRef",
        ref: uploadFilesRef,
        "is-disable": _ctx.isDisable
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_OrderCommGoods, {
        "order-item": _ctx.orderItem,
        class: "mt-4"
      }, null, _parent));
      _push(`<div mt-4 flex-row-bt-c data-v-b427f6bc><div class="flex items-center" data-v-b427f6bc><small opacity-80 data-v-b427f6bc>\u8BC4\u5206\uFF1A</small>`);
      _push(ssrRenderComponent(_component_el_rate, {
        modelValue: unref(dto).rate,
        "onUpdate:modelValue": ($event) => unref(dto).rate = $event,
        modelModifiers: { lazy: true },
        disabled: _ctx.isDisable,
        "allow-half": "",
        "show-text": "",
        colors: [
          "var(--el-color-black-light-5)",
          "var(--el-color-warning-light-3)",
          "var(--el-color-warning)"
        ],
        icons: ["ElIconStarFilled" in _ctx ? _ctx.ElIconStarFilled : unref(star_filled_default), "ElIconStarFilled" in _ctx ? _ctx.ElIconStarFilled : unref(star_filled_default), "ElIconStarFilled" in _ctx ? _ctx.ElIconStarFilled : unref(star_filled_default)],
        texts: ["\u5F88\u5DEE", "\u5DEE", "\u8FD8\u884C", "\u6EE1\u610F", "\u975E\u5E38\u6EE1\u610F"]
      }, null, _parent));
      _push(`</div><div class="flex opacity-70" data-v-b427f6bc>`);
      _push(ssrRenderComponent(_component_el_checkbox, {
        modelValue: unref(dto).isRecommend,
        "onUpdate:modelValue": ($event) => unref(dto).isRecommend = $event,
        disabled: _ctx.isDisable
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<small data-v-b427f6bc${_scopeId}>\u63A8 \u8350</small>`);
          } else {
            return [
              createVNode("small", null, "\u63A8 \u8350")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_checkbox, {
        modelValue: unref(dto).isAnonymous,
        "onUpdate:modelValue": ($event) => unref(dto).isAnonymous = $event,
        disabled: _ctx.isDisable
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<small data-v-b427f6bc${_scopeId}>\u533F \u540D</small>`);
          } else {
            return [
              createVNode("small", null, "\u533F \u540D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Order/CommentCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b427f6bc"]]);
const _imports_0 = "" + publicAssetsURL("images/icon/success_cone.svg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const user = useUserStore();
    const route = useRoute();
    const orderId = ref((_a = route.params.id) == null ? void 0 : _a.toString());
    const order = useAsyncData(async () => {
      const { data, code } = await getOrdersInfoById(orderId.value, user.getToken);
      if (code === StatusCode.SUCCESS) {
        if (data.status !== OrdersStatus.RECEIVED) {
          useError();
          return null;
        }
        return data;
      } else {
        return null;
      }
    }, "$frtncmxQS1");
    useHead({
      title: `${appName} - \u8BA2\u5355\u8BC4\u4EF7`,
      meta: [
        {
          name: "description",
          content: `${appName} - \u8BA2\u5355\u8BC4\u4EF7`
        }
      ]
    });
    const dtoList = ref([]);
    const isDisable = ref(false);
    const isDone = ref(false);
    const isLoading = ref(false);
    const isExpire = computed(() => {
      return user.isLogin && route.params.id && order.data.value && !isDone.value;
    });
    async function onSubmit() {
      var _a2;
      if (dtoList.value.length !== ((_a2 = order.data.value) == null ? void 0 : _a2.ordersItems.length))
        return ElMessage.warning("\u8BC4\u8BBA\u5217\u8868\u4E2A\u6570\u7F3A\u5931\uFF01");
      for (let i = 0; i < dtoList.value.length; i++) {
        const p = dtoList.value[i];
        if (!p.dto.rate)
          return ElMessage.warning("\u8BC4\u8BBA\u661F\u7EA7\u4E0D\u80FD\u4E3A\u7A7A\uFF01");
        else if (!p.dto.orderItemId)
          return ElMessage.warning("\u8BC4\u8BBA\u8868\u5355\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
      }
      isDisable.value = true;
      isDone.value = false;
      isLoading.value = true;
      const { code } = await toOrdersComment(
        order.data.value.id,
        JSON.parse(JSON.stringify(dtoList.value.map((p) => p.dto))),
        user.getToken
      );
      if (code === StatusCode.SUCCESS) {
        ElNotification.success({
          title: "\u8BC4\u4EF7\u6210\u529F \u{1F389}",
          message: "\u611F\u8C22\u60A8\u7684\u8BC4\u4EF7\uFF0C\u6B22\u8FCE\u4E0B\u6B21\u7EE7\u7EED\u9009\u8D2D~"
        });
        isDone.value = true;
      } else {
        ElNotification.error({
          title: "\u8BC4\u4EF7\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01"
        });
        isDone.value = false;
      }
      dtoList.value.forEach((p) => {
        p.clearData && p.clearData();
      });
      isLoading.value = false;
    }
    async function checkForm(call) {
      ElMessageBox.confirm("\u786E\u8BA4\u63D0\u4EA4\u8BC4\u4EF7\uFF1F", "\u63D0\u793A", {
        confirmButtonText: "\u786E\u5B9A",
        lockScroll: false,
        cancelButtonText: "\u53D6\u6D88",
        type: "info",
        center: true,
        callback: async (res) => {
          if (res === "confirm")
            call && call();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_BtnSwitch = __nuxt_component_8;
      const _component_OrderCommentCard = __nuxt_component_3;
      const _component_el_text = ElText;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_el_button = ElButton;
      const _component_OtherError = _sfc_main$2$1;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "second",
        header: false,
        "left-menu": false,
        footer: false,
        menu: ["back", "service"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    unref(isExpire) ? withDirectives((openBlock(), createBlock("div", {
                      key: 0,
                      class: "layout-default md:w-650px"
                    }, [
                      createVNode("h3", {
                        "my-4": "",
                        flex: "",
                        "items-center": ""
                      }, [
                        createTextVNode(" \u8BA2\u5355\u8BC4\u4EF7 "),
                        createVNode("i", {
                          "i-solar:dialog-2-line-duotone": "",
                          "ml-2": "",
                          "p-0.6em": ""
                        }),
                        createVNode(_component_BtnSwitch, { class: "ml-a mr-0" })
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(order).data.value) == null ? void 0 : _a2.ordersItems, (p, i) => {
                        return openBlock(), createBlock("div", {
                          key: p.id,
                          class: "mb-4 rounded-10px p-4 shadow-sm v-card"
                        }, [
                          createVNode(_component_OrderCommentCard, {
                            ref_for: true,
                            ref_key: "dtoList",
                            ref: dtoList,
                            index: i,
                            "order-item": p,
                            "is-disable": unref(isDisable)
                          }, null, 8, ["index", "order-item", "is-disable"])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "tra sticky bottom-1rem mt-4 flex items-center rounded-10px p-3 shadow v-card" }, [
                        createVNode(_component_el_text, { "flex-row-c-c": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: "/chat?type=service",
                              class: "hidden md:inline"
                            }, {
                              default: withCtx(() => [
                                createVNode("i", {
                                  "i-solar:headphones-round-sound-line-duotone": "",
                                  "mr-2": "",
                                  "p-.8em": ""
                                }),
                                createTextVNode(" \u5BA2\u670D ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_button, {
                          class: "ml-a",
                          type: "primary",
                          style: { "font-weight": "600", "padding": "1.1rem" },
                          "shadow-lg": "",
                          onClick: ($event) => checkForm(() => onSubmit())
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u63D0 \u4EA4 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ])), [
                      [
                        _directive_loading,
                        unref(isLoading),
                        void 0,
                        {
                          fullscreen: true,
                          lock: true
                        }
                      ]
                    ]) : unref(isDone) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "h-90vh w-full flex-row-c-c animate-[bounceIn_0.4s_ease-in] overflow-hidden",
                      "flex-col": "",
                      "leading-2em": "",
                      "tracking-0.2em": ""
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        "w-8rem": "",
                        alt: "\u{1F389}"
                      }),
                      createVNode("h3", null, "\u8BC4\u4EF7\u5DF2\u5B8C\u6210"),
                      createVNode("div", { class: "mt-2" }, [
                        createVNode(_component_el_button, {
                          type: "primary",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo)).length > 0 ? _ctx.$router.back() : ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/order/list")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u5173\u95ED ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_el_button, {
                          plain: "",
                          type: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u4E3B\u9875 ")
                          ]),
                          _: 1
                        })
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
                      class: "h-90vh w-full flex-row-c-c"
                    }, [
                      createVNode(_component_OtherError, {
                        msg: "\u62B1\u6B49\uFF0C\u8BA2\u5355\u4E0D\u5B58\u5728",
                        class: "text-[var(--el-color-primary)]"
                      })
                    ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order/comment/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-dhbIAhIu.mjs.map
