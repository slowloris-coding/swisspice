import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {
  name = "NavBar";

  gotoLocation(url: string) {
    location.href = url;
  }
}
