<template>
  <el-select
    v-model="selectedValue"
    v-bind="$attrs"
    v-on="$listeners"
    no-match-text="No matching data"
    no-data-text="No Data"
    @change="$emit('change', $event)"
    class="h-select"
  >
    <template v-for="item in options">
      <el-option
        v-if="'extraAttrs' in item"
        :key="item.key"
        :label="item.label"
        :disabled="item.disabled"
        :value="item.value"
        v-bind="item.extraAttrs"
      >
        <span class="left-data-span">{{ item.label }}</span>
        <span v-if="item.extra_data" class="right-data-span">{{ item.extra_data }}</span>
      </el-option>
      <el-option
        v-else
        :key="item.key"
        :label="item.label"
        :disabled="item.disabled"
        :value="item.value"
      />
    </template>
  </el-select>
</template>

<script>
export default {
  name: 'HSelect',
  props: {
    value: {
      type: [String, Number, Array],
      default: null
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedValue: {
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

<style lang="scss" scoped>
@import "../../styles/theme";

.h-select ::v-deep {
  .el-select .el-input.is-focus .el-input__inner {
    border-color: $light-body-grey;
  }

  .el-select .el-input__inner:focus {
    border-color: $light-body-grey;
  }

  .el-select-dropdown__list {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 6px 6px;
    border-color: transparent;
    color: $dark-body-grey;
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
  .el-select__tags {
    overflow: hidden;
  }
}

.right-data-span{
  float: right;
  color: $light-body-grey;
  font-size: 14px;
  font-style: italic;
}

.left-data-span{
  float: left;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.el-select-dropdown__item.selected {
  font-weight: normal;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item {
  padding-right: 40px;
}

.el-select-dropdown.is-multiple .el-select-dropdown__item.selected {
  color: $primary-color;
  background-color: transparent;

  &::after {
    right: 14px;
  }
}

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  color: $heading-grey;
  background-color: transparent;
}

.el-select-dropdown__item.is-disabled:hover {
  background-color: transparent;
  color: $light-body-grey;
  cursor: not-allowed;
}

</style>
