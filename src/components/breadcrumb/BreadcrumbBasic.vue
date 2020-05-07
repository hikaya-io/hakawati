<template>
    <el-breadcrumb :separator="separator">
        <el-breadcrumb-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        :replace="item.replace">
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
    color: $primary-color;
    background-color: $primary-fill;
    padding: 7px 20px;
    border-radius: 20px 20px 20px 20px;
}
</style>
