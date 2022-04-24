<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li class="stories-item" v-for="({id, owner, readme}, ndx) in trendings" :key="id" ref="item">
            <story-post-item
              :user-avatar="owner.avatar_url"
              :username="owner.login"
              :content="readme"
              :loading="slideNdx === ndx && loading"
              :active="slideNdx === ndx"
              :isActive="slideNdx === ndx"
              :btnsShown="activeBtns"
              @onNextSlide="handleSlide(ndx + 1)"
              @onPrevSlide="handleSlide(ndx - 1)"
              @onProgressFinish="handleSlide(ndx + 1)"
            />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { storyPostItem } from '@/components/storyPostItem'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'storiesSlider',
    components: {
        storyPostItem
    },
    props: {
        initialSlide: {
            type: Number
        }
    },
    data () {
        return {
            slideNdx: 0,
            sliderPosition: 0,
            btnsShown: true,
            loading: false
        }
    },
    computed: {
        ...mapState({
            trendings: state => state.trendings.data
        }),
        activeBtns () {
            if (this.btnsShown === false) return []
            if (this.slideNdx === 0) return ['next']
            if (this.slideNdx === this.trendings.length - 1) return ['prev']
            return ['next', 'prev']
        }
    },
    methods: {
        ...mapActions({
            fetchTrendings: 'trendings/fetchTrendings',
            fetchReadme: 'trendings/fetchReadme'
        }),
        async fetchReadmeForActiveSlide () {
            const { id, owner, name } = this.trendings[this.slideNdx]
            await this.fetchReadme({ id, owner: owner.login, repo: name })
        },
        moveSlider (slideNdx) {
            const { slider, item } = this.$refs
            const slideWidth = parseInt(getComputedStyle(item[slideNdx]).getPropertyValue('width'), 10)
            this.slideNdx = slideNdx
            console.log(slideNdx)
            this.sliderPosition = -(slideWidth * slideNdx)
            slider.style.transform = `translateX(${this.sliderPosition}px)`
        },
        async loadReadme () {
            this.btnsShown = false
            this.loading = true
            try {
                await this.fetchReadmeForActiveSlide()
            } catch (e) {
                console.log(e)
            } finally {
                this.loading = false
                this.btnsShown = true
            }
        },
        async handleSlide (slideNdx) {
            this.moveSlider(slideNdx)
            await this.loadReadme()
        }
    },
    async mounted () {
        if (this.initialSlide) {
            const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
            console.log(ndx)
            await this.handleSlide(ndx)
        }

        await this.fetchTrendings()
        await this.loadReadme()
    }
}
</script>

<style lang="scss" scoped>
.stories {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -188px;
  transition: .4s;
}

.stories-container {
  height: 660px;
  position: relative;
}
</style>
