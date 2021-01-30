<template>
  <div>
    <el-popover
      placement="bottom"
      width="350"
      trigger="manual"
      v-model="visible"
      :visible-arrow="false"
      class="h-filter"
    >
      <el-row :gutter="20" class="align-center">
      <el-col :span="24">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>
                <i class="el-icon-close" @click="visible = !visible"></i>
              </b>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="3" class="spacer"></el-col>
        <el-col :span="6" :bind="filter.title" v-for="(filter, index) in filters" :key="index" class="filter-title">
          <el-row :gutter="20">
            <el-col class="spacer">
              <b>{{ filter.title }}</b>
            </el-col>
            <div v-for="(choice, index) in filter.choices" :key="index">
              <el-col class="spacer">
                <h-checkbox
                  :text="choice"
                  @change="$emit('change', choice)"
                  button-pill
                />
              </el-col>
            </div>
          </el-row>
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
  props: {
    filters: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number, Array],
      default: null
    }
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
    selected: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

::v-deep .h-filter {
  .el-button {
    box-shadow: none;
  }
}

::v-deep .el-popover {
  border-radius: 25px;
  color: $dark-body-grey;
  border-color: transparent;
}

::v-deep .align-center {
  text-align: center;
}

// Removes checkbox button border
::v-deep .spacer {
  padding: 15px 33px;
}

::v-deep .el-checkbox-button:first-child .el-checkbox-button__inner {
  border-left: transparent;
  border-color: transparent;
}

::v-deep .el-checkbox-button.is-checked .el-checkbox-button__inner {
  color: $primary-color;
  background-color: $primary-fill;
}

::v-deep .el-checkbox-button.is-focus .el-checkbox-button__inner {
  border-color: transparent;
}

::v-deep .el-icon-close {
  float: inline-end;
}
</style>
