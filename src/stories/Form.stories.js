import HkForm from '../components/form/Form.vue'
import LabelInput from '../components/input/LabelInput.vue'

// This is required for each story
export default { title: 'Form' }

export const BasicForm = () => ({
  components: { HkForm, LabelInput },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <div>
      <hk-form :model="form">
        <label-input placeholder="Input here" label="Label Input"/>
      </hk-form>
      <hk-form
        labelPosition="top"
        labelWidth="100px"
        :model="form"
        :disabled="true"
      >
        <label-input placeholder="Input here" label="Disabled Input" disabled />
      </hk-form>
    </div>
  `
})
