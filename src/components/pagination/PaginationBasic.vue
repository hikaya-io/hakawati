<template>
  <el-pagination
    layout="prev, pager, next"
    :total="parseInt(totalPageNumber)"
    :background="background == 'true' ? true : false"
  >
  </el-pagination>
</template>

<script>
export default {
  name: 'PaginationBasic',
  props: ['totalPageNumber', 'background']
}
</script>
