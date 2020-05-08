import BasicInput from '../components/input/BasicInput.vue'
import DisabledInput from '../components/input/DisabledInput.vue'
import ClearInput from '../components/input/ClearInput.vue'
import PasswordBox from '../components/input/PasswordBox.vue'
import TextArea from '../components/input/TextArea.vue'
import InputLength from '../components/input/InputLength.vue'
import LabelInput from '../components/input/LabelInput.vue'

import BasicForm from '../components/form/BasicForm.vue'

// This is required for each story
export default { title: 'Input' }

// Customize components here
export const basicInput = () => ({
  components: { BasicInput },
  template: `
    <div>
      <basic-input 
        placeholder="Input here"
      >
      </basic-input>
    </div>
  `
})

export const disabledInput = () => ({
  components: { DisabledInput },
  template: `
    <div>
      <disabled-input
        placeholder="Input here"
        disabled
      >
      </disabled-input>
    </div>
  `
})

export const clearInput = () => ({
  components: { ClearInput },
  template: `
    <div>
      <clear-input 
        clearable
      >
      </clear-input>
    </div>
  `
})

export const passwordBox = () => ({
  components: { PasswordBox },
  template: `
    <div>
      <password-box
        placeholder="Enter password"
        show-password
      >
      </password-box>
    </div>
  `
})

export const textArea = () => ({
  components: { TextArea },
  template: `
    <div>
      <text-area
      placeholder="Text area input here"
      >
      </text-area>
    </div>
  `
})

export const inputLength = () => ({
  components: { InputLength },
  template: `
    <div>
    <input-length
      maxlength="100"
      placeholder="Text area input with limit"
      show-word-limit
    >
    </input-length>
    </div>
  `
})

export const labelInput = () => ({
  components: { BasicForm, LabelInput },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <div>
      <basic-form
        ref="form"
        :model="form"
        label-position="top"
        labelWidth="120px"
      >
        <label-input placeholder="Input here" label="Label Input" v-model="form.input" />
      </basic-form>

      <basic-form
        ref="form"
        :model="form"
        label-position="left"
        labelWidth="120px"
      >
        <label-input placeholder="Input here" label="Required Input" v-model="form.input" required />
      </basic-form>

      <basic-form
        ref="form"
        :model="form"
        label-position="left"
        labelWidth="120px"
      >
        <label-input placeholder="Input here" label="Disabled Input" v-model="form.input" disabled />
      </basic-form>
    </div>
  `
})
