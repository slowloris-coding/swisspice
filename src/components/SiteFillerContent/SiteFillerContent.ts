import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SiteFillerContent extends Vue {
  @Prop() site_tag!: string;

  name = "SiteFillerContent";
  components = {};
}
