import HButton from '../components/button/HButton.vue'

// This is required for each story
export default { title: 'Message' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hMessage = () => ({
  components: { HButton },
  template: `
    <div>
      <h-button 
        @click.native="successMessage"
        type="success"
        label="success message"
      />
      <h-button
        @click.native="errorMessage"
        type="danger"
        label="error message"
      />
      <h-button
        @click.native="warningMessage"
        type="warning"
        label="warning message"
      />
      <h-button
        @click.native="infoMessage"
        type="info"
        label="info message"
      />
      <h-button 
        @click.native="iconMessage"
        type="success"
        label="success message with icon"
      />
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
    }
  }
})
