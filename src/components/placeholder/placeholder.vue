<template>
  <div class="c-placeholder">
    <div class="mainpic"></div>
    <div class="content" v-for="n in paragraphs" :key="n">
      <div class="item"></div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        paragraphs: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="scss" scoped>

.c-placeholder {
  color: #DEDEDE;
}

.mainpic {
  height: 170px;
  margin-bottom: 28px;
  border-radius: 4px;
  background: currentColor;
}

.content {
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:after, &:before, .item {
    content: "";
    display: block;
    background: currentColor;
    height: 17px;
    border-radius: 3px;
    margin-bottom: 10px;
  }

  &:before {
    width: 67%;
  }

  .item {
    width: 80%;
  }

  &:after {
    width: 53%;
  }
}
</style>
