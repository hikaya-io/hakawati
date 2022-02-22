import HTable from '../components/table/HTable.vue'
import HkoboTable from '../components/table/HKoboTable.vue'
import OldTable from '../components/table/OldTable.vue'
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
import { action } from '@storybook/addon-actions'
import HSwitch from '@/components/switch/HSwitch'
import HTag from '@/components/tag/HTag'

// This is required for each story
export default {
  title: 'Table'
}

export const hTable = () => ({
  components: {
    HTable
  },
  data () {
    return {
      tableData: tableDataNew
    }
  },
  methods: { action: action('header click') },
  template: `
  <h-table :tableData="tableData" @header-click="action">
  </h-table>
  `
})

export const hEmptyTable = () => ({
  components: {
    HTable
  },
  data () {
    return {
      tableData: [],
      tableColumns: [{ label: 'Date', width: 125 },
        { label: 'Name', width: 125 },
        { label: 'State', width: 125 },
        { label: 'City', width: 125 },
        { label: 'Address', width: 125 }]
    }
  },
  methods: { action: action('header click') },
  template: `
  <h-table :tableData="tableData" empty-text="No data" @header-click="action">
  <el-table-column
    v-for="(col, colIndex) in tableColumns"
    :key="colIndex"
    :label="col.label"
    sortable
    :width="col.width"
  />
  </h-table>
  `
})

export const hTableWithSwitch = () => ({
  components: {
    HTable
  },
  data () {
    return {
      tableData: tableDataNew
    }
  },
  methods: { action: action('header click') },
  template: `
  <h-table :tableData="tableData" @header-click="action" use-switch>
  </h-table>
  `
})

export const hTableWithColumnAttrs = () => ({
  components: {
    HTable
  },
  data () {
    return {
      tableData: tableDataNew,
      columnAttrs: {
        city: {
          'class-name': 'city',
          width: '400px',
          label: 'CityRRRR'
        }
      },
      columnDefaultAttrs: {
        'min-width': '200px'
      }
    }
  },
  methods: { action: action('header click') },
  template: `
    <h-table
      :tableData="tableData"
      :column-attrs=columnAttrs
      :column-default-attrs="columnDefaultAttrs"
      @header-click="action"
      use-switch>
    </h-table>
  `
})

export const hTableWithCustomContent = () => ({
  components: {
    HTable,
    HTag
  },
  data () {
    return {
      tableData: tableDataNew
    }
  },
  methods: { action: action('header click') },
  template: `
  <h-table :tableData="tableData" @header-click="action">
    <template v-slot:cell="scope">
      <h-tag v-if="scope.col === 'city'">{{ scope.value }}</h-tag>
      <span v-else>{{  scope.value }}</span>
    </template>
  </h-table>
  `
})

export const hTableWithIgnoredColumns = () => ({
  components: {
    HTable
  },
  data () {
    return {
      tableData: tableDataNew
    }
  },
  methods: { action: action('header click') },
  template: `
  <h-table :tableData="tableData" @header-click="action" :ignored-columns="['city']">
  </h-table>
  `
})

export const hTableEditEnabled = () => ({
  components: {
    HTable,
    HSwitch
  },
  data () {
    return {
      tableData: tableDataNew,
      editMode: false,
      columnComponents: {
        date: {
          'editable-component': 'el-date-picker',
          format: 'yyyy-MM-dd',
          'value-format': 'yyyy-MM-dd'
        },
        tag: {
          'editable-component': 'el-select',
          'close-event': 'change'
        }
      }
    }
  },
  methods: {
    action: action('header click'),
    rowEdited (row) {
      action('Row edited')
    }
  },
  template: `
    <div>
    <h-switch v-model="editMode" activeText="Edit" inactiveText="View"></h-switch>
    <h-table
      :tableData="tableData"
      @header-click="action"
      @row-edited="rowEdited"
      :edit-mode="editMode"
      :column-components="columnComponents">
      <template slot="edit-tag">
        <el-option value="Home" label="Home"></el-option>
        <el-option value="School" label="School"></el-option>
        <el-option value="Office" label="Office"></el-option>
      </template>
    </h-table>
    </div>
  `
})

export const oldTable = () => ({
  components: {
    OldTable
  },
  data () {
    return {
      tableData: tableData
    }
  },
  template: '<old-table :tableData="tableData" />'
})

export const hKoboTable = () => ({
  components: {
    HkoboTable
  },
  data () {
    return {
      tableData: tableData
    }
  },
  template: '<hkobo-table :tableData="tableData" />'
})

export const tableBasic = () => ({
  components: {
    TableBasic
  },
  data () {
    return {
      tableData: tableData
    }
  },
  template: '<table-basic :tableData="tableData" />'
})

export const tableWithBorder = () => ({
  components: {
    TableWithBorder
  },
  data () {
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
  data () {
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
  data () {
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
        }],
        state: [{
          text: 'California',
          value: 'California'
        }, {
          text: 'Andalucia',
          value: 'Andalucia'
        }]
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
  data () {
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
  data () {
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
  data () {
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
  data () {
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
  data () {
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
  data () {
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
  data () {
    return {
      tableData: tableAccountantData
    }
  },
  template: '<table-with-summary-row :tableData="tableData" />'
})

// Some of simpler tables use this data partially.
const tableAccountantData = [{
  id: '12987122',
  name: 'Tom',
  amount1: '234',
  amount2: '3.2',
  amount3: 10
},
{
  id: '12987123',
  name: 'Tom',
  amount1: '165',
  amount2: '4.43',
  amount3: 12
}
]

const tableData = [
  {
    date: '2020-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2020-07-02',
    name: 'John',
    state: 'Andalucia',
    city: 'Malaga',
    address: 'No. 11, Avenida, Malaga',
    zip: 'CA 29011',
    tag: 'Office'
  },
  {
    date: '2020-07-02',
    name: 'John',
    state: 'Andalucia',
    city: 'Malaga',
    address: 'No. 11, Avenida, Malaga',
    zip: 'CA 29011',
    tag: 'School'
  }
]

const tableDataNew = [{
  date: '2020-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home',
  a: '2020-05-03',
  b: 'Tom',
  c: 'California',
  d: 'Los Angeles',
  e: 'No. 189, Grove St, Los Angeles',
  f: 'CA 90036',
  g: 'Home',
  h: '2020-05-03',
  i: 'Tom',
  j: 'California',
  k: 'Los Angeles',
  l: 'No. 189, Grove St, Los Angeles',
  m: 'CA 90036',
  n: 'Home'
},
{
  date: '2020-07-02',
  name: 'John',
  state: 'Andalucia',
  city: 'Malaga',
  address: 'No. 11, Avenida, Malaga',
  zip: 'CA 29011',
  tag: 'School'
},
{
  date: '2020-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home'
},
{
  date: '2020-07-02',
  name: 'John',
  state: 'Andalucia',
  city: 'Malaga',
  address: 'No. 11, Avenida, Malaga',
  zip: 'CA 29011',
  tag: 'Office'
},
{
  date: '2020-07-02',
  name: 'John',
  state: 'Andalucia',
  city: 'Malaga',
  address: 'No. 11, Avenida, Malaga',
  zip: 'CA 29011',
  tag: 'School'
},
{
  date: '2020-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home'
},
{
  date: '2020-07-02',
  name: 'John',
  state: 'Andalucia',
  city: 'Malaga',
  address: 'No. 11, Avenida, Malaga',
  zip: 'CA 29011',
  tag: 'Office'
},
{
  date: '2020-07-02',
  name: 'John',
  state: 'Andalucia',
  city: 'Malaga',
  address: 'No. 11, Avenida, Malaga',
  zip: 'CA 29011',
  tag: 'School'
}
]
