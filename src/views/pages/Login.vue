<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="signIn()">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="email" name="email" v-model="model.email" class="form-control" placeholder="Email" autocomplete="email" required />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" name="password" v-model="model.password" class="form-control" placeholder="Password" autocomplete="current-password" required />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6 mb-2">
                      <b-button type="submit" class="px-4 bgbutton">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                    <b-col cols="6">
                      <b-button block variant="facebook" class="btn-brand"  @click="socialFacebook()"><span >Facebook</span></b-button>
                    </b-col>
                    <b-col cols="6">
                      <b-button block variant="google-plus" @click="socialGoogleLogin()" class="btn-brand"><span >Google+</span></b-button>
                    </b-col>
                  </b-row> -->
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bgCard py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button class="active mt-3 bgbutton" @click="pageRegister">Register Now!</b-button>
                  
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
          <b-card-footer class="p-3 bgCardFooter">
              <b-row>
                <b-col cols="6">
                  <b-button block variant="facebook" class="btn-brand"  @click="socialFacebook()"><span >Facebook</span></b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block variant="google-plus" @click="socialGoogleLogin()" class="btn-brand"><span >Google+</span></b-button>
                </b-col>
              </b-row>
            </b-card-footer>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/firebase';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      model:{
        email:'',
        password:''
      }
    }
  },
  computed: {
    ...mapGetters({ token: 'user/token' })
  },
  methods:{
      ...mapActions({
      getToken: 'user/getToken',
    }),
    signIn(){
      let self = this;
      firebase.auth().signInWithEmailAndPassword(this.model.email, this.model.password).then(function(checkVerify){
        console.log('checkVerify: ', checkVerify);
        firebase.auth().onAuthStateChanged(firebaseUser => {
           console.log('firebaseUser: ', firebaseUser);
          if (firebaseUser.emailVerified) {
              var token = firebaseUser.uid;
              self.getToken(token);
              if (self.token){
                self.$router.push("/");
              }
          } else {
            alert('Please verify your email address then Sign-In again.')
          }
        })
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wromg-password') {
          alert('Wrong password')
        }else {
          alert(errorMessage)
        }
      });
    },
     pageRegister(){
     this.$router.push("/pages/signup");
    },
    socialFacebook: function(){
      var provider = new firebase.auth.FacebookAuthProvider();
      let self = this;
      firebase.auth().signInWithPopup(provider).then(function(result){
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        self.getToken(token);
        if (self.token){
          self.$router.push("/");
        }
      }).catch(function(error){
         alert("Oops. " + error.message);
      });
    },
    socialGoogleLogin: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      let self = this;
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
         self.getToken(token);
        if (self.token){
          self.$router.push("/");
        }
      }).catch(function(error) {
        alert("Oops. " + error.message)
      });
    },
  }
}
</script>

<style lang="scss">
  .bgCard {
    background: linear-gradient(40deg, #764ba2 0%, #667eea 100%)!important;
  }
  .bgCardFooter {
     background: linear-gradient(40deg, #667eea 20%, #764ba2 100%)!important;
  }
  .bgbutton {
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)!important;
  }
</style>
