<template>
  <el-button @click="$emit('click')" size="medium" :type="type" round>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'RoundButton',
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
