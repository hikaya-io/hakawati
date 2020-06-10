
<template>
  <div>
      <el-tabs
        v-bind="$attrs"
        v-on="$listeners"
        :class="className"
      >
          <slot></slot>
      </el-tabs>
  </div>
</template>

<script>
// import { action } from '@storybook/addon-actions'

export default {
  name: 'HTab',
  props: {
    basic: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      className: { 'h-tab': true }
    }
  },
  created () {
    if (this.basic) {
      this.className = { 'basic-tab': true }
    } else if (this.vertical) {
      this.className = { 'vertical-tab': true }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

  .el-tabs__item {
    font-family: $main-font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: $dark-body-grey;
    padding: 10px 5px 10px 20px;
    margin: 10px 10px 10px 0px;
  }

.h-tab {
  // tab styling
  .el-tabs--left .el-tabs__item.is-left{
    text-align: left;
  }

  .el-tabs__item.is-active {
    color: $primary-color;
    background: $primary-fill;
    background-color: $primary-fill;
    border-radius: 0px 40px 40px 0px;
    margin: 0px 35px 0px 0;
  }

  .el-tabs__active-bar {
    background-color: transparent;
  }

  .el-tabs__nav-wrap::after{
    background-color: transparent;
  }

  .el-tabs__header {
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
    border-color: transparent;
    margin-right: 0px;
  }

  .el-tabs--left {
    overflow: visible;
  }

  .el-tabs--left .el-tabs__header.is-left {
    height: 100vh;
    width: 251px;
  }

  #tab-0.el-tabs__item.is-disabled{
    margin: 40px 20px 0px 0px;
    font-size: 22px;
    color: $dark-body-grey;
  }

  #tab-1.el-tabs__item.is-disabled{
    margin: 0px 20px 40px 0px;
    font-size: 16px;
    color: $dark-body-grey;
    }

  .box-card {
    width: 251px;
    height: 755px;
  }
}

.basic-tab {
  .el-tabs__header {
    border: 2px solid $background-color;
    box-sizing: none;
    box-shadow: none;
    border-radius: 0px 20px 20px 0px;
    border-color: transparent;
  }
}

.vertical-tab {
  .el-tabs__item.is-active {
    color: $primary-color;
    font-family: $main-font-family;
    padding: 10px 5px 10px 20px;
    margin: 10px 10px 10px 0px;
  }

  .el-tabs__active-bar {
    background-color: transparent;
  }
}
</style>
