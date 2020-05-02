<template>
  <el-form
    ref="form"
    model="form"
    :label-position="labelPosition"
    label-width="120px"
  >
    <el-form-item>
      <span v-if="label" slot="label" class="label"
        >{{ label }} <span class="required" v-if="required">*</span></span
      >
      <el-row :gutter="20">
        <el-col class="grid-content" :span="12">
          <el-input :placeholder="placeholder" v-model="form.input" :disabled="disabled"> </el-input>
        </el-col>
      </el-row>
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

<style scoped>
.label {
  word-wrap: break-word;
}
.required {
  color: red;
  margin-right: 2px;
}
</style>
