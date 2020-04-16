import BasicButton from '../components/button/BasicButton.vue'
import DisabledButton from '../components/button/DisabledButton.vue'
import PlainButton from '../components/button/PlainButton.vue'
import RoundButton from '../components/button/RoundButton.vue'
import CircleButton from '../components/button/CircleButton.vue'
import TextButton from '../components/button/TextButton.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Button' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicButton = () => ({
  components: { BasicButton },
  template: `
  <div>
  <basic-button @click="action" size="small">Default</basic-button>
  <basic-button @click="action" size="small" type="primary">Primary</basic-button>
  <basic-button @click="action" size="small" type="success">Success</basic-button>
  <basic-button @click="action" size="small" type="info">Info</basic-button>
  <basic-button @click="action" size="small" type="warning">Warning</basic-button>
  <basic-button @click="action" size="small" type="danger">Danger</basic-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const disabledButton = () => ({
  components: { DisabledButton },
  template: `
  <div>
  <disabled-button @click="action" size="small">Default</disabled-button>
  <disabled-button @click="action" size="small" type="primary">Primary</disabled-button>
  <disabled-button @click="action" size="small" type="success">Success</disabled-button>
  <disabled-button @click="action" size="small" type="info">Info</disabled-button>
  <disabled-button @click="action" size="small" type="warning">Warning</disabled-button>
  <disabled-button @click="action" size="small" type="danger">Danger</disabled-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const plainButton = () => ({
  components: { PlainButton },
  template: `
  <div>
  <plain-button @click="action" size="small">Default</plain-button>
  <plain-button @click="action" size="small" type="primary">Primary</plain-button>
  <plain-button @click="action" size="small" type="success">Success</plain-button>
  <plain-button @click="action" size="small" type="info">Info</plain-button>
  <plain-button @click="action" size="small" type="warning">Warning</plain-button>
  <plain-button @click="action" size="small" type="danger">Danger</plain-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const roundButton = () => ({
  components: { RoundButton },
  template: `
  <div>
  <round-button @click="action" size="small">Default</round-button>
  <round-button @click="action" size="small" type="primary">Primary</round-button>
  <round-button @click="action" size="small" type="success">Success</round-button>
  <round-button @click="action" size="small" type="info">Info</round-button>
  <round-button @click="action" size="small" type="warning">Warning</round-button>
  <round-button @click="action" size="small" type="danger">Danger</round-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const circleButton = () => ({
  components: { CircleButton },
  template: `
  <div>
  <circle-button @click="action" size="small" icon="el-icon-search"></circle-button>
  <circle-button @click="action" size="small" icon="el-icon-edit" type="primary"></circle-button>
  <circle-button @click="action" size="small" icon="el-icon-check" type="success"></circle-button>
  <circle-button @click="action" size="small" icon="el-icon-message" type="info"></circle-button>
  <circle-button @click="action" size="small" icon="el-icon-star-off" type="warning"></circle-button>
  <circle-button @click="action" size="small" icon="el-icon-delete" type="danger"></circle-button>
  </div>  
  `,
  methods: { action: action('click') }
})

export const textButton = () => ({
  components: { TextButton },
  template: `
  <div>
  <text-button @click="action" size="small" type="text">Text button</text-button>
  <text-button @click="action" size="small" type="text" disabled>Text button</text-button>
  </div>
  `,
  methods: { action: action('click') }
})
