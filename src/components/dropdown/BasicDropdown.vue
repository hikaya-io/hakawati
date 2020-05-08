<template>
  <el-dropdown>
    <slot name="title"></slot>
    <el-dropdown-menu slot="dropdown">
      <slot name="items"></slot>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'BasicDropdown'
}
</script>

<style lang="scss">
@import "../../styles/theme";

  .el-dropdown-link {
    cursor: pointer;
    color: $primary-color;
    font-family: $main-font-family;
  }

  .el-icon-arrow-down {
    font-size: 14px;
  }

</style>
