<template>
  <div :class="tagClass">
  <el-tag
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-tag>
  </div>
</template>

<script>
export default {
  name: 'HTag',
  props: {
    plain: Boolean
  },
  computed: {
    tagClass () {
      return !this.plain ? { 'h-tag': true } : null
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-tag {
  .el-tag {
    border-radius: 25px;
    border-color: transparent;
    text-align: center;
    padding: 0px 24px;
  }
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
