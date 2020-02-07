<template>
  <div></div>
</template>

<script>
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
import { mapActions } from 'vuex';
export default {
  name:'UserFood',
  data() {
    return {
      Details: Object
    }
  },
  mounted(){
    this.getBoard();
  },
  methods: {
    ...mapActions({
    getDetailFood: 'food/getDetailFood',
    }),
    getBoard() {
      const boardID =  '1'
      foodService.fetchGetCategoryMenu({categoryId : boardID, userId: '1', adminId:'0'}).then(resp => {
        this.Details = resp.data
        this.getDetailFood(this.Details)
        this.$router.push('/community/menu')
      })
    }
  }
}
</script>