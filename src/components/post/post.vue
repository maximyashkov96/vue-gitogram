<template>
    <div class="c-post">
        <div class="c-container">
            <div class="inner__wrapper">
                <user
                    :src="src"
                    :username="username"
                />
                <div class="post-item">
                    <slot name="repository-info"/>
                </div>
                <div class="toggler">
                  <toggler @onToggle="toggle"></toggler>
                </div>
                <div class="issues-loader" v-if="loading">
                  <issues-preloader></issues-preloader>
                </div>
                <div class="comments mt-12" v-if="shown">
                  <ul v-if="issues.length" class="comments__list">
                    <li
                      class="comments__item"
                      v-for="issue in issues" :key="issue.id"
                    >
                      <comment
                        :text="issue.title"
                        :username="issue.user.login"
                      ></comment>
                    </li>
                  </ul>
                  <div v-else class="no-comments">No comments</div>
                </div>
            </div>
            <div class="post-date">{{ date }}</div>
        </div>
    </div>
</template>

<script>

import { user } from '@/components/user'
import { issuesPreloader } from '@/components/issuesPreloader'
import { toggler } from '@/components/toggler'
import { comment } from '@/components/comment'

export default {
    name: 'post',
    components: { user, issuesPreloader, comment, toggler },
    data () {
        return {
            shown: false
        }
    },
    emits: ['loadContent'],
    props: {
        username: {
            required: true,
            type: String
        },
        src: {
            required: true,
            type: String
        },
        date: {
            type: String,
            required: true
        },
        issues: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean
        }
    },
    methods: {
        toggle (isOpened) {
            this.shown = isOpened
            if (isOpened && this.issues.length === 0) {
                this.$emit('loadContent')
            }
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
.comments__list {
  padding: 0;
}
</style>
