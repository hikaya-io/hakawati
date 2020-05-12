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
  name: 'TriggerDropdown'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-icon-arrow-down {
  font-size: 14px;
}

.el-dropdown {
  border-color: transparent;
}
</style>
