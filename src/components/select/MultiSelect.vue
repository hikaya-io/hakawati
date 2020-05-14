<template>
  <el-select
    v-model="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :collapse-tags="collapseTags"
    multiple
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
  name: 'MultiSelect',
  data () {
    return {
      value: []
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
    },
    collapseTags: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
    color: $primary-color;
    background-color: transparent;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
    color: $primary-color;
    background-color: transparent;
}

// style selected options
.el-icon-close:before {
    background-color: $primary-fill;
    color: $heading-grey;
}

.el-tag.el-tag--info {
    background-color: $primary-fill;
    border-color: transparent;
    color: $primary-color;
}

</style>
