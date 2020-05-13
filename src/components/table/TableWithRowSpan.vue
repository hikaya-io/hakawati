<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
      >
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="Amount 1"
      >
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="Amount 2"
      >
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="Amount 3"
      >
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
      >
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="Amount 1"
      >
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="Amount 2"
      >
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="Amount 3"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HTableWithRowSpan',
  props: ['tableData'],
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },

    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
