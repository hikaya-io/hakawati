<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
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
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu {
  font-family: "Lato";
}
</style>
