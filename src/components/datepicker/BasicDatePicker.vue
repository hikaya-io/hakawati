<template>
  <el-date-picker
    v-model="selectedDate"
    :type="type"
    :size="size"
    :format="format"
    placeholder="Pick a day"
  ></el-date-picker>
</template>

<script>
export default {
  name: "BasicDatePicker",
  props: {
    type: {
      type: String,
      default: "date"
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
      selectedDate: ""
    };
  }
};
</script>