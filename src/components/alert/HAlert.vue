<template>
  <el-alert
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

.el-alert__title {
    font-size: 16px;
    line-height: 19px;
}
</style>
