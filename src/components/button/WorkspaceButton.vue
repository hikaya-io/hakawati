<template>
  <el-button @click="$emit('click')" :size="size" :type="type" :icon="icon" round>
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'WorkspaceButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-button {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
}

.el-button.is-round {
    padding: 13px 33px;
    border-radius: 30px;
}

.ws-settings {
    color: $primary-color;
    font-family: $main-font-family;
}

.el-icon-s-tools:before {
    color: $dark-body-grey;
}

.el-icon-circle-plus-outline:before {
    color: $dark-body-grey;
}
</style>
