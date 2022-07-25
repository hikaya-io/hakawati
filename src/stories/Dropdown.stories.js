import HDropdown from '../components/dropdown/HDropdown.vue'

import HButton from '../components/button/HButton.vue'
import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Dropdown' }

// Customize components here.
export const hDropdown = () => ({
  components: { HDropdown, HButton },
  template: `
  <h-dropdown>
    <div slot="title">
      <h-button
        label="More options"
        icon="arrow-down"
      />
    </div>
    <template slot="items">
        <el-dropdown-item>Edit</el-dropdown-item>
        <el-dropdown-item>Change data type</el-dropdown-item>
        <el-dropdown-item disabled>For admins only</el-dropdown-item>
        <el-dropdown-item class="danger-item" divided>Delete</el-dropdown-item>
    </template>
    </h-dropdown>
    `,
  methods: { action: action('click') }
})
