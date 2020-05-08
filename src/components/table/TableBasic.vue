<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      v-for="(value, key) in tableData[0]"
      :prop="key"
      :label="key.charAt(0).toUpperCase() + key.slice(1)"
      :key="key"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['tableData'],
  data () {
    return {
      name: 'TableBasic'
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-table__row {
  border: 2px solid $background-color;
  box-sizing: border-box;
  border-radius: 6px;
}
</style>
