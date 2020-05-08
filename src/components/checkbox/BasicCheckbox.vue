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

<style lang="scss">
@import "../../styles/theme";

</style>
