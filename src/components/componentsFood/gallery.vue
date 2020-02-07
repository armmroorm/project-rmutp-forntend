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
    this.add()
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
            // {
            // href:'http://localhost:9000/img/imgfood/menuid1/1-1.png'
            // },  
            // {
            // href:'http://localhost:9000/img/imgfood/menuid1/1-0.png'
            // },  
            // {id: "3", menuId: "3", href: "http://localhost:9000/img/imgfood/menuid3/3-0.png"},
            // {id: "4", menuId: "3", href: "http://localhost:9000/img/imgfood/menuid3/3-1.png"},
            // {id: "5", menuId: "3", href: "http://localhost:9000/img/imgfood/menuid3/3-2.png"},
            // {id: "6", menuId: "3", href: "http://localhost:9000/img/imgfood/menuid3/3-3.png"},
            // {id: "7", menuId: "3", href: "http://localhost:9000/img/imgfood/menuid3/3-4.png"}
     ],
    };
  },
}
</script>

<style lang="scss">
  
</style>