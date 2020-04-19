import BasicTable from '../components/table/BasicTable.vue'
import TableGroupingHead from '../components/table/TableGroupingHead.vue'
import TableWithBorder from '../components/table/TableWithBorder.vue'
import TableWithFixedHeader from '../components/table/TableWithFixedHeader.vue'
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

export const tableWithBorder = () => ({
  components: { TableWithBorder },
  template: '<table-with-border />'
})

// Scroll through rows to see the effect
export const tableWithFixedHeader = () => ({
  components: { TableWithFixedHeader },
  template: '<table-with-fixed-header />'
})

export const tableGroupingHead = () => ({
  components: { TableGroupingHead },
  template: '<table-grouping-head />'
})