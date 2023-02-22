<template>
  <div
    :ref="`${customTable}-vueTable`"
    :style="styleWrapVueTable"
    class="vue-spreadsheet"
    @scroll="scrollFunction"
  >
    <slot name="header"></slot>

    <context-menu ref="row-menu">
      <template v-slot="{ contextData }">
        <div class="context-menu-data">
          <p class='body-reg' v-if="enableAddResult"  @click="addResult($event, contextData.rowIndex)"><i class="el-icon-s-data" />  Add Results</p>
          <p class="body-reg" @click="addNewRow($event, contextData.rowIndex, true)"><i class="el-icon-top" /> Insert record above</p>
          <p class="body-reg" @click="addNewRow($event, contextData.rowIndex)"> <i class="el-icon-bottom" /> Insert record below</p>
          <el-divider />
          <p class="body-reg disabled" ><i class="el-icon-copy-document" /> Duplicate record</p>
          <p :class="{'body-reg': true,  'disabled':disabledExpandRow }"   @click="expandRow($event, contextData.rowIndex)"><i class="el-icon-rank" /> Expand record</p>
          <el-divider />
          <p class="red body-reg" @click="removeRow($event, contextData.rowIndex)"><i class="el-icon-delete-solid" /> Delete record</p>
        </div>
      </template>
    </context-menu>
    <context-menu ref="bulk-row-menu">
      <template v-slot="{ contextData }">
        <div class="context-menu-data">
          <p class="red body-reg" @click="removeMultipleRows($event, contextData.indices)"><i class="el-icon-delete-solid" /> Delete all selected records</p>
        </div>
      </template>
    </context-menu>
    <context-menu ref="header-menu">
      <template v-slot="{ contextData }">
        <div class="context-menu-data">
          <p :class="{'body-reg': true, active: contextData && contextData.header && contextData.header.activeSort === 'A'}" @click="handleSort($event, contextData.header, contextData.colIndex)"><i class="el-icon-sort-down" /> Sort A > Z</p>
          <p :class="{'body-reg': true, active: contextData && contextData.header && contextData.header.activeSort === 'Z'}" @click="handleSort($event, contextData.header, contextData.colIndex, false)"><i class="el-icon-sort-up" /> Sort Z > A</p>
          <el-divider />
          <p class="body-reg" @click="hideColumn($event, contextData.header, contextData.colIndex)"><i class="el-icon-view" /> Hide field</p>
        </div>
      </template>
    </context-menu>

    <div class="toolbar">
      <el-dropdown
        trigger="click"
        :hide-on-click="false"
        @command="onToggleHeaderVisibility"
      >
        <div
          :class="{
          'body-reg': hiddenColumns.length > 0,
          'body-bold': hiddenColumns.length === 0,
          'el-dropdown-link': true,
          'hidden-title': hiddenColumns.length > 0,
          'visible-title': hiddenColumns.length === 0
        }">
          {{ hiddenColumns.length === 0 ? 'Hide fields' : `${hiddenColumns.length} hidden field` }}{{ hiddenColumns.length > 1 ? 's' : '' }}
        </div>
        <el-dropdown-menu slot="dropdown">
          <span class="title">Visible Fields</span>
          <el-dropdown-item
            v-for="header in visibleHeaders"
            :key="header.headerKey"
            class="visible"
            :command="header.headerKey"
          >
            <div>
              <i class="el-icon-check" />
              <span>{{  header.headerName }}</span>
            </div>

            <span class="type">{{ header.type }}</span>
          </el-dropdown-item>
          <el-divider />
          <span class="title">Hidden Fields</span>
          <el-dropdown-item
            v-for="header in hiddenHeaders"
            :key="header.headerKey"
            class="hidden"
            :command="header.headerKey"
          >
            <span>{{  header.headerName }}</span>
            <span class="type">{{ header.type }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <table class="vue_table" :ref="`${customTable}-table`">
      <vue-thead
        :ref="`${customTable}-vueThead`"
        :disable-sort-thead="disableSortThead"
        :header-top="headerTop"
        :headers="visibleHeaders"
        :sort-header="customOptions.sortHeader"
        :submenu-status-thead="submenuStatusThead"
        :submenu-thead="submenuThead"
        :tbody-index="true"
        :tbody-checkbox="customOptions.tbodyCheckbox"
        :thead-highlight="highlight.thead"
        :current-table="customTable"
        @handle-up-drag-size-header="handleUpDragSizeHeader"
        @handle-up-drag-to-fill="handleUpDragToFill"
        @submenu-enable="enableSubmenu"
        @thead-checked-all-callback="callbackCheckedAll"
        @thead-submenu-click-callback="callbackSubmenuThead"
        @thead-td-context-menu="handleTheadContextMenu"
        @thead-td-sort="callbackSort"
      >
      </vue-thead>

      <slot name="loader" v-if="loading"></slot>

      <vue-tbody
        v-if="!loading"
        :ref="`${customTable}-vueTbody`"
        :tbody-data="data"
        :headers="visibleHeaders"
        :tbody-checkbox="customOptions.tbodyCheckbox"
        :tbody-index="true"
        :trad="customOptions.trad || {}"
        :disable-cells="disableCells"
        :submenu-tbody="submenuTbody"
        :filtered-list="filteredList"
        :submenu-status-tbody="submenuStatusTbody"
        :tbody-highlight="highlight.tbody"
        :current-table="customTable"
        @handle-to-calculate-position="calculatePosition"
        @handle-to-open-select="enableSelect"
        @submenu-enable="enableSubmenu"
        @tbody-checked-row="checkedRow"
        @tbody-down-dragtofill="handleDownDragToFill"
        @tbody-handle-search-input-select="handleSearchInputSelect"
        @tbody-handle-set-oldvalue="setOldValueOnInputSelect"
        @tbody-input-change="onInputChange"
        @tbody-input-keydown="handleTbodyInputKeydown"
        @tbody-move-dragtofill="handleMoveDragToFill"
        @tbody-select-change="handleTbodySelectChange"
        @tbody-select-multiple-cell="handleSelectMultipleCell"
        @tbody-submenu-click-callback="callbackSubmenuTbody"
        @tbody-td-click="handleTbodyTdClick"
        @tbody-td-context-menu="handleTBodyContextMenu"
        @tbody-td-double-click="handleTbodyTdDoubleClick"
        @tbody-up-dragtofill="handleUpDragToFill"
      >
      </vue-tbody>
    </table>
    <button class="add_new_row" @click="addNewRow">+</button>
  </div>
</template>

<script type="text/javascript">
import { copyPaste } from './mixins/copyPaste'
import { dragToFill } from './mixins/dragToFill'
import { callback } from './mixins/callback'
import { handleTBody } from './mixins/handleTBody'
import { handleTHead } from './mixins/handleTHead'
import { moveOnTable } from './mixins/moveOnTable'
import { scrollOnTable } from './mixins/scrollOnTable'
import { undo } from './mixins/undo'
import { handleRequired } from './mixins/handleRequired'

import Fuse from 'fuse.js'
import VueThead from './components/Thead.vue'
import VueTbody from './components/TBody/TBody.vue'
import ContextMenu from '@/components/spreadsheet/components/contextmenu/ContextMenu'

const lodashClonedeep = require('lodash.clonedeep')

export default {
  name: 'HSpreadsheet',
  components: {
    ContextMenu,
    VueThead,
    VueTbody
  },
  mixins: [
    callback,
    copyPaste,
    dragToFill,
    handleTBody,
    handleTHead,
    moveOnTable,
    scrollOnTable,
    undo,
    handleRequired
  ],
  props: {
    headers: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    customOptions: {
      type: Object,
      required: true
    },
    styleWrapVueTable: {
      type: Object,
      required: true
    },
    submenuThead: {
      type: Array,
      required: true
    },
    disableSortThead: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    },
    selectPosition: {
      type: Object,
      required: true
    },
    parentScrollElement: {
      type: Object,
      required: true
    },
    disableCells: {
      type: Array,
      default: () => []
    },
    submenuTbody: {
      type: Array,
      default: () => []
    },
    enableAddResult: {
      type: Boolean,
      required: false,
      default: false
    },
    disabledExpandRow: {
      type: Boolean,
      required: false,
      default: true
    },
    highlightCells: {
      type: Array,
      default: () => []
    },
    requiredHeaders: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      customTable: 0,
      highlight: {
        tbody: [],
        thead: []
      },
      incrementOption: null,
      lastSelectOpen: null,
      scrollDocument: null,
      scrollToSelectTimeout: null,
      selectedCell: null,
      selectedMultipleCell: false,
      selectedMultipleCellActive: false,
      setFirstCell: false,
      submenuStatusTbody: false,
      submenuStatusThead: false,
      hiddenColumns: []
    }
  },
  computed: {
    checkedRows () {
      return this.data.filter((x) => x.checked)
    },
    colHeaderWidths () {
      return this.visibleHeaders.map((x) => parseInt(x.style.width, 10))
    },
    filteredList () {
      if (this.lastSelectOpen) {
        const { selectOptions } = this.lastSelectOpen.col
        const { searchValue } = this.lastSelectOpen || ''
        const fuseSearch = new Fuse(selectOptions, this.customOptions.fuseOptions)

        if (searchValue && searchValue.length > 1) {
          return fuseSearch.search(searchValue)
        }

        return this.sorter(selectOptions)
      }

      return []
    },
    headerKeys () {
      return this.visibleHeaders.map((header) => header.headerKey)
    },
    visibleHeaders () {
      return this.headers.filter((header) => !this.hiddenColumns.includes(header.headerKey))
    },
    hiddenHeaders () {
      return this.headers.filter((header) => this.hiddenColumns.includes(header.headerKey))
    }
  },
  watch: {
    data () {
      this.createdCell()
      this.updateHighlightedCells(this.data)
    },
    visibleHeaders () {
      this.createdCell()
    },
    highlightedCells () {
      this.data.forEach((tbody, rowIndex) => {
        this.headerKeys.forEach((header) => {
          if (this.shouldHighlight(rowIndex, header)) {
            this.$set(this.data[rowIndex][header], 'highlight', true)
          } else {
            this.$set(this.data[rowIndex][header], 'highlight', false)
          }
        })
      })
    }
  },
  created () {
    this.customTable = Date.now()
  },
  mounted () {
    this.setRequiredHeaders(this.requiredHeaders)
    this.createdCell()
    // set property of triangle bg comment
    this.setPropertyStyleOfComment()
  },
  methods: {
    activeSelectSearch (event, rowIndex, colIndex) {
      this.calculatePosition(event, rowIndex, colIndex, 'dropdown')
    },
    calculatePosition (event, rowIndex, colIndex, header) {
      // If we calculatePosition for dropdown, but there is no dropdown to render.
      if (header === 'dropdown' && !this.data[rowIndex][this.visibleHeaders[colIndex].headerKey].search) {
        return
      }

      const cellHeight = 40
      // stock scrollLeft / scrollTop position of parent
      const { scrollLeft } = this.$refs[`${this.customTable}-vueTable`]
      const { scrollTop } = this.$refs[`${this.customTable}-vueTable`]
      // get offsetTop of firstCell
      const firstCellOffsetTop = this.$refs[`${this.customTable}-vueTbody`].$refs[
        `td-${this.customTable}-0-0`
      ][0].offsetTop
      // stock $el
      const el = this.$refs[`${this.customTable}-vueTbody`].$refs[
        `td-${this.customTable}-${colIndex}-${rowIndex}`
      ][0]
      // stock height Of VueTable
      const realHeightTable = this.$refs[`${this.customTable}-vueTable`].offsetHeight
      // stock size / offsetTop / offsetLeft of the element
      const width = el.offsetWidth
      let top = el.offsetTop - scrollTop + cellHeight - this.parentScrollElement.positionTop
      let left = el.offsetLeft - scrollLeft

      if (this.selectPosition) {
        top += this.selectPosition.top
        left += this.selectPosition.left
      }

      // subtracted top of scroll top document
      if (this.scrollDocument) {
        top =
          el.offsetTop -
          scrollTop +
          cellHeight -
          this.parentScrollElement.positionTop -
          this.scrollDocument
      }

      // set size / top position / left position
      const currentSelect = undefined
      const contextMenu = this.$refs[`${this.customTable}-vueTbody`].$refs[
        `contextMenu-${this.customTable}-${colIndex}-${rowIndex}`
      ][0]
      const currentSelection = currentSelect || contextMenu

      if (currentSelection) {
        currentSelection.style.setProperty('--selectWidth', `${width}px`)
        currentSelection.style.setProperty('--selectLeft', `${left}px`)

        this.$nextTick(() => {
          // stock dynamic height of dropdown
          const heightOfAbsoluteItem = currentSelection.offsetHeight || 180
          // stock cell(40) + dynamic height of dropdown
          const heightOfCellDropdown = cellHeight + heightOfAbsoluteItem

          if (realHeightTable + firstCellOffsetTop < el.offsetTop + 250) {
            // Set on top of cell
            currentSelection.style.setProperty('--selectTop', `${top - heightOfCellDropdown}px`)
          } else {
            // Set on bottom of cell
            currentSelection.style.setProperty('--selectTop', `${top}px`)
          }
        })
      }
    },
    checkedRow (row) {
      this.$emit('tbody-checked-row', row)
      this.$refs[`${this.customTable}-vueThead`].checkedAll = false
    },
    createdCell () {
      // create cell if isn't exist
      this.data.forEach((tbody, rowIndex) => {
        if (this.customOptions.tbodyCheckbox && !tbody.vuetable_checked) {
          this.$set(this.data[rowIndex], 'vuetable_checked', false)
        }

        this.headerKeys.forEach((header) => {
          const copy = lodashClonedeep(this.data[rowIndex][header])

          if (
            !this.data[rowIndex][header].duplicate ||
            (this.data[rowIndex][header].duplicate &&
              this.data[rowIndex][header].duplicate === copy)
          ) {
            this.$set(this.data[rowIndex][header], 'duplicate', copy)
          }
        })
      })
    },
    shouldHighlight (rowIndex, header) {
      for (const cell of this.highlightCells) {
        if (cell.rowIndex === rowIndex && cell.header === header) {
          return true
        }
      }
      for (const cell of this.highlightedCells) {
        if (cell.rowIndex === rowIndex && cell.header === header) {
          return true
        }
      }
      return false
    },
    enableSubmenu (target) {
      if (target === 'thead') {
        this.submenuStatusThead = true
        this.submenuStatusTbody = false
      } else if (target === 'tbody') {
        this.submenuStatusThead = false
        this.submenuStatusTbody = true
      } else {
        this.submenuStatusThead = false
        this.submenuStatusTbody = false
      }
    },
    enableSelect (event, header, col, rowIndex, colIndex) {
      const currentElement = this.data[rowIndex][header]

      if (!col.search) {
        this.removeClass(['search', 'show'])
        this.lastSelectOpen = {
          col,
          colIndex,
          event,
          header,
          rowIndex
        }

        this.$set(currentElement, 'search', true)
        this.$set(currentElement, 'show', true)

        this.$nextTick(() => {
          this.$refs[`${this.customTable}-vueTbody`].$refs[
            `vsSelect-${this.customTable}-${colIndex}-${rowIndex}`
          ][0].$refs[`input-${this.customTable}-${colIndex}-${rowIndex}`].focus()
          this.calculatePosition(event, rowIndex, colIndex, 'dropdown')

          if (currentElement.value !== '') {
            this.showDropdown(colIndex, rowIndex)
            const index = currentElement.selectOptions
              .map((x) => x.value)
              .indexOf(currentElement.value)

            this.incrementOption = index
          } else {
            this.incrementOption = 0
          }
        })
      } else {
        this.$set(currentElement, 'search', false)
        this.$set(currentElement, 'show', false)
        this.lastSelectOpen = null
      }
    },
    highlightTdAndThead (rowIndex, colIndex) {
      this.highlight.tbody = []
      this.highlight.thead = []

      this.highlight.tbody = [
        ...this.range(
          Math.min(this.selectedCell.row, rowIndex),
          Math.max(this.selectedCell.row, rowIndex)
        )
      ]
      this.highlight.thead = [
        ...this.range(
          Math.min(this.selectedCell.col, colIndex),
          Math.max(this.selectedCell.col, colIndex)
        )
      ]
    },
    range (start, end) {
      return new Array(end - start + 1).fill(undefined).map((_, i) => i + start)
    },
    removeClass (params) {
      if (params.includes('selected')) {
        this.selectedMultipleCellActive = false
      }

      params.forEach((param) => {
        this.data.forEach((data, index) => {
          Object.keys(data).forEach((key) => {
            if (
              this.data[index] &&
              this.data[index][key] &&
              this.data[index][key][param] === true
            ) {
              this.$set(this.data[index][key], param, false)
            }
          })

          if (param === 'rectangleSelection') {
            this.setFirstCell = false
          }
        })
      })
    },
    showDropdown (colIndex, rowIndex) {
      const dropdown = this.$refs[`${this.customTable}-vueTbody`].$refs[
        `vsSelect-${this.customTable}-${colIndex}-${rowIndex}`
      ][0].$refs[`dropdown-${this.customTable}-${colIndex}-${rowIndex}`]

      // clear timeout
      if (dropdown) {
        if (!this.scrollToSelectTimeout === null) {
          clearTimeout(this.scrollToSelectTimeout)
        }

        // set scrollTop on select
        this.scrollToSelectTimeout = setTimeout(() => {
          dropdown.scrollTop = 45 * this.incrementOption
          this.scrollToSelectTimeout = null
        }, 100)
      }
    },
    setPropertyStyleOfComment () {
      if (this.styleWrapVueTable.comment?.borderColor) {
        this.$refs[`${this.customTable}-vueTable`].style.setProperty(
          '--borderCommentColor',
          this.styleWrapVueTable.comment.borderColor
        )
      }

      if (this.styleWrapVueTable.comment?.borderSize) {
        this.$refs[`${this.customTable}-vueTable`].style.setProperty(
          '--borderCommentSize',
          this.styleWrapVueTable.comment.borderSize
        )
      }

      if (this.styleWrapVueTable.comment?.widthBox) {
        this.$refs[`${this.customTable}-vueTable`].style.setProperty(
          '--boxCommentWidth',
          this.styleWrapVueTable.comment.widthBox
        )
      }

      if (this.styleWrapVueTable.comment?.heightBox) {
        this.$refs[`${this.customTable}-vueTable`].style.setProperty(
          '--BoxCommentHeight',
          this.styleWrapVueTable.comment.heightBox
        )
      }
    },
    sorter (options) {
      return options.sort((a, b) => {
        const productA = a.value
        const productB = b.value

        if (productA === undefined && productB) return 1
        if (productA && productB === undefined) return -1
        if (productA < productB) return -1
        if (productA > productB) return 1

        return 0
      })
    },
    setOldValueOnInputSelect (col, rowIndex, header, colIndex, type) {
      const column = col

      column.show = false
      this.$set(this.data[rowIndex][header], 'value', this.data[rowIndex][header].value)

      if (type === 'category') {
        column.search = false
      }
    },
    addNewRow (event, index = -1, before = false) {
      // Close row context menu
      this.$refs['row-menu'].close()
      const row = {}
      this.visibleHeaders.forEach(header => {
        row[header.headerKey] = {
          type: header.type,
          value: null
        }
      })
      if (index === -1) {
        this.data.push(row)
      } else {
        if (before) {
          this.data.splice(index, 0, row)
        } else {
          this.data.splice(index + 1, 0, row)
        }
      }
      this.$emit('on-new-row', { row, index: index, before: before })
    },
    removeRow ($event, index) {
      this.$refs['row-menu'].close()
      this.$emit('on-remove-row', { row: this.data[index], index })
      this.data.splice(index, 1)
    },
    addResult ($event, index) {
      this.$emit('on-add-result', { row: this.data[index], index })
    },
    expandRow ($event, index) {
      this.$emit('on-expand-row', { row: this.data[index], index })
    },
    removeMultipleRows ($event, indices) {
      this.$refs['bulk-row-menu'].close()
      this.$emit('on-bulk-remove', { indices })
      indices.sort(function (a, b) { return b - a }).forEach((index) => {
        this.data.splice(index, 1)
      })
    },
    handleSort (event, header, colIndex, asc = true) {
      function compare (a, b) {
        if (a[header.headerKey].value < b[header.headerKey].value) {
          return asc ? -1 : 1
        }
        if (a[header.headerKey].value > b[header.headerKey].value) {
          return asc ? 1 : -1
        }
        return 0
      }

      this.$refs['header-menu'].close()

      // Clear previous sort
      this.visibleHeaders.forEach(headerObj => {
        if ('activeSort' in headerObj) {
          this.$delete(headerObj, 'activeSort')
        }
      })

      if (asc) {
        this.$set(this.visibleHeaders[colIndex], 'activeSort', 'A')
      } else {
        this.$set(this.visibleHeaders[colIndex], 'activeSort', 'Z')
      }

      // do sorting
      this.data.sort(compare)
    },
    hideColumn (event, header, colIndex) {
      this.$refs['header-menu'].close()
      this.hiddenColumns.push(header.headerKey)
    },
    onToggleHeaderVisibility (key) {
      if (this.hiddenColumns.includes(key)) {
        this.hiddenColumns.splice(this.hiddenColumns.indexOf(key), 1)
      } else {
        this.hiddenColumns.push(key)
      }
    },
    onInputChange (event, header, rowIndex, colIndex) {
      this.handleTbodyInputChange(event, header, rowIndex, colIndex)
      this.updateHighlightedCells(this.data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/theme";

:root {
  /* select style */
  --selectLeft: 0;
  --selectTop: 0;
  --selectWidth: 0;

  /* bg of comment triangle */
  --borderCommentColor: #696969;
  --borderCommentSize: 8px;
  --boxCommentWidth: 120px;
  --BoxCommentHeight: 80px;

  /* rectangle style */
  --rectangleBottom: 0;
  --rectangleHeight: 41px;
  --rectangleLeft: 0;
  --rectangleRight: 0;
  --rectangleTop: 0;
  --rectangleWidth: 100%;

  /* drag Header */
  --dragHeaderHeight: 100%;
}
.vue-spreadsheet {
  overflow-x: hidden;
  width: max-content;

  .toolbar{
    height: 45px;
    border-top: 2px solid $border-grey;
    border-left: 2px solid $border-grey;
    border-right: 2px solid $border-grey;
    background: $body-grey;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-left: 36px;
    padding-right: 36px;
    .el-dropdown {
      position: sticky;
      right: 36px;
    }

    .visible-title {
      color: $heading-grey;
      cursor: pointer;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;

      &:hover {
        color: $primary-color !important;
      }
      &:focus {
        color: $primary-color !important;
      }
    }

    .hidden-title {
      color: $primary-color;
      background: $primary-fill;
      padding: 6px;
      border-radius: 25px;
      cursor: pointer;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
    }
  }

  table {
    table-layout: fixed;
    margin: 0;
    border-spacing: 0;
    border-left: 2px solid $border-grey;
    border-right: 2px solid $border-grey;
    border-bottom: 2px solid $border-grey;

    th {
      color: #000;
      font-weight: normal;
    }

    td, th {
      margin: 0;
    }
  }

  .add_new_row {
    cursor: pointer;
    width: 58px;
    height: 48px;
    padding: 0;
    background: white;
    box-sizing: border-box;
    border-top: none;
    border-bottom: 2px solid $border-grey;
    border-left: 2px solid $border-grey;
    border-right: 2px solid $border-grey;

    &:hover {
      background: $body-grey;
    }
  }

  .context-menu-data {
    width: 215px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 12px 12px;

    p {
      cursor: pointer;
      padding: 12px 8px;
      margin-top: 0px;
      margin-bottom: 0px;

      &:hover {
        background: $background-color;
        border-radius: 4px;
      }

      &:active {
        color: $primary-color;
      }

      &.disabled, &.disabled:hover {
        color: $light-body-grey;
        background: white;
        cursor: not-allowed;
      }

      &.active {
        color: $primary-color;
        background: $purple-fill;
        border-radius: 4px;
      }
    }

    .red {
      color: $red;

      &:active {
        color: $red;
        opacity: 0.7;
      }
    }

    .el-divider {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
}

.el-dropdown-menu {
  padding: 14px 24px 14px 24px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  .el-dropdown-menu__item {
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 13px;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;

    &:hover {
      background: none;
    }

    &.visible {
      color: $primary-color;

      &:hover {
        color: $primary-hover;
      }

      .type {
        color: $light-body-grey;
      }
    }

    &.hidden {
      color: black;

      &:hover {
        color: $primary-color;
      }

      .type {
        color: $light-body-grey;
      }
    }
  }

  .title {
    color: $heading-grey;
    font-weight: 600;
    font-size: 12px;
    line-height: 36px;
    text-transform: uppercase;
  }

  .el-divider--horizontal {
    margin-top: 12px;
    margin-bottom: 12px;
  }
}
</style>
