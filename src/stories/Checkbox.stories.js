import HCheckbox from '../components/checkbox/HCheckbox.vue'

export default {
  component: HCheckbox,
  title: '1.0/Checkbox',
  argTypes: {
    type: {
      options: ['basic', 'button', 'grouped'],
      control: { type: 'radio' }
    },
    disabled: {
      control: 'boolean',
      description: 'Used to disable a basic checkbox'
    }
  }
}

const groupedOptions = [
  { label: 'Option A' },
  { label: 'Option B', disabled: true },
  { label: 'Option C' }
]

const Template = (args, { argTypes }) => {
  return {
    components: { HCheckbox },
    props: Object.keys(argTypes),
    computed: {
      getLabel () {
        return `${this.type} checkbox`
      }
    },
    template: `
      <h-checkbox 
          :type="type"
          :label="getLabel"
          :disabled="disabled"
          :options="groupedOptions" 
      />
    `
  }
}

export const Main = Template.bind({})
Main.args = { type: 'basic', label: 'basic checkbox', groupedOptions }
