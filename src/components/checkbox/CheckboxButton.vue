<template>
    <el-checkbox-button
      :size="size"
    />
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
