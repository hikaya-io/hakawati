<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <slot name="title"></slot>
        </div>
        <slot name="items"></slot>
    </el-card>
</template>

<script>
export default {
  name: 'BasicCard'
}
</script>

<style scoped lang="scss">

  .el-card {
    box-shadow: #C2C2C7;
    border-radius: 20px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 480px;
  }
</style>>
