<template>
    <el-card>
        <div slot="header">
            <slot name="title"></slot>
        </div>
        <slot name="items"></slot>
    </el-card>
</template>

<script>
export default {
  name: 'HCard'
}
</script>

<style scoped lang="scss">
@import "../../styles/theme";

.el-card.is-always-shadow {
  background: $white;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-color: transparent;
}

.el-card__header {
  border-bottom: transparent;
  padding: 40px 25px 40px 0px;
}

.el-card {
  padding: 0px 25px 40px 40px;
}

</style>>
