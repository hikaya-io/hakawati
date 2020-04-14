import BasicDropdown from '../components/dropdown/BasicDropdown.vue'
import TriggerDropdown from '../components/dropdown/TriggerDropdown.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Dropdown' }

// Customize components here.
export const basicDropdown = () => ({
  components: { BasicDropdown },
  template: `
  <basic-dropdown>
    <template slot="items">
        <el-dropdown-item>Edit</el-dropdown-item>
        <el-dropdown-item>Change data type</el-dropdown-item>
        <el-dropdown-item disabled>For admins only</el-dropdown-item>
        <el-dropdown-item divided>Delete</el-dropdown-item>
    </template>
    </basic-dropdown>
    `,
  methods: { action: action('click') }
})

export const triggerDropdown = () => ({
  components: { TriggerDropdown },
  template: `
    <trigger-dropdown>
        <template slot="items">
            <el-dropdown-item>Workspace 1</el-dropdown-item>
            <el-dropdown-item>Workspace 2</el-dropdown-item>
            <el-dropdown-item>Workspace 3</el-dropdown-item>
            <el-dropdown-item icon="el-icon-plus">Workspace</el-dropdown-item>
        </template>
    </trigger-dropdown>
    `,
  methods: { action: action('click') }
})
