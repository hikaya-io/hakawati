import HTable from '../components/table/HTable.vue'
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

export const hTable = () => ({
  components: {
    HTable
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<h-table :tableData="tableData" />',
})

export const tableBasic = () => ({
  components: {
    TableBasic
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-basic :tableData="tableData" />',
})

export const tableWithBorder = () => ({
  components: {
    TableWithBorder
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-border  :tableData="tableData" />'
})

// TODO: Adding list of column names as props?
export const tableWithExpandableRow = () => ({
  components: {
    TableWithExpandableRow
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-expandable-row :tableData="tableData" />'
})

export const tableWithFilter = () => ({
  components: {
    TableWithFilter
  },
  data() {
    return {
      tableData: tableData,
      // Object where keys are corresponding to tableData column.
      filterData: {
        date: [{
          text: '2020-05-03',
          value: '2020-05-03'
        }, {
          text: '2020-07-02',
          value: '2020-07-02'
        }, ],
        state: [{
          text: 'California',
          value: 'California'
        }, {
          text: 'Andalucia',
          value: 'Andalucia'
        }, ]
      },
      tags: []
    }
  },
  template: '<table-with-filter :tableData="tableData" :filterData="filterData" />'
})
// Scroll through rows to see the effect 
export const tableWithFixedHeader = () => ({
  components: {
    TableWithFixedHeader
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-fixed-header :tableData="tableData" />'
})

export const tableWithGroupingHead = () => ({
  components: {
    TableWithGroupingHead
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-grouping-head :tableData="tableData" />'
})

export const tableWithMultipleSelect = () => ({
  components: {
    TableWithMultipleSelect
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-multiple-select :tableData="tableData" />'
})

export const tableWithRowSpan = () => ({
  components: {
    TableWithRowSpan
  },
  data() {
    return {
      tableData: tableAccountantData
    }
  },
  template: '<table-with-row-span :tableData="tableData" />'
})

export const tableWithSorting = () => ({
  components: {
    TableWithSorting
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-sorting :tableData="tableData" />'
})

export const tableWithStatus = () => ({
  components: {
    TableWithStatus
  },
  data() {
    return {
      tableData: tableData
    }
  },
  template: '<table-with-status :tableData="tableData" />'
})

// TODO: From unknown reasons the total cost row is red on hoover.
export const tableWithSummaryRow = () => ({
  components: {
    TableWithSummaryRow
  },
  data() {
    return {
      tableData: tableAccountantData
    }
  },
  template: '<table-with-summary-row :tableData="tableData" />'
})

// Some of simpler tables use this data partially.
const tableAccountantData = [{
    id: "12987122",
    name: "Tom",
    amount1: "234",
    amount2: "3.2",
    amount3: 10
  },
  {
    id: "12987123",
    name: "Tom",
    amount1: "165",
    amount2: "4.43",
    amount3: 12
  }
]

const tableData = [{
    date: "2020-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home"
  },
  {
    date: "2020-07-02",
    name: "John",
    state: "Andalucia",
    city: "Malaga",
    address: "No. 11, Avenida, Malaga",
    zip: "CA 29011",
    tag: "Office"
  },
  {
    date: "2020-07-02",
    name: "John",
    state: "Andalucia",
    city: "Malaga",
    address: "No. 11, Avenida, Malaga",
    zip: "CA 29011",
    tag: "School"
  }
]
