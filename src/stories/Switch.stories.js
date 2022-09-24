import HSwitch from '../components/switch/HSwitch.vue'

export default {
  component: HSwitch,
  title: '1.0/Switch',
  argTypes: {
    disabled: { control: 'boolean' },
    activeColor: { control: 'color' },
    inactiveColor: { control: 'color' },
    activeText: { control: 'text' },
    inactiveText: { control: 'text' }
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { HSwitch },
    props: Object.keys(argTypes),
    data () {
      return {
        active: false
      }
    },
    methods: {
      action (val) {
        console.log(val)
      }
    },

    template: `
    <h-switch
      v-model="active"
      :disabled="disabled"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :active-text="activeText"
      :inactive-text="inactiveText"
      :secondary="secondary"
      @change="action"
    />
  `
  }
}

export const Main = Template.bind({})
Main.args = { activeText: 'Monthly', inactiveText: 'Yearly' }
