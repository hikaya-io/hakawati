<template>
  <div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <slot></slot>
    </el-menu>
     <transition name="button-move">
     <el-button
      v-bind:icon="isCollapse ? 'el-icon-arrow-right button-arrow' : 'el-icon-arrow-right button-arrow button-arrow-rotate'"
      v-on:click="isCollapse = !isCollapse"
      size="mini"
      :class="!isCollapse ? 'btn-not-collapse' : ''"
      circle
    ></el-button>
     </transition>
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
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-button{
    position:relative;
    top:-210px;
    left:50px;
    transition: left 0.4s;
}

.el-button.btn-not-collapse{
    top:-385px;
    left:187px;
}

.button-arrow-rotate {
  transform: rotate(180deg);
}

.button-arrow {
  transition-duration:0.5s;
  display: inline-block;
}

.el-menu {
  font-family: "Lato";
}
</style>
