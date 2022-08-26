// This is required for each story
import { action } from '@storybook/addon-actions'
import HSpreadsheet from '@/components/spreadsheet/HSpreadsheet'

export default {
  title: 'Spreadsheet'
}

export const hSpreadsheet = () => ({
  components: {
    HSpreadsheet
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
    <h-spreadsheet :data="tableData" style="min-height: 300px;" enable-filters sortable />
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
