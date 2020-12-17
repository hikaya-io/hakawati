<template>
    <el-checkbox-button
      v-bind="$attrs"
      v-on="$listeners"
      :border="false"
    >
    {{ text }}
    </el-checkbox-button>
</template>

<script>
export default {
  name: 'HCheckbox',
  props: {
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
  background-color: transparent;
  color: $primary-color;
  border-color: $primary-color;
  -webkit-box-shadow: -1px 0 0 0 $primary-color;
}

.el-checkbox-button.is-checked:first-child .el-checkbox-button__inner {
  border-left-color: $primary-fill;
}

.el-checkbox__inner::after {
  color: $primary-fill;
}

.el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: $light-body-grey !important;
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  border-color: $primary-color !important;
}
</style>
