import {shallowMount} from '@vue/test-utils'
import Welcome from '@/components/welcome.vue'

describe('welcome.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Welcome, {
            propsData: {msg}
        })
        expect(wrapper.text()).toMatch(msg)
    })
})
