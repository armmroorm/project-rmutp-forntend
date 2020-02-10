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
    },
    getModelUpdate: ({ commit }, DataUpdate) => {
      commit('addModelUpdate', DataUpdate)
    }
  }, state: {
    food: Object,
    detail: Object,
    data: [],
    dataUpdate: null
    
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
    addModelUpdate: (state, addDataUpdate) => {
      state.dataUpdate = addDataUpdate
    },
  }, getters: {
    detailFood: state => state.food,
    detailFoods: state => state.detail,
    getData: state => state.data,
    getDataUpdate : state => state.dataUpdate
  }
}