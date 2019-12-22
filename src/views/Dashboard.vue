<template>
  <div class="animated fadeIn">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      class="mb-4 divfixed"
      img-width="1024"
      img-height="480"
    >
      <!-- Text slides with image -->
        <b-carousel-slide
              v-for="(model,index) in DetailMenu" :key="index"
              :caption="model.Menu"
              @click="showDetail()"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              :img-src="model.img"
        ></b-carousel-slide>
    </b-carousel>
       <card :DetailMenu="DetailMenu" />
  </div>
</template>
<script>
import card from '@/components/componentsFood/card'
export default {
  name: "dashboard",
  data() {
    return {
      DetailMenu:Object,
    };
  },
  components:{
    card
  },
  mounted: function() {
    this.DetailMenu = [
      {img:'img/Foods/1.webp',Menu:'Menu 1'},
      {img:'img/Foods/2.webp',Menu:'Menu 2'},
      {img:'img/Foods/1.webp',Menu:'Menu 3'},
      {img:'img/Foods/2.webp',Menu:'Menu 4'},
      {img:'img/Foods/1.webp',Menu:'Menu 5'},
      {img:'img/Foods/2.webp',Menu:'Menu 6'},
    ]
  },
  methods: {
    showDetail(){
      this.$router.push('/details')
    },
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

