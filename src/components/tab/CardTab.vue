<template>
  <el-tabs v-model="activeName" @tab-click="$emit('click')" type="card">
    <slot></slot>
  </el-tabs>
</template>

<script>
// import { action } from '@storybook/addon-actions'
export default {
  name: 'CardTab',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    click (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>

</style>>
