import { createStore } from "vuex";

export default createStore({
  state: {
    url: "https://axios-http.com/ru/docs/intro",
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
