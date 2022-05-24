import HDialog from '../components/dialog/HDialog.vue'

import HButton from '../components/button/HButton.vue'
import HForm from '../components/form/HForm.vue'
// This is required for each story
export default {
  title: 'Dialog'
}

export const hDialog = () => ({
  components: { HDialog, HButton, HForm },
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
      label="Open Dialog"
      @click.native="toggleVisibility"
    />
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

export const hDialogWithForm = () => ({
  components: { HDialog, HButton, HForm },
  data () {
    return {
      visibility: false,
      formData: {
        input: ''
      },
      confirmButtonDisabled: true
    }
  },
  watch: {
    formData: {
      deep: true,
      handler (val) {
        this.confirmButtonDisabled = !val.input
      }
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
      label="Open Dialog"
      @click.native="toggleVisibility"
    />
    <h-dialog
      @dialogConfirmed="confirm"
      @dialogCancelled="cancel"
      @dialogClosed="toggleVisibility"
      :dialogVisible="visibility"
      :confirmButtonDisabled="confirmButtonDisabled"
      confirmLabel="Confirm"
      width="40%"
      title="Hikaya"
      type="primary"
      class="body-reg"
    >
      <h-form :model="formData" >
        <el-form-item>
          <el-input
            placeholder="Sample Input"
            v-model="formData.input"
          />
        </el-form-item>
      </h-form>
    </h-dialog>
  </div>
    `
})
