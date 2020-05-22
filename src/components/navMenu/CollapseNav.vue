<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
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

  .el-menu {
    font-family: $main-font-family;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: $dark-body-grey;
    padding: 10px 20px 20px 10px;

    .el-button {
      position: absolute;
      transition: left 0.4s;
      top: 15px;
      right: -15px;
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

.el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.el-menu:hover {
  background: none !important;
}

.el-menu-item.is-active {
    color: $primary-color;
    background-color: transparent;
}

.el-submenu__title {
  line-height: 47px;
}

.el-menu-item {
  line-height: 50px;
}

.el-menu-item:hover, .el-menu-item:focus {
    outline: none;
    background-color: transparent;
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

</style>
