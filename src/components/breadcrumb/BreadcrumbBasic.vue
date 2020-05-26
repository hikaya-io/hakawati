<template>
    <el-breadcrumb
      :separator="separator"
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
  name: 'BreadcrumbBasic',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-breadcrumb__inner.is-link, .el-breadcrumb__inner a {
    color: $light-body-grey;
    padding: 38px;
    font-size: 36px;
    font-weight: bold;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
    color: $dark-body-grey;
    font-size: 36px;
    font-weight: bold;
}
</style>
