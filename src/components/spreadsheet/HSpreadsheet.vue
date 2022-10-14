<template>
  <div
    :ref="`${customTable}-vueTable`"
    :style="styleWrapVueTable"
    class="vue-spreadsheet"
    @scroll="scrollFunction"
  >
    <slot name="header"></slot>

    <table class="vue_table" :ref="`${customTable}-table`">
      <vue-thead
        :ref="`${customTable}-vueThead`"
        :disable-sort-thead="disableSortThead"
        :header-top="headerTop"
        :headers="headers"
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
        :headers="headers"
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
        @tbody-input-change="handleTbodyInputChange"
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

import Fuse from 'fuse.js'
import VueThead from './components/Thead.vue'
import VueTbody from './components/TBody/TBody.vue'

const lodashClonedeep = require('lodash.clonedeep')

export default {
  name: 'HSpreadsheet',
  components: {
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
    undo
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
      submenuStatusThead: false
    }
  },
  computed: {
    checkedRows () {
      return this.data.filter((x) => x.checked)
    },
    colHeaderWidths () {
      return this.headers.map((x) => parseInt(x.style.width, 10))
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
      return this.headers.map((header) => header.headerKey)
    }
  },
  watch: {
    data () {
      this.createdCell()
    },
    headers () {
      this.createdCell()
    }
  },
  created () {
    this.customTable = Date.now()
  },
  mounted () {
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
      if (header === 'dropdown' && !this.data[rowIndex][this.headers[colIndex].headerKey].search) {
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
      const currentSelect = this.$refs[`${this.customTable}-vueTbody`].$refs[
        `vsSelect-${this.customTable}-${colIndex}-${rowIndex}`
      ][0].$refs[`dropdown-${this.customTable}-${colIndex}-${rowIndex}`]
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
          if (!tbody[header]) {
            const data = lodashClonedeep(this.customOptions.newData)

            this.$set(this.data[rowIndex], header, data)
          } else if (!tbody[header].type && 'value' in tbody[header]) {
            const data = lodashClonedeep(this.customOptions.newData)
            const copyTbody = lodashClonedeep(tbody[header])

            copyTbody.type = data.type
            this.$set(this.data[rowIndex], header, copyTbody)
          }

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
    addNewRow () {
      const row = {}
      this.headers.forEach(header => {
        row[header.headerKey] = {
          type: header.type,
          value: null
        }
      })
      this.$emit('on-new-row', row)
    }
  }
}
</script>

<style>
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
  --rectangleHeight: 40px;
  --rectangleLeft: 0;
  --rectangleRight: 0;
  --rectangleTop: 0;
  --rectangleWidth: 100%;

  /* drag Header */
  --dragHeaderHeight: 100%;
}
.vue-spreadsheet table {
  table-layout: fixed;
  margin: 0;
  border-spacing: 0;
  border-left: 2px solid #E5E7ED;
  border-right: 2px solid #E5E7ED;
  border-bottom: 2px solid #E5E7ED;
}
.vue-spreadsheet table th {
  color: #000;
  font-weight: normal;
}
.vue-spreadsheet table td,
.vue-spreadsheet table th {
  margin: 0;
}
.vue-spreadsheet .add_new_row {
  cursor: pointer;
  width: 58px;
  height: 48px;
  padding: 0;
  background: white;
  box-sizing: border-box;
  border-top: none;
  border-bottom: 2px solid #E5E7ED;
  border-left: 2px solid #E5E7ED;
  border-right: 2px solid #E5E7ED;
}

.vue-spreadsheet .add_new_row:hover {
  background: #d5ddec;
}
</style>