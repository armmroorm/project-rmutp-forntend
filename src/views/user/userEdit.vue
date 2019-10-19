<template>
  <!-- <div class="app flex-row align-items-center"> -->
    <div class="animated fadeIn">
      <Loading v-if="loadingShow === false" />
      <b-row class="justify-content-center" v-if="loadingShow === true">
        <b-card no-body style="width:auto">
          <b-card-body class="p-4">
            <div>
               <h1>Profile</h1>
               <img src="img/avatars/user.png" alt="avatar" height="100" class="d-block ml-auto mr-auto mb-3 mt-3 rounded-circle">
               <p>Email : {{this.emailProfile}}</p>
               <p>Name : {{this.titleProfile}} {{this.firstnameProfile}} {{this.lastnameProfile}}</p>
               <p>Gender : {{this.genderProfile}}</p>
            </div>
          </b-card-body>
        </b-card>

        <b-col md="6" sm="8">
          <b-card no-body>
            <b-card-body class="p-4">
              <b-form @submit.prevent="update()">
                <h1>Edit Profile</h1>
                <b-form-group label="Titlename">
                  <b-form-radio-group
                    v-model="title"
                    :options="titles"
                    name="radio-title" 
                  ></b-form-radio-group>
                </b-form-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model.trim="$v.firstname.$model" v-model="firstname" 
                    :class="{ 'is-invalid': $v.firstname.$error}" class="form-control" placeholder="First name" autocomplete="firstname" />
                   <b-form-invalid-feedback>
                    <span v-if="!$v.firstname.maxLength">First name must have at most {{$v.firstname.$params.maxLength.max}} letters.</span>
                  </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model.trim="$v.lastname.$model" v-model="lastname" 
                    :class="{ 'is-invalid': $v.lastname.$error}" class="form-control" placeholder="Last name" autocomplete="lastname" />
                   <b-form-invalid-feedback>
                    <span v-if="!$v.lastname.maxLength">Last name must have at most {{$v.lastname.$params.maxLength.max}} letters.</span>
                  </b-form-invalid-feedback>
                </b-input-group>
                
                <b-form-group label="Gender">
                  <b-form-radio-group
                    v-model="gender"
                    :options="genders"
                    name="radio-gender" 
                  ></b-form-radio-group>
                </b-form-group>

                <b-input-group class="mb-3" >
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model.trim="$v.passwordOld.$model" v-model='passwordOld' 
                    :class="{ 'is-invalid': $v.passwordOld.$error}" class="form-control" 
                    placeholder="Old Password" autocomplete="new-password" />
                    <b-form-invalid-feedback>
                      <span v-if="!$v.passwordOld.minLength">{{ $v.passwordOld.$params.minLength.min }} characters minimum.</span>
                    </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3" >
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model.trim="$v.passwordNew.$model" v-model='passwordNew' 
                    :class="{ 'is-invalid': $v.passwordNew.$error}" class="form-control" 
                    placeholder="New password" autocomplete="new-password" />
                    <b-form-invalid-feedback>
                      <span v-if="!$v.passwordNew.minLength">{{ $v.passwordNew.$params.minLength.min }} characters minimum.</span>
                    </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model.trim="$v.repeatpassword.$model" v-model="repeatpassword"  
                    :class="{ 'is-invalid': $v.repeatpassword.$error, 'is-valid': (passwordNew != '') ? !$v.repeatpassword.$invalid : '' }" 
                    class="form-control" placeholder="Repeat password" autocomplete="new-password" />
                  <b-form-valid-feedback>Your password is identical!</b-form-valid-feedback>
                  <b-form-invalid-feedback>
                    <span v-if="!$v.repeatpassword.sameAsPassword">Passwords must be identical.</span>
                  </b-form-invalid-feedback>
                </b-input-group>
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

import { sameAs, minLength, maxLength} from 'vuelidate/lib/validators';
import { BoardService } from "@/services/BoardService";
const boardService = new BoardService();
import {mapActions} from 'vuex'
import Loading from '@/components/loading.vue'
export default {
  name: 'userEdit',
  data: function() {
    return {
      loadingShow:false,
      firstnameProfile:'',
      lastnameProfile:'',
      emailProfile:'',
      genderProfile:'',
      titleProfile:'',
      firstname:'',
      lastname:'',
      gender:'1',
      title:'1',
      passwordOld:'',
      passwordNew: '',
      repeatpassword: '',
      avatar: null,
      genders: [
          { text: 'Male', value: '1' },
          { text: 'Female', value: '2' },
          { text: 'No gender', value: '3' }
        ],
      titles: [
        {text: 'Mr.', value: '1'},
        {text: 'Mrs.', value: '2'},
        {text: 'Miss', value: '3'},
      ]
    };
  },
  components:{
    Loading
  },
  validations: {
    firstname:{
      maxLength: maxLength(50)
    },
    lastname:{
      maxLength: maxLength(50)
    },
    passwordOld: {
      minLength: minLength(8),
      maxLength: maxLength(50)
    },
    passwordNew: {
      minLength: minLength(8),
      maxLength: maxLength(50)
    },
    repeatpassword: {
      sameAsPassword: sameAs('passwordNew')
    }
  },
  mounted: function() {
    this.getProfile();
  },
  methods:{
    ...mapActions({getUsername : 'user/getUsername'}),
    getProfile(){
      boardService.fetchProfile().then(res => {
        var username = res.data.firstname
        this.getUsername(username)
        this.firstnameProfile = res.data.firstname
        this.lastnameProfile = res.data.lastname
        this.firstname = res.data.firstname
        this.lastname = res.data.lastname
        this.genderProfile = res.data.gender
        this.titleProfile = res.data.titlename
        this.emailProfile = res.data.email
        this.gender = res.data.genderID
        this.title = res.data.titleID
        this.loadingShow = true
      }).catch(err => {
        alert(err)
      })
    },
    update(){
       this.$v.$touch()
      if (this.$v.$invalid) {
        return 
      } else {
        this.loadingShow = false
        boardService.fetchUpdateProfile({Userdata:{ genderID:this.gender, titleID:this.title, firstname:this.firstname, lastname:this.lastname}, 
        changePassword:{oldPassword:this.passwordOld, newPassword:this.passwordNew}})
        .then(res => {
          if (res.data.status === true){
            location.reload();
          } else {
            alert(res.data.message)
          }
          this.loadingShow = true
        }).catch(err => {
          alert(err)
        })
      }
    }
  }
}
</script>

<style lang="scss">
    
</style>

