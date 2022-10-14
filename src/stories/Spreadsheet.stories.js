// This is required for each story
import HSpreadsheet from '@/components/spreadsheet/HSpreadsheet'

export default {
  component: HSpreadsheet,
  title: '1.0/Spreadsheet',
  argTypes: {}
}

const Template = () => ({
  components: { HSpreadsheet },
  data () {
    return {
      headers: headers,
      values: values,
      style: {
        height: '400px',
        overflow: 'visible',
        fontSize: '12px'
      }
    }
  },
  template: `
    <h-spreadsheet
      v-bind="$props"
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
  `
})

const headers = [
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
]

const values = [
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
]
export const Main = Template.bind({})
Main.args = { label: 'Spreadsheet' }
