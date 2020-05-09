<template>
  <div>
    <el-popover placement="bottom" width="600" trigger="manual" v-model="visible" :visible-arrow=false >
      <el-row :gutter="20"  class="align-center">
        <el-col :span="3" class="spacer">
          <div>
            <i class="el-icon-s-operation"></i>
          </div>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Last Login</b>
            </el-col>

            <el-col class="spacer">
                  <checkbox-button text="None" class="btn-pill"/>
            </el-col>

            <el-col class="spacer">
             <checkbox-button text="Newest" class="btn-pill"/>
            </el-col>

             <el-col class="spacer">
            <checkbox-button text="Oldest" class="btn-pill"/>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Role</b>
            </el-col>

              <el-col class="spacer">
            <checkbox-button text="None" class="btn-pill"/>
            </el-col>

            <el-col class="spacer">
             <checkbox-button text="Member" class="btn-pill"/>
            </el-col>

             <el-col class="spacer">
             <checkbox-button text="Admin" class="btn-pill"/>
            </el-col>

            <el-col class="spacer">
           <checkbox-button text="View" class="btn-pill"/>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Status</b>
            </el-col>

               <el-col class="spacer">
             <checkbox-button text="None" class="btn-pill"/>
            </el-col>

            <el-col class="spacer">
            <checkbox-button text="Invited" class="btn-pill"/>
            </el-col>

             <el-col class="spacer">
            <checkbox-button text="Active" class="btn-pill"/>
            </el-col>

            <el-col class="spacer">
             <checkbox-button text="Inactive" class="btn-pill"/>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="3">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>
                <i class="el-icon-close" @click="visible = !visible"></i>
              </b>
            </el-col>
          </el-row>
          <div></div>
        </el-col>
      </el-row>
      <el-button slot="reference" type="text" @click="visible = !visible">
        <i class="el-icon-s-operation"></i> Filter
      </el-button>
    </el-popover>
  </div>
</template>

<script>
import CheckboxButton from '../checkbox/CheckboxButton.vue'
import TextButton from "../button/TextButton"

export default {
  components: { CheckboxButton, TextButton },

  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.spacer {
  padding: 15px 33px;
}

.el-popover {
  border-radius: 25px;
  color: $dark-body-grey;
}

.align-center {
  text-align: center;
}

.button-pill .el-checkbox-button__inner {
  padding: 11px 33px;
  width: 110px;
  border-radius: 25px !important;
  border-color: transparent;
}

// Removes checkbox button border
.el-checkbox-button:first-child .el-checkbox-button__inner {
    border: transparent;
}

.el-checkbox-button.is-checked .el-checkbox-button__inner {
    color: $primary-color;
    background-color: $primary-fill;
    border-color: $primary-fill;
}

.el-checkbox-button.is-focus .el-checkbox-button__inner {
    border-color: transparent;
}
</style>
