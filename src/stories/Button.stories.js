import BasicButton from '../components/button/BasicButton.vue'
import DisabledButton from '../components/button/DisabledButton.vue'
import PlainButton from '../components/button/PlainButton.vue'
import RoundButton from '../components/button/RoundButton.vue'
import CircleButton from '../components/button/CircleButton.vue'
import TextButton from '../components/button/TextButton.vue'

// This is required for each story
export default { title: 'Button' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicButton = () => ({
  components: { BasicButton },
  template: `
    <div>
      <basic-button>Default</basic-button>
      <basic-button type="primary">Primary</basic-button>
      <basic-button type="success">Success</basic-button>
      <basic-button type="info">Info</basic-button>
      <basic-button type="warning">Warning</basic-button>
      <basic-button type="danger">Danger</basic-button>
    </div>  
  `
})

export const disabledButton = () => ({
  components: { DisabledButton },
  template: `
  <div>
    <disabled-button>Default</disabled-button>
    <disabled-button type="primary">Primary</disabled-button>
    <disabled-button type="success">Success</disabled-button>
    <disabled-button type="info">Info</disabled-button>
    <disabled-button type="warning">Warning</disabled-button>
    <disabled-button type="danger">Danger</disabled-button>
  </div>  
`
})

export const plainButton = () => ({
  components: { PlainButton },
  template: `
  <div>
    <plain-button>Default</plain-button>
    <plain-button type="primary">Primary</plain-button>
    <plain-button type="success">Success</plain-button>
    <plain-button type="info">Info</plain-button>
    <plain-button type="warning">Warning</plain-button>
    <plain-button type="danger">Danger</plain-button>
  </div>  
`
})

export const roundButton = () => ({
  components: { RoundButton },
  template: `
  <div>
    <round-button>Default</round-button>
    <round-button type="primary">Primary</round-button>
    <round-button type="success">Success</round-button>
    <round-button type="info">Info</round-button>
    <round-button type="warning">Warning</round-button>
    <round-button type="danger">Danger</round-button>
  </div>  
`
})

export const circleButton = () => ({
  components: { CircleButton },
  template: `
    <div>
      <circle-button icon="el-icon-search"></circle-button>
      <circle-button icon="el-icon-edit" type="primary"></circle-button>
      <circle-button icon="el-icon-check" type="success"></circle-button>
      <circle-button icon="el-icon-message" type="info"></circle-button>
      <circle-button icon="el-icon-star-off" type="warning"></circle-button>
      <circle-button icon="el-icon-delete" type="danger"></circle-button>
    </div>  
  `
})

export const textButton = () => ({
  components: { TextButton },
  template: `
  <div>
    <text-button type="text"></text-button>
    <text-button type="text" disabled></text-button>
  </div>
`
})
