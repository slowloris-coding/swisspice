<template>
  <v-container id="ShopPage">
    <ProductCard
      v-for="itm in product_itms"
      v-bind:key="itm.id"
      :itm_obj="itm"
    />
  </v-container>
</template>

<script lang="ts" src="./ShopPage.ts"></script>
<style src="./ShopPage.css"></style>
