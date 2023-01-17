<template>
  <v-card
    id="SiteCard"
    elevation="24"
    max-height="40vh"
    min-width="33vw"
    max-width="33vw"
    color="#0a0a0a"
    outlined
    style="border: 1px solid #0a0a0a"
  >
    <v-card-title
      class="text-h3 font-weight-bold"
      style="
        height: 40%;
        width: 100%;
        color: white;
        text-align: center;
        justify-content: center;
        align-content: center;
      "
    >
      {{ title }}
    </v-card-title>
    <v-card-text
      class="body-1"
      style="
        width: 100%;
        color: whitesmoke;
        text-align: center;
        justify-content: center;
        align-content: center;
      "
    >
      {{ text }}
    </v-card-text>
    <v-card-actions style="width: 100%">
      <v-spacer></v-spacer>
      <v-btn text color="primary" large :to="site">
        {{ site }} <v-spacer></v-spacer>
        <v-icon color="primary">mdi-arrow-right</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" src="./SiteCard.ts" />
<style src="./SiteCard.css" />
