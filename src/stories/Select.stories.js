import HSelect from '../components/select/HSelect.vue'
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
  {
    label: 'Option 3',
    value: 'option_3',
    extra_data: 'option 3'
  },

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
export const hSelect = () => ({
  components: { HSelect },
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
      options,
      selectedOption: 'option_4'
    }
  },
  mounted () {
    for (const option of this.options) {
      this.$set(option, 'extraAttrs', { 'data-cy': option.value })
    }
  },
  template: `
    <div>
    <p>Blank:</p>
      <h-select
        v-model="selectedOption"
        :options="options"
        :placeholder="placeholder"
        :disabled="disabled"
        @change="onChange"
      />
      <br>
      <p>Selected:</p>
      <h-select
        v-model="selectedOption"
        :options="options"
        :placeholder="placeholder"
        :disabled="disabled"
        @change="onChange"
      />
    </div>
  `
})

export const customSelect = () => ({
  components: { HSelect },
  props: {
    placeholder: {
      default: text('Placeholder', 'Select an option below')
    },
    disabled: {
      default: boolean('Disabled', false)
    },
  },
  methods: {
    onChange (selectedValue) { console.log(selectedValue) }
  },
  data () {
    return {
      options: extraOptions,
      selectedOption: null
    }
  },
  mounted () {
    for (const option of this.options) {
      this.$set(option, 'extraAttrs', { 'data-cy': option.value })
    }
  },
  template: `
    <div>
      <h-select
        v-model="selectedOption"
        :options="options"
        :placeholder="placeholder"
        :disabled="disabled"
        @change="onChange"
      />
    </div>
  `
})

export const multiSelect = () => ({
  components: { HSelect },
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
      options,
      selectedOption: null
    }
  },
  mounted () {
    for (const option of this.options) {
      this.$set(option, 'extraAttrs', { 'data-cy': option.value })
    }
  },
  template: `
      <div>
        <h-select
          v-model="selectedOption"
          :options="options"
          :collapse-tags="collapseTags"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="onChange"
          multiple
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
