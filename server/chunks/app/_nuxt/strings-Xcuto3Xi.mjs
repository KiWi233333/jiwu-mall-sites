import { capitalize as capitalize$1 } from '@vue/shared';

const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const capitalize = (str) => capitalize$1(str);

export { capitalize as c, escapeStringRegexp as e };
//# sourceMappingURL=strings-Xcuto3Xi.mjs.map
