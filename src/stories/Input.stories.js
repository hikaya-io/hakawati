import HInput from '../components/input/HInput.vue'
import DisabledInput from '../components/input/DisabledInput.vue'
import ClearInput from '../components/input/ClearInput.vue'
import PasswordBox from '../components/input/PasswordBox.vue'
import TextArea from '../components/input/TextArea.vue'
import InputLength from '../components/input/InputLength.vue'
import HLabelInput from '../components/input/HLabelInput.vue'

import HForm from '../components/form/HForm.vue'

// This is required for each story
export default { title: 'Input' }

// Customize components here
export const hInput = () => ({
  components: { HForm, HInput },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <h-form
      ref="form"
      :model="form"
    >
      <h-input
        v-model="form.input"
        placeholder="Input here"
      />
    </h-form>
  `
})

export const disabledInput = () => ({
  components: { HForm, DisabledInput },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <h-form
      ref="form"
      :model="form"
    >
      <disabled-input
        v-model="form.input"
        placeholder="Input here"
        disabled
      />
    </h-form>
  `
})

export const clearInput = () => ({
  components: { HForm, ClearInput },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <h-form
      ref="form"
      :model="form"
    >
      <clear-input
        v-model="form.input"
        clearable
      />
    </h-form>
  `
})

export const passwordBox = () => ({
  components: { HForm, PasswordBox },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <h-form
      ref="form"
      :model="form"
    >
      <password-box
        v-model="form.input"
        placeholder="Enter password"
        show-password
      >
      </password-box>
    </h-form>
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

export const hLabelInput = () => ({
  components: { HForm, HLabelInput },
  data () {
    return {
      form: {
        input: ''
      }
    }
  },
  template: `
    <div>
      <h-form
        ref="form"
        :model="form"
        label-position="top"
        labelWidth="120px"
      >
        <h-label-input
          placeholder="Input here"
          label="Label Input"
          v-model="form.input"
        />
      </h-form>

      <h-form
        ref="form"
        :model="form"
        label-position="left"
        labelWidth="120px"
      >
        <h-label-input
          placeholder="Input here"
          label="Required Input"
          v-model="form.input"
          required
        />
      </h-form>

      <h-form
        ref="form"
        :model="form"
        label-position="left"
        labelWidth="120px"
      >
        <h-label-input
          placeholder="Input here"
          label="Disabled Input"
          v-model="form.input"
          disabled
        />
      </h-form>
    </div>
  `
})
