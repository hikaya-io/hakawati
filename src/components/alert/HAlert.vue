<template>
  <el-alert
    :title="title"
    :type="type"
  />
</template>

<script>
export default {
  name: 'HAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-alert__title {
  font-family: $main-font-family;
}

.el-alert--success {
    background-color: $green-fill;
    color: $green;
    border-color: $green;
}

</style>
