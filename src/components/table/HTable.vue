<template>
  <div>
    <el-table
      ref="HTable"
      v-loading.fullscreen.lock="loading"
      v-bind="$attrs"
      v-on="$listeners"
      @selection-change="handleSelectionChange"
      :data="tableData"
    >
      <slot>
        <el-table-column
          v-if="multiselect"
          type="selection"
          width="55"
          fixed
        />
        <el-table-column
          v-for="col in shownTableColumns"
          :prop="col"
          :label="titleCase(col)"
          :key="col"
          :sortable="sortable"
          width="100px"
        >
        </el-table-column>

        <el-table-column
          fixed="right"
          width="60"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <template slot="header" slot-scope="scope">
            <div>
              <el-dropdown
                trigger="click"
                :hide-on-click="false"
              >
                <span class="el-dropdown-link">
                  <i class="el-icon-s-operation table-settings"/>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="col in tableColumns" :key="col">
                    <el-checkbox
                      :checked="!hiddenColumns.includes(col)"
                      @change="hideOrShowColumn(col)"
                    >
                      {{ titleCase(col) }}
                    </el-checkbox>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

          </template>
          <template></template>
        </el-table-column>
      </slot>
    </el-table>
  </div>

</template>

<script>
export default {
  name: 'HTable',
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    canSelectColumns: {
      type: Boolean,
      default: true
    },
    multiselect: {
      type: Boolean,
      default: true
    },
    sortable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      multipleSelection: [],
      hiddenColumns: []
    }
  },
  computed: {
    tableColumns () {
      if (this.tableData.length) {
        return Object.keys(this.tableData[0])
      }
      return []
    },
    shownTableColumns () {
      return this.tableColumns.filter(val => !this.hiddenColumns.includes(val))
    }
  },
  methods: {
    titleCase (val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
    },
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
    },
    hideOrShowColumn (col) {
      const index = this.hiddenColumns.indexOf(col)
      if (index === -1) {
        this.hiddenColumns.push(col)
      } else {
        this.hiddenColumns.splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

table {
  -webkit-border-vertical-spacing: 2px;
}

::v-deep .el-table {
  // Removes extra line at the bottom of the table
  &__fixed::before, &__fixed-right::before{
    background-color: transparent;
  }
  // styles table header
  thead {
    font-family: $main-font-family;
    color: $dark-body-grey;
    font-weight: bold;
  }

  // removes default header border
  th.is-leaf, .el-table td {
    border-bottom: transparent;
  }

  // aligns table header to match rows
  th.is-leaf {
    border-bottom: transparent;
    padding: 0 0 0 5px;
  }

  // removes default row borders
  th td {
    border: none;
  }

  .el-table__row {
    border: 2px solid $background-color;
    box-sizing: border-box;
    border-radius: 6px;
  }

  // styles row
  tr td:first-child {
    border-left: 2px solid $background-color;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  tr td {
    border-top: 2px solid $background-color;
    border-bottom: 2px solid $background-color;
  }

  tr td:last-child {
    border-right: 2px solid $background-color;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  // styles table sort
  .descending .sort-caret.descending {
    border-top-color: $primary-color-sub;
  }

  .ascending .sort-caret.ascending {
    border-bottom-color: $primary-color-sub;
  }

  .sort-caret.descending {
    border-top-color: $background-color;
  }

  .sort-caret.ascending {
    border-bottom-color: $background-color;
  }

  .table-settings {
    cursor: pointer;
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

  .el-table--group::after, .el-table--border::after, .el-table::before{
    background-color: transparent;
  }
}

.el-dropdown-menu {
  max-height: 300px;
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
