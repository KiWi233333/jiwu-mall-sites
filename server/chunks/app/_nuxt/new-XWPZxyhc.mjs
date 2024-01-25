import { A as useRoute, c as useSeoMeta, u as useUserStore, F as clearError, n as navigateTo, B as BaseUrlImg, G as compareObjects, E as ElMessage, d as appKeywords, _ as __nuxt_component_0, f as __nuxt_component_2$1, a as _sfc_main$2$1, e as __nuxt_component_2$2, H as getCommCategoryList, S as StatusCode, g as ElMessageBox, b as _export_sfc } from '../server.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-Q_ZiRZvp.mjs';
import { E as ElInput } from './index-nLRih88y.mjs';
import { _ as __nuxt_component_9$1 } from './OssFileUpload-RLGBsbrF.mjs';
import { E as ElSelect, a as ElOption } from './index-1UBKVkQQ.mjs';
import { _ as __nuxt_component_1 } from './ElImage-hdm4w1vf.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, renderSlot, createTextVNode, toDisplayString, ref, openBlock, createBlock, createCommentVNode, isRef, Fragment, renderList, resolveComponent } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrGetDirectiveProps } from 'vue/server-renderer';
import { E as ElRadioGroup, b as ElRadioButton } from './index-vwoBdBES.mjs';
import { v as vLoading } from './loading-9V6ttWhv.mjs';
import * as qiniu from 'qiniu-js';
import { g as getResToken, O as OssFileType, u as uploadOssFileSe, a as getOssErrorCode, d as deleteOssFile } from './index-Md2P4aBV.mjs';
import { E as ElNotification } from './index-481vqEaW.mjs';
import { E as ElTag } from './index-Ve7Fq5RY.mjs';
import { P as PostStatus, b as getPostStatusList, c as getCommPostDetailBySelf, u as updateCommPost, d as addCommPost, e as delCommPost, h as hardDelCommPost } from './post-VFNrEwmr.mjs';
import { d as useSessionStorage } from './index-daJZwzbi.mjs';
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
import 'async-validator';
import './objects-HNc5gIZI.mjs';
import './event-JIBAhsR9.mjs';
import './index-RvHFA2kt.mjs';
import './focus-trap-r09CvUzW.mjs';
import './aria-sbEPrgvQ.mjs';
import './progress-Y_Nip7T-.mjs';
import './index-gZoFaHmS.mjs';
import './scrollbar-uIUdvs5K.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-0Uz170Jh.mjs';
import './PreLoading-Jnbo7kLW.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CategorySelect",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    useUserStore();
    const value = ref("");
    const categoryList = ref([]);
    const isCateLoading = ref(false);
    async function loadCategoryData() {
      const res = await getCommCategoryList();
      if ((res == null ? void 0 : res.code) === StatusCode.SUCCESS)
        categoryList.value = (res == null ? void 0 : res.data) || [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_CardElImage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))} data-v-d94657d1><div class="max-w-20rem w-16rem flex items-center border-gray-400 rounded-1rem border-default-dashed" data-v-d94657d1><i i-solar:asteroid-line-duotone mx-2 p-0.5em opacity-70 data-v-d94657d1></i>`);
      _push(ssrRenderComponent(_component_el_select, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        class: "select mr-2",
        "no-data-text": "\u6CA1\u6709\u6570\u636E",
        multiple: false,
        filterable: "",
        clearable: ""
      }, _ctx.$attrs, {
        placeholder: "\u9009\u62E9\u53D1\u5E03\u7684\u5708\u5B50",
        loading: unref(isCateLoading),
        onFocus: loadCategoryData,
        onChange: (val) => _ctx.$emit("update:modelValue", val)
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(categoryList), (p) => {
              _push2(ssrRenderComponent(_component_el_option, {
                key: p.id,
                label: p.name,
                value: p.id,
                style: { "height": "auto" },
                class: "relative"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div h-3rem flex items-center gap-2 text-center data-v-d94657d1${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_CardElImage, {
                      fit: "cover",
                      class: "mr-2 h-2.6rem w-2.6rem card-default",
                      loading: "lazy",
                      src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + (p == null ? void 0 : p.image)
                    }, null, _parent3, _scopeId2));
                    _push3(`<span data-v-d94657d1${_scopeId2}>${ssrInterpolate(p == null ? void 0 : p.name)}</span></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        "h-3rem": "",
                        flex: "",
                        "items-center": "",
                        "gap-2": "",
                        "text-center": ""
                      }, [
                        createVNode(_component_CardElImage, {
                          fit: "cover",
                          class: "mr-2 h-2.6rem w-2.6rem card-default",
                          loading: "lazy",
                          src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + (p == null ? void 0 : p.image)
                        }, null, 8, ["src"]),
                        createVNode("span", null, toDisplayString(p == null ? void 0 : p.name), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categoryList), (p) => {
                return openBlock(), createBlock(_component_el_option, {
                  key: p.id,
                  label: p.name,
                  value: p.id,
                  style: { "height": "auto" },
                  class: "relative"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      "h-3rem": "",
                      flex: "",
                      "items-center": "",
                      "gap-2": "",
                      "text-center": ""
                    }, [
                      createVNode(_component_CardElImage, {
                        fit: "cover",
                        class: "mr-2 h-2.6rem w-2.6rem card-default",
                        loading: "lazy",
                        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + (p == null ? void 0 : p.image)
                      }, null, 8, ["src"]),
                      createVNode("span", null, toDisplayString(p == null ? void 0 : p.name), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["label", "value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", { data: unref(categoryList) }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/CategorySelect.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d94657d1"]]);
const preIamgePath = "https://jiwu.api.kiwi2333.top/res/";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MdEdit",
  __ssrInlineRender: true,
  props: {
    modelValue: { default: "" },
    pathList: {},
    uploadImage: { type: Boolean, default: false },
    autoSave: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:pathList", "submit"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const user = useUserStore();
    const rawPathList = ref([]);
    function onUploadDescImage(e, insertImage, files) {
      files.forEach(async (p) => {
        if (!p)
          return;
        const res = await getResToken(OssFileType.IMAGE, user.getToken);
        if (res.code === StatusCode.SUCCESS) {
          qiniu.compressImage(p, {
            // 压缩
            quality: 0.6,
            noCompressIfLarger: true
          }).then((d) => {
            qiniuUpload(d.dist, res.data.key, res.data.uploadToken, () => {
              insertImage({
                url: `${preIamgePath}${res.data.key}`,
                desc: p.name,
                width: "100%"
              });
              rawPathList.value.push(res.data.key);
              if (props.autoSave)
                onSave();
              emit("update:pathList", rawPathList.value);
            });
          });
        } else {
          ElMessage.warning("\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
        }
      });
    }
    function qiniuUpload(file, key, token, callback) {
      const observable = uploadOssFileSe(file, key, token);
      observable.subscribe({
        next() {
        },
        error(e) {
          const err = e;
          if (err == null ? void 0 : err.code)
            ElMessage.error(getOssErrorCode(err == null ? void 0 : err.code));
          else
            ElMessage.error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u7A0D\u540E\u518D\u8BD5\uFF01");
        },
        complete() {
          callback && callback();
        }
      });
    }
    const isDescLoading = ref(false);
    const valueModel = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    });
    function onClickDescImage(images, currentIndex) {
      if (isDescLoading.value)
        return;
      if (images[currentIndex]) {
        ElMessageBox.confirm("\u662F\u5426\u5220\u9664\u8BE5\u56FE\u7247\uFF1F", "\u63D0\u793A", {
          confirmButtonText: "\u786E\u5B9A",
          cancelButtonText: "\u53D6\u6D88",
          type: "warning",
          lockScroll: false,
          center: true,
          callback: async (res) => {
            var _a;
            if (res === "confirm") {
              const res2 = await deleteOssFile((_a = images[currentIndex]) == null ? void 0 : _a.replace(preIamgePath, ""), user.getToken);
              isDescLoading.value = true;
              const regex = new RegExp(`!\\[.*?\\]\\((${images[currentIndex]})\\){{{width="100%"}}}`);
              rawPathList.value.splice(rawPathList.value.findIndex((p) => p === images[currentIndex]), 1);
              emit("update:modelValue", props.modelValue.replace(regex, ""));
              emit("update:pathList", rawPathList.value);
              if (res2.code === StatusCode.SUCCESS) {
                ElNotification.success({
                  title: "\u5220\u9664\u63D0\u793A",
                  message: "\u5220\u9664\u6210\u529F\uFF01"
                });
              } else {
                ElNotification.closeAll();
                ElMessage.closeAll("error");
              }
              setTimeout(() => {
                isDescLoading.value = false;
                if (props.autoSave)
                  onSave();
              }, 300);
            }
          }
        });
      }
    }
    function onSave() {
      if (isDescLoading.value)
        return;
      isDescLoading.value = true;
      emit("submit", props.modelValue);
      setTimeout(() => {
        isDescLoading.value = false;
      }, 300);
    }
    __expose({
      pathList: () => rawPathList.value
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_md_editor = resolveComponent("v-md-editor");
      const _directive_loading = vLoading;
      _push(ssrRenderComponent(_component_v_md_editor, mergeProps(_ctx.$attrs, {
        modelValue: unref(valueModel),
        "onUpdate:modelValue": ($event) => isRef(valueModel) ? valueModel.value = $event : null,
        placeholder: "\u8BF7\u8F93\u5165\u8BE6\u60C5",
        "toc-nav-position-right": true,
        height: "60vh",
        "disabled-menus": [],
        "include-level": [2, 3, 4, 5],
        "left-toolbar": "undo redo clear | italic strikethrough quote | ul ol table hr | link image code | save",
        onSave,
        onUploadImage: onUploadDescImage,
        onImageClick: onClickDescImage
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isDescLoading))), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/MdEdit.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-710ed78e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatusTag",
  __ssrInlineRender: true,
  props: {
    status: { default: PostStatus.UNDOING },
    updateTime: {}
  },
  setup(__props) {
    const props = __props;
    const getStatus = computed(() => {
      return getPostStatusList.find((item) => item.value === props.status);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_el_tag = ElTag;
      _push(ssrRenderComponent(_component_el_tag, mergeProps({
        type: ((_a = unref(getStatus)) == null ? void 0 : _a.iconClass) || "",
        class: "ml-2 text-light shadow md:ml-4",
        effect: "dark"
      }, _ctx.$attrs, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<span class="flex items-center text-light" data-v-7b605a3e${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "pre", {}, null, _push2, _parent2, _scopeId);
            _push2(` ${ssrInterpolate((_a2 = unref(getStatus)) == null ? void 0 : _a2.title)}</span>`);
          } else {
            return [
              createVNode("span", { class: "flex items-center text-light" }, [
                renderSlot(_ctx.$slots, "pre", {}, void 0, true),
                createTextVNode(" " + toDisplayString((_b = unref(getStatus)) == null ? void 0 : _b.title), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/post/StatusTag.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7b605a3e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostForm",
  __ssrInlineRender: true,
  props: {
    cid: { default: "" }
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const resultList = {
      insert: {
        massage: "\u53D1\u5E03\u6210\u529F\uFF0C\u7B49\u5F85\u5BA1\u6838\u4E2D...\u23F3",
        icon: "i-solar:cup-hot-bold-duotone opacity-60",
        isShow: true
      },
      delete: {
        massage: "\u79FB\u5165\u56DE\u6536\u7AD9\u6210\u529F",
        icon: "i-solar:check-circle-bold op-60 text-[var(--el-color-danger)]",
        isShow: true
      },
      recover: {
        massage: "\u5E16\u5B50\u5DF2\u88AB\u5220\u9664\u6216\u79FB\u81F3\u56DE\u6536\u7AD9\uFF0C\u53EF\u6062\u590D\u{1F514}",
        icon: "i-solar:adhesive-plaster-broken op-60",
        isShow: false
      }
    };
    const route = useRoute();
    const user = useUserStore();
    const isLoading = ref(false);
    const formRef = ref();
    const theData = ref();
    const tagsList = ref([]);
    const path = route.fullPath;
    const form = useSessionStorage(path, {
      id: void 0,
      title: void 0,
      categoryId: void 0,
      cover: void 0,
      content: void 0,
      images: void 0,
      tags: void 0
    }, {
      deep: true
    });
    const coverList = useSessionStorage(`${route.path}_coverList`, []);
    const unDonePost = computed(() => {
      var _a;
      const status = (_a = theData.value) == null ? void 0 : _a.status;
      return status === PostStatus.DELETED || status === PostStatus.ADMIN_DELETED || status === PostStatus.REJECT;
    });
    const getPostStatus = computed(() => {
      var _a;
      let title = "\u7ACB\u5373\u53D1\u5E03";
      const status = (_a = theData.value) == null ? void 0 : _a.status;
      if (unDonePost.value)
        title = "\u91CD\u65B0\u53D1\u5E03";
      else if (status === PostStatus.PUBLISHED || status === PostStatus.UNDOING)
        title = "\u786E\u8BA4\u4FEE\u6539";
      else
        title = "\u7ACB\u5373\u53D1\u5E03";
      return title;
    });
    function setResultObj(type) {
      const res = resultList[type] || {};
      return emit("submit", res);
    }
    async function getPostInfo(id) {
      var _a, _b, _c, _d, _e;
      isLoading.value = true;
      const res = await getCommPostDetailBySelf(id, user.getToken);
      if (res.code === StatusCode.SUCCESS) {
        if ([PostStatus.DELETED, PostStatus.ADMIN_DELETED].includes(res.data.status)) {
          setResultObj("recover");
          isLoading.value = false;
        }
        const images = ((_a = res.data.images) == null ? void 0 : _a.split(",").filter((p) => p)) || [];
        form.value = { ...res.data, images, tags: ((_b = res.data.tags) == null ? void 0 : _b.trim()) ? (_c = res.data.tags) == null ? void 0 : _c.split(",") : [] };
        theData.value = { ...res.data, images, tags: ((_d = res.data.tags) == null ? void 0 : _d.trim()) ? (_e = res.data.tags) == null ? void 0 : _e.split(",") : [] };
        if (form.value.cover) {
          coverList.value = [
            {
              file: void 0,
              id: BaseUrlImg + form.value.cover,
              status: "success",
              percent: 100,
              key: form.value.cover
            }
          ];
        }
      } else {
        setResultObj("recover");
      }
      isLoading.value = false;
    }
    if (route == null ? void 0 : route.query.id)
      getPostInfo(String(route.query.id));
    else
      clearForm();
    if (route == null ? void 0 : route.query.cid)
      form.value.categoryId = String(route.query.cid || "") || "";
    const isUpdate = computed(() => {
      if (theData.value && !isLoading.value)
        return Object.keys(compareObjects(theData.value, form.value)).length > 0;
      else
        return false;
    });
    function onSubmit(id, type = "insert", title = "\u53D1\u5E03") {
      var _a;
      if (isLoading.value)
        return;
      (_a = formRef.value) == null ? void 0 : _a.validate(async (valid) => {
        if (!valid)
          return;
        ElMessageBox.confirm(`\u662F\u5426\u786E\u8BA4${title}\uFF1F`, {
          title: "\u63D0\u793A",
          customClass: "text-center",
          lockScroll: false,
          showCancelButton: true,
          cancelButtonText: "\u53D6 \u6D88",
          confirmButtonText: title,
          center: true,
          callback: async (action) => {
            if (action !== "confirm")
              return;
            onSubmitHttp(id, type, title);
          }
        });
      });
    }
    async function onSubmitHttp(id, type = "insert", title = "\u53D1\u5E03") {
      isLoading.value = true;
      let res;
      if (type === "update" && id) {
        res = await updateCommPost(id, compareObjects(theData.value, form.value), user.getToken);
      } else if (type === "insert") {
        res = await addCommPost({ ...form.value }, user.getToken);
      } else if (type === "delete" && id) {
        res = await delCommPost(id, user.getToken);
      } else if (type === "hardDel" && id) {
        res = await hardDelCommPost(id, user.getToken);
      } else {
        ElMessage.error("\u672A\u77E5\u64CD\u4F5C");
        return;
      }
      if (res.code === StatusCode.SUCCESS) {
        ElNotification.success({
          title: "\u64CD\u4F5C\u63D0\u793A",
          message: `${title}\u6210\u529F\uFF01`
        });
        if (type === "insert") {
          setResultObj("insert");
          clearForm();
        } else if (type === "delete") {
          setResultObj("delete");
          clearForm();
        } else if (type === "update" && id && unDonePost.value) {
          getPostInfo(id);
        }
      } else {
        ElNotification.error({
          title: "\u9519\u8BEF\u63D0\u793A",
          message: res.message || `${title}\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01`
        });
      }
      setTimeout(() => {
        isLoading.value = false;
      }, 300);
    }
    function onSaveDraft() {
      var _a;
      if (isLoading.value)
        return;
      (_a = formRef.value) == null ? void 0 : _a.validate(async (valid) => {
        var _a2, _b;
        if (!valid)
          return;
        isLoading.value = true;
        if ((_a2 = theData.value) == null ? void 0 : _a2.id)
          onSubmitHttp((_b = theData.value) == null ? void 0 : _b.id, "update", "\u4FDD\u5B58");
        else
          ElMessage.success("\u6682\u5B58\u6210\u529F\uFF01");
        isLoading.value = false;
      });
    }
    function clearForm() {
      form.value = {
        id: void 0,
        title: void 0,
        categoryId: void 0,
        content: void 0,
        cover: void 0,
        images: [],
        tags: []
      };
      tagsList.value = [];
      coverList.value = [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_InputOssFileUpload = __nuxt_component_9$1;
      const _component_CommCategorySelect = __nuxt_component_4;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_FormMdEdit = __nuxt_component_9;
      const _component_UserPostStatusTag = __nuxt_component_10;
      const _component_BtnElButton = __nuxt_component_2$2;
      const _directive_loading = vLoading;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_el_form, mergeProps({
        ref_key: "formRef",
        ref: formRef,
        disabled: unref(isLoading),
        "label-position": "top",
        "hide-required-asterisk": "",
        model: unref(form),
        class: "form"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading), void 0, { fullscreen: true })), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div flex-row-bt-c flex-wrap data-v-48071560${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "title",
              rules: [
                { required: true, message: "\u8D77\u4E00\u4E2A\u6807\u9898\u5427 ~", trigger: "blur" },
                { min: 5, max: 100, message: "\u957F\u5EA6\u4E3A5-100\u5B57\u7B26\uFF01", trigger: ["change", "blur"] }
              ],
              label: "",
              class: "title-in order-1 w-1/2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(form).title,
                    "onUpdate:modelValue": ($event) => unref(form).title = $event,
                    placeholder: "\u8D77\u4E00\u4E2A\u6807\u9898\u5427 ~ ",
                    size: "large",
                    style: { "font-size": "1.4rem" },
                    class: "text w-full font-700"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).title,
                      "onUpdate:modelValue": ($event) => unref(form).title = $event,
                      placeholder: "\u8D77\u4E00\u4E2A\u6807\u9898\u5427 ~ ",
                      size: "large",
                      style: { "font-size": "1.4rem" },
                      class: "text w-full font-700"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "cover",
              rules: [
                { required: true, message: "\u8BF7\u9009\u62E9\u5C01\u9762", trigger: "blur" }
              ],
              label: "\u5C01\u9762",
              class: "group order-0 ml-a w-full flex md:order-1 md:h-10rem md:w-16rem"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_InputOssFileUpload, {
                    key: "inputOssFileUploadRef",
                    modelValue: unref(coverList),
                    "onUpdate:modelValue": ($event) => isRef(coverList) ? coverList.value = $event : null,
                    multiple: false,
                    limit: 1,
                    class: "object-fit w-full w-full md:w-16rem md:w-auto",
                    "input-class": "h-18rem card-default md:h-10rem md:w-16rem w-full mr-2 flex-row-c-c object-fit flex-shrink-0",
                    "upload-quality": 0.5,
                    onErrorMsg: (msg) => {
                      ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                    },
                    onSubmit: (key) => {
                      if (key) {
                        unref(form).cover = key;
                      }
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_InputOssFileUpload, {
                      key: "inputOssFileUploadRef",
                      modelValue: unref(coverList),
                      "onUpdate:modelValue": ($event) => isRef(coverList) ? coverList.value = $event : null,
                      multiple: false,
                      limit: 1,
                      class: "object-fit w-full w-full md:w-16rem md:w-auto",
                      "input-class": "h-18rem card-default md:h-10rem md:w-16rem w-full mr-2 flex-row-c-c object-fit flex-shrink-0",
                      "upload-quality": 0.5,
                      onErrorMsg: (msg) => {
                        ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                      },
                      onSubmit: (key) => {
                        if (key) {
                          unref(form).cover = key;
                        }
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onErrorMsg", "onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "categoryId",
              rules: [
                { required: true, message: "\u5708\u5B50\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
                { min: 10, max: 25, message: "\u957F\u5EA6\u4E3A10-25\u5B57\u7B26\uFF01", trigger: ["change", "blur"] }
              ],
              label: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CommCategorySelect, {
                    modelValue: unref(form).categoryId,
                    "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                  }, {
                    default: withCtx((data, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (data.data) {
                          _push4(ssrRenderComponent(_component_el_radio_group, {
                            modelValue: unref(form).categoryId,
                            "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(data.data, (p) => {
                                  _push5(ssrRenderComponent(_component_el_radio_button, {
                                    key: p.id,
                                    style: { "border": "1px solid rgb(255 255 255 / 25.3%)", "border-radius": "2rem", "padding": "0", "margin": "1rem 0.5rem 0 0" },
                                    label: p.id,
                                    class: "relative overflow-hidden shadow-sm card-default"
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(p.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(p.name), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(data.data, (p) => {
                                    return openBlock(), createBlock(_component_el_radio_button, {
                                      key: p.id,
                                      style: { "border": "1px solid rgb(255 255 255 / 25.3%)", "border-radius": "2rem", "padding": "0", "margin": "1rem 0.5rem 0 0" },
                                      label: p.id,
                                      class: "relative overflow-hidden shadow-sm card-default"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(p.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["label"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          data.data ? (openBlock(), createBlock(_component_el_radio_group, {
                            key: 0,
                            modelValue: unref(form).categoryId,
                            "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(data.data, (p) => {
                                return openBlock(), createBlock(_component_el_radio_button, {
                                  key: p.id,
                                  style: { "border": "1px solid rgb(255 255 255 / 25.3%)", "border-radius": "2rem", "padding": "0", "margin": "1rem 0.5rem 0 0" },
                                  label: p.id,
                                  class: "relative overflow-hidden shadow-sm card-default"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(p.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["label"]);
                              }), 128))
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CommCategorySelect, {
                      modelValue: unref(form).categoryId,
                      "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                    }, {
                      default: withCtx((data) => [
                        data.data ? (openBlock(), createBlock(_component_el_radio_group, {
                          key: 0,
                          modelValue: unref(form).categoryId,
                          "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(data.data, (p) => {
                              return openBlock(), createBlock(_component_el_radio_button, {
                                key: p.id,
                                style: { "border": "1px solid rgb(255 255 255 / 25.3%)", "border-radius": "2rem", "padding": "0", "margin": "1rem 0.5rem 0 0" },
                                label: p.id,
                                class: "relative overflow-hidden shadow-sm card-default"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(p.name), 1)
                                ]),
                                _: 2
                              }, 1032, ["label"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "tags",
              rules: [
                { type: "array", min: 0, max: 20, message: "\u6700\u591A\u6DFB\u52A020\u5F20\u6807\u7B7E\uFF01", trigger: ["change", "blur"] }
              ],
              label: "",
              class: "round w-fit-content"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_select, {
                    modelValue: unref(form).tags,
                    "onUpdate:modelValue": ($event) => unref(form).tags = $event,
                    "multiple-limit": 20,
                    "max-collapse-tags": 4,
                    style: { "padding": "0 1rem", "width": "16rem" },
                    "collection-tag-class": "border-default card-default",
                    class: "tags-in rounded-1rem border-default",
                    "collapse-tags-tooltip": true,
                    filterable: "",
                    "collapse-tags": "",
                    multiple: "",
                    "default-first-option": "",
                    "allow-create": "",
                    "tag-effect": "dark",
                    "tag-type": "info",
                    teleported: false,
                    placeholder: "\u586B\u5199\u6587\u7AE0\u6807\u7B7E"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(tagsList), (item) => {
                          _push4(ssrRenderComponent(_component_el_option, {
                            key: item,
                            label: item,
                            value: item
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(tagsList), (item) => {
                            return openBlock(), createBlock(_component_el_option, {
                              key: item,
                              label: item,
                              value: item
                            }, null, 8, ["label", "value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_select, {
                      modelValue: unref(form).tags,
                      "onUpdate:modelValue": ($event) => unref(form).tags = $event,
                      "multiple-limit": 20,
                      "max-collapse-tags": 4,
                      style: { "padding": "0 1rem", "width": "16rem" },
                      "collection-tag-class": "border-default card-default",
                      class: "tags-in rounded-1rem border-default",
                      "collapse-tags-tooltip": true,
                      filterable: "",
                      "collapse-tags": "",
                      multiple: "",
                      "default-first-option": "",
                      "allow-create": "",
                      "tag-effect": "dark",
                      "tag-type": "info",
                      teleported: false,
                      placeholder: "\u586B\u5199\u6587\u7AE0\u6807\u7B7E"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(tagsList), (item) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: item,
                            label: item,
                            value: item
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "content",
              rules: [
                { required: true, message: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
                { min: 1, max: 1024, message: "\u957F\u5EA6\u4E3A10-1024\u5B57\u7B26\uFF01", trigger: ["change", "blur"] }
              ],
              label: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_FormMdEdit, {
                    "model-value": unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    "path-list": unref(form).images,
                    "onUpdate:pathList": ($event) => unref(form).images = $event,
                    autofocus: true,
                    class: "my-2 min-h-50vh w-full",
                    onSubmit: onSaveDraft
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_FormMdEdit, {
                      "model-value": unref(form).content,
                      "onUpdate:modelValue": ($event) => unref(form).content = $event,
                      "path-list": unref(form).images,
                      "onUpdate:pathList": ($event) => unref(form).images = $event,
                      autofocus: true,
                      class: "my-2 min-h-50vh w-full",
                      onSubmit: onSaveDraft
                    }, null, 8, ["model-value", "onUpdate:modelValue", "path-list", "onUpdate:pathList"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", {
                "flex-row-bt-c": "",
                "flex-wrap": ""
              }, [
                createVNode(_component_el_form_item, {
                  prop: "title",
                  rules: [
                    { required: true, message: "\u8D77\u4E00\u4E2A\u6807\u9898\u5427 ~", trigger: "blur" },
                    { min: 5, max: 100, message: "\u957F\u5EA6\u4E3A5-100\u5B57\u7B26\uFF01", trigger: ["change", "blur"] }
                  ],
                  label: "",
                  class: "title-in order-1 w-1/2"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(form).title,
                      "onUpdate:modelValue": ($event) => unref(form).title = $event,
                      placeholder: "\u8D77\u4E00\u4E2A\u6807\u9898\u5427 ~ ",
                      size: "large",
                      style: { "font-size": "1.4rem" },
                      class: "text w-full font-700"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  prop: "cover",
                  rules: [
                    { required: true, message: "\u8BF7\u9009\u62E9\u5C01\u9762", trigger: "blur" }
                  ],
                  label: "\u5C01\u9762",
                  class: "group order-0 ml-a w-full flex md:order-1 md:h-10rem md:w-16rem"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_InputOssFileUpload, {
                      key: "inputOssFileUploadRef",
                      modelValue: unref(coverList),
                      "onUpdate:modelValue": ($event) => isRef(coverList) ? coverList.value = $event : null,
                      multiple: false,
                      limit: 1,
                      class: "object-fit w-full w-full md:w-16rem md:w-auto",
                      "input-class": "h-18rem card-default md:h-10rem md:w-16rem w-full mr-2 flex-row-c-c object-fit flex-shrink-0",
                      "upload-quality": 0.5,
                      onErrorMsg: (msg) => {
                        ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                      },
                      onSubmit: (key) => {
                        if (key) {
                          unref(form).cover = key;
                        }
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onErrorMsg", "onSubmit"])
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_el_form_item, {
                prop: "categoryId",
                rules: [
                  { required: true, message: "\u5708\u5B50\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
                  { min: 10, max: 25, message: "\u957F\u5EA6\u4E3A10-25\u5B57\u7B26\uFF01", trigger: ["change", "blur"] }
                ],
                label: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_CommCategorySelect, {
                    modelValue: unref(form).categoryId,
                    "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                  }, {
                    default: withCtx((data) => [
                      data.data ? (openBlock(), createBlock(_component_el_radio_group, {
                        key: 0,
                        modelValue: unref(form).categoryId,
                        "onUpdate:modelValue": ($event) => unref(form).categoryId = $event
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(data.data, (p) => {
                            return openBlock(), createBlock(_component_el_radio_button, {
                              key: p.id,
                              style: { "border": "1px solid rgb(255 255 255 / 25.3%)", "border-radius": "2rem", "padding": "0", "margin": "1rem 0.5rem 0 0" },
                              label: p.id,
                              class: "relative overflow-hidden shadow-sm card-default"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(p.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["label"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                prop: "tags",
                rules: [
                  { type: "array", min: 0, max: 20, message: "\u6700\u591A\u6DFB\u52A020\u5F20\u6807\u7B7E\uFF01", trigger: ["change", "blur"] }
                ],
                label: "",
                class: "round w-fit-content"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_select, {
                    modelValue: unref(form).tags,
                    "onUpdate:modelValue": ($event) => unref(form).tags = $event,
                    "multiple-limit": 20,
                    "max-collapse-tags": 4,
                    style: { "padding": "0 1rem", "width": "16rem" },
                    "collection-tag-class": "border-default card-default",
                    class: "tags-in rounded-1rem border-default",
                    "collapse-tags-tooltip": true,
                    filterable: "",
                    "collapse-tags": "",
                    multiple: "",
                    "default-first-option": "",
                    "allow-create": "",
                    "tag-effect": "dark",
                    "tag-type": "info",
                    teleported: false,
                    placeholder: "\u586B\u5199\u6587\u7AE0\u6807\u7B7E"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tagsList), (item) => {
                        return openBlock(), createBlock(_component_el_option, {
                          key: item,
                          label: item,
                          value: item
                        }, null, 8, ["label", "value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                prop: "content",
                rules: [
                  { required: true, message: "\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01", trigger: "blur" },
                  { min: 1, max: 1024, message: "\u957F\u5EA6\u4E3A10-1024\u5B57\u7B26\uFF01", trigger: ["change", "blur"] }
                ],
                label: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_FormMdEdit, {
                    "model-value": unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    "path-list": unref(form).images,
                    "onUpdate:pathList": ($event) => unref(form).images = $event,
                    autofocus: true,
                    class: "my-2 min-h-50vh w-full",
                    onSubmit: onSaveDraft
                  }, null, 8, ["model-value", "onUpdate:modelValue", "path-list", "onUpdate:pathList"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="sticky bottom-1rem z-99 flex-row-bt-c rounded-t-2 p-4 shadow shadow-sm border-default card-default" data-v-48071560>`);
      if (unref(form).id) {
        _push(ssrRenderComponent(_component_UserPostStatusTag, {
          status: (_a = unref(theData)) == null ? void 0 : _a.status,
          size: "large"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((_b = unref(theData)) == null ? void 0 : _b.id) && !unref(unDonePost)) {
        _push(ssrRenderComponent(_component_BtnElButton, {
          disabled: !((_c = unref(theData)) == null ? void 0 : _c.id),
          class: "group ml-a animate-fade-in-left animate-ease-in-out shadow",
          "icon-class": "i-solar:trash-bin-trash-broken   block  mr-1",
          type: "danger",
          plain: "",
          onClick: ($event) => {
            var _a2;
            return onSubmit((_a2 = unref(form)) == null ? void 0 : _a2.id, "delete", "\u79FB\u5165\u56DE\u6536\u7AD9");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u56DE\u6536\u7AD9\xA0 `);
            } else {
              return [
                createTextVNode(" \u56DE\u6536\u7AD9\xA0 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (((_d = unref(theData)) == null ? void 0 : _d.id) && unref(unDonePost)) {
        _push(ssrRenderComponent(_component_BtnElButton, {
          disabled: !((_e = unref(theData)) == null ? void 0 : _e.id),
          class: "group ml-a animate-fade-in-left animate-ease-in-out shadow",
          "icon-class": "i-solar:trash-bin-trash-broken   block  mr-1",
          type: "danger",
          plain: "",
          onClick: ($event) => {
            var _a2;
            return onSubmit((_a2 = unref(form)) == null ? void 0 : _a2.id, "hardDel", "\u5F7B\u5E95\u5220\u9664");
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u5F7B\u5E95\u5220\u9664\xA0 `);
            } else {
              return [
                createTextVNode(" \u5F7B\u5E95\u5220\u9664\xA0 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_BtnElButton, {
        disabled: unref(isLoading) || !unref(isUpdate),
        class: "group ml-a animate-fade-in-left animate-ease-in-out shadow",
        "icon-class": "i-solar:inbox-in-bold-duotone   block  mr-1",
        type: "info",
        plain: "",
        onClick: onSaveDraft
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5B58\u8349\u7A3F\xA0 `);
          } else {
            return [
              createTextVNode(" \u5B58\u8349\u7A3F\xA0 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_BtnElButton, {
        disabled: unref(isLoading) || ((_f = unref(theData)) == null ? void 0 : _f.id) && !unref(isUpdate),
        class: "group sticky bottom-0 ml-a animate-fade-in-left animate-ease-in-out shadow",
        "icon-class": "i-solar:map-arrow-right-bold-duotone block  mr-1",
        type: "info",
        onClick: ($event) => {
          var _a2, _b2;
          return onSubmit((_a2 = unref(form)) == null ? void 0 : _a2.id, ((_b2 = unref(form)) == null ? void 0 : _b2.id) ? "update" : "insert", unref(getPostStatus));
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(getPostStatus))}\xA0 `);
          } else {
            return [
              createTextVNode(toDisplayString(unref(getPostStatus)) + "\xA0 ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/new/PostForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-48071560"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "new",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useSeoMeta({
      title: () => {
        var _a;
        return `${((_a = route.query) == null ? void 0 : _a.id) ? "\u4FEE\u6539" : "\u65B0\u5EFA"}\u5E16\u5B50 - \u793E\u533A - \u6781\u7269\u5708`;
      },
      description: "\u65B0\u5EFA\u5E16\u5B50 - \u793E\u533A - \u6781\u7269\u5708 \u5F00\u542F\u4F60\u7684\u6781\u7269\u4E4B\u65C5\uFF01",
      keywords: appKeywords
    });
    const user = useUserStore();
    const resultObj = ref();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_CommNewPostForm = __nuxt_component_2;
      const _component_OtherError = _sfc_main$2$1;
      const _component_BtnElButton = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "second",
        footer: false,
        header: !((_a = unref(resultObj)) == null ? void 0 : _a.isShow),
        menu: ["back", "home"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => {
                  var _a2, _b, _c, _d, _e, _f, _g;
                  return [
                    ((_a2 = unref(user).userInfo) == null ? void 0 : _a2.id) ? (openBlock(), createBlock("div", { key: 0 }, [
                      !((_b = unref(resultObj)) == null ? void 0 : _b.isShow) ? (openBlock(), createBlock("main", {
                        key: 0,
                        "layout-default-se": ""
                      }, [
                        !((_d = (_c = _ctx.$route) == null ? void 0 : _c.query) == null ? void 0 : _d.id) ? (openBlock(), createBlock("h2", {
                          key: 0,
                          "my-6": ""
                        }, " \u65B0\u5EFA\u5E16\u5B50 \u270D ")) : (openBlock(), createBlock("h2", {
                          key: 1,
                          "my-6": ""
                        }, " \u7F16\u8F91\u5E16\u5B50 \u270D ")),
                        createVNode(_component_CommNewPostForm, {
                          cid: `${((_e = _ctx.$route.query) == null ? void 0 : _e.cid) || ""}`,
                          onSubmit: (res) => resultObj.value = res
                        }, null, 8, ["cid", "onSubmit"])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "h-100vh w-full flex-row-c-c"
                      }, [
                        createVNode(_component_OtherError, {
                          msg: (_f = unref(resultObj)) == null ? void 0 : _f.massage,
                          icon: (_g = unref(resultObj)) == null ? void 0 : _g.icon
                        }, {
                          footer: withCtx(() => [
                            createVNode(_component_BtnElButton, {
                              plain: "",
                              type: "danger",
                              "icon-class": "i-solar:alt-arrow-left-line-duotone mr-2",
                              onClick: ($event) => {
                                var _a3, _b2, _c2, _d2;
                                return ("clearError" in _ctx ? _ctx.clearError : unref(clearError))({ redirect: ((_b2 = (_a3 = _ctx.$route) == null ? void 0 : _a3.query) == null ? void 0 : _b2.rollback) ? (_d2 = (_c2 = _ctx.$route) == null ? void 0 : _c2.query) == null ? void 0 : _d2.rollback.toString() : "/" });
                              }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u8FD4\u56DE ")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_component_BtnElButton, {
                              type: "danger",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/user/post")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u6211\u7684\u5E16\u5B50 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1032, ["msg", "icon"])
                      ]))
                    ])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community/post/new.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=new-XWPZxyhc.mjs.map
