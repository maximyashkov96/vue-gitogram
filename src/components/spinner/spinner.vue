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
  animation: rotate 1.7s linear infinite;
}
</style>
