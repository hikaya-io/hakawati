import BasicCheckbox from '../components/checkbox/BasicCheckbox.vue'
import DisabledCheckbox from '../components/checkbox/DisabledCheckbox.vue'
import CheckboxGroup from '../components/checkbox/CheckboxGroup.vue'
import ButtonCheckbox from '../components/checkbox/ButtonCheckbox.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Checkbox' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicCheckbox = () => ({
  components: { BasicCheckbox },
  template: `
  <div>
  <basic-checkbox @click="action">Default</basic-checkbox>
  </div>  
  `,
  methods: { action: action('click') }
})

export const disabledCheckbox = () => ({
  components: { DisabledCheckbox },
  template: `
    <div>
    <disabled-checkbox @click="action">Default</disabled-checkbox>
    </div>  
    `,
  methods: { action: action('click') }
})

export const checkboxGroup = () => ({
  components: { CheckboxGroup },
  data () {
    return {
      checkList: ['selected and disabled', 'Option A']
    }
  },
  template: `
    <div>
    <checkbox-group @click="action" v-model="checkList">
    <el-checkbox label="Option A"></el-checkbox>
    <el-checkbox label="Option B"></el-checkbox>
    <el-checkbox label="Option C"></el-checkbox>
    <el-checkbox label="Disabled" disabled></el-checkbox>
    <el-checkbox label="Selected and disabled" disabled></el-checkbox>
    </checkbox-group>
    </div>  
    `,
  methods: { action: action('click') }
})

export const buttonCheckbox = () => ({
  components: { ButtonCheckbox },
  data () {
    return {
      dataArray: ['Option A', 'Option B', 'Option C', 'Option D']
    }
  },
  template: `
      <div>
      <button-checkbox @click="action" size="medium" :dataArray='dataArray'>
      </button-checkbox>
      </div>
      `,
  methods: { action: action('click') }
})
