
<template>
  <el-tabs v-model="tabPosition" :tab-position="tabPosition" style="height: 200px;" @tab-click="$emit('click')">
    <slot></slot>
  </el-tabs>
</template>

<script>
// import { action } from '@storybook/addon-actions'
export default {
  name: 'VerticalTab',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeName: 'first',
      tabPosition: 'left'
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
