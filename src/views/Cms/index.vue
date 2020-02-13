<template>
  <div class="animated fadeIn">
    <loading v-if="LoadingSubmit === false" />
    <button type="button" class="btn btn-success" @click="CreateCMS">สร้างเมนูอาหาร</button>
    <!--[START Table]-->
      <div class="block-rounded block-bordered table">
        <Table :config="tableConfig" :data="Data" />
      </div>
      <!--[END Table]-->
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex';
import Table from '@/components/table/Table'
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
export default {
  data() {
    return {
      Data: Object,
      LoadingSubmit : false,
      tableConfig: [
          { label: 'ID', field: 'id', width: '7.5%', align: 'center' },
          { label: 'ชื่อเมนูอาหาร', field: 'name', width: '25%', align: 'left', options: { needDetail: true } },
          // { label: 'Api group', field: 'groupName', width: '10%', align: 'center' },
          // { label: 'Alias', field: 'alias', width: '15%', align: 'center', prefix: '/api/' },
          // { label: 'Filter', field: 'strFilters', width: '10%', align: 'center' },
          // { label: 'Source Type', field: 'sourceType', width: '7.5%', align: 'center' },
          // { label: 'Source Name', field: 'sourceName', width: '7.5%', align: 'center' }
        ],
    };
  },
  components: {
      Table
    },
  mounted(){
    this.GetApiIngredients();
    this.GetManegeMenu();
    this.filterData();
  },
  computed:{
    ...mapGetters({userId:'user/userId',adminId:'user/adminId',getData:'food/getData'})
  },
  methods: {
    ...mapActions({getIngredients : 'food/getIngredients', GetDataingredients:'food/GetDataingredients'}),
    CreateCMS(){
      this.$router.push('/cms/create')
    },
    filterData() {
        let result = []
        for (let i = 0; i < this.getData[0].ingredients.length; i++) {
          result.push(this.getData[0].ingredients[i].ingredientsName)
        }
        this.GetDataingredients(result)
    },
    GetManegeMenu(){
      foodService.fetchManegeMenu({userId:this.userId,adminId:this.adminId}).then(resp => {
        this.Data = resp.data
      })
    },
    GetApiIngredients() {
      foodService.fetchGetApiIngredients().then(resp => {
        if (resp.data.status === false) {
          this.LoadingSubmit = true
        }
        else {
          var dataGetIngredients = [resp.data]
          this.getIngredients(dataGetIngredients)
          this.LoadingSubmit = true
        }
      }).catch(err => {
          alert(err)
        })
    }
  }
};
</script>

<style lang="css">
</style>
