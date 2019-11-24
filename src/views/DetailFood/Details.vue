<template>
  <div class="animated fadeIn">
      <Carousel />
    <b-container class="bv-example-row">
      <h2>{{Menu}}</h2>
      <b-row>
        <b-col> <p>{{title}}</p>  </b-col>
      </b-row>
     
    <ul id="example-1">
        <li v-for="(item,index) in items" :key="index">
          <b-row>
            <b-col>{{ item.message }}</b-col>  
            <b-col>{{ item.title }}</b-col>
          </b-row>
        </li>
    </ul>
    </b-container>
    <b-container class="bv-example-row">
      <p>วิธีทำ</p>
      <ul id="example-2">
        <li v-for="(howTos,index) in howTo" :key="index">
          <b-row>
            <b-col>{{index + 1 + '. '}} {{howTos.messageHowto}}</b-col>  
          </b-row>
        </li>
      </ul>
    </b-container>
    
  </div>
</template>

<script>
import Carousel from '@/components/componentsFood/carousel'
export default {
  name:'Details',
  data() {
    return {
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
      howTo:[
        {messageHowto: 'ในชามผสมใส่น้ำพริกเผา น้ำปลา น้ำมะนาว และพริกขี้หนู ผสมให้เข้ากัน ชิมรสตามชอบในชามผสม'},
        {messageHowto: 'ใส่ตะไคร้ หอมแดงซอย กุ้งลวก และเครื่องพล่าทั้งหมดลงไปผสมให้เข้ากัน ชิมรสอีกครั้ง'},
        {messageHowto: 'ตักใส่จานเสิร์ฟที่รองก้นจานด้วยผักกาดหอม โรยหน้าด้วยใบมะกรูดซอย จัดใส่จาน ยกเสิร์ฟ สำหรับ 4 ท่าน'}
      ]
    }
  },
   components:{
    Carousel
  },
}
</script>

<style lang="scss">
  
</style>