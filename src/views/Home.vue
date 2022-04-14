<template>
  <div class="home">
    <Navigation/>
    <div class="main">
      <div class="main__content">
        <router-link to="/portfolio" class="link">Portfolio here</router-link>
        <Cv />
<!--        <vue-p5 v-on="{setup, draw}" @click="mouseClicked"></vue-p5>-->
      </div>
    </div>
  </div>
</template>

<script>
import VueP5 from "vue-p5"
import Navigation from "../components/Navigation"
import Cv from '../components/cv.vue'
// import { Walker } from "../components/MyNameClass"

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: {Navigation, "vue-p5": VueP5, Cv},
  props: {},
  data() {
    return {
      w: 500,
      h: 500,
      numWalkers: 1000,
      walkers: []
    }
  },
  mounted() {

  },
  methods: {
    // setup(s) {
    //   s.createCanvas(500, 500);
    //   s.background(245);
    //   s.stroke(0, 100);
    //   this.createWalkers(this.numWalkers)
    // },
    // createWalkers(s){
    //   let num = 1000;
    //   for (let i = 0; i < num; i++) {
    //     let pos = this.createVector(
    //         s.random(s.width),
    //         s.random(s.height)
    //     );
    //     this.walkers.push(
    //         new Walker(pos, s.createVector(0, 0))
    //     );
    //   }
    // },
    // mouseClicked(s) {
    //   s.background(225);
    //   s.clear();
    // },
    // draw() {
    //   this.walkers.forEach(
    //       walker => {
    //         if (!walker.isOut()) {
    //           walker.updVelocity();
    //           walker.move();
    //           walker.draw();
    //         }
    //       }
    //   );
    // },
  },

}
</script>

<style lang="sass">
.home
  margin: 0
  height: 100vh
  width: 100%
  background-color: #fff

.main
  width: 100%
  height: 100%
  position: relative
  z-index: 1
  //perspective: 1000px
  //transform-origin: 0 50%
  //transform: perspective(800px) rotate3d(0,1,0,9deg)
  //backface-visibility: hidden
  background-color: #0E0F13

  &__content
    background-size: cover
    height: 100%
    min-height: 100%
    min-width: 100%
    transition: all .6s ease-in-out
    z-index: 0
    overflow: hidden
    position: initial !important
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    +sm(justify-content, center)

    .link
      font-size: 30px
      margin-top: 50px
      
      +sm(margin-top, 0)

      &:hover
        color: #42b983

    h1
      margin: 100px 0 0 10px


</style>