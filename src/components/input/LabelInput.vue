<template>
  <el-form
    ref="form"
    model="form"
    :label-position="labelPosition"
    label-width="120px"
  >
    <el-form-item id="label-input">
      <div
        v-if="label"
        slot="label"
        :class="['label', { vertical: labelPosition === 'top' }]"
      >
        {{ label }} <span class="required" v-if="required">*</span>
      </div>
      <el-input
        v-model="form.input"
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'LabelInput',
  props: {
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      default: 'top'
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        input: ''
      }
    }
  }
}
</script>

<style lang="scss">
#label-input {
  .el-form-item__label {
    padding-bottom: 0;
  }
  .label {
    color: #333333;
    word-wrap: break-word;
    &.vertical {
      padding: 0 0 0 15px;
    }
  }
  .required {
    color: #ff6633;
    margin-right: 2px;
  }
}
</style>
