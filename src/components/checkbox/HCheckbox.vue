<template>
  <div>
    <el-checkbox
      v-if="type === 'basic'"
      class="basic-checkbox body-reg"
      v-model="checked"
      v-bind="$attrs"
      v-on="$listeners"
    >
      {{ label }}
    </el-checkbox>
    <el-checkbox-button
      v-else-if="type === 'button'"
      class="button-pill body-reg plain-pill"
      v-model="checked"
      v-bind="$attrs"
      v-on="$listeners"
      :true-label="label"
    >
      {{ label }}
    </el-checkbox-button>
    <el-checkbox-group
      v-else-if="type === 'grouped'"
      v-model="checkList"
      v-bind="$attrs"
      v-on="$listeners"
      :disabled="disabled"
      class="basic-checkbox body-reg"
    >
      <el-checkbox
        v-for="{ label, disabled } in options"
        :label="label"
        :key="label"
        :disabled="disabled"
      />
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'HCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'basic'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      checked: false,
      checkList: [],
      buttonStyle: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

::v-deep .basic-checkbox {
  .el-checkbox__inner {
    color: $dark-body-grey;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    border-color: $primary-color;
    background-color: $primary-fill;
  }

  .el-checkbox__inner::after {
    border-color: $primary-color;
  }
}

::v-deep .el-checkbox__input.is-focus .el-checkbox__inner {
  border-color: $light-body-grey;
}

::v-deep .el-checkbox-button:first-child .el-checkbox-button__inner {
  border-color: transparent;
  border-left: none;
}

</style>
