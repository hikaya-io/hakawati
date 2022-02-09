<template>
  <div class="side-nav" :style="{height: height}">
    <transition>
      <div ref="navigation" :class="{navigation: true, collapsed: isCollapsed}">
        <div v-if="!isCollapsed" class="top">
          <slot name="nav-top"></slot>
        </div>
        <div v-if="!isCollapsed" class="bottom">
          <slot name="nav-bottom"></slot>
        </div>
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
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    min-width: 200px;
    border-right: 1px solid $light-body-grey;
    transition: width 0.5s;

    &.collapsed {
      width: 2%;
      min-width: 2%;
    }

    .top {
      height: 100%;
      max-height: calc(100% - 140px);
      overflow-y: scroll;
    }

    .bottom {
      margin-top: auto;
      border-top: 1px solid $light-body-grey;
      width: 100%;
      min-height: 140px;
    }
  }

  .toggle-button {
    position: absolute;
    height: 26px;
    width: 26px;
    top: 40px;
    left: 16.5%;
    transition: left 0.42s;

    &.collapsed {
      left: 2.1%;
    }
  }

  @media (max-width: 576px) {
    .navigation {
      &.collapsed {
        min-width: 5%;
      }
    }

    .toggle-button {
      left: 205px;

      &.collapsed {
        left: 5%;
      }
    }
  }

  @media (min-width: 576px) {
    .toggle-button {
      left: 16.5%;

      &.collapsed {
        left: 2.5%;
      }
    }
  }

  @media (min-width: 768px) {
    .toggle-button {
      left: 23%;

      &.collapsed {
        left: 2.5%;
      }
    }
  }

  @media (min-width: 992px) {
    .toggle-button {
      left: 18.5%;

      &.collapsed {
        left: 2.1%;
      }
    }
  }

  @media (min-width: 1200px) {
    .toggle-button {
      left: 16.5%;

      &.collapsed {
        left: 2.1%;
      }
    }
  }

  .content {
    width: 100%;
  }
}
</style>
