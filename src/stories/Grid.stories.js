import HGrid from '../components/grid/HGrid.vue'
import Item from '../components/grid/Item.vue'
import ComplexItem from '../components/grid/ComplexItem.vue'

// This is required for each story
export default { title: 'Grid' }

export const grid = () => ({
  components: { HGrid, Item },
  template: `
  <div>
    <h-grid :item="item" :data="data" :spacing="10" />
  </div>
  `,
  data: function () {
    return {
      item: Item,
      data: [
        { title: 'Title 1', description: 'This is description 1' },
        { title: 'Title 2', description: 'This is description 2' },
        { title: 'Title 3', description: 'This is description 3' },
        { title: 'Title 4', description: 'This is description 4' },
        { title: 'Title 5', description: 'This is description 5' }
      ]
    }
  },
  methods: {}
})

export const gridComplex = () => ({
  components: { HGrid, ComplexItem },
  template: `
  <div>
    <h-grid :item="item" :data="data" :spacing="10" :cols="5" />
  </div>
  `,
  data: function () {
    return {
      item: ComplexItem,
      data: [
        { title: 'Title 1', description: 'This is description 1' },
        { title: 'Title 2', description: 'This is description 2' },
        { title: 'Title 3', description: 'This is description 3' },
        { title: 'Title 4', description: 'This is description 4' },
        { title: 'Title 5', description: 'This is description 5 with a very long description about description 5' }
      ]
    }
  },
  methods: {}
})

export const scrollable = () => ({
  components: { HGrid, Item },
  template: `
  <div>
    <h-grid :item="item" :data="data" :spacing="10" style="height: 200px" />
  </div>
  `,
  data: function () {
    return {
      item: Item,
      data: [
        { title: 'Title 1', description: 'This is description 1' },
        { title: 'Title 2', description: 'This is description 2' },
        { title: 'Title 3', description: 'This is description 3' },
        { title: 'Title 4', description: 'This is description 4' },
        { title: 'Title 5', description: 'This is description 5' },
        { title: 'Title 6', description: 'This is description 6' },
        { title: 'Title 7', description: 'This is description 7' },
        { title: 'Title 8', description: 'This is description 8' },
        { title: 'Title 9', description: 'This is description 9' },
        { title: 'Title 10', description: 'This is description 10' }
      ]
    }
  },
  methods: {}
})
