<template>
  <el-button size="medium" :type="type" :icon="icon" circle>
    <slot></slot>
  </el-button>
    <!-- <el-row>
        <el-button size="medium" icon="el-icon-search" circle></el-button>
        <el-button size="medium" type="primary" icon="el-icon-edit" circle></el-button>
        <el-button size="medium" type="success" icon="el-icon-check" circle></el-button>
        <el-button size="medium" type="info" icon="el-icon-message" circle></el-button>
        <el-button size="medium" type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button size="medium" type="danger" icon="el-icon-delete" circle></el-button>
    </el-row> -->
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
