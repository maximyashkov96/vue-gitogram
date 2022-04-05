<template>
    <div class="c-post">
        <div class="c-container">
            <div class="inner__wrapper">
                <user
                    avatar="https://picsum.photos/200/300"
                    username="joshua_l"
                />
                <div class="post-item">
                    <slot name="repository-info"/>
                    <postButtons/>
                </div>
            </div>
            <issues/>
        </div>
    </div>
</template>

<script>

import { postButtons } from '@/components/postButtons'
import { user } from '@/components/user'
import { issues } from '@/components/issues'

export default {
    name: 'post',
    components: { postButtons, user, issues }
}

</script>

<style lang="scss" src="./post.scss" scoped></style>
