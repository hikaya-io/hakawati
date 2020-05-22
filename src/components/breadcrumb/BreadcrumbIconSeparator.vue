<template>
    <el-breadcrumb
      :separator-class="separatorClass"
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
  name: 'BreadcrumbIconSeparator',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    separatorClass: {
      type: String,
      default: 'el-icon-arrow-right'
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-icon-arrow-right:before {
    font-size: 24px;
}

.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover {
  padding: 0 0 0 36px;
}
</style>
