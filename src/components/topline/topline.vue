<template>
    <div class="c-topline">
        <div class="headline">
            <slot name="header"/>
        </div>
        <div class="list">
            <slot name="list"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'topline'
}

</script>

<style lang="scss" scoped>

.c-topline {
    padding: 42px 0 32px;
}

.list {
  margin-top: 37px;
}

</style>
