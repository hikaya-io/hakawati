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
      type: String,
      default: ''
    },
    showInput: {
      type: Boolean,
      default: false
    },
    editableComponent: {
      type: String,
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
      focusTriggered: false
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
    }
  },
  watch: {
    editMode(val) {
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
            // Workaround for el-select
            if (this.editableComponent === 'el-select') {
              if (!this.focusTriggered) {
                this.focusTriggered = true
                inputRef.toggleMenu()
              }
            }
          }
        })
      }
    },
    onInputExit () {
      this.editMode = false
    },
    onDropdownHidden (val) {
      // Workaround for el-select components
      if (this.editableComponent === 'el-select') {
        if (!val) {
          this.editMode = false
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
}

.edit-enabled-cell {
  cursor: pointer;
  border-radius: 6px;
}

.edit-enabled-cell:hover {
  background: $light-body-grey;
  padding-left: 5px;
}
</style>
