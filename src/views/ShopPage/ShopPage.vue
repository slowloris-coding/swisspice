<template>
  <div class="shop">
    <SiteFillerContent site_tag="ShopPage" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteFillerContent from "@/components/SiteFillerContent/SiteFillerContent.vue";

@Component
export default class ShopPage extends Vue {
  name = "shop";
  components = {
    SiteFillerContent,
  };
}
</script>

<style>
* {
  font-family: var(--font-fam);
}
</style>
