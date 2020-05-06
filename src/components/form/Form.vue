<template>
  <el-form
    :model="model"
    :label-width="labelWidth"
    :labelPosition="labelPosition"
    :size="size"
    :disabled="disabled"
  >
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'HkForm',
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
