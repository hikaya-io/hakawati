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
        <h-button
          :isPlain="true"
          @click.native="handleCancel"
          label="Cancel"
        />
        <h-button
          @click.native="handleConfirm"
          :is-disabled="confirmButtonDisabled"
          :label="confirmLabel"
        />
      </span>
    </el-dialog>
  </div>
</template>

<script>
import HButton from '../button/HButton.vue'

export default {
  name: 'HDialog',
  components: { HButton },
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
    },
    confirmButtonDisabled: {
      type: Boolean
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
    handleCancel () {
      this.$emit('dialogCancelled')
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

.el-dialog {
  box-shadow: 0px 0px 30px rgba(115, 117, 129, 0.25);
  border-radius: 20px;
}

.el-dialog__header {
  padding: 30px 20px 20px 20px;
  padding-bottom: 10px;
  color: $heading-grey;
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  padding: 30px 20px 15px 20px;
}

.el-dialog__body {
  padding: 30px 20px 20px 20px;
  color: $heading-grey;
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  padding: 15px 20px 20px 20px;
}

</style>
