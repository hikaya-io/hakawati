<template>
  <div class="h-pagination">
    <el-pagination
      layout="sizes, prev, pager, next"
      :total="parseInt(totalPageNumber)"
      :background="background == 'true' ? true : false"
      :page-sizes="convertPageSizes"
      :page-size="parseInt(pageSize)"
    />
  </div>
</template>

<script>
export default {
  name: 'HPageSize',
  props: ['totalPageNumber', 'background', 'pageSizes', 'pageSize'],
  computed: {
    convertPageSizes (val) {
      return this.pageSizes.replace('[', '').replace(']', '').split(',').map(x => +x)
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/theme";

</style>
