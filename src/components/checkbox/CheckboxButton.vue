<template>
    <el-checkbox-button
      :size="size"
    >
    {{ text }}
    </el-checkbox-button>
</template>

<script>
export default {
  name: 'CheckboxButton',
  props: {
    size: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

</style>
