
<template>
  <el-tabs
    v-model="activeName"
    :tab-position="tabPosition"
    style="height: 200px;"
    @tab-click="$emit('click')"
  >
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
    color: $primary-color;
    background: $primary-fill;
    background-color: $primary-fill;
    border-radius: 0px 40px 40px 0px;
}

.el-tabs__active-bar {
  background-color: transparent;
}

</style>>
