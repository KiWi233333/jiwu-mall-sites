import { E as ElTabs, a as ElTabPane } from './tab-pane-G1YGUFAr.mjs';
import { b as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, resolveDynamicComponent, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import __nuxt_component_2$1 from './PostList-Wuy5b0GJ.mjs';
import GoodsList from './GoodsList-jFkO4WGn.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CategoryTabs",
  __ssrInlineRender: true,
  props: {
    categoryId: {}
  },
  setup(__props) {
    const props = __props;
    const activeMenu = ref("community");
    const menuList = [
      {
        name: "community",
        label: "\u793E\u533A",
        dto: {
          cid: props.categoryId
        },
        lcomponent: __nuxt_component_2$1,
        lClass: "grid grid-gap-6 "
      },
      {
        name: "goods",
        label: "\u5546\u54C1",
        dto: {},
        lcomponent: GoodsList,
        lClass: "grid grid-cols-2 grid-gap-4 md:grid-gap-6 md:grid-cols-4"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      _push(ssrRenderComponent(_component_el_tabs, mergeProps({
        modelValue: unref(activeMenu),
        "onUpdate:modelValue": ($event) => isRef(activeMenu) ? activeMenu.value = $event : null,
        "tab-position": "top"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(menuList, (p) => {
              _push2(ssrRenderComponent(_component_el_tab_pane, {
                key: p.name,
                class: "mt-4 px-1",
                name: p.name,
                lazy: ""
              }, {
                label: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="group flex-row-c-c" data-v-331862e5${_scopeId2}>`);
                    if (p.icon) {
                      _push3(`<i class="${ssrRenderClass([p.icon, "icon inline-block h-1em w-0 overflow-hidden transition-200 transition-all group-hover:w-1em"])}" data-v-331862e5${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(` ${ssrInterpolate(p.label)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "group flex-row-c-c" }, [
                        p.icon ? (openBlock(), createBlock("i", {
                          key: 0,
                          class: [p.icon, "icon inline-block h-1em w-0 overflow-hidden transition-200 transition-all group-hover:w-1em"]
                        }, null, 2)) : createCommentVNode("", true),
                        createTextVNode(" " + toDisplayString(p.label), 1)
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (p.lcomponent) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(p.lcomponent), {
                        dto: p.dto,
                        class: p.lClass || "grid grid-gap-6"
                      }, null), _parent3, _scopeId2);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      p.lcomponent ? (openBlock(), createBlock(resolveDynamicComponent(p.lcomponent), {
                        key: 0,
                        dto: p.dto,
                        class: p.lClass || "grid grid-gap-6"
                      }, null, 8, ["dto", "class"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(menuList, (p) => {
                return createVNode(_component_el_tab_pane, {
                  key: p.name,
                  class: "mt-4 px-1",
                  name: p.name,
                  lazy: ""
                }, {
                  label: withCtx(() => [
                    createVNode("div", { class: "group flex-row-c-c" }, [
                      p.icon ? (openBlock(), createBlock("i", {
                        key: 0,
                        class: [p.icon, "icon inline-block h-1em w-0 overflow-hidden transition-200 transition-all group-hover:w-1em"]
                      }, null, 2)) : createCommentVNode("", true),
                      createTextVNode(" " + toDisplayString(p.label), 1)
                    ])
                  ]),
                  default: withCtx(() => [
                    p.lcomponent ? (openBlock(), createBlock(resolveDynamicComponent(p.lcomponent), {
                      key: 0,
                      dto: p.dto,
                      class: p.lClass || "grid grid-gap-6"
                    }, null, 8, ["dto", "class"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["name"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comm/CategoryTabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-331862e5"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=CategoryTabs-Cr4Xfgye.mjs.map
