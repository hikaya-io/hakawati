<template>
  <el-button
    @click="$emit('click')"
    :size="size"
    :type="type"
    :icon="icon"
    circle
  >
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
    size: {
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

<style lang="scss">
@import "../../styles/theme";

</style>
