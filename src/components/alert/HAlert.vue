<template>
  <el-alert
    class="h-alert"
    v-bind="$props"
  >
    <template v-for="(index, name) in $slots" v-slot:[name]>
      <slot :name="name" />
    </template>
  </el-alert>
</template>

<script>
export default {
  name: 'HAlert',
  props: ['title', 'type', 'description', 'closable', 'show-icon', 'center', 'close-text', 'effect']
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-alert {
  .el-alert__title {
      font-size: 18px;
      line-height: 22px;
  }

  .el-alert__description {
      font-size: 16px;
      line-height: 19px;
  }
}
</style>
