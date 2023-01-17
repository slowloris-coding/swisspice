import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "MaintenancePage",
  components: {},
})
export default class MaintenancePage extends Vue {
  sparkline = {
    fill: "fill",
    gradient: ["#FF0C1A", "#36C106"],
    padding: 0,
    radius: 25,
    value: [0],
    lineWidth: 1,
    minVal: 1,
    maxVal: 5,
    initWrandomValues: function (n: number) {
      this.value = [];
      for (let i = 0; i < n; i++) {
        this.value.push(
          Math.random() * (this.maxVal - this.minVal) + this.minVal
        );
      }
    },
  };

  beforeMount() {
    this.sparkline.initWrandomValues(10);
  }
}
