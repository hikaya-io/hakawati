<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <p
          v-for="(key, value) in props.row"
          :key="key"
        >
        {{ value.charAt(0).toUpperCase() + key.slice(1) }} : {{ key }}</p>
      </template>
    </el-table-column>
    <el-table-column
      v-for="(value, key) in columnNames"
      :key="key"
      :label="key.charAt(0).toUpperCase() + key.slice(1)"
      :prop="key"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'HTableWithExpandableRow',
  props: ['tableData'],
  created () {
    this.columnNames = this.tableData[0]
  }
}
</script>
