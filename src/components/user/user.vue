<template>
    <div class="c-user-profile">
        <img :src="avatar" alt="userAvatar" class="img"/>
        <span class="username">{{username}}</span>
    </div>
</template>

<script>

export default {
    name: 'user',
    props: {
        avatar: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        }
    }
}

</script>

<style lang="scss" src="./user.scss" scoped></style>
