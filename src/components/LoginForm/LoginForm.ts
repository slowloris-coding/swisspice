import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "LoginForm",
  components: {},
})
export default class LoginForm extends Vue {
  rules = {
    username: (value: string) => {
      const pattern = /^([A-z0-9_])+$/;
      return pattern.test(value) || "Invalid Username";
    },
  };
}
