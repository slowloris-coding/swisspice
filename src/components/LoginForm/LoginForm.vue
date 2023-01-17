<template>
  <v-card id="LoginForm">
    <v-card-title>Login</v-card-title>
    <v-text-field
      label="Username"
      :rules="rules.username"
      hide-details="auto"
      placeholder="your username"
      color="blue"
      clearable
      solo
      dense
      prepend-inner-icon="mdi-account"
    ></v-text-field>
  </v-card>
</template>

<script lang="ts" src="./LoginForm.ts" />
<style src="./LoginForm.css" />
