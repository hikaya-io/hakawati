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

<style scoped lang="scss">
.el-menu {
  font-family: "Lato";
}
.el-menu-item a{
  text-decoration: none;
}
</style>
