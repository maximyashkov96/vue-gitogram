<template>
  <div class="c-issues">
    <toggler @onToggle="toggle" />
    <div class="comments">
      <ul class="comments-list" v-show="shown">
        <li class="comments-item" v-for="comment in comments" :key="comment.id">
          <comment :name="comment.name" :text="comment.text" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { comment } from '@/components/comment'
import { toggler } from '@/components/toggler'
import comments from './data.json'

export default {
    name: 'issues',
    data () {
        return {
            comments,
            shown: false
        }
    },
    components: {
        comment,
        toggler
    },
    methods: {
        toggle (isOpened) {
            this.shown = isOpened
        }
    }
}
</script>

<style src='./issues.scss' lang="scss" scoped></style>
