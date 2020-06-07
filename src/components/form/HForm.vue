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

<style lang="scss">
@import "../../styles/theme";

.h-form {
  .el-form--label-top .el-form-item__label {
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 0 0;
  }
}
</style>
