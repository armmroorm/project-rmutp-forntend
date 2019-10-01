<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <!-- <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username" />
                </b-input-group> -->

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" name="email" class="form-control" v-model="model.email" placeholder="Email" autocomplete="email" />
                  <!-- <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div> -->
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" name="password" v-model="model.password" class="form-control" placeholder="Password" autocomplete="new-password" />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" name="passwordConfirm" v-model="model.passwordConfirm" class="form-control" placeholder="Repeat password" autocomplete="new-password" />
                </b-input-group>

                <b-button variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>
            <b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block variant="facebook" class="btn-brand"  @click="socialFacebook()"><span >Facebook</span></b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block variant="google-plus" @click="socialGoogleLogin()" class="btn-brand"><span >Google+</span></b-button>
                  <b-button @click="logoutSocial()">logout</b-button>
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Register',
   data: function() {
    return {
      model: {
        email: '',
        password: '',
        passwordConfirm: ''
      },
      // submitted: false
    };
  },
  computed: {
    ...mapGetters({ token: 'user/token' })
  },
  methods:{
      ...mapActions({
      getToken: 'user/getToken',
    }),
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
      var provider = new firebase.auth.GoogleAuthProvider().addScope("email");
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
    logoutSocial: function(){
      const self = this;
      firebase.auth().signOut().then(function(){
        alert('Sign-out successful.')
        self.$store.dispatch('user/logout');
        self.$router.push("/pages/login");
      }).catch(function(error){
        alert("Oops. " + error.message)
      });
    }
  }
}
</script>
