<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
    :class="{
      'button-style': true,
      'button-has-no-border': !cancel || !secondary,
      'cancel-button': cancel,
      'secondary-button': secondary,
      'button-has-shadow': !outline,
      'button-has-outline': outline,
    }"
    :type="getType"
    :icon="getIcon"
    :plain="cancel || outline"
    :round="!circle"
    :circle="circle"
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
    circle: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    cancel: { type: Boolean, default: false },
    outline: { type: Boolean, default: false }
  },
  computed: {
    getType () {
      let type = this.type
      if (this.cancel || this.secondary) type = undefined
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
  color: $white;
}

.el-button.is-round {
  padding: 13px 33px;
  border-radius: 30px;
}

.el-button.is-circle span {
  display: none;
}

.el-button.is-circle {
  line-height: 14px;
}

.button-has-outline {
  border-width: 0.15rem;
  &:active {
    background-color: $primary-fill !important;
  }
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
    background-color: $body-grey;
    border-color: $heading-grey;
    color: $heading-grey;
  }
  &:active {
    background-color: $heading-grey !important;
    border-color: $heading-grey !important;
    color: $white !important;
  }
  &:focus {
    background-color: $white;
    border-color: $heading-grey;
    color: $heading-grey;
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
