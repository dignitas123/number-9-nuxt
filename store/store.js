import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    navsliderOpen: false,
  },
  mutations: {
    toggleNavbar (state, open) {
      state.navsliderOpen = open;
    }
  }
});
