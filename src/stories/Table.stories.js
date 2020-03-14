import BasicTable from '../components/BasicTable.vue'

// This is required for each story
export default { title: 'Table' }

export const basicTable = () => ({
  components: { BasicTable },
  template: '<basic-table />'
})
