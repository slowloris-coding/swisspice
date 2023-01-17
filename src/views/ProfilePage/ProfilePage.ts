import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "ProfilePage",
  components: {},
})
export default class ProfilePage extends Vue {
  maintenance = true;
  beforeMount() {
    if (this.maintenance) {
      this.$router.push({ name: "maintenance" });
    }
  }
}
