import VSelect from './VSelect.vue'
import HSelect from '@/components/select/HSelect'
import HDatePicker from '@/components/datepicker/HDatePicker'

export default {
  name: 'vue-tbody',
  components: {
    VSelect,
    HSelect,
    HDatePicker
  },
  props: {
    tbodyHighlight: {
      type: Array,
      required: true
    },
    filteredList: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    currentTable: {
      type: Number,
      required: true
    },
    tbodyData: {
      type: Array,
      required: true
    },
    trad: {
      type: Object,
      required: true
    },
    disableCells: {
      type: Array,
      required: false
    },
    tbodyIndex: {
      type: Boolean,
      required: false
    },
    tbodyCheckbox: {
      type: Boolean,
      required: false
    },
    submenuStatusTbody: {
      type: Boolean,
      required: false
    },
    submenuTbody: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      emptyCell: '',
      eventDrag: false,
      submenuEnableCol: null,
      submenuEnableRow: null,
      vuetableTooltip: {},
      vueTableComment: {}
    }
  },
  computed: {
    headerKeys () {
      if (!this.headers) {
        return []
      }
      return this.headers.map((x) => x.headerKey)
    },
    headersAsObj () {
      return Object.assign({}, ...(this.headers.map(item => ({ [item.headerKey]: item }))))
    }
  },
  methods: {
    checkedRow (row) {
      this.$emit('tbody-checked-row', row)
    },
    handleHoverTriangleComment (header, rowIndex) {
      if (!this.vueTableComment[rowIndex]) {
        this.$set(this.vueTableComment, rowIndex, header)
      }
    },
    handleOutTriangleComment () {
      this.vueTableComment = {}
    },
    handleHoverTooltip (header, rowIndex, colIndex, type) {
      if (this.$refs[`span-${this.currentTable}-${colIndex}-${rowIndex}`] && type !== 'img') {
        const element = this.$refs[`span-${this.currentTable}-${colIndex}-${rowIndex}`][0]

        if (
          !this.vuetableTooltip[rowIndex] &&
          element &&
          element.scrollWidth > element.clientWidth
        ) {
          this.$set(this.vuetableTooltip, rowIndex, header)
        }
      }
    },
    handleOutTooltip () {
      this.vuetableTooltip = {}
      this.handleOutTriangleComment()
    },
    disabledEvent (col, header) {
      if (col.disabled === undefined) {
        return this.disableCells.some((x) => x === header)
      }

      return col.disabled
    },
    escKeyup (col, rowIndex, header, colIndex, type) {
      if (!this.disabledEvent(col, header)) {
        this.$emit('tbody-handle-set-oldvalue', col, rowIndex, header, colIndex, type)
      }
    },
    // select
    tbodyOpenSelect (event, header, col, rowIndex, colIndex) {
      this.$emit('handle-to-open-select', event, header, col, rowIndex, colIndex)
    },
    tbodySelectChange (event, header, col, option, rowIndex, colIndex) {
      this.$emit('tbody-select-change', event, header, col, option, rowIndex, colIndex)
    },
    tbodySearchInputSelect (event, header, col, searchInput, rowIndex, colIndex) {
      this.$emit(
        'tbody-handle-search-input-select',
        event,
        searchInput,
        col,
        header,
        rowIndex,
        colIndex
      )
    },
    handleSelectMultipleCell (event, header, rowIndex, colIndex, type) {
      this.$emit('tbody-select-multiple-cell', event, header, rowIndex, colIndex, type)
    },
    handleDownDragToFill (event, header, col, rowIndex, colIndex) {
      if (!this.disabledEvent(col, header)) {
        this.eventDrag = true
        this.$emit('tbody-down-dragtofill', event, header, col, rowIndex, colIndex)
      }
    },
    handleMoveDragToFill (event, header, col, rowIndex, colIndex) {
      if (this.eventDrag && !this.disabledEvent(col, header)) {
        this.$emit('tbody-move-dragtofill', event, header, col, rowIndex, colIndex)
      }
    },
    handleUpDragToFill (event, header, col, rowIndex, colIndex, type) {
      if (this.eventDrag && !this.disabledEvent(col, header)) {
        this.eventDrag = false
        this.$emit('tbody-up-dragtofill', event, header, rowIndex, colIndex, type)
      }
    },
    handleClickTd (event, col, header, rowIndex, colIndex, type) {
      // this.searchInput = "";
      this.$emit('tbody-td-click', event, col, header, rowIndex, colIndex, type)
    },
    handleDoubleClickTd (event, header, col, rowIndex, colIndex) {
      if (!this.disabledEvent(col, header)) {
        if (this.headersAsObj[header].type === 'date') {
          this.$refs[`datepicker-${this.currentTable}-${colIndex}-${rowIndex}`][0].$children[0].focus()
        }
        this.$emit('tbody-td-double-click', event, header, col, rowIndex, colIndex)
      }
    },
    handleContextMenuTd (event, header, rowIndex, colIndex, type) {
      this.submenuEnableCol = colIndex
      this.submenuEnableRow = rowIndex
      // this.$emit('submenu-enable', 'tbody')
      // this.$emit('tbody-td-context-menu', event, header, rowIndex, colIndex, type)
      // this.$emit('handle-to-calculate-position', event, rowIndex, colIndex, 'contextMenu')
    },
    inputHandleChange (event, header, rowIndex, colIndex) {
      this.$emit('tbody-input-change', event, header, rowIndex, colIndex)
    },
    handleClickSubmenu (event, header, rowIndex, colIndex, type, submenuFunction) {
      this.$emit(
        'tbody-submenu-click-callback',
        event,
        header,
        rowIndex,
        colIndex,
        type,
        submenuFunction
      )
    },
    authorizeIntegerValueOnly (e) {
      const k = e.which

      if (k !== 8 && k !== 13 && k !== 27 && e.key !== '0' && !Number(e.key)) return true

      return false
    },
    authorizeDecimalValueOnly (e) {
      const k = e.which

      if (k !== 8 && k !== 13 && k !== 27 && e.key !== '0' && (e.key !== '.' && !Number(e.key))) return true

      return false
    },
    inputHandleKeydown (event, header, rowIndex, colIndex, el) {
      if (this.tbodyData[rowIndex][header].type === 'integer') {
        if (this.authorizeIntegerValueOnly(event)) {
          event.preventDefault()
        }
      }

      if (this.tbodyData[rowIndex][header].type === 'decimal') {
        if (this.authorizeDecimalValueOnly(event)) {
          event.preventDefault()
        }

        // Prevent multiple decimals
        if (event.key === '.' && String(this.tbodyData[rowIndex][header].value).indexOf('.') !== -1) {
          event.preventDefault()
        }
      }

      this.$emit('tbody-input-keydown', event, header, rowIndex, colIndex)
    },
    formatValue (type, value) {
      if (type === 'decimal') {
        const num = Number(value)
        return num.toFixed(2)
      }
      if (type === 'percentage') {
        return `${value}%`
      }
      return value
    },
    getLabelFromValue (value, options) {
      options = options || []
      for (const option of options) {
        if (option.value === value) {
          return option.label
        }
      }
      return value
    },
  }
}
