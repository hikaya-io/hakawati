<template>
  <div class="collapse-nav">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <div class="layer-heading">
        <h3 class="layer-heading--text" :class="isCollapse ? 'heading-collapse' : ''"><slot name="header"></slot></h3>
      </div>
      <div class="layer-content">
        <slot></slot>
      </div>
      <transition name="button-move">
        <el-button
          v-bind:icon="isCollapse ? 'el-icon-arrow-right button-arrow' : 'el-icon-arrow-left button-arrow'"
          v-on:click="isCollapse = !isCollapse"
          size="mini"
          :class="{'btn-not-collapse': !isCollapse, 'collapse-toggle': true}"
          circle
        >
        </el-button>
      </transition>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'CollapseNav',
  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    borderRadius: {
      type: String,
      default: '20px'
    }
  },
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.collapse-nav {

  .el-menu-vertical-demo {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  .el-menu {
    font-family: $main-font-family;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: $dark-body-grey;
    padding: 0.5rem 0.5rem 0.5rem 1.05rem;
    border-right: transparent;

      .collapse-toggle {
        position: absolute;
        transition: left 0.4s;
        top: 90px;
        z-index: 10;
        box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25), inset -4px 6px 2px -8px rgba(0,0,0,0.25);

      .button-arrow {
        transition-duration: 0.5s;
        display: inline-block;
      }

      .button-arrow-rotate {
        transform: rotate(180deg) !important;
      }
    }
  }
  .el-menu--inline {
    padding: 0px 0px 5px 5px;
  }

  .el-menu:not(.el-menu--collapse) {
      width: 350px;
  }
  &:hover {
  background: none !important;
  }

  .el-menu-item-group__title {
      padding: 0px 5px 0px 20px;
  }

  .el-menu-item.is-active {
    color: $primary-color;
    font-weight: normal;
    background-color: transparent;
  }

  .el-submenu__title {
    line-height: 50px;
    color: $dark-body-grey;
    font-weight: normal;
  }
  &.is-active {
    color: $primary-color;
    font-weight: normal;
  }
  &.is-opened {
    color: $primary-color;
    font-weight: normal;
  }

  .el-menu-item {
    line-height: 20px;
    height: 2rem;
    color: $dark-body-grey;
  }
  .el-menu.el-menu--inline > li {
    padding: 0px 17px !important;
  }

  .el-menu-item:hover, .el-menu-item:focus {
      outline: none;
      background-color: transparent;
      font-weight: normal;
  }

  .el-menu--vertical .el-menu-item:not(.is-disabled):hover {
      outline: none;
      color: $primary-color;
      text-align: center;
      background-color: transparent;
  }

  .el-submenu__title:hover {
    background-color: transparent;
  }
  .el-menu--collapse{
    width: 0;
    padding: 0;
  }
  .el-menu-vertical-demo.el-menu{
    height: 95vh;
    right: 10px;
  }
  .collapse-toggle.el-button--default.el-button--mini.is-circle{
    right: -25px;
    padding: 10px;
    padding-left: 5px !important;
    height: 65px;
    width: 25px;
    border-radius: 0 20px 20px 0;
  }
  .collapse-toggle.el-button--default.el-button--mini.is-circle.btn-not-collapse{
    right: -25px;
    padding: 10px;
    padding-left: 5px !important;
    height: 65px;
    width: 25px;
    border-radius: 0 20px 20px 0;
  }
  .el-icon-arrow-right.button-arrow{
    font-size: 1rem;
    font-weight: 600;
  }
  .el-icon-arrow-left.button-arrow{
    font-size: 1rem;
    font-weight: 600;
  }
  .layer-heading {
    border-bottom: solid 1px $primary-background-color;
    &--text{
      margin: 2rem 0 2rem 1rem;
    }
  }

  .heading-collapse{
    color: transparent;
  }
  .layer-content{
    overflow-y: scroll;
    height: 85vh;
  }
  .el-checkbox__label, .table-list{
    width: 290px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.el-tooltip__popper.is-dark{
  width: 21rem;
}
</style>
