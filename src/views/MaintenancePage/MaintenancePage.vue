<template>
  <v-container id="MaintenancePage" fluid>
    <v-sparkline
      :fill="sparkline.fill"
      :gradient="sparkline.gradient"
      :line-width="sparkline.lineWidth"
      :padding="sparkline.padding"
      :smooth="sparkline.radius || false"
      :value="sparkline.value"
      id="sparkline_graphic"
      auto-draw
    >
    </v-sparkline>
    <v-card id="text_card" elevation="0">
      <v-card-title>
        <v-container
          style="width: 100%; display: flex; justify-content: center"
        >
          <v-icon x-large color="#000000" id="large_gear">mdi-cog</v-icon>
          <v-icon color="#000000" id="small_gear">mdi-cog</v-icon>
        </v-container>
        <span id="text_msg" class="text-h2 transition-ease-in-out">
          Site under construction
        </span>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./MaintenancePage.ts" />
<style src="./MaintenancePage.css" />
