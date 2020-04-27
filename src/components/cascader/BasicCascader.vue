<template>
  <el-cascader
    :options="options"
  >
  </el-cascader>
</template>

<script>
export default {
  name: 'BasicCascader',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.el-cascader{
    font-family: 'Lato';
}
.el-cascader-node.is-active{
    font-weight: normal;
}
.el-cascader-node.in-active-path{
    font-weight: normal;
}
</style>
