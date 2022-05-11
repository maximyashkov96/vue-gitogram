<template>
      <div class="x-container">
          <topline>
              <template #header>
                  <div class="topline_container">
                      <logo variant="logo-black" />
                      <div class="header__menu">
                          <logged-as/>
                      </div>
                  </div>
              </template>
              <template #list>
                  <ul class="stories">
                      <li class="stories-item" v-for="{id, owner} in getUnstarredOnly" :key="id">
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
          <li class="post" v-for="{id, owner, html_url, description, full_name, stargazers_count, forks, created_at, issues, name} in starred" :key="id">
            <post
              :src="owner.avatar_url"
              :username="owner.login"
              :date="convertDate(created_at)"
              :issues="issues?.data"
              :loading="issues?.loading"
              @loadContent="loadIssues({ id, owner: owner.login, repo: name})"
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

import { mapActions, mapState, mapGetters } from 'vuex'

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
            trendings: state => state.trendings.data,
            starred: state => state.starred.data
        }),
        ...mapGetters(['getUnstarredOnly'])
    },
    methods: {
        ...mapActions({
            fetchTrendings: 'trendings/fetchTrendings',
            fetchStarredRepos: 'starred/fetchStarredRepos',
            fetchIssuesForRepo: 'starred/fetchIssuesForRepo'
        }),
        async loadIssues ({ id, owner, repo }) {
            await this.fetchIssuesForRepo({ id, owner, repo })
        },
        convertDate (date) {
            const timestamp = Date.parse(date)
            const options = { day: 'numeric', month: 'long' }

            return Intl.DateTimeFormat('en-GB', options).format(timestamp)
        }
    },
    async mounted () {
        await this.fetchTrendings()
        await this.fetchStarredRepos()
    }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
