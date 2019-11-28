<template>
  <div class="d-flex justify-content-center align-items-center m-3">
    <star-rating @rating-selected="setRating" inactive-color="#ffcc99"  active-color="#ffff66" :border-width="1" :rating="rating"></star-rating>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  data() {
    return {
      rating: 0
    }
  },
  methods: {
    setRating: function(rating){
      this.rating= rating;
    }
  },
  components: {
    StarRating
  }
}
</script>