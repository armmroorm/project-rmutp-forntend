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
  data() {
    return {
      images: [
            {
            title: "title 1",
            href:'img/Foods/1.webp'
            },
            {
             title: "title 2",
            href: 'img/Foods/2.webp'
            },
            {
             title: "title 2",
            href: 'img/Foods/1.webp'
            },   
            {
            title: "title 2",
            href: 'img/Foods/1.webp'
            },   
            {
            title: "title 2",
            href: 'img/Foods/1.webp'
            },   
     ],
    };
  },
}
</script>

<style lang="scss">
  
</style>