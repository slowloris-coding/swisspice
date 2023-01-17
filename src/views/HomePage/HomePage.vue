<template>
  <v-container id="HomePage">
    <v-container
      class="text-h1 font-weight-bold font-italic"
      id="tagline_quote"
    >
      {{ tagLineQuote }}
    </v-container>

    <v-spacer></v-spacer>

    <v-container id="site_cards_container">
      <v-img src="@/assets/HomePage/wave-haikei.svg" id="site_cards">
        <SiteCard
          title="Shop"
          text="Jetzt unser Sortiment erkunden."
          site="shop"
        />

        <SiteCard
          title="About"
          text="Mehr über uns und die Produkte Erfahren."
          site="about"
        />
      </v-img>
    </v-container>
  </v-container>
</template>

<script lang="ts" src="./HomePage.ts" />
<style src="./HomePage.css" />
