<template>
  <div>
    <div class="row justify-center q-pa-md cursor-pointer">
      <a
        class="col-12 text-weight-bold text-center"
        v-if="!this.isShowRegister && !this.isUserLogged"
        @click="showRegister"
        >Not registered yet? Register</a
      >
      <a
        v-if="this.isShowRegister"
        class="col-12 text-weight-bold text-center"
        @click="showLogin"
        >Already Registered? Login</a
      >
    </div>
    <login v-if="!this.isUserLogged && !this.isShowRegister"></login>
    <register v-if="!this.isUserLogged && this.isShowRegister"></register>
    <profile v-if="this.isUserLogged" ></profile>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Login from "components/user/Login";
import Register from "components/user/Register";
import Profile from "components/user/Profile";

export default {
  name: "User",
  components: { Login, Register, Profile },
  data() {
    return {
      isShowRegister: false,
    };
  },
  computed: mapGetters({
    isUserLogged: "auth/getIsUserLogged",
  }),
  methods: {
    ...mapActions({ login: "auth/logIn", logout: "auth/logOut" }),
    showRegister() {
      this.isShowRegister = true;
    },
    showLogin() {
      this.isShowRegister = false;
    },
  },
};
</script>

<style>
</style>