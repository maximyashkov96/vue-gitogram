import xButton from './xButton.vue'

export default {
    title: 'button',
    component: xButton,
    argTypes: {
        hoverText: {
            control: { type: 'text' }
        }
    }
}

const template = (args) => ({
    components: { xButton },
    setup () {
        return { args }
    },
    template: '<x-button v-bind="args">Follow</x-button>'
})

export const Default = template.bind({})

Default.args = {
    hoverText: 'Unfollow'
}
