import HColorPicker from '../components/colorPicker/HColorPicker.vue'

// This is required for each story
export default { title: 'ColorPicker' }

// Customize components here
const predefinedColors = [
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

export const hColorPicker = () => ({
  components: { HColorPicker },
  data () {
    return {
      color: '#855CFF',
      predefinedColors
    }
  },
  template: `
    <div>
    <h-color-picker
      v-model="color"
      :predefine="predefinedColors"
    ></h-color-picker>
    </div>
  `
})