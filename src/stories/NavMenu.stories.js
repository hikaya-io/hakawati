import TopNav from '../components/navMenu/TopNav.vue'

// This is required for each story
export default { title: 'Nav Menu' }

export const topNav = () => ({
  components: { TopNav },
  template: `
  <top-nav default-active="1">
      <el-menu-item index="1">Maps</el-menu-item>
      <el-menu-item index="2"
        ><a href="#" target="_blank">Tables</a></el-menu-item
      >
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
