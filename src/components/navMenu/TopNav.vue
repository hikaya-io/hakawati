<template>
  <div class="top-nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :index="index"
    >
    <slot></slot>
    </el-menu>
  </div>
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

.top-nav {
    // style nav bar and border
  .el-menu-item {
    font-family: $main-font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: $heading-grey;
    padding: 0px 25px;
    margin-top: 5px;
    height: 50px;
    line-height: 50px;
    border-radius: 30px;
  }

  .el-menu--horizontal > .el-submenu .el-submenu__title {
    font-size: 16px;
    color: $heading-grey;
    border-radius: 30px;
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

  .el-menu.el-menu--horizontal {
      border-bottom: transparent;
      padding: 10px 20px 10px 20px;
      vertical-align: text-bottom;
  }

  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    border-bottom: transparent;
    color: $primary-color;
    background-color: $primary-fill;
    border-radius: 30px;
    text-align: center;
    padding: 0px 25px;
    margin-top: 5px;
    height: 50px;
    line-height: 50px;
  }

  // style selected tab
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      border-radius: 30px;
      text-align: center;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    border-radius: 30px;
    text-align: center;
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: transparent;
    color: $primary-color;
    background-color: $primary-fill;
    text-align: center;
    border-radius: 30px;
    padding: 0px 25px;
    margin-top: 5px;
    height: 50px;
    line-height: 50px;
  }
}

.el-menu--horizontal > .el-menu-item {
  margin-left: 25px;
  margin-right: 25px;
}

// style selected tab
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: none;
    color: $primary-color;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    color: $primary-color;
    background-color: $primary-fill;
}

.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: transparent;
    color: $primary-color;
    background-color: $primary-fill;
}

</style>
