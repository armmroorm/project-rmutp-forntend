<template>
  <div class="col-sm-10 col-md-8 container">
    <!--[START Name input]-->
      <div class="form-group row">
        <label for="api-name" class="col-sm-2 col-form-label"> ชื่อเมนูอาหาร :<span class="text-danger">*</span></label>
        <div class="col-sm-9 mb-2">
          <input type="text"
                id="api-name"
                name="api-name"
                class="form-control"
                v-validate="'required'"
                :class="{ 'is-invalid': errors.has('api-name')}"
                @change="onNameMenuInput()"
                v-model="nameMunu"
                placeholder="โปรดกรอกชื่อเมนูอาหาร">
          <b-form-invalid-feedback>
            <span v-if="errors.has('api-name')">
                โปรดกรอกปริมาณวัตถุดิบ
            </span>
          </b-form-invalid-feedback>
        </div>
      </div>
    <!--[END Name input]-->

    <!--[START quantity input]-->
      <b-row class="my-1"  v-for="(select,i) in models" :key="i">
        <b-col sm="2">
          <label for="type-number" class="col-form-label"> {{select.ingredientsName}} :<span class="text-danger"> * </span></label>
        </b-col>
        <b-col sm="9">
          <b-form-input type="number" v-model="selected[i]" @change.native="ChangeInt(i)"
                        v-validate="'required'"
                        :class="{ 'is-invalid': errors.has('input-quantity')}"
                        name="input-quantity"
                        placeholder="โปรดกรอกปริมาณวัตถุดิบ"></b-form-input>
          <b-form-invalid-feedback>
            <span v-if="errors.has('input-quantity')">
                โปรดกรอกปริมาณวัตถุดิบ
            </span>
          </b-form-invalid-feedback>
        </b-col>
      </b-row>
    <!--[END quantity input]--> 
      <h3 style="margin-top: 40px ; margin-bottom: 20px">วิธีทำอาหาร</h3>
      <ckeditor id="editor" :editor="editor" v-model="editorData" @input="onEditorInput()" :config="editorConfig" 
                name="content" v-validate="'required'"
                :class="{ 'is-invalid': errors.has('content')}">
      </ckeditor>
      <b-form-invalid-feedback>
        <span v-if="errors.has('content')">
            โปรดกรอกปริมาณวัตถุดิบ
        </span>
      </b-form-invalid-feedback>  
          {{selectModel.method}}  
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  props: {
      selectModel:{
        required: true
      },
      models: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        selected: [],
        nameMunu:'',
        editor: ClassicEditor,
        editorData: '',
        editorConfig: {
          toolbar: {
            items: [                                  
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            'undo',
            'redo',
            ]
          },
        language: 'en'
        }
      }
    },
    methods:{
      ChangeInt(i) {
        this.selected[i] = parseFloat(this.selected[i])
        this.models[i].quantity = this.selected[i]
      },
      onEditorInput(){
        this.selectModel.method = this.editorData
      },
      onNameMenuInput() { 
         this.selectModel.menuName = this.nameMunu
      },
      formValidate() {
        // valiadate this form parent components call this
        return this.$validator.validate()
      },
    },
}
</script>

<style lang="scss">
  .ck-editor__editable {
    min-height: 300px;
   }
</style>