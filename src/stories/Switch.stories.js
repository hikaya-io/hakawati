import BasicSwitch from '../components/switch/BasicSwitch.vue'
import TextSwitch from '../components/switch/TextSwitch.vue'
import DisabledSwitch from '../components/switch/DisabledSwitch.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Switch' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicSwitch = () => ({
  components: { BasicSwitch },
  data () {
    return {
      value: true
    }
  },
  template: `
    <div>
      <basic-switch
          v-model="value"
          activeColor="#25CED1"
          inactiveColor="#E1E1E1"
          @click="action">
      </basic-switch>
    </div>
    `,
  methods: { action: action('click') }
})

export const textSwitch = () => ({
  components: { TextSwitch },
  data () {
    return {
      value: true
    }
  },
  template: `
      <div>
        <text-switch
            v-model="value"
            activeColor="#25CED1"
            inactiveColor="#E1E1E1"
            activeText="Activate user"
            inactiveText="Deactivate user"
            @click="action">
        </text-switch>
      </div>
      `,
  methods: { action: action('click') }
})

export const disabledSwitch = () => ({
  components: { DisabledSwitch },
  data () {
    return {
      value: true
    }
  },
  template: `
      <div>
        <disabled-switch
            v-model="value"
            activeColor="#25CED1"
            inactiveColor="#E1E1E1"
            @click="action">
        </disabled-switch>
      </div>
      `,
  methods: { action: action('click') }
})
