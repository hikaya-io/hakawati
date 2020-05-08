import BasicButton from '../components/button/BasicButton.vue'
import DisabledButton from '../components/button/DisabledButton.vue'
import PlainButton from '../components/button/PlainButton.vue'
import RoundButton from '../components/button/RoundButton.vue'
import CircleButton from '../components/button/CircleButton.vue'
import TextButton from '../components/button/TextButton.vue'
import WorkspaceButton from '../components/button/WorkspaceButton.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Button' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicButton = () => ({
  components: { BasicButton },
  template: `
  <div>
  <basic-button @click="action" size="medium" class="body-2-reg cancel-button">Cancel</basic-button>
  <basic-button @click="action" size="medium" class="body-2-reg" type="primary">Save</basic-button>
  <basic-button @click="action" size="medium" class="body-2-reg" type="success">Success</basic-button>
  <basic-button @click="action" size="medium" class="body-2-reg" type="info">Info</basic-button>
  <basic-button @click="action" size="medium" class="body-2-reg" type="warning">Warning</basic-button>
  <basic-button @click="action" size="medium" class="body-2-reg" type="danger">Danger</basic-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const disabledButton = () => ({
  components: { DisabledButton },
  template: `
  <div>
  <disabled-button @click="action" size="medium" class="body-2-reg cancel-button">Cancel</disabled-button>
  <disabled-button @click="action" size="medium" class="body-2-reg" type="primary">Save</disabled-button>
  <disabled-button @click="action" size="medium" class="body-2-reg" type="success">Success</disabled-button>
  <disabled-button @click="action" size="medium" class="body-2-reg" type="info">Info</disabled-button>
  <disabled-button @click="action" size="medium" class="body-2-reg" type="warning">Warning</disabled-button>
  <disabled-button @click="action" size="medium" class="body-2-reg" type="danger">Danger</disabled-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const plainButton = () => ({
  components: { PlainButton },
  template: `
  <div>
  <plain-button @click="action" size="medium" class="plain-button cancel-button">Cancel</plain-button>
  <plain-button @click="action" size="medium" class="plain-button" type="primary">Save</plain-button>
  <plain-button @click="action" size="medium" class="plain-button" type="success">Success</plain-button>
  <plain-button @click="action" size="medium" class="plain-button" type="info">Info</plain-button>
  <plain-button @click="action" size="medium" class="plain-button" type="warning">Warning</plain-button>
  <plain-button @click="action" size="medium" class="plain-button" type="danger">Danger</plain-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const roundButton = () => ({
  components: { RoundButton },
  template: `
  <div>
  <round-button @click="action" size="medium" class="body-2-reg cancel-button">Cancel</round-button>
  <round-button @click="action" size="medium" class="body-2-reg" type="primary">Save</round-button>
  <round-button @click="action" size="medium" class="body-2-reg" type="success">Success</round-button>
  <round-button @click="action" size="medium" class="body-2-reg" type="info">Info</round-button>
  <round-button @click="action" size="medium" class="body-2-reg" type="warning">Warning</round-button>
  <round-button @click="action" size="medium" class="body-2-reg" type="danger">Danger</round-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const circleButton = () => ({
  components: { CircleButton },
  template: `
  <div>
  <circle-button @click="action" size="medium" icon="el-icon-bell"></circle-button>
  <circle-button @click="action" size="medium" icon="el-icon-user-solid" type="primary"></circle-button>
  <circle-button @click="action" size="medium" icon="el-icon-check" type="success"></circle-button>
  <circle-button @click="action" size="medium" icon="el-icon-s-tools" type="info"></circle-button>
  <circle-button @click="action" size="medium" icon="el-icon-present" type="warning"></circle-button>
  <circle-button @click="action" size="medium" icon="el-icon-delete" type="danger"></circle-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const textButton = () => ({
  components: { TextButton },
  template: `
  <div>
  <text-button @click="action" size="medium" class="plain-button" type="text">Text button</text-button>
  <text-button @click="action" size="medium" class="plain-button" type="text" disabled>Text button</text-button>
  </div>
  `,
  methods: { action: action('click') }
})

export const workspaceButton = () => ({
  components: { WorkspaceButton },
  template: `
  <div>
  <workspace-button @click="action" size="medium" icon="el-icon-circle-plus-outline" class="ws-button bold-body">Add Workspace</workspace-button>
  <workspace-button @click="action" size="medium" icon="el-icon-s-tools" class="ws-button bold-body">Workspace Settings</workspace-button>

  </div>  
  `,
  methods: { action: action('click') }
})
