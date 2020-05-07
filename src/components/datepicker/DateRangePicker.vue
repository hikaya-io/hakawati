<template>
  <el-date-picker
    v-model="daterange"
    :type="type"
    :format="format"
    :range-separator="rangeSeparator"
    :start-placeholder="startDate"
    :end-placeholder="endDate"
  ></el-date-picker>
</template>

<script>
export default {
  name: 'DateRange',
  props: {
    type: {
      type: String,
      default: 'daterange'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    size: {
      type: String,
      default: ''
    },
    startDate: {
      type: String,
      default: ''
    },
    endDate: {
      type: String,
      default: ''
    },
    rangeSeparator: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      daterange: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-picker-panel {
  background-color: $background-color;
}

</style>
