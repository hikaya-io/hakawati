import HSideNav from '../components/sidenav/HSideNav'

export default {
  title: 'SideNav',
  component: HSideNav,
  argTypes: {
    expandBottomNav: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { HSideNav },
  props: Object.keys(argTypes),
  template: `
  <h-side-nav v-bind="$props">
    <template slot="nav-top">
      <h4>Some Title</h4>
    </template>
  </h-side-nav>
  `
})

export const hSideNav = Template.bind({})
hSideNav.args = {
  expandBottomNav: false
}
