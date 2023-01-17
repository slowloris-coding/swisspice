import { Component, Vue } from "vue-property-decorator";
import ProductCard from "@/components/Shop/ProductCard/ProductCard.vue";

@Component({
  name: "ShopPage",
  components: {
    ProductCard,
  },
})
export default class ShopPage extends Vue {
  maintenance = true;
  beforeMount() {
    if (this.maintenance) {
      this.$router.push({ name: "maintenance" });
    }
  }
}
