<template>
  <el-button size="medium" :type="type" disabled>
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
    }
  }
}
</script>

<style scoped>

</style>>
