import TableBasic from '../components/table/TableBasic.vue'
import TableWithBorder from '../components/table/TableWithBorder.vue'
import TableWithExpandableRow from '../components/table/TableWithExpandableRow.vue'
import TableWithFilter from '../components/table/TableWithFilter.vue'
import TableWithFixedHeader from '../components/table/TableWithFixedHeader.vue'
import TableWithGroupingHead from '../components/table/TableWithGroupingHead.vue'
import TableWithMultipleSelect from '../components/table/TableWithMultipleSelect.vue'
import TableWithRowSpan from '../components/table/TableWithRowSpan.vue'
import TableWithSorting from '../components/table/TableWithSorting.vue'
import TableWithStatus from '../components/table/TableWithStatus.vue'
import TableWithSummaryRow from '../components/table/TableWithSummaryRow.vue'

// This is required for each story
export default {
  title: 'Table'
}
 
export const tableBasic = () => ({
  components: {
    TableBasic
  },
  data() {
    return {
      dataTable: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }]
    }
  },
  template: '<table-basic :dataTable="dataTable" />',

})

export const tableWithBorder = () => ({
  components: {
    TableWithBorder
  }, 
  template: '<table-with-border   />'
})

export const tableWithExpandableRow = () => ({
  components: {
    TableWithExpandableRow
  },
  template: '<table-with-expandable-row />'
})

export const tableWithFilter = () => ({
  components: {
    TableWithFilter
  },
  template: '<table-with-filter />'
})
// Scroll through rows to see the effect
export const tableWithFixedHeader = () => ({
  components: {
    TableWithFixedHeader
  },
  template: '<table-with-fixed-header />'
})

export const tableWithRowSpan = () => ({
  components: {
    TableWithRowSpan
  },
  template: '<table-with-row-span />'
})

export const tableWithSorting = () => ({
  components: {
    TableWithSorting
  },
  template: '<table-with-sorting />'
})

export const tableWithStatus = () => ({
  components: {
    TableWithStatus
  },
  template: '<table-with-status />'
})

export const tableWithSummaryRow = () => ({
  components: {
    TableWithSummaryRow
  },
  template: '<table-with-summary-row />'
})

export const tableWithGroupingHead = () => ({
  components: {
    TableWithGroupingHead
  },
  template: '<table-with-grouping-head />'
})

export const tableWithMultipleSelect = () => ({
  components: {
    TableWithMultipleSelect
  },
  template: '<table-with-multiple-select />'
})
