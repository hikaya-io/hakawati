<template>
  <el-checkbox @click="$emit('click')"
    :type="type"
    disabled
  >
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: 'DisabledCheckbox',
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

</style>
