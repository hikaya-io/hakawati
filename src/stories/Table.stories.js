import BasicTable from '../components/table/BasicTable.vue'
import TableWithStatus from '../components/table/TableWithStatus.vue'

// This is required for each story
export default { title: 'Table' }

export const basicTable = () => ({
  components: { BasicTable },
  template: '<basic-table />'
})

export const tableWithStatus = () => ({
  components: { TableWithStatus },
  template: '<table-with-status />'
})
