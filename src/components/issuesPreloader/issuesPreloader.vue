<template>
  <div class="c-content-loader">
    <div class="item" v-for="n in 3" :key="n"></div>
  </div>
</template>

<script>
export default {
    name: 'issues-preloader'
}
</script>

<style lang="scss" scoped>
.item {
  height: 22px;
  border-radius: 4px;
  margin-bottom: 10px;
  background: linear-gradient(25deg, #EAEAEA 0%, #F8F8F8 50%, #EAEAEA 100%);
  animation-name: swing;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:nth-child(2) {
    width: 70%;
  }

  &:nth-child(3) {
    width: 40%;
  }
}
@keyframes swing {
    0% {background-position: 10px 0}
    50% {background-position: 50px 0}
    100% {background-position: 100px 0}
}
</style>
