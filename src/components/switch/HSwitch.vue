<template>
  <el-switch
    v-bind="$attrs"
    v-on="$listeners"
    :active-text="activeText"
    :inactive-text="inactiveText"
    :class="switchClass"
  />
</template>

<script>
export default {
  name: 'HSwitch',
  data () {
    return {}
  },
  props: {
    secondary: { type: Boolean, default: false },
    activeText: { type: String },
    inactiveText: { type: String }
  },
  computed: {
    switchClass () {
      if (this.secondary) {
        if (this.activeText && this.inactiveText) {
          ['right', 'left'].forEach((direction) => {
            const elSwitchElement = document.querySelector('.el-switch')
            if (elSwitchElement) {
              elSwitchElement.classList.add(`h-switch-${direction}-label`)
            }
            const switchLabel = document.querySelectorAll(
              `.h-switch-${direction}-label > .el-switch__label--${direction}`
            )
            if (switchLabel[0]) {
              const leftMargin = (90 - switchLabel[0].clientWidth) / 2
              switchLabel[0].style.left =
              direction === 'right'
                ? `${leftMargin + 80}px`
                : `${leftMargin}px`
            }
          })
        }

        return { 'h-switch-secondary': true }
      }
      return null
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-switch-secondary {
  .el-switch__core {
    width: 180px !important;
    height: 37px;
    border-radius: 20px;
    &::after {
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
      width: 100px;
      height: 37px;
      border-radius: 20px;
      top: -1px;
      left: -1px;
    }
  }
  &.is-checked .el-switch__core::after {
    left: 52%;
    margin-left: -14px;
  }

  .el-switch__core {
    background-color: rgb(225, 225, 225) !important;
    border-color: rgb(225, 225, 225) !important;
  }

  .el-switch__label--left {
    z-index: 1;
    position: absolute;
    left: 30px;
  }

  .el-switch__label--right {
    position: absolute;
    left: 100px;
  }
}
</style>
