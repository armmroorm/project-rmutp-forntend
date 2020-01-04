<template lang='html'>
  <div class='col-12'>
    <detail-selector
      :databases='databases'
      :models='model.ingredients'
      ref="ds"
    />
  </div>
</template>

<script>
  import DetailSelector from '@/components/database/DetailSelector'
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
      },
    },
    components: {
      DetailSelector
    },
    methods: {
      formValidate() {
        return this.$refs.ds.formValidate()
      }
    }
  }
</script>

<style lang='css'>
</style>
