import HButton from '../components/button/HButton.vue'

// This is required for each story
export default { title: 'Message' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hMessage = () => ({
  components: { HButton },
  template: `
    <div>
      <h-button 
        @click="successMessage"
        dark-text
        plain
        style="margin-top: 100px;"
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
      <h-button
        @click="warningMessage"
        dark-text
        plain
      >
        warning message
      </h-button>
      <h-button
        @click="infoMessage"
        dark-text
        plain
      >
        info message
      </h-button>
      <h-button 
        @click="iconMessage"
        dark-text
        plain
    >
      success message with icon
    </h-button>
    </div>
  `,
  methods: {
    successMessage () {
      this.$message({
        showClose: true,
        message: 'This is a success message that automatically closes',
        type: '', // To remove icon, leave type blank.
        center: true,
        customClass: 'message-success'
      })
    },

    errorMessage () {
      this.$message({
        showClose: true,
        message: 'This is an error message that does not automatically close',
        type: '',
        center: true,
        duration: 0, // set duration to 0 to not automatically close
        customClass: 'message-error'
      })
    },

    warningMessage () {
      this.$message({
        showClose: true,
        message: 'This is a warning message.',
        type: '',
        center: true,
        customClass: 'message-warning'
      })
    },

    infoMessage () {
      this.$message({
        showClose: true,
        message: 'This is an info message',
        type: '',
        center: true,
        customClass: 'message-info'
      })
    },

    iconMessage () {
      this.$message({
        showClose: true,
        message: 'This is a success message with icon',
        type: 'success', // To use a default icon, add the type. For custom icon, use `iconClass`.
        center: true,
        customClass: 'message-success'
      })
    },

    warningMessage () {
      this.$message({
        showClose: true,
        message: 'This is a warning message.',
        type: '',
        center: true,
        customClass: 'message-warning'
      })
    },

    infoMessage () {
      this.$message({
        showClose: true,
        message: 'This is an info message',
        type: '',
        center: true,
        customClass: 'message-info'
      })
    },

    iconMessage () {
      this.$message({
        showClose: true,
        message: 'This is a success message with icon',
        type: 'success', // To use a default icon, add the type. For custom icon, use `iconClass`.
        center: true,
        customClass: 'message-success'
      })
    }
  }
})
