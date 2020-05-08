<template>
  <el-button @click="$emit('click')"
    :size="size"
    :type="type"
  >
    <slot></slot>
  </el-button>
</template>

<script>
// import { action } from '@storybook/addon-actions'
export default {
  name: 'BasicButton',
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

<style scoped lang="scss">
@import "../../styles/theme";

.el-button {
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
