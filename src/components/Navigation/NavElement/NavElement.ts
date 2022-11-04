import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class NavElement extends Vue {
  name = "NavElement";

  @Prop() text!: string;
  @Prop() url!: string;

  gotoUrl(): void {
    location.href = this.url;
  }
}
