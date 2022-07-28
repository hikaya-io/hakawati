<template>
  <div class="spreadsheet">
    <el-table
      v-for="col in columns"
      :key="col"
      :data="getColumnData(col)"
      :header-cell-class-name="headerClassName"
      style="min-width: 150px"
      border
    >
      <el-table-column
        :prop="col"
        :label="col"
        max-width="300">
        <template slot="header">
          <div class="header-content">
            <span>{{ col }}</span>
            <i class="el-icon-caret-bottom" />
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-table
      class="is-last-col"
      :header-cell-class-name="addColHeaderClassName"
      border
      style="min-width: 150px"
    >
      <el-table-column
        prop="col"
        label="Add Column"
        max-width="300" >
        <template slot="header">
          <div>
            <i class="el-icon-plus" />
            <span>Add Column</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

export default {
  name: 'HSpreadsheet',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    columns: function () {
      if (this.data.length) {
        return Object.keys(this.data[0])
      }
      return []
    }
  },
  methods: {
    getColumnData (col) {
      const data = []
      this.data.forEach(row => {
        const newRow = {}
        newRow[`${col}`] = row[col]
        data.push(newRow)
      })
      return data
    },
    isLastColumn (col) {
      if (!this.columns.length) {
        return false
      }

      return this.columns[this.columns.length - 1] === col
    },
    headerClassName ({ row, column, rowIndex, columnIndex }) {
      return 'header'
    },

    addColHeaderClassName ({ row, column, rowIndex, columnIndex }) {
      return 'add-column-header'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/theme";

.spreadsheet {
  display: flex;
  align-items: start;
  overflow-x: scroll;
  padding-bottom: 20px;

  ::v-deep .el-table {
    margin-right: 30px;
    border-radius: 6px;

    &.is-last-col {
      margin-right: 0;
      cursor: pointer;

      .el-table__body-wrapper {
        display: None;
      }

      .el-icon-plus {
        margin-right: 10px;
        font-weight: 500;
      }
    }

    .header {
      background: $background-color;
    }

    .add-column-header {
      background: $body-grey;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .el-icon-caret-bottom {
        cursor: pointer;
      }
    }
  }

}
</style>
