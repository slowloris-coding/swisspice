import { Component, Vue } from "vue-property-decorator";
import EmployeeProfile from "@/components/EmployeeProfile/EmployeeProfile.vue";

@Component({
  name: "about",
  components: {
    EmployeeProfile,
  },
})
export default class AboutPage extends Vue {
  maintenance = false;
  dialog = false;
  beforeMount() {
    if (this.maintenance) {
      this.$router.push({ name: "maintenance" });
    }
  }
}
