<template>
  <div class="card">
    <div class="card-header">
      <div class="block-content block-content-full block-content-sm bg-body-light">
          <a class="btn btn-secondary" @click="step--">
            ย้อนกลับ
          </a>
      </div>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-12">
            <div class="block">
              <div class="block-content">
                <div class="row">
                  <component v-if="step === index + 1" v-for="(name, index) in componentName"
                            :key="index"
                            v-bind:is="name"
                            ref="child"
                            :model="model">
                  </component>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="block-content block-content-full block-content-sm bg-body-light">
        <button v-if="step === componentName.length" class="btn btn-primary" @click="FormSubmit()">
          บันทึกข้อมูล
        </button>
        <button type="button" v-if="step !== componentName.length" class="btn btn-primary" @click="next()">
          ต่อไป
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import FormCms from './form/FormCms'
  import FormSelectTable from './form/FormSelectTable'
  import FormDetail from './form/FormDetail'

  export default {
    components: {
        FormCms,
        FormSelectTable,
        FormDetail
    },
    props: {
      model: {
        required: true
      }
    },
    watch: {
      step: function (val) {
        if (val === 0) {
          this.$router.push({path:'/dashboard'})
        }
      }
    },
    data() {
      return {
        submitting: false,
        step: 1,
        componentName: ['FormCms','FormSelectTable','FormDetail']
      }
    },
     methods: {
      async next() {
        const ref = this.$refs.child[0]
        if (typeof ref.formValidate === 'function') {
          let result = await ref.formValidate()
          if (result) {
            this.step++
          }
        } else {
          this.step++
        }
      },
      FormSubmit() {
         this.$validator.validate().then(valid => {
           this.$refs.child[0].formValidate()
        if (valid) {
          console.log('func submit :', this.model)
        }
      });
        // console.log('func submit :', this.model)
        // this.$router.push({path:'/dashboard'})
      },
      // disableNextStep() {
      //   const isChooseSourceType = this.componentName[this.step - 1] === 'ChooseSourceType'
      //   const vals = Object.keys(this.checkbox_selected).map(key => {
      //     return this.checkbox_selected[key]
      //   })
      //   return isChooseSourceType && !vals.includes(true)
      // }
    }
  }
</script>

<style lang="scss">

</style>
