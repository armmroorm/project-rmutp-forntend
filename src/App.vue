<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
/* Import Simple Line Icons Set */
$simple-line-font-path: "~simple-line-icons/fonts/";
@import "~simple-line-icons/scss/simple-line-icons.scss";
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
// Import Main styles for this application
@import "assets/scss/style";
// Font Wep App
@font-face {
  font-family: montserrat;
  src: url("./assets/montserrat/Montserrat-Regular.ttf");
  /* font-weight: bold; */
}
* {
  font-family: montserrat;
}
</style>
