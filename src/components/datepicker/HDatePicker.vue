<template>
  <el-date-picker
    v-model="selectedDate"
    :type="type"
    :size="size"
    :format="format"
    :placeholder="placeholder"
    class="h-date-picker"
  />
</template>

<script>
export default {
  name: 'HDatePicker',
  props: {
    type: {
      type: String,
      default: 'date'
    },
    size: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedDate: ''
    }
  }
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
