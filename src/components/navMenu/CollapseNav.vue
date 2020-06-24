<template>
  <div class="collapse-nav">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
    <div class="layer-heading">
      <h1 class="layer-heading--text" :class="isCollapse ? 'heading-collapse' : ''">Layers</h1>
    </div>
      <slot></slot>
      <transition name="button-move">
        <el-button
          v-bind:icon="isCollapse ? 'el-icon-arrow-right button-arrow' : 'el-icon-arrow-left button-arrow'"
          v-on:click="isCollapse = !isCollapse"
          size="mini"
          :class="!isCollapse ? 'btn-not-collapse' : ''"
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
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
  }
  .el-menu {
    font-family: $main-font-family;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: $dark-body-grey;
    padding: 10px;
    border-right: transparent;

      .el-button {
        position: absolute;
        transition: left 0.4s;
        top: 15px;
        z-index: 10;

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
      width: 250px;
  }
  &:hover {
  background: none !important;
  }

  .el-menu-item-group__title {
      padding: 0px 5px 0px 20px;
  }

  .el-menu-item.is-active {
    color: $primary-color;
    font-weight: bold;
    background-color: transparent;
  }

  .el-submenu__title {
    line-height: 50px;
    color: $dark-body-grey;
    font-weight: bold;
  }
  &.is-active {
    color: $primary-color;
    font-weight: bold;
  }
  &.is-opened {
    color: $primary-color;
    font-weight: bold;
  }

  .el-menu-item {
    line-height: 20px;
    color: $dark-body-grey;
  }
  .el-menu.el-menu--inline > li {
    padding: 0px 17px !important;
  }

  .el-menu-item:hover, .el-menu-item:focus {
      outline: none;
      background-color: transparent;
      font-weight: bold;
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
  .el-button.el-button--default.el-button--mini.is-circle{
    right: -48px;
    padding: 10px 15px;
    border-radius: 0 20px 20px 0;
  }
  .el-button.el-button--default.el-button--mini.is-circle.btn-not-collapse{
    right: -15px;
    padding: 10px;
    border-radius: 50%;
  }
  .el-icon-arrow-right.button-arrow{
    font-size: 1rem;
  }
  .el-icon-arrow-left.button-arrow{
    font-size: 1rem;
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

}
</style>
