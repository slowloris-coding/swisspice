<template>
  <v-container id="HomePage">
    <div id="left_container" class="side_container">
      <v-card
        id="shop_card"
        class="site_card"
        elevation="0"
        tile
        @mouseenter="hover_card = 'shop'"
        @mouseleave="hover_card = 'none'"
        to="shop"
      >
        <v-card-title
          class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4"
          style="color: white; font-weight: bold"
        >
          SHOP
        </v-card-title>
      </v-card>
    </div>
    <div id="right_container" class="side_container">
      <v-card
        id="about_card"
        class="site_card"
        elevation="0"
        tile
        @mouseenter="hover_card = 'about'"
        @mouseleave="hover_card = 'none'"
        to="about"
      >
        <v-card-title
          class="text-xl-h4 text-lg-h4 text-md-h5 text-sm-h6"
          style="color: white; font-weight: bold"
          >ABOUT
        </v-card-title>
      </v-card>
      <v-card
        id="profile_card"
        class="site_card"
        elevation="0"
        tile
        @mouseenter="hover_card = 'profile'"
        @mouseleave="hover_card = 'none'"
        to="profile"
      >
        <v-card-title
          class="text-xl-h4 text-lg-h4 text-md-h5 text-sm-h6"
          style="color: white; font-weight: bold"
          >PROFILE
        </v-card-title>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts" src="./HomePage.ts" />
<style src="./HomePage.css" />
