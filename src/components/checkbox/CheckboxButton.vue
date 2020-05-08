<template>
    <el-checkbox-button
      :size="size"
    >
    </el-checkbox-button>
</template>

<script>
export default {
  name: 'CheckboxButton',
  props: {
    size: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

</style>
