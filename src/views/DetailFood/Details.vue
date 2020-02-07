<template>
  <div class="animated fadeIn">
      <Gallery :ImgFood="this.detailFoods.imgPath" />
    <b-container class="bv-example-row">
      <h2>{{Menu}}</h2>
      <b-row>
        <b-col> <p>{{title}}</p>  </b-col>
      </b-row>
      <Chart :menuCalories="detailFoods.menuCalories" class=" float-right" />
    <ul id="example-1">
        <li v-for="(item,index) in items" :key="index">
          <b-row>
            <b-col>{{ item.ingredientsName }}</b-col>  
            <b-col>{{ item.quantity }} {{item.type}}</b-col>
          </b-row>
        </li>
    </ul>
    </b-container>
    <b-container class="bv-example-row">
      <p>วิธีทำ</p>
      <div id="app">
        <!-- <show-detail-food /> -->
        <component :is="{template:templateString}"/>
      </div>
      <!-- <ul id="example-2">
        <li v-for="(howTos,index) in howTo" :key="index">
          <b-row>
            <b-col>{{index + 1 + '. '}} {{howTos.messageHowto}}</b-col>  
          </b-row>
        </li>
      </ul> -->
      <span class="text-center"><h4>ให้คะแนนเมนูอาหาร</h4></span>
      <Rating :model="detailFoods" />
    </b-container>
  </div>
</template>

<script>
import { mapGetters  } from 'vuex'
import Rating from '@/components/componentsFood/rating'
import Chart from '@/components/componentsFood/chart'
import Gallery from '@/components/componentsFood/gallery'
import carousel from '@/components/componentsFood/carousel'
export default {
  mounted(){
    this.add()
  },
  methods:{
    add(){
      this.templateString = '<div>' + this.detailFoods.methods + '</div>'
      this.Menu = this.detailFoods.menuName
      this.items = this.detailFoods.ingredients
    }
  },
  computed:{
    ...mapGetters({detailFoods:'food/detailFoods'})
  },
  data() {
    return {
      templateString: '<div>รอเพิ่มวิธีทำอาหาร</div>' ,
      Menu: 'พล่ากุ้ง',
      title:'เครื่องปรุง',
      items: [
      { message: 'น้ำพริกเผา', title: '1 ช้อนโต๊ะ'},
      { message: 'น้ำปลา', title: '1 - 2 ช้อนโต๊ะ'},
      { message: 'น้ำมะนาว', title: '2 ช้อนโต๊ะ'},
      { message: 'พริกขี้หนูบุบ', title: '10 เม็ด'},
      { message: 'ตะไคร้ซอย', title: '1/4 ถ้วยตวง'},
      { message: 'หอมแดงซอย', title: '1/4 ถ้วยตวง'},
      { message: 'กุ้ง', title: '400 กรัม'},
      { message: 'ผักชีฝรั่งซอย', title: '1/4 ถ้วยตวง'},
      { message: 'ใบสะระแหน่', title: '1/4 ถ้วยตวง'},
      { message: 'ผักกาดหอม', title: 'ตามต้องการ'},
      { message: 'ใบมะกรูดซอย', title: '1/4 ถ้วยตวง'}
      ],
      // howTo:[
      //   {messageHowto: 'ในชามผสมใส่น้ำพริกเผา น้ำปลา น้ำมะนาว และพริกขี้หนู ผสมให้เข้ากัน ชิมรสตามชอบในชามผสม'},
      //   {messageHowto: 'ใส่ตะไคร้ หอมแดงซอย กุ้งลวก และเครื่องพล่าทั้งหมดลงไปผสมให้เข้ากัน ชิมรสอีกครั้ง'},
      //   {messageHowto: 'ตักใส่จานเสิร์ฟที่รองก้นจานด้วยผักกาดหอม โรยหน้าด้วยใบมะกรูดซอย จัดใส่จาน ยกเสิร์ฟ สำหรับ 4 ท่าน'}
      // ]
    }
  },
   components:{
    Rating,
    Chart,
    Gallery,
    carousel
  },
}
</script>

<style lang="scss">
  
</style>