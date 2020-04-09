<template>
    <el-checkbox-group @click="$emit('click')" :type="type" v-model="checkList">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      checkList: ['Option A', 'Selected and disabled']
    }
  }
}
</script>

<style>

</style>
