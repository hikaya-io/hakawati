<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      :width="width"
      :before-close="handleClose"
    >
      <slot/>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          @click="handleClose"
          round
        >
        Cancel
        </el-button>
        <el-button
          :type="type"
          @click="handleConfirm"
          round
        >
          {{ confirmLabel }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BasicDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '30%'
    },
    confirmLabel: {
      type: String,
      default: 'Confirm'
    }
  },
  computed: {
    visible: {
      get () {
        return this.dialogVisible
      },
      set (val) {
        return val
      }
    }
  },
  methods: {
    handleConfirm () {
      this.$emit('dialogConfirmed')
      this.handleClose()
    },
    handleClose () {
      this.$emit('dialogClosed')
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-dialog__title {
    padding: 20px;
    padding-bottom: 10px;
    color: $dark-body-grey;
}

.el-dialog__body {
    padding: 30px 20px 20px 20px;
    color: $dark-body-grey;
}

</style>
