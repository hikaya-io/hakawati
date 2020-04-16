<template>
  <el-button @click="$emit('click')" :size="size" :type="type" plain>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'PlainButton',
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
