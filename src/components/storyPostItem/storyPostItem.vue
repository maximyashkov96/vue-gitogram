<template>
  <div :class="['c-story-post-item', { active }]">
    <div class="stories__container">
      <div class="header">
        <div class="progress" v-if="active">
          <x-progress :isActive="isActive"  @onFinish="$emit('onProgressFinish')" />
        </div>
        <div class="user">
          <user :username="username" :src="userAvatar"/>
        </div>
      </div>
      <div class="content">
        <div class="loader" v-if="loading">
          <spinner/>
        </div>
        <div class="info" v-else>
          <div v-if="content?.length" class="content-text" v-html="content"></div>
          <placeholder v-else :paragraphs="2"/>
        </div>
      </div>
      <div class="button">
        <x-button
        @click="$emit(following.status ? 'onUnfollow' : 'onFollow', id)"
        :theme="following.status ? 'grey' : 'green'"
        :loading="following.loading"
        >
        {{following.status ? 'Unfollow' : 'Follow'}}</x-button>
      </div>
    </div>
    <slot name="buttons" v-if="active">
      <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
        <span class="icon">
          <icon name='arrowLeft' />
        </span>
      </button>
      <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
        <span class="icon">
          <icon name='arrowRight' />
        </span>
      </button>
    </slot>
  </div>
</template>

<script>

import { user } from '@/components/user'
import { xProgress } from '@/components/xProgress'
import { xButton } from '@/components/xButton'
import { placeholder } from '@/components/placeholder'
import { icon } from '@/icons'
import { spinner } from '@/components/spinner'

export default {
    name: 'storyPostItem',
    emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow', 'onUnfollow'],
    props: {
        isActive: {
            type: Boolean,
            default: false
        },
        loading: Boolean,
        btnsShown: {
            type: Array,
            default: () => ['next', 'prev']
        },
        data: {
            type: Object,
            default: () => ({})
        },
        userAvatar: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        content: {
            type: String
        },
        active: {
            type: Boolean,
            default: false
        },
        following: {
            type: Boolean
        }
    },
    components: {
        user,
        xProgress,
        xButton,
        placeholder,
        icon,
        spinner
    }
}
</script>

<style lang="scss" src="./storyPostItem.scss" scoped></style>
