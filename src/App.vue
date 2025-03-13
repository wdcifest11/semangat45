<script>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar },
  data() {
    return {
      RouterView,
      user: JSON.parse(localStorage.getItem("userInfo")) || null,
    };
  },
};
</script>

<template>
  <NavBar :name="$route.name" :user="user" />
  <RouterView :user="user" />
</template>
