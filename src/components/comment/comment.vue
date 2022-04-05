<template>
    <div class="c-comment">
        <div class="comment-item">
            <span class="user_name">{{name}}</span>
            <p class="user_text">{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment',
    props: {
        name: {
            required: true,
            type: String
        },
        text: {
            required: true,
            type: String
        }
    }
}
</script>

<style src="./comment.scss" lang="scss" scoped>

</style>
