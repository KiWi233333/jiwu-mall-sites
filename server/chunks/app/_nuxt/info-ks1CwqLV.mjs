import { u as useUserStore, t as useRoute, S as StatusCode, Y as useHead, v as appName, B as BaseUrlImg, o as BaseUrl, _ as __nuxt_component_0, e as __nuxt_component_0$1, g as ElButton, E as ElMessage, aE as updateInfoByDTO, y as compareObjects, m as useAsyncCopyText, N as plus_default, b as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$5 } from './PreLoading-Sou-hyZj.mjs';
import { E as ElPopover } from './index-BBhc0WGX.mjs';
import { _ as __nuxt_component_1 } from './ElImage-j3i6j_3Z.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, withCtx, createVNode, unref, openBlock, createBlock, createCommentVNode, mergeProps, Fragment, renderList, reactive, computed, resolveDirective, createTextVNode, withDirectives, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { f as useLocalStorage, t as toReactive, w as watchDebounced } from './event-9ZI5GX64.mjs';
import { E as ElUpload } from './upload--R7GQOnk.mjs';
import { E as ElInput } from './index-ukcTjM2L.mjs';
import { E as ElTooltip } from './index-S-yJffF9.mjs';
import { E as ElDatePicker } from './date-picker-r2lWvUoQ.mjs';
import { E as ElSelect, a as ElOption } from './index-K-gO0vbs.mjs';
import { v as vLoading } from './loading-9ZJxhv9k.mjs';
import { E as ElTabs, a as ElTabPane } from './tab-pane-VfJmI_8q.mjs';
import { a as getPostPageLazy } from './post-uKGC7P8z.mjs';
import { _ as _sfc_main$6 } from './UserPostTotal-wNX1zEUK.mjs';
import { _ as _sfc_main$7 } from './SigninCard-hNL7zee-.mjs';
import { g as getCommUserInfoSe } from './index-yQvNAXVB.mjs';
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
import './progress-lh-pSAoE.mjs';
import './index-Jkc1A1yz.mjs';
import './objects-HNc5gIZI.mjs';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-FUoXuQZs.mjs';
import 'dayjs';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import './utils-e-yu3oTC.mjs';
import './arrays-ZDr1kzfz.mjs';
import './scrollbar-rGnTaDH3.mjs';
import './index-deHNvRRV.mjs';
import './index-Ud8N-GPr.mjs';
import './index-3Hd0ipYT.mjs';
import './strings-Xcuto3Xi.mjs';
import './index-PIw9jEwu.mjs';
import './vnode-YsXVLyOk.mjs';
import './fetch-YS3Fxkuj.mjs';
import './nuxt-link-tpk2tUXY.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BgToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const bgList = ref(["/image/kiwi-bg-1.jpg", "/image/kiwi-bg-2.jpg", "/image/kiwi-bg-3.jpg", "/image/kiwi-bg-4.jpg", "/image/kiwi-bg-5.jpg"]);
    const bgUrl = useLocalStorage("jiwu_user_bg", "/image/kiwi-bg-4.jpg");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_popover = ElPopover;
      const _component_el_button = ElButton;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_card_el_image = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "group top-bg relative select-none shadow-lg shadow-inset"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_el_popover, {
        width: 400,
        placement: "top",
        title: "\u5207\u6362\u58C1\u7EB8",
        teleported: false,
        trigger: "click",
        class: ""
      }, {
        reference: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              class: "absolute bottom-2rem right-2rem z-999 opacity-0 group-hover:opacity-100",
              type: "info",
              plain: "",
              style: {
                "padding": "8px",
                "background-color": "rgba(97, 255, 163, 0.1)",
                "transition": "0.3s"
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i i-solar:pallete-2-bold h-1.6em w-1.6em${_scopeId2}></i>`);
                } else {
                  return [createVNode("i", {
                    "i-solar:pallete-2-bold": "",
                    "h-1.6em": "",
                    "w-1.6em": ""
                  })];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_button, {
              class: "absolute bottom-2rem right-2rem z-999 opacity-0 group-hover:opacity-100",
              type: "info",
              plain: "",
              style: {
                "padding": "8px",
                "background-color": "rgba(97, 255, 163, 0.1)",
                "transition": "0.3s"
              }
            }, {
              default: withCtx(() => [createVNode("i", {
                "i-solar:pallete-2-bold": "",
                "h-1.6em": "",
                "w-1.6em": ""
              })]),
              _: 1
            })];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [createVNode("div", {
                class: "img-list"
              }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(bgList), (p, i) => {
                return openBlock(), createBlock(_component_card_el_image, {
                  key: i,
                  loading: "lazy",
                  alt: "Design By Kiwi23333",
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + p,
                  "object-cover": "",
                  class: "hover: m-1 h-4em w-1/1 w-6em rounded-4px object-cover transition-300 hover:scale-110 border-default",
                  onClick: ($event) => bgUrl.value = p
                }, null, 8, ["src", "onClick"]);
              }), 128))])]),
              _: 1
            })];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_card_el_image, {
        loading: "lazy",
        src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(bgUrl),
        "object-cover": "",
        class: "h-300px w-1/1 object-cover"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/info/BgToggle.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Line",
  __ssrInlineRender: true,
  props: {
    data: {},
    isEdit: {
      type: Boolean
    }
  },
  setup(__props) {
    const {
      data
    } = __props;
    const user = reactive(data);
    const store = useUserStore();
    const formData = new FormData();
    const avatatRef = ref();
    const avatarUrl = computed({
      get() {
        return user == null ? void 0 : user.avatar;
      },
      set(val) {
        user.avatar = val;
      }
    });
    const isLoading = ref(false);
    const imageTypeList = ref(["image/png", "image/jpg", "image/jpeg", "image/svg"]);
    const beforeUpload = (rawFile) => {
      isLoading.value = true;
      if (!imageTypeList.value.includes(rawFile.type)) {
        isLoading.value = false;
        ElMessage.error("\u6587\u4EF6\u683C\u5F0F\u4E0D\u662F\u56FE\u7247\u683C\u5F0F!");
        return false;
      } else if (rawFile.size / 1024 / 1024 > 2) {
        isLoading.value = false;
        ElMessage.error("\u5934\u50CF\u9700\u8981\u5C0F\u4E8E2MB!");
        return false;
      }
      formData.append("file", rawFile);
      return true;
    };
    const updateSucess = async (data2, file) => {
      var _a;
      isLoading.value = false;
      (_a = avatatRef.value) == null ? void 0 : _a.clearFiles();
      if (data2.code === StatusCode.SUCCESS) {
        user.avatar = data2.data;
        avatarUrl.value = data2.data || "";
        ElMessage.success("\u66F4\u6362\u5934\u50CF\u6210\u529F\uFF01");
      } else {
        ElMessage.error(data2.message);
      }
    };
    const genderList = ref(["\u7537", "\u5973", "\u4FDD\u5BC6"]);
    const userCopy = reactive({
      nickname: user == null ? void 0 : user.nickname,
      slogan: user == null ? void 0 : user.slogan,
      gender: user == null ? void 0 : user.gender,
      birthday: user == null ? void 0 : user.birthday
    });
    const isEditSlogan = ref(false);
    const isEditNickname = ref(false);
    async function submitUpdateUser(key) {
      if (Object.keys(userCopy).includes(key)) {
        if (!JSON.parse(JSON.stringify(userCopy))[key])
          return ElMessage.error("\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\uFF01");
        if (isLoading.value)
          return;
        const {
          code,
          message
        } = await updateInfoByDTO(compareObjects({
          nickname: user == null ? void 0 : user.nickname,
          slogan: user == null ? void 0 : user.slogan,
          gender: user == null ? void 0 : user.gender,
          birthday: user == null ? void 0 : user.birthday
        }, {
          ...userCopy
        }), store.getToken);
        if (code === StatusCode.SUCCESS) {
          ElMessage.success("\u4FEE\u6539\u6210\u529F\uFF01");
          store.$patch({
            userInfo: {
              ...userCopy
            }
          });
        } else {
          ElMessage.error(message || "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF01");
        }
        isEditNickname.value = false;
        isEditSlogan.value = false;
      }
    }
    function showInvitation() {
      useAsyncCopyText(`${(void 0).URL}?id=${user == null ? void 0 : user.id}`).then(() => {
        ElMessage.success("\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F\uFF01");
      }).catch(() => {
        ElMessage.error("\u94FE\u63A5\u5206\u4EAB\u5931\u8D25\uFF01");
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_el_upload = ElUpload;
      const _component_ElIconPlus = plus_default;
      const _component_el_button = ElButton;
      const _component_el_input = ElInput;
      const _component_el_tooltip = ElTooltip;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_select = ElSelect;
      const _component_el_option = ElOption;
      const _directive_loading = vLoading;
      const _directive_auto_animate = resolveDirective("auto-animate");
      const _directive_copying = resolveDirective("copying");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-52146557><div${ssrRenderAttrs(mergeProps({
        class: "avatar shadow-md"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading))))} data-v-52146557>`);
      _push(ssrRenderComponent(_component_el_upload, {
        ref_key: "avatatRef",
        ref: avatatRef,
        disabled: _ctx.isEdit,
        class: "avatar-uploader",
        drag: "",
        action: `${"BaseUrl" in _ctx ? _ctx.BaseUrl : unref(BaseUrl)}/user/info/avatar`,
        headers: {
          Authorization: unref(store).token
        },
        method: "PUT",
        limit: 1,
        multiple: false,
        "auto-upload": "",
        "show-file-list": false,
        "list-type": "picture",
        "before-upload": beforeUpload,
        "on-success": updateSucess
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="group relative flex-row-c-c" data-v-52146557${_scopeId}>`);
            if (unref(avatarUrl)) {
              _push2(`<img alt="Design By Kiwi23333"${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(avatarUrl))} class="avatar-mark h-6em w-6em overflow-hidden object-cover p-0 transition-300 group-hover:filter-blur-4" data-v-52146557${_scopeId}>`);
            } else {
              _push2(ssrRenderComponent(_component_ElIconPlus, {
                size: "2em"
              }, null, _parent2, _scopeId));
            }
            _push2(`<i class="i-solar:camera-broken absolute p-5 opacity-0 transition-300 group-hover:opacity-60" data-v-52146557${_scopeId}></i></div>`);
          } else {
            return [createVNode("div", {
              class: "group relative flex-row-c-c"
            }, [unref(avatarUrl) ? (openBlock(), createBlock("img", {
              key: 0,
              alt: "Design By Kiwi23333",
              src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + unref(avatarUrl),
              class: "avatar-mark h-6em w-6em overflow-hidden object-cover p-0 transition-300 group-hover:filter-blur-4"
            }, null, 8, ["src"])) : (openBlock(), createBlock(_component_ElIconPlus, {
              key: 1,
              size: "2em"
            })), createVNode("i", {
              class: "i-solar:camera-broken absolute p-5 opacity-0 transition-300 group-hover:opacity-60"
            })])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text inline-flex flex-col items-start px-2" data-v-52146557><div${ssrRenderAttrs(mergeProps({
        tag: "div",
        class: "my-2"
      }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))} data-v-52146557><h2 style="${ssrRenderStyle(!unref(isEditNickname) ? null : {
        display: "none"
      })}" class="group" data-v-52146557><span data-v-52146557>${ssrInterpolate((_a = unref(user)) == null ? void 0 : _a.nickname)}</span>`);
      if (_ctx.isEdit) {
        _push(`<span class="i-solar:ruler-cross-pen-bold-duotone ml-2 cursor-pointer bg-bluegray p-3 group-hover:bg-[var(--el-color-success)]" data-v-52146557></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_button, {
        type: "info",
        class: "ml-4em opacity-0 border-default group-hover:opacity-100",
        onClick: showInvitation
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5206 \u4EAB `);
          } else {
            return [createTextVNode(" \u5206 \u4EAB ")];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2>`);
      if (_ctx.isEdit) {
        _push(`<div style="${ssrRenderStyle(unref(isEditNickname) ? null : {
          display: "none"
        })}" class="flex-row-c-c" data-v-52146557>`);
        _push(ssrRenderComponent(_component_el_input, {
          modelValue: unref(userCopy).nickname,
          "onUpdate:modelValue": ($event) => unref(userCopy).nickname = $event,
          modelModifiers: {
            lazy: true
          },
          class: "mr-2",
          style: {
            "font-size": "0.9em",
            "font-weight": "700"
          },
          placeholder: "\u4FEE\u6539\u7528\u6237\u6635\u79F0",
          onFocus: ($event) => isEditNickname.value = true,
          onBlur: ($event) => isEditNickname.value = false,
          onKeyup: ($event) => submitUpdateUser("nickname")
        }, null, _parent));
        _push(ssrRenderComponent(_component_el_button, {
          style: {
            "padding": "0 1.5em"
          },
          type: "primary",
          onClick: ($event) => submitUpdateUser("nickname")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u4FEE\u6539 `);
            } else {
              return [createTextVNode(" \u4FEE\u6539 ")];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><small class="group small-input cursor-pointer opacity-60" data-v-52146557> ID\uFF1A${ssrInterpolate((_b = unref(user)) == null ? void 0 : _b.id)} `);
      _push(ssrRenderComponent(_component_el_tooltip, {
        content: "\u590D\u5236 ID",
        placement: "bottom",
        "popper-class": "el-popper-init"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<span${ssrRenderAttrs(mergeProps({
              class: "i-solar:copy-broken mx-2 cursor-pointer bg-blueGray p-2 transition-300 hover:bg-[var(--el-color-success)]"
            }, ssrGetDirectiveProps(_ctx, _directive_copying, (_a2 = unref(user)) == null ? void 0 : _a2.id, void 0, {
              toast: true
            })))} data-v-52146557${_scopeId}></span>`);
          } else {
            return [withDirectives(createVNode("span", {
              class: "i-solar:copy-broken mx-2 cursor-pointer bg-blueGray p-2 transition-300 hover:bg-[var(--el-color-success)]"
            }, null, 512), [[_directive_copying, (_b2 = unref(user)) == null ? void 0 : _b2.id, void 0, {
              toast: true
            }]])];
          }
        }),
        _: 1
      }, _parent));
      _push(`</small><div mt-4 flex flex-row flex-col flex-wrap gap-2 op-80 transition-200 hover:op-100 data-v-52146557><div class="small-input mt-3 flex items-center justify-start" data-v-52146557><small data-v-52146557>\u7B7E\u540D\uFF1A</small>`);
      if (_ctx.isEdit) {
        _push(ssrRenderComponent(_component_el_input, {
          modelValue: unref(userCopy).slogan,
          "onUpdate:modelValue": ($event) => unref(userCopy).slogan = $event,
          modelModifiers: {
            lazy: true
          },
          class: "mr-1",
          size: "small",
          type: "text",
          style: {
            "width": "14em"
          },
          placeholder: "\u5C55\u793A\u4F60\u7684\u4E2A\u6027\u7B7E\u540D\u5427~ \u2728",
          onKeyup: ($event) => submitUpdateUser("slogan"),
          onFocus: ($event) => isEditSlogan.value = true,
          onBlur: ($event) => isEditSlogan.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_el_button, {
        style: unref(isEditSlogan) ? null : {
          display: "none"
        },
        key: "isEditSlogan-btn",
        icon: "Select",
        size: "small",
        type: "primary",
        onClick: ($event) => submitUpdateUser("slogan")
      }, null, _parent));
      _push(`</div><div class="small-input mt-3 flex-row-c-c justify-start" data-v-52146557><small data-v-52146557>\u751F\u65E5\uFF1A</small>`);
      _push(ssrRenderComponent(_component_el_date_picker, {
        modelValue: unref(userCopy).birthday,
        "onUpdate:modelValue": ($event) => unref(userCopy).birthday = $event,
        modelModifiers: {
          lazy: true
        },
        type: "date",
        placeholder: "Pick a day",
        size: "small",
        onChange: ($event) => submitUpdateUser("birthday")
      }, null, _parent));
      _push(`</div><div class="small-input mt-3 flex-row-c-c justify-start" data-v-52146557><small data-v-52146557>\u6027\u522B\uFF1A</small>`);
      _push(ssrRenderComponent(_component_el_select, {
        modelValue: unref(userCopy).gender,
        "onUpdate:modelValue": ($event) => unref(userCopy).gender = $event,
        placeholder: "Select",
        style: {
          "width": "10.5em"
        },
        size: "small",
        onChange: ($event) => submitUpdateUser("gender")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(genderList), (item) => {
              _push2(ssrRenderComponent(_component_el_option, {
                key: item,
                label: item,
                value: item
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [(openBlock(true), createBlock(Fragment, null, renderList(unref(genderList), (item) => {
              return openBlock(), createBlock(_component_el_option, {
                key: item,
                label: item,
                value: item
              }, null, 8, ["label", "value"]);
            }), 128))];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/info/Line.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-52146557"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PostListSe",
  __ssrInlineRender: true,
  props: {
    dto: {
      default: () => {
        return {};
      }
    },
    limit: {},
    class: {
      default: ""
    },
    cardClass: {
      default: ""
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    const props = __props;
    const isLoading = ref(false);
    const postList = ref([]);
    const page = ref(0);
    const size = ref(props.limit || 10);
    const pageInfo = reactive({
      total: -1,
      pages: -1,
      current: -1
    });
    const isNot = computed(() => {
      return (pageInfo == null ? void 0 : pageInfo.total) === 0 && pageInfo.pages === 0;
    });
    const isNoMore = computed(() => {
      return pageInfo.pages > 0 && (page.value >= pageInfo.pages || props.limit !== void 0 && props.limit <= postList.value.length);
    });
    async function loadPostListPage() {
      var _a, _b, _c, _d, _e;
      if (isLoading.value || isNoMore.value || isNot.value)
        return;
      if (props.limit !== void 0 && postList.value.length >= props.limit) {
        isLoading.value = false;
        return;
      }
      isLoading.value = true;
      page.value++;
      const {
        data
      } = await getPostPageLazy(page.value, size.value, props == null ? void 0 : props.dto);
      if (((_a = data.value) == null ? void 0 : _a.code) !== StatusCode.SUCCESS)
        return;
      pageInfo.total = (_b = data.value) == null ? void 0 : _b.data.total;
      pageInfo.current = (_c = data.value) == null ? void 0 : _c.data.current;
      pageInfo.pages = (_d = data.value) == null ? void 0 : _d.data.pages;
      postList.value.push(...(_e = data.value) == null ? void 0 : _e.data.records);
      isLoading.value = false;
    }
    function clearResult() {
      postList.value.splice(0);
      pageInfo.total = -1;
      pageInfo.pages = -1;
      pageInfo.current = -1;
      page.value = 0;
    }
    const dto = toReactive(props.dto);
    const timer = ref();
    watchDebounced(dto, async () => {
      if (timer.value)
        return;
      clearResult();
      await loadPostListPage();
      timer.value = setTimeout(() => {
        clearTimeout(timer.value);
        timer.value = null;
      }, 400);
    }, {
      immediate: true
    });
    __expose({
      clearResult,
      // 清除
      loadPostListPage,
      postList,
      pageInfo
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-30990f34>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/PostListSe.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-30990f34"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    userId: {}
  },
  setup(__props) {
    const user = useUserStore();
    const activeMenu = ref("\u5E16 \u5B50");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_CommPostListSe = __nuxt_component_2;
      _push(ssrRenderComponent(_component_el_tabs, mergeProps({
        modelValue: unref(activeMenu),
        "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
        class: "goods-tabs mt-4 min-h-50vh",
        "tab-position": "top"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              lazy: "",
              name: "\u5E16 \u5B50",
              label: "\u5E16 \u5B50",
              class: "animate__animated mt-2 animate-fade-in animate-duration-300",
              "animate-duration-300": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CommPostListSe, {
                    dto: {
                      userId: _ctx.userId || ((_a = unref(user).userInfo) == null ? void 0 : _a.id)
                    },
                    class: "grid grid-gap-4"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_CommPostListSe, {
                    dto: {
                      userId: _ctx.userId || ((_b = unref(user).userInfo) == null ? void 0 : _b.id)
                    },
                    class: "grid grid-gap-4"
                  }, null, 8, ["dto"])];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              lazy: "",
              class: "animate__animated mt-2 animate-fade-in",
              "animate-duration-300": "",
              name: "\u76F8 \u5173",
              label: "\u76F8 \u5173"
            }, null, _parent2, _scopeId));
          } else {
            return [createVNode(_component_el_tab_pane, {
              lazy: "",
              name: "\u5E16 \u5B50",
              label: "\u5E16 \u5B50",
              class: "animate__animated mt-2 animate-fade-in animate-duration-300",
              "animate-duration-300": ""
            }, {
              default: withCtx(() => {
                var _a;
                return [createVNode(_component_CommPostListSe, {
                  dto: {
                    userId: _ctx.userId || ((_a = unref(user).userInfo) == null ? void 0 : _a.id)
                  },
                  class: "grid grid-gap-4"
                }, null, 8, ["dto"])];
              }),
              _: 1
            }), createVNode(_component_el_tab_pane, {
              lazy: "",
              class: "animate__animated mt-2 animate-fade-in",
              "animate-duration-300": "",
              name: "\u76F8 \u5173",
              label: "\u76F8 \u5173"
            })];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/User/info/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8b912226"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "info",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const user = ref();
    const isLoading = ref(false);
    const store = useUserStore();
    const route = useRoute();
    const isSelf = ref(true);
    const userId = ((_a = route.query) == null ? void 0 : _a.id) ? (_b = route.query) == null ? void 0 : _b.id.toString() : "";
    isLoading.value = true;
    if (userId && userId !== ((_c = store == null ? void 0 : store.userInfo) == null ? void 0 : _c.id)) {
      isSelf.value = false;
      const res = ([__temp, __restore] = withAsyncContext(() => getCommUserInfoSe(userId, store.getToken)), __temp = await __temp, __restore(), __temp);
      if (res.code === StatusCode.SUCCESS) {
        user.value = {
          id: userId,
          ...res.data
        };
      } else {
        user.value = store.userInfo;
        isSelf.value = true;
      }
      isLoading.value = false;
    } else {
      user.value = store.userInfo;
    }
    useHead({
      title: () => {
        var _a2;
        return `${isSelf.value ? "\u4E2A\u4EBA\u4FE1\u606F" : (_a2 = user == null ? void 0 : user.value) == null ? void 0 : _a2.nickname} - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`;
      },
      meta: [{
        name: "description",
        content: () => `\u4E2A\u4EBA\u4FE1\u606F - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
      }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_OtherPreLoading = _sfc_main$5;
      const _component_UserInfoBgToggle = _sfc_main$4;
      const _component_UserInfoLine = __nuxt_component_4;
      const _component_UserInfoTabs = __nuxt_component_5;
      const _component_CardUserPostTotal = _sfc_main$6;
      const _component_UserInfoSigninCard = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "user",
        menu: ["back"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {
              fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_OtherPreLoading, {
                    class: "w-full",
                    icon: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [createVNode(_component_OtherPreLoading, {
                    class: "w-full",
                    icon: ""
                  })];
                }
              })
            }, _parent2, _scopeId));
          } else {
            return [createVNode(_component_ClientOnly, null, {
              fallback: withCtx(() => [createVNode(_component_OtherPreLoading, {
                class: "w-full",
                icon: ""
              })]),
              default: withCtx(() => {
                var _a2, _b2, _c2;
                return [((_a2 = unref(store)) == null ? void 0 : _a2.getToken) ? (openBlock(), createBlock("div", {
                  key: 0
                }, [createVNode(_component_UserInfoBgToggle, {
                  class: "fixed left-0 top-0 z-0 w-full"
                }), createVNode("div", {
                  class: "flex animate-[fade-in_.3s_ease] layout-default"
                }, [createVNode("div", {
                  class: "flex flex-1 flex-wrap"
                }, [unref(user) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "avatars relative flex-1 -top-5em md:pr-4"
                }, [createVNode(_component_UserInfoLine, {
                  data: unref(user),
                  "is-edit": unref(isSelf)
                }, null, 8, ["data", "is-edit"]), createVNode("div", {
                  class: "m-2"
                }, [createVNode(_component_UserInfoTabs, {
                  "user-id": unref(userId)
                }, null, 8, ["user-id"])])])) : createCommentVNode("", true), createVNode("div", {
                  flex: "",
                  "flex-col": "",
                  "gap-6": ""
                }, [((_b2 = unref(user)) == null ? void 0 : _b2.id) ? (openBlock(), createBlock(_component_CardUserPostTotal, {
                  key: 0,
                  dto: {
                    userId: (_c2 = unref(user)) == null ? void 0 : _c2.id
                  },
                  user: unref(user),
                  "grid-class": "grid grid-cols-4 gap-4",
                  "card-class": "truncate word-nowrap text-0.85rem",
                  class: "p-4 border-default card-default"
                }, null, 8, ["dto", "user"])) : createCommentVNode("", true), createVNode(_component_UserInfoSigninCard, {
                  class: "sm:w-360px"
                })])])])])) : createCommentVNode("", true)];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=info-ks1CwqLV.mjs.map
