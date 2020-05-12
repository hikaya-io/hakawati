<template>
    <el-alert
      :title="title"
      :type="type"
      show-icon
    />
</template>

<script>
export default {
  name: 'IconAlert',
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

</style>
