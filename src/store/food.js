export const food = {
  namespaced: true,
  actions: {
    getDetailFood: ({ commit }, food) => {
      commit('addDetailFood', food)
    },
    getIngredients: ({ commit }, Data) => {
      commit('addIngredients', Data)
    }
  }, state: {
    food: Object,
    data: [],
    
  }, mutations: {
    addDetailFood: (state, addFood) => {
      state.food = addFood
    },
    addIngredients: (state, addData) => {
      state.data = addData
    },
  }, getters: {
    detailFood: state => state.food,
    getData: state => state.data
  }
}