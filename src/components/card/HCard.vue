<template>
  <div :class="cardClass">
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
  name: 'HCard',
  props: {
    plain: Boolean
  },
  computed: {
    cardClass () {
      return this.plain ? { 'h-card-plain': true } : { 'h-card': true }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-card {
  height: 100%;
}

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

  .el-card__body {
    padding: 0px;
  }

  .el-card {
    padding: 0px 40px 40px 40px;
  }
}

.h-card-plain {
  .el-card.is-always-shadow {
    border: 2px solid $background-color;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: none !important;
  }

  .el-card__header {
    border-bottom: none;
    padding: 40px 40px 40px 0px;
  }

  .el-card__body {
    padding: 0px;
  }

  .el-card {
    padding: 0px 40px 40px 40px;
  }
}
</style>>
