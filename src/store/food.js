export const food = {
  namespaced: true,
  actions: {
    getDetailFood: ({ commit }, food) => {
      commit('addDetailFood', food)
    },
    setDetailFood: ({ commit }, foods) => {
      commit('setDetailFoods', foods)
    },
    getIngredients: ({ commit }, Data) => {
      commit('addIngredients', Data)
    }
  }, state: {
    food: Object,
    detail: Object,
    data: [],
    
  }, mutations: {
    addDetailFood: (state, addFood) => {
      state.food = addFood
    },
    setDetailFoods: (state, addFoods) => {
      state.detail = addFoods
    },
    addIngredients: (state, addData) => {
      state.data = addData
    },
  }, getters: {
    detailFood: state => state.food,
    detailFoods: state => state.detail,
    getData: state => state.data
  }
}