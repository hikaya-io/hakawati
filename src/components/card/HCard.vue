<template>
  <div class="h-card">
    <el-card>
        <div slot="header">
            <slot name="title"></slot>
        </div>
        <slot name="items"></slot>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'HCard'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.h-card {
  .el-card.is-always-shadow {
    background: $white;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border-color: transparent;
  }

  .el-card__header {
    border-bottom: none;
    padding: 40px 25px 40px 0px;
  }

  .el-card {
    padding: 0px 25px 40px 40px;
  }
}
</style>>
