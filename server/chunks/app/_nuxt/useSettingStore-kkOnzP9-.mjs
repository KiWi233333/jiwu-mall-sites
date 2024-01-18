import { ref } from 'vue';
import { b as getCommCategory } from './category-HtxOPKX5.mjs';
import { q as defineStore, r as persistedState } from '../server.mjs';

const useSettingStore = defineStore("setting", () => {
  const isUserFold = ref(true);
  const isUserCollapse = ref(true);
  const isFold = ref(true);
  const isCollapse = ref(true);
  const menuList = ref([{
    url: "/",
    icon: "i-solar:home-2-bold",
    title: "\u9996\u9875",
    children: []
  }, {
    url: "/community/post/list",
    icon: "i-solar:ufo-3-bold-duotone",
    title: "\u6781\u7269\u5708",
    children: []
  }, {
    url: "/category",
    icon: "i-solar:widget-5-bold-duotone",
    title: "\u5708\u5B50",
    disabled: true,
    children: []
  }, {
    url: "/chat",
    icon: "i-solar:chat-round-bold-duotone",
    title: "\u804A\u5929",
    children: []
  }, {
    url: "/setting",
    icon: "i-solar:settings-linear",
    title: "\u8BBE\u7F6E",
    children: []
  }]);
  async function loadMenus() {
    var _a, _b;
    const {
      data
    } = await getCommCategory();
    menuList.value[2].children = ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.map((p) => toMenuTypeFn(p))) || [];
  }
  function toMenuTypeFn(p) {
    var _a, _b;
    const arr = {
      url: `/community/category/${p.id}`,
      icon: "",
      image: p.image,
      title: p.name,
      children: []
    };
    if ((_a = p.children) == null ? void 0 : _a.length)
      arr.children = (_b = p.children) == null ? void 0 : _b.map((item) => toMenuTypeFn(item));
    return arr;
  }
  const settingPage = ref({
    // 字体
    fontFamily: {
      value: "Alimama",
      list: [{
        name: "\u963F\u91CC\u5988\u5988\u65B9\u5706\u4F53",
        value: "Alimama"
      }, {
        name: "\u5B57\u73A9\u54E5\u7279\u9ED1\u767D\u65E0\u5E38\u4F53",
        value: "ZiWanGeTe"
      }, {
        name: "\u963F\u91CC\u5065\u5EB7\u4F532.0",
        value: "AlibabaHealthFont2"
      }, {
        name: "\u963F\u91CC\u5988\u5988\u5200\u96B6\u4F53",
        value: "AlimamaDaoLiTi"
      }, {
        name: "\u963F\u91CC\u5988\u5988\u4E1C\u65B9\u5927\u6977",
        value: "Alimama_DongFangDaKai"
      }]
    },
    modeToggle: {
      value: "auto",
      list: [{
        name: "\u81EA\u52A8",
        value: "auto"
      }, {
        name: "\u65E5\u95F4",
        value: "light"
      }, {
        name: "\u591C\u95F4",
        value: "dark"
      }]
    }
  });
  const isChatFold = ref(false);
  return {
    isChatFold,
    // state
    isCollapse,
    menuList,
    isFold,
    isUserCollapse,
    isUserFold,
    settingPage,
    // actions
    loadMenus
    // getter
  };
}, {
  // https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
  persist: {
    storage: persistedState.cookies
  }
});

export { useSettingStore as u };
//# sourceMappingURL=useSettingStore-kkOnzP9-.mjs.map
