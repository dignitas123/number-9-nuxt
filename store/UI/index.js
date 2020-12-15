const state = () => ({
  navsliderOpen: false,
})

const mutations = {
  toggle(state, open) {
    state.navsliderOpen = open
  },
}

const getters = {
  navsliderOpen(state) {
    return state.navsliderOpen
  },
}

export default {
  state,
  mutations,
  getters,
  namespaced: true,
}
