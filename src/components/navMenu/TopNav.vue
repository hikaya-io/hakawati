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
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: $dark-body-grey;
}

.el-submenu__title {
  font-family: $main-font-family;
  font-style: normal;
  font-size: 16px;
  color: $dark-body-grey;
}

// style selected submenu
.el-menu--popup {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  border-color: transparent;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
    color: $primary-color;
}

.el-menu--horizontal > .el-menu-item {
  margin-left: 25px;
  margin-right: 25px;
}

// style nav bar and border
.el-menu {
  margin-top: 10px;
}

.el-menu.el-menu--horizontal {
    border-bottom: solid 1px $background-color;
    padding-bottom: 10px;
}

// style selected tab
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: none;
    color: $primary-color;
    border-radius: 30px;
    text-align: center;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    color: $primary-color;
    background-color: $primary-fill;
    border-radius: 30px;
    text-align: center;
}

.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: transparent;
    color: $primary-color;
    background-color: $primary-fill;
    text-align: center;
    border-radius: 30px;
}
</style>
