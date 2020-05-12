<template>
  <el-button
    @click="$emit('click')"
    :size="size"
    :type="type"
    :icon="icon"
    round
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'HButton',
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
