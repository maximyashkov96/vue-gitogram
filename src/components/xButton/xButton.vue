<template>
    <button :class="['c-button', size, `theme-${theme}`, {'hover-text': withHoverText}]" :data-hover-text="hoverText"
      :disabled='disabled'
    >
    <div class="c-button__loading" v-if="loading">
      <spinner theme="white"></spinner>
    </div>
    <span class="btn-text" v-else>
      <slot></slot>
    </span>
    </button>
</template>

<script>
import { spinner } from '@/components/spinner'
export default {
    name: 'xButton',
    components: { spinner },
    props: {
        hoverText: {
            type: String
        },
        size: {
            type: String
        },
        theme: {
            type: String
        },
        loading: Boolean,
        disabled: Boolean
    },
    computed: {
        withHoverText () {
            return this.hoverText && this.hoverText.length
        }
    }
}
</script>

<style lang="scss" scoped>

.c-button {
    display: block;
    width: 270px;
    height: 44px;
    border-radius: 5px;
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 700;
    margin: 0 auto;

    &.theme-green {
      background: #31AE54;
    }

    &.theme-grey {
      background: #9E9E9E;
    }
    &--auth {
      width: 252px;
      height: 44px;
    }
}

</style>
