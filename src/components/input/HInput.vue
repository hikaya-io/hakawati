<template>
    <el-form
      ref="form"
      model="form"
      label-width="120px"
    >
      <el-row
        :gutter="20"
      >
        <el-col
          class="grid-content"
          :span="12"
        >
          <el-input
            :placeholder="placeholder"
            v-model="form.input"
          >
          <slot></slot>
          </el-input>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
export default {
  name: 'HInput',
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
        input: ''
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

.el-input.is-focus .el-input__inner {
    border-color: $light-body-grey;
}

</style>
