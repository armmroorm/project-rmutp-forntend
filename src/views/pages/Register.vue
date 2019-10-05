<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="signUp()">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>

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
                    <span v-if="!$v.password.email">This email is already registered</span>
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
                      <span v-if="!$v.email.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
                    </b-form-invalid-feedback>
                  <!-- <div class="invalid-feedback">
                    <span v-if="!$v.password.required">Password is required.</span>
                    <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
                  </div> -->
                </b-input-group>
                <!-- <input type="checkbox" v-model="showpassword" @click="toggleShowpassword()">Show Password   -->
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
import firebase from 'firebase/firebase';
export default {
  name: 'Register',
   data: function() {
    return {
        email: '',
        password: '',
        repeatpassword: '',
        showpassword: false,
    };
  },
   validations: {
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
        let self = this;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function(sendEmailVerify){
          if (sendEmailVerify === false) {
            return false;
          }else {
            firebase.auth().currentUser.sendEmailVerification();
            alert('Email Verification Sent! Please check email address.')
            self.$router.push("/pages/signin");
            return true;
          }
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak')
          }else {
            alert(errorMessage)
          }
        })
      }
    }
  }
}
</script>