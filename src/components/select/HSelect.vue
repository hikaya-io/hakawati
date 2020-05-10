<template>
  <el-select
    v-model="value"
    :placeholder="placeholder"
    :disabled="disabled"
    @change="$emit('change', $event)"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :disabled="item.disabled"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: 'HSelect',
  data () {
    return {
      value: ''
    }
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Select an option'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-select .el-input.is-focus .el-input__inner {
    border-color: $light-body-grey;
}

.el-select .el-input__inner:focus {
    border-color: $light-body-grey;
}

.el-select-dropdown__list {
  background: $background-color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 6px 6px;
  color: $dark-body-grey;
}

.el-select-dropdown__item.is-disabled:hover{
  background-color: transparent;
  color: #C0C4CC;
  cursor: not-allowed;
}

</style>
