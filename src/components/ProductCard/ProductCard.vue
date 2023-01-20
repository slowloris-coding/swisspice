<template>
  <v-card id="ProductCard" @click="expand = !expand">
    <div id="p_img">
      <v-img :src="itm_obj.img64" contain></v-img>
    </div>
    <div id="p_txt">
      <v-card-title id="p_name" class="text-h4">{{
        itm_obj.name
      }}</v-card-title>
      <v-card-subtitle id="p_price" class="font-italic">
        {{ itm_obj.price.toFixed(2) }} CHF
      </v-card-subtitle>
      <v-card-text v-if="expand">
        <v-divider></v-divider>
        <div id="p_desc">
          <br />
          {{ itm_obj.description }}
        </div>
        <br />
        <div>
          <span class="text-h5">Zutaten</span>
          <ul>
            <li v-for="ing in itm_obj.ingredients" v-bind:key="ing">
              {{ ing }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts" src="./ProductCard.ts" />
<style src="./ProductCard.css" />
