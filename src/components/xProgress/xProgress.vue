<template>
  <div :class="['c-progress', { active: active }]">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
    name: 'xProgress',
    data () {
        return {
            active: false
        }
    },
    emits: ['onFinish'],
    methods: {
        emitOnFinish () {
            this.$emit('onFinish')
        }
    },
    mounted () {
        setTimeout(() => {
            this.active = true
        }, 1000)
        this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    },
    beforeUnmount () {
        this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
    }
}
</script>

<style lang="scss" scoped src="./xProgress.scss"></style>
