<template>
  <el-dialog
    v-bind="$attrs"
    v-on="$listeners"
    :title="title"
    :visible.sync="visible"
    :width="width"
    :center="center"
    :before-close="handleClose"
  >
    <slot />
    <span slot="footer" class="dialog-footer">
      <h-button cancel @click.native="handleCancel" label="Cancel" />
      <h-button
        @click.native="handleConfirm"
        :disabled="confirmButtonDisabledInner"
        :label="confirmLabel"
        :type="type"
      />
    </span>
  </el-dialog>
</template>

<script>
import HButton from '../button/HButton.vue'

export default {
  name: 'HDialog',
  components: { HButton },
  props: {
    title: { type: String, default: '' },
    dialogVisible: { type: Boolean, default: false },
    center: { type: Boolean, default: false },
    width: { type: String, default: '40%' },
    confirmLabel: { type: String, default: 'Confirm' },
    confirmButtonDisabled: { type: Boolean, default: false }
  },
  data () {
    return {
      confirmButtonDisabledInner: this.confirmButtonDisabled
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
  watch: {
    confirmButtonDisabled (val) {
      console.log(val)
      this.confirmButtonDisabledInner = this.confirmButtonDisabled
    }
  },
  methods: {
    handleConfirm () {
      this.$emit('dialogConfirmed')
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
