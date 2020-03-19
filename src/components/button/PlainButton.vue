<template>
  <el-button size="medium" :type="type" plain>
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
    }
  }
}
</script>

<style scoped>

</style>
