<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      <span class="text">{{ text }}</span>
    </p>
  </div>
</template>

<script>
export default {
    name: 'comment',
    props: {
        username: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.username {
  font-weight: bold;
  margin-right: 8px;
}
</style>
