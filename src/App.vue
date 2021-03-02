<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  preFetch() {},
  created() {
    this.$q.dark.set(false);
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    ...mapActions({ checkLogin: "auth/checkIsUserLogged" }),
  },
};
</script>
