<template>
  <div class="animated fadeIn divfixed">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      class="mb-4"
      img-width="1024"
      img-height="480"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(model,index) in img" :key="index"
        caption="พล่ากุ้ง"
        text="..."
        :img-src="model"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data() {
    return {
      img: ['img/Foods/1.webp','img/Foods/2.webp']
    };
  },
  methods: {
  }
};
</script>
<style lang="scss">
.img-fluid {
  height: 610px;
}
.divfixed {
  width: 900px;
  text-align: center;
  margin: auto;
}
@media only screen and (max-width: 768px) {
  .img-fluid {
    height: auto;
  }
  .divfixed{
    width: 100% !important;
}
}
</style>

