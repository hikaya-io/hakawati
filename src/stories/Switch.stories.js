import HSwitch from '../components/switch/HSwitch.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Switch' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hSwitch = () => ({
  components: { HSwitch },
  data () {
    return {
      value: true
    }
  },
  template: `
    <div>
      <h-switch
        activeColor="#4B3EF9"
        inactiveColor="#E1E1E1"
        @click="action"
      >
      </h-switch>
    </div>
    `,
  methods: { action: action('click') }
})

export const textSwitch = () => ({
  components: { HSwitch },
  data () {
    return {
      value: true
    }
  },
  template: `
      <div>
        <h-switch
          activeColor="#4B3EF9"
          inactiveColor="#E1E1E1"
          activeText="Activate user"
          inactiveText="Deactivate user"
          @click="action"
        >
        </h-switch>
      </div>
      `,
  methods: { action: action('click') }
})

export const disabledSwitch = () => ({
  components: { HSwitch },
  data () {
    return {
      value: true
    }
  },
  template: `
      <div>
        <h-switch
          activeColor="#4B3EF9"
          inactiveColor="#E1E1E1"
          @click="action"
          disabled
        >
        </h-switch>
      </div>
      `,
  methods: { action: action('click') }
})
