<template>
  <div class="h-grid">
    <div class="wrapper" :style="wrapperStyle">
      <template v-for="(row, i) in items">
        <component :style="style" :key="`${i}-${j}`" v-for="(col, j) in row" :is="item" v-bind="items[i][j]"></component>
      </template>
    </div>

  </div>
</template>
<script>
export default {
  name: 'HGrid',
  props: {
    item: {
      type: Object,
      required: true
    },
    data: {
      type: Array,
      default: () => []
    },
    events: {
      type: Array,
      default: () => []
    },
    cols: {
      type: Number,
      default: 3
    },
    spacing: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      rows: 0,
      items: [],
      eventItems: []
    }
  },
  created () {
    if (this.cols < 1) {
      this.cols = 1
    }

    this.rows = Math.ceil(this.data / this.cols)
    const temp = Array.from(this.data)
    while (temp.length) {
      this.items.push(temp.splice(0, this.cols))
    }
  },
  computed: {
    style () {
      const width = (100 / this.cols).toFixed(2)
      return { flex: `0 1 calc(${width}% - ${this.spacing * 2}px)`, margin: `${this.spacing}px ${this.spacing}px` }
    },
    wrapperStyle () {
      return {
        width: '100%',
        display: 'flex',
        'flex-wrap': 'wrap',
        margin: `-${this.spacing}px`
      }
    }
  }
}
</script>
<style lang="scss">
  .h-grid {
    overflow: hidden;
    padding: 20px;
  }
</style>
