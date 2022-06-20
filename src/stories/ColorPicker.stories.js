import HColorPicker from '../components/colorPicker/HColorPicker.vue'

// This is required for each story
export default {
  component: HColorPicker,
  title: '1.0/Color Picker',
  args: {
    predefinedColors: [
      '#855CFF',
      '#1E90FF',
      '#33CCCC',
      '#00CC66',
      '#90EE90',
      '#F9C80E',
      '#ED6742',
      '#E6395E',
      '#C71585',
      '#CCCCCC'
    ]
  },
  argTypes: {
    color: {
      control: { type: 'color' }
    }
  }
}

// // Customize components here
// const predefinedColors = [
//   "#855CFF",
//   "#1E90FF",
//   "#33CCCC",
//   "#00CC66",
//   "#90EE90",
//   "#F9C80E",
//   "#ED6742",
//   "#E6395E",
//   "#C71585",
//   "#CCCCCC",
// ];

export const hColorPicker = (args, { argTypes }) => ({
  components: { HColorPicker },
  props: Object.keys(argTypes),
  template: `
    <div>
    <h-color-picker
      v-model="color"
      v-bind="$props"
    ></h-color-picker>
    </div>
  `
})

hColorPicker.args = { color: '#855CFF' }
hColorPicker.storyName = 'Main'
