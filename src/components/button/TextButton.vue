<template>
  <el-button :type="type" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'TextButton',
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
