<template>
    <el-card class="box-card" :shadow="shadow">
        <div slot="header" class="clearfix">
            <slot name="title"></slot>
        </div>
    </el-card>
</template>

<script>
export default {
  name: 'ShadowCard',
  props: {
    shadow: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
    .el-card__header {
        font-family: 'Lato';
        font-weight: 300;
    }

    .el-card__body {
    font-family: 'Lato';
    font-weight: 300;
    }
</style>
