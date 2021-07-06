import HTab from '../components/tab/HTab.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Tab' }

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hTab = () => ({
  components: { HTab },
  template: `
    <h-tab
      v-model="active"
      tab-position="left"
    >
      <el-tab-pane label="Workspace Settings" disabled></el-tab-pane>
      <el-tab-pane label="Workspace 1" disabled></el-tab-pane>
      <el-tab-pane label="Details" name="first">Details</el-tab-pane>
      <el-tab-pane label="People" name="second">People</el-tab-pane>
      <el-tab-pane label="Configurations" name="third">Configurations</el-tab-pane>
      <el-tab-pane label="Settings" name="fourth">Settings</el-tab-pane>
    </h-tab>
    `,
  methods: { action: action('click') },
  data: function () {
    return {
      active: 'first'
    }
  }
})

export const basicTab = () => ({
  components: { HTab },
  template: `
  <div>
  <h-tab
    v-model="active"
    basic
  >
    <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
    <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
    <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
    <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
  </h-tab>
  </div>
  `,
  methods: { action: action('click') },
  data: function () {
    return {
      active: 'first'
    }
  }
})

export const cardTab = () => ({
  components: { HTab },
  template: `
    <div>
    <h-tab
      type="card"
      card-tab
    >
      <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
      <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
      <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
      <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
    </h-tab>
    </div>
    `,
  methods: { action: action('click') }
})

export const verticalTab = () => ({
  components: { HTab },
  template: `
    <div>
    <h-tab
      v-model="active"
      tab-position="left"
      vertical
    >
      <el-tab-pane label="Maps" name="first">Maps</el-tab-pane>
      <el-tab-pane label="Dashboards" name="second">Dashboards</el-tab-pane>
      <el-tab-pane label="Reports" name="third">Reports</el-tab-pane>
      <el-tab-pane label="Tables" name="fourth">Tables</el-tab-pane>
    </h-tab>
    </div>
    `,
  methods: { action: action('click') },
  data: function () {
    return {
      active: 'first'
    }
  }
})
