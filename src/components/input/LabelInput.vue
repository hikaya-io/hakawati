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
      v-model="form.input"
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
