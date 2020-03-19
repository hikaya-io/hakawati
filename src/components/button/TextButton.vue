<template>
  <el-button :type="type">
    <slot></slot>
  </el-button>
    <!-- <el-row>
        <el-button type="text">Text Button</el-button>
        <el-button type="text" disabled>Text Button</el-button>
    </el-row> -->
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
