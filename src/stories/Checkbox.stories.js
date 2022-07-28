import HCheckbox from '../components/checkbox/HCheckbox.vue'

export default {
  component: HCheckbox,
  title: '1.0/Checkbox',
  argTypes: {
    type: {
      options: ['basic', 'grouped'],
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
    template: `
        <div>
            <h-checkbox 
                v-if="type==='basic'"
                :type="type"
                :label=label
                :disabled=disabled
            />
            <h-checkbox 
                v-else
                :type="type"
                :options="groupedOptions" 
            />
        </div>
    `
  }
}

export const Main = Template.bind({})
Main.args = { type: 'basic', label: 'Basic checkbox', groupedOptions }
