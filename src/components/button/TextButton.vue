<template>
  <el-button :type="type" v-bind="$attrs" v-on="$listeners">
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
