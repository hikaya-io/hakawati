<template>
  <div class="spreadsheet">
    <draggable
      tag="div"
      :list="mutableColumns"
      ghost-class="drop-placeholder"
      chosen-class="chosen-item"
      drag-class="dragging-item"
      @end="onDragEnd"
    >
      <el-table
        v-for="col in shownTableColumns"
        :key="col"
        :data="getColumnDataWithFilters[col]"
        :header-cell-class-name="headerClassName"
        style="min-width: 150px"
        border
        @filter-change="onFilterChange"
        @sort-change="onSortChange"
      >
        <el-table-column
          :prop="col"
          :label="col"
          v-bind="getColumnAttrs[col]">
          <template slot="header">
            <div class="header-content">
              <span>{{ col }}</span>
              <i class="el-icon-caret-bottom" />
            </div>
          </template>
          <editable-cell
            slot-scope="scope"
            :can-edit="editMode"
            v-model="editableData[scope.$index][col]"
          >
            <template slot="content">
              <slot name="cell" v-bind="{index: scope.$index, col: col, value: scope.row[col]}">
                <span>{{ scope.row[col] }}</span>
              </slot>
            </template>

            <template slot="edit-component-slot">
              <slot :name="`edit-${col}`"></slot>
            </template>
          </editable-cell>
        </el-table-column>
      </el-table>
    </draggable>

    <el-dropdown trigger="click" :hide-on-click="false" @command="toggleColumnVisibility">
      <el-table
        class="is-last-col el-dropdown-link"
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
      <el-dropdown-menu>
        <span class="header">VISIBLE FIELDS</span>
        <el-dropdown-item
          v-for="col in visibleColumns" :key="col"
          class="column-item"
          :command="col"
        >
          {{ titleCase(col) }}
        </el-dropdown-item>
        <span class="header">HIDDEN FIELDS</span>
        <el-dropdown-item
          v-for="col in hiddenColumns" :key="col"
          class="column-item"
          :command="col"
        >
          {{ titleCase(col) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import EditableCell from '../table/components/EditableCell'

export default {
  name: 'HSpreadsheet',
  components: { draggable, EditableCell },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columnAttrs: {
      type: Object,
      default: () => ({})
    },
    columnDefaultAttrs: {
      type: Object,
      default: () => ({
        'max-width': '300'
      })
    },
    editMode: {
      type: Boolean,
      default: false
    },
    sortable: {
      type: Boolean,
      default: true
    },
    enableFilters: {
      type: Boolean,
      default: false
    },
    filterableColumns: {
      type: Array,
      default: () => []
    },
    savedTableColumns: {
      type: Array,
      default: () => []
    },
    savedHiddenColumns: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortableData () {
      if (this.sortKey) {
        const dataCopy = [...this.data]
        const reverse = this.sortOrder === 'ascending' ? 1 : -1
        dataCopy.sort((a, b) => {
          if (a[this.sortKey] < b[this.sortKey]) {
            return -1 * reverse
          }
          if (a[this.sortKey] > b[this.sortKey]) {
            return 1 * reverse
          }
          return 0
        })
        return dataCopy
      }
      return this.data
    },
    getColumnData () {
      if (!this.sortableData.length) {
        return {}
      }
      const cols = Object.keys(this.sortableData[0])
      const dataByCol = {}
      for (const col of cols) {
        const data = []
        this.sortableData.forEach(row => {
          const newRow = {}
          newRow[`${col}`] = row[col]
          data.push(newRow)
        })
        dataByCol[col] = data
      }

      return dataByCol
    },
    filteredRowIndices () {
      const data = this.getColumnData
      let activeFilters = false
      for (const val of Object.values(this.filters)) {
        if (val.length) {
          activeFilters = true
          break
        }
      }
      if (activeFilters) {
        const filteredCols = Object.keys(this.filters)
        let filteredRowIndices = new Set()
        let minFilteredRowCount = 10000 // Random large value

        for (const col of filteredCols) {
          let filteredRowCount = 0
          const rowIndices = new Set()
          data[col].forEach((row, index) => {
            if (this.filters[col].indexOf(row[col]) !== -1) {
              rowIndices.add(index)
              filteredRowCount++
            }
          })
          // Only indices from the column with the least rows
          // should be used to filter
          if (filteredRowCount < minFilteredRowCount) {
            minFilteredRowCount = filteredRowCount
            filteredRowIndices = rowIndices
          }
        }
        return filteredRowIndices
      } else {
        return new Set()
      }
    },
    getColumnDataWithFilters () {
      const data = this.getColumnData

      if (this.filteredRowIndices.size) {
        const filteredDataByCol = {}

        const cols = Object.keys(data)

        for (const col of cols) {
          filteredDataByCol[col] = data[col]
            .filter((row, index) => this.filteredRowIndices.has(index))
        }
        return filteredDataByCol
      } else {
        return data
      }
    },
    getColumnAttrs () {
      if (!this.sortableData.length) {
        return {}
      }
      const cols = Object.keys(this.sortableData[0])
      const attrsPerCol = {}
      for (const col of cols) {
        const attrs = {
          label: this.titleCase(col),
          sortable: this.sortable && !this.editMode
        }
        if (this.enableFilters) {
          if (this.filterableColumns.length) {
            if (this.filterableColumns.find(col)) {
              attrs['filter-placement'] = 'bottom-end'
              if (this.filteredRowIndices.size) {
                attrs.filters = [...new Set(this.data.map(item => item[col]))]
                  .filter((val, index) => this.filteredRowIndices.has(index))
                  .map(val => ({ text: val, value: val }))
              } else {
                attrs.filters = [...new Set(this.data.map(item => item[col]))].map(val => ({ text: val, value: val }))
              }

              attrs['filter-method'] = this.filterHandler
            }
          } else {
            attrs['filter-placement'] = 'bottom-end'
            if (col in this.filters && this.filters[col].length) {
              attrs.filters = [...new Set(this.data.map(item => item[col]))]
                .filter((val, index) => this.filteredRowIndices.has(index))
                .map(val => ({ text: val, value: val }))
            } else {
              attrs.filters = [...new Set(this.data.map(item => item[col]))].map(val => ({ text: val, value: val }))
            }

            attrs['filter-method'] = this.filterHandler
          }
        }
        if (col in this.columnAttrs) {
          attrsPerCol[col] = Object.assign({}, attrs, this.columnDefaultAttrs, this.columnAttrs[col])
        }
        attrsPerCol[col] = Object.assign({}, attrs, this.columnDefaultAttrs)
      }

      return attrsPerCol
    },
    origTableColumns () {
      if (this.savedTableColumns.length) {
        return this.savedTableColumns
      }

      if (this.data.length) {
        return Object.keys(this.data[0])
      }
      return []
    },
    shownTableColumns () {
      return this.mutableColumns.filter(val => this.visibleColumns.includes(val))
    }
  },
  data () {
    return {
      columns: [],
      mutableColumns: [],
      columnIds2Props: {},
      filters: {},
      sortKey: null,
      sortOrder: null,
      editableData: [],
      editColumnComponents: {},
      visibleColumns: [],
      hiddenColumns: []
    }
  },
  watch: {
    data: {
      deep: true,
      handler (val) {
        this.editableData = [...this.sortableData]
      }
    }
  },
  mounted () {
    this.columns = [...this.getColumns()]
    this.mutableColumns = [...this.columns]
    this.editableData = [...this.sortableData]
    this.visibleColumns = [...this.origTableColumns]
    this.hiddenColumns = [...this.savedHiddenColumns]
  },
  methods: {
    getColumns () {
      if (this.data.length) {
        return Object.keys(this.data[0])
      }
      return []
    },
    titleCase (val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
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
    },
    filterHandler (value, row, column) {
      this.$set(this.columnIds2Props, column.id, column.property)
      return true
      // return row[property] === value
    },
    onDragEnd (event) {
      this.columns = [...this.mutableColumns]
      this.$emit('columns-reordered', { orderedColumns: this.columns })
    },
    onFilterChange (filters) {
      Object.keys(filters).forEach(key => {
        if (filters[key].length) {
          this.$set(this.filters, this.columnIds2Props[key], filters[key])
        } else {
          this.$delete(this.filters, this.columnIds2Props[key])
        }
      })
    },
    onSortChange ({ column, prop, order }) {
      if (order !== null) {
        this.sortKey = prop
        this.sortOrder = order
      } else {
        this.sortKey = null
        this.sortOrder = null
      }
    },
    toggleColumnVisibility (col) {
      let index = this.visibleColumns.indexOf(col)
      if (index === -1) {
        index = this.hiddenColumns.indexOf(col)
        this.hiddenColumns.splice(index, 1)
        this.visibleColumns.push(col)
        this.$emit('column-shown', { columns: this.visibleColumns })
      } else {
        this.visibleColumns.splice(index, 1)
        this.hiddenColumns.push(col)
        this.$emit('column-hidden', { columns: this.hiddenColumns })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../styles/theme";

.spreadsheet {
  overflow-x: scroll;
}

.spreadsheet, .spreadsheet > div {
  display: flex;
  align-items: start;
  padding-bottom: 20px;

  ::v-deep .el-table {
    margin-right: 30px;
    border-radius: 6px;

    .is-sortable {
      .cell{
        display: inline-flex;
        justify-content: space-between;
      }
    }

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
      flex-grow: 1;

      .el-icon-caret-bottom {
        cursor: pointer;
      }
    }
  }

}

::v-deep .el-dropdown-menu {
  max-height: 300px;
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;

  .header {
    margin-left: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }

  ::v-deep .el-dropdown-menu__item.column-item {
    margin-right: 32px;
  }
}
</style>
