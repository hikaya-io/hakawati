<template>
  <div>
    <el-button
      type="text"
      @click="dialogVisible = true"
    >{{openDialogText}}</el-button>
    <slot></slot>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{message}}</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button
          :type="type"
          @click="handleConfirm"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BasicDialog",
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
        type: String,
        default: ""
    },
    type: {
      type: String,
      default: ""
    },
    openDialogText: {
      type: String,
      default: ""
    }
  },
  
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleConfirm(){
      this.dialogVisible = false;
      this.$emit('dialogConfirmed');
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>


<style>
.el-checkbox__label {
  font-family: "Lato", sans-serif;
  font-weight: 300;
}
</style>
