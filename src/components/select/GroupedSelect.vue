<template>
  <el-select
    v-model="value"
    :placeholder="placeholder"
    :disabled="disabled"
    @change="$emit('change', $event)"
  >
    <el-option-group v-for="group in options" :key="group.label" :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :disabled="item.disabled"
        :value="item.value"
      />
    </el-option-group>
  </el-select>
</template>

<script>
export default {
  name: 'GroupedSelect',
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

<style lang="scss" scoped>
@import "../../styles/theme";

::v-deep li.el-select-group__title {
    font-family: $main-font-family;
    font-size: 12px;
    font-weight: 600;
    font-style: normal;
    color: $heading-grey;
    margin: 10px 12px 0px 12px;
    padding-left: 8px;
    line-height: 14px;
    text-transform: uppercase;
    font-family: Lato;
}

::v-deep .el-select-dropdown__item.selected {
  color: $primary-color;
  font-style: normal !important;

  &:focus:active {
    color: $primary-color;
  }
}

::v-deep .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    color: $primary-color;
    background-color: transparent;
}

// removes section separator between select groups
.el-select-group__wrap:not(:last-of-type) {
  padding-bottom: 0;

  &::after {
      background: transparent;
  }
}
</style>
