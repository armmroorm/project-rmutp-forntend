<template>
 <div class="app flex-row align-items-center">
    <div class="container">
      <Loading v-if="loadingShow === false" />
      <b-row class="justify-content-center" v-if="loadingShow === true">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="resetPassword()">
                <h1 class="mb-3">Reset Password</h1> 
                <i class="icon-lock-open text-center d-block ml-auto mr-auto mb-3" style="font-size: 7em;"></i>
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

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-key"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model.trim="$v.OTP.$model" v-model="OTP" 
                    :class="{ 'is-invalid': $v.OTP.$error, 'is-valid': !$v.OTP.$invalid }" class="form-control" placeholder="OTP" autocomplete="OTP" />
                  <b-form-valid-feedback>Your OTP is valid!</b-form-valid-feedback>
                   <b-form-invalid-feedback>
                    <span v-if="!$v.OTP.required">OTP is required.</span>
                    <span v-if="!$v.OTP.maxLength">OTP must have at most {{$v.OTP.$params.maxLength.max}} letters.</span>
                    <span v-if="!$v.OTP.minLength">{{ $v.OTP.$params.minLength.min }} OTP minimum.</span>
                  </b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3" >
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" id='password' v-model.trim="$v.password.$model" v-model='password' 
                    :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }" class="form-control" 
                    placeholder="Password" autocomplete="new-password" />
                   <b-form-valid-feedback>Your password is valid!</b-form-valid-feedback>
                    <b-form-invalid-feedback>
                      <span v-if="!$v.password.required">Password is required.</span>
                      <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
                    </b-form-invalid-feedback>
                </b-input-group>

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

                <b-button type="submit" variant="success" block>Reset Password</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs, minLength, maxLength,} from 'vuelidate/lib/validators';
import Loading from '@/components/loading.vue'
import { BoardService } from "@/services/BoardService";
const boardService = new BoardService();
export default {
  name: 'forgetpassword',
  data() {
    return {
      loadingShow: true,
      email: '',
      password: '',
      repeatpassword: '',
      OTP:''
    }
  },
  components:{
    Loading
  },
  validations: {
    OTP:{
      required,
      minLength: minLength(6),
      maxLength: maxLength(6)
    },
    email:{
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(50)
    },
    repeatpassword: {
      sameAsPassword: sameAs('password')
    },
  },
  methods:{
    resetPassword(){
      this.$v.$touch()
      if (this.$v.$invalid) {
        return 
      } else {
        this.loadingShow = false
        boardService.fetchResetPassword({email:this.email, newPassword:this.password, OTP:this.OTP}).then(res =>{
        if(res.data.status === true) {
          alert(res.data.message)
          this.$router.push("/pages/signin")
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