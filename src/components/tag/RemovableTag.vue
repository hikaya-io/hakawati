<template>
  <el-tag :type="type" closable>
    <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name: 'BasicTag',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.el-tag {
    font-family: "Lato";
}
</style>
