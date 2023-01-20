import { Component, Vue } from "vue-property-decorator";
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import axios from "axios";
import VueAxios from "vue-axios";

@Component({
  name: "ShopPage",
  components: {
    ProductCard,
  },
})
export default class ShopPage extends Vue {
  api_url = "http://10.45.116.56:8888";
  product_itms: Array<object> = [];
  maintenance = false;
  beforeMount() {
    if (this.maintenance) {
      this.$router.push({ name: "maintenance" });
    } else {
      axios.get(`${this.api_url}/product/all`).then((response) => {
        if (response.data.items.length > 0) {
          response.data.items.forEach((e: object) => {
            this.product_itms.push(e);
          });
        }
      });
    }
  }
}
