
<template>
  <el-tabs v-model="activeName" :tab-position="tabPosition" style="height: 200px;" @tab-click="$emit('click')">
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

<style scoped lang="scss">
@import "../../styles/theme";

.el-tabs__item.is-active {
    color: #3333FF;
    background: #F0F0FF;
    background-color: rgb(240, 240, 255);
    border-radius: 0px 40px 40px 0px;
}

.el-tabs__active-bar {
  background-color: transparent;
}

.el-tabs__nav-wrap::after {
//   background: #FFFFFF;
// /* Background Colour */
//   border: 2px solid #F4F5FC;
//   box-sizing: border-box;
//   box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 0px 20px 20px 0px;
}

</style>>
