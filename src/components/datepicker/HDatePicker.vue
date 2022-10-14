<template>
  <el-date-picker
    type="date"
    v-bind="$attrs"
    v-on="$listeners"
    class="h-date-picker"
  />
</template>

<script>
export default {
  name: 'HDatePicker'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-date-picker {
  .el-picker-panel {
    background-color: $background-color;
  }
}
</style>
