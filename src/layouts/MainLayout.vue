<template>
  <div class="main-container">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    NavBar: NavBar,
  },
});
</script>

