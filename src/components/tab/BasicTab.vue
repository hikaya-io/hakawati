<template>
  <el-tabs
    v-model="activeName"
    @tab-click="$emit('click')"
  >
    <slot></slot>
  </el-tabs>
</template>

<script>
// import { action } from '@storybook/addon-actions'
export default {
  name: 'BasicTab',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
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

<style lang="scss">
@import "../../styles/theme";

</style>>
