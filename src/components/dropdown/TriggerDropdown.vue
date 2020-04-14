<template>
    <el-dropdown>
        <el-button @click="$emit('click')" :size="size" :type="type">
        </el-button>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-menu slot="dropdown">
            <slot></slot>
    </el-dropdown-menu>
  </el-dropdown-menu>
</el-dropdown>
</template>

<script>

export default {
  name: 'TriggerDropdown',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
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
