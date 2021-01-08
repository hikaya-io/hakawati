import HFilter from '../components/filter/HFilter.vue'

// This is required for each story
export default {
  title: 'Filter'
}

export const filter = () => ({
  components: {
    HFilter
  },
  data () {
    return {
      filters: [{
        title: 'choice',
        choices: ['choice 1', 'choice 2']
      }],
      selected: []
    }
  },
  template: `
  <div>
    <h-filter :filters="filters" @change="selectedChoice"/>
  </div>
  `,
  methods: {
    // append selection of filter to the array and remove if exists
    selectedChoice (c) {
      var exists = this.selected.includes(c)
      if (!exists && c) {
        this.selected.push(c)
      } else {
        this.getIndex(c)
      }
    },
    // remove item from list
    getIndex (c) {
      for (let i = 0; i < this.selected.length; i++) {
        if (this.selected[i] === c) {
          this.selected.splice(i, 1)
          i--
        }
      }
    }
  }
})
