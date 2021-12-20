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
          v-for="(col, index) in shownTableColumns"
          :prop="col"
          :label="titleCase(col)"
          :key="`thead_${index}`"
          :sortable="sortable"
          width="100px"
        >
          <editable-cell
            slot-scope="scope"
            :can-edit="editMode"
            v-model="editableTableData[scope.$index][col]"
            v-bind="editColumnComponents[col]"
            >
            <span slot="content">{{ scope.row[col] }}</span>
            <template slot="edit-component-slot">
              <slot :name="`edit-${col}`"></slot>
            </template>
          </editable-cell>
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
                @visible-change="onColumnsEdit"
              >
                <span class="el-dropdown-link">
                  <i class="el-icon-s-operation table-settings"/>
                </span>
                <draggable
                  tag="el-dropdown-menu"
                  :list="mutableTableColumns"
                  :component-data="getDropdownMenuData()"
                  ghost-class="drop-placeholder"
                  chosen-class="chosen-item"
                  drag-class="dragging-item"
                >
                  <el-dropdown-item
                    v-for="col in mutableTableColumns" :key="col"
                    class="column-item"
                  >
                    <h-switch
                      v-if="useSwitch"
                      :value="!hiddenColumns.includes(col)"
                      :activeText="titleCase(col)"
                      @change="hideOrShowColumn(col)"
                    >
                    </h-switch>
                    <el-checkbox
                      v-else
                      :checked="!hiddenColumns.includes(col)"
                      @change="hideOrShowColumn(col)"
                    >
                      {{ titleCase(col) }}
                    </el-checkbox>
                  </el-dropdown-item>
                </draggable>
              </el-dropdown>
            </div>

          </template>
        </el-table-column>
      </slot>
    </el-table>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
import HSwitch from '@/components/switch/HSwitch'
import EditableCell from './components/EditableCell'

export default {
  name: 'HTable',
  components: { HSwitch, draggable, EditableCell },
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
    },
    useSwitch: {
      type: Boolean,
      default: false
    },
    editMode: {
      type: Boolean,
      default: false
    },
    columnComponents: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      multipleSelection: [],
      hiddenColumns: [],
      tableColumns: [],
      mutableTableColumns: [],
      editableTableData: [],
      editColumnComponents: {}
    }
  },
  computed: {
    origTableColumns () {
      if (this.tableData.length) {
        return Object.keys(this.tableData[0])
      }
      return []
    },
    shownTableColumns () {
      return this.tableColumns.filter(val => !this.hiddenColumns.includes(val))
    },
    columnsOrderChanged () {
      return JSON.stringify(this.tableColumns) !== JSON.stringify(this.mutableTableColumns)
    }
  },
  mounted () {
    this.tableColumns = [...this.origTableColumns]
    this.mutableTableColumns = [...this.origTableColumns]
    this.editableTableData = [...this.tableData]
    const keys = Object.keys(this.columnComponents)

    for (const col of this.shownTableColumns) {
      if (keys.indexOf(col) !== -1) {
        this.$set(this.editColumnComponents, col, this.columnComponents[col])
      } else {
        this.$set(this.editColumnComponents, col, { 'editable-component': 'el-input' })
      }
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
    },
    getDropdownMenuData () {
      return {
        slot: 'dropdown'
      }
    },
    onColumnsEdit (val) {
      if (!val && this.columnsOrderChanged) {
        const ans = confirm('Are you sure you want to reorder the columns?')
        if (ans) {
          this.tableColumns = [...this.mutableTableColumns]
        }
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

.chosen-item {
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: $body-grey;
}

</style>
