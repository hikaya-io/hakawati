<template>
  <el-form
    ref="HForm"
    v-bind="$attrs"
    v-on="$listeners"
    class="h-form"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :inline="inline"
  >
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'HForm',
  props: {
    labelPosition: String,
    labelWidth: {
      type: String,
      default: '120px'
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

.h-form ::v-deep {
  &.el-form--label-top .el-form-item__label {
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 0 0;
  }

  &.el-input.is-disabled .el-input__inner {
    background-color: $background-color;
  }
}

</style>
