import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "ShortLogo",
  components: {},
})
export default class ShortLogo extends Vue {
  @Prop() img_width!: number;
}
