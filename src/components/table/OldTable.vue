<template>
  <el-table
    ref="multipleTable"
    @selection-change="handleSelectionChange"
    :data="tableData"
    :default-sort="{prop: 'date', order: 'descending'}"
    style="width: 100%"
  >
    <el-table-column
      type="selection"
      width="55"
    />
    <el-table-column
      v-for="(value, key) in tableData[0]"
      :prop="key"
      :label="key.charAt(0).toUpperCase() + key.slice(1)"
      :key="key"
      sortable
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'OldTable',
  props: ['tableData'],
  data () {
    return {
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/theme";

// styles table header
.el-table thead {
  font-family: $main-font-family;
  color: $dark-body-grey;
  font-weight: bold;
}

// removes default header border
.el-table th.is-leaf, .el-table td {
  border-bottom: transparent;
}

// aligns table header to match rows
.el-table th.is-leaf {
    border-bottom: transparent;
    padding: 0 0 0 5px;
}

.el-table__row {
  border: 2px solid $background-color;
  box-sizing: border-box;
  border-radius: 6px;
}

// removes default row borders
.el-table th td {
  border: none;
}

// styles row
.el-table tr td:first-child {
  border-left: 2px solid $background-color;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.el-table tr td {
  border-top: 2px solid $background-color;
  border-bottom: 2px solid $background-color;
}

.el-table tr td:last-child {
  border-right: 2px solid $background-color;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

table {
  -webkit-border-vertical-spacing: 2px;
}

// styles table sort
.el-table .descending .sort-caret.descending {
    border-top-color: $primary-color-sub;
}

.el-table .ascending .sort-caret.ascending {
    border-bottom-color: $primary-color-sub;
}

.el-table .sort-caret.descending {
    border-top-color: $background-color;
}

.el-table .sort-caret.ascending {
    border-bottom-color: $background-color;
}

// styles table multiple selection
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: $background-color;
    border-color: $primary-color;
}

.el-checkbox__input.is-indeterminate .el-checkbox__inner::before{
    background-color: $primary-color;
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: $background-color;
    border-color: $primary-color;
}

.el-checkbox__input.is-checked .el-checkbox__inner::after{
 border-color: $primary-color;
}

.el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: $primary-color;
}

.el-checkbox__input:hover .el-checkbox__inner {
    border-color: $primary-color;
}

</style>
