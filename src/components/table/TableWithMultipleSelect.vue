<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      >
      </el-table-column>
      <el-table-column
        v-for="(value, key) in tableData[0]"
        :property="key"
        :label="key.charAt(0).toUpperCase() + key.slice(1)"
        :key="key"
      >
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <h-button
        label="Toggle selection status of the second row"
        @click.native="toggleSelection([tableData[1]])"
      />
      <h-button
        label="Clear selection"
       @click.native="toggleSelection()"
      />
    </div>
  </div>
</template>

<script>
import HButton from '../button/HButton.vue'

export default {
  name: 'TableWithMultipleSelect',
  components: { HButton },
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
