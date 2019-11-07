<template>
  <!-- <div class="app flex-row align-items-center"> -->
    <div class="animated fadeIn">
      <Loading v-if="loadingShow === false" />
      <b-row class="justify-content-center" v-if="loadingShow === true">

        <b-col md="6" sm="8">
          <b-card no-body>
            <b-card-body class="p-4">
              <b-form @submit.prevent="onUpload()">
                <h1>Create Menu</h1>
                  <b-form-file name="myFile" id="file" ref="file" v-on:change="handleFilesUpload()" placeholder="Choose a file or drop it here..." ></b-form-file>
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
import { BoardService } from "@/services/BoardService";
const boardService = new BoardService();
import Loading from '@/components/loading.vue';
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
      this.file = this.$refs.files.files[0];
    },
    onUpload(){
      let formData = new FormData();
      formData.append('myFile', this.file);
      boardService.fetchUpdateMenu(formData).then(()=> {
        return
      }).catch(err => {
        alert(err)
      })
    }
  }
}
</script>