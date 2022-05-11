<template>
  <div class="wrapper">
    <div class="auth">
      <logo class="auth-logo" variant="logo-black"/>
      <span class="auth-title">More than just one repository. This is our digital world.</span>
      <x-button class="auth-btn" theme="green" size='c-button--auth' @click="getCode">
        <span class="auth-btn__text">Authorize with github</span>
        <span>
          <icon class="auth-github" name="github"/>
        </span>
      </x-button>
      <img class="auth-img" src="../../assets/device_notebook.png" alt="notebook">
    </div>
  </div>
</template>

<script>
import { logo } from '@/components/logo'
import { xButton } from '@/components/xButton'
import { icon } from '@/icons'
import env from '../../../env'

export default {
    name: 'auth',
    components: {
        logo,
        xButton,
        icon
    },
    methods: {
        getCode () {
            const githubAuthUrl = 'https://github.com/login/oauth/authorize'
            const params = new URLSearchParams()
            params.append('client_id', env.clientId)
            params.append('scope', 'repo:status public_repo read:user')
            window.location.href = `${githubAuthUrl}?${params}`
        }
    },
    async created () {
        const code = new URLSearchParams(window.location.search).get('code')

        if (code) {
            try {
                const response = await fetch('https://webdev-api.loftschool.com/github', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        clientId: env.clientId,
                        code,
                        clientSecret: env.clientSecret
                    })
                })
                const { token } = await response.json()
                console.log(token)
                localStorage.setItem('token', token)
            } catch (error) {
                console.log(error)
            } finally {
                location.replace('/')
            }
        }
    }
}
</script>

<style lang="sss" src="./auth.scss" scoped>

</style>
