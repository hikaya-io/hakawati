import HButton from '../components/button/HButton.vue'

export default {
  component: HButton,
  title: '1.0/Button',
  argTypes: {
    type: {
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      control: { type: 'radio' }
    },
    icon: {
      options: ['edit', 'share', 'delete', 'search', 'upload', 'plus', 's-tools'],
      control: { type: 'select' }
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { HButton },
  props: Object.keys(argTypes),
  methods: {
    buttonClicked () {
      console.log('clicked')
    }
  },
  template: '<h-button v-bind="$props" @click="buttonClicked"/>'
})

export const Main = Template.bind({})
Main.args = { label: 'Button' }
