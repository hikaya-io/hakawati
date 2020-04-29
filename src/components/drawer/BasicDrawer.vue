<template>
  <el-drawer
    :title="title"
    :with-header="withHeader"
    :visible.sync="drawerVisible"
    :direction="direction"
    :before-close="handleClose"
    :size="size"
    :show-close="showClose"
  >
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: 'BasicDrawer',
  props: {
    title: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'rtl'
    },
    handleClose: {
      type: String,
      default: 'rtl'
    },
    withHeader: {
      type: Boolean,
      default: true
    },
    drawerVisible: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.el-drawer__header{
    font-family: 'Lato';
    font-size: 35px;
    font-weight: bold;
    color:#333333;
}

.el-drawer__body{
    padding: 20px;
}
</style>
