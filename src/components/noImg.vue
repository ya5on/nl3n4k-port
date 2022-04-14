<template>
  <vue-p5 v-on="{draw, setup}"></vue-p5>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  name: "noImg",
  components: {
    "vue-p5": VueP5
  },
  props: {},
  data() {
    return {}
  },
  methods: {
    setup(sk) {
      sk.createCanvas(300, 400);
      sk.background(145);
      sk.strokeWeight(10);
      sk.frameRate(30);
      sk.textSize(12);
      sk.fill(235)
      sk.textAlign(sk.CENTER);
    },
    draw(sk) {
      for (let i = 0; i < sk.width; i++) {
        let r = sk.random(55);
        sk.stroke(r);
        sk.line(i, 0, i, sk.height);
        sk.text('NO IMAGE', 145, 180);
      }
    },

  },
}
</script>

<style lang="sass">
#defaultCanvas0
  width: 100% !important
  height: 100% !important

</style>