export const food = {
  namespaced: true,
  actions: {
      getDetailFood: ({ commit }, food) => {
        commit('addDetailFood', food)
      },

  }, state: {
      food: Object,
      data: [ { id:"001", name:"วัตถุดิบ", 
                ingredients:[ {name:"น้ำปลา"},{name:"ผงชูรส"},{name:"พริกสด"},
                              {name:"พริกหยวก"},{name:"พริกขี้หนู"},{name:"เกลือปน"},
                              {name:"เกลือแปรรูป"},{name:"เกลือทรายแดง"}
                            ]
              }
            ]
  }, mutations: {
      addDetailFood: (state, addFood) => {
          state.food = addFood
      },
  }, getters: {
      detailFood: state => state.food,
      getData: state => state.data
  }
}