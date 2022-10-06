// This is required for each story
import { action } from '@storybook/addon-actions'
import HSpreadsheet2 from '@/components/spreadsheet/HSpreadsheet2'
import HSpreadsheet from '@/components/spreadsheet/HSpreadsheet'

export default {
  title: 'Spreadsheet'
}

export const hSpreadsheet2 = () => ({
  components: {
    HSpreadsheet2
  },
  data () {
    return {
      tableData: tableData
    }
  },
  methods: { action: action('header click') },
  template: `
    <div>
    <h1>Spreadsheet</h1>
    <h-spreadsheet2 :data="tableData" style="min-height: 300px;" enable-filters sortable />
    </div>

  `
})

export const hSpreadsheet = () => ({
  components: {
    HSpreadsheet
  },
  data () {
    return {
      headers: [
        {
          headerName: 'Text',
          headerKey: 'text',
          type: 'text',
          style: {
            width: '200px',
            minWidth: '200px'
          }
        },
        {
          headerName: 'Integer',
          headerKey: 'integer',
          type: 'integer',
          style: {
            width: '200px',
            minWidth: '200px'
          }
        },
        {
          headerName: 'Decimal',
          headerKey: 'decimal',
          type: 'decimal',
          style: {
            width: '200px',
            minWidth: '200px'
          }
        },
        {
          headerName: 'Decimal Formatted',
          headerKey: 'decimal_formatted',
          type: 'decimal',
          style: {
            width: '200px',
            minWidth: '200px'
          }
        },
        {
          headerName: 'Percentage',
          headerKey: 'percentage',
          type: 'percentage',
          style: {
            width: '200px',
            minWidth: '200px'
          }
        },
        {
          headerName: 'Date',
          headerKey: 'date',
          type: 'date',
          style: {
            width: '200px',
            minWidth: '200px'
          }
        },
        {
          headerName: 'Category',
          headerKey: 'category',
          type: 'category',
          selectOptions: [
            {
              value: 'one',
              label: 'One'
            },
            {
              value: 'two',
              label: 'Two'
            },
            {
              value: 'three',
              label: 'Three'
            }
          ],
          style: {
            width: '200px',
            minWidth: '200px'
          }
        }
      ],
      values: [
        {
          text: {
            type: 'text',
            value: 'Some random text'
          },
          integer: {
            type: 'integer',
            value: 123
          },
          decimal: {
            type: 'decimal',
            value: 123.56
          },
          decimal_formatted: {
            type: 'decimal',
            value: 127
          },
          percentage: {
            type: 'percentage',
            value: 4
          },
          date: {
            type: 'date',
            value: null
          },
          category: {
            type: 'category',
            value: 'two'
          }
        },
        {
          text: {
            type: 'text',
            value: 'Some random text'
          },
          integer: {
            type: 'integer',
            value: 123
          },
          decimal: {
            type: 'decimal',
            value: 123.56
          },
          decimal_formatted: {
            type: 'decimal',
            value: 127
          },
          percentage: {
            type: 'percentage',
            value: 4
          },
          date: {
            type: 'date',
            value: null
          },
          category: {
            type: 'category',
            value: 'three'
          }
        }
      ],
      style: {
        height: '400px',
        overflow: 'visible',
        fontSize: '12px'
      }
    }
  },
  methods: { action: action('header click') },
  template: `
    <div>
    <h1>Spreadsheet</h1>
    <h-spreadsheet
      :parent-scroll-element="{}"
      :select-position="{}"
      :loading="false"
      :disable-sort-thead="[]"
      :submenu-thead="[]"
      :style-wrap-vue-table="style"
      :custom-options="{}"
      :data="values"
      :headers="headers"
      @on-new-row="(row) => values.push(row)"
    />
    </div>

  `
})

const tableData = [{
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
  n: 'Home'
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
  n: 'Home'
}
]
