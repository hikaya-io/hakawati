import TopNav from '../components/navMenu/TopNav.vue'
import CollapseNav from '../components/navMenu/CollapseNav.vue'

// This is required for each story
export default { title: 'Nav Menu' }

export const topNav = () => ({
  components: { TopNav },
  template: `
  <top-nav class="top-nav"default-active="1">
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
  components: { CollapseNav },
  template: `
  <collapse-nav class="map-nav" default-active="1">
  <el-menu-item index="2">
  <i class="el-icon-location"></i>
  <span slot="title">Admin boundary</span>
  </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span slot="title">Indicators</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Group One</span>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">item four</span>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">Navigator Four</span>
      </el-menu-item>
  </collapse-nav>
  `
})
