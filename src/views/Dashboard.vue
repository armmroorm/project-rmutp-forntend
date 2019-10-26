<template>
  <div class="animated fadeIn">
    <b-carousel
      id="carousel-fade"
      v-model="slide"
      :interval="4000"
      controls
      fade
      indicators
      background="#ababab"
      img-width="1024"
      img-height="350"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    > 
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(model,index) in img" :key="index"
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        :img-src="model"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "dashboard",
  data() {
    return {
      slide: 0,
      sliding: null,
      img: ['https://picsum.photos/1024/350/?image=52','https://picsum.photos/1024/350/?image=54','https://picsum.photos/1024/350/?image=58','https://picsum.photos/1024/350/?image=55']
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style>
</style>

