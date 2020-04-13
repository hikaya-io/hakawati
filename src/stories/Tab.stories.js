import BasicTab from '../components/tab/BasicTab.vue'
import CardTab from '../components/tab/CardTab.vue'
import VerticalTab from '../components/tab/VerticalTab.vue'
import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Tab' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicTab = () => ({
  components: { BasicTab },
  template: `
  <div>
  <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
  <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
  <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
  <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
  </div>  
  `,
  methods: { action: action('click') }
})

export const cardTab = () => ({
  components: { CardTab },
  template: `
    <div>
    <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
    <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
    <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
    <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
    </div>  
    `,
  methods: { action: action('click') }
})

export const verticalTab = () => ({
  components: { VerticalTab },
  template: `
    <div>
    <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
    <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
    <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
    <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
    </div>  
    `,
  methods: { action: action('click') }
})
