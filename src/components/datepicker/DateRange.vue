<template>
  <div class="block">
    <el-date-picker
      v-model="daterange"
      type="daterange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  name: "DateRange",
  data() {
    return {
      daterange: "",
    };
  }
};
</script>

<style scoped>

</style>