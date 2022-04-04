import HButton from '../components/button/NewHButton.vue'

export default {
  component: HButton,
  title: 'hikaya/buttons',
  argTypes: {
    type: {
      options: ['primary', 'success', 'info', 'warning', 'danger'],
      control: { type: 'radio' }
    },
    icon: {
      options: ['edit', 'share', 'delete', 'search', 'upload', 'plus', 's-tools'],
      control: { type: 'select' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { HButton },
  props: Object.keys(argTypes),
  template: '<HButton v-bind="$props"></HButton>'
})

export const Default = Template.bind({})
Default.args = { type: 'primary', label: 'Default' }
