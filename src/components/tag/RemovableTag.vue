<template>
  <el-tag
    :type="type"
    closable
  >
    <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name: 'RemovableTag',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-tag.el-tag--success {
    border-color: transparent;
}

.el-tag.el-tag--info {
    border-color: transparent;
}

.el-tag.el-tag--warning {
    border-color: transparent;
}

.el-tag.el-tag--danger {
    border-color: transparent;
}
</style>
