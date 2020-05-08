<template>
  <el-alert
    :title="title"
    :type="type"
    :description="description"
  />
</template>

<script>
export default {
  name: 'DescriptionAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">

</style>
