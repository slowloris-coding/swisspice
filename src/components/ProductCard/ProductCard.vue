<template>
  <v-card id="ProductCard" @click="expand = !expand">
    <div id="p_img">
      <v-img :src="itm_obj.img64" contain></v-img>
    </div>
    <div id="p_txt">
      <v-card-title id="p_name">{{ itm_obj.name }}</v-card-title>
      <v-card-subtitle id="p_price"
        >{{ itm_obj.price.toFixed(2) }} CHF</v-card-subtitle
      >

      <v-card-text v-if="expand">
        <div id="p_desc">
          {{ itm_obj.description }}
        </div>
        <v-list>
          <v-list-item v-for="ing in itm_obj.ingredients" v-bind:key="ing">
            {{ ing }}
          </v-list-item>
        </v-list>
      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts" src="./ProductCard.ts" />
<style src="./ProductCard.css" />
