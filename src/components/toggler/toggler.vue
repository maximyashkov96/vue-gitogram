<template>
    <button :class="['c-button', {'active': isOpened}]" @click="toggle">
        <span class="text">{{isOpened ? 'Hide' : 'Show'}} issues</span>
        <span class="icon">
            <icon name='triangle'/>
        </span>
    </button>
</template>

<script>

import { icon } from '@/icons'

export default {
    name: 'toggler',
    components: { icon },
    data () {
        return {
            isOpened: false
        }
    },
    methods: {
        toggle () {
            this.isOpened = !this.isOpened
            this.$emit('onToggle', this.isOpened)
        }
    }
}

</script>

<style lang="scss" src="./toggler.scss" scoped></style>
