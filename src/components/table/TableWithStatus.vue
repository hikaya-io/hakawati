<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
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
</template>

<script>
export default {
  props: ['tableData'],
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  },
  data () {
    return {
      name: 'TableWithStatus'
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-table {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: #737581;
}

.el-table td:hover {
  /* background-color: #EFFBFB; */
  background-color: red;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
