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
.el-drawer.rtl{
    box-shadow: 0px 0px 17px rgba(115, 117, 129, 0.25);
    border-radius: 5px 0 0 5px;
}

.el-drawer.ltr{
    box-shadow: 0px 0px 17px rgba(115, 117, 129, 0.25);
    border-radius: 0 5px 5px 0;
}

.el-drawer__header{
    font-family: 'Lato';
    font-size: 35px;
    font-weight: bold;
    color:#333333;
}

.el-drawer__body{
    padding: 20px;
}

.el-drawer.ltr, .el-drawer.rtl {
    height: 85%;
    top: 12%;
    bottom: 0;
}
</style>
