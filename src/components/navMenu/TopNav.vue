<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :index="index"
  >
  <slot></slot>
  </el-menu>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    index: {
      type: String,
      default: ''
    },
    activeIndex: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-menu-item {
  font-family: $main-font-family;
  font-style: normal;
  font-size: 18px;
  color: $dark-body-grey;
}

.el-submenu__title {
  font-family: $main-font-family;
  font-style: normal;
  font-size: 18px;
  color: $dark-body-grey;
}

.el-menu--popup {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  border-color: transparent;
}

// style selected submenu
.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
    color: $primary-color;
}
</style>
