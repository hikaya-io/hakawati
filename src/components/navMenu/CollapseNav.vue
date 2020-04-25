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
        ></el-button>
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

<style scoped lang="scss">
  .el-menu {
    font-family: "Lato";

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
    width: 200px;
  }
</style>

