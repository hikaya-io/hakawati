import HInput from '../components/input/HInput.vue'
import DisabledInput from '../components/input/DisabledInput.vue'
import ClearInput from '../components/input/ClearInput.vue'
import InputPasswordBox from '../components/input/PasswordBox.vue'
import InputTextArea from '../components/input/TextArea.vue'
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
  components: { HForm, InputPasswordBox },
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
      />
    </h-form>
  `
})

export const textArea = () => ({
  components: { HForm, InputTextArea },
  data () {
    return {
      form: {
        textArea: ''
      }
    }
  },
  template: `
    <h-form
      ref="form"
      :model="form"
    >
      <text-area
        v-model="form.textArea"
        placeholder="Text area input here"
      />
    </h-form>
  `
})

export const inputLength = () => ({
  components: { HForm, InputLength },
  data () {
    return {
      form: {
        textArea: ''
      }
    }
  },
  template: `
    <h-form
      ref="form"
      :model="form"
    >
      <input-length
        v-model="form.textArea"
        maxlength="100"
        placeholder="Text area input with limit"
        show-word-limit
      />
    </h-form>
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
