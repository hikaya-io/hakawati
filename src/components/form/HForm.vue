<template>
  <el-form
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'HForm',
  props: {
    model: {
      type: [String, Number, Boolean, Array, Object, Date, Function, Symbol],
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      default: 'top'
    },
    size: {
      type: String,
      default: 'medium'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-form--label-top .el-form-item__label {
  float: none;
  display: inline-block;
  text-align: left;
  padding: 0 0 0 0;
}

</style>
