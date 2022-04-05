import xButton from './xButton.vue'

export default {
    title: 'xButton',
    component: xButton
}

const template = () => ({
    components: { xButton },
    template: '<xButton hover-text="Unfollow">Follow</xButton>'
})

export const Default = template.bind({})
