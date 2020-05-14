<template>
  <el-input
    :placeholder="placeholder"
    v-model="inputValue"
  >
    <slot></slot>
  </el-input>
</template>

<script>
export default {
  name: 'HInput',
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

.el-input__inner:focus {
    border-color: $primary-color-sub;
}

.el-input.is-focus .el-input__inner {
    border-color: $light-body-grey;
}

.el-input.is-disabled .el-input__inner {
    background-color: $background-color;
    border-color: $light-body-grey;
    color: $background-color;
    cursor: not-allowed;
}

</style>
