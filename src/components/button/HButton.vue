<template>
  <el-button
    :class="{
      'button-style': true,
      'button-has-no-border': !isCancel || !isSecondary || !hasOutline,
      'cancel-button': isCancel,
      'ws-button': isSecondary,
      'button-has-shadow': !hasOutline,
      'button-has-outline': hasOutline,
    }"
    :type="getType"
    :icon="getIcon"
    :disabled="isDisabled"
    :plain="isCancel || hasOutline"
    :workspace-button="isSecondary"
    :loading="isLoading"
    :round="!isCircular"
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
    isSecondary: { type: Boolean, default: false },
    isCancel: { type: Boolean, default: false },
    hasOutline: { type: Boolean, default: false }
  },
  computed: {
    getType () {
      let type = this.type
      if (this.isCancel || this.isSecondary) type = undefined
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

.button-has-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
}

.button-has-no-border {
  border-color: transparent;
  color: $white;
}

.el-button.is-round {
  padding: 13px 33px;
  border-radius: 30px;
}

.el-button.is-circle span {
  display: none;
}

.button-has-outline {
  border-width: 0.15rem;
}

.button-has-outline.ws-button {
  border-color: $primary-color;

  &:hover {
    background-color: $primary-color;
    color: $white;
  }
}

.button-has-outline.cancel-button {
  border-color: $heading-grey;
  color: $heading-grey;

  &:hover {
    background-color: $heading-grey;
    border-color: $heading-grey;
    color: $white;
  }
}

.el-button--primary.is-plain {
  border-color: $primary-color;
}

.el-button--success.is-plain {
  border-color: $green;
}

.el-button--info.is-plain {
  border-color: $light-body-grey;
}

.el-button--danger.is-plain {
  border-color: $red;
}

.el-button--warning.is-plain {
  border-color: $yellow;
}
</style>
