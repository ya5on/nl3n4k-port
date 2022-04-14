<template>
  <div class="cv">
    <div class="cv__contacts">
      <div class="name">
        <h1>Alexander Guy</h1>
        <h2>Front-end developer</h2>
        <ul>
          <li>Birthday: 07 March 1989</li>
          <li>Region: Kyiv, Ukraine</li>
          <li>Phone: 099 545 2740 (telegram, viber)</li>
          <li>E-mail: nl3n4k@gmail.com</li>
          <li>Git: https://github.com/ya5on</li>
          <li>Portfolio: https://ya5on.github.io/#/portfolio</li>
        </ul>
      </div>
      <div class="photo">
        <img src="../assets/photo_main.jpg" alt="photo">
      </div>
    </div>
    <div class="cv__skills"></div>
    <div class="cv__about"></div>
    <div class="cv__education"></div>
    <div class="cv__experiense"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
.cv
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
  width: 100%
  max-width: 960px
  color: #fff
  border: 1px solid red
  display: none

  &__contacts
    display: flex
    justify-content: space-between

    .name
      h1
        margin: 0

    .photo
      width: 180px


</style>
