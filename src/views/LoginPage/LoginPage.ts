import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "LoginPage",
  components: {},
})
export default class LoginPage extends Vue {
  maintenance = false;
  rules = {
    username: (value: string) => {
      const pattern = /^([A-z0-9_])+$/;
      return pattern.test(value) || "Invalid Username";
    },
    password: (value: string) => {
      const pattern = /^.*$/;
      return pattern.test(value) || "Invalid Password";
    },
  };
}
