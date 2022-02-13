<template>
  <div class="h-form">
    <el-form
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HForm'
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

::v-deep .h-form {
  .el-form--label-top .el-form-item__label {
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 0 0;
  }
}

</style>
