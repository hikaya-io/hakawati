<template>
  <div>
    <el-table
      :data="tableData"
      border
      show-summary
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
      >
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="Amount 1"
      >
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="Amount 2"
      >
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="Amount 3"
      >
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData"
      border
      height="200"
      :summary-method="getSummaries"
      show-summary
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
      >
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="Cost 1 ($)"
      >
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="Cost 2 ($)"
      >
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="Cost 3 ($)"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ["tableData"],
  data() {
    return {
      name: "TableWithSummaryRow"
    };
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "Total Cost";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] =
            "$ " +
            values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    }
  }
};
</script>
