<template>
  <el-button
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'HButton'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-button {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: transparent;
  padding: 13px 33px;
  border: none;
}

.el-button.is-round {
  padding: 13px 33px;
  border-radius: 30px;
}
</style>
