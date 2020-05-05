<template>
  <el-button @click="$emit('click')" :size="size" :type="type" plain>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'PlainButton',
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

<style lang="scss">
@import "../../styles/theme";

.el-button--small {
  border-color: $background-color;
  border-radius: 25px;
}

.el-button--primary.is-plain {
  background: $primary-fill;
  border-color: $primary-fill;
  border-radius: 25px;
}

.el-button--success.is-plain {
  background: $green-fill;
  border-color: $green-fill;
  border-radius: 25px;
}

.el-button--info.is-plain {
  background: $background-color;
  border-color: $background-color;
  border-radius: 25px;
}

.el-button--warning.is-plain {
  background: $warning-fill;
  border-color: $warning-fill;
  border-radius: 25px;
}

.el-button--danger.is-plain {
  background: $danger-fill;
  border-color: $danger-fill;
  border-radius: 25px;
}

.el-button--text {
    border-color: transparent;
}

</style>
