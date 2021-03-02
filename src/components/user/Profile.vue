<template>
  <div>
    <q-btn-group spread>
      <button @click="showUserDetails()" icon="profile">
        {{ this.isShowUserDetails ? "hide" : "show" }} profile page
      </button>
      <button @click="onClickLogout()" icon="logout">logout</button>
    </q-btn-group>
    <userDetails v-if="isShowUserDetails"></userDetails>
    <new-diet v-if="!isShowUserDetails"></new-diet>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import UserDetails from "components/user/UserDetails.vue";
import NewDiet from 'components/diet/NewDiet.vue';
export default {
  name: "Profile",
  data() {
    return {
      isShowUserDetails: false,
    };
  },
  components: { UserDetails, NewDiet },
  methods: {
    ...mapActions({ logout: "auth/logOut" }),
    onClickLogout() {
      this.logout();
    },
    showUserDetails() {
      this.isShowUserDetails = this.isShowUserDetails ? false : true;
    },
  },
};
</script>