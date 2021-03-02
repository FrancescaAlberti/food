<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PageIndex",
  data() {
    return {
      response: "",
      text: "",
      logged: "",
    };
  },
  computed: {
    ...mapGetters({
      loggedfb: "auth/getIsUserLogged",
    }),
  },
  methods: {
    testDB() {
      db.ref("users/alovelace").set({
        name: "nome cambiato",
      });
    },

    ...mapActions({ isUserLogged: "auth/checkIsUserLogged" }),
  },
};
</script>
