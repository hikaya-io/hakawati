<template>
    <el-form ref="form" model="form" label-width="120px">
        <el-row :gutter="20">
            <el-col class="grid-content" :span="12">
                <div style="margin: 20px 0;"></div>
                <el-input
                  type="textarea"
                  :rows="4"
                  :placeholder="placeholder"
                  v-model="form.textarea"
                  v-bind="$attrs"
                  v-on="$listeners"
                >
                        <slot></slot>
                </el-input>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        textarea: ''
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
