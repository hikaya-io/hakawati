<template>
  <el-button
    :class="{
      'button-style': !isPlain && !isWorkSpace,
      'cancel-button': isPlain && !isWorkSpace,
      'ws-button': isWorkSpace && !isPlain,
      'body-bold': true,
    }"
    :type="getType"
    :icon="getIcon"
    :disabled="isDisabled"
    :dark-text="isPlain"
    :workspace-button="isWorkSpace"
  >
   {{ label }}
  </el-button>
</template>
<script>
export default {
  name: 'HButton',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'primary',
      required: true
    },
    icon: {
      type: String,
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false,
      required: true
    },
    isWorkSpace: {
      type: Boolean,
      default: false
    },
    isPlain: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getType () {
      let type = this.type
      if (this.isPlain || this.isWorkSpace) type = undefined
      return type
    },
    getIcon () {
      if (this.isWorkSpace && this.icon) return `el-icon-${this.icon}`
      return false
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
