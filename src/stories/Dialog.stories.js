import BasicDialog from '../components/dialog/BasicDialog.vue'
import FormDialog from '../components/dialog/FormDialog.vue'
import {
  action
} from '@storybook/addon-actions'

// This is required for each story
export default {
  title: 'Dialog'
}

export const basicDialog = () => ({
  components: {
    BasicDialog
  },
  template: `
  <basic-dialog @dialogConfirmed="action" title="Hikaya" message="Do you like open source?" type='success' openDialogText='Click to see the question.'>
  </basic-dialog>
    `,
  methods: {
    action: action('dialogConfirmed')
  }
})

export const formDialog = () => ({
  components: {
    FormDialog
  },
  template: `
  <form-dialog @dialogFormSubmitted="action" title="Question" message="How old are you?" type='success' openDialogText='Click to see the question.'>
  </form-dialog>
    `,
  methods: {
    action: action('dialogFormSubmitted')
  }
})