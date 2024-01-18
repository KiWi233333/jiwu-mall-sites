import { u as useColorMode } from './composables-6B_M9sIU.mjs';

function useModeToggle(mode, event) {
  const colorMode = useColorMode();
  if (mode === "auto") {
    const hours = (/* @__PURE__ */ new Date()).getHours();
    colorMode.preference = hours > 18 && hours < 6 ? "dark" : "light";
    return;
  }
  {
    colorMode.preference = mode;
    return;
  }
}

export { useModeToggle as u };
//# sourceMappingURL=useToggleThemeAnima-5Zw48dpp.mjs.map
