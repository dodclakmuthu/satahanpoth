<template>
  <nav>
    <div>
      <div class="logo">
        <router-link to="/"
          ><img src="../assets/logo.png" alt=""
        /></router-link>
      </div>
      <ul>
        <li><font-awesome-icon :icon="['fas', 'book']" /></li>
        <li><font-awesome-icon :icon="['fas', 'pen-nib']" /></li>
        <li><font-awesome-icon :icon="['fas', 'user']" /></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook, faPenNib, faUser} from "@fortawesome/free-solid-svg-icons";
library.add(faBook, faPenNib, faUser);

export default defineComponent({
  name: "NavBarComponent",
  setup() {
    return {};
  },
});
</script>
