import { createStore } from "vuex";

export default createStore({
  state: {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfm_Yj07urIb_fF0mTRGZgl5DWt5lC2qYd4TngwXWMgMHiYMg/viewform?pli=1",
  },
  getters: {
    openLink(state) {
      return window.open(state.url, "_blank");
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
