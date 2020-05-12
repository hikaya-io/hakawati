import BasicDialog from '../components/dialog/BasicDialog.vue'
import FormDialog from '../components/dialog/FormDialog.vue'
import BasicButton from '../components/button/BasicButton.vue'
import { action } from '@storybook/addon-actions'

// This is required for each story
export default {
  title: 'Dialog'
}

export const basicDialog = () => ({
  components: {
    BasicDialog,
    BasicButton
  },
  data () {
    return {
      visibility: false
    }
  },
  methods: {
    confirm () {
      console.log('confirmed')
    },
    toggleVisibility () {
      this.visibility = !this.visibility
      console.log(this.visibility)
    }
  },
  template: `
  <div>
    <basic-button @click="toggleVisibility" size="medium" class="plain-button" type="primary">Open Dialog</basic-button>

    <basic-dialog
      @dialogConfirmed="confirm"
      @dialogClosed="toggleVisibility"
      :dialogVisible="visibility"
      title="Hikaya"
      message="Do you like open source?"
      type="primary"
      class="body-reg"
    >
    </basic-dialog>
  </div>
  `
})

export const formDialog = () => ({
  components: {
    FormDialog
  },
  template: `
  <form-dialog
    @dialogFormSubmitted="action"
    title="Question"
    message="How old are you?"
    type="primary"
    openDialogText="Click to see the question."
    class="body-reg"
  >
  </form-dialog>
    `,
  methods: {
    action: action('dialogFormSubmitted')
  }
})
