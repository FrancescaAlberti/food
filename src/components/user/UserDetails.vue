<template>
  <div>
    <h3>User Details</h3>
    <p>
      welcome {{ userDetails.name }}, you are logged with email
      {{ userDetails.email }}
    </p>
    <h3>Settings</h3>
    <q-toggle
      :label="`${this.userThemeFormStore ? 'Dark' : 'Light'} theme`"
      v-model="localIsDarkTheme"
      @input="changeTheme({isDarkTheme: localIsDarkTheme})"
    />
    <p>{{ this.userThemeFormStore }}</p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserDetails",
  data() {
    return {
      localIsDarkTheme: this.userThemeFormStore
    };
  },
  computed: {
    ...mapGetters({
      userDetails: "auth/getUserDetails",
      userThemeFormStore: "settings/getIsDarkTheme",
    }),
   
  },
  methods: {
    ...mapActions({ changeTheme: "settings/changeTheme" }),
  },
};
</script>


<style>
</style>