import BasicDropdown from '../components/dropdown/BasicDropdown.vue'
import TriggerDropdown from '../components/dropdown/TriggerDropdown.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Dropdown' }

// Customize components here.
export const basicDropdown = () => ({
  components: { BasicDropdown },
  template: `
  <div>
    <el-dropdown>
        <span class="el-dropdown-link">
        More options<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Edit</el-dropdown-item>
            <el-dropdown-item>Change data type</el-dropdown-item>
            <el-dropdown-item disabled>For admins only</el-dropdown-item>
            <el-dropdown-item divided>Delete</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
  `,
  methods: { action: action('click') }
})

export const triggerDropdown = () => ({
  components: { TriggerDropdown },
  template: `
    <div>
        <el-dropdown>
            <el-button type="primary" @click="action" size="small">
            More options<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Workspace 1</el-dropdown-item>
                <el-dropdown-item>Workspace 2</el-dropdown-item>
                <el-dropdown-item>Workspace 3</el-dropdown-item>
                <el-dropdown-item icon="el-icon-plus">Workspace</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
    `,
  methods: { action: action('click') }
})
