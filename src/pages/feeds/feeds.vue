<template>
      <div class="x-container">
          <topline>
              <template #header>
                  <div class="header__wrapper">
                      <button class="c-button">
                          <div class="icon logo-icon">
                              <icon name='gitogram' />
                          </div>
                      </button>
                      <div class="header__menu">
                          <button class="c-button">
                              <div class="icon home-icon">
                                  <icon name='home' />
                              </div>
                          </button>
                          <button class="c-button">
                              <div class="icon photo-icon">
                                  <icon name='photo' />
                              </div>
                          </button>
                          <button class="c-button">
                              <div class="icon signOut-icon">
                                  <icon name='signOut' />
                              </div>
                          </button>
                      </div>
                  </div>
              </template>
              <template #list>
                  <ul class="stories">
                      <li class="stories-item" v-for="story in stories" :key="story.id">
                          <story-user-item
                              :name="story.name"
                              :avatar="story.avatar"
                              @onPress="handlePress(story.id)"
                          />
                      </li>
                  </ul>
              </template>
          </topline>
      </div>
      <post>
          <template #repository-info>
              <span class="repository-name">Vue.js</span>
              <p class="repository-desc"><span>Javascript</span> framework for building interactive web applications ⚡</p>
          </template>
      </post>
</template>

<script>
import { post } from '@/components/post'
import { icon } from '@/icons'
import { storyUserItem } from '@/components/storyUserItem'
import { topline } from '@/components/topline'
import stories from './data.json'

export default {
    name: 'feeds',
    data () {
        return {
            stories
        }
    },
    components: {
        topline,
        storyUserItem,
        icon,
        post
    }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
