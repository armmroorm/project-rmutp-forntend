<template>
  <!-- <div class="app flex-row align-items-center"> -->
    <div class="animated fadeIn">
      <Loading v-if="loadingShow === false" />
      <b-row class="justify-content-center" v-if="loadingShow === true">

        <b-col md="6" sm="8">
          <b-card no-body>
            <b-card-body class="p-4">
              <form
                enctype="multipart/form-data"
                action="http://localhost:9000/CMS/Upload"
                method="post"
              >
                <input type="file" name="myFile" />
                <input type="submit" value="upload" />
              </form>

              <b-form @submit.prevent="onUpload()">
                <h1>Create Menu</h1>
                  <b-form-file v-model="file" name="myFile"  id="file" ref="file" v-on:change="handleFileUpload()" placeholder="Choose a file or drop it here..." ></b-form-file>
                  <div class="m-3 mx-auto">Selected file: {{ file ? file.name : '' }}</div>
                <b-button type="submit" variant="success" block>Update</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  <!-- </div> -->
</template>

<script>
// import { BoardService } from "@/services/BoardService";
// const boardService = new BoardService();
import Loading from '@/components/loading.vue';
import axios from 'axios';
export default {
  name:'create',
  data() {
    return {
      loadingShow:true,
      file: '',
    }
  },
   components:{
    Loading
  },
  methods:{
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    onUpload(){
      let formData = new FormData();
      formData.append('myFile', this.file);
      axios.post('http://localhost:9000/CMS/Upload',formData,{ headers: {'Content-Type': 'multipart/form-data'} }).then(() => {})
    }
    // update() {
    //   boardService.fetchUpdateMenu({file: this.file.name}).then(()=>{
    //     console.log('success')
    //   }).catch(err => {
    //     alert(err)
    //   })
    // }
  }
}
</script>