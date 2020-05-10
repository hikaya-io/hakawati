import HSearch from '../components/search/HSearch.vue'

// This is required for each story
export default { title: 'Search' }

export const hSearch = () => ({
  components: { HSearch },
  template: `
  <div>
  <h-search
    placeholder="Search user name or email"
    clearable
  />
  </div>
  `,
  methods: {}
})
