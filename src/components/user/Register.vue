<template>
  <div class="q-pa-md">
    <p class="col-12 text-weight-bold text-center">Register</p>
    <q-form class="q-gutter-md row justify-center q-mx-md"
    @submit="onSubmit">
      <q-input
        filled
        label="Your email *"
        v-model="email"
        class="col-12"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type something',
          (val) => val.indexOf('@') !== -1 || 'Please insert a valid email',
        ]"
      />

      <q-input
        filled
        type="password"
        label="Your password *"
        v-model="password"
        class="col-12"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your password',
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      email:"",
      password:""
    }
  },
  methods:{
    ...mapActions({registerEP: 'auth/registerWithEmailAndPassword'}),
    onSubmit(){
      this.registerEP({email: this.email, password: this.password});
    }
  }
};
</script>
