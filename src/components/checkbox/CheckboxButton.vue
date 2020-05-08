<template>
    <el-checkbox-button
      :size="size"
    >
    {{ text }}
    </el-checkbox-button>
</template>

<script>
export default {
  name: 'CheckboxButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-checkbox-button {
  color: $dark-body-grey;
}
.el-checkbox-button.is-focus {
  border-color: $light-body-grey;
}
.el-checkbox-button.is-checked .el-checkbox-button__inner {
    background-color: $primary-fill;
    color: $primary-color;
    border-color: $primary-fill;
    -webkit-box-shadow: -1px 0 0 0 #8585ff;
}
</style>
