<template>
  <el-switch
    v-bind="$attrs"
    v-on="$listeners"
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
    customSwitch: Boolean,
    activeTextLeft: String,
    activeTextRight: String
  },
  mounted () {
    /* The prop `activeTextLeft` adds the class `h-switch-right-label` to `el-switch`.
    This adds left spacing to the text label on the right */
    this.updateTextSpacing(this.activeTextRight, 'right')
    this.updateTextSpacing(this.activeTextLeft, 'left')
  },
  computed: {
    switchClass () {
      // The `custom-switch` will add custom styling to the switch
      return this.customSwitch
        ? { 'h-switch-custom': true }
        : null
    }
  },
  methods: {
    updateTextSpacing (activeText, direction) {
      if (activeText) {
        const elSwitchElement = document.querySelector('.el-switch')
        elSwitchElement.classList.add(`h-switch-${direction}-label`)
        const switchLabel = document.querySelectorAll(`.h-switch-${direction}-label > .el-switch__label--${direction}`)
        for (var i = 0; i < switchLabel.length; i++) {
          switchLabel[i].style.left = activeText
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-switch-custom {
  .el-switch__core {
    width: 200px !important;
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
    left: 59%;
    margin-left: -14px;
  }

  .el-switch__core {
    background-color: rgb(225, 225, 225) !important;
    border-color: rgb(225, 225, 225) !important;
  }

  .el-switch__label--left {
    z-index: 1;
    position: absolute;
    left: 20px;
  }

  .el-switch__label--right {
    position: absolute;
    left: 92px;
  }
}
</style>
