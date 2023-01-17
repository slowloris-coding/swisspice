<template>
  <v-app>
    <v-app-bar app prominent shrink-on-scroll color="normal">
      <v-img contain class="logo" src="@/assets/logo/logo_long.svg"></v-img>
      <v-spacer></v-spacer>
      <v-tabs
        class="menu_tabs"
        slider-color="primary"
        slider-size="3"
        :hide-slider="
          $route.name === 'profile' || $route.name === 'maintenance'
        "
        icons-and-text
        show-arrows
      >
        <v-tab to="home" class="menu_tab">
          <span v-if="$route.name === 'home'">Home</span>
          <v-icon v-else>mdi-home</v-icon>
        </v-tab>
        <v-tab to="shop" class="menu_tab">
          <span v-if="$route.name === 'shop'">Shop</span>
          <v-icon v-else>mdi-store</v-icon>
        </v-tab>
        <v-tab to="about" class="menu_tab">
          <span v-if="$route.name === 'about'">About</span>
          <v-icon v-else>mdi-book-open-variant</v-icon>
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn
        fab
        elevation="4"
        style="
          align-self: flex-end;
          justify-self: flex-end;
          transform: scale(0.75);
        "
        :color="
          (() => {
            return $route.name === 'profile' ? 'primary' : '#FFF';
          })()
        "
        to="profile"
        @mouseenter="
          (event) => {
            event.target.style.backgroundColor = '#FF0C1A55';
          }
        "
        @mouseleave="
          (event) => {
            event.target.style.backgroundColor = '#FFF';
          }
        "
      >
        <v-icon x-large>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "App",
})
export default class App extends Vue {}
</script>

<style>
.logo {
  height: 100%;
  width: 10%;
}

.menu_tabs {
  height: 50%;
  width: 50%;
}

.menu_tab {
  height: 50%;
  width: 15%;
  align-self: flex-end;
}
</style>
