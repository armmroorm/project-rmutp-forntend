<template>
  <div>
    <div class="content">
      <api-form :model="model"/>
    </div>
  </div>
</template>

<script>
  import ApiForm from './Form'

  export default {
    components: {
      ApiForm
    },
    data() {
      return {
        model: {
          id:'001',
          ingredients: [],
          menuName: '',
          method:[],
          name: '',
          userId:'',
          adminId:'',
          categoryId:'',
          databases: [],

        }
      }
    }
  }
</script>

<style lang="css">
</style>
