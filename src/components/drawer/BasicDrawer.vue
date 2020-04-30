<template>
  <el-drawer
    :title="title"
    :with-header="withHeader"
    :visible.sync="_drawer"
    :direction="direction"
    :before-close="handleClose"
    :size="size"
    :show-close="showClose"
    :wrapperClosable="wrapperClosable"
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
      type: Function
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
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      _drawer: false
    }
  },
  watch: {
    drawerVisible (newValue, oldValue) {
      this._drawer = newValue
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
