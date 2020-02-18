<template>
  <div class="animated fadeIn">
  <div>
    <Gallery :images="images"></Gallery>
  </div>
     <!-- <div class="input-group input-group-lg my-3">
      <div class="input-group-prepend"> <span class="input-group-text"> <i class="icon-magnifier"></i> </span></div>
      <input type="text" id="search" class="form-control" v-model="search" placeholder="ค้นหาเมนูอาหาร" aria-label="Search" autocomplete="on" />
    </div> -->
    <div class="row">
      <div v-for="(detailFood, index) in DataDashboard" :key="index" class="col-sm-4">
        <a @click="getID(detailFood)"> <h2 style="line-height:1.2em;color: #000000;cursor: pointer;">{{detailFood.menuName}}</h2></a>
        <b-card
          v-if="detailFood.imgPath !== null"
          overlay
          :title="detailFood.menuName"
          img-alt="Card Image"
          :img-src="detailFood.imgPath[0].href"
          text-variant="white"
          style="max-width: 30rem;"
          @click="getID(detailFood)"
          align="center"
          class="imgbg shadow-lg blockMenu"
        >
          <h3 class="animate-text text-animate">
            <b-card-text>Choose this Menu</b-card-text>
          </h3>
        </b-card>
        <b-card
          v-else
          overlay
          :title="detailFood.menuName"
          img-alt="Card Image"
          text-variant="white"
          style="max-width: 30rem;"
          @click="getID(detailFood)"
          align="center"
          class="imgbg shadow-lg blockMenu"
        >
          <h3 class="animate-text text-animate">
            <b-card-text>Choose this Menu</b-card-text>
          </h3>
        </b-card>
        
        <div  v-if="detailFood !== null">
          <div>
            <star-rating :increment="0.1" inactive-color="#ffcc99" :read-only="true" :star-size="35"  active-color="#ffff66" :border-width="1" :rating="detailFood.point "></star-rating>
          </div>
        </div>
        <div v-if="detailFood == null">
          <star-rating :increment="0.1" inactive-color="#ffcc99" :read-only="true" :star-size="35"  active-color="#ffff66" :border-width="1" :rating="rating"></star-rating>
        </div>
        <buttons :model="detailFood" />
      </div>
    </div>
  </div>
</template>
<script>
import Gallery from "vue-cover-gallery"
import { mapActions,mapGetters } from 'vuex';
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
import card from '@/components/componentsFood/card'
import buttons from '@/components/componentsFood/button'
import StarRating from 'vue-star-rating'
export default {
  name: "dashboard",
  data() {
    return {
      Details: Object,
      images: [],
      DataDashboard:[],
      rating: 0,
      search: ''
    };
  },
  components:{
    Gallery,
    buttons,
    StarRating
  },
  mounted: function() {
    this.getFetchGetTopMenu();
    if (this.detailFood) {
      for(var i = 0;i < this.detailFood.length; i++){
        if (i === 9) { break; }
        this.DataDashboard.push(this.detailFood[i])
      }
    }
  },
  computed: {
    ...mapGetters({ detailFood: 'food/detailFood'}),
    // filteredCardFood() {
    //   let text = this.search.trim().toLowerCase()
    //   return this.detailFood.filter(index => {
    //     return index.menuName.toLowerCase().includes(text)
    //   });
    // },
  },
  methods: {
    ...mapActions({setDetailFood: 'food/setDetailFood',getDetailFood: 'food/getDetailFood',}),
    getID(detailFood) {1
      let foodID = detailFood.id
      let categoryIdFood = detailFood.categoryId
      foodService.fetchGetDetailFood({ id:foodID, categoryId:categoryIdFood }).then( resp => {
        let DataFood = resp.data
        this.setDetailFood(DataFood)
        this.$router.push('/details')
      })
    },
    add(){
      for (var i = 0; i < this.detailFood.length; i++) {
        this.images.push({href: this.detailFood[i].imgPath[0].href})
      } 
    },
    getFetchGetTopMenu(){
      foodService.fetchGetTopMenu({token : 'token'}).then(res => {
        this.Details = res.data
        this.getDetailFood(this.Details);
        this.add();
      })
    }
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
.blockMenu:hover .animate-text {
  transform: translateX(0);
  opacity: 1;
}
.blockMenu:hover {
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

