import BasicSwitch from '../components/switch/BasicSwitch.vue'
import TextSwitch from '../components/switch/TextSwitch.vue'
import DisabledSwitch from '../components/switch/DisabledSwitch.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Switch' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicSwitch = () => ({
  components: { BasicSwitch },
  template: `
    <div>
      <basic-switch
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
  template: `
      <div>
        <text-switch
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
  template: `
      <div>
        <disabled-switch
            activeColor="#25CED1"
            inactiveColor="#E1E1E1"
            @click="action">
        </disabled-switch>
      </div>
      `,
  methods: { action: action('click') }
})
