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


.el-table th td {
  border: none;
}
.el-table tr td:first-child {
  border-left: 2px solid #F4F5FC;
   border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.el-table tr td {
    border-top: 2px solid #F4F5FC;
  border-bottom: 2px solid #F4F5FC;
}
.el-table tr td:last-child {
  border-right: 2px solid #F4F5FC;
   border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

table {
   -webkit-border-vertical-spacing: 2px;
}
</style>
