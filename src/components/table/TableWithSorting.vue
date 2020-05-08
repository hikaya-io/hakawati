<template>
  <el-table
    :data="tableData"
    :default-sort="{prop: 'date', order: 'descending'}"
    style="width: 100%"
  >
    <el-table-column
      v-for="(value, key) in tableData[0]"
      :prop="key"
      :label="key.charAt(0).toUpperCase() + key.slice(1)"
      width="100"
      :key="key"
      sortable
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['tableData'],
  data () {
    return {
      name: 'TableWithSorting'
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
    }
  }
}
</script>
