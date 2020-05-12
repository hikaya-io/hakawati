
<template>
<el-card class="box-card">
        <div slot="header">
            <slot name="title">Workspace</slot>
        </div>
        <el-tabs
          v-model="activeName"
          :title="title"
          :tab-position="tabPosition"
          @tab-click="$emit('click')"
        >
            <slot></slot>
        </el-tabs>
    </el-card>
</template>

<script>
// import { action } from '@storybook/addon-actions'

export default {
  name: 'HTab',
  props: {
    title: {
      type: String,
      default: ''
    },
    tabPosition: {
      type: String,
      default: ''
    },
    activeName: {
      type: String,
      default: ''
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

// tab styling
.el-tabs_item {
    font-family: $main-font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: $dark-body-grey;
}

.el-tabs--left .el-tabs__item.is-left{
  text-align: left;
}

.el-tabs__item.is-active {
    color: $primary-color;
    background: $primary-fill;
    background-color: $primary-fill;
    border-radius: 0px 40px 40px 0px;
}

.el-tabs__active-bar {
  background-color: transparent;
}

.el-tabs__nav-wrap::after{
  background-color: transparent;
}

// card styling
  // .el-card.is-always-shadow {
  //   border: 2px solid #F4F5FC;
  //   box-sizing: border-box;
  //   box-shadow: inset 0px 3px 3px rgba(50, 50, 50, 0.25);
  //   border-radius: 0px 20px 20px 0px;
  // }

.el-card.is-always-shadow {
  border: 2px solid #F4F5FC;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 20px 20px 0px;
  border-color: transparent;
}

  .el-card__body {
    padding: 0px 30px 10px 0px;
}

  .el-card__header {
    padding: 40px 25px 40px 25px;
    border-bottom: none;
}

  .box-card {
    width: 251px;
    height: 755px;
  }

</style>>
