import HMessage from '../components/message/HMessage.vue'
import HButton from '../components/button/HButton.vue'

// This is required for each story
export default { title: 'Message' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hMessage = () => ({
  components: { HMessage, HButton },
  template: `
      <div>
        <h-button 
            @click="successMessage"
            dark-text
            plain
        >
            success message
        </h-button>
        <h-button
            @click="errorMessage"
            dark-text
            plain
        >
            error message
        </h-button>
      </div>
    `,
  methods: {
    successMessage () {
      this.$message({
        showClose: true,
        message: 'This is a success message that automatically closes.',
        type: 'success'
      })
    },

    errorMessage () {
      this.$message({
        showClose: true,
        message: 'This is an error message that does not automatically close',
        type: 'error',
        duration: 0 // set duration to 0 to not automatically close
      })
    }
  }
})
