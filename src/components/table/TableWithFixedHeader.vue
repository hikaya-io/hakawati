<template>
  <el-table
    :data="tableData"
    height="250"
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
</template>

<script>
export default {
  name: 'HTableWithFixedHeader',
  props: ['tableData']
}
</script>
