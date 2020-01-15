<template lang='html'>
  <div class='col-12'>
    <detail-selector
      :models='model.ingredients'
      :selectModel='model'
       :submitting="submitting"
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
      submitting : {
        required : true
      }
    },
    components: {
      DetailSelector
    },
    methods: {
      formValidate() {
        return this.$refs.ds.formValidate()
      },
      RequestApiUpload() {
        return this.$refs.ds.addFiles()
      }
    }
  }
</script>

<style lang='css'>
</style>
