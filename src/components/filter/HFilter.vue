
<template>
  <div>
    <el-popover
      placement="bottom"
      width="600"
      trigger="manual"
      v-model="visible"
      :visible-arrow=false
      class="h-filter"
    >
      <el-row :gutter="20"  class="align-center">
        <el-col :span="3" class="spacer">
        </el-col>
        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Last Login</b>
            </el-col>

            <el-col class="spacer">
                  <h-checkbox text="None" class="button-pill"/>
            </el-col>

            <el-col class="spacer">
             <h-checkbox text="Newest" class="button-pill"/>
            </el-col>

             <el-col class="spacer">
            <h-checkbox text="Oldest" class="button-pill"/>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Role</b>
            </el-col>

              <el-col class="spacer">
            <h-checkbox text="None" class="button-pill"/>
            </el-col>

            <el-col class="spacer">
             <h-checkbox text="Member" class="button-pill"/>
            </el-col>

             <el-col class="spacer">
             <h-checkbox text="Admin" class="button-pill"/>
            </el-col>

            <el-col class="spacer">
           <h-checkbox text="View" class="button-pill"/>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Status</b>
            </el-col>

               <el-col class="spacer">
             <h-checkbox text="None" class="button-pill"/>
            </el-col>

            <el-col class="spacer">
            <h-checkbox text="Invited" class="button-pill"/>
            </el-col>

             <el-col class="spacer">
            <h-checkbox text="Active" class="button-pill"/>
            </el-col>

            <el-col class="spacer">
             <h-checkbox text="Inactive" class="button-pill"/>
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
import HCheckbox from '../checkbox/HCheckbox.vue'

export default {
  name: 'HFilter',
  components: { HCheckbox },

  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-filter {
  .el-button {
    box-shadow: none;
  }
}

  .el-popover {
    border-radius: 25px;
    color: $dark-body-grey;
    border-color: transparent;
  }

  .align-center {
    text-align: center;
  }

  // Removes checkbox button border
  .spacer {
    padding: 15px 33px;
  }

  .el-checkbox-button:first-child .el-checkbox-button__inner {
      border-left: transparent;
      border-color: transparent
  }

  .el-checkbox-button.is-checked .el-checkbox-button__inner {
      color: $primary-color;
      background-color: $primary-fill;
  }

  .el-checkbox-button.is-focus .el-checkbox-button__inner {
      border-color: transparent;
  }
</style>
