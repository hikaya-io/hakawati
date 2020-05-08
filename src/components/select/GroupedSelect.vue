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

<style lang="scss">
@import "../../styles/theme";

.el-select {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
}

li.el-select-group__title {
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: bold;
    color: $light-body-grey;
    margin: 0px 12px;
    padding-left: 8px;
}

.el-select-dropdown__item {
  color: $dark-body-grey;
}

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    color: $primary-color;
    background-color: transparent;
}

// removes section separator between select groups
.el-select-group__wrap:not(:last-of-type)::after {
    background: transparent;
}
</style>
