import HButton from '../components/button/HButton.vue'
import DisabledButton from '../components/button/DisabledButton.vue'
import PlainButton from '../components/button/PlainButton.vue'
import CircleButton from '../components/button/CircleButton.vue'
import TextButton from '../components/button/TextButton.vue'
import WorkspaceButton from '../components/button/WorkspaceButton.vue'

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
    class="body-bold cancel-button"
  >
  Cancel
  </h-button>
  <h-button
    @click="action"
    size="medium"
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
  >
  Success
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="info"
    class="body-bold button-style"
  >
  Info
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="warning"
    class="body-bold button-style"
  >
  Warning
  </h-button>
  <h-button
    @click="action"
    size="medium"
    type="danger"
    class="body-bold button-style"
  >
  Danger
  </h-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const disabledButton = () => ({
  components: { DisabledButton },
  template: `
  <div>
  <disabled-button
    @click="action"
    size="medium"
    class="body-bold cancel-button"
  >
  Cancel
  </disabled-button>
  <disabled-button
    @click="action"
    size="medium"
    type="primary"
    class="body-bold button-style"
  >
  Save
  </disabled-button>
  <disabled-button
    @click="action"
    size="medium"
    type="success"
    class="body-bold button-style"
  >
  Success
  </disabled-button>
  <disabled-button
    @click="action"
    size="medium"
    type="info"
    class="body-bold button-style"
  >
  Info
  </disabled-button>
  <disabled-button
    @click="action"
    size="medium"
    type="warning"
    class="body-bold button-style"
  >
  Warning
  </disabled-button>
  <disabled-button
    @click="action"
    size="medium"
    type="danger"
    class="body-bold button-style"
  >
  Danger
  </disabled-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const plainButton = () => ({
  components: { PlainButton },
  template: `
  <div>
  <plain-button
    @click="action"
    size="medium"
    class="plain-style cancel-button"
  >
  Cancel
  </plain-button>
  <plain-button
    @click="action"
    size="medium"
    type="primary"
    class="plain-style"
  >
  Save
  </plain-button>
  <plain-button
    @click="action"
    size="medium"
    type="success"
    class="plain-style"
  >
  Success
  </plain-button>
  <plain-button
    @click="action"
    size="medium"
    class="plain-style"
    type="info"
  >
  Info
  </plain-button>
  <plain-button
    @click="action"
    size="medium"
    class="plain-style"
    type="warning"
  >
  Warning
  </plain-button>
  <plain-button
    @click="action"
    size="medium"
    class="plain-style"
    type="danger"
  >
  Danger
  </plain-button>
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
    size="medium"
    icon="el-icon-bell"
  >
  </circle-button>
  <circle-button
    @click="action"
    size="medium"
    icon="el-icon-user-solid"
    type="primary"
  >
  </circle-button>
  <circle-button
    @click="action"
    size="medium"
    icon="el-icon-check"
    type="success"
  >
  </circle-button>
  <circle-button
    @click="action"
    size="medium"
    icon="el-icon-s-tools"
    type="info"
  >
  </circle-button>
  <circle-button
    @click="action"
    size="medium"
    icon="el-icon-present"
    type="warning"
  >
  </circle-button>
  <circle-button
    @click="action"
    size="medium"
    icon="el-icon-delete"
    type="danger"
  >
  </circle-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const textButton = () => ({
  components: { TextButton },
  template: `
  <div>
  <text-button
    @click="action"
    size="medium"
    type="text"
    class="ws-button body-bold"
  >
  Text button
  </text-button>
  <text-button
    @click="action"
    size="medium"
    type="text"
    class="ws-button body-bold"
    disabled
  >
  Text button
  </text-button>
  </div>
  `,
  methods: { action: action('click') }
})

export const workspaceButton = () => ({
  components: { WorkspaceButton },
  template: `
  <div>
  <workspace-button
    @click="action"
    size="medium"
    icon="el-icon-circle-plus-outline"
    class="ws-button body-bold"
  >
  Add Workspace
  </workspace-button>
  <workspace-button
    @click="action"
    size="medium"
    icon="el-icon-s-tools"
    class="ws-button body-bold"
  >
  Workspace Settings
  </workspace-button>
  </div>  
  `,
  methods: { action: action('click') }
})
