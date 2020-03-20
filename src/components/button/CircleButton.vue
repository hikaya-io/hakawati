<template>
  <el-button @click="$emit('click')" size="medium" :type="type" :icon="icon" circle>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
