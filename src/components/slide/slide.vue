<template>
  <div class="c-slide" :class="{ active }">
    <div class="slide__topline">
      <div v-if="active" class="slide__progress">
        <xProgress class="x-progress" />
      </div>
      <user avatar="https://picsum.photos/100/150" username="islizeqiang" class="slide__userblock"/>
    </div>
    <div class="slide__content">
      <slide-placeholder picture="https://picsum.photos/200/300"/>
    </div>
    <div class="slider-footer">
      <x-button>Follow</x-button>
    </div>
    <template>
      <button class="slide__arrow btn-prev">
        <span class="icon">
          <icon name='arrowLeft' />
        </span>
      </button>
      <button class="slide__arrow btn-next">
        <span class="icon">
          <icon name='arrowRight' />
        </span>
      </button>
    </template>
  </div>
</template>

<script>

import { user } from '@/components/user'
import { xProgress } from '@/components/progress'
import { xButton } from '@/components/xButton'
import { slidePlaceholder } from '@/components/slidePlaceholder'
import { icon } from '@/icons'

export default {
    name: 'slider',
    components: {
        user,
        xProgress,
        xButton,
        slidePlaceholder,
        icon
    }
}
</script>

<style lang="scss" scoped>
.c-slide {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 668px;
  width: 376px;
  border-radius: 8px;
  background: #FFFFFF;
  transform: scale(0.8);
}
.slide__topline {
  display: flex;
  flex-direction: column;
  height: 67px;
  width: 100%;
  background: rgba(0, 0, 0, 0.0001);
  padding-top: 10px;
  border-bottom: 1px solid #DEDEDE;
}
.slide__progress {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 12px;
}
.slide__userblock {
  margin-left: 12px;
  margin-bottom: 12px;
}
.x-progress {
  width: 95%;
}
.slide__content {
  padding: 2% 5%;
  height: 100%;
}
.slide__content p {
  margin: 1em 0;
}
.slide__footer {
  display: flex;
  justify-content: center;
  height: 100px;
  min-height: 100px;
  border-top: 1px solid #DEDEDE;;
}
.slide__button{
  margin-top: 24px;
}
.slide__arrow {
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  &:hover {
    .icon {
      color: #31AE54;
    }
  }
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
}
.btn-prev {
  top: 50%;
  left: -15%;
  transform: translate(0, -50%);
}
.btn-next {
  top: 50%;
  right: -15%;
  transform: translate(0, -50%);
}
</style>
