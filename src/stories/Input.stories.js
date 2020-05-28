import HInput from '../components/input/HInput.vue'

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
        disabled
      />
    </h-form>
  `
})

export const clearInput = () => ({
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
        clearable
      />
    </h-form>
  `
})

export const inputPasswordBox = () => ({
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
        placeholder="Enter password"
        show-password
      />
    </h-form>
  `
})

export const inputTextArea = () => ({
  components: { HForm, HInput },
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
      <h-input
        v-model="form.textArea"
        placeholder="Text area with 4 rows"
        type="textarea"
        rows="4"
      />
    </h-form>
  `
})

export const inputLength = () => ({
  components: { HForm, HInput },
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
      <h-input
        v-model="form.textArea"
        maxlength="250"
        placeholder="Text area input with limit with 4 rows"
        type="textarea"
        rows="4"
        show-word-limit
      />
    </h-form>
  `
})

export const hLabelInput = () => ({
  components: { HForm, HInput },
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
        <h-input
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
        <h-input
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
        <h-input
          placeholder="Input here"
          label="Disabled Input"
          v-model="form.input"
          disabled
        />
      </h-form>
    </div>
  `
})
