import HSideNav from '../components/sidenav/HSideNav'

export default { title: 'SideNav' }

export const hSideNav = () => ({
  components: { HSideNav },
  template: `
  <h-side-nav>
    <template slot="nav-top">
      <h4>Some Title</h4>
    </template>
  </h-side-nav>
  `
})
