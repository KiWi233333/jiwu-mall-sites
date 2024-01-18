globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import http, { Server as Server$1 } from 'node:http';
import https, { Server } from 'node:https';
import { promises, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';
import { promises as promises$1 } from 'node:fs';
import { fileURLToPath } from 'node:url';

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.at(-1) === '"' && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}
const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol ? parsed.protocol + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    // @ts-ignore
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode !== void 0) {
      node = nextNode;
    } else {
      node = node.placeholderChildNode;
      if (node !== null) {
        params[node.paramName] = section;
        paramsFound = true;
      } else {
        break;
      }
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections[sections.length - 1];
    node.data = null;
    if (Object.keys(node.children).length === 0) {
      const parentNode = node.parent;
      parentNode.children.delete(lastSection);
      parentNode.wildcardChildNode = null;
      parentNode.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table);
}
function _createMatcher(table) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table) {
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path.startsWith(key)) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        table.static.set(path, node.data);
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$1(this, "statusCode", 500);
    __publicField$1(this, "fatal", false);
    __publicField$1(this, "unhandled", false);
    __publicField$1(this, "statusMessage");
    __publicField$1(this, "data");
    __publicField$1(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$1(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  return event.web?.request?.body || event._requestBody || new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return void 0;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  const cookieStr = serialize(name, value, {
    path: "/",
    ...serializeOptions
  });
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && !cookieValue.startsWith(name + "=");
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function deleteCookie(event, name, serializeOptions) {
  setCookie(event, name, "", {
    ...serializeOptions,
    maxAge: 0
  });
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    return Object.assign(handler, { __is_handler__: true });
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  return Object.assign(_handler, { __is_handler__: true });
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler = r.default || r;
        if (typeof handler !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler
          );
        }
        _resolved = toEventHandler(r.default || r);
        return _resolved;
      });
    }
    return _promise;
  };
  return eventHandler((event) => {
    if (_resolved) {
      return _resolved(event);
    }
    return resolveHandler().then((handler) => handler(event));
  });
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const app = {
    // @ts-ignore
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    handler,
    stack,
    options
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(
      normalizeLayer({ ...arg2, route: "/", handler: arg1 })
    );
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  router.handler = eventHandler((event) => {
    let path = event.path || "/";
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${event.path || "/"}.`
        });
      } else {
        return;
      }
    }
    const method = (event.node.req.method || "get").toLowerCase();
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      if (opts.preemptive || opts.preemtive) {
        throw createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        });
      } else {
        return;
      }
    }
    event.context.matchedRoute = matched;
    const params = matched.params || {};
    event.context.params = params;
    return Promise.resolve(handler(event)).then((res) => {
      if (res === void 0 && (opts.preemptive || opts.preemtive)) {
        return null;
      }
      return res;
    });
  });
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController = globalThis.AbortController || i;
const ofetch = createFetch$1({ fetch, Headers: Headers$1, AbortController });
const $fetch = ofetch;

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "5a0850a3-e0c0-43c4-ac50-cf30b2ca5b1f"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sw.js": {
        "headers": {
          "Cache-Control": "public, max-age=0, must-revalidate"
        }
      },
      "/manifest.webmanifest": {
        "headers": {
          "Content-Type": "application/manifest+json",
          "Cache-Control": "public, max-age=0, must-revalidate"
        }
      },
      "/order/comment/**": {
        "ssr": false
      },
      "/order/detail": {
        "ssr": false
      }
    }
  },
  "public": {
    "persistedState": {
      "storage": "cookies",
      "debug": false,
      "cookieOptions": {}
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

function isEqual(object1, object2, hashOptions = {}) {
  if (object1 === object2) {
    return true;
  }
  if (objectHash(object1, hashOptions) === objectHash(object2, hashOptions)) {
    return true;
  }
  return false;
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"E:\\Coding Life\\Project\\jiwu-mall-project\\front-jiwuquan-mall-pc\\.data\\kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window&&window.localStorage&&window.localStorage.getItem&&window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?d():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:d,addColorScheme:i,removeColorScheme:f};function i(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function f(o){const t=\"\"+o+\"\",s=\"\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function d(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _1j1qvmVhef = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  _1j1qvmVhef
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/logo.png": {
    "type": "image/png",
    "etag": "\"2028-8d2iH3QQw44GXDvPjv70jxRyXOM\"",
    "mtime": "2024-01-17T12:18:34.441Z",
    "size": 8232,
    "path": "../public/logo.png"
  },
  "/logotxt.png": {
    "type": "image/png",
    "etag": "\"7ac4-l6OfG6OXVfulecbg0W9sLQhn4AI\"",
    "mtime": "2024-01-17T12:18:34.444Z",
    "size": 31428,
    "path": "../public/logotxt.png"
  },
  "/logo_title.png": {
    "type": "image/png",
    "etag": "\"55e7-8GETrVmRSWUIEJWWeDAJ91TvjEw\"",
    "mtime": "2024-01-17T12:18:34.442Z",
    "size": 21991,
    "path": "../public/logo_title.png"
  },
  "/manifest.webmanifest": {
    "type": "application/manifest+json",
    "etag": "\"25e-BdALpLPuNqrujOv4OzIwmuYA1IM\"",
    "mtime": "2024-01-17T18:36:44.683Z",
    "size": 606,
    "path": "../public/manifest.webmanifest"
  },
  "/sw.js": {
    "type": "application/javascript",
    "etag": "\"2b94-/3Ain9PAHdfiq+X1O/2KPfQBLZ8\"",
    "mtime": "2024-01-17T18:39:04.266Z",
    "size": 11156,
    "path": "../public/sw.js"
  },
  "/workbox-f407626e.js": {
    "type": "application/javascript",
    "etag": "\"557b-2awxobCOU2/OndMln9zRHwD24XI\"",
    "mtime": "2024-01-17T18:39:04.282Z",
    "size": 21883,
    "path": "../public/workbox-f407626e.js"
  },
  "/font/AlibabaHealthFont2.ttf": {
    "type": "font/ttf",
    "etag": "\"2bf650-MoZ7WLfGQLeVhYCbnnieCDSTEOE\"",
    "mtime": "2024-01-17T12:18:34.292Z",
    "size": 2881104,
    "path": "../public/font/AlibabaHealthFont2.ttf"
  },
  "/font/Alimama.woff2": {
    "type": "font/woff2",
    "etag": "\"2cca9c-HfDWBUv0NtO+BwI+jBVNEw6l+fw\"",
    "mtime": "2024-01-17T12:18:34.312Z",
    "size": 2935452,
    "path": "../public/font/Alimama.woff2"
  },
  "/font/AlimamaDaoLiTi-Regular.woff2": {
    "type": "font/woff2",
    "etag": "\"34239c-+JeA5CRfXW9ekTpgR1NIQpCtOwg\"",
    "mtime": "2024-01-17T12:18:34.333Z",
    "size": 3416988,
    "path": "../public/font/AlimamaDaoLiTi-Regular.woff2"
  },
  "/font/Alimama_DongFangDaKai_Regular.woff2": {
    "type": "font/woff2",
    "etag": "\"2a9bd8-HI/94xqNnN+VZWpaY4c8G0KIiik\"",
    "mtime": "2024-01-17T12:18:34.353Z",
    "size": 2792408,
    "path": "../public/font/Alimama_DongFangDaKai_Regular.woff2"
  },
  "/font/ZiWanGeTe.ttf": {
    "type": "font/ttf",
    "etag": "\"418858-c/jXTQQJ5iraVpH2YdiHbT+Stvg\"",
    "mtime": "2024-01-17T12:18:34.427Z",
    "size": 4294744,
    "path": "../public/font/ZiWanGeTe.ttf"
  },
  "/_nuxt/address.4p4sXyYy.js": {
    "type": "application/javascript",
    "etag": "\"37c05-K9N996Atu9lmzN4EUMxHxgnV1rs\"",
    "mtime": "2024-01-17T18:36:44.564Z",
    "size": 228357,
    "path": "../public/_nuxt/address.4p4sXyYy.js"
  },
  "/_nuxt/address.WdFNjMwU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2696-hRlDW+u5bOF7g4CZI/gNkQRJ9is\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 9878,
    "path": "../public/_nuxt/address.WdFNjMwU.css"
  },
  "/_nuxt/ApplyDialog.vue.GpPMfClF.js": {
    "type": "application/javascript",
    "etag": "\"aa7-J4h6kgj4yI9KgriU//RcP7rrLSk\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 2727,
    "path": "../public/_nuxt/ApplyDialog.vue.GpPMfClF.js"
  },
  "/_nuxt/arrays.9GuX8ZvT.js": {
    "type": "application/javascript",
    "etag": "\"5b-o/7qLFCJN1jY/hhQpHxvTvqyRsc\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 91,
    "path": "../public/_nuxt/arrays.9GuX8ZvT.js"
  },
  "/_nuxt/AutoIncre.vue.KpzenuDu.js": {
    "type": "application/javascript",
    "etag": "\"64a-WSgzlAayDLFbvAuRYvIYE9RQEas\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 1610,
    "path": "../public/_nuxt/AutoIncre.vue.KpzenuDu.js"
  },
  "/_nuxt/avatar.-bRo_r6d.js": {
    "type": "application/javascript",
    "etag": "\"50d-CzkrQArXc4dHqioa1qfe0qf6Le0\"",
    "mtime": "2024-01-17T18:36:44.577Z",
    "size": 1293,
    "path": "../public/_nuxt/avatar.-bRo_r6d.js"
  },
  "/_nuxt/avatar.bZH1-Oig.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36b-jE1n+fGfMeZyHMC3awSd0WpTnAY\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 875,
    "path": "../public/_nuxt/avatar.bZH1-Oig.css"
  },
  "/_nuxt/bills.ABh5tZgM.js": {
    "type": "application/javascript",
    "etag": "\"231-3RUqiGvibpXuAU9x0h3R4fBHec4\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 561,
    "path": "../public/_nuxt/bills.ABh5tZgM.js"
  },
  "/_nuxt/category.sBcSORba.js": {
    "type": "application/javascript",
    "etag": "\"170-MiaH0ctohWsmepF4kS1KMXT31fM\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 368,
    "path": "../public/_nuxt/category.sBcSORba.js"
  },
  "/_nuxt/CateGoryLine.XrpFd2hq.js": {
    "type": "application/javascript",
    "etag": "\"529-nmPfEk9z4yzR/WpTqDqLhLbgXq0\"",
    "mtime": "2024-01-17T18:36:44.519Z",
    "size": 1321,
    "path": "../public/_nuxt/CateGoryLine.XrpFd2hq.js"
  },
  "/_nuxt/CategoryTabs.0F9NLvkl.js": {
    "type": "application/javascript",
    "etag": "\"547-fbD09BHkauV/z17KkgXo/3waZTY\"",
    "mtime": "2024-01-17T18:36:44.554Z",
    "size": 1351,
    "path": "../public/_nuxt/CategoryTabs.0F9NLvkl.js"
  },
  "/_nuxt/CategoryTabs.787nBCiN.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"36-XH+7d2a/xSw4nZddzZ306Ur6RW8\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 54,
    "path": "../public/_nuxt/CategoryTabs.787nBCiN.css"
  },
  "/_nuxt/chat.oKRgYvGm.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"b31-gaSrQD3aZ11KD0p3G15jKM4ENtY\"",
    "mtime": "2024-01-17T18:36:44.487Z",
    "size": 2865,
    "path": "../public/_nuxt/chat.oKRgYvGm.css"
  },
  "/_nuxt/chat.pXT-uLP9.js": {
    "type": "application/javascript",
    "etag": "\"12ca-ceGE58w99qnQgq0u9ADp69Ix+MY\"",
    "mtime": "2024-01-17T18:36:44.567Z",
    "size": 4810,
    "path": "../public/_nuxt/chat.pXT-uLP9.js"
  },
  "/_nuxt/ChatMenu.VfIZrCl9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"df4-NcQSOPhWxRgJqAhrpcRk+A0RDZM\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 3572,
    "path": "../public/_nuxt/ChatMenu.VfIZrCl9.css"
  },
  "/_nuxt/ChatMenu.xQvC1zMv.js": {
    "type": "application/javascript",
    "etag": "\"ac1-9ZkhqW2eLid+q40PcriRFEe74hA\"",
    "mtime": "2024-01-17T18:36:44.580Z",
    "size": 2753,
    "path": "../public/_nuxt/ChatMenu.xQvC1zMv.js"
  },
  "/_nuxt/checkbox-group.d5XbR8TY.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-qFXfygmS4Yyh9gnvuRcvUT4T5X4\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 46,
    "path": "../public/_nuxt/checkbox-group.d5XbR8TY.css"
  },
  "/_nuxt/checkbox.MJHvI1xB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1941-93Y6ArbVKInfnV00dKN4y4Qt1xM\"",
    "mtime": "2024-01-17T18:36:44.507Z",
    "size": 6465,
    "path": "../public/_nuxt/checkbox.MJHvI1xB.css"
  },
  "/_nuxt/checkbox.yoNbs0Nb.js": {
    "type": "application/javascript",
    "etag": "\"269d-fbxa6cKcmdV+Fdc5rqCSCzw7pXg\"",
    "mtime": "2024-01-17T18:36:44.581Z",
    "size": 9885,
    "path": "../public/_nuxt/checkbox.yoNbs0Nb.js"
  },
  "/_nuxt/cloneDeep.3YksgvLn.js": {
    "type": "application/javascript",
    "etag": "\"63-bWjinbIT1BccKjMULB8ZcycBbKM\"",
    "mtime": "2024-01-17T18:36:44.529Z",
    "size": 99,
    "path": "../public/_nuxt/cloneDeep.3YksgvLn.js"
  },
  "/_nuxt/collect.-h9uTaAX.js": {
    "type": "application/javascript",
    "etag": "\"1b7-YQ3wNUYaVgR86CpksuFefCC+/zs\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 439,
    "path": "../public/_nuxt/collect.-h9uTaAX.js"
  },
  "/_nuxt/collect.7esVe3wI.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"125c-QTAmsAYhEINxuTIHVYYfEumHEXw\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 4700,
    "path": "../public/_nuxt/collect.7esVe3wI.css"
  },
  "/_nuxt/collect.RAHtffTp.js": {
    "type": "application/javascript",
    "etag": "\"350b-FL/4elk86yff6CWFOOpqiWIAr8s\"",
    "mtime": "2024-01-17T18:36:44.566Z",
    "size": 13579,
    "path": "../public/_nuxt/collect.RAHtffTp.js"
  },
  "/_nuxt/CommentPreview.JFJ3T4Gg.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"328-V3V3Rb3lTg31ZRjmaOb9Paaoj3M\"",
    "mtime": "2024-01-17T18:36:44.503Z",
    "size": 808,
    "path": "../public/_nuxt/CommentPreview.JFJ3T4Gg.css"
  },
  "/_nuxt/CommentPreview.Y9bM1KWX.js": {
    "type": "application/javascript",
    "etag": "\"2e45-wwn+Ogd6MAMdLR+KfLddeM232Xs\"",
    "mtime": "2024-01-17T18:36:44.576Z",
    "size": 11845,
    "path": "../public/_nuxt/CommentPreview.Y9bM1KWX.js"
  },
  "/_nuxt/composables.QNi8Zuou.js": {
    "type": "application/javascript",
    "etag": "\"5b-oDx9bYUFICr2EOq/l8AbdzA2jMo\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 91,
    "path": "../public/_nuxt/composables.QNi8Zuou.js"
  },
  "/_nuxt/contact.IOrl_V-3.js": {
    "type": "application/javascript",
    "etag": "\"967-OCg+oJFWWWXd/gW4XV0xFYGiSwY\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 2407,
    "path": "../public/_nuxt/contact.IOrl_V-3.js"
  },
  "/_nuxt/date-picker.sSkDKlix.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e8f-axLaHqXTZyYcsyAxMEjfJUZpcgY\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 24207,
    "path": "../public/_nuxt/date-picker.sSkDKlix.css"
  },
  "/_nuxt/date-picker.UhiU1TEx.js": {
    "type": "application/javascript",
    "etag": "\"103a1-ffa0FNbO4hSw0eShOJSZeYqhhQg\"",
    "mtime": "2024-01-17T18:36:44.566Z",
    "size": 66465,
    "path": "../public/_nuxt/date-picker.UhiU1TEx.js"
  },
  "/_nuxt/debounce.4-I_Xkye.js": {
    "type": "application/javascript",
    "etag": "\"5ea-vNpGt8s4sgKFHOlJLbtJhg7X9R4\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 1514,
    "path": "../public/_nuxt/debounce.4-I_Xkye.js"
  },
  "/_nuxt/DelayTimer.vue.C1IdBqmv.js": {
    "type": "application/javascript",
    "etag": "\"33b-kdFuvwVC+teX0U3h8VyiPlkwZRA\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 827,
    "path": "../public/_nuxt/DelayTimer.vue.C1IdBqmv.js"
  },
  "/_nuxt/detail.6VHotoeA.js": {
    "type": "application/javascript",
    "etag": "\"b5ea-jvyv4eWvF6AVrf2ezwAtgMOPsX8\"",
    "mtime": "2024-01-17T18:36:44.562Z",
    "size": 46570,
    "path": "../public/_nuxt/detail.6VHotoeA.js"
  },
  "/_nuxt/detail.XYTdnUIm.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2cb6-SSCANSKeAjh1tGiAaS4IOVKzuCU\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 11446,
    "path": "../public/_nuxt/detail.XYTdnUIm.css"
  },
  "/_nuxt/dialog.jW0LsHVx.js": {
    "type": "application/javascript",
    "etag": "\"1c9a-rniK+FLNVSyIzg8uLwRxuVtPbGQ\"",
    "mtime": "2024-01-17T18:36:44.558Z",
    "size": 7322,
    "path": "../public/_nuxt/dialog.jW0LsHVx.js"
  },
  "/_nuxt/dialog.NzY-5hTp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d76-1jDAcu5W2VHNi+wDh/lPUSzv7Sk\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 3446,
    "path": "../public/_nuxt/dialog.NzY-5hTp.css"
  },
  "/_nuxt/divider.Dj8BMgcW.js": {
    "type": "application/javascript",
    "etag": "\"34e-9D+tZZj6rlL9PbhNMcwuIxM1szc\"",
    "mtime": "2024-01-17T18:36:44.568Z",
    "size": 846,
    "path": "../public/_nuxt/divider.Dj8BMgcW.js"
  },
  "/_nuxt/divider.mvCfgREV.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c2-aZTwdFAd2kjucv4FlePPXYHT5f4\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 706,
    "path": "../public/_nuxt/divider.mvCfgREV.css"
  },
  "/_nuxt/DrawerMenu.fImR3oWc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a27-rwBL37vC+RbSirLgwhuOmSxSPbw\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 2599,
    "path": "../public/_nuxt/DrawerMenu.fImR3oWc.css"
  },
  "/_nuxt/DrawerMenu.sOuHUMAQ.js": {
    "type": "application/javascript",
    "etag": "\"127a-2cYakNiY64zbPPiAadD4qy8LcJw\"",
    "mtime": "2024-01-17T18:36:44.580Z",
    "size": 4730,
    "path": "../public/_nuxt/DrawerMenu.sOuHUMAQ.js"
  },
  "/_nuxt/ElImage.H3VTC2Vd.js": {
    "type": "application/javascript",
    "etag": "\"29d3-0j2mockcOd5o3E6Y4Uhu491Y/9M\"",
    "mtime": "2024-01-17T18:36:44.575Z",
    "size": 10707,
    "path": "../public/_nuxt/ElImage.H3VTC2Vd.js"
  },
  "/_nuxt/ElImage.Pw9gT8La.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a29-Fb+djVX4tHz60hNQXKdmhYFPf/s\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 2601,
    "path": "../public/_nuxt/ElImage.Pw9gT8La.css"
  },
  "/_nuxt/empty.sDhVTJEQ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"492-WYj7tdd52XQzKd7ZS7FQ1Dv1XoM\"",
    "mtime": "2024-01-17T18:36:44.501Z",
    "size": 1170,
    "path": "../public/_nuxt/empty.sDhVTJEQ.css"
  },
  "/_nuxt/empty.TrNGK8ww.js": {
    "type": "application/javascript",
    "etag": "\"12d0-ar2mqp5pPfOucrfpjm7yBQSCXe0\"",
    "mtime": "2024-01-17T18:36:44.579Z",
    "size": 4816,
    "path": "../public/_nuxt/empty.TrNGK8ww.js"
  },
  "/_nuxt/entry.HuYbGiLS.js": {
    "type": "application/javascript",
    "etag": "\"15e87c-HFCSpj1RhN4bnUZCmW9i2/X53P0\"",
    "mtime": "2024-01-17T18:36:44.597Z",
    "size": 1435772,
    "path": "../public/_nuxt/entry.HuYbGiLS.js"
  },
  "/_nuxt/entry.NyAeeWMW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"63f66-646fbgd7UB7/FXLdb8MCkXsPg+Y\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 409446,
    "path": "../public/_nuxt/entry.NyAeeWMW.css"
  },
  "/_nuxt/error.oXTagN8O.js": {
    "type": "application/javascript",
    "etag": "\"117-Gz4/Kosq7P3+VV5/yKWfbDKpKCU\"",
    "mtime": "2024-01-17T18:36:44.519Z",
    "size": 279,
    "path": "../public/_nuxt/error.oXTagN8O.js"
  },
  "/_nuxt/fetch.3IR0ILJ_.js": {
    "type": "application/javascript",
    "etag": "\"f84-L0ajWc9i8lcQjeYqjsU7TFVASOM\"",
    "mtime": "2024-01-17T18:36:44.534Z",
    "size": 3972,
    "path": "../public/_nuxt/fetch.3IR0ILJ_.js"
  },
  "/_nuxt/flatten.lVx7POvc.js": {
    "type": "application/javascript",
    "etag": "\"17a-+FHocHMcJL/oXk1y/PRJXcOfMqQ\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 378,
    "path": "../public/_nuxt/flatten.lVx7POvc.js"
  },
  "/_nuxt/Footer.5r92t_I9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75d-nJs+tx9Vcumc4ZYdhtG2oewlunY\"",
    "mtime": "2024-01-17T18:36:44.489Z",
    "size": 1885,
    "path": "../public/_nuxt/Footer.5r92t_I9.css"
  },
  "/_nuxt/Footer.HKpec9o-.js": {
    "type": "application/javascript",
    "etag": "\"20d9-19TH6Sbar1L+CXynbvo+wcIa7fI\"",
    "mtime": "2024-01-17T18:36:44.575Z",
    "size": 8409,
    "path": "../public/_nuxt/Footer.HKpec9o-.js"
  },
  "/_nuxt/friend.Ji7Uw8zR.js": {
    "type": "application/javascript",
    "etag": "\"3b5e-pfGr7wq4QeHt8DIlRV7IGzm93QE\"",
    "mtime": "2024-01-17T18:36:44.547Z",
    "size": 15198,
    "path": "../public/_nuxt/friend.Ji7Uw8zR.js"
  },
  "/_nuxt/friend.UI_uLdgW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d00-AdeNJpaWblRJcK97u/NPXbdhM3M\"",
    "mtime": "2024-01-17T18:36:44.471Z",
    "size": 7424,
    "path": "../public/_nuxt/friend.UI_uLdgW.css"
  },
  "/_nuxt/GoodsList.1p6fEF-7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-A6B7XiGr5LPBqLsGL1Y8lNknnxw\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 65,
    "path": "../public/_nuxt/GoodsList.1p6fEF-7.css"
  },
  "/_nuxt/GoodsList.d74h-xDM.js": {
    "type": "application/javascript",
    "etag": "\"b89-cQrOmAw2nVJJWKWCOxrUzBoeyrA\"",
    "mtime": "2024-01-17T18:36:44.571Z",
    "size": 2953,
    "path": "../public/_nuxt/GoodsList.d74h-xDM.js"
  },
  "/_nuxt/GoodsListSsr.P5hBZBtk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-Hkd9d/ZGJNkcRwy5lutd3GAYYYA\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 65,
    "path": "../public/_nuxt/GoodsListSsr.P5hBZBtk.css"
  },
  "/_nuxt/GoodsListSsr._Tpyxu1Q.js": {
    "type": "application/javascript",
    "etag": "\"c1b-ElV+uaUaTTLkJo3AWVG9ibKd5Es\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 3099,
    "path": "../public/_nuxt/GoodsListSsr._Tpyxu1Q.js"
  },
  "/_nuxt/hasIn.gQarB0Dl.js": {
    "type": "application/javascript",
    "etag": "\"194-z0RdICYG5nJW3LBNDtPdn429Rcc\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 404,
    "path": "../public/_nuxt/hasIn.gQarB0Dl.js"
  },
  "/_nuxt/index.2AyaIaz8.js": {
    "type": "application/javascript",
    "etag": "\"362-gtu7ZYgFdNE4ClaDi4nAPhcC6ko\"",
    "mtime": "2024-01-17T18:36:44.568Z",
    "size": 866,
    "path": "../public/_nuxt/index.2AyaIaz8.js"
  },
  "/_nuxt/index.8uyA1Q9v.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1c9-PV7w2nmwow8kRP+sFf5Hfcz12eo\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 457,
    "path": "../public/_nuxt/index.8uyA1Q9v.css"
  },
  "/_nuxt/index.9Jiqo2G6.js": {
    "type": "application/javascript",
    "etag": "\"2e65-M8Uc2RZ+jXnYD+/MnLEKbxVHX6w\"",
    "mtime": "2024-01-17T18:36:44.595Z",
    "size": 11877,
    "path": "../public/_nuxt/index.9Jiqo2G6.js"
  },
  "/_nuxt/index.DVCFg7db.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a6-mpRFVegZhcvsYGWDv7DrrMwLAgk\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 1702,
    "path": "../public/_nuxt/index.DVCFg7db.css"
  },
  "/_nuxt/index.FQQN3SR7.js": {
    "type": "application/javascript",
    "etag": "\"92-VtQMoR/IYN4GWE1sQiMGDebdaXg\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 146,
    "path": "../public/_nuxt/index.FQQN3SR7.js"
  },
  "/_nuxt/index.g79XymgM.js": {
    "type": "application/javascript",
    "etag": "\"6ac-n7IwApHESzkYqv+/P39U0z8j3gs\"",
    "mtime": "2024-01-17T18:36:44.531Z",
    "size": 1708,
    "path": "../public/_nuxt/index.g79XymgM.js"
  },
  "/_nuxt/index.gADI8LgY.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11c-lwzCx3vPUQq0y+Kh0YYL14z68IQ\"",
    "mtime": "2024-01-17T18:36:44.473Z",
    "size": 284,
    "path": "../public/_nuxt/index.gADI8LgY.css"
  },
  "/_nuxt/index.gOl6WcbK.js": {
    "type": "application/javascript",
    "etag": "\"1af-u0ndtCn8VUbUnSOdLZGGWmL8uTc\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 431,
    "path": "../public/_nuxt/index.gOl6WcbK.js"
  },
  "/_nuxt/index.K4Q_DaFl.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"207-kBi3UHPf/5YQIAcQOA/32NqiyGU\"",
    "mtime": "2024-01-17T18:36:44.471Z",
    "size": 519,
    "path": "../public/_nuxt/index.K4Q_DaFl.css"
  },
  "/_nuxt/index.l5CC8IXT.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"42e-+tIDYf2zAz3cTQlmU12tCoyFQtI\"",
    "mtime": "2024-01-17T18:36:44.487Z",
    "size": 1070,
    "path": "../public/_nuxt/index.l5CC8IXT.css"
  },
  "/_nuxt/index.O6n8D2HD.js": {
    "type": "application/javascript",
    "etag": "\"3a0-+jE2MVE0/FqcsSMIKYMBMe/Vvn4\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 928,
    "path": "../public/_nuxt/index.O6n8D2HD.js"
  },
  "/_nuxt/index.p8ZulH49.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"12aa-7vnbzW9ytmvAH1572/swYlRs3XU\"",
    "mtime": "2024-01-17T18:36:44.473Z",
    "size": 4778,
    "path": "../public/_nuxt/index.p8ZulH49.css"
  },
  "/_nuxt/index.Rr0j-bh8.js": {
    "type": "application/javascript",
    "etag": "\"d575-DbvnHmnlHMCB4KKPzkc1+9yoiUE\"",
    "mtime": "2024-01-17T18:36:44.550Z",
    "size": 54645,
    "path": "../public/_nuxt/index.Rr0j-bh8.js"
  },
  "/_nuxt/index.RtMxj6Hn.js": {
    "type": "application/javascript",
    "etag": "\"1ab-vqVqEaNVVS72De0Hdrn7L1zgmLk\"",
    "mtime": "2024-01-17T18:36:44.538Z",
    "size": 427,
    "path": "../public/_nuxt/index.RtMxj6Hn.js"
  },
  "/_nuxt/index.S0AyQ0ue.js": {
    "type": "application/javascript",
    "etag": "\"11cb-OaFBvVvovnBQ2ykzjjy5433+td8\"",
    "mtime": "2024-01-17T18:36:44.543Z",
    "size": 4555,
    "path": "../public/_nuxt/index.S0AyQ0ue.js"
  },
  "/_nuxt/index.sGdJJmq1.js": {
    "type": "application/javascript",
    "etag": "\"20fe-02mEa3ifFYOjasopnHRMpyb62oA\"",
    "mtime": "2024-01-17T18:36:44.562Z",
    "size": 8446,
    "path": "../public/_nuxt/index.sGdJJmq1.js"
  },
  "/_nuxt/index.tpBqOViH.js": {
    "type": "application/javascript",
    "etag": "\"970-vm8NzyV/9oG0c6ohGBzgQhTw5Rc\"",
    "mtime": "2024-01-17T18:36:44.579Z",
    "size": 2416,
    "path": "../public/_nuxt/index.tpBqOViH.js"
  },
  "/_nuxt/index.Uhk89Gac.js": {
    "type": "application/javascript",
    "etag": "\"12b3-4iUavlELU7GShuVI9cGcJe0bHfU\"",
    "mtime": "2024-01-17T18:36:44.523Z",
    "size": 4787,
    "path": "../public/_nuxt/index.Uhk89Gac.js"
  },
  "/_nuxt/index.UXNJSCQF.js": {
    "type": "application/javascript",
    "etag": "\"662-h0CXK8MTEC+3fOWBFEcvVrHnIJE\"",
    "mtime": "2024-01-17T18:36:44.534Z",
    "size": 1634,
    "path": "../public/_nuxt/index.UXNJSCQF.js"
  },
  "/_nuxt/index.vK-kKfhd.js": {
    "type": "application/javascript",
    "etag": "\"adf-TXGGto8JA9rtRiEtAPf1ExKOtqQ\"",
    "mtime": "2024-01-17T18:36:44.552Z",
    "size": 2783,
    "path": "../public/_nuxt/index.vK-kKfhd.js"
  },
  "/_nuxt/index.VN5ZVKH6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6d2-pPpRbnxPur+bsNiIhRd9kEVGzAA\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 1746,
    "path": "../public/_nuxt/index.VN5ZVKH6.css"
  },
  "/_nuxt/index.X-oh51Qw.js": {
    "type": "application/javascript",
    "etag": "\"2428-w1pZUTcK7K7W9zF6gi1evy8aSMc\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 9256,
    "path": "../public/_nuxt/index.X-oh51Qw.js"
  },
  "/_nuxt/index.xV7eTSBk.js": {
    "type": "application/javascript",
    "etag": "\"6b0-vQz+PMqsHgU2723pcTpR1s+mlvo\"",
    "mtime": "2024-01-17T18:36:44.529Z",
    "size": 1712,
    "path": "../public/_nuxt/index.xV7eTSBk.js"
  },
  "/_nuxt/index.zZZw1SHV.js": {
    "type": "application/javascript",
    "etag": "\"130-ezLMTi+F+p36tHUOiMc9wrWFpMg\"",
    "mtime": "2024-01-17T18:36:44.529Z",
    "size": 304,
    "path": "../public/_nuxt/index.zZZw1SHV.js"
  },
  "/_nuxt/index._zDvC9M2.js": {
    "type": "application/javascript",
    "etag": "\"49a4-7xrhQ9+2gr1ipQ8ghfWdLFfA19o\"",
    "mtime": "2024-01-17T18:36:44.558Z",
    "size": 18852,
    "path": "../public/_nuxt/index._zDvC9M2.js"
  },
  "/_nuxt/info.5jGDA9s3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"587-LGjBas8oR7FmWP3N3Rg5tjeeHgU\"",
    "mtime": "2024-01-17T18:36:44.487Z",
    "size": 1415,
    "path": "../public/_nuxt/info.5jGDA9s3.css"
  },
  "/_nuxt/info.HrAEfdEF.js": {
    "type": "application/javascript",
    "etag": "\"40bb-fm3oUAzJ/B9R2pMhECG4hPv6R64\"",
    "mtime": "2024-01-17T18:36:44.566Z",
    "size": 16571,
    "path": "../public/_nuxt/info.HrAEfdEF.js"
  },
  "/_nuxt/input-number.5AezeF1g.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f31-4K4TeynLXoChVbsPgfp4gipoDSk\"",
    "mtime": "2024-01-17T18:36:44.505Z",
    "size": 3889,
    "path": "../public/_nuxt/input-number.5AezeF1g.css"
  },
  "/_nuxt/input-number.dJQLWHXy.js": {
    "type": "application/javascript",
    "etag": "\"16a8-WccJZYPvq4DmQDYh+PU9CC4v82k\"",
    "mtime": "2024-01-17T18:36:44.585Z",
    "size": 5800,
    "path": "../public/_nuxt/input-number.dJQLWHXy.js"
  },
  "/_nuxt/isEqual.gU3elsgQ.js": {
    "type": "application/javascript",
    "etag": "\"d0c-i5uzJuuu22aRDbmqZccpqKMtPh8\"",
    "mtime": "2024-01-17T18:36:44.545Z",
    "size": 3340,
    "path": "../public/_nuxt/isEqual.gU3elsgQ.js"
  },
  "/_nuxt/isUndefined.IZwZ21d-.js": {
    "type": "application/javascript",
    "etag": "\"30-LtBhdwKbViAa84SOg40YvRwDNOE\"",
    "mtime": "2024-01-17T18:36:44.526Z",
    "size": 48,
    "path": "../public/_nuxt/isUndefined.IZwZ21d-.js"
  },
  "/_nuxt/kiwi_strong.4i0rfJn6.js": {
    "type": "application/javascript",
    "etag": "\"730-ke3PHjtJGhR04xjj3G+iaKcqU8g\"",
    "mtime": "2024-01-17T18:36:44.543Z",
    "size": 1840,
    "path": "../public/_nuxt/kiwi_strong.4i0rfJn6.js"
  },
  "/_nuxt/list.h6Im2ufz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c9-gwzw6tX2Z39pUON593ua1XsNEZg\"",
    "mtime": "2024-01-17T18:36:44.473Z",
    "size": 201,
    "path": "../public/_nuxt/list.h6Im2ufz.css"
  },
  "/_nuxt/list.jQJ0pxBh.js": {
    "type": "application/javascript",
    "etag": "\"3ef8-PdCjUf3S1ti6psmn/Uskk7XX1Mc\"",
    "mtime": "2024-01-17T18:36:44.556Z",
    "size": 16120,
    "path": "../public/_nuxt/list.jQJ0pxBh.js"
  },
  "/_nuxt/list.N81R7WRg.js": {
    "type": "application/javascript",
    "etag": "\"1ba0-yIgt+0Sj7aidsXhEEJnBxN7Jjtk\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 7072,
    "path": "../public/_nuxt/list.N81R7WRg.js"
  },
  "/_nuxt/list.Wd0JWpy4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a46-xVBuEbQwuYcYvR9nL3FNx1y3efM\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 2630,
    "path": "../public/_nuxt/list.Wd0JWpy4.css"
  },
  "/_nuxt/localeData.Oasa6b5P.js": {
    "type": "application/javascript",
    "etag": "\"2789-RwTvQWzXAlSTGdxWM861O9acKRM\"",
    "mtime": "2024-01-17T18:36:44.547Z",
    "size": 10121,
    "path": "../public/_nuxt/localeData.Oasa6b5P.js"
  },
  "/_nuxt/Main.hykRw3Sn.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7b0-Bm4uMBd+QXOhD4/poaRERlnsVNY\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 1968,
    "path": "../public/_nuxt/Main.hykRw3Sn.css"
  },
  "/_nuxt/main.qORvGbFO.js": {
    "type": "application/javascript",
    "etag": "\"9c4-k4aynx5lS6yRCcfnLHNL3NCmZ60\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 2500,
    "path": "../public/_nuxt/main.qORvGbFO.js"
  },
  "/_nuxt/Main.vue.pw_WhY3f.js": {
    "type": "application/javascript",
    "etag": "\"29d3-w3AqyblCOp9XcS894EjYKyazjak\"",
    "mtime": "2024-01-17T18:36:44.595Z",
    "size": 10707,
    "path": "../public/_nuxt/Main.vue.pw_WhY3f.js"
  },
  "/_nuxt/menu.6YbFhd-D.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28b4-rERl8Q4DnmBalD5YoJzL6u86Yqc\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 10420,
    "path": "../public/_nuxt/menu.6YbFhd-D.css"
  },
  "/_nuxt/menu.ywxIxKVg.js": {
    "type": "application/javascript",
    "etag": "\"3a6e-PmVV8DNfy7CwTVi7GxE7xpEvir8\"",
    "mtime": "2024-01-17T18:36:44.581Z",
    "size": 14958,
    "path": "../public/_nuxt/menu.ywxIxKVg.js"
  },
  "/_nuxt/new.PUcCmEoV.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"421-bkVAvrnj0sIa+l9lOxCobmhf9PM\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 1057,
    "path": "../public/_nuxt/new.PUcCmEoV.css"
  },
  "/_nuxt/new.XwlNFDuO.js": {
    "type": "application/javascript",
    "etag": "\"3b01-0SmODjsJi0Y2qdFk4PsB+iRv59c\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 15105,
    "path": "../public/_nuxt/new.XwlNFDuO.js"
  },
  "/_nuxt/notification.8O_B6xHM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c21-Ycr0x2Z5QlsAlxaNbGN9JKI0m9E\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 3105,
    "path": "../public/_nuxt/notification.8O_B6xHM.css"
  },
  "/_nuxt/notification.mMgfY760.js": {
    "type": "application/javascript",
    "etag": "\"1144-pYql8eGDvoQHNgWcHGJa0XOKY4w\"",
    "mtime": "2024-01-17T18:36:44.580Z",
    "size": 4420,
    "path": "../public/_nuxt/notification.mMgfY760.js"
  },
  "/_nuxt/nuxt-link.eZ5kOSgI.js": {
    "type": "application/javascript",
    "etag": "\"10af-B4RyETfICguiGilK5TeLIAd7lfs\"",
    "mtime": "2024-01-17T18:36:44.544Z",
    "size": 4271,
    "path": "../public/_nuxt/nuxt-link.eZ5kOSgI.js"
  },
  "/_nuxt/OssFileUpload.5SsdOgf4.js": {
    "type": "application/javascript",
    "etag": "\"1c5e-VUpSPLbBVhdL6pkXeJb6L2G6B2c\"",
    "mtime": "2024-01-17T18:36:44.571Z",
    "size": 7262,
    "path": "../public/_nuxt/OssFileUpload.5SsdOgf4.js"
  },
  "/_nuxt/OssFileUpload.IyigP3Lv.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ec-EY7VBUlkz73tbaeQroc5oEZuRQk\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 492,
    "path": "../public/_nuxt/OssFileUpload.IyigP3Lv.css"
  },
  "/_nuxt/popover.LAISAeEG.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"554-3BnQT4bxuFTnozAyPH3Ft+Tdwtc\"",
    "mtime": "2024-01-17T18:36:44.500Z",
    "size": 1364,
    "path": "../public/_nuxt/popover.LAISAeEG.css"
  },
  "/_nuxt/popper.nTJkgMH4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8f6-p13/bHsLTHX4sr8eQe4fhnw85UI\"",
    "mtime": "2024-01-17T18:36:44.501Z",
    "size": 2294,
    "path": "../public/_nuxt/popper.nTJkgMH4.css"
  },
  "/_nuxt/popper.TZrEXPn8.js": {
    "type": "application/javascript",
    "etag": "\"9841-FtKOlzOwqb+mC6ZrBI0ex/SiNLk\"",
    "mtime": "2024-01-17T18:36:44.596Z",
    "size": 38977,
    "path": "../public/_nuxt/popper.TZrEXPn8.js"
  },
  "/_nuxt/post.qx8DVZwc.js": {
    "type": "application/javascript",
    "etag": "\"3d68-3ETmw3dx9HJa9Z+ahm3jYX+ZWUc\"",
    "mtime": "2024-01-17T18:36:44.581Z",
    "size": 15720,
    "path": "../public/_nuxt/post.qx8DVZwc.js"
  },
  "/_nuxt/post.vbJ-6447.js": {
    "type": "application/javascript",
    "etag": "\"7b7-Eh1xDgnxfoxWxAtBfbYAu0X8i9c\"",
    "mtime": "2024-01-17T18:36:44.535Z",
    "size": 1975,
    "path": "../public/_nuxt/post.vbJ-6447.js"
  },
  "/_nuxt/post.yVQn8Ib0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"687-+WMi0UxWT6N5eCUrpNfCre80FEU\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 1671,
    "path": "../public/_nuxt/post.yVQn8Ib0.css"
  },
  "/_nuxt/PostList.07SR4KqT.js": {
    "type": "application/javascript",
    "etag": "\"1bdc-OEbGFiKFowChigFtpSiRg7+Z/jY\"",
    "mtime": "2024-01-17T18:36:44.580Z",
    "size": 7132,
    "path": "../public/_nuxt/PostList.07SR4KqT.js"
  },
  "/_nuxt/PostList.VdmOiOO0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2bb-KZT2flOYtN1d2Cq2Cz+fpPnL/Mc\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 699,
    "path": "../public/_nuxt/PostList.VdmOiOO0.css"
  },
  "/_nuxt/PreLoading.vue.RcEKquDI.js": {
    "type": "application/javascript",
    "etag": "\"1a5-/kJBLjJTdQPDk+JlOU4Hsg1xXXA\"",
    "mtime": "2024-01-17T18:36:44.529Z",
    "size": 421,
    "path": "../public/_nuxt/PreLoading.vue.RcEKquDI.js"
  },
  "/_nuxt/progress.rXLlm_9F.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a25-QbSzVA2WpsmqMvaoNNRMxkWsi88\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 2597,
    "path": "../public/_nuxt/progress.rXLlm_9F.css"
  },
  "/_nuxt/progress.UYU20Rtn.js": {
    "type": "application/javascript",
    "etag": "\"1111-ZMJYqEZnGtnxYblO/IJz737LIr4\"",
    "mtime": "2024-01-17T18:36:44.578Z",
    "size": 4369,
    "path": "../public/_nuxt/progress.UYU20Rtn.js"
  },
  "/_nuxt/radio-button.l7x146Nf.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ca0-mkBIe3jVDJWZCbUZMilIiLUKttA\"",
    "mtime": "2024-01-17T18:36:44.479Z",
    "size": 3232,
    "path": "../public/_nuxt/radio-button.l7x146Nf.css"
  },
  "/_nuxt/radio-group.P_Xz2fNs.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"53-QQtqnw/A9XQy1Q+tqPo+8MPK/mg\"",
    "mtime": "2024-01-17T18:36:44.485Z",
    "size": 83,
    "path": "../public/_nuxt/radio-group.P_Xz2fNs.css"
  },
  "/_nuxt/radio.eYTrrdr6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10d9-mXPrP3xq8GEvgCKL+5t6OojiJxI\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 4313,
    "path": "../public/_nuxt/radio.eYTrrdr6.css"
  },
  "/_nuxt/rand.mzGjE9Jh.js": {
    "type": "application/javascript",
    "etag": "\"3a-Dz2tPC6JZ3XaATIh12hWFBh6sNg\"",
    "mtime": "2024-01-17T18:36:44.522Z",
    "size": 58,
    "path": "../public/_nuxt/rand.mzGjE9Jh.js"
  },
  "/_nuxt/Rank.HUJN4OwE.js": {
    "type": "application/javascript",
    "etag": "\"ebb-mN1rifUqgzShZaXeDLwtSI4Il30\"",
    "mtime": "2024-01-17T18:36:44.576Z",
    "size": 3771,
    "path": "../public/_nuxt/Rank.HUJN4OwE.js"
  },
  "/_nuxt/Rank.y3OSjSFp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-i0LgKhOEMEqzulzA7NzWfxMmwus\"",
    "mtime": "2024-01-17T18:36:44.501Z",
    "size": 65,
    "path": "../public/_nuxt/Rank.y3OSjSFp.css"
  },
  "/_nuxt/rate.mGuCO7Lx.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"579-XToDj9LOjvAwkKAcx6a9TzMpZZ0\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 1401,
    "path": "../public/_nuxt/rate.mGuCO7Lx.css"
  },
  "/_nuxt/rate.YTGIEK9x.js": {
    "type": "application/javascript",
    "etag": "\"141a-qMZm0TtA6cFD67zOj9qa/LEcgxY\"",
    "mtime": "2024-01-17T18:36:44.556Z",
    "size": 5146,
    "path": "../public/_nuxt/rate.YTGIEK9x.js"
  },
  "/_nuxt/RoomGroup.gsy9I-Jo.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6c8-rmwUfGUMElJLG4kAmzrBnE/51dw\"",
    "mtime": "2024-01-17T18:36:44.471Z",
    "size": 1736,
    "path": "../public/_nuxt/RoomGroup.gsy9I-Jo.css"
  },
  "/_nuxt/RoomGroup.WJQn8RPL.js": {
    "type": "application/javascript",
    "etag": "\"5a99-RBEeVNEzdyVggbIqEdSuRmBVA4o\"",
    "mtime": "2024-01-17T18:36:44.557Z",
    "size": 23193,
    "path": "../public/_nuxt/RoomGroup.WJQn8RPL.js"
  },
  "/_nuxt/safe.73roRH3g.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1326-53b+hafADhCx3HJJu2TQdriGt5I\"",
    "mtime": "2024-01-17T18:36:44.487Z",
    "size": 4902,
    "path": "../public/_nuxt/safe.73roRH3g.css"
  },
  "/_nuxt/safe.bTV_bJOJ.js": {
    "type": "application/javascript",
    "etag": "\"45bd-KzXRCHeroWCrbCOsq/Tm7tCgy4s\"",
    "mtime": "2024-01-17T18:36:44.585Z",
    "size": 17853,
    "path": "../public/_nuxt/safe.bTV_bJOJ.js"
  },
  "/_nuxt/scrollbar.Smf0pYfu.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"545-ieaqVxO8Au5ZT/2tuBKp/FTfD78\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 1349,
    "path": "../public/_nuxt/scrollbar.Smf0pYfu.css"
  },
  "/_nuxt/scrollbar.ylZGouLy.js": {
    "type": "application/javascript",
    "etag": "\"1937-sN4UlJhs0m1X6yFDfw5YDYEiXoQ\"",
    "mtime": "2024-01-17T18:36:44.595Z",
    "size": 6455,
    "path": "../public/_nuxt/scrollbar.ylZGouLy.js"
  },
  "/_nuxt/second.5U8rXNga.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ce-cOJpykIGiGXHROZKkPyR7Qd4r14\"",
    "mtime": "2024-01-17T18:36:44.488Z",
    "size": 206,
    "path": "../public/_nuxt/second.5U8rXNga.css"
  },
  "/_nuxt/second.LreFM3p0.js": {
    "type": "application/javascript",
    "etag": "\"5c9-FTMfoVpn/UlUNIBS7T9QSgbm/EM\"",
    "mtime": "2024-01-17T18:36:44.567Z",
    "size": 1481,
    "path": "../public/_nuxt/second.LreFM3p0.js"
  },
  "/_nuxt/select.AFHHgGgH.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2376-WHwsMmIjB305IumDKyoqNlDnm6E\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 9078,
    "path": "../public/_nuxt/select.AFHHgGgH.css"
  },
  "/_nuxt/select.Bh0wcPP9.js": {
    "type": "application/javascript",
    "etag": "\"665d-ZzpcM4pSLDyqspC9EjSpaMzChv0\"",
    "mtime": "2024-01-17T18:36:44.596Z",
    "size": 26205,
    "path": "../public/_nuxt/select.Bh0wcPP9.js"
  },
  "/_nuxt/service.2z9a4pIx.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"599-2FFUz0TjkVsB1uVzzTM4FaCsZqE\"",
    "mtime": "2024-01-17T18:36:44.471Z",
    "size": 1433,
    "path": "../public/_nuxt/service.2z9a4pIx.css"
  },
  "/_nuxt/service.b8VQAglU.js": {
    "type": "application/javascript",
    "etag": "\"6a0-52gNvAcx/UIxCmQ0dNYDVLUpS7c\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 1696,
    "path": "../public/_nuxt/service.b8VQAglU.js"
  },
  "/_nuxt/shopcart.cNizIJyk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f4-M5cddUulIGipwUGhocjj9W5efR4\"",
    "mtime": "2024-01-17T18:36:44.487Z",
    "size": 1012,
    "path": "../public/_nuxt/shopcart.cNizIJyk.css"
  },
  "/_nuxt/shopcart.U038Zdb-.js": {
    "type": "application/javascript",
    "etag": "\"16f0-uEBJ6fYnb//rlRChU40MKwjf7Es\"",
    "mtime": "2024-01-17T18:36:44.569Z",
    "size": 5872,
    "path": "../public/_nuxt/shopcart.U038Zdb-.js"
  },
  "/_nuxt/ShopCartBar.HlQJjN-D.js": {
    "type": "application/javascript",
    "etag": "\"1948-/35+XK1lesIa+EJWndCQap5Vuxk\"",
    "mtime": "2024-01-17T18:36:44.568Z",
    "size": 6472,
    "path": "../public/_nuxt/ShopCartBar.HlQJjN-D.js"
  },
  "/_nuxt/ShopCartBar.iS6Wm7Is.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3a6-JoWwOoDwQhKRl2eQVqWo2Zl8cb8\"",
    "mtime": "2024-01-17T18:36:44.517Z",
    "size": 934,
    "path": "../public/_nuxt/ShopCartBar.iS6Wm7Is.css"
  },
  "/_nuxt/ShopLine.mVFwCHL6.js": {
    "type": "application/javascript",
    "etag": "\"1012-VWDFO8UxbwdF6ul8PTY4yXNkrdY\"",
    "mtime": "2024-01-17T18:36:44.568Z",
    "size": 4114,
    "path": "../public/_nuxt/ShopLine.mVFwCHL6.js"
  },
  "/_nuxt/ShopLine.PGliGu9i.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f-cZD6x+xC9cU1/GOeE3HZDhgndVU\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 63,
    "path": "../public/_nuxt/ShopLine.PGliGu9i.css"
  },
  "/_nuxt/SigninCard.vue.yLddT0RR.js": {
    "type": "application/javascript",
    "etag": "\"69d-BGtCHo1u3VkRnVJyI0KXgYkgIfY\"",
    "mtime": "2024-01-17T18:36:44.544Z",
    "size": 1693,
    "path": "../public/_nuxt/SigninCard.vue.yLddT0RR.js"
  },
  "/_nuxt/sku.o_NVcctg.js": {
    "type": "application/javascript",
    "etag": "\"db-aDXdiHOHAQvY3GW9DzrykhsPdjU\"",
    "mtime": "2024-01-17T18:36:44.531Z",
    "size": 219,
    "path": "../public/_nuxt/sku.o_NVcctg.js"
  },
  "/_nuxt/StatusTag.12yTdzVi.js": {
    "type": "application/javascript",
    "etag": "\"308-xIzSFRlqQeqNIU8/qiJm2Cx/gYs\"",
    "mtime": "2024-01-17T18:36:44.566Z",
    "size": 776,
    "path": "../public/_nuxt/StatusTag.12yTdzVi.js"
  },
  "/_nuxt/StatusTag.IETAoY75.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"41-KOTxPkEHkv+BZCUT2VVaknp2HSI\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 65,
    "path": "../public/_nuxt/StatusTag.IETAoY75.css"
  },
  "/_nuxt/strings.PBHHvk2X.js": {
    "type": "application/javascript",
    "etag": "\"9d-On5TViaxAs3NAPLPC1Pn+LO+uto\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 157,
    "path": "../public/_nuxt/strings.PBHHvk2X.js"
  },
  "/_nuxt/swiper-vue.4ZhlhtKr.js": {
    "type": "application/javascript",
    "etag": "\"3183a-cQ28gEnffUAUpH7XgjgTfzbM5v0\"",
    "mtime": "2024-01-17T18:36:44.550Z",
    "size": 202810,
    "path": "../public/_nuxt/swiper-vue.4ZhlhtKr.js"
  },
  "/_nuxt/swiper-vue.CRufKKKm.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"45b5-Uf4palSn3SZPcPVYFNXmTLb/WVg\"",
    "mtime": "2024-01-17T18:36:44.461Z",
    "size": 17845,
    "path": "../public/_nuxt/swiper-vue.CRufKKKm.css"
  },
  "/_nuxt/Switch.CiJ5_qW7.js": {
    "type": "application/javascript",
    "etag": "\"473-rIRxJLHqAHDWe+qa9SNED3ybiiA\"",
    "mtime": "2024-01-17T18:36:44.567Z",
    "size": 1139,
    "path": "../public/_nuxt/Switch.CiJ5_qW7.js"
  },
  "/_nuxt/Switch._5kgRD0B.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e9-Glmo1b+GMMnkTS5DmIaRlWbzlqs\"",
    "mtime": "2024-01-17T18:36:44.489Z",
    "size": 233,
    "path": "../public/_nuxt/Switch._5kgRD0B.css"
  },
  "/_nuxt/tabs.H-UKPvku.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4260-FjgMpy70OPptfu2MbjafO2UrmJo\"",
    "mtime": "2024-01-17T18:36:44.486Z",
    "size": 16992,
    "path": "../public/_nuxt/tabs.H-UKPvku.css"
  },
  "/_nuxt/tabs.hIqoD_La.js": {
    "type": "application/javascript",
    "etag": "\"2215-quGqRDAzLR1CALSq8QOieVtwZNY\"",
    "mtime": "2024-01-17T18:36:44.567Z",
    "size": 8725,
    "path": "../public/_nuxt/tabs.hIqoD_La.js"
  },
  "/_nuxt/tag.Q9i6oaRN.js": {
    "type": "application/javascript",
    "etag": "\"69d-gymLPPcXaXKSjvutucOZEKV9skM\"",
    "mtime": "2024-01-17T18:36:44.581Z",
    "size": 1693,
    "path": "../public/_nuxt/tag.Q9i6oaRN.js"
  },
  "/_nuxt/tag.WI6po7qa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"17ad-xSPFOV9e/DVwtRUN63CwDhsZCD8\"",
    "mtime": "2024-01-17T18:36:44.502Z",
    "size": 6061,
    "path": "../public/_nuxt/tag.WI6po7qa.css"
  },
  "/_nuxt/TagList.vue.OYkBucBE.js": {
    "type": "application/javascript",
    "etag": "\"303-1pVhzDeQygW+di2/50CX5bFvqVY\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 771,
    "path": "../public/_nuxt/TagList.vue.OYkBucBE.js"
  },
  "/_nuxt/tooltip.f0mNRiTD.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk\"",
    "mtime": "2024-01-17T18:36:44.510Z",
    "size": 0,
    "path": "../public/_nuxt/tooltip.f0mNRiTD.css"
  },
  "/_nuxt/upload.0ACO-yOs.js": {
    "type": "application/javascript",
    "etag": "\"3329-j+fS43VEGybuFM8Gnu22trKaBJc\"",
    "mtime": "2024-01-17T18:36:44.595Z",
    "size": 13097,
    "path": "../public/_nuxt/upload.0ACO-yOs.js"
  },
  "/_nuxt/upload.5r92S6hB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2a80-FS6BbtOa/PcUyfSYPWpdWV0rdcE\"",
    "mtime": "2024-01-17T18:36:44.507Z",
    "size": 10880,
    "path": "../public/_nuxt/upload.5r92S6hB.css"
  },
  "/_nuxt/useOrderStore._PjEUjF8.js": {
    "type": "application/javascript",
    "etag": "\"49c-Hkaiobx9uBlM2WgQR2JD/DVYMKU\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 1180,
    "path": "../public/_nuxt/useOrderStore._PjEUjF8.js"
  },
  "/_nuxt/user.JBSyJdxc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10e1-apy9u1Bkzm0wI9rv+3kpDFza2fI\"",
    "mtime": "2024-01-17T18:36:44.489Z",
    "size": 4321,
    "path": "../public/_nuxt/user.JBSyJdxc.css"
  },
  "/_nuxt/user.r7Bf14l-.js": {
    "type": "application/javascript",
    "etag": "\"2202-sDl2utXPAIrmy8ZlkvHCVBOq1ec\"",
    "mtime": "2024-01-17T18:36:44.579Z",
    "size": 8706,
    "path": "../public/_nuxt/user.r7Bf14l-.js"
  },
  "/_nuxt/UserLine.AOrglsBR.js": {
    "type": "application/javascript",
    "etag": "\"15e9-g36eO2agiDmvmKqhqet/MI8RqFw\"",
    "mtime": "2024-01-17T18:36:44.579Z",
    "size": 5609,
    "path": "../public/_nuxt/UserLine.AOrglsBR.js"
  },
  "/_nuxt/UserLine.EVm1sRas.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d7-YGppo8hAuHVz00V79u72ajloOvg\"",
    "mtime": "2024-01-17T18:36:44.516Z",
    "size": 2007,
    "path": "../public/_nuxt/UserLine.EVm1sRas.css"
  },
  "/_nuxt/UserPostTotal.vue.tXDYBjip.js": {
    "type": "application/javascript",
    "etag": "\"785-ljFtxgxA7niOVCHY1TAmmckRlwM\"",
    "mtime": "2024-01-17T18:36:44.537Z",
    "size": 1925,
    "path": "../public/_nuxt/UserPostTotal.vue.tXDYBjip.js"
  },
  "/_nuxt/useToggleThemeAnima.rqlolBiN.js": {
    "type": "application/javascript",
    "etag": "\"9d5-8FVyjVVC6yULQ5U50raX9IuLaXY\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 2517,
    "path": "../public/_nuxt/useToggleThemeAnima.rqlolBiN.js"
  },
  "/_nuxt/useWs.6oZqrKhZ.js": {
    "type": "application/javascript",
    "etag": "\"743-5xeuX/cJlvMwulFXA2b4FlanV+c\"",
    "mtime": "2024-01-17T18:36:44.522Z",
    "size": 1859,
    "path": "../public/_nuxt/useWs.6oZqrKhZ.js"
  },
  "/_nuxt/wallet.4VXjP_Eq.js": {
    "type": "application/javascript",
    "etag": "\"6f261-mQsaOQlPfhvk0sBCgNcCeGKv6lA\"",
    "mtime": "2024-01-17T18:36:44.596Z",
    "size": 455265,
    "path": "../public/_nuxt/wallet.4VXjP_Eq.js"
  },
  "/_nuxt/wallet.7z599r9w.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1e46-zqXIhJiVW5xjtWljT6He+LXsvLs\"",
    "mtime": "2024-01-17T18:36:44.488Z",
    "size": 7750,
    "path": "../public/_nuxt/wallet.7z599r9w.css"
  },
  "/_nuxt/_...all_.-yHGZ_5X.js": {
    "type": "application/javascript",
    "etag": "\"1e2-d9PIukQ+xJTUXiaOptJpHIMg8c4\"",
    "mtime": "2024-01-17T18:36:44.530Z",
    "size": 482,
    "path": "../public/_nuxt/_...all_.-yHGZ_5X.js"
  },
  "/_nuxt/_eid_.ePDFmoGf.js": {
    "type": "application/javascript",
    "etag": "\"180f-CxQCfbZYehYbFGR8vmOcsmvsHN0\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 6159,
    "path": "../public/_nuxt/_eid_.ePDFmoGf.js"
  },
  "/_nuxt/_eid_.NtANQ6Xa.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"19d-7ts6lNIQIAHjSxj1N158AL50K90\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 413,
    "path": "../public/_nuxt/_eid_.NtANQ6Xa.css"
  },
  "/_nuxt/_id_.65PfMBS2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"208-eScxT7eFZApuPIFLXQt3LhLDkPE\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 520,
    "path": "../public/_nuxt/_id_.65PfMBS2.css"
  },
  "/_nuxt/_id_.aMaLPm5w.js": {
    "type": "application/javascript",
    "etag": "\"276a-ZJWE9p8VageshQWsw09awkkQxOI\"",
    "mtime": "2024-01-17T18:36:44.554Z",
    "size": 10090,
    "path": "../public/_nuxt/_id_.aMaLPm5w.js"
  },
  "/_nuxt/_id_.CrlxCm03.js": {
    "type": "application/javascript",
    "etag": "\"afe5-abrHoNPG3M0OJk2sF7InfHMlwoc\"",
    "mtime": "2024-01-17T18:36:44.563Z",
    "size": 45029,
    "path": "../public/_nuxt/_id_.CrlxCm03.js"
  },
  "/_nuxt/_id_.iVYBvVa-.js": {
    "type": "application/javascript",
    "etag": "\"e12-m4PXe2XBRkKZya1Pv7gb3LlJp/Q\"",
    "mtime": "2024-01-17T18:36:44.555Z",
    "size": 3602,
    "path": "../public/_nuxt/_id_.iVYBvVa-.js"
  },
  "/_nuxt/_id_.IxhEnMHV.js": {
    "type": "application/javascript",
    "etag": "\"34a6-iuW3bthRxWsetcG6z6y/OJnY4lo\"",
    "mtime": "2024-01-17T18:36:44.560Z",
    "size": 13478,
    "path": "../public/_nuxt/_id_.IxhEnMHV.js"
  },
  "/_nuxt/_id_.qbBlAh-Z.js": {
    "type": "application/javascript",
    "etag": "\"191-6LqCsg9B0m0jj0mpWxftH4qJQLE\"",
    "mtime": "2024-01-17T18:36:44.542Z",
    "size": 401,
    "path": "../public/_nuxt/_id_.qbBlAh-Z.js"
  },
  "/_nuxt/_id_.uLkKhAnM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2ead-CGzJT69XAKCjLHZAiLhge9y0kjY\"",
    "mtime": "2024-01-17T18:36:44.472Z",
    "size": 11949,
    "path": "../public/_nuxt/_id_.uLkKhAnM.css"
  },
  "/_nuxt/_id_.XxE3UavD.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"207-PsBTZ71iqI2wyYgf5e7/FQZuSkg\"",
    "mtime": "2024-01-17T18:36:44.471Z",
    "size": 519,
    "path": "../public/_nuxt/_id_.XxE3UavD.css"
  },
  "/_nuxt/_id_.YmHYZMIz.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ab7-XBGJbyT9huEgKe4uW60+Q32yFao\"",
    "mtime": "2024-01-17T18:36:44.471Z",
    "size": 2743,
    "path": "../public/_nuxt/_id_.YmHYZMIz.css"
  },
  "/images/icon/moon.svg": {
    "type": "image/svg+xml",
    "etag": "\"8c1-+ebizzSqqhl84c+aEwkRUbIuazs\"",
    "mtime": "2024-01-17T12:18:34.429Z",
    "size": 2241,
    "path": "../public/images/icon/moon.svg"
  },
  "/images/icon/success_cone.svg": {
    "type": "image/svg+xml",
    "etag": "\"172d-RbyPZwpiTfgsO/lafAJ4owrFiTg\"",
    "mtime": "2024-01-17T12:18:34.430Z",
    "size": 5933,
    "path": "../public/images/icon/success_cone.svg"
  },
  "/images/icon/sun.svg": {
    "type": "image/svg+xml",
    "etag": "\"a2d-RdolZoo2ptZHIBj8RjYens9rpWw\"",
    "mtime": "2024-01-17T12:18:34.431Z",
    "size": 2605,
    "path": "../public/images/icon/sun.svg"
  },
  "/images/icon/wx.svg": {
    "type": "image/svg+xml",
    "etag": "\"540-O4BsaakBV3RWi4Iom+eHR95jmdU\"",
    "mtime": "2024-01-17T12:18:34.431Z",
    "size": 1344,
    "path": "../public/images/icon/wx.svg"
  },
  "/images/logo/kiwi_strong.svg": {
    "type": "image/svg+xml",
    "etag": "\"781-lEdjlXLMS27XXcujZ/kLRjPeZvk\"",
    "mtime": "2024-01-17T12:18:34.433Z",
    "size": 1921,
    "path": "../public/images/logo/kiwi_strong.svg"
  },
  "/images/logo/logo.png": {
    "type": "image/png",
    "etag": "\"2028-8d2iH3QQw44GXDvPjv70jxRyXOM\"",
    "mtime": "2024-01-17T12:18:34.434Z",
    "size": 8232,
    "path": "../public/images/logo/logo.png"
  },
  "/images/logo/logo_dark.png": {
    "type": "image/png",
    "etag": "\"b97-oKTbtL8vJBYABefs/xTUy92Hj98\"",
    "mtime": "2024-01-17T12:18:34.434Z",
    "size": 2967,
    "path": "../public/images/logo/logo_dark.png"
  },
  "/images/logo/logo_title.png": {
    "type": "image/png",
    "etag": "\"1970-rSfCM7wwHPYD2WNNoBwo+G5RxB4\"",
    "mtime": "2024-01-17T12:18:34.435Z",
    "size": 6512,
    "path": "../public/images/logo/logo_title.png"
  },
  "/images/logo/logo_txt.png": {
    "type": "image/png",
    "etag": "\"22a3-UTTGF7X0E6desgHjSB0T539xRwM\"",
    "mtime": "2024-01-17T12:18:34.436Z",
    "size": 8867,
    "path": "../public/images/logo/logo_txt.png"
  },
  "/images/other/index_bg.png": {
    "type": "image/png",
    "etag": "\"3a467-ZmMh8dqqRmVFUx/fXDMFICJ/SO8\"",
    "mtime": "2024-01-17T12:18:34.441Z",
    "size": 238695,
    "path": "../public/images/other/index_bg.png"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-N6/09z9EccLu0IfX9Qd8Rtp0AN8\"",
    "mtime": "2024-01-17T18:38:54.814Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/5a0850a3-e0c0-43c4-ac50-cf30b2ca5b1f.json": {
    "type": "application/json",
    "etag": "\"8b-tjht69hTDhdKfEKvyghEVLrcNNU\"",
    "mtime": "2024-01-17T18:38:54.816Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/5a0850a3-e0c0-43c4-ac50-cf30b2ca5b1f.json"
  },
  "/_nuxt/builds/meta/dev.json": {
    "type": "application/json",
    "etag": "\"6a-YgQexeUxoVvc1tDXPEUywBR12Fw\"",
    "mtime": "2024-01-17T18:37:47.847Z",
    "size": 106,
    "path": "../public/_nuxt/builds/meta/dev.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises$1.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_GigtuS = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_GigtuS, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_GigtuS, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $fetch as $, isEqual as A, setCookie as B, getCookie as C, deleteCookie as D, parseQuery as E, withTrailingSlash as F, withoutTrailingSlash as G, nodeServer as H, send as a, setResponseStatus as b, setResponseHeaders as c, useRuntimeConfig as d, eventHandler as e, getQuery as f, getResponseStatus as g, createError$1 as h, getRouteRules as i, joinURL as j, hash as k, getResponseStatusText as l, destr as m, hasProtocol as n, isScriptProtocol as o, parseURL as p, defu as q, readBody as r, setResponseHeader as s, sanitizeStatusCode as t, useNitroApp as u, createHooks as v, withQuery as w, klona as x, parse as y, getRequestHeader as z };
//# sourceMappingURL=node-server.mjs.map
