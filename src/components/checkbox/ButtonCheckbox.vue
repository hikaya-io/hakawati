<template>
  <el-checkbox-group @click="$emit('click')" :size="size" v-model="checkboxGroup">
    <el-checkbox-button v-for="item in dataArray" :label="item" :key="item">
      {{item}}</el-checkbox-button>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'ButtonCheckbox',
  props: {
    size: {
      type: String,
      default: ''
    },
    dataArray: {
      type: Array,
      default: () => []
    },
    checkboxGroup: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-checkbox-button {
  color: $dark-body-grey;
}

.el-checkbox-button__inner {
  border-color: $dark-body-grey;
}

.el-checkbox-button.is-checked {
  background-color: $primary-fill;
  color: $primary-color;
}

.el-checkbox-button.is-focus {
  border-color: $light-body-grey;
}
</style>
