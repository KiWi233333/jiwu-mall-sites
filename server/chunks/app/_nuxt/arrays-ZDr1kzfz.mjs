const unique = (arr) => [...new Set(arr)];
const castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};

export { castArray as c, unique as u };
//# sourceMappingURL=arrays-ZDr1kzfz.mjs.map
