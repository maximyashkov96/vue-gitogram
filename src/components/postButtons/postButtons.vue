<template>
    <div class="c-post-btns">
        <button class="post-button">
            <icon class="icon icon-star" name='star'/>
            <span class="caption">Star</span>
        </button>
        <div class="post-stars">156K</div>
        <button class="post-button">
            <icon class="icon icon-fork" name='fork'/>
            <span class="caption">Fork</span>
        </button>
        <div class="post-forks">4</div>
    </div>
</template>

<script>

import { icon } from '@/icons'

export default {
    name: 'postButtons',
    components: { icon }
}
</script>

<style src="./postButtons.scss" lang="scss" scoped>

</style>
