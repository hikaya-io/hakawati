<template>
  <el-color-picker
    v-bind="$attrs"
    v-on="$listeners"
  >
  </el-color-picker>
</template>

<script>
export default {
  name: 'HColorPicker'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-button.el-color-dropdown__link-btn {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.el-button.el-color-dropdown__btn {
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid $light-body-grey;
}
.el-color-dropdown__link-btn {
  padding: 0px;
}
</style>
