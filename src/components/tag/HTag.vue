<template>
  <el-tag
    :type="type"
  >
    <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name: 'HTag',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-tag {
  border-radius: 20px;
  border-color: transparent;
}

.button-new-tag {
  border-radius: 20px;
}
</style>
