import { Component, Vue } from "vue-property-decorator";
import SiteFillerContent from "@/components/SiteFillerContent/SiteFillerContent.vue";

@Component
export default class ShopPage extends Vue {
  name = "ShopPage";
  components = {
    SiteFillerContent,
  };
}
