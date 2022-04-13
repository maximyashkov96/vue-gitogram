import xProgress from './xProgress.vue'

export default {
    title: 'xProgress',
    component: xProgress
}

const template = () => ({
    components: { xProgress },
    template: '<x-progress />'
})

export const Default = template.bind({})
