<template>
  <el-checkbox @click="$emit('click')">
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: 'BasicCheckbox'
}
</script>

<style>
  .el-checkbox__label {
    font-family: 'Lato',sans-serif;
    font-weight: 300;
  }

</style>
