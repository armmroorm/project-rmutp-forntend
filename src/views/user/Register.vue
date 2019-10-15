<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="signUp()">
                <h1>Sign-Up</h1>
                <p class="text-muted">Create your account</p>
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
                    :class="{ 'is-invalid': $v.firstname.$error, 'is-valid': !$v.firstname.$invalid }" class="form-control" placeholder="First name" autocomplete="firstname" />
                  <b-form-valid-feedback>Your first name is valid!</b-form-valid-feedback>
                   <b-form-invalid-feedback>
                    <span v-if="!$v.firstname.required">First name is required.</span>
                    <span v-if="!$v.firstname.maxLength">First name must have at most {{$v.firstname.$params.maxLength.max}} letters.</span>
                  </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model.trim="$v.lastname.$model" v-model="lastname" 
                    :class="{ 'is-invalid': $v.lastname.$error, 'is-valid': !$v.lastname.$invalid }" class="form-control" placeholder="Last name" autocomplete="lastname" />
                  <b-form-valid-feedback>Your last name is valid!</b-form-valid-feedback>
                   <b-form-invalid-feedback>
                    <span v-if="!$v.lastname.required">Last name is required.</span>
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

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="email" v-model.trim="$v.email.$model"
                    :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid }" class="form-control" v-model="email" 
                    placeholder="Email" autocomplete="email" /> 
                  <b-form-valid-feedback>Your email is valid!</b-form-valid-feedback>
                  <b-form-invalid-feedback>
                    <span v-if="!$v.email.required">Email is required.</span>
                    <span v-if="!$v.email.email">This email is already registered</span>
                  </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3" >
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" id='password' v-model.trim="$v.password.$model" v-model='password' 
                    :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }" class="form-control" 
                    placeholder="Password" autocomplete="new-password" />
                  <!-- <div class="valid-feedback">Your password is valid!</div> -->
                   <b-form-valid-feedback>Your password is valid!</b-form-valid-feedback>
                    <b-form-invalid-feedback>
                      <span v-if="!$v.password.required">Password is required.</span>
                      <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
                    </b-form-invalid-feedback>
                  <!-- <div class="invalid-feedback">
                    <span v-if="!$v.password.required">Password is required.</span>
                    <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
                  </div> -->
                </b-input-group>
                <b-form-checkbox class="mb-2" v-model="showpassword" name="checkbox-1" @change="toggleShowpassword">Show password</b-form-checkbox>  
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model.trim="$v.repeatpassword.$model" v-model="repeatpassword"  
                    :class="{ 'is-invalid': $v.repeatpassword.$error, 'is-valid': (password != '') ? !$v.repeatpassword.$invalid : '' }" 
                    class="form-control" placeholder="Repeat password" autocomplete="new-password" />
                  <b-form-valid-feedback>Your password is identical!</b-form-valid-feedback>
                  <b-form-invalid-feedback>
                    <span v-if="!$v.repeatpassword.sameAsPassword">Passwords must be identical.</span>
                  </b-form-invalid-feedback>
                </b-input-group>
                <b-button type="submit" variant="success" block>Create Account</b-button>
                <p class="text-center"> or <router-link :to="{name : 'SignIn'}" >Sign In</router-link></p>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { required, sameAs, minLength, maxLength, email } from 'vuelidate/lib/validators'
// import firebase from 'firebase/firebase';
import { BoardService } from "@/services/BoardService";
const boardService = new BoardService();
export default {
  name: 'Register',
   data: function() {
    return {
      firstname:'',
      lastname:'',
      gender:'1',
      title:'1',
      email: '',
      password: '',
      repeatpassword: '',
      showpassword: false,
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
  validations: {
    firstname:{
      required,
      maxLength: maxLength(50)
    },
    lastname:{
      required,
      maxLength: maxLength(50)
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(50)
    },
    repeatpassword: {
      sameAsPassword: sameAs('password')
    },
    email:{
      required,
      email
    }
  },
  methods:{
    toggleShowpassword(){
      var show = document.getElementById('password')
      if(this.showpassword == false) {
        this.showpassword = true  
        show.type = 'text'  
      }else {
        this.showpassword = false  
        show.type = 'password'  
      }
    },
    signUp(){
      this.$v.$touch()
      if (this.$v.$invalid) {
        return 
      } else {
        boardService.fetchSignup({email:this.email, password:this.password, genderID:this.gender, titleID:this.title, firstname: this.firstname, lastname: this.lastname})
        .then(res => {
          if (res.data.status === true) {
            alert(res.data.message)
            this.$router.push("/pages/signin")
          } else {
            alert(res.data.message)
          }
          }).catch(err => {
            alert(err)
          })
        // let self = this;
        // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(sendEmailVerify){
        //   if (sendEmailVerify === false) {
        //     return false;
        //   }else {
        //     firebase.auth().currentUser.sendEmailVerification();
        //     alert('Email Verification Sent! Please check email address.')
        //     self.$router.push("/pages/signin");
        //     return true;
        //   }
        // }).catch(function(error) {
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        //   if (errorCode === 'auth/weak-password') {
        //     alert('The password is too weak')
        //   }else {
        //     alert(errorMessage)
        //   }
        // })
      }
    }
  }
}
</script>