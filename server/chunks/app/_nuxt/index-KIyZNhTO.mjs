import { isVNode } from 'vue';
import { h as buildProps, O as iconPropType, z as definePropType, aq as withInstallFunction } from '../server.mjs';

const notificationTypes = [
  "success",
  "info",
  "warning",
  "error"
];
buildProps({
  customClass: {
    type: String,
    default: ""
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 4500
  },
  icon: {
    type: iconPropType
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: definePropType([String, Object]),
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  onClick: {
    type: definePropType(Function),
    default: () => void 0
  },
  onClose: {
    type: definePropType(Function),
    required: true
  },
  position: {
    type: String,
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
    default: "top-right"
  },
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: [...notificationTypes, ""],
    default: ""
  },
  zIndex: Number
});
const notifications = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
};
const notify = function(options = {}, context = null) {
  return { close: () => void 0 };
};
notificationTypes.forEach((type) => {
  notify[type] = (options = {}) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options
      };
    }
    return notify({
      ...options,
      type
    });
  };
});
function closeAll() {
  for (const orientedNotifications of Object.values(notifications)) {
    orientedNotifications.forEach(({ vm }) => {
      vm.component.exposed.visible.value = false;
    });
  }
}
notify.closeAll = closeAll;
notify._context = null;
const ElNotification = withInstallFunction(notify, "$notify");

export { ElNotification as E };
//# sourceMappingURL=index-KIyZNhTO.mjs.map
