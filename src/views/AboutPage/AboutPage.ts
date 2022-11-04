import { Component, Vue } from "vue-property-decorator";
import SiteFillerContent from "@/components/SiteFillerContent/SiteFillerContent.vue";

@Component
export default class AboutPage extends Vue {
  name = "about";
  components = {
    SiteFillerContent,
  };
}
