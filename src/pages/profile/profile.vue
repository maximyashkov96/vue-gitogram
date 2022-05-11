<template>
  <h1>Profile Page</h1>
  <logged-as></logged-as>
</template>

<script>
import { loggedAs } from '@/components/loggedAs'
export default {
    name: 'profile',
    components: {
        loggedAs
    }
}
</script>

<style lang="scss" src="./profile.scss" scoped>

</style>
