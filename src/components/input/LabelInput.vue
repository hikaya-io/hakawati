<template>
  <el-form-item id="label-input">
    <div
      v-if="label"
      slot="label"
      class='label'
    >
      {{ label }} <span class="required" v-if="required">*</span>
    </div>
    <el-input
      v-model="labelInputValue"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'LabelInput',
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
    label: {
      type: String,
      default: ''
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
  computed: {
    labelInputValue: {
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

#label-input {
  .el-form-item__label {
    padding-bottom: 0;
  }
  .label {
    color: #333333;
    word-wrap: break-word;
  }
  .required {
    color: $red;
    margin-right: 2px;
  }
}
</style>
