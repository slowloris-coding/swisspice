import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "SiteCard",
  components: {},
})
export default class SiteCard extends Vue {
  @Prop() title!: string;
  @Prop() text!: string;
  @Prop() site!: string;
}
