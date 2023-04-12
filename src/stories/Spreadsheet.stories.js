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
  methods: {
    onNewRow (obj) {
      console.log(`New row added at ${obj.index}`)
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
      :required-headers="['text', 'percentage', 'category', 'boolean']"
      @on-new-row="onNewRow"
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
  },
  {
    headerName: 'Multi-category',
    headerKey: 'multi-category',
    type: 'multi-category',
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
  },
  {
    headerName: 'Boolean',
    headerKey: 'boolean',
    type: 'boolean',
    style: {
      width: '200px',
      minWidth: '200px'
    }
  }
]

const values = [
  {
    text: {
      value: 'Some random text'
    },
    integer: {
      value: 123
    },
    decimal: {
      value: 123.56
    },
    decimal_formatted: {
      value: 127
    },
    percentage: {
      value: 4
    },
    date: {
      value: null
    },
    category: {
      value: 'two'
    },
    'multi-category': {
      value: ['two']
    },
    boolean: {
      value: true
    }
  },
  {
    text: {
      value: 'Some random text'
    },
    integer: {
      value: 456
    },
    decimal: {
      value: 456.56
    },
    decimal_formatted: {
      value: 129
    },
    percentage: {
      value: 7
    },
    date: {
      value: null
    },
    category: {
      value: 'three'
    },
    'multi-category': {
      value: ['three']
    },
    boolean: {
      value: false
    }
  }
]

export const Main = Template.bind({})
Main.args = { label: 'Spreadsheet' }
