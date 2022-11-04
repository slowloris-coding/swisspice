<template>
  <div id="App">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/Navigation/NavBar/NavBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
});
</script>

<style>
:root {
  --font-fam: Verdana;
}

* {
  font-family: var(--font-fam);
}

body {
  margin: 0;
  padding: 0;
}

#App {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
