import HButton from '../components/button/HButton.vue'
import CircleButton from '../components/button/CircleButton.vue'

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
    class="body-bold cancel-button"
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    type="primary"
    class="body-bold button-style"
  >
  Save
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="success"
    class="body-bold button-style"
    round
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    class="body-bold button-style"
    round
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    class="body-bold button-style"
    round
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    class="body-bold button-style"
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
    class="body-bold cancel-button"
    disabled
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="primary"
    class="body-bold button-style"
    disabled
  >
  Save
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="success"
    class="body-bold button-style"
    disabled
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    class="body-bold button-style"
    disabled
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    class="body-bold button-style"
    disabled
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    class="body-bold button-style"
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
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="primary"
    class="button-style"
    plain
  >
  Save
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="success"
    class="button-style"
    plain
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    class="button-style"
    plain
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    class="button-style"
    plain
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    class="button-style"
    plain
  >
  Danger
  </h-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const circleButton = () => ({
  components: { CircleButton },
  template: `
  <div>
  <circle-button
    @click="action"
    icon="el-icon-bell"
    circle
  >
  </circle-button>
  <circle-button
    @click="action"
    icon="el-icon-user-solid"
    type="primary"
    circle
  >
  </circle-button>
  <circle-button
    @click="action"
    icon="el-icon-check"
    type="success"
    circle
  >
  </circle-button>
  <circle-button
    @click="action"
    icon="el-icon-s-tools"
    type="info"
    circle
  >
  </circle-button>
  <circle-button
    @click="action"
    icon="el-icon-present"
    type="warning"
    circle
  >
  </circle-button>
  <circle-button
    @click="action"
    icon="el-icon-delete"
    type="danger"
    circle
  >
  </circle-button>
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
    class="ws-button body-bold"
    round
  >
  Text button
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="text"
    class="ws-button body-bold"
    round
    disabled
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
    icon="el-icon-circle-plus-outline"
    class="ws-button body-bold"
  >
  Add Workspace
  </h-button>
  <h-button
    @click="action"
    size="medium"
    icon="el-icon-s-tools"
    class="ws-button body-bold"
  >
  Workspace Settings
  </h-button>
  </div>  
  `,
  methods: { action: action('click') }
})
