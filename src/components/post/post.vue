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

<style lang="scss" scoped>
.inner__wrapper {
    width: 979px;
    margin: 0 auto;
}
.post-item {
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    padding: 24px 0;
    width: 979px;
    padding: 24px 0px 24px 24px;
}
.c-container {
    width: 979px;
    margin: 0 auto;
}
.post-date {
  font-weight: 400;
  font-size: 12px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 10px;
}
</style>
