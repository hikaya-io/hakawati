<template>
  <el-alert
    class="h-alert"
    :title="title"
    :type="type"
  />
</template>

<script>
export default {
  name: 'HAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-alert {
  .el-alert__title {
      font-size: 16px;
      line-height: 19px;
  }
}
</style>
