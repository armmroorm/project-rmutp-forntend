<template>
  <div>
    <Gallery :images="images" ></Gallery>
  </div>
</template>

<script>
import Gallery from "vue-cover-gallery"
export default {
  components: {
    Gallery
  },
  mounted(){
    if (this.ImgFood) {
      this.add();
    }
  },
  props:{
    ImgFood : {
      required : true
    }
  },
  methods:{
    add(){
      this.images = this.ImgFood;
    }
  },
  data() {
    return {
      images: [
            {
            href:'img/food.jpg'
            },  
            {
            href:'img/food.jpg'
            },  
            {
            href:'img/food.jpg'
            },  
            {
            href:'img/food.jpg'
            },  
            {
            href:'img/food.jpg'
            }
     ],
    };
  },
}
</script>

<style lang="scss">
  
</style>