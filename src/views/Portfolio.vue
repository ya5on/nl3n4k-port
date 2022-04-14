<template>
  <div>
    <router-link to="/" class="home-link">&#10508; back</router-link>
    <div class="container">
      <div class="content">
        <div v-for="(item, index) in items" :key="index" class="block">
          <img :src="item.img" :alt="item.img" v-if="item.img" class="block__img">
          <div v-else class="block__img">
            <p5/>
          </div>
          <a :href="item.url" target="_blank" class="block__link">{{ item.name }}</a>
          <p class="block__info">{{ item.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import p5 from "@/components/noImg";

export default {
  name: "Portfolio",
  components: { p5 },

  data() {
    return {
      items: [
        { name: 'lavanda.net.ua',
          url: 'https://lavanda.net.ua',
          img: require('@/assets/img/lavanda.jpg'),
          info: 'html,css,october cms'
        },
        { name: 'pinselstudio.com',
          url: 'https://pinselstudio.com',
          img: require('@/assets/img/pinsel.jpg'),
          info: 'vue.js'
        },
        { name: '105garage.com.ua',
          url: 'https://105garage.com.ua',
          img: require('@/assets/img/motosto.jpg'),
          info: 'html,css,wordpress'
        },
        { name: 'pcexpress.com.ua',
          url: 'https://pcexpress.com.ua',
          img: false,
          info: 'nuxt.js'
        },
        { name: 'weather-app',
          url: 'https://vue-vuex-weather-app.vercel.app',
          img: require('@/assets/img/weather.png'),
          info: 'vue.js'
        },
        { name: 'grand-pulsar.com.ua',
          url: 'https://grand-pulsar.com.ua',
          img: false,
          info: 'ocStore cms'
        },
        { name: 'pulsar-shop.com.ua',
          url: 'https://pulsar-shop.com.ua',
          img: require('@/assets/img/pulsar.jpg'),
          info: 'html,css'
        },
        { name: 'rental.ua',
          url: 'https://rental.ua',
          img: require('@/assets/img/rental.jpg'),

        },
        { name: 'jeansomen.com.ua',
          url: 'https://jeansomen.com.ua',
          img: require('@/assets/img/jeansomen.jpg'),
          info: 'html,css'
        },
        { name: 'market-mebeli.com.ua',
          url: 'https://market-mebeli.com.ua/m/',
          img: require('@/assets/img/marketMebeli.jpg'),
          info: 'html,css'
        },
        { name: 'epicentr test',
          url: 'https://scandalous-thunder.surge.sh',
          img: false,
          info: 'vue.js'
        },
      ],
    }
  },
  computed: {

  }
}
</script>

<style lang="sass">
.home-link
  position: fixed
  top: 10px
  left: 10px
  z-index: 14
  font-size: 18px
  color: #42b983
  text-transform: uppercase
  transition: .5s all

  &:hover
    color: $red

.content
  display: flex
  flex-wrap: wrap
  width: 100%
  margin: 30px auto
  background-color: #0E0F13
  +sm(justify-content, center)

.block
  width: 300px
  height: 400px
  margin: 10px
  opacity: .4
  transition: 1s
  position: relative
  background-size: cover
  &:hover
    opacity: 1
    filter: grayscale(0)

  &__img
    width: 100%
    height: 100%
    object-fit: cover

  &__link
    font-family: 'IBM Plex Mono', sans-serif
    color: $main-color
    font-size: 16px
    position: absolute
    top: 5px
    left: 5px
    z-index: 12
    background-color: #000
    display: block
    padding: 2px
    +sm(font-size, 12px)

  &__info
    font-family: 'IBM Plex Mono', sans-serif
    color: $main-color
    font-size: 14px
    position: absolute
    bottom: 5px
    left: 5px
    z-index: 12
    background-color: #000
    display: block
    padding: 2px
    +sm(font-size, 12px)

</style>
