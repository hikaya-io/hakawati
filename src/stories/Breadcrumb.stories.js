import HBreadcrumb from '../components/breadcrumb/HBreadcrumb.vue'

// This is required for each story
export default { title: 'Breadcrumb' }

const items = [
  {
    to: { path: '/' },
    label: 'Home'
  },
  {
    to: { path: '/projects' },
    label: 'Projects'
  },
  {
    label: 'Agriculture Project'
  }
]

// Customize components here. For instance, here's my-button component with a text of "with text"
export const hBreadCrumb = () => ({
  components: { HBreadcrumb },
  data () {
    return {
      items
    }
  },
  template: `
    <div>
    <h-breadcrumb
      :items="items"
      separator=" "
    >
      Default
    </h-breadcrumb>
    </div>  
  `
})
