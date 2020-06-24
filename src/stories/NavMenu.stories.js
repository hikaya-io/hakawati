import TopNav from '../components/navMenu/TopNav.vue'
import CollapseNav from '../components/navMenu/CollapseNav.vue'
import BasicCheckbox from '../components/checkbox/BasicCheckbox.vue'

// This is required for each story
export default { title: 'Nav Menu' }

export const topNav = () => ({
  components: { TopNav },
  template: `
  <top-nav default-active="1">
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
      <span slot='title'>Table 1</span>
    </template>
    <el-menu-item index='1-1'>
      <basic-checkbox class='body-reg'>
        Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1Layer 1
      </basic-checkbox>
    </el-menu-item>
    <el-menu-item index='1-2'>
      <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
    </el-menu-item>
  </el-submenu>
  <el-submenu index='2'>
    <template slot='title'>
      <span slot='title'>
        Table 2Table 2Table 2Table 2Table 2Table 2Table 2
      </span>
    </template>
    <el-menu-item index='2-1'>
      <basic-checkbox class='body-reg'>Layer 1</basic-checkbox>
    </el-menu-item>
    <el-menu-item index='2-2'>
      <basic-checkbox class='body-reg'>Layer 2</basic-checkbox>
    </el-menu-item>
  </el-submenu>
  </collapse-nav>
  `
})
