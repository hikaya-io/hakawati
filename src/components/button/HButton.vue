<template>
  <el-button
    :class="{
      'button-style': !isPlain && !checkIfWorkspace,
      'cancel-button': isPlain && !checkIfWorkspace,
      'ws-button': checkIfWorkspace && !isPlain,
      'ws-button-outline': checkIfWorkspace && isWorkSpace.hasOutline && !isPlain,
      'el-button-shadow': !(isWorkSpace.hasOutline && isWorkSpace.enabled),
      'body-bold': true,
    }"
    :type="getType"
    :icon="getIcon"
    :disabled="isDisabled"
    :dark-text="isPlain"
    :workspace-button="checkIfWorkspace"
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
    isWorkSpace: { type: [Boolean, Object], default: false },
    isPlain: { type: Boolean, default: false }
  },
  computed: {
    getType () {
      let type = this.type
      if (this.isPlain || this.checkIfWorkspace) {
        type = undefined
      }
      return type
    },
    getIcon () {
      if (this.icon) return `el-icon-${this.icon}`
      return undefined
    },
    checkIfWorkspace () {
      let isWorkSpace
      if (typeof this.isWorkSpace === 'boolean') isWorkSpace = this.isWorkSpace
      else isWorkSpace = this.isWorkSpace.enabled
      return isWorkSpace
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-button-shadow {
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

.ws-button-outline {
  box-shadow: none !important;
  border-width: 0.15rem !important;
  border-color: $primary-color !important;
  border-radius: 25px !important;
}
</style>
