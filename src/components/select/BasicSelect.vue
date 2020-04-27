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
  name: 'BasicSelect',
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

<style scoped lang="scss">
.el-select {
  font-family: "Lato", sans-serif;
  font-size: 16px;
}

.el-select-dropdown__item.selected {
    font-weight: 300;
}
</style>
