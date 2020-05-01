<template>
  <el-drawer
v-bind="$attrs" v-on="$listeners"
  >
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: 'BasicDrawer'
}
</script>

<style scoped lang="scss">
.el-drawer__header{
    font-family: 'Lato';
    font-size: 35px;
    font-weight: bold;
    color:#333333;
}

.el-drawer__body{
    padding: 20px;
}
</style>
