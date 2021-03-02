<template>
  <q-toolbar class="fit row no-wrap justify-evenly items-center content-center">
    <q-btn flat icon="help" to="Help" />
    <q-btn flat icon="dashboard" to="Dashboard" />
    <q-btn flat icon="schedule" size="2em" to="Day" />
    <q-btn flat icon="person_pin" to="User" />
    <q-btn flat icon="shopping_basket" to="Shopping" />
  </q-toolbar>
</template>

<script>
export default {
  name: "Footer",
};
</script>