<template>
  <el-input
    :placeholder="placeholder"
    v-model="inputValue"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-input>
</template>

<script>
export default {
  name: 'DisabledInput',
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
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
