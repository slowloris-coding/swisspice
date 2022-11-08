<template>
  <v-card
    id="SiteCard"
    elevation="24"
    max-height="40vh"
    min-width="33vw"
    max-width="33vw"
    color="secondary"
    outlined
  >
    <v-card-title
      class="text-h3 font-weight-bold"
      color="accent"
      style="height: 40%; width: 100%"
    >
      {{ title }}
    </v-card-title>
    <v-card-text class="body-1" style="width: 100%">
      {{ text }}
    </v-card-text>
    <v-card-actions style="width: 100%">
      <v-spacer></v-spacer>
      <v-btn text color="accent" large :to="site">
        {{ site }} <v-spacer></v-spacer>
        <v-icon color="accent">mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./SiteCard.ts" />
<style src="./SiteCard.css" />
