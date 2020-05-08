<template>
  <div>
    <el-table
      :data="tableData"
      border
      show-summary
      style="width: 100%"
    >
      <el-table-column
        v-for="(value, key) in tableData[0]"
        :prop="key"
        :label="key.charAt(0).toUpperCase() + key.slice(1)"
        width="180"
        :key="key"
      >
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      border
      height="200"
      :summary-method="getSummaries"
      show-summary
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        v-for="(value, key) in tableData[0]"
        :prop="key"
        :label="key.charAt(0).toUpperCase() + key.slice(1)"
        width="180"
        :key="key"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['tableData'],
  data () {
    return {
      name: 'TableWithSummaryRow'
    }
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'Total Cost'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] =
            '$ ' +
            values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>
