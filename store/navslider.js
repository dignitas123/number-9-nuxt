export const state = () => ({
  open: false,
})

export const mutations = {
  open(state) {
    state.open = true
  },
  close(state) {
    state.open = false
  },
}
