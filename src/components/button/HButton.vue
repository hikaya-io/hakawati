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

<style scoped lang="scss">
@import "../../styles/theme";

.el-button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: transparent;
  padding: 11px 33px;
}

</style>
