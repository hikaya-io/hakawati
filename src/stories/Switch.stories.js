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
        v-model="value"
        @change="action"
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
          v-model="value"
          @change="action"
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
          v-model="value"
          disabled
        >
        </h-switch>
      </div>
      `,
  methods: { action: action('click') }
})

export const customSwitch = () => ({
  components: { HSwitch },
  data () {
    return {
      value1: true,
      value2: true
    }
  },
  template: `
    <div>
      <div>
        <h3>Website</h3>
        <h-switch
          activeText="Monthly"
          inactiveText="Yearly"
          v-model="value2"
          @change="action"
          custom-switch
          active-text-right="120px"
          active-text-left="30px"
        >
        </h-switch>
      </div>
      <div style="margin-top: 4rem">
        <h3>App</h3>
        <h-switch
          activeColor="#4B3EF9"
          inactiveColor="#E1E1E1"
          activeText="Edit"
          inactiveText="View"
          v-model="value1"
          @change="action"
          custom-switch
        >
        </h-switch>
      </div>
    </div>
      `,
  methods: { action: action('click') }
})
