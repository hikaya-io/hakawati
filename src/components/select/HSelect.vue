<template>
  <el-select
    v-model="created"
    v-bind="$attrs"
    :disabled="disabled"
    :placeholder="placeholder"
    :clearable="clearable"
    :multiple="multiple"
    :collapse-tags="collapseTags && multiple"
    class="h-select"
    @change="checkForCreation"
  >
    <template v-if="grouped">
      <el-option-group
        v-for="(group, index) in options"
        :key="`id-${index}-${group.label}-${randomString(4)}`"
        :label="group.label"
      >
        <el-option
          v-for="(option, index) in group.options"
          :key="`id-${index}-${option.value}-${randomString(4)}`"
          :label="option.label"
          :disabled="option.disabled"
          :value="option.value"
        />
      </el-option-group>
    </template>
    <template v-else>
      <el-option
        v-for="(option, index) in options"
        :key="`id-${index}-${option.value}-${randomString(4)}`"
        :label="option.label"
        :value="option.value"
        :disabled="option.disabled"
      >
        <span class="left-data-span"> {{ option.label }} </span>
        <span v-if="option.extra_data" class="right-data-span">
          {{ option.extra_data }}
        </span>
      </el-option>
    </template>
  </el-select>
</template>

<script>
export default {
  name: 'HSelect',
  props: {
    values: { type: [String, Number, Array] },
    options: { type: Array },
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    placeholder: { type: String, default: 'Select an option' },
    grouped: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    collapseTags: { type: Boolean, default: false }
  },
  data () {
    return {
      created: []
    }
  },
  computed: {
    selectedValue: {
      get () {
        return this.values
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    multiple (val) {
      this.created = val ? [] : ''
    }
  },
  methods: {
    checkForCreation (value) {
      if (Array.isArray(value)) {
        const values = this.options.map((option) => option.value)
        for (const selectedValue of value) {
          if (!values.includes(selectedValue)) {
            if (!this.created.includes(selectedValue)) {
              this.$emit('on-create', selectedValue)
              this.created.push(selectedValue)
            }
          }
        }
      } else this.created = value

      this.$emit('change', value)
    },
    randomString (length) {
      return Math.round(
        Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
      )
        .toString(36)
        .slice(1)
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

.right-data-span {
  float: right;
  color: $light-body-grey;
  font-size: 14px;
  font-style: italic;
}

.left-data-span {
  float: left;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
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

.el-select-dropdown__item.is-disabled:hover {
  background-color: transparent;
  color: $light-body-grey;
  cursor: not-allowed;
}

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
  font-weight: normal;
  font-style: normal !important;

  &:focus:active {
    color: $primary-color;
  }
}

::v-deep .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
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
