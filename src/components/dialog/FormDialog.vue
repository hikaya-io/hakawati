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
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="Age"
          prop="age"
          :rules="[
      { required: true, message: 'Age is required!'},
      { type: 'number', message: 'Age must be a number!'}
    ]"
        >
          <el-input
            type="age"
            v-model.number="numberValidateForm.age"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button
          :type="type"
          @click="submitForm('numberValidateForm')"
        >Submit</el-button>

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
      dialogVisible: false,
      numberValidateForm: {
        age: ""
      }
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false;
          alert(`Age submitted: ${this.numberValidateForm.age}`);
          this.$emit(`dialogFormSubmitted`);
        } else {
          alert("Error submitting!");
          return false;
        }
      });
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
