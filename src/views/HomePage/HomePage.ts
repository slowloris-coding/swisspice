import Vue from "vue";
import { Component } from "vue-property-decorator";
import SiteCard from "@/components/HomePage/SiteCard/SiteCard.vue";

@Component({
  name: "HomePage",
  components: {
    SiteCard,
  },
})
export default class HomePage extends Vue {
  tagLineQuote = '"So schmöckt d Schwiiz"';
}
