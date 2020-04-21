<template>
  <el-checkbox-group @click="$emit('click')" :label="label" v-model="checkList">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    type: {
      type: String,
      default: ''
    },
    checkList: {
      type: Array,
      default: []
    }
  }
}
</script>

<style></style>
