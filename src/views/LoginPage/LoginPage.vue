<template>
  <div id="LoginPage">
    <v-card id="LoginForm" elevation="5">
      <v-card-title
        style="
          background-color: dodgerblue;
          width: 100%;
          padding: 3vh;
          color: white;
        "
        class="text-uppercase text-h4"
        >Login</v-card-title
      >
      <div id="input_container">
        <v-text-field
          label="Username"
          :rules="rules.username"
          hide-details="auto"
          placeholder="Username"
          color="blue"
          clearable
          solo
          dense
          prepend-inner-icon="mdi-account"
          height="33%"
          style="width: 80%"
        ></v-text-field>
        <v-text-field
          label="Password"
          :rules="rules.password"
          hide-details="auto"
          placeholder="Password"
          type="password"
          color="blue"
          clearable
          solo
          dense
          prepend-inner-icon="mdi-lock"
          height="33%"
          style="width: 80%"
        ></v-text-field>
      </div>
      <v-card-actions style="padding: 5%">
        <v-spacer></v-spacer>
        <v-btn color="blue" style="color: white">
          Login
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts" src="./LoginPage.ts" />
<style src="./LoginPage.css" />
