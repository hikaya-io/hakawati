<template>
  <el-tag
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :size="size"
    :closable="closable"
    :class="tagClass"
    :style="customStyling"
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
  computed: {
    tagClass () {
      return !this.plain ? { 'h-tag': true } : null
    },
    customStyling () {
      if (this.customColor) {
        const rgba = this.hexToRgba(this.customColor, 0.2)
        return {
          color: this.customColor,
          backgroundColor: rgba
        }
      }
      return null
    }
  },
  methods: {
    hexToRgba (hex, alpha) {
      // Reference https://thewebdev.info/2022/05/07/how-to-convert-hex-to-rgba-with-javascript/
      const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16))
      return `rgba(${r},${g},${b},${alpha})`
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-tag {
  border-color: transparent !important;
}

.h-tag {
  &.el-tag {
    border-radius: 25px;
    border-color: transparent;
    text-align: center;
    padding: 0px 24px;
  }
}
.el-tag .el-tag__close:hover {
  background-color: transparent;
}
</style>
