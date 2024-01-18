import { get, set } from 'lodash-unified';

const keysOf = (arr) => Object.keys(arr);
const entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};

export { entriesOf as e, getProp as g, keysOf as k };
//# sourceMappingURL=objects-HNc5gIZI.mjs.map
