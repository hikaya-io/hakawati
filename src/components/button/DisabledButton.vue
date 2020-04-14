<template>
  <el-button @click="$emit('click')" :size="size" :type="type" disabled>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'DisabledButton',
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

</style>>
