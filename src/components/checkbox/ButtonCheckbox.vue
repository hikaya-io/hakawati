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

<style>
.el-checkbox__label {
  font-family: "Lato", sans-serif;
  font-weight: 300;
}
</style>
