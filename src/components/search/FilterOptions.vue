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
            <el-checkbox-button class="button-pill">None</el-checkbox-button>
            </el-col>

            <el-col class="spacer">
            <el-checkbox-button class="button-pill">Newest</el-checkbox-button>
            </el-col>

             <el-col class="spacer">
            <el-checkbox-button class="button-pill">Oldest</el-checkbox-button>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Role</b>
            </el-col>

              <el-col class="spacer">
            <el-checkbox-button class="button-pill">None</el-checkbox-button>
            </el-col>

            <el-col class="spacer">
            <el-checkbox-button class="button-pill">Member</el-checkbox-button>
            </el-col>

             <el-col class="spacer">
            <el-checkbox-button class="button-pill">Admin</el-checkbox-button>
            </el-col>

            <el-col class="spacer">
            <el-checkbox-button class="button-pill">View</el-checkbox-button>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>Status</b>
            </el-col>

               <el-col class="spacer">
            <el-checkbox-button class="button-pill">None</el-checkbox-button>
            </el-col>

            <el-col class="spacer">
            <el-checkbox-button class="button-pill">Invited</el-checkbox-button>
            </el-col>

             <el-col class="spacer">
            <el-checkbox-button class="button-pill">Active</el-checkbox-button>
            </el-col>

            <el-col class="spacer">
            <el-checkbox-button class="button-pill">Inactive</el-checkbox-button>
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
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style >
.spacer {
  padding: 15px 33px;
}

.align-center {
  text-align: center;
}

.button-pill .el-checkbox-button__inner {

padding: 11px 33px;

/* Primary Blue Fill */
width: 110px;
background: #F0F0FF;
border-radius: 25px !important;
}

.el-popover {
  border-radius: 25px ;
}
</style>
