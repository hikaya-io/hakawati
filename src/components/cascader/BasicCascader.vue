<template>
  <el-cascader
  :options="options">
  </el-cascader>
</template>

<script>
export default {
  name: 'BasicCascader',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-cascader .el-input .el-input__inner:focus {
    border-color: $dark-body-grey;
}

.el-cascader-menu {
  color: $dark-body-grey;
}

.el-cascader-menu__list {
  background: $background-color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
</style>
