<script lang="ts" src="./NavBar.ts"></script>
<style src="./NavBar.css" />

<template>
  <div id="NavBar">
    <div id="logo_container">
      <img
        id="long_logo"
        src="@/assets/logo/logo_long.svg"
        alt="long_logo"
        @click="gotoLocation('http://localhost:8080/#/')"
      />
    </div>
    <div id="navigation">
      <div
        class="NavElement"
        :class="
          $route.path === '/shop' || $route.path === '/'
            ? 'current_route_nav'
            : 'inactive_route_nav'
        "
        id="Nav_Shop"
        @click="gotoLocation('http://localhost:8080/#/shop')"
      >
        SHOP
      </div>
      <div
        class="NavElement"
        :class="
          $route.path === '/about' ? 'current_route_nav' : 'inactive_route_nav'
        "
        id="Nav_About"
        @click="gotoLocation('http://localhost:8080/#/about')"
      >
        ABOUT
      </div>
    </div>
  </div>
</template>
