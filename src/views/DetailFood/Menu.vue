<template>
 <div class="animated fadeIn row">
    <div v-for="(detailFood, index) in detailFood" :key="index" class="col-sm-4">
        <a href="#"> <h2 style="line-height:1.2em;color: #000000;">{{detailFood.menuName}}</h2></a>
        <b-card
          overlay
          :title="detailFood.menuName"
          img-alt="Card Image"
          text-variant="white"
          style="max-width: 30rem;"
          align="center"
          class="imgbg shadow-lg block"
        >
          <h3 class="animate-text text-animate">
            <b-card-text>Choose this Menu</b-card-text>
          </h3>
        </b-card>
        <ratingReadOnly />
        <buttons />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import buttons from '@/components/componentsFood/button'
import ratingReadOnly from '@/components/componentsFood/ratingReadOnly'
export default {
  name: 'Menu',
  computed: {
    ...mapGetters({ detailFood: 'food/detailFood' })
  },
  components:{
    buttons,
    ratingReadOnly
  }
}
</script>

<style lang="scss">
.imgbg {
  border: none;
  width: 100%;
  height: 180px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  background: linear-gradient(40deg, #ff9966, #ff6666, #cc66cc) !important;
}
.card-img {
  border-radius: 5px;
  width: 100%;
  height: 100%;
}
.text-animate {
  font-weight: 100;
  font-style: italic;
  transform: translateX(200px);
}
.animate-text {
  opacity: 0;
  transition: all 0.6s ease-in-out;
}
.block:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}
.block:hover {
  z-index: 100;
  -webkit-animation: scale 0.3s linear;
  -moz-animation: scale 0.3s linear;
  animation: scale 0.3s linear;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
    -webkit-box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.1);
  }
}

@keyframes scaledown {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>