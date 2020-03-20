import BasicButton from '../components/button/BasicButton.vue'
import PlainButton from '../components/button/PlainButton.vue'
import RoundButton from '../components/button/RoundButton.vue'
import CircleButton from '../components/button/CircleButton.vue'
import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Button' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicButton = () => ({
  components: { BasicButton },
  template: '<basic-button @click="action"> Default </basic-button>',
  methods: { action: action('click') }
})

export const plainButton = () => ({
  components: { PlainButton },
  template: '<plain-button />'
})

export const roundButton = () => ({
  components: { RoundButton },
  template: '<round-button />'
})

export const circleButton = () => ({
  components: { CircleButton },
  template: '<circle-button />'
})
