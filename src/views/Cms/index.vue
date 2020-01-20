<template>
  <div class="animated fadeIn">
    <loading v-if="LoadingSubmit === false" />
    <button class="bg-success" @click="CreateCMS">create</button>
    <!--[START Table]-->
      <div class="block-rounded block-bordered table">
        <Table :config="tableConfig" />
      </div>
      <!--[END Table]-->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Table from '@/components/table/Table'
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
export default {
  data() {
    return {
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
  },
  methods: {
    ...mapActions({getIngredients : 'food/getIngredients'}),
    CreateCMS(){
      this.$router.push('/cms/create')
    },
    GetApiIngredients() { 
      foodService.fetchGetApiIngredients().then(resp => {
        if (resp.data.status === false) {
          alert(resp.data.status === false)
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
