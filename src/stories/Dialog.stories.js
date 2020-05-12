import BasicDialog from '../components/dialog/BasicDialog.vue'
import BasicButton from '../components/button/BasicButton.vue'
import HForm from '../components/form/HForm.vue'
import HInput from '../components/input/HInput.vue'

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
      console.log('Confirmed')
    },
    toggleVisibility () {
      this.visibility = !this.visibility
    }
  },
  template: `
  <div>
    <basic-button @click="toggleVisibility" size="medium" class="plain-button" type="primary">Open Dialog</basic-button>
    <basic-dialog
      @dialogConfirmed="confirm"
      @dialogClosed="toggleVisibility"
      :dialogVisible="visibility"
      confirmLabel="Confirm"
      width="40%"
      title="Hikaya"
      type="primary"
      class="body-reg"
    >
    Welcome
    </basic-dialog>
  </div>
    `
})

export const formDialog = () => ({
  components: {
    BasicDialog,
    BasicButton,
    HForm,
    HInput
  },
  data () {
    return {
      visibility: false,
      form: {
        input: ''
      }
    }
  },
  methods: {
    confirm () {
      this.form.input = ''
    },
    toggleVisibility () {
      this.form.input = ''
      this.visibility = !this.visibility
    }
  },
  template: `
  <div>
    <basic-button @click="toggleVisibility" size="medium" class="plain-button" type="primary">Open Dialog with Form</basic-button>

    <basic-dialog
      @dialogConfirmed="confirm"
      @dialogClosed="toggleVisibility"
      :dialogVisible="visibility"
      confirmLabel="Confirm Form"
      width="40%"
      title="Hikaya"
      type="primary"
      class="body-reg"
    >
      <h-form
        ref="form"
        :model="form"
      >
        <h-input
          v-model="form.input"
          placeholder="Input here"
        />
      </h-form>
      {{ form.input }}
    </basic-dialog>
  </div>
  `
})
