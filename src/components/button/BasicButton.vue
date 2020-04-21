<template>
  <el-button @click="$emit('click')" :size="size" :type="type">
    <slot></slot>
  </el-button>
</template>

<script>
// import { action } from '@storybook/addon-actions'
export default {
  name: 'BasicButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
