<template>
  <v-app>
    <Layout />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
  components: { Layout },
};
</script>
