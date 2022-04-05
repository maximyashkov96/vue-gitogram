<template>
    <button class="story-user-item" @click="$emit('onPress')">
        <div class="avatar">
            <img :src="avatar" class="img" alt="userIcon avatar" />
        </div>
        <div class="username">{{name}}</div>
    </button>
</template>

<script>
export default {
    name: 'storyUserItem',
    props: {
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }
    }
}

</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>
