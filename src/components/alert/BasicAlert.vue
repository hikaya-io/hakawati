<template>
  <el-alert :title="title" :type="type"> </el-alert>
</template>

<script>
export default {
  name: 'BasicAlert',
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

  .el-alert {
    font-family: $main-font-family;
  }

</style>
