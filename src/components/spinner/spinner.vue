<template>
  <div class="c-spinner">
    <icon name="spinner" />
  </div>
</template>

<script>
import { icon } from '@/icons'
export default {
    components: { icon }
}
</script>

<style lang="scss" scoped>
.c-spinner {
  color: green;
  display: inline-block;
  width: 44px;
  height: 44px;
  animation-name: rotation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes rotation {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}
</style>
