<template>
  <div>
    <div class="content">
      <api-form :model="model"  />
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
          menuId: '',
          ingredients: [],
          menuName: '',
          methods:'',
          name: '',
          point: 0,
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
