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
      default: []
    },
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">

.el-breadcrumb {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
}

.el-breadcrumb__inner.is-link, .el-breadcrumb__inner a {
    font-weight: 300;
}
</style>
