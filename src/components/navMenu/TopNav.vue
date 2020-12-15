<template>
  <div class="top-nav">
    <div id="menu" :class="{ active: isActive }">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <slot></slot>
      </el-menu>
    </div>
    <div id="toggle" @click="isActive = !isActive">
      <div class="span" id="top" :class="{ active: isActive }"></div>
      <div class="span" id="middle" :class="{ active: isActive }"></div>
      <div class="span" id="bottom" :class="{ active: isActive }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    activeIndex: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";
@import "../../styles/variables";

.top-nav {
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

.el-menu--horizontal > .el-menu-item {
  margin-left: 25px;
  margin-right: 25px;
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
}

#toggle {
  position: absolute;
  right: 20px;
  top: 14px;
  z-index: 999;
  width: 40px;
  height: 40px;
  cursor: pointer;
  float: right;
  transition: all .3s ease-out;
  visibility: hidden;
  opacity: 0;
}

#toggle .span {
  border-radius: 10px;
  background: $primary-color;
  transition: all 0.3s ease-out;
  backface-visibility: hidden;
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

@media only screen and (max-width: $screen-md-min) {

  .logo-header {
    padding: 0;
  }

  #toggle {
    visibility: visible;
    opacity: 1;
    margin-top: 6px;
  }

  #toggle .span {
    height: 2px;
    margin: 7px 0;
    transition: all .3s ease-out;
    backface-visibility: visible;
    visibility: visible;
    opacity: 1;
  }

  #menu .el-menu-item,
  #menu .el-submenu {
    display: none;
  }

  #menu.active {
    margin: 70px 0;
    visibility: visible;
    opacity: 0.98;
    transition: all .5s ease-out;

    @include sm-menu;
  }
}
</style>
