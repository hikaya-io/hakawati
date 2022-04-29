import HDrawer from '../components/drawer/HDrawer.vue'
import HButton from '../components/button/HButton.vue'

// This is required for each story
export default { title: 'Drawer' }

// Customize components here.
export const hDrawer = () => ({
  components: {
    HDrawer,
    HButton
  },
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      title: 'I am the title'
    }
  },
  template: `
  <div>
    <h-button
      @click.native="drawer = true"
      label="Open drawer"
      style="margin-left: 16px;"
    />
    <h-drawer
      :title="title"
      :visible.sync="drawer"
      :direction="direction"
      size="48%"
      :show-close="false"
      :wrapper-closable="true"
      :modal="false"
      class="body-bold"
    >
      <span
        class="body-reg"
      >
        Hi, there!
      </span>
    </h-drawer>
  </div>
  `
})

export const drawerWithoutTitle = () => ({
  components: {
    HDrawer,
    HButton
  },
  data () {
    return {
      drawer: false,
      direction: 'ltr',
      title: 'I am the title'
    }
  },
  template: `
    <div>
      <h-button
        @click.native="drawer = true"
        label="Open drawer"
        style="margin-left: 16px;"
      />
      <h-drawer
        :title="title"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="false"
        size="48%"
        class="body-bold"
        :modal="false"
      >
        <span
          class="body-reg"
        >
          Hi, there!
        </span>
      </h-drawer>
    </div>
    `
})

export const drawerNotClosableOnClick = () => ({
  components: {
    HDrawer,
    HButton
  },
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      title: 'I am the title'
    }
  },
  template: `
      <div>
        <h-button
          @click.native="drawer = true"
          label="Open drawer"
          style="margin-left: 16px;"
        />
        <h-drawer
          :title="title"
          :visible.sync="drawer"
          :direction="direction"
          size="48%"
          :wrapper-closable="false"
          :modal="false"
          class="body-bold"
        >
          <span
            class="body-reg"
          >
            Hi, there!
          </span>
        </h-drawer>
      </div>
      `
})

export const doubleDrawer = () => ({
  components: {
    HDrawer,
    HButton
  },
  data () {
    return {
      drawerRight: false,
      drawerLeft: false,
      title: 'I am the title'
    }
  },
  template: `
  <div>
    <h-button
      @click.native="drawerRight = true"
      label="Open right drawer"
    />
    <h-drawer
      :title="title"
      :visible.sync="drawerRight"
      direction="rtl"
      size="48%"
      :show-close="false"
      :wrapper-closable="true"
      :modal="false"
      :modal-append-to-body="false"
      class="body-reg"
    >
      <span>Hi, there!</span>
      <h-button
        @click.native="drawerLeft = true"
        label="Open right drawer"
      />
    </h-drawer>
    <h-drawer
      :title="title"
      :visible.sync="drawerLeft"
      direction="ltr"
      size="48%"
      :show-close="true"
      :wrapper-closable="true"
      class="body-reg"
      :modal="false"
    >
      <span>Hi, there!</span>
    </h-drawer>
  </div>
  `
})

export const drawerCustomOverlayColor = () => ({
  components: {
    HDrawer,
    HButton
  },
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      title: 'I am the title'
    }
  },
  template: `
  <div>
    <h-button
      @click.native="drawer = true"
      label="Open drawer"
      style="margin-left: 16px;"
    />
    <h-drawer
      :title="title"
      :visible.sync="drawer"
      :direction="direction"
      size="48%"
      :show-close="false"
      :wrapper-closable="true"
      :modal="true"
      class="body-bold"
      overlay-color="rgba(255, 255, 255, 0.10)"
    >
      <span
        class="body-reg"
      >
        Hi, there!
      </span>
    </h-drawer>
  </div>
  `
})
