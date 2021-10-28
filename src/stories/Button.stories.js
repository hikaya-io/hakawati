import HButton from '../components/button/HButton.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Button' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hButton = () => ({
  components: { HButton },
  template: `
  <div>
  <h-button
    @click="action"
    size="medium"
    dark-text
    class="cancel-button"
    round
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="primary"
    round
  >
  Save
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="success"
    round
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    round
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    round
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    round
  >
  Danger
  </h-button>
  </div>
  `,
  methods: { action: action('click') }
})
export const disabledButton = () => ({
  components: { HButton },
  template: `
  <div>
  <h-button
    @click="action"
    size="medium"
    dark-text
    disabled
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="primary"
    disabled
  >
  Save
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="success"
    disabled
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    disabled
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    disabled
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    disabled
  >
  Danger
  </h-button>
  </div>
  `,
  methods: { action: action('click') }
})
export const plainButton = () => ({
  components: { HButton },
  template: `
  <div>
  <h-button
    @click="action"
    size="medium"
    class="cancel-button"
    dark-text
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="primary"
    plain
  >
  Save
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="success"
    plain
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    plain
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    plain
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    plain
  >
  Danger
  </h-button>
  </div>
  `,
  methods: { action: action('click') }
})
export const circleButton = () => ({
  components: { HButton },
  template: `
  <div>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-bell"
    dark-text
    circle
  >
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-user-solid"
    type="primary"
    circle
  >
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-check"
    type="success"
    circle
  >
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-s-tools"
    type="info"
    circle
  >
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-present"
    type="warning"
    circle
  >
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-delete"
    type="danger"
    circle
  >
  </h-button>
  </div>
  `,
  methods: { action: action('click') }
})
export const textButton = () => ({
  components: { HButton },
  template: `
  <div>
  <h-button
    @click="action"
    size="medium"
    type="text"
    class="text-style"
    icon="el-icon-guide"
  >
  Text button
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="text"
    disabled
    class="text-style"
  >
  Text button
  </h-button>
  </div>
  `,
  methods: { action: action('click') }
})
export const workspaceButton = () => ({
  components: { HButton },
  template: `
  <div>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-plus"
    workspace-button
  >
  Add Workspace
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-s-tools"
    workspace-button
  >
  Workspace Settings
  </h-button>
  </div>
  `,
  methods: { action: action('click') }
})
