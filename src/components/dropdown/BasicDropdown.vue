<template>
    <el-dropdown>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-menu slot="dropdown">
            <slot></slot>
    </el-dropdown-menu>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script>
export default {
  name: 'BasicDropdown'
}
</script>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #25ced1;
    font-family: 'Lato', sans-serif;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>
