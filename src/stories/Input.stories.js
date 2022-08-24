import HInput from '../components/input/HInput.vue'

// This is required for each story
export default {
  component: HInput,
  title: '1.0/Input',
  argTypes: {
    type: {
      options: ['text', 'textarea', 'date', 'file'],
      control: { type: 'select' }
    },
    size: {
      options: ['medium', 'small', 'mini'],
      control: { type: 'select' }
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    showPassword: { control: 'boolean' },
    rows: { control: 'number'},
    suffixIcon: {
      options: ['el-icon-date', 'el-icon-edit', 'el-icon-delete'],
      control: { type: 'select' }
    },
    prefixIcon: {
      options: ['el-icon-search'],
      control: { type: 'select' }
    },
    maxlength: { control: 'number' },
    showWordLimit: { control: 'boolean' }
  }
}

const Template = (args, { argTypes }) => ({
  components: { HInput },
  props: Object.keys(argTypes),
  template: `
  <div>
    <p>Input label</p>
    <h-input v-bind="$props"><template slot="prepend">Http://</template></h-input>
  </div>
  `
})

export const Main = Template.bind({})
Main.args = { }
