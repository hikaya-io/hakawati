<template>
  <el-drawer
    :title="title"
    :with-header="withHeader"
    :visible.sync="drawer"
    :direction="direction"
    :before-close="handleClose"
    :size="size"
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
    drawer: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
