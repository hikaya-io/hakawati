import HDropdown from '../components/dropdown/HDropdown.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Dropdown' }

// Customize components here.
export const hDropdown = () => ({
  components: { HDropdown },
  template: `
  <h-dropdown>
    <div slot="title">
      <el-button
        class="el-dropdown-link"
        type="primary"
      >
      More options<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
    </div>
    <template slot="items">
        <el-dropdown-item>Edit</el-dropdown-item>
        <el-dropdown-item>Change data type</el-dropdown-item>
        <el-dropdown-item disabled>For admins only</el-dropdown-item>
        <el-dropdown-item divided>Delete</el-dropdown-item>
    </template>
    </h-dropdown>
    `,
  methods: { action: action('click') }
})
