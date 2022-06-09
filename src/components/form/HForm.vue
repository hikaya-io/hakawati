<template>
  <el-form
    ref="ruleForm"
    v-bind="$attrs"
    v-on="$listeners"
    class="h-form"
    :label-position="labelPosition"
    :label-width="labelWidth"
    :show-reset-button="showResetButton"
    :submit-label="submitLabel"
    :cancel-label="cancelLabel"
    :inline="inline"
  >
    <slot />
    <el-form-item class="form-btn-container">
      <h-button
        @click.native="submitForm('ruleForm')"
        :is-disabled="submitButtonDisabledInner"
        :label="submitLabel"
      />
      <h-button
        @click.native="handleCancel"
        :isPlain="true"
        :label="cancelLabel"
      />
      <h-button
        v-if="showResetButton"
        @click.native="resetForm('ruleForm')"
        :label="resetLabel"
        type="info"
      />
    </el-form-item>
  </el-form>
</template>

<script>
import HButton from '../button/HButton.vue'

export default {
  name: 'HForm',
  components: { HButton },
  props: {
    cancelLabel: {
      type: String,
      default: 'Cancel'
    },
    submitLabel: {
      type: String,
      default: 'Submit'
    },
    submitButtonDisabled: {
      type: Boolean,
      default: false
    },
    resetLabel: {
      type: String,
      default: 'Reset'
    },
    labelPosition: String,
    showResetButton: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: '120px'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      submitButtonDisabledInner: this.submitButtonDisabled
    }
  },
  watch: {
    submitButtonDisabled (val) {
      this.submitButtonDisabledInner = this.submitButtonDisabled
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('formIsValid')
        } else {
          this.$emit('formIsInvalid')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleCancel () {
      this.$emit('formCancelled')
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

  .form-btn-container {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
