<template>
  <el-button @click="$emit('click')" :size="size" :type="type" round>
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
    },
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

.el-buttton.is-round {
    border-radius: 25px;
}

</style>
