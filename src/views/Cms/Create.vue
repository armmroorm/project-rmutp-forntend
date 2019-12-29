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
          name: '',
          databases: [],
          ingredients: [],
        }
      }
    }
  }
</script>

<style lang="css">
</style>
