import HSelect from '../components/select/HSelect.vue'

const basicOptions = [
  { label: 'Option 1', value: 'option_1' },
  { label: 'Option 2', value: 'option_2', disabled: true },
  { label: 'Option 3', value: 'option_3' },
  { label: 'Option 4', value: 'option_4' },
  { label: 'Option 5', value: 'option_5' }
]

const extraOptions = [
  {
    label: 'Option 1 with very long label text data',
    value: 'option_1',
    extra_data: 'option 1'
  },
  {
    label: 'Option 2 with another very long label text data',
    value: 'option_2',
    extra_data: 'option 2'
  },
  { label: 'Option 3', value: 'option_3', extra_data: 'option 3' }
]

const groupOptions = [
  {
    label: 'Warm',
    options: [
      { label: 'Red', value: 'red' },
      { label: 'Yellow', value: 'yellow' },
      { label: 'Orange', value: 'orange' }
    ]
  },
  {
    label: 'Cool',
    options: [
      { label: 'Blue', value: 'blue' },
      { label: 'Violet', value: 'violet' },
      { label: 'Teal', value: 'teal' }
    ]
  }
]

export default {
  component: HSelect,
  title: '1.0/Select',
  argTypes: {
    sampleOptionsType: {
      control: 'radio',
      options: ['basicOptions', 'extraOptions', 'groupOptions']
    },
    values: { table: { disable: true } },
    options: { table: { disable: true } }
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { HSelect },
    props: Object.keys(argTypes),
    methods: {
      onChange (event) {
        console.log(event)
      }
    },
    template:
      '<h-select v-bind="$props" @change="onChange" :options="sampleOptions[sampleOptionsType]"/>'
  }
}

export const Main = Template.bind({})
Main.args = { sampleOptions: { basicOptions, extraOptions, groupOptions } }
