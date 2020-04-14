<template>
    <el-alert
    :title="title"
    :type="type"
    show-icon>
  </el-alert>
</template>

<script>
export default {
  name: 'IconAlert',
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
