import MyButton from '../components/MyButton.vue'

// This is required for each story
export default { title: 'Button' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const withText = () => ({
  components: { MyButton },
  template: '<my-button>with text</my-button>'
})
