<template>
  <el-date-picker
    v-model="daterange"
    :type="type"
    :format="format"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
  ></el-date-picker>
</template>

<script>
export default {
  name: "DateRange",
  props: {
    type: {
      type: String,
      default: "daterange"
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    },
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      daterange: ""
    };
  }
};
</script>

<style scoped>
</style>