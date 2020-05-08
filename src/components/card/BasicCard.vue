<template>
    <el-card class="box-card">
        <div slot="header">
            <slot name="title"></slot>
        </div>
        <slot name="items"></slot>
    </el-card>
</template>

<script>
export default {
  name: 'BasicCard'
}
</script>

<style lang="scss">
@import "../../styles/theme";

.el-card.is-always-shadow {
  background: $white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-color: transparent;
}

.el-card__header {
  border-bottom: transparent;
}

</style>>
