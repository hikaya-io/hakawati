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
    :loading="isLoading"
    :round="isCircular ? false : true"
    :circle="isCircular"
  >
    {{ label }}
  </el-button>
</template>

<script>
export default {
  name: 'HButton',
  props: {
    label: { type: String },
    type: { type: String, default: 'primary' },
    icon: { type: String },
    isDisabled: { type: Boolean, default: false },
    isCircular: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    isWorkSpace: { type: Boolean, default: false },
    isPlain: { type: Boolean, default: false }
  },
  computed: {
    getType () {
      let type = this.type
      if (this.isPlain || this.isWorkSpace) type = undefined
      return type
    },
    getIcon () {
      if (this.icon) return `el-icon-${this.icon}`
      return undefined
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

.el-button.is-circle span {
  display: none;
}
</style>
