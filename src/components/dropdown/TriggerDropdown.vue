<template>
    <el-dropdown>
        <el-button @click="$emit('click')" size="small" type="primary">
          More options
        </el-button>
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
