<!--Inspired from https://codesandbox.io/s/xplnkv29w4 -->
<template>
  <div
    class="context-menu"
    ref="popper"
    v-show="isVisible"
    tabindex="-1"
    v-click-outside="close"
    @contextmenu.capture.prevent>
    <slot v-bind:contextData="contextData"></slot>
  </div>
</template>

<script>
import Popper from 'popper.js'
import ClickOutside from 'vue-click-outside'

// @vue/component
export default {
  props: {
    boundariesElement: {
      type: String,
      default: 'body'
    }
  },
  components: {
    Popper
  },
  data () {
    return {
      opened: false,
      contextData: {}
    }
  },
  directives: {
    ClickOutside
  },
  computed: {
    isVisible () {
      return this.opened
    }
  },
  methods: {
    open (evt, contextData) {
      this.opened = true
      this.contextData = contextData

      if (this.popper) {
        this.popper.destroy()
      }

      this.popper = new Popper(this.referenceObject(evt), this.$refs.popper, {
        placement: 'right-start',
        modifiers: {
          preventOverflow: {
            boundariesElement: document.querySelector(this.boundariesElement)
          }
        }
      })

      // Recalculate position
      this.$nextTick(() => {
        this.popper.scheduleUpdate()
      })
    },
    close () {
      this.opened = false
      this.contextData = null
    },
    referenceObject (evt) {
      const left = evt.clientX
      const top = evt.clientY
      const right = left + 1
      const bottom = top + 1
      const clientWidth = 1
      const clientHeight = 1

      function getBoundingClientRect () {
        return {
          left,
          top,
          right,
          bottom
        }
      }

      return {
        getBoundingClientRect,
        clientWidth,
        clientHeight
      }
    }
  },
  beforeDestroy () {
    if (this.popper !== undefined) {
      this.popper.destroy()
    }
  }
}

</script>

<style lang="scss" scoped>

.context-menu {
  position: fixed;
  z-index: 999;
  overflow: hidden;
  background: #FFF;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
}
</style>
