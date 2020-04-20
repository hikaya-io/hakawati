<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
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
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      name: "TableWithStatus"
    };
  }
};
</script>

<style>
.el-table {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  color: #737581;
}

.el-table td:hover {
  /* background-color: #EFFBFB; */
  background-color: red;
}

.el-table th > .cell {
  color: #737581;
  font-size: 16px;
  font-weight: 300;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
