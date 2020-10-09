<template>
  <div class="h-pagination">
    <el-pagination
      layout="sizes, prev, pager, next"
      v-bind="$attrs"
      v-on="$listeners"
      :background="background"
    />
  </div>
</template>

<script>
export default {
  name: 'HPageSize',
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

</style>
