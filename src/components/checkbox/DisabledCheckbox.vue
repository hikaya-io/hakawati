<template>
  <el-checkbox @click="$emit('click')" :type="type" v-model="checked" disabled>
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: 'BasicCheckbox',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style>
  .el-checkbox__label {
    font-family: 'Lato',sans-serif;
    font-weight: 300;
  }

</style>
