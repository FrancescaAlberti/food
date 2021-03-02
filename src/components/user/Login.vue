<template>
  <div class="q-pa-md">
    <div class="row justify-center">
      <p class="col-12 text-weight-bold text-center">Connenct with</p>
      <div class="q-gutter-sm">
        <q-btn
          class="col-6 q-mx-sm"
          icon="facebook"
          label="Facebook"
          color="blue"
          disabled
        />
        <q-btn
          class="col-6 q-mx-sm"
          icon="email"
          label="Google"
          color="red"
          disabled
        />
      </div>
    </div>
    <br />
    <q-separator />
    <br />
    <p class="col-12 text-weight-bold text-center">Login</p>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md row justify-center q-mx-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your email *"
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
        v-model="password"
        label="Your password *"
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({ loginEP:'auth/logInWithEmailAndPassword' }),
    onSubmit() {
      this.loginEP({email: this.email, password: this.password});
    },
    onReset() {
      (this.email = ""), (this.password = "");
    },
  },
};
</script>

<style>
</style>