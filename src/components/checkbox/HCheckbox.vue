<template>
  <el-checkbox-button
    v-bind="$attrs"
    v-on="$listeners"
    :border="false"
    :true-label="text"
    :class="checkboxStyle"
    false-label=""
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
    },
    plainCheckbox: {
      type: Boolean,
      default: false
    },
    primaryCheckbox: {
      type: Boolean,
      default: false
    },
    secondaryCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      checkboxStyle: {}
    }
  },
  created () {
    if (this.plainCheckbox) {
      this.checkboxStyle = { 'button-pill': true, 'body-reg': true, 'plain-pill': true }
    }
    if (this.primaryCheckbox) {
      this.checkboxStyle = { 'button-pill': true, 'body-reg': true, 'primary-pill': true }
    }
    if (this.secondaryCheckbox) {
      this.checkboxStyle = { 'button-pill': true, 'body-reg': true, 'secondary-pill': true }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-checkbox-button:first-child .el-checkbox-button__inner {
  border-color: transparent;
  border-left-color: $primary-fill;
}

.el-checkbox-button {
  color: $dark-body-grey;

  &.is-focus {
    border-color: $light-body-grey;
  }
}

.el-checkbox-button.is-focus .el-checkbox-button__inner {
  border-color: transparent;
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
