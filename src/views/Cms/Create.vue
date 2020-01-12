<template>
  <div>
    <div class="content">
      <api-form :model="model" :Img='Img' />
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
        Img: {
          files: '',
        },
        model: {
          id:'001',
          menuId: '',
          ingredients: [],
          menuName: '',
          method:[],
          name: '',
          userId: '1',
          adminId: '0',
          categoryId:'',
          databases: [],
        }
      }
    }
  }
</script>

<style lang="css">
</style>
