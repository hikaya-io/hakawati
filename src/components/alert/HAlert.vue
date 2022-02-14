<template>
  <el-alert
    class="h-alert"
    v-bind="$props"
    v-on="$listeners"
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

<style lang="scss" scoped>
@import "../../styles/theme";

.h-alert ::v-deep {
  .el-alert__title {
      font-size: 14px;
      line-height: 17px;
  }

  .el-alert__description {
      font-size: 14px;
      line-height: 17px;
  }
}

.info-alert ::v-deep {
  .el-alert__title {
    font-size: 14px;
    line-height: 17px;
    color: $dark-body-grey;
    background-color: $background-color;
  }

  .el-alert__description {
    color: $dark-body-grey;
    background-color: $background-color;
  }

  .el-icon-close:before {
    color: $primary-color;
    vertical-align: text-bottom;
  }
}

::v-deep .el-alert--info.is-light{
    background-color: $background-color;
}

</style>
