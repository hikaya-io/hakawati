<template>
    <el-table
      :data="dataTable"
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
  mounted(){
    // Showing table data from props
    console.log(this.dataTable)
  },
  props: ["dataTable"], 
};
</script>
