<template>
    <div class="c-post">
        <div class="c-container">
            <div class="inner__wrapper">
                <user
                    :avatar="avatar"
                    :username="username"
                />
                <div class="post-item">
                    <slot name="repository-info"/>
                </div>
            </div>
            <issues/>
            <div class="post-date">{{ date }}</div>
        </div>
    </div>
</template>

<script>

import { user } from '@/components/user'
import { issues } from '@/components/issues'

export default {
    name: 'post',
    components: { user, issues },
    props: {
        username: {
            required: true,
            type: String
        },
        avatar: {
            required: true,
            type: String
        },
        date: {
            type: String,
            required: true
        }
    }
}

</script>

<style lang="scss" src="./post.scss" scoped></style>
