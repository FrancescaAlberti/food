<template>
  <div></div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    showNotif() {
      this.$q.notify({
        message: "Jim pinged you.",
        icon: "announcement",
      });
    },
  },
};
</script>

<style>
</style>