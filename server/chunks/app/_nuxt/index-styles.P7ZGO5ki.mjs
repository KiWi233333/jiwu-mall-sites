const _switch = "/* Element Chalk Variables */\n.el-switch {\n  --el-switch-on-color: var(--el-color-primary);\n  --el-switch-off-color: var(--el-border-color);\n}\n\n.el-switch {\n  align-items: center;\n  display: inline-flex;\n  font-size: 14px;\n  height: 32px;\n  line-height: 20px;\n  position: relative;\n  vertical-align: middle;\n}\n.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label {\n  cursor: not-allowed;\n}\n\n.el-switch__label {\n  color: var(--el-text-color-primary);\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 500;\n  height: 20px;\n  transition: var(--el-transition-duration-fast);\n  vertical-align: middle;\n}\n.el-switch__label.is-active {\n  color: var(--el-color-primary);\n}\n\n.el-switch__label--left {\n  margin-right: 10px;\n}\n\n.el-switch__label--right {\n  margin-left: 10px;\n}\n\n.el-switch__label * {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 1;\n}\n.el-switch__label .el-icon {\n  height: inherit;\n}\n.el-switch__label .el-icon svg {\n  vertical-align: middle;\n}\n\n.el-switch__input {\n  height: 0;\n  margin: 0;\n  opacity: 0;\n  position: absolute;\n  width: 0;\n}\n.el-switch__input:focus-visible~.el-switch__core {\n  outline: 2px solid var(--el-switch-on-color);\n  outline-offset: 1px;\n}\n\n.el-switch__core {\n  align-items: center;\n  background: var(--el-switch-off-color);\n  border: 1px solid var(--el-switch-border-color, var(--el-switch-off-color));\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-flex;\n  height: 20px;\n  min-width: 40px;\n  outline: none;\n  position: relative;\n  transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration);\n}\n.el-switch__core .el-switch__inner {\n  align-items: center;\n  display: flex;\n  height: 16px;\n  justify-content: center;\n  overflow: hidden;\n  padding: 0 4px 0 18px;\n  transition: all var(--el-transition-duration);\n  width: 100%;\n}\n.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text {\n  color: var(--el-color-white);\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n}\n.el-switch__core .el-switch__action {\n  align-items: center;\n  background-color: var(--el-color-white);\n  border-radius: var(--el-border-radius-circle);\n  color: var(--el-switch-off-color);\n  display: flex;\n  height: 16px;\n  justify-content: center;\n  left: 1px;\n  position: absolute;\n  transition: all var(--el-transition-duration);\n  width: 16px;\n}\n\n.el-switch.is-checked .el-switch__core {\n  background-color: var(--el-switch-on-color);\n  border-color: var(--el-switch-border-color, var(--el-switch-on-color));\n}\n.el-switch.is-checked .el-switch__core .el-switch__action {\n  color: var(--el-switch-on-color);\n  left: calc(100% - 17px);\n}\n.el-switch.is-checked .el-switch__core .el-switch__inner {\n  padding: 0 18px 0 4px;\n}\n\n.el-switch.is-disabled {\n  opacity: .6;\n}\n\n.el-switch--wide .el-switch__label.el-switch__label--left span {\n  left: 10px;\n}\n.el-switch--wide .el-switch__label.el-switch__label--right span {\n  right: 10px;\n}\n\n.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active {\n  opacity: 0;\n}\n.el-switch--large {\n  font-size: 14px;\n  height: 40px;\n  line-height: 24px;\n}\n.el-switch--large .el-switch__label {\n  font-size: 14px;\n  height: 24px;\n}\n.el-switch--large .el-switch__label * {\n  font-size: 14px;\n}\n\n.el-switch--large .el-switch__core {\n  border-radius: 12px;\n  height: 24px;\n  min-width: 50px;\n}\n.el-switch--large .el-switch__core .el-switch__inner {\n  height: 20px;\n  padding: 0 6px 0 22px;\n}\n.el-switch--large .el-switch__core .el-switch__action {\n  height: 20px;\n  width: 20px;\n}\n\n.el-switch--large.is-checked .el-switch__core .el-switch__action {\n  left: calc(100% - 21px);\n}\n.el-switch--large.is-checked .el-switch__core .el-switch__inner {\n  padding: 0 22px 0 6px;\n}\n\n.el-switch--small {\n  font-size: 12px;\n  height: 24px;\n  line-height: 16px;\n}\n.el-switch--small .el-switch__label {\n  font-size: 12px;\n  height: 16px;\n}\n.el-switch--small .el-switch__label * {\n  font-size: 12px;\n}\n\n.el-switch--small .el-switch__core {\n  border-radius: 8px;\n  height: 16px;\n  min-width: 30px;\n}\n.el-switch--small .el-switch__core .el-switch__inner {\n  height: 12px;\n  padding: 0 2px 0 14px;\n}\n.el-switch--small .el-switch__core .el-switch__action {\n  height: 12px;\n  width: 12px;\n}\n\n.el-switch--small.is-checked .el-switch__core .el-switch__action {\n  left: calc(100% - 13px);\n}\n.el-switch--small.is-checked .el-switch__core .el-switch__inner {\n  padding: 0 14px 0 2px;\n}";

const index_vue_vue_type_style_index_0_scoped_3825e78f_lang = "/* Element Chalk Variables */\n.inputs[data-v-3825e78f] {\n  -webkit-user-select:none;user-select:none;opacity:0.8;transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;;\n}.group:hover .inputs[data-v-3825e78f]{opacity:1;}\n[data-v-3825e78f] .el-radio-group.inputs {\n  border: 1px solid hsla(0,0%,49%,.2);\n  border-radius: 1rem;\n}\n[data-v-3825e78f] .el-radio-group.inputs .el-radio-button__inner {\n  border: none;\n  border-radius: 1rem;\n  width: 100%;\n}\n[data-v-3825e78f] .el-select {\n  position: relative;\n  z-index: 99;\n}\n[data-v-3825e78f] .el-select .el-input__wrapper {\n  border-radius: 1rem;\n}\n[data-v-3825e78f] .el-select .el-popper.el-select__popper {\n  border-radius: 1rem;\n  overflow: hidden;\n}\n[data-v-3825e78f] .el-select .el-input__inner {\n  padding-left: .5rem;\n}";

const indexStyles_P7ZGO5ki = [_switch, index_vue_vue_type_style_index_0_scoped_3825e78f_lang, index_vue_vue_type_style_index_0_scoped_3825e78f_lang];

export { indexStyles_P7ZGO5ki as default };
//# sourceMappingURL=index-styles.P7ZGO5ki.mjs.map
