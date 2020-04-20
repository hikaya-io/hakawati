<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      prop="date"
      label="Date"
      width="150"
    >
    </el-table-column>
    <el-table-column label="Delivery Info">
      <el-table-column
        prop="name"
        label="Name"
        width="120"
      >
      </el-table-column>
      <el-table-column label="Address Info">
        <el-table-column
          prop="state"
          label="State"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="city"
          label="City"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address"
          width="300"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        >
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["tableData"],
  data() {
    return {
      name: "TableWithGroupingHead"
    };
  }
};
</script>