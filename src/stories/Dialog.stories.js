import HDialog from '../components/dialog/HDialog.vue'

import HButton from '../components/button/HButton.vue'
// This is required for each story
export default {
  title: 'Dialog'
}

export const hDialog = () => ({
  components: { HDialog, HButton },
  data () {
    return {
      visibility: false
    }
  },
  methods: {
    confirm () {
      console.log('Confirmed')
    },
    cancel () {
      console.log('Cancel')
    },
    toggleVisibility () {
      this.visibility = !this.visibility
    }
  },
  template: `
  <div>
    <h-button
      @click="toggleVisibility"
      size="medium"
      type="primary"
    >
    Open Dialog
    </h-button>
    <h-dialog
      @dialogConfirmed="confirm"
      @dialogCancelled="cancel"
      @dialogClosed="toggleVisibility"
      :dialogVisible="visibility"
      confirmLabel="Confirm"
      width="40%"
      title="Hikaya"
      type="primary"
      class="body-reg"
    >
    Welcome
    </h-dialog>
  </div>
    `
})
