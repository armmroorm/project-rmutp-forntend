<template>
  <div class='col-12'>
    <databaseSelect
    :databases='databases'
    :models='model.databases'
    />
  </div>
</template>

<script>
  import databaseSelect from '@/components/database/databaseSelect'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        databases: 'food/getData'
      })
    },
    props: {
      model: {
        type: Object,
        required: true
      }
    },
    components: {
      databaseSelect
    }
  }
</script>

<style lang='css'>
</style>
