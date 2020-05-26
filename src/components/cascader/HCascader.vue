<template>
  <el-cascader
    class="h-cascader"
    :options="options"
  />
</template>

<script>
export default {
  name: 'HCascader',
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

.h-cascader {
  .el-cascader .el-input .el-input__inner:focus {
      border-color: $dark-body-grey;
  }

  .el-cascader-menu {
    color: $dark-body-grey;
  }
  .el-cascader-menu__list {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 6px 6px;
    border-color: transparent;
  }
}
</style>
