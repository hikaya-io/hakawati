import HDialog from '../components/dialog/BasicDialog.vue'
import HButton from '../components/button/HButton.vue'
import HForm from '../components/form/HForm.vue'
import HInput from '../components/input/HInput.vue'

// This is required for each story
export default {
  title: 'Dialog'
}

export const basicDialog = () => ({
  components: {
    HDialog,
    HButton
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
    <h-button
      @click="toggleVisibility"
      size="medium"
      class="plain-button"
      type="primary"
    >
    Open Dialog
    </h-button>
    <h-dialog
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
    </h-dialog>
  </div>
    `
})

export const formDialog = () => ({
  components: {
    HDialog,
    HButton,
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
    <h-button
      @click="toggleVisibility"
      size="medium"
      class="plain-button"
      type="primary"
    >
    Open Dialog with Form
    </h-button>
    <h-dialog
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
    </h-dialog>
  </div>
  `
})
