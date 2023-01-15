import HTable from '../components/table/HTable.vue'
import { action } from '@storybook/addon-actions'
import HTag from '@/components/tag/HTag'
import HSelect from '@/components/select/HSelect'

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
  n: 'Home',
  o: true
},
{
  date: '2020-05-04',
  name: 'ZaK',
  state: 'California',
  city: 'San Diego',
  address: 'No. 189, Grove St, San Diego',
  zip: 'CA 90036',
  tag: 'Home',
  a: '2020-05-04',
  b: 'Zak',
  c: 'California',
  d: 'San Diego',
  e: 'No. 189, Grove St, San Diego',
  f: 'CA 90036',
  g: 'Home',
  h: '2020-05-04',
  i: 'Zak',
  j: 'California',
  k: 'San Diego',
  l: 'No. 189, Grove St,San Diego',
  m: 'CA 90036',
  n: 'Home',
  o: false
},
{
  date: '2020-05-06',
  name: 'Ben',
  state: 'California',
  city: 'San Jose',
  address: 'No. 189, Grove St, San Jose',
  zip: 'CA 90036',
  tag: 'Home',
  a: '2020-05-06',
  b: 'Ben',
  c: 'California',
  d: 'San Jose',
  e: 'No. 189, Grove St, San Jose',
  f: 'CA 90036',
  g: 'Home',
  h: '2020-05-06',
  i: 'Ben',
  j: 'California',
  k: 'San Jose',
  l: 'No. 189, Grove St, San Jose',
  m: 'CA 90036',
  n: 'Home',
  o: false
}
]

// This is required for each story
export default {
  component: HTable,
  title: '1.0/Table',
  argTypes: {
    ignoredColumns: {
      control: { type: 'inline-check', options: Object.keys(tableDataNew[0]) }
    }
  }
}

const Template = (args, { argTypes }) => {
  return {
    components: { HTable, HTag },
    props: Object.keys(argTypes),
    data () {
      return {
        // tableData: args.tableData
      }
    },
    methods: {
      onRowEdited ({ rowIndex, row }) {
        action('Row edited')
      }
    },
    template: `
      <h-table  v-bind="$props" @row-edited="onRowEdited">
        <template v-slot:cell="scope">
          <h-tag v-if="scope.col === 'city'">{{ scope.value }}</h-tag>
          <span v-else>{{  scope.value }}</span>
        </template>
        <template slot="edit-tag">
          <el-option value="Home" label="Home"></el-option>
          <el-option value="School" label="School"></el-option>
          <el-option value="Office" label="Office"></el-option>
        </template>
      </h-table>
    `
  }
}

export const Main = Template.bind({})
Main.args = {
  tableData: tableDataNew,
  columnAttrs: {
    address: {
      width: '200px'
    }
  },
  columnComponents: {
    date: {
      'editable-component': 'el-date-picker',
      format: 'yyyy-MM-dd',
      'value-format': 'yyyy-MM-dd'
    },
    tag: {
      'editable-component': 'el-select',
      'close-event': 'change'
    },
    state: {
      'editable-component': HSelect,
      'close-event': 'change',
      multiple: true,
      filterable: true,
      'allow-create': true,
      options: [
        {
          label: 'California',
          value: 'california'
        }
      ]
    }
  },
  columnDefaultAttrs: {
    'min-width': '200px'
  }
}
