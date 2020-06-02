<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
    :class="buttonStyle"
  >
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  name: 'HButton',
  props: {
    darkText: {
      type: Boolean,
      default: false
    },
    workspaceButton: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      buttonStyle: {
        'body-bold': true,
        'button-style': true
      }
    }
  },
  created () {
    if (this.plain) {
      this.buttonStyle = { 'button-style': true }
    }
    if (this.circle) {
      this.buttonStyle = {}
    }
    if (this.workspaceButton) {
      this.buttonStyle = { 'ws-button': true, 'body-bold': true }
    }
    if (this.darkText) {
      this.buttonStyle = { 'cancel-button': true, 'body-bold': true }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: transparent;
  padding: 13px 33px;
  border: none;
}
.el-button.is-round {
  padding: 13px 33px;
  border-radius: 30px;
}
</style>
