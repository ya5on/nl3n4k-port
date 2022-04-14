<template>
  <div>
    <div class="btn-box" ref="btnBox" @mouseenter="mouseenter" @mouseleave="mouseleave" @mousemove="mousemove">
      <button class="btn" @click="addClass">menu</button>
    </div>
    <nav class="nav" :class="{ active: isActive }">
      <button class="btn-close" @click="removeClass">close</button>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/portfolio" class="link">Portfolio</router-link>
    </nav>
  </div>
</template>

<script>
import {gsap} from 'gsap'

export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    addClass() {
      this.isActive = !this.isActive
    },
    removeClass() {
      this.isActive = false
    },
    mouseenter() {
      gsap.to('.btn', {
        duration: .7,
        scale: 1,
        ease: "power2.inOut",
      });
      gsap.to('.btn-box', {
        duration: .7,
        scale: 1,
        ease: "power2.inOut",
      })
    },
    mouseleave() {
      gsap.to('.btn, .btn-box', {
        duration: .7,
        scale: .85,
        x: 0,
        y: 0
      })
    },
    mousemove(e) {
      this.callParallax(e);
    },
    callParallax(e) {
      this.parallaxIt(e, '.btn', 10);
      this.parallaxIt(e, '.btn-box', 80);
    },
    parallaxIt(e, target, movement){
      let box = this.$refs.btnBox
      let boundingRect = box.getBoundingClientRect();
      let relX = e.pageX - boundingRect.left;
      let relY = e.pageY - boundingRect.top;

      gsap.to(target, {
        duration: .6,
        x: (relX - boundingRect.width/2) / boundingRect.width * movement,
        y: (relY - boundingRect.height/2) / boundingRect.width * movement,
        ease: "power2.easeOut"
      });
    }
  }
}
</script>

<style lang="sass">
.btn-box
  display: flex
  position: absolute
  top: 30px
  right: 50px
  width: 70px
  height: 70px
  justify-content: center
  align-items: center
  border-radius: 50%
  border: 2px solid $red
  z-index: 12
  +sm(right, 30px)

.btn, .btn-close
  font-family: 'Alexana Neue', sans-serif
  font-size: 20px
  color: $red
  text-transform: uppercase
  background-color: transparent
  border: none
  cursor: pointer

.btn-close
  top: 30px
  right: 30px
  position: absolute
  z-index: 12

.nav
  position: fixed
  top: 0
  right: -320px
  z-index: 13
  font-size: 30px
  height: 100%
  width: 320px
  background-color: #0E0F25
  padding-top: 50px
  transition: all .5s ease-in-out

  .link
    display: block
    margin-left: 50px
    margin-bottom: 20px
    margin-top: 35px

.active
  right: 0

.btn-close
  right: auto
  left: 10px

</style>