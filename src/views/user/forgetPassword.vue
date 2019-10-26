<template>
 <div class="app flex-row align-items-center">
    <div class="container">
      <Loading v-if="loadingShow === false" />
      <b-row class="justify-content-center" v-if="loadingShow === true">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="forgetPassword()">
                <h1 class="mb-3">Forget Password</h1> 
                <i class="icon-lock text-center d-block ml-auto mr-auto mb-3" style="font-size: 10em;"></i>
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

                <b-button type="submit" variant="success" block>Send</b-button>
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
import { required, email} from 'vuelidate/lib/validators';
import { BoardService } from "@/services/BoardService";
import Loading from '@/components/loading.vue'
const boardService = new BoardService();
export default {
  name: 'forgetpassword',
  data() {
    return {
      email: '',
      loadingShow: true
    }
  },
  validations: {
    email:{
      required,
      email
    }
  },
  components:{
    Loading
  },
  methods:{
    forgetPassword(){
      this.$v.$touch()
      if (this.$v.$invalid) {
        return 
      } else {
       this.loadingShow = false
       boardService.fetchForgetPassword({email: this.email}).then(() => {
        alert('Send OTP your email address.')
        this.$router.push("/pages/signin");
        this.loadingShow = true
       }).catch(err => {alert(err)})
      }
    }
  }
}
</script>