import BasicInput from '../components/input/BasicInput.vue'
import DisabledInput from '../components/input/DisabledInput.vue'
import ClearInput from '../components/input/ClearInput.vue'
import PasswordBox from '../components/input/PasswordBox.vue'
import TextArea from '../components/input/TextArea.vue'
import InputLength from '../components/input/InputLength.vue'

// This is required for each story
export default { title: 'Input' }

// Customize components here
export const basicInput = () => ({
  components: { BasicInput },
  template: `
    <div>
      <basic-input type="text"></basic-input>
    </div>
  `
})

export const disabledInput = () => ({
  components: { DisabledInput },
  template: `
    <div>
      <disabled-input type="text" disabled></disabled-input>
    </div>
  `
})

export const clearInput = () => ({
  components: { ClearInput },
  template: `
    <div>
      <clear-input type="text" clearable></clear-input>
    </div>
  `
})

export const passwordBox = () => ({
  components: { PasswordBox },
  template: `
    <div>
      <password-box type="text" show-password></password-box>
    </div>
  `
})

export const textArea = () => ({
  components: { TextArea },
  template: `
    <div>
      <text-area type="textarea"></text-area>
    </div>
  `
})

export const inputLength = () => ({
  components: { InputLength },
  template: `
    <div>
    <input-length type="textarea" maxlength="100" show-word-limit></input-length>
    </div>
  `
})
