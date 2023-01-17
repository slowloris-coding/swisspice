import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({
  name: "EmployeeProfile",
  components: {},
})
export default class EmployeeProfile extends Vue {
  @Prop() image!: string;
  @Prop() emp_name!: string;
  @Prop() emp_position!: string;

  getImgSrc(): string {
    const images = require.context("@/assets/employees/", false, /\.png$/);
    return images("./" + this.image);
  }
}
