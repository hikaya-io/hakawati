import HDialog from '../components/dialog/HDialog.vue'

// This is required for each story
export default {
  title: 'Dialog'
}

export const hDialog = () => ({
  components: { HDialog },
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
    <el-button
      @click="toggleVisibility"
      size="medium"
      type="primary"
    >
    Open Dialog
    </el-button>
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
