<template>
  <div>
    <el-button @click="resetDateFilter">reset date filter</el-button>
    <el-button @click="clearFilter">reset all filters</el-button>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="(value, key) in noTagColumn"
        :key="key"
        :prop="key"
        :label="key.charAt(0).toUpperCase() + key.slice(1)"
        sortable
        :width="(key.length * 1.2) * 30"
        :column-key="key"
        :filters="filterData[key] !== undefined ? filterData[key] : []"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        v-if="tagColumn !== undefined && tagColumn.length !== 0"
        prop="tag"
        label="Tag"
        width="100"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === tagColumn ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['tableData', 'filterData'],
  data () {
    return {
      name: 'TableWithFilter'
    }
  },
  created () {
    this.tagColumn = this.tableData[0].tag
    this.noTagColumn = { ...this.tableData[0] }
    delete this.noTagColumn.tag
  },
  methods: {
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
    }
  }
}
</script>
