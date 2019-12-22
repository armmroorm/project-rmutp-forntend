export const food = {
  namespaced: true,
  actions: {
      getDetailFood: ({ commit }, food) => {
          commit('addDetailFood', food)
      },

  }, state: {
          food: Object,
  }, mutations: {
      addDetailFood: (state, addFood) => {
          state.food = addFood
      },
  }, getters: {
      detailFood: state => state.food,
  }
}