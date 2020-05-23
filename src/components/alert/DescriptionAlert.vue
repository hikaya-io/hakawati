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

.el-alert__title.is-bold {
    font-weight: normal;
    font-size: 20px;
}

.el-alert .el-alert__description {
    font-size: 16px;
}

</style>
