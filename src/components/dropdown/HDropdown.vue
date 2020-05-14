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
  name: 'HDropdown'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-dropdown-menu {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  border-color: transparent;
}

.el-dropdown-link {
  cursor: pointer;
  color: $primary-color;
  font-family: $main-font-family;
}

.el-icon-arrow-down {
  font-size: 14px;
}

</style>
