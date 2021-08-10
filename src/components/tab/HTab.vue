
<template>
  <div :class="className">
      <el-tabs
        v-bind="$attrs"
        v-on="$listeners"
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
    },
    cardTab: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      className: { 'vertical-card-tab': true }
    }
  },
  mounted () {
    if (this.basic) {
      this.className = { 'basic-tab': true }
    } else if (this.vertical) {
      this.className = { 'vertical-tab': true }
    } else if (this.cardTab) {
      this.className = { 'card-tab': true }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

::v-deep .el-tabs__item {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: $dark-body-grey;
  padding: 10px 5px 10px 20px;
  margin: 10px 10px 10px 0px;
}

::v-deep .vertical-card-tab {
  // tab styling
  ::v-deep .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
  }

  ::v-deep .el-tabs__item.is-active {
    font-weight: bold;
    color: $primary-color;
    background: $primary-fill;
    background-color: $primary-fill;
    border-radius: 0px 40px 40px 0px;
    margin: 10px 35px 0px 0px;
  }

  ::v-deep .el-tabs__active-bar {
    background-color: transparent;
  }

  ::v-deep .el-tabs__nav-wrap::after{
    background-color: transparent;
  }

  ::v-deep .el-tabs__header {
    border: none;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
    border-color: transparent;
    margin-right: 0px;
  }

  ::v-deep .el-tabs--left {
    overflow: visible;
  }

  ::v-deep .el-tabs--left .el-tabs__header.is-left {
    height: 100vh;
    width: 251px;
  }

  ::v-deep #tab-0.el-tabs__item.is-disabled{
    margin: 30px 20px 0px 0px;
    font-weight: bold;
    font-size: 22px;
    line-height: 26px;
    color: $dark-body-grey;
  }

  ::v-deep #tab-1.el-tabs__item.is-disabled{
    margin: 0px 20px 40px 0px;
    font-size: 16px;
    line-height: 19px;
    font-weight: normal;
    color: $dark-body-grey;
    }

  ::v-deep .box-card {
    width: 251px;
    height: 755px;
  }
}

::v-deep .basic-tab {
  ::v-deep .el-tabs__header {
    border: 2px solid $background-color;
    box-sizing: none;
    box-shadow: none;
    border-radius: 0px 20px 20px 0px;
    border-color: transparent;
  }
}

::v-deep .vertical-tab {
  ::v-deep .el-tabs__item.is-active {
    color: $primary-color;
    font-family: $main-font-family;
    padding: 10px 5px 10px 20px;
    margin: 10px 10px 10px 0px;
  }

  ::v-deep .el-tabs__active-bar {
    background-color: transparent;
  }
}

::v-deep .card-tab {
  ::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    background-color: $primary-fill;
    border-radius: 5px;
  }
  ::v-deep .el-tabs__item {
    padding: 10px 20px;
  }
  ::v-deep .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border: none;
  }
  ::v-deep .el-tabs--card > .el-tabs__header {
    border: none;
  }
  ::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item {
    border-left: none;
  }
  ::v-deep .vertical-card-tab .el-tabs__header {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
</style>
