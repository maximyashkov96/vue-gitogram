<template>
      <div class="x-container">
          <topline>
              <template #header>
                  <div class="topline_container">
                      <logo variant="logo-black" />
                      <div class="header__menu">
                          <logged-as
                            avatar="https://picsum.photos/200/300" />
                      </div>
                  </div>
              </template>
              <template #list>
                  <ul class="stories">
                      <li class="stories-item" v-for="item in items" :key="item.id">
                          <story-user-item
                              :name="item.owner.login"
                              :avatar="item.owner.avatar_url"
                              @onPress="handlePress(item.id)"
                          />
                      </li>
                  </ul>
              </template>
          </topline>
      </div>
      <div class="feed-container">
        <ul class="feed">
          <li class="post" v-for="item in items" :key="item.id">
            <post
              :avatar="item.owner.avatar_url"
              :username="item.owner.login"
              :date="convertDate(item.created_at)"
            >
              <template #repository-info>
                  <a :href="item.html_url" class="post__title">{{ item.full_name }}</a>
                  <p class="repository-desc">{{item.description}}</p>
                  <post-buttons
                    class="post__buttons"
                    :stars="item.stargazers_count"
                    :forks="item.forks"
                  />
              </template>
            </post>
          </li>
        </ul>
      </div>
</template>

<script>
import { post } from '@/components/post'
import { storyUserItem } from '@/components/storyUserItem'
import { topline } from '@/components/topline'
import { postButtons } from '@/components/postButtons'
import { logo } from '@/components/logo'
import { loggedAs } from '@/components/loggedAs'

import * as api from '@/api'

export default {
    name: 'feeds',
    data () {
        return {
            items: []
        }
    },
    setup () {
        const convertDate = (date) => {
            const timestamp = Date.parse(date)
            const options = { day: 'numeric', month: 'long', year: 'numeric' }

            return Intl.DateTimeFormat('en-GB', options).format(timestamp)
        }

        return {
            convertDate
        }
    },
    methods: {
        getFeedData (item) {
            return {
                title: item.name,
                description: item.description,
                username: item.owner.login,
                stars: item.stargazers_count,
                forks: item.forks
            }
        }
    },
    async created () {
        try {
            const { data } = await api.trendings.getTrendings()
            this.items = data.items
        } catch (error) {
            console.log(error)
        }
        api.trendings.getTrendings()
    },
    components: {
        topline,
        storyUserItem,
        post,
        postButtons,
        logo,
        loggedAs
    }
}
</script>

<style lang="scss" scoped>

.topline_container {
  display: flex;
  justify-content: space-between;
}

.stories {
  display: flex;
  justify-content: space-between;
}

.feed-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.feed {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.post {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.post__title {
  text-decoration: none;
  display: block;
  color: #000;
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 15px;
  line-height: 1;
}

.post__title:hover {
  text-decoration: underline;
}

.post__buttons {
  margin-top: 33px;
}

.icon {
  width: 15px;
  height: 15px;
}

</style>
