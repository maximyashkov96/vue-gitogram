<template>
  <div class="c-logged-as">
    <button class="icon" @click="$router.push({ name: 'feeds' })">
      <icon name="home"/>
    </button>
    <div class="avatar" @click="$router.push({ name: 'profile' })">
      <user :src="user.avatar_url" :username="user.login" alt="user avatar" class="avatar__pic"/>
    </div>
    <button class="icon" @click="logOut">
      <icon name="exit"/>
    </button>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex' // не импортирован mapActions, mapGetters

import { icon } from '@/icons'
import { user } from '@/components/user'
export default {
    name: 'loggedAs',
    components: {
        icon,
        user
    },
    computed: {
        ...mapState({
            user: state => state.user.data
        })
    },
    props: {
        avatar: {
            type: String,
            required: true
        }
    },
    methods: {
        ...mapActions({
            fetchUser: 'user/fetchUser'
        }),
        logOut () {
            localStorage.removeItem('token')
            window.location.reload()
        }
    },
    created () {
        this.fetchUser()
    }
}
</script>

<style lang="scss" scoped>
.c-logged-as {
  display: flex;
  align-items: center;
}
.icon {
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  color: #262626;
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }
}
.avatar {
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  width: 37px;
  height: 37px;
  margin-right: 25px;
}
.avatar__pic {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
