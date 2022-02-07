<template>
  <div class="side-nav" :style="{height: height}">
    <transition>
      <div ref="navigation" :class="{navigation: true, collapsed: isCollapsed}">
        <slot></slot>
      </div>
    </transition>
    <transition name="button-move">
      <el-button
        v-bind:icon="isCollapsed ? 'el-icon-arrow-right button-arrow' : 'el-icon-arrow-left button-arrow'"
        size="mini"
        :class="{'toggle-button': true, collapsed: isCollapsed}"
        @click="toggleCollapse"
        circle>
      </el-button>
    </transition>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HSideNav',
  props: {
    height: {
      type: String,
      default: '95vh'
    }
  },
  computed: {
  },
  data () {
    return {
      isCollapsed: false
    }
  },
  methods: {
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/theme";

.side-nav {
  display: flex;
  flex-direction: row;
  height: 100%;

  .navigation {
    height: 100%;
    width: 300px;
    border-right: 1px solid $light-body-grey;

    &.collapsed {
      width: 20px;
    }
  }

  .toggle-button {
    position: absolute;
    height: 26px;
    width: 26px;
    top: 40px;
    left: 236px;

    &.collapsed {
      left: 20px;
    }
  }

  .content {
    width: 100%;
  }
}
</style>
