import { j as useNamespace, F as ElIcon, a9 as check_default, al as loading_default, I as arrow_right_default, h as buildProps, z as definePropType, a3 as useSizeProp, ai as useFormItem, a6 as useFormSize, ak as debugWarn, ar as circle_close_default, as as arrow_down_default, b as _export_sfc, l as _export_sfc$1, at as isEmpty, an as isBoolean, Y as useHead, v as appName, u as useUserStore, af as useAddressStore, au as isUndefined, E as ElMessage, av as updateAddressById, aw as addAddressByDTO, S as StatusCode, f as ElMessageBox, ax as deleteAddressById, ay as deleteBatchAddressByIds, _ as __nuxt_component_0, e as __nuxt_component_0$1, g as ElButton, ah as circle_plus_filled_default } from '../server.mjs';
import { ElText } from './index-eePIGq3N.mjs';
import { E as ElDialog } from './dialog-5eWjtfeR.mjs';
import { E as ElForm, a as ElFormItem } from './form-item-d_pUYt5T.mjs';
import { E as ElInput, i as isKorean } from './index-ukcTjM2L.mjs';
import { defineComponent, h, inject, computed, getCurrentInstance, ref, provide, reactive, watch, useAttrs, nextTick, openBlock, createBlock, unref, withCtx, withDirectives, createElementBlock, normalizeClass, normalizeStyle, createVNode, withModifiers, Fragment, renderList, toDisplayString, createElementVNode, withKeys, vModelText, createCommentVNode, isRef, vShow, renderSlot, useSSRContext, mergeProps, createTextVNode, resolveDirective, Teleport, Transition, resolveComponent } from 'vue';
import { isPromise, isFunction, NOOP } from '@vue/shared';
import { isEqual, cloneDeep, debounce, flattenDeep } from 'lodash-unified';
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT, g as useCssVar } from './event-9ZI5GX64.mjs';
import { E as ElScrollbar } from './scrollbar-rGnTaDH3.mjs';
import { E as ElCheckbox, a as ElCheckboxGroup } from './checkbox-zYdk3J0T.mjs';
import { a as ElRadio } from './index-pIjkPV4Z.mjs';
import { u as useLocale } from './index-Jkc1A1yz.mjs';
import { g as generateId } from './rand-7lfgVUL1.mjs';
import { c as capitalize } from './strings-Xcuto3Xi.mjs';
import { u as unique, c as castArray } from './arrays-ZDr1kzfz.mjs';
import { E as EVENT_CODE } from './aria-sbEPrgvQ.mjs';
import { u as useTooltipContentProps, E as ElTooltip } from './index-S-yJffF9.mjs';
import { t as tagProps, E as ElTag } from './index-3Hd0ipYT.mjs';
import { C as ClickOutside } from './index-Ud8N-GPr.mjs';
import { E as ElDivider } from './divider-PhlLqhAq.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { v as vLoading } from './loading-9ZJxhv9k.mjs';
import { regionData, codeToText } from 'element-china-area-data';
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
import 'pinia-plugin-persistedstate';
import 'currency.js';
import 'gsap';
import '@imengyu/vue3-context-menu';
import '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@ctrl/tinycolor';
import './vnode-YsXVLyOk.mjs';
import './focus-trap-FUoXuQZs.mjs';
import '@vue/reactivity';
import 'async-validator';
import './objects-HNc5gIZI.mjs';

const isLeaf = (el) => !el.getAttribute("aria-owns");
const getSibling = (el, distance, elClass) => {
  const { parentNode } = el;
  if (!parentNode)
    return null;
  const siblings = parentNode.querySelectorAll(elClass);
  const index = Array.prototype.indexOf.call(siblings, el);
  return siblings[index + distance] || null;
};
const focusNode = (el) => {
  if (!el)
    return;
  el.focus();
  !isLeaf(el) && el.click();
};
var NodeContent = defineComponent({
  name: "NodeContent",
  setup() {
    const ns = useNamespace("cascader-node");
    return {
      ns
    };
  },
  render() {
    const { ns } = this;
    const { node, panel } = this.$parent;
    const { data, label } = node;
    const { renderLabelFn } = panel;
    return h("span", { class: ns.e("label") }, renderLabelFn ? renderLabelFn({ node, data }) : label);
  }
});
const CASCADER_PANEL_INJECTION_KEY = Symbol();
const _sfc_main$5 = defineComponent({
  name: "ElCascaderNode",
  components: {
    ElCheckbox,
    ElRadio,
    NodeContent,
    ElIcon,
    Check: check_default,
    Loading: loading_default,
    ArrowRight: arrow_right_default
  },
  props: {
    node: {
      type: Object,
      required: true
    },
    menuId: String
  },
  emits: ["expand"],
  setup(props, { emit }) {
    const panel = inject(CASCADER_PANEL_INJECTION_KEY);
    const ns = useNamespace("cascader-node");
    const isHoverMenu = computed(() => panel.isHoverMenu);
    const multiple = computed(() => panel.config.multiple);
    const checkStrictly = computed(() => panel.config.checkStrictly);
    const checkedNodeId = computed(() => {
      var _a;
      return (_a = panel.checkedNodes[0]) == null ? void 0 : _a.uid;
    });
    const isDisabled = computed(() => props.node.isDisabled);
    const isLeaf2 = computed(() => props.node.isLeaf);
    const expandable = computed(() => checkStrictly.value && !isLeaf2.value || !isDisabled.value);
    const inExpandingPath = computed(() => isInPath(panel.expandingNode));
    const inCheckedPath = computed(() => checkStrictly.value && panel.checkedNodes.some(isInPath));
    const isInPath = (node) => {
      var _a;
      const { level, uid: uid2 } = props.node;
      return ((_a = node == null ? void 0 : node.pathNodes[level - 1]) == null ? void 0 : _a.uid) === uid2;
    };
    const doExpand = () => {
      if (inExpandingPath.value)
        return;
      panel.expandNode(props.node);
    };
    const doCheck = (checked) => {
      const { node } = props;
      if (checked === node.checked)
        return;
      panel.handleCheckChange(node, checked);
    };
    const doLoad = () => {
      panel.lazyLoad(props.node, () => {
        if (!isLeaf2.value)
          doExpand();
      });
    };
    const handleHoverExpand = (e) => {
      if (!isHoverMenu.value)
        return;
      handleExpand();
      !isLeaf2.value && emit("expand", e);
    };
    const handleExpand = () => {
      const { node } = props;
      if (!expandable.value || node.loading)
        return;
      node.loaded ? doExpand() : doLoad();
    };
    const handleClick = () => {
      if (isHoverMenu.value && !isLeaf2.value)
        return;
      if (isLeaf2.value && !isDisabled.value && !checkStrictly.value && !multiple.value) {
        handleCheck(true);
      } else {
        handleExpand();
      }
    };
    const handleSelectCheck = (checked) => {
      if (checkStrictly.value) {
        doCheck(checked);
        if (props.node.loaded) {
          doExpand();
        }
      } else {
        handleCheck(checked);
      }
    };
    const handleCheck = (checked) => {
      if (!props.node.loaded) {
        doLoad();
      } else {
        doCheck(checked);
        !checkStrictly.value && doExpand();
      }
    };
    return {
      panel,
      isHoverMenu,
      multiple,
      checkStrictly,
      checkedNodeId,
      isDisabled,
      isLeaf: isLeaf2,
      expandable,
      inExpandingPath,
      inCheckedPath,
      ns,
      handleHoverExpand,
      handleExpand,
      handleClick,
      handleCheck,
      handleSelectCheck
    };
  }
});
const _hoisted_1$1 = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("span", null, null, -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_check = resolveComponent("check");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_node_content = resolveComponent("node-content");
  const _component_loading = resolveComponent("loading");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("li", {
    id: `${_ctx.menuId}-${_ctx.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !_ctx.isLeaf,
    "aria-owns": _ctx.isLeaf ? null : _ctx.menuId,
    "aria-expanded": _ctx.inExpandingPath,
    tabindex: _ctx.expandable ? -1 : void 0,
    class: normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.is("selectable", _ctx.checkStrictly),
      _ctx.ns.is("active", _ctx.node.checked),
      _ctx.ns.is("disabled", !_ctx.expandable),
      _ctx.inExpandingPath && "in-active-path",
      _ctx.inCheckedPath && "in-checked-path"
    ]),
    onMouseenter: _cache[2] || (_cache[2] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleHoverExpand && _ctx.handleHoverExpand(...args)),
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    createCommentVNode(" prefix "),
    _ctx.multiple ? (openBlock(), createBlock(_component_el_checkbox, {
      key: 0,
      "model-value": _ctx.node.checked,
      indeterminate: _ctx.node.indeterminate,
      disabled: _ctx.isDisabled,
      onClick: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["stop"])),
      "onUpdate:modelValue": _ctx.handleSelectCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : _ctx.checkStrictly ? (openBlock(), createBlock(_component_el_radio, {
      key: 1,
      "model-value": _ctx.checkedNodeId,
      label: _ctx.node.uid,
      disabled: _ctx.isDisabled,
      "onUpdate:modelValue": _ctx.handleSelectCheck,
      onClick: _cache[1] || (_cache[1] = withModifiers(() => {
      }, ["stop"]))
    }, {
      default: withCtx(() => [
        createCommentVNode("\n        Add an empty element to avoid render label,\n        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485\n      "),
        _hoisted_2$1
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : _ctx.isLeaf && _ctx.node.checked ? (openBlock(), createBlock(_component_el_icon, {
      key: 2,
      class: normalizeClass(_ctx.ns.e("prefix"))
    }, {
      default: withCtx(() => [
        createVNode(_component_check)
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("v-if", true),
    createCommentVNode(" content "),
    createVNode(_component_node_content),
    createCommentVNode(" postfix "),
    !_ctx.isLeaf ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      _ctx.node.loading ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: normalizeClass([_ctx.ns.is("loading"), _ctx.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(_component_loading)
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(_component_el_icon, {
        key: 1,
        class: normalizeClass(["arrow-right", _ctx.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(_component_arrow_right)
        ]),
        _: 1
      }, 8, ["class"]))
    ], 64)) : createCommentVNode("v-if", true)
  ], 42, _hoisted_1$1);
}
var ElCascaderNode = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$2], ["__file", "node.vue"]]);
const _sfc_main$4 = defineComponent({
  name: "ElCascaderMenu",
  components: {
    Loading: loading_default,
    ElIcon,
    ElScrollbar,
    ElCascaderNode
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const ns = useNamespace("cascader-menu");
    const { t } = useLocale();
    const id = generateId();
    let activeNode = null;
    let hoverTimer = null;
    const panel = inject(CASCADER_PANEL_INJECTION_KEY);
    const hoverZone = ref(null);
    const isEmpty2 = computed(() => !props.nodes.length);
    const isLoading = computed(() => !panel.initialLoaded);
    const menuId = computed(() => `cascader-menu-${id}-${props.index}`);
    const handleExpand = (e) => {
      activeNode = e.target;
    };
    const handleMouseMove = (e) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value)
        return;
      if (activeNode.contains(e.target)) {
        clearHoverTimer();
        const el = instance.vnode.el;
        const { left } = el.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = el;
        const startX = e.clientX - left;
        const top = activeNode.offsetTop;
        const bottom = top + activeNode.offsetHeight;
        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!hoverTimer) {
        hoverTimer = (void 0).setTimeout(clearHoverZone, panel.config.hoverThreshold);
      }
    };
    const clearHoverTimer = () => {
      if (!hoverTimer)
        return;
      clearTimeout(hoverTimer);
      hoverTimer = null;
    };
    const clearHoverZone = () => {
      if (!hoverZone.value)
        return;
      hoverZone.value.innerHTML = "";
      clearHoverTimer();
    };
    return {
      ns,
      panel,
      hoverZone,
      isEmpty: isEmpty2,
      isLoading,
      menuId,
      t,
      handleExpand,
      handleMouseMove,
      clearHoverZone
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_node = resolveComponent("el-cascader-node");
  const _component_loading = resolveComponent("loading");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(_component_el_scrollbar, {
    key: _ctx.menuId,
    tag: "ul",
    role: "menu",
    class: normalizeClass(_ctx.ns.b()),
    "wrap-class": _ctx.ns.e("wrap"),
    "view-class": [_ctx.ns.e("list"), _ctx.ns.is("empty", _ctx.isEmpty)],
    onMousemove: _ctx.handleMouseMove,
    onMouseleave: _ctx.clearHoverZone
  }, {
    default: withCtx(() => {
      var _a;
      return [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.nodes, (node) => {
          return openBlock(), createBlock(_component_el_cascader_node, {
            key: node.uid,
            node,
            "menu-id": _ctx.menuId,
            onExpand: _ctx.handleExpand
          }, null, 8, ["node", "menu-id", "onExpand"]);
        }), 128)),
        _ctx.isLoading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.ns.e("empty-text"))
        }, [
          createVNode(_component_el_icon, {
            size: "14",
            class: normalizeClass(_ctx.ns.is("loading"))
          }, {
            default: withCtx(() => [
              createVNode(_component_loading)
            ]),
            _: 1
          }, 8, ["class"]),
          createTextVNode(" " + toDisplayString(_ctx.t("el.cascader.loading")), 1)
        ], 2)) : _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.ns.e("empty-text"))
        }, toDisplayString(_ctx.t("el.cascader.noData")), 3)) : ((_a = _ctx.panel) == null ? void 0 : _a.isHoverMenu) ? (openBlock(), createElementBlock("svg", {
          key: 2,
          ref: "hoverZone",
          class: normalizeClass(_ctx.ns.e("hover-zone"))
        }, null, 2)) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
  }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var ElCascaderMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$1], ["__file", "menu.vue"]]);
let uid = 0;
const calculatePathNodes = (node) => {
  const nodes = [node];
  let { parent } = node;
  while (parent) {
    nodes.unshift(parent);
    parent = parent.parent;
  }
  return nodes;
};
class Node {
  constructor(data, config, parent, root = false) {
    this.data = data;
    this.config = config;
    this.parent = parent;
    this.root = root;
    this.uid = uid++;
    this.checked = false;
    this.indeterminate = false;
    this.loading = false;
    const { value: valueKey, label: labelKey, children: childrenKey } = config;
    const childrenData = data[childrenKey];
    const pathNodes = calculatePathNodes(this);
    this.level = root ? 0 : parent ? parent.level + 1 : 1;
    this.value = data[valueKey];
    this.label = data[labelKey];
    this.pathNodes = pathNodes;
    this.pathValues = pathNodes.map((node) => node.value);
    this.pathLabels = pathNodes.map((node) => node.label);
    this.childrenData = childrenData;
    this.children = (childrenData || []).map((child) => new Node(child, config, this));
    this.loaded = !config.lazy || this.isLeaf || !isEmpty(childrenData);
  }
  get isDisabled() {
    const { data, parent, config } = this;
    const { disabled, checkStrictly } = config;
    const isDisabled = isFunction(disabled) ? disabled(data, this) : !!data[disabled];
    return isDisabled || !checkStrictly && (parent == null ? void 0 : parent.isDisabled);
  }
  get isLeaf() {
    const { data, config, childrenData, loaded } = this;
    const { lazy, leaf } = config;
    const isLeaf2 = isFunction(leaf) ? leaf(data, this) : data[leaf];
    return isUndefined(isLeaf2) ? lazy && !loaded ? false : !(Array.isArray(childrenData) && childrenData.length) : !!isLeaf2;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(childData) {
    const { childrenData, children } = this;
    const node = new Node(childData, this.config, this);
    if (Array.isArray(childrenData)) {
      childrenData.push(childData);
    } else {
      this.childrenData = [childData];
    }
    children.push(node);
    return node;
  }
  calcText(allLevels, separator) {
    const text = allLevels ? this.pathLabels.join(separator) : this.label;
    this.text = text;
    return text;
  }
  broadcast(event, ...args) {
    const handlerName = `onParent${capitalize(event)}`;
    this.children.forEach((child) => {
      if (child) {
        child.broadcast(event, ...args);
        child[handlerName] && child[handlerName](...args);
      }
    });
  }
  emit(event, ...args) {
    const { parent } = this;
    const handlerName = `onChild${capitalize(event)}`;
    if (parent) {
      parent[handlerName] && parent[handlerName](...args);
      parent.emit(event, ...args);
    }
  }
  onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  }
  onChildCheck() {
    const { children } = this;
    const validChildren = children.filter((child) => !child.isDisabled);
    const checked = validChildren.length ? validChildren.every((child) => child.checked) : false;
    this.setCheckState(checked);
  }
  setCheckState(checked) {
    const totalNum = this.children.length;
    const checkedNum = this.children.reduce((c, p) => {
      const num = p.checked ? 1 : p.indeterminate ? 0.5 : 0;
      return c + num;
    }, 0);
    this.checked = this.loaded && this.children.filter((child) => !child.isDisabled).every((child) => child.loaded && child.checked) && checked;
    this.indeterminate = this.loaded && checkedNum !== totalNum && checkedNum > 0;
  }
  doCheck(checked) {
    if (this.checked === checked)
      return;
    const { checkStrictly, multiple } = this.config;
    if (checkStrictly || !multiple) {
      this.checked = checked;
    } else {
      this.broadcast("check", checked);
      this.setCheckState(checked);
      this.emit("check");
    }
  }
}
const flatNodes = (nodes, leafOnly) => {
  return nodes.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};
class Store {
  constructor(data, config) {
    this.config = config;
    const nodes = (data || []).map((nodeData) => new Node(nodeData, this.config));
    this.nodes = nodes;
    this.allNodes = flatNodes(nodes, false);
    this.leafNodes = flatNodes(nodes, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(leafOnly) {
    return leafOnly ? this.leafNodes : this.allNodes;
  }
  appendNode(nodeData, parentNode) {
    const node = parentNode ? parentNode.appendChild(nodeData) : new Node(nodeData, this.config);
    if (!parentNode)
      this.nodes.push(node);
    this.allNodes.push(node);
    node.isLeaf && this.leafNodes.push(node);
  }
  appendNodes(nodeDataList, parentNode) {
    nodeDataList.forEach((nodeData) => this.appendNode(nodeData, parentNode));
  }
  getNodeByValue(value, leafOnly = false) {
    if (!value && value !== 0)
      return null;
    const node = this.getFlattedNodes(leafOnly).find((node2) => isEqual(node2.value, value) || isEqual(node2.pathValues, value));
    return node || null;
  }
  getSameNode(node) {
    if (!node)
      return null;
    const node_ = this.getFlattedNodes(false).find(({ value, level }) => isEqual(node.value, value) && node.level === level);
    return node_ || null;
  }
}
const CommonProps = buildProps({
  modelValue: {
    type: definePropType([Number, String, Array])
  },
  options: {
    type: definePropType(Array),
    default: () => []
  },
  props: {
    type: definePropType(Object),
    default: () => ({})
  }
});
const DefaultProps = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: NOOP,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
const useCascaderConfig = (props) => {
  return computed(() => ({
    ...DefaultProps,
    ...props.props
  }));
};
const getMenuIndex = (el) => {
  if (!el)
    return 0;
  const pieces = el.id.split("-");
  return Number(pieces[pieces.length - 2]);
};
const checkNode = (el) => {
  if (!el)
    return;
  const input = el.querySelector("input");
  if (input) {
    input.click();
  } else if (isLeaf(el)) {
    el.click();
  }
};
const sortByOriginalOrder = (oldNodes, newNodes) => {
  const newNodesCopy = newNodes.slice(0);
  const newIds = newNodesCopy.map((node) => node.uid);
  const res = oldNodes.reduce((acc, item) => {
    const index = newIds.indexOf(item.uid);
    if (index > -1) {
      acc.push(item);
      newNodesCopy.splice(index, 1);
      newIds.splice(index, 1);
    }
    return acc;
  }, []);
  res.push(...newNodesCopy);
  return res;
};
const _sfc_main$3 = defineComponent({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu
  },
  props: {
    ...CommonProps,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, "close", "expand-change"],
  setup(props, { emit, slots }) {
    let manualChecked = false;
    const ns = useNamespace("cascader");
    const config = useCascaderConfig(props);
    let store = null;
    const initialLoaded = ref(true);
    const menuList = ref([]);
    const checkedValue = ref(null);
    const menus = ref([]);
    const expandingNode = ref(null);
    const checkedNodes = ref([]);
    const isHoverMenu = computed(() => config.value.expandTrigger === "hover");
    const renderLabelFn = computed(() => props.renderLabel || slots.default);
    const initStore = () => {
      const { options } = props;
      const cfg = config.value;
      manualChecked = false;
      store = new Store(options, cfg);
      menus.value = [store.getNodes()];
      if (cfg.lazy && isEmpty(props.options)) {
        initialLoaded.value = false;
        lazyLoad(void 0, (list) => {
          if (list) {
            store = new Store(list, cfg);
            menus.value = [store.getNodes()];
          }
          initialLoaded.value = true;
          syncCheckedValue(false, true);
        });
      } else {
        syncCheckedValue(false, true);
      }
    };
    const lazyLoad = (node, cb) => {
      const cfg = config.value;
      node = node || new Node({}, cfg, void 0, true);
      node.loading = true;
      const resolve = (dataList) => {
        const _node = node;
        const parent = _node.root ? null : _node;
        dataList && (store == null ? void 0 : store.appendNodes(dataList, parent));
        _node.loading = false;
        _node.loaded = true;
        _node.childrenData = _node.childrenData || [];
        cb && cb(dataList);
      };
      cfg.lazyLoad(node, resolve);
    };
    const expandNode = (node, silent) => {
      var _a;
      const { level } = node;
      const newMenus = menus.value.slice(0, level);
      let newExpandingNode;
      if (node.isLeaf) {
        newExpandingNode = node.pathNodes[level - 2];
      } else {
        newExpandingNode = node;
        newMenus.push(node.children);
      }
      if (((_a = expandingNode.value) == null ? void 0 : _a.uid) !== (newExpandingNode == null ? void 0 : newExpandingNode.uid)) {
        expandingNode.value = node;
        menus.value = newMenus;
        !silent && emit("expand-change", (node == null ? void 0 : node.pathValues) || []);
      }
    };
    const handleCheckChange = (node, checked, emitClose = true) => {
      const { checkStrictly, multiple } = config.value;
      const oldNode = checkedNodes.value[0];
      manualChecked = true;
      !multiple && (oldNode == null ? void 0 : oldNode.doCheck(false));
      node.doCheck(checked);
      calculateCheckedValue();
      emitClose && !multiple && !checkStrictly && emit("close");
      !emitClose && !multiple && !checkStrictly && expandParentNode(node);
    };
    const expandParentNode = (node) => {
      if (!node)
        return;
      node = node.parent;
      expandParentNode(node);
      node && expandNode(node);
    };
    const getFlattedNodes = (leafOnly) => {
      return store == null ? void 0 : store.getFlattedNodes(leafOnly);
    };
    const getCheckedNodes = (leafOnly) => {
      var _a;
      return (_a = getFlattedNodes(leafOnly)) == null ? void 0 : _a.filter((node) => node.checked !== false);
    };
    const clearCheckedNodes = () => {
      checkedNodes.value.forEach((node) => node.doCheck(false));
      calculateCheckedValue();
      menus.value = menus.value.slice(0, 1);
      expandingNode.value = null;
      emit("expand-change", []);
    };
    const calculateCheckedValue = () => {
      var _a;
      const { checkStrictly, multiple } = config.value;
      const oldNodes = checkedNodes.value;
      const newNodes = getCheckedNodes(!checkStrictly);
      const nodes = sortByOriginalOrder(oldNodes, newNodes);
      const values = nodes.map((node) => node.valueByOption);
      checkedNodes.value = nodes;
      checkedValue.value = multiple ? values : (_a = values[0]) != null ? _a : null;
    };
    const syncCheckedValue = (loaded = false, forced = false) => {
      const { modelValue } = props;
      const { lazy, multiple, checkStrictly } = config.value;
      const leafOnly = !checkStrictly;
      if (!initialLoaded.value || manualChecked || !forced && isEqual(modelValue, checkedValue.value))
        return;
      if (lazy && !loaded) {
        const values = unique(flattenDeep(castArray(modelValue)));
        const nodes = values.map((val) => store == null ? void 0 : store.getNodeByValue(val)).filter((node) => !!node && !node.loaded && !node.loading);
        if (nodes.length) {
          nodes.forEach((node) => {
            lazyLoad(node, () => syncCheckedValue(false, forced));
          });
        } else {
          syncCheckedValue(true, forced);
        }
      } else {
        const values = multiple ? castArray(modelValue) : [modelValue];
        const nodes = unique(values.map((val) => store == null ? void 0 : store.getNodeByValue(val, leafOnly)));
        syncMenuState(nodes, forced);
        checkedValue.value = cloneDeep(modelValue);
      }
    };
    const syncMenuState = (newCheckedNodes, reserveExpandingState = true) => {
      const { checkStrictly } = config.value;
      const oldNodes = checkedNodes.value;
      const newNodes = newCheckedNodes.filter((node) => !!node && (checkStrictly || node.isLeaf));
      const oldExpandingNode = store == null ? void 0 : store.getSameNode(expandingNode.value);
      const newExpandingNode = reserveExpandingState && oldExpandingNode || newNodes[0];
      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach((node) => expandNode(node, true));
      } else {
        expandingNode.value = null;
      }
      oldNodes.forEach((node) => node.doCheck(false));
      if (props.props.multiple) {
        reactive(newNodes).forEach((node) => node.doCheck(true));
      } else {
        newNodes.forEach((node) => node.doCheck(true));
      }
      checkedNodes.value = newNodes;
      nextTick(scrollToExpandingNode);
    };
    const scrollToExpandingNode = () => {
      return;
    };
    const handleKeyDown = (e) => {
      const target = e.target;
      const { code } = e;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          e.preventDefault();
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${ns.b("node")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.left: {
          e.preventDefault();
          const preMenu = menuList.value[getMenuIndex(target) - 1];
          const expandedNode = preMenu == null ? void 0 : preMenu.$el.querySelector(`.${ns.b("node")}[aria-expanded="true"]`);
          focusNode(expandedNode);
          break;
        }
        case EVENT_CODE.right: {
          e.preventDefault();
          const nextMenu = menuList.value[getMenuIndex(target) + 1];
          const firstNode = nextMenu == null ? void 0 : nextMenu.$el.querySelector(`.${ns.b("node")}[tabindex="-1"]`);
          focusNode(firstNode);
          break;
        }
        case EVENT_CODE.enter:
          checkNode(target);
          break;
      }
    };
    provide(CASCADER_PANEL_INJECTION_KEY, reactive({
      config,
      expandingNode,
      checkedNodes,
      isHoverMenu,
      initialLoaded,
      renderLabelFn,
      lazyLoad,
      expandNode,
      handleCheckChange
    }));
    watch([config, () => props.options], initStore, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, () => {
      manualChecked = false;
      syncCheckedValue();
    }, {
      deep: true
    });
    watch(() => checkedValue.value, (val) => {
      if (!isEqual(val, props.modelValue)) {
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
      }
    });
    return {
      ns,
      menuList,
      menus,
      checkedNodes,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      getCheckedNodes,
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_cascader_menu = resolveComponent("el-cascader-menu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("panel"), _ctx.ns.is("bordered", _ctx.border)]),
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeyDown && _ctx.handleKeyDown(...args))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.menus, (menu, index) => {
      return openBlock(), createBlock(_component_el_cascader_menu, {
        key: index,
        ref_for: true,
        ref: (item) => _ctx.menuList[index] = item,
        index,
        nodes: [...menu]
      }, null, 8, ["index", "nodes"]);
    }), 128))
  ], 34);
}
var CascaderPanel = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render], ["__file", "index.vue"]]);
CascaderPanel.install = (app) => {
  app.component(CascaderPanel.name, CascaderPanel);
};
const _CascaderPanel = CascaderPanel;
const cascaderProps = buildProps({
  ...CommonProps,
  size: useSizeProp,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: definePropType(Function),
    default: (node, keyword) => node.text.includes(keyword)
  },
  separator: {
    type: String,
    default: " / "
  },
  showAllLevels: {
    type: Boolean,
    default: true
  },
  collapseTags: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  collapseTagsTooltip: {
    type: Boolean,
    default: false
  },
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: {
    type: definePropType(Function),
    default: () => true
  },
  popperClass: {
    type: String,
    default: ""
  },
  teleported: useTooltipContentProps.teleported,
  tagType: { ...tagProps.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const cascaderEmits = {
  [UPDATE_MODEL_EVENT]: (val) => !!val || val === null,
  [CHANGE_EVENT]: (val) => !!val || val === null,
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  visibleChange: (val) => isBoolean(val),
  expandChange: (val) => !!val,
  removeTag: (val) => !!val
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["placeholder", "onKeydown"];
const _hoisted_3 = ["onClick"];
const COMPONENT_NAME = "ElCascader";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: cascaderProps,
  emits: cascaderEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const popperOptions = {
      modifiers: [
        {
          name: "arrowPosition",
          enabled: true,
          phase: "main",
          fn: ({ state }) => {
            const { modifiersData, placement } = state;
            if (["right", "left", "bottom", "top"].includes(placement))
              return;
            modifiersData.arrow.x = 35;
          },
          requires: ["arrow"]
        }
      ]
    };
    const attrs = useAttrs();
    let inputInitialHeight = 0;
    let pressDeleteCount = 0;
    const nsCascader = useNamespace("cascader");
    const nsInput = useNamespace("input");
    const { t } = useLocale();
    const { form, formItem } = useFormItem();
    const tooltipRef = ref(null);
    const input = ref(null);
    const tagWrapper = ref(null);
    const cascaderPanelRef = ref(null);
    const suggestionPanel = ref(null);
    const popperVisible = ref(false);
    const inputHover = ref(false);
    const filtering = ref(false);
    const filterFocus = ref(false);
    const inputValue = ref("");
    const searchInputValue = ref("");
    const presentTags = ref([]);
    const allPresentTags = ref([]);
    const suggestions = ref([]);
    const isOnComposition = ref(false);
    const cascaderStyle = computed(() => {
      return attrs.style;
    });
    const isDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
    const inputPlaceholder = computed(() => props.placeholder || t("el.cascader.placeholder"));
    const currentPlaceholder = computed(() => searchInputValue.value || presentTags.value.length > 0 || isOnComposition.value ? "" : inputPlaceholder.value);
    const realSize = useFormSize();
    const tagSize = computed(() => ["small"].includes(realSize.value) ? "small" : "default");
    const multiple = computed(() => !!props.props.multiple);
    const readonly = computed(() => !props.filterable || multiple.value);
    const searchKeyword = computed(() => multiple.value ? searchInputValue.value : inputValue.value);
    const checkedNodes = computed(() => {
      var _a;
      return ((_a = cascaderPanelRef.value) == null ? void 0 : _a.checkedNodes) || [];
    });
    const clearBtnVisible = computed(() => {
      if (!props.clearable || isDisabled.value || filtering.value || !inputHover.value)
        return false;
      return !!checkedNodes.value.length;
    });
    const presentText = computed(() => {
      const { showAllLevels, separator } = props;
      const nodes = checkedNodes.value;
      return nodes.length ? multiple.value ? "" : nodes[0].calcText(showAllLevels, separator) : "";
    });
    const checkedValue = computed({
      get() {
        return cloneDeep(props.modelValue);
      },
      set(val) {
        emit(UPDATE_MODEL_EVENT, val);
        emit(CHANGE_EVENT, val);
        if (props.validateEvent) {
          formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
        }
      }
    });
    const cascaderKls = computed(() => {
      return [
        nsCascader.b(),
        nsCascader.m(realSize.value),
        nsCascader.is("disabled", isDisabled.value),
        attrs.class
      ];
    });
    const cascaderIconKls = computed(() => {
      return [
        nsInput.e("icon"),
        "icon-arrow-down",
        nsCascader.is("reverse", popperVisible.value)
      ];
    });
    const inputClass = computed(() => {
      return nsCascader.is("focus", popperVisible.value || filterFocus.value);
    });
    const contentRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const togglePopperVisible = (visible) => {
      var _a, _b, _c;
      if (isDisabled.value)
        return;
      visible = visible != null ? visible : !popperVisible.value;
      if (visible !== popperVisible.value) {
        popperVisible.value = visible;
        (_b = (_a = input.value) == null ? void 0 : _a.input) == null ? void 0 : _b.setAttribute("aria-expanded", `${visible}`);
        if (visible) {
          updatePopperPosition();
          nextTick((_c = cascaderPanelRef.value) == null ? void 0 : _c.scrollToExpandingNode);
        } else if (props.filterable) {
          syncPresentTextValue();
        }
        emit("visibleChange", visible);
      }
    };
    const updatePopperPosition = () => {
      nextTick(() => {
        var _a;
        (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper();
      });
    };
    const hideSuggestionPanel = () => {
      filtering.value = false;
    };
    const genTag = (node) => {
      const { showAllLevels, separator } = props;
      return {
        node,
        key: node.uid,
        text: node.calcText(showAllLevels, separator),
        hitState: false,
        closable: !isDisabled.value && !node.isDisabled,
        isCollapseTag: false
      };
    };
    const deleteTag = (tag) => {
      var _a;
      const node = tag.node;
      node.doCheck(false);
      (_a = cascaderPanelRef.value) == null ? void 0 : _a.calculateCheckedValue();
      emit("removeTag", node.valueByOption);
    };
    const calculatePresentTags = () => {
      if (!multiple.value)
        return;
      const nodes = checkedNodes.value;
      const tags = [];
      const allTags = [];
      nodes.forEach((node) => allTags.push(genTag(node)));
      allPresentTags.value = allTags;
      if (nodes.length) {
        nodes.slice(0, props.maxCollapseTags).forEach((node) => tags.push(genTag(node)));
        const rest = nodes.slice(props.maxCollapseTags);
        const restCount = rest.length;
        if (restCount) {
          if (props.collapseTags) {
            tags.push({
              key: -1,
              text: `+ ${restCount}`,
              closable: false,
              isCollapseTag: true
            });
          } else {
            rest.forEach((node) => tags.push(genTag(node)));
          }
        }
      }
      presentTags.value = tags;
    };
    const calculateSuggestions = () => {
      var _a, _b;
      const { filterMethod, showAllLevels, separator } = props;
      const res = (_b = (_a = cascaderPanelRef.value) == null ? void 0 : _a.getFlattedNodes(!props.props.checkStrictly)) == null ? void 0 : _b.filter((node) => {
        if (node.isDisabled)
          return false;
        node.calcText(showAllLevels, separator);
        return filterMethod(node, searchKeyword.value);
      });
      if (multiple.value) {
        presentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
        allPresentTags.value.forEach((tag) => {
          tag.hitState = false;
        });
      }
      filtering.value = true;
      suggestions.value = res;
      updatePopperPosition();
    };
    const focusFirstNode = () => {
      var _a;
      let firstNode;
      if (filtering.value && suggestionPanel.value) {
        firstNode = suggestionPanel.value.$el.querySelector(`.${nsCascader.e("suggestion-item")}`);
      } else {
        firstNode = (_a = cascaderPanelRef.value) == null ? void 0 : _a.$el.querySelector(`.${nsCascader.b("node")}[tabindex="-1"]`);
      }
      if (firstNode) {
        firstNode.focus();
        !filtering.value && firstNode.click();
      }
    };
    const updateStyle = () => {
      var _a, _b;
      (_a = input.value) == null ? void 0 : _a.input;
      tagWrapper.value;
      (_b = suggestionPanel.value) == null ? void 0 : _b.$el;
      return;
    };
    const getCheckedNodes = (leafOnly) => {
      var _a;
      return (_a = cascaderPanelRef.value) == null ? void 0 : _a.getCheckedNodes(leafOnly);
    };
    const handleExpandChange = (value) => {
      updatePopperPosition();
      emit("expandChange", value);
    };
    const handleComposition = (event) => {
      var _a;
      const text = (_a = event.target) == null ? void 0 : _a.value;
      if (event.type === "compositionend") {
        isOnComposition.value = false;
        nextTick(() => handleInput(text));
      } else {
        const lastCharacter = text[text.length - 1] || "";
        isOnComposition.value = !isKorean(lastCharacter);
      }
    };
    const handleKeyDown = (e) => {
      if (isOnComposition.value)
        return;
      switch (e.code) {
        case EVENT_CODE.enter:
          togglePopperVisible();
          break;
        case EVENT_CODE.down:
          togglePopperVisible(true);
          nextTick(focusFirstNode);
          e.preventDefault();
          break;
        case EVENT_CODE.esc:
          if (popperVisible.value === true) {
            e.preventDefault();
            e.stopPropagation();
            togglePopperVisible(false);
          }
          break;
        case EVENT_CODE.tab:
          togglePopperVisible(false);
          break;
      }
    };
    const handleClear = () => {
      var _a;
      (_a = cascaderPanelRef.value) == null ? void 0 : _a.clearCheckedNodes();
      if (!popperVisible.value && props.filterable) {
        syncPresentTextValue();
      }
      togglePopperVisible(false);
    };
    const syncPresentTextValue = () => {
      const { value } = presentText;
      inputValue.value = value;
      searchInputValue.value = value;
    };
    const handleSuggestionClick = (node) => {
      var _a, _b;
      const { checked } = node;
      if (multiple.value) {
        (_a = cascaderPanelRef.value) == null ? void 0 : _a.handleCheckChange(node, !checked, false);
      } else {
        !checked && ((_b = cascaderPanelRef.value) == null ? void 0 : _b.handleCheckChange(node, true, false));
        togglePopperVisible(false);
      }
    };
    const handleSuggestionKeyDown = (e) => {
      const target = e.target;
      const { code } = e;
      switch (code) {
        case EVENT_CODE.up:
        case EVENT_CODE.down: {
          const distance = code === EVENT_CODE.up ? -1 : 1;
          focusNode(getSibling(target, distance, `.${nsCascader.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case EVENT_CODE.enter:
          target.click();
          break;
      }
    };
    const handleDelete = () => {
      const tags = presentTags.value;
      const lastTag = tags[tags.length - 1];
      pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1;
      if (!lastTag || !pressDeleteCount || props.collapseTags && tags.length > 1)
        return;
      if (lastTag.hitState) {
        deleteTag(lastTag);
      } else {
        lastTag.hitState = true;
      }
    };
    const handleFocus = (e) => {
      const el = e.target;
      const name = nsCascader.e("search-input");
      if (el.className === name) {
        filterFocus.value = true;
      }
      emit("focus", e);
    };
    const handleBlur = (e) => {
      filterFocus.value = false;
      emit("blur", e);
    };
    const handleFilter = debounce(() => {
      const { value } = searchKeyword;
      if (!value)
        return;
      const passed = props.beforeFilter(value);
      if (isPromise(passed)) {
        passed.then(calculateSuggestions).catch(() => {
        });
      } else if (passed !== false) {
        calculateSuggestions();
      } else {
        hideSuggestionPanel();
      }
    }, props.debounce);
    const handleInput = (val, e) => {
      !popperVisible.value && togglePopperVisible(true);
      if (e == null ? void 0 : e.isComposing)
        return;
      val ? handleFilter() : hideSuggestionPanel();
    };
    const getInputInnerHeight = (inputInner) => Number.parseFloat(useCssVar(nsInput.cssVarName("input-height"), inputInner).value) - 2;
    watch(filtering, updatePopperPosition);
    watch([checkedNodes, isDisabled], calculatePresentTags);
    watch(presentTags, () => {
      nextTick(() => updateStyle());
    });
    watch(realSize, async () => {
      await nextTick();
      const inputInner = input.value.input;
      inputInitialHeight = getInputInnerHeight(inputInner) || inputInitialHeight;
      updateStyle();
    });
    watch(presentText, syncPresentTextValue, { immediate: true });
    expose({
      getCheckedNodes,
      cascaderPanelRef,
      togglePopperVisible,
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), {
        ref_key: "tooltipRef",
        ref: tooltipRef,
        visible: popperVisible.value,
        teleported: _ctx.teleported,
        "popper-class": [unref(nsCascader).e("dropdown"), _ctx.popperClass],
        "popper-options": popperOptions,
        "fallback-placements": [
          "bottom-start",
          "bottom",
          "top-start",
          "top",
          "right",
          "left"
        ],
        "stop-popper-mouse-event": false,
        "gpu-acceleration": false,
        placement: "bottom-start",
        transition: `${unref(nsCascader).namespace.value}-zoom-in-top`,
        effect: "light",
        pure: "",
        persistent: "",
        onHide: hideSuggestionPanel
      }, {
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass(unref(cascaderKls)),
            style: normalizeStyle(unref(cascaderStyle)),
            onClick: _cache[5] || (_cache[5] = () => togglePopperVisible(unref(readonly) ? void 0 : true)),
            onKeydown: handleKeyDown,
            onMouseenter: _cache[6] || (_cache[6] = ($event) => inputHover.value = true),
            onMouseleave: _cache[7] || (_cache[7] = ($event) => inputHover.value = false)
          }, [
            createVNode(unref(ElInput), {
              ref_key: "input",
              ref: input,
              modelValue: inputValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputValue.value = $event),
              placeholder: unref(currentPlaceholder),
              readonly: unref(readonly),
              disabled: unref(isDisabled),
              "validate-event": false,
              size: unref(realSize),
              class: normalizeClass(unref(inputClass)),
              tabindex: unref(multiple) && _ctx.filterable && !unref(isDisabled) ? -1 : void 0,
              onCompositionstart: handleComposition,
              onCompositionupdate: handleComposition,
              onCompositionend: handleComposition,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onInput: handleInput
            }, {
              suffix: withCtx(() => [
                unref(clearBtnVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: "clear",
                  class: normalizeClass([unref(nsInput).e("icon"), "icon-circle-close"]),
                  onClick: withModifiers(handleClear, ["stop"])
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : (openBlock(), createBlock(unref(ElIcon), {
                  key: "arrow-down",
                  class: normalizeClass(unref(cascaderIconKls)),
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => togglePopperVisible(), ["stop"]))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(arrow_down_default))
                  ]),
                  _: 1
                }, 8, ["class"]))
              ]),
              _: 1
            }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "tabindex"]),
            unref(multiple) ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "tagWrapper",
              ref: tagWrapper,
              class: normalizeClass(unref(nsCascader).e("tags"))
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(presentTags.value, (tag) => {
                return openBlock(), createBlock(unref(ElTag), {
                  key: tag.key,
                  type: _ctx.tagType,
                  size: unref(tagSize),
                  hit: tag.hitState,
                  closable: tag.closable,
                  "disable-transitions": "",
                  onClose: ($event) => deleteTag(tag)
                }, {
                  default: withCtx(() => [
                    tag.isCollapseTag === false ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(tag.text), 1)) : (openBlock(), createBlock(unref(ElTooltip), {
                      key: 1,
                      disabled: popperVisible.value || !_ctx.collapseTagsTooltip,
                      "fallback-placements": ["bottom", "top", "right", "left"],
                      placement: "bottom",
                      effect: "light"
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", null, toDisplayString(tag.text), 1)
                      ]),
                      content: withCtx(() => [
                        createElementVNode("div", {
                          class: normalizeClass(unref(nsCascader).e("collapse-tags"))
                        }, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(allPresentTags.value.slice(_ctx.maxCollapseTags), (tag2, idx) => {
                            return openBlock(), createElementBlock("div", {
                              key: idx,
                              class: normalizeClass(unref(nsCascader).e("collapse-tag"))
                            }, [
                              (openBlock(), createBlock(unref(ElTag), {
                                key: tag2.key,
                                class: "in-tooltip",
                                type: _ctx.tagType,
                                size: unref(tagSize),
                                hit: tag2.hitState,
                                closable: tag2.closable,
                                "disable-transitions": "",
                                onClose: ($event) => deleteTag(tag2)
                              }, {
                                default: withCtx(() => [
                                  createElementVNode("span", null, toDisplayString(tag2.text), 1)
                                ]),
                                _: 2
                              }, 1032, ["type", "size", "hit", "closable", "onClose"]))
                            ], 2);
                          }), 128))
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["disabled"]))
                  ]),
                  _: 2
                }, 1032, ["type", "size", "hit", "closable", "onClose"]);
              }), 128)),
              _ctx.filterable && !unref(isDisabled) ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchInputValue.value = $event),
                type: "text",
                class: normalizeClass(unref(nsCascader).e("search-input")),
                placeholder: unref(presentText) ? "" : unref(inputPlaceholder),
                onInput: _cache[3] || (_cache[3] = (e) => handleInput(searchInputValue.value, e)),
                onClick: _cache[4] || (_cache[4] = withModifiers(($event) => togglePopperVisible(true), ["stop"])),
                onKeydown: withKeys(handleDelete, ["delete"]),
                onCompositionstart: handleComposition,
                onCompositionupdate: handleComposition,
                onCompositionend: handleComposition,
                onFocus: handleFocus,
                onBlur: handleBlur
              }, null, 42, _hoisted_2)), [
                [vModelText, searchInputValue.value]
              ]) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ], 38)), [
            [unref(ClickOutside), () => togglePopperVisible(false), unref(contentRef)]
          ])
        ]),
        content: withCtx(() => [
          withDirectives(createVNode(unref(_CascaderPanel), {
            ref_key: "cascaderPanelRef",
            ref: cascaderPanelRef,
            modelValue: unref(checkedValue),
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(checkedValue) ? checkedValue.value = $event : null),
            options: _ctx.options,
            props: props.props,
            border: false,
            "render-label": _ctx.$slots.default,
            onExpandChange: handleExpandChange,
            onClose: _cache[9] || (_cache[9] = ($event) => _ctx.$nextTick(() => togglePopperVisible(false)))
          }, null, 8, ["modelValue", "options", "props", "render-label"]), [
            [vShow, !filtering.value]
          ]),
          _ctx.filterable ? withDirectives((openBlock(), createBlock(unref(ElScrollbar), {
            key: 0,
            ref_key: "suggestionPanel",
            ref: suggestionPanel,
            tag: "ul",
            class: normalizeClass(unref(nsCascader).e("suggestion-panel")),
            "view-class": unref(nsCascader).e("suggestion-list"),
            onKeydown: handleSuggestionKeyDown
          }, {
            default: withCtx(() => [
              suggestions.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(suggestions.value, (item) => {
                return openBlock(), createElementBlock("li", {
                  key: item.uid,
                  class: normalizeClass([
                    unref(nsCascader).e("suggestion-item"),
                    unref(nsCascader).is("checked", item.checked)
                  ]),
                  tabindex: -1,
                  onClick: ($event) => handleSuggestionClick(item)
                }, [
                  createElementVNode("span", null, toDisplayString(item.text), 1),
                  item.checked ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(unref(check_default))
                    ]),
                    _: 1
                  })) : createCommentVNode("v-if", true)
                ], 10, _hoisted_3);
              }), 128)) : renderSlot(_ctx.$slots, "empty", { key: 1 }, () => [
                createElementVNode("li", {
                  class: normalizeClass(unref(nsCascader).e("empty-text"))
                }, toDisplayString(unref(t)("el.cascader.noMatch")), 3)
              ])
            ]),
            _: 3
          }, 8, ["class", "view-class"])), [
            [vShow, filtering.value]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["visible", "teleported", "popper-class", "transition"]);
    };
  }
});
var Cascader = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__file", "cascader.vue"]]);
Cascader.install = (app) => {
  app.component(Cascader.name, Cascader);
};
const _Cascader = Cascader;
const ElCascader = _Cascader;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddressBox",
  __ssrInlineRender: true,
  props: {
    address: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tag = ElTag;
      _push(`<div${ssrRenderAttrs(mergeProps({
        key: _ctx.address.id,
        "hover:border": "solid [var(--el-color-primary)]",
        "hover:shadow": "lg var(--el-color-primary)",
        class: "group",
        relative: "",
        flex: "",
        "flex-col": "",
        "cursor-pointer": "",
        "border-2px": "",
        "rounded-6px": "",
        "rounded-8px": "",
        "p-2": "",
        "leading-1.2em": "",
        "opacity-90": "",
        "shadow-sm": "",
        "transition-300": "",
        "border-default": "",
        "md:p-4": "",
        "dark:hover:border-gray-5": ""
      }, _attrs))}><div w-full flex-row-c-c justify-start border-0 border-b-2px pb-2 font-600 border-default-dashed><p>${ssrInterpolate(_ctx.address.name)}</p>`);
      if (_ctx.address.isDefault && _ctx.address.isDefault === 1) {
        _push(ssrRenderComponent(_component_el_tag, {
          class: "absolute right-3",
          plain: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span flex${_scopeId}> \u9ED8\u8BA4 <span hidden md:block${_scopeId}> \u5730\u5740 </span></span>`);
            } else {
              return [createVNode("span", {
                flex: ""
              }, [createTextVNode(" \u9ED8\u8BA4 "), createVNode("span", {
                hidden: "",
                "md:block": ""
              }, " \u5730\u5740 ")])];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><small pt-2>${ssrInterpolate(_ctx.address.phone)}</small><div mt-1 opacity-80><small pr-1>${ssrInterpolate(_ctx.address.province)}</small><small pr-1>${ssrInterpolate(_ctx.address.city)}</small><small pr-1>${ssrInterpolate(_ctx.address.county)}</small></div><small class="truncate">${ssrInterpolate(_ctx.address.address)}</small><small>\u90AE\u7F16:${ssrInterpolate(_ctx.address.postalCode)}</small><div class="btns mt-a w-1/1 flex-row-bt-c">`);
      ssrRenderSlot(_ctx.$slots, "btns", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card/AddressBox.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "address",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: `\u6536\u8D27\u5730\u5740 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`,
      meta: [{
        name: "description",
        content: `\u6536\u8D27\u5730\u5740 - \u4E2A\u4EBA\u4E2D\u5FC3 - ${appName}`
      }]
    });
    const user = useUserStore();
    const address2 = useAddressStore();
    address2.resetRequestList(user.getToken);
    const form = reactive({
      name: "",
      phone: "",
      province: "",
      city: "",
      county: "",
      address: "",
      isDefault: 0,
      postalCode: ""
    });
    const addressRef = ref();
    const activeAddresId = ref("");
    const isLoading = ref(false);
    const isLoadingAll = ref(false);
    const isEdit = ref(false);
    const isUpdate = ref(false);
    const isShow = ref(false);
    const selectAll = ref(false);
    const regionDatas = ref(regionData);
    const selectAddressOption = ref([]);
    const selectAddress = ref([]);
    function onReqAddress(formRef) {
      formRef == null ? void 0 : formRef.validate(async (valid) => {
        if (form.province === "" || form.city === "" || form.county === "")
          return ElMessage.warning("\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A\uFF01");
        if (valid && user.getToken) {
          let data;
          if (isUpdate.value) {
            data = await updateAddressById(activeAddresId.value, {
              ...form
            }, user.getToken);
          } else {
            data = await addAddressByDTO({
              ...form
            }, user.getToken);
          }
          const msg = isUpdate.value ? "\u66F4\u65B0" : "\u6DFB\u52A0";
          if (data.code === StatusCode.SUCCESS) {
            ElMessage.success(`${msg}\u6210\u529F\uFF01`);
            if (isUpdate.value)
              await address2.resetRequestList(user.getToken);
            else
              await address2.resetRequestList(user.getToken);
          } else {
            ElMessage.error(`${msg}\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01`);
          }
          isUpdate.value = false;
          isLoading.value = false;
          isShow.value = false;
        } else {
          ElMessage.closeAll();
          return false;
        }
      }).catch(() => {
        return false;
      });
    }
    watch(selectAddressOption, (val) => {
      form.province = codeToText[val[0]];
      form.city = codeToText[val[1]];
      form.county = codeToText[val[2]];
      form.postalCode = val[2];
    });
    watch(selectAll, (val) => {
      selectAddress.value.splice(0);
      if (val)
        selectAddress.value.push(...address2.addressList.map((p) => p.id));
    });
    async function refreshData() {
      isLoadingAll.value = true;
      const res = await address2.resetRequestList(user.getToken);
      if (res)
        ElMessage.success("\u5237\u65B0\u6210\u529F\uFF01\u{1F389}");
      else
        ElMessage.error("\u5237\u65B0\u5931\u8D25\uFF01\u{1F625}");
      setTimeout(() => {
        isLoadingAll.value = false;
      }, 400);
    }
    function showUpdate(p) {
      isShow.value = true;
      isUpdate.value = true;
      form.name = p.name;
      form.phone = p.phone;
      form.isDefault = Boolean(p.isDefault);
      form.province = p.province;
      form.city = p.city;
      form.county = p.county;
      form.postalCode = p.postalCode;
      form.address = p.address;
      activeAddresId.value = p.id;
    }
    async function deleteAddress(id) {
      ElMessageBox().then(async (res) => {
        if (res === "confirm") {
          const {
            code
          } = await deleteAddressById(id, user.getToken);
          if (code === StatusCode.SUCCESS) {
            for (let i = 0; i < address2.addressList.length; i++) {
              if (address2.addressList[i].id === id) {
                address2.addressList.splice(i, 1);
                break;
              }
            }
            ElMessage.success("\u5220\u9664\u6210\u529F\uFF01");
          } else {
            ElMessage.error("\u5220\u9664\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u8BD5\u770B\uFF01");
          }
        }
      }).catch();
    }
    async function deleteAddressByIds() {
      ElMessageBox.confirm(`\u662F\u5426\u5220\u9664\u9009\u4E2D${selectAddress.value.length}\u6761?`, {
        confirmButtonText: "\u786E\u8BA4",
        cancelButtonText: "\u53D6\u6D88",
        type: "warning",
        lockScroll: false
      }).then(async (e) => {
        if (e === "confirm") {
          const {
            code
          } = await deleteBatchAddressByIds([...selectAddress.value], user.getToken);
          ElMessage.closeAll();
          if (code === StatusCode.SUCCESS) {
            for (let i = 0; i < address2.addressList.length; i++) {
              if (selectAddress.value.includes(address2.addressList[i].id)) {
                address2.addressList.splice(i, 1);
                break;
              }
            }
            ElMessage.success("\u5220\u9664\u6210\u529F\uFF01");
          } else {
            ElMessage.error("\u5220\u9664\u5931\u8D25\uFF01");
          }
        }
      }).catch(() => {
      });
    }
    function showAdd() {
      isShow.value = true;
      form.name = "";
      form.province = "";
      form.city = "";
      form.county = "";
      form.phone = "";
      form.isDefault = 0;
      isUpdate.value = false;
    }
    const rules = reactive({
      name: [{
        required: true,
        message: "\u6536\u8D27\u4EBA\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }, {
        min: 2,
        max: 10,
        message: "\u957F\u5EA6\u57282-10\u4E2A\u5B57\u7B26\uFF01",
        trigger: "change"
      }],
      address: [{
        required: true,
        message: "\u6536\u8D27\u4EBA\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }, {
        min: 3,
        max: 25,
        message: "\u957F\u5EA6\u57283-25\u4E2A\u5B57\u7B26\uFF01",
        trigger: "change"
      }],
      phone: [{
        required: true,
        message: "\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }, {
        pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/,
        message: "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E\uFF01",
        trigger: "change"
      }],
      province: [{
        required: true,
        message: "\u7701\u4EFD\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }],
      city: [{
        required: true,
        message: "\u57CE\u5E02\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }],
      county: [{
        required: true,
        message: "\u533A\u53BF\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }],
      isDefault: [{
        required: true,
        message: "\u662F\u5426\u9ED8\u8BA4\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }],
      postalCode: [{
        required: true,
        message: "\u90AE\u653F\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        trigger: "blur"
      }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_el_text = ElText;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_el_dialog = ElDialog;
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_cascader = ElCascader;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_button = ElButton;
      const _component_ElDivider = ElDivider;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_ElIconCirclePlusFilled = circle_plus_filled_default;
      const _component_CardAddressBox = _sfc_main$1;
      const _directive_loading = vLoading;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9f4ff97b>`);
      _push(ssrRenderComponent(_component_NuxtLayout, {
        name: "user",
        menu: ["back"],
        footer: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-a layout-default" data-v-9f4ff97b${_scopeId}><div class="animate__animated flex-row-bt-c animate-fade-in-down animate-duration-400" my-3 data-v-9f4ff97b${_scopeId}><h2 tracking-1 data-v-9f4ff97b${_scopeId}> \u6536\u8D27\u5730\u5740 </h2><div class="ml-a flex cursor-pointer items-center justify-end" data-v-9f4ff97b${_scopeId}><i class="i-solar:refresh-circle-line-duotone mr-4 inline-block bg-green-5 p-3 transition-300 hover:rotate-180 hover:scale-120 hover:text-[var(--el-color-success)]" data-v-9f4ff97b${_scopeId}></i>`);
            _push2(ssrRenderComponent(_component_el_text, {
              plain: "",
              class: "cursor-pointer select-none transition-300 hover:text-[var(--el-color-success)]",
              type: unref(isEdit) ? "danger" : "info",
              onClick: ($event) => isEdit.value = !unref(isEdit)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(isEdit) ? "\u53D6\u6D88" : "\u7BA1\u7406")}`);
                } else {
                  return [createTextVNode(toDisplayString(unref(isEdit) ? "\u53D6\u6D88" : "\u7BA1\u7406"), 1)];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(unref(isEdit) ? null : {
              display: "none"
            })}" class="fixed bottom-0 z-20 m-0 flex-row-bt-c border-1px rounded-t-10px bg-light-1 p-0 p-4 shadow border-default dark:bg-dark-5 dark:bg-dark-6" w-90vw overflow-hidden md:w-90vw data-v-9f4ff97b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_checkbox, {
              modelValue: unref(selectAll),
              "onUpdate:modelValue": ($event) => isRef(selectAll) ? selectAll.value = $event : null,
              label: "\u5168\u9009"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_button, {
              type: "danger",
              size: "large",
              class: "shadow-md border-default-dashed",
              loading: unref(isLoading),
              onClick: ($event) => unref(selectAddress).length ? deleteAddressByIds() : ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5220\u9664\u9009\u4E2D `);
                } else {
                  return [createTextVNode(" \u5220\u9664\u9009\u4E2D ")];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [createVNode("div", {
              class: "mx-a layout-default"
            }, [createVNode("div", {
              class: "animate__animated flex-row-bt-c animate-fade-in-down animate-duration-400",
              "my-3": ""
            }, [createVNode("h2", {
              "tracking-1": ""
            }, " \u6536\u8D27\u5730\u5740 "), createVNode("div", {
              class: "ml-a flex cursor-pointer items-center justify-end"
            }, [createVNode("i", {
              class: "i-solar:refresh-circle-line-duotone mr-4 inline-block bg-green-5 p-3 transition-300 hover:rotate-180 hover:scale-120 hover:text-[var(--el-color-success)]",
              onClick: refreshData
            }), createVNode(_component_el_text, {
              plain: "",
              class: "cursor-pointer select-none transition-300 hover:text-[var(--el-color-success)]",
              type: unref(isEdit) ? "danger" : "info",
              onClick: ($event) => isEdit.value = !unref(isEdit)
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(unref(isEdit) ? "\u53D6\u6D88" : "\u7BA1\u7406"), 1)]),
              _: 1
            }, 8, ["type", "onClick"])])]), createVNode(_component_ClientOnly, null, {
              default: withCtx(() => [unref(user).isLogin ? (openBlock(), createBlock("div", {
                key: 0,
                class: "animate-[fade-in_.6s_ease] rounded-3 p-6 border-default v-card",
                onKeyup: withKeys(($event) => isEdit.value = false, ["esc"])
              }, [(openBlock(), createBlock(Teleport, {
                to: "body"
              }, [createVNode(_component_el_dialog, {
                modelValue: unref(isShow),
                "onUpdate:modelValue": ($event) => isRef(isShow) ? isShow.value = $event : null,
                style: {
                  "width": "400px",
                  "padding": "0 20px"
                },
                "show-close": true
              }, {
                default: withCtx(() => [withDirectives((openBlock(), createBlock(_component_el_form, {
                  ref_key: "addressRef",
                  ref: addressRef,
                  "label-position": "top",
                  "hide-required-asterisk": "",
                  rules: unref(rules),
                  model: unref(form),
                  class: "animate__animated form",
                  onSubmit: withModifiers(onReqAddress, ["prevent"])
                }, {
                  default: withCtx(() => [createVNode("h2", {
                    "mb-5": "",
                    "tracking-0.2em": ""
                  }, toDisplayString(unref(isUpdate) ? "\u4FEE\u6539\u5730\u5740" : "\u6DFB\u52A0\u5730\u5740"), 1), createVNode(_component_el_form_item, {
                    label: "\u6536\u8D27\u4EBA",
                    prop: "name",
                    class: "animated pb-2"
                  }, {
                    default: withCtx(() => [createVNode(_component_el_input, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      modelModifiers: {
                        trim: true
                      },
                      "prefix-icon": "user",
                      size: "large",
                      placeholder: "\u8BF7\u8F93\u51652-10\u5B57\u59D3\u540D"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                    _: 1
                  }), createVNode(_component_el_form_item, {
                    label: "\u624B\u673A\u53F7",
                    prop: "phone",
                    class: "animated pb-2"
                  }, {
                    default: withCtx(() => [createVNode(_component_el_input, {
                      modelValue: unref(form).phone,
                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                      modelModifiers: {
                        trim: true
                      },
                      "prefix-icon": "phone",
                      size: "large",
                      placeholder: "\u624B\u673A\u53F7"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                    _: 1
                  }), createVNode(_component_el_form_item, {
                    required: "",
                    label: "\u5730\u5740"
                  }, {
                    default: withCtx(() => [createVNode(_component_el_cascader, {
                      modelValue: unref(selectAddressOption),
                      "onUpdate:modelValue": ($event) => isRef(selectAddressOption) ? selectAddressOption.value = $event : null,
                      style: {
                        "width": "100%"
                      },
                      size: "large",
                      placeholder: unref(form).province ? `${unref(form).province} / ${unref(form).city} / ${unref(form).county}` : "\u9009\u62E9\u5730\u5740",
                      options: unref(regionDatas)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "options"])]),
                    _: 1
                  }), createVNode(_component_el_form_item, {
                    label: "\u8BE6\u7EC6\u5730\u5740",
                    prop: "address",
                    class: "animated pb-2"
                  }, {
                    default: withCtx(() => [createVNode(_component_el_input, {
                      modelValue: unref(form).address,
                      "onUpdate:modelValue": ($event) => unref(form).address = $event,
                      modelModifiers: {
                        trim: true
                      },
                      "prefix-icon": "location",
                      size: "large",
                      placeholder: "\u8BE6\u7EC6\u5730\u5740"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                    _: 1
                  }), createVNode(_component_el_form_item, {
                    prop: "isDefault",
                    class: "animated",
                    "flex-row-c-c": ""
                  }, {
                    default: withCtx(() => [createVNode(_component_el_checkbox, {
                      modelValue: unref(form).isDefault,
                      "onUpdate:modelValue": ($event) => unref(form).isDefault = $event,
                      label: "\u662F\u5426\u9ED8\u8BA4",
                      size: "large"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
                    _: 1
                  }), createVNode(_component_el_form_item, {
                    "mt-1em": ""
                  }, {
                    default: withCtx(() => [createVNode(_component_el_button, {
                      type: unref(isUpdate) ? "info" : "primary",
                      "flex-1": "",
                      size: "large",
                      class: "button",
                      onClick: ($event) => onReqAddress(unref(addressRef))
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(isUpdate) ? "\u66F4 \u65B0" : "\u6DFB \u52A0"), 1)]),
                      _: 1
                    }, 8, ["type", "onClick"])]),
                    _: 1
                  })]),
                  _: 1
                }, 8, ["rules", "model"])), [[_directive_loading, unref(isLoading), void 0, {
                  fullscreen: true
                }]])]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"])])), withDirectives((openBlock(), createBlock("div", {
                class: "address"
              }, [createVNode(_component_ElDivider), createVNode(_component_ClientOnly, {
                "fallback-tag": "div",
                class: "list"
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                  modelValue: unref(selectAddress),
                  "onUpdate:modelValue": ($event) => isRef(selectAddress) ? selectAddress.value = $event : null,
                  disabled: !unref(isEdit)
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [withDirectives((openBlock(), createBlock("div", {
                      class: "relative",
                      grid: "~ cols-1 md:cols-5 gap-4 md:gap-4 "
                    }, [(openBlock(), createBlock("div", {
                      key: 2030303,
                      "min-h-180px": "",
                      class: "group flex-row-c-c flex-col cursor-pointer select-none border-2px rounded-8px op-40 opacity-80 transition-300 hover:scale-98 border-default-dashed group-hover:opacity-80",
                      "hover:border": " solid dark-4",
                      "dark:hover:border-gray-5": "",
                      onClick: showAdd
                    }, [createVNode(_component_ElIconCirclePlusFilled, {
                      "text-dark-2": "",
                      class: "h-4rem w-4rem transition-300"
                    }), createVNode("p", {
                      "mt-2": "",
                      "transition-300": ""
                    }, " \u6DFB\u52A0\u65B0\u5730\u5740 ")])), (openBlock(true), createBlock(Fragment, null, renderList((_a = unref(address2)) == null ? void 0 : _a.addressList, (p) => {
                      return openBlock(), createBlock(_component_el_checkbox, {
                        key: p.id,
                        disabled: !unref(isEdit),
                        label: p.id
                      }, {
                        default: withCtx(() => [createVNode(_component_CardAddressBox, {
                          address: p,
                          class: "check-item min-h-180px w-full p-6 text-black dark:text-white"
                        }, {
                          btns: withCtx(() => [createVNode("span", {
                            class: "i-solar:pen-2-bold-duotone ml-a mr-2 p-2 p-3 opacity-100 transition-300 hover:scale-110 dark:bg-light hover:bg-[var(--el-color-info)] md:opacity-0 md:group-hover:opacity-80",
                            onClick: ($event) => showUpdate(p)
                          }, null, 8, ["onClick"]), createVNode("span", {
                            class: "i-solar:trash-bin-minimalistic-bold-duotone p-2 p-3 opacity-100 transition-300 hover:scale-110 dark:bg-light hover:bg-red-6 md:opacity-0 md:group-hover:opacity-80",
                            onClick: ($event) => deleteAddress(p.id)
                          }, null, 8, ["onClick"])]),
                          _: 2
                        }, 1032, ["address"])]),
                        _: 2
                      }, 1032, ["disabled", "label"]);
                    }), 128))])), [[_directive_auto_animate, {
                      duration: 300,
                      easing: "cubic-bezier(0.61, 0.225, 0.195, 1.3)"
                    }]])];
                  }),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "disabled"])]),
                _: 1
              })])), [[_directive_loading, unref(isLoadingAll), void 0, {
                fullscreen: true
              }]])], 40, ["onKeyup"])) : createCommentVNode("", true)]),
              _: 1
            }), createVNode(Transition, {
              name: "popup"
            }, {
              default: withCtx(() => [withDirectives(createVNode("div", {
                class: "fixed bottom-0 z-20 m-0 flex-row-bt-c border-1px rounded-t-10px bg-light-1 p-0 p-4 shadow border-default dark:bg-dark-5 dark:bg-dark-6",
                "w-90vw": "",
                "overflow-hidden": "",
                "md:w-90vw": ""
              }, [createVNode(_component_el_checkbox, {
                modelValue: unref(selectAll),
                "onUpdate:modelValue": ($event) => isRef(selectAll) ? selectAll.value = $event : null,
                label: "\u5168\u9009"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), createVNode(_component_el_button, {
                type: "danger",
                size: "large",
                class: "shadow-md border-default-dashed",
                loading: unref(isLoading),
                onClick: ($event) => unref(selectAddress).length ? deleteAddressByIds() : ""
              }, {
                default: withCtx(() => [createTextVNode(" \u5220\u9664\u9009\u4E2D ")]),
                _: 1
              }, 8, ["loading", "onClick"])], 512), [[vShow, unref(isEdit)]])]),
              _: 1
            })])];
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/address.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const address = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f4ff97b"]]);

export { address as default };
//# sourceMappingURL=address-J48HZfLH.mjs.map
