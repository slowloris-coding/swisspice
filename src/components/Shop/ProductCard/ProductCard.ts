import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "ProductCard",
  components: {},
})
export default class ProductCard extends Vue {
  @Prop() item_name!: string;
}
