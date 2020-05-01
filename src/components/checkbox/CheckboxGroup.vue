<template>
  <el-checkbox-group v-model="checkList">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    checkList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
