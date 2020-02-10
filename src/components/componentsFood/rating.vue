<template>
  <div class="d-flex justify-content-center align-items-center m-3">
    <star-rating @rating-selected="setRating" :increment="0.1" inactive-color="#ffcc99"  active-color="#ffff66" :border-width="1" :rating="rating"></star-rating>
  </div>
</template>

<script>
import { mapGetters  } from 'vuex'
import StarRating from 'vue-star-rating'
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();

export default {
   computed:{
    ...mapGetters({ detailFoods:'food/detailFoods'})
  },
  props:{
    model : {
      required : true
    }
  },
  data() {
    return {
      rating: 0
    }
  },
  methods: {
    setRating: function(rating){
      this.rating = rating;
      foodService.fetchSetPoint({ id:this.detailFoods.menuId , userId:this.detailFoods.userId, point: this.rating }).then(resp => {
      })
    }
  },
  components: {
    StarRating
  }
}
</script>