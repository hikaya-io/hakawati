<template>
  <div>
    <el-checkbox
      v-if="type === 'basic'"
      class="basic-checkbox body-reg"
      v-model="checked"
      v-bind="$attrs"
      v-on="$listeners"
    >
      {{ label }}
    </el-checkbox>
    <el-checkbox-group v-else-if="type === 'grouped'" v-model="checkList">
      <el-checkbox
        v-for="{ label, disabled } in options"
        :label="label"
        :key="label"
        :disabled="disabled"
      />
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'HCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'basic'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      checked: false,
      checkList: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

::v-deep .basic-checkbox {
  .el-checkbox__inner {
    color: $dark-body-grey;
  }
}
</style>
