<template>
  <div class="col-sm-10 col-md-8 container">
    <!--[START Name input]-->
      <div class="form-group row">
        <label for="api-name" class="col-sm-2 col-form-label"> ชื่อเมนูอาหาร :<span class="text-danger">*</span></label>
        <div class="col-sm-9 mb-2">
          <input type="number"
                id="api-name"
                name="api-name"
                class="form-control"
                placeholder="โปรดกรอกชื่อเมนูอาหาร">
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
      <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default {
  props: {
      databases: {
        type: Array,
        default: () => []
      },
      models: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        selected: [],
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
          languages : {
            'af' : 1,
            'ar' : 1,
            'az' : 1,
            'bg' : 1,
            'bn' : 1,
            'bs' : 1,
            'ca' : 1,
            'cs' : 1,
            'cy' : 1,
            'da' : 1,
            'de' : 1,
            'de-ch' : 1,
            'el' : 1,
            'en' : 1,
            'en-au' : 1,
            'en-ca' : 1,
            'en-gb' : 1,
            'eo' : 1,
            'es' : 1,
            'es-mx' : 1,
            'et' : 1,
            'eu' : 1,
            'fa' : 1,
            'fi' : 1,
            'fo' : 1,
            'fr' : 1,
            'fr-ca' : 1,
            'gl' : 1,
            'gu' : 1,
            'he' : 1,
            'hi' : 1,
            'hr' : 1,
            'hu' : 1,
            'id' : 1,
            'is' : 1,
            'it' : 1,
            'ja' : 1,
            'ka' : 1,
            'km' : 1,
            'ko' : 1,
            'ku' : 1,
            'lt' : 1,
            'lv' : 1,
            'mk' : 1,
            'mn' : 1,
            'ms' : 1,
            'nb' : 1,
            'nl' : 1,
            'no' : 1,
            'oc' : 1,
            'pl' : 1,
            'pt' : 1,
            'pt-br' : 1,
            'ro' : 1,
            'ru' : 1,
            'si' : 1,
            'sk' : 1,
            'sl' : 1,
            'sq' : 1,
            'sr' : 1,
            'sr-latn' : 1,
            'sv' : 1,
            'th' : 1,
            'tr' : 1,
            'tt' : 1,
            'ug' : 1,
            'uk' : 1,
            'vi' : 1,
            'zh' : 1,
            'zh-cn' : 1
	}
        }
      }
    },
    methods:{
      ChangeInt(i) {
        this.selected[i] = parseFloat(this.selected[i])
        this.models[i].quantity = this.selected[i]
      },
      formValidate() {
        // valiadate this form parent components call this
        return this.$validator.validate()
      },
    },
    computed:{
      
    }
}
</script>