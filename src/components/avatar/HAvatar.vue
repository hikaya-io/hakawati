<template>
    <el-avatar
    @click="$emit('click')"
    :shape="shape"
    :size="size"
    :src="src"
    />
</template>

<script>
export default {
  name: 'HAvatar',
  props: {
    shape: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-avatar {
    background-color: $primary-fill;
    color: $primary-color;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    font-size: 14px;
}
</style>
