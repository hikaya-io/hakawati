<template>
  <el-button @click="$emit('click')"
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

<style scoped lang="scss">
@import "../../styles/theme";

.el-button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: transparent;
}

.el-button--primary {
  background-color: $primary-color-sub;
}
</style>
