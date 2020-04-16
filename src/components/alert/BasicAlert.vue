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

<style scoped lang="scss">
  .el-alert {
    font-family: 'Lato';
  }
</style>
