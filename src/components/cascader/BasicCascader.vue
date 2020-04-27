<template>
  <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"
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
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  },
  data () {
    return {
      value: []
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
