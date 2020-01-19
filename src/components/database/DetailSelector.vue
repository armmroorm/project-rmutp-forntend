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
                โปรดกรอกชื่อเมนูอาหาร
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
      
      <h5>เลือกรูปภาพประกอบอาหาร</h5>
      <b-form @submit.prevent="addFiles()">
        <b-form-file  class="mb-3"  v-model="files" name="myFile" id="files" ref="files" multiple  v-on:change="handleFileUpload()"
                      v-validate="'required'" :state="Boolean(files)" accept=".jpg, .png"
                      :class="{ 'is-invalid': errors.has('myFile')}">
        </b-form-file>
        <b-form-invalid-feedback>
            <span v-if="errors.has('myFile')">
                โปรดเลือกรูปภาพประกอบอาหาร
            </span>
          </b-form-invalid-feedback>
      <!-- <b-button  @click="addFiles()" variant="success" block>Update</b-button> -->
      </b-form>

      <b-form-group label="ประเภทอาหาร" >
        <b-form-radio-group
          v-for="(option, a) in options" :key="`A-${a}`"
          id="radio-group-2"
          v-model="typeFoods"
          v-validate="'required'"
          name="radio-Type"
          @change="onChacgTypeFood(a+1)">
            <b-form-radio :value="option.value">{{option.text}}</b-form-radio>
        </b-form-radio-group>
      </b-form-group>
    <!--[END quantity input]--> 
      <h3 style="margin-top: 40px ; margin-bottom: 20px">วิธีทำอาหาร</h3>
      <ckeditor id="editor" :editor="editor" v-model="editorData" @input="onEditorInput()" :config="editorConfig" 
                name="content" v-validate="'required'"
                :class="{ 'is-invalid': errors.has('content')}">
      </ckeditor>
      <b-form-invalid-feedback>
        <span v-if="errors.has('content')">
            โปรดกรอกวิธีทำอาหาร
        </span>
      </b-form-invalid-feedback>

      <!--[START Name input]-->
      <!-- <div class="form-group row" v-for="(item, a) in people" :key="`A-${a}`">
        <label for="api-method" class="col-sm-2 col-form-label"> วิธีทำอาหาร : {{a + 1}}<span class="text-danger">*</span></label>
        <div class="col-sm-9 mb-2">
          <input  type="text"
                  id="api-method"
                  @change="addNameMedthod(a)"
                  v-model="item.name"
                  name="api-method"
                  class="form-control"
                  v-validate="'required'">
        </div>
      </div>
        <button class="btn btn-success  " @click="addMethods()">เพิ่ม</button> -->
    <!--[END Name input]-->
  </div>  
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FoodService } from "@/services/FoodService";
const foodService = new FoodService();
export default {
  props: {
      selectModel:{ 
        required: true
      },
      // method:{ 
      //   required: true
      // },
      models: {
        type: Array,
        default: () => []
      },
      submitting : {
        required : true
      }
    },
    data() {
      return {
        files: '',
        people: [
          {
            name: ''
          },
        ],
        typeFoods: '1',
        options: [
          { text: 'อาหารประเภทเรียกน้ำย่อย', value: '1'},
          { text: 'ประเภทสลัด/ยำ', value: '2'},
          { text: 'อาหารประเภททอด', value: '3'},
          { text: 'อาหารประเภทเส้น', value:'4'},
          { text: 'อาหารประเภทนึ่ง/ต้ม', value: '5'},
          { text: 'อาหารจานด่วน/เดียว', value: '6'},
          { text: 'ซุป', value: '7'},
          { text: 'อาหารประเภทแกง',value: '8'},
          { text: 'ของหวาน', value: '9'},
          { text: 'เครื่องดื่ม', value: '10'},
          { text: 'ซอส/เครื่องจิ้ม', value: '11'}
        ],
        selected: [],
        nameMunu:'',
        editor: ClassicEditor,
        editorData: '',
        editorConfig: {
          toolbar: {
            items: [                                  
            'bold',
            'italic',
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
      // addMethods(){
      //   this.people.push({
      //      name: ''
      //     })
      // },
      // addNameMedthod(a){
      //   this.method.push({
      //       name: this.people[a].name
      //     })
      // },
      handleFileUpload(){
      this.files = this.$refs.files.files;
      },
      ChangeInt(i) {
        this.selected[i] = parseFloat(this.selected[i])
        this.models[i].quantity = this.selected[i]
      },
      addFiles(){
        let formData = new FormData();
        for( var i = 0; i < this.files.length; i++ ){
            let file = this.files[i];
            formData.append('myFile', file);
          }
        formData.append('menuID', this.selectModel.menuId );
        this.submitting.loading = false
        foodService.fetchPostApiCMSUpdate(formData).then(()=> {
          return this.submitting.loading = true
        }).catch(err => {
          alert(err)
        })
      },
      onChacgTypeFood(a) {
        var num = a;
        var n = num.toString();
        this.selectModel.categoryId = n
      },
      onEditorInput() {
        this.selectModel.methods = this.editorData
      },
      
      onNameMenuInput() { 
         this.selectModel.menuName = this.nameMunu
         this.selectModel.categoryId = this.typeFoods
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