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
  data() {
    return {
      value: ''
    };
  },
  props: {
    options: {
      type: Array,
      default: []
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
};
</script>

<style scoped lang="scss">
.el-select {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
}

li.el-select-group__title {
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #848c9c;
    margin: 0px 12px;
    padding-left: 8px;
    font-weight: 600;
    /* border-bottom: 1px solid #5a5f6955; */
}

.el-select-group .el-select-dropdown__item {
    font-weight: 300;
}
</style>
