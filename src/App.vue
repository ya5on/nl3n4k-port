<template>
  <div id="app">
    <div class="preloader">
      <div id="loader" />
    </div>
    <router-view/>
  </div>
</template>
<script>


export default {
  components: {

  },
  created() {
    // preloader
    window.addEventListener('load', function () {
      let preloader = document.querySelector('.preloader');
      preloader.className += " hidden";
    });
  }

}
</script>
<style lang="sass">

</style>
