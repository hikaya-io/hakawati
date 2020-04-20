<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        label="Date"
        width="120"
      >
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        property="name"
        label="Name"
        width="120"
      >
      </el-table-column>
      <el-table-column
        property="address"
        label="Address"
        show-overflow-tooltip
      >
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1]])">Toggle selection status of the second row</el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tableData"],
  data() {
    return {
      name: "TableWithMultipleSelect",
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>