<template>
  <el-pagination
    layout="prev, pager, next"
    :total="parseInt(totalPageNumber)"
  >
  </el-pagination>
</template>

<script>
export default {
  name: "PaginationBasic",
  props: ["totalPageNumber"]
};
</script>  