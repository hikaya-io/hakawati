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

</style>
