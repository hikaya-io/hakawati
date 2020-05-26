<template>
  <div class="h-pagination">
  <el-pagination
    layout="prev, pager, next"
    :total="parseInt(totalPageNumber)"
    :background="background == 'true' ? true : false"
  />
  </div>
</template>

<script>
export default {
  name: 'HPagination',
  props: ['totalPageNumber', 'background']
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-pagination {
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: $primary-fill;
    color: $primary-color;
  }
}
</style>
