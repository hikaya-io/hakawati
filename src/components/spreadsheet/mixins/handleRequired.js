export const handleRequired = {
  data () {
    return {
      _requiredHeaders: [],
      highlightedCells: []
    }
  },
  methods: {
    setRequiredHeaders (headers) {
      this._requiredHeaders = headers
    },
    updateHighlightedCells (data) {
      if (this._requiredHeaders.length) {
        this.highlightedCells = []
        data.forEach((row, rowIndex) => {
          Object.keys(row).forEach(column => {
            if (this._requiredHeaders.includes(column)) {
              if (row[column].value === null || row[column].value === '' || (Array.isArray(row[column].value) && !row[column].value.length)) {
                this.highlightedCells.push({ rowIndex, header: column })
              }
            }
          })
        })
      }
    }
  }
}
