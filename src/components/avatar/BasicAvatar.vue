<template>
    <el-avatar @click="$emit('click')" :shape="shape" :size="size" :src="src">
    </el-avatar>
</template>

<script>
export default {
  name: 'BasicAvatar',
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
    background-color: $primary-color-sub;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
}

</style>
