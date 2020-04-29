import BasicDrawer from '../components/drawer/BasicDrawer.vue'

// This is required for each story
export default { title: 'Drawer' }

// Customize components here.
export const basicDrawer = () => ({
  components: { BasicDrawer },
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  template: `
  <div>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      Open drawer
    </el-button>
    <basic-drawer
      title="I am the title"
      :drawer="drawer"
      :direction="direction"
      size="50%"
    >
      <span>Hi, there!</span>
    </basic-drawer>
  </div>
  `
})

export const drawerWithoutTitle = () => ({
  components: { BasicDrawer },
  data () {
    return {
      drawer: false,
      direction: 'ltr'
    }
  },
  template: `
    <div>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        Open drawer
      </el-button>
      <basic-drawer
        title="I am the title"
        :drawer="drawer"
        :direction="direction"
        :withHeader="false"
        size="30%"
      >
        <span>Hi, there!</span>
      </basic-drawer>
    </div>
    `
})
