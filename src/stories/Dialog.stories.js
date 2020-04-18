import BasicDialog from '../components/dialog/BasicDialog.vue'
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
