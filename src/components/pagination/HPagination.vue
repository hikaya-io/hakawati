<template>
  <div class="h-pagination">
  <el-pagination
    layout="prev, pager, next"
    v-bind="$attrs"
    v-on="$listeners"
    :background="background"
  />
  </div>
</template>

<script>
export default {
  name: 'HPagination',
  props: {
    background: {
      type: Boolean,
      default: false
    }
  }
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
