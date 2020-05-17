<template>
  <el-form
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'HForm'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-form--label-top .el-form-item__label {
  float: none;
  display: inline-block;
  text-align: left;
  padding: 0 0 0 0;
}

</style>
