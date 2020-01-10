<template>
  <div>
    <loading v-if="LoadingSubmit === false" />
    <button @click="CreateCMS">create</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
export default {
  data() {
    return {
      LoadingSubmit : false,
    };
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
        if (resp.data.status === false) {
          alert(resp.data.status === false)
          this.LoadingSubmit = true
        }
        else {
          var dataGetIngredients = [resp.data]
          this.getIngredients(dataGetIngredients)
          this.LoadingSubmit = true
        }
      }).catch(err => {
          alert(err)
        })
    }
  }
};
</script>

<style lang="css">
</style>
