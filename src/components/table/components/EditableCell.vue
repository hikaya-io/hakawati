<template>
<div class="editable-cell" @click="onFieldClick">
  <div
    v-if="!editMode && !showInput"
    :class="{'cell-content': true, 'edit-enabled-cell': canEdit}"
    @keyup.enter="onFieldClick">
    <slot name="content"></slot>
  </div>
  <component
    v-if="editMode || showInput"
    :is="editableComponent"
    ref="input"
    @focus="onFieldClick"
    @visible-change="onDropdownHidden"
    @keyup.enter.native="onInputExit"
    v-on="listeners"
    v-bind="$attrs"
    v-model="model"
  >
    <slot name="edit-component-slot"></slot>
  </component>
</div>
</template>

<script>
export default {
  name: 'EditableCell',
  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    showInput: {
      type: Boolean,
      default: false
    },
    editableComponent: {
      type: [String, Object],
      default: 'el-input'
    },
    componentProps: {
      type: Object,
      default: () => ({})
    },
    closeEvent: {
      type: String,
      default: 'blur'
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      editMode: false,
      focusTriggered: false,
      dropDownVisible: false
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    listeners () {
      return {
        [this.closeEvent]: this.onInputExit, ...this.$listeners
      }
    },
    componentName () {
      if (typeof this.editableComponent === 'string') {
        return this.editableComponent
      } else {
        // Is an object
        return this.editableComponent.name
      }
    }
  },
  watch: {
    editMode (val) {
      if (!val) {
        this.focusTriggered = false
      }
    }
  },
  methods: {
    onFieldClick () {
      if (this.canEdit) {
        this.editMode = true
        this.$nextTick(() => {
          const inputRef = this.$refs.input
          if (inputRef && inputRef.focus) {
            inputRef.focus()
          }

          // Workaround for el-select/h-select
          if (this.componentName === 'el-select' || this.componentName === 'HSelect' || this.componentName === 'h-select') {
            if (!this.focusTriggered) {
              this.focusTriggered = true

              if (inputRef.toggleMenu) {
                inputRef.toggleMenu()
              }

              if (inputRef.$attrs['allow-create']) {
                (inputRef.$children[0].$refs.input || inputRef.$children[0].$refs.reference).focus()
              }
            }
          }
        })
      }
    },
    onInputExit () {
      this.editMode = false
      this.$emit('input-hidden')
    },
    onDropdownHidden (val) {
      // Workaround for el-select components
      if (this.componentName === 'el-select' || this.componentName === 'HSelect' || this.componentName === 'h-select') {
        if (!val) {
          this.editMode = false
          this.$emit('input-hidden')
        }
      }
    },
    onInputChange (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/theme";

.cell-content {
  min-height: 38px;
  align-items: center;
  display: flex;
  padding-left: 5px;
}

.edit-enabled-cell {
  cursor: pointer;
  border-radius: 6px;
}

.edit-enabled-cell:hover {
  background: $border-grey;
  padding-left: 5px;
}
</style>
