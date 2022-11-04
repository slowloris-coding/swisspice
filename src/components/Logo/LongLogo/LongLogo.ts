import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "LongLogo",
  components: {},
})
export default class LongLogo extends Vue {
  @Prop() logo_width!: string;
  styleObject: any = {
    width: this.logo_width,
    height: "auto",
  };
}
