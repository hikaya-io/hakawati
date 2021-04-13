import TopNav from '../components/navMenu/TopNav.vue'
import CollapseNav from '../components/navMenu/CollapseNav.vue'
import BasicCheckbox from '../components/checkbox/BasicCheckbox.vue'

// This is required for each story
export default { title: 'Nav Menu' }

export const topNav = () => ({
  components: { TopNav },
  template: `
  <top-nav default-active="1">
      <template slot="mobile-before">
        <el-menu-item index="0">Menu Item Before</el-menu-item>
      </template>
      <el-menu-item index="1">Maps</el-menu-item>
      <el-menu-item index="2">Tables</el-menu-item>
      <el-menu-item index="3" disabled>Reports</el-menu-item>
      <el-submenu index="4">
        <template slot="title">Workspace</template>
        <el-menu-item index="4-1">item one</el-menu-item>
        <el-menu-item index="4-2">item two</el-menu-item>
        <el-menu-item index="4-3">item three</el-menu-item>
        <el-submenu index="4-4">
          <template slot="title">item four</template>
          <el-menu-item index="4-4-1">item one</el-menu-item>
          <el-menu-item index="4-4-2">item two</el-menu-item>
          <el-menu-item index="4-4-3">item three</el-menu-item>
        </el-submenu>
      </el-submenu>

      <template slot="mobile-after">
        <el-menu-item index="5">Menu Item After</el-menu-item>
      </template>
    </top-nav>
`
})

export const collapseNav = () => ({
  components: { CollapseNav, BasicCheckbox },
  template: `
  <collapse-nav default-active='1'>
    <template v-slot:header>Layers</template>
    <el-submenu index='1'>
      <template slot='title'>
        <div class='table-list' slot='title'>
          Table 1
        </div>
      </template>
      <el-menu-item index='1-1'>
        <el-tooltip
          class='item'
          effect='dark'
          content='Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer1Layer 1Layer 1Layer 1 r 1Layer 1Layer 1Layer 1Layer 1Layer1Layer 1Layer 1Layer 1'
          placement='top-end'
        >
          <basic-checkbox class='body-reg'>
            Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer
            1Layer 1Layer 1Layer 1
          </basic-checkbox>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index='1-2'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='1-3'>
        <el-tooltip
          class='item'
          effect='dark'
          content='Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer1Layer 1Layer 1Layer 1 r 1Layer 1Layer 1Layer 1Layer 1Layer1Layer 1Layer 1Layer 1'
          placement='top-end'
        >
          <basic-checkbox class='body-reg'>
            Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer
            1Layer 1Layer 1Layer 1
          </basic-checkbox>
        </el-tooltip>
      </el-menu-item>
      <el-menu-item index='1-4'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
    </el-submenu>
    <el-submenu index='2'>
      <template slot='title'>
        <div class='table-list' slot='title'>
          <el-tooltip
            class='item'
            effect='dark'
            content='Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2'
            placement='top-end'
          >
          <span>
            Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table
            2Table 2Table 2Table 2
          </span>
          </el-tooltip>
        </div>
      </template>
      <el-menu-item index='2-1'>
        <basic-checkbox class='body-reg'>Layer 1</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='2-2'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
    </el-submenu>
    <el-submenu index='3'>
      <template slot='title'>
        <div class='table-list' slot='title'>
          <el-tooltip
            class='item'
            effect='dark'
            content='Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2'
            placement='top-end'
          >
          <span>
            Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table
            2Table 2Table 2Table 2
          </span>
          </el-tooltip>
        </div>
      </template>
      <el-menu-item index='3-1'>
        <basic-checkbox class='body-reg'>Layer 1</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='3-2'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
    </el-submenu>
    <el-submenu index='4'>
      <template slot='title'>
        <div class='table-list' slot='title'>
          <el-tooltip
            class='item'
            effect='dark'
            content='Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2'
            placement='top-end'
          >
          <span>
            Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table 2Table
            2Table 2Table 2Table 2
          </span>
          </el-tooltip>
        </div>
      </template>
      <el-menu-item index='4-1'>
        <basic-checkbox class='body-reg'>Layer 1</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='4-2'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='4-3'>
        <basic-checkbox class='body-reg'>Layer 1</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='4-4'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='4-5'>
        <basic-checkbox class='body-reg'>Layer 1</basic-checkbox>
      </el-menu-item>
      <el-menu-item index='4-6'>
        <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
      </el-menu-item>
    </el-submenu>
  </collapse-nav>
  `
})
