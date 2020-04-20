<template>
  <el-table
    :data="tableData"
    height="250"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="Date"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["tableData"],
  data() {
    return { name: "TableWithFixedHeader" };
  }
};
</script>