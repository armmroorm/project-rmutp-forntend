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
                  <b-form-input type="email" name="email" class="form-control" v-model="model.email" placeholder="Email" autocomplete="email" required />
                  <!-- <div v-if="submitted && errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div> -->
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" name="password" v-model="model.password" class="form-control" placeholder="Password" autocomplete="new-password" required />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" name="passwordConfirm" v-model="model.passwordConfirm" class="form-control" placeholder="Repeat password" autocomplete="new-password" required />
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
import firebase from 'firebase/firebase';
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
  methods:{
    signUp(){
      let self = this;
      firebase.auth().createUserWithEmailAndPassword(this.model.email, this.model.password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak')
        }else {
          alert(errorMessage)
        }
        console.log('error: ', error);
      }).then(function(sendEmailVerify){
        console.log('sendEmailVerify: ', sendEmailVerify);
        if (sendEmailVerify === false) {
          return false;
        }else {
          firebase.auth().currentUser.sendEmailVerification();
          alert('Email Verification Sent! Please check email address.')
          self.$router.push("/pages/signin");
          return true;
        }
      })
    }
  }
}
</script>
