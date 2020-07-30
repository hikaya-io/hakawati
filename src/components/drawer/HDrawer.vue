<template>
  <el-drawer
    v-bind="$attrs"
    v-on="$listeners"
    :style="cssVars"
  >
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: 'HDrawer',
  props: {
    overlayColor: {
      type: String,
      default: 'rgba(255,255,255,0)'
    }
  },
  computed: {
    cssVars () {
      return {
        '--overlay-color': this.overlayColor
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-drawer.rtl {
    box-shadow: 0px 0px 17px rgba(115, 117, 129, 0.25);
    border-radius: 20px 0 0 20px;
}

.el-drawer.ltr {
    box-shadow: 0px 0px 17px rgba(115, 117, 129, 0.25);
    border-radius: 0 20px 20px 0;
}

.el-drawer__header {
    font-family: $main-font-family;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    color: $dark-body-grey;
    padding: 38px 38px 58px 38px;
    margin-bottom: none;
}

.el-drawer__body {
    font-family: $main-font-family;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    color: $dark-body-grey;
    padding: 0px 38px 58px 38px;
    max-height: 85%;
}

.el-drawer.ltr, .el-drawer.rtl {
    height: 85%;
    top: 12%;
    bottom: 0;
}

.el-drawer.rtl {
    -webkit-animation: rtl-drawer-out 0.5s;
    animation: rtl-drawer-out 0.5s;
   .el-drawer__open {
    -webkit-animation: rtl-drawer-in 0.5s 1ms;
    animation: rtl-drawer-in 0.5s 1ms;
    }
}

.el-drawer.ltr {
    -webkit-animation: ltr-drawer-out 0.5s;
    animation: ltr-drawer-out 0.5s;
    .el-drawer__open {
        -webkit-animation: ltr-drawer-in 0.5s 1ms;
        animation: ltr-drawer-in 0.5s 1ms;
    }
}

.el-drawer__container {
  background-color: var(--overlay-color);

  :focus {
    outline: none;
  }
}

.el-icon-close:before {
    color: $light-body-grey;
}

</style>
