<template>
      <div class="x-container">
          <topline>
              <template #header>
                  <div class="topline_container">
                      <logo variant="logo-black" />
                      <div class="header__menu">
                          <logged-as avatar="https://picsum.photos/200/300"/>
                      </div>
                  </div>
              </template>
              <template #list>
                  <ul class="stories">
                      <li class="stories-item" v-for="{id, owner} in trendings" :key="id">
                          <story-user-item
                              :name="owner.login"
                              :avatar="owner.avatar_url"
                              @onPress="$router.push({name: 'stories', params: {initialSlide: id}})"
                          />
                      </li>
                  </ul>
              </template>
          </topline>
      </div>
      <div class="feed-container">
        <ul class="feed">
          <li class="post" v-for="{id, owner, html_url, description, full_name, stargazers_count, forks, created_at} in trendings" :key="id">
            <post
              :src="owner.avatar_url"
              :username="owner.login"
              :date="convertDate(created_at)"
            >
              <template #repository-info>
                  <a :href="html_url" class="post__title">{{full_name}}</a>
                  <p class="repository-desc">{{description}}</p>
                  <post-buttons
                    class="post__buttons"
                    :stars="stargazers_count"
                    :forks="forks"
                  />
              </template>
            </post>
          </li>
        </ul>
      </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

import { post } from '@/components/post'
import { storyUserItem } from '@/components/storyUserItem'
import { topline } from '@/components/topline'
import { postButtons } from '@/components/postButtons'
import { logo } from '@/components/logo'
import { loggedAs } from '@/components/loggedAs'

export default {
    name: 'feeds',
    components: {
        topline,
        storyUserItem,
        post,
        postButtons,
        logo,
        loggedAs
    },
    data () {
        return {
            items: []
        }
    },
    props: {
        src: {
            type: String
        }
    },
    computed: {
        ...mapState({
            trendings: state => state.trendings.data
        })
    },
    methods: {
        ...mapActions({
            fetchTrendings: 'trendings/fetchTrendings'
        }),
        convertDate (date) {
            const timestamp = Date.parse(date)
            const options = { day: 'numeric', month: 'long' }

            return Intl.DateTimeFormat('en-GB', options).format(timestamp)
        }
    },
    async mounted () {
        await this.fetchTrendings()
    }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
