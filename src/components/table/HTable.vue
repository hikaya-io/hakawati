<template>
  <div>
    <el-table
      :ref="refTable"
      v-loading.fullscreen.lock="loading"
      v-bind="$attrs"
      v-on="$listeners"
      @selection-change="handleSelectionChange"
      @sort-change="onSortChanged"
      :data="tableData"
    >
      <slot>
        <el-table-column
          v-if="multiselect"
          type="selection"
          width="55"
          fixed
        />
        <slot name="extra-cols-before"></slot>
        <el-table-column
          v-for="(col, index) in shownTableColumns"
          :prop="col"
          :key="`thead_${col + index.toString()}`"
          v-bind="getColumnAttrs(col)"
        >
          <editable-cell
            slot-scope="scope"
            :can-edit="editMode"
            v-model="editableTableData[scope.$index][col]"
            v-bind="editColumnComponents[col]"
            v-on="getCallables(editColumnComponents[col])"
            @input-hidden="setLastEditedRow(scope.$index)"
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

        <el-table-column
          v-if="canSelectColumns"
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
                      :activeText="getDropdownItemText(col)"
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
                  <el-dropdown-item disabled divided>
                    Hidden Columns
                  </el-dropdown-item>
                  <el-dropdown-item
                    v-for="col in hiddenColumns" :key="col"
                    class="column-item" disabled>
                    <h-switch
                      v-if="useSwitch"
                      :value="!hiddenColumns.includes(col)"
                      :activeText="getDropdownItemText(col)"
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
        <slot name="extra-cols-after"></slot>
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
    enableFilters: {
      type: Boolean,
      default: false
    },
    filterableColumns: {
      type: Array,
      default: () => []
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
    },
    refTable: {
      type: String,
      default: 'HTable'
    },
    columnAttrs: {
      type: Object,
      default: () => ({})
    },
    columnDefaultAttrs: {
      type: Object,
      default: () => ({
        'min-width': '100px'
      })
    },
    ignoredColumns: {
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
  data () {
    return {
      multipleSelection: [],
      hiddenColumns: [],
      tableColumns: [],
      mutableTableColumns: [],
      editableTableData: [],
      editColumnComponents: {},
      lastEditedRow: null,
      sortedObject: null
    }
  },
  computed: {
    origTableColumns () {
      if (this.savedTableColumns.length) {
        return this.savedTableColumns
      }

      if (this.tableData.length) {
        return Object.keys(this.tableData[0])
      }
      return []
    },
    shownTableColumns () {
      return this.tableColumns.filter(val => !this.hiddenColumns.includes(val))
    },
    columnsOrderChanged () {
      return JSON.stringify(this.shownTableColumns) !== JSON.stringify(this.mutableTableColumns)
    }
  },
  watch: {
    tableData: {
      deep: true,
      handler (val) {
        if (this.sortedObject) {
          if (!this.editMode) {
            this.editableTableData = [...val]
            this.onSortChanged(this.sortedObject)
          }
        } else {
          this.editableTableData = [...val]
        }
      }
    },

    hiddenColumns: {
      handler (val) {
        this.mutableTableColumns = [...this.origTableColumns.filter(col => !this.ignoredColumns.includes(col) && !this.hiddenColumns.includes(col))]
      }
    }
  },
  mounted () {
    this.tableColumns = [...this.origTableColumns.filter(col => !this.ignoredColumns.includes(col))]
    this.mutableTableColumns = [...this.origTableColumns.filter(col => !this.ignoredColumns.includes(col) && !this.hiddenColumns.includes(col))]
    this.editableTableData = [...this.tableData]
    this.hiddenColumns = [...this.savedHiddenColumns]
    const keys = Object.keys(this.columnComponents)

    for (const col of this.shownTableColumns) {
      if (keys.indexOf(col) !== -1) {
        this.$set(this.editColumnComponents, col, this.columnComponents[col])
      } else {
        this.$set(this.editColumnComponents, col, { 'editable-component': 'el-input' })
      }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
    // Fetch all stylesheets
    const stylesheet = document.styleSheets[3]
    let elTableBefore
    // Find stylesheet with el-table::before class
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
      if (stylesheet.cssRules[i].selectorText === '.el-table::before') {
        elTableBefore = stylesheet.cssRules[i]
      }
    }
    // Remove the extra line at the bottom of the table if data is present
    if (elTableBefore) {
      if (this.tableData.length !== 0) {
        elTableBefore.style.setProperty('display', 'none')
      } else {
        elTableBefore.style.setProperty('display', 'block')
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
      this.$emit('column-hidden', { columns: this.hiddenColumns })
    },
    getDropdownMenuData () {
      return {
        slot: 'dropdown'
      }
    },
    getDropdownItemText (col) {
      if (col in this.columnAttrs && 'label' in this.columnAttrs[col]) {
        return this.columnAttrs[col].label
      }
      return this.titleCase(col)
    },
    onColumnsEdit (val) {
      if (!val && this.columnsOrderChanged) {
        const ans = confirm('Are you sure you want to reorder the columns?')
        if (ans) {
          this.tableColumns = [...this.mutableTableColumns]
          this.$emit('columns-reordered', { orderedColumns: this.tableColumns })
        }
      }
    },
    setLastEditedRow (index) {
      this.lastEditedRow = index
      this.$emit('row-edited', { rowIndex: index, row: this.editableTableData[index] })
    },
    onSortChanged (obj) {
      this.sortedObject = obj.order ? obj : null

      function compare (a, b) {
        if (a[obj.prop] < b[obj.prop]) {
          return obj.order === 'ascending' ? -1 : 1
        }
        if (a[obj.prop] > b[obj.prop]) {
          return obj.order === 'ascending' ? 1 : -1
        }
        return 0
      }
      this.editableTableData.sort(compare)
    },
    getColumnAttrs (col) {
      const attrs = {
        label: this.titleCase(col),
        sortable: this.sortable && !this.editMode
      }
      if (this.enableFilters) {
        if (this.filterableColumns.length) {
          if (this.filterableColumns.find(col)) {
            attrs['filter-placement'] = 'bottom-end'
            attrs.filters = [...new Set(this.tableData.map(item => item[col]))].map(val => ({ text: val, value: val }))
            attrs['filter-method'] = this.filterHandler
          }
        } else {
          attrs['filter-placement'] = 'bottom-end'
          attrs.filters = [...new Set(this.tableData.map(item => item[col]))].map(val => ({ text: val, value: val }))
          attrs['filter-method'] = this.filterHandler
        }
      }
      if (col in this.columnAttrs) {
        return Object.assign({}, attrs, this.columnDefaultAttrs, this.columnAttrs[col])
      }
      return Object.assign({}, attrs, this.columnDefaultAttrs)
    },
    getCallables (obj) {
      const objCallables = {}
      if (obj) {
        Object.keys(obj).forEach(key => {
          if (typeof obj[key] === 'function') {
            objCallables[key] = obj[key]
          }
        })
      }
      return objCallables
    },
    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
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

  &__row {
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

  .is-sortable {
    .cell{
      display: inline-flex;
    }
  }

  .el-table__header-wrapper{
    height: 32px;
  }
  .el-table__header {
    .cell {
      height: 32px;
      line-height: 32px;
    }
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

  &--group::after,
  &--border::after {
    background-color: transparent;
  }

  // Add spacing between table rows
  &__header,
  &__body,
  &__footer {
    border-spacing: 0 2px;
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
