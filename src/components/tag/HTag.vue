<template>
  <el-tag
    :type="type"
  >
    <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name: 'HTag',
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

.el-tag {
  border-radius: 20px;
  border-color: transparent;
}

.button-new-tag {
  border-radius: 20px;
}

.removable-tag {
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
}
</style>
