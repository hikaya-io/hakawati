import BreadcrumbBasic from '../components/breadcrumb/BreadcrumbBasic.vue'
import BreadcrumbIconSeparator from '../components/breadcrumb/BreadcrumbIconSeparator.vue'

import { action } from '@storybook/addon-actions'

// This is required for each story
export default { title: 'Breadcrumb' }

const items = [
    {
        to: {path: '/'},
        label: 'Home'
    },
    {
        to: {path: '/projects'},
        label: 'projects'
    },
    {
        label: 'Project 1'
    }
]

// Customize components here. For instance, here's my-button component with a text of "with text"
export const basicBreadCrumb = () => ({
  components: { BreadcrumbBasic },
  data() {
    return {
        items
    }
  },
  template: `
    <div>
    <breadcrumb-basic :items="items" separator="|">Default</breadcrumb-basic>
    </div>  
  `
})

export const iconSeparatorBreadcrumb = () => ({
    components: { BreadcrumbIconSeparator },
    data() {
      return {
          items
      }
    },
    template: `
      <div>
      <breadcrumb-icon-separator :items="items">Default</breadcrumb-icon-separator>
      </div>  
    `
  })