<template>
  <el-button size="medium" :type="type">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>>
