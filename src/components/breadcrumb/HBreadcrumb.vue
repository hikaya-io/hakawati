<template>
    <el-breadcrumb
      :separator="separator"
      class="h-breadcrumb"
    >
        <el-breadcrumb-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
          :replace="item.replace"
        >
        {{item.label}}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
  name: 'HBreadcrumb',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    separator: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-breadcrumb {
  .el-breadcrumb__inner.is-link, .el-breadcrumb__inner a {
      color: $dark-body-grey;
      opacity: 0.3;
      padding: 50px 31px 67px 0px;
      font-size: 36px;
      font-weight: bold;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
      color: $dark-body-grey;
      font-size: 36px;
      font-weight: bold;
      padding: 50px 31px 67px 0px;
  }
}
</style>
