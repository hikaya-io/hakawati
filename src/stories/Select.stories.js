import BasicSelect from '../components/select/BasicSelect.vue'
import MultiSelect from '../components/select/MultiSelect.vue'
import GroupedSelect from '../components/select/GroupedSelect.vue'

import { withKnobs, text, boolean } from '@storybook/addon-knobs'

// This is required for each story
export default {
  title: 'Select',
  decorators: [withKnobs]
}

const options = [
  {
    label: 'Option 1',
    value: 'option_1'
  },
  {
    label: 'Option 2',
    value: 'option_2',
    disabled: true
  },
  {
    label: 'Option 3',
    value: 'option_3'
  },
  {
    label: 'Option 4',
    value: 'option_4'
  },
  {
    label: 'Option 5',
    value: 'option_5'
  }
]

const groupOptions = [
  {
    label: 'Warm',
    options: [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Yellow',
        value: 'yellow'
      },
      {
        label: 'Orange',
        value: 'orange'
      }
    ]
  },
  {
    label: 'Cool',
    options: [
      {
        label: 'Blue',
        value: 'blue'
      },
      {
        label: 'Violet',
        value: 'violet'
      },
      {
        label: 'Teal',
        value: 'teal'
      }
    ]
  }
]

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicSelect = () => ({
  components: { BasicSelect },
  props: {

    disabled: {
      default: boolean('Disabled', false)
    },
    placeholder: {
      default: text('Placeholder', 'Select an option below')
    }
  },
  methods: {
    onChange (selectedValue) { console.log(selectedValue) }
  },
  data () {
    return {
      options
    }
  },
  template: `
    <div>
      <basic-select
        :options="options"
        :placeholder="placeholder"
        :disabled="disabled"
        @change="onChange"
      />
    </div>  
  `
})

export const multiSelect = () => ({
  components: { MultiSelect },
  props: {

    disabled: {
      default: boolean('Disabled', false)
    },
    placeholder: {
      default: text('Placeholder', 'Select an option below')
    },
    collapseTags: {
      default: boolean('Collapse Tags', false)
    }
  },
  methods: {
    onChange (selectedValue) { console.log(selectedValue) }
  },
  data () {
    return {
      options
    }
  },
  template: `
      <div>
        <multi-select
          :options="options"
          :collapse-tags="collapseTags"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="onChange"
        />
      </div>  
    `
})

export const groupedSelect = () => ({
  components: { GroupedSelect },
  props: {

    disabled: {
      default: boolean('Disabled', false)
    },
    placeholder: {
      default: text('Placeholder', 'Select a color')
    }
  },
  methods: {
    onChange (selectedValue) { console.log(selectedValue) }
  },
  data () {
    return {
      options: groupOptions
    }
  },
  template: `
      <div>
        <grouped-select 
          :options="options" 
          :placeholder="placeholder" 
          :disabled="disabled" 
          @change="onChange"
        />
      </div>  
    `
})
