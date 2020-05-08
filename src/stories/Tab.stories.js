import BasicTab from '../components/tab/BasicTab.vue'
import CardTab from '../components/tab/CardTab.vue'
import VerticalTab from '../components/tab/VerticalTab.vue'
import WorkspaceTab from '../components/tab/WorkspaceTab.vue'
import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Tab' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicTab = () => ({
  components: { BasicTab },
  template: `
  <div>
  <basic-tab>
  <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
  <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
  <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
  <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
  </basic-tab>
  </div>  
  `,
  methods: { action: action('click') }
})

export const cardTab = () => ({
  components: { CardTab },
  template: `
    <div>
    <card-tab>
    <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
    <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
    <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
    <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
    </card-tab>
    </div>  
    `,
  methods: { action: action('click') }
})

export const verticalTab = () => ({
  components: { VerticalTab },
  template: `
    <div>
    <vertical-tab>
    <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
    <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
    <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
    <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
    </vertical-tab>
    </div>  
    `,
  methods: { action: action('click') }
})

export const workspaceTab = () => ({
  components: { WorkspaceTab },
  template: `
    <workspace-tab activeName="first" tabPosition="left">
    <div slot="title">
    <span class="body-2-bold">Workspace Settings</span>
    <p class="footer">Workspace 1</p>
    </div>
    <el-tab-pane label="Details" name="first">Details</el-tab-pane>
    <el-tab-pane label="People" name="second">People</el-tab-pane>
    <el-tab-pane label="Configurations" name="third">Configurations</el-tab-pane>
    <el-tab-pane label="Settings" name="fourth">Settings</el-tab-pane>
    </workspace-tab> 
    `,
  methods: { action: action('click') }
})
