<template>
  <div>
    <button @click="CreateCMS">create</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
export default {
  data() {
    return {};
  },
  mounted(){
    this.GetApiIngredients();
  },
  methods: {
    ...mapActions({getIngredients : 'food/getIngredients'}),
    CreateCMS(){
      this.$router.push('/cms/create')
    },
    GetApiIngredients() {
      foodService.fetchGetApiIngredients().then(resp => {
        var dataGetIngredients = [resp.data]
        this.getIngredients(dataGetIngredients)
        
      })
    }
  }
};
</script>

<style lang="css">
</style>
