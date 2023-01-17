import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "ProductCard",
  components: {},
})
export default class ProductCard extends Vue {
  @Prop() itm_obj!: any;
  @Prop() expand = false;

  img64Vars = {
    "--p-img": this.itm_obj.img64,
  };
}
