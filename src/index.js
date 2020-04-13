import './styles/element-variables.scss'
import BasicButton from './components/button/BasicButton.vue'
// Import other components

const components = [
  BasicButton
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  BasicButton
  // Other components
}
