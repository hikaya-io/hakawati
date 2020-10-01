<template>
  <div class="h-input">
  <el-form-item>
    <div
      v-if="label"
      slot="label"
      class='label'
    >
      {{ label }} <span class="required" v-if="required">*</span>
    </div>
    <el-input
      :placeholder="placeholder"
      v-model="inputValue"
      v-bind="$attrs"
      v-on="$listeners"
      :rows="rows"
      :type="type"
      :disabled="disabled"
    >
      <slot></slot>
    </el-input>
  </el-form-item>
  </div>
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
    },
    rows: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
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

.h-input {
  .el-form-item__label {
    padding-bottom: 0;
  }

  .label {
    color: $dark-body-grey;
    word-wrap: break-word;
  }

  .required {
    color: $red;
    margin-right: 2px;
  }

  .el-form--label-top .el-form-item__label {
  float: none;
  display: inline-block;
  text-align: left;
  padding: 0px 0px 0px 0px;
  }

  .el-input__inner:focus {
    border-color: $primary-color-sub;
  }

  .el-input.is-focus .el-input__inner {
      border-color: $light-body-grey;
  }

  .el-input.is-disabled .el-input__inner {
    background-color: $background-color;
    border-color: $background-color;
    color: $heading-grey;
    cursor: not-allowed;
  }

  .el-textarea__inner {
    font-family: $main-font-family;
    color: $dark-body-grey;
    padding-top: 10px;
    min-height: 33px;
    height: 62px;
  }
}

</style>
