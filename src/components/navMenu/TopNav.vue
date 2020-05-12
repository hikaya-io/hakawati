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

.el-menu {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: $dark-body-grey;
}

.el-menu-item a{
  text-decoration: none;
}
</style>
