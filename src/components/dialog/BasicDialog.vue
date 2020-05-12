<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      :width="width"
      :before-close="handleClose"
    >
      <span>{{message}}</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          @click="closeDialog"
          round
        >
        Cancel
        </el-button>
        <el-button
          :type="type"
          @click="handleConfirm"
          round
        >
          Confirm
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
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('dialogClosed')
    },
    handleClose (done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
          this.closeDialog()
        })
        .catch(_ => {})
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
