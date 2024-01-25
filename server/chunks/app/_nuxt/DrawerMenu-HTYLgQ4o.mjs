import { E as ElScrollbar } from './scrollbar-uIUdvs5K.mjs';
import { defineComponent, computed, getCurrentInstance, inject, ref, reactive, watch, provide, h, Fragment, withDirectives, vShow, watchEffect, toRef, useSSRContext, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, renderList, withAsyncContext, Transition, renderSlot, nextTick, resolveComponent, createElementBlock, normalizeClass, createElementVNode, createTextVNode } from 'vue';
import { i as useResizeObserver, p as useTimeoutFn } from './index-daJZwzbi.mjs';
import { isNil } from 'lodash-unified';
import { r as useNamespace, q as buildProps, W as iconPropType, av as useDeprecated, aw as throwError$1, ay as arrow_down_default, P as arrow_right_default, M as ElIcon, I as definePropType, J as mutable, g9 as more_default, w as withInstall, X as withNoopInstall, b as _export_sfc, ga as addClass, gb as removeClass, ag as hasClass, y as _export_sfc$1, B as BaseUrlImg, k as useSettingStore, A as useRoute, f as __nuxt_component_2$1 } from '../server.mjs';
import { _ as _CollapseTransition } from './index-cBHa6a8B.mjs';
import { E as ElTooltip } from './index-gZoFaHmS.mjs';
import { TinyColor } from '@ctrl/tinycolor';
import { isString, isObject } from '@vue/shared';
import { f as flattedChildren } from './vnode-YsXVLyOk.mjs';
import { ssrRenderVNode, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './kiwi_strong-IxCbk6o6.mjs';
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
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import './aria-sbEPrgvQ.mjs';
import './focus-trap-r09CvUzW.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$4 = defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new TinyColor(color).shade(20).toString();
    }
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return computed(() => {
    return ns.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    });
  });
};
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$2 = "ElSubMenu";
var SubMenu = defineComponent({
  name: COMPONENT_NAME$2,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    useDeprecated({
      from: "popper-append-to-body",
      replacement: "teleported",
      scope: COMPONENT_NAME$2,
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/menu.html#submenu-attributes"
    }, computed(() => props.popperAppendToBody !== void 0));
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(instance, computed(() => props.index));
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject("rootMenu");
    if (!rootMenu)
      throwError$1(COMPONENT_NAME$2, "can not inject root menu");
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError$1(COMPONENT_NAME$2, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref(null);
    const currentPlacement = computed(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? props.expandCloseIcon && props.expandOpenIcon ? opened.value ? props.expandOpenIcon : props.expandCloseIcon : arrow_down_default : props.collapseCloseIcon && props.collapseOpenIcon ? opened.value ? props.collapseOpenIcon : props.collapseCloseIcon : arrow_right_default;
    });
    const isFirstLevel = computed(() => {
      return subMenu.level === 0;
    });
    const appendToBody = computed(() => {
      var _a;
      const value = (_a = props.teleported) != null ? _a : props.popperAppendToBody;
      return value === void 0 ? isFirstLevel.value : value;
    });
    const menuTransitionName = computed(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "right",
      "right-end",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const mode = computed(() => rootMenu.props.mode);
    reactive({
      index: props.index,
      indexPath,
      active
    });
    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a;
      if (event.type === "focus") {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h(ElIcon, {
          class: nsSubMenu.e("icon-arrow"),
          style: {
            transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
          }
        }, {
          default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
        })
      ];
      const child = rootMenu.isMenuPopup ? h(ElTooltip, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: props.popperOffset,
        showArrow: false,
        persistent: true,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return h("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              props.popperClass
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            h("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => h("div", {
          class: nsSubMenu.e("title"),
          onClick: handleClick
        }, titleTag)
      }) : h(Fragment, {}, [
        h("div", {
          class: nsSubMenu.e("title"),
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        h(_CollapseTransition, {}, {
          default: () => {
            var _a2;
            return withDirectives(h("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vShow, opened.value]]);
          }
        })
      ]);
      return h("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperEffect: {
    type: String,
    values: ["dark", "light"],
    default: "dark"
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => isString(path));
const menuEmits = {
  close: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => isString(index) && checkIndexPath(indexPath) && isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const sliceIndex = ref(-1);
    const openedMenus = ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const close = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index, indexPath) => {
      close(index);
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (isNil(index) || isNil(indexPath))
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
      } else {
        activeIndex.value = val;
      }
    };
    const calcSliceIndex = () => {
      var _a, _b;
      if (!menu.value)
        return -1;
      const items2 = Array.from((_b = (_a = menu.value) == null ? void 0 : _a.childNodes) != null ? _b : []).filter((item) => item.nodeName !== "#comment" && (item.nodeName !== "#text" || item.nodeValue));
      const moreItemWidth = 64;
      const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
      const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        calcWidth += item.offsetWidth || 0;
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    watch(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    watch(items.value, initMenu);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide("rootMenu", reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: ref(false),
        level: 0
      });
    }
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        handleResize
      });
    }
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(h(SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow")
          }, {
            title: () => h(ElIcon, {
              class: nsSubMenu.e("icon-more")
            }, { default: () => h(more_default) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props, 0);
      const vMenu = h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]);
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && Array.isArray(item.indexPath)
};
const COMPONENT_NAME$1 = "ElMenuItem";
const _sfc_main$3 = defineComponent({
  name: COMPONENT_NAME$1,
  components: {
    ElTooltip
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const rootMenu = inject("rootMenu");
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError$1(COMPONENT_NAME$1, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      throwError$1(COMPONENT_NAME$1, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    return {
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.rootMenu.props.popperEffect,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "title")
      ]),
      default: withCtx(() => [
        createElementVNode("div", {
          class: normalizeClass(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      renderSlot(_ctx.$slots, "default"),
      renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 2);
}
var MenuItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const COMPONENT_NAME = "ElMenuItemGroup";
const _sfc_main$2 = defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const ns = useNamespace("menu-item-group");
    return {
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("title"))
    }, [
      !_ctx.$slots.title ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 2),
    createElementVNode("ul", null, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const ElMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});
const ElMenuItem = withNoopInstall(MenuItem);
withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Line",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_MenuLine = _sfc_main$1;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(((_a = _ctx.data.children) == null ? void 0 : _a.length) ? unref(ElSubMenu) : unref(ElMenuItem)), mergeProps({
        index: (_b = _ctx.data) == null ? void 0 : _b.url,
        "popper-offset": 10
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            if ((_a2 = _ctx.data.children) == null ? void 0 : _a2.length) {
              _push2(`<div flex-row-c-c${_scopeId}>`);
              if (_ctx.data.icon) {
                _push2(`<i class="${ssrRenderClass([_ctx.data.icon, "transition-100"])}" p-0.8em filter-drop-shadow${_scopeId}></i>`);
              } else if (_ctx.data.image) {
                _push2(`<img${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image)} loading="lazy"${ssrRenderAttr("alt", _ctx.data.title)} class="h-2.4em w-2.4em card-default" fit="cover"${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="flex-1 animate-[fade-in] overflow-hidden truncate text-center tracking-0.4em"${_scopeId}>${ssrInterpolate(_ctx.data.title)}</span>`);
          } else {
            return [
              ((_b2 = _ctx.data.children) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                key: 0,
                "flex-row-c-c": ""
              }, [
                _ctx.data.icon ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: ["transition-100", _ctx.data.icon],
                  "p-0.8em": "",
                  "filter-drop-shadow": ""
                }, null, 2)) : _ctx.data.image ? (openBlock(), createBlock("img", {
                  key: 1,
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image,
                  loading: "lazy",
                  alt: _ctx.data.title,
                  class: "h-2.4em w-2.4em card-default",
                  fit: "cover"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("span", { class: "flex-1 animate-[fade-in] overflow-hidden truncate text-center tracking-0.4em" }, toDisplayString(_ctx.data.title), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c, _d;
          if (_push2) {
            _push2(`<div flex-row-c-c${_scopeId}>`);
            if (_ctx.data.icon && !((_a2 = _ctx.data.children) == null ? void 0 : _a2.length)) {
              _push2(`<i class="${ssrRenderClass([_ctx.data.icon, "transition-200"])}" filter-drop-shadows p-0.8em${_scopeId}></i>`);
            } else if (_ctx.data.image && !((_b2 = _ctx.data.children) == null ? void 0 : _b2.length)) {
              _push2(`<img${ssrRenderAttr("src", ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image)} loading="lazy"${ssrRenderAttr("alt", _ctx.data.title)} class="h-2.4em w-2.4em card-default" fit="cover"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><!--[-->`);
            ssrRenderList(_ctx.data.children, (child) => {
              _push2(ssrRenderComponent(_component_MenuLine, {
                key: child.url,
                data: child
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode("div", { "flex-row-c-c": "" }, [
                _ctx.data.icon && !((_c = _ctx.data.children) == null ? void 0 : _c.length) ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: ["transition-200", _ctx.data.icon],
                  "filter-drop-shadows": "",
                  "p-0.8em": ""
                }, null, 2)) : _ctx.data.image && !((_d = _ctx.data.children) == null ? void 0 : _d.length) ? (openBlock(), createBlock("img", {
                  key: 1,
                  src: ("BaseUrlImg" in _ctx ? _ctx.BaseUrlImg : unref(BaseUrlImg)) + _ctx.data.image,
                  loading: "lazy",
                  alt: _ctx.data.title,
                  class: "h-2.4em w-2.4em card-default",
                  fit: "cover"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ]),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.children, (child) => {
                return openBlock(), createBlock(_component_MenuLine, {
                  key: child.url,
                  data: child
                }, null, 8, ["data"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/Line.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DrawerMenu",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const setting = useSettingStore();
    const route = useRoute();
    const path = ref(route.path);
    watch(() => route.path, (val) => {
      path.value = val;
    });
    [__temp, __restore] = withAsyncContext(() => setting.loadMenus()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_scrollbar = ElScrollbar;
      const _component_el_menu = ElMenu;
      const _component_ClientOnly = __nuxt_component_2$1;
      const _component_MenuLine = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["menu-list fixed left-0 z-998 block h-full md:sticky", _ctx.$attrs.class]
      }, _attrs))} data-v-e4d1c484><div style="${ssrRenderStyle([
        !unref(setting).isCollapse ? null : { display: "none" },
        { "background-color": "#85858510" }
      ])}" class="mock fixed left-0 top-0 z-998 block h-full w-full backdrop-blur-2px sm:hidden" data-v-e4d1c484></div><div class="menu relative top-0 z-998 animate-[300ms_fade-in] transition-200 md:shadow-none" data-v-e4d1c484>`);
      _push(ssrRenderComponent(_component_el_scrollbar, {
        style: !unref(setting).isCollapse ? null : { display: "none" },
        height: "100%",
        "wrap-class": "px-3 bg-white backdrop-blur-30 dark:bg-dark-8 border-default border-0 border-r-1px dark:bg-dark-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_menu, {
              class: "menu-first",
              "default-active": unref(path),
              collapse: (_a = unref(setting)) == null ? void 0 : _a.isFold,
              "unique-open": "",
              router: true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  _push3(`<div class="sticky left-0 top-0 flex flex-wrap border-0 border-b-1px rounded-0 transition-200 transition-300 transition-all border-default hover:bg-transparent" data-v-e4d1c484${_scopeId2}><img loading="lazy" alt="Design By Kiwi23333"${ssrRenderAttr("src", _imports_0)} class="${ssrRenderClass([{
                    "mx-a": (_a2 = unref(setting)) == null ? void 0 : _a2.isFold
                  }, "filter-shadow m-3 block"])}" h-1.8rem w-1.8rem data-v-e4d1c484${_scopeId2}><i inline-block h-1.6rem w-1.6rem cursor-pointer class="${ssrRenderClass([{
                    "mx-a": (_b2 = unref(setting)) == null ? void 0 : _b2.isFold
                  }, "i-solar:hamburger-menu-line-duotone m-3 ml-a block text-dark dark:text-light"])}" data-v-e4d1c484${_scopeId2}></i></div>`);
                  _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "sticky left-0 top-0 flex flex-wrap border-0 border-b-1px rounded-0 transition-200 transition-300 transition-all border-default hover:bg-transparent" }, [
                      createVNode("img", {
                        loading: "lazy",
                        alt: "Design By Kiwi23333",
                        src: _imports_0,
                        class: ["filter-shadow m-3 block", {
                          "mx-a": (_c = unref(setting)) == null ? void 0 : _c.isFold
                        }],
                        "h-1.8rem": "",
                        "w-1.8rem": ""
                      }, null, 2),
                      createVNode("i", {
                        class: ["i-solar:hamburger-menu-line-duotone m-3 ml-a block text-dark dark:text-light", {
                          "mx-a": (_d = unref(setting)) == null ? void 0 : _d.isFold
                        }],
                        "inline-block": "",
                        "h-1.6rem": "",
                        "w-1.6rem": "",
                        "cursor-pointer": "",
                        onClick: ($event) => {
                          var _a3;
                          return unref(setting).isFold = !((_a3 = unref(setting)) == null ? void 0 : _a3.isFold);
                        }
                      }, null, 10, ["onClick"])
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(setting).menuList, (data) => {
                          return openBlock(), createBlock(_component_MenuLine, {
                            key: data.url,
                            data
                          }, null, 8, ["data"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_menu, {
                class: "menu-first",
                "default-active": unref(path),
                collapse: (_b = unref(setting)) == null ? void 0 : _b.isFold,
                "unique-open": "",
                router: true
              }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    createVNode("div", { class: "sticky left-0 top-0 flex flex-wrap border-0 border-b-1px rounded-0 transition-200 transition-300 transition-all border-default hover:bg-transparent" }, [
                      createVNode("img", {
                        loading: "lazy",
                        alt: "Design By Kiwi23333",
                        src: _imports_0,
                        class: ["filter-shadow m-3 block", {
                          "mx-a": (_a2 = unref(setting)) == null ? void 0 : _a2.isFold
                        }],
                        "h-1.8rem": "",
                        "w-1.8rem": ""
                      }, null, 2),
                      createVNode("i", {
                        class: ["i-solar:hamburger-menu-line-duotone m-3 ml-a block text-dark dark:text-light", {
                          "mx-a": (_b2 = unref(setting)) == null ? void 0 : _b2.isFold
                        }],
                        "inline-block": "",
                        "h-1.6rem": "",
                        "w-1.6rem": "",
                        "cursor-pointer": "",
                        onClick: ($event) => {
                          var _a3;
                          return unref(setting).isFold = !((_a3 = unref(setting)) == null ? void 0 : _a3.isFold);
                        }
                      }, null, 10, ["onClick"])
                    ]),
                    createVNode(_component_ClientOnly, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(setting).menuList, (data) => {
                          return openBlock(), createBlock(_component_MenuLine, {
                            key: data.url,
                            data
                          }, null, 8, ["data"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }),
                _: 1
              }, 8, ["default-active", "collapse"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div flex-row-c-c cursor-pointer rounded-r-8px shadow-sm hover:-translate-x-1 transition="all 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" class="${ssrRenderClass([{ " bg-[var(--el-color-primary)] shadow-indigo-600 text-white": unref(setting).isCollapse }, "absolute bottom-2rem h-3rem w-2rem pl-1 text-[var(--el-color-primary)] -right-2rem -translate-x-2"])}" data-v-e4d1c484><i transition="all 300  cubic-bezier(0.61, 0.225, 0.195, 1.3)" class="${ssrRenderClass({ "rotate-180 text-white": unref(setting).isCollapse })}" i-solar:alt-arrow-left-bold p-3 data-v-e4d1c484></i></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/menu/DrawerMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DrawerMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4d1c484"]]);

export { DrawerMenu as default };
//# sourceMappingURL=DrawerMenu-HTYLgQ4o.mjs.map
