import BasicTable from '../components/table/BasicTable.vue'
import TableGroupingHead from '../components/table/TableGroupingHead.vue'
import TableMultipleSelect from '../components/table/TableMultipleSelect.vue'
import TableWithBorder from '../components/table/TableWithBorder.vue'
import TableWithFilter from '../components/table/TableWithFilter.vue'
import TableWithFixedHeader from '../components/table/TableWithFixedHeader.vue'
import TableWithRowSpan from '../components/table/TableWithRowSpan.vue'
import TableWithSorting from '../components/table/TableWithSorting.vue'
import TableWithStatus from '../components/table/TableWithStatus.vue'
import TableWithSummaryRow from '../components/table/TableWithSummaryRow.vue'

// This is required for each story
export default { title: 'Table' }

export const basicTable = () => ({
  components: { BasicTable },
  template: '<basic-table />'
})


export const tableWithBorder = () => ({
  components: { TableWithBorder },
  template: '<table-with-border />'
})
export const tableWithFilter = () => ({
  components: { TableWithFilter },
  template: '<table-with-filter />'
})
// Scroll through rows to see the effect
export const tableWithFixedHeader = () => ({
  components: { TableWithFixedHeader },
  template: '<table-with-fixed-header />'
})

export const tableWithRowSpan = () => ({
  components: { TableWithRowSpan },
  template: '<table-with-row-span />'
})

export const tableWithSorting = () => ({
  components: { TableWithSorting },
  template: '<table-with-sorting />'
})

export const tableWithStatus = () => ({
  components: { TableWithStatus },
  template: '<table-with-status />'
})

export const tableWithSummaryRow = () => ({
  components: { TableWithSummaryRow },
  template: '<table-with-summary-row />'
})

export const tableGroupingHead = () => ({
  components: { TableGroupingHead },
  template: '<table-grouping-head />'
})

export const tableMultipleSelect = () => ({
  components: { TableMultipleSelect },
  template: '<table-multiple-select />'
})
