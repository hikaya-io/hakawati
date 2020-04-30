import BasicDrawer from '../components/drawer/BasicDrawer.vue'

// This is required for each story
export default { title: 'Drawer' }

// Customize components here.
export const basicDrawer = () => ({
  components: { BasicDrawer },
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      title: 'I am the title'
    }
  },
  template: `
  <div>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      Open drawer
    </el-button>
    <basic-drawer
      :title="title"
      :visible.sync="drawer"
      :direction="direction"
      size="50%"
      :show-close="false"
      :wrapper-closable="true"
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
      direction: 'ltr',
      title: 'I am the title'
    }
  },
  template: `
    <div>
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        Open drawer
      </el-button>
      <basic-drawer
        :title="title"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="false"
        size="30%"
      >
        <span>Hi, there!</span>
      </basic-drawer>
    </div>
    `
})

export const drawerNotClosableOnClick = () => ({
  components: { BasicDrawer },
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      title: 'I am the title'
    }
  },
  template: `
      <div>
        <el-button @click="drawer=true" type="primary" style="margin-left: 16px;">
          Open drawer
        </el-button>

        <basic-drawer
          :title="title"
          :visible.sync="drawer"
          :direction="direction"
          size="30%"
          :wrapper-closable="false"

        >
          <span>Hi, there!</span>
        </basic-drawer>
      </div>
      `
})
