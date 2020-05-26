<template>
  <el-checkbox
    class="basic-checkbox"
    v-bind="$attrs"
    v-on="$listeners"
  >
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

.basic-checkbox {
  .el-checkbox__inner {
  color: $dark-body-grey;
  }
}
</style>
