<template>
  <el-tag
    v-bind="$attrs"
    v-on="$listeners"
    :custom-color="customColor"
    :color="lightBackgroundColor"
    :type="type"
    :size="size"
    :closable="closable"
    :class="tagClass"
  >
  <slot></slot>
  </el-tag>
</template>

<script>
export default {
  name: 'HTag',
  props: {
    type: String,
    size: String,
    plain: Boolean,
    closable: Boolean,
    customColor: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.updateTextColor()
  },
  computed: {
    tagClass () {
      return !this.plain ? { 'h-tag': true } : null
    },
    lightBackgroundColor () {
      if (this.customColor) {
        this.updateTextColor()
        return this.lightenColor(this.customColor, 90)
      }
      return null
    }
  },
  methods: {
    lightenColor (color, percent) {
      // Reference: https://gist.github.com/renancouto/4675192
      const num = parseInt(color.replace('#', ''), 16)
      const amt = Math.round(2.55 * percent)
      const R = (num >> 16) + amt
      const B = (num >> 8 & 0x00FF) + amt
      const G = (num & 0x0000FF) + amt
      return (
        '#' +
        (
          0x1000000 +
          (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
          (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
          (G < 255 ? (G < 1 ? 0 : G) : 255)
        )
          .toString(16)
          .slice(1)
      )
    },
    updateTextColor () {
      const elTagArray = document.getElementsByClassName('el-tag')
      for (let i = 0; i < elTagArray.length; i++) {
        if (elTagArray[i].attributes['custom-color'].nodeValue) {
          elTagArray[i].style.color = this.customColor
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-tag {
  &.el-tag {
    border-radius: 25px;
    border-color: transparent;
    text-align: center;
    padding: 0px 24px;

    &.el-tag--success {
      border-color: transparent;
    }
    &.el-tag--info {
      border-color: transparent;
    }
    &.el-tag--warning {
      border-color: transparent;
    }
    &.el-tag--danger {
      border-color: transparent;
    }
  }
}
.el-tag .el-tag__close:hover {
  background-color: transparent;
}
</style>
