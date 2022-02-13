<template>
  <div class="top-nav">
    <div v-if="showBrand" class="brand">
      <slot name="brand"><span>Brand</span></slot>
    </div>
    <transition name="fade">
      <div v-if="!showMobile" class="big-menu" :class="{ active: isActive }" key="big">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          v-bind="$attrs"
          v-on="$listeners"
        >
          <slot></slot>
        </el-menu>
      </div>
      <div v-else :class="{'mobile-menu': true, 'collapsed': !isActive}" key="small">
        <transition name="slide">
          <template v-if="isActive">
            <el-menu
              :default-active="activeIndex"
              :collapse="false"
              mode="vertical"
              v-bind="$attrs"
              v-on="$listeners"
              @select="toggleSidebar"
            >
              <slot name="mobile-before"></slot>
              <slot></slot>
              <slot name="mobile-after"></slot>
            </el-menu>
          </template>
        </transition>
      </div>
    </transition>
    <div v-if="showRightArea && !showMobile" class="right-area">
      <slot name="right-area"><span>Right Area</span></slot>
    </div>
    <div v-if="showMobile" id="toggle" @click="toggleSidebar">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
import ResizeMixin from './resize'

export default {
  name: 'TopNav',
  mixins: [ResizeMixin],
  props: {
    activeIndex: {
      type: String,
      default: ''
    },
    showBrand: {
      type: Boolean,
      default: true
    },
    showRightArea: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isActive: false,
      showMobile: false,
      isCollapsed: true
    }
  },
  mounted () {
    this.showMobile = this.deviceType === 'mobile'
  },
  methods: {
    onDeviceTypeChanged (val) {
      this.showMobile = val === 'mobile'
    },
    toggleSidebar () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";
@import "../../styles/variables";

.top-nav {
  .big-menu {
    // style nav bar and border
    .el-menu-item {
      font-family: $main-font-family;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: $heading-grey;
      padding: 0px 25px;
      margin-top: 5px;
      height: 50px;
      line-height: 50px;
      border-radius: 30px;
    }

    .el-menu--horizontal > .el-submenu .el-submenu__title {
      font-size: 16px;
      color: $heading-grey;
      border-radius: 30px;
    }

    // style selected submenu
    .el-menu--popup {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 0px 0px 6px 6px;
      border-color: transparent;
    }

    .el-menu--horizontal .el-menu .el-menu-item.is-active, .el-menu--horizontal .el-menu .el-submenu.is-active > .el-submenu__title {
      color: $primary-color;
    }

    .el-menu.el-menu--horizontal {
      border-bottom: transparent;
      padding: 5px 20px 5px 20px;
      vertical-align: text-bottom;
    }

    .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
      border-bottom: transparent;
      color: $primary-color;
      // background-color: $primary-fill;
      // border-radius: 30px;
      text-align: center;
      padding: 0px 20px 5px 20px;
      margin-top: 5px;
      height: 50px;
      line-height: 50px;

      // adding the dot when menu item is selected
      display: inline-block;
      position: relative;

      &:before {
        font-family: 'Lato';
        content: '.';
        display: inline-block;
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 48px;
      }
    }

    // style selected tab
    .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
      border-radius: 30px;
      text-align: center;
    }

    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
      border-radius: 30px;
      text-align: center;
    }

    .el-menu--horizontal > .el-menu-item.is-active {
      border-bottom: transparent;
      color: $primary-color;
      // background-color: $primary-fill;
      text-align: center;
      // border-radius: 30px;
      padding: 0px 25px;
      margin-top: 5px;
      height: 50px;
      line-height: 50px;

      // adding the dot when menu item is selected
      display: inline-block;
      position: relative;

      &:before {
        font-family: 'Lato';
        content: '.';
        display: inline-block;
        position: absolute;
        bottom: -0.25rem;
        left: 0;
        text-align: center;
        width: 100%;
        font-size: 48px;
      }
    }
  }

  .mobile-menu {
    position: absolute;
    height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    width: 252px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);

    .el-menu {
      height: 100%;
      overflow-y: scroll;

      &-item:not(.is-disabled):hover {
        color: $primary-color;
        background-color: $background-color;
      }
    }

    .el-submenu__title:not(.is-disabled):hover {
      color: $primary-color;
      background-color: $background-color;
    }
  }

  .mobile-menu.collapsed {
    width: 0 !important;
  }

  .brand {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
  }

  .right-area {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 20px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .05s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active {
    transition: opacity .5s;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
}

.el-menu--horizontal > .el-menu-item {
  margin-left: 25px;
  margin-right: 25px;

  &:hover {
    background-color: $primary-fill;
    transition: background-color .15s linear;
  }
}

// style selected tab
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: none;
    color: $primary-color;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    color: $primary-color;
    // background-color: $primary-fill;
}

// styling for minimized nav bar
.top-nav {
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  height: 75px;
}

#toggle {
  margin-top: 6px;
  display: block;
  position: absolute;
  right: 20px;
  top: 14px;
  z-index: 999;
  width: 24px;
  height: 24px;
  cursor: pointer;
  float: right;
  transition: all .3s ease-out;
  opacity: 1;
}

#toggle .span {
  border-radius: 10px;
  background: $primary-color;
  height: 2px;
  width: 100%;
  margin: 7px 0;
  transition: all .3s ease-out;
  backface-visibility: visible;
  visibility: visible;
  opacity: 1;
}

#top.span.active {
  transform: rotate(45deg) translateX(3px) translateY(5px);
}

#middle.span.active {
  opacity: 0;
}

#bottom.span.active {
  transform: rotate(-45deg) translateX(8px) translateY(-10px);
}

</style>
