import { b as _export_sfc, u as useUserStore, i as isTrue, B as BaseUrlImg, E as ElMessage, t as useRoute, c as useSeoMeta, v as appName, S as StatusCode, d as __nuxt_component_2, e as __nuxt_component_0$1, _ as __nuxt_component_0, a as _sfc_main$2$1, p as useHttp } from '../server.mjs';
import { _ as _sfc_main$3 } from './PreLoading-Sou-hyZj.mjs';
import { _ as __nuxt_component_1 } from './ElImage-j3i6j_3Z.mjs';
import { _ as __nuxt_component_8 } from './Switch-0cxE9fHq.mjs';
import { E as ElTag } from './index-3Hd0ipYT.mjs';
import { _ as __nuxt_component_1$1 } from './nuxt-link-tpk2tUXY.mjs';
import { _ as _sfc_main$4 } from './TagList-M6KmsX63.mjs';
import { E as ElDivider } from './divider-PhlLqhAq.mjs';
import { useSSRContext, defineAsyncComponent, defineComponent, ref, computed, resolveDirective, mergeProps, unref, reactive, watch, withCtx, createVNode, withKeys, withModifiers, openBlock, createBlock, Fragment, renderList, isRef, createTextVNode, withDirectives, vShow, resolveComponent, toDisplayString, createCommentVNode } from 'vue';
import { g as getCommPostDetailHttp } from './post-uKGC7P8z.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { E as ElForm, a as ElFormItem } from './form-item-d_pUYt5T.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { E as ElSelect, a as ElOption } from './index-K-gO0vbs.mjs';
import { _ as __nuxt_component_3 } from './OssFileUpload-pldn4U9W.mjs';
import { E as ElNotification } from './index-KIyZNhTO.mjs';
import { t as toReactive } from './event-9ZI5GX64.mjs';
import { _ as _sfc_main$5 } from './UserPostTotal-wNX1zEUK.mjs';
import { _ as _sfc_main$6 } from './SigninCard-hNL7zee-.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './useSettingStore-kkOnzP9-.mjs';
import './category-HtxOPKX5.mjs';
import './fetch-YS3Fxkuj.mjs';
import './composables-6B_M9sIU.mjs';
import './useToggleThemeAnima-5Zw48dpp.mjs';
import 'async-validator';
import './objects-HNc5gIZI.mjs';
import './index-S-yJffF9.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-FUoXuQZs.mjs';
import './scrollbar-rGnTaDH3.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-Jkc1A1yz.mjs';
import './index-Ud8N-GPr.mjs';
import './progress-lh-pSAoE.mjs';
import './index-hfRePjpv.mjs';
import 'qiniu-js';
import './index-BBhc0WGX.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ActionList",
  __ssrInlineRender: true,
  props: {
    postId: {
      default: ""
    },
    likes: {
      default: 0
    },
    collect: {
      default: 0
    }
  },
  emits: ["submit"],
  setup(__props, {
    emit: __emit
  }) {
    const props = __props;
    useUserStore();
    ref(false);
    const getShareCommentUrl = computed(() => {
      return "";
    });
    `${(void 0).protocol}//${void 0}`;
    const actions = ref({
      like: {
        value: props.likes,
        isLike: false
      },
      collect: {
        value: props.collect,
        isCollect: false
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _directive_copying = resolveDirective("copying");
      _push(`<div${ssrRenderAttrs(mergeProps({
        grid: "~ cols-3 gap-4 md:gap-6",
        class: "mx-a my-6 opacity-60 group-hover:opacity-100"
      }, _attrs))} data-v-2053e54a><div class="action-btn flex-row-c-c hover:text-[var(--el-color-danger)]" data-v-2053e54a><div class="action-card" data-v-2053e54a><i class="${ssrRenderClass([unref(actions).like.isLike ? "hover:i-solar:like-broken i-solar:like-bold text-[var(--el-color-danger)]" : "hover:i-solar:like-bold i-solar:like-broken", "p-1em transition-200"])}" data-v-2053e54a></i></div> ${ssrInterpolate(((_a = unref(actions)) == null ? void 0 : _a.like.value) > 0 ? (_b = unref(actions)) == null ? void 0 : _b.like.value : "\u70B9\u8D5E")}</div><div class="action-btn flex-row-c-c hover:text-[var(--el-color-warning)]" data-v-2053e54a><div class="action-card" data-v-2053e54a><i class="${ssrRenderClass([unref(actions).collect.isCollect ? "hover:i-solar:star-broken i-solar:star-bold text-[var(--el-color-warning)]" : "hover:i-solar:star-bold i-solar:star-broken", "p-1em transition-200"])}" data-v-2053e54a></i></div> ${ssrInterpolate(((_c = unref(actions)) == null ? void 0 : _c.collect.value) > 0 ? (_d = unref(actions)) == null ? void 0 : _d.collect.value : "\u6536\u85CF")}</div><div${ssrRenderAttrs(mergeProps({
        class: "action-btn flex-row-c-c hover:text-[var(--el-color-info)]"
      }, ssrGetDirectiveProps(_ctx, _directive_copying, unref(getShareCommentUrl), void 0, {
        toast: true
      })))} data-v-2053e54a><div class="action-card" data-v-2053e54a><i class="i-solar:share-broken p-1em transition-200 hover:i-solar:share-bold" data-v-2053e54a></i></div> \u5206\u4EAB </div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/ActionList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2053e54a"]]);
function getCommCommentPage(pid, page, size, dto) {
  return useHttp.post(`/community/post/comment/list/${pid}/${page}/${size}`, {
    ...dto
  }, {});
}
function addCommComment(pid, dto, token) {
  return useHttp.post(`/community/post/comment/${pid}`, {
    ...dto
  }, {
    headers: {
      Authorization: token
    }
  });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommentPreview",
  __ssrInlineRender: true,
  props: {
    postId: {},
    limit: {
      default: void 0
    },
    dto: {
      default: () => {
        return {};
      }
    },
    showMoreText: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = ref({
      content: "",
      parentId: "",
      images: []
    });
    const formRef = ref();
    const rules = ref();
    const user = useUserStore();
    const isFormLoading = ref(false);
    const isListLoading = ref(false);
    const inputOssFileUploadRef = ref();
    function onSubmitImages(key, pathList, fileList) {
      form.value.images = pathList.filter((p) => p);
    }
    const commentList = ref([]);
    const page = ref(0);
    const size = ref(props.limit || 10);
    const pageInfo = reactive({
      total: -1,
      pages: -1,
      current: -1
    });
    const toggleDTO = ref({
      isHot: void 0,
      isNew: void 0
    });
    const isHotNew = ref("new");
    watch(isHotNew, (val) => {
      if (val === "hot") {
        toggleDTO.value.isHot = isTrue.TRUE;
        toggleDTO.value.isNew = void 0;
      } else {
        toggleDTO.value.isHot = void 0;
        toggleDTO.value.isNew = isTrue.TRUE;
      }
      onReload();
    });
    const isEmpty = computed(() => {
      return page.value >= 1 && (pageInfo == null ? void 0 : pageInfo.pages) === 0 && commentList.value.length === 0;
    });
    const isNoMore = computed(() => {
      return pageInfo.total >= 1 && pageInfo.current >= pageInfo.pages;
    });
    async function loadCommentsPage() {
      if (isListLoading.value || isNoMore.value || isEmpty.value) {
        isListLoading.value = false;
        return;
      }
      if (props.limit !== void 0 && commentList.value.length >= props.limit) {
        isListLoading.value = false;
        return;
      }
      isListLoading.value = true;
      page.value++;
      const {
        data
      } = await getCommCommentPage(props.postId, page.value, size.value, {
        ...toggleDTO.value
      });
      pageInfo.total = data.total || 0;
      pageInfo.current = data.current || 0;
      pageInfo.pages = data.pages || 0;
      commentList.value.push(...(data == null ? void 0 : data.records) || []);
      isListLoading.value = false;
    }
    const commentRef = ref();
    const thePosition = ref([]);
    const theComment = ref();
    function onSubmitComment(parentId, position) {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate(async (valid) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
        if (!valid) {
          (_a2 = commentRef == null ? void 0 : commentRef.value) == null ? void 0 : _a2.focus();
          return;
        }
        isFormLoading.value = true;
        const res = await addCommComment(props.postId, form.value, user.getToken);
        if (res.code === StatusCode.SUCCESS) {
          (_b = formRef.value) == null ? void 0 : _b.resetFields();
          ElNotification.success("\u8BC4\u8BBA\u6210\u529F\uFF01");
          const info = {
            ...res.data,
            user: {
              username: (_c = user.userInfo) == null ? void 0 : _c.username,
              nickname: (_d = user.userInfo) == null ? void 0 : _d.nickname,
              gender: (_e = user.userInfo) == null ? void 0 : _e.gender,
              avatar: (_f = user.userInfo) == null ? void 0 : _f.avatar,
              slogan: (_g = user.userInfo) == null ? void 0 : _g.slogan,
              lastLoginIp: (_h = user.userInfo) == null ? void 0 : _h.lastLoginIp,
              birthday: (_i = user.userInfo) == null ? void 0 : _i.birthday
            }
          };
          if (parentId && parentId !== "") {
            if (position && position.length > 0) {
              const theList = commentList.value;
              position.forEach((p, i) => {
                var _a3, _b2;
                if (i + 1 === position.length) {
                  if (theList[p] && theList[p].children && Array.isArray(theList[p].children))
                    (_b2 = (_a3 = theList[p]) == null ? void 0 : _a3.children) == null ? void 0 : _b2.push(info);
                  else
                    theList[p].children = toReactive([info]);
                }
              });
            } else {
              commentList.value.unshift(info);
            }
            clearForm();
          } else {
            commentList.value.unshift(info);
          }
        }
        setTimeout(() => {
          var _a3;
          isFormLoading.value = false;
          (_a3 = commentRef.value) == null ? void 0 : _a3.focus();
        }, 300);
      });
    }
    function clearForm() {
      form.value = {
        content: "",
        parentId: "",
        images: []
      };
      thePosition.value.splice(0);
    }
    const isReload = ref(false);
    function onReload() {
      if (isReload.value)
        return;
      isReload.value = true;
      page.value = 0;
      commentList.value = [];
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      setTimeout(() => {
        loadCommentsPage();
        isReload.value = false;
      }, 300);
    }
    const parentIdList = computed(() => {
      var _a;
      return ((_a = theComment.value) == null ? void 0 : _a.id) ? [theComment.value] : [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_CardElImage = __nuxt_component_1;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _component_BtnElButton = __nuxt_component_2;
      const _component_InputOssFileUpload = __nuxt_component_3;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$3;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(mergeProps({
        "w-full": ""
      }, _attrs))} data-v-fad20028><div class="forms sticky bottom-1rem" data-v-fad20028>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref_key: "formRef",
        ref: formRef,
        disabled: unref(isFormLoading),
        "label-position": "top",
        "hide-required-asterisk": "",
        rules: unref(rules),
        model: unref(form)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div${ssrRenderAttrs(mergeProps({
              "w-full": "",
              flex: "",
              "items-center": ""
            }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-fad20028${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardElImage, {
              class: "h-3rem w-3rem rounded-1/2 shadow-sm border-default v-card",
              fit: "cover",
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_a = unref(user).userInfo) == null ? void 0 : _a.avatar)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              style: {
                "margin": "0.5rem 0"
              },
              prop: "content",
              class: "w-full pl-4",
              rules: [{
                required: true,
                message: "\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
                trigger: "blur"
              }, {
                min: 2,
                max: 50,
                message: "\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u8BC4\u8BBA\u957F\u5EA6\u4E3A2-50\u5B57\u7B26\uFF01",
                trigger: "change"
              }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    ref_key: "commentRef",
                    ref: commentRef,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    modelModifiers: {
                      lazy: true
                    },
                    class: "w-full",
                    size: "large",
                    placeholder: "\u8BF4\u8BF4\u4F60\u7684\u5FC3\u5F97 ~",
                    onKeyup: ($event) => onSubmitComment(unref(form).parentId, unref(thePosition))
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_el_input, {
                    ref_key: "commentRef",
                    ref: commentRef,
                    modelValue: unref(form).content,
                    "onUpdate:modelValue": ($event) => unref(form).content = $event,
                    modelModifiers: {
                      lazy: true
                    },
                    class: "w-full",
                    size: "large",
                    placeholder: "\u8BF4\u8BF4\u4F60\u7684\u5FC3\u5F97 ~",
                    onKeyup: withKeys(withModifiers(($event) => onSubmitComment(unref(form).parentId, unref(thePosition)), ["self"]), ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div mt-4 flex-row-c-c grid-gap-4 class="select-parent" data-v-fad20028${_scopeId}><i i-tabler:photo-plus ml-3 cursor-pointer p-0.7rem class="transition-200 hover:bg-[var(--el-color-info)]" data-v-fad20028${_scopeId}></i><i class="i-solar:refresh-outline block cursor-pointer p-0.6rem transition-300 hover:rotate-180 hover:bg-[var(--el-color-info)]" data-v-fad20028${_scopeId}></i>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              prop: "parentId",
              class: "md:w-12rem",
              style: {
                "padding": "0",
                "margin": "0",
                "margin-left": "0.8rem"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_select, {
                    modelValue: unref(form).parentId,
                    "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                    clearable: "",
                    placeholder: "@\u56DE\u590D",
                    onClear: ($event) => unref(form).parentId = ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(parentIdList), (p) => {
                          var _a2;
                          _push4(ssrRenderComponent(_component_el_option, {
                            key: p == null ? void 0 : p.id,
                            label: (_a2 = p == null ? void 0 : p.user) == null ? void 0 : _a2.nickname,
                            value: p == null ? void 0 : p.id
                          }, null, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [(openBlock(true), createBlock(Fragment, null, renderList(unref(parentIdList), (p) => {
                          var _a2;
                          return openBlock(), createBlock(_component_el_option, {
                            key: p == null ? void 0 : p.id,
                            label: (_a2 = p == null ? void 0 : p.user) == null ? void 0 : _a2.nickname,
                            value: p == null ? void 0 : p.id
                          }, null, 8, ["label", "value"]);
                        }), 128))];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_el_select, {
                    modelValue: unref(form).parentId,
                    "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                    clearable: "",
                    placeholder: "@\u56DE\u590D",
                    onClear: ($event) => unref(form).parentId = ""
                  }, {
                    default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(parentIdList), (p) => {
                      var _a2;
                      return openBlock(), createBlock(_component_el_option, {
                        key: p == null ? void 0 : p.id,
                        label: (_a2 = p == null ? void 0 : p.user) == null ? void 0 : _a2.nickname,
                        value: p == null ? void 0 : p.id
                      }, null, 8, ["label", "value"]);
                    }), 128))]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onClear"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_select, {
              modelValue: unref(isHotNew),
              "onUpdate:modelValue": ($event) => isRef(isHotNew) ? isHotNew.value = $event : null,
              class: "md:w-12rem",
              placeholder: "\u6392\u5E8F\u65B9\u5F0F",
              onChange: ($event) => onReload()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_option, {
                    label: "\u6700\u65B0\u6392\u5E8F",
                    value: "new"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_option, {
                    label: "\u6700\u70ED\u6392\u5E8F",
                    value: "hot"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_el_option, {
                    label: "\u6700\u65B0\u6392\u5E8F",
                    value: "new"
                  }), createVNode(_component_el_option, {
                    label: "\u6700\u70ED\u6392\u5E8F",
                    value: "hot"
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BtnElButton, {
              disabled: unref(isFormLoading),
              class: "group ml-a animate-fade-in-left animate-ease-in-out",
              "icon-class": "i-solar:map-arrow-right-bold-duotone block  animate-zoom-in-left mr-1",
              round: "",
              type: "info",
              onClick: ($event) => onSubmitComment(unref(form).parentId, unref(thePosition))
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u53D1\u9001\xA0 `);
                } else {
                  return [createTextVNode(" \u53D1\u9001\xA0 ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_el_form_item, {
              style: {
                "margin": "0.5rem 0"
              },
              prop: "images"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div${ssrRenderAttrs(mergeProps({
                    style: ((_a2 = unref(form).images) == null ? void 0 : _a2.length) ? null : {
                      display: "none"
                    }
                  }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-fad20028${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_InputOssFileUpload, {
                    ref_key: "inputOssFileUploadRef",
                    ref: inputOssFileUploadRef,
                    key: "inputOssFileUploadRef",
                    multiple: true,
                    limit: 3,
                    "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                    "upload-quality": 0.7,
                    onErrorMsg: (msg) => {
                      ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                    },
                    onSubmit: onSubmitImages
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [withDirectives((openBlock(), createBlock("div", null, [createVNode(_component_InputOssFileUpload, {
                    ref_key: "inputOssFileUploadRef",
                    ref: inputOssFileUploadRef,
                    key: "inputOssFileUploadRef",
                    multiple: true,
                    limit: 3,
                    "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                    "upload-quality": 0.7,
                    onErrorMsg: (msg) => {
                      ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                    },
                    onSubmit: onSubmitImages
                  }, null, 8, ["onErrorMsg"])])), [[vShow, (_b2 = unref(form).images) == null ? void 0 : _b2.length], [_directive_auto_animate]])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [withDirectives((openBlock(), createBlock("div", {
              "w-full": "",
              flex: "",
              "items-center": ""
            }, [createVNode(_component_CardElImage, {
              class: "h-3rem w-3rem rounded-1/2 shadow-sm border-default v-card",
              fit: "cover",
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_b = unref(user).userInfo) == null ? void 0 : _b.avatar)
            }, null, 8, ["src"]), createVNode(_component_el_form_item, {
              style: {
                "margin": "0.5rem 0"
              },
              prop: "content",
              class: "w-full pl-4",
              rules: [{
                required: true,
                message: "\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
                trigger: "blur"
              }, {
                min: 2,
                max: 50,
                message: "\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u8BC4\u8BBA\u957F\u5EA6\u4E3A2-50\u5B57\u7B26\uFF01",
                trigger: "change"
              }]
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                ref_key: "commentRef",
                ref: commentRef,
                modelValue: unref(form).content,
                "onUpdate:modelValue": ($event) => unref(form).content = $event,
                modelModifiers: {
                  lazy: true
                },
                class: "w-full",
                size: "large",
                placeholder: "\u8BF4\u8BF4\u4F60\u7684\u5FC3\u5F97 ~",
                onKeyup: withKeys(withModifiers(($event) => onSubmitComment(unref(form).parentId, unref(thePosition)), ["self"]), ["enter"])
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"])]),
              _: 1
            })])), [[_directive_auto_animate]]), createVNode("div", {
              "mt-4": "",
              "flex-row-c-c": "",
              "grid-gap-4": "",
              class: "select-parent"
            }, [createVNode("i", {
              "i-tabler:photo-plus": "",
              "ml-3": "",
              "cursor-pointer": "",
              "p-0.7rem": "",
              class: "transition-200 hover:bg-[var(--el-color-info)]",
              onClick: ($event) => {
                var _a2, _b2;
                return (_b2 = (_a2 = unref(inputOssFileUploadRef)) == null ? void 0 : _a2.inputRef) == null ? void 0 : _b2.click();
              }
            }, null, 8, ["onClick"]), createVNode("i", {
              class: "i-solar:refresh-outline block cursor-pointer p-0.6rem transition-300 hover:rotate-180 hover:bg-[var(--el-color-info)]",
              onClick: onReload
            }), createVNode(_component_el_form_item, {
              prop: "parentId",
              class: "md:w-12rem",
              style: {
                "padding": "0",
                "margin": "0",
                "margin-left": "0.8rem"
              }
            }, {
              default: withCtx(() => [createVNode(_component_el_select, {
                modelValue: unref(form).parentId,
                "onUpdate:modelValue": ($event) => unref(form).parentId = $event,
                clearable: "",
                placeholder: "@\u56DE\u590D",
                onClear: ($event) => unref(form).parentId = ""
              }, {
                default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(unref(parentIdList), (p) => {
                  var _a2;
                  return openBlock(), createBlock(_component_el_option, {
                    key: p == null ? void 0 : p.id,
                    label: (_a2 = p == null ? void 0 : p.user) == null ? void 0 : _a2.nickname,
                    value: p == null ? void 0 : p.id
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onClear"])]),
              _: 1
            }), createVNode(_component_el_select, {
              modelValue: unref(isHotNew),
              "onUpdate:modelValue": ($event) => isRef(isHotNew) ? isHotNew.value = $event : null,
              class: "md:w-12rem",
              placeholder: "\u6392\u5E8F\u65B9\u5F0F",
              onChange: ($event) => onReload()
            }, {
              default: withCtx(() => [createVNode(_component_el_option, {
                label: "\u6700\u65B0\u6392\u5E8F",
                value: "new"
              }), createVNode(_component_el_option, {
                label: "\u6700\u70ED\u6392\u5E8F",
                value: "hot"
              })]),
              _: 1
            }, 8, ["modelValue", "onUpdate:modelValue", "onChange"]), createVNode(_component_BtnElButton, {
              disabled: unref(isFormLoading),
              class: "group ml-a animate-fade-in-left animate-ease-in-out",
              "icon-class": "i-solar:map-arrow-right-bold-duotone block  animate-zoom-in-left mr-1",
              round: "",
              type: "info",
              onClick: ($event) => onSubmitComment(unref(form).parentId, unref(thePosition))
            }, {
              default: withCtx(() => [createTextVNode(" \u53D1\u9001\xA0 ")]),
              _: 1
            }, 8, ["disabled", "onClick"])]), createVNode(_component_el_form_item, {
              style: {
                "margin": "0.5rem 0"
              },
              prop: "images"
            }, {
              default: withCtx(() => {
                var _a2;
                return [withDirectives((openBlock(), createBlock("div", null, [createVNode(_component_InputOssFileUpload, {
                  ref_key: "inputOssFileUploadRef",
                  ref: inputOssFileUploadRef,
                  key: "inputOssFileUploadRef",
                  multiple: true,
                  limit: 3,
                  "input-class": "w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card",
                  "upload-quality": 0.7,
                  onErrorMsg: (msg) => {
                    ("ElMessage" in _ctx ? _ctx.ElMessage : unref(ElMessage)).error(msg);
                  },
                  onSubmit: onSubmitImages
                }, null, 8, ["onErrorMsg"])])), [[vShow, (_a2 = unref(form).images) == null ? void 0 : _a2.length], [_directive_auto_animate]])];
              }),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_OtherPreLoading, {
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_OtherPreLoading, {
              class: "w-full"
            })];
          }
        })
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/CommentPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fad20028"]]);
const __nuxt_component_12_lazy = defineAsyncComponent(() => import('./CateGoryLine-7XWk_hMT.mjs').then((m) => m.default || m));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const user = useUserStore();
    const route = useRoute();
    const post = ref();
    const postId = (_b = (_a = route.params) == null ? void 0 : _a.id) == null ? void 0 : _b.toString();
    async function loadData() {
      const res = await getCommPostDetailHttp(`${route.params.id}`, user.getTokenFn());
      if (res.code === StatusCode.SUCCESS)
        post.value = res.data;
    }
    watch(() => user.isLogin, (val) => {
      if (val)
        loadData();
    });
    useSeoMeta({
      title: () => {
        var _a2;
        return `${((_a2 = post.value) == null ? void 0 : _a2.title) || "\u793E\u533A"} - ${appName}`;
      },
      description: () => {
        var _a2, _b2;
        return `\u6781\u7269\u5708 - ${(_a2 = post.value) == null ? void 0 : _a2.title} - ${(_b2 = post.value) == null ? void 0 : _b2.content}\uFF01`;
      },
      keywords: "\u793E\u533A,\u5546\u57CE,\u6781\u7269\u4E4B\u65C5,\u4E3B\u9875,\u804A\u5929,\u5BA2\u670D,\u8D2D\u7269,home,index,shop,chat"
    });
    function onUserBind(userId) {
      ElMessage.warning("\u8BE5\u529F\u80FD\u672A\u5F00\u653E\uFF01");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$3;
      const _component_CardElImage = __nuxt_component_1;
      const _component_BtnSwitch = __nuxt_component_8;
      const _component_BtnElButton = __nuxt_component_2;
      const _component_el_tag = ElTag;
      const _component_NuxtLink = __nuxt_component_1$1;
      const _component_CommTagList = _sfc_main$4;
      const _component_v_md_preview = resolveComponent("v-md-preview");
      const _component_el_divider = ElDivider;
      const _component_CommActionList = __nuxt_component_10;
      const _component_CardCommentPreview = __nuxt_component_11;
      const _component_LazyCommPostCateGoryLine = __nuxt_component_12_lazy;
      const _component_CardUserPostTotal = _sfc_main$5;
      const _component_UserInfoSigninCard = _sfc_main$6;
      const _component_OtherError = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-49981676>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "second",
        header: false,
        menu: ["back", {
          name: "home",
          isTeleport: true
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OtherPreLoading, {
                    class: "h-100vh w-full flex-row-c-c"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_OtherPreLoading, {
                    class: "h-100vh w-full flex-row-c-c"
                  })];
                }
              })
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              fallback: withCtx(() => [createVNode(_component_OtherPreLoading, {
                class: "h-100vh w-full flex-row-c-c"
              })]),
              default: withCtx(() => {
                var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
                return [((_a2 = unref(user).userInfo) == null ? void 0 : _a2.id) ? (openBlock(), createBlock("main", {
                  key: 0
                }, [createVNode("div", {
                  class: "group fixed left-0 top-0 z-0 h-30vh w-full shadow-md shadow-inset"
                }, [createVNode(_component_CardElImage, {
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_b2 = unref(post)) == null ? void 0 : _b2.cover),
                  class: "block h-full w-full overflow-hidden backdrop-blur-3",
                  fit: "cover"
                }, null, 8, ["src"]), createVNode(_component_BtnSwitch, {
                  class: "absolute right-2rem top-2rem z-2 op-0 group-hover:op-100"
                })]), createVNode("div", {
                  relative: "",
                  "z-1": "",
                  "mt-26vh": "",
                  "min-h-100vh": "",
                  "w-full": "",
                  "bg-light": "",
                  "dark:bg-black": ""
                }, [createVNode("div", {
                  grid: "~ cols-1 md:cols-[4fr_1fr] md:gap-6",
                  "layout-default-md": "",
                  style: {
                    "transform": "translateY(-2rem)"
                  }
                }, [createVNode("section", {
                  "border-default": "",
                  "card-default": "",
                  class: "block h-full border-0 border-t-1px p-4 md:p-6"
                }, [createVNode("div", {
                  "w-full": "",
                  flex: "",
                  "flex-col": "",
                  "grid-gap-4": ""
                }, [createVNode("h1", {
                  for: "content",
                  class: "truncate border-0 border-b-1px py-6 border-default"
                }, toDisplayString((_c = unref(post)) == null ? void 0 : _c.title), 1), createVNode("div", {
                  class: "group flex items-center"
                }, [createVNode("small", {
                  flex: "",
                  "items-center": "",
                  "font-600": "",
                  "opacity-90": ""
                }, [createVNode(_component_CardElImage, {
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + ((_e = (_d = unref(post)) == null ? void 0 : _d.user) == null ? void 0 : _e.avatar),
                  class: "mr-2 h-1.8em w-1.8em rounded-1/2 object-cover shadow",
                  fit: "cover"
                }, null, 8, ["src"]), createTextVNode(" " + toDisplayString((_g = (_f = unref(post)) == null ? void 0 : _f.user) == null ? void 0 : _g.nickname), 1)]), createVNode("small", {
                  "ml-2": "",
                  "opacity-50": ""
                }, "\u53D1\u5E16\u65F6\u95F4\uFF1A" + toDisplayString((_h = unref(post)) == null ? void 0 : _h.createTime), 1), ((_i = unref(post)) == null ? void 0 : _i.userId) !== ((_j = unref(user).userInfo) == null ? void 0 : _j.id) ? (openBlock(), createBlock(_component_BtnElButton, {
                  key: 0,
                  type: "info",
                  round: "",
                  plain: "",
                  class: "ml-a",
                  "icon-class": "i-tabler:plus mr-2",
                  "transition-icon": true,
                  size: "small",
                  onClick: withModifiers(($event) => {
                    var _a3;
                    return unref(user).getTokenFn() && onUserBind((_a3 = unref(post)) == null ? void 0 : _a3.userId);
                  }, ["stop"])
                }, {
                  default: withCtx(() => [createTextVNode(" \u5173\u6CE8 ")]),
                  _: 1
                }, 8, ["onClick"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  "ml-a": ""
                }, [createVNode(_component_el_tag, {
                  type: "info",
                  effect: "dark",
                  round: "",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(" \u672C\u4EBA ")]),
                  _: 1
                }), createVNode(_component_NuxtLink, {
                  to: `/community/post/new?id=${unref(postId)}`,
                  class: "ml-2 text-0.8rem"
                }, {
                  default: withCtx(() => [createTextVNode(" \u7F16\u8F91 ")]),
                  _: 1
                }, 8, ["to"])]))]), createVNode("div", {
                  flex: "",
                  truncate: "",
                  grid: "~ gap-2"
                }, [((_k = unref(post)) == null ? void 0 : _k.isEssence) ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  size: "small",
                  class: "font-600 shadow",
                  round: "",
                  style: {
                    "padding": "0.2rem 0.4rem"
                  },
                  type: "warning",
                  effect: "dark"
                }, {
                  default: withCtx(() => [createVNode("i", {
                    "i-solar:crown-star-bold": "",
                    "mr-1": "",
                    "p-0.5em": ""
                  }), createTextVNode(" \u7CBE\u9009 ")]),
                  _: 1
                })) : createCommentVNode("", true), createVNode(_component_CommTagList, {
                  size: "small",
                  round: "",
                  tags: (_l = unref(post)) == null ? void 0 : _l.tags,
                  effect: "light"
                }, null, 8, ["tags"])]), ((_m = unref(post)) == null ? void 0 : _m.content) ? (openBlock(), createBlock(_component_v_md_preview, {
                  key: 0,
                  "preview-class": "vuepress-markdown-body",
                  text: (_n = unref(post)) == null ? void 0 : _n.content
                }, null, 8, ["text"])) : createCommentVNode("", true), createVNode(_component_el_divider, {
                  style: {
                    "margin": "0.25rem 0",
                    "opacity": "0.5"
                  }
                }), unref(user).isLogin ? (openBlock(), createBlock(_component_CommActionList, {
                  key: 1,
                  "post-id": unref(postId),
                  likes: (_o = unref(post)) == null ? void 0 : _o.likes
                }, null, 8, ["post-id", "likes"])) : createCommentVNode("", true)]), createVNode(_component_ClientOnly, {
                  fallback: "\u52A0\u8F7D\u4E2D"
                }, {
                  default: withCtx(() => {
                    var _a3, _b3;
                    return [createVNode(_component_CardCommentPreview, {
                      "post-id": `${(_b3 = (_a3 = _ctx.$route) == null ? void 0 : _a3.params) == null ? void 0 : _b3.id}`,
                      dto: {
                        isNew: ("isTrue" in _ctx ? _ctx.isTrue : unref(isTrue)).TRUE
                      }
                    }, null, 8, ["post-id", "dto"])];
                  }),
                  _: 1
                })]), createVNode("section", {
                  flex: "",
                  "flex-col": "",
                  "grid-gap-6": ""
                }, [createVNode(_component_LazyCommPostCateGoryLine, {
                  class: "p-4 border-default card-default md:p-6",
                  "post-id": unref(postId)
                }, null, 8, ["post-id"]), ((_p = unref(post)) == null ? void 0 : _p.user) ? (openBlock(), createBlock(_component_CardUserPostTotal, {
                  key: 0,
                  dto: {
                    userId: (_q = unref(post)) == null ? void 0 : _q.userId
                  },
                  user: (_r = unref(post)) == null ? void 0 : _r.user,
                  "grid-class": "grid grid-cols-4 gap-4",
                  "card-class": "truncate word-nowrap text-0.85rem",
                  class: "p-4 border-default card-default"
                }, null, 8, ["dto", "user"])) : createCommentVNode("", true), createVNode(_component_UserInfoSigninCard, {
                  class: "p-4 border-default card-default md:p-6"
                })])])])])) : (openBlock(), createBlock("main", {
                  key: 1,
                  class: "h-100vh w-full flex-row-c-c"
                }, [createVNode(_component_OtherError, {
                  msg: "\u672A\u767B\u5F55,\u8BF7\u767B\u5F55\u540E\u67E5\u770B!",
                  icon: "i-solar:eye-line-duotone w-8rem h-8rem animate-[0.2s_fade-in_3]"
                }, {
                  footer: withCtx(() => [createVNode(_component_BtnElButton, {
                    plain: "",
                    onClick: ($event) => _ctx.$router.back()
                  }, {
                    default: withCtx(() => [createTextVNode(" \u8FD4 \u56DE ")]),
                    _: 1
                  }, 8, ["onClick"]), createVNode(_component_BtnElButton, {
                    "icon-class": "i-solar:user-rounded-outline mr-2",
                    class: "hover:shadow-md",
                    type: "primary",
                    "transition-icon": "",
                    onClick: ($event) => unref(user).showLoginForm = true
                  }, {
                    default: withCtx(() => [createTextVNode(" \u767B \u5F55 ")]),
                    _: 1
                  }, 8, ["onClick"])]),
                  _: 1
                })]))];
              }),
              _: 1
            })];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/community/post/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49981676"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-fvavIMeB.mjs.map
