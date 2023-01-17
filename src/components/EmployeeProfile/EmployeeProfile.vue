<template>
  <v-card class="emp_profile" elevation="3" shaped>
    <v-card-title
      style="display: flex; justify-content: center; align-items: center"
    >
      <v-avatar width="10vw" height="10vw">
        <v-img :src="getImgSrc()" :alt="image"></v-img>
      </v-avatar>
    </v-card-title>
    <v-card-text style="text-align: center" class="text-h5">
      <span style="color: black; font-weight: bold">{{ emp_name }}</span>
      <br />
      {{ emp_position }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts" src="./EmployeeProfile.ts" />
<style src="./EmployeeProfile.css" />
